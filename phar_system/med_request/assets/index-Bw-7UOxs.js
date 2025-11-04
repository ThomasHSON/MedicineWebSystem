function mp(e, t) {
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
function hp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var cc = { exports: {} },
  Ll = {},
  dc = { exports: {} },
  A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fo = Symbol.for("react.element"),
  gp = Symbol.for("react.portal"),
  yp = Symbol.for("react.fragment"),
  vp = Symbol.for("react.strict_mode"),
  wp = Symbol.for("react.profiler"),
  xp = Symbol.for("react.provider"),
  Sp = Symbol.for("react.context"),
  kp = Symbol.for("react.forward_ref"),
  Ep = Symbol.for("react.suspense"),
  bp = Symbol.for("react.memo"),
  Np = Symbol.for("react.lazy"),
  Ha = Symbol.iterator;
function Cp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ha && e[Ha]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var fc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  pc = Object.assign,
  mc = {};
function cr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = mc),
    (this.updater = n || fc);
}
cr.prototype.isReactComponent = {};
cr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
cr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function hc() {}
hc.prototype = cr.prototype;
function Fs(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = mc),
    (this.updater = n || fc);
}
var zs = (Fs.prototype = new hc());
zs.constructor = Fs;
pc(zs, cr.prototype);
zs.isPureReactComponent = !0;
var Wa = Array.isArray,
  gc = Object.prototype.hasOwnProperty,
  Is = { current: null },
  yc = { key: !0, ref: !0, __self: !0, __source: !0 };
function vc(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      gc.call(t, r) && !yc.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: fo,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: Is.current,
  };
}
function Pp(e, t) {
  return {
    $$typeof: fo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function As(e) {
  return typeof e == "object" && e !== null && e.$$typeof === fo;
}
function Tp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Qa = /\/+/g;
function ti(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Tp("" + e.key)
    : t.toString(36);
}
function Wo(e, t, n, r, o) {
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
          case fo:
          case gp:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + ti(i, 0) : r),
      Wa(o)
        ? ((n = ""),
          e != null && (n = e.replace(Qa, "$&/") + "/"),
          Wo(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (As(o) &&
            (o = Pp(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Qa, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Wa(e)))
    for (var s = 0; s < e.length; s++) {
      l = e[s];
      var a = r + ti(l, s);
      i += Wo(l, t, n, a, o);
    }
  else if (((a = Cp(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(l = e.next()).done; )
      (l = l.value), (a = r + ti(l, s++)), (i += Wo(l, t, n, a, o));
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
function bo(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Wo(e, r, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function jp(e) {
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
  Qo = { transition: null },
  Op = {
    ReactCurrentDispatcher: Le,
    ReactCurrentBatchConfig: Qo,
    ReactCurrentOwner: Is,
  };
function wc() {
  throw Error("act(...) is not supported in production builds of React.");
}
A.Children = {
  map: bo,
  forEach: function (e, t, n) {
    bo(
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
      bo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      bo(e, function (t) {
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
A.Component = cr;
A.Fragment = yp;
A.Profiler = wp;
A.PureComponent = Fs;
A.StrictMode = vp;
A.Suspense = Ep;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Op;
A.act = wc;
A.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = pc({}, e.props),
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
      gc.call(t, a) &&
        !yc.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: fo, type: e.type, key: o, ref: l, props: r, _owner: i };
};
A.createContext = function (e) {
  return (
    (e = {
      $$typeof: Sp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: xp, _context: e }),
    (e.Consumer = e)
  );
};
A.createElement = vc;
A.createFactory = function (e) {
  var t = vc.bind(null, e);
  return (t.type = e), t;
};
A.createRef = function () {
  return { current: null };
};
A.forwardRef = function (e) {
  return { $$typeof: kp, render: e };
};
A.isValidElement = As;
A.lazy = function (e) {
  return { $$typeof: Np, _payload: { _status: -1, _result: e }, _init: jp };
};
A.memo = function (e, t) {
  return { $$typeof: bp, type: e, compare: t === void 0 ? null : t };
};
A.startTransition = function (e) {
  var t = Qo.transition;
  Qo.transition = {};
  try {
    e();
  } finally {
    Qo.transition = t;
  }
};
A.unstable_act = wc;
A.useCallback = function (e, t) {
  return Le.current.useCallback(e, t);
};
A.useContext = function (e) {
  return Le.current.useContext(e);
};
A.useDebugValue = function () {};
A.useDeferredValue = function (e) {
  return Le.current.useDeferredValue(e);
};
A.useEffect = function (e, t) {
  return Le.current.useEffect(e, t);
};
A.useId = function () {
  return Le.current.useId();
};
A.useImperativeHandle = function (e, t, n) {
  return Le.current.useImperativeHandle(e, t, n);
};
A.useInsertionEffect = function (e, t) {
  return Le.current.useInsertionEffect(e, t);
};
A.useLayoutEffect = function (e, t) {
  return Le.current.useLayoutEffect(e, t);
};
A.useMemo = function (e, t) {
  return Le.current.useMemo(e, t);
};
A.useReducer = function (e, t, n) {
  return Le.current.useReducer(e, t, n);
};
A.useRef = function (e) {
  return Le.current.useRef(e);
};
A.useState = function (e) {
  return Le.current.useState(e);
};
A.useSyncExternalStore = function (e, t, n) {
  return Le.current.useSyncExternalStore(e, t, n);
};
A.useTransition = function () {
  return Le.current.useTransition();
};
A.version = "18.3.1";
dc.exports = A;
var v = dc.exports;
const H = hp(v),
  Vr = mp({ __proto__: null, default: H }, [v]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mp = v,
  Lp = Symbol.for("react.element"),
  _p = Symbol.for("react.fragment"),
  Dp = Object.prototype.hasOwnProperty,
  $p = Mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Rp = { key: !0, ref: !0, __self: !0, __source: !0 };
function xc(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Dp.call(t, r) && !Rp.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Lp,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: $p.current,
  };
}
Ll.Fragment = _p;
Ll.jsx = xc;
Ll.jsxs = xc;
cc.exports = Ll;
var c = cc.exports,
  Sc = { exports: {} },
  Ye = {},
  kc = { exports: {} },
  Ec = {};
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
      e: for (var R = 0, B = j.length, vt = B >>> 1; R < vt; ) {
        var ae = 2 * (R + 1) - 1,
          Ke = j[ae],
          it = ae + 1,
          $e = j[it];
        if (0 > o(Ke, $))
          it < B && 0 > o($e, Ke)
            ? ((j[R] = $e), (j[it] = $), (R = it))
            : ((j[R] = Ke), (j[ae] = $), (R = ae));
        else if (it < B && 0 > o($e, $)) (j[R] = $e), (j[it] = $), (R = it);
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
    y = !1,
    w = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
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
    if (((w = !1), h(j), !y))
      if (n(a) !== null) (y = !0), De(N);
      else {
        var D = n(u);
        D !== null && pe(k, D.startTime - j);
      }
  }
  function N(j, D) {
    (y = !1), w && ((w = !1), m(M), (M = -1)), (x = !0);
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
      if (p !== null) var vt = !0;
      else {
        var ae = n(u);
        ae !== null && pe(k, ae.startTime - D), (vt = !1);
      }
      return vt;
    } finally {
      (p = null), (g = $), (x = !1);
    }
  }
  var C = !1,
    P = null,
    M = -1,
    I = 5,
    _ = -1;
  function re() {
    return !(e.unstable_now() - _ < I);
  }
  function z() {
    if (P !== null) {
      var j = e.unstable_now();
      _ = j;
      var D = !0;
      try {
        D = P(!0, j);
      } finally {
        D ? ye() : ((C = !1), (P = null));
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
      E(z, 0);
    };
  function De(j) {
    (P = j), C || ((C = !0), ye());
  }
  function pe(j, D) {
    M = E(function () {
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
      y || x || ((y = !0), De(N));
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
          : ((j.sortIndex = B), t(a, j), y || x || ((y = !0), De(N))),
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
})(Ec);
kc.exports = Ec;
var Fp = kc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zp = v,
  Ve = Fp;
function b(e) {
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
var bc = new Set(),
  Yr = {};
function Mn(e, t) {
  rr(e, t), rr(e + "Capture", t);
}
function rr(e, t) {
  for (Yr[e] = t, e = 0; e < t.length; e++) bc.add(t[e]);
}
var _t = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  $i = Object.prototype.hasOwnProperty,
  Ip =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ba = {},
  Va = {};
function Ap(e) {
  return $i.call(Va, e)
    ? !0
    : $i.call(Ba, e)
    ? !1
    : Ip.test(e)
    ? (Va[e] = !0)
    : ((Ba[e] = !0), !1);
}
function Up(e, t, n, r) {
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
function Hp(e, t, n, r) {
  if (t === null || typeof t > "u" || Up(e, t, n, r)) return !0;
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
function _e(e, t, n, r, o, l, i) {
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
    xe[e] = new _e(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  xe[t] = new _e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  xe[e] = new _e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  xe[e] = new _e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    xe[e] = new _e(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  xe[e] = new _e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  xe[e] = new _e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  xe[e] = new _e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  xe[e] = new _e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Us = /[\-:]([a-z])/g;
function Hs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Us, Hs);
    xe[t] = new _e(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Us, Hs);
    xe[t] = new _e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Us, Hs);
  xe[t] = new _e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  xe[e] = new _e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
xe.xlinkHref = new _e(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  xe[e] = new _e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ws(e, t, n, r) {
  var o = xe.hasOwnProperty(t) ? xe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Hp(t, n, o, r) && (n = null),
    r || o === null
      ? Ap(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Ft = zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  No = Symbol.for("react.element"),
  Rn = Symbol.for("react.portal"),
  Fn = Symbol.for("react.fragment"),
  Qs = Symbol.for("react.strict_mode"),
  Ri = Symbol.for("react.profiler"),
  Nc = Symbol.for("react.provider"),
  Cc = Symbol.for("react.context"),
  Bs = Symbol.for("react.forward_ref"),
  Fi = Symbol.for("react.suspense"),
  zi = Symbol.for("react.suspense_list"),
  Vs = Symbol.for("react.memo"),
  Wt = Symbol.for("react.lazy"),
  Pc = Symbol.for("react.offscreen"),
  Ya = Symbol.iterator;
function yr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ya && e[Ya]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ie = Object.assign,
  ni;
function Mr(e) {
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
  return (e = e ? e.displayName || e.name : "") ? Mr(e) : "";
}
function Wp(e) {
  switch (e.tag) {
    case 5:
      return Mr(e.type);
    case 16:
      return Mr("Lazy");
    case 13:
      return Mr("Suspense");
    case 19:
      return Mr("SuspenseList");
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
    case Fn:
      return "Fragment";
    case Rn:
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
      case Cc:
        return (e.displayName || "Context") + ".Consumer";
      case Nc:
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
      case Wt:
        (t = e._payload), (e = e._init);
        try {
          return Ii(e(t));
        } catch {}
    }
  return null;
}
function Qp(e) {
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
function Tc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Bp(e) {
  var t = Tc(e) ? "checked" : "value",
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
function Co(e) {
  e._valueTracker || (e._valueTracker = Bp(e));
}
function jc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Tc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function nl(e) {
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
function qa(e, t) {
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
function Oc(e, t) {
  (t = t.checked), t != null && Ws(e, "checked", t, !1);
}
function Ui(e, t) {
  Oc(e, t);
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
    ? Hi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Hi(e, t.type, sn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ga(e, t, n) {
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
  (t !== "number" || nl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Lr = Array.isArray;
function qn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + sn(n), t = null, o = 0; o < e.length; o++) {
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
  if (t.dangerouslySetInnerHTML != null) throw Error(b(91));
  return ie({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ka(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(b(92));
      if (Lr(n)) {
        if (1 < n.length) throw Error(b(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: sn(n) };
}
function Mc(e, t) {
  var n = sn(t.value),
    r = sn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Xa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Lc(e) {
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
    ? Lc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Po,
  _c = (function (e) {
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
        Po = Po || document.createElement("div"),
          Po.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Po.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function qr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Rr = {
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
  Vp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Rr).forEach(function (e) {
  Vp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Rr[t] = Rr[e]);
  });
});
function Dc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Rr.hasOwnProperty(e) && Rr[e])
    ? ("" + t).trim()
    : t + "px";
}
function $c(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Dc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Yp = ie(
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
    if (Yp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(b(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(b(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(b(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(b(62));
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
  Gn = null,
  Kn = null;
function Ja(e) {
  if ((e = ho(e))) {
    if (typeof qi != "function") throw Error(b(280));
    var t = e.stateNode;
    t && ((t = Fl(t)), qi(e.stateNode, e.type, t));
  }
}
function Rc(e) {
  Gn ? (Kn ? Kn.push(e) : (Kn = [e])) : (Gn = e);
}
function Fc() {
  if (Gn) {
    var e = Gn,
      t = Kn;
    if (((Kn = Gn = null), Ja(e), t)) for (e = 0; e < t.length; e++) Ja(t[e]);
  }
}
function zc(e, t) {
  return e(t);
}
function Ic() {}
var li = !1;
function Ac(e, t, n) {
  if (li) return e(t, n);
  li = !0;
  try {
    return zc(e, t, n);
  } finally {
    (li = !1), (Gn !== null || Kn !== null) && (Ic(), Fc());
  }
}
function Gr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Fl(n);
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
  if (n && typeof n != "function") throw Error(b(231, t, typeof n));
  return n;
}
var Gi = !1;
if (_t)
  try {
    var vr = {};
    Object.defineProperty(vr, "passive", {
      get: function () {
        Gi = !0;
      },
    }),
      window.addEventListener("test", vr, vr),
      window.removeEventListener("test", vr, vr);
  } catch {
    Gi = !1;
  }
function qp(e, t, n, r, o, l, i, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Fr = !1,
  rl = null,
  ol = !1,
  Ki = null,
  Gp = {
    onError: function (e) {
      (Fr = !0), (rl = e);
    },
  };
function Kp(e, t, n, r, o, l, i, s, a) {
  (Fr = !1), (rl = null), qp.apply(Gp, arguments);
}
function Xp(e, t, n, r, o, l, i, s, a) {
  if ((Kp.apply(this, arguments), Fr)) {
    if (Fr) {
      var u = rl;
      (Fr = !1), (rl = null);
    } else throw Error(b(198));
    ol || ((ol = !0), (Ki = u));
  }
}
function Ln(e) {
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
function Uc(e) {
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
function Za(e) {
  if (Ln(e) !== e) throw Error(b(188));
}
function Jp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ln(e)), t === null)) throw Error(b(188));
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
        if (l === n) return Za(o), e;
        if (l === r) return Za(o), t;
        l = l.sibling;
      }
      throw Error(b(188));
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
        if (!i) throw Error(b(189));
      }
    }
    if (n.alternate !== r) throw Error(b(190));
  }
  if (n.tag !== 3) throw Error(b(188));
  return n.stateNode.current === n ? e : t;
}
function Hc(e) {
  return (e = Jp(e)), e !== null ? Wc(e) : null;
}
function Wc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Wc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Qc = Ve.unstable_scheduleCallback,
  eu = Ve.unstable_cancelCallback,
  Zp = Ve.unstable_shouldYield,
  em = Ve.unstable_requestPaint,
  ue = Ve.unstable_now,
  tm = Ve.unstable_getCurrentPriorityLevel,
  qs = Ve.unstable_ImmediatePriority,
  Bc = Ve.unstable_UserBlockingPriority,
  ll = Ve.unstable_NormalPriority,
  nm = Ve.unstable_LowPriority,
  Vc = Ve.unstable_IdlePriority,
  _l = null,
  kt = null;
function rm(e) {
  if (kt && typeof kt.onCommitFiberRoot == "function")
    try {
      kt.onCommitFiberRoot(_l, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var dt = Math.clz32 ? Math.clz32 : im,
  om = Math.log,
  lm = Math.LN2;
function im(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((om(e) / lm) | 0)) | 0;
}
var To = 64,
  jo = 4194304;
function _r(e) {
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
function il(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~o;
    s !== 0 ? (r = _r(s)) : ((l &= i), l !== 0 && (r = _r(l)));
  } else (i = n & ~o), i !== 0 ? (r = _r(i)) : l !== 0 && (r = _r(l));
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
      (n = 31 - dt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function sm(e, t) {
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
function am(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var i = 31 - dt(l),
      s = 1 << i,
      a = o[i];
    a === -1
      ? (!(s & n) || s & r) && (o[i] = sm(s, t))
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
function Yc() {
  var e = To;
  return (To <<= 1), !(To & 4194240) && (To = 64), e;
}
function ii(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function po(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - dt(t)),
    (e[t] = n);
}
function um(e, t) {
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
    var o = 31 - dt(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function Gs(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - dt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var Y = 0;
function qc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Gc,
  Ks,
  Kc,
  Xc,
  Jc,
  Ji = !1,
  Oo = [],
  Jt = null,
  Zt = null,
  en = null,
  Kr = new Map(),
  Xr = new Map(),
  Vt = [],
  cm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function tu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Jt = null;
      break;
    case "dragenter":
    case "dragleave":
      Zt = null;
      break;
    case "mouseover":
    case "mouseout":
      en = null;
      break;
    case "pointerover":
    case "pointerout":
      Kr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Xr.delete(t.pointerId);
  }
}
function wr(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = ho(t)), t !== null && Ks(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function dm(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Jt = wr(Jt, e, t, n, r, o)), !0;
    case "dragenter":
      return (Zt = wr(Zt, e, t, n, r, o)), !0;
    case "mouseover":
      return (en = wr(en, e, t, n, r, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return Kr.set(l, wr(Kr.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), Xr.set(l, wr(Xr.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Zc(e) {
  var t = yn(e.target);
  if (t !== null) {
    var n = Ln(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Uc(n)), t !== null)) {
          (e.blockedOn = t),
            Jc(e.priority, function () {
              Kc(n);
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
function Bo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Zi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Yi = r), n.target.dispatchEvent(r), (Yi = null);
    } else return (t = ho(n)), t !== null && Ks(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function nu(e, t, n) {
  Bo(e) && n.delete(t);
}
function fm() {
  (Ji = !1),
    Jt !== null && Bo(Jt) && (Jt = null),
    Zt !== null && Bo(Zt) && (Zt = null),
    en !== null && Bo(en) && (en = null),
    Kr.forEach(nu),
    Xr.forEach(nu);
}
function xr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ji ||
      ((Ji = !0),
      Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority, fm)));
}
function Jr(e) {
  function t(o) {
    return xr(o, e);
  }
  if (0 < Oo.length) {
    xr(Oo[0], e);
    for (var n = 1; n < Oo.length; n++) {
      var r = Oo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Jt !== null && xr(Jt, e),
      Zt !== null && xr(Zt, e),
      en !== null && xr(en, e),
      Kr.forEach(t),
      Xr.forEach(t),
      n = 0;
    n < Vt.length;
    n++
  )
    (r = Vt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Vt.length && ((n = Vt[0]), n.blockedOn === null); )
    Zc(n), n.blockedOn === null && Vt.shift();
}
var Xn = Ft.ReactCurrentBatchConfig,
  sl = !0;
function pm(e, t, n, r) {
  var o = Y,
    l = Xn.transition;
  Xn.transition = null;
  try {
    (Y = 1), Xs(e, t, n, r);
  } finally {
    (Y = o), (Xn.transition = l);
  }
}
function mm(e, t, n, r) {
  var o = Y,
    l = Xn.transition;
  Xn.transition = null;
  try {
    (Y = 4), Xs(e, t, n, r);
  } finally {
    (Y = o), (Xn.transition = l);
  }
}
function Xs(e, t, n, r) {
  if (sl) {
    var o = Zi(e, t, n, r);
    if (o === null) gi(e, t, r, al, n), tu(e, r);
    else if (dm(o, e, t, n, r)) r.stopPropagation();
    else if ((tu(e, r), t & 4 && -1 < cm.indexOf(e))) {
      for (; o !== null; ) {
        var l = ho(o);
        if (
          (l !== null && Gc(l),
          (l = Zi(e, t, n, r)),
          l === null && gi(e, t, r, al, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else gi(e, t, r, null, n);
  }
}
var al = null;
function Zi(e, t, n, r) {
  if (((al = null), (e = Ys(r)), (e = yn(e)), e !== null))
    if (((t = Ln(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Uc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (al = e), null;
}
function ed(e) {
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
      switch (tm()) {
        case qs:
          return 1;
        case Bc:
          return 4;
        case ll:
        case nm:
          return 16;
        case Vc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Gt = null,
  Js = null,
  Vo = null;
function td() {
  if (Vo) return Vo;
  var e,
    t = Js,
    n = t.length,
    r,
    o = "value" in Gt ? Gt.value : Gt.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return (Vo = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Yo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Mo() {
  return !0;
}
function ru() {
  return !1;
}
function qe(e) {
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
        ? Mo
        : ru),
      (this.isPropagationStopped = ru),
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
          (this.isDefaultPrevented = Mo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Mo));
      },
      persist: function () {},
      isPersistent: Mo,
    }),
    t
  );
}
var dr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Zs = qe(dr),
  mo = ie({}, dr, { view: 0, detail: 0 }),
  hm = qe(mo),
  si,
  ai,
  Sr,
  Dl = ie({}, mo, {
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
        : (e !== Sr &&
            (Sr && e.type === "mousemove"
              ? ((si = e.screenX - Sr.screenX), (ai = e.screenY - Sr.screenY))
              : (ai = si = 0),
            (Sr = e)),
          si);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ai;
    },
  }),
  ou = qe(Dl),
  gm = ie({}, Dl, { dataTransfer: 0 }),
  ym = qe(gm),
  vm = ie({}, mo, { relatedTarget: 0 }),
  ui = qe(vm),
  wm = ie({}, dr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  xm = qe(wm),
  Sm = ie({}, dr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  km = qe(Sm),
  Em = ie({}, dr, { data: 0 }),
  lu = qe(Em),
  bm = {
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
  Nm = {
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
  Cm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Pm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Cm[e]) ? !!t[e] : !1;
}
function ea() {
  return Pm;
}
var Tm = ie({}, mo, {
    key: function (e) {
      if (e.key) {
        var t = bm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Yo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Nm[e.keyCode] || "Unidentified"
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
      return e.type === "keypress" ? Yo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Yo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  jm = qe(Tm),
  Om = ie({}, Dl, {
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
  iu = qe(Om),
  Mm = ie({}, mo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ea,
  }),
  Lm = qe(Mm),
  _m = ie({}, dr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Dm = qe(_m),
  $m = ie({}, Dl, {
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
  Rm = qe($m),
  Fm = [9, 13, 27, 32],
  ta = _t && "CompositionEvent" in window,
  zr = null;
_t && "documentMode" in document && (zr = document.documentMode);
var zm = _t && "TextEvent" in window && !zr,
  nd = _t && (!ta || (zr && 8 < zr && 11 >= zr)),
  su = " ",
  au = !1;
function rd(e, t) {
  switch (e) {
    case "keyup":
      return Fm.indexOf(t.keyCode) !== -1;
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
function od(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var zn = !1;
function Im(e, t) {
  switch (e) {
    case "compositionend":
      return od(t);
    case "keypress":
      return t.which !== 32 ? null : ((au = !0), su);
    case "textInput":
      return (e = t.data), e === su && au ? null : e;
    default:
      return null;
  }
}
function Am(e, t) {
  if (zn)
    return e === "compositionend" || (!ta && rd(e, t))
      ? ((e = td()), (Vo = Js = Gt = null), (zn = !1), e)
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
      return nd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Um = {
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
function uu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Um[e.type] : t === "textarea";
}
function ld(e, t, n, r) {
  Rc(r),
    (t = ul(t, "onChange")),
    0 < t.length &&
      ((n = new Zs("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ir = null,
  Zr = null;
function Hm(e) {
  gd(e, 0);
}
function $l(e) {
  var t = Un(e);
  if (jc(t)) return e;
}
function Wm(e, t) {
  if (e === "change") return t;
}
var id = !1;
if (_t) {
  var ci;
  if (_t) {
    var di = "oninput" in document;
    if (!di) {
      var cu = document.createElement("div");
      cu.setAttribute("oninput", "return;"),
        (di = typeof cu.oninput == "function");
    }
    ci = di;
  } else ci = !1;
  id = ci && (!document.documentMode || 9 < document.documentMode);
}
function du() {
  Ir && (Ir.detachEvent("onpropertychange", sd), (Zr = Ir = null));
}
function sd(e) {
  if (e.propertyName === "value" && $l(Zr)) {
    var t = [];
    ld(t, Zr, e, Ys(e)), Ac(Hm, t);
  }
}
function Qm(e, t, n) {
  e === "focusin"
    ? (du(), (Ir = t), (Zr = n), Ir.attachEvent("onpropertychange", sd))
    : e === "focusout" && du();
}
function Bm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return $l(Zr);
}
function Vm(e, t) {
  if (e === "click") return $l(t);
}
function Ym(e, t) {
  if (e === "input" || e === "change") return $l(t);
}
function qm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var pt = typeof Object.is == "function" ? Object.is : qm;
function eo(e, t) {
  if (pt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!$i.call(t, o) || !pt(e[o], t[o])) return !1;
  }
  return !0;
}
function fu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function pu(e, t) {
  var n = fu(e);
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
    n = fu(n);
  }
}
function ad(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ad(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ud() {
  for (var e = window, t = nl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = nl(e.document);
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
function Gm(e) {
  var t = ud(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ad(n.ownerDocument.documentElement, n)
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
          (o = pu(n, l));
        var i = pu(n, r);
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
var Km = _t && "documentMode" in document && 11 >= document.documentMode,
  In = null,
  es = null,
  Ar = null,
  ts = !1;
function mu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ts ||
    In == null ||
    In !== nl(r) ||
    ((r = In),
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
    (Ar && eo(Ar, r)) ||
      ((Ar = r),
      (r = ul(es, "onSelect")),
      0 < r.length &&
        ((t = new Zs("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = In))));
}
function Lo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var An = {
    animationend: Lo("Animation", "AnimationEnd"),
    animationiteration: Lo("Animation", "AnimationIteration"),
    animationstart: Lo("Animation", "AnimationStart"),
    transitionend: Lo("Transition", "TransitionEnd"),
  },
  fi = {},
  cd = {};
_t &&
  ((cd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete An.animationend.animation,
    delete An.animationiteration.animation,
    delete An.animationstart.animation),
  "TransitionEvent" in window || delete An.transitionend.transition);
function Rl(e) {
  if (fi[e]) return fi[e];
  if (!An[e]) return e;
  var t = An[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in cd) return (fi[e] = t[n]);
  return e;
}
var dd = Rl("animationend"),
  fd = Rl("animationiteration"),
  pd = Rl("animationstart"),
  md = Rl("transitionend"),
  hd = new Map(),
  hu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function un(e, t) {
  hd.set(e, t), Mn(t, [e]);
}
for (var pi = 0; pi < hu.length; pi++) {
  var mi = hu[pi],
    Xm = mi.toLowerCase(),
    Jm = mi[0].toUpperCase() + mi.slice(1);
  un(Xm, "on" + Jm);
}
un(dd, "onAnimationEnd");
un(fd, "onAnimationIteration");
un(pd, "onAnimationStart");
un("dblclick", "onDoubleClick");
un("focusin", "onFocus");
un("focusout", "onBlur");
un(md, "onTransitionEnd");
rr("onMouseEnter", ["mouseout", "mouseover"]);
rr("onMouseLeave", ["mouseout", "mouseover"]);
rr("onPointerEnter", ["pointerout", "pointerover"]);
rr("onPointerLeave", ["pointerout", "pointerover"]);
Mn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Mn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Mn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Mn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Dr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Zm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));
function gu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Xp(r, t, void 0, e), (e.currentTarget = null);
}
function gd(e, t) {
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
          gu(o, s, u), (l = a);
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
          gu(o, s, u), (l = a);
        }
    }
  }
  if (ol) throw ((e = Ki), (ol = !1), (Ki = null), e);
}
function J(e, t) {
  var n = t[is];
  n === void 0 && (n = t[is] = new Set());
  var r = e + "__bubble";
  n.has(r) || (yd(t, e, 2, !1), n.add(r));
}
function hi(e, t, n) {
  var r = 0;
  t && (r |= 4), yd(n, e, r, t);
}
var _o = "_reactListening" + Math.random().toString(36).slice(2);
function to(e) {
  if (!e[_o]) {
    (e[_o] = !0),
      bc.forEach(function (n) {
        n !== "selectionchange" && (Zm.has(n) || hi(n, !1, e), hi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_o] || ((t[_o] = !0), hi("selectionchange", !1, t));
  }
}
function yd(e, t, n, r) {
  switch (ed(t)) {
    case 1:
      var o = pm;
      break;
    case 4:
      o = mm;
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
          if (((i = yn(s)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = l = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Ac(function () {
    var u = l,
      d = Ys(n),
      p = [];
    e: {
      var g = hd.get(e);
      if (g !== void 0) {
        var x = Zs,
          y = e;
        switch (e) {
          case "keypress":
            if (Yo(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = jm;
            break;
          case "focusin":
            (y = "focus"), (x = ui);
            break;
          case "focusout":
            (y = "blur"), (x = ui);
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
            x = ou;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = ym;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Lm;
            break;
          case dd:
          case fd:
          case pd:
            x = xm;
            break;
          case md:
            x = Dm;
            break;
          case "scroll":
            x = hm;
            break;
          case "wheel":
            x = Rm;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = km;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = iu;
        }
        var w = (t & 4) !== 0,
          E = !w && e === "scroll",
          m = w ? (g !== null ? g + "Capture" : null) : g;
        w = [];
        for (var f = u, h; f !== null; ) {
          h = f;
          var k = h.stateNode;
          if (
            (h.tag === 5 &&
              k !== null &&
              ((h = k),
              m !== null && ((k = Gr(f, m)), k != null && w.push(no(f, k, h)))),
            E)
          )
            break;
          f = f.return;
        }
        0 < w.length &&
          ((g = new x(g, y, null, n, d)), p.push({ event: g, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          g &&
            n !== Yi &&
            (y = n.relatedTarget || n.fromElement) &&
            (yn(y) || y[Dt]))
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
            ? ((y = n.relatedTarget || n.toElement),
              (x = u),
              (y = y ? yn(y) : null),
              y !== null &&
                ((E = Ln(y)), y !== E || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((x = null), (y = u)),
          x !== y)
        ) {
          if (
            ((w = ou),
            (k = "onMouseLeave"),
            (m = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = iu),
              (k = "onPointerLeave"),
              (m = "onPointerEnter"),
              (f = "pointer")),
            (E = x == null ? g : Un(x)),
            (h = y == null ? g : Un(y)),
            (g = new w(k, f + "leave", x, n, d)),
            (g.target = E),
            (g.relatedTarget = h),
            (k = null),
            yn(d) === u &&
              ((w = new w(m, f + "enter", y, n, d)),
              (w.target = h),
              (w.relatedTarget = E),
              (k = w)),
            (E = k),
            x && y)
          )
            t: {
              for (w = x, m = y, f = 0, h = w; h; h = Dn(h)) f++;
              for (h = 0, k = m; k; k = Dn(k)) h++;
              for (; 0 < f - h; ) (w = Dn(w)), f--;
              for (; 0 < h - f; ) (m = Dn(m)), h--;
              for (; f--; ) {
                if (w === m || (m !== null && w === m.alternate)) break t;
                (w = Dn(w)), (m = Dn(m));
              }
              w = null;
            }
          else w = null;
          x !== null && yu(p, g, x, w, !1),
            y !== null && E !== null && yu(p, E, y, w, !0);
        }
      }
      e: {
        if (
          ((g = u ? Un(u) : window),
          (x = g.nodeName && g.nodeName.toLowerCase()),
          x === "select" || (x === "input" && g.type === "file"))
        )
          var N = Wm;
        else if (uu(g))
          if (id) N = Ym;
          else {
            N = Bm;
            var C = Qm;
          }
        else
          (x = g.nodeName) &&
            x.toLowerCase() === "input" &&
            (g.type === "checkbox" || g.type === "radio") &&
            (N = Vm);
        if (N && (N = N(e, u))) {
          ld(p, N, n, d);
          break e;
        }
        C && C(e, g, u),
          e === "focusout" &&
            (C = g._wrapperState) &&
            C.controlled &&
            g.type === "number" &&
            Hi(g, "number", g.value);
      }
      switch (((C = u ? Un(u) : window), e)) {
        case "focusin":
          (uu(C) || C.contentEditable === "true") &&
            ((In = C), (es = u), (Ar = null));
          break;
        case "focusout":
          Ar = es = In = null;
          break;
        case "mousedown":
          ts = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ts = !1), mu(p, n, d);
          break;
        case "selectionchange":
          if (Km) break;
        case "keydown":
        case "keyup":
          mu(p, n, d);
      }
      var P;
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
        zn
          ? rd(e, n) && (M = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
      M &&
        (nd &&
          n.locale !== "ko" &&
          (zn || M !== "onCompositionStart"
            ? M === "onCompositionEnd" && zn && (P = td())
            : ((Gt = d),
              (Js = "value" in Gt ? Gt.value : Gt.textContent),
              (zn = !0))),
        (C = ul(u, M)),
        0 < C.length &&
          ((M = new lu(M, e, null, n, d)),
          p.push({ event: M, listeners: C }),
          P ? (M.data = P) : ((P = od(n)), P !== null && (M.data = P)))),
        (P = zm ? Im(e, n) : Am(e, n)) &&
          ((u = ul(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new lu("onBeforeInput", "beforeinput", null, n, d)),
            p.push({ event: d, listeners: u }),
            (d.data = P)));
    }
    gd(p, t);
  });
}
function no(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ul(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = Gr(e, n)),
      l != null && r.unshift(no(e, l, o)),
      (l = Gr(e, t)),
      l != null && r.push(no(e, l, o))),
      (e = e.return);
  }
  return r;
}
function Dn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function yu(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((a = Gr(n, l)), a != null && i.unshift(no(n, a, s)))
        : o || ((a = Gr(n, l)), a != null && i.push(no(n, a, s)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var eh = /\r\n?/g,
  th = /\u0000|\uFFFD/g;
function vu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      eh,
      `
`
    )
    .replace(th, "");
}
function Do(e, t, n) {
  if (((t = vu(t)), vu(e) !== t && n)) throw Error(b(425));
}
function cl() {}
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
  nh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  wu = typeof Promise == "function" ? Promise : void 0,
  rh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof wu < "u"
      ? function (e) {
          return wu.resolve(null).then(e).catch(oh);
        }
      : ls;
function oh(e) {
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
          e.removeChild(o), Jr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Jr(t);
}
function tn(e) {
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
function xu(e) {
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
var fr = Math.random().toString(36).slice(2),
  St = "__reactFiber$" + fr,
  ro = "__reactProps$" + fr,
  Dt = "__reactContainer$" + fr,
  is = "__reactEvents$" + fr,
  lh = "__reactListeners$" + fr,
  ih = "__reactHandles$" + fr;
function yn(e) {
  var t = e[St];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Dt] || n[St])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = xu(e); e !== null; ) {
          if ((n = e[St])) return n;
          e = xu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ho(e) {
  return (
    (e = e[St] || e[Dt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Un(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(b(33));
}
function Fl(e) {
  return e[ro] || null;
}
var ss = [],
  Hn = -1;
function cn(e) {
  return { current: e };
}
function Z(e) {
  0 > Hn || ((e.current = ss[Hn]), (ss[Hn] = null), Hn--);
}
function K(e, t) {
  Hn++, (ss[Hn] = e.current), (e.current = t);
}
var an = {},
  Pe = cn(an),
  ze = cn(!1),
  Nn = an;
function or(e, t) {
  var n = e.type.contextTypes;
  if (!n) return an;
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
function Ie(e) {
  return (e = e.childContextTypes), e != null;
}
function dl() {
  Z(ze), Z(Pe);
}
function Su(e, t, n) {
  if (Pe.current !== an) throw Error(b(168));
  K(Pe, t), K(ze, n);
}
function vd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(b(108, Qp(e) || "Unknown", o));
  return ie({}, n, r);
}
function fl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || an),
    (Nn = Pe.current),
    K(Pe, e),
    K(ze, ze.current),
    !0
  );
}
function ku(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(b(169));
  n
    ? ((e = vd(e, t, Nn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Z(ze),
      Z(Pe),
      K(Pe, e))
    : Z(ze),
    K(ze, n);
}
var Pt = null,
  zl = !1,
  vi = !1;
function wd(e) {
  Pt === null ? (Pt = [e]) : Pt.push(e);
}
function sh(e) {
  (zl = !0), wd(e);
}
function dn() {
  if (!vi && Pt !== null) {
    vi = !0;
    var e = 0,
      t = Y;
    try {
      var n = Pt;
      for (Y = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Pt = null), (zl = !1);
    } catch (o) {
      throw (Pt !== null && (Pt = Pt.slice(e + 1)), Qc(qs, dn), o);
    } finally {
      (Y = t), (vi = !1);
    }
  }
  return null;
}
var Wn = [],
  Qn = 0,
  pl = null,
  ml = 0,
  Je = [],
  Ze = 0,
  Cn = null,
  Tt = 1,
  jt = "";
function pn(e, t) {
  (Wn[Qn++] = ml), (Wn[Qn++] = pl), (pl = e), (ml = t);
}
function xd(e, t, n) {
  (Je[Ze++] = Tt), (Je[Ze++] = jt), (Je[Ze++] = Cn), (Cn = e);
  var r = Tt;
  e = jt;
  var o = 32 - dt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - dt(t) + o;
  if (30 < l) {
    var i = o - (o % 5);
    (l = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (Tt = (1 << (32 - dt(t) + o)) | (n << o) | r),
      (jt = l + e);
  } else (Tt = (1 << l) | (n << o) | r), (jt = e);
}
function ra(e) {
  e.return !== null && (pn(e, 1), xd(e, 1, 0));
}
function oa(e) {
  for (; e === pl; )
    (pl = Wn[--Qn]), (Wn[Qn] = null), (ml = Wn[--Qn]), (Wn[Qn] = null);
  for (; e === Cn; )
    (Cn = Je[--Ze]),
      (Je[Ze] = null),
      (jt = Je[--Ze]),
      (Je[Ze] = null),
      (Tt = Je[--Ze]),
      (Je[Ze] = null);
}
var Be = null,
  Qe = null,
  te = !1,
  ct = null;
function Sd(e, t) {
  var n = et(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Eu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Be = e), (Qe = tn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Be = e), (Qe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Cn !== null ? { id: Tt, overflow: jt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = et(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Be = e),
            (Qe = null),
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
    var t = Qe;
    if (t) {
      var n = t;
      if (!Eu(e, t)) {
        if (as(e)) throw Error(b(418));
        t = tn(n.nextSibling);
        var r = Be;
        t && Eu(e, t)
          ? Sd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (te = !1), (Be = e));
      }
    } else {
      if (as(e)) throw Error(b(418));
      (e.flags = (e.flags & -4097) | 2), (te = !1), (Be = e);
    }
  }
}
function bu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Be = e;
}
function $o(e) {
  if (e !== Be) return !1;
  if (!te) return bu(e), (te = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !os(e.type, e.memoizedProps))),
    t && (t = Qe))
  ) {
    if (as(e)) throw (kd(), Error(b(418)));
    for (; t; ) Sd(e, t), (t = tn(t.nextSibling));
  }
  if ((bu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(b(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Qe = tn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Qe = null;
    }
  } else Qe = Be ? tn(e.stateNode.nextSibling) : null;
  return !0;
}
function kd() {
  for (var e = Qe; e; ) e = tn(e.nextSibling);
}
function lr() {
  (Qe = Be = null), (te = !1);
}
function la(e) {
  ct === null ? (ct = [e]) : ct.push(e);
}
var ah = Ft.ReactCurrentBatchConfig;
function kr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(b(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(b(147, e));
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
    if (typeof e != "string") throw Error(b(284));
    if (!n._owner) throw Error(b(290, e));
  }
  return e;
}
function Ro(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      b(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Nu(e) {
  var t = e._init;
  return t(e._payload);
}
function Ed(e) {
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
    return (m = ln(m, f)), (m.index = 0), (m.sibling = null), m;
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
    return N === Fn
      ? d(m, f, h.props.children, k, h.key)
      : f !== null &&
        (f.elementType === N ||
          (typeof N == "object" &&
            N !== null &&
            N.$$typeof === Wt &&
            Nu(N) === f.type))
      ? ((k = o(f, h.props)), (k.ref = kr(m, f, h)), (k.return = m), k)
      : ((k = el(h.type, h.key, h.props, null, m.mode, k)),
        (k.ref = kr(m, f, h)),
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
        case No:
          return (
            (h = el(f.type, f.key, f.props, null, m.mode, h)),
            (h.ref = kr(m, null, f)),
            (h.return = m),
            h
          );
        case Rn:
          return (f = Ci(f, m.mode, h)), (f.return = m), f;
        case Wt:
          var k = f._init;
          return p(m, k(f._payload), h);
      }
      if (Lr(f) || yr(f))
        return (f = En(f, m.mode, h, null)), (f.return = m), f;
      Ro(m, f);
    }
    return null;
  }
  function g(m, f, h, k) {
    var N = f !== null ? f.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return N !== null ? null : s(m, f, "" + h, k);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case No:
          return h.key === N ? a(m, f, h, k) : null;
        case Rn:
          return h.key === N ? u(m, f, h, k) : null;
        case Wt:
          return (N = h._init), g(m, f, N(h._payload), k);
      }
      if (Lr(h) || yr(h)) return N !== null ? null : d(m, f, h, k, null);
      Ro(m, h);
    }
    return null;
  }
  function x(m, f, h, k, N) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (m = m.get(h) || null), s(f, m, "" + k, N);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case No:
          return (m = m.get(k.key === null ? h : k.key) || null), a(f, m, k, N);
        case Rn:
          return (m = m.get(k.key === null ? h : k.key) || null), u(f, m, k, N);
        case Wt:
          var C = k._init;
          return x(m, f, h, C(k._payload), N);
      }
      if (Lr(k) || yr(k)) return (m = m.get(h) || null), d(f, m, k, N, null);
      Ro(f, k);
    }
    return null;
  }
  function y(m, f, h, k) {
    for (
      var N = null, C = null, P = f, M = (f = 0), I = null;
      P !== null && M < h.length;
      M++
    ) {
      P.index > M ? ((I = P), (P = null)) : (I = P.sibling);
      var _ = g(m, P, h[M], k);
      if (_ === null) {
        P === null && (P = I);
        break;
      }
      e && P && _.alternate === null && t(m, P),
        (f = l(_, f, M)),
        C === null ? (N = _) : (C.sibling = _),
        (C = _),
        (P = I);
    }
    if (M === h.length) return n(m, P), te && pn(m, M), N;
    if (P === null) {
      for (; M < h.length; M++)
        (P = p(m, h[M], k)),
          P !== null &&
            ((f = l(P, f, M)), C === null ? (N = P) : (C.sibling = P), (C = P));
      return te && pn(m, M), N;
    }
    for (P = r(m, P); M < h.length; M++)
      (I = x(P, m, M, h[M], k)),
        I !== null &&
          (e && I.alternate !== null && P.delete(I.key === null ? M : I.key),
          (f = l(I, f, M)),
          C === null ? (N = I) : (C.sibling = I),
          (C = I));
    return (
      e &&
        P.forEach(function (re) {
          return t(m, re);
        }),
      te && pn(m, M),
      N
    );
  }
  function w(m, f, h, k) {
    var N = yr(h);
    if (typeof N != "function") throw Error(b(150));
    if (((h = N.call(h)), h == null)) throw Error(b(151));
    for (
      var C = (N = null), P = f, M = (f = 0), I = null, _ = h.next();
      P !== null && !_.done;
      M++, _ = h.next()
    ) {
      P.index > M ? ((I = P), (P = null)) : (I = P.sibling);
      var re = g(m, P, _.value, k);
      if (re === null) {
        P === null && (P = I);
        break;
      }
      e && P && re.alternate === null && t(m, P),
        (f = l(re, f, M)),
        C === null ? (N = re) : (C.sibling = re),
        (C = re),
        (P = I);
    }
    if (_.done) return n(m, P), te && pn(m, M), N;
    if (P === null) {
      for (; !_.done; M++, _ = h.next())
        (_ = p(m, _.value, k)),
          _ !== null &&
            ((f = l(_, f, M)), C === null ? (N = _) : (C.sibling = _), (C = _));
      return te && pn(m, M), N;
    }
    for (P = r(m, P); !_.done; M++, _ = h.next())
      (_ = x(P, m, M, _.value, k)),
        _ !== null &&
          (e && _.alternate !== null && P.delete(_.key === null ? M : _.key),
          (f = l(_, f, M)),
          C === null ? (N = _) : (C.sibling = _),
          (C = _));
    return (
      e &&
        P.forEach(function (z) {
          return t(m, z);
        }),
      te && pn(m, M),
      N
    );
  }
  function E(m, f, h, k) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Fn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case No:
          e: {
            for (var N = h.key, C = f; C !== null; ) {
              if (C.key === N) {
                if (((N = h.type), N === Fn)) {
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
                    N.$$typeof === Wt &&
                    Nu(N) === C.type)
                ) {
                  n(m, C.sibling),
                    (f = o(C, h.props)),
                    (f.ref = kr(m, C, h)),
                    (f.return = m),
                    (m = f);
                  break e;
                }
                n(m, C);
                break;
              } else t(m, C);
              C = C.sibling;
            }
            h.type === Fn
              ? ((f = En(h.props.children, m.mode, k, h.key)),
                (f.return = m),
                (m = f))
              : ((k = el(h.type, h.key, h.props, null, m.mode, k)),
                (k.ref = kr(m, f, h)),
                (k.return = m),
                (m = k));
          }
          return i(m);
        case Rn:
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
        case Wt:
          return (C = h._init), E(m, f, C(h._payload), k);
      }
      if (Lr(h)) return y(m, f, h, k);
      if (yr(h)) return w(m, f, h, k);
      Ro(m, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        f !== null && f.tag === 6
          ? (n(m, f.sibling), (f = o(f, h)), (f.return = m), (m = f))
          : (n(m, f), (f = Ni(h, m.mode, k)), (f.return = m), (m = f)),
        i(m))
      : n(m, f);
  }
  return E;
}
var ir = Ed(!0),
  bd = Ed(!1),
  hl = cn(null),
  gl = null,
  Bn = null,
  ia = null;
function sa() {
  ia = Bn = gl = null;
}
function aa(e) {
  var t = hl.current;
  Z(hl), (e._currentValue = t);
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
function Jn(e, t) {
  (gl = e),
    (ia = Bn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Fe = !0), (e.firstContext = null));
}
function nt(e) {
  var t = e._currentValue;
  if (ia !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Bn === null)) {
      if (gl === null) throw Error(b(308));
      (Bn = e), (gl.dependencies = { lanes: 0, firstContext: e });
    } else Bn = Bn.next = e;
  return t;
}
var vn = null;
function ua(e) {
  vn === null ? (vn = [e]) : vn.push(e);
}
function Nd(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), ua(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    $t(e, r)
  );
}
function $t(e, t) {
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
var Qt = !1;
function ca(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Cd(e, t) {
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
function nn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Q & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      $t(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), ua(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    $t(e, n)
  );
}
function qo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gs(e, n);
  }
}
function Cu(e, t) {
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
function yl(e, t, n, r) {
  var o = e.updateQueue;
  Qt = !1;
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
          var y = e,
            w = s;
          switch (((g = t), (x = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == "function")) {
                p = y.call(x, p, g);
                break e;
              }
              p = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (g = typeof y == "function" ? y.call(x, p, g) : y),
                g == null)
              )
                break e;
              p = ie({}, p, g);
              break e;
            case 2:
              Qt = !0;
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
    (Tn |= i), (e.lanes = i), (e.memoizedState = p);
  }
}
function Pu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(b(191, o));
        o.call(r);
      }
    }
}
var go = {},
  Et = cn(go),
  oo = cn(go),
  lo = cn(go);
function wn(e) {
  if (e === go) throw Error(b(174));
  return e;
}
function da(e, t) {
  switch ((K(lo, t), K(oo, e), K(Et, go), (e = t.nodeType), e)) {
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
  Z(Et), K(Et, t);
}
function sr() {
  Z(Et), Z(oo), Z(lo);
}
function Pd(e) {
  wn(lo.current);
  var t = wn(Et.current),
    n = Qi(t, e.type);
  t !== n && (K(oo, e), K(Et, n));
}
function fa(e) {
  oo.current === e && (Z(Et), Z(oo));
}
var oe = cn(0);
function vl(e) {
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
var Go = Ft.ReactCurrentDispatcher,
  xi = Ft.ReactCurrentBatchConfig,
  Pn = 0,
  le = null,
  de = null,
  he = null,
  wl = !1,
  Ur = !1,
  io = 0,
  uh = 0;
function Ee() {
  throw Error(b(321));
}
function ma(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!pt(e[n], t[n])) return !1;
  return !0;
}
function ha(e, t, n, r, o, l) {
  if (
    ((Pn = l),
    (le = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Go.current = e === null || e.memoizedState === null ? ph : mh),
    (e = n(r, o)),
    Ur)
  ) {
    l = 0;
    do {
      if (((Ur = !1), (io = 0), 25 <= l)) throw Error(b(301));
      (l += 1),
        (he = de = null),
        (t.updateQueue = null),
        (Go.current = hh),
        (e = n(r, o));
    } while (Ur);
  }
  if (
    ((Go.current = xl),
    (t = de !== null && de.next !== null),
    (Pn = 0),
    (he = de = le = null),
    (wl = !1),
    t)
  )
    throw Error(b(300));
  return e;
}
function ga() {
  var e = io !== 0;
  return (io = 0), e;
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
function rt() {
  if (de === null) {
    var e = le.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = de.next;
  var t = he === null ? le.memoizedState : he.next;
  if (t !== null) (he = t), (de = e);
  else {
    if (e === null) throw Error(b(310));
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
function so(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Si(e) {
  var t = rt(),
    n = t.queue;
  if (n === null) throw Error(b(311));
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
      if ((Pn & d) === d)
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
          (Tn |= d);
      }
      u = u.next;
    } while (u !== null && u !== l);
    a === null ? (i = r) : (a.next = s),
      pt(r, t.memoizedState) || (Fe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (le.lanes |= l), (Tn |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ki(e) {
  var t = rt(),
    n = t.queue;
  if (n === null) throw Error(b(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (l = e(l, i.action)), (i = i.next);
    while (i !== o);
    pt(l, t.memoizedState) || (Fe = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function Td() {}
function jd(e, t) {
  var n = le,
    r = rt(),
    o = t(),
    l = !pt(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (Fe = !0)),
    (r = r.queue),
    ya(Ld.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (he !== null && he.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ao(9, Md.bind(null, n, r, o, t), void 0, null),
      ge === null)
    )
      throw Error(b(349));
    Pn & 30 || Od(n, t, o);
  }
  return o;
}
function Od(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (le.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Md(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), _d(t) && Dd(e);
}
function Ld(e, t, n) {
  return n(function () {
    _d(t) && Dd(e);
  });
}
function _d(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !pt(e, n);
  } catch {
    return !0;
  }
}
function Dd(e) {
  var t = $t(e, 1);
  t !== null && ft(t, e, 1, -1);
}
function Tu(e) {
  var t = xt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: so,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = fh.bind(null, le, e)),
    [t.memoizedState, e]
  );
}
function ao(e, t, n, r) {
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
function $d() {
  return rt().memoizedState;
}
function Ko(e, t, n, r) {
  var o = xt();
  (le.flags |= e),
    (o.memoizedState = ao(1 | t, n, void 0, r === void 0 ? null : r));
}
function Il(e, t, n, r) {
  var o = rt();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (de !== null) {
    var i = de.memoizedState;
    if (((l = i.destroy), r !== null && ma(r, i.deps))) {
      o.memoizedState = ao(t, n, l, r);
      return;
    }
  }
  (le.flags |= e), (o.memoizedState = ao(1 | t, n, l, r));
}
function ju(e, t) {
  return Ko(8390656, 8, e, t);
}
function ya(e, t) {
  return Il(2048, 8, e, t);
}
function Rd(e, t) {
  return Il(4, 2, e, t);
}
function Fd(e, t) {
  return Il(4, 4, e, t);
}
function zd(e, t) {
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
function Id(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Il(4, 4, zd.bind(null, t, e), n)
  );
}
function va() {}
function Ad(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ma(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ud(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ma(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Hd(e, t, n) {
  return Pn & 21
    ? (pt(n, t) || ((n = Yc()), (le.lanes |= n), (Tn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Fe = !0)), (e.memoizedState = n));
}
function ch(e, t) {
  var n = Y;
  (Y = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = xi.transition;
  xi.transition = {};
  try {
    e(!1), t();
  } finally {
    (Y = n), (xi.transition = r);
  }
}
function Wd() {
  return rt().memoizedState;
}
function dh(e, t, n) {
  var r = on(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Qd(e))
  )
    Bd(t, n);
  else if (((n = Nd(e, t, n, r)), n !== null)) {
    var o = Me();
    ft(n, e, r, o), Vd(n, t, r);
  }
}
function fh(e, t, n) {
  var r = on(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Qd(e)) Bd(t, o);
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
        if (((o.hasEagerState = !0), (o.eagerState = s), pt(s, i))) {
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
    (n = Nd(e, t, o, r)),
      n !== null && ((o = Me()), ft(n, e, r, o), Vd(n, t, r));
  }
}
function Qd(e) {
  var t = e.alternate;
  return e === le || (t !== null && t === le);
}
function Bd(e, t) {
  Ur = wl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Vd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gs(e, n);
  }
}
var xl = {
    readContext: nt,
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
  ph = {
    readContext: nt,
    useCallback: function (e, t) {
      return (xt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: nt,
    useEffect: ju,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ko(4194308, 4, zd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ko(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ko(4, 2, e, t);
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
        (e = e.dispatch = dh.bind(null, le, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = xt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Tu,
    useDebugValue: va,
    useDeferredValue: function (e) {
      return (xt().memoizedState = e);
    },
    useTransition: function () {
      var e = Tu(!1),
        t = e[0];
      return (e = ch.bind(null, e[1])), (xt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = le,
        o = xt();
      if (te) {
        if (n === void 0) throw Error(b(407));
        n = n();
      } else {
        if (((n = t()), ge === null)) throw Error(b(349));
        Pn & 30 || Od(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        ju(Ld.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        ao(9, Md.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = xt(),
        t = ge.identifierPrefix;
      if (te) {
        var n = jt,
          r = Tt;
        (n = (r & ~(1 << (32 - dt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = io++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = uh++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  mh = {
    readContext: nt,
    useCallback: Ad,
    useContext: nt,
    useEffect: ya,
    useImperativeHandle: Id,
    useInsertionEffect: Rd,
    useLayoutEffect: Fd,
    useMemo: Ud,
    useReducer: Si,
    useRef: $d,
    useState: function () {
      return Si(so);
    },
    useDebugValue: va,
    useDeferredValue: function (e) {
      var t = rt();
      return Hd(t, de.memoizedState, e);
    },
    useTransition: function () {
      var e = Si(so)[0],
        t = rt().memoizedState;
      return [e, t];
    },
    useMutableSource: Td,
    useSyncExternalStore: jd,
    useId: Wd,
    unstable_isNewReconciler: !1,
  },
  hh = {
    readContext: nt,
    useCallback: Ad,
    useContext: nt,
    useEffect: ya,
    useImperativeHandle: Id,
    useInsertionEffect: Rd,
    useLayoutEffect: Fd,
    useMemo: Ud,
    useReducer: ki,
    useRef: $d,
    useState: function () {
      return ki(so);
    },
    useDebugValue: va,
    useDeferredValue: function (e) {
      var t = rt();
      return de === null ? (t.memoizedState = e) : Hd(t, de.memoizedState, e);
    },
    useTransition: function () {
      var e = ki(so)[0],
        t = rt().memoizedState;
      return [e, t];
    },
    useMutableSource: Td,
    useSyncExternalStore: jd,
    useId: Wd,
    unstable_isNewReconciler: !1,
  };
function at(e, t) {
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
var Al = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ln(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Me(),
      o = on(e),
      l = Ot(r, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = nn(e, l, o)),
      t !== null && (ft(t, e, o, r), qo(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Me(),
      o = on(e),
      l = Ot(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = nn(e, l, o)),
      t !== null && (ft(t, e, o, r), qo(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Me(),
      r = on(e),
      o = Ot(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = nn(e, o, r)),
      t !== null && (ft(t, e, r, n), qo(t, e, r));
  },
};
function Ou(e, t, n, r, o, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !eo(n, r) || !eo(o, l)
      : !0
  );
}
function Yd(e, t, n) {
  var r = !1,
    o = an,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = nt(l))
      : ((o = Ie(t) ? Nn : Pe.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? or(e, o) : an)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Al),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function Mu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Al.enqueueReplaceState(t, t.state, null);
}
function fs(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), ca(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = nt(l))
    : ((l = Ie(t) ? Nn : Pe.current), (o.context = or(e, l))),
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
      t !== o.state && Al.enqueueReplaceState(o, o.state, null),
      yl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function ar(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Wp(r)), (r = r.return);
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
function Ei(e, t, n) {
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
var gh = typeof WeakMap == "function" ? WeakMap : Map;
function qd(e, t, n) {
  (n = Ot(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      kl || ((kl = !0), (Es = r)), ps(e, t);
    }),
    n
  );
}
function Gd(e, t, n) {
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
            (rn === null ? (rn = new Set([this])) : rn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Lu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new gh();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Oh.bind(null, e, t, n)), t.then(e, e));
}
function _u(e) {
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
function Du(e, t, n, r, o) {
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
              : ((t = Ot(-1, 1)), (t.tag = 2), nn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var yh = Ft.ReactCurrentOwner,
  Fe = !1;
function Oe(e, t, n, r) {
  t.child = e === null ? bd(t, null, n, r) : ir(t, e.child, n, r);
}
function $u(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    Jn(t, o),
    (r = ha(e, t, n, r, l, o)),
    (n = ga()),
    e !== null && !Fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Rt(e, t, o))
      : (te && n && ra(t), (t.flags |= 1), Oe(e, t, r, o), t.child)
  );
}
function Ru(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !Ca(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Kd(e, t, l, r, o))
      : ((e = el(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var i = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : eo), n(i, r) && e.ref === t.ref)
    )
      return Rt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = ln(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Kd(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (eo(l, r) && e.ref === t.ref)
      if (((Fe = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (Fe = !0);
      else return (t.lanes = e.lanes), Rt(e, t, o);
  }
  return ms(e, t, n, r, o);
}
function Xd(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        K(Yn, He),
        (He |= n);
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
          K(Yn, He),
          (He |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        K(Yn, He),
        (He |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      K(Yn, He),
      (He |= r);
  return Oe(e, t, o, n), t.child;
}
function Jd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ms(e, t, n, r, o) {
  var l = Ie(n) ? Nn : Pe.current;
  return (
    (l = or(t, l)),
    Jn(t, o),
    (n = ha(e, t, n, r, l, o)),
    (r = ga()),
    e !== null && !Fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Rt(e, t, o))
      : (te && r && ra(t), (t.flags |= 1), Oe(e, t, n, o), t.child)
  );
}
function Fu(e, t, n, r, o) {
  if (Ie(n)) {
    var l = !0;
    fl(t);
  } else l = !1;
  if ((Jn(t, o), t.stateNode === null))
    Xo(e, t), Yd(t, n, r), fs(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var a = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = nt(u))
      : ((u = Ie(n) ? Nn : Pe.current), (u = or(t, u)));
    var d = n.getDerivedStateFromProps,
      p =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && Mu(t, i, r, u)),
      (Qt = !1);
    var g = t.memoizedState;
    (i.state = g),
      yl(t, r, i, o),
      (a = t.memoizedState),
      s !== r || g !== a || ze.current || Qt
        ? (typeof d == "function" && (ds(t, n, d, r), (a = t.memoizedState)),
          (s = Qt || Ou(t, n, s, r, g, a, u))
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
      Cd(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : at(t.type, s)),
      (i.props = u),
      (p = t.pendingProps),
      (g = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = nt(a))
        : ((a = Ie(n) ? Nn : Pe.current), (a = or(t, a)));
    var x = n.getDerivedStateFromProps;
    (d =
      typeof x == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== p || g !== a) && Mu(t, i, r, a)),
      (Qt = !1),
      (g = t.memoizedState),
      (i.state = g),
      yl(t, r, i, o);
    var y = t.memoizedState;
    s !== p || g !== y || ze.current || Qt
      ? (typeof x == "function" && (ds(t, n, x, r), (y = t.memoizedState)),
        (u = Qt || Ou(t, n, u, r, g, y, a) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, y, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, y, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (i.props = r),
        (i.state = y),
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
  Jd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && ku(t, n, !1), Rt(e, t, l);
  (r = t.stateNode), (yh.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = ir(t, e.child, null, l)), (t.child = ir(t, null, s, l)))
      : Oe(e, t, s, l),
    (t.memoizedState = r.state),
    o && ku(t, n, !0),
    t.child
  );
}
function Zd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Su(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Su(e, t.context, !1),
    da(e, t.containerInfo);
}
function zu(e, t, n, r, o) {
  return lr(), la(o), (t.flags |= 256), Oe(e, t, n, r), t.child;
}
var gs = { dehydrated: null, treeContext: null, retryLane: 0 };
function ys(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ef(e, t, n) {
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
    K(oe, o & 1),
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
                : (l = Wl(i, r, 0, null)),
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
    return vh(e, t, i, r, s, o, n);
  if (l) {
    (l = r.fallback), (i = t.mode), (o = e.child), (s = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = ln(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (l = ln(s, l)) : ((l = En(l, i, n, null)), (l.flags |= 2)),
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
    (r = ln(l, { mode: "visible", children: r.children })),
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
    (t = Wl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Fo(e, t, n, r) {
  return (
    r !== null && la(r),
    ir(t, e.child, null, n),
    (e = wa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function vh(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ei(Error(b(422)))), Fo(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (o = t.mode),
        (r = Wl({ mode: "visible", children: r.children }, o, 0, null)),
        (l = En(l, o, i, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && ir(t, e.child, null, i),
        (t.child.memoizedState = ys(i)),
        (t.memoizedState = gs),
        l);
  if (!(t.mode & 1)) return Fo(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (l = Error(b(419))), (r = Ei(l, r, void 0)), Fo(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), Fe || s)) {
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
          ((l.retryLane = o), $t(e, o), ft(r, e, o, -1));
    }
    return Na(), (r = Ei(Error(b(421)))), Fo(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Mh.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Qe = tn(o.nextSibling)),
      (Be = t),
      (te = !0),
      (ct = null),
      e !== null &&
        ((Je[Ze++] = Tt),
        (Je[Ze++] = jt),
        (Je[Ze++] = Cn),
        (Tt = e.id),
        (jt = e.overflow),
        (Cn = t)),
      (t = wa(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Iu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), cs(e.return, t, n);
}
function bi(e, t, n, r, o) {
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
function tf(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((Oe(e, t, r.children, n), (r = oe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Iu(e, n, t);
        else if (e.tag === 19) Iu(e, n, t);
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
  if ((K(oe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && vl(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          bi(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && vl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        bi(t, !0, n, null, l);
        break;
      case "together":
        bi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Xo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Rt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Tn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(b(153));
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
function wh(e, t, n) {
  switch (t.tag) {
    case 3:
      Zd(t), lr();
      break;
    case 5:
      Pd(t);
      break;
    case 1:
      Ie(t.type) && fl(t);
      break;
    case 4:
      da(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      K(hl, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (K(oe, oe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ef(e, t, n)
          : (K(oe, oe.current & 1),
            (e = Rt(e, t, n)),
            e !== null ? e.sibling : null);
      K(oe, oe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return tf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        K(oe, oe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Xd(e, t, n);
  }
  return Rt(e, t, n);
}
var nf, vs, rf, of;
nf = function (e, t) {
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
rf = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), wn(Et.current);
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
          (e.onclick = cl);
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
            (Yr.hasOwnProperty(u)
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
              (Yr.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && J("scroll", e),
                  l || s === a || (l = []))
                : (l = l || []).push(u, a));
    }
    n && (l = l || []).push("style", n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
of = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Er(e, t) {
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
function be(e) {
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
function xh(e, t, n) {
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
      return be(t), null;
    case 1:
      return Ie(t.type) && dl(), be(t), null;
    case 3:
      return (
        (r = t.stateNode),
        sr(),
        Z(ze),
        Z(Pe),
        pa(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          ($o(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ct !== null && (Cs(ct), (ct = null)))),
        vs(e, t),
        be(t),
        null
      );
    case 5:
      fa(t);
      var o = wn(lo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        rf(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(b(166));
          return be(t), null;
        }
        if (((e = wn(Et.current)), $o(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[St] = t), (r[ro] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              J("cancel", r), J("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              J("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Dr.length; o++) J(Dr[o], r);
              break;
            case "source":
              J("error", r);
              break;
            case "img":
            case "image":
            case "link":
              J("error", r), J("load", r);
              break;
            case "details":
              J("toggle", r);
              break;
            case "input":
              qa(r, l), J("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                J("invalid", r);
              break;
            case "textarea":
              Ka(r, l), J("invalid", r);
          }
          Bi(n, l), (o = null);
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var s = l[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Do(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Do(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : Yr.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  J("scroll", r);
            }
          switch (n) {
            case "input":
              Co(r), Ga(r, l, !0);
              break;
            case "textarea":
              Co(r), Xa(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = cl);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Lc(n)),
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
            (e[ro] = r),
            nf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Vi(n, r)), n)) {
              case "dialog":
                J("cancel", e), J("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                J("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Dr.length; o++) J(Dr[o], e);
                o = r;
                break;
              case "source":
                J("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                J("error", e), J("load", e), (o = r);
                break;
              case "details":
                J("toggle", e), (o = r);
                break;
              case "input":
                qa(e, r), (o = Ai(e, r)), J("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ie({}, r, { value: void 0 })),
                  J("invalid", e);
                break;
              case "textarea":
                Ka(e, r), (o = Wi(e, r)), J("invalid", e);
                break;
              default:
                o = r;
            }
            Bi(n, o), (s = o);
            for (l in s)
              if (s.hasOwnProperty(l)) {
                var a = s[l];
                l === "style"
                  ? $c(e, a)
                  : l === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && _c(e, a))
                  : l === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && qr(e, a)
                    : typeof a == "number" && qr(e, "" + a)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (Yr.hasOwnProperty(l)
                      ? a != null && l === "onScroll" && J("scroll", e)
                      : a != null && Ws(e, l, a, i));
              }
            switch (n) {
              case "input":
                Co(e), Ga(e, r, !1);
                break;
              case "textarea":
                Co(e), Xa(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + sn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? qn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      qn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = cl);
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
      return be(t), null;
    case 6:
      if (e && t.stateNode != null) of(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(b(166));
        if (((n = wn(lo.current)), wn(Et.current), $o(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[St] = t),
            (l = r.nodeValue !== n) && ((e = Be), e !== null))
          )
            switch (e.tag) {
              case 3:
                Do(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Do(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[St] = t),
            (t.stateNode = r);
      }
      return be(t), null;
    case 13:
      if (
        (Z(oe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (te && Qe !== null && t.mode & 1 && !(t.flags & 128))
          kd(), lr(), (t.flags |= 98560), (l = !1);
        else if (((l = $o(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(b(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(b(317));
            l[St] = t;
          } else
            lr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          be(t), (l = !1);
        } else ct !== null && (Cs(ct), (ct = null)), (l = !0);
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
          be(t),
          null);
    case 4:
      return (
        sr(), vs(e, t), e === null && to(t.stateNode.containerInfo), be(t), null
      );
    case 10:
      return aa(t.type._context), be(t), null;
    case 17:
      return Ie(t.type) && dl(), be(t), null;
    case 19:
      if ((Z(oe), (l = t.memoizedState), l === null)) return be(t), null;
      if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (r) Er(l, !1);
        else {
          if (fe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = vl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Er(l, !1),
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
                return K(oe, (oe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            ue() > ur &&
            ((t.flags |= 128), (r = !0), Er(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = vl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Er(l, !0),
              l.tail === null && l.tailMode === "hidden" && !i.alternate && !te)
            )
              return be(t), null;
          } else
            2 * ue() - l.renderingStartTime > ur &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Er(l, !1), (t.lanes = 4194304));
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
          K(oe, r ? (n & 1) | 2 : n & 1),
          t)
        : (be(t), null);
    case 22:
    case 23:
      return (
        ba(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? He & 1073741824 && (be(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : be(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(b(156, t.tag));
}
function Sh(e, t) {
  switch ((oa(t), t.tag)) {
    case 1:
      return (
        Ie(t.type) && dl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        sr(),
        Z(ze),
        Z(Pe),
        pa(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return fa(t), null;
    case 13:
      if ((Z(oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(b(340));
        lr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Z(oe), null;
    case 4:
      return sr(), null;
    case 10:
      return aa(t.type._context), null;
    case 22:
    case 23:
      return ba(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var zo = !1,
  Ne = !1,
  kh = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function Vn(e, t) {
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
var Au = !1;
function Eh(e, t) {
  if (((ns = sl), (e = ud()), na(e))) {
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
  for (rs = { focusedElem: e, selectionRange: n }, sl = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    E = y.memoizedState,
                    m = t.stateNode,
                    f = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : at(t.type, w),
                      E
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
                throw Error(b(163));
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
  return (y = Au), (Au = !1), y;
}
function Hr(e, t, n) {
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
function Ul(e, t) {
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
function lf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), lf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[St], delete t[ro], delete t[is], delete t[lh], delete t[ih])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function sf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Uu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || sf(e.return)) return null;
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
          n != null || t.onclick !== null || (t.onclick = cl));
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
  ut = !1;
function zt(e, t, n) {
  for (n = n.child; n !== null; ) af(e, t, n), (n = n.sibling);
}
function af(e, t, n) {
  if (kt && typeof kt.onCommitFiberUnmount == "function")
    try {
      kt.onCommitFiberUnmount(_l, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ne || Vn(n, t);
    case 6:
      var r = ve,
        o = ut;
      (ve = null),
        zt(e, t, n),
        (ve = r),
        (ut = o),
        ve !== null &&
          (ut
            ? ((e = ve),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ve.removeChild(n.stateNode));
      break;
    case 18:
      ve !== null &&
        (ut
          ? ((e = ve),
            (n = n.stateNode),
            e.nodeType === 8
              ? yi(e.parentNode, n)
              : e.nodeType === 1 && yi(e, n),
            Jr(e))
          : yi(ve, n.stateNode));
      break;
    case 4:
      (r = ve),
        (o = ut),
        (ve = n.stateNode.containerInfo),
        (ut = !0),
        zt(e, t, n),
        (ve = r),
        (ut = o);
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
      zt(e, t, n);
      break;
    case 1:
      if (
        !Ne &&
        (Vn(n, t),
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
      zt(e, t, n);
      break;
    case 21:
      zt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ne = (r = Ne) || n.memoizedState !== null), zt(e, t, n), (Ne = r))
        : zt(e, t, n);
      break;
    default:
      zt(e, t, n);
  }
}
function Hu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new kh()),
      t.forEach(function (r) {
        var o = Lh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function st(e, t) {
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
              (ve = s.stateNode), (ut = !1);
              break e;
            case 3:
              (ve = s.stateNode.containerInfo), (ut = !0);
              break e;
            case 4:
              (ve = s.stateNode.containerInfo), (ut = !0);
              break e;
          }
          s = s.return;
        }
        if (ve === null) throw Error(b(160));
        af(l, i, o), (ve = null), (ut = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        se(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) uf(t, e), (t = t.sibling);
}
function uf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((st(t, e), wt(e), r & 4)) {
        try {
          Hr(3, e, e.return), Ul(3, e);
        } catch (w) {
          se(e, e.return, w);
        }
        try {
          Hr(5, e, e.return);
        } catch (w) {
          se(e, e.return, w);
        }
      }
      break;
    case 1:
      st(t, e), wt(e), r & 512 && n !== null && Vn(n, n.return);
      break;
    case 5:
      if (
        (st(t, e),
        wt(e),
        r & 512 && n !== null && Vn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          qr(o, "");
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
            s === "input" && l.type === "radio" && l.name != null && Oc(o, l),
              Vi(s, i);
            var u = Vi(s, l);
            for (i = 0; i < a.length; i += 2) {
              var d = a[i],
                p = a[i + 1];
              d === "style"
                ? $c(o, p)
                : d === "dangerouslySetInnerHTML"
                ? _c(o, p)
                : d === "children"
                ? qr(o, p)
                : Ws(o, d, p, u);
            }
            switch (s) {
              case "input":
                Ui(o, l);
                break;
              case "textarea":
                Mc(o, l);
                break;
              case "select":
                var g = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var x = l.value;
                x != null
                  ? qn(o, !!l.multiple, x, !1)
                  : g !== !!l.multiple &&
                    (l.defaultValue != null
                      ? qn(o, !!l.multiple, l.defaultValue, !0)
                      : qn(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[ro] = l;
          } catch (w) {
            se(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((st(t, e), wt(e), r & 4)) {
        if (e.stateNode === null) throw Error(b(162));
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
        (st(t, e), wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Jr(t.containerInfo);
        } catch (w) {
          se(e, e.return, w);
        }
      break;
    case 4:
      st(t, e), wt(e);
      break;
    case 13:
      st(t, e),
        wt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (ka = ue())),
        r & 4 && Hu(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ne = (u = Ne) || d), st(t, e), (Ne = u)) : st(t, e),
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
                  Hr(4, g, g.return);
                  break;
                case 1:
                  Vn(g, g.return);
                  var y = g.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = g), (n = g.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (w) {
                      se(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Vn(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    Qu(p);
                    continue;
                  }
              }
              x !== null ? ((x.return = g), (L = x)) : Qu(p);
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
                      (s.style.display = Dc("display", i)));
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
      st(t, e), wt(e), r & 4 && Hu(e);
      break;
    case 21:
      break;
    default:
      st(t, e), wt(e);
  }
}
function wt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (sf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(b(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (qr(o, ""), (r.flags &= -33));
          var l = Uu(e);
          ks(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = Uu(e);
          Ss(e, s, i);
          break;
        default:
          throw Error(b(161));
      }
    } catch (a) {
      se(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function bh(e, t, n) {
  (L = e), cf(e);
}
function cf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var o = L,
      l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || zo;
      if (!i) {
        var s = o.alternate,
          a = (s !== null && s.memoizedState !== null) || Ne;
        s = zo;
        var u = Ne;
        if (((zo = i), (Ne = a) && !u))
          for (L = o; L !== null; )
            (i = L),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Bu(o)
                : a !== null
                ? ((a.return = i), (L = a))
                : Bu(o);
        for (; l !== null; ) (L = l), cf(l), (l = l.sibling);
        (L = o), (zo = s), (Ne = u);
      }
      Wu(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (L = l)) : Wu(e);
  }
}
function Wu(e) {
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
              Ne || Ul(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ne)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : at(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && Pu(t, l, r);
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
                Pu(t, i, n);
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
                    p !== null && Jr(p);
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
              throw Error(b(163));
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
function Qu(e) {
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
function Bu(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ul(4, t);
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
var Nh = Math.ceil,
  Sl = Ft.ReactCurrentDispatcher,
  xa = Ft.ReactCurrentOwner,
  tt = Ft.ReactCurrentBatchConfig,
  Q = 0,
  ge = null,
  ce = null,
  we = 0,
  He = 0,
  Yn = cn(0),
  fe = 0,
  uo = null,
  Tn = 0,
  Hl = 0,
  Sa = 0,
  Wr = null,
  Re = null,
  ka = 0,
  ur = 1 / 0,
  Ct = null,
  kl = !1,
  Es = null,
  rn = null,
  Io = !1,
  Kt = null,
  El = 0,
  Qr = 0,
  bs = null,
  Jo = -1,
  Zo = 0;
function Me() {
  return Q & 6 ? ue() : Jo !== -1 ? Jo : (Jo = ue());
}
function on(e) {
  return e.mode & 1
    ? Q & 2 && we !== 0
      ? we & -we
      : ah.transition !== null
      ? (Zo === 0 && (Zo = Yc()), Zo)
      : ((e = Y),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ed(e.type))),
        e)
    : 1;
}
function ft(e, t, n, r) {
  if (50 < Qr) throw ((Qr = 0), (bs = null), Error(b(185)));
  po(e, n, r),
    (!(Q & 2) || e !== ge) &&
      (e === ge && (!(Q & 2) && (Hl |= n), fe === 4 && Yt(e, we)),
      Ae(e, r),
      n === 1 && Q === 0 && !(t.mode & 1) && ((ur = ue() + 500), zl && dn()));
}
function Ae(e, t) {
  var n = e.callbackNode;
  am(e, t);
  var r = il(e, e === ge ? we : 0);
  if (r === 0)
    n !== null && eu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && eu(n), t === 1))
      e.tag === 0 ? sh(Vu.bind(null, e)) : wd(Vu.bind(null, e)),
        rh(function () {
          !(Q & 6) && dn();
        }),
        (n = null);
    else {
      switch (qc(r)) {
        case 1:
          n = qs;
          break;
        case 4:
          n = Bc;
          break;
        case 16:
          n = ll;
          break;
        case 536870912:
          n = Vc;
          break;
        default:
          n = ll;
      }
      n = vf(n, df.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function df(e, t) {
  if (((Jo = -1), (Zo = 0), Q & 6)) throw Error(b(327));
  var n = e.callbackNode;
  if (Zn() && e.callbackNode !== n) return null;
  var r = il(e, e === ge ? we : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = bl(e, r);
  else {
    t = r;
    var o = Q;
    Q |= 2;
    var l = pf();
    (ge !== e || we !== t) && ((Ct = null), (ur = ue() + 500), kn(e, t));
    do
      try {
        Th();
        break;
      } catch (s) {
        ff(e, s);
      }
    while (!0);
    sa(),
      (Sl.current = l),
      (Q = o),
      ce !== null ? (t = 0) : ((ge = null), (we = 0), (t = fe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Xi(e)), o !== 0 && ((r = o), (t = Ns(e, o)))), t === 1)
    )
      throw ((n = uo), kn(e, 0), Yt(e, r), Ae(e, ue()), n);
    if (t === 6) Yt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Ch(o) &&
          ((t = bl(e, r)),
          t === 2 && ((l = Xi(e)), l !== 0 && ((r = l), (t = Ns(e, l)))),
          t === 1))
      )
        throw ((n = uo), kn(e, 0), Yt(e, r), Ae(e, ue()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(b(345));
        case 2:
          mn(e, Re, Ct);
          break;
        case 3:
          if (
            (Yt(e, r), (r & 130023424) === r && ((t = ka + 500 - ue()), 10 < t))
          ) {
            if (il(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Me(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = ls(mn.bind(null, e, Re, Ct), t);
            break;
          }
          mn(e, Re, Ct);
          break;
        case 4:
          if ((Yt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - dt(r);
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
                : 1960 * Nh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ls(mn.bind(null, e, Re, Ct), r);
            break;
          }
          mn(e, Re, Ct);
          break;
        case 5:
          mn(e, Re, Ct);
          break;
        default:
          throw Error(b(329));
      }
    }
  }
  return Ae(e, ue()), e.callbackNode === n ? df.bind(null, e) : null;
}
function Ns(e, t) {
  var n = Wr;
  return (
    e.current.memoizedState.isDehydrated && (kn(e, t).flags |= 256),
    (e = bl(e, t)),
    e !== 2 && ((t = Re), (Re = n), t !== null && Cs(t)),
    e
  );
}
function Cs(e) {
  Re === null ? (Re = e) : Re.push.apply(Re, e);
}
function Ch(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!pt(l(), o)) return !1;
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
function Yt(e, t) {
  for (
    t &= ~Sa,
      t &= ~Hl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - dt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Vu(e) {
  if (Q & 6) throw Error(b(327));
  Zn();
  var t = il(e, 0);
  if (!(t & 1)) return Ae(e, ue()), null;
  var n = bl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Xi(e);
    r !== 0 && ((t = r), (n = Ns(e, r)));
  }
  if (n === 1) throw ((n = uo), kn(e, 0), Yt(e, t), Ae(e, ue()), n);
  if (n === 6) throw Error(b(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    mn(e, Re, Ct),
    Ae(e, ue()),
    null
  );
}
function Ea(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    (Q = n), Q === 0 && ((ur = ue() + 500), zl && dn());
  }
}
function jn(e) {
  Kt !== null && Kt.tag === 0 && !(Q & 6) && Zn();
  var t = Q;
  Q |= 1;
  var n = tt.transition,
    r = Y;
  try {
    if (((tt.transition = null), (Y = 1), e)) return e();
  } finally {
    (Y = r), (tt.transition = n), (Q = t), !(Q & 6) && dn();
  }
}
function ba() {
  (He = Yn.current), Z(Yn);
}
function kn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), nh(n)), ce !== null))
    for (n = ce.return; n !== null; ) {
      var r = n;
      switch ((oa(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && dl();
          break;
        case 3:
          sr(), Z(ze), Z(Pe), pa();
          break;
        case 5:
          fa(r);
          break;
        case 4:
          sr();
          break;
        case 13:
          Z(oe);
          break;
        case 19:
          Z(oe);
          break;
        case 10:
          aa(r.type._context);
          break;
        case 22:
        case 23:
          ba();
      }
      n = n.return;
    }
  if (
    ((ge = e),
    (ce = e = ln(e.current, null)),
    (we = He = t),
    (fe = 0),
    (uo = null),
    (Sa = Hl = Tn = 0),
    (Re = Wr = null),
    vn !== null)
  ) {
    for (t = 0; t < vn.length; t++)
      if (((n = vn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var i = l.next;
          (l.next = o), (r.next = i);
        }
        n.pending = r;
      }
    vn = null;
  }
  return e;
}
function ff(e, t) {
  do {
    var n = ce;
    try {
      if ((sa(), (Go.current = xl), wl)) {
        for (var r = le.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        wl = !1;
      }
      if (
        ((Pn = 0),
        (he = de = le = null),
        (Ur = !1),
        (io = 0),
        (xa.current = null),
        n === null || n.return === null)
      ) {
        (fe = 1), (uo = t), (ce = null);
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
          var x = _u(i);
          if (x !== null) {
            (x.flags &= -257),
              Du(x, i, s, l, t),
              x.mode & 1 && Lu(l, u, t),
              (t = x),
              (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Lu(l, u, t), Na();
              break e;
            }
            a = Error(b(426));
          }
        } else if (te && s.mode & 1) {
          var E = _u(i);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              Du(E, i, s, l, t),
              la(ar(a, s));
            break e;
          }
        }
        (l = a = ar(a, s)),
          fe !== 4 && (fe = 2),
          Wr === null ? (Wr = [l]) : Wr.push(l),
          (l = i);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var m = qd(l, a, t);
              Cu(l, m);
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
                    (rn === null || !rn.has(h))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var k = Gd(l, s, t);
                Cu(l, k);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      hf(n);
    } catch (N) {
      (t = N), ce === n && n !== null && (ce = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function pf() {
  var e = Sl.current;
  return (Sl.current = xl), e === null ? xl : e;
}
function Na() {
  (fe === 0 || fe === 3 || fe === 2) && (fe = 4),
    ge === null || (!(Tn & 268435455) && !(Hl & 268435455)) || Yt(ge, we);
}
function bl(e, t) {
  var n = Q;
  Q |= 2;
  var r = pf();
  (ge !== e || we !== t) && ((Ct = null), kn(e, t));
  do
    try {
      Ph();
      break;
    } catch (o) {
      ff(e, o);
    }
  while (!0);
  if ((sa(), (Q = n), (Sl.current = r), ce !== null)) throw Error(b(261));
  return (ge = null), (we = 0), fe;
}
function Ph() {
  for (; ce !== null; ) mf(ce);
}
function Th() {
  for (; ce !== null && !Zp(); ) mf(ce);
}
function mf(e) {
  var t = yf(e.alternate, e, He);
  (e.memoizedProps = e.pendingProps),
    t === null ? hf(e) : (ce = t),
    (xa.current = null);
}
function hf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Sh(n, t)), n !== null)) {
        (n.flags &= 32767), (ce = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (fe = 6), (ce = null);
        return;
      }
    } else if (((n = xh(n, t, He)), n !== null)) {
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
function mn(e, t, n) {
  var r = Y,
    o = tt.transition;
  try {
    (tt.transition = null), (Y = 1), jh(e, t, n, r);
  } finally {
    (tt.transition = o), (Y = r);
  }
  return null;
}
function jh(e, t, n, r) {
  do Zn();
  while (Kt !== null);
  if (Q & 6) throw Error(b(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(b(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (um(e, l),
    e === ge && ((ce = ge = null), (we = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Io ||
      ((Io = !0),
      vf(ll, function () {
        return Zn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = tt.transition), (tt.transition = null);
    var i = Y;
    Y = 1;
    var s = Q;
    (Q |= 4),
      (xa.current = null),
      Eh(e, n),
      uf(n, e),
      Gm(rs),
      (sl = !!ns),
      (rs = ns = null),
      (e.current = n),
      bh(n),
      em(),
      (Q = s),
      (Y = i),
      (tt.transition = l);
  } else e.current = n;
  if (
    (Io && ((Io = !1), (Kt = e), (El = o)),
    (l = e.pendingLanes),
    l === 0 && (rn = null),
    rm(n.stateNode),
    Ae(e, ue()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (kl) throw ((kl = !1), (e = Es), (Es = null), e);
  return (
    El & 1 && e.tag !== 0 && Zn(),
    (l = e.pendingLanes),
    l & 1 ? (e === bs ? Qr++ : ((Qr = 0), (bs = e))) : (Qr = 0),
    dn(),
    null
  );
}
function Zn() {
  if (Kt !== null) {
    var e = qc(El),
      t = tt.transition,
      n = Y;
    try {
      if (((tt.transition = null), (Y = 16 > e ? 16 : e), Kt === null))
        var r = !1;
      else {
        if (((e = Kt), (Kt = null), (El = 0), Q & 6)) throw Error(b(331));
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
                      Hr(8, d, l);
                  }
                  var p = d.child;
                  if (p !== null) (p.return = d), (L = p);
                  else
                    for (; L !== null; ) {
                      d = L;
                      var g = d.sibling,
                        x = d.return;
                      if ((lf(d), d === u)) {
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
              var y = l.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var E = w.sibling;
                    (w.sibling = null), (w = E);
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
                    Hr(9, l, l.return);
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
                      Ul(9, s);
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
          ((Q = o), dn(), kt && typeof kt.onPostCommitFiberRoot == "function")
        )
          try {
            kt.onPostCommitFiberRoot(_l, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Y = n), (tt.transition = t);
    }
  }
  return !1;
}
function Yu(e, t, n) {
  (t = ar(n, t)),
    (t = qd(e, t, 1)),
    (e = nn(e, t, 1)),
    (t = Me()),
    e !== null && (po(e, 1, t), Ae(e, t));
}
function se(e, t, n) {
  if (e.tag === 3) Yu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Yu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (rn === null || !rn.has(r)))
        ) {
          (e = ar(n, e)),
            (e = Gd(t, e, 1)),
            (t = nn(t, e, 1)),
            (e = Me()),
            t !== null && (po(t, 1, e), Ae(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Oh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ge === e &&
      (we & n) === n &&
      (fe === 4 || (fe === 3 && (we & 130023424) === we && 500 > ue() - ka)
        ? kn(e, 0)
        : (Sa |= n)),
    Ae(e, t);
}
function gf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = jo), (jo <<= 1), !(jo & 130023424) && (jo = 4194304))
      : (t = 1));
  var n = Me();
  (e = $t(e, t)), e !== null && (po(e, t, n), Ae(e, n));
}
function Mh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), gf(e, n);
}
function Lh(e, t) {
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
      throw Error(b(314));
  }
  r !== null && r.delete(t), gf(e, n);
}
var yf;
yf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ze.current) Fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Fe = !1), wh(e, t, n);
      Fe = !!(e.flags & 131072);
    }
  else (Fe = !1), te && t.flags & 1048576 && xd(t, ml, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Xo(e, t), (e = t.pendingProps);
      var o = or(t, Pe.current);
      Jn(t, n), (o = ha(null, t, r, e, o, n));
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
            Ie(r) ? ((l = !0), fl(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            ca(t),
            (o.updater = Al),
            (t.stateNode = o),
            (o._reactInternals = t),
            fs(t, r, e, n),
            (t = hs(null, t, r, !0, l, n)))
          : ((t.tag = 0), te && l && ra(t), Oe(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Xo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Dh(r)),
          (e = at(r, e)),
          o)
        ) {
          case 0:
            t = ms(null, t, r, e, n);
            break e;
          case 1:
            t = Fu(null, t, r, e, n);
            break e;
          case 11:
            t = $u(null, t, r, e, n);
            break e;
          case 14:
            t = Ru(null, t, r, at(r.type, e), n);
            break e;
        }
        throw Error(b(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : at(r, o)),
        ms(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : at(r, o)),
        Fu(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Zd(t), e === null)) throw Error(b(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          Cd(e, t),
          yl(t, r, null, n);
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
            (o = ar(Error(b(423)), t)), (t = zu(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = ar(Error(b(424)), t)), (t = zu(e, t, r, n, o));
            break e;
          } else
            for (
              Qe = tn(t.stateNode.containerInfo.firstChild),
                Be = t,
                te = !0,
                ct = null,
                n = bd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((lr(), r === o)) {
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
        Pd(t),
        e === null && us(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = o.children),
        os(r, o) ? (i = null) : l !== null && os(r, l) && (t.flags |= 32),
        Jd(e, t),
        Oe(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && us(t), null;
    case 13:
      return ef(e, t, n);
    case 4:
      return (
        da(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ir(t, null, r, n)) : Oe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : at(r, o)),
        $u(e, t, r, o, n)
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
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (i = o.value),
          K(hl, r._currentValue),
          (r._currentValue = i),
          l !== null)
        )
          if (pt(l.value, i)) {
            if (l.children === o.children && !ze.current) {
              t = Rt(e, t, n);
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
                if (((i = l.return), i === null)) throw Error(b(341));
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
        Oe(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Jn(t, n),
        (o = nt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Oe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = at(r, t.pendingProps)),
        (o = at(r.type, o)),
        Ru(e, t, r, o, n)
      );
    case 15:
      return Kd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : at(r, o)),
        Xo(e, t),
        (t.tag = 1),
        Ie(r) ? ((e = !0), fl(t)) : (e = !1),
        Jn(t, n),
        Yd(t, r, o),
        fs(t, r, o, n),
        hs(null, t, r, !0, e, n)
      );
    case 19:
      return tf(e, t, n);
    case 22:
      return Xd(e, t, n);
  }
  throw Error(b(156, t.tag));
};
function vf(e, t) {
  return Qc(e, t);
}
function _h(e, t, n, r) {
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
function et(e, t, n, r) {
  return new _h(e, t, n, r);
}
function Ca(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Dh(e) {
  if (typeof e == "function") return Ca(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Bs)) return 11;
    if (e === Vs) return 14;
  }
  return 2;
}
function ln(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = et(e.tag, t, e.key, e.mode)),
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
function el(e, t, n, r, o, l) {
  var i = 2;
  if (((r = e), typeof e == "function")) Ca(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Fn:
        return En(n.children, o, l, t);
      case Qs:
        (i = 8), (o |= 8);
        break;
      case Ri:
        return (
          (e = et(12, n, t, o | 2)), (e.elementType = Ri), (e.lanes = l), e
        );
      case Fi:
        return (e = et(13, n, t, o)), (e.elementType = Fi), (e.lanes = l), e;
      case zi:
        return (e = et(19, n, t, o)), (e.elementType = zi), (e.lanes = l), e;
      case Pc:
        return Wl(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Nc:
              i = 10;
              break e;
            case Cc:
              i = 9;
              break e;
            case Bs:
              i = 11;
              break e;
            case Vs:
              i = 14;
              break e;
            case Wt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(b(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = et(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function En(e, t, n, r) {
  return (e = et(7, e, r, t)), (e.lanes = n), e;
}
function Wl(e, t, n, r) {
  return (
    (e = et(22, e, r, t)),
    (e.elementType = Pc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ni(e, t, n) {
  return (e = et(6, e, null, t)), (e.lanes = n), e;
}
function Ci(e, t, n) {
  return (
    (t = et(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function $h(e, t, n, r, o) {
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
    (e = new $h(e, t, n, s, a)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = et(3, null, null, t)),
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
function Rh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Rn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function wf(e) {
  if (!e) return an;
  e = e._reactInternals;
  e: {
    if (Ln(e) !== e || e.tag !== 1) throw Error(b(170));
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
    throw Error(b(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ie(n)) return vd(e, n, t);
  }
  return t;
}
function xf(e, t, n, r, o, l, i, s, a) {
  return (
    (e = Pa(n, r, !0, e, o, l, i, s, a)),
    (e.context = wf(null)),
    (n = e.current),
    (r = Me()),
    (o = on(n)),
    (l = Ot(r, o)),
    (l.callback = t ?? null),
    nn(n, l, o),
    (e.current.lanes = o),
    po(e, o, r),
    Ae(e, r),
    e
  );
}
function Ql(e, t, n, r) {
  var o = t.current,
    l = Me(),
    i = on(o);
  return (
    (n = wf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ot(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = nn(o, t, i)),
    e !== null && (ft(e, o, i, l), qo(e, o, i)),
    i
  );
}
function Nl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function qu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ta(e, t) {
  qu(e, t), (e = e.alternate) && qu(e, t);
}
function Fh() {
  return null;
}
var Sf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ja(e) {
  this._internalRoot = e;
}
Bl.prototype.render = ja.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(b(409));
  Ql(e, t, null, null);
};
Bl.prototype.unmount = ja.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    jn(function () {
      Ql(null, e, null, null);
    }),
      (t[Dt] = null);
  }
};
function Bl(e) {
  this._internalRoot = e;
}
Bl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Xc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Vt.length && t !== 0 && t < Vt[n].priority; n++);
    Vt.splice(n, 0, e), n === 0 && Zc(e);
  }
};
function Oa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Vl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Gu() {}
function zh(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var u = Nl(i);
        l.call(u);
      };
    }
    var i = xf(t, r, e, 0, null, !1, !1, "", Gu);
    return (
      (e._reactRootContainer = i),
      (e[Dt] = i.current),
      to(e.nodeType === 8 ? e.parentNode : e),
      jn(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = Nl(a);
      s.call(u);
    };
  }
  var a = Pa(e, 0, !1, null, null, !1, !1, "", Gu);
  return (
    (e._reactRootContainer = a),
    (e[Dt] = a.current),
    to(e.nodeType === 8 ? e.parentNode : e),
    jn(function () {
      Ql(t, a, n, r);
    }),
    a
  );
}
function Yl(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var a = Nl(i);
        s.call(a);
      };
    }
    Ql(t, i, e, o);
  } else i = zh(n, t, e, o, r);
  return Nl(i);
}
Gc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = _r(t.pendingLanes);
        n !== 0 &&
          (Gs(t, n | 1), Ae(t, ue()), !(Q & 6) && ((ur = ue() + 500), dn()));
      }
      break;
    case 13:
      jn(function () {
        var r = $t(e, 1);
        if (r !== null) {
          var o = Me();
          ft(r, e, 1, o);
        }
      }),
        Ta(e, 1);
  }
};
Ks = function (e) {
  if (e.tag === 13) {
    var t = $t(e, 134217728);
    if (t !== null) {
      var n = Me();
      ft(t, e, 134217728, n);
    }
    Ta(e, 134217728);
  }
};
Kc = function (e) {
  if (e.tag === 13) {
    var t = on(e),
      n = $t(e, t);
    if (n !== null) {
      var r = Me();
      ft(n, e, t, r);
    }
    Ta(e, t);
  }
};
Xc = function () {
  return Y;
};
Jc = function (e, t) {
  var n = Y;
  try {
    return (Y = e), t();
  } finally {
    Y = n;
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
            var o = Fl(r);
            if (!o) throw Error(b(90));
            jc(r), Ui(r, o);
          }
        }
      }
      break;
    case "textarea":
      Mc(e, n);
      break;
    case "select":
      (t = n.value), t != null && qn(e, !!n.multiple, t, !1);
  }
};
zc = Ea;
Ic = jn;
var Ih = { usingClientEntryPoint: !1, Events: [ho, Un, Fl, Rc, Fc, Ea] },
  br = {
    findFiberByHostInstance: yn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Ah = {
    bundleType: br.bundleType,
    version: br.version,
    rendererPackageName: br.rendererPackageName,
    rendererConfig: br.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ft.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Hc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: br.findFiberByHostInstance || Fh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ao = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ao.isDisabled && Ao.supportsFiber)
    try {
      (_l = Ao.inject(Ah)), (kt = Ao);
    } catch {}
}
Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ih;
Ye.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Oa(t)) throw Error(b(200));
  return Rh(e, t, null, n);
};
Ye.createRoot = function (e, t) {
  if (!Oa(e)) throw Error(b(299));
  var n = !1,
    r = "",
    o = Sf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Pa(e, 1, !1, null, null, n, !1, r, o)),
    (e[Dt] = t.current),
    to(e.nodeType === 8 ? e.parentNode : e),
    new ja(t)
  );
};
Ye.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(b(188))
      : ((e = Object.keys(e).join(",")), Error(b(268, e)));
  return (e = Hc(t)), (e = e === null ? null : e.stateNode), e;
};
Ye.flushSync = function (e) {
  return jn(e);
};
Ye.hydrate = function (e, t, n) {
  if (!Vl(t)) throw Error(b(200));
  return Yl(null, e, t, !0, n);
};
Ye.hydrateRoot = function (e, t, n) {
  if (!Oa(e)) throw Error(b(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    i = Sf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = xf(t, null, e, 1, n ?? null, o, !1, l, i)),
    (e[Dt] = t.current),
    to(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Bl(t);
};
Ye.render = function (e, t, n) {
  if (!Vl(t)) throw Error(b(200));
  return Yl(null, e, t, !1, n);
};
Ye.unmountComponentAtNode = function (e) {
  if (!Vl(e)) throw Error(b(40));
  return e._reactRootContainer
    ? (jn(function () {
        Yl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Dt] = null);
        });
      }),
      !0)
    : !1;
};
Ye.unstable_batchedUpdates = Ea;
Ye.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Vl(n)) throw Error(b(200));
  if (e == null || e._reactInternals === void 0) throw Error(b(38));
  return Yl(e, t, n, !1, r);
};
Ye.version = "18.3.1-next-f1338f8080-20240426";
function kf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kf);
    } catch (e) {
      console.error(e);
    }
}
kf(), (Sc.exports = Ye);
var Ef = Sc.exports,
  bf,
  Ku = Ef;
(bf = Ku.createRoot), Ku.hydrateRoot;
function mt(e) {
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
function On(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const Nf = 6048e5,
  Uh = 864e5;
let Hh = {};
function ql() {
  return Hh;
}
function co(e, t) {
  var s, a, u, d;
  const n = ql(),
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
    o = mt(e),
    l = o.getDay(),
    i = (l < r ? 7 : 0) + l - r;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function Cl(e) {
  return co(e, { weekStartsOn: 1 });
}
function Cf(e) {
  const t = mt(e),
    n = t.getFullYear(),
    r = On(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = Cl(r),
    l = On(e, 0);
  l.setFullYear(n, 0, 4), l.setHours(0, 0, 0, 0);
  const i = Cl(l);
  return t.getTime() >= o.getTime()
    ? n + 1
    : t.getTime() >= i.getTime()
    ? n
    : n - 1;
}
function Xu(e) {
  const t = mt(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Ju(e) {
  const t = mt(e),
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
function Wh(e, t) {
  const n = Xu(e),
    r = Xu(t),
    o = +n - Ju(n),
    l = +r - Ju(r);
  return Math.round((o - l) / Uh);
}
function Qh(e) {
  const t = Cf(e),
    n = On(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Cl(n);
}
function Bh(e) {
  return (
    e instanceof Date ||
    (typeof e == "object" &&
      Object.prototype.toString.call(e) === "[object Date]")
  );
}
function Vh(e) {
  if (!Bh(e) && typeof e != "number") return !1;
  const t = mt(e);
  return !isNaN(Number(t));
}
function Yh(e) {
  const t = mt(e),
    n = On(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const qh = {
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
  Gh = (e, t, n) => {
    let r;
    const o = qh[e];
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
const Kh = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  Xh = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  Jh = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  Zh = {
    date: Pi({ formats: Kh, defaultWidth: "full" }),
    time: Pi({ formats: Xh, defaultWidth: "full" }),
    dateTime: Pi({ formats: Jh, defaultWidth: "full" }),
  },
  eg = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  tg = (e, t, n, r) => eg[e];
function Nr(e) {
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
const ng = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  rg = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  og = {
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
  lg = {
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
  ig = {
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
  sg = {
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
  ag = (e, t) => {
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
  ug = {
    ordinalNumber: ag,
    era: Nr({ values: ng, defaultWidth: "wide" }),
    quarter: Nr({
      values: rg,
      defaultWidth: "wide",
      argumentCallback: (e) => e - 1,
    }),
    month: Nr({ values: og, defaultWidth: "wide" }),
    day: Nr({ values: lg, defaultWidth: "wide" }),
    dayPeriod: Nr({
      values: ig,
      defaultWidth: "wide",
      formattingValues: sg,
      defaultFormattingWidth: "wide",
    }),
  };
function Cr(e) {
  return (t, n = {}) => {
    const r = n.width,
      o = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      l = t.match(o);
    if (!l) return null;
    const i = l[0],
      s = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      a = Array.isArray(s) ? dg(s, (p) => p.test(i)) : cg(s, (p) => p.test(i));
    let u;
    (u = e.valueCallback ? e.valueCallback(a) : a),
      (u = n.valueCallback ? n.valueCallback(u) : u);
    const d = t.slice(i.length);
    return { value: u, rest: d };
  };
}
function cg(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function dg(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function fg(e) {
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
const pg = /^(\d+)(th|st|nd|rd)?/i,
  mg = /\d+/i,
  hg = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  gg = { any: [/^b/i, /^(a|c)/i] },
  yg = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  vg = { any: [/1/i, /2/i, /3/i, /4/i] },
  wg = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  xg = {
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
  Sg = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  kg = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  Eg = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  bg = {
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
  Ng = {
    ordinalNumber: fg({
      matchPattern: pg,
      parsePattern: mg,
      valueCallback: (e) => parseInt(e, 10),
    }),
    era: Cr({
      matchPatterns: hg,
      defaultMatchWidth: "wide",
      parsePatterns: gg,
      defaultParseWidth: "any",
    }),
    quarter: Cr({
      matchPatterns: yg,
      defaultMatchWidth: "wide",
      parsePatterns: vg,
      defaultParseWidth: "any",
      valueCallback: (e) => e + 1,
    }),
    month: Cr({
      matchPatterns: wg,
      defaultMatchWidth: "wide",
      parsePatterns: xg,
      defaultParseWidth: "any",
    }),
    day: Cr({
      matchPatterns: Sg,
      defaultMatchWidth: "wide",
      parsePatterns: kg,
      defaultParseWidth: "any",
    }),
    dayPeriod: Cr({
      matchPatterns: Eg,
      defaultMatchWidth: "any",
      parsePatterns: bg,
      defaultParseWidth: "any",
    }),
  },
  Cg = {
    code: "en-US",
    formatDistance: Gh,
    formatLong: Zh,
    formatRelative: tg,
    localize: ug,
    match: Ng,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function Pg(e) {
  const t = mt(e);
  return Wh(t, Yh(t)) + 1;
}
function Tg(e) {
  const t = mt(e),
    n = +Cl(t) - +Qh(t);
  return Math.round(n / Nf) + 1;
}
function Pf(e, t) {
  var d, p, g, x;
  const n = mt(e),
    r = n.getFullYear(),
    o = ql(),
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
    i = On(e, 0);
  i.setFullYear(r + 1, 0, l), i.setHours(0, 0, 0, 0);
  const s = co(i, t),
    a = On(e, 0);
  a.setFullYear(r, 0, l), a.setHours(0, 0, 0, 0);
  const u = co(a, t);
  return n.getTime() >= s.getTime()
    ? r + 1
    : n.getTime() >= u.getTime()
    ? r
    : r - 1;
}
function jg(e, t) {
  var s, a, u, d;
  const n = ql(),
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
    o = Pf(e, t),
    l = On(e, 0);
  return l.setFullYear(o, 0, r), l.setHours(0, 0, 0, 0), co(l, t);
}
function Og(e, t) {
  const n = mt(e),
    r = +co(n, t) - +jg(n, t);
  return Math.round(r / Nf) + 1;
}
function V(e, t) {
  const n = e < 0 ? "-" : "",
    r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const It = {
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
        o = Math.trunc(r * Math.pow(10, n - 3));
      return V(o, t.length);
    },
  },
  $n = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  Zu = {
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
      return It.y(e, t);
    },
    Y: function (e, t, n, r) {
      const o = Pf(e, r),
        l = o > 0 ? o : 1 - o;
      if (t === "YY") {
        const i = l % 100;
        return V(i, 2);
      }
      return t === "Yo" ? n.ordinalNumber(l, { unit: "year" }) : V(l, t.length);
    },
    R: function (e, t) {
      const n = Cf(e);
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
          return It.M(e, t);
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
      const o = Og(e, r);
      return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : V(o, t.length);
    },
    I: function (e, t, n) {
      const r = Tg(e);
      return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : V(r, t.length);
    },
    d: function (e, t, n) {
      return t === "do"
        ? n.ordinalNumber(e.getDate(), { unit: "date" })
        : It.d(e, t);
    },
    D: function (e, t, n) {
      const r = Pg(e);
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
      const o = e.getDay(),
        l = (o - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "e":
          return String(l);
        case "ee":
          return V(l, 2);
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
          return V(l, t.length);
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
          return V(o, t.length);
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
          ? (o = $n.noon)
          : r === 0
          ? (o = $n.midnight)
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
          ? (o = $n.evening)
          : r >= 12
          ? (o = $n.afternoon)
          : r >= 4
          ? (o = $n.morning)
          : (o = $n.night),
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
      return It.h(e, t);
    },
    H: function (e, t, n) {
      return t === "Ho"
        ? n.ordinalNumber(e.getHours(), { unit: "hour" })
        : It.H(e, t);
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
        : It.m(e, t);
    },
    s: function (e, t, n) {
      return t === "so"
        ? n.ordinalNumber(e.getSeconds(), { unit: "second" })
        : It.s(e, t);
    },
    S: function (e, t) {
      return It.S(e, t);
    },
    X: function (e, t, n) {
      const r = e.getTimezoneOffset();
      if (r === 0) return "Z";
      switch (t) {
        case "X":
          return tc(r);
        case "XXXX":
        case "XX":
          return hn(r);
        case "XXXXX":
        case "XXX":
        default:
          return hn(r, ":");
      }
    },
    x: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "x":
          return tc(r);
        case "xxxx":
        case "xx":
          return hn(r);
        case "xxxxx":
        case "xxx":
        default:
          return hn(r, ":");
      }
    },
    O: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + ec(r, ":");
        case "OOOO":
        default:
          return "GMT" + hn(r, ":");
      }
    },
    z: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + ec(r, ":");
        case "zzzz":
        default:
          return "GMT" + hn(r, ":");
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
function ec(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    o = Math.trunc(r / 60),
    l = r % 60;
  return l === 0 ? n + String(o) : n + String(o) + t + V(l, 2);
}
function tc(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + V(Math.abs(e) / 60, 2) : hn(e, t);
}
function hn(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    o = V(Math.trunc(r / 60), 2),
    l = V(r % 60, 2);
  return n + o + t + l;
}
const nc = (e, t) => {
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
  Tf = (e, t) => {
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
  Mg = (e, t) => {
    const n = e.match(/(P+)(p+)?/) || [],
      r = n[1],
      o = n[2];
    if (!o) return nc(e, t);
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
    return l.replace("{{date}}", nc(r, t)).replace("{{time}}", Tf(o, t));
  },
  Lg = { p: Tf, P: Mg },
  _g = /^D+$/,
  Dg = /^Y+$/,
  $g = ["D", "DD", "YY", "YYYY"];
function Rg(e) {
  return _g.test(e);
}
function Fg(e) {
  return Dg.test(e);
}
function zg(e, t, n) {
  const r = Ig(e, t, n);
  if ((console.warn(r), $g.includes(e))) throw new RangeError(r);
}
function Ig(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Ag = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  Ug = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Hg = /^'([^]*?)'?$/,
  Wg = /''/g,
  Qg = /[a-zA-Z]/;
function q(e, t, n) {
  var d, p, g, x;
  const r = ql(),
    o = r.locale ?? Cg,
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
    s = mt(e);
  if (!Vh(s)) throw new RangeError("Invalid time value");
  let a = t
    .match(Ug)
    .map((y) => {
      const w = y[0];
      if (w === "p" || w === "P") {
        const E = Lg[w];
        return E(y, o.formatLong);
      }
      return y;
    })
    .join("")
    .match(Ag)
    .map((y) => {
      if (y === "''") return { isToken: !1, value: "'" };
      const w = y[0];
      if (w === "'") return { isToken: !1, value: Bg(y) };
      if (Zu[w]) return { isToken: !0, value: y };
      if (w.match(Qg))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            w +
            "`"
        );
      return { isToken: !1, value: y };
    });
  o.localize.preprocessor && (a = o.localize.preprocessor(s, a));
  const u = { firstWeekContainsDate: l, weekStartsOn: i, locale: o };
  return a
    .map((y) => {
      if (!y.isToken) return y.value;
      const w = y.value;
      (Fg(w) || Rg(w)) && zg(w, t, String(e));
      const E = Zu[w[0]];
      return E(s, w, o.localize, u);
    })
    .join("");
}
function Bg(e) {
  const t = e.match(Hg);
  return t ? t[1].replace(Wg, "'") : e;
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Vg = {
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
 */ const Yg = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  ht = (e, t) => {
    const n = v.forwardRef(
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
        v.createElement(
          "svg",
          {
            ref: d,
            ...Vg,
            width: o,
            height: o,
            stroke: r,
            strokeWidth: i ? (Number(l) * 24) / Number(o) : l,
            className: ["lucide", `lucide-${Yg(e)}`, s].join(" "),
            ...u,
          },
          [
            ...t.map(([p, g]) => v.createElement(p, g)),
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
 */ const Ps = ht("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qg = ht("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gg = ht("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kg = ht("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xg = ht("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jg = ht("Globe", [
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
 */ const Zg = ht("Layers", [
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
 */ const e0 = ht("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const t0 = ht("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const n0 = ht("Settings", [
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
 */ const r0 = ht("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
var o0 = Object.defineProperty,
  l0 = (e, t, n) =>
    t in e
      ? o0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Ti = (e, t, n) => (l0(e, typeof t != "symbol" ? t + "" : t, n), n);
let i0 = class {
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
  Mt = new i0(),
  ot = (e, t) => {
    Mt.isServer ? v.useEffect(e, t) : v.useLayoutEffect(e, t);
  };
function Lt(e) {
  let t = v.useRef(e);
  return (
    ot(() => {
      t.current = e;
    }, [e]),
    t
  );
}
let ne = function (e) {
  let t = Lt(e);
  return H.useCallback((...n) => t.current(...n), [t]);
};
function Gl(e) {
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
function _n() {
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
          Gl(() => {
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
        let r = _n();
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
  let [e] = v.useState(_n);
  return v.useEffect(() => () => e.dispose(), [e]), e;
}
function s0() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in Vr
    ? ((t) => t.useSyncExternalStore)(Vr)(
        () => () => {},
        () => !1,
        () => !e
      )
    : !1;
}
function pr() {
  let e = s0(),
    [t, n] = v.useState(Mt.isHandoffComplete);
  return (
    t && Mt.isHandoffComplete === !1 && n(!1),
    v.useEffect(() => {
      t !== !0 && n(!0);
    }, [t]),
    v.useEffect(() => Mt.handoff(), []),
    e ? !1 : t
  );
}
var rc;
let mr =
  (rc = H.useId) != null
    ? rc
    : function () {
        let e = pr(),
          [t, n] = H.useState(e ? () => Mt.nextId() : null);
        return (
          ot(() => {
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
function jf(e) {
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
var gn = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(gn || {}),
  Of = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(Of || {}),
  a0 = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(a0 || {});
function u0(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(Ts)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER)
        )
      );
}
var Mf = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(Mf || {});
function c0(e, t = 0) {
  var n;
  return e === ((n = jf(e)) == null ? void 0 : n.body)
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
var d0 = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(d0 || {});
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
function bn(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let f0 = ["textarea", "input"].join(",");
function p0(e) {
  var t, n;
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, f0)) !=
    null
    ? n
    : !1;
}
function m0(e, t = (n) => n) {
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
function tl(
  e,
  t,
  { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}
) {
  let l = Array.isArray(e)
      ? e.length > 0
        ? e[0].ownerDocument
        : document
      : e.ownerDocument,
    i = Array.isArray(e) ? (n ? m0(e) : e) : u0(e);
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
  return t & 6 && p0(g) && g.select(), 2;
}
function Lf() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  );
}
function h0() {
  return /Android/gi.test(window.navigator.userAgent);
}
function g0() {
  return Lf() || h0();
}
function Uo(e, t, n) {
  let r = Lt(t);
  v.useEffect(() => {
    function o(l) {
      r.current(l);
    }
    return (
      document.addEventListener(e, o, n),
      () => document.removeEventListener(e, o, n)
    );
  }, [e, n]);
}
function _f(e, t, n) {
  let r = Lt(t);
  v.useEffect(() => {
    function o(l) {
      r.current(l);
    }
    return (
      window.addEventListener(e, o, n),
      () => window.removeEventListener(e, o, n)
    );
  }, [e, n]);
}
function y0(e, t, n = !0) {
  let r = v.useRef(!1);
  v.useEffect(() => {
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
    return !c0(a, Mf.Loose) && a.tabIndex !== -1 && i.preventDefault(), t(i, a);
  }
  let l = v.useRef(null);
  Uo(
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
    Uo(
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
    Uo(
      "click",
      (i) => {
        g0() || (l.current && (o(i, () => l.current), (l.current = null)));
      },
      !0
    ),
    Uo(
      "touchend",
      (i) => o(i, () => (i.target instanceof HTMLElement ? i.target : null)),
      !0
    ),
    _f(
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
function yo(...e) {
  return v.useMemo(() => jf(...e), [...e]);
}
let Df = Symbol();
function v0(e, t = !0) {
  return Object.assign(e, { [Df]: t });
}
function gt(...e) {
  let t = v.useRef(e);
  v.useEffect(() => {
    t.current = e;
  }, [e]);
  let n = ne((r) => {
    for (let o of t.current)
      o != null && (typeof o == "function" ? o(r) : (o.current = r));
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[Df])) ? void 0 : n;
}
function La(e, t) {
  let n = v.useRef([]),
    r = ne(e);
  v.useEffect(() => {
    let o = [...n.current];
    for (let [l, i] of t.entries())
      if (n.current[l] !== i) {
        let s = r(t, o);
        return (n.current = t), s;
      }
  }, [r, ...t]);
}
function Pl(...e) {
  return Array.from(
    new Set(e.flatMap((t) => (typeof t == "string" ? t.split(" ") : [])))
  )
    .filter(Boolean)
    .join(" ");
}
var Tl = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(Tl || {}),
  Xt = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(Xt || {});
function lt({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: o,
  visible: l = !0,
  name: i,
  mergeRefs: s,
}) {
  s = s ?? w0;
  let a = $f(t, e);
  if (l) return Ho(a, n, r, i, s);
  let u = o ?? 0;
  if (u & 2) {
    let { static: d = !1, ...p } = a;
    if (d) return Ho(p, n, r, i, s);
  }
  if (u & 1) {
    let { unmount: d = !0, ...p } = a;
    return Ce(d ? 0 : 1, {
      0() {
        return null;
      },
      1() {
        return Ho({ ...p, hidden: !0, style: { display: "none" } }, n, r, i, s);
      },
    });
  }
  return Ho(a, n, r, i, s);
}
function Ho(e, t = {}, n, r, o) {
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
    for (let [y, w] of Object.entries(t))
      typeof w == "boolean" && (g = !0), w === !0 && x.push(y);
    g && (p["data-headlessui-state"] = x.join(" "));
  }
  if (l === v.Fragment && Object.keys(oc(a)).length > 0) {
    if (!v.isValidElement(d) || (Array.isArray(d) && d.length > 1))
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
          ? (...w) => Pl(g == null ? void 0 : g.className(...w), a.className)
          : Pl(g == null ? void 0 : g.className, a.className),
      y = x ? { className: x } : {};
    return v.cloneElement(
      d,
      Object.assign(
        {},
        $f(d.props, oc(ji(a, ["ref"]))),
        p,
        u,
        { ref: o(d.ref, u.ref) },
        y
      )
    );
  }
  return v.createElement(
    l,
    Object.assign(
      {},
      ji(a, ["ref"]),
      l !== v.Fragment && u,
      l !== v.Fragment && p
    ),
    d
  );
}
function w0(...e) {
  return e.every((t) => t == null)
    ? void 0
    : (t) => {
        for (let n of e)
          n != null && (typeof n == "function" ? n(t) : (n.current = t));
      };
}
function $f(...e) {
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
function Ge(e) {
  var t;
  return Object.assign(v.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name,
  });
}
function oc(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function ji(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
let x0 = "div";
var jl = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(jl || {});
function S0(e, t) {
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
  return lt({
    ourProps: l,
    theirProps: o,
    slot: {},
    defaultTag: x0,
    name: "Hidden",
  });
}
let js = Ge(S0),
  _a = v.createContext(null);
_a.displayName = "OpenClosedContext";
var We = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(We || {});
function Da() {
  return v.useContext(_a);
}
function k0({ value: e, children: t }) {
  return H.createElement(_a.Provider, { value: e }, t);
}
function E0(e) {
  function t() {
    document.readyState !== "loading" &&
      (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" &&
    typeof document < "u" &&
    (document.addEventListener("DOMContentLoaded", t), t());
}
let qt = [];
E0(() => {
  function e(t) {
    t.target instanceof HTMLElement &&
      t.target !== document.body &&
      qt[0] !== t.target &&
      (qt.unshift(t.target),
      (qt = qt.filter((n) => n != null && n.isConnected)),
      qt.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }),
    window.addEventListener("mousedown", e, { capture: !0 }),
    window.addEventListener("focus", e, { capture: !0 }),
    document.body.addEventListener("click", e, { capture: !0 }),
    document.body.addEventListener("mousedown", e, { capture: !0 }),
    document.body.addEventListener("focus", e, { capture: !0 });
});
function b0(e) {
  let t = e.parentElement,
    n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && N0(n) ? !1 : r;
}
function N0(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
var Rf = ((e) => (
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
))(Rf || {});
function Ff(e, t, n, r) {
  let o = Lt(n);
  v.useEffect(() => {
    e = e ?? window;
    function l(i) {
      o.current(i);
    }
    return e.addEventListener(t, l, r), () => e.removeEventListener(t, l, r);
  }, [e, t, r]);
}
function vo() {
  let e = v.useRef(!1);
  return (
    ot(
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
function zf(e) {
  let t = ne(e),
    n = v.useRef(!1);
  v.useEffect(
    () => (
      (n.current = !1),
      () => {
        (n.current = !0),
          Gl(() => {
            n.current && t();
          });
      }
    ),
    [t]
  );
}
var $r = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))($r || {});
function C0() {
  let e = v.useRef(0);
  return (
    _f(
      "keydown",
      (t) => {
        t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
      },
      !0
    ),
    e
  );
}
function If(e) {
  if (!e) return new Set();
  if (typeof e == "function") return new Set(e());
  let t = new Set();
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let P0 = "div";
var Af = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.InitialFocus = 2)] = "InitialFocus"),
  (e[(e.TabLock = 4)] = "TabLock"),
  (e[(e.FocusLock = 8)] = "FocusLock"),
  (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
  (e[(e.All = 30)] = "All"),
  e
))(Af || {});
function T0(e, t) {
  let n = v.useRef(null),
    r = gt(n, t),
    { initialFocus: o, containers: l, features: i = 30, ...s } = e;
  pr() || (i = 1);
  let a = yo(n);
  M0({ ownerDocument: a }, !!(i & 16));
  let u = L0({ ownerDocument: a, container: n, initialFocus: o }, !!(i & 2));
  _0(
    { ownerDocument: a, container: n, containers: l, previousActiveElement: u },
    !!(i & 8)
  );
  let d = C0(),
    p = ne((w) => {
      let E = n.current;
      E &&
        ((m) => m())(() => {
          Ce(d.current, {
            [$r.Forwards]: () => {
              tl(E, gn.First, { skipElements: [w.relatedTarget] });
            },
            [$r.Backwards]: () => {
              tl(E, gn.Last, { skipElements: [w.relatedTarget] });
            },
          });
        });
    }),
    g = Ma(),
    x = v.useRef(!1),
    y = {
      ref: r,
      onKeyDown(w) {
        w.key == "Tab" &&
          ((x.current = !0),
          g.requestAnimationFrame(() => {
            x.current = !1;
          }));
      },
      onBlur(w) {
        let E = If(l);
        n.current instanceof HTMLElement && E.add(n.current);
        let m = w.relatedTarget;
        m instanceof HTMLElement &&
          m.dataset.headlessuiFocusGuard !== "true" &&
          (Uf(E, m) ||
            (x.current
              ? tl(
                  n.current,
                  Ce(d.current, {
                    [$r.Forwards]: () => gn.Next,
                    [$r.Backwards]: () => gn.Previous,
                  }) | gn.WrapAround,
                  { relativeTo: w.target }
                )
              : w.target instanceof HTMLElement && bn(w.target)));
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
        features: jl.Focusable,
      }),
    lt({ ourProps: y, theirProps: s, defaultTag: P0, name: "FocusTrap" }),
    !!(i & 4) &&
      H.createElement(js, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: p,
        features: jl.Focusable,
      })
  );
}
let j0 = Ge(T0),
  Pr = Object.assign(j0, { features: Af });
function O0(e = !0) {
  let t = v.useRef(qt.slice());
  return (
    La(
      ([n], [r]) => {
        r === !0 &&
          n === !1 &&
          Gl(() => {
            t.current.splice(0);
          }),
          r === !1 && n === !0 && (t.current = qt.slice());
      },
      [e, qt, t]
    ),
    ne(() => {
      var n;
      return (n = t.current.find((r) => r != null && r.isConnected)) != null
        ? n
        : null;
    })
  );
}
function M0({ ownerDocument: e }, t) {
  let n = O0(t);
  La(() => {
    t ||
      ((e == null ? void 0 : e.activeElement) ===
        (e == null ? void 0 : e.body) &&
        bn(n()));
  }, [t]),
    zf(() => {
      t && bn(n());
    });
}
function L0({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let o = v.useRef(null),
    l = vo();
  return (
    La(() => {
      if (!r) return;
      let i = t.current;
      i &&
        Gl(() => {
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
            ? bn(n.current)
            : tl(i, gn.First) === Of.Error &&
              console.warn(
                "There are no focusable elements inside the <FocusTrap />"
              ),
            (o.current = e == null ? void 0 : e.activeElement);
        });
    }, [r]),
    o
  );
}
function _0(
  { ownerDocument: e, container: t, containers: n, previousActiveElement: r },
  o
) {
  let l = vo();
  Ff(
    e == null ? void 0 : e.defaultView,
    "focus",
    (i) => {
      if (!o || !l.current) return;
      let s = If(n);
      t.current instanceof HTMLElement && s.add(t.current);
      let a = r.current;
      if (!a) return;
      let u = i.target;
      u && u instanceof HTMLElement
        ? Uf(s, u)
          ? ((r.current = u), bn(u))
          : (i.preventDefault(), i.stopPropagation(), bn(a))
        : bn(r.current);
    },
    !0
  );
}
function Uf(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
let Hf = v.createContext(!1);
function D0() {
  return v.useContext(Hf);
}
function Os(e) {
  return H.createElement(Hf.Provider, { value: e.force }, e.children);
}
function $0(e) {
  let t = D0(),
    n = v.useContext(Wf),
    r = yo(e),
    [o, l] = v.useState(() => {
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
    v.useEffect(() => {
      o !== null &&
        ((r != null && r.body.contains(o)) ||
          r == null ||
          r.body.appendChild(o));
    }, [o, r]),
    v.useEffect(() => {
      t || (n !== null && l(n.current));
    }, [n, l, t]),
    o
  );
}
let R0 = v.Fragment;
function F0(e, t) {
  let n = e,
    r = v.useRef(null),
    o = gt(
      v0((d) => {
        r.current = d;
      }),
      t
    ),
    l = yo(r),
    i = $0(r),
    [s] = v.useState(() => {
      var d;
      return Mt.isServer
        ? null
        : (d = l == null ? void 0 : l.createElement("div")) != null
        ? d
        : null;
    }),
    a = v.useContext(Ms),
    u = pr();
  return (
    ot(() => {
      !i ||
        !s ||
        i.contains(s) ||
        (s.setAttribute("data-headlessui-portal", ""), i.appendChild(s));
    }, [i, s]),
    ot(() => {
      if (s && a) return a.register(s);
    }, [a, s]),
    zf(() => {
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
        : Ef.createPortal(
            lt({
              ourProps: { ref: o },
              theirProps: n,
              defaultTag: R0,
              name: "Portal",
            }),
            s
          )
      : null
  );
}
let z0 = v.Fragment,
  Wf = v.createContext(null);
function I0(e, t) {
  let { target: n, ...r } = e,
    o = { ref: gt(t) };
  return H.createElement(
    Wf.Provider,
    { value: n },
    lt({ ourProps: o, theirProps: r, defaultTag: z0, name: "Popover.Group" })
  );
}
let Ms = v.createContext(null);
function A0() {
  let e = v.useContext(Ms),
    t = v.useRef([]),
    n = ne((l) => (t.current.push(l), e && e.register(l), () => r(l))),
    r = ne((l) => {
      let i = t.current.indexOf(l);
      i !== -1 && t.current.splice(i, 1), e && e.unregister(l);
    }),
    o = v.useMemo(
      () => ({ register: n, unregister: r, portals: t }),
      [n, r, t]
    );
  return [
    t,
    v.useMemo(
      () =>
        function ({ children: l }) {
          return H.createElement(Ms.Provider, { value: o }, l);
        },
      [o]
    ),
  ];
}
let U0 = Ge(F0),
  H0 = Ge(I0),
  Ls = Object.assign(U0, { Group: H0 });
function W0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const Q0 = typeof Object.is == "function" ? Object.is : W0,
  { useState: B0, useEffect: V0, useLayoutEffect: Y0, useDebugValue: q0 } = Vr;
function G0(e, t, n) {
  const r = t(),
    [{ inst: o }, l] = B0({ inst: { value: r, getSnapshot: t } });
  return (
    Y0(() => {
      (o.value = r), (o.getSnapshot = t), Oi(o) && l({ inst: o });
    }, [e, r, t]),
    V0(
      () => (
        Oi(o) && l({ inst: o }),
        e(() => {
          Oi(o) && l({ inst: o });
        })
      ),
      [e]
    ),
    q0(r),
    r
  );
}
function Oi(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !Q0(n, r);
  } catch {
    return !0;
  }
}
function K0(e, t, n) {
  return t();
}
const X0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  J0 = !X0,
  Z0 = J0 ? K0 : G0,
  ey = "useSyncExternalStore" in Vr ? ((e) => e.useSyncExternalStore)(Vr) : Z0;
function ty(e) {
  return ey(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function ny(e, t) {
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
function ry() {
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
function oy() {
  return Lf()
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
              let s = _n();
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
function ly() {
  return {
    before({ doc: e, d: t }) {
      t.style(e.documentElement, "overflow", "hidden");
    },
  };
}
function iy(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let xn = ny(() => new Map(), {
  PUSH(e, t) {
    var n;
    let r =
      (n = this.get(e)) != null
        ? n
        : { doc: e, count: 0, d: _n(), meta: new Set() };
    return r.count++, r.meta.add(t), this.set(e, r), this;
  },
  POP(e, t) {
    let n = this.get(e);
    return n && (n.count--, n.meta.delete(t)), this;
  },
  SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
    let r = { doc: e, d: t, meta: iy(n) },
      o = [oy(), ry(), ly()];
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
xn.subscribe(() => {
  let e = xn.getSnapshot(),
    t = new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden",
      o = n.count !== 0;
    ((o && !r) || (!o && r)) &&
      xn.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
      n.count === 0 && xn.dispatch("TEARDOWN", n);
  }
});
function sy(e, t, n) {
  let r = ty(xn),
    o = e ? r.get(e) : void 0,
    l = o ? o.count > 0 : !1;
  return (
    ot(() => {
      if (!(!e || !t))
        return xn.dispatch("PUSH", e, n), () => xn.dispatch("POP", e, n);
    }, [t, e]),
    l
  );
}
let Mi = new Map(),
  Tr = new Map();
function lc(e, t = !0) {
  ot(() => {
    var n;
    if (!t) return;
    let r = typeof e == "function" ? e() : e.current;
    if (!r) return;
    function o() {
      var i;
      if (!r) return;
      let s = (i = Tr.get(r)) != null ? i : 1;
      if ((s === 1 ? Tr.delete(r) : Tr.set(r, s - 1), s !== 1)) return;
      let a = Mi.get(r);
      a &&
        (a["aria-hidden"] === null
          ? r.removeAttribute("aria-hidden")
          : r.setAttribute("aria-hidden", a["aria-hidden"]),
        (r.inert = a.inert),
        Mi.delete(r));
    }
    let l = (n = Tr.get(r)) != null ? n : 0;
    return (
      Tr.set(r, l + 1),
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
function ay({
  defaultContainers: e = [],
  portals: t,
  mainTreeNodeRef: n,
} = {}) {
  var r;
  let o = v.useRef((r = n == null ? void 0 : n.current) != null ? r : null),
    l = yo(o),
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
    MainTreeNode: v.useMemo(
      () =>
        function () {
          return n != null
            ? null
            : H.createElement(js, { features: jl.Hidden, ref: o });
        },
      [o, n]
    ),
  };
}
let $a = v.createContext(() => {});
$a.displayName = "StackContext";
var _s = ((e) => ((e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e))(
  _s || {}
);
function uy() {
  return v.useContext($a);
}
function cy({ children: e, onUpdate: t, type: n, element: r, enabled: o }) {
  let l = uy(),
    i = ne((...s) => {
      t == null || t(...s), l(...s);
    });
  return (
    ot(() => {
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
let Qf = v.createContext(null);
function Bf() {
  let e = v.useContext(Qf);
  if (e === null) {
    let t = new Error(
      "You used a <Description /> component, but it is not inside a relevant parent."
    );
    throw (Error.captureStackTrace && Error.captureStackTrace(t, Bf), t);
  }
  return e;
}
function dy() {
  let [e, t] = v.useState([]);
  return [
    e.length > 0 ? e.join(" ") : void 0,
    v.useMemo(
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
            o = v.useMemo(
              () => ({
                register: r,
                slot: n.slot,
                name: n.name,
                props: n.props,
              }),
              [r, n.slot, n.name, n.props]
            );
          return H.createElement(Qf.Provider, { value: o }, n.children);
        },
      [t]
    ),
  ];
}
let fy = "p";
function py(e, t) {
  let n = mr(),
    { id: r = `headlessui-description-${n}`, ...o } = e,
    l = Bf(),
    i = gt(t);
  ot(() => l.register(r), [r, l.register]);
  let s = { ref: i, ...l.props, id: r };
  return lt({
    ourProps: s,
    theirProps: o,
    slot: l.slot || {},
    defaultTag: fy,
    name: l.name || "Description",
  });
}
let my = Ge(py),
  hy = Object.assign(my, {});
var gy = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(gy || {}),
  yy = ((e) => ((e[(e.SetTitleId = 0)] = "SetTitleId"), e))(yy || {});
let vy = {
    0(e, t) {
      return e.titleId === t.id ? e : { ...e, titleId: t.id };
    },
  },
  Ol = v.createContext(null);
Ol.displayName = "DialogContext";
function wo(e) {
  let t = v.useContext(Ol);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, wo), n);
  }
  return t;
}
function wy(e, t, n = () => [document.body]) {
  sy(e, t, (r) => {
    var o;
    return { containers: [...((o = r.containers) != null ? o : []), n] };
  });
}
function xy(e, t) {
  return Ce(t.type, vy, e, t);
}
let Sy = "div",
  ky = Tl.RenderStrategy | Tl.Static;
function Ey(e, t) {
  let n = mr(),
    {
      id: r = `headlessui-dialog-${n}`,
      open: o,
      onClose: l,
      initialFocus: i,
      role: s = "dialog",
      __demoMode: a = !1,
      ...u
    } = e,
    [d, p] = v.useState(0),
    g = v.useRef(!1);
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
  o === void 0 && x !== null && (o = (x & We.Open) === We.Open);
  let y = v.useRef(null),
    w = gt(y, t),
    E = yo(y),
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
    [k, N] = v.useReducer(xy, {
      titleId: null,
      descriptionId: null,
      panelRef: v.createRef(),
    }),
    C = ne(() => l(!1)),
    P = ne((ee) => N({ type: 0, id: ee })),
    M = pr() ? (a ? !1 : h === 0) : !1,
    I = d > 1,
    _ = v.useContext(Ol) !== null,
    [re, z] = A0(),
    ye = {
      get current() {
        var ee;
        return (ee = k.panelRef.current) != null ? ee : y.current;
      },
    },
    {
      resolveContainers: Se,
      mainTreeNodeRef: Te,
      MainTreeNode: De,
    } = ay({ portals: re, defaultContainers: [ye] }),
    pe = I ? "parent" : "leaf",
    j = x !== null ? (x & We.Closing) === We.Closing : !1,
    D = _ || j ? !1 : M,
    $ = v.useCallback(() => {
      var ee, Xe;
      return (Xe = Array.from(
        (ee = E == null ? void 0 : E.querySelectorAll("body > *")) != null
          ? ee
          : []
      ).find((je) =>
        je.id === "headlessui-portal-root"
          ? !1
          : je.contains(Te.current) && je instanceof HTMLElement
      )) != null
        ? Xe
        : null;
    }, [Te]);
  lc($, D);
  let R = I ? !0 : M,
    B = v.useCallback(() => {
      var ee, Xe;
      return (Xe = Array.from(
        (ee =
          E == null
            ? void 0
            : E.querySelectorAll("[data-headlessui-portal]")) != null
          ? ee
          : []
      ).find((je) => je.contains(Te.current) && je instanceof HTMLElement)) !=
        null
        ? Xe
        : null;
    }, [Te]);
  lc(B, R),
    y0(
      Se,
      (ee) => {
        ee.preventDefault(), C();
      },
      !(!M || I)
    );
  let ae = !(I || h !== 0);
  Ff(E == null ? void 0 : E.defaultView, "keydown", (ee) => {
    ae &&
      (ee.defaultPrevented ||
        (ee.key === Rf.Escape &&
          (ee.preventDefault(), ee.stopPropagation(), C())));
  }),
    wy(E, !(j || h !== 0 || _), Se),
    v.useEffect(() => {
      if (h !== 0 || !y.current) return;
      let ee = new ResizeObserver((Xe) => {
        for (let je of Xe) {
          let fn = je.target.getBoundingClientRect();
          fn.x === 0 && fn.y === 0 && fn.width === 0 && fn.height === 0 && C();
        }
      });
      return ee.observe(y.current), () => ee.disconnect();
    }, [h, y, C]);
  let [it, $e] = dy(),
    Zl = v.useMemo(
      () => [{ dialogState: h, close: C, setTitleId: P }, k],
      [h, k, C, P]
    ),
    xo = v.useMemo(() => ({ open: h === 0 }), [h]),
    ei = {
      ref: w,
      id: r,
      role: s,
      "aria-modal": h === 0 ? !0 : void 0,
      "aria-labelledby": k.titleId,
      "aria-describedby": it,
    };
  return H.createElement(
    cy,
    {
      type: "Dialog",
      enabled: h === 0,
      element: y,
      onUpdate: ne((ee, Xe) => {
        Xe === "Dialog" &&
          Ce(ee, {
            [_s.Add]: () => p((je) => je + 1),
            [_s.Remove]: () => p((je) => je - 1),
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
          Ol.Provider,
          { value: Zl },
          H.createElement(
            Ls.Group,
            { target: y },
            H.createElement(
              Os,
              { force: !1 },
              H.createElement(
                $e,
                { slot: xo, name: "Dialog.Description" },
                H.createElement(
                  Pr,
                  {
                    initialFocus: i,
                    containers: Se,
                    features: M
                      ? Ce(pe, {
                          parent: Pr.features.RestoreFocus,
                          leaf: Pr.features.All & ~Pr.features.FocusLock,
                        })
                      : Pr.features.None,
                  },
                  H.createElement(
                    z,
                    null,
                    lt({
                      ourProps: ei,
                      theirProps: u,
                      slot: xo,
                      defaultTag: Sy,
                      features: ky,
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
    H.createElement(De, null)
  );
}
let by = "div";
function Ny(e, t) {
  let n = mr(),
    { id: r = `headlessui-dialog-overlay-${n}`, ...o } = e,
    [{ dialogState: l, close: i }] = wo("Dialog.Overlay"),
    s = gt(t),
    a = ne((d) => {
      if (d.target === d.currentTarget) {
        if (b0(d.currentTarget)) return d.preventDefault();
        d.preventDefault(), d.stopPropagation(), i();
      }
    }),
    u = v.useMemo(() => ({ open: l === 0 }), [l]);
  return lt({
    ourProps: { ref: s, id: r, "aria-hidden": !0, onClick: a },
    theirProps: o,
    slot: u,
    defaultTag: by,
    name: "Dialog.Overlay",
  });
}
let Cy = "div";
function Py(e, t) {
  let n = mr(),
    { id: r = `headlessui-dialog-backdrop-${n}`, ...o } = e,
    [{ dialogState: l }, i] = wo("Dialog.Backdrop"),
    s = gt(t);
  v.useEffect(() => {
    if (i.panelRef.current === null)
      throw new Error(
        "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing."
      );
  }, [i.panelRef]);
  let a = v.useMemo(() => ({ open: l === 0 }), [l]);
  return H.createElement(
    Os,
    { force: !0 },
    H.createElement(
      Ls,
      null,
      lt({
        ourProps: { ref: s, id: r, "aria-hidden": !0 },
        theirProps: o,
        slot: a,
        defaultTag: Cy,
        name: "Dialog.Backdrop",
      })
    )
  );
}
let Ty = "div";
function jy(e, t) {
  let n = mr(),
    { id: r = `headlessui-dialog-panel-${n}`, ...o } = e,
    [{ dialogState: l }, i] = wo("Dialog.Panel"),
    s = gt(t, i.panelRef),
    a = v.useMemo(() => ({ open: l === 0 }), [l]),
    u = ne((d) => {
      d.stopPropagation();
    });
  return lt({
    ourProps: { ref: s, id: r, onClick: u },
    theirProps: o,
    slot: a,
    defaultTag: Ty,
    name: "Dialog.Panel",
  });
}
let Oy = "h2";
function My(e, t) {
  let n = mr(),
    { id: r = `headlessui-dialog-title-${n}`, ...o } = e,
    [{ dialogState: l, setTitleId: i }] = wo("Dialog.Title"),
    s = gt(t);
  v.useEffect(() => (i(r), () => i(null)), [r, i]);
  let a = v.useMemo(() => ({ open: l === 0 }), [l]);
  return lt({
    ourProps: { ref: s, id: r },
    theirProps: o,
    slot: a,
    defaultTag: Oy,
    name: "Dialog.Title",
  });
}
let Ly = Ge(Ey),
  _y = Ge(Py),
  Dy = Ge(jy),
  $y = Ge(Ny),
  Ry = Ge(My),
  er = Object.assign(Ly, {
    Backdrop: _y,
    Panel: Dy,
    Overlay: $y,
    Title: Ry,
    Description: hy,
  });
function Fy(e = 0) {
  let [t, n] = v.useState(e),
    r = vo(),
    o = v.useCallback(
      (a) => {
        r.current && n((u) => u | a);
      },
      [t, r]
    ),
    l = v.useCallback((a) => !!(t & a), [t]),
    i = v.useCallback(
      (a) => {
        r.current && n((u) => u & ~a);
      },
      [n, r]
    ),
    s = v.useCallback(
      (a) => {
        r.current && n((u) => u ^ a);
      },
      [n]
    );
  return { flags: t, addFlag: o, hasFlag: l, removeFlag: i, toggleFlag: s };
}
function zy(e) {
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
function Iy(e, t) {
  let n = _n();
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
function Ay(e, t, n, r) {
  let o = n ? "enter" : "leave",
    l = _n(),
    i = r !== void 0 ? zy(r) : () => {};
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
        Iy(
          e,
          () => (_i(e, ...t.base, ...s), Li(e, ...t.base, ...t.entered), i())
        );
    }),
    l.dispose
  );
}
function Uy({
  immediate: e,
  container: t,
  direction: n,
  classes: r,
  onStart: o,
  onStop: l,
}) {
  let i = vo(),
    s = Ma(),
    a = Lt(n);
  ot(() => {
    e && (a.current = "enter");
  }, [e]),
    ot(() => {
      let u = _n();
      s.add(u.dispose);
      let d = t.current;
      if (d && a.current !== "idle" && i.current)
        return (
          u.dispose(),
          o.current(a.current),
          u.add(
            Ay(d, r.current, a.current === "enter", () => {
              u.dispose(), l.current(a.current);
            })
          ),
          u.dispose
        );
    }, [n]);
}
function At(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let Kl = v.createContext(null);
Kl.displayName = "TransitionContext";
var Hy = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(Hy || {});
function Wy() {
  let e = v.useContext(Kl);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
function Qy() {
  let e = v.useContext(Xl);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
let Xl = v.createContext(null);
Xl.displayName = "NestingContext";
function Jl(e) {
  return "children" in e
    ? Jl(e.children)
    : e.current
        .filter(({ el: t }) => t.current !== null)
        .filter(({ state: t }) => t === "visible").length > 0;
}
function Vf(e, t) {
  let n = Lt(e),
    r = v.useRef([]),
    o = vo(),
    l = Ma(),
    i = ne((x, y = Xt.Hidden) => {
      let w = r.current.findIndex(({ el: E }) => E === x);
      w !== -1 &&
        (Ce(y, {
          [Xt.Unmount]() {
            r.current.splice(w, 1);
          },
          [Xt.Hidden]() {
            r.current[w].state = "hidden";
          },
        }),
        l.microTask(() => {
          var E;
          !Jl(r) && o.current && ((E = n.current) == null || E.call(n));
        }));
    }),
    s = ne((x) => {
      let y = r.current.find(({ el: w }) => w === x);
      return (
        y
          ? y.state !== "visible" && (y.state = "visible")
          : r.current.push({ el: x, state: "visible" }),
        () => i(x, Xt.Unmount)
      );
    }),
    a = v.useRef([]),
    u = v.useRef(Promise.resolve()),
    d = v.useRef({ enter: [], leave: [], idle: [] }),
    p = ne((x, y, w) => {
      a.current.splice(0),
        t &&
          (t.chains.current[y] = t.chains.current[y].filter(([E]) => E !== x)),
        t == null ||
          t.chains.current[y].push([
            x,
            new Promise((E) => {
              a.current.push(E);
            }),
          ]),
        t == null ||
          t.chains.current[y].push([
            x,
            new Promise((E) => {
              Promise.all(d.current[y].map(([m, f]) => f)).then(() => E());
            }),
          ]),
        y === "enter"
          ? (u.current = u.current
              .then(() => (t == null ? void 0 : t.wait.current))
              .then(() => w(y)))
          : w(y);
    }),
    g = ne((x, y, w) => {
      Promise.all(d.current[y].splice(0).map(([E, m]) => m))
        .then(() => {
          var E;
          (E = a.current.shift()) == null || E();
        })
        .then(() => w(y));
    });
  return v.useMemo(
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
function By() {}
let Vy = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function ic(e) {
  var t;
  let n = {};
  for (let r of Vy) n[r] = (t = e[r]) != null ? t : By;
  return n;
}
function Yy(e) {
  let t = v.useRef(ic(e));
  return (
    v.useEffect(() => {
      t.current = ic(e);
    }, [e]),
    t
  );
}
let qy = "div",
  Yf = Tl.RenderStrategy;
function Gy(e, t) {
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
      leaveTo: y,
      ...w
    } = e,
    E = v.useRef(null),
    m = gt(E, t),
    f = (n = w.unmount) == null || n ? Xt.Unmount : Xt.Hidden,
    { show: h, appear: k, initial: N } = Wy(),
    [C, P] = v.useState(h ? "visible" : "hidden"),
    M = Qy(),
    { register: I, unregister: _ } = M;
  v.useEffect(() => I(E), [I, E]),
    v.useEffect(() => {
      if (f === Xt.Hidden && E.current) {
        if (h && C !== "visible") {
          P("visible");
          return;
        }
        return Ce(C, { hidden: () => _(E), visible: () => I(E) });
      }
    }, [C, E, I, _, h, f]);
  let re = Lt({
      base: At(w.className),
      enter: At(a),
      enterFrom: At(u),
      enterTo: At(d),
      entered: At(p),
      leave: At(g),
      leaveFrom: At(x),
      leaveTo: At(y),
    }),
    z = Yy({ beforeEnter: o, afterEnter: l, beforeLeave: i, afterLeave: s }),
    ye = pr();
  v.useEffect(() => {
    if (ye && C === "visible" && E.current === null)
      throw new Error(
        "Did you forget to passthrough the `ref` to the actual DOM node?"
      );
  }, [E, C, ye]);
  let Se = N && !k,
    Te = k && h && N,
    De = !ye || Se ? "idle" : h ? "enter" : "leave",
    pe = Fy(0),
    j = ne((ae) =>
      Ce(ae, {
        enter: () => {
          pe.addFlag(We.Opening), z.current.beforeEnter();
        },
        leave: () => {
          pe.addFlag(We.Closing), z.current.beforeLeave();
        },
        idle: () => {},
      })
    ),
    D = ne((ae) =>
      Ce(ae, {
        enter: () => {
          pe.removeFlag(We.Opening), z.current.afterEnter();
        },
        leave: () => {
          pe.removeFlag(We.Closing), z.current.afterLeave();
        },
        idle: () => {},
      })
    ),
    $ = Vf(() => {
      P("hidden"), _(E);
    }, M),
    R = v.useRef(!1);
  Uy({
    immediate: Te,
    container: E,
    classes: re,
    direction: De,
    onStart: Lt((ae) => {
      (R.current = !0), $.onStart(E, ae, j);
    }),
    onStop: Lt((ae) => {
      (R.current = !1),
        $.onStop(E, ae, D),
        ae === "leave" && !Jl($) && (P("hidden"), _(E));
    }),
  });
  let B = w,
    vt = { ref: m };
  return (
    Te
      ? (B = {
          ...B,
          className: Pl(
            w.className,
            ...re.current.enter,
            ...re.current.enterFrom
          ),
        })
      : R.current &&
        ((B.className = Pl(
          w.className,
          (r = E.current) == null ? void 0 : r.className
        )),
        B.className === "" && delete B.className),
    H.createElement(
      Xl.Provider,
      { value: $ },
      H.createElement(
        k0,
        { value: Ce(C, { visible: We.Open, hidden: We.Closed }) | pe.flags },
        lt({
          ourProps: vt,
          theirProps: B,
          defaultTag: qy,
          features: Yf,
          visible: C === "visible",
          name: "Transition.Child",
        })
      )
    )
  );
}
function Ky(e, t) {
  let { show: n, appear: r = !1, unmount: o = !0, ...l } = e,
    i = v.useRef(null),
    s = gt(i, t);
  pr();
  let a = Da();
  if (
    (n === void 0 && a !== null && (n = (a & We.Open) === We.Open),
    ![!0, !1].includes(n))
  )
    throw new Error(
      "A <Transition /> is used but it is missing a `show={true | false}` prop."
    );
  let [u, d] = v.useState(n ? "visible" : "hidden"),
    p = Vf(() => {
      d("hidden");
    }),
    [g, x] = v.useState(!0),
    y = v.useRef([n]);
  ot(() => {
    g !== !1 &&
      y.current[y.current.length - 1] !== n &&
      (y.current.push(n), x(!1));
  }, [y, n]);
  let w = v.useMemo(() => ({ show: n, appear: r, initial: g }), [n, r, g]);
  v.useEffect(() => {
    if (n) d("visible");
    else if (!Jl(p)) d("hidden");
    else {
      let h = i.current;
      if (!h) return;
      let k = h.getBoundingClientRect();
      k.x === 0 && k.y === 0 && k.width === 0 && k.height === 0 && d("hidden");
    }
  }, [n, p]);
  let E = { unmount: o },
    m = ne(() => {
      var h;
      g && x(!1), (h = e.beforeEnter) == null || h.call(e);
    }),
    f = ne(() => {
      var h;
      g && x(!1), (h = e.beforeLeave) == null || h.call(e);
    });
  return H.createElement(
    Xl.Provider,
    { value: p },
    H.createElement(
      Kl.Provider,
      { value: w },
      lt({
        ourProps: {
          ...E,
          as: v.Fragment,
          children: H.createElement(qf, {
            ref: s,
            ...E,
            ...l,
            beforeEnter: m,
            beforeLeave: f,
          }),
        },
        theirProps: {},
        defaultTag: v.Fragment,
        features: Yf,
        visible: u === "visible",
        name: "Transition",
      })
    )
  );
}
function Xy(e, t) {
  let n = v.useContext(Kl) !== null,
    r = Da() !== null;
  return H.createElement(
    H.Fragment,
    null,
    !n && r
      ? H.createElement(Ds, { ref: t, ...e })
      : H.createElement(qf, { ref: t, ...e })
  );
}
let Ds = Ge(Ky),
  qf = Ge(Gy),
  Jy = Ge(Xy),
  tr = Object.assign(Ds, { Child: Jy, Root: Ds }),
  Sn = null;
const Zy = async () => {
    if (Sn) return Sn;
    try {
      const e = await fetch("../config.txt");
      if (!e.ok) throw new Error("Failed to load configuration");
      return (Sn = await e.json()), Sn;
    } catch (e) {
      throw (console.error("Error loading config:", e), e);
    }
  },
  Gf = (e) => {
    if (!Sn) throw new Error("Configuration not loaded");
    return `${Sn.domain}${e}`;
  },
  ev = () => Sn,
  Bt = async (e, t = {}) => {
    const n = Gf(e),
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
  tv = {
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
  Kf = v.createContext(void 0),
  nv = ({ children: e }) => {
    const [t, n] = v.useState("zh"),
      r = () => {
        n((l) => (l === "zh" ? "en" : "zh"));
      },
      o = (l) => tv[t][l] || l;
    return c.jsx(Kf.Provider, {
      value: { language: t, toggleLanguage: r, t: o },
      children: e,
    });
  },
  yt = () => {
    const e = v.useContext(Kf);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  },
  rv = ({ startDate: e, endDate: t, onDateChange: n }) => {
    const { t: r } = yt(),
      [o, l] = v.useState(!1),
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
                c.jsx(Kg, { size: 20, className: "text-gray-600" }),
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
                  ? c.jsx(Gg, { size: 20, className: "text-gray-600" })
                  : c.jsx(qg, { size: 20, className: "text-gray-600" }),
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
                              value: q(e, "yyyy-MM-dd"),
                              onChange: (a) =>
                                i(
                                  a.target.value,
                                  q(e, "HH:mm:ss"),
                                  q(t, "yyyy-MM-dd"),
                                  q(t, "HH:mm:ss")
                                ),
                              className:
                                "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                            }),
                            c.jsx("input", {
                              type: "time",
                              value: q(e, "HH:mm:ss"),
                              onChange: (a) =>
                                i(
                                  q(e, "yyyy-MM-dd"),
                                  a.target.value,
                                  q(t, "yyyy-MM-dd"),
                                  q(t, "HH:mm:ss")
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
                              value: q(t, "yyyy-MM-dd"),
                              onChange: (a) =>
                                i(
                                  q(e, "yyyy-MM-dd"),
                                  q(e, "HH:mm:ss"),
                                  a.target.value,
                                  q(t, "HH:mm:ss")
                                ),
                              className:
                                "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                            }),
                            c.jsx("input", {
                              type: "time",
                              value: q(t, "HH:mm:ss"),
                              onChange: (a) =>
                                i(
                                  q(e, "yyyy-MM-dd"),
                                  q(e, "HH:mm:ss"),
                                  q(t, "yyyy-MM-dd"),
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
  ov = ({ value: e, onChange: t }) => {
    const { t: n } = yt();
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
  Xf = (e) => {
    const t = e.find((n) => n.name === "撥補核撥");
    return (t == null ? void 0 : t.state) === !0;
  },
  lv = (e) =>
    Xf(e.Permissions)
      ? (sessionStorage.setItem(Ra, JSON.stringify(e)), !0)
      : !1,
  Br = () => {
    const e = sessionStorage.getItem(Ra);
    if (!e) return null;
    try {
      const t = JSON.parse(e);
      return !t.GUID || !t.ID || !t.Name || !Xf(t.Permissions)
        ? (Ml(), null)
        : t;
    } catch {
      return Ml(), null;
    }
  },
  Ml = () => {
    sessionStorage.removeItem(Ra);
  },
  iv = () => {
    const e = Br();
    if (!e) return !1;
    const t = new Date(e.loginTime).getTime();
    return (new Date().getTime() - t) / (1e3 * 60 * 60) > 24 ? (Ml(), !1) : !0;
  },
  sv = ({ size: e = "medium", className: t = "" }) => {
    const n = { small: "h-4 w-4", medium: "h-6 w-6", large: "h-8 w-8" };
    return c.jsx("div", {
      className: `animate-spin rounded-full border-2 border-white border-t-transparent ${n[e]} ${t}`,
    });
  },
  av = ({
    onClick: e,
    isLoading: t = !1,
    disabled: n = !1,
    className: r = "",
  }) => {
    const { t: o } = yt();
    return c.jsxs("button", {
      onClick: e,
      disabled: t || n,
      className: `px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50 transition-colors flex items-center justify-center ${r}`,
      children: [
        t
          ? c.jsx(sv, { size: "small\\", className: "mr-2" })
          : c.jsx(Xg, { size: 18, className: "mr-2" }),
        o("button.export"),
      ],
    });
  };
function Jf(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Jf(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function uv() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Jf(e)) && (r && (r += " "), (r += t));
  return r;
}
const Fa = "-",
  cv = (e) => {
    const t = fv(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (i) => {
        const s = i.split(Fa);
        return s[0] === "" && s.length !== 1 && s.shift(), Zf(s, t) || dv(i);
      },
      getConflictingClassGroupIds: (i, s) => {
        const a = n[i] || [];
        return s && r[i] ? [...a, ...r[i]] : a;
      },
    };
  },
  Zf = (e, t) => {
    var i;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? Zf(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const l = e.join(Fa);
    return (i = t.validators.find(({ validator: s }) => s(l))) == null
      ? void 0
      : i.classGroupId;
  },
  sc = /^\[(.+)\]$/,
  dv = (e) => {
    if (sc.test(e)) {
      const t = sc.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  fv = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      mv(Object.entries(e.classGroups), n).forEach(([l, i]) => {
        $s(i, r, l, t);
      }),
      r
    );
  },
  $s = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const l = o === "" ? t : ac(t, o);
        l.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (pv(o)) {
          $s(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([l, i]) => {
        $s(i, ac(t, l), n, r);
      });
    });
  },
  ac = (e, t) => {
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
  pv = (e) => e.isThemeGetter,
  mv = (e, t) =>
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
  hv = (e) => {
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
  ep = "!",
  gv = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      l = t.length,
      i = (s) => {
        const a = [];
        let u = 0,
          d = 0,
          p;
        for (let E = 0; E < s.length; E++) {
          let m = s[E];
          if (u === 0) {
            if (m === o && (r || s.slice(E, E + l) === t)) {
              a.push(s.slice(d, E)), (d = E + l);
              continue;
            }
            if (m === "/") {
              p = E;
              continue;
            }
          }
          m === "[" ? u++ : m === "]" && u--;
        }
        const g = a.length === 0 ? s : s.substring(d),
          x = g.startsWith(ep),
          y = x ? g.substring(1) : g,
          w = p && p > d ? p - d : void 0;
        return {
          modifiers: a,
          hasImportantModifier: x,
          baseClassName: y,
          maybePostfixModifierPosition: w,
        };
      };
    return n ? (s) => n({ className: s, parseClassName: i }) : i;
  },
  yv = (e) => {
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
  vv = (e) => ({ cache: hv(e.cacheSize), parseClassName: gv(e), ...cv(e) }),
  wv = /\s+/,
  xv = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      l = [],
      i = e.trim().split(wv);
    let s = "";
    for (let a = i.length - 1; a >= 0; a -= 1) {
      const u = i[a],
        {
          modifiers: d,
          hasImportantModifier: p,
          baseClassName: g,
          maybePostfixModifierPosition: x,
        } = n(u);
      let y = !!x,
        w = r(y ? g.substring(0, x) : g);
      if (!w) {
        if (!y) {
          s = u + (s.length > 0 ? " " + s : s);
          continue;
        }
        if (((w = r(g)), !w)) {
          s = u + (s.length > 0 ? " " + s : s);
          continue;
        }
        y = !1;
      }
      const E = yv(d).join(":"),
        m = p ? E + ep : E,
        f = m + w;
      if (l.includes(f)) continue;
      l.push(f);
      const h = o(w, y);
      for (let k = 0; k < h.length; ++k) {
        const N = h[k];
        l.push(m + N);
      }
      s = u + (s.length > 0 ? " " + s : s);
    }
    return s;
  };
function Sv() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = tp(t)) && (r && (r += " "), (r += n));
  return r;
}
const tp = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = tp(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function kv(e, ...t) {
  let n,
    r,
    o,
    l = i;
  function i(a) {
    const u = t.reduce((d, p) => p(d), e());
    return (n = vv(u)), (r = n.cache.get), (o = n.cache.set), (l = s), s(a);
  }
  function s(a) {
    const u = r(a);
    if (u) return u;
    const d = xv(a, n);
    return o(a, d), d;
  }
  return function () {
    return l(Sv.apply(null, arguments));
  };
}
const X = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  np = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Ev = /^\d+\/\d+$/,
  bv = new Set(["px", "full", "screen"]),
  Nv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Cv =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Pv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Tv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  jv =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Nt = (e) => nr(e) || bv.has(e) || Ev.test(e),
  Ut = (e) => hr(e, "length", Fv),
  nr = (e) => !!e && !Number.isNaN(Number(e)),
  Di = (e) => hr(e, "number", nr),
  jr = (e) => !!e && Number.isInteger(Number(e)),
  Ov = (e) => e.endsWith("%") && nr(e.slice(0, -1)),
  F = (e) => np.test(e),
  Ht = (e) => Nv.test(e),
  Mv = new Set(["length", "size", "percentage"]),
  Lv = (e) => hr(e, Mv, rp),
  _v = (e) => hr(e, "position", rp),
  Dv = new Set(["image", "url"]),
  $v = (e) => hr(e, Dv, Iv),
  Rv = (e) => hr(e, "", zv),
  Or = () => !0,
  hr = (e, t, n) => {
    const r = np.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  Fv = (e) => Cv.test(e) && !Pv.test(e),
  rp = () => !1,
  zv = (e) => Tv.test(e),
  Iv = (e) => jv.test(e),
  Av = () => {
    const e = X("colors"),
      t = X("spacing"),
      n = X("blur"),
      r = X("brightness"),
      o = X("borderColor"),
      l = X("borderRadius"),
      i = X("borderSpacing"),
      s = X("borderWidth"),
      a = X("contrast"),
      u = X("grayscale"),
      d = X("hueRotate"),
      p = X("invert"),
      g = X("gap"),
      x = X("gradientColorStops"),
      y = X("gradientColorStopPositions"),
      w = X("inset"),
      E = X("margin"),
      m = X("opacity"),
      f = X("padding"),
      h = X("saturate"),
      k = X("scale"),
      N = X("sepia"),
      C = X("skew"),
      P = X("space"),
      M = X("translate"),
      I = () => ["auto", "contain", "none"],
      _ = () => ["auto", "hidden", "clip", "visible", "scroll"],
      re = () => ["auto", F, t],
      z = () => [F, t],
      ye = () => ["", Nt, Ut],
      Se = () => ["auto", nr, F],
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
      De = () => ["solid", "dashed", "dotted", "double", "none"],
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
      R = () => [nr, F];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Or],
        spacing: [Nt, Ut],
        blur: ["none", "", Ht, F],
        brightness: R(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Ht, F],
        borderSpacing: z(),
        borderWidth: ye(),
        contrast: R(),
        grayscale: D(),
        hueRotate: R(),
        invert: D(),
        gap: z(),
        gradientColorStops: [e],
        gradientColorStopPositions: [Ov, Ut],
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
        columns: [{ columns: [Ht] }],
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
        z: [{ z: ["auto", jr, F] }],
        basis: [{ basis: re() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", F] }],
        grow: [{ grow: D() }],
        shrink: [{ shrink: D() }],
        order: [{ order: ["first", "last", "none", jr, F] }],
        "grid-cols": [{ "grid-cols": [Or] }],
        "col-start-end": [{ col: ["auto", { span: ["full", jr, F] }, F] }],
        "col-start": [{ "col-start": Se() }],
        "col-end": [{ "col-end": Se() }],
        "grid-rows": [{ "grid-rows": [Or] }],
        "row-start-end": [{ row: ["auto", { span: [jr, F] }, F] }],
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
        m: [{ m: [E] }],
        mx: [{ mx: [E] }],
        my: [{ my: [E] }],
        ms: [{ ms: [E] }],
        me: [{ me: [E] }],
        mt: [{ mt: [E] }],
        mr: [{ mr: [E] }],
        mb: [{ mb: [E] }],
        ml: [{ ml: [E] }],
        "space-x": [{ "space-x": [P] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [P] }],
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
              { screen: [Ht] },
              Ht,
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
        "font-size": [{ text: ["base", Ht, Ut] }],
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
        "font-family": [{ font: [Or] }],
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
        "line-clamp": [{ "line-clamp": ["none", nr, Di] }],
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
        "text-decoration-style": [{ decoration: [...De(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Nt, Ut] },
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
        "bg-position": [{ bg: [...Te(), _v] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Lv] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              $v,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [y] }],
        "gradient-via-pos": [{ via: [y] }],
        "gradient-to-pos": [{ to: [y] }],
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
        "border-style": [{ border: [...De(), "hidden"] }],
        "divide-x": [{ "divide-x": [s] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [s] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [m] }],
        "divide-style": [{ divide: De() }],
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
        "outline-style": [{ outline: ["", ...De()] }],
        "outline-offset": [{ "outline-offset": [Nt, F] }],
        "outline-w": [{ outline: [Nt, Ut] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: ye() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [m] }],
        "ring-offset-w": [{ "ring-offset": [Nt, Ut] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", Ht, Rv] }],
        "shadow-color": [{ shadow: [Or] }],
        opacity: [{ opacity: [m] }],
        "mix-blend": [
          { "mix-blend": [...pe(), "plus-lighter", "plus-darker"] },
        ],
        "bg-blend": [{ "bg-blend": pe() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [a] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Ht, F] }],
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
        rotate: [{ rotate: [jr, F] }],
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
        "stroke-w": [{ stroke: [Nt, Ut, Di] }],
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
  Uv = kv(Av);
function Hv(...e) {
  return Uv(uv(e));
}
const uc = ({
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
      className: Hv(u, d[t], p[n], r && "opacity-50 cursor-not-allowed", i),
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
  Wv = { duration: 180, brightness: 0.9, color: "255,0,0" },
  Qv = [
    { label: "紅色", value: "255,0,0" },
    { label: "綠色", value: "0,0,255" },
    { label: "藍色", value: "0,255,0" },
    { label: "黃色", value: "255,255,0" },
  ],
  op = "lightSettings",
  Rs = () => {
    try {
      const e = localStorage.getItem(op);
      if (e) return JSON.parse(e);
    } catch (e) {
      console.error("Error loading light settings:", e);
    }
    return Wv;
  },
  Bv = (e) => {
    try {
      localStorage.setItem(op, JSON.stringify(e));
    } catch (t) {
      console.error("Error saving light settings:", t);
    }
  },
  Vv = () => {
    yt();
    const [e, t] = v.useState(!1),
      [n, r] = v.useState(Rs()),
      o = () => {
        Bv(n), t(!1);
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
          children: c.jsx(n0, { className: "w-5 h-5" }),
        }),
        c.jsx(tr, {
          appear: !0,
          show: e,
          as: v.Fragment,
          children: c.jsxs(er, {
            as: "div",
            className: "relative z-50",
            onClose: l,
            children: [
              c.jsx(tr.Child, {
                as: v.Fragment,
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
                  children: c.jsx(tr.Child, {
                    as: v.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: c.jsxs(er.Panel, {
                      className:
                        "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                      children: [
                        c.jsxs("div", {
                          className: "flex items-center justify-between mb-4",
                          children: [
                            c.jsx(er.Title, {
                              as: "h3",
                              className:
                                "text-lg font-medium leading-6 text-gray-900",
                              children: "亮燈設定",
                            }),
                            c.jsx("button", {
                              onClick: l,
                              className:
                                "text-gray-400 hover:text-gray-600 transition-colors",
                              children: c.jsx(r0, { className: "w-5 h-5" }),
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
                                  children: Qv.map((i) =>
                                    c.jsx(
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
                                              style: {
                                                backgroundColor: `rgb(${i.value})`,
                                              },
                                            }),
                                            i.label,
                                          ],
                                        }),
                                      },
                                      i.value
                                    )
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: "mt-6 flex gap-3",
                          children: [
                            c.jsx(uc, {
                              onClick: l,
                              variant: "secondary",
                              className: "flex-1",
                              children: "取消",
                            }),
                            c.jsx(uc, {
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
  Yv = [
    { value: "name", labelKey: "search.drugName" },
    { value: "code", labelKey: "search.drugCode" },
    { value: "requestingUnit", labelKey: "search.requestingUnit" },
    { value: "actionType", labelKey: "search.actionType" },
  ],
  qv = ({
    orders: e,
    startDate: t,
    endDate: n,
    onDateChange: r,
    onOrdersUpdate: o,
    isLoading: l,
  }) => {
    const { t: i } = yt(),
      [s, a] = v.useState(null),
      [u, d] = v.useState(!1),
      [p, g] = v.useState(""),
      [x, y] = v.useState(null),
      [w, E] = v.useState(!1),
      [m, f] = v.useState(null),
      [h, k] = v.useState(null),
      [N, C] = v.useState(!1),
      [P, M] = v.useState("等待過帳"),
      [I, _] = v.useState(!0),
      [re, z] = v.useState(!1),
      [ye, Se] = v.useState(!1),
      [Te, De] = v.useState("name"),
      [pe, j] = v.useState(""),
      [D, $] = v.useState(!1),
      [R, B] = v.useState(new Set()),
      [vt, ae] = v.useState(new Set()),
      Ke = v.useRef(new Map()),
      it = (S) => {
        const O = S.signedTime;
        if (!O || O === "-" || O === "1/01/01 00:00:00") return "-";
        if (O.match(/^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/)) return O;
        try {
          const T = new Date(O);
          if (!isNaN(T.getTime())) return q(T, "yyyy/MM/dd HH:mm:ss");
        } catch {}
        return O;
      };
    v.useEffect(
      () => () => {
        Ke.current.forEach((S) => clearTimeout(S)), Ke.current.clear();
      },
      []
    );
    const $e = (S) => S === "緊急申領",
      Zl = (S) => {
        M(S), r(t, n);
      },
      xo = (S) => {
        S.preventDefault();
      },
      ei = (S) => {
        S.key === "Enter" && S.preventDefault();
      },
      ee = async () => {
        $(!0);
        try {
          const S = await fetch(
            Gf("/api/materialRequisition/download_excel_by_requestTime"),
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ValueAry: [
                  q(t, "yyyy-MM-dd HH:mm:ss"),
                  q(n, "yyyy-MM-dd HH:mm:ss"),
                ],
              }),
            }
          );
          if (!S.ok) throw new Error("Export failed");
          const O = await S.blob(),
            T = window.URL.createObjectURL(O),
            W = document.createElement("a");
          (W.href = T),
            (W.download = `MaterialRequisition_${q(t, "yyyyMMdd")}_to_${q(
              n,
              "yyyyMMdd"
            )}.xlsx`),
            document.body.appendChild(W),
            W.click(),
            window.URL.revokeObjectURL(T),
            document.body.removeChild(W);
        } catch (S) {
          console.error("Export error:", S), y("匯出失敗，請稍後再試");
        } finally {
          $(!1);
        }
      },
      Xe = e.filter((S) => {
        let O = !1;
        if (
          (P === "全部"
            ? (O = !0)
            : P === "已過帳"
            ? (O = S.state === "已過帳" || S.state === "已簽收")
            : (O = S.state === P),
          !pe)
        )
          return O;
        const T = pe.toLowerCase();
        switch (Te) {
          case "name":
            return O && S.name.toLowerCase().includes(T);
          case "code":
            return O && S.code.toLowerCase().includes(T);
          case "requestingUnit":
            return O && S.requestingUnit.toLowerCase().includes(T);
          case "actionType":
            return O && S.actionType.toLowerCase().includes(T);
          default:
            return O;
        }
      }),
      je = Xe.reduce((S, O) => {
        const T = O.code;
        return (
          S[T] || (S[T] = { orders: [], drugName: O.name, drugCode: O.code }),
          S[T].orders.push(O),
          S
        );
      }, {});
    Object.values(je).forEach((S) => {
      S.orders.sort((O, T) => {
        const W = $e(O.actionType),
          G = $e(T.actionType);
        return W && !G ? -1 : !W && G ? 1 : 0;
      });
    });
    const fn = Object.entries(je).sort(([, S], [, O]) => {
        const T = S.orders.filter((bt) => $e(bt.actionType)),
          W = O.orders.filter((bt) => $e(bt.actionType)),
          G = T.length === S.orders.length && S.orders.length > 0,
          ke = W.length === O.orders.length && O.orders.length > 0,
          U = T.length > 0,
          me = W.length > 0;
        if (G && !ke) return -1;
        if (!G && ke) return 1;
        if (G === ke) {
          if (U && !me) return -1;
          if (!U && me) return 1;
        }
        return 0;
      }),
      lp = async () => {
        if (s) {
          if (!p || isNaN(Number(p)) || Number(p) < 0) {
            y("請輸入有效的數量");
            return;
          }
          E(!0), y(null);
          try {
            const S = await Bt(
              "/api/materialRequisition/update_actual_quantity",
              {
                method: "POST",
                body: { Data: { GUID: s.GUID, actualQuantity: p } },
              }
            );
            if (S.Code === 200) {
              const O = e.map((T) =>
                T.GUID === s.GUID ? { ...T, actualQuantity: p } : T
              );
              o(O), d(!1);
            } else throw new Error(S.Result || "更新失敗");
          } catch (S) {
            y(S instanceof Error ? S.message : "系統錯誤，請稍後再試");
          } finally {
            E(!1);
          }
        }
      },
      ip = async () => {
        const S = Br();
        if (!S) {
          y("無法取得使用者資訊");
          return;
        }
        const O = Xe.filter((G) => G.state === "等待過帳" && G.actualQuantity);
        if (O.length === 0) {
          y("沒有可核撥的訂單");
          return;
        }
        const W = `確認要核撥以下項目嗎？

${O.map((G) => `${G.name} - ${G.actualQuantity}`).join(`
`)}`;
        if (confirm(W)) {
          Se(!0), y(null);
          try {
            const ke = q(new Date(), "yyyy-MM-dd HH:mm:ss"),
              U = {
                Data: O.map((bt) => ({
                  ...bt,
                  issuingPerson: S.Name,
                  issuingPersonID: S.ID,
                  issueTime: ke,
                  notice: "False",
                  state: "已過帳",
                })),
              },
              me = await Bt("/api/materialRequisition/update_by_guid", {
                method: "POST",
                body: U,
              });
            if (me.Code === 200) r(t, n);
            else throw new Error(me.Result || "批次核撥失敗");
          } catch (G) {
            y(G instanceof Error ? G.message : "系統錯誤，請稍後再試");
          } finally {
            Se(!1);
          }
        }
      },
      sp = async (S, O) => {
        const T = Br();
        if (!T) {
          y("無法取得使用者資訊");
          return;
        }
        const W = O.orders.filter(
          (U) => U.state === "等待過帳" && U.actualQuantity
        );
        if (W.length === 0) {
          y("沒有可核撥的訂單");
          return;
        }
        const ke = `確認要核撥以下項目嗎？

${W.map((U) => `${U.name} - ${U.actualQuantity}`).join(`
`)}`;
        if (confirm(ke)) {
          B((U) => new Set(U).add(S)), y(null);
          try {
            const me = q(new Date(), "yyyy-MM-dd HH:mm:ss"),
              bt = {
                Data: W.map((Eo) => ({
                  ...Eo,
                  issuingPerson: T.Name,
                  issuingPersonID: T.ID,
                  issueTime: me,
                  notice: "False",
                  state: "已過帳",
                })),
              },
              gr = await Bt("/api/materialRequisition/update_by_guid", {
                method: "POST",
                body: bt,
              });
            if (gr.Code === 200) r(t, n);
            else throw new Error(gr.Result || "批次核撥失敗");
          } catch (U) {
            y(U instanceof Error ? U.message : "系統錯誤，請稍後再試");
          } finally {
            B((U) => {
              const me = new Set(U);
              return me.delete(S), me;
            });
          }
        }
      },
      ap = async (S, O) => {
        ae((U) => new Set(U).add(S)), y(null);
        const W = O.orders.some((U) => U.notice !== "True"),
          G = Rs();
        Ke.current.has(S) &&
          (clearTimeout(Ke.current.get(S)), Ke.current.delete(S));
        const ke = async (U) => {
          try {
            await Bt("/api/medmap/light_by_code_name_type", {
              method: "POST",
              body: {
                ValueAry: [
                  "ServerName=DS01",
                  "ServerType=藥庫",
                  `code=${S}`,
                  `color=${U}`,
                  `lightness=${G.brightness}`,
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
            await ke(G.color);
            const Ue = setTimeout(() => {
              ke("0,0,0"), Ke.current.delete(S);
            }, G.duration * 1e3);
            Ke.current.set(S, Ue);
          } else await ke("0,0,0");
          let U;
          W
            ? (U = O.orders.filter((Ue) => Ue.state === "等待過帳"))
            : (U = O.orders);
          const me = W ? "True" : "False",
            bt = U.map((Ue) =>
              Bt("/api/materialRequisition/update_notice", {
                method: "POST",
                body: { Data: { GUID: Ue.GUID, notice: me } },
              })
            ),
            gr = await Promise.all(bt);
          console.log("Notice update responses:", gr);
          const Eo = gr.filter((Ue) => Ue.Code !== 200);
          if (Eo.length > 0) throw new Error(`${Eo.length} 筆訂單更新失敗`);
          const fp = new Set(U.map((Ue) => Ue.GUID)),
            pp = e.map((Ue) => (fp.has(Ue.GUID) ? { ...Ue, notice: me } : Ue));
          o(pp);
        } catch (U) {
          console.error("Toggle notice error:", U),
            y(U instanceof Error ? U.message : "系統錯誤，請稍後再試");
        } finally {
          ae((U) => {
            const me = new Set(U);
            return me.delete(S), me;
          });
        }
      },
      za = (S) => {
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
        const O = Br();
        if ((console.log("User data:", O), !O || S.issuingPersonID !== O.ID))
          return (
            console.log("Cannot revert: user ID mismatch or no user data"), !1
          );
        if (!S.issueTime)
          return console.log("Cannot revert: no issue time"), !1;
        try {
          const T = new Date(S.issueTime),
            W = new Date(),
            G =
              T.getFullYear() === W.getFullYear() &&
              T.getMonth() === W.getMonth() &&
              T.getDate() === W.getDate();
          return (
            console.log("Date check:", { issueDate: T, today: W, isToday: G }),
            G
          );
        } catch (T) {
          return console.log("Cannot revert: date parsing error", T), !1;
        }
      },
      up = async (S) => {
        if (!za(S)) {
          y("無法還原此訂單");
          return;
        }
        z(!0), y(null);
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
            T = await Bt("/api/materialRequisition/update_by_guid", {
              method: "POST",
              body: O,
            });
          if (T.Code === 200) r(t, n);
          else throw new Error(T.Result || "還原失敗");
        } catch (O) {
          y(O instanceof Error ? O.message : "系統錯誤，請稍後再試");
        } finally {
          z(!1);
        }
      },
      cp = (S) => {
        S.state === "等待過帳" &&
          (a(S),
          g(S.actualQuantity || S.requestedQuantity),
          y(null),
          d(!0),
          _(!0));
      },
      So = (S) => {
        I
          ? (g(S), _(!1))
          : N
          ? (g(S), C(!1))
          : m && !h
          ? (k(p), g(S))
          : g(p === "0" ? S : p + S);
      },
      ko = (S) => {
        _(!1), h && Ia(), f(S), C(!1);
      },
      Ia = () => {
        if (!h || !m) return;
        const S = parseFloat(h),
          O = parseFloat(p);
        let T = 0;
        switch (m) {
          case "+":
            T = S + O;
            break;
          case "-":
            T = S - O;
            break;
          case "×":
            T = S * O;
            break;
          case "÷":
            if (O === 0) {
              y("不能除以零");
              return;
            }
            T = S / O;
            break;
        }
        g(Math.round(T).toString()), k(null), f(null), C(!0), _(!1);
      },
      dp = () => {
        g("0"), k(null), f(null), C(!1), _(!0);
      },
      Aa = (S) =>
        S.orders.some((O) => O.state === "等待過帳" && O.actualQuantity),
      Ua = (S) =>
        S.orders.some((O) => O.state === "等待過帳" && $e(O.actionType));
    return c.jsxs("div", {
      className: "space-y-6",
      children: [
        c.jsxs("div", {
          className: "space-y-6",
          children: [
            c.jsx(rv, { startDate: t, endDate: n, onDateChange: r }),
            c.jsxs("div", {
              className:
                "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6",
              children: [
                c.jsxs("div", {
                  className: "flex flex-col lg:flex-row lg:items-end gap-6",
                  children: [
                    c.jsx(ov, { value: P, onChange: Zl }),
                    c.jsxs("form", {
                      onSubmit: xo,
                      className: "flex flex-col sm:flex-row gap-2",
                      children: [
                        c.jsx("select", {
                          value: Te,
                          onChange: (S) => De(S.target.value),
                          className:
                            "w-full sm:w-32 px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                          children: Yv.map((S) =>
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
                              onKeyDown: ei,
                              placeholder: i("search.placeholder"),
                              className:
                                "w-full sm:w-64 pl-10 pr-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                            }),
                            c.jsx(t0, {
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
                    c.jsx(av, { onClick: ee, isLoading: D, disabled: l }),
                    P !== "已過帳" &&
                      c.jsx("button", {
                        onClick: ip,
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
          : fn.length === 0
          ? c.jsx("div", {
              className: "text-center py-8 text-base text-gray-500",
              children: i("app.orders.empty"),
            })
          : c.jsx("div", {
              className: "space-y-8",
              children: fn.map(([S, O]) =>
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
                                onClick: () => ap(S, O),
                                disabled: vt.has(S),
                                className: `px-4 py-2 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                                  O.orders.some((T) => T.notice !== "True")
                                    ? "bg-green-600 hover:bg-green-700 text-white"
                                    : "bg-orange-600 hover:bg-orange-700 text-white"
                                }`,
                                children: vt.has(S)
                                  ? "處理中..."
                                  : O.orders.some((T) => T.notice !== "True")
                                  ? "通知"
                                  : "取消通知",
                              }),
                              P !== "已過帳" &&
                                c.jsx("button", {
                                  onClick: () => sp(S, O),
                                  disabled: !Aa(O) || R.has(S),
                                  className: `px-4 py-2 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                                    !Aa(O) || R.has(S)
                                      ? "bg-gray-600 hover:bg-gray-700 text-white"
                                      : Ua(O)
                                      ? "bg-red-600 hover:bg-red-700 text-white"
                                      : "bg-blue-600 hover:bg-blue-700 text-white"
                                  }`,
                                  children: R.has(S)
                                    ? i("button.processing")
                                    : Ua(O)
                                    ? i("button.urgentApprove")
                                    : i("button.approve"),
                                }),
                            ],
                          }),
                        ],
                      }),
                      c.jsx("div", {
                        className: "space-y-2",
                        children: O.orders.map((T) => {
                          const W = T.state === "等待過帳",
                            G = W && !T.actualQuantity,
                            ke = $e(T.actionType);
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
                                                children: T.requestingUnit,
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
                                                  T.actionType === "一般申領"
                                                    ? i(
                                                        "filter.actionType.general"
                                                      )
                                                    : T.actionType ===
                                                      "緊急申領"
                                                    ? i(
                                                        "filter.actionType.urgent"
                                                      )
                                                    : T.actionType,
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
                                                children: T.requestingPerson,
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
                                                  T.issuingPerson || "-",
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
                                                children: T.requestTime,
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
                                                children: T.issueTime,
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
                                                children: it(T),
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
                                                children: T.signedPerson || "-",
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
                                      G
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
                                              T.state === "等待過帳"
                                                ? ke
                                                  ? "bg-red-100 text-red-800 border border-red-200"
                                                  : "bg-yellow-100 text-yellow-800"
                                                : T.state === "已過帳"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-gray-100 text-gray-800"
                                            }`,
                                            children:
                                              T.state === "等待過帳"
                                                ? i("filter.status.pending")
                                                : T.state === "已過帳"
                                                ? i("filter.status.completed")
                                                : T.state,
                                          }),
                                          W
                                            ? c.jsxs("button", {
                                                className:
                                                  "w-[240px] text-lg px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-200 flex justify-between items-center",
                                                onClick: () => W && cp(T),
                                                style: {
                                                  cursor: W
                                                    ? "pointer"
                                                    : "default",
                                                },
                                                children: [
                                                  i("modal.adjustActualQty"),
                                                  c.jsxs("span", {
                                                    children: [
                                                      T.actualQuantity || "-",
                                                      " / ",
                                                      T.requestedQuantity,
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
                                                      T.actualQuantity || "-",
                                                      " / ",
                                                      T.requestedQuantity,
                                                    ],
                                                  }),
                                                  za(T) &&
                                                    c.jsx("button", {
                                                      onClick: () => up(T),
                                                      disabled: re,
                                                      className:
                                                        "px-3 py-1 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm",
                                                      children: "還原",
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
                            T.GUID
                          );
                        }),
                      }),
                    ],
                  },
                  S
                )
              ),
            }),
        c.jsx(tr, {
          appear: !0,
          show: u,
          as: v.Fragment,
          children: c.jsxs(er, {
            as: "div",
            className: "relative z-50",
            onClose: () => !w && d(!1),
            children: [
              c.jsx(tr.Child, {
                as: v.Fragment,
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
                  children: c.jsx(tr.Child, {
                    as: v.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: c.jsxs(er.Panel, {
                      className:
                        "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                      children: [
                        c.jsx(er.Title, {
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
                                          S === "÷" ? ko(S) : So(S),
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
                                          S === "×" ? ko(S) : So(S),
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
                                          S === "-" ? ko(S) : So(S),
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
                                            ? Ia()
                                            : S === "+"
                                            ? ko(S)
                                            : So(S);
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
                                    onClick: dp,
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
                                    onClick: lp,
                                    disabled: w,
                                    className: `w-full sm:w-auto inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${
                                      s && $e(s.actionType)
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
      ],
    });
  },
  Gv = ({
    onLogin: e,
    className: t = "",
    title: n = "申領核撥系統",
    logo: r,
  }) => {
    const [o, l] = v.useState(""),
      [i, s] = v.useState(""),
      [a, u] = v.useState(null),
      [d, p] = v.useState(!1),
      g = async (x) => {
        x.preventDefault(), u(null), p(!0);
        try {
          const y = await Bt("/api/session/login", {
            method: "POST",
            body: { Data: { ID: o, Password: i } },
          });
          if (y.Code === 200) {
            if (!lv(y.Data)) {
              u("無撥補建單權限，無法登入");
              return;
            }
            e();
          } else u(y.Result || "登入失敗，請檢查帳號密碼是否正確");
        } catch (y) {
          console.error("Login error:", y),
            u(y instanceof Error ? y.message : "系統錯誤，請稍後再試");
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
  Kv = () => {
    const { language: e, toggleLanguage: t } = yt();
    return c.jsxs("button", {
      onClick: t,
      className:
        "inline-flex items-center px-2 sm:px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      title: e === "zh" ? "繁體中文" : "English",
      children: [
        c.jsx(Jg, { className: "h-4 w-4" }),
        c.jsx("span", {
          className: "ml-2 hidden sm:inline",
          children: e === "zh" ? "繁體中文" : "English",
        }),
      ],
    });
  },
  Xv = ({ title: e }) =>
    c.jsx("h1", {
      className: "text-2xl md:text-3xl font-semibold text-gray-800",
      children: e,
    }),
  Jv = () => {
    const e = Br();
    return e
      ? c.jsxs("p", {
          className: "text-sm text-gray-600",
          children: [e.Name, " - ", e.Employer],
        })
      : null;
  },
  Zv = ({ onLogout: e }) => {
    const { t } = yt();
    return c.jsxs("button", {
      onClick: e,
      className:
        "inline-flex items-center px-2 sm:px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      title: t("button.logout"),
      children: [
        c.jsx(e0, { className: "h-4 w-4" }),
        c.jsx("span", {
          className: "ml-2 hidden sm:inline",
          children: t("button.logout"),
        }),
      ],
    });
  },
  e1 = () => {
    const { t: e } = yt(),
      t = () => {
        const n = ev();
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
        c.jsx(Zg, { size: 24 }),
        c.jsx("span", {
          className:
            "absolute left-1/2 -translate-x-1/2 -bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
          children: e("platform.title"),
        }),
      ],
    });
  },
  t1 = ({ onLogout: e }) => {
    const { t } = yt();
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
                c.jsx(e1, {}),
                c.jsxs("div", {
                  className: "flex flex-col",
                  children: [
                    c.jsx(Xv, { title: t("app.title") }),
                    c.jsx(Jv, {}),
                  ],
                }),
              ],
            }),
            c.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                c.jsx(Vv, {}),
                c.jsx(Kv, {}),
                c.jsx(Zv, { onLogout: e }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  n1 = ({ className: e = "" }) => {
    const { t } = yt();
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
function r1() {
  yt();
  const [e, t] = v.useState(!1),
    [n, r] = v.useState(!0),
    [o, l] = v.useState(null),
    [i, s] = v.useState(!1),
    [a, u] = v.useState([]),
    [d, p] = v.useState(() => {
      const k = new Date();
      return k.setHours(0, 0, 0, 0), k;
    }),
    [g, x] = v.useState(() => {
      const k = new Date();
      return k.setHours(23, 59, 59, 999), k;
    }),
    [y, w] = v.useState(!1);
  v.useEffect(() => {
    (async () => {
      try {
        await Zy(), s(!0);
        const N = iv();
        t(N);
      } catch (N) {
        console.error("Error during initialization:", N),
          l("系統初始化失敗，請重新整理頁面");
      } finally {
        r(!1);
      }
    })();
  }, []),
    v.useEffect(() => {
      e && i && E();
    }, [e, i]);
  const E = async (k, N) => {
      const C = k || d,
        P = N || g;
      w(!0);
      try {
        console.log("Fetching orders with dates:", {
          startDate: C,
          endDate: P,
          startFormatted: q(C, "yyyy-MM-dd HH:mm:ss"),
          endFormatted: q(P, "yyyy-MM-dd HH:mm:ss"),
        });
        const M = await Bt("/api/materialRequisition/get_by_requestTime", {
          method: "POST",
          body: {
            ValueAry: [
              q(C, "yyyy-MM-dd HH:mm:ss"),
              q(P, "yyyy-MM-dd HH:mm:ss"),
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
      p(k), x(N), E(k, N);
    },
    f = (k) => {
      u(k);
    },
    h = () => {
      Ml(), t(!1);
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
          c.jsx(t1, { onLogout: h }),
          c.jsx("main", {
            className: "flex-grow flex flex-col bg-white pb-12",
            children: c.jsx("div", {
              className:
                "w-full max-w-screen-xl mx-auto px-2 md:px-4 lg:px-6 pb-8",
              children: c.jsx(qv, {
                orders: a,
                startDate: d,
                endDate: g,
                onDateChange: m,
                onOrdersUpdate: f,
                isLoading: y,
              }),
            }),
          }),
          c.jsx(n1, {}),
        ],
      })
    : c.jsx(Gv, { onLogin: () => t(!0) });
}
bf(document.getElementById("root")).render(
  c.jsx(v.StrictMode, { children: c.jsx(nv, { children: c.jsx(r1, {}) }) })
);
