function cp(e, t) {
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
function dp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var sc = { exports: {} },
  Ol = {},
  ac = { exports: {} },
  H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fo = Symbol.for("react.element"),
  fp = Symbol.for("react.portal"),
  pp = Symbol.for("react.fragment"),
  mp = Symbol.for("react.strict_mode"),
  hp = Symbol.for("react.profiler"),
  gp = Symbol.for("react.provider"),
  yp = Symbol.for("react.context"),
  vp = Symbol.for("react.forward_ref"),
  wp = Symbol.for("react.suspense"),
  xp = Symbol.for("react.memo"),
  Sp = Symbol.for("react.lazy"),
  Ia = Symbol.iterator;
function kp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ia && e[Ia]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var uc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  cc = Object.assign,
  dc = {};
function dr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = dc),
    (this.updater = n || uc);
}
dr.prototype.isReactComponent = {};
dr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
dr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function fc() {}
fc.prototype = dr.prototype;
function Ds(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = dc),
    (this.updater = n || uc);
}
var $s = (Ds.prototype = new fc());
$s.constructor = Ds;
cc($s, dr.prototype);
$s.isPureReactComponent = !0;
var Aa = Array.isArray,
  pc = Object.prototype.hasOwnProperty,
  Rs = { current: null },
  mc = { key: !0, ref: !0, __self: !0, __source: !0 };
function hc(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      pc.call(t, r) && !mc.hasOwnProperty(r) && (o[r] = t[r]);
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
    _owner: Rs.current,
  };
}
function bp(e, t) {
  return {
    $$typeof: fo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Fs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === fo;
}
function Ep(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ua = /\/+/g;
function Zl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Ep("" + e.key)
    : t.toString(36);
}
function Uo(e, t, n, r, o) {
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
          case fp:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + Zl(i, 0) : r),
      Aa(o)
        ? ((n = ""),
          e != null && (n = e.replace(Ua, "$&/") + "/"),
          Uo(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Fs(o) &&
            (o = bp(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Ua, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Aa(e)))
    for (var s = 0; s < e.length; s++) {
      l = e[s];
      var a = r + Zl(l, s);
      i += Uo(l, t, n, a, o);
    }
  else if (((a = kp(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(l = e.next()).done; )
      (l = l.value), (a = r + Zl(l, s++)), (i += Uo(l, t, n, a, o));
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
function ko(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Uo(e, r, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function Np(e) {
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
var _e = { current: null },
  Ho = { transition: null },
  Cp = {
    ReactCurrentDispatcher: _e,
    ReactCurrentBatchConfig: Ho,
    ReactCurrentOwner: Rs,
  };
function gc() {
  throw Error("act(...) is not supported in production builds of React.");
}
H.Children = {
  map: ko,
  forEach: function (e, t, n) {
    ko(
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
      ko(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ko(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Fs(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
H.Component = dr;
H.Fragment = pp;
H.Profiler = hp;
H.PureComponent = Ds;
H.StrictMode = mp;
H.Suspense = wp;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cp;
H.act = gc;
H.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = cc({}, e.props),
    o = e.key,
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = Rs.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      pc.call(t, a) &&
        !mc.hasOwnProperty(a) &&
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
H.createContext = function (e) {
  return (
    (e = {
      $$typeof: yp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: gp, _context: e }),
    (e.Consumer = e)
  );
};
H.createElement = hc;
H.createFactory = function (e) {
  var t = hc.bind(null, e);
  return (t.type = e), t;
};
H.createRef = function () {
  return { current: null };
};
H.forwardRef = function (e) {
  return { $$typeof: vp, render: e };
};
H.isValidElement = Fs;
H.lazy = function (e) {
  return { $$typeof: Sp, _payload: { _status: -1, _result: e }, _init: Np };
};
H.memo = function (e, t) {
  return { $$typeof: xp, type: e, compare: t === void 0 ? null : t };
};
H.startTransition = function (e) {
  var t = Ho.transition;
  Ho.transition = {};
  try {
    e();
  } finally {
    Ho.transition = t;
  }
};
H.unstable_act = gc;
H.useCallback = function (e, t) {
  return _e.current.useCallback(e, t);
};
H.useContext = function (e) {
  return _e.current.useContext(e);
};
H.useDebugValue = function () {};
H.useDeferredValue = function (e) {
  return _e.current.useDeferredValue(e);
};
H.useEffect = function (e, t) {
  return _e.current.useEffect(e, t);
};
H.useId = function () {
  return _e.current.useId();
};
H.useImperativeHandle = function (e, t, n) {
  return _e.current.useImperativeHandle(e, t, n);
};
H.useInsertionEffect = function (e, t) {
  return _e.current.useInsertionEffect(e, t);
};
H.useLayoutEffect = function (e, t) {
  return _e.current.useLayoutEffect(e, t);
};
H.useMemo = function (e, t) {
  return _e.current.useMemo(e, t);
};
H.useReducer = function (e, t, n) {
  return _e.current.useReducer(e, t, n);
};
H.useRef = function (e) {
  return _e.current.useRef(e);
};
H.useState = function (e) {
  return _e.current.useState(e);
};
H.useSyncExternalStore = function (e, t, n) {
  return _e.current.useSyncExternalStore(e, t, n);
};
H.useTransition = function () {
  return _e.current.useTransition();
};
H.version = "18.3.1";
ac.exports = H;
var y = ac.exports;
const U = dp(y),
  Vr = cp({ __proto__: null, default: U }, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tp = y,
  Pp = Symbol.for("react.element"),
  jp = Symbol.for("react.fragment"),
  Op = Object.prototype.hasOwnProperty,
  Mp = Tp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Lp = { key: !0, ref: !0, __self: !0, __source: !0 };
function yc(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Op.call(t, r) && !Lp.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Pp,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: Mp.current,
  };
}
Ol.Fragment = jp;
Ol.jsx = yc;
Ol.jsxs = yc;
sc.exports = Ol;
var c = sc.exports,
  vc = { exports: {} },
  Ve = {},
  wc = { exports: {} },
  xc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, $) {
    var R = O.length;
    O.push($);
    e: for (; 0 < R; ) {
      var F = (R - 1) >>> 1,
        V = O[F];
      if (0 < o(V, $)) (O[F] = $), (O[R] = V), (R = F);
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var $ = O[0],
      R = O.pop();
    if (R !== $) {
      O[0] = R;
      e: for (var F = 0, V = O.length, Et = V >>> 1; F < Et; ) {
        var ae = 2 * (F + 1) - 1,
          lt = O[ae],
          it = ae + 1,
          Ut = O[it];
        if (0 > o(lt, R))
          it < V && 0 > o(Ut, lt)
            ? ((O[F] = Ut), (O[it] = R), (F = it))
            : ((O[F] = lt), (O[ae] = R), (F = ae));
        else if (it < V && 0 > o(Ut, R)) (O[F] = Ut), (O[it] = R), (F = it);
        else break e;
      }
    }
    return $;
  }
  function o(O, $) {
    var R = O.sortIndex - $.sortIndex;
    return R !== 0 ? R : O.id - $.id;
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
    m = null,
    g = 3,
    v = !1,
    w = !1,
    x = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(O) {
    for (var $ = n(u); $ !== null; ) {
      if ($.callback === null) r(u);
      else if ($.startTime <= O)
        r(u), ($.sortIndex = $.expirationTime), t(a, $);
      else break;
      $ = n(u);
    }
  }
  function S(O) {
    if (((x = !1), h(O), !w))
      if (n(a) !== null) (w = !0), je(T);
      else {
        var $ = n(u);
        $ !== null && ve(S, $.startTime - O);
      }
  }
  function T(O, $) {
    (w = !1), x && ((x = !1), p(j), (j = -1)), (v = !0);
    var R = g;
    try {
      for (
        h($), m = n(a);
        m !== null && (!(m.expirationTime > $) || (O && !B()));

      ) {
        var F = m.callback;
        if (typeof F == "function") {
          (m.callback = null), (g = m.priorityLevel);
          var V = F(m.expirationTime <= $);
          ($ = e.unstable_now()),
            typeof V == "function" ? (m.callback = V) : m === n(a) && r(a),
            h($);
        } else r(a);
        m = n(a);
      }
      if (m !== null) var Et = !0;
      else {
        var ae = n(u);
        ae !== null && ve(S, ae.startTime - $), (Et = !1);
      }
      return Et;
    } finally {
      (m = null), (g = R), (v = !1);
    }
  }
  var P = !1,
    E = null,
    j = -1,
    C = 5,
    _ = -1;
  function B() {
    return !(e.unstable_now() - _ < C);
  }
  function A() {
    if (E !== null) {
      var O = e.unstable_now();
      _ = O;
      var $ = !0;
      try {
        $ = E(!0, O);
      } finally {
        $ ? ge() : ((P = !1), (E = null));
      }
    } else P = !1;
  }
  var ge;
  if (typeof f == "function")
    ge = function () {
      f(A);
    };
  else if (typeof MessageChannel < "u") {
    var ye = new MessageChannel(),
      Pe = ye.port2;
    (ye.port1.onmessage = A),
      (ge = function () {
        Pe.postMessage(null);
      });
  } else
    ge = function () {
      k(A, 0);
    };
  function je(O) {
    (E = O), P || ((P = !0), ge());
  }
  function ve(O, $) {
    j = k(function () {
      O(e.unstable_now());
    }, $);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || v || ((w = !0), je(T));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (C = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (O) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = g;
      }
      var R = g;
      g = $;
      try {
        return O();
      } finally {
        g = R;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, $) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var R = g;
      g = O;
      try {
        return $();
      } finally {
        g = R;
      }
    }),
    (e.unstable_scheduleCallback = function (O, $, R) {
      var F = e.unstable_now();
      switch (
        (typeof R == "object" && R !== null
          ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? F + R : F))
          : (R = F),
        O)
      ) {
        case 1:
          var V = -1;
          break;
        case 2:
          V = 250;
          break;
        case 5:
          V = 1073741823;
          break;
        case 4:
          V = 1e4;
          break;
        default:
          V = 5e3;
      }
      return (
        (V = R + V),
        (O = {
          id: d++,
          callback: $,
          priorityLevel: O,
          startTime: R,
          expirationTime: V,
          sortIndex: -1,
        }),
        R > F
          ? ((O.sortIndex = R),
            t(u, O),
            n(a) === null &&
              O === n(u) &&
              (x ? (p(j), (j = -1)) : (x = !0), ve(S, R - F)))
          : ((O.sortIndex = V), t(a, O), w || v || ((w = !0), je(T))),
        O
      );
    }),
    (e.unstable_shouldYield = B),
    (e.unstable_wrapCallback = function (O) {
      var $ = g;
      return function () {
        var R = g;
        g = $;
        try {
          return O.apply(this, arguments);
        } finally {
          g = R;
        }
      };
    });
})(xc);
wc.exports = xc;
var _p = wc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dp = y,
  Qe = _p;
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
var Sc = new Set(),
  Yr = {};
function _n(e, t) {
  or(e, t), or(e + "Capture", t);
}
function or(e, t) {
  for (Yr[e] = t, e = 0; e < t.length; e++) Sc.add(t[e]);
}
var Rt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  _i = Object.prototype.hasOwnProperty,
  $p =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ha = {},
  Wa = {};
function Rp(e) {
  return _i.call(Wa, e)
    ? !0
    : _i.call(Ha, e)
    ? !1
    : $p.test(e)
    ? (Wa[e] = !0)
    : ((Ha[e] = !0), !1);
}
function Fp(e, t, n, r) {
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
function zp(e, t, n, r) {
  if (t === null || typeof t > "u" || Fp(e, t, n, r)) return !0;
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
function De(e, t, n, r, o, l, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = i);
}
var Se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Se[e] = new De(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Se[t] = new De(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Se[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Se[e] = new De(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Se[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Se[e] = new De(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Se[e] = new De(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Se[e] = new De(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Se[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var zs = /[\-:]([a-z])/g;
function Is(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(zs, Is);
    Se[t] = new De(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(zs, Is);
    Se[t] = new De(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(zs, Is);
  Se[t] = new De(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Se[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Se.xlinkHref = new De(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Se[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function As(e, t, n, r) {
  var o = Se.hasOwnProperty(t) ? Se[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (zp(t, n, o, r) && (n = null),
    r || o === null
      ? Rp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var At = Dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  bo = Symbol.for("react.element"),
  In = Symbol.for("react.portal"),
  An = Symbol.for("react.fragment"),
  Us = Symbol.for("react.strict_mode"),
  Di = Symbol.for("react.profiler"),
  kc = Symbol.for("react.provider"),
  bc = Symbol.for("react.context"),
  Hs = Symbol.for("react.forward_ref"),
  $i = Symbol.for("react.suspense"),
  Ri = Symbol.for("react.suspense_list"),
  Ws = Symbol.for("react.memo"),
  Yt = Symbol.for("react.lazy"),
  Ec = Symbol.for("react.offscreen"),
  Ba = Symbol.iterator;
function yr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ba && e[Ba]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ie = Object.assign,
  ei;
function Mr(e) {
  if (ei === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ei = (t && t[1]) || "";
    }
  return (
    `
` +
    ei +
    e
  );
}
var ti = !1;
function ni(e, t) {
  if (!e || ti) return "";
  ti = !0;
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
    (ti = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Mr(e) : "";
}
function Ip(e) {
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
      return (e = ni(e.type, !1)), e;
    case 11:
      return (e = ni(e.type.render, !1)), e;
    case 1:
      return (e = ni(e.type, !0)), e;
    default:
      return "";
  }
}
function Fi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case An:
      return "Fragment";
    case In:
      return "Portal";
    case Di:
      return "Profiler";
    case Us:
      return "StrictMode";
    case $i:
      return "Suspense";
    case Ri:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case bc:
        return (e.displayName || "Context") + ".Consumer";
      case kc:
        return (e._context.displayName || "Context") + ".Provider";
      case Hs:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ws:
        return (
          (t = e.displayName || null), t !== null ? t : Fi(e.type) || "Memo"
        );
      case Yt:
        (t = e._payload), (e = e._init);
        try {
          return Fi(e(t));
        } catch {}
    }
  return null;
}
function Ap(e) {
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
      return Fi(t);
    case 8:
      return t === Us ? "StrictMode" : "Mode";
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
function cn(e) {
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
function Nc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Up(e) {
  var t = Nc(e) ? "checked" : "value",
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
function Eo(e) {
  e._valueTracker || (e._valueTracker = Up(e));
}
function Cc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Nc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function el(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function zi(e, t) {
  var n = t.checked;
  return ie({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Qa(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = cn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Tc(e, t) {
  (t = t.checked), t != null && As(e, "checked", t, !1);
}
function Ii(e, t) {
  Tc(e, t);
  var n = cn(t.value),
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
    ? Ai(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ai(e, t.type, cn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Va(e, t, n) {
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
function Ai(e, t, n) {
  (t !== "number" || el(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Lr = Array.isArray;
function Xn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + cn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ui(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return ie({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ya(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Lr(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: cn(n) };
}
function Pc(e, t) {
  var n = cn(t.value),
    r = cn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function qa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function jc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Hi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? jc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var No,
  Oc = (function (e) {
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
        No = No || document.createElement("div"),
          No.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = No.firstChild;
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
  Hp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Rr).forEach(function (e) {
  Hp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Rr[t] = Rr[e]);
  });
});
function Mc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Rr.hasOwnProperty(e) && Rr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Lc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Mc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Wp = ie(
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
function Wi(e, t) {
  if (t) {
    if (Wp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Bi(e, t) {
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
var Qi = null;
function Bs(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Vi = null,
  Jn = null,
  Zn = null;
function Ga(e) {
  if ((e = ho(e))) {
    if (typeof Vi != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = $l(t)), Vi(e.stateNode, e.type, t));
  }
}
function _c(e) {
  Jn ? (Zn ? Zn.push(e) : (Zn = [e])) : (Jn = e);
}
function Dc() {
  if (Jn) {
    var e = Jn,
      t = Zn;
    if (((Zn = Jn = null), Ga(e), t)) for (e = 0; e < t.length; e++) Ga(t[e]);
  }
}
function $c(e, t) {
  return e(t);
}
function Rc() {}
var ri = !1;
function Fc(e, t, n) {
  if (ri) return e(t, n);
  ri = !0;
  try {
    return $c(e, t, n);
  } finally {
    (ri = !1), (Jn !== null || Zn !== null) && (Rc(), Dc());
  }
}
function Gr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = $l(n);
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
var Yi = !1;
if (Rt)
  try {
    var vr = {};
    Object.defineProperty(vr, "passive", {
      get: function () {
        Yi = !0;
      },
    }),
      window.addEventListener("test", vr, vr),
      window.removeEventListener("test", vr, vr);
  } catch {
    Yi = !1;
  }
function Bp(e, t, n, r, o, l, i, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Fr = !1,
  tl = null,
  nl = !1,
  qi = null,
  Qp = {
    onError: function (e) {
      (Fr = !0), (tl = e);
    },
  };
function Vp(e, t, n, r, o, l, i, s, a) {
  (Fr = !1), (tl = null), Bp.apply(Qp, arguments);
}
function Yp(e, t, n, r, o, l, i, s, a) {
  if ((Vp.apply(this, arguments), Fr)) {
    if (Fr) {
      var u = tl;
      (Fr = !1), (tl = null);
    } else throw Error(N(198));
    nl || ((nl = !0), (qi = u));
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
function zc(e) {
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
function Ka(e) {
  if (Dn(e) !== e) throw Error(N(188));
}
function qp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Dn(e)), t === null)) throw Error(N(188));
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
        if (l === n) return Ka(o), e;
        if (l === r) return Ka(o), t;
        l = l.sibling;
      }
      throw Error(N(188));
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
        if (!i) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Ic(e) {
  return (e = qp(e)), e !== null ? Ac(e) : null;
}
function Ac(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ac(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Uc = Qe.unstable_scheduleCallback,
  Xa = Qe.unstable_cancelCallback,
  Gp = Qe.unstable_shouldYield,
  Kp = Qe.unstable_requestPaint,
  ue = Qe.unstable_now,
  Xp = Qe.unstable_getCurrentPriorityLevel,
  Qs = Qe.unstable_ImmediatePriority,
  Hc = Qe.unstable_UserBlockingPriority,
  rl = Qe.unstable_NormalPriority,
  Jp = Qe.unstable_LowPriority,
  Wc = Qe.unstable_IdlePriority,
  Ml = null,
  kt = null;
function Zp(e) {
  if (kt && typeof kt.onCommitFiberRoot == "function")
    try {
      kt.onCommitFiberRoot(Ml, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ft = Math.clz32 ? Math.clz32 : nm,
  em = Math.log,
  tm = Math.LN2;
function nm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((em(e) / tm) | 0)) | 0;
}
var Co = 64,
  To = 4194304;
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
function ol(e, t) {
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
      (n = 31 - ft(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function rm(e, t) {
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
function om(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var i = 31 - ft(l),
      s = 1 << i,
      a = o[i];
    a === -1
      ? (!(s & n) || s & r) && (o[i] = rm(s, t))
      : a <= t && (e.expiredLanes |= s),
      (l &= ~s);
  }
}
function Gi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Bc() {
  var e = Co;
  return (Co <<= 1), !(Co & 4194240) && (Co = 64), e;
}
function oi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function po(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ft(t)),
    (e[t] = n);
}
function lm(e, t) {
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
    var o = 31 - ft(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function Vs(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ft(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var q = 0;
function Qc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Vc,
  Ys,
  Yc,
  qc,
  Gc,
  Ki = !1,
  Po = [],
  tn = null,
  nn = null,
  rn = null,
  Kr = new Map(),
  Xr = new Map(),
  Gt = [],
  im =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ja(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      tn = null;
      break;
    case "dragenter":
    case "dragleave":
      nn = null;
      break;
    case "mouseover":
    case "mouseout":
      rn = null;
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
      t !== null && ((t = ho(t)), t !== null && Ys(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function sm(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (tn = wr(tn, e, t, n, r, o)), !0;
    case "dragenter":
      return (nn = wr(nn, e, t, n, r, o)), !0;
    case "mouseover":
      return (rn = wr(rn, e, t, n, r, o)), !0;
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
function Kc(e) {
  var t = wn(e.target);
  if (t !== null) {
    var n = Dn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = zc(n)), t !== null)) {
          (e.blockedOn = t),
            Gc(e.priority, function () {
              Yc(n);
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
function Wo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Xi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Qi = r), n.target.dispatchEvent(r), (Qi = null);
    } else return (t = ho(n)), t !== null && Ys(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Za(e, t, n) {
  Wo(e) && n.delete(t);
}
function am() {
  (Ki = !1),
    tn !== null && Wo(tn) && (tn = null),
    nn !== null && Wo(nn) && (nn = null),
    rn !== null && Wo(rn) && (rn = null),
    Kr.forEach(Za),
    Xr.forEach(Za);
}
function xr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ki ||
      ((Ki = !0),
      Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority, am)));
}
function Jr(e) {
  function t(o) {
    return xr(o, e);
  }
  if (0 < Po.length) {
    xr(Po[0], e);
    for (var n = 1; n < Po.length; n++) {
      var r = Po[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    tn !== null && xr(tn, e),
      nn !== null && xr(nn, e),
      rn !== null && xr(rn, e),
      Kr.forEach(t),
      Xr.forEach(t),
      n = 0;
    n < Gt.length;
    n++
  )
    (r = Gt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Gt.length && ((n = Gt[0]), n.blockedOn === null); )
    Kc(n), n.blockedOn === null && Gt.shift();
}
var er = At.ReactCurrentBatchConfig,
  ll = !0;
function um(e, t, n, r) {
  var o = q,
    l = er.transition;
  er.transition = null;
  try {
    (q = 1), qs(e, t, n, r);
  } finally {
    (q = o), (er.transition = l);
  }
}
function cm(e, t, n, r) {
  var o = q,
    l = er.transition;
  er.transition = null;
  try {
    (q = 4), qs(e, t, n, r);
  } finally {
    (q = o), (er.transition = l);
  }
}
function qs(e, t, n, r) {
  if (ll) {
    var o = Xi(e, t, n, r);
    if (o === null) mi(e, t, r, il, n), Ja(e, r);
    else if (sm(o, e, t, n, r)) r.stopPropagation();
    else if ((Ja(e, r), t & 4 && -1 < im.indexOf(e))) {
      for (; o !== null; ) {
        var l = ho(o);
        if (
          (l !== null && Vc(l),
          (l = Xi(e, t, n, r)),
          l === null && mi(e, t, r, il, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else mi(e, t, r, null, n);
  }
}
var il = null;
function Xi(e, t, n, r) {
  if (((il = null), (e = Bs(r)), (e = wn(e)), e !== null))
    if (((t = Dn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = zc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (il = e), null;
}
function Xc(e) {
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
      switch (Xp()) {
        case Qs:
          return 1;
        case Hc:
          return 4;
        case rl:
        case Jp:
          return 16;
        case Wc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Jt = null,
  Gs = null,
  Bo = null;
function Jc() {
  if (Bo) return Bo;
  var e,
    t = Gs,
    n = t.length,
    r,
    o = "value" in Jt ? Jt.value : Jt.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return (Bo = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Qo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function jo() {
  return !0;
}
function eu() {
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
        ? jo
        : eu),
      (this.isPropagationStopped = eu),
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
          (this.isDefaultPrevented = jo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = jo));
      },
      persist: function () {},
      isPersistent: jo,
    }),
    t
  );
}
var fr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ks = Ye(fr),
  mo = ie({}, fr, { view: 0, detail: 0 }),
  dm = Ye(mo),
  li,
  ii,
  Sr,
  Ll = ie({}, mo, {
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
    getModifierState: Xs,
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
              ? ((li = e.screenX - Sr.screenX), (ii = e.screenY - Sr.screenY))
              : (ii = li = 0),
            (Sr = e)),
          li);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ii;
    },
  }),
  tu = Ye(Ll),
  fm = ie({}, Ll, { dataTransfer: 0 }),
  pm = Ye(fm),
  mm = ie({}, mo, { relatedTarget: 0 }),
  si = Ye(mm),
  hm = ie({}, fr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  gm = Ye(hm),
  ym = ie({}, fr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  vm = Ye(ym),
  wm = ie({}, fr, { data: 0 }),
  nu = Ye(wm),
  xm = {
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
  Sm = {
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
  km = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function bm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = km[e]) ? !!t[e] : !1;
}
function Xs() {
  return bm;
}
var Em = ie({}, mo, {
    key: function (e) {
      if (e.key) {
        var t = xm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Qo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Sm[e.keyCode] || "Unidentified"
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
    getModifierState: Xs,
    charCode: function (e) {
      return e.type === "keypress" ? Qo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Qo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Nm = Ye(Em),
  Cm = ie({}, Ll, {
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
  ru = Ye(Cm),
  Tm = ie({}, mo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Xs,
  }),
  Pm = Ye(Tm),
  jm = ie({}, fr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Om = Ye(jm),
  Mm = ie({}, Ll, {
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
  Lm = Ye(Mm),
  _m = [9, 13, 27, 32],
  Js = Rt && "CompositionEvent" in window,
  zr = null;
Rt && "documentMode" in document && (zr = document.documentMode);
var Dm = Rt && "TextEvent" in window && !zr,
  Zc = Rt && (!Js || (zr && 8 < zr && 11 >= zr)),
  ou = " ",
  lu = !1;
function ed(e, t) {
  switch (e) {
    case "keyup":
      return _m.indexOf(t.keyCode) !== -1;
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
function td(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Un = !1;
function $m(e, t) {
  switch (e) {
    case "compositionend":
      return td(t);
    case "keypress":
      return t.which !== 32 ? null : ((lu = !0), ou);
    case "textInput":
      return (e = t.data), e === ou && lu ? null : e;
    default:
      return null;
  }
}
function Rm(e, t) {
  if (Un)
    return e === "compositionend" || (!Js && ed(e, t))
      ? ((e = Jc()), (Bo = Gs = Jt = null), (Un = !1), e)
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
      return Zc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Fm = {
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
function iu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Fm[e.type] : t === "textarea";
}
function nd(e, t, n, r) {
  _c(r),
    (t = sl(t, "onChange")),
    0 < t.length &&
      ((n = new Ks("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ir = null,
  Zr = null;
function zm(e) {
  pd(e, 0);
}
function _l(e) {
  var t = Bn(e);
  if (Cc(t)) return e;
}
function Im(e, t) {
  if (e === "change") return t;
}
var rd = !1;
if (Rt) {
  var ai;
  if (Rt) {
    var ui = "oninput" in document;
    if (!ui) {
      var su = document.createElement("div");
      su.setAttribute("oninput", "return;"),
        (ui = typeof su.oninput == "function");
    }
    ai = ui;
  } else ai = !1;
  rd = ai && (!document.documentMode || 9 < document.documentMode);
}
function au() {
  Ir && (Ir.detachEvent("onpropertychange", od), (Zr = Ir = null));
}
function od(e) {
  if (e.propertyName === "value" && _l(Zr)) {
    var t = [];
    nd(t, Zr, e, Bs(e)), Fc(zm, t);
  }
}
function Am(e, t, n) {
  e === "focusin"
    ? (au(), (Ir = t), (Zr = n), Ir.attachEvent("onpropertychange", od))
    : e === "focusout" && au();
}
function Um(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return _l(Zr);
}
function Hm(e, t) {
  if (e === "click") return _l(t);
}
function Wm(e, t) {
  if (e === "input" || e === "change") return _l(t);
}
function Bm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var mt = typeof Object.is == "function" ? Object.is : Bm;
function eo(e, t) {
  if (mt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!_i.call(t, o) || !mt(e[o], t[o])) return !1;
  }
  return !0;
}
function uu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function cu(e, t) {
  var n = uu(e);
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
    n = uu(n);
  }
}
function ld(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ld(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function id() {
  for (var e = window, t = el(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = el(e.document);
  }
  return t;
}
function Zs(e) {
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
function Qm(e) {
  var t = id(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ld(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Zs(n)) {
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
          (o = cu(n, l));
        var i = cu(n, r);
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
var Vm = Rt && "documentMode" in document && 11 >= document.documentMode,
  Hn = null,
  Ji = null,
  Ar = null,
  Zi = !1;
function du(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Zi ||
    Hn == null ||
    Hn !== el(r) ||
    ((r = Hn),
    "selectionStart" in r && Zs(r)
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
      (r = sl(Ji, "onSelect")),
      0 < r.length &&
        ((t = new Ks("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Hn))));
}
function Oo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Wn = {
    animationend: Oo("Animation", "AnimationEnd"),
    animationiteration: Oo("Animation", "AnimationIteration"),
    animationstart: Oo("Animation", "AnimationStart"),
    transitionend: Oo("Transition", "TransitionEnd"),
  },
  ci = {},
  sd = {};
Rt &&
  ((sd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Wn.animationend.animation,
    delete Wn.animationiteration.animation,
    delete Wn.animationstart.animation),
  "TransitionEvent" in window || delete Wn.transitionend.transition);
function Dl(e) {
  if (ci[e]) return ci[e];
  if (!Wn[e]) return e;
  var t = Wn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in sd) return (ci[e] = t[n]);
  return e;
}
var ad = Dl("animationend"),
  ud = Dl("animationiteration"),
  cd = Dl("animationstart"),
  dd = Dl("transitionend"),
  fd = new Map(),
  fu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function fn(e, t) {
  fd.set(e, t), _n(t, [e]);
}
for (var di = 0; di < fu.length; di++) {
  var fi = fu[di],
    Ym = fi.toLowerCase(),
    qm = fi[0].toUpperCase() + fi.slice(1);
  fn(Ym, "on" + qm);
}
fn(ad, "onAnimationEnd");
fn(ud, "onAnimationIteration");
fn(cd, "onAnimationStart");
fn("dblclick", "onDoubleClick");
fn("focusin", "onFocus");
fn("focusout", "onBlur");
fn(dd, "onTransitionEnd");
or("onMouseEnter", ["mouseout", "mouseover"]);
or("onMouseLeave", ["mouseout", "mouseover"]);
or("onPointerEnter", ["pointerout", "pointerover"]);
or("onPointerLeave", ["pointerout", "pointerover"]);
_n(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
_n(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
_n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
_n(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
_n(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
_n(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Dr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Gm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));
function pu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Yp(r, t, void 0, e), (e.currentTarget = null);
}
function pd(e, t) {
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
          pu(o, s, u), (l = a);
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
          pu(o, s, u), (l = a);
        }
    }
  }
  if (nl) throw ((e = qi), (nl = !1), (qi = null), e);
}
function ee(e, t) {
  var n = t[os];
  n === void 0 && (n = t[os] = new Set());
  var r = e + "__bubble";
  n.has(r) || (md(t, e, 2, !1), n.add(r));
}
function pi(e, t, n) {
  var r = 0;
  t && (r |= 4), md(n, e, r, t);
}
var Mo = "_reactListening" + Math.random().toString(36).slice(2);
function to(e) {
  if (!e[Mo]) {
    (e[Mo] = !0),
      Sc.forEach(function (n) {
        n !== "selectionchange" && (Gm.has(n) || pi(n, !1, e), pi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Mo] || ((t[Mo] = !0), pi("selectionchange", !1, t));
  }
}
function md(e, t, n, r) {
  switch (Xc(t)) {
    case 1:
      var o = um;
      break;
    case 4:
      o = cm;
      break;
    default:
      o = qs;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Yi ||
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
function mi(e, t, n, r, o) {
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
          if (((i = wn(s)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = l = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Fc(function () {
    var u = l,
      d = Bs(n),
      m = [];
    e: {
      var g = fd.get(e);
      if (g !== void 0) {
        var v = Ks,
          w = e;
        switch (e) {
          case "keypress":
            if (Qo(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Nm;
            break;
          case "focusin":
            (w = "focus"), (v = si);
            break;
          case "focusout":
            (w = "blur"), (v = si);
            break;
          case "beforeblur":
          case "afterblur":
            v = si;
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
            v = tu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = pm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Pm;
            break;
          case ad:
          case ud:
          case cd:
            v = gm;
            break;
          case dd:
            v = Om;
            break;
          case "scroll":
            v = dm;
            break;
          case "wheel":
            v = Lm;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = vm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = ru;
        }
        var x = (t & 4) !== 0,
          k = !x && e === "scroll",
          p = x ? (g !== null ? g + "Capture" : null) : g;
        x = [];
        for (var f = u, h; f !== null; ) {
          h = f;
          var S = h.stateNode;
          if (
            (h.tag === 5 &&
              S !== null &&
              ((h = S),
              p !== null && ((S = Gr(f, p)), S != null && x.push(no(f, S, h)))),
            k)
          )
            break;
          f = f.return;
        }
        0 < x.length &&
          ((g = new v(g, w, null, n, d)), m.push({ event: g, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          g &&
            n !== Qi &&
            (w = n.relatedTarget || n.fromElement) &&
            (wn(w) || w[Ft]))
        )
          break e;
        if (
          (v || g) &&
          ((g =
            d.window === d
              ? d
              : (g = d.ownerDocument)
              ? g.defaultView || g.parentWindow
              : window),
          v
            ? ((w = n.relatedTarget || n.toElement),
              (v = u),
              (w = w ? wn(w) : null),
              w !== null &&
                ((k = Dn(w)), w !== k || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((v = null), (w = u)),
          v !== w)
        ) {
          if (
            ((x = tu),
            (S = "onMouseLeave"),
            (p = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = ru),
              (S = "onPointerLeave"),
              (p = "onPointerEnter"),
              (f = "pointer")),
            (k = v == null ? g : Bn(v)),
            (h = w == null ? g : Bn(w)),
            (g = new x(S, f + "leave", v, n, d)),
            (g.target = k),
            (g.relatedTarget = h),
            (S = null),
            wn(d) === u &&
              ((x = new x(p, f + "enter", w, n, d)),
              (x.target = h),
              (x.relatedTarget = k),
              (S = x)),
            (k = S),
            v && w)
          )
            t: {
              for (x = v, p = w, f = 0, h = x; h; h = Fn(h)) f++;
              for (h = 0, S = p; S; S = Fn(S)) h++;
              for (; 0 < f - h; ) (x = Fn(x)), f--;
              for (; 0 < h - f; ) (p = Fn(p)), h--;
              for (; f--; ) {
                if (x === p || (p !== null && x === p.alternate)) break t;
                (x = Fn(x)), (p = Fn(p));
              }
              x = null;
            }
          else x = null;
          v !== null && mu(m, g, v, x, !1),
            w !== null && k !== null && mu(m, k, w, x, !0);
        }
      }
      e: {
        if (
          ((g = u ? Bn(u) : window),
          (v = g.nodeName && g.nodeName.toLowerCase()),
          v === "select" || (v === "input" && g.type === "file"))
        )
          var T = Im;
        else if (iu(g))
          if (rd) T = Wm;
          else {
            T = Um;
            var P = Am;
          }
        else
          (v = g.nodeName) &&
            v.toLowerCase() === "input" &&
            (g.type === "checkbox" || g.type === "radio") &&
            (T = Hm);
        if (T && (T = T(e, u))) {
          nd(m, T, n, d);
          break e;
        }
        P && P(e, g, u),
          e === "focusout" &&
            (P = g._wrapperState) &&
            P.controlled &&
            g.type === "number" &&
            Ai(g, "number", g.value);
      }
      switch (((P = u ? Bn(u) : window), e)) {
        case "focusin":
          (iu(P) || P.contentEditable === "true") &&
            ((Hn = P), (Ji = u), (Ar = null));
          break;
        case "focusout":
          Ar = Ji = Hn = null;
          break;
        case "mousedown":
          Zi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Zi = !1), du(m, n, d);
          break;
        case "selectionchange":
          if (Vm) break;
        case "keydown":
        case "keyup":
          du(m, n, d);
      }
      var E;
      if (Js)
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
        Un
          ? ed(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (Zc &&
          n.locale !== "ko" &&
          (Un || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && Un && (E = Jc())
            : ((Jt = d),
              (Gs = "value" in Jt ? Jt.value : Jt.textContent),
              (Un = !0))),
        (P = sl(u, j)),
        0 < P.length &&
          ((j = new nu(j, e, null, n, d)),
          m.push({ event: j, listeners: P }),
          E ? (j.data = E) : ((E = td(n)), E !== null && (j.data = E)))),
        (E = Dm ? $m(e, n) : Rm(e, n)) &&
          ((u = sl(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new nu("onBeforeInput", "beforeinput", null, n, d)),
            m.push({ event: d, listeners: u }),
            (d.data = E)));
    }
    pd(m, t);
  });
}
function no(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function sl(e, t) {
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
function Fn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function mu(e, t, n, r, o) {
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
var Km = /\r\n?/g,
  Xm = /\u0000|\uFFFD/g;
function hu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Km,
      `
`
    )
    .replace(Xm, "");
}
function Lo(e, t, n) {
  if (((t = hu(t)), hu(e) !== t && n)) throw Error(N(425));
}
function al() {}
var es = null,
  ts = null;
function ns(e, t) {
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
var rs = typeof setTimeout == "function" ? setTimeout : void 0,
  Jm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  gu = typeof Promise == "function" ? Promise : void 0,
  Zm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof gu < "u"
      ? function (e) {
          return gu.resolve(null).then(e).catch(eh);
        }
      : rs;
function eh(e) {
  setTimeout(function () {
    throw e;
  });
}
function hi(e, t) {
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
function on(e) {
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
function yu(e) {
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
var pr = Math.random().toString(36).slice(2),
  St = "__reactFiber$" + pr,
  ro = "__reactProps$" + pr,
  Ft = "__reactContainer$" + pr,
  os = "__reactEvents$" + pr,
  th = "__reactListeners$" + pr,
  nh = "__reactHandles$" + pr;
function wn(e) {
  var t = e[St];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ft] || n[St])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = yu(e); e !== null; ) {
          if ((n = e[St])) return n;
          e = yu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ho(e) {
  return (
    (e = e[St] || e[Ft]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Bn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function $l(e) {
  return e[ro] || null;
}
var ls = [],
  Qn = -1;
function pn(e) {
  return { current: e };
}
function te(e) {
  0 > Qn || ((e.current = ls[Qn]), (ls[Qn] = null), Qn--);
}
function X(e, t) {
  Qn++, (ls[Qn] = e.current), (e.current = t);
}
var dn = {},
  Te = pn(dn),
  Fe = pn(!1),
  Tn = dn;
function lr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return dn;
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
function ul() {
  te(Fe), te(Te);
}
function vu(e, t, n) {
  if (Te.current !== dn) throw Error(N(168));
  X(Te, t), X(Fe, n);
}
function hd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(N(108, Ap(e) || "Unknown", o));
  return ie({}, n, r);
}
function cl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || dn),
    (Tn = Te.current),
    X(Te, e),
    X(Fe, Fe.current),
    !0
  );
}
function wu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = hd(e, t, Tn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      te(Fe),
      te(Te),
      X(Te, e))
    : te(Fe),
    X(Fe, n);
}
var Pt = null,
  Rl = !1,
  gi = !1;
function gd(e) {
  Pt === null ? (Pt = [e]) : Pt.push(e);
}
function rh(e) {
  (Rl = !0), gd(e);
}
function mn() {
  if (!gi && Pt !== null) {
    gi = !0;
    var e = 0,
      t = q;
    try {
      var n = Pt;
      for (q = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Pt = null), (Rl = !1);
    } catch (o) {
      throw (Pt !== null && (Pt = Pt.slice(e + 1)), Uc(Qs, mn), o);
    } finally {
      (q = t), (gi = !1);
    }
  }
  return null;
}
var Vn = [],
  Yn = 0,
  dl = null,
  fl = 0,
  Xe = [],
  Je = 0,
  Pn = null,
  jt = 1,
  Ot = "";
function hn(e, t) {
  (Vn[Yn++] = fl), (Vn[Yn++] = dl), (dl = e), (fl = t);
}
function yd(e, t, n) {
  (Xe[Je++] = jt), (Xe[Je++] = Ot), (Xe[Je++] = Pn), (Pn = e);
  var r = jt;
  e = Ot;
  var o = 32 - ft(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - ft(t) + o;
  if (30 < l) {
    var i = o - (o % 5);
    (l = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (jt = (1 << (32 - ft(t) + o)) | (n << o) | r),
      (Ot = l + e);
  } else (jt = (1 << l) | (n << o) | r), (Ot = e);
}
function ea(e) {
  e.return !== null && (hn(e, 1), yd(e, 1, 0));
}
function ta(e) {
  for (; e === dl; )
    (dl = Vn[--Yn]), (Vn[Yn] = null), (fl = Vn[--Yn]), (Vn[Yn] = null);
  for (; e === Pn; )
    (Pn = Xe[--Je]),
      (Xe[Je] = null),
      (Ot = Xe[--Je]),
      (Xe[Je] = null),
      (jt = Xe[--Je]),
      (Xe[Je] = null);
}
var Be = null,
  We = null,
  ne = !1,
  dt = null;
function vd(e, t) {
  var n = Ze(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function xu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Be = e), (We = on(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Be = e), (We = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Pn !== null ? { id: jt, overflow: Ot } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ze(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Be = e),
            (We = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function is(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ss(e) {
  if (ne) {
    var t = We;
    if (t) {
      var n = t;
      if (!xu(e, t)) {
        if (is(e)) throw Error(N(418));
        t = on(n.nextSibling);
        var r = Be;
        t && xu(e, t)
          ? vd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ne = !1), (Be = e));
      }
    } else {
      if (is(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (ne = !1), (Be = e);
    }
  }
}
function Su(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Be = e;
}
function _o(e) {
  if (e !== Be) return !1;
  if (!ne) return Su(e), (ne = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ns(e.type, e.memoizedProps))),
    t && (t = We))
  ) {
    if (is(e)) throw (wd(), Error(N(418)));
    for (; t; ) vd(e, t), (t = on(t.nextSibling));
  }
  if ((Su(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              We = on(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      We = null;
    }
  } else We = Be ? on(e.stateNode.nextSibling) : null;
  return !0;
}
function wd() {
  for (var e = We; e; ) e = on(e.nextSibling);
}
function ir() {
  (We = Be = null), (ne = !1);
}
function na(e) {
  dt === null ? (dt = [e]) : dt.push(e);
}
var oh = At.ReactCurrentBatchConfig;
function kr(e, t, n) {
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
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Do(e, t) {
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
function ku(e) {
  var t = e._init;
  return t(e._payload);
}
function xd(e) {
  function t(p, f) {
    if (e) {
      var h = p.deletions;
      h === null ? ((p.deletions = [f]), (p.flags |= 16)) : h.push(f);
    }
  }
  function n(p, f) {
    if (!e) return null;
    for (; f !== null; ) t(p, f), (f = f.sibling);
    return null;
  }
  function r(p, f) {
    for (p = new Map(); f !== null; )
      f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling);
    return p;
  }
  function o(p, f) {
    return (p = un(p, f)), (p.index = 0), (p.sibling = null), p;
  }
  function l(p, f, h) {
    return (
      (p.index = h),
      e
        ? ((h = p.alternate),
          h !== null
            ? ((h = h.index), h < f ? ((p.flags |= 2), f) : h)
            : ((p.flags |= 2), f))
        : ((p.flags |= 1048576), f)
    );
  }
  function i(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function s(p, f, h, S) {
    return f === null || f.tag !== 6
      ? ((f = bi(h, p.mode, S)), (f.return = p), f)
      : ((f = o(f, h)), (f.return = p), f);
  }
  function a(p, f, h, S) {
    var T = h.type;
    return T === An
      ? d(p, f, h.props.children, S, h.key)
      : f !== null &&
        (f.elementType === T ||
          (typeof T == "object" &&
            T !== null &&
            T.$$typeof === Yt &&
            ku(T) === f.type))
      ? ((S = o(f, h.props)), (S.ref = kr(p, f, h)), (S.return = p), S)
      : ((S = Jo(h.type, h.key, h.props, null, p.mode, S)),
        (S.ref = kr(p, f, h)),
        (S.return = p),
        S);
  }
  function u(p, f, h, S) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== h.containerInfo ||
      f.stateNode.implementation !== h.implementation
      ? ((f = Ei(h, p.mode, S)), (f.return = p), f)
      : ((f = o(f, h.children || [])), (f.return = p), f);
  }
  function d(p, f, h, S, T) {
    return f === null || f.tag !== 7
      ? ((f = Nn(h, p.mode, S, T)), (f.return = p), f)
      : ((f = o(f, h)), (f.return = p), f);
  }
  function m(p, f, h) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = bi("" + f, p.mode, h)), (f.return = p), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case bo:
          return (
            (h = Jo(f.type, f.key, f.props, null, p.mode, h)),
            (h.ref = kr(p, null, f)),
            (h.return = p),
            h
          );
        case In:
          return (f = Ei(f, p.mode, h)), (f.return = p), f;
        case Yt:
          var S = f._init;
          return m(p, S(f._payload), h);
      }
      if (Lr(f) || yr(f))
        return (f = Nn(f, p.mode, h, null)), (f.return = p), f;
      Do(p, f);
    }
    return null;
  }
  function g(p, f, h, S) {
    var T = f !== null ? f.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return T !== null ? null : s(p, f, "" + h, S);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case bo:
          return h.key === T ? a(p, f, h, S) : null;
        case In:
          return h.key === T ? u(p, f, h, S) : null;
        case Yt:
          return (T = h._init), g(p, f, T(h._payload), S);
      }
      if (Lr(h) || yr(h)) return T !== null ? null : d(p, f, h, S, null);
      Do(p, h);
    }
    return null;
  }
  function v(p, f, h, S, T) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (p = p.get(h) || null), s(f, p, "" + S, T);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case bo:
          return (p = p.get(S.key === null ? h : S.key) || null), a(f, p, S, T);
        case In:
          return (p = p.get(S.key === null ? h : S.key) || null), u(f, p, S, T);
        case Yt:
          var P = S._init;
          return v(p, f, h, P(S._payload), T);
      }
      if (Lr(S) || yr(S)) return (p = p.get(h) || null), d(f, p, S, T, null);
      Do(f, S);
    }
    return null;
  }
  function w(p, f, h, S) {
    for (
      var T = null, P = null, E = f, j = (f = 0), C = null;
      E !== null && j < h.length;
      j++
    ) {
      E.index > j ? ((C = E), (E = null)) : (C = E.sibling);
      var _ = g(p, E, h[j], S);
      if (_ === null) {
        E === null && (E = C);
        break;
      }
      e && E && _.alternate === null && t(p, E),
        (f = l(_, f, j)),
        P === null ? (T = _) : (P.sibling = _),
        (P = _),
        (E = C);
    }
    if (j === h.length) return n(p, E), ne && hn(p, j), T;
    if (E === null) {
      for (; j < h.length; j++)
        (E = m(p, h[j], S)),
          E !== null &&
            ((f = l(E, f, j)), P === null ? (T = E) : (P.sibling = E), (P = E));
      return ne && hn(p, j), T;
    }
    for (E = r(p, E); j < h.length; j++)
      (C = v(E, p, j, h[j], S)),
        C !== null &&
          (e && C.alternate !== null && E.delete(C.key === null ? j : C.key),
          (f = l(C, f, j)),
          P === null ? (T = C) : (P.sibling = C),
          (P = C));
    return (
      e &&
        E.forEach(function (B) {
          return t(p, B);
        }),
      ne && hn(p, j),
      T
    );
  }
  function x(p, f, h, S) {
    var T = yr(h);
    if (typeof T != "function") throw Error(N(150));
    if (((h = T.call(h)), h == null)) throw Error(N(151));
    for (
      var P = (T = null), E = f, j = (f = 0), C = null, _ = h.next();
      E !== null && !_.done;
      j++, _ = h.next()
    ) {
      E.index > j ? ((C = E), (E = null)) : (C = E.sibling);
      var B = g(p, E, _.value, S);
      if (B === null) {
        E === null && (E = C);
        break;
      }
      e && E && B.alternate === null && t(p, E),
        (f = l(B, f, j)),
        P === null ? (T = B) : (P.sibling = B),
        (P = B),
        (E = C);
    }
    if (_.done) return n(p, E), ne && hn(p, j), T;
    if (E === null) {
      for (; !_.done; j++, _ = h.next())
        (_ = m(p, _.value, S)),
          _ !== null &&
            ((f = l(_, f, j)), P === null ? (T = _) : (P.sibling = _), (P = _));
      return ne && hn(p, j), T;
    }
    for (E = r(p, E); !_.done; j++, _ = h.next())
      (_ = v(E, p, j, _.value, S)),
        _ !== null &&
          (e && _.alternate !== null && E.delete(_.key === null ? j : _.key),
          (f = l(_, f, j)),
          P === null ? (T = _) : (P.sibling = _),
          (P = _));
    return (
      e &&
        E.forEach(function (A) {
          return t(p, A);
        }),
      ne && hn(p, j),
      T
    );
  }
  function k(p, f, h, S) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === An &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case bo:
          e: {
            for (var T = h.key, P = f; P !== null; ) {
              if (P.key === T) {
                if (((T = h.type), T === An)) {
                  if (P.tag === 7) {
                    n(p, P.sibling),
                      (f = o(P, h.props.children)),
                      (f.return = p),
                      (p = f);
                    break e;
                  }
                } else if (
                  P.elementType === T ||
                  (typeof T == "object" &&
                    T !== null &&
                    T.$$typeof === Yt &&
                    ku(T) === P.type)
                ) {
                  n(p, P.sibling),
                    (f = o(P, h.props)),
                    (f.ref = kr(p, P, h)),
                    (f.return = p),
                    (p = f);
                  break e;
                }
                n(p, P);
                break;
              } else t(p, P);
              P = P.sibling;
            }
            h.type === An
              ? ((f = Nn(h.props.children, p.mode, S, h.key)),
                (f.return = p),
                (p = f))
              : ((S = Jo(h.type, h.key, h.props, null, p.mode, S)),
                (S.ref = kr(p, f, h)),
                (S.return = p),
                (p = S));
          }
          return i(p);
        case In:
          e: {
            for (P = h.key; f !== null; ) {
              if (f.key === P)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === h.containerInfo &&
                  f.stateNode.implementation === h.implementation
                ) {
                  n(p, f.sibling),
                    (f = o(f, h.children || [])),
                    (f.return = p),
                    (p = f);
                  break e;
                } else {
                  n(p, f);
                  break;
                }
              else t(p, f);
              f = f.sibling;
            }
            (f = Ei(h, p.mode, S)), (f.return = p), (p = f);
          }
          return i(p);
        case Yt:
          return (P = h._init), k(p, f, P(h._payload), S);
      }
      if (Lr(h)) return w(p, f, h, S);
      if (yr(h)) return x(p, f, h, S);
      Do(p, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        f !== null && f.tag === 6
          ? (n(p, f.sibling), (f = o(f, h)), (f.return = p), (p = f))
          : (n(p, f), (f = bi(h, p.mode, S)), (f.return = p), (p = f)),
        i(p))
      : n(p, f);
  }
  return k;
}
var sr = xd(!0),
  Sd = xd(!1),
  pl = pn(null),
  ml = null,
  qn = null,
  ra = null;
function oa() {
  ra = qn = ml = null;
}
function la(e) {
  var t = pl.current;
  te(pl), (e._currentValue = t);
}
function as(e, t, n) {
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
function tr(e, t) {
  (ml = e),
    (ra = qn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Re = !0), (e.firstContext = null));
}
function tt(e) {
  var t = e._currentValue;
  if (ra !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), qn === null)) {
      if (ml === null) throw Error(N(308));
      (qn = e), (ml.dependencies = { lanes: 0, firstContext: e });
    } else qn = qn.next = e;
  return t;
}
var xn = null;
function ia(e) {
  xn === null ? (xn = [e]) : xn.push(e);
}
function kd(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), ia(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    zt(e, r)
  );
}
function zt(e, t) {
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
function sa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function bd(e, t) {
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
function Mt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ln(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Q & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      zt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), ia(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    zt(e, n)
  );
}
function Vo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Vs(e, n);
  }
}
function bu(e, t) {
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
function hl(e, t, n, r) {
  var o = e.updateQueue;
  qt = !1;
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
    var m = o.baseState;
    (i = 0), (d = u = a = null), (s = l);
    do {
      var g = s.lane,
        v = s.eventTime;
      if ((r & g) === g) {
        d !== null &&
          (d = d.next =
            {
              eventTime: v,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var w = e,
            x = s;
          switch (((g = t), (v = n), x.tag)) {
            case 1:
              if (((w = x.payload), typeof w == "function")) {
                m = w.call(v, m, g);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = x.payload),
                (g = typeof w == "function" ? w.call(v, m, g) : w),
                g == null)
              )
                break e;
              m = ie({}, m, g);
              break e;
            case 2:
              qt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (g = o.effects),
          g === null ? (o.effects = [s]) : g.push(s));
      } else
        (v = {
          eventTime: v,
          lane: g,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          d === null ? ((u = d = v), (a = m)) : (d = d.next = v),
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
      (d === null && (a = m),
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
    (On |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function Eu(e, t, n) {
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
var go = {},
  bt = pn(go),
  oo = pn(go),
  lo = pn(go);
function Sn(e) {
  if (e === go) throw Error(N(174));
  return e;
}
function aa(e, t) {
  switch ((X(lo, t), X(oo, e), X(bt, go), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Hi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Hi(t, e));
  }
  te(bt), X(bt, t);
}
function ar() {
  te(bt), te(oo), te(lo);
}
function Ed(e) {
  Sn(lo.current);
  var t = Sn(bt.current),
    n = Hi(t, e.type);
  t !== n && (X(oo, e), X(bt, n));
}
function ua(e) {
  oo.current === e && (te(bt), te(oo));
}
var oe = pn(0);
function gl(e) {
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
var yi = [];
function ca() {
  for (var e = 0; e < yi.length; e++)
    yi[e]._workInProgressVersionPrimary = null;
  yi.length = 0;
}
var Yo = At.ReactCurrentDispatcher,
  vi = At.ReactCurrentBatchConfig,
  jn = 0,
  le = null,
  de = null,
  me = null,
  yl = !1,
  Ur = !1,
  io = 0,
  lh = 0;
function be() {
  throw Error(N(321));
}
function da(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!mt(e[n], t[n])) return !1;
  return !0;
}
function fa(e, t, n, r, o, l) {
  if (
    ((jn = l),
    (le = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Yo.current = e === null || e.memoizedState === null ? uh : ch),
    (e = n(r, o)),
    Ur)
  ) {
    l = 0;
    do {
      if (((Ur = !1), (io = 0), 25 <= l)) throw Error(N(301));
      (l += 1),
        (me = de = null),
        (t.updateQueue = null),
        (Yo.current = dh),
        (e = n(r, o));
    } while (Ur);
  }
  if (
    ((Yo.current = vl),
    (t = de !== null && de.next !== null),
    (jn = 0),
    (me = de = le = null),
    (yl = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function pa() {
  var e = io !== 0;
  return (io = 0), e;
}
function wt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return me === null ? (le.memoizedState = me = e) : (me = me.next = e), me;
}
function nt() {
  if (de === null) {
    var e = le.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = de.next;
  var t = me === null ? le.memoizedState : me.next;
  if (t !== null) (me = t), (de = e);
  else {
    if (e === null) throw Error(N(310));
    (de = e),
      (e = {
        memoizedState: de.memoizedState,
        baseState: de.baseState,
        baseQueue: de.baseQueue,
        queue: de.queue,
        next: null,
      }),
      me === null ? (le.memoizedState = me = e) : (me = me.next = e);
  }
  return me;
}
function so(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function wi(e) {
  var t = nt(),
    n = t.queue;
  if (n === null) throw Error(N(311));
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
      if ((jn & d) === d)
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
        var m = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((s = a = m), (i = r)) : (a = a.next = m),
          (le.lanes |= d),
          (On |= d);
      }
      u = u.next;
    } while (u !== null && u !== l);
    a === null ? (i = r) : (a.next = s),
      mt(r, t.memoizedState) || (Re = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (le.lanes |= l), (On |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function xi(e) {
  var t = nt(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (l = e(l, i.action)), (i = i.next);
    while (i !== o);
    mt(l, t.memoizedState) || (Re = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function Nd() {}
function Cd(e, t) {
  var n = le,
    r = nt(),
    o = t(),
    l = !mt(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (Re = !0)),
    (r = r.queue),
    ma(jd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (me !== null && me.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ao(9, Pd.bind(null, n, r, o, t), void 0, null),
      he === null)
    )
      throw Error(N(349));
    jn & 30 || Td(n, t, o);
  }
  return o;
}
function Td(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (le.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Pd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Od(t) && Md(e);
}
function jd(e, t, n) {
  return n(function () {
    Od(t) && Md(e);
  });
}
function Od(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !mt(e, n);
  } catch {
    return !0;
  }
}
function Md(e) {
  var t = zt(e, 1);
  t !== null && pt(t, e, 1, -1);
}
function Nu(e) {
  var t = wt();
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
    (e = e.dispatch = ah.bind(null, le, e)),
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
function Ld() {
  return nt().memoizedState;
}
function qo(e, t, n, r) {
  var o = wt();
  (le.flags |= e),
    (o.memoizedState = ao(1 | t, n, void 0, r === void 0 ? null : r));
}
function Fl(e, t, n, r) {
  var o = nt();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (de !== null) {
    var i = de.memoizedState;
    if (((l = i.destroy), r !== null && da(r, i.deps))) {
      o.memoizedState = ao(t, n, l, r);
      return;
    }
  }
  (le.flags |= e), (o.memoizedState = ao(1 | t, n, l, r));
}
function Cu(e, t) {
  return qo(8390656, 8, e, t);
}
function ma(e, t) {
  return Fl(2048, 8, e, t);
}
function _d(e, t) {
  return Fl(4, 2, e, t);
}
function Dd(e, t) {
  return Fl(4, 4, e, t);
}
function $d(e, t) {
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
function Rd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Fl(4, 4, $d.bind(null, t, e), n)
  );
}
function ha() {}
function Fd(e, t) {
  var n = nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && da(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function zd(e, t) {
  var n = nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && da(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Id(e, t, n) {
  return jn & 21
    ? (mt(n, t) || ((n = Bc()), (le.lanes |= n), (On |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Re = !0)), (e.memoizedState = n));
}
function ih(e, t) {
  var n = q;
  (q = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = vi.transition;
  vi.transition = {};
  try {
    e(!1), t();
  } finally {
    (q = n), (vi.transition = r);
  }
}
function Ad() {
  return nt().memoizedState;
}
function sh(e, t, n) {
  var r = an(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ud(e))
  )
    Hd(t, n);
  else if (((n = kd(e, t, n, r)), n !== null)) {
    var o = Le();
    pt(n, e, r, o), Wd(n, t, r);
  }
}
function ah(e, t, n) {
  var r = an(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ud(e)) Hd(t, o);
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
        if (((o.hasEagerState = !0), (o.eagerState = s), mt(s, i))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), ia(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = kd(e, t, o, r)),
      n !== null && ((o = Le()), pt(n, e, r, o), Wd(n, t, r));
  }
}
function Ud(e) {
  var t = e.alternate;
  return e === le || (t !== null && t === le);
}
function Hd(e, t) {
  Ur = yl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Wd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Vs(e, n);
  }
}
var vl = {
    readContext: tt,
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
  uh = {
    readContext: tt,
    useCallback: function (e, t) {
      return (wt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: tt,
    useEffect: Cu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        qo(4194308, 4, $d.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return qo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return qo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = wt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = wt();
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
        (e = e.dispatch = sh.bind(null, le, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = wt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Nu,
    useDebugValue: ha,
    useDeferredValue: function (e) {
      return (wt().memoizedState = e);
    },
    useTransition: function () {
      var e = Nu(!1),
        t = e[0];
      return (e = ih.bind(null, e[1])), (wt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = le,
        o = wt();
      if (ne) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), he === null)) throw Error(N(349));
        jn & 30 || Td(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        Cu(jd.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        ao(9, Pd.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = wt(),
        t = he.identifierPrefix;
      if (ne) {
        var n = Ot,
          r = jt;
        (n = (r & ~(1 << (32 - ft(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = io++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = lh++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ch = {
    readContext: tt,
    useCallback: Fd,
    useContext: tt,
    useEffect: ma,
    useImperativeHandle: Rd,
    useInsertionEffect: _d,
    useLayoutEffect: Dd,
    useMemo: zd,
    useReducer: wi,
    useRef: Ld,
    useState: function () {
      return wi(so);
    },
    useDebugValue: ha,
    useDeferredValue: function (e) {
      var t = nt();
      return Id(t, de.memoizedState, e);
    },
    useTransition: function () {
      var e = wi(so)[0],
        t = nt().memoizedState;
      return [e, t];
    },
    useMutableSource: Nd,
    useSyncExternalStore: Cd,
    useId: Ad,
    unstable_isNewReconciler: !1,
  },
  dh = {
    readContext: tt,
    useCallback: Fd,
    useContext: tt,
    useEffect: ma,
    useImperativeHandle: Rd,
    useInsertionEffect: _d,
    useLayoutEffect: Dd,
    useMemo: zd,
    useReducer: xi,
    useRef: Ld,
    useState: function () {
      return xi(so);
    },
    useDebugValue: ha,
    useDeferredValue: function (e) {
      var t = nt();
      return de === null ? (t.memoizedState = e) : Id(t, de.memoizedState, e);
    },
    useTransition: function () {
      var e = xi(so)[0],
        t = nt().memoizedState;
      return [e, t];
    },
    useMutableSource: Nd,
    useSyncExternalStore: Cd,
    useId: Ad,
    unstable_isNewReconciler: !1,
  };
function ut(e, t) {
  if (e && e.defaultProps) {
    (t = ie({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function us(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ie({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var zl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Dn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Le(),
      o = an(e),
      l = Mt(r, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = ln(e, l, o)),
      t !== null && (pt(t, e, o, r), Vo(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Le(),
      o = an(e),
      l = Mt(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = ln(e, l, o)),
      t !== null && (pt(t, e, o, r), Vo(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Le(),
      r = an(e),
      o = Mt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = ln(e, o, r)),
      t !== null && (pt(t, e, r, n), Vo(t, e, r));
  },
};
function Tu(e, t, n, r, o, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !eo(n, r) || !eo(o, l)
      : !0
  );
}
function Bd(e, t, n) {
  var r = !1,
    o = dn,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = tt(l))
      : ((o = ze(t) ? Tn : Te.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? lr(e, o) : dn)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = zl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function Pu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && zl.enqueueReplaceState(t, t.state, null);
}
function cs(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), sa(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = tt(l))
    : ((l = ze(t) ? Tn : Te.current), (o.context = lr(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (us(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && zl.enqueueReplaceState(o, o.state, null),
      hl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function ur(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Ip(r)), (r = r.return);
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
function Si(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ds(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var fh = typeof WeakMap == "function" ? WeakMap : Map;
function Qd(e, t, n) {
  (n = Mt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      xl || ((xl = !0), (Ss = r)), ds(e, t);
    }),
    n
  );
}
function Vd(e, t, n) {
  (n = Mt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        ds(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        ds(e, t),
          typeof r != "function" &&
            (sn === null ? (sn = new Set([this])) : sn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function ju(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new fh();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Ch.bind(null, e, t, n)), t.then(e, e));
}
function Ou(e) {
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
function Mu(e, t, n, r, o) {
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
              : ((t = Mt(-1, 1)), (t.tag = 2), ln(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ph = At.ReactCurrentOwner,
  Re = !1;
function Me(e, t, n, r) {
  t.child = e === null ? Sd(t, null, n, r) : sr(t, e.child, n, r);
}
function Lu(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    tr(t, o),
    (r = fa(e, t, n, r, l, o)),
    (n = pa()),
    e !== null && !Re
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        It(e, t, o))
      : (ne && n && ea(t), (t.flags |= 1), Me(e, t, r, o), t.child)
  );
}
function _u(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !ba(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Yd(e, t, l, r, o))
      : ((e = Jo(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var i = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : eo), n(i, r) && e.ref === t.ref)
    )
      return It(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = un(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Yd(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (eo(l, r) && e.ref === t.ref)
      if (((Re = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (Re = !0);
      else return (t.lanes = e.lanes), It(e, t, o);
  }
  return fs(e, t, n, r, o);
}
function qd(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        X(Kn, Ue),
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
          X(Kn, Ue),
          (Ue |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        X(Kn, Ue),
        (Ue |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      X(Kn, Ue),
      (Ue |= r);
  return Me(e, t, o, n), t.child;
}
function Gd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function fs(e, t, n, r, o) {
  var l = ze(n) ? Tn : Te.current;
  return (
    (l = lr(t, l)),
    tr(t, o),
    (n = fa(e, t, n, r, l, o)),
    (r = pa()),
    e !== null && !Re
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        It(e, t, o))
      : (ne && r && ea(t), (t.flags |= 1), Me(e, t, n, o), t.child)
  );
}
function Du(e, t, n, r, o) {
  if (ze(n)) {
    var l = !0;
    cl(t);
  } else l = !1;
  if ((tr(t, o), t.stateNode === null))
    Go(e, t), Bd(t, n, r), cs(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var a = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = tt(u))
      : ((u = ze(n) ? Tn : Te.current), (u = lr(t, u)));
    var d = n.getDerivedStateFromProps,
      m =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && Pu(t, i, r, u)),
      (qt = !1);
    var g = t.memoizedState;
    (i.state = g),
      hl(t, r, i, o),
      (a = t.memoizedState),
      s !== r || g !== a || Fe.current || qt
        ? (typeof d == "function" && (us(t, n, d, r), (a = t.memoizedState)),
          (s = qt || Tu(t, n, s, r, g, a, u))
            ? (m ||
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
      bd(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : ut(t.type, s)),
      (i.props = u),
      (m = t.pendingProps),
      (g = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = tt(a))
        : ((a = ze(n) ? Tn : Te.current), (a = lr(t, a)));
    var v = n.getDerivedStateFromProps;
    (d =
      typeof v == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== m || g !== a) && Pu(t, i, r, a)),
      (qt = !1),
      (g = t.memoizedState),
      (i.state = g),
      hl(t, r, i, o);
    var w = t.memoizedState;
    s !== m || g !== w || Fe.current || qt
      ? (typeof v == "function" && (us(t, n, v, r), (w = t.memoizedState)),
        (u = qt || Tu(t, n, u, r, g, w, a) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
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
  return ps(e, t, n, r, l, o);
}
function ps(e, t, n, r, o, l) {
  Gd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && wu(t, n, !1), It(e, t, l);
  (r = t.stateNode), (ph.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = sr(t, e.child, null, l)), (t.child = sr(t, null, s, l)))
      : Me(e, t, s, l),
    (t.memoizedState = r.state),
    o && wu(t, n, !0),
    t.child
  );
}
function Kd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? vu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && vu(e, t.context, !1),
    aa(e, t.containerInfo);
}
function $u(e, t, n, r, o) {
  return ir(), na(o), (t.flags |= 256), Me(e, t, n, r), t.child;
}
var ms = { dehydrated: null, treeContext: null, retryLane: 0 };
function hs(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Xd(e, t, n) {
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
      ss(t),
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
                : (l = Ul(i, r, 0, null)),
              (e = Nn(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = hs(n)),
              (t.memoizedState = ms),
              e)
            : ga(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return mh(e, t, i, r, s, o, n);
  if (l) {
    (l = r.fallback), (i = t.mode), (o = e.child), (s = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = un(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (l = un(s, l)) : ((l = Nn(l, i, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? hs(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (l.memoizedState = i),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = ms),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = un(l, { mode: "visible", children: r.children })),
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
function ga(e, t) {
  return (
    (t = Ul({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function $o(e, t, n, r) {
  return (
    r !== null && na(r),
    sr(t, e.child, null, n),
    (e = ga(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function mh(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Si(Error(N(422)))), $o(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (o = t.mode),
        (r = Ul({ mode: "visible", children: r.children }, o, 0, null)),
        (l = Nn(l, o, i, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && sr(t, e.child, null, i),
        (t.child.memoizedState = hs(i)),
        (t.memoizedState = ms),
        l);
  if (!(t.mode & 1)) return $o(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (l = Error(N(419))), (r = Si(l, r, void 0)), $o(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), Re || s)) {
    if (((r = he), r !== null)) {
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
          ((l.retryLane = o), zt(e, o), pt(r, e, o, -1));
    }
    return ka(), (r = Si(Error(N(421)))), $o(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Th.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (We = on(o.nextSibling)),
      (Be = t),
      (ne = !0),
      (dt = null),
      e !== null &&
        ((Xe[Je++] = jt),
        (Xe[Je++] = Ot),
        (Xe[Je++] = Pn),
        (jt = e.id),
        (Ot = e.overflow),
        (Pn = t)),
      (t = ga(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ru(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), as(e.return, t, n);
}
function ki(e, t, n, r, o) {
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
function Jd(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((Me(e, t, r.children, n), (r = oe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ru(e, n, t);
        else if (e.tag === 19) Ru(e, n, t);
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
            e !== null && gl(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          ki(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && gl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        ki(t, !0, n, null, l);
        break;
      case "together":
        ki(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Go(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function It(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (On |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = un(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = un(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function hh(e, t, n) {
  switch (t.tag) {
    case 3:
      Kd(t), ir();
      break;
    case 5:
      Ed(t);
      break;
    case 1:
      ze(t.type) && cl(t);
      break;
    case 4:
      aa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      X(pl, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (X(oe, oe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Xd(e, t, n)
          : (X(oe, oe.current & 1),
            (e = It(e, t, n)),
            e !== null ? e.sibling : null);
      X(oe, oe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Jd(e, t, n);
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
      return (t.lanes = 0), qd(e, t, n);
  }
  return It(e, t, n);
}
var Zd, gs, ef, tf;
Zd = function (e, t) {
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
gs = function () {};
ef = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Sn(bt.current);
    var l = null;
    switch (n) {
      case "input":
        (o = zi(e, o)), (r = zi(e, r)), (l = []);
        break;
      case "select":
        (o = ie({}, o, { value: void 0 })),
          (r = ie({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = Ui(e, o)), (r = Ui(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = al);
    }
    Wi(n, r);
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
                ? (a != null && u === "onScroll" && ee("scroll", e),
                  l || s === a || (l = []))
                : (l = l || []).push(u, a));
    }
    n && (l = l || []).push("style", n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
tf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function br(e, t) {
  if (!ne)
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
function gh(e, t, n) {
  var r = t.pendingProps;
  switch ((ta(t), t.tag)) {
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
      return ze(t.type) && ul(), Ee(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ar(),
        te(Fe),
        te(Te),
        ca(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (_o(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), dt !== null && (Es(dt), (dt = null)))),
        gs(e, t),
        Ee(t),
        null
      );
    case 5:
      ua(t);
      var o = Sn(lo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ef(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return Ee(t), null;
        }
        if (((e = Sn(bt.current)), _o(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[St] = t), (r[ro] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ee("cancel", r), ee("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ee("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Dr.length; o++) ee(Dr[o], r);
              break;
            case "source":
              ee("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ee("error", r), ee("load", r);
              break;
            case "details":
              ee("toggle", r);
              break;
            case "input":
              Qa(r, l), ee("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                ee("invalid", r);
              break;
            case "textarea":
              Ya(r, l), ee("invalid", r);
          }
          Wi(n, l), (o = null);
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var s = l[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Lo(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Lo(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : Yr.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  ee("scroll", r);
            }
          switch (n) {
            case "input":
              Eo(r), Va(r, l, !0);
              break;
            case "textarea":
              Eo(r), qa(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = al);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = jc(n)),
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
            Zd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Bi(n, r)), n)) {
              case "dialog":
                ee("cancel", e), ee("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ee("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Dr.length; o++) ee(Dr[o], e);
                o = r;
                break;
              case "source":
                ee("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                ee("error", e), ee("load", e), (o = r);
                break;
              case "details":
                ee("toggle", e), (o = r);
                break;
              case "input":
                Qa(e, r), (o = zi(e, r)), ee("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ie({}, r, { value: void 0 })),
                  ee("invalid", e);
                break;
              case "textarea":
                Ya(e, r), (o = Ui(e, r)), ee("invalid", e);
                break;
              default:
                o = r;
            }
            Wi(n, o), (s = o);
            for (l in s)
              if (s.hasOwnProperty(l)) {
                var a = s[l];
                l === "style"
                  ? Lc(e, a)
                  : l === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Oc(e, a))
                  : l === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && qr(e, a)
                    : typeof a == "number" && qr(e, "" + a)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (Yr.hasOwnProperty(l)
                      ? a != null && l === "onScroll" && ee("scroll", e)
                      : a != null && As(e, l, a, i));
              }
            switch (n) {
              case "input":
                Eo(e), Va(e, r, !1);
                break;
              case "textarea":
                Eo(e), qa(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + cn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? Xn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      Xn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = al);
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
      if (e && t.stateNode != null) tf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = Sn(lo.current)), Sn(bt.current), _o(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[St] = t),
            (l = r.nodeValue !== n) && ((e = Be), e !== null))
          )
            switch (e.tag) {
              case 3:
                Lo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Lo(r.nodeValue, n, (e.mode & 1) !== 0);
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
        (te(oe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ne && We !== null && t.mode & 1 && !(t.flags & 128))
          wd(), ir(), (t.flags |= 98560), (l = !1);
        else if (((l = _o(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(N(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(N(317));
            l[St] = t;
          } else
            ir(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ee(t), (l = !1);
        } else dt !== null && (Es(dt), (dt = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || oe.current & 1 ? fe === 0 && (fe = 3) : ka())),
          t.updateQueue !== null && (t.flags |= 4),
          Ee(t),
          null);
    case 4:
      return (
        ar(), gs(e, t), e === null && to(t.stateNode.containerInfo), Ee(t), null
      );
    case 10:
      return la(t.type._context), Ee(t), null;
    case 17:
      return ze(t.type) && ul(), Ee(t), null;
    case 19:
      if ((te(oe), (l = t.memoizedState), l === null)) return Ee(t), null;
      if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (r) br(l, !1);
        else {
          if (fe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = gl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    br(l, !1),
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
            ue() > cr &&
            ((t.flags |= 128), (r = !0), br(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = gl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              br(l, !0),
              l.tail === null && l.tailMode === "hidden" && !i.alternate && !ne)
            )
              return Ee(t), null;
          } else
            2 * ue() - l.renderingStartTime > cr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), br(l, !1), (t.lanes = 4194304));
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
        Sa(),
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
  throw Error(N(156, t.tag));
}
function yh(e, t) {
  switch ((ta(t), t.tag)) {
    case 1:
      return (
        ze(t.type) && ul(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ar(),
        te(Fe),
        te(Te),
        ca(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ua(t), null;
    case 13:
      if (
        (te(oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(N(340));
        ir();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return te(oe), null;
    case 4:
      return ar(), null;
    case 10:
      return la(t.type._context), null;
    case 22:
    case 23:
      return Sa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ro = !1,
  Ne = !1,
  vh = typeof WeakSet == "function" ? WeakSet : Set,
  D = null;
function Gn(e, t) {
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
function ys(e, t, n) {
  try {
    n();
  } catch (r) {
    se(e, t, r);
  }
}
var Fu = !1;
function wh(e, t) {
  if (((es = ll), (e = id()), Zs(e))) {
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
            m = e,
            g = null;
          t: for (;;) {
            for (
              var v;
              m !== n || (o !== 0 && m.nodeType !== 3) || (s = i + o),
                m !== l || (r !== 0 && m.nodeType !== 3) || (a = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (v = m.firstChild) !== null;

            )
              (g = m), (m = v);
            for (;;) {
              if (m === e) break t;
              if (
                (g === n && ++u === o && (s = i),
                g === l && ++d === r && (a = i),
                (v = m.nextSibling) !== null)
              )
                break;
              (m = g), (g = m.parentNode);
            }
            m = v;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ts = { focusedElem: e, selectionRange: n }, ll = !1, D = t; D !== null; )
    if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (D = e);
    else
      for (; D !== null; ) {
        t = D;
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
                  var x = w.memoizedProps,
                    k = w.memoizedState,
                    p = t.stateNode,
                    f = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : ut(t.type, x),
                      k
                    );
                  p.__reactInternalSnapshotBeforeUpdate = f;
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
                throw Error(N(163));
            }
        } catch (S) {
          se(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (D = e);
          break;
        }
        D = t.return;
      }
  return (w = Fu), (Fu = !1), w;
}
function Hr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && ys(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Il(e, t) {
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
function vs(e) {
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
function nf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), nf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[St], delete t[ro], delete t[os], delete t[th], delete t[nh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function rf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function zu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || rf(e.return)) return null;
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
function ws(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = al));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ws(e, t, n), e = e.sibling; e !== null; ) ws(e, t, n), (e = e.sibling);
}
function xs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (xs(e, t, n), e = e.sibling; e !== null; ) xs(e, t, n), (e = e.sibling);
}
var we = null,
  ct = !1;
function Ht(e, t, n) {
  for (n = n.child; n !== null; ) of(e, t, n), (n = n.sibling);
}
function of(e, t, n) {
  if (kt && typeof kt.onCommitFiberUnmount == "function")
    try {
      kt.onCommitFiberUnmount(Ml, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ne || Gn(n, t);
    case 6:
      var r = we,
        o = ct;
      (we = null),
        Ht(e, t, n),
        (we = r),
        (ct = o),
        we !== null &&
          (ct
            ? ((e = we),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : we.removeChild(n.stateNode));
      break;
    case 18:
      we !== null &&
        (ct
          ? ((e = we),
            (n = n.stateNode),
            e.nodeType === 8
              ? hi(e.parentNode, n)
              : e.nodeType === 1 && hi(e, n),
            Jr(e))
          : hi(we, n.stateNode));
      break;
    case 4:
      (r = we),
        (o = ct),
        (we = n.stateNode.containerInfo),
        (ct = !0),
        Ht(e, t, n),
        (we = r),
        (ct = o);
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
            i !== void 0 && (l & 2 || l & 4) && ys(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      Ht(e, t, n);
      break;
    case 1:
      if (
        !Ne &&
        (Gn(n, t),
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
      Ht(e, t, n);
      break;
    case 21:
      Ht(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ne = (r = Ne) || n.memoizedState !== null), Ht(e, t, n), (Ne = r))
        : Ht(e, t, n);
      break;
    default:
      Ht(e, t, n);
  }
}
function Iu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new vh()),
      t.forEach(function (r) {
        var o = Ph.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function at(e, t) {
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
              (we = s.stateNode), (ct = !1);
              break e;
            case 3:
              (we = s.stateNode.containerInfo), (ct = !0);
              break e;
            case 4:
              (we = s.stateNode.containerInfo), (ct = !0);
              break e;
          }
          s = s.return;
        }
        if (we === null) throw Error(N(160));
        of(l, i, o), (we = null), (ct = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        se(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) lf(t, e), (t = t.sibling);
}
function lf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((at(t, e), vt(e), r & 4)) {
        try {
          Hr(3, e, e.return), Il(3, e);
        } catch (x) {
          se(e, e.return, x);
        }
        try {
          Hr(5, e, e.return);
        } catch (x) {
          se(e, e.return, x);
        }
      }
      break;
    case 1:
      at(t, e), vt(e), r & 512 && n !== null && Gn(n, n.return);
      break;
    case 5:
      if (
        (at(t, e),
        vt(e),
        r & 512 && n !== null && Gn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          qr(o, "");
        } catch (x) {
          se(e, e.return, x);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          i = n !== null ? n.memoizedProps : l,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && l.type === "radio" && l.name != null && Tc(o, l),
              Bi(s, i);
            var u = Bi(s, l);
            for (i = 0; i < a.length; i += 2) {
              var d = a[i],
                m = a[i + 1];
              d === "style"
                ? Lc(o, m)
                : d === "dangerouslySetInnerHTML"
                ? Oc(o, m)
                : d === "children"
                ? qr(o, m)
                : As(o, d, m, u);
            }
            switch (s) {
              case "input":
                Ii(o, l);
                break;
              case "textarea":
                Pc(o, l);
                break;
              case "select":
                var g = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var v = l.value;
                v != null
                  ? Xn(o, !!l.multiple, v, !1)
                  : g !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Xn(o, !!l.multiple, l.defaultValue, !0)
                      : Xn(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[ro] = l;
          } catch (x) {
            se(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((at(t, e), vt(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (x) {
          se(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (at(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Jr(t.containerInfo);
        } catch (x) {
          se(e, e.return, x);
        }
      break;
    case 4:
      at(t, e), vt(e);
      break;
    case 13:
      at(t, e),
        vt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (wa = ue())),
        r & 4 && Iu(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ne = (u = Ne) || d), at(t, e), (Ne = u)) : at(t, e),
        vt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (D = e, d = e.child; d !== null; ) {
            for (m = D = d; D !== null; ) {
              switch (((g = D), (v = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Hr(4, g, g.return);
                  break;
                case 1:
                  Gn(g, g.return);
                  var w = g.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = g), (n = g.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (x) {
                      se(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Gn(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    Uu(m);
                    continue;
                  }
              }
              v !== null ? ((v.return = g), (D = v)) : Uu(m);
            }
            d = d.sibling;
          }
        e: for (d = null, m = e; ; ) {
          if (m.tag === 5) {
            if (d === null) {
              d = m;
              try {
                (o = m.stateNode),
                  u
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((s = m.stateNode),
                      (a = m.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = Mc("display", i)));
              } catch (x) {
                se(e, e.return, x);
              }
            }
          } else if (m.tag === 6) {
            if (d === null)
              try {
                m.stateNode.nodeValue = u ? "" : m.memoizedProps;
              } catch (x) {
                se(e, e.return, x);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            d === m && (d = null), (m = m.return);
          }
          d === m && (d = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      at(t, e), vt(e), r & 4 && Iu(e);
      break;
    case 21:
      break;
    default:
      at(t, e), vt(e);
  }
}
function vt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (rf(n)) {
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
          r.flags & 32 && (qr(o, ""), (r.flags &= -33));
          var l = zu(e);
          xs(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = zu(e);
          ws(e, s, i);
          break;
        default:
          throw Error(N(161));
      }
    } catch (a) {
      se(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function xh(e, t, n) {
  (D = e), sf(e);
}
function sf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var o = D,
      l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Ro;
      if (!i) {
        var s = o.alternate,
          a = (s !== null && s.memoizedState !== null) || Ne;
        s = Ro;
        var u = Ne;
        if (((Ro = i), (Ne = a) && !u))
          for (D = o; D !== null; )
            (i = D),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Hu(o)
                : a !== null
                ? ((a.return = i), (D = a))
                : Hu(o);
        for (; l !== null; ) (D = l), sf(l), (l = l.sibling);
        (D = o), (Ro = s), (Ne = u);
      }
      Au(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (D = l)) : Au(e);
  }
}
function Au(e) {
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
              Ne || Il(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ne)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ut(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && Eu(t, l, r);
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
                Eu(t, i, n);
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
                    var m = d.dehydrated;
                    m !== null && Jr(m);
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
        Ne || (t.flags & 512 && vs(t));
      } catch (g) {
        se(t, t.return, g);
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
function Uu(e) {
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
function Hu(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Il(4, t);
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
            vs(t);
          } catch (a) {
            se(t, l, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            vs(t);
          } catch (a) {
            se(t, i, a);
          }
      }
    } catch (a) {
      se(t, t.return, a);
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
var Sh = Math.ceil,
  wl = At.ReactCurrentDispatcher,
  ya = At.ReactCurrentOwner,
  et = At.ReactCurrentBatchConfig,
  Q = 0,
  he = null,
  ce = null,
  xe = 0,
  Ue = 0,
  Kn = pn(0),
  fe = 0,
  uo = null,
  On = 0,
  Al = 0,
  va = 0,
  Wr = null,
  $e = null,
  wa = 0,
  cr = 1 / 0,
  Tt = null,
  xl = !1,
  Ss = null,
  sn = null,
  Fo = !1,
  Zt = null,
  Sl = 0,
  Br = 0,
  ks = null,
  Ko = -1,
  Xo = 0;
function Le() {
  return Q & 6 ? ue() : Ko !== -1 ? Ko : (Ko = ue());
}
function an(e) {
  return e.mode & 1
    ? Q & 2 && xe !== 0
      ? xe & -xe
      : oh.transition !== null
      ? (Xo === 0 && (Xo = Bc()), Xo)
      : ((e = q),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Xc(e.type))),
        e)
    : 1;
}
function pt(e, t, n, r) {
  if (50 < Br) throw ((Br = 0), (ks = null), Error(N(185)));
  po(e, n, r),
    (!(Q & 2) || e !== he) &&
      (e === he && (!(Q & 2) && (Al |= n), fe === 4 && Kt(e, xe)),
      Ie(e, r),
      n === 1 && Q === 0 && !(t.mode & 1) && ((cr = ue() + 500), Rl && mn()));
}
function Ie(e, t) {
  var n = e.callbackNode;
  om(e, t);
  var r = ol(e, e === he ? xe : 0);
  if (r === 0)
    n !== null && Xa(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Xa(n), t === 1))
      e.tag === 0 ? rh(Wu.bind(null, e)) : gd(Wu.bind(null, e)),
        Zm(function () {
          !(Q & 6) && mn();
        }),
        (n = null);
    else {
      switch (Qc(r)) {
        case 1:
          n = Qs;
          break;
        case 4:
          n = Hc;
          break;
        case 16:
          n = rl;
          break;
        case 536870912:
          n = Wc;
          break;
        default:
          n = rl;
      }
      n = hf(n, af.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function af(e, t) {
  if (((Ko = -1), (Xo = 0), Q & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (nr() && e.callbackNode !== n) return null;
  var r = ol(e, e === he ? xe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = kl(e, r);
  else {
    t = r;
    var o = Q;
    Q |= 2;
    var l = cf();
    (he !== e || xe !== t) && ((Tt = null), (cr = ue() + 500), En(e, t));
    do
      try {
        Eh();
        break;
      } catch (s) {
        uf(e, s);
      }
    while (!0);
    oa(),
      (wl.current = l),
      (Q = o),
      ce !== null ? (t = 0) : ((he = null), (xe = 0), (t = fe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Gi(e)), o !== 0 && ((r = o), (t = bs(e, o)))), t === 1)
    )
      throw ((n = uo), En(e, 0), Kt(e, r), Ie(e, ue()), n);
    if (t === 6) Kt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !kh(o) &&
          ((t = kl(e, r)),
          t === 2 && ((l = Gi(e)), l !== 0 && ((r = l), (t = bs(e, l)))),
          t === 1))
      )
        throw ((n = uo), En(e, 0), Kt(e, r), Ie(e, ue()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          gn(e, $e, Tt);
          break;
        case 3:
          if (
            (Kt(e, r), (r & 130023424) === r && ((t = wa + 500 - ue()), 10 < t))
          ) {
            if (ol(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Le(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = rs(gn.bind(null, e, $e, Tt), t);
            break;
          }
          gn(e, $e, Tt);
          break;
        case 4:
          if ((Kt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - ft(r);
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
                : 1960 * Sh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = rs(gn.bind(null, e, $e, Tt), r);
            break;
          }
          gn(e, $e, Tt);
          break;
        case 5:
          gn(e, $e, Tt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Ie(e, ue()), e.callbackNode === n ? af.bind(null, e) : null;
}
function bs(e, t) {
  var n = Wr;
  return (
    e.current.memoizedState.isDehydrated && (En(e, t).flags |= 256),
    (e = kl(e, t)),
    e !== 2 && ((t = $e), ($e = n), t !== null && Es(t)),
    e
  );
}
function Es(e) {
  $e === null ? ($e = e) : $e.push.apply($e, e);
}
function kh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!mt(l(), o)) return !1;
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
function Kt(e, t) {
  for (
    t &= ~va,
      t &= ~Al,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ft(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Wu(e) {
  if (Q & 6) throw Error(N(327));
  nr();
  var t = ol(e, 0);
  if (!(t & 1)) return Ie(e, ue()), null;
  var n = kl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Gi(e);
    r !== 0 && ((t = r), (n = bs(e, r)));
  }
  if (n === 1) throw ((n = uo), En(e, 0), Kt(e, t), Ie(e, ue()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    gn(e, $e, Tt),
    Ie(e, ue()),
    null
  );
}
function xa(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    (Q = n), Q === 0 && ((cr = ue() + 500), Rl && mn());
  }
}
function Mn(e) {
  Zt !== null && Zt.tag === 0 && !(Q & 6) && nr();
  var t = Q;
  Q |= 1;
  var n = et.transition,
    r = q;
  try {
    if (((et.transition = null), (q = 1), e)) return e();
  } finally {
    (q = r), (et.transition = n), (Q = t), !(Q & 6) && mn();
  }
}
function Sa() {
  (Ue = Kn.current), te(Kn);
}
function En(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Jm(n)), ce !== null))
    for (n = ce.return; n !== null; ) {
      var r = n;
      switch ((ta(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ul();
          break;
        case 3:
          ar(), te(Fe), te(Te), ca();
          break;
        case 5:
          ua(r);
          break;
        case 4:
          ar();
          break;
        case 13:
          te(oe);
          break;
        case 19:
          te(oe);
          break;
        case 10:
          la(r.type._context);
          break;
        case 22:
        case 23:
          Sa();
      }
      n = n.return;
    }
  if (
    ((he = e),
    (ce = e = un(e.current, null)),
    (xe = Ue = t),
    (fe = 0),
    (uo = null),
    (va = Al = On = 0),
    ($e = Wr = null),
    xn !== null)
  ) {
    for (t = 0; t < xn.length; t++)
      if (((n = xn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var i = l.next;
          (l.next = o), (r.next = i);
        }
        n.pending = r;
      }
    xn = null;
  }
  return e;
}
function uf(e, t) {
  do {
    var n = ce;
    try {
      if ((oa(), (Yo.current = vl), yl)) {
        for (var r = le.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        yl = !1;
      }
      if (
        ((jn = 0),
        (me = de = le = null),
        (Ur = !1),
        (io = 0),
        (ya.current = null),
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
          ((t = xe),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            d = s,
            m = d.tag;
          if (!(d.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var g = d.alternate;
            g
              ? ((d.updateQueue = g.updateQueue),
                (d.memoizedState = g.memoizedState),
                (d.lanes = g.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var v = Ou(i);
          if (v !== null) {
            (v.flags &= -257),
              Mu(v, i, s, l, t),
              v.mode & 1 && ju(l, u, t),
              (t = v),
              (a = u);
            var w = t.updateQueue;
            if (w === null) {
              var x = new Set();
              x.add(a), (t.updateQueue = x);
            } else w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              ju(l, u, t), ka();
              break e;
            }
            a = Error(N(426));
          }
        } else if (ne && s.mode & 1) {
          var k = Ou(i);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              Mu(k, i, s, l, t),
              na(ur(a, s));
            break e;
          }
        }
        (l = a = ur(a, s)),
          fe !== 4 && (fe = 2),
          Wr === null ? (Wr = [l]) : Wr.push(l),
          (l = i);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var p = Qd(l, a, t);
              bu(l, p);
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
                    (sn === null || !sn.has(h))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var S = Vd(l, s, t);
                bu(l, S);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      ff(n);
    } catch (T) {
      (t = T), ce === n && n !== null && (ce = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function cf() {
  var e = wl.current;
  return (wl.current = vl), e === null ? vl : e;
}
function ka() {
  (fe === 0 || fe === 3 || fe === 2) && (fe = 4),
    he === null || (!(On & 268435455) && !(Al & 268435455)) || Kt(he, xe);
}
function kl(e, t) {
  var n = Q;
  Q |= 2;
  var r = cf();
  (he !== e || xe !== t) && ((Tt = null), En(e, t));
  do
    try {
      bh();
      break;
    } catch (o) {
      uf(e, o);
    }
  while (!0);
  if ((oa(), (Q = n), (wl.current = r), ce !== null)) throw Error(N(261));
  return (he = null), (xe = 0), fe;
}
function bh() {
  for (; ce !== null; ) df(ce);
}
function Eh() {
  for (; ce !== null && !Gp(); ) df(ce);
}
function df(e) {
  var t = mf(e.alternate, e, Ue);
  (e.memoizedProps = e.pendingProps),
    t === null ? ff(e) : (ce = t),
    (ya.current = null);
}
function ff(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = yh(n, t)), n !== null)) {
        (n.flags &= 32767), (ce = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (fe = 6), (ce = null);
        return;
      }
    } else if (((n = gh(n, t, Ue)), n !== null)) {
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
function gn(e, t, n) {
  var r = q,
    o = et.transition;
  try {
    (et.transition = null), (q = 1), Nh(e, t, n, r);
  } finally {
    (et.transition = o), (q = r);
  }
  return null;
}
function Nh(e, t, n, r) {
  do nr();
  while (Zt !== null);
  if (Q & 6) throw Error(N(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (lm(e, l),
    e === he && ((ce = he = null), (xe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Fo ||
      ((Fo = !0),
      hf(rl, function () {
        return nr(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = et.transition), (et.transition = null);
    var i = q;
    q = 1;
    var s = Q;
    (Q |= 4),
      (ya.current = null),
      wh(e, n),
      lf(n, e),
      Qm(ts),
      (ll = !!es),
      (ts = es = null),
      (e.current = n),
      xh(n),
      Kp(),
      (Q = s),
      (q = i),
      (et.transition = l);
  } else e.current = n;
  if (
    (Fo && ((Fo = !1), (Zt = e), (Sl = o)),
    (l = e.pendingLanes),
    l === 0 && (sn = null),
    Zp(n.stateNode),
    Ie(e, ue()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (xl) throw ((xl = !1), (e = Ss), (Ss = null), e);
  return (
    Sl & 1 && e.tag !== 0 && nr(),
    (l = e.pendingLanes),
    l & 1 ? (e === ks ? Br++ : ((Br = 0), (ks = e))) : (Br = 0),
    mn(),
    null
  );
}
function nr() {
  if (Zt !== null) {
    var e = Qc(Sl),
      t = et.transition,
      n = q;
    try {
      if (((et.transition = null), (q = 16 > e ? 16 : e), Zt === null))
        var r = !1;
      else {
        if (((e = Zt), (Zt = null), (Sl = 0), Q & 6)) throw Error(N(331));
        var o = Q;
        for (Q |= 4, D = e.current; D !== null; ) {
          var l = D,
            i = l.child;
          if (D.flags & 16) {
            var s = l.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (D = u; D !== null; ) {
                  var d = D;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hr(8, d, l);
                  }
                  var m = d.child;
                  if (m !== null) (m.return = d), (D = m);
                  else
                    for (; D !== null; ) {
                      d = D;
                      var g = d.sibling,
                        v = d.return;
                      if ((nf(d), d === u)) {
                        D = null;
                        break;
                      }
                      if (g !== null) {
                        (g.return = v), (D = g);
                        break;
                      }
                      D = v;
                    }
                }
              }
              var w = l.alternate;
              if (w !== null) {
                var x = w.child;
                if (x !== null) {
                  w.child = null;
                  do {
                    var k = x.sibling;
                    (x.sibling = null), (x = k);
                  } while (x !== null);
                }
              }
              D = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) (i.return = l), (D = i);
          else
            e: for (; D !== null; ) {
              if (((l = D), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Hr(9, l, l.return);
                }
              var p = l.sibling;
              if (p !== null) {
                (p.return = l.return), (D = p);
                break e;
              }
              D = l.return;
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
                      Il(9, s);
                  }
                } catch (T) {
                  se(s, s.return, T);
                }
              if (s === i) {
                D = null;
                break e;
              }
              var S = s.sibling;
              if (S !== null) {
                (S.return = s.return), (D = S);
                break e;
              }
              D = s.return;
            }
        }
        if (
          ((Q = o), mn(), kt && typeof kt.onPostCommitFiberRoot == "function")
        )
          try {
            kt.onPostCommitFiberRoot(Ml, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (q = n), (et.transition = t);
    }
  }
  return !1;
}
function Bu(e, t, n) {
  (t = ur(n, t)),
    (t = Qd(e, t, 1)),
    (e = ln(e, t, 1)),
    (t = Le()),
    e !== null && (po(e, 1, t), Ie(e, t));
}
function se(e, t, n) {
  if (e.tag === 3) Bu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Bu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (sn === null || !sn.has(r)))
        ) {
          (e = ur(n, e)),
            (e = Vd(t, e, 1)),
            (t = ln(t, e, 1)),
            (e = Le()),
            t !== null && (po(t, 1, e), Ie(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Ch(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Le()),
    (e.pingedLanes |= e.suspendedLanes & n),
    he === e &&
      (xe & n) === n &&
      (fe === 4 || (fe === 3 && (xe & 130023424) === xe && 500 > ue() - wa)
        ? En(e, 0)
        : (va |= n)),
    Ie(e, t);
}
function pf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = To), (To <<= 1), !(To & 130023424) && (To = 4194304))
      : (t = 1));
  var n = Le();
  (e = zt(e, t)), e !== null && (po(e, t, n), Ie(e, n));
}
function Th(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), pf(e, n);
}
function Ph(e, t) {
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
  r !== null && r.delete(t), pf(e, n);
}
var mf;
mf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Fe.current) Re = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Re = !1), hh(e, t, n);
      Re = !!(e.flags & 131072);
    }
  else (Re = !1), ne && t.flags & 1048576 && yd(t, fl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Go(e, t), (e = t.pendingProps);
      var o = lr(t, Te.current);
      tr(t, n), (o = fa(null, t, r, e, o, n));
      var l = pa();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ze(r) ? ((l = !0), cl(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            sa(t),
            (o.updater = zl),
            (t.stateNode = o),
            (o._reactInternals = t),
            cs(t, r, e, n),
            (t = ps(null, t, r, !0, l, n)))
          : ((t.tag = 0), ne && l && ea(t), Me(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Go(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Oh(r)),
          (e = ut(r, e)),
          o)
        ) {
          case 0:
            t = fs(null, t, r, e, n);
            break e;
          case 1:
            t = Du(null, t, r, e, n);
            break e;
          case 11:
            t = Lu(null, t, r, e, n);
            break e;
          case 14:
            t = _u(null, t, r, ut(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ut(r, o)),
        fs(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ut(r, o)),
        Du(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Kd(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          bd(e, t),
          hl(t, r, null, n);
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
            (o = ur(Error(N(423)), t)), (t = $u(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = ur(Error(N(424)), t)), (t = $u(e, t, r, n, o));
            break e;
          } else
            for (
              We = on(t.stateNode.containerInfo.firstChild),
                Be = t,
                ne = !0,
                dt = null,
                n = Sd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ir(), r === o)) {
            t = It(e, t, n);
            break e;
          }
          Me(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ed(t),
        e === null && ss(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = o.children),
        ns(r, o) ? (i = null) : l !== null && ns(r, l) && (t.flags |= 32),
        Gd(e, t),
        Me(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && ss(t), null;
    case 13:
      return Xd(e, t, n);
    case 4:
      return (
        aa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = sr(t, null, r, n)) : Me(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ut(r, o)),
        Lu(e, t, r, o, n)
      );
    case 7:
      return Me(e, t, t.pendingProps, n), t.child;
    case 8:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (i = o.value),
          X(pl, r._currentValue),
          (r._currentValue = i),
          l !== null)
        )
          if (mt(l.value, i)) {
            if (l.children === o.children && !Fe.current) {
              t = It(e, t, n);
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
                      (a = Mt(-1, n & -n)), (a.tag = 2);
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
                      as(l.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((i = l.return), i === null)) throw Error(N(341));
                (i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  as(i, n, t),
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
        Me(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        tr(t, n),
        (o = tt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Me(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = ut(r, t.pendingProps)),
        (o = ut(r.type, o)),
        _u(e, t, r, o, n)
      );
    case 15:
      return Yd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ut(r, o)),
        Go(e, t),
        (t.tag = 1),
        ze(r) ? ((e = !0), cl(t)) : (e = !1),
        tr(t, n),
        Bd(t, r, o),
        cs(t, r, o, n),
        ps(null, t, r, !0, e, n)
      );
    case 19:
      return Jd(e, t, n);
    case 22:
      return qd(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function hf(e, t) {
  return Uc(e, t);
}
function jh(e, t, n, r) {
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
function Ze(e, t, n, r) {
  return new jh(e, t, n, r);
}
function ba(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Oh(e) {
  if (typeof e == "function") return ba(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Hs)) return 11;
    if (e === Ws) return 14;
  }
  return 2;
}
function un(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ze(e.tag, t, e.key, e.mode)),
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
function Jo(e, t, n, r, o, l) {
  var i = 2;
  if (((r = e), typeof e == "function")) ba(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case An:
        return Nn(n.children, o, l, t);
      case Us:
        (i = 8), (o |= 8);
        break;
      case Di:
        return (
          (e = Ze(12, n, t, o | 2)), (e.elementType = Di), (e.lanes = l), e
        );
      case $i:
        return (e = Ze(13, n, t, o)), (e.elementType = $i), (e.lanes = l), e;
      case Ri:
        return (e = Ze(19, n, t, o)), (e.elementType = Ri), (e.lanes = l), e;
      case Ec:
        return Ul(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case kc:
              i = 10;
              break e;
            case bc:
              i = 9;
              break e;
            case Hs:
              i = 11;
              break e;
            case Ws:
              i = 14;
              break e;
            case Yt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ze(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function Nn(e, t, n, r) {
  return (e = Ze(7, e, r, t)), (e.lanes = n), e;
}
function Ul(e, t, n, r) {
  return (
    (e = Ze(22, e, r, t)),
    (e.elementType = Ec),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function bi(e, t, n) {
  return (e = Ze(6, e, null, t)), (e.lanes = n), e;
}
function Ei(e, t, n) {
  return (
    (t = Ze(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Mh(e, t, n, r, o) {
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
    (this.eventTimes = oi(0)),
    (this.expirationTimes = oi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = oi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Ea(e, t, n, r, o, l, i, s, a) {
  return (
    (e = new Mh(e, t, n, s, a)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Ze(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    sa(l),
    e
  );
}
function Lh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: In,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function gf(e) {
  if (!e) return dn;
  e = e._reactInternals;
  e: {
    if (Dn(e) !== e || e.tag !== 1) throw Error(N(170));
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
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ze(n)) return hd(e, n, t);
  }
  return t;
}
function yf(e, t, n, r, o, l, i, s, a) {
  return (
    (e = Ea(n, r, !0, e, o, l, i, s, a)),
    (e.context = gf(null)),
    (n = e.current),
    (r = Le()),
    (o = an(n)),
    (l = Mt(r, o)),
    (l.callback = t ?? null),
    ln(n, l, o),
    (e.current.lanes = o),
    po(e, o, r),
    Ie(e, r),
    e
  );
}
function Hl(e, t, n, r) {
  var o = t.current,
    l = Le(),
    i = an(o);
  return (
    (n = gf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Mt(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ln(o, t, i)),
    e !== null && (pt(e, o, i, l), Vo(e, o, i)),
    i
  );
}
function bl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Qu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Na(e, t) {
  Qu(e, t), (e = e.alternate) && Qu(e, t);
}
function _h() {
  return null;
}
var vf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ca(e) {
  this._internalRoot = e;
}
Wl.prototype.render = Ca.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  Hl(e, t, null, null);
};
Wl.prototype.unmount = Ca.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Mn(function () {
      Hl(null, e, null, null);
    }),
      (t[Ft] = null);
  }
};
function Wl(e) {
  this._internalRoot = e;
}
Wl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = qc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Gt.length && t !== 0 && t < Gt[n].priority; n++);
    Gt.splice(n, 0, e), n === 0 && Kc(e);
  }
};
function Ta(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Bl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Vu() {}
function Dh(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var u = bl(i);
        l.call(u);
      };
    }
    var i = yf(t, r, e, 0, null, !1, !1, "", Vu);
    return (
      (e._reactRootContainer = i),
      (e[Ft] = i.current),
      to(e.nodeType === 8 ? e.parentNode : e),
      Mn(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = bl(a);
      s.call(u);
    };
  }
  var a = Ea(e, 0, !1, null, null, !1, !1, "", Vu);
  return (
    (e._reactRootContainer = a),
    (e[Ft] = a.current),
    to(e.nodeType === 8 ? e.parentNode : e),
    Mn(function () {
      Hl(t, a, n, r);
    }),
    a
  );
}
function Ql(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var a = bl(i);
        s.call(a);
      };
    }
    Hl(t, i, e, o);
  } else i = Dh(n, t, e, o, r);
  return bl(i);
}
Vc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = _r(t.pendingLanes);
        n !== 0 &&
          (Vs(t, n | 1), Ie(t, ue()), !(Q & 6) && ((cr = ue() + 500), mn()));
      }
      break;
    case 13:
      Mn(function () {
        var r = zt(e, 1);
        if (r !== null) {
          var o = Le();
          pt(r, e, 1, o);
        }
      }),
        Na(e, 1);
  }
};
Ys = function (e) {
  if (e.tag === 13) {
    var t = zt(e, 134217728);
    if (t !== null) {
      var n = Le();
      pt(t, e, 134217728, n);
    }
    Na(e, 134217728);
  }
};
Yc = function (e) {
  if (e.tag === 13) {
    var t = an(e),
      n = zt(e, t);
    if (n !== null) {
      var r = Le();
      pt(n, e, t, r);
    }
    Na(e, t);
  }
};
qc = function () {
  return q;
};
Gc = function (e, t) {
  var n = q;
  try {
    return (q = e), t();
  } finally {
    q = n;
  }
};
Vi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ii(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = $l(r);
            if (!o) throw Error(N(90));
            Cc(r), Ii(r, o);
          }
        }
      }
      break;
    case "textarea":
      Pc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Xn(e, !!n.multiple, t, !1);
  }
};
$c = xa;
Rc = Mn;
var $h = { usingClientEntryPoint: !1, Events: [ho, Bn, $l, _c, Dc, xa] },
  Er = {
    findFiberByHostInstance: wn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Rh = {
    bundleType: Er.bundleType,
    version: Er.version,
    rendererPackageName: Er.rendererPackageName,
    rendererConfig: Er.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: At.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ic(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Er.findFiberByHostInstance || _h,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var zo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zo.isDisabled && zo.supportsFiber)
    try {
      (Ml = zo.inject(Rh)), (kt = zo);
    } catch {}
}
Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $h;
Ve.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ta(t)) throw Error(N(200));
  return Lh(e, t, null, n);
};
Ve.createRoot = function (e, t) {
  if (!Ta(e)) throw Error(N(299));
  var n = !1,
    r = "",
    o = vf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Ea(e, 1, !1, null, null, n, !1, r, o)),
    (e[Ft] = t.current),
    to(e.nodeType === 8 ? e.parentNode : e),
    new Ca(t)
  );
};
Ve.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = Ic(t)), (e = e === null ? null : e.stateNode), e;
};
Ve.flushSync = function (e) {
  return Mn(e);
};
Ve.hydrate = function (e, t, n) {
  if (!Bl(t)) throw Error(N(200));
  return Ql(null, e, t, !0, n);
};
Ve.hydrateRoot = function (e, t, n) {
  if (!Ta(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    i = vf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = yf(t, null, e, 1, n ?? null, o, !1, l, i)),
    (e[Ft] = t.current),
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
  return new Wl(t);
};
Ve.render = function (e, t, n) {
  if (!Bl(t)) throw Error(N(200));
  return Ql(null, e, t, !1, n);
};
Ve.unmountComponentAtNode = function (e) {
  if (!Bl(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (Mn(function () {
        Ql(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ft] = null);
        });
      }),
      !0)
    : !1;
};
Ve.unstable_batchedUpdates = xa;
Ve.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Bl(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return Ql(e, t, n, !1, r);
};
Ve.version = "18.3.1-next-f1338f8080-20240426";
function wf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wf);
    } catch (e) {
      console.error(e);
    }
}
wf(), (vc.exports = Ve);
var xf = vc.exports,
  Sf,
  Yu = xf;
(Sf = Yu.createRoot), Yu.hydrateRoot;
function ht(e) {
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
function Ln(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const kf = 6048e5,
  Fh = 864e5;
let zh = {};
function Vl() {
  return zh;
}
function co(e, t) {
  var s, a, u, d;
  const n = Vl(),
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
    o = ht(e),
    l = o.getDay(),
    i = (l < r ? 7 : 0) + l - r;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function El(e) {
  return co(e, { weekStartsOn: 1 });
}
function bf(e) {
  const t = ht(e),
    n = t.getFullYear(),
    r = Ln(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = El(r),
    l = Ln(e, 0);
  l.setFullYear(n, 0, 4), l.setHours(0, 0, 0, 0);
  const i = El(l);
  return t.getTime() >= o.getTime()
    ? n + 1
    : t.getTime() >= i.getTime()
    ? n
    : n - 1;
}
function qu(e) {
  const t = ht(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Gu(e) {
  const t = ht(e),
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
function Ih(e, t) {
  const n = qu(e),
    r = qu(t),
    o = +n - Gu(n),
    l = +r - Gu(r);
  return Math.round((o - l) / Fh);
}
function Ah(e) {
  const t = bf(e),
    n = Ln(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), El(n);
}
function Uh(e) {
  return (
    e instanceof Date ||
    (typeof e == "object" &&
      Object.prototype.toString.call(e) === "[object Date]")
  );
}
function Hh(e) {
  if (!Uh(e) && typeof e != "number") return !1;
  const t = ht(e);
  return !isNaN(Number(t));
}
function Wh(e) {
  const t = ht(e),
    n = Ln(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const Bh = {
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
  Qh = (e, t, n) => {
    let r;
    const o = Bh[e];
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
function Ni(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Vh = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  Yh = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  qh = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  Gh = {
    date: Ni({ formats: Vh, defaultWidth: "full" }),
    time: Ni({ formats: Yh, defaultWidth: "full" }),
    dateTime: Ni({ formats: qh, defaultWidth: "full" }),
  },
  Kh = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  Xh = (e, t, n, r) => Kh[e];
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
const Jh = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  Zh = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  eg = {
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
  tg = {
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
  ng = {
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
  rg = {
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
  og = (e, t) => {
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
  lg = {
    ordinalNumber: og,
    era: Nr({ values: Jh, defaultWidth: "wide" }),
    quarter: Nr({
      values: Zh,
      defaultWidth: "wide",
      argumentCallback: (e) => e - 1,
    }),
    month: Nr({ values: eg, defaultWidth: "wide" }),
    day: Nr({ values: tg, defaultWidth: "wide" }),
    dayPeriod: Nr({
      values: ng,
      defaultWidth: "wide",
      formattingValues: rg,
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
      a = Array.isArray(s) ? sg(s, (m) => m.test(i)) : ig(s, (m) => m.test(i));
    let u;
    (u = e.valueCallback ? e.valueCallback(a) : a),
      (u = n.valueCallback ? n.valueCallback(u) : u);
    const d = t.slice(i.length);
    return { value: u, rest: d };
  };
}
function ig(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function sg(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function ag(e) {
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
const ug = /^(\d+)(th|st|nd|rd)?/i,
  cg = /\d+/i,
  dg = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  fg = { any: [/^b/i, /^(a|c)/i] },
  pg = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  mg = { any: [/1/i, /2/i, /3/i, /4/i] },
  hg = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  gg = {
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
  yg = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  vg = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  wg = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  xg = {
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
  Sg = {
    ordinalNumber: ag({
      matchPattern: ug,
      parsePattern: cg,
      valueCallback: (e) => parseInt(e, 10),
    }),
    era: Cr({
      matchPatterns: dg,
      defaultMatchWidth: "wide",
      parsePatterns: fg,
      defaultParseWidth: "any",
    }),
    quarter: Cr({
      matchPatterns: pg,
      defaultMatchWidth: "wide",
      parsePatterns: mg,
      defaultParseWidth: "any",
      valueCallback: (e) => e + 1,
    }),
    month: Cr({
      matchPatterns: hg,
      defaultMatchWidth: "wide",
      parsePatterns: gg,
      defaultParseWidth: "any",
    }),
    day: Cr({
      matchPatterns: yg,
      defaultMatchWidth: "wide",
      parsePatterns: vg,
      defaultParseWidth: "any",
    }),
    dayPeriod: Cr({
      matchPatterns: wg,
      defaultMatchWidth: "any",
      parsePatterns: xg,
      defaultParseWidth: "any",
    }),
  },
  kg = {
    code: "en-US",
    formatDistance: Qh,
    formatLong: Gh,
    formatRelative: Xh,
    localize: lg,
    match: Sg,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function bg(e) {
  const t = ht(e);
  return Ih(t, Wh(t)) + 1;
}
function Eg(e) {
  const t = ht(e),
    n = +El(t) - +Ah(t);
  return Math.round(n / kf) + 1;
}
function Ef(e, t) {
  var d, m, g, v;
  const n = ht(e),
    r = n.getFullYear(),
    o = Vl(),
    l =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((m = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) ==
      null
        ? void 0
        : m.firstWeekContainsDate) ??
      o.firstWeekContainsDate ??
      ((v = (g = o.locale) == null ? void 0 : g.options) == null
        ? void 0
        : v.firstWeekContainsDate) ??
      1,
    i = Ln(e, 0);
  i.setFullYear(r + 1, 0, l), i.setHours(0, 0, 0, 0);
  const s = co(i, t),
    a = Ln(e, 0);
  a.setFullYear(r, 0, l), a.setHours(0, 0, 0, 0);
  const u = co(a, t);
  return n.getTime() >= s.getTime()
    ? r + 1
    : n.getTime() >= u.getTime()
    ? r
    : r - 1;
}
function Ng(e, t) {
  var s, a, u, d;
  const n = Vl(),
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
    o = Ef(e, t),
    l = Ln(e, 0);
  return l.setFullYear(o, 0, r), l.setHours(0, 0, 0, 0), co(l, t);
}
function Cg(e, t) {
  const n = ht(e),
    r = +co(n, t) - +Ng(n, t);
  return Math.round(r / kf) + 1;
}
function Y(e, t) {
  const n = e < 0 ? "-" : "",
    r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Wt = {
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
  zn = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  Ku = {
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
      return Wt.y(e, t);
    },
    Y: function (e, t, n, r) {
      const o = Ef(e, r),
        l = o > 0 ? o : 1 - o;
      if (t === "YY") {
        const i = l % 100;
        return Y(i, 2);
      }
      return t === "Yo" ? n.ordinalNumber(l, { unit: "year" }) : Y(l, t.length);
    },
    R: function (e, t) {
      const n = bf(e);
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
          return Wt.M(e, t);
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
      const o = Cg(e, r);
      return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : Y(o, t.length);
    },
    I: function (e, t, n) {
      const r = Eg(e);
      return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Y(r, t.length);
    },
    d: function (e, t, n) {
      return t === "do"
        ? n.ordinalNumber(e.getDate(), { unit: "date" })
        : Wt.d(e, t);
    },
    D: function (e, t, n) {
      const r = bg(e);
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
          ? (o = zn.noon)
          : r === 0
          ? (o = zn.midnight)
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
          ? (o = zn.evening)
          : r >= 12
          ? (o = zn.afternoon)
          : r >= 4
          ? (o = zn.morning)
          : (o = zn.night),
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
      return Wt.h(e, t);
    },
    H: function (e, t, n) {
      return t === "Ho"
        ? n.ordinalNumber(e.getHours(), { unit: "hour" })
        : Wt.H(e, t);
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
        : Wt.m(e, t);
    },
    s: function (e, t, n) {
      return t === "so"
        ? n.ordinalNumber(e.getSeconds(), { unit: "second" })
        : Wt.s(e, t);
    },
    S: function (e, t) {
      return Wt.S(e, t);
    },
    X: function (e, t, n) {
      const r = e.getTimezoneOffset();
      if (r === 0) return "Z";
      switch (t) {
        case "X":
          return Ju(r);
        case "XXXX":
        case "XX":
          return yn(r);
        case "XXXXX":
        case "XXX":
        default:
          return yn(r, ":");
      }
    },
    x: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "x":
          return Ju(r);
        case "xxxx":
        case "xx":
          return yn(r);
        case "xxxxx":
        case "xxx":
        default:
          return yn(r, ":");
      }
    },
    O: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + Xu(r, ":");
        case "OOOO":
        default:
          return "GMT" + yn(r, ":");
      }
    },
    z: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + Xu(r, ":");
        case "zzzz":
        default:
          return "GMT" + yn(r, ":");
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
function Xu(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    o = Math.trunc(r / 60),
    l = r % 60;
  return l === 0 ? n + String(o) : n + String(o) + t + Y(l, 2);
}
function Ju(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Y(Math.abs(e) / 60, 2) : yn(e, t);
}
function yn(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    o = Y(Math.trunc(r / 60), 2),
    l = Y(r % 60, 2);
  return n + o + t + l;
}
const Zu = (e, t) => {
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
  Nf = (e, t) => {
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
  Tg = (e, t) => {
    const n = e.match(/(P+)(p+)?/) || [],
      r = n[1],
      o = n[2];
    if (!o) return Zu(e, t);
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
    return l.replace("{{date}}", Zu(r, t)).replace("{{time}}", Nf(o, t));
  },
  Pg = { p: Nf, P: Tg },
  jg = /^D+$/,
  Og = /^Y+$/,
  Mg = ["D", "DD", "YY", "YYYY"];
function Lg(e) {
  return jg.test(e);
}
function _g(e) {
  return Og.test(e);
}
function Dg(e, t, n) {
  const r = $g(e, t, n);
  if ((console.warn(r), Mg.includes(e))) throw new RangeError(r);
}
function $g(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Rg = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  Fg = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  zg = /^'([^]*?)'?$/,
  Ig = /''/g,
  Ag = /[a-zA-Z]/;
function G(e, t, n) {
  var d, m, g, v;
  const r = Vl(),
    o = r.locale ?? kg,
    l =
      r.firstWeekContainsDate ??
      ((m = (d = r.locale) == null ? void 0 : d.options) == null
        ? void 0
        : m.firstWeekContainsDate) ??
      1,
    i =
      r.weekStartsOn ??
      ((v = (g = r.locale) == null ? void 0 : g.options) == null
        ? void 0
        : v.weekStartsOn) ??
      0,
    s = ht(e);
  if (!Hh(s)) throw new RangeError("Invalid time value");
  let a = t
    .match(Fg)
    .map((w) => {
      const x = w[0];
      if (x === "p" || x === "P") {
        const k = Pg[x];
        return k(w, o.formatLong);
      }
      return w;
    })
    .join("")
    .match(Rg)
    .map((w) => {
      if (w === "''") return { isToken: !1, value: "'" };
      const x = w[0];
      if (x === "'") return { isToken: !1, value: Ug(w) };
      if (Ku[x]) return { isToken: !0, value: w };
      if (x.match(Ag))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            x +
            "`"
        );
      return { isToken: !1, value: w };
    });
  o.localize.preprocessor && (a = o.localize.preprocessor(s, a));
  const u = { firstWeekContainsDate: l, weekStartsOn: i, locale: o };
  return a
    .map((w) => {
      if (!w.isToken) return w.value;
      const x = w.value;
      (_g(x) || Lg(x)) && Dg(x, t, String(e));
      const k = Ku[x[0]];
      return k(s, x, o.localize, u);
    })
    .join("");
}
function Ug(e) {
  const t = e.match(zg);
  return t ? t[1].replace(Ig, "'") : e;
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Hg = {
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
 */ const Wg = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  gt = (e, t) => {
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
            ...Hg,
            width: o,
            height: o,
            stroke: r,
            strokeWidth: i ? (Number(l) * 24) / Number(o) : l,
            className: ["lucide", `lucide-${Wg(e)}`, s].join(" "),
            ...u,
          },
          [
            ...t.map(([m, g]) => y.createElement(m, g)),
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
 */ const Pa = gt("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bg = gt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qg = gt("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vg = gt("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yg = gt("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qg = gt("Globe", [
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
 */ const Gg = gt("Layers", [
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
 */ const Kg = gt("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xg = gt("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jg = gt("Settings", [
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
 */ const Zg = gt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
let kn = null;
const e0 = async () => {
    if (kn) return kn;
    try {
      const e = await fetch("../config.txt");
      if (!e.ok) throw new Error("Failed to load configuration");
      return (kn = await e.json()), kn;
    } catch (e) {
      throw (console.error("Error loading config:", e), e);
    }
  },
  Cf = (e) => {
    if (!kn) throw new Error("Configuration not loaded");
    return `${kn.domain}${e}`;
  },
  t0 = () => kn,
  xt = async (e, t = {}) => {
    const n = Cf(e),
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
  n0 = {
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
      "filter.type": "藥品類別",
      "filter.type.all": "全部",
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
      "table.storage": "庫存",
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
      "filter.type": "Drug Type",
      "filter.type.all": "All Types",
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
      "table.storage": "storage",
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
  Tf = y.createContext(void 0),
  r0 = ({ children: e }) => {
    const [t, n] = y.useState("zh"),
      r = () => {
        n((l) => (l === "zh" ? "en" : "zh"));
      },
      o = (l) => n0[t][l] || l;
    return c.jsx(Tf.Provider, {
      value: { language: t, toggleLanguage: r, t: o },
      children: e,
    });
  },
  qe = () => {
    const e = y.useContext(Tf);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  },
  o0 = ({ startDate: e, endDate: t, onDateChange: n }) => {
    const { t: r } = qe(),
      [o, l] = y.useState(!1),
      i = (a, u, d, m) => {
        const g = new Date(`${a}T${u}`),
          v = new Date(`${d}T${m}`);
        n(g, v);
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
                c.jsx(Vg, { size: 20, className: "text-gray-600" }),
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
                  ? c.jsx(Qg, { size: 20, className: "text-gray-600" })
                  : c.jsx(Bg, { size: 20, className: "text-gray-600" }),
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
  l0 = ({ value: e, onChange: t }) => {
    const { t: n } = qe();
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
  i0 = ({ value: e, onChange: t, availableTypes: n }) => {
    const { t: r } = qe();
    return c.jsxs("div", {
      className: "space-y-2",
      children: [
        c.jsx("label", {
          className: "block text-base font-medium text-gray-700",
          children: r("filter.type"),
        }),
        c.jsxs("select", {
          value: e,
          onChange: (o) => t(o.target.value),
          className:
            "w-48 sm:w-32 px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base",
          children: [
            c.jsx("option", { value: "", children: r("filter.type.all") }),
            n.map((o) => c.jsx("option", { value: o, children: o }, o)),
          ],
        }),
      ],
    });
  },
  ja = "user_session",
  Pf = (e) => {
    const t = e.find((n) => n.name === "撥補核撥");
    return (t == null ? void 0 : t.state) === !0;
  },
  s0 = (e) =>
    Pf(e.Permissions)
      ? (sessionStorage.setItem(ja, JSON.stringify(e)), !0)
      : !1,
  Qr = () => {
    const e = sessionStorage.getItem(ja);
    if (!e) return null;
    try {
      const t = JSON.parse(e);
      return !t.GUID || !t.ID || !t.Name || !Pf(t.Permissions)
        ? (Nl(), null)
        : t;
    } catch {
      return Nl(), null;
    }
  },
  Nl = () => {
    sessionStorage.removeItem(ja);
  },
  a0 = () => {
    const e = Qr();
    if (!e) return !1;
    const t = new Date(e.loginTime).getTime();
    return (new Date().getTime() - t) / (1e3 * 60 * 60) > 24 ? (Nl(), !1) : !0;
  },
  u0 = ({ size: e = "medium", className: t = "" }) => {
    const n = { small: "h-4 w-4", medium: "h-6 w-6", large: "h-8 w-8" };
    return c.jsx("div", {
      className: `animate-spin rounded-full border-2 border-white border-t-transparent ${n[e]} ${t}`,
    });
  },
  c0 = ({
    onClick: e,
    isLoading: t = !1,
    disabled: n = !1,
    className: r = "",
  }) => {
    const { t: o } = qe();
    return c.jsxs("button", {
      onClick: e,
      disabled: t || n,
      className: `px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50 transition-colors flex items-center justify-center ${r}`,
      children: [
        t
          ? c.jsx(u0, { size: "small\\", className: "mr-2" })
          : c.jsx(Yg, { size: 18, className: "mr-2" }),
        o("button.export"),
      ],
    });
  };
var d0 = Object.defineProperty,
  f0 = (e, t, n) =>
    t in e
      ? d0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Ci = (e, t, n) => (f0(e, typeof t != "symbol" ? t + "" : t, n), n);
let p0 = class {
    constructor() {
      Ci(this, "current", this.detect()),
        Ci(this, "handoffState", "pending"),
        Ci(this, "currentId", 0);
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
  Lt = new p0(),
  rt = (e, t) => {
    Lt.isServer ? y.useEffect(e, t) : y.useLayoutEffect(e, t);
  };
function _t(e) {
  let t = y.useRef(e);
  return (
    rt(() => {
      t.current = e;
    }, [e]),
    t
  );
}
let re = function (e) {
  let t = _t(e);
  return U.useCallback((...n) => t.current(...n), [t]);
};
function Yl(e) {
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
function $n() {
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
          Yl(() => {
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
        let r = $n();
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
function Oa() {
  let [e] = y.useState($n);
  return y.useEffect(() => () => e.dispose(), [e]), e;
}
function m0() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in Vr
    ? ((t) => t.useSyncExternalStore)(Vr)(
        () => () => {},
        () => !1,
        () => !e
      )
    : !1;
}
function mr() {
  let e = m0(),
    [t, n] = y.useState(Lt.isHandoffComplete);
  return (
    t && Lt.isHandoffComplete === !1 && n(!1),
    y.useEffect(() => {
      t !== !0 && n(!0);
    }, [t]),
    y.useEffect(() => Lt.handoff(), []),
    e ? !1 : t
  );
}
var ec;
let hr =
  (ec = U.useId) != null
    ? ec
    : function () {
        let e = mr(),
          [t, n] = U.useState(e ? () => Lt.nextId() : null);
        return (
          rt(() => {
            t === null && n(Lt.nextId());
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
  return Lt.isServer
    ? null
    : e instanceof Node
    ? e.ownerDocument
    : e != null && e.hasOwnProperty("current") && e.current instanceof Node
    ? e.current.ownerDocument
    : document;
}
let Ns = [
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
var vn = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(vn || {}),
  Of = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(Of || {}),
  h0 = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(h0 || {});
function g0(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(Ns)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER)
        )
      );
}
var Mf = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(Mf || {});
function y0(e, t = 0) {
  var n;
  return e === ((n = jf(e)) == null ? void 0 : n.body)
    ? !1
    : Ce(t, {
        0() {
          return e.matches(Ns);
        },
        1() {
          let r = e;
          for (; r !== null; ) {
            if (r.matches(Ns)) return !0;
            r = r.parentElement;
          }
          return !1;
        },
      });
}
var v0 = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(v0 || {});
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
function Cn(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let w0 = ["textarea", "input"].join(",");
function x0(e) {
  var t, n;
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, w0)) !=
    null
    ? n
    : !1;
}
function S0(e, t = (n) => n) {
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
function Zo(
  e,
  t,
  { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}
) {
  let l = Array.isArray(e)
      ? e.length > 0
        ? e[0].ownerDocument
        : document
      : e.ownerDocument,
    i = Array.isArray(e) ? (n ? S0(e) : e) : g0(e);
  o.length > 0 && i.length > 1 && (i = i.filter((v) => !o.includes(v))),
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
    m = i.length,
    g;
  do {
    if (d >= m || d + m <= 0) return 0;
    let v = a + d;
    if (t & 16) v = (v + m) % m;
    else {
      if (v < 0) return 3;
      if (v >= m) return 1;
    }
    (g = i[v]), g == null || g.focus(u), (d += s);
  } while (g !== l.activeElement);
  return t & 6 && x0(g) && g.select(), 2;
}
function Lf() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  );
}
function k0() {
  return /Android/gi.test(window.navigator.userAgent);
}
function b0() {
  return Lf() || k0();
}
function Io(e, t, n) {
  let r = _t(t);
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
function _f(e, t, n) {
  let r = _t(t);
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
function E0(e, t, n = !0) {
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
    let u = (function d(m) {
      return typeof m == "function"
        ? d(m())
        : Array.isArray(m) || m instanceof Set
        ? m
        : [m];
    })(e);
    for (let d of u) {
      if (d === null) continue;
      let m = d instanceof HTMLElement ? d : d.current;
      if (
        (m != null && m.contains(a)) ||
        (i.composed && i.composedPath().includes(m))
      )
        return;
    }
    return !y0(a, Mf.Loose) && a.tabIndex !== -1 && i.preventDefault(), t(i, a);
  }
  let l = y.useRef(null);
  Io(
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
    Io(
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
    Io(
      "click",
      (i) => {
        b0() || (l.current && (o(i, () => l.current), (l.current = null)));
      },
      !0
    ),
    Io(
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
  return y.useMemo(() => jf(...e), [...e]);
}
let Df = Symbol();
function N0(e, t = !0) {
  return Object.assign(e, { [Df]: t });
}
function yt(...e) {
  let t = y.useRef(e);
  y.useEffect(() => {
    t.current = e;
  }, [e]);
  let n = re((r) => {
    for (let o of t.current)
      o != null && (typeof o == "function" ? o(r) : (o.current = r));
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[Df])) ? void 0 : n;
}
function Ma(e, t) {
  let n = y.useRef([]),
    r = re(e);
  y.useEffect(() => {
    let o = [...n.current];
    for (let [l, i] of t.entries())
      if (n.current[l] !== i) {
        let s = r(t, o);
        return (n.current = t), s;
      }
  }, [r, ...t]);
}
function Cl(...e) {
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
  en = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(en || {});
function ot({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: o,
  visible: l = !0,
  name: i,
  mergeRefs: s,
}) {
  s = s ?? C0;
  let a = $f(t, e);
  if (l) return Ao(a, n, r, i, s);
  let u = o ?? 0;
  if (u & 2) {
    let { static: d = !1, ...m } = a;
    if (d) return Ao(m, n, r, i, s);
  }
  if (u & 1) {
    let { unmount: d = !0, ...m } = a;
    return Ce(d ? 0 : 1, {
      0() {
        return null;
      },
      1() {
        return Ao({ ...m, hidden: !0, style: { display: "none" } }, n, r, i, s);
      },
    });
  }
  return Ao(a, n, r, i, s);
}
function Ao(e, t = {}, n, r, o) {
  let {
      as: l = n,
      children: i,
      refName: s = "ref",
      ...a
    } = Ti(e, ["unmount", "static"]),
    u = e.ref !== void 0 ? { [s]: e.ref } : {},
    d = typeof i == "function" ? i(t) : i;
  "className" in a &&
    a.className &&
    typeof a.className == "function" &&
    (a.className = a.className(t));
  let m = {};
  if (t) {
    let g = !1,
      v = [];
    for (let [w, x] of Object.entries(t))
      typeof x == "boolean" && (g = !0), x === !0 && v.push(w);
    g && (m["data-headlessui-state"] = v.join(" "));
  }
  if (l === y.Fragment && Object.keys(tc(a)).length > 0) {
    if (!y.isValidElement(d) || (Array.isArray(d) && d.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          "",
          `The current component <${r} /> is rendering a "Fragment".`,
          "However we need to passthrough the following props:",
          Object.keys(a).map((x) => `  - ${x}`).join(`
`),
          "",
          "You can apply a few solutions:",
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            "Render a single element as the child so that we can forward the props onto that element.",
          ].map((x) => `  - ${x}`).join(`
`),
        ].join(`
`)
      );
    let g = d.props,
      v =
        typeof (g == null ? void 0 : g.className) == "function"
          ? (...x) => Cl(g == null ? void 0 : g.className(...x), a.className)
          : Cl(g == null ? void 0 : g.className, a.className),
      w = v ? { className: v } : {};
    return y.cloneElement(
      d,
      Object.assign(
        {},
        $f(d.props, tc(Ti(a, ["ref"]))),
        m,
        u,
        { ref: o(d.ref, u.ref) },
        w
      )
    );
  }
  return y.createElement(
    l,
    Object.assign(
      {},
      Ti(a, ["ref"]),
      l !== y.Fragment && u,
      l !== y.Fragment && m
    ),
    d
  );
}
function C0(...e) {
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
  return Object.assign(y.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name,
  });
}
function tc(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function Ti(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
let T0 = "div";
var Pl = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(Pl || {});
function P0(e, t) {
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
  return ot({
    ourProps: l,
    theirProps: o,
    slot: {},
    defaultTag: T0,
    name: "Hidden",
  });
}
let Cs = Ge(P0),
  La = y.createContext(null);
La.displayName = "OpenClosedContext";
var He = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(He || {});
function _a() {
  return y.useContext(La);
}
function j0({ value: e, children: t }) {
  return U.createElement(La.Provider, { value: e }, t);
}
function O0(e) {
  function t() {
    document.readyState !== "loading" &&
      (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" &&
    typeof document < "u" &&
    (document.addEventListener("DOMContentLoaded", t), t());
}
let Xt = [];
O0(() => {
  function e(t) {
    t.target instanceof HTMLElement &&
      t.target !== document.body &&
      Xt[0] !== t.target &&
      (Xt.unshift(t.target),
      (Xt = Xt.filter((n) => n != null && n.isConnected)),
      Xt.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }),
    window.addEventListener("mousedown", e, { capture: !0 }),
    window.addEventListener("focus", e, { capture: !0 }),
    document.body.addEventListener("click", e, { capture: !0 }),
    document.body.addEventListener("mousedown", e, { capture: !0 }),
    document.body.addEventListener("focus", e, { capture: !0 });
});
function M0(e) {
  let t = e.parentElement,
    n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && L0(n) ? !1 : r;
}
function L0(e) {
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
  let o = _t(n);
  y.useEffect(() => {
    e = e ?? window;
    function l(i) {
      o.current(i);
    }
    return e.addEventListener(t, l, r), () => e.removeEventListener(t, l, r);
  }, [e, t, r]);
}
function vo() {
  let e = y.useRef(!1);
  return (
    rt(
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
  let t = re(e),
    n = y.useRef(!1);
  y.useEffect(
    () => (
      (n.current = !1),
      () => {
        (n.current = !0),
          Yl(() => {
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
function _0() {
  let e = y.useRef(0);
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
let D0 = "div";
var Af = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.InitialFocus = 2)] = "InitialFocus"),
  (e[(e.TabLock = 4)] = "TabLock"),
  (e[(e.FocusLock = 8)] = "FocusLock"),
  (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
  (e[(e.All = 30)] = "All"),
  e
))(Af || {});
function $0(e, t) {
  let n = y.useRef(null),
    r = yt(n, t),
    { initialFocus: o, containers: l, features: i = 30, ...s } = e;
  mr() || (i = 1);
  let a = yo(n);
  z0({ ownerDocument: a }, !!(i & 16));
  let u = I0({ ownerDocument: a, container: n, initialFocus: o }, !!(i & 2));
  A0(
    { ownerDocument: a, container: n, containers: l, previousActiveElement: u },
    !!(i & 8)
  );
  let d = _0(),
    m = re((x) => {
      let k = n.current;
      k &&
        ((p) => p())(() => {
          Ce(d.current, {
            [$r.Forwards]: () => {
              Zo(k, vn.First, { skipElements: [x.relatedTarget] });
            },
            [$r.Backwards]: () => {
              Zo(k, vn.Last, { skipElements: [x.relatedTarget] });
            },
          });
        });
    }),
    g = Oa(),
    v = y.useRef(!1),
    w = {
      ref: r,
      onKeyDown(x) {
        x.key == "Tab" &&
          ((v.current = !0),
          g.requestAnimationFrame(() => {
            v.current = !1;
          }));
      },
      onBlur(x) {
        let k = If(l);
        n.current instanceof HTMLElement && k.add(n.current);
        let p = x.relatedTarget;
        p instanceof HTMLElement &&
          p.dataset.headlessuiFocusGuard !== "true" &&
          (Uf(k, p) ||
            (v.current
              ? Zo(
                  n.current,
                  Ce(d.current, {
                    [$r.Forwards]: () => vn.Next,
                    [$r.Backwards]: () => vn.Previous,
                  }) | vn.WrapAround,
                  { relativeTo: x.target }
                )
              : x.target instanceof HTMLElement && Cn(x.target)));
      },
    };
  return U.createElement(
    U.Fragment,
    null,
    !!(i & 4) &&
      U.createElement(Cs, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: m,
        features: Pl.Focusable,
      }),
    ot({ ourProps: w, theirProps: s, defaultTag: D0, name: "FocusTrap" }),
    !!(i & 4) &&
      U.createElement(Cs, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: m,
        features: Pl.Focusable,
      })
  );
}
let R0 = Ge($0),
  Tr = Object.assign(R0, { features: Af });
function F0(e = !0) {
  let t = y.useRef(Xt.slice());
  return (
    Ma(
      ([n], [r]) => {
        r === !0 &&
          n === !1 &&
          Yl(() => {
            t.current.splice(0);
          }),
          r === !1 && n === !0 && (t.current = Xt.slice());
      },
      [e, Xt, t]
    ),
    re(() => {
      var n;
      return (n = t.current.find((r) => r != null && r.isConnected)) != null
        ? n
        : null;
    })
  );
}
function z0({ ownerDocument: e }, t) {
  let n = F0(t);
  Ma(() => {
    t ||
      ((e == null ? void 0 : e.activeElement) ===
        (e == null ? void 0 : e.body) &&
        Cn(n()));
  }, [t]),
    zf(() => {
      t && Cn(n());
    });
}
function I0({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let o = y.useRef(null),
    l = vo();
  return (
    Ma(() => {
      if (!r) return;
      let i = t.current;
      i &&
        Yl(() => {
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
            ? Cn(n.current)
            : Zo(i, vn.First) === Of.Error &&
              console.warn(
                "There are no focusable elements inside the <FocusTrap />"
              ),
            (o.current = e == null ? void 0 : e.activeElement);
        });
    }, [r]),
    o
  );
}
function A0(
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
          ? ((r.current = u), Cn(u))
          : (i.preventDefault(), i.stopPropagation(), Cn(a))
        : Cn(r.current);
    },
    !0
  );
}
function Uf(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
let Hf = y.createContext(!1);
function U0() {
  return y.useContext(Hf);
}
function Ts(e) {
  return U.createElement(Hf.Provider, { value: e.force }, e.children);
}
function H0(e) {
  let t = U0(),
    n = y.useContext(Wf),
    r = yo(e),
    [o, l] = y.useState(() => {
      if ((!t && n !== null) || Lt.isServer) return null;
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
let W0 = y.Fragment;
function B0(e, t) {
  let n = e,
    r = y.useRef(null),
    o = yt(
      N0((d) => {
        r.current = d;
      }),
      t
    ),
    l = yo(r),
    i = H0(r),
    [s] = y.useState(() => {
      var d;
      return Lt.isServer
        ? null
        : (d = l == null ? void 0 : l.createElement("div")) != null
        ? d
        : null;
    }),
    a = y.useContext(Ps),
    u = mr();
  return (
    rt(() => {
      !i ||
        !s ||
        i.contains(s) ||
        (s.setAttribute("data-headlessui-portal", ""), i.appendChild(s));
    }, [i, s]),
    rt(() => {
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
        : xf.createPortal(
            ot({
              ourProps: { ref: o },
              theirProps: n,
              defaultTag: W0,
              name: "Portal",
            }),
            s
          )
      : null
  );
}
let Q0 = y.Fragment,
  Wf = y.createContext(null);
function V0(e, t) {
  let { target: n, ...r } = e,
    o = { ref: yt(t) };
  return U.createElement(
    Wf.Provider,
    { value: n },
    ot({ ourProps: o, theirProps: r, defaultTag: Q0, name: "Popover.Group" })
  );
}
let Ps = y.createContext(null);
function Y0() {
  let e = y.useContext(Ps),
    t = y.useRef([]),
    n = re((l) => (t.current.push(l), e && e.register(l), () => r(l))),
    r = re((l) => {
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
          return U.createElement(Ps.Provider, { value: o }, l);
        },
      [o]
    ),
  ];
}
let q0 = Ge(B0),
  G0 = Ge(V0),
  js = Object.assign(q0, { Group: G0 });
function K0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const X0 = typeof Object.is == "function" ? Object.is : K0,
  { useState: J0, useEffect: Z0, useLayoutEffect: ey, useDebugValue: ty } = Vr;
function ny(e, t, n) {
  const r = t(),
    [{ inst: o }, l] = J0({ inst: { value: r, getSnapshot: t } });
  return (
    ey(() => {
      (o.value = r), (o.getSnapshot = t), Pi(o) && l({ inst: o });
    }, [e, r, t]),
    Z0(
      () => (
        Pi(o) && l({ inst: o }),
        e(() => {
          Pi(o) && l({ inst: o });
        })
      ),
      [e]
    ),
    ty(r),
    r
  );
}
function Pi(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !X0(n, r);
  } catch {
    return !0;
  }
}
function ry(e, t, n) {
  return t();
}
const oy =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  ly = !oy,
  iy = ly ? ry : ny,
  sy = "useSyncExternalStore" in Vr ? ((e) => e.useSyncExternalStore)(Vr) : iy;
function ay(e) {
  return sy(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function uy(e, t) {
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
function cy() {
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
function dy() {
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
              let s = $n();
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
function fy() {
  return {
    before({ doc: e, d: t }) {
      t.style(e.documentElement, "overflow", "hidden");
    },
  };
}
function py(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let bn = uy(() => new Map(), {
  PUSH(e, t) {
    var n;
    let r =
      (n = this.get(e)) != null
        ? n
        : { doc: e, count: 0, d: $n(), meta: new Set() };
    return r.count++, r.meta.add(t), this.set(e, r), this;
  },
  POP(e, t) {
    let n = this.get(e);
    return n && (n.count--, n.meta.delete(t)), this;
  },
  SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
    let r = { doc: e, d: t, meta: py(n) },
      o = [dy(), cy(), fy()];
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
bn.subscribe(() => {
  let e = bn.getSnapshot(),
    t = new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden",
      o = n.count !== 0;
    ((o && !r) || (!o && r)) &&
      bn.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
      n.count === 0 && bn.dispatch("TEARDOWN", n);
  }
});
function my(e, t, n) {
  let r = ay(bn),
    o = e ? r.get(e) : void 0,
    l = o ? o.count > 0 : !1;
  return (
    rt(() => {
      if (!(!e || !t))
        return bn.dispatch("PUSH", e, n), () => bn.dispatch("POP", e, n);
    }, [t, e]),
    l
  );
}
let ji = new Map(),
  Pr = new Map();
function nc(e, t = !0) {
  rt(() => {
    var n;
    if (!t) return;
    let r = typeof e == "function" ? e() : e.current;
    if (!r) return;
    function o() {
      var i;
      if (!r) return;
      let s = (i = Pr.get(r)) != null ? i : 1;
      if ((s === 1 ? Pr.delete(r) : Pr.set(r, s - 1), s !== 1)) return;
      let a = ji.get(r);
      a &&
        (a["aria-hidden"] === null
          ? r.removeAttribute("aria-hidden")
          : r.setAttribute("aria-hidden", a["aria-hidden"]),
        (r.inert = a.inert),
        ji.delete(r));
    }
    let l = (n = Pr.get(r)) != null ? n : 0;
    return (
      Pr.set(r, l + 1),
      l !== 0 ||
        (ji.set(r, {
          "aria-hidden": r.getAttribute("aria-hidden"),
          inert: r.inert,
        }),
        r.setAttribute("aria-hidden", "true"),
        (r.inert = !0)),
      o
    );
  }, [e, t]);
}
function hy({
  defaultContainers: e = [],
  portals: t,
  mainTreeNodeRef: n,
} = {}) {
  var r;
  let o = y.useRef((r = n == null ? void 0 : n.current) != null ? r : null),
    l = yo(o),
    i = re(() => {
      var s, a, u;
      let d = [];
      for (let m of e)
        m !== null &&
          (m instanceof HTMLElement
            ? d.push(m)
            : "current" in m &&
              m.current instanceof HTMLElement &&
              d.push(m.current));
      if (t != null && t.current) for (let m of t.current) d.push(m);
      for (let m of (s =
        l == null ? void 0 : l.querySelectorAll("html > *, body > *")) != null
        ? s
        : [])
        m !== document.body &&
          m !== document.head &&
          m instanceof HTMLElement &&
          m.id !== "headlessui-portal-root" &&
          (m.contains(o.current) ||
            m.contains(
              (u = (a = o.current) == null ? void 0 : a.getRootNode()) == null
                ? void 0
                : u.host
            ) ||
            d.some((g) => m.contains(g)) ||
            d.push(m));
      return d;
    });
  return {
    resolveContainers: i,
    contains: re((s) => i().some((a) => a.contains(s))),
    mainTreeNodeRef: o,
    MainTreeNode: y.useMemo(
      () =>
        function () {
          return n != null
            ? null
            : U.createElement(Cs, { features: Pl.Hidden, ref: o });
        },
      [o, n]
    ),
  };
}
let Da = y.createContext(() => {});
Da.displayName = "StackContext";
var Os = ((e) => ((e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e))(
  Os || {}
);
function gy() {
  return y.useContext(Da);
}
function yy({ children: e, onUpdate: t, type: n, element: r, enabled: o }) {
  let l = gy(),
    i = re((...s) => {
      t == null || t(...s), l(...s);
    });
  return (
    rt(() => {
      let s = o === void 0 || o === !0;
      return (
        s && i(0, n, r),
        () => {
          s && i(1, n, r);
        }
      );
    }, [i, n, r, o]),
    U.createElement(Da.Provider, { value: i }, e)
  );
}
let Bf = y.createContext(null);
function Qf() {
  let e = y.useContext(Bf);
  if (e === null) {
    let t = new Error(
      "You used a <Description /> component, but it is not inside a relevant parent."
    );
    throw (Error.captureStackTrace && Error.captureStackTrace(t, Qf), t);
  }
  return e;
}
function vy() {
  let [e, t] = y.useState([]);
  return [
    e.length > 0 ? e.join(" ") : void 0,
    y.useMemo(
      () =>
        function (n) {
          let r = re(
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
          return U.createElement(Bf.Provider, { value: o }, n.children);
        },
      [t]
    ),
  ];
}
let wy = "p";
function xy(e, t) {
  let n = hr(),
    { id: r = `headlessui-description-${n}`, ...o } = e,
    l = Qf(),
    i = yt(t);
  rt(() => l.register(r), [r, l.register]);
  let s = { ref: i, ...l.props, id: r };
  return ot({
    ourProps: s,
    theirProps: o,
    slot: l.slot || {},
    defaultTag: wy,
    name: l.name || "Description",
  });
}
let Sy = Ge(xy),
  ky = Object.assign(Sy, {});
var by = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(by || {}),
  Ey = ((e) => ((e[(e.SetTitleId = 0)] = "SetTitleId"), e))(Ey || {});
let Ny = {
    0(e, t) {
      return e.titleId === t.id ? e : { ...e, titleId: t.id };
    },
  },
  jl = y.createContext(null);
jl.displayName = "DialogContext";
function wo(e) {
  let t = y.useContext(jl);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, wo), n);
  }
  return t;
}
function Cy(e, t, n = () => [document.body]) {
  my(e, t, (r) => {
    var o;
    return { containers: [...((o = r.containers) != null ? o : []), n] };
  });
}
function Ty(e, t) {
  return Ce(t.type, Ny, e, t);
}
let Py = "div",
  jy = Tl.RenderStrategy | Tl.Static;
function Oy(e, t) {
  let n = hr(),
    {
      id: r = `headlessui-dialog-${n}`,
      open: o,
      onClose: l,
      initialFocus: i,
      role: s = "dialog",
      __demoMode: a = !1,
      ...u
    } = e,
    [d, m] = y.useState(0),
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
  let v = _a();
  o === void 0 && v !== null && (o = (v & He.Open) === He.Open);
  let w = y.useRef(null),
    x = yt(w, t),
    k = yo(w),
    p = e.hasOwnProperty("open") || v !== null,
    f = e.hasOwnProperty("onClose");
  if (!p && !f)
    throw new Error(
      "You have to provide an `open` and an `onClose` prop to the `Dialog` component."
    );
  if (!p)
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
    [S, T] = y.useReducer(Ty, {
      titleId: null,
      descriptionId: null,
      panelRef: y.createRef(),
    }),
    P = re(() => l(!1)),
    E = re((J) => T({ type: 0, id: J })),
    j = mr() ? (a ? !1 : h === 0) : !1,
    C = d > 1,
    _ = y.useContext(jl) !== null,
    [B, A] = Y0(),
    ge = {
      get current() {
        var J;
        return (J = S.panelRef.current) != null ? J : w.current;
      },
    },
    {
      resolveContainers: ye,
      mainTreeNodeRef: Pe,
      MainTreeNode: je,
    } = hy({ portals: B, defaultContainers: [ge] }),
    ve = C ? "parent" : "leaf",
    O = v !== null ? (v & He.Closing) === He.Closing : !1,
    $ = _ || O ? !1 : j,
    R = y.useCallback(() => {
      var J, Ke;
      return (Ke = Array.from(
        (J = k == null ? void 0 : k.querySelectorAll("body > *")) != null
          ? J
          : []
      ).find((Oe) =>
        Oe.id === "headlessui-portal-root"
          ? !1
          : Oe.contains(Pe.current) && Oe instanceof HTMLElement
      )) != null
        ? Ke
        : null;
    }, [Pe]);
  nc(R, $);
  let F = C ? !0 : j,
    V = y.useCallback(() => {
      var J, Ke;
      return (Ke = Array.from(
        (J =
          k == null
            ? void 0
            : k.querySelectorAll("[data-headlessui-portal]")) != null
          ? J
          : []
      ).find((Oe) => Oe.contains(Pe.current) && Oe instanceof HTMLElement)) !=
        null
        ? Ke
        : null;
    }, [Pe]);
  nc(V, F),
    E0(
      ye,
      (J) => {
        J.preventDefault(), P();
      },
      !(!j || C)
    );
  let ae = !(C || h !== 0);
  Ff(k == null ? void 0 : k.defaultView, "keydown", (J) => {
    ae &&
      (J.defaultPrevented ||
        (J.key === Rf.Escape &&
          (J.preventDefault(), J.stopPropagation(), P())));
  }),
    Cy(k, !(O || h !== 0 || _), ye),
    y.useEffect(() => {
      if (h !== 0 || !w.current) return;
      let J = new ResizeObserver((Ke) => {
        for (let Oe of Ke) {
          let Rn = Oe.target.getBoundingClientRect();
          Rn.x === 0 && Rn.y === 0 && Rn.width === 0 && Rn.height === 0 && P();
        }
      });
      return J.observe(w.current), () => J.disconnect();
    }, [h, w, P]);
  let [it, Ut] = vy(),
    Xl = y.useMemo(
      () => [{ dialogState: h, close: P, setTitleId: E }, S],
      [h, S, P, E]
    ),
    xo = y.useMemo(() => ({ open: h === 0 }), [h]),
    Jl = {
      ref: x,
      id: r,
      role: s,
      "aria-modal": h === 0 ? !0 : void 0,
      "aria-labelledby": S.titleId,
      "aria-describedby": it,
    };
  return U.createElement(
    yy,
    {
      type: "Dialog",
      enabled: h === 0,
      element: w,
      onUpdate: re((J, Ke) => {
        Ke === "Dialog" &&
          Ce(J, {
            [Os.Add]: () => m((Oe) => Oe + 1),
            [Os.Remove]: () => m((Oe) => Oe - 1),
          });
      }),
    },
    U.createElement(
      Ts,
      { force: !0 },
      U.createElement(
        js,
        null,
        U.createElement(
          jl.Provider,
          { value: Xl },
          U.createElement(
            js.Group,
            { target: w },
            U.createElement(
              Ts,
              { force: !1 },
              U.createElement(
                Ut,
                { slot: xo, name: "Dialog.Description" },
                U.createElement(
                  Tr,
                  {
                    initialFocus: i,
                    containers: ye,
                    features: j
                      ? Ce(ve, {
                          parent: Tr.features.RestoreFocus,
                          leaf: Tr.features.All & ~Tr.features.FocusLock,
                        })
                      : Tr.features.None,
                  },
                  U.createElement(
                    A,
                    null,
                    ot({
                      ourProps: Jl,
                      theirProps: u,
                      slot: xo,
                      defaultTag: Py,
                      features: jy,
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
    U.createElement(je, null)
  );
}
let My = "div";
function Ly(e, t) {
  let n = hr(),
    { id: r = `headlessui-dialog-overlay-${n}`, ...o } = e,
    [{ dialogState: l, close: i }] = wo("Dialog.Overlay"),
    s = yt(t),
    a = re((d) => {
      if (d.target === d.currentTarget) {
        if (M0(d.currentTarget)) return d.preventDefault();
        d.preventDefault(), d.stopPropagation(), i();
      }
    }),
    u = y.useMemo(() => ({ open: l === 0 }), [l]);
  return ot({
    ourProps: { ref: s, id: r, "aria-hidden": !0, onClick: a },
    theirProps: o,
    slot: u,
    defaultTag: My,
    name: "Dialog.Overlay",
  });
}
let _y = "div";
function Dy(e, t) {
  let n = hr(),
    { id: r = `headlessui-dialog-backdrop-${n}`, ...o } = e,
    [{ dialogState: l }, i] = wo("Dialog.Backdrop"),
    s = yt(t);
  y.useEffect(() => {
    if (i.panelRef.current === null)
      throw new Error(
        "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing."
      );
  }, [i.panelRef]);
  let a = y.useMemo(() => ({ open: l === 0 }), [l]);
  return U.createElement(
    Ts,
    { force: !0 },
    U.createElement(
      js,
      null,
      ot({
        ourProps: { ref: s, id: r, "aria-hidden": !0 },
        theirProps: o,
        slot: a,
        defaultTag: _y,
        name: "Dialog.Backdrop",
      })
    )
  );
}
let $y = "div";
function Ry(e, t) {
  let n = hr(),
    { id: r = `headlessui-dialog-panel-${n}`, ...o } = e,
    [{ dialogState: l }, i] = wo("Dialog.Panel"),
    s = yt(t, i.panelRef),
    a = y.useMemo(() => ({ open: l === 0 }), [l]),
    u = re((d) => {
      d.stopPropagation();
    });
  return ot({
    ourProps: { ref: s, id: r, onClick: u },
    theirProps: o,
    slot: a,
    defaultTag: $y,
    name: "Dialog.Panel",
  });
}
let Fy = "h2";
function zy(e, t) {
  let n = hr(),
    { id: r = `headlessui-dialog-title-${n}`, ...o } = e,
    [{ dialogState: l, setTitleId: i }] = wo("Dialog.Title"),
    s = yt(t);
  y.useEffect(() => (i(r), () => i(null)), [r, i]);
  let a = y.useMemo(() => ({ open: l === 0 }), [l]);
  return ot({
    ourProps: { ref: s, id: r },
    theirProps: o,
    slot: a,
    defaultTag: Fy,
    name: "Dialog.Title",
  });
}
let Iy = Ge(Oy),
  Ay = Ge(Dy),
  Uy = Ge(Ry),
  Hy = Ge(Ly),
  Wy = Ge(zy),
  Dt = Object.assign(Iy, {
    Backdrop: Ay,
    Panel: Uy,
    Overlay: Hy,
    Title: Wy,
    Description: ky,
  });
function By(e = 0) {
  let [t, n] = y.useState(e),
    r = vo(),
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
function Qy(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return (t.called = !0), e(...n);
  };
}
function Oi(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Mi(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function Vy(e, t) {
  let n = $n();
  if (!e) return n.dispose;
  let { transitionDuration: r, transitionDelay: o } = getComputedStyle(e),
    [l, i] = [r, o].map((a) => {
      let [u = 0] = a
        .split(",")
        .filter(Boolean)
        .map((d) => (d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3))
        .sort((d, m) => m - d);
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
function Yy(e, t, n, r) {
  let o = n ? "enter" : "leave",
    l = $n(),
    i = r !== void 0 ? Qy(r) : () => {};
  o === "enter" && (e.removeAttribute("hidden"), (e.style.display = ""));
  let s = Ce(o, { enter: () => t.enter, leave: () => t.leave }),
    a = Ce(o, { enter: () => t.enterTo, leave: () => t.leaveTo }),
    u = Ce(o, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return (
    Mi(
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
    Oi(e, ...t.base, ...s, ...u),
    l.nextFrame(() => {
      Mi(e, ...t.base, ...s, ...u),
        Oi(e, ...t.base, ...s, ...a),
        Vy(
          e,
          () => (Mi(e, ...t.base, ...s), Oi(e, ...t.base, ...t.entered), i())
        );
    }),
    l.dispose
  );
}
function qy({
  immediate: e,
  container: t,
  direction: n,
  classes: r,
  onStart: o,
  onStop: l,
}) {
  let i = vo(),
    s = Oa(),
    a = _t(n);
  rt(() => {
    e && (a.current = "enter");
  }, [e]),
    rt(() => {
      let u = $n();
      s.add(u.dispose);
      let d = t.current;
      if (d && a.current !== "idle" && i.current)
        return (
          u.dispose(),
          o.current(a.current),
          u.add(
            Yy(d, r.current, a.current === "enter", () => {
              u.dispose(), l.current(a.current);
            })
          ),
          u.dispose
        );
    }, [n]);
}
function Bt(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let ql = y.createContext(null);
ql.displayName = "TransitionContext";
var Gy = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(Gy || {});
function Ky() {
  let e = y.useContext(ql);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
function Xy() {
  let e = y.useContext(Gl);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
let Gl = y.createContext(null);
Gl.displayName = "NestingContext";
function Kl(e) {
  return "children" in e
    ? Kl(e.children)
    : e.current
        .filter(({ el: t }) => t.current !== null)
        .filter(({ state: t }) => t === "visible").length > 0;
}
function Vf(e, t) {
  let n = _t(e),
    r = y.useRef([]),
    o = vo(),
    l = Oa(),
    i = re((v, w = en.Hidden) => {
      let x = r.current.findIndex(({ el: k }) => k === v);
      x !== -1 &&
        (Ce(w, {
          [en.Unmount]() {
            r.current.splice(x, 1);
          },
          [en.Hidden]() {
            r.current[x].state = "hidden";
          },
        }),
        l.microTask(() => {
          var k;
          !Kl(r) && o.current && ((k = n.current) == null || k.call(n));
        }));
    }),
    s = re((v) => {
      let w = r.current.find(({ el: x }) => x === v);
      return (
        w
          ? w.state !== "visible" && (w.state = "visible")
          : r.current.push({ el: v, state: "visible" }),
        () => i(v, en.Unmount)
      );
    }),
    a = y.useRef([]),
    u = y.useRef(Promise.resolve()),
    d = y.useRef({ enter: [], leave: [], idle: [] }),
    m = re((v, w, x) => {
      a.current.splice(0),
        t &&
          (t.chains.current[w] = t.chains.current[w].filter(([k]) => k !== v)),
        t == null ||
          t.chains.current[w].push([
            v,
            new Promise((k) => {
              a.current.push(k);
            }),
          ]),
        t == null ||
          t.chains.current[w].push([
            v,
            new Promise((k) => {
              Promise.all(d.current[w].map(([p, f]) => f)).then(() => k());
            }),
          ]),
        w === "enter"
          ? (u.current = u.current
              .then(() => (t == null ? void 0 : t.wait.current))
              .then(() => x(w)))
          : x(w);
    }),
    g = re((v, w, x) => {
      Promise.all(d.current[w].splice(0).map(([k, p]) => p))
        .then(() => {
          var k;
          (k = a.current.shift()) == null || k();
        })
        .then(() => x(w));
    });
  return y.useMemo(
    () => ({
      children: r,
      register: s,
      unregister: i,
      onStart: m,
      onStop: g,
      wait: u,
      chains: d,
    }),
    [s, i, r, m, g, d, u]
  );
}
function Jy() {}
let Zy = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function rc(e) {
  var t;
  let n = {};
  for (let r of Zy) n[r] = (t = e[r]) != null ? t : Jy;
  return n;
}
function ev(e) {
  let t = y.useRef(rc(e));
  return (
    y.useEffect(() => {
      t.current = rc(e);
    }, [e]),
    t
  );
}
let tv = "div",
  Yf = Tl.RenderStrategy;
function nv(e, t) {
  var n, r;
  let {
      beforeEnter: o,
      afterEnter: l,
      beforeLeave: i,
      afterLeave: s,
      enter: a,
      enterFrom: u,
      enterTo: d,
      entered: m,
      leave: g,
      leaveFrom: v,
      leaveTo: w,
      ...x
    } = e,
    k = y.useRef(null),
    p = yt(k, t),
    f = (n = x.unmount) == null || n ? en.Unmount : en.Hidden,
    { show: h, appear: S, initial: T } = Ky(),
    [P, E] = y.useState(h ? "visible" : "hidden"),
    j = Xy(),
    { register: C, unregister: _ } = j;
  y.useEffect(() => C(k), [C, k]),
    y.useEffect(() => {
      if (f === en.Hidden && k.current) {
        if (h && P !== "visible") {
          E("visible");
          return;
        }
        return Ce(P, { hidden: () => _(k), visible: () => C(k) });
      }
    }, [P, k, C, _, h, f]);
  let B = _t({
      base: Bt(x.className),
      enter: Bt(a),
      enterFrom: Bt(u),
      enterTo: Bt(d),
      entered: Bt(m),
      leave: Bt(g),
      leaveFrom: Bt(v),
      leaveTo: Bt(w),
    }),
    A = ev({ beforeEnter: o, afterEnter: l, beforeLeave: i, afterLeave: s }),
    ge = mr();
  y.useEffect(() => {
    if (ge && P === "visible" && k.current === null)
      throw new Error(
        "Did you forget to passthrough the `ref` to the actual DOM node?"
      );
  }, [k, P, ge]);
  let ye = T && !S,
    Pe = S && h && T,
    je = !ge || ye ? "idle" : h ? "enter" : "leave",
    ve = By(0),
    O = re((ae) =>
      Ce(ae, {
        enter: () => {
          ve.addFlag(He.Opening), A.current.beforeEnter();
        },
        leave: () => {
          ve.addFlag(He.Closing), A.current.beforeLeave();
        },
        idle: () => {},
      })
    ),
    $ = re((ae) =>
      Ce(ae, {
        enter: () => {
          ve.removeFlag(He.Opening), A.current.afterEnter();
        },
        leave: () => {
          ve.removeFlag(He.Closing), A.current.afterLeave();
        },
        idle: () => {},
      })
    ),
    R = Vf(() => {
      E("hidden"), _(k);
    }, j),
    F = y.useRef(!1);
  qy({
    immediate: Pe,
    container: k,
    classes: B,
    direction: je,
    onStart: _t((ae) => {
      (F.current = !0), R.onStart(k, ae, O);
    }),
    onStop: _t((ae) => {
      (F.current = !1),
        R.onStop(k, ae, $),
        ae === "leave" && !Kl(R) && (E("hidden"), _(k));
    }),
  });
  let V = x,
    Et = { ref: p };
  return (
    Pe
      ? (V = {
          ...V,
          className: Cl(
            x.className,
            ...B.current.enter,
            ...B.current.enterFrom
          ),
        })
      : F.current &&
        ((V.className = Cl(
          x.className,
          (r = k.current) == null ? void 0 : r.className
        )),
        V.className === "" && delete V.className),
    U.createElement(
      Gl.Provider,
      { value: R },
      U.createElement(
        j0,
        { value: Ce(P, { visible: He.Open, hidden: He.Closed }) | ve.flags },
        ot({
          ourProps: Et,
          theirProps: V,
          defaultTag: tv,
          features: Yf,
          visible: P === "visible",
          name: "Transition.Child",
        })
      )
    )
  );
}
function rv(e, t) {
  let { show: n, appear: r = !1, unmount: o = !0, ...l } = e,
    i = y.useRef(null),
    s = yt(i, t);
  mr();
  let a = _a();
  if (
    (n === void 0 && a !== null && (n = (a & He.Open) === He.Open),
    ![!0, !1].includes(n))
  )
    throw new Error(
      "A <Transition /> is used but it is missing a `show={true | false}` prop."
    );
  let [u, d] = y.useState(n ? "visible" : "hidden"),
    m = Vf(() => {
      d("hidden");
    }),
    [g, v] = y.useState(!0),
    w = y.useRef([n]);
  rt(() => {
    g !== !1 &&
      w.current[w.current.length - 1] !== n &&
      (w.current.push(n), v(!1));
  }, [w, n]);
  let x = y.useMemo(() => ({ show: n, appear: r, initial: g }), [n, r, g]);
  y.useEffect(() => {
    if (n) d("visible");
    else if (!Kl(m)) d("hidden");
    else {
      let h = i.current;
      if (!h) return;
      let S = h.getBoundingClientRect();
      S.x === 0 && S.y === 0 && S.width === 0 && S.height === 0 && d("hidden");
    }
  }, [n, m]);
  let k = { unmount: o },
    p = re(() => {
      var h;
      g && v(!1), (h = e.beforeEnter) == null || h.call(e);
    }),
    f = re(() => {
      var h;
      g && v(!1), (h = e.beforeLeave) == null || h.call(e);
    });
  return U.createElement(
    Gl.Provider,
    { value: m },
    U.createElement(
      ql.Provider,
      { value: x },
      ot({
        ourProps: {
          ...k,
          as: y.Fragment,
          children: U.createElement(qf, {
            ref: s,
            ...k,
            ...l,
            beforeEnter: p,
            beforeLeave: f,
          }),
        },
        theirProps: {},
        defaultTag: y.Fragment,
        features: Yf,
        visible: u === "visible",
        name: "Transition",
      })
    )
  );
}
function ov(e, t) {
  let n = y.useContext(ql) !== null,
    r = _a() !== null;
  return U.createElement(
    U.Fragment,
    null,
    !n && r
      ? U.createElement(Ms, { ref: t, ...e })
      : U.createElement(qf, { ref: t, ...e })
  );
}
let Ms = Ge(rv),
  qf = Ge(nv),
  lv = Ge(ov),
  $t = Object.assign(Ms, { Child: lv, Root: Ms });
function Gf(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Gf(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function iv() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Gf(e)) && (r && (r += " "), (r += t));
  return r;
}
const $a = "-",
  sv = (e) => {
    const t = uv(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (i) => {
        const s = i.split($a);
        return s[0] === "" && s.length !== 1 && s.shift(), Kf(s, t) || av(i);
      },
      getConflictingClassGroupIds: (i, s) => {
        const a = n[i] || [];
        return s && r[i] ? [...a, ...r[i]] : a;
      },
    };
  },
  Kf = (e, t) => {
    var i;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? Kf(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const l = e.join($a);
    return (i = t.validators.find(({ validator: s }) => s(l))) == null
      ? void 0
      : i.classGroupId;
  },
  oc = /^\[(.+)\]$/,
  av = (e) => {
    if (oc.test(e)) {
      const t = oc.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  uv = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      dv(Object.entries(e.classGroups), n).forEach(([l, i]) => {
        Ls(i, r, l, t);
      }),
      r
    );
  },
  Ls = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const l = o === "" ? t : lc(t, o);
        l.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (cv(o)) {
          Ls(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([l, i]) => {
        Ls(i, lc(t, l), n, r);
      });
    });
  },
  lc = (e, t) => {
    let n = e;
    return (
      t.split($a).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  cv = (e) => e.isThemeGetter,
  dv = (e, t) =>
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
  fv = (e) => {
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
  Xf = "!",
  pv = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      l = t.length,
      i = (s) => {
        const a = [];
        let u = 0,
          d = 0,
          m;
        for (let k = 0; k < s.length; k++) {
          let p = s[k];
          if (u === 0) {
            if (p === o && (r || s.slice(k, k + l) === t)) {
              a.push(s.slice(d, k)), (d = k + l);
              continue;
            }
            if (p === "/") {
              m = k;
              continue;
            }
          }
          p === "[" ? u++ : p === "]" && u--;
        }
        const g = a.length === 0 ? s : s.substring(d),
          v = g.startsWith(Xf),
          w = v ? g.substring(1) : g,
          x = m && m > d ? m - d : void 0;
        return {
          modifiers: a,
          hasImportantModifier: v,
          baseClassName: w,
          maybePostfixModifierPosition: x,
        };
      };
    return n ? (s) => n({ className: s, parseClassName: i }) : i;
  },
  mv = (e) => {
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
  hv = (e) => ({ cache: fv(e.cacheSize), parseClassName: pv(e), ...sv(e) }),
  gv = /\s+/,
  yv = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      l = [],
      i = e.trim().split(gv);
    let s = "";
    for (let a = i.length - 1; a >= 0; a -= 1) {
      const u = i[a],
        {
          modifiers: d,
          hasImportantModifier: m,
          baseClassName: g,
          maybePostfixModifierPosition: v,
        } = n(u);
      let w = !!v,
        x = r(w ? g.substring(0, v) : g);
      if (!x) {
        if (!w) {
          s = u + (s.length > 0 ? " " + s : s);
          continue;
        }
        if (((x = r(g)), !x)) {
          s = u + (s.length > 0 ? " " + s : s);
          continue;
        }
        w = !1;
      }
      const k = mv(d).join(":"),
        p = m ? k + Xf : k,
        f = p + x;
      if (l.includes(f)) continue;
      l.push(f);
      const h = o(x, w);
      for (let S = 0; S < h.length; ++S) {
        const T = h[S];
        l.push(p + T);
      }
      s = u + (s.length > 0 ? " " + s : s);
    }
    return s;
  };
function vv() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Jf(t)) && (r && (r += " "), (r += n));
  return r;
}
const Jf = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Jf(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function wv(e, ...t) {
  let n,
    r,
    o,
    l = i;
  function i(a) {
    const u = t.reduce((d, m) => m(d), e());
    return (n = hv(u)), (r = n.cache.get), (o = n.cache.set), (l = s), s(a);
  }
  function s(a) {
    const u = r(a);
    if (u) return u;
    const d = yv(a, n);
    return o(a, d), d;
  }
  return function () {
    return l(vv.apply(null, arguments));
  };
}
const Z = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  Zf = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  xv = /^\d+\/\d+$/,
  Sv = new Set(["px", "full", "screen"]),
  kv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  bv =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Ev = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Nv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Cv =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Ct = (e) => rr(e) || Sv.has(e) || xv.test(e),
  Qt = (e) => gr(e, "length", Dv),
  rr = (e) => !!e && !Number.isNaN(Number(e)),
  Li = (e) => gr(e, "number", rr),
  jr = (e) => !!e && Number.isInteger(Number(e)),
  Tv = (e) => e.endsWith("%") && rr(e.slice(0, -1)),
  z = (e) => Zf.test(e),
  Vt = (e) => kv.test(e),
  Pv = new Set(["length", "size", "percentage"]),
  jv = (e) => gr(e, Pv, ep),
  Ov = (e) => gr(e, "position", ep),
  Mv = new Set(["image", "url"]),
  Lv = (e) => gr(e, Mv, Rv),
  _v = (e) => gr(e, "", $v),
  Or = () => !0,
  gr = (e, t, n) => {
    const r = Zf.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  Dv = (e) => bv.test(e) && !Ev.test(e),
  ep = () => !1,
  $v = (e) => Nv.test(e),
  Rv = (e) => Cv.test(e),
  Fv = () => {
    const e = Z("colors"),
      t = Z("spacing"),
      n = Z("blur"),
      r = Z("brightness"),
      o = Z("borderColor"),
      l = Z("borderRadius"),
      i = Z("borderSpacing"),
      s = Z("borderWidth"),
      a = Z("contrast"),
      u = Z("grayscale"),
      d = Z("hueRotate"),
      m = Z("invert"),
      g = Z("gap"),
      v = Z("gradientColorStops"),
      w = Z("gradientColorStopPositions"),
      x = Z("inset"),
      k = Z("margin"),
      p = Z("opacity"),
      f = Z("padding"),
      h = Z("saturate"),
      S = Z("scale"),
      T = Z("sepia"),
      P = Z("skew"),
      E = Z("space"),
      j = Z("translate"),
      C = () => ["auto", "contain", "none"],
      _ = () => ["auto", "hidden", "clip", "visible", "scroll"],
      B = () => ["auto", z, t],
      A = () => [z, t],
      ge = () => ["", Ct, Qt],
      ye = () => ["auto", rr, z],
      Pe = () => [
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
      je = () => ["solid", "dashed", "dotted", "double", "none"],
      ve = () => [
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
      O = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      $ = () => ["", "0", z],
      R = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      F = () => [rr, z];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Or],
        spacing: [Ct, Qt],
        blur: ["none", "", Vt, z],
        brightness: F(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Vt, z],
        borderSpacing: A(),
        borderWidth: ge(),
        contrast: F(),
        grayscale: $(),
        hueRotate: F(),
        invert: $(),
        gap: A(),
        gradientColorStops: [e],
        gradientColorStopPositions: [Tv, Qt],
        inset: B(),
        margin: B(),
        opacity: F(),
        padding: A(),
        saturate: F(),
        scale: F(),
        sepia: $(),
        skew: F(),
        space: A(),
        translate: A(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", z] }],
        container: ["container"],
        columns: [{ columns: [Vt] }],
        "break-after": [{ "break-after": R() }],
        "break-before": [{ "break-before": R() }],
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
        "object-position": [{ object: [...Pe(), z] }],
        overflow: [{ overflow: _() }],
        "overflow-x": [{ "overflow-x": _() }],
        "overflow-y": [{ "overflow-y": _() }],
        overscroll: [{ overscroll: C() }],
        "overscroll-x": [{ "overscroll-x": C() }],
        "overscroll-y": [{ "overscroll-y": C() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [x] }],
        "inset-x": [{ "inset-x": [x] }],
        "inset-y": [{ "inset-y": [x] }],
        start: [{ start: [x] }],
        end: [{ end: [x] }],
        top: [{ top: [x] }],
        right: [{ right: [x] }],
        bottom: [{ bottom: [x] }],
        left: [{ left: [x] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", jr, z] }],
        basis: [{ basis: B() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", z] }],
        grow: [{ grow: $() }],
        shrink: [{ shrink: $() }],
        order: [{ order: ["first", "last", "none", jr, z] }],
        "grid-cols": [{ "grid-cols": [Or] }],
        "col-start-end": [{ col: ["auto", { span: ["full", jr, z] }, z] }],
        "col-start": [{ "col-start": ye() }],
        "col-end": [{ "col-end": ye() }],
        "grid-rows": [{ "grid-rows": [Or] }],
        "row-start-end": [{ row: ["auto", { span: [jr, z] }, z] }],
        "row-start": [{ "row-start": ye() }],
        "row-end": [{ "row-end": ye() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", z] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", z] }],
        gap: [{ gap: [g] }],
        "gap-x": [{ "gap-x": [g] }],
        "gap-y": [{ "gap-y": [g] }],
        "justify-content": [{ justify: ["normal", ...O()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...O(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...O(), "baseline"] }],
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
        m: [{ m: [k] }],
        mx: [{ mx: [k] }],
        my: [{ my: [k] }],
        ms: [{ ms: [k] }],
        me: [{ me: [k] }],
        mt: [{ mt: [k] }],
        mr: [{ mr: [k] }],
        mb: [{ mb: [k] }],
        ml: [{ ml: [k] }],
        "space-x": [{ "space-x": [E] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [E] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", z, t] }],
        "min-w": [{ "min-w": [z, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              z,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Vt] },
              Vt,
            ],
          },
        ],
        h: [{ h: [z, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [z, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [z, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [z, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Vt, Qt] }],
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
              Li,
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
              z,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", rr, Li] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Ct,
              z,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", z] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", z] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [p] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [p] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...je(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Ct, Qt] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Ct, z] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: A() }],
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
              z,
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
        content: [{ content: ["none", z] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [p] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Pe(), Ov] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", jv] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              Lv,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [w] }],
        "gradient-via-pos": [{ via: [w] }],
        "gradient-to-pos": [{ to: [w] }],
        "gradient-from": [{ from: [v] }],
        "gradient-via": [{ via: [v] }],
        "gradient-to": [{ to: [v] }],
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
        "border-opacity": [{ "border-opacity": [p] }],
        "border-style": [{ border: [...je(), "hidden"] }],
        "divide-x": [{ "divide-x": [s] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [s] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [p] }],
        "divide-style": [{ divide: je() }],
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
        "outline-style": [{ outline: ["", ...je()] }],
        "outline-offset": [{ "outline-offset": [Ct, z] }],
        "outline-w": [{ outline: [Ct, Qt] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: ge() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [p] }],
        "ring-offset-w": [{ "ring-offset": [Ct, Qt] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", Vt, _v] }],
        "shadow-color": [{ shadow: [Or] }],
        opacity: [{ opacity: [p] }],
        "mix-blend": [
          { "mix-blend": [...ve(), "plus-lighter", "plus-darker"] },
        ],
        "bg-blend": [{ "bg-blend": ve() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [a] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Vt, z] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [d] }],
        invert: [{ invert: [m] }],
        saturate: [{ saturate: [h] }],
        sepia: [{ sepia: [T] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [a] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
        "backdrop-invert": [{ "backdrop-invert": [m] }],
        "backdrop-opacity": [{ "backdrop-opacity": [p] }],
        "backdrop-saturate": [{ "backdrop-saturate": [h] }],
        "backdrop-sepia": [{ "backdrop-sepia": [T] }],
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
              z,
            ],
          },
        ],
        duration: [{ duration: F() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", z] }],
        delay: [{ delay: F() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", z] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [S] }],
        "scale-x": [{ "scale-x": [S] }],
        "scale-y": [{ "scale-y": [S] }],
        rotate: [{ rotate: [jr, z] }],
        "translate-x": [{ "translate-x": [j] }],
        "translate-y": [{ "translate-y": [j] }],
        "skew-x": [{ "skew-x": [P] }],
        "skew-y": [{ "skew-y": [P] }],
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
              z,
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
              z,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": A() }],
        "scroll-mx": [{ "scroll-mx": A() }],
        "scroll-my": [{ "scroll-my": A() }],
        "scroll-ms": [{ "scroll-ms": A() }],
        "scroll-me": [{ "scroll-me": A() }],
        "scroll-mt": [{ "scroll-mt": A() }],
        "scroll-mr": [{ "scroll-mr": A() }],
        "scroll-mb": [{ "scroll-mb": A() }],
        "scroll-ml": [{ "scroll-ml": A() }],
        "scroll-p": [{ "scroll-p": A() }],
        "scroll-px": [{ "scroll-px": A() }],
        "scroll-py": [{ "scroll-py": A() }],
        "scroll-ps": [{ "scroll-ps": A() }],
        "scroll-pe": [{ "scroll-pe": A() }],
        "scroll-pt": [{ "scroll-pt": A() }],
        "scroll-pr": [{ "scroll-pr": A() }],
        "scroll-pb": [{ "scroll-pb": A() }],
        "scroll-pl": [{ "scroll-pl": A() }],
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
          { "will-change": ["auto", "scroll", "contents", "transform", z] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [Ct, Qt, Li] }],
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
  zv = wv(Fv);
function Iv(...e) {
  return zv(iv(e));
}
const ic = ({
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
      m = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      };
    return c.jsx("button", {
      className: Iv(u, d[t], m[n], r && "opacity-50 cursor-not-allowed", i),
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
  Av = { duration: 180, brightness: 0.9, color: "0,0,255" },
  Uv = [
    { label: "紅色", value: "0,0,255" },
    { label: "綠色", value: "0,255,0" },
    { label: "藍色", value: "255,0,0" },
    { label: "黃色", value: "0,255,255" },
  ],
  tp = "lightSettings",
  _s = () => {
    try {
      const e = localStorage.getItem(tp);
      if (e) return JSON.parse(e);
    } catch (e) {
      console.error("Error loading light settings:", e);
    }
    return Av;
  },
  Hv = (e) => {
    try {
      localStorage.setItem(tp, JSON.stringify(e));
    } catch (t) {
      console.error("Error saving light settings:", t);
    }
  },
  Wv = () => {
    qe();
    const [e, t] = y.useState(!1),
      [n, r] = y.useState(_s()),
      o = () => {
        Hv(n), t(!1);
      },
      l = () => {
        r(_s()), t(!1);
      };
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx("button", {
          onClick: () => t(!0),
          className:
            "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors",
          title: "亮燈設定",
          children: c.jsx(Jg, { className: "w-5 h-5" }),
        }),
        c.jsx($t, {
          appear: !0,
          show: e,
          as: y.Fragment,
          children: c.jsxs(Dt, {
            as: "div",
            className: "relative z-50",
            onClose: l,
            children: [
              c.jsx($t.Child, {
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
                  children: c.jsx($t.Child, {
                    as: y.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: c.jsxs(Dt.Panel, {
                      className:
                        "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                      children: [
                        c.jsxs("div", {
                          className: "flex items-center justify-between mb-4",
                          children: [
                            c.jsx(Dt.Title, {
                              as: "h3",
                              className:
                                "text-lg font-medium leading-6 text-gray-900",
                              children: "亮燈設定",
                            }),
                            c.jsx("button", {
                              onClick: l,
                              className:
                                "text-gray-400 hover:text-gray-600 transition-colors",
                              children: c.jsx(Zg, { className: "w-5 h-5" }),
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
                                  children: Uv.map((i) => {
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
                            c.jsx(ic, {
                              onClick: l,
                              variant: "secondary",
                              className: "flex-1",
                              children: "取消",
                            }),
                            c.jsx(ic, {
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
  Bv = ({
    isOpen: e,
    title: t,
    message: n,
    confirmText: r,
    cancelText: o,
    onConfirm: l,
    onCancel: i,
    isProcessing: s = !1,
  }) =>
    c.jsx($t, {
      appear: !0,
      show: e,
      as: y.Fragment,
      children: c.jsxs(Dt, {
        as: "div",
        className: "relative z-[60]",
        onClose: () => !s && i(),
        children: [
          c.jsx($t.Child, {
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
              children: c.jsx($t.Child, {
                as: y.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0 scale-95",
                enterTo: "opacity-100 scale-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100 scale-100",
                leaveTo: "opacity-0 scale-95",
                children: c.jsxs(Dt.Panel, {
                  className:
                    "w-[90vw] max-w-md transform overflow-hidden rounded-lg bg-white p-4 md:p-6 text-left align-middle shadow-xl transition-all",
                  children: [
                    c.jsx(Dt.Title, {
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
  Qv = ({
    isOpen: e,
    onClose: t,
    selectedOrder: n,
    onConfirm: r,
    isProcessing: o,
  }) => {
    const { t: l } = qe(),
      [i, s] = y.useState(""),
      [a, u] = y.useState(null),
      [d, m] = y.useState(null),
      [g, v] = y.useState(null),
      [w, x] = y.useState(!1),
      [k, p] = y.useState(!0);
    U.useEffect(() => {
      e &&
        n &&
        (s(n.actualQuantity || n.requestedQuantity || ""),
        u(null),
        p(!0),
        m(null),
        v(null),
        x(!1));
    }, [e, n]),
      U.useEffect(() => {
        if (!e) return;
        const C = (_) => {
          o ||
            (_.key >= "0" && _.key <= "9"
              ? h(_.key)
              : _.key === "."
              ? h(".")
              : _.key === "+"
              ? S("+")
              : _.key === "-"
              ? S("-")
              : _.key === "*"
              ? S("×")
              : _.key === "/"
              ? (_.preventDefault(), S("÷"))
              : _.key === "Enter" || _.key === "="
              ? (_.preventDefault(), d && g ? T() : E())
              : _.key === "Escape"
              ? j()
              : _.key === "Backspace"
              ? (i.length > 1 ? s(i.slice(0, -1)) : s("0"), p(!1))
              : (_.key === "c" || _.key === "C") && P());
        };
        return (
          window.addEventListener("keydown", C),
          () => window.removeEventListener("keydown", C)
        );
      }, [e, o, i, d, g, w, k]);
    const f = (C) => C === "緊急申領",
      h = (C) => {
        k
          ? (s(C), p(!1))
          : w
          ? (s(C), x(!1))
          : d && !g
          ? (v(i), s(C))
          : s(i === "0" ? C : i + C);
      },
      S = (C) => {
        p(!1), g && T(), m(C), x(!1);
      },
      T = () => {
        if (!g || !d) return;
        const C = parseFloat(g),
          _ = parseFloat(i);
        let B = 0;
        switch (d) {
          case "+":
            B = C + _;
            break;
          case "-":
            B = C - _;
            break;
          case "×":
            B = C * _;
            break;
          case "÷":
            if (_ === 0) {
              u("不能除以零");
              return;
            }
            B = C / _;
            break;
        }
        s(Math.round(B).toString()), v(null), m(null), x(!0), p(!1);
      },
      P = () => {
        s("0"), v(null), m(null), x(!1), p(!0);
      },
      E = async () => {
        if (!i || isNaN(Number(i)) || Number(i) < 0) {
          u("請輸入有效的數量");
          return;
        }
        u(null), await r(i);
      },
      j = () => {
        o || t();
      };
    return c.jsx($t, {
      appear: !0,
      show: e,
      as: y.Fragment,
      children: c.jsxs(Dt, {
        as: "div",
        className: "relative z-50",
        onClose: j,
        children: [
          c.jsx($t.Child, {
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
              children: c.jsx($t.Child, {
                as: y.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0 scale-95",
                enterTo: "opacity-100 scale-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100 scale-100",
                leaveTo: "opacity-0 scale-95",
                children: c.jsxs(Dt.Panel, {
                  className:
                    "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                  children: [
                    c.jsx(Dt.Title, {
                      as: "h3",
                      className: "text-xl font-bold text-gray-900 mb-6",
                      children: l("modal.enterActualQuantity"),
                    }),
                    n &&
                      c.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          c.jsxs("div", {
                            children: [
                              c.jsx("label", {
                                className:
                                  "block text-base font-medium text-gray-700",
                                children: l("table.drugName"),
                              }),
                              c.jsx("div", {
                                className: "mt-1",
                                children: c.jsx("div", {
                                  className:
                                    "text-base text-gray-900 break-words",
                                  children: n.name,
                                }),
                              }),
                            ],
                          }),
                          c.jsxs("div", {
                            children: [
                              c.jsx("label", {
                                className:
                                  "block text-base font-medium text-gray-700",
                                children: l("table.drugCode"),
                              }),
                              c.jsx("div", {
                                className: "mt-1",
                                children: c.jsx("div", {
                                  className:
                                    "text-base font-mono text-gray-900 break-all",
                                  children: n.code,
                                }),
                              }),
                            ],
                          }),
                          c.jsxs("div", {
                            children: [
                              c.jsx("label", {
                                className:
                                  "block text-base font-medium text-gray-700",
                                children: l("table.requestedQty"),
                              }),
                              c.jsx("div", {
                                className: "mt-1",
                                children: c.jsx("div", {
                                  className: "text-base text-gray-900",
                                  children: n.requestedQuantity,
                                }),
                              }),
                            ],
                          }),
                          c.jsxs("div", {
                            children: [
                              c.jsx("label", {
                                className:
                                  "block text-base font-medium text-gray-700",
                                children: l("modal.actualQuantity"),
                              }),
                              c.jsx("input", {
                                type: "text",
                                inputMode: "none",
                                value: i,
                                readOnly: !0,
                                className:
                                  "mt-1 w-full px-3 py-2 text-base font-medium tracking-wider border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-gray-900",
                              }),
                            ],
                          }),
                          c.jsxs("div", {
                            className: "grid grid-cols-4 gap-2",
                            children: [
                              ["7", "8", "9", "÷"].map((C) =>
                                c.jsx(
                                  "button",
                                  {
                                    onClick: () => (C === "÷" ? S(C) : h(C)),
                                    className: `py-4 text-base font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${
                                      C === "÷"
                                        ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700"
                                        : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                                    }`,
                                    children: C,
                                  },
                                  C
                                )
                              ),
                              ["4", "5", "6", "×"].map((C) =>
                                c.jsx(
                                  "button",
                                  {
                                    onClick: () => (C === "×" ? S(C) : h(C)),
                                    className: `py-4 text-base font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${
                                      C === "×"
                                        ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700"
                                        : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                                    }`,
                                    children: C,
                                  },
                                  C
                                )
                              ),
                              ["1", "2", "3", "-"].map((C) =>
                                c.jsx(
                                  "button",
                                  {
                                    onClick: () => (C === "-" ? S(C) : h(C)),
                                    className: `py-4 text-base font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${
                                      C === "-"
                                        ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700"
                                        : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                                    }`,
                                    children: C,
                                  },
                                  C
                                )
                              ),
                              ["0", ".", "=", "+"].map((C) =>
                                c.jsx(
                                  "button",
                                  {
                                    onClick: () => {
                                      C === "=" ? T() : C === "+" ? S(C) : h(C);
                                    },
                                    className: `py-4 text-base font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${
                                      C === "="
                                        ? "bg-green-500 hover:bg-green-600 text-white"
                                        : C === "+"
                                        ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700"
                                        : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                                    }`,
                                    children: C,
                                  },
                                  C
                                )
                              ),
                            ],
                          }),
                          a &&
                            c.jsxs("div", {
                              className:
                                "p-4 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
                              children: [
                                c.jsx(Pa, { size: 20 }),
                                c.jsx("span", {
                                  className: "text-base",
                                  children: a,
                                }),
                              ],
                            }),
                          c.jsxs("div", {
                            className:
                              "mt-6 flex flex-col sm:flex-row justify-end gap-3",
                            children: [
                              c.jsx("button", {
                                type: "button",
                                onClick: P,
                                disabled: o,
                                className:
                                  "w-full sm:w-auto inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                children: l("button.clear"),
                              }),
                              c.jsx("button", {
                                type: "button",
                                onClick: j,
                                disabled: o,
                                className:
                                  "w-full sm:w-auto inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                children: l("button.cancel"),
                              }),
                              c.jsx("button", {
                                type: "button",
                                onClick: E,
                                disabled: o,
                                className: `w-full sm:w-auto inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${
                                  n && f(n.actionType)
                                    ? "bg-red-600 hover:bg-red-700 focus-visible:ring-red-500"
                                    : "bg-blue-600 hover:bg-blue-700 focus-visible:ring-blue-500"
                                }`,
                                children: l(
                                  o ? "button.processing" : "button.confirm"
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
    });
  },
  Vv = [
    { value: "name", labelKey: "search.drugName" },
    { value: "code", labelKey: "search.drugCode" },
    { value: "requestingUnit", labelKey: "search.requestingUnit" },
    { value: "actionType", labelKey: "search.actionType" },
  ],
  Yv = ({
    orders: e,
    startDate: t,
    endDate: n,
    onDateChange: r,
    onOrdersUpdate: o,
    isLoading: l,
    medTypeMap: i,
  }) => {
    const { t: s } = qe(),
      [a, u] = y.useState(null),
      [d, m] = y.useState(!1),
      [g, v] = y.useState(null),
      [w, x] = y.useState(!1),
      [k, p] = y.useState("等待過帳"),
      [f, h] = y.useState(""),
      [S, T] = y.useState(!1),
      [P, E] = y.useState(!1),
      [j, C] = y.useState("name"),
      [_, B] = y.useState(""),
      [A, ge] = y.useState(!1),
      [ye, Pe] = y.useState(new Set()),
      [je, ve] = y.useState(new Set()),
      O = y.useRef(new Map()),
      [$, R] = y.useState(!1),
      [F, V] = y.useState(null),
      Et = (b) => {
        const M = b.signedTime;
        if (!M || M === "-" || M === "1/01/01 00:00:00") return "-";
        if (M.match(/^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/)) return M;
        try {
          const L = new Date(M);
          if (!isNaN(L.getTime())) return G(L, "yyyy/MM/dd HH:mm:ss");
        } catch {}
        return M;
      };
    y.useEffect(
      () => () => {
        O.current.forEach((b) => clearTimeout(b)), O.current.clear();
      },
      []
    );
    const ae = async (b) => {
        try {
          await xt("/api/medmap/light_by_code_name_type", {
            method: "POST",
            body: {
              ValueAry: [
                "ServerName=DS01",
                "ServerType=藥庫",
                `code=${b}`,
                "color=0,0,0",
                "lightness=0",
              ],
            },
          }),
            console.log(`Turn off light for: ${b}`);
        } catch (M) {
          console.log("Turn off light API error (non-blocking):", M);
        }
      },
      lt = (b) => b === "緊急申領",
      it = (b) => {
        p(b), r(t, n);
      },
      Ut = (b) => {
        b.preventDefault();
      },
      Xl = (b) => {
        b.key === "Enter" && b.preventDefault();
      },
      xo = async () => {
        ge(!0);
        try {
          const b = await fetch(
            Cf("/api/materialRequisition/download_excel_by_requestTime"),
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
          if (!b.ok) throw new Error("Export failed");
          const M = await b.blob(),
            L = window.URL.createObjectURL(M),
            I = document.createElement("a");
          (I.href = L),
            (I.download = `MaterialRequisition_${G(t, "yyyyMMdd")}_to_${G(
              n,
              "yyyyMMdd"
            )}.xlsx`),
            document.body.appendChild(I),
            I.click(),
            window.URL.revokeObjectURL(L),
            document.body.removeChild(I);
        } catch (b) {
          console.error("Export error:", b), v("匯出失敗，請稍後再試");
        } finally {
          ge(!1);
        }
      },
      Jl = y.useMemo(() => {
        const b = new Set();
        return (
          e.forEach((M) => {
            const L = i[M.code];
            L && b.add(L);
          }),
          Array.from(b).sort()
        );
      }, [e, i]),
      J = e.filter((b) => {
        let M = !1;
        if (
          (k === "全部"
            ? (M = !0)
            : k === "已過帳"
            ? (M = b.state === "已過帳" || b.state === "已簽收")
            : (M = b.state === k),
          f && i[b.code] !== f)
        )
          return !1;
        if (!_) return M;
        const L = _.toLowerCase();
        switch (j) {
          case "name":
            return M && b.name.toLowerCase().includes(L);
          case "code":
            return M && b.code.toLowerCase().includes(L);
          case "requestingUnit":
            return M && b.requestingUnit.toLowerCase().includes(L);
          case "actionType":
            return M && b.actionType.toLowerCase().includes(L);
          default:
            return M;
        }
      }),
      Ke = J.reduce((b, M) => {
        const L = M.code;
        return (
          b[L] || (b[L] = { orders: [], drugName: M.name, drugCode: M.code }),
          b[L].orders.push(M),
          b
        );
      }, {});
    Object.values(Ke).forEach((b) => {
      b.orders.sort((M, L) => {
        const I = lt(M.actionType),
          K = lt(L.actionType);
        return I && !K ? -1 : !I && K ? 1 : 0;
      });
    });
    const Oe = Object.entries(Ke).sort(([, b], [, M]) => {
        const L = b.orders.filter((st) => lt(st.actionType)),
          I = M.orders.filter((st) => lt(st.actionType)),
          K = L.length === b.orders.length && b.orders.length > 0,
          ke = I.length === M.orders.length && M.orders.length > 0,
          W = L.length > 0,
          pe = I.length > 0;
        if (K && !ke) return -1;
        if (!K && ke) return 1;
        if (K === ke) {
          if (W && !pe) return -1;
          if (!W && pe) return 1;
        }
        return 0;
      }),
      Rn = async (b) => {
        if (a) {
          x(!0), v(null);
          try {
            const M = await xt(
              "/api/materialRequisition/update_actual_quantity",
              {
                method: "POST",
                body: { Data: { GUID: a.GUID, actualQuantity: b } },
              }
            );
            if (M.Code === 200) {
              const L = e.map((I) =>
                I.GUID === a.GUID ? { ...I, actualQuantity: b } : I
              );
              o(L), m(!1);
            } else throw new Error(M.Result || "更新失敗");
          } catch (M) {
            throw (
              (v(M instanceof Error ? M.message : "系統錯誤，請稍後再試"), M)
            );
          } finally {
            x(!1);
          }
        }
      },
      np = async () => {
        const b = Qr();
        if (!b) {
          v("無法取得使用者資訊");
          return;
        }
        const M = J.filter((K) => K.state === "等待過帳" && K.actualQuantity);
        if (M.length === 0) {
          v("沒有可核撥的訂單");
          return;
        }
        const I = `確認要核撥以下項目嗎？

${M.map((K) => `${K.name} - ${K.actualQuantity}`).join(`
`)}`;
        if (confirm(I)) {
          E(!0), v(null);
          try {
            const ke = G(new Date(), "yyyy-MM-dd HH:mm:ss"),
              W = {
                Data: M.map((st) => ({
                  ...st,
                  issuingPerson: b.Name,
                  issuingPersonID: b.ID,
                  issueTime: ke,
                  notice: "False",
                  state: "已過帳",
                })),
              },
              pe = await xt("/api/materialRequisition/update_by_guid", {
                method: "POST",
                body: W,
              });
            if (pe.Code === 200) {
              const st = [...new Set(M.map((Nt) => Nt.code))];
              await Promise.all(st.map((Nt) => ae(Nt))), r(t, n);
            } else throw new Error(pe.Result || "批次核撥失敗");
          } catch (K) {
            v(K instanceof Error ? K.message : "系統錯誤，請稍後再試");
          } finally {
            E(!1);
          }
        }
      },
      rp = async (b, M) => {
        const L = Qr();
        if (!L) {
          v("無法取得使用者資訊");
          return;
        }
        const I = M.orders.filter(
          (W) => W.state === "等待過帳" && W.actualQuantity
        );
        if (I.length === 0) {
          v("沒有可核撥的訂單");
          return;
        }
        const ke = `確認要核撥以下項目嗎？

${I.map((W) => `${W.name} - ${W.actualQuantity}`).join(`
`)}`;
        if (confirm(ke)) {
          Pe((W) => new Set(W).add(b)), v(null);
          try {
            const pe = G(new Date(), "yyyy-MM-dd HH:mm:ss"),
              st = {
                Data: I.map((So) => ({
                  ...So,
                  issuingPerson: L.Name,
                  issuingPersonID: L.ID,
                  issueTime: pe,
                  notice: "False",
                  state: "已過帳",
                })),
              },
              Nt = await xt("/api/materialRequisition/update_by_guid", {
                method: "POST",
                body: st,
              });
            if (Nt.Code === 200) await ae(b), r(t, n);
            else throw new Error(Nt.Result || "批次核撥失敗");
          } catch (W) {
            v(W instanceof Error ? W.message : "系統錯誤，請稍後再試");
          } finally {
            Pe((W) => {
              const pe = new Set(W);
              return pe.delete(b), pe;
            });
          }
        }
      },
      op = async (b, M) => {
        ve((W) => new Set(W).add(b)), v(null);
        const I = M.orders.some((W) => W.notice !== "True"),
          K = _s();
        O.current.has(b) &&
          (clearTimeout(O.current.get(b)), O.current.delete(b));
        const ke = async (W) => {
          try {
            await xt("/api/medmap/light_by_code_name_type", {
              method: "POST",
              body: {
                ValueAry: [
                  "ServerName=DS01",
                  "ServerType=藥庫",
                  `code=${b}`,
                  `color=${W}`,
                  `lightness=${K.brightness}`,
                ],
              },
            }),
              console.log(`Light signal sent: ${W}`);
          } catch (pe) {
            console.log("Light API error (non-blocking):", pe);
          }
        };
        try {
          if (I) {
            await ke(K.color);
            const Ae = setTimeout(() => {
              ke("0,0,0"), O.current.delete(b);
            }, K.duration * 1e3);
            O.current.set(b, Ae);
          } else await ke("0,0,0");
          let W;
          I
            ? (W = M.orders.filter((Ae) => Ae.state === "等待過帳"))
            : (W = M.orders);
          const pe = I ? "True" : "False",
            st = W.map((Ae) =>
              xt("/api/materialRequisition/update_notice", {
                method: "POST",
                body: { Data: { GUID: Ae.GUID, notice: pe } },
              })
            ),
            Nt = await Promise.all(st);
          console.log("Notice update responses:", Nt);
          const So = Nt.filter((Ae) => Ae.Code !== 200);
          if (So.length > 0) throw new Error(`${So.length} 筆訂單更新失敗`);
          const ap = new Set(W.map((Ae) => Ae.GUID)),
            up = e.map((Ae) => (ap.has(Ae.GUID) ? { ...Ae, notice: pe } : Ae));
          o(up);
        } catch (W) {
          console.error("Toggle notice error:", W),
            v(W instanceof Error ? W.message : "系統錯誤，請稍後再試");
        } finally {
          ve((W) => {
            const pe = new Set(W);
            return pe.delete(b), pe;
          });
        }
      },
      Ra = (b) => {
        if (
          (console.log("Checking revert for order:", {
            state: b.state,
            issuingPersonID: b.issuingPersonID,
            issueTime: b.issueTime,
          }),
          b.state === "已簽收")
        )
          return console.log("Cannot revert: already signed"), !1;
        if (b.state !== "已過帳")
          return console.log("Cannot revert: state is not 已過帳"), !1;
        const M = Qr();
        if ((console.log("User data:", M), !M || b.issuingPersonID !== M.ID))
          return (
            console.log("Cannot revert: user ID mismatch or no user data"), !1
          );
        if (!b.issueTime)
          return console.log("Cannot revert: no issue time"), !1;
        try {
          const L = new Date(b.issueTime),
            I = new Date(),
            K =
              L.getFullYear() === I.getFullYear() &&
              L.getMonth() === I.getMonth() &&
              L.getDate() === I.getDate();
          return (
            console.log("Date check:", { issueDate: L, today: I, isToday: K }),
            K
          );
        } catch (L) {
          return console.log("Cannot revert: date parsing error", L), !1;
        }
      },
      lp = (b) => {
        if (!Ra(b)) {
          v("無法還原此訂單");
          return;
        }
        V(b), R(!0);
      },
      ip = async () => {
        if (!F) return;
        R(!1), T(!0), v(null);
        const b = F;
        try {
          const M = {
              Data: [
                {
                  ...b,
                  issueTime: "0001-01-01 00:00:00.000000",
                  issuingPerson: "",
                  issuingPersonID: "",
                  state: "等待過帳",
                },
              ],
            },
            L = await xt("/api/materialRequisition/update_by_guid", {
              method: "POST",
              body: M,
            });
          if (L.Code === 200) V(null), r(t, n);
          else throw new Error(L.Result || "還原失敗");
        } catch (M) {
          v(M instanceof Error ? M.message : "系統錯誤，請稍後再試");
        } finally {
          T(!1);
        }
      },
      sp = (b) => {
        b.state === "等待過帳" && (u(b), v(null), m(!0));
      },
      Fa = (b) =>
        b.orders.some((M) => M.state === "等待過帳" && M.actualQuantity),
      za = (b) =>
        b.orders.some((M) => M.state === "等待過帳" && lt(M.actionType));
    return c.jsxs("div", {
      className: "space-y-6",
      children: [
        c.jsxs("div", {
          className: "space-y-6",
          children: [
            c.jsx(o0, { startDate: t, endDate: n, onDateChange: r }),
            c.jsxs("div", {
              className:
                "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6",
              children: [
                c.jsxs("div", {
                  className: "flex flex-col lg:flex-row lg:items-end gap-6",
                  children: [
                    c.jsx(l0, { value: k, onChange: it }),
                    c.jsx(i0, { value: f, onChange: h, availableTypes: Jl }),
                    c.jsxs("form", {
                      onSubmit: Ut,
                      className: "flex flex-col sm:flex-row gap-2",
                      children: [
                        c.jsx("select", {
                          value: j,
                          onChange: (b) => C(b.target.value),
                          className:
                            "w-48 sm:w-32 px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                          children: Vv.map((b) =>
                            c.jsx(
                              "option",
                              { value: b.value, children: s(b.labelKey) },
                              b.value
                            )
                          ),
                        }),
                        c.jsxs("div", {
                          className: "relative",
                          children: [
                            c.jsx("input", {
                              type: "text",
                              value: _,
                              onChange: (b) => B(b.target.value),
                              onKeyDown: Xl,
                              placeholder: s("search.placeholder"),
                              className:
                                "w-48 sm:w-48 pl-10 pr-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                            }),
                            c.jsx(Xg, {
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
                    c.jsx(c0, { onClick: xo, isLoading: A, disabled: l }),
                    k !== "已過帳" &&
                      c.jsx("button", {
                        onClick: np,
                        disabled: P || l,
                        className:
                          "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
                        children: s(
                          P ? "button.processing" : "button.bulkApprove"
                        ),
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
        g &&
          c.jsxs("div", {
            className:
              "p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 flex items-center gap-2",
            children: [
              c.jsx(Pa, { size: 20 }),
              c.jsx("span", { className: "text-sm", children: g }),
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
                  children: s("app.orders.loading"),
                }),
              ],
            })
          : Oe.length === 0
          ? c.jsx("div", {
              className: "text-center py-8 text-base text-gray-500",
              children: s("app.orders.empty"),
            })
          : c.jsx("div", {
              className: "space-y-8",
              children: Oe.map(([b, M]) =>
                c.jsxs(
                  "div",
                  {
                    className:
                      "w-full rounded-lg border border-gray-200 bg-gray-50 p-4",
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
                                children: M.drugName,
                              }),
                              c.jsx("div", {
                                className:
                                  "text-base font-mono text-gray-900 break-all",
                                children: M.drugCode,
                              }),
                            ],
                          }),
                          c.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              c.jsx("button", {
                                onClick: () => op(b, M),
                                disabled: je.has(b),
                                className: `px-4 py-2 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                                  M.orders.some((L) => L.notice !== "True")
                                    ? "bg-green-600 hover:bg-green-700 text-white"
                                    : "bg-orange-600 hover:bg-orange-700 text-white"
                                }`,
                                children: je.has(b)
                                  ? "處理中..."
                                  : M.orders.some((L) => L.notice !== "True")
                                  ? "通知"
                                  : "取消通知",
                              }),
                              k !== "已過帳" &&
                                c.jsx("button", {
                                  onClick: () => rp(b, M),
                                  disabled: !Fa(M) || ye.has(b),
                                  className: `px-4 py-2 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                                    !Fa(M) || ye.has(b)
                                      ? "bg-gray-600 hover:bg-gray-700 text-white"
                                      : za(M)
                                      ? "bg-red-600 hover:bg-red-700 text-white"
                                      : "bg-blue-600 hover:bg-blue-700 text-white"
                                  }`,
                                  children: ye.has(b)
                                    ? s("button.processing")
                                    : za(M)
                                    ? s("button.urgentApprove")
                                    : s("button.approve"),
                                }),
                            ],
                          }),
                        ],
                      }),
                      c.jsx("div", {
                        className: "space-y-2",
                        children: M.orders.map((L) => {
                          const I = L.state === "等待過帳",
                            K = I && !L.actualQuantity,
                            ke = lt(L.actionType);
                          return c.jsx(
                            "div",
                            {
                              className: `px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                                ke
                                  ? I
                                    ? "bg-red-50 border-red-300 shadow-md"
                                    : "bg-red-25 border-red-200"
                                  : I
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
                                                  "inline-block w-[8em] font-medium",
                                                children: [
                                                  s("table.requestingUnit"),
                                                  "(",
                                                  s("table.storage"),
                                                  ")：",
                                                ],
                                              }),
                                              c.jsxs("span", {
                                                className: "break-words",
                                                children: [
                                                  L.requestingUnit,
                                                  "(",
                                                  L.requestStoreInventory
                                                    ? L.requestStoreInventory
                                                    : "-",
                                                  ")",
                                                ],
                                              }),
                                            ],
                                          }),
                                          c.jsxs("div", {
                                            className:
                                              "text-base text-gray-900",
                                            children: [
                                              c.jsxs("span", {
                                                className:
                                                  "inline-block w-[8em] font-medium",
                                                children: [
                                                  s("table.issuingUnit"),
                                                  "(",
                                                  s("table.storage"),
                                                  ")：",
                                                ],
                                              }),
                                              c.jsxs("span", {
                                                className: "break-words",
                                                children: [
                                                  L.issuingUnit,
                                                  "(",
                                                  L.actualStoreInventory
                                                    ? L.actualStoreInventory
                                                    : "-",
                                                  ")",
                                                ],
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
                                                  "inline-block w-[8em] font-medium",
                                                children: [
                                                  s("table.requestingPerson"),
                                                  "/",
                                                  s("table.issuingPerson"),
                                                  "：",
                                                ],
                                              }),
                                              c.jsxs("span", {
                                                className: "break-words",
                                                children: [
                                                  L.requestingPerson,
                                                  "/",
                                                  L.issuingPerson || "-",
                                                ],
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
                                                  s("table.actionType"),
                                                  "：",
                                                ],
                                              }),
                                              c.jsx("span", {
                                                className: "break-words",
                                                children:
                                                  L.actionType === "一般申領"
                                                    ? s(
                                                        "filter.actionType.general"
                                                      )
                                                    : L.actionType ===
                                                      "緊急申領"
                                                    ? s(
                                                        "filter.actionType.urgent"
                                                      )
                                                    : L.actionType,
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
                                                  s("table.requestTime"),
                                                  "：",
                                                ],
                                              }),
                                              c.jsx("span", {
                                                className: "break-words",
                                                children: L.requestTime,
                                              }),
                                            ],
                                          }),
                                          c.jsxs("div", {
                                            className: `text-base text-gray-900 ${
                                              I ? "hidden" : ""
                                            }`,
                                            children: [
                                              c.jsxs("span", {
                                                className:
                                                  "inline-block w-[5em] font-medium",
                                                children: [
                                                  s("table.issueTime"),
                                                  "：",
                                                ],
                                              }),
                                              c.jsx("span", {
                                                className: "break-words",
                                                children: L.issueTime,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      c.jsxs("div", {
                                        className: `grid w-full grid-cols-2 sm:grid-cols-2 gap-1 lg:gap-x-8 ${
                                          I ? "hidden" : ""
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
                                                  s("table.receiptTime"),
                                                  "：",
                                                ],
                                              }),
                                              c.jsx("span", {
                                                className: "break-words",
                                                children: Et(L),
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
                                                  s("table.receiptStaff"),
                                                  "：",
                                                ],
                                              }),
                                              c.jsx("span", {
                                                className: "break-words",
                                                children: L.signedPerson || "-",
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
                                            children: s(
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
                                              L.state === "等待過帳"
                                                ? ke
                                                  ? "bg-red-100 text-red-800 border border-red-200"
                                                  : "bg-yellow-100 text-yellow-800"
                                                : L.state === "已過帳"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-gray-100 text-gray-800"
                                            }`,
                                            children:
                                              L.state === "等待過帳"
                                                ? s("filter.status.pending")
                                                : L.state === "已過帳"
                                                ? s("filter.status.completed")
                                                : L.state,
                                          }),
                                          I
                                            ? c.jsxs("button", {
                                                className:
                                                  "w-[240px] text-lg px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-200 flex justify-between items-center",
                                                onClick: () => I && sp(L),
                                                style: {
                                                  cursor: I
                                                    ? "pointer"
                                                    : "default",
                                                },
                                                children: [
                                                  s("modal.adjustActualQty"),
                                                  c.jsxs("span", {
                                                    children: [
                                                      L.actualQuantity || "-",
                                                      " / ",
                                                      L.requestedQuantity,
                                                      " ",
                                                      L.packageUnit,
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
                                                      L.actualQuantity || "-",
                                                      " / ",
                                                      L.requestedQuantity,
                                                      " ",
                                                      L.packageUnit,
                                                    ],
                                                  }),
                                                  Ra(L) &&
                                                    c.jsx("button", {
                                                      onClick: () => lp(L),
                                                      disabled: S,
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
                            L.GUID
                          );
                        }),
                      }),
                    ],
                  },
                  b
                )
              ),
            }),
        c.jsx(Qv, {
          isOpen: d,
          onClose: () => m(!1),
          selectedOrder: a,
          onConfirm: Rn,
          isProcessing: w,
        }),
        c.jsx(Bv, {
          isOpen: $,
          onClose: () => {
            R(!1), V(null);
          },
          onConfirm: ip,
          title: "確認取消核撥",
          message: F ? `確定要取消核撥 "${F.name}" 嗎？` : "",
          confirmText: "確認取消",
          cancelText: "返回",
          isDestructive: !0,
        }),
      ],
    });
  },
  qv = ({
    onLogin: e,
    className: t = "",
    title: n = "申領核撥系統",
    logo: r,
  }) => {
    const [o, l] = y.useState(""),
      [i, s] = y.useState(""),
      [a, u] = y.useState(null),
      [d, m] = y.useState(!1),
      g = async (v) => {
        v.preventDefault(), u(null), m(!0);
        try {
          const w = await xt("/api/session/login", {
            method: "POST",
            body: { Data: { ID: o, Password: i } },
          });
          if (w.Code === 200) {
            if (!s0(w.Data)) {
              u("無撥補建單權限，無法登入");
              return;
            }
            e();
          } else u(w.Result || "登入失敗，請檢查帳號密碼是否正確");
        } catch (w) {
          console.error("Login error:", w),
            u(w instanceof Error ? w.message : "系統錯誤，請稍後再試");
        } finally {
          m(!1);
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
                c.jsx(Pa, { size: 20 }),
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
                    onChange: (v) => l(v.target.value),
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
                    onChange: (v) => s(v.target.value),
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
  Gv = () => {
    const { language: e, toggleLanguage: t } = qe();
    return c.jsxs("button", {
      onClick: t,
      className:
        "inline-flex items-center px-2 sm:px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      title: e === "zh" ? "繁體中文" : "English",
      children: [
        c.jsx(qg, { className: "h-4 w-4" }),
        c.jsx("span", {
          className: "ml-2 hidden sm:inline",
          children: e === "zh" ? "繁體中文" : "English",
        }),
      ],
    });
  },
  Kv = ({ title: e }) =>
    c.jsx("h1", {
      className: "text-2xl md:text-3xl font-semibold text-gray-800",
      children: e,
    }),
  Xv = () => {
    const e = Qr();
    return e
      ? c.jsxs("p", {
          className: "text-sm text-gray-600",
          children: [e.Name, " - ", e.Employer],
        })
      : null;
  },
  Jv = ({ onLogout: e }) => {
    const { t } = qe();
    return c.jsxs("button", {
      onClick: e,
      className:
        "inline-flex items-center px-2 sm:px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      title: t("button.logout"),
      children: [
        c.jsx(Kg, { className: "h-4 w-4" }),
        c.jsx("span", {
          className: "ml-2 hidden sm:inline",
          children: t("button.logout"),
        }),
      ],
    });
  },
  Zv = () => {
    const { t: e } = qe(),
      t = () => {
        const n = t0();
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
        c.jsx(Gg, { size: 24 }),
        c.jsx("span", {
          className:
            "absolute left-1/2 -translate-x-1/2 -bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
          children: e("platform.title"),
        }),
      ],
    });
  },
  e1 = ({ onLogout: e }) => {
    const { t } = qe();
    return c.jsx("header", {
      className: "bg-white",
      children: c.jsx("div", {
        className: "w-full p-4",
        children: c.jsxs("div", {
          className: "flex justify-between items-center py-6",
          children: [
            c.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                c.jsx(Zv, {}),
                c.jsxs("div", {
                  className: "flex flex-col",
                  children: [
                    c.jsx(Kv, { title: t("app.title") }),
                    c.jsx(Xv, {}),
                  ],
                }),
              ],
            }),
            c.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                c.jsx(Wv, {}),
                c.jsx(Gv, {}),
                c.jsx(Jv, { onLogout: e }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  t1 = ({ className: e = "" }) => {
    const { t } = qe();
    return c.jsx("footer", {
      className: `fixed bottom-0 left-0 w-full bg-white py-2 shadow-inner border-t border-gray-200 z-50 ${e}`,
      children: c.jsx("div", {
        className: "w-full p-4",
        children: c.jsx("p", {
          className: "text-center text-sm text-gray-600",
          children: t("footer.copyright"),
        }),
      }),
    });
  };
function n1() {
  qe();
  const [e, t] = y.useState(!1),
    [n, r] = y.useState(!0),
    [o, l] = y.useState(null),
    [i, s] = y.useState(!1),
    [a, u] = y.useState([]),
    [d, m] = y.useState({}),
    [g, v] = y.useState(() => {
      const E = new Date();
      return E.setHours(0, 0, 0, 0), E;
    }),
    [w, x] = y.useState(() => {
      const E = new Date();
      return E.setHours(23, 59, 59, 999), E;
    }),
    [k, p] = y.useState(!1);
  y.useEffect(() => {
    (async () => {
      try {
        await e0(), s(!0);
        const j = a0();
        t(j);
      } catch (j) {
        console.error("Error during initialization:", j),
          l("系統初始化失敗，請重新整理頁面");
      } finally {
        r(!1);
      }
    })();
  }, []),
    y.useEffect(() => {
      e && i && (h(), f());
    }, [e, i]);
  const f = async () => {
      try {
        const E = await xt("/api/med_page/get_med_cloud", {
          method: "POST",
          body: {},
        });
        if (E.Data && Array.isArray(E.Data)) {
          const j = {};
          E.Data.forEach((C) => {
            j[C.CODE] = C.TYPE;
          }),
            m(j);
        }
      } catch (E) {
        console.error("Error fetching med cloud:", E);
      }
    },
    h = async (E, j) => {
      const C = E || g,
        _ = j || w;
      p(!0);
      try {
        console.log("Fetching orders with dates:", {
          startDate: C,
          endDate: _,
          startFormatted: G(C, "yyyy-MM-dd HH:mm:ss"),
          endFormatted: G(_, "yyyy-MM-dd HH:mm:ss"),
        });
        const B = await xt("/api/materialRequisition/get_by_requestTime", {
          method: "POST",
          body: {
            ValueAry: [
              G(C, "yyyy-MM-dd HH:mm:ss"),
              G(_, "yyyy-MM-dd HH:mm:ss"),
            ],
          },
        });
        u(B.Data), l(null);
      } catch (B) {
        console.error("Error fetching orders:", B),
          l("無法取得申領單資料，請稍後再試"),
          u([]);
      } finally {
        p(!1);
      }
    },
    S = (E, j) => {
      v(E), x(j), h(E, j);
    },
    T = (E) => {
      u(E);
    },
    P = () => {
      Nl(), t(!1);
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
          c.jsx(e1, { onLogout: P }),
          c.jsx("main", {
            className: "flex-grow flex flex-col bg-white pb-12",
            children: c.jsx("div", {
              className: "w-full p-4 pb-8",
              children: c.jsx(Yv, {
                orders: a,
                startDate: g,
                endDate: w,
                onDateChange: S,
                onOrdersUpdate: T,
                isLoading: k,
                medTypeMap: d,
              }),
            }),
          }),
          c.jsx(t1, {}),
        ],
      })
    : c.jsx(qv, { onLogin: () => t(!0) });
}
Sf(document.getElementById("root")).render(
  c.jsx(y.StrictMode, { children: c.jsx(r0, { children: c.jsx(n1, {}) }) })
);
