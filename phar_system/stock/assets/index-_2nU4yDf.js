(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const s of l)
      if (s.type === "childList")
        for (const a of s.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
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
function Wc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var bi = { exports: {} },
  Tl = {},
  Pi = { exports: {} },
  K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kr = Symbol.for("react.element"),
  Gc = Symbol.for("react.portal"),
  qc = Symbol.for("react.fragment"),
  Yc = Symbol.for("react.strict_mode"),
  Kc = Symbol.for("react.profiler"),
  Xc = Symbol.for("react.provider"),
  Zc = Symbol.for("react.context"),
  Jc = Symbol.for("react.forward_ref"),
  ed = Symbol.for("react.suspense"),
  td = Symbol.for("react.memo"),
  nd = Symbol.for("react.lazy"),
  ya = Symbol.iterator;
function rd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ya && e[ya]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Di = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ti = Object.assign,
  zi = {};
function Mn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zi),
    (this.updater = n || Di);
}
Mn.prototype.isReactComponent = {};
Mn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Mn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Mi() {}
Mi.prototype = Mn.prototype;
function yo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zi),
    (this.updater = n || Di);
}
var go = (yo.prototype = new Mi());
go.constructor = yo;
Ti(go, Mn.prototype);
go.isPureReactComponent = !0;
var ga = Array.isArray,
  Li = Object.prototype.hasOwnProperty,
  vo = { current: null },
  Ii = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ui(e, t, n) {
  var r,
    l = {},
    s = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Li.call(t, r) && !Ii.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var i = Array(u), f = 0; f < u; f++) i[f] = arguments[f + 2];
    l.children = i;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: kr,
    type: e,
    key: s,
    ref: a,
    props: l,
    _owner: vo.current,
  };
}
function ld(e, t) {
  return {
    $$typeof: kr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function wo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === kr;
}
function sd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var va = /\/+/g;
function Xl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? sd("" + e.key)
    : t.toString(36);
}
function qr(e, t, n, r, l) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (s) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case kr:
          case Gc:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (l = l(a)),
      (e = r === "" ? "." + Xl(a, 0) : r),
      ga(l)
        ? ((n = ""),
          e != null && (n = e.replace(va, "$&/") + "/"),
          qr(l, t, n, "", function (f) {
            return f;
          }))
        : l != null &&
          (wo(l) &&
            (l = ld(
              l,
              n +
                (!l.key || (a && a.key === l.key)
                  ? ""
                  : ("" + l.key).replace(va, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), ga(e)))
    for (var u = 0; u < e.length; u++) {
      s = e[u];
      var i = r + Xl(s, u);
      a += qr(s, t, n, i, l);
    }
  else if (((i = rd(e)), typeof i == "function"))
    for (e = i.call(e), u = 0; !(s = e.next()).done; )
      (s = s.value), (i = r + Xl(s, u++)), (a += qr(s, t, n, i, l));
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
  return a;
}
function Tr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    qr(e, r, "", "", function (s) {
      return t.call(n, s, l++);
    }),
    r
  );
}
function od(e) {
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
var De = { current: null },
  Yr = { transition: null },
  ad = {
    ReactCurrentDispatcher: De,
    ReactCurrentBatchConfig: Yr,
    ReactCurrentOwner: vo,
  };
function Ri() {
  throw Error("act(...) is not supported in production builds of React.");
}
K.Children = {
  map: Tr,
  forEach: function (e, t, n) {
    Tr(
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
      Tr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Tr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!wo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
K.Component = Mn;
K.Fragment = qc;
K.Profiler = Kc;
K.PureComponent = yo;
K.StrictMode = Yc;
K.Suspense = ed;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ad;
K.act = Ri;
K.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ti({}, e.props),
    l = e.key,
    s = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (a = vo.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (i in t)
      Li.call(t, i) &&
        !Ii.hasOwnProperty(i) &&
        (r[i] = t[i] === void 0 && u !== void 0 ? u[i] : t[i]);
  }
  var i = arguments.length - 2;
  if (i === 1) r.children = n;
  else if (1 < i) {
    u = Array(i);
    for (var f = 0; f < i; f++) u[f] = arguments[f + 2];
    r.children = u;
  }
  return { $$typeof: kr, type: e.type, key: l, ref: s, props: r, _owner: a };
};
K.createContext = function (e) {
  return (
    (e = {
      $$typeof: Zc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Xc, _context: e }),
    (e.Consumer = e)
  );
};
K.createElement = Ui;
K.createFactory = function (e) {
  var t = Ui.bind(null, e);
  return (t.type = e), t;
};
K.createRef = function () {
  return { current: null };
};
K.forwardRef = function (e) {
  return { $$typeof: Jc, render: e };
};
K.isValidElement = wo;
K.lazy = function (e) {
  return { $$typeof: nd, _payload: { _status: -1, _result: e }, _init: od };
};
K.memo = function (e, t) {
  return { $$typeof: td, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function (e) {
  var t = Yr.transition;
  Yr.transition = {};
  try {
    e();
  } finally {
    Yr.transition = t;
  }
};
K.unstable_act = Ri;
K.useCallback = function (e, t) {
  return De.current.useCallback(e, t);
};
K.useContext = function (e) {
  return De.current.useContext(e);
};
K.useDebugValue = function () {};
K.useDeferredValue = function (e) {
  return De.current.useDeferredValue(e);
};
K.useEffect = function (e, t) {
  return De.current.useEffect(e, t);
};
K.useId = function () {
  return De.current.useId();
};
K.useImperativeHandle = function (e, t, n) {
  return De.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function (e, t) {
  return De.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function (e, t) {
  return De.current.useLayoutEffect(e, t);
};
K.useMemo = function (e, t) {
  return De.current.useMemo(e, t);
};
K.useReducer = function (e, t, n) {
  return De.current.useReducer(e, t, n);
};
K.useRef = function (e) {
  return De.current.useRef(e);
};
K.useState = function (e) {
  return De.current.useState(e);
};
K.useSyncExternalStore = function (e, t, n) {
  return De.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function () {
  return De.current.useTransition();
};
K.version = "18.3.1";
Pi.exports = K;
var N = Pi.exports;
const $i = Wc(N);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var id = N,
  ud = Symbol.for("react.element"),
  cd = Symbol.for("react.fragment"),
  dd = Object.prototype.hasOwnProperty,
  fd = id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  pd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fi(e, t, n) {
  var r,
    l = {},
    s = null,
    a = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) dd.call(t, r) && !pd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: ud,
    type: e,
    key: s,
    ref: a,
    props: l,
    _owner: fd.current,
  };
}
Tl.Fragment = cd;
Tl.jsx = Fi;
Tl.jsxs = Fi;
bi.exports = Tl;
var o = bi.exports,
  Oi = { exports: {} },
  Ae = {},
  Qi = { exports: {} },
  Ai = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(d, m) {
    var g = d.length;
    d.push(m);
    e: for (; 0 < g; ) {
      var S = (g - 1) >>> 1,
        C = d[S];
      if (0 < l(C, m)) (d[S] = m), (d[g] = C), (g = S);
      else break e;
    }
  }
  function n(d) {
    return d.length === 0 ? null : d[0];
  }
  function r(d) {
    if (d.length === 0) return null;
    var m = d[0],
      g = d.pop();
    if (g !== m) {
      d[0] = g;
      e: for (var S = 0, C = d.length, c = C >>> 1; S < c; ) {
        var w = 2 * (S + 1) - 1,
          b = d[w],
          z = w + 1,
          Q = d[z];
        if (0 > l(b, g))
          z < C && 0 > l(Q, b)
            ? ((d[S] = Q), (d[z] = g), (S = z))
            : ((d[S] = b), (d[w] = g), (S = w));
        else if (z < C && 0 > l(Q, g)) (d[S] = Q), (d[z] = g), (S = z);
        else break e;
      }
    }
    return m;
  }
  function l(d, m) {
    var g = d.sortIndex - m.sortIndex;
    return g !== 0 ? g : d.id - m.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var a = Date,
      u = a.now();
    e.unstable_now = function () {
      return a.now() - u;
    };
  }
  var i = [],
    f = [],
    j = 1,
    v = null,
    x = 3,
    _ = !1,
    k = !1,
    D = !1,
    V = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(d) {
    for (var m = n(f); m !== null; ) {
      if (m.callback === null) r(f);
      else if (m.startTime <= d)
        r(f), (m.sortIndex = m.expirationTime), t(i, m);
      else break;
      m = n(f);
    }
  }
  function E(d) {
    if (((D = !1), y(d), !k))
      if (n(i) !== null) (k = !0), Y(I);
      else {
        var m = n(f);
        m !== null && J(E, m.startTime - d);
      }
  }
  function I(d, m) {
    (k = !1), D && ((D = !1), h(R), (R = -1)), (_ = !0);
    var g = x;
    try {
      for (
        y(m), v = n(i);
        v !== null && (!(v.expirationTime > m) || (d && !B()));

      ) {
        var S = v.callback;
        if (typeof S == "function") {
          (v.callback = null), (x = v.priorityLevel);
          var C = S(v.expirationTime <= m);
          (m = e.unstable_now()),
            typeof C == "function" ? (v.callback = C) : v === n(i) && r(i),
            y(m);
        } else r(i);
        v = n(i);
      }
      if (v !== null) var c = !0;
      else {
        var w = n(f);
        w !== null && J(E, w.startTime - m), (c = !1);
      }
      return c;
    } finally {
      (v = null), (x = g), (_ = !1);
    }
  }
  var P = !1,
    U = null,
    R = -1,
    q = 5,
    T = -1;
  function B() {
    return !(e.unstable_now() - T < q);
  }
  function A() {
    if (U !== null) {
      var d = e.unstable_now();
      T = d;
      var m = !0;
      try {
        m = U(!0, d);
      } finally {
        m ? L() : ((P = !1), (U = null));
      }
    } else P = !1;
  }
  var L;
  if (typeof p == "function")
    L = function () {
      p(A);
    };
  else if (typeof MessageChannel < "u") {
    var H = new MessageChannel(),
      G = H.port2;
    (H.port1.onmessage = A),
      (L = function () {
        G.postMessage(null);
      });
  } else
    L = function () {
      V(A, 0);
    };
  function Y(d) {
    (U = d), P || ((P = !0), L());
  }
  function J(d, m) {
    R = V(function () {
      d(e.unstable_now());
    }, m);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (d) {
      d.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      k || _ || ((k = !0), Y(I));
    }),
    (e.unstable_forceFrameRate = function (d) {
      0 > d || 125 < d
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (q = 0 < d ? Math.floor(1e3 / d) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return x;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(i);
    }),
    (e.unstable_next = function (d) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var m = 3;
          break;
        default:
          m = x;
      }
      var g = x;
      x = m;
      try {
        return d();
      } finally {
        x = g;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (d, m) {
      switch (d) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          d = 3;
      }
      var g = x;
      x = d;
      try {
        return m();
      } finally {
        x = g;
      }
    }),
    (e.unstable_scheduleCallback = function (d, m, g) {
      var S = e.unstable_now();
      switch (
        (typeof g == "object" && g !== null
          ? ((g = g.delay), (g = typeof g == "number" && 0 < g ? S + g : S))
          : (g = S),
        d)
      ) {
        case 1:
          var C = -1;
          break;
        case 2:
          C = 250;
          break;
        case 5:
          C = 1073741823;
          break;
        case 4:
          C = 1e4;
          break;
        default:
          C = 5e3;
      }
      return (
        (C = g + C),
        (d = {
          id: j++,
          callback: m,
          priorityLevel: d,
          startTime: g,
          expirationTime: C,
          sortIndex: -1,
        }),
        g > S
          ? ((d.sortIndex = g),
            t(f, d),
            n(i) === null &&
              d === n(f) &&
              (D ? (h(R), (R = -1)) : (D = !0), J(E, g - S)))
          : ((d.sortIndex = C), t(i, d), k || _ || ((k = !0), Y(I))),
        d
      );
    }),
    (e.unstable_shouldYield = B),
    (e.unstable_wrapCallback = function (d) {
      var m = x;
      return function () {
        var g = x;
        x = m;
        try {
          return d.apply(this, arguments);
        } finally {
          x = g;
        }
      };
    });
})(Ai);
Qi.exports = Ai;
var md = Qi.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hd = N,
  Qe = md;
function M(e) {
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
var Vi = new Set(),
  or = {};
function nn(e, t) {
  Cn(e, t), Cn(e + "Capture", t);
}
function Cn(e, t) {
  for (or[e] = t, e = 0; e < t.length; e++) Vi.add(t[e]);
}
var mt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ns = Object.prototype.hasOwnProperty,
  xd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  wa = {},
  Sa = {};
function yd(e) {
  return Ns.call(Sa, e)
    ? !0
    : Ns.call(wa, e)
    ? !1
    : xd.test(e)
    ? (Sa[e] = !0)
    : ((wa[e] = !0), !1);
}
function gd(e, t, n, r) {
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
function vd(e, t, n, r) {
  if (t === null || typeof t > "u" || gd(e, t, n, r)) return !0;
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
function Te(e, t, n, r, l, s, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = a);
}
var Se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Se[e] = new Te(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Se[t] = new Te(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Se[e] = new Te(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Se[e] = new Te(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Se[e] = new Te(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Se[e] = new Te(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Se[e] = new Te(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Se[e] = new Te(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Se[e] = new Te(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var So = /[\-:]([a-z])/g;
function jo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(So, jo);
    Se[t] = new Te(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(So, jo);
    Se[t] = new Te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(So, jo);
  Se[t] = new Te(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Se[e] = new Te(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Se.xlinkHref = new Te(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Se[e] = new Te(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function No(e, t, n, r) {
  var l = Se.hasOwnProperty(t) ? Se[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (vd(t, n, l, r) && (n = null),
    r || l === null
      ? yd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var gt = hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  zr = Symbol.for("react.element"),
  on = Symbol.for("react.portal"),
  an = Symbol.for("react.fragment"),
  ko = Symbol.for("react.strict_mode"),
  ks = Symbol.for("react.profiler"),
  Bi = Symbol.for("react.provider"),
  Hi = Symbol.for("react.context"),
  Co = Symbol.for("react.forward_ref"),
  Cs = Symbol.for("react.suspense"),
  _s = Symbol.for("react.suspense_list"),
  _o = Symbol.for("react.memo"),
  St = Symbol.for("react.lazy"),
  Wi = Symbol.for("react.offscreen"),
  ja = Symbol.iterator;
function Fn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ja && e[ja]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ie = Object.assign,
  Zl;
function Gn(e) {
  if (Zl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Zl = (t && t[1]) || "";
    }
  return (
    `
` +
    Zl +
    e
  );
}
var Jl = !1;
function es(e, t) {
  if (!e || Jl) return "";
  Jl = !0;
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
        } catch (f) {
          var r = f;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (f) {
          r = f;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (
        var l = f.stack.split(`
`),
          s = r.stack.split(`
`),
          a = l.length - 1,
          u = s.length - 1;
        1 <= a && 0 <= u && l[a] !== s[u];

      )
        u--;
      for (; 1 <= a && 0 <= u; a--, u--)
        if (l[a] !== s[u]) {
          if (a !== 1 || u !== 1)
            do
              if ((a--, u--, 0 > u || l[a] !== s[u])) {
                var i =
                  `
` + l[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    i.includes("<anonymous>") &&
                    (i = i.replace("<anonymous>", e.displayName)),
                  i
                );
              }
            while (1 <= a && 0 <= u);
          break;
        }
    }
  } finally {
    (Jl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Gn(e) : "";
}
function wd(e) {
  switch (e.tag) {
    case 5:
      return Gn(e.type);
    case 16:
      return Gn("Lazy");
    case 13:
      return Gn("Suspense");
    case 19:
      return Gn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = es(e.type, !1)), e;
    case 11:
      return (e = es(e.type.render, !1)), e;
    case 1:
      return (e = es(e.type, !0)), e;
    default:
      return "";
  }
}
function Es(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case an:
      return "Fragment";
    case on:
      return "Portal";
    case ks:
      return "Profiler";
    case ko:
      return "StrictMode";
    case Cs:
      return "Suspense";
    case _s:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Hi:
        return (e.displayName || "Context") + ".Consumer";
      case Bi:
        return (e._context.displayName || "Context") + ".Provider";
      case Co:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case _o:
        return (
          (t = e.displayName || null), t !== null ? t : Es(e.type) || "Memo"
        );
      case St:
        (t = e._payload), (e = e._init);
        try {
          return Es(e(t));
        } catch {}
    }
  return null;
}
function Sd(e) {
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
      return Es(t);
    case 8:
      return t === ko ? "StrictMode" : "Mode";
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
function It(e) {
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
function Gi(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function jd(e) {
  var t = Gi(e) ? "checked" : "value",
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
        set: function (a) {
          (r = "" + a), s.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Mr(e) {
  e._valueTracker || (e._valueTracker = jd(e));
}
function qi(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Gi(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ol(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function bs(e, t) {
  var n = t.checked;
  return ie({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Na(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = It(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Yi(e, t) {
  (t = t.checked), t != null && No(e, "checked", t, !1);
}
function Ps(e, t) {
  Yi(e, t);
  var n = It(t.value),
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
    ? Ds(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ds(e, t.type, It(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ka(e, t, n) {
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
function Ds(e, t, n) {
  (t !== "number" || ol(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var qn = Array.isArray;
function vn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + It(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ts(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
  return ie({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ca(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(M(92));
      if (qn(n)) {
        if (1 < n.length) throw Error(M(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: It(n) };
}
function Ki(e, t) {
  var n = It(t.value),
    r = It(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function _a(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Xi(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function zs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Xi(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Lr,
  Zi = (function (e) {
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
        Lr = Lr || document.createElement("div"),
          Lr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Lr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ar(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Xn = {
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
  Nd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Xn).forEach(function (e) {
  Nd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Xn[t] = Xn[e]);
  });
});
function Ji(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Xn.hasOwnProperty(e) && Xn[e])
    ? ("" + t).trim()
    : t + "px";
}
function eu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Ji(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var kd = ie(
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
function Ms(e, t) {
  if (t) {
    if (kd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(M(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(M(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(M(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(M(62));
  }
}
function Ls(e, t) {
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
var Is = null;
function Eo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Us = null,
  wn = null,
  Sn = null;
function Ea(e) {
  if ((e = Er(e))) {
    if (typeof Us != "function") throw Error(M(280));
    var t = e.stateNode;
    t && ((t = Ul(t)), Us(e.stateNode, e.type, t));
  }
}
function tu(e) {
  wn ? (Sn ? Sn.push(e) : (Sn = [e])) : (wn = e);
}
function nu() {
  if (wn) {
    var e = wn,
      t = Sn;
    if (((Sn = wn = null), Ea(e), t)) for (e = 0; e < t.length; e++) Ea(t[e]);
  }
}
function ru(e, t) {
  return e(t);
}
function lu() {}
var ts = !1;
function su(e, t, n) {
  if (ts) return e(t, n);
  ts = !0;
  try {
    return ru(e, t, n);
  } finally {
    (ts = !1), (wn !== null || Sn !== null) && (lu(), nu());
  }
}
function ir(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ul(n);
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
  if (n && typeof n != "function") throw Error(M(231, t, typeof n));
  return n;
}
var Rs = !1;
if (mt)
  try {
    var On = {};
    Object.defineProperty(On, "passive", {
      get: function () {
        Rs = !0;
      },
    }),
      window.addEventListener("test", On, On),
      window.removeEventListener("test", On, On);
  } catch {
    Rs = !1;
  }
function Cd(e, t, n, r, l, s, a, u, i) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (j) {
    this.onError(j);
  }
}
var Zn = !1,
  al = null,
  il = !1,
  $s = null,
  _d = {
    onError: function (e) {
      (Zn = !0), (al = e);
    },
  };
function Ed(e, t, n, r, l, s, a, u, i) {
  (Zn = !1), (al = null), Cd.apply(_d, arguments);
}
function bd(e, t, n, r, l, s, a, u, i) {
  if ((Ed.apply(this, arguments), Zn)) {
    if (Zn) {
      var f = al;
      (Zn = !1), (al = null);
    } else throw Error(M(198));
    il || ((il = !0), ($s = f));
  }
}
function rn(e) {
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
function ou(e) {
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
function ba(e) {
  if (rn(e) !== e) throw Error(M(188));
}
function Pd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = rn(e)), t === null)) throw Error(M(188));
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
        if (s === n) return ba(l), e;
        if (s === r) return ba(l), t;
        s = s.sibling;
      }
      throw Error(M(188));
    }
    if (n.return !== r.return) (n = l), (r = s);
    else {
      for (var a = !1, u = l.child; u; ) {
        if (u === n) {
          (a = !0), (n = l), (r = s);
          break;
        }
        if (u === r) {
          (a = !0), (r = l), (n = s);
          break;
        }
        u = u.sibling;
      }
      if (!a) {
        for (u = s.child; u; ) {
          if (u === n) {
            (a = !0), (n = s), (r = l);
            break;
          }
          if (u === r) {
            (a = !0), (r = s), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!a) throw Error(M(189));
      }
    }
    if (n.alternate !== r) throw Error(M(190));
  }
  if (n.tag !== 3) throw Error(M(188));
  return n.stateNode.current === n ? e : t;
}
function au(e) {
  return (e = Pd(e)), e !== null ? iu(e) : null;
}
function iu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = iu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var uu = Qe.unstable_scheduleCallback,
  Pa = Qe.unstable_cancelCallback,
  Dd = Qe.unstable_shouldYield,
  Td = Qe.unstable_requestPaint,
  de = Qe.unstable_now,
  zd = Qe.unstable_getCurrentPriorityLevel,
  bo = Qe.unstable_ImmediatePriority,
  cu = Qe.unstable_UserBlockingPriority,
  ul = Qe.unstable_NormalPriority,
  Md = Qe.unstable_LowPriority,
  du = Qe.unstable_IdlePriority,
  zl = null,
  at = null;
function Ld(e) {
  if (at && typeof at.onCommitFiberRoot == "function")
    try {
      at.onCommitFiberRoot(zl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var tt = Math.clz32 ? Math.clz32 : Rd,
  Id = Math.log,
  Ud = Math.LN2;
function Rd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Id(e) / Ud) | 0)) | 0;
}
var Ir = 64,
  Ur = 4194304;
function Yn(e) {
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
function cl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    s = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var u = a & ~l;
    u !== 0 ? (r = Yn(u)) : ((s &= a), s !== 0 && (r = Yn(s)));
  } else (a = n & ~l), a !== 0 ? (r = Yn(a)) : s !== 0 && (r = Yn(s));
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
      (n = 31 - tt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function $d(e, t) {
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
function Fd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var a = 31 - tt(s),
      u = 1 << a,
      i = l[a];
    i === -1
      ? (!(u & n) || u & r) && (l[a] = $d(u, t))
      : i <= t && (e.expiredLanes |= u),
      (s &= ~u);
  }
}
function Fs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function fu() {
  var e = Ir;
  return (Ir <<= 1), !(Ir & 4194240) && (Ir = 64), e;
}
function ns(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Cr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - tt(t)),
    (e[t] = n);
}
function Od(e, t) {
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
    var l = 31 - tt(n),
      s = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~s);
  }
}
function Po(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - tt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var ee = 0;
function pu(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var mu,
  Do,
  hu,
  xu,
  yu,
  Os = !1,
  Rr = [],
  Et = null,
  bt = null,
  Pt = null,
  ur = new Map(),
  cr = new Map(),
  Nt = [],
  Qd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Da(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Et = null;
      break;
    case "dragenter":
    case "dragleave":
      bt = null;
      break;
    case "mouseover":
    case "mouseout":
      Pt = null;
      break;
    case "pointerover":
    case "pointerout":
      ur.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      cr.delete(t.pointerId);
  }
}
function Qn(e, t, n, r, l, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [l],
      }),
      t !== null && ((t = Er(t)), t !== null && Do(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Ad(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Et = Qn(Et, e, t, n, r, l)), !0;
    case "dragenter":
      return (bt = Qn(bt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Pt = Qn(Pt, e, t, n, r, l)), !0;
    case "pointerover":
      var s = l.pointerId;
      return ur.set(s, Qn(ur.get(s) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (s = l.pointerId), cr.set(s, Qn(cr.get(s) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function gu(e) {
  var t = Ht(e.target);
  if (t !== null) {
    var n = rn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ou(n)), t !== null)) {
          (e.blockedOn = t),
            yu(e.priority, function () {
              hu(n);
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
function Kr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Qs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Is = r), n.target.dispatchEvent(r), (Is = null);
    } else return (t = Er(n)), t !== null && Do(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ta(e, t, n) {
  Kr(e) && n.delete(t);
}
function Vd() {
  (Os = !1),
    Et !== null && Kr(Et) && (Et = null),
    bt !== null && Kr(bt) && (bt = null),
    Pt !== null && Kr(Pt) && (Pt = null),
    ur.forEach(Ta),
    cr.forEach(Ta);
}
function An(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Os ||
      ((Os = !0),
      Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority, Vd)));
}
function dr(e) {
  function t(l) {
    return An(l, e);
  }
  if (0 < Rr.length) {
    An(Rr[0], e);
    for (var n = 1; n < Rr.length; n++) {
      var r = Rr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Et !== null && An(Et, e),
      bt !== null && An(bt, e),
      Pt !== null && An(Pt, e),
      ur.forEach(t),
      cr.forEach(t),
      n = 0;
    n < Nt.length;
    n++
  )
    (r = Nt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Nt.length && ((n = Nt[0]), n.blockedOn === null); )
    gu(n), n.blockedOn === null && Nt.shift();
}
var jn = gt.ReactCurrentBatchConfig,
  dl = !0;
function Bd(e, t, n, r) {
  var l = ee,
    s = jn.transition;
  jn.transition = null;
  try {
    (ee = 1), To(e, t, n, r);
  } finally {
    (ee = l), (jn.transition = s);
  }
}
function Hd(e, t, n, r) {
  var l = ee,
    s = jn.transition;
  jn.transition = null;
  try {
    (ee = 4), To(e, t, n, r);
  } finally {
    (ee = l), (jn.transition = s);
  }
}
function To(e, t, n, r) {
  if (dl) {
    var l = Qs(e, t, n, r);
    if (l === null) fs(e, t, r, fl, n), Da(e, r);
    else if (Ad(l, e, t, n, r)) r.stopPropagation();
    else if ((Da(e, r), t & 4 && -1 < Qd.indexOf(e))) {
      for (; l !== null; ) {
        var s = Er(l);
        if (
          (s !== null && mu(s),
          (s = Qs(e, t, n, r)),
          s === null && fs(e, t, r, fl, n),
          s === l)
        )
          break;
        l = s;
      }
      l !== null && r.stopPropagation();
    } else fs(e, t, r, null, n);
  }
}
var fl = null;
function Qs(e, t, n, r) {
  if (((fl = null), (e = Eo(r)), (e = Ht(e)), e !== null))
    if (((t = rn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ou(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (fl = e), null;
}
function vu(e) {
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
      switch (zd()) {
        case bo:
          return 1;
        case cu:
          return 4;
        case ul:
        case Md:
          return 16;
        case du:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ct = null,
  zo = null,
  Xr = null;
function wu() {
  if (Xr) return Xr;
  var e,
    t = zo,
    n = t.length,
    r,
    l = "value" in Ct ? Ct.value : Ct.textContent,
    s = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === l[s - r]; r++);
  return (Xr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Zr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function $r() {
  return !0;
}
function za() {
  return !1;
}
function Ve(e) {
  function t(n, r, l, s, a) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = a),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(s) : s[u]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? $r
        : za),
      (this.isPropagationStopped = za),
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
          (this.isDefaultPrevented = $r));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = $r));
      },
      persist: function () {},
      isPersistent: $r,
    }),
    t
  );
}
var Ln = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Mo = Ve(Ln),
  _r = ie({}, Ln, { view: 0, detail: 0 }),
  Wd = Ve(_r),
  rs,
  ls,
  Vn,
  Ml = ie({}, _r, {
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
    getModifierState: Lo,
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
        : (e !== Vn &&
            (Vn && e.type === "mousemove"
              ? ((rs = e.screenX - Vn.screenX), (ls = e.screenY - Vn.screenY))
              : (ls = rs = 0),
            (Vn = e)),
          rs);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ls;
    },
  }),
  Ma = Ve(Ml),
  Gd = ie({}, Ml, { dataTransfer: 0 }),
  qd = Ve(Gd),
  Yd = ie({}, _r, { relatedTarget: 0 }),
  ss = Ve(Yd),
  Kd = ie({}, Ln, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Xd = Ve(Kd),
  Zd = ie({}, Ln, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Jd = Ve(Zd),
  ef = ie({}, Ln, { data: 0 }),
  La = Ve(ef),
  tf = {
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
  nf = {
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
  rf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function lf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = rf[e]) ? !!t[e] : !1;
}
function Lo() {
  return lf;
}
var sf = ie({}, _r, {
    key: function (e) {
      if (e.key) {
        var t = tf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Zr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? nf[e.keyCode] || "Unidentified"
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
    getModifierState: Lo,
    charCode: function (e) {
      return e.type === "keypress" ? Zr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Zr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  of = Ve(sf),
  af = ie({}, Ml, {
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
  Ia = Ve(af),
  uf = ie({}, _r, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Lo,
  }),
  cf = Ve(uf),
  df = ie({}, Ln, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ff = Ve(df),
  pf = ie({}, Ml, {
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
  mf = Ve(pf),
  hf = [9, 13, 27, 32],
  Io = mt && "CompositionEvent" in window,
  Jn = null;
mt && "documentMode" in document && (Jn = document.documentMode);
var xf = mt && "TextEvent" in window && !Jn,
  Su = mt && (!Io || (Jn && 8 < Jn && 11 >= Jn)),
  Ua = " ",
  Ra = !1;
function ju(e, t) {
  switch (e) {
    case "keyup":
      return hf.indexOf(t.keyCode) !== -1;
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
function Nu(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var un = !1;
function yf(e, t) {
  switch (e) {
    case "compositionend":
      return Nu(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ra = !0), Ua);
    case "textInput":
      return (e = t.data), e === Ua && Ra ? null : e;
    default:
      return null;
  }
}
function gf(e, t) {
  if (un)
    return e === "compositionend" || (!Io && ju(e, t))
      ? ((e = wu()), (Xr = zo = Ct = null), (un = !1), e)
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
      return Su && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var vf = {
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
function $a(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!vf[e.type] : t === "textarea";
}
function ku(e, t, n, r) {
  tu(r),
    (t = pl(t, "onChange")),
    0 < t.length &&
      ((n = new Mo("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var er = null,
  fr = null;
function wf(e) {
  Iu(e, 0);
}
function Ll(e) {
  var t = fn(e);
  if (qi(t)) return e;
}
function Sf(e, t) {
  if (e === "change") return t;
}
var Cu = !1;
if (mt) {
  var os;
  if (mt) {
    var as = "oninput" in document;
    if (!as) {
      var Fa = document.createElement("div");
      Fa.setAttribute("oninput", "return;"),
        (as = typeof Fa.oninput == "function");
    }
    os = as;
  } else os = !1;
  Cu = os && (!document.documentMode || 9 < document.documentMode);
}
function Oa() {
  er && (er.detachEvent("onpropertychange", _u), (fr = er = null));
}
function _u(e) {
  if (e.propertyName === "value" && Ll(fr)) {
    var t = [];
    ku(t, fr, e, Eo(e)), su(wf, t);
  }
}
function jf(e, t, n) {
  e === "focusin"
    ? (Oa(), (er = t), (fr = n), er.attachEvent("onpropertychange", _u))
    : e === "focusout" && Oa();
}
function Nf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ll(fr);
}
function kf(e, t) {
  if (e === "click") return Ll(t);
}
function Cf(e, t) {
  if (e === "input" || e === "change") return Ll(t);
}
function _f(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var rt = typeof Object.is == "function" ? Object.is : _f;
function pr(e, t) {
  if (rt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Ns.call(t, l) || !rt(e[l], t[l])) return !1;
  }
  return !0;
}
function Qa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Aa(e, t) {
  var n = Qa(e);
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
    n = Qa(n);
  }
}
function Eu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Eu(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function bu() {
  for (var e = window, t = ol(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ol(e.document);
  }
  return t;
}
function Uo(e) {
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
function Ef(e) {
  var t = bu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Eu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Uo(n)) {
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
          (l = Aa(n, s));
        var a = Aa(n, r);
        l &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          s > r
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
var bf = mt && "documentMode" in document && 11 >= document.documentMode,
  cn = null,
  As = null,
  tr = null,
  Vs = !1;
function Va(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Vs ||
    cn == null ||
    cn !== ol(r) ||
    ((r = cn),
    "selectionStart" in r && Uo(r)
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
    (tr && pr(tr, r)) ||
      ((tr = r),
      (r = pl(As, "onSelect")),
      0 < r.length &&
        ((t = new Mo("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = cn))));
}
function Fr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var dn = {
    animationend: Fr("Animation", "AnimationEnd"),
    animationiteration: Fr("Animation", "AnimationIteration"),
    animationstart: Fr("Animation", "AnimationStart"),
    transitionend: Fr("Transition", "TransitionEnd"),
  },
  is = {},
  Pu = {};
mt &&
  ((Pu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete dn.animationend.animation,
    delete dn.animationiteration.animation,
    delete dn.animationstart.animation),
  "TransitionEvent" in window || delete dn.transitionend.transition);
function Il(e) {
  if (is[e]) return is[e];
  if (!dn[e]) return e;
  var t = dn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Pu) return (is[e] = t[n]);
  return e;
}
var Du = Il("animationend"),
  Tu = Il("animationiteration"),
  zu = Il("animationstart"),
  Mu = Il("transitionend"),
  Lu = new Map(),
  Ba =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Rt(e, t) {
  Lu.set(e, t), nn(t, [e]);
}
for (var us = 0; us < Ba.length; us++) {
  var cs = Ba[us],
    Pf = cs.toLowerCase(),
    Df = cs[0].toUpperCase() + cs.slice(1);
  Rt(Pf, "on" + Df);
}
Rt(Du, "onAnimationEnd");
Rt(Tu, "onAnimationIteration");
Rt(zu, "onAnimationStart");
Rt("dblclick", "onDoubleClick");
Rt("focusin", "onFocus");
Rt("focusout", "onBlur");
Rt(Mu, "onTransitionEnd");
Cn("onMouseEnter", ["mouseout", "mouseover"]);
Cn("onMouseLeave", ["mouseout", "mouseover"]);
Cn("onPointerEnter", ["pointerout", "pointerover"]);
Cn("onPointerLeave", ["pointerout", "pointerover"]);
nn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
nn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
nn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
nn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
nn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
nn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Kn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Tf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Kn));
function Ha(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), bd(r, t, void 0, e), (e.currentTarget = null);
}
function Iu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var u = r[a],
            i = u.instance,
            f = u.currentTarget;
          if (((u = u.listener), i !== s && l.isPropagationStopped())) break e;
          Ha(l, u, f), (s = i);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((u = r[a]),
            (i = u.instance),
            (f = u.currentTarget),
            (u = u.listener),
            i !== s && l.isPropagationStopped())
          )
            break e;
          Ha(l, u, f), (s = i);
        }
    }
  }
  if (il) throw ((e = $s), (il = !1), ($s = null), e);
}
function ne(e, t) {
  var n = t[qs];
  n === void 0 && (n = t[qs] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Uu(t, e, 2, !1), n.add(r));
}
function ds(e, t, n) {
  var r = 0;
  t && (r |= 4), Uu(n, e, r, t);
}
var Or = "_reactListening" + Math.random().toString(36).slice(2);
function mr(e) {
  if (!e[Or]) {
    (e[Or] = !0),
      Vi.forEach(function (n) {
        n !== "selectionchange" && (Tf.has(n) || ds(n, !1, e), ds(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Or] || ((t[Or] = !0), ds("selectionchange", !1, t));
  }
}
function Uu(e, t, n, r) {
  switch (vu(t)) {
    case 1:
      var l = Bd;
      break;
    case 4:
      l = Hd;
      break;
    default:
      l = To;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Rs ||
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
function fs(e, t, n, r, l) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var i = a.tag;
            if (
              (i === 3 || i === 4) &&
              ((i = a.stateNode.containerInfo),
              i === l || (i.nodeType === 8 && i.parentNode === l))
            )
              return;
            a = a.return;
          }
        for (; u !== null; ) {
          if (((a = Ht(u)), a === null)) return;
          if (((i = a.tag), i === 5 || i === 6)) {
            r = s = a;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  su(function () {
    var f = s,
      j = Eo(n),
      v = [];
    e: {
      var x = Lu.get(e);
      if (x !== void 0) {
        var _ = Mo,
          k = e;
        switch (e) {
          case "keypress":
            if (Zr(n) === 0) break e;
          case "keydown":
          case "keyup":
            _ = of;
            break;
          case "focusin":
            (k = "focus"), (_ = ss);
            break;
          case "focusout":
            (k = "blur"), (_ = ss);
            break;
          case "beforeblur":
          case "afterblur":
            _ = ss;
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
            _ = Ma;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            _ = qd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            _ = cf;
            break;
          case Du:
          case Tu:
          case zu:
            _ = Xd;
            break;
          case Mu:
            _ = ff;
            break;
          case "scroll":
            _ = Wd;
            break;
          case "wheel":
            _ = mf;
            break;
          case "copy":
          case "cut":
          case "paste":
            _ = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            _ = Ia;
        }
        var D = (t & 4) !== 0,
          V = !D && e === "scroll",
          h = D ? (x !== null ? x + "Capture" : null) : x;
        D = [];
        for (var p = f, y; p !== null; ) {
          y = p;
          var E = y.stateNode;
          if (
            (y.tag === 5 &&
              E !== null &&
              ((y = E),
              h !== null && ((E = ir(p, h)), E != null && D.push(hr(p, E, y)))),
            V)
          )
            break;
          p = p.return;
        }
        0 < D.length &&
          ((x = new _(x, k, null, n, j)), v.push({ event: x, listeners: D }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((x = e === "mouseover" || e === "pointerover"),
          (_ = e === "mouseout" || e === "pointerout"),
          x &&
            n !== Is &&
            (k = n.relatedTarget || n.fromElement) &&
            (Ht(k) || k[ht]))
        )
          break e;
        if (
          (_ || x) &&
          ((x =
            j.window === j
              ? j
              : (x = j.ownerDocument)
              ? x.defaultView || x.parentWindow
              : window),
          _
            ? ((k = n.relatedTarget || n.toElement),
              (_ = f),
              (k = k ? Ht(k) : null),
              k !== null &&
                ((V = rn(k)), k !== V || (k.tag !== 5 && k.tag !== 6)) &&
                (k = null))
            : ((_ = null), (k = f)),
          _ !== k)
        ) {
          if (
            ((D = Ma),
            (E = "onMouseLeave"),
            (h = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((D = Ia),
              (E = "onPointerLeave"),
              (h = "onPointerEnter"),
              (p = "pointer")),
            (V = _ == null ? x : fn(_)),
            (y = k == null ? x : fn(k)),
            (x = new D(E, p + "leave", _, n, j)),
            (x.target = V),
            (x.relatedTarget = y),
            (E = null),
            Ht(j) === f &&
              ((D = new D(h, p + "enter", k, n, j)),
              (D.target = y),
              (D.relatedTarget = V),
              (E = D)),
            (V = E),
            _ && k)
          )
            t: {
              for (D = _, h = k, p = 0, y = D; y; y = sn(y)) p++;
              for (y = 0, E = h; E; E = sn(E)) y++;
              for (; 0 < p - y; ) (D = sn(D)), p--;
              for (; 0 < y - p; ) (h = sn(h)), y--;
              for (; p--; ) {
                if (D === h || (h !== null && D === h.alternate)) break t;
                (D = sn(D)), (h = sn(h));
              }
              D = null;
            }
          else D = null;
          _ !== null && Wa(v, x, _, D, !1),
            k !== null && V !== null && Wa(v, V, k, D, !0);
        }
      }
      e: {
        if (
          ((x = f ? fn(f) : window),
          (_ = x.nodeName && x.nodeName.toLowerCase()),
          _ === "select" || (_ === "input" && x.type === "file"))
        )
          var I = Sf;
        else if ($a(x))
          if (Cu) I = Cf;
          else {
            I = Nf;
            var P = jf;
          }
        else
          (_ = x.nodeName) &&
            _.toLowerCase() === "input" &&
            (x.type === "checkbox" || x.type === "radio") &&
            (I = kf);
        if (I && (I = I(e, f))) {
          ku(v, I, n, j);
          break e;
        }
        P && P(e, x, f),
          e === "focusout" &&
            (P = x._wrapperState) &&
            P.controlled &&
            x.type === "number" &&
            Ds(x, "number", x.value);
      }
      switch (((P = f ? fn(f) : window), e)) {
        case "focusin":
          ($a(P) || P.contentEditable === "true") &&
            ((cn = P), (As = f), (tr = null));
          break;
        case "focusout":
          tr = As = cn = null;
          break;
        case "mousedown":
          Vs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Vs = !1), Va(v, n, j);
          break;
        case "selectionchange":
          if (bf) break;
        case "keydown":
        case "keyup":
          Va(v, n, j);
      }
      var U;
      if (Io)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        un
          ? ju(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (Su &&
          n.locale !== "ko" &&
          (un || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && un && (U = wu())
            : ((Ct = j),
              (zo = "value" in Ct ? Ct.value : Ct.textContent),
              (un = !0))),
        (P = pl(f, R)),
        0 < P.length &&
          ((R = new La(R, e, null, n, j)),
          v.push({ event: R, listeners: P }),
          U ? (R.data = U) : ((U = Nu(n)), U !== null && (R.data = U)))),
        (U = xf ? yf(e, n) : gf(e, n)) &&
          ((f = pl(f, "onBeforeInput")),
          0 < f.length &&
            ((j = new La("onBeforeInput", "beforeinput", null, n, j)),
            v.push({ event: j, listeners: f }),
            (j.data = U)));
    }
    Iu(v, t);
  });
}
function hr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function pl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      s = l.stateNode;
    l.tag === 5 &&
      s !== null &&
      ((l = s),
      (s = ir(e, n)),
      s != null && r.unshift(hr(e, s, l)),
      (s = ir(e, t)),
      s != null && r.push(hr(e, s, l))),
      (e = e.return);
  }
  return r;
}
function sn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Wa(e, t, n, r, l) {
  for (var s = t._reactName, a = []; n !== null && n !== r; ) {
    var u = n,
      i = u.alternate,
      f = u.stateNode;
    if (i !== null && i === r) break;
    u.tag === 5 &&
      f !== null &&
      ((u = f),
      l
        ? ((i = ir(n, s)), i != null && a.unshift(hr(n, i, u)))
        : l || ((i = ir(n, s)), i != null && a.push(hr(n, i, u)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var zf = /\r\n?/g,
  Mf = /\u0000|\uFFFD/g;
function Ga(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      zf,
      `
`
    )
    .replace(Mf, "");
}
function Qr(e, t, n) {
  if (((t = Ga(t)), Ga(e) !== t && n)) throw Error(M(425));
}
function ml() {}
var Bs = null,
  Hs = null;
function Ws(e, t) {
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
var Gs = typeof setTimeout == "function" ? setTimeout : void 0,
  Lf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  qa = typeof Promise == "function" ? Promise : void 0,
  If =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof qa < "u"
      ? function (e) {
          return qa.resolve(null).then(e).catch(Uf);
        }
      : Gs;
function Uf(e) {
  setTimeout(function () {
    throw e;
  });
}
function ps(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), dr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  dr(t);
}
function Dt(e) {
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
function Ya(e) {
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
var In = Math.random().toString(36).slice(2),
  ot = "__reactFiber$" + In,
  xr = "__reactProps$" + In,
  ht = "__reactContainer$" + In,
  qs = "__reactEvents$" + In,
  Rf = "__reactListeners$" + In,
  $f = "__reactHandles$" + In;
function Ht(e) {
  var t = e[ot];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ht] || n[ot])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ya(e); e !== null; ) {
          if ((n = e[ot])) return n;
          e = Ya(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Er(e) {
  return (
    (e = e[ot] || e[ht]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function fn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(M(33));
}
function Ul(e) {
  return e[xr] || null;
}
var Ys = [],
  pn = -1;
function $t(e) {
  return { current: e };
}
function re(e) {
  0 > pn || ((e.current = Ys[pn]), (Ys[pn] = null), pn--);
}
function te(e, t) {
  pn++, (Ys[pn] = e.current), (e.current = t);
}
var Ut = {},
  _e = $t(Ut),
  Ie = $t(!1),
  Xt = Ut;
function _n(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ut;
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
function Ue(e) {
  return (e = e.childContextTypes), e != null;
}
function hl() {
  re(Ie), re(_e);
}
function Ka(e, t, n) {
  if (_e.current !== Ut) throw Error(M(168));
  te(_e, t), te(Ie, n);
}
function Ru(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(M(108, Sd(e) || "Unknown", l));
  return ie({}, n, r);
}
function xl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ut),
    (Xt = _e.current),
    te(_e, e),
    te(Ie, Ie.current),
    !0
  );
}
function Xa(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(M(169));
  n
    ? ((e = Ru(e, t, Xt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      re(Ie),
      re(_e),
      te(_e, e))
    : re(Ie),
    te(Ie, n);
}
var ct = null,
  Rl = !1,
  ms = !1;
function $u(e) {
  ct === null ? (ct = [e]) : ct.push(e);
}
function Ff(e) {
  (Rl = !0), $u(e);
}
function Ft() {
  if (!ms && ct !== null) {
    ms = !0;
    var e = 0,
      t = ee;
    try {
      var n = ct;
      for (ee = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ct = null), (Rl = !1);
    } catch (l) {
      throw (ct !== null && (ct = ct.slice(e + 1)), uu(bo, Ft), l);
    } finally {
      (ee = t), (ms = !1);
    }
  }
  return null;
}
var mn = [],
  hn = 0,
  yl = null,
  gl = 0,
  Be = [],
  He = 0,
  Zt = null,
  dt = 1,
  ft = "";
function Vt(e, t) {
  (mn[hn++] = gl), (mn[hn++] = yl), (yl = e), (gl = t);
}
function Fu(e, t, n) {
  (Be[He++] = dt), (Be[He++] = ft), (Be[He++] = Zt), (Zt = e);
  var r = dt;
  e = ft;
  var l = 32 - tt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var s = 32 - tt(t) + l;
  if (30 < s) {
    var a = l - (l % 5);
    (s = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (l -= a),
      (dt = (1 << (32 - tt(t) + l)) | (n << l) | r),
      (ft = s + e);
  } else (dt = (1 << s) | (n << l) | r), (ft = e);
}
function Ro(e) {
  e.return !== null && (Vt(e, 1), Fu(e, 1, 0));
}
function $o(e) {
  for (; e === yl; )
    (yl = mn[--hn]), (mn[hn] = null), (gl = mn[--hn]), (mn[hn] = null);
  for (; e === Zt; )
    (Zt = Be[--He]),
      (Be[He] = null),
      (ft = Be[--He]),
      (Be[He] = null),
      (dt = Be[--He]),
      (Be[He] = null);
}
var Oe = null,
  Fe = null,
  se = !1,
  et = null;
function Ou(e, t) {
  var n = We(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Za(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Oe = e), (Fe = Dt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Oe = e), (Fe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Zt !== null ? { id: dt, overflow: ft } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = We(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Oe = e),
            (Fe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ks(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Xs(e) {
  if (se) {
    var t = Fe;
    if (t) {
      var n = t;
      if (!Za(e, t)) {
        if (Ks(e)) throw Error(M(418));
        t = Dt(n.nextSibling);
        var r = Oe;
        t && Za(e, t)
          ? Ou(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (se = !1), (Oe = e));
      }
    } else {
      if (Ks(e)) throw Error(M(418));
      (e.flags = (e.flags & -4097) | 2), (se = !1), (Oe = e);
    }
  }
}
function Ja(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Oe = e;
}
function Ar(e) {
  if (e !== Oe) return !1;
  if (!se) return Ja(e), (se = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ws(e.type, e.memoizedProps))),
    t && (t = Fe))
  ) {
    if (Ks(e)) throw (Qu(), Error(M(418)));
    for (; t; ) Ou(e, t), (t = Dt(t.nextSibling));
  }
  if ((Ja(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(M(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Fe = Dt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Fe = null;
    }
  } else Fe = Oe ? Dt(e.stateNode.nextSibling) : null;
  return !0;
}
function Qu() {
  for (var e = Fe; e; ) e = Dt(e.nextSibling);
}
function En() {
  (Fe = Oe = null), (se = !1);
}
function Fo(e) {
  et === null ? (et = [e]) : et.push(e);
}
var Of = gt.ReactCurrentBatchConfig;
function Bn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(M(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(M(147, e));
      var l = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (a) {
            var u = l.refs;
            a === null ? delete u[s] : (u[s] = a);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(M(284));
    if (!n._owner) throw Error(M(290, e));
  }
  return e;
}
function Vr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      M(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ei(e) {
  var t = e._init;
  return t(e._payload);
}
function Au(e) {
  function t(h, p) {
    if (e) {
      var y = h.deletions;
      y === null ? ((h.deletions = [p]), (h.flags |= 16)) : y.push(p);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), (p = p.sibling);
    return null;
  }
  function r(h, p) {
    for (h = new Map(); p !== null; )
      p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
    return h;
  }
  function l(h, p) {
    return (h = Lt(h, p)), (h.index = 0), (h.sibling = null), h;
  }
  function s(h, p, y) {
    return (
      (h.index = y),
      e
        ? ((y = h.alternate),
          y !== null
            ? ((y = y.index), y < p ? ((h.flags |= 2), p) : y)
            : ((h.flags |= 2), p))
        : ((h.flags |= 1048576), p)
    );
  }
  function a(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function u(h, p, y, E) {
    return p === null || p.tag !== 6
      ? ((p = Ss(y, h.mode, E)), (p.return = h), p)
      : ((p = l(p, y)), (p.return = h), p);
  }
  function i(h, p, y, E) {
    var I = y.type;
    return I === an
      ? j(h, p, y.props.children, E, y.key)
      : p !== null &&
        (p.elementType === I ||
          (typeof I == "object" &&
            I !== null &&
            I.$$typeof === St &&
            ei(I) === p.type))
      ? ((E = l(p, y.props)), (E.ref = Bn(h, p, y)), (E.return = h), E)
      : ((E = sl(y.type, y.key, y.props, null, h.mode, E)),
        (E.ref = Bn(h, p, y)),
        (E.return = h),
        E);
  }
  function f(h, p, y, E) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== y.containerInfo ||
      p.stateNode.implementation !== y.implementation
      ? ((p = js(y, h.mode, E)), (p.return = h), p)
      : ((p = l(p, y.children || [])), (p.return = h), p);
  }
  function j(h, p, y, E, I) {
    return p === null || p.tag !== 7
      ? ((p = Kt(y, h.mode, E, I)), (p.return = h), p)
      : ((p = l(p, y)), (p.return = h), p);
  }
  function v(h, p, y) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Ss("" + p, h.mode, y)), (p.return = h), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case zr:
          return (
            (y = sl(p.type, p.key, p.props, null, h.mode, y)),
            (y.ref = Bn(h, null, p)),
            (y.return = h),
            y
          );
        case on:
          return (p = js(p, h.mode, y)), (p.return = h), p;
        case St:
          var E = p._init;
          return v(h, E(p._payload), y);
      }
      if (qn(p) || Fn(p))
        return (p = Kt(p, h.mode, y, null)), (p.return = h), p;
      Vr(h, p);
    }
    return null;
  }
  function x(h, p, y, E) {
    var I = p !== null ? p.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return I !== null ? null : u(h, p, "" + y, E);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case zr:
          return y.key === I ? i(h, p, y, E) : null;
        case on:
          return y.key === I ? f(h, p, y, E) : null;
        case St:
          return (I = y._init), x(h, p, I(y._payload), E);
      }
      if (qn(y) || Fn(y)) return I !== null ? null : j(h, p, y, E, null);
      Vr(h, y);
    }
    return null;
  }
  function _(h, p, y, E, I) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (h = h.get(y) || null), u(p, h, "" + E, I);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case zr:
          return (h = h.get(E.key === null ? y : E.key) || null), i(p, h, E, I);
        case on:
          return (h = h.get(E.key === null ? y : E.key) || null), f(p, h, E, I);
        case St:
          var P = E._init;
          return _(h, p, y, P(E._payload), I);
      }
      if (qn(E) || Fn(E)) return (h = h.get(y) || null), j(p, h, E, I, null);
      Vr(p, E);
    }
    return null;
  }
  function k(h, p, y, E) {
    for (
      var I = null, P = null, U = p, R = (p = 0), q = null;
      U !== null && R < y.length;
      R++
    ) {
      U.index > R ? ((q = U), (U = null)) : (q = U.sibling);
      var T = x(h, U, y[R], E);
      if (T === null) {
        U === null && (U = q);
        break;
      }
      e && U && T.alternate === null && t(h, U),
        (p = s(T, p, R)),
        P === null ? (I = T) : (P.sibling = T),
        (P = T),
        (U = q);
    }
    if (R === y.length) return n(h, U), se && Vt(h, R), I;
    if (U === null) {
      for (; R < y.length; R++)
        (U = v(h, y[R], E)),
          U !== null &&
            ((p = s(U, p, R)), P === null ? (I = U) : (P.sibling = U), (P = U));
      return se && Vt(h, R), I;
    }
    for (U = r(h, U); R < y.length; R++)
      (q = _(U, h, R, y[R], E)),
        q !== null &&
          (e && q.alternate !== null && U.delete(q.key === null ? R : q.key),
          (p = s(q, p, R)),
          P === null ? (I = q) : (P.sibling = q),
          (P = q));
    return (
      e &&
        U.forEach(function (B) {
          return t(h, B);
        }),
      se && Vt(h, R),
      I
    );
  }
  function D(h, p, y, E) {
    var I = Fn(y);
    if (typeof I != "function") throw Error(M(150));
    if (((y = I.call(y)), y == null)) throw Error(M(151));
    for (
      var P = (I = null), U = p, R = (p = 0), q = null, T = y.next();
      U !== null && !T.done;
      R++, T = y.next()
    ) {
      U.index > R ? ((q = U), (U = null)) : (q = U.sibling);
      var B = x(h, U, T.value, E);
      if (B === null) {
        U === null && (U = q);
        break;
      }
      e && U && B.alternate === null && t(h, U),
        (p = s(B, p, R)),
        P === null ? (I = B) : (P.sibling = B),
        (P = B),
        (U = q);
    }
    if (T.done) return n(h, U), se && Vt(h, R), I;
    if (U === null) {
      for (; !T.done; R++, T = y.next())
        (T = v(h, T.value, E)),
          T !== null &&
            ((p = s(T, p, R)), P === null ? (I = T) : (P.sibling = T), (P = T));
      return se && Vt(h, R), I;
    }
    for (U = r(h, U); !T.done; R++, T = y.next())
      (T = _(U, h, R, T.value, E)),
        T !== null &&
          (e && T.alternate !== null && U.delete(T.key === null ? R : T.key),
          (p = s(T, p, R)),
          P === null ? (I = T) : (P.sibling = T),
          (P = T));
    return (
      e &&
        U.forEach(function (A) {
          return t(h, A);
        }),
      se && Vt(h, R),
      I
    );
  }
  function V(h, p, y, E) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === an &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case zr:
          e: {
            for (var I = y.key, P = p; P !== null; ) {
              if (P.key === I) {
                if (((I = y.type), I === an)) {
                  if (P.tag === 7) {
                    n(h, P.sibling),
                      (p = l(P, y.props.children)),
                      (p.return = h),
                      (h = p);
                    break e;
                  }
                } else if (
                  P.elementType === I ||
                  (typeof I == "object" &&
                    I !== null &&
                    I.$$typeof === St &&
                    ei(I) === P.type)
                ) {
                  n(h, P.sibling),
                    (p = l(P, y.props)),
                    (p.ref = Bn(h, P, y)),
                    (p.return = h),
                    (h = p);
                  break e;
                }
                n(h, P);
                break;
              } else t(h, P);
              P = P.sibling;
            }
            y.type === an
              ? ((p = Kt(y.props.children, h.mode, E, y.key)),
                (p.return = h),
                (h = p))
              : ((E = sl(y.type, y.key, y.props, null, h.mode, E)),
                (E.ref = Bn(h, p, y)),
                (E.return = h),
                (h = E));
          }
          return a(h);
        case on:
          e: {
            for (P = y.key; p !== null; ) {
              if (p.key === P)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === y.containerInfo &&
                  p.stateNode.implementation === y.implementation
                ) {
                  n(h, p.sibling),
                    (p = l(p, y.children || [])),
                    (p.return = h),
                    (h = p);
                  break e;
                } else {
                  n(h, p);
                  break;
                }
              else t(h, p);
              p = p.sibling;
            }
            (p = js(y, h.mode, E)), (p.return = h), (h = p);
          }
          return a(h);
        case St:
          return (P = y._init), V(h, p, P(y._payload), E);
      }
      if (qn(y)) return k(h, p, y, E);
      if (Fn(y)) return D(h, p, y, E);
      Vr(h, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        p !== null && p.tag === 6
          ? (n(h, p.sibling), (p = l(p, y)), (p.return = h), (h = p))
          : (n(h, p), (p = Ss(y, h.mode, E)), (p.return = h), (h = p)),
        a(h))
      : n(h, p);
  }
  return V;
}
var bn = Au(!0),
  Vu = Au(!1),
  vl = $t(null),
  wl = null,
  xn = null,
  Oo = null;
function Qo() {
  Oo = xn = wl = null;
}
function Ao(e) {
  var t = vl.current;
  re(vl), (e._currentValue = t);
}
function Zs(e, t, n) {
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
function Nn(e, t) {
  (wl = e),
    (Oo = xn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Le = !0), (e.firstContext = null));
}
function qe(e) {
  var t = e._currentValue;
  if (Oo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), xn === null)) {
      if (wl === null) throw Error(M(308));
      (xn = e), (wl.dependencies = { lanes: 0, firstContext: e });
    } else xn = xn.next = e;
  return t;
}
var Wt = null;
function Vo(e) {
  Wt === null ? (Wt = [e]) : Wt.push(e);
}
function Bu(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Vo(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    xt(e, r)
  );
}
function xt(e, t) {
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
var jt = !1;
function Bo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Hu(e, t) {
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
function pt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Tt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Z & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      xt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Vo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    xt(e, n)
  );
}
function Jr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Po(e, n);
  }
}
function ti(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      s = null;
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
        s === null ? (l = s = a) : (s = s.next = a), (n = n.next);
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
function Sl(e, t, n, r) {
  var l = e.updateQueue;
  jt = !1;
  var s = l.firstBaseUpdate,
    a = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var i = u,
      f = i.next;
    (i.next = null), a === null ? (s = f) : (a.next = f), (a = i);
    var j = e.alternate;
    j !== null &&
      ((j = j.updateQueue),
      (u = j.lastBaseUpdate),
      u !== a &&
        (u === null ? (j.firstBaseUpdate = f) : (u.next = f),
        (j.lastBaseUpdate = i)));
  }
  if (s !== null) {
    var v = l.baseState;
    (a = 0), (j = f = i = null), (u = s);
    do {
      var x = u.lane,
        _ = u.eventTime;
      if ((r & x) === x) {
        j !== null &&
          (j = j.next =
            {
              eventTime: _,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var k = e,
            D = u;
          switch (((x = t), (_ = n), D.tag)) {
            case 1:
              if (((k = D.payload), typeof k == "function")) {
                v = k.call(_, v, x);
                break e;
              }
              v = k;
              break e;
            case 3:
              k.flags = (k.flags & -65537) | 128;
            case 0:
              if (
                ((k = D.payload),
                (x = typeof k == "function" ? k.call(_, v, x) : k),
                x == null)
              )
                break e;
              v = ie({}, v, x);
              break e;
            case 2:
              jt = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (x = l.effects),
          x === null ? (l.effects = [u]) : x.push(u));
      } else
        (_ = {
          eventTime: _,
          lane: x,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          j === null ? ((f = j = _), (i = v)) : (j = j.next = _),
          (a |= x);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (x = u),
          (u = x.next),
          (x.next = null),
          (l.lastBaseUpdate = x),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (j === null && (i = v),
      (l.baseState = i),
      (l.firstBaseUpdate = f),
      (l.lastBaseUpdate = j),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (a |= l.lane), (l = l.next);
      while (l !== t);
    } else s === null && (l.shared.lanes = 0);
    (en |= a), (e.lanes = a), (e.memoizedState = v);
  }
}
function ni(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(M(191, l));
        l.call(r);
      }
    }
}
var br = {},
  it = $t(br),
  yr = $t(br),
  gr = $t(br);
function Gt(e) {
  if (e === br) throw Error(M(174));
  return e;
}
function Ho(e, t) {
  switch ((te(gr, t), te(yr, e), te(it, br), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : zs(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = zs(t, e));
  }
  re(it), te(it, t);
}
function Pn() {
  re(it), re(yr), re(gr);
}
function Wu(e) {
  Gt(gr.current);
  var t = Gt(it.current),
    n = zs(t, e.type);
  t !== n && (te(yr, e), te(it, n));
}
function Wo(e) {
  yr.current === e && (re(it), re(yr));
}
var oe = $t(0);
function jl(e) {
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
var hs = [];
function Go() {
  for (var e = 0; e < hs.length; e++)
    hs[e]._workInProgressVersionPrimary = null;
  hs.length = 0;
}
var el = gt.ReactCurrentDispatcher,
  xs = gt.ReactCurrentBatchConfig,
  Jt = 0,
  ae = null,
  pe = null,
  ye = null,
  Nl = !1,
  nr = !1,
  vr = 0,
  Qf = 0;
function Ne() {
  throw Error(M(321));
}
function qo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!rt(e[n], t[n])) return !1;
  return !0;
}
function Yo(e, t, n, r, l, s) {
  if (
    ((Jt = s),
    (ae = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (el.current = e === null || e.memoizedState === null ? Hf : Wf),
    (e = n(r, l)),
    nr)
  ) {
    s = 0;
    do {
      if (((nr = !1), (vr = 0), 25 <= s)) throw Error(M(301));
      (s += 1),
        (ye = pe = null),
        (t.updateQueue = null),
        (el.current = Gf),
        (e = n(r, l));
    } while (nr);
  }
  if (
    ((el.current = kl),
    (t = pe !== null && pe.next !== null),
    (Jt = 0),
    (ye = pe = ae = null),
    (Nl = !1),
    t)
  )
    throw Error(M(300));
  return e;
}
function Ko() {
  var e = vr !== 0;
  return (vr = 0), e;
}
function st() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ye === null ? (ae.memoizedState = ye = e) : (ye = ye.next = e), ye;
}
function Ye() {
  if (pe === null) {
    var e = ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = pe.next;
  var t = ye === null ? ae.memoizedState : ye.next;
  if (t !== null) (ye = t), (pe = e);
  else {
    if (e === null) throw Error(M(310));
    (pe = e),
      (e = {
        memoizedState: pe.memoizedState,
        baseState: pe.baseState,
        baseQueue: pe.baseQueue,
        queue: pe.queue,
        next: null,
      }),
      ye === null ? (ae.memoizedState = ye = e) : (ye = ye.next = e);
  }
  return ye;
}
function wr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ys(e) {
  var t = Ye(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = pe,
    l = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (l !== null) {
      var a = l.next;
      (l.next = s.next), (s.next = a);
    }
    (r.baseQueue = l = s), (n.pending = null);
  }
  if (l !== null) {
    (s = l.next), (r = r.baseState);
    var u = (a = null),
      i = null,
      f = s;
    do {
      var j = f.lane;
      if ((Jt & j) === j)
        i !== null &&
          (i = i.next =
            {
              lane: 0,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null,
            }),
          (r = f.hasEagerState ? f.eagerState : e(r, f.action));
      else {
        var v = {
          lane: j,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null,
        };
        i === null ? ((u = i = v), (a = r)) : (i = i.next = v),
          (ae.lanes |= j),
          (en |= j);
      }
      f = f.next;
    } while (f !== null && f !== s);
    i === null ? (a = r) : (i.next = u),
      rt(r, t.memoizedState) || (Le = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = i),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (s = l.lane), (ae.lanes |= s), (en |= s), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function gs(e) {
  var t = Ye(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    s = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var a = (l = l.next);
    do (s = e(s, a.action)), (a = a.next);
    while (a !== l);
    rt(s, t.memoizedState) || (Le = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Gu() {}
function qu(e, t) {
  var n = ae,
    r = Ye(),
    l = t(),
    s = !rt(r.memoizedState, l);
  if (
    (s && ((r.memoizedState = l), (Le = !0)),
    (r = r.queue),
    Xo(Xu.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (ye !== null && ye.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Sr(9, Ku.bind(null, n, r, l, t), void 0, null),
      ge === null)
    )
      throw Error(M(349));
    Jt & 30 || Yu(n, t, l);
  }
  return l;
}
function Yu(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ku(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Zu(t) && Ju(e);
}
function Xu(e, t, n) {
  return n(function () {
    Zu(t) && Ju(e);
  });
}
function Zu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !rt(e, n);
  } catch {
    return !0;
  }
}
function Ju(e) {
  var t = xt(e, 1);
  t !== null && nt(t, e, 1, -1);
}
function ri(e) {
  var t = st();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: wr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Bf.bind(null, ae, e)),
    [t.memoizedState, e]
  );
}
function Sr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ec() {
  return Ye().memoizedState;
}
function tl(e, t, n, r) {
  var l = st();
  (ae.flags |= e),
    (l.memoizedState = Sr(1 | t, n, void 0, r === void 0 ? null : r));
}
function $l(e, t, n, r) {
  var l = Ye();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (pe !== null) {
    var a = pe.memoizedState;
    if (((s = a.destroy), r !== null && qo(r, a.deps))) {
      l.memoizedState = Sr(t, n, s, r);
      return;
    }
  }
  (ae.flags |= e), (l.memoizedState = Sr(1 | t, n, s, r));
}
function li(e, t) {
  return tl(8390656, 8, e, t);
}
function Xo(e, t) {
  return $l(2048, 8, e, t);
}
function tc(e, t) {
  return $l(4, 2, e, t);
}
function nc(e, t) {
  return $l(4, 4, e, t);
}
function rc(e, t) {
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
function lc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), $l(4, 4, rc.bind(null, t, e), n)
  );
}
function Zo() {}
function sc(e, t) {
  var n = Ye();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && qo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function oc(e, t) {
  var n = Ye();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && qo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ac(e, t, n) {
  return Jt & 21
    ? (rt(n, t) || ((n = fu()), (ae.lanes |= n), (en |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Le = !0)), (e.memoizedState = n));
}
function Af(e, t) {
  var n = ee;
  (ee = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = xs.transition;
  xs.transition = {};
  try {
    e(!1), t();
  } finally {
    (ee = n), (xs.transition = r);
  }
}
function ic() {
  return Ye().memoizedState;
}
function Vf(e, t, n) {
  var r = Mt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    uc(e))
  )
    cc(t, n);
  else if (((n = Bu(e, t, n, r)), n !== null)) {
    var l = be();
    nt(n, e, r, l), dc(n, t, r);
  }
}
function Bf(e, t, n) {
  var r = Mt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (uc(e)) cc(t, l);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var a = t.lastRenderedState,
          u = s(a, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), rt(u, a))) {
          var i = t.interleaved;
          i === null
            ? ((l.next = l), Vo(t))
            : ((l.next = i.next), (i.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Bu(e, t, l, r)),
      n !== null && ((l = be()), nt(n, e, r, l), dc(n, t, r));
  }
}
function uc(e) {
  var t = e.alternate;
  return e === ae || (t !== null && t === ae);
}
function cc(e, t) {
  nr = Nl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function dc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Po(e, n);
  }
}
var kl = {
    readContext: qe,
    useCallback: Ne,
    useContext: Ne,
    useEffect: Ne,
    useImperativeHandle: Ne,
    useInsertionEffect: Ne,
    useLayoutEffect: Ne,
    useMemo: Ne,
    useReducer: Ne,
    useRef: Ne,
    useState: Ne,
    useDebugValue: Ne,
    useDeferredValue: Ne,
    useTransition: Ne,
    useMutableSource: Ne,
    useSyncExternalStore: Ne,
    useId: Ne,
    unstable_isNewReconciler: !1,
  },
  Hf = {
    readContext: qe,
    useCallback: function (e, t) {
      return (st().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: qe,
    useEffect: li,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        tl(4194308, 4, rc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return tl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return tl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = st();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = st();
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
        (e = e.dispatch = Vf.bind(null, ae, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = st();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ri,
    useDebugValue: Zo,
    useDeferredValue: function (e) {
      return (st().memoizedState = e);
    },
    useTransition: function () {
      var e = ri(!1),
        t = e[0];
      return (e = Af.bind(null, e[1])), (st().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ae,
        l = st();
      if (se) {
        if (n === void 0) throw Error(M(407));
        n = n();
      } else {
        if (((n = t()), ge === null)) throw Error(M(349));
        Jt & 30 || Yu(r, t, n);
      }
      l.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (l.queue = s),
        li(Xu.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Sr(9, Ku.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = st(),
        t = ge.identifierPrefix;
      if (se) {
        var n = ft,
          r = dt;
        (n = (r & ~(1 << (32 - tt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = vr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Qf++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Wf = {
    readContext: qe,
    useCallback: sc,
    useContext: qe,
    useEffect: Xo,
    useImperativeHandle: lc,
    useInsertionEffect: tc,
    useLayoutEffect: nc,
    useMemo: oc,
    useReducer: ys,
    useRef: ec,
    useState: function () {
      return ys(wr);
    },
    useDebugValue: Zo,
    useDeferredValue: function (e) {
      var t = Ye();
      return ac(t, pe.memoizedState, e);
    },
    useTransition: function () {
      var e = ys(wr)[0],
        t = Ye().memoizedState;
      return [e, t];
    },
    useMutableSource: Gu,
    useSyncExternalStore: qu,
    useId: ic,
    unstable_isNewReconciler: !1,
  },
  Gf = {
    readContext: qe,
    useCallback: sc,
    useContext: qe,
    useEffect: Xo,
    useImperativeHandle: lc,
    useInsertionEffect: tc,
    useLayoutEffect: nc,
    useMemo: oc,
    useReducer: gs,
    useRef: ec,
    useState: function () {
      return gs(wr);
    },
    useDebugValue: Zo,
    useDeferredValue: function (e) {
      var t = Ye();
      return pe === null ? (t.memoizedState = e) : ac(t, pe.memoizedState, e);
    },
    useTransition: function () {
      var e = gs(wr)[0],
        t = Ye().memoizedState;
      return [e, t];
    },
    useMutableSource: Gu,
    useSyncExternalStore: qu,
    useId: ic,
    unstable_isNewReconciler: !1,
  };
function Ze(e, t) {
  if (e && e.defaultProps) {
    (t = ie({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Js(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ie({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Fl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? rn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = be(),
      l = Mt(e),
      s = pt(r, l);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Tt(e, s, l)),
      t !== null && (nt(t, e, l, r), Jr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = be(),
      l = Mt(e),
      s = pt(r, l);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Tt(e, s, l)),
      t !== null && (nt(t, e, l, r), Jr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = be(),
      r = Mt(e),
      l = pt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Tt(e, l, r)),
      t !== null && (nt(t, e, r, n), Jr(t, e, r));
  },
};
function si(e, t, n, r, l, s, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !pr(n, r) || !pr(l, s)
      : !0
  );
}
function fc(e, t, n) {
  var r = !1,
    l = Ut,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = qe(s))
      : ((l = Ue(t) ? Xt : _e.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? _n(e, l) : Ut)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Fl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function oi(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Fl.enqueueReplaceState(t, t.state, null);
}
function eo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Bo(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (l.context = qe(s))
    : ((s = Ue(t) ? Xt : _e.current), (l.context = _n(e, s))),
    (l.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Js(e, t, s, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Fl.enqueueReplaceState(l, l.state, null),
      Sl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Dn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += wd(r)), (r = r.return);
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
function vs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function to(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var qf = typeof WeakMap == "function" ? WeakMap : Map;
function pc(e, t, n) {
  (n = pt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      _l || ((_l = !0), (fo = r)), to(e, t);
    }),
    n
  );
}
function mc(e, t, n) {
  (n = pt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        to(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        to(e, t),
          typeof r != "function" &&
            (zt === null ? (zt = new Set([this])) : zt.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function ai(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new qf();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = ip.bind(null, e, t, n)), t.then(e, e));
}
function ii(e) {
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
function ui(e, t, n, r, l) {
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
              : ((t = pt(-1, 1)), (t.tag = 2), Tt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Yf = gt.ReactCurrentOwner,
  Le = !1;
function Ee(e, t, n, r) {
  t.child = e === null ? Vu(t, null, n, r) : bn(t, e.child, n, r);
}
function ci(e, t, n, r, l) {
  n = n.render;
  var s = t.ref;
  return (
    Nn(t, l),
    (r = Yo(e, t, n, r, s, l)),
    (n = Ko()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        yt(e, t, l))
      : (se && n && Ro(t), (t.flags |= 1), Ee(e, t, r, l), t.child)
  );
}
function di(e, t, n, r, l) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !oa(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), hc(e, t, s, r, l))
      : ((e = sl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & l))) {
    var a = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : pr), n(a, r) && e.ref === t.ref)
    )
      return yt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Lt(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function hc(e, t, n, r, l) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (pr(s, r) && e.ref === t.ref)
      if (((Le = !1), (t.pendingProps = r = s), (e.lanes & l) !== 0))
        e.flags & 131072 && (Le = !0);
      else return (t.lanes = e.lanes), yt(e, t, l);
  }
  return no(e, t, n, r, l);
}
function xc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        te(gn, $e),
        ($e |= n);
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
          te(gn, $e),
          ($e |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        te(gn, $e),
        ($e |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      te(gn, $e),
      ($e |= r);
  return Ee(e, t, l, n), t.child;
}
function yc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function no(e, t, n, r, l) {
  var s = Ue(n) ? Xt : _e.current;
  return (
    (s = _n(t, s)),
    Nn(t, l),
    (n = Yo(e, t, n, r, s, l)),
    (r = Ko()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        yt(e, t, l))
      : (se && r && Ro(t), (t.flags |= 1), Ee(e, t, n, l), t.child)
  );
}
function fi(e, t, n, r, l) {
  if (Ue(n)) {
    var s = !0;
    xl(t);
  } else s = !1;
  if ((Nn(t, l), t.stateNode === null))
    nl(e, t), fc(t, n, r), eo(t, n, r, l), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      u = t.memoizedProps;
    a.props = u;
    var i = a.context,
      f = n.contextType;
    typeof f == "object" && f !== null
      ? (f = qe(f))
      : ((f = Ue(n) ? Xt : _e.current), (f = _n(t, f)));
    var j = n.getDerivedStateFromProps,
      v =
        typeof j == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    v ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((u !== r || i !== f) && oi(t, a, r, f)),
      (jt = !1);
    var x = t.memoizedState;
    (a.state = x),
      Sl(t, r, a, l),
      (i = t.memoizedState),
      u !== r || x !== i || Ie.current || jt
        ? (typeof j == "function" && (Js(t, n, j, r), (i = t.memoizedState)),
          (u = jt || si(t, n, u, r, x, i, f))
            ? (v ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = i)),
          (a.props = r),
          (a.state = i),
          (a.context = f),
          (r = u))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      Hu(e, t),
      (u = t.memoizedProps),
      (f = t.type === t.elementType ? u : Ze(t.type, u)),
      (a.props = f),
      (v = t.pendingProps),
      (x = a.context),
      (i = n.contextType),
      typeof i == "object" && i !== null
        ? (i = qe(i))
        : ((i = Ue(n) ? Xt : _e.current), (i = _n(t, i)));
    var _ = n.getDerivedStateFromProps;
    (j =
      typeof _ == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((u !== v || x !== i) && oi(t, a, r, i)),
      (jt = !1),
      (x = t.memoizedState),
      (a.state = x),
      Sl(t, r, a, l);
    var k = t.memoizedState;
    u !== v || x !== k || Ie.current || jt
      ? (typeof _ == "function" && (Js(t, n, _, r), (k = t.memoizedState)),
        (f = jt || si(t, n, f, r, x, k, i) || !1)
          ? (j ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, k, i),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, k, i)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (u === e.memoizedProps && x === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && x === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = k)),
        (a.props = r),
        (a.state = k),
        (a.context = i),
        (r = f))
      : (typeof a.componentDidUpdate != "function" ||
          (u === e.memoizedProps && x === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && x === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ro(e, t, n, r, s, l);
}
function ro(e, t, n, r, l, s) {
  yc(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return l && Xa(t, n, !1), yt(e, t, s);
  (r = t.stateNode), (Yf.current = t);
  var u =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = bn(t, e.child, null, s)), (t.child = bn(t, null, u, s)))
      : Ee(e, t, u, s),
    (t.memoizedState = r.state),
    l && Xa(t, n, !0),
    t.child
  );
}
function gc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ka(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ka(e, t.context, !1),
    Ho(e, t.containerInfo);
}
function pi(e, t, n, r, l) {
  return En(), Fo(l), (t.flags |= 256), Ee(e, t, n, r), t.child;
}
var lo = { dehydrated: null, treeContext: null, retryLane: 0 };
function so(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function vc(e, t, n) {
  var r = t.pendingProps,
    l = oe.current,
    s = !1,
    a = (t.flags & 128) !== 0,
    u;
  if (
    ((u = a) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    te(oe, l & 1),
    e === null)
  )
    return (
      Xs(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = a))
                : (s = Al(a, r, 0, null)),
              (e = Kt(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = so(n)),
              (t.memoizedState = lo),
              e)
            : Jo(t, a))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Kf(e, t, a, r, u, l, n);
  if (s) {
    (s = r.fallback), (a = t.mode), (l = e.child), (u = l.sibling);
    var i = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = i),
          (t.deletions = null))
        : ((r = Lt(l, i)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (s = Lt(u, s)) : ((s = Kt(s, a, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? so(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (s.memoizedState = a),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = lo),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Lt(s, { mode: "visible", children: r.children })),
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
function Jo(e, t) {
  return (
    (t = Al({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Br(e, t, n, r) {
  return (
    r !== null && Fo(r),
    bn(t, e.child, null, n),
    (e = Jo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Kf(e, t, n, r, l, s, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = vs(Error(M(422)))), Br(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (l = t.mode),
        (r = Al({ mode: "visible", children: r.children }, l, 0, null)),
        (s = Kt(s, l, a, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && bn(t, e.child, null, a),
        (t.child.memoizedState = so(a)),
        (t.memoizedState = lo),
        s);
  if (!(t.mode & 1)) return Br(e, t, a, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (s = Error(M(419))), (r = vs(s, r, void 0)), Br(e, t, a, r);
  }
  if (((u = (a & e.childLanes) !== 0), Le || u)) {
    if (((r = ge), r !== null)) {
      switch (a & -a) {
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
      (l = l & (r.suspendedLanes | a) ? 0 : l),
        l !== 0 &&
          l !== s.retryLane &&
          ((s.retryLane = l), xt(e, l), nt(r, e, l, -1));
    }
    return sa(), (r = vs(Error(M(421)))), Br(e, t, a, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = up.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Fe = Dt(l.nextSibling)),
      (Oe = t),
      (se = !0),
      (et = null),
      e !== null &&
        ((Be[He++] = dt),
        (Be[He++] = ft),
        (Be[He++] = Zt),
        (dt = e.id),
        (ft = e.overflow),
        (Zt = t)),
      (t = Jo(t, r.children)),
      (t.flags |= 4096),
      t);
}
function mi(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Zs(e.return, t, n);
}
function ws(e, t, n, r, l) {
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
function wc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    s = r.tail;
  if ((Ee(e, t, r.children, n), (r = oe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && mi(e, n, t);
        else if (e.tag === 19) mi(e, n, t);
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
  if ((te(oe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && jl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ws(t, !1, l, n, s);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && jl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ws(t, !0, n, null, s);
        break;
      case "together":
        ws(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function nl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function yt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (en |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(M(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Lt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Lt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Xf(e, t, n) {
  switch (t.tag) {
    case 3:
      gc(t), En();
      break;
    case 5:
      Wu(t);
      break;
    case 1:
      Ue(t.type) && xl(t);
      break;
    case 4:
      Ho(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      te(vl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (te(oe, oe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? vc(e, t, n)
          : (te(oe, oe.current & 1),
            (e = yt(e, t, n)),
            e !== null ? e.sibling : null);
      te(oe, oe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return wc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        te(oe, oe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), xc(e, t, n);
  }
  return yt(e, t, n);
}
var Sc, oo, jc, Nc;
Sc = function (e, t) {
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
oo = function () {};
jc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Gt(it.current);
    var s = null;
    switch (n) {
      case "input":
        (l = bs(e, l)), (r = bs(e, r)), (s = []);
        break;
      case "select":
        (l = ie({}, l, { value: void 0 })),
          (r = ie({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (l = Ts(e, l)), (r = Ts(e, r)), (s = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ml);
    }
    Ms(n, r);
    var a;
    n = null;
    for (f in l)
      if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null)
        if (f === "style") {
          var u = l[f];
          for (a in u) u.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          f !== "dangerouslySetInnerHTML" &&
            f !== "children" &&
            f !== "suppressContentEditableWarning" &&
            f !== "suppressHydrationWarning" &&
            f !== "autoFocus" &&
            (or.hasOwnProperty(f)
              ? s || (s = [])
              : (s = s || []).push(f, null));
    for (f in r) {
      var i = r[f];
      if (
        ((u = l != null ? l[f] : void 0),
        r.hasOwnProperty(f) && i !== u && (i != null || u != null))
      )
        if (f === "style")
          if (u) {
            for (a in u)
              !u.hasOwnProperty(a) ||
                (i && i.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in i)
              i.hasOwnProperty(a) &&
                u[a] !== i[a] &&
                (n || (n = {}), (n[a] = i[a]));
          } else n || (s || (s = []), s.push(f, n)), (n = i);
        else
          f === "dangerouslySetInnerHTML"
            ? ((i = i ? i.__html : void 0),
              (u = u ? u.__html : void 0),
              i != null && u !== i && (s = s || []).push(f, i))
            : f === "children"
            ? (typeof i != "string" && typeof i != "number") ||
              (s = s || []).push(f, "" + i)
            : f !== "suppressContentEditableWarning" &&
              f !== "suppressHydrationWarning" &&
              (or.hasOwnProperty(f)
                ? (i != null && f === "onScroll" && ne("scroll", e),
                  s || u === i || (s = []))
                : (s = s || []).push(f, i));
    }
    n && (s = s || []).push("style", n);
    var f = s;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
Nc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Hn(e, t) {
  if (!se)
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
function ke(e) {
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
function Zf(e, t, n) {
  var r = t.pendingProps;
  switch (($o(t), t.tag)) {
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
      return ke(t), null;
    case 1:
      return Ue(t.type) && hl(), ke(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Pn(),
        re(Ie),
        re(_e),
        Go(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ar(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), et !== null && (ho(et), (et = null)))),
        oo(e, t),
        ke(t),
        null
      );
    case 5:
      Wo(t);
      var l = Gt(gr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        jc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(M(166));
          return ke(t), null;
        }
        if (((e = Gt(it.current)), Ar(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[ot] = t), (r[xr] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ne("cancel", r), ne("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ne("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Kn.length; l++) ne(Kn[l], r);
              break;
            case "source":
              ne("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ne("error", r), ne("load", r);
              break;
            case "details":
              ne("toggle", r);
              break;
            case "input":
              Na(r, s), ne("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                ne("invalid", r);
              break;
            case "textarea":
              Ca(r, s), ne("invalid", r);
          }
          Ms(n, s), (l = null);
          for (var a in s)
            if (s.hasOwnProperty(a)) {
              var u = s[a];
              a === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (s.suppressHydrationWarning !== !0 &&
                      Qr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (s.suppressHydrationWarning !== !0 &&
                      Qr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : or.hasOwnProperty(a) &&
                  u != null &&
                  a === "onScroll" &&
                  ne("scroll", r);
            }
          switch (n) {
            case "input":
              Mr(r), ka(r, s, !0);
              break;
            case "textarea":
              Mr(r), _a(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = ml);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Xi(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[ot] = t),
            (e[xr] = r),
            Sc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Ls(n, r)), n)) {
              case "dialog":
                ne("cancel", e), ne("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ne("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Kn.length; l++) ne(Kn[l], e);
                l = r;
                break;
              case "source":
                ne("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                ne("error", e), ne("load", e), (l = r);
                break;
              case "details":
                ne("toggle", e), (l = r);
                break;
              case "input":
                Na(e, r), (l = bs(e, r)), ne("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = ie({}, r, { value: void 0 })),
                  ne("invalid", e);
                break;
              case "textarea":
                Ca(e, r), (l = Ts(e, r)), ne("invalid", e);
                break;
              default:
                l = r;
            }
            Ms(n, l), (u = l);
            for (s in u)
              if (u.hasOwnProperty(s)) {
                var i = u[s];
                s === "style"
                  ? eu(e, i)
                  : s === "dangerouslySetInnerHTML"
                  ? ((i = i ? i.__html : void 0), i != null && Zi(e, i))
                  : s === "children"
                  ? typeof i == "string"
                    ? (n !== "textarea" || i !== "") && ar(e, i)
                    : typeof i == "number" && ar(e, "" + i)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (or.hasOwnProperty(s)
                      ? i != null && s === "onScroll" && ne("scroll", e)
                      : i != null && No(e, s, i, a));
              }
            switch (n) {
              case "input":
                Mr(e), ka(e, r, !1);
                break;
              case "textarea":
                Mr(e), _a(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + It(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? vn(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      vn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ml);
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
      return ke(t), null;
    case 6:
      if (e && t.stateNode != null) Nc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
        if (((n = Gt(gr.current)), Gt(it.current), Ar(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ot] = t),
            (s = r.nodeValue !== n) && ((e = Oe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Qr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Qr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ot] = t),
            (t.stateNode = r);
      }
      return ke(t), null;
    case 13:
      if (
        (re(oe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (se && Fe !== null && t.mode & 1 && !(t.flags & 128))
          Qu(), En(), (t.flags |= 98560), (s = !1);
        else if (((s = Ar(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(M(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(M(317));
            s[ot] = t;
          } else
            En(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ke(t), (s = !1);
        } else et !== null && (ho(et), (et = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || oe.current & 1 ? me === 0 && (me = 3) : sa())),
          t.updateQueue !== null && (t.flags |= 4),
          ke(t),
          null);
    case 4:
      return (
        Pn(), oo(e, t), e === null && mr(t.stateNode.containerInfo), ke(t), null
      );
    case 10:
      return Ao(t.type._context), ke(t), null;
    case 17:
      return Ue(t.type) && hl(), ke(t), null;
    case 19:
      if ((re(oe), (s = t.memoizedState), s === null)) return ke(t), null;
      if (((r = (t.flags & 128) !== 0), (a = s.rendering), a === null))
        if (r) Hn(s, !1);
        else {
          if (me !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = jl(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Hn(s, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (a = s.alternate),
                    a === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = a.childLanes),
                        (s.lanes = a.lanes),
                        (s.child = a.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = a.memoizedProps),
                        (s.memoizedState = a.memoizedState),
                        (s.updateQueue = a.updateQueue),
                        (s.type = a.type),
                        (e = a.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return te(oe, (oe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            de() > Tn &&
            ((t.flags |= 128), (r = !0), Hn(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = jl(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Hn(s, !0),
              s.tail === null && s.tailMode === "hidden" && !a.alternate && !se)
            )
              return ke(t), null;
          } else
            2 * de() - s.renderingStartTime > Tn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Hn(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = s.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (s.last = a));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = de()),
          (t.sibling = null),
          (n = oe.current),
          te(oe, r ? (n & 1) | 2 : n & 1),
          t)
        : (ke(t), null);
    case 22:
    case 23:
      return (
        la(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? $e & 1073741824 && (ke(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ke(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
function Jf(e, t) {
  switch (($o(t), t.tag)) {
    case 1:
      return (
        Ue(t.type) && hl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Pn(),
        re(Ie),
        re(_e),
        Go(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Wo(t), null;
    case 13:
      if (
        (re(oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(M(340));
        En();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return re(oe), null;
    case 4:
      return Pn(), null;
    case 10:
      return Ao(t.type._context), null;
    case 22:
    case 23:
      return la(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Hr = !1,
  Ce = !1,
  ep = typeof WeakSet == "function" ? WeakSet : Set,
  $ = null;
function yn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ue(e, t, r);
      }
    else n.current = null;
}
function ao(e, t, n) {
  try {
    n();
  } catch (r) {
    ue(e, t, r);
  }
}
var hi = !1;
function tp(e, t) {
  if (((Bs = dl), (e = bu()), Uo(e))) {
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
          var a = 0,
            u = -1,
            i = -1,
            f = 0,
            j = 0,
            v = e,
            x = null;
          t: for (;;) {
            for (
              var _;
              v !== n || (l !== 0 && v.nodeType !== 3) || (u = a + l),
                v !== s || (r !== 0 && v.nodeType !== 3) || (i = a + r),
                v.nodeType === 3 && (a += v.nodeValue.length),
                (_ = v.firstChild) !== null;

            )
              (x = v), (v = _);
            for (;;) {
              if (v === e) break t;
              if (
                (x === n && ++f === l && (u = a),
                x === s && ++j === r && (i = a),
                (_ = v.nextSibling) !== null)
              )
                break;
              (v = x), (x = v.parentNode);
            }
            v = _;
          }
          n = u === -1 || i === -1 ? null : { start: u, end: i };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Hs = { focusedElem: e, selectionRange: n }, dl = !1, $ = t; $ !== null; )
    if (((t = $), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), ($ = e);
    else
      for (; $ !== null; ) {
        t = $;
        try {
          var k = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (k !== null) {
                  var D = k.memoizedProps,
                    V = k.memoizedState,
                    h = t.stateNode,
                    p = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? D : Ze(t.type, D),
                      V
                    );
                  h.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(M(163));
            }
        } catch (E) {
          ue(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), ($ = e);
          break;
        }
        $ = t.return;
      }
  return (k = hi), (hi = !1), k;
}
function rr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var s = l.destroy;
        (l.destroy = void 0), s !== void 0 && ao(t, n, s);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ol(e, t) {
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
function io(e) {
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
function kc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), kc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ot], delete t[xr], delete t[qs], delete t[Rf], delete t[$f])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Cc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function xi(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Cc(e.return)) return null;
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
function uo(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = ml));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (uo(e, t, n), e = e.sibling; e !== null; ) uo(e, t, n), (e = e.sibling);
}
function co(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (co(e, t, n), e = e.sibling; e !== null; ) co(e, t, n), (e = e.sibling);
}
var ve = null,
  Je = !1;
function wt(e, t, n) {
  for (n = n.child; n !== null; ) _c(e, t, n), (n = n.sibling);
}
function _c(e, t, n) {
  if (at && typeof at.onCommitFiberUnmount == "function")
    try {
      at.onCommitFiberUnmount(zl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ce || yn(n, t);
    case 6:
      var r = ve,
        l = Je;
      (ve = null),
        wt(e, t, n),
        (ve = r),
        (Je = l),
        ve !== null &&
          (Je
            ? ((e = ve),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ve.removeChild(n.stateNode));
      break;
    case 18:
      ve !== null &&
        (Je
          ? ((e = ve),
            (n = n.stateNode),
            e.nodeType === 8
              ? ps(e.parentNode, n)
              : e.nodeType === 1 && ps(e, n),
            dr(e))
          : ps(ve, n.stateNode));
      break;
    case 4:
      (r = ve),
        (l = Je),
        (ve = n.stateNode.containerInfo),
        (Je = !0),
        wt(e, t, n),
        (ve = r),
        (Je = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ce &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var s = l,
            a = s.destroy;
          (s = s.tag),
            a !== void 0 && (s & 2 || s & 4) && ao(n, t, a),
            (l = l.next);
        } while (l !== r);
      }
      wt(e, t, n);
      break;
    case 1:
      if (
        !Ce &&
        (yn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          ue(n, t, u);
        }
      wt(e, t, n);
      break;
    case 21:
      wt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ce = (r = Ce) || n.memoizedState !== null), wt(e, t, n), (Ce = r))
        : wt(e, t, n);
      break;
    default:
      wt(e, t, n);
  }
}
function yi(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ep()),
      t.forEach(function (r) {
        var l = cp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Xe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var s = e,
          a = t,
          u = a;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ve = u.stateNode), (Je = !1);
              break e;
            case 3:
              (ve = u.stateNode.containerInfo), (Je = !0);
              break e;
            case 4:
              (ve = u.stateNode.containerInfo), (Je = !0);
              break e;
          }
          u = u.return;
        }
        if (ve === null) throw Error(M(160));
        _c(s, a, l), (ve = null), (Je = !1);
        var i = l.alternate;
        i !== null && (i.return = null), (l.return = null);
      } catch (f) {
        ue(l, t, f);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ec(t, e), (t = t.sibling);
}
function Ec(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Xe(t, e), lt(e), r & 4)) {
        try {
          rr(3, e, e.return), Ol(3, e);
        } catch (D) {
          ue(e, e.return, D);
        }
        try {
          rr(5, e, e.return);
        } catch (D) {
          ue(e, e.return, D);
        }
      }
      break;
    case 1:
      Xe(t, e), lt(e), r & 512 && n !== null && yn(n, n.return);
      break;
    case 5:
      if (
        (Xe(t, e),
        lt(e),
        r & 512 && n !== null && yn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          ar(l, "");
        } catch (D) {
          ue(e, e.return, D);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var s = e.memoizedProps,
          a = n !== null ? n.memoizedProps : s,
          u = e.type,
          i = e.updateQueue;
        if (((e.updateQueue = null), i !== null))
          try {
            u === "input" && s.type === "radio" && s.name != null && Yi(l, s),
              Ls(u, a);
            var f = Ls(u, s);
            for (a = 0; a < i.length; a += 2) {
              var j = i[a],
                v = i[a + 1];
              j === "style"
                ? eu(l, v)
                : j === "dangerouslySetInnerHTML"
                ? Zi(l, v)
                : j === "children"
                ? ar(l, v)
                : No(l, j, v, f);
            }
            switch (u) {
              case "input":
                Ps(l, s);
                break;
              case "textarea":
                Ki(l, s);
                break;
              case "select":
                var x = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!s.multiple;
                var _ = s.value;
                _ != null
                  ? vn(l, !!s.multiple, _, !1)
                  : x !== !!s.multiple &&
                    (s.defaultValue != null
                      ? vn(l, !!s.multiple, s.defaultValue, !0)
                      : vn(l, !!s.multiple, s.multiple ? [] : "", !1));
            }
            l[xr] = s;
          } catch (D) {
            ue(e, e.return, D);
          }
      }
      break;
    case 6:
      if ((Xe(t, e), lt(e), r & 4)) {
        if (e.stateNode === null) throw Error(M(162));
        (l = e.stateNode), (s = e.memoizedProps);
        try {
          l.nodeValue = s;
        } catch (D) {
          ue(e, e.return, D);
        }
      }
      break;
    case 3:
      if (
        (Xe(t, e), lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          dr(t.containerInfo);
        } catch (D) {
          ue(e, e.return, D);
        }
      break;
    case 4:
      Xe(t, e), lt(e);
      break;
    case 13:
      Xe(t, e),
        lt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((s = l.memoizedState !== null),
          (l.stateNode.isHidden = s),
          !s ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (na = de())),
        r & 4 && yi(e);
      break;
    case 22:
      if (
        ((j = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ce = (f = Ce) || j), Xe(t, e), (Ce = f)) : Xe(t, e),
        lt(e),
        r & 8192)
      ) {
        if (
          ((f = e.memoizedState !== null),
          (e.stateNode.isHidden = f) && !j && e.mode & 1)
        )
          for ($ = e, j = e.child; j !== null; ) {
            for (v = $ = j; $ !== null; ) {
              switch (((x = $), (_ = x.child), x.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  rr(4, x, x.return);
                  break;
                case 1:
                  yn(x, x.return);
                  var k = x.stateNode;
                  if (typeof k.componentWillUnmount == "function") {
                    (r = x), (n = x.return);
                    try {
                      (t = r),
                        (k.props = t.memoizedProps),
                        (k.state = t.memoizedState),
                        k.componentWillUnmount();
                    } catch (D) {
                      ue(r, n, D);
                    }
                  }
                  break;
                case 5:
                  yn(x, x.return);
                  break;
                case 22:
                  if (x.memoizedState !== null) {
                    vi(v);
                    continue;
                  }
              }
              _ !== null ? ((_.return = x), ($ = _)) : vi(v);
            }
            j = j.sibling;
          }
        e: for (j = null, v = e; ; ) {
          if (v.tag === 5) {
            if (j === null) {
              j = v;
              try {
                (l = v.stateNode),
                  f
                    ? ((s = l.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((u = v.stateNode),
                      (i = v.memoizedProps.style),
                      (a =
                        i != null && i.hasOwnProperty("display")
                          ? i.display
                          : null),
                      (u.style.display = Ji("display", a)));
              } catch (D) {
                ue(e, e.return, D);
              }
            }
          } else if (v.tag === 6) {
            if (j === null)
              try {
                v.stateNode.nodeValue = f ? "" : v.memoizedProps;
              } catch (D) {
                ue(e, e.return, D);
              }
          } else if (
            ((v.tag !== 22 && v.tag !== 23) ||
              v.memoizedState === null ||
              v === e) &&
            v.child !== null
          ) {
            (v.child.return = v), (v = v.child);
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            j === v && (j = null), (v = v.return);
          }
          j === v && (j = null), (v.sibling.return = v.return), (v = v.sibling);
        }
      }
      break;
    case 19:
      Xe(t, e), lt(e), r & 4 && yi(e);
      break;
    case 21:
      break;
    default:
      Xe(t, e), lt(e);
  }
}
function lt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Cc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(M(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (ar(l, ""), (r.flags &= -33));
          var s = xi(e);
          co(e, s, l);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            u = xi(e);
          uo(e, u, a);
          break;
        default:
          throw Error(M(161));
      }
    } catch (i) {
      ue(e, e.return, i);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function np(e, t, n) {
  ($ = e), bc(e);
}
function bc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; $ !== null; ) {
    var l = $,
      s = l.child;
    if (l.tag === 22 && r) {
      var a = l.memoizedState !== null || Hr;
      if (!a) {
        var u = l.alternate,
          i = (u !== null && u.memoizedState !== null) || Ce;
        u = Hr;
        var f = Ce;
        if (((Hr = a), (Ce = i) && !f))
          for ($ = l; $ !== null; )
            (a = $),
              (i = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? wi(l)
                : i !== null
                ? ((i.return = a), ($ = i))
                : wi(l);
        for (; s !== null; ) ($ = s), bc(s), (s = s.sibling);
        ($ = l), (Hr = u), (Ce = f);
      }
      gi(e);
    } else
      l.subtreeFlags & 8772 && s !== null ? ((s.return = l), ($ = s)) : gi(e);
  }
}
function gi(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ce || Ol(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ce)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ze(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && ni(t, s, r);
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
                ni(t, a, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var i = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    i.autoFocus && n.focus();
                    break;
                  case "img":
                    i.src && (n.src = i.src);
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
                var f = t.alternate;
                if (f !== null) {
                  var j = f.memoizedState;
                  if (j !== null) {
                    var v = j.dehydrated;
                    v !== null && dr(v);
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
              throw Error(M(163));
          }
        Ce || (t.flags & 512 && io(t));
      } catch (x) {
        ue(t, t.return, x);
      }
    }
    if (t === e) {
      $ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), ($ = n);
      break;
    }
    $ = t.return;
  }
}
function vi(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t === e) {
      $ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), ($ = n);
      break;
    }
    $ = t.return;
  }
}
function wi(e) {
  for (; $ !== null; ) {
    var t = $;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ol(4, t);
          } catch (i) {
            ue(t, n, i);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (i) {
              ue(t, l, i);
            }
          }
          var s = t.return;
          try {
            io(t);
          } catch (i) {
            ue(t, s, i);
          }
          break;
        case 5:
          var a = t.return;
          try {
            io(t);
          } catch (i) {
            ue(t, a, i);
          }
      }
    } catch (i) {
      ue(t, t.return, i);
    }
    if (t === e) {
      $ = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), ($ = u);
      break;
    }
    $ = t.return;
  }
}
var rp = Math.ceil,
  Cl = gt.ReactCurrentDispatcher,
  ea = gt.ReactCurrentOwner,
  Ge = gt.ReactCurrentBatchConfig,
  Z = 0,
  ge = null,
  fe = null,
  we = 0,
  $e = 0,
  gn = $t(0),
  me = 0,
  jr = null,
  en = 0,
  Ql = 0,
  ta = 0,
  lr = null,
  Me = null,
  na = 0,
  Tn = 1 / 0,
  ut = null,
  _l = !1,
  fo = null,
  zt = null,
  Wr = !1,
  _t = null,
  El = 0,
  sr = 0,
  po = null,
  rl = -1,
  ll = 0;
function be() {
  return Z & 6 ? de() : rl !== -1 ? rl : (rl = de());
}
function Mt(e) {
  return e.mode & 1
    ? Z & 2 && we !== 0
      ? we & -we
      : Of.transition !== null
      ? (ll === 0 && (ll = fu()), ll)
      : ((e = ee),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : vu(e.type))),
        e)
    : 1;
}
function nt(e, t, n, r) {
  if (50 < sr) throw ((sr = 0), (po = null), Error(M(185)));
  Cr(e, n, r),
    (!(Z & 2) || e !== ge) &&
      (e === ge && (!(Z & 2) && (Ql |= n), me === 4 && kt(e, we)),
      Re(e, r),
      n === 1 && Z === 0 && !(t.mode & 1) && ((Tn = de() + 500), Rl && Ft()));
}
function Re(e, t) {
  var n = e.callbackNode;
  Fd(e, t);
  var r = cl(e, e === ge ? we : 0);
  if (r === 0)
    n !== null && Pa(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Pa(n), t === 1))
      e.tag === 0 ? Ff(Si.bind(null, e)) : $u(Si.bind(null, e)),
        If(function () {
          !(Z & 6) && Ft();
        }),
        (n = null);
    else {
      switch (pu(r)) {
        case 1:
          n = bo;
          break;
        case 4:
          n = cu;
          break;
        case 16:
          n = ul;
          break;
        case 536870912:
          n = du;
          break;
        default:
          n = ul;
      }
      n = Uc(n, Pc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Pc(e, t) {
  if (((rl = -1), (ll = 0), Z & 6)) throw Error(M(327));
  var n = e.callbackNode;
  if (kn() && e.callbackNode !== n) return null;
  var r = cl(e, e === ge ? we : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = bl(e, r);
  else {
    t = r;
    var l = Z;
    Z |= 2;
    var s = Tc();
    (ge !== e || we !== t) && ((ut = null), (Tn = de() + 500), Yt(e, t));
    do
      try {
        op();
        break;
      } catch (u) {
        Dc(e, u);
      }
    while (!0);
    Qo(),
      (Cl.current = s),
      (Z = l),
      fe !== null ? (t = 0) : ((ge = null), (we = 0), (t = me));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Fs(e)), l !== 0 && ((r = l), (t = mo(e, l)))), t === 1)
    )
      throw ((n = jr), Yt(e, 0), kt(e, r), Re(e, de()), n);
    if (t === 6) kt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !lp(l) &&
          ((t = bl(e, r)),
          t === 2 && ((s = Fs(e)), s !== 0 && ((r = s), (t = mo(e, s)))),
          t === 1))
      )
        throw ((n = jr), Yt(e, 0), kt(e, r), Re(e, de()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          Bt(e, Me, ut);
          break;
        case 3:
          if (
            (kt(e, r), (r & 130023424) === r && ((t = na + 500 - de()), 10 < t))
          ) {
            if (cl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              be(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Gs(Bt.bind(null, e, Me, ut), t);
            break;
          }
          Bt(e, Me, ut);
          break;
        case 4:
          if ((kt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var a = 31 - tt(r);
            (s = 1 << a), (a = t[a]), a > l && (l = a), (r &= ~s);
          }
          if (
            ((r = l),
            (r = de() - r),
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
                : 1960 * rp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Gs(Bt.bind(null, e, Me, ut), r);
            break;
          }
          Bt(e, Me, ut);
          break;
        case 5:
          Bt(e, Me, ut);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return Re(e, de()), e.callbackNode === n ? Pc.bind(null, e) : null;
}
function mo(e, t) {
  var n = lr;
  return (
    e.current.memoizedState.isDehydrated && (Yt(e, t).flags |= 256),
    (e = bl(e, t)),
    e !== 2 && ((t = Me), (Me = n), t !== null && ho(t)),
    e
  );
}
function ho(e) {
  Me === null ? (Me = e) : Me.push.apply(Me, e);
}
function lp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            s = l.getSnapshot;
          l = l.value;
          try {
            if (!rt(s(), l)) return !1;
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
function kt(e, t) {
  for (
    t &= ~ta,
      t &= ~Ql,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - tt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Si(e) {
  if (Z & 6) throw Error(M(327));
  kn();
  var t = cl(e, 0);
  if (!(t & 1)) return Re(e, de()), null;
  var n = bl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Fs(e);
    r !== 0 && ((t = r), (n = mo(e, r)));
  }
  if (n === 1) throw ((n = jr), Yt(e, 0), kt(e, t), Re(e, de()), n);
  if (n === 6) throw Error(M(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Bt(e, Me, ut),
    Re(e, de()),
    null
  );
}
function ra(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    (Z = n), Z === 0 && ((Tn = de() + 500), Rl && Ft());
  }
}
function tn(e) {
  _t !== null && _t.tag === 0 && !(Z & 6) && kn();
  var t = Z;
  Z |= 1;
  var n = Ge.transition,
    r = ee;
  try {
    if (((Ge.transition = null), (ee = 1), e)) return e();
  } finally {
    (ee = r), (Ge.transition = n), (Z = t), !(Z & 6) && Ft();
  }
}
function la() {
  ($e = gn.current), re(gn);
}
function Yt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Lf(n)), fe !== null))
    for (n = fe.return; n !== null; ) {
      var r = n;
      switch (($o(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && hl();
          break;
        case 3:
          Pn(), re(Ie), re(_e), Go();
          break;
        case 5:
          Wo(r);
          break;
        case 4:
          Pn();
          break;
        case 13:
          re(oe);
          break;
        case 19:
          re(oe);
          break;
        case 10:
          Ao(r.type._context);
          break;
        case 22:
        case 23:
          la();
      }
      n = n.return;
    }
  if (
    ((ge = e),
    (fe = e = Lt(e.current, null)),
    (we = $e = t),
    (me = 0),
    (jr = null),
    (ta = Ql = en = 0),
    (Me = lr = null),
    Wt !== null)
  ) {
    for (t = 0; t < Wt.length; t++)
      if (((n = Wt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          s = n.pending;
        if (s !== null) {
          var a = s.next;
          (s.next = l), (r.next = a);
        }
        n.pending = r;
      }
    Wt = null;
  }
  return e;
}
function Dc(e, t) {
  do {
    var n = fe;
    try {
      if ((Qo(), (el.current = kl), Nl)) {
        for (var r = ae.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Nl = !1;
      }
      if (
        ((Jt = 0),
        (ye = pe = ae = null),
        (nr = !1),
        (vr = 0),
        (ea.current = null),
        n === null || n.return === null)
      ) {
        (me = 1), (jr = t), (fe = null);
        break;
      }
      e: {
        var s = e,
          a = n.return,
          u = n,
          i = t;
        if (
          ((t = we),
          (u.flags |= 32768),
          i !== null && typeof i == "object" && typeof i.then == "function")
        ) {
          var f = i,
            j = u,
            v = j.tag;
          if (!(j.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var x = j.alternate;
            x
              ? ((j.updateQueue = x.updateQueue),
                (j.memoizedState = x.memoizedState),
                (j.lanes = x.lanes))
              : ((j.updateQueue = null), (j.memoizedState = null));
          }
          var _ = ii(a);
          if (_ !== null) {
            (_.flags &= -257),
              ui(_, a, u, s, t),
              _.mode & 1 && ai(s, f, t),
              (t = _),
              (i = f);
            var k = t.updateQueue;
            if (k === null) {
              var D = new Set();
              D.add(i), (t.updateQueue = D);
            } else k.add(i);
            break e;
          } else {
            if (!(t & 1)) {
              ai(s, f, t), sa();
              break e;
            }
            i = Error(M(426));
          }
        } else if (se && u.mode & 1) {
          var V = ii(a);
          if (V !== null) {
            !(V.flags & 65536) && (V.flags |= 256),
              ui(V, a, u, s, t),
              Fo(Dn(i, u));
            break e;
          }
        }
        (s = i = Dn(i, u)),
          me !== 4 && (me = 2),
          lr === null ? (lr = [s]) : lr.push(s),
          (s = a);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var h = pc(s, i, t);
              ti(s, h);
              break e;
            case 1:
              u = i;
              var p = s.type,
                y = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (zt === null || !zt.has(y))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var E = mc(s, u, t);
                ti(s, E);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Mc(n);
    } catch (I) {
      (t = I), fe === n && n !== null && (fe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Tc() {
  var e = Cl.current;
  return (Cl.current = kl), e === null ? kl : e;
}
function sa() {
  (me === 0 || me === 3 || me === 2) && (me = 4),
    ge === null || (!(en & 268435455) && !(Ql & 268435455)) || kt(ge, we);
}
function bl(e, t) {
  var n = Z;
  Z |= 2;
  var r = Tc();
  (ge !== e || we !== t) && ((ut = null), Yt(e, t));
  do
    try {
      sp();
      break;
    } catch (l) {
      Dc(e, l);
    }
  while (!0);
  if ((Qo(), (Z = n), (Cl.current = r), fe !== null)) throw Error(M(261));
  return (ge = null), (we = 0), me;
}
function sp() {
  for (; fe !== null; ) zc(fe);
}
function op() {
  for (; fe !== null && !Dd(); ) zc(fe);
}
function zc(e) {
  var t = Ic(e.alternate, e, $e);
  (e.memoizedProps = e.pendingProps),
    t === null ? Mc(e) : (fe = t),
    (ea.current = null);
}
function Mc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Jf(n, t)), n !== null)) {
        (n.flags &= 32767), (fe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (me = 6), (fe = null);
        return;
      }
    } else if (((n = Zf(n, t, $e)), n !== null)) {
      fe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      fe = t;
      return;
    }
    fe = t = e;
  } while (t !== null);
  me === 0 && (me = 5);
}
function Bt(e, t, n) {
  var r = ee,
    l = Ge.transition;
  try {
    (Ge.transition = null), (ee = 1), ap(e, t, n, r);
  } finally {
    (Ge.transition = l), (ee = r);
  }
  return null;
}
function ap(e, t, n, r) {
  do kn();
  while (_t !== null);
  if (Z & 6) throw Error(M(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(M(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (Od(e, s),
    e === ge && ((fe = ge = null), (we = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Wr ||
      ((Wr = !0),
      Uc(ul, function () {
        return kn(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Ge.transition), (Ge.transition = null);
    var a = ee;
    ee = 1;
    var u = Z;
    (Z |= 4),
      (ea.current = null),
      tp(e, n),
      Ec(n, e),
      Ef(Hs),
      (dl = !!Bs),
      (Hs = Bs = null),
      (e.current = n),
      np(n),
      Td(),
      (Z = u),
      (ee = a),
      (Ge.transition = s);
  } else e.current = n;
  if (
    (Wr && ((Wr = !1), (_t = e), (El = l)),
    (s = e.pendingLanes),
    s === 0 && (zt = null),
    Ld(n.stateNode),
    Re(e, de()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (_l) throw ((_l = !1), (e = fo), (fo = null), e);
  return (
    El & 1 && e.tag !== 0 && kn(),
    (s = e.pendingLanes),
    s & 1 ? (e === po ? sr++ : ((sr = 0), (po = e))) : (sr = 0),
    Ft(),
    null
  );
}
function kn() {
  if (_t !== null) {
    var e = pu(El),
      t = Ge.transition,
      n = ee;
    try {
      if (((Ge.transition = null), (ee = 16 > e ? 16 : e), _t === null))
        var r = !1;
      else {
        if (((e = _t), (_t = null), (El = 0), Z & 6)) throw Error(M(331));
        var l = Z;
        for (Z |= 4, $ = e.current; $ !== null; ) {
          var s = $,
            a = s.child;
          if ($.flags & 16) {
            var u = s.deletions;
            if (u !== null) {
              for (var i = 0; i < u.length; i++) {
                var f = u[i];
                for ($ = f; $ !== null; ) {
                  var j = $;
                  switch (j.tag) {
                    case 0:
                    case 11:
                    case 15:
                      rr(8, j, s);
                  }
                  var v = j.child;
                  if (v !== null) (v.return = j), ($ = v);
                  else
                    for (; $ !== null; ) {
                      j = $;
                      var x = j.sibling,
                        _ = j.return;
                      if ((kc(j), j === f)) {
                        $ = null;
                        break;
                      }
                      if (x !== null) {
                        (x.return = _), ($ = x);
                        break;
                      }
                      $ = _;
                    }
                }
              }
              var k = s.alternate;
              if (k !== null) {
                var D = k.child;
                if (D !== null) {
                  k.child = null;
                  do {
                    var V = D.sibling;
                    (D.sibling = null), (D = V);
                  } while (D !== null);
                }
              }
              $ = s;
            }
          }
          if (s.subtreeFlags & 2064 && a !== null) (a.return = s), ($ = a);
          else
            e: for (; $ !== null; ) {
              if (((s = $), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    rr(9, s, s.return);
                }
              var h = s.sibling;
              if (h !== null) {
                (h.return = s.return), ($ = h);
                break e;
              }
              $ = s.return;
            }
        }
        var p = e.current;
        for ($ = p; $ !== null; ) {
          a = $;
          var y = a.child;
          if (a.subtreeFlags & 2064 && y !== null) (y.return = a), ($ = y);
          else
            e: for (a = p; $ !== null; ) {
              if (((u = $), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ol(9, u);
                  }
                } catch (I) {
                  ue(u, u.return, I);
                }
              if (u === a) {
                $ = null;
                break e;
              }
              var E = u.sibling;
              if (E !== null) {
                (E.return = u.return), ($ = E);
                break e;
              }
              $ = u.return;
            }
        }
        if (
          ((Z = l), Ft(), at && typeof at.onPostCommitFiberRoot == "function")
        )
          try {
            at.onPostCommitFiberRoot(zl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ee = n), (Ge.transition = t);
    }
  }
  return !1;
}
function ji(e, t, n) {
  (t = Dn(n, t)),
    (t = pc(e, t, 1)),
    (e = Tt(e, t, 1)),
    (t = be()),
    e !== null && (Cr(e, 1, t), Re(e, t));
}
function ue(e, t, n) {
  if (e.tag === 3) ji(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ji(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (zt === null || !zt.has(r)))
        ) {
          (e = Dn(n, e)),
            (e = mc(t, e, 1)),
            (t = Tt(t, e, 1)),
            (e = be()),
            t !== null && (Cr(t, 1, e), Re(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ip(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = be()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ge === e &&
      (we & n) === n &&
      (me === 4 || (me === 3 && (we & 130023424) === we && 500 > de() - na)
        ? Yt(e, 0)
        : (ta |= n)),
    Re(e, t);
}
function Lc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ur), (Ur <<= 1), !(Ur & 130023424) && (Ur = 4194304))
      : (t = 1));
  var n = be();
  (e = xt(e, t)), e !== null && (Cr(e, t, n), Re(e, n));
}
function up(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Lc(e, n);
}
function cp(e, t) {
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
      throw Error(M(314));
  }
  r !== null && r.delete(t), Lc(e, n);
}
var Ic;
Ic = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ie.current) Le = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Le = !1), Xf(e, t, n);
      Le = !!(e.flags & 131072);
    }
  else (Le = !1), se && t.flags & 1048576 && Fu(t, gl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      nl(e, t), (e = t.pendingProps);
      var l = _n(t, _e.current);
      Nn(t, n), (l = Yo(null, t, r, e, l, n));
      var s = Ko();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ue(r) ? ((s = !0), xl(t)) : (s = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Bo(t),
            (l.updater = Fl),
            (t.stateNode = l),
            (l._reactInternals = t),
            eo(t, r, e, n),
            (t = ro(null, t, r, !0, s, n)))
          : ((t.tag = 0), se && s && Ro(t), Ee(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (nl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = fp(r)),
          (e = Ze(r, e)),
          l)
        ) {
          case 0:
            t = no(null, t, r, e, n);
            break e;
          case 1:
            t = fi(null, t, r, e, n);
            break e;
          case 11:
            t = ci(null, t, r, e, n);
            break e;
          case 14:
            t = di(null, t, r, Ze(r.type, e), n);
            break e;
        }
        throw Error(M(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ze(r, l)),
        no(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ze(r, l)),
        fi(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((gc(t), e === null)) throw Error(M(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (l = s.element),
          Hu(e, t),
          Sl(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (l = Dn(Error(M(423)), t)), (t = pi(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Dn(Error(M(424)), t)), (t = pi(e, t, r, n, l));
            break e;
          } else
            for (
              Fe = Dt(t.stateNode.containerInfo.firstChild),
                Oe = t,
                se = !0,
                et = null,
                n = Vu(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((En(), r === l)) {
            t = yt(e, t, n);
            break e;
          }
          Ee(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Wu(t),
        e === null && Xs(t),
        (r = t.type),
        (l = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (a = l.children),
        Ws(r, l) ? (a = null) : s !== null && Ws(r, s) && (t.flags |= 32),
        yc(e, t),
        Ee(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Xs(t), null;
    case 13:
      return vc(e, t, n);
    case 4:
      return (
        Ho(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = bn(t, null, r, n)) : Ee(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ze(r, l)),
        ci(e, t, r, l, n)
      );
    case 7:
      return Ee(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ee(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ee(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (s = t.memoizedProps),
          (a = l.value),
          te(vl, r._currentValue),
          (r._currentValue = a),
          s !== null)
        )
          if (rt(s.value, a)) {
            if (s.children === l.children && !Ie.current) {
              t = yt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var u = s.dependencies;
              if (u !== null) {
                a = s.child;
                for (var i = u.firstContext; i !== null; ) {
                  if (i.context === r) {
                    if (s.tag === 1) {
                      (i = pt(-1, n & -n)), (i.tag = 2);
                      var f = s.updateQueue;
                      if (f !== null) {
                        f = f.shared;
                        var j = f.pending;
                        j === null
                          ? (i.next = i)
                          : ((i.next = j.next), (j.next = i)),
                          (f.pending = i);
                      }
                    }
                    (s.lanes |= n),
                      (i = s.alternate),
                      i !== null && (i.lanes |= n),
                      Zs(s.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  i = i.next;
                }
              } else if (s.tag === 10) a = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((a = s.return), a === null)) throw Error(M(341));
                (a.lanes |= n),
                  (u = a.alternate),
                  u !== null && (u.lanes |= n),
                  Zs(a, n, t),
                  (a = s.sibling);
              } else a = s.child;
              if (a !== null) a.return = s;
              else
                for (a = s; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((s = a.sibling), s !== null)) {
                    (s.return = a.return), (a = s);
                    break;
                  }
                  a = a.return;
                }
              s = a;
            }
        Ee(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Nn(t, n),
        (l = qe(l)),
        (r = r(l)),
        (t.flags |= 1),
        Ee(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Ze(r, t.pendingProps)),
        (l = Ze(r.type, l)),
        di(e, t, r, l, n)
      );
    case 15:
      return hc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Ze(r, l)),
        nl(e, t),
        (t.tag = 1),
        Ue(r) ? ((e = !0), xl(t)) : (e = !1),
        Nn(t, n),
        fc(t, r, l),
        eo(t, r, l, n),
        ro(null, t, r, !0, e, n)
      );
    case 19:
      return wc(e, t, n);
    case 22:
      return xc(e, t, n);
  }
  throw Error(M(156, t.tag));
};
function Uc(e, t) {
  return uu(e, t);
}
function dp(e, t, n, r) {
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
function We(e, t, n, r) {
  return new dp(e, t, n, r);
}
function oa(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function fp(e) {
  if (typeof e == "function") return oa(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Co)) return 11;
    if (e === _o) return 14;
  }
  return 2;
}
function Lt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = We(e.tag, t, e.key, e.mode)),
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
function sl(e, t, n, r, l, s) {
  var a = 2;
  if (((r = e), typeof e == "function")) oa(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case an:
        return Kt(n.children, l, s, t);
      case ko:
        (a = 8), (l |= 8);
        break;
      case ks:
        return (
          (e = We(12, n, t, l | 2)), (e.elementType = ks), (e.lanes = s), e
        );
      case Cs:
        return (e = We(13, n, t, l)), (e.elementType = Cs), (e.lanes = s), e;
      case _s:
        return (e = We(19, n, t, l)), (e.elementType = _s), (e.lanes = s), e;
      case Wi:
        return Al(n, l, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Bi:
              a = 10;
              break e;
            case Hi:
              a = 9;
              break e;
            case Co:
              a = 11;
              break e;
            case _o:
              a = 14;
              break e;
            case St:
              (a = 16), (r = null);
              break e;
          }
        throw Error(M(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = We(a, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function Kt(e, t, n, r) {
  return (e = We(7, e, r, t)), (e.lanes = n), e;
}
function Al(e, t, n, r) {
  return (
    (e = We(22, e, r, t)),
    (e.elementType = Wi),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ss(e, t, n) {
  return (e = We(6, e, null, t)), (e.lanes = n), e;
}
function js(e, t, n) {
  return (
    (t = We(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function pp(e, t, n, r, l) {
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
    (this.eventTimes = ns(0)),
    (this.expirationTimes = ns(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ns(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function aa(e, t, n, r, l, s, a, u, i) {
  return (
    (e = new pp(e, t, n, u, i)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = We(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Bo(s),
    e
  );
}
function mp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: on,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Rc(e) {
  if (!e) return Ut;
  e = e._reactInternals;
  e: {
    if (rn(e) !== e || e.tag !== 1) throw Error(M(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ue(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(M(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ue(n)) return Ru(e, n, t);
  }
  return t;
}
function $c(e, t, n, r, l, s, a, u, i) {
  return (
    (e = aa(n, r, !0, e, l, s, a, u, i)),
    (e.context = Rc(null)),
    (n = e.current),
    (r = be()),
    (l = Mt(n)),
    (s = pt(r, l)),
    (s.callback = t ?? null),
    Tt(n, s, l),
    (e.current.lanes = l),
    Cr(e, l, r),
    Re(e, r),
    e
  );
}
function Vl(e, t, n, r) {
  var l = t.current,
    s = be(),
    a = Mt(l);
  return (
    (n = Rc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = pt(s, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Tt(l, t, a)),
    e !== null && (nt(e, l, a, s), Jr(e, l, a)),
    a
  );
}
function Pl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ni(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ia(e, t) {
  Ni(e, t), (e = e.alternate) && Ni(e, t);
}
function hp() {
  return null;
}
var Fc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ua(e) {
  this._internalRoot = e;
}
Bl.prototype.render = ua.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(M(409));
  Vl(e, t, null, null);
};
Bl.prototype.unmount = ua.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    tn(function () {
      Vl(null, e, null, null);
    }),
      (t[ht] = null);
  }
};
function Bl(e) {
  this._internalRoot = e;
}
Bl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = xu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Nt.length && t !== 0 && t < Nt[n].priority; n++);
    Nt.splice(n, 0, e), n === 0 && gu(e);
  }
};
function ca(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Hl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ki() {}
function xp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var f = Pl(a);
        s.call(f);
      };
    }
    var a = $c(t, r, e, 0, null, !1, !1, "", ki);
    return (
      (e._reactRootContainer = a),
      (e[ht] = a.current),
      mr(e.nodeType === 8 ? e.parentNode : e),
      tn(),
      a
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var f = Pl(i);
      u.call(f);
    };
  }
  var i = aa(e, 0, !1, null, null, !1, !1, "", ki);
  return (
    (e._reactRootContainer = i),
    (e[ht] = i.current),
    mr(e.nodeType === 8 ? e.parentNode : e),
    tn(function () {
      Vl(t, i, n, r);
    }),
    i
  );
}
function Wl(e, t, n, r, l) {
  var s = n._reactRootContainer;
  if (s) {
    var a = s;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var i = Pl(a);
        u.call(i);
      };
    }
    Vl(t, a, e, l);
  } else a = xp(n, t, e, l, r);
  return Pl(a);
}
mu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Yn(t.pendingLanes);
        n !== 0 &&
          (Po(t, n | 1), Re(t, de()), !(Z & 6) && ((Tn = de() + 500), Ft()));
      }
      break;
    case 13:
      tn(function () {
        var r = xt(e, 1);
        if (r !== null) {
          var l = be();
          nt(r, e, 1, l);
        }
      }),
        ia(e, 1);
  }
};
Do = function (e) {
  if (e.tag === 13) {
    var t = xt(e, 134217728);
    if (t !== null) {
      var n = be();
      nt(t, e, 134217728, n);
    }
    ia(e, 134217728);
  }
};
hu = function (e) {
  if (e.tag === 13) {
    var t = Mt(e),
      n = xt(e, t);
    if (n !== null) {
      var r = be();
      nt(n, e, t, r);
    }
    ia(e, t);
  }
};
xu = function () {
  return ee;
};
yu = function (e, t) {
  var n = ee;
  try {
    return (ee = e), t();
  } finally {
    ee = n;
  }
};
Us = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ps(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = Ul(r);
            if (!l) throw Error(M(90));
            qi(r), Ps(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ki(e, n);
      break;
    case "select":
      (t = n.value), t != null && vn(e, !!n.multiple, t, !1);
  }
};
ru = ra;
lu = tn;
var yp = { usingClientEntryPoint: !1, Events: [Er, fn, Ul, tu, nu, ra] },
  Wn = {
    findFiberByHostInstance: Ht,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  gp = {
    bundleType: Wn.bundleType,
    version: Wn.version,
    rendererPackageName: Wn.rendererPackageName,
    rendererConfig: Wn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: gt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = au(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Wn.findFiberByHostInstance || hp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Gr.isDisabled && Gr.supportsFiber)
    try {
      (zl = Gr.inject(gp)), (at = Gr);
    } catch {}
}
Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yp;
Ae.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ca(t)) throw Error(M(200));
  return mp(e, t, null, n);
};
Ae.createRoot = function (e, t) {
  if (!ca(e)) throw Error(M(299));
  var n = !1,
    r = "",
    l = Fc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = aa(e, 1, !1, null, null, n, !1, r, l)),
    (e[ht] = t.current),
    mr(e.nodeType === 8 ? e.parentNode : e),
    new ua(t)
  );
};
Ae.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(M(188))
      : ((e = Object.keys(e).join(",")), Error(M(268, e)));
  return (e = au(t)), (e = e === null ? null : e.stateNode), e;
};
Ae.flushSync = function (e) {
  return tn(e);
};
Ae.hydrate = function (e, t, n) {
  if (!Hl(t)) throw Error(M(200));
  return Wl(null, e, t, !0, n);
};
Ae.hydrateRoot = function (e, t, n) {
  if (!ca(e)) throw Error(M(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    s = "",
    a = Fc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = $c(t, null, e, 1, n ?? null, l, !1, s, a)),
    (e[ht] = t.current),
    mr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Bl(t);
};
Ae.render = function (e, t, n) {
  if (!Hl(t)) throw Error(M(200));
  return Wl(null, e, t, !1, n);
};
Ae.unmountComponentAtNode = function (e) {
  if (!Hl(e)) throw Error(M(40));
  return e._reactRootContainer
    ? (tn(function () {
        Wl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ht] = null);
        });
      }),
      !0)
    : !1;
};
Ae.unstable_batchedUpdates = ra;
Ae.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Hl(n)) throw Error(M(200));
  if (e == null || e._reactInternals === void 0) throw Error(M(38));
  return Wl(e, t, n, !1, r);
};
Ae.version = "18.3.1-next-f1338f8080-20240426";
function Oc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Oc);
    } catch (e) {
      console.error(e);
    }
}
Oc(), (Oi.exports = Ae);
var vp = Oi.exports,
  Qc,
  Ci = vp;
(Qc = Ci.createRoot), Ci.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var wp = {
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
 */ const Sp = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  je = (e, t) => {
    const n = N.forwardRef(
      (
        {
          color: r = "currentColor",
          size: l = 24,
          strokeWidth: s = 2,
          absoluteStrokeWidth: a,
          className: u = "",
          children: i,
          ...f
        },
        j
      ) =>
        N.createElement(
          "svg",
          {
            ref: j,
            ...wp,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: a ? (Number(s) * 24) / Number(l) : s,
            className: ["lucide", `lucide-${Sp(e)}`, u].join(" "),
            ...f,
          },
          [
            ...t.map(([v, x]) => N.createElement(v, x)),
            ...(Array.isArray(i) ? i : [i]),
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
 */ const Dl = je("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jp = je("CheckCircle2", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Np = je("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kp = je("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zn = je("FileText", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cp = je("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _p = je("Layers", [
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
 */ const Ep = je("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pr = je("Package", [
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
 */ const xo = je("Pen", [
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
 */ const Gl = je("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bp = je("Save", [
  [
    "path",
    {
      d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",
      key: "1owoqh",
    },
  ],
  ["polyline", { points: "17 21 17 13 7 13 7 21", key: "1md35c" }],
  ["polyline", { points: "7 3 7 8 15 8", key: "8nz8an" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pp = je("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dp = je("Server", [
  [
    "rect",
    {
      width: "20",
      height: "8",
      x: "2",
      y: "2",
      rx: "2",
      ry: "2",
      key: "ngkwjq",
    },
  ],
  [
    "rect",
    {
      width: "20",
      height: "8",
      x: "2",
      y: "14",
      rx: "2",
      ry: "2",
      key: "iecqi9",
    },
  ],
  ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
  ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const da = je("Trash2", [
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
 */ const Tp = je("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ln = je("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
let qt = null;
const Ac = async () => {
    if (qt) return qt;
    try {
      const e = await fetch("../config.txt");
      if (!e.ok) throw new Error("Failed to load configuration");
      return (qt = await e.json()), qt;
    } catch (e) {
      throw (console.error("Error loading config:", e), e);
    }
  },
  zp = (e) => {
    if (!qt) throw new Error("Configuration not loaded");
    return `${qt.domain}${e}`;
  },
  Mp = () => qt,
  Pe = async (e, t = {}) => {
    await Ac();
    const n = zp(e),
      {
        method: r = "GET",
        headers: l = {},
        body: s,
        responseType: a = "json",
      } = t,
      u = { method: r, headers: { "Content-Type": "application/json", ...l } };
    s && r !== "GET" && (u.body = JSON.stringify(s)),
      console.log(`API Call: ${r} ${n}`, s ? { body: s } : "");
    try {
      const i = await fetch(n, u);
      if (
        (console.log(`API Response: ${r} ${n} - Status: ${i.status}`), !i.ok)
      ) {
        const j = await i.text();
        throw (
          (console.error(`API Error Response: ${r} ${n}`, {
            status: i.status,
            statusText: i.statusText,
            body: j,
          }),
          new Error(`HTTP error! status: ${i.status}, message: ${j}`))
        );
      }
      if (a === "blob") {
        const j = await i.blob();
        return (
          console.log(`API Success Response (blob): ${r} ${n}`, {
            size: j.size,
          }),
          j
        );
      }
      const f = await i.json();
      return console.log(`API Success Response: ${r} ${n}`, f), f;
    } catch (i) {
      throw (console.error(`API call failed: ${r} ${n}`, i), i);
    }
  },
  Lp = async (e) =>
    await Pe("/api/session/login", { method: "POST", body: { Data: e } }),
  Ip = (e) => (
    sessionStorage.setItem("user_session", JSON.stringify(e)),
    sessionStorage.setItem("loggedGUID", e.GUID || ""),
    sessionStorage.setItem("loggedEmployer", e.Employer || ""),
    sessionStorage.setItem("loggedID", e.ID || ""),
    sessionStorage.setItem("loggedName", e.Name || ""),
    sessionStorage.setItem("loggedTime", e.loginTime || ""),
    sessionStorage.setItem("loggedLevel", e.level || ""),
    e
  ),
  Vc = () => {
    const e = sessionStorage.getItem("user_session");
    if (!e) return null;
    try {
      const t = JSON.parse(e);
      if (!t.GUID || !t.ID || !t.Name) return null;
      if (t.loginTime)
        try {
          const n = new Date(t.loginTime).getTime();
          if ((new Date().getTime() - n) / (1e3 * 60 * 60) > 24) return null;
        } catch {
          console.warn("Invalid login time format:", t.loginTime);
        }
      return t;
    } catch (t) {
      return console.error("Failed to parse user session:", t), null;
    }
  },
  Up = () => !!Vc(),
  Rp = () => {
    const e = Vc();
    return (
      (e == null ? void 0 : e.Name) || sessionStorage.getItem("loggedName")
    );
  },
  Ke = ({ size: e = "medium", className: t = "" }) => {
    const n = { small: "w-4 h-4", medium: "w-6 h-6", large: "w-8 h-8" };
    return o.jsx("div", {
      className: `inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent ${n[e]} ${t}`,
      role: "status",
      "aria-label": "Loading",
      children: o.jsx("span", { className: "sr-only", children: "Loading..." }),
    });
  },
  $p = {
    zh: {
      "app.title": "系統登入",
      "error.api": "系統錯誤，請稍後再試",
      logout: "登出",
      copyright: "Copyright ©2025 鴻森智能科技",
    },
    en: {
      "app.title": "System Login",
      "error.api": "System error, please try again later",
      logout: "Logout",
      copyright: "Copyright ©2025 Hongsen Technology",
    },
  },
  Bc = N.createContext(void 0),
  Fp = ({ children: e }) => {
    const [t, n] = N.useState("zh"),
      r = () => {
        n((s) => (s === "zh" ? "en" : "zh"));
      },
      l = (s, a) => {
        let u = $p[t][s] || s;
        return (
          a &&
            Object.entries(a).forEach(([i, f]) => {
              u = u.replace(`{${i}}`, f.toString());
            }),
          u
        );
      };
    return o.jsx(Bc.Provider, {
      value: { language: t, toggleLanguage: r, t: l },
      children: e,
    });
  },
  Op = () => {
    const e = N.useContext(Bc);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  },
  Qp = ({ onLogin: e }) => {
    const { t } = Op(),
      [n, r] = N.useState(""),
      [l, s] = N.useState(""),
      [a, u] = N.useState(null),
      [i, f] = N.useState(!1),
      j = async (v) => {
        v.preventDefault(), u(null), f(!0);
        try {
          const x = await Lp({ ID: n, Password: l });
          x.Code === 200
            ? (Ip(x.Data), e())
            : x.Code === -1 || x.Code === -2
            ? u(x.Result)
            : u(t("error.api"));
        } catch (x) {
          console.error("Login error:", x),
            u(x instanceof Error ? x.message : t("error.api"));
        } finally {
          f(!1);
        }
      };
    return o.jsx("div", {
      className:
        "min-h-screen bg-gray-100 flex items-center justify-center p-4",
      children: o.jsxs("div", {
        className: "bg-white rounded-lg shadow-lg p-8 w-full max-w-md",
        children: [
          o.jsx("h1", {
            className: "text-2xl font-bold text-center text-gray-800 mb-8",
            children: t("app.title"),
          }),
          a &&
            o.jsxs("div", {
              className:
                "mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center gap-2",
              children: [
                o.jsx(Dl, { size: 20 }),
                o.jsx("span", { children: a }),
              ],
            }),
          o.jsxs("form", {
            onSubmit: j,
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
                    value: n,
                    onChange: (v) => r(v.target.value),
                    className:
                      "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                    required: !0,
                    autoComplete: "username",
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
                    value: l,
                    onChange: (v) => s(v.target.value),
                    className:
                      "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                    required: !0,
                    autoComplete: "current-password",
                  }),
                ],
              }),
              o.jsx("button", {
                type: "submit",
                disabled: i,
                className: `w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center ${
                  i
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`,
                children: i
                  ? o.jsxs(o.Fragment, {
                      children: [
                        o.jsx(Ke, { size: "small\\", className: "mr-2" }),
                        "登入中...",
                      ],
                    })
                  : "登入",
              }),
            ],
          }),
        ],
      }),
    });
  },
  fa = ({ x: e, y: t, onClose: n, onViewUnitDetails: r }) => {
    const l = N.useRef(null);
    N.useEffect(() => {
      const a = (i) => {
          l.current && !l.current.contains(i.target) && n();
        },
        u = (i) => {
          i.key === "Escape" && n();
        };
      return (
        document.addEventListener("mousedown", a),
        document.addEventListener("keydown", u),
        () => {
          document.removeEventListener("mousedown", a),
            document.removeEventListener("keydown", u);
        }
      );
    }, [n]);
    const s = () => {
      n(), r();
    };
    return o.jsx("div", {
      ref: l,
      className:
        "fixed bg-white rounded-lg shadow-lg border border-slate-200 py-2 min-w-[180px] z-50",
      style: { left: `${e}px`, top: `${t}px` },
      children: o.jsxs("button", {
        onClick: s,
        className:
          "w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-100 transition-colors flex items-center gap-2",
        children: [
          o.jsx(Cp, { size: 16 }),
          o.jsx("span", { children: "查看詳細單位" }),
        ],
      }),
    });
  },
  pa = ({
    isOpen: e,
    onClose: t,
    medGuid: n,
    medName: r,
    onFetchUnitDetails: l,
    onUpdateUnits: s,
  }) => {
    const [a, u] = N.useState([]),
      [i, f] = N.useState([]),
      [j, v] = N.useState(!1),
      [x, _] = N.useState(!1),
      [k, D] = N.useState(null),
      [V, h] = N.useState(!1),
      p = N.useCallback(async () => {
        v(!0), D(null);
        try {
          const T = await l(n);
          u(T), f(JSON.parse(JSON.stringify(T)));
        } catch (T) {
          D("無法載入單位詳細資訊"),
            console.error("Failed to fetch unit details:", T);
        } finally {
          v(!1);
        }
      }, [n, l]);
    N.useEffect(() => {
      e && n && (p(), h(!1));
    }, [e, n, p]);
    const y = () => {
        h(!0), f(JSON.parse(JSON.stringify(a)));
      },
      E = () => {
        h(!1), f(JSON.parse(JSON.stringify(a)));
      },
      I = () => {
        for (let A = 0; A < i.length; A++) {
          const L = i[A];
          if (!L.unit_name.trim()) return `單位 ${A + 1}：單位名稱不能為空`;
          if (!L.quantity || parseInt(L.quantity) < 1)
            return `單位 ${A + 1}：最小操作數量必須大於 0`;
          if (!L.sort_order || parseInt(L.sort_order) < 1)
            return `單位 ${A + 1}：順序必須大於 0`;
          if (parseInt(L.sort_order) > 1 && !L.conversion_rate)
            return `單位 ${A + 1}：順序大於 1 的單位必須設定換算比例`;
          if (L.conversion_rate && parseFloat(L.conversion_rate) <= 0)
            return `單位 ${A + 1}：換算比例必須大於 0`;
        }
        const T = i.map((A) => parseInt(A.sort_order)),
          B = new Set(T);
        return T.length !== B.size ? "順序不能重複" : null;
      },
      P = async () => {
        const T = I();
        if (T) {
          D(T);
          return;
        }
        _(!0), D(null);
        try {
          await s(i), u(JSON.parse(JSON.stringify(i))), h(!1);
        } catch (B) {
          D("儲存失敗，請稍後再試"), console.error("Failed to save units:", B);
        } finally {
          _(!1);
        }
      },
      U = (T, B, A) => {
        const L = [...i];
        (L[T] = { ...L[T], [B]: A }), f(L);
      },
      R = () => {
        const T = Math.max(...i.map((A) => parseInt(A.sort_order) || 0), 0),
          B = {
            GUID: `NEW_${Date.now()}`,
            med_guid: n,
            unit_type: "撥補",
            unit_name: "",
            quantity: "1",
            sort_order: String(T + 1),
            conversion_rate: "",
          };
        f([...i, B]);
      },
      q = (T) => {
        const B = i.filter((A, L) => L !== T);
        f(B);
      };
    return e
      ? o.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
          children: o.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-hidden",
            children: [
              o.jsxs("div", {
                className:
                  "flex items-center justify-between p-6 border-b border-slate-200",
                children: [
                  o.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      o.jsx("div", {
                        className:
                          "w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center",
                        children: o.jsx(Pr, {
                          size: 20,
                          className: "text-slate-700",
                        }),
                      }),
                      o.jsxs("div", {
                        children: [
                          o.jsx("h2", {
                            className: "text-xl font-bold text-slate-800",
                            children: "單位詳細資訊",
                          }),
                          o.jsx("p", {
                            className: "text-sm text-slate-600",
                            children: r,
                          }),
                        ],
                      }),
                    ],
                  }),
                  o.jsx("button", {
                    onClick: t,
                    className:
                      "text-slate-400 hover:text-slate-600 transition-colors",
                    children: o.jsx(ln, { size: 24 }),
                  }),
                ],
              }),
              o.jsx("div", {
                className: "p-6 overflow-y-auto max-h-[calc(80vh-180px)]",
                children: j
                  ? o.jsx("div", {
                      className: "flex justify-center py-12",
                      children: o.jsx(Ke, {}),
                    })
                  : k
                  ? o.jsxs("div", {
                      className: "text-center py-12",
                      children: [
                        o.jsx("p", { className: "text-red-600", children: k }),
                        o.jsx("button", {
                          onClick: p,
                          className:
                            "mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 transition-colors",
                          children: "重試",
                        }),
                      ],
                    })
                  : a.length === 0 && !V
                  ? o.jsx("div", {
                      className: "text-center py-12 text-slate-500",
                      children: "無單位資訊",
                    })
                  : V
                  ? o.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        i.map((T, B) => {
                          var A;
                          return o.jsx(
                            "div",
                            {
                              className:
                                "bg-white rounded-lg p-4 border-2 border-slate-300",
                              children: o.jsxs("div", {
                                className: "space-y-3",
                                children: [
                                  o.jsxs("div", {
                                    className:
                                      "flex items-center justify-between mb-3",
                                    children: [
                                      o.jsxs("span", {
                                        className:
                                          "text-sm font-semibold text-slate-700",
                                        children: ["單位 ", B + 1],
                                      }),
                                      i.length > 1 &&
                                        o.jsx("button", {
                                          onClick: () => q(B),
                                          className:
                                            "text-red-500 hover:text-red-700 transition-colors",
                                          title: "刪除此單位",
                                          children: o.jsx(da, { size: 16 }),
                                        }),
                                    ],
                                  }),
                                  o.jsxs("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                      o.jsxs("div", {
                                        children: [
                                          o.jsx("label", {
                                            className:
                                              "block text-xs font-medium text-slate-700 mb-1",
                                            children: "單位類型 *",
                                          }),
                                          o.jsxs("select", {
                                            value: T.unit_type,
                                            onChange: (L) =>
                                              U(B, "unit_type", L.target.value),
                                            className:
                                              "w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                                            children: [
                                              o.jsx("option", {
                                                value: "採購",
                                                children: "採購",
                                              }),
                                              o.jsx("option", {
                                                value: "撥補",
                                                children: "撥補",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      o.jsxs("div", {
                                        children: [
                                          o.jsx("label", {
                                            className:
                                              "block text-xs font-medium text-slate-700 mb-1",
                                            children: "單位名稱 *",
                                          }),
                                          o.jsx("input", {
                                            type: "text",
                                            value: T.unit_name,
                                            onChange: (L) =>
                                              U(B, "unit_name", L.target.value),
                                            className:
                                              "w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                                            placeholder: "例：盒、瓶",
                                          }),
                                        ],
                                      }),
                                      o.jsxs("div", {
                                        children: [
                                          o.jsx("label", {
                                            className:
                                              "block text-xs font-medium text-slate-700 mb-1",
                                            children: "最小操作數量 *",
                                          }),
                                          o.jsx("input", {
                                            type: "number",
                                            min: "1",
                                            value: T.quantity,
                                            onChange: (L) =>
                                              U(B, "quantity", L.target.value),
                                            className:
                                              "w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                                          }),
                                        ],
                                      }),
                                      o.jsxs("div", {
                                        children: [
                                          o.jsx("label", {
                                            className:
                                              "block text-xs font-medium text-slate-700 mb-1",
                                            children: "順序 *",
                                          }),
                                          o.jsx("input", {
                                            type: "number",
                                            min: "1",
                                            value: T.sort_order,
                                            onChange: (L) =>
                                              U(
                                                B,
                                                "sort_order",
                                                L.target.value
                                              ),
                                            className:
                                              "w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                                          }),
                                        ],
                                      }),
                                      o.jsxs("div", {
                                        className: "col-span-2",
                                        children: [
                                          o.jsxs("label", {
                                            className:
                                              "block text-xs font-medium text-slate-700 mb-1",
                                            children: [
                                              "換算比例 ",
                                              parseInt(T.sort_order) > 1 && "*",
                                            ],
                                          }),
                                          o.jsx("input", {
                                            type: "number",
                                            min: "0",
                                            step: "0.1",
                                            value: T.conversion_rate,
                                            onChange: (L) =>
                                              U(
                                                B,
                                                "conversion_rate",
                                                L.target.value
                                              ),
                                            className:
                                              "w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                                            placeholder:
                                              parseInt(T.sort_order) === 1
                                                ? "第一層單位無需填寫"
                                                : "與上層單位的換算比例",
                                            disabled:
                                              parseInt(T.sort_order) === 1,
                                          }),
                                          parseInt(T.sort_order) > 1 &&
                                            T.conversion_rate &&
                                            o.jsxs("p", {
                                              className:
                                                "text-xs text-slate-500 mt-1",
                                              children: [
                                                "1 ",
                                                ((A = i[B - 1]) == null
                                                  ? void 0
                                                  : A.unit_name) || "上層單位",
                                                " = ",
                                                T.conversion_rate,
                                                " ",
                                                T.unit_name,
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
                        o.jsxs("button", {
                          onClick: R,
                          className:
                            "w-full py-3 border-2 border-dashed border-slate-300 rounded-lg text-slate-600 hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center justify-center gap-2",
                          children: [
                            o.jsx(Gl, { size: 20 }),
                            o.jsx("span", { children: "新增單位" }),
                          ],
                        }),
                      ],
                    })
                  : o.jsx("div", {
                      className: "space-y-3",
                      children: a.map((T, B) => {
                        var A;
                        return o.jsx(
                          "div",
                          {
                            className:
                              "bg-slate-50 rounded-lg p-4 border border-slate-200 hover:border-slate-300 transition-colors",
                            children: o.jsxs("div", {
                              className: "flex items-start justify-between",
                              children: [
                                o.jsxs("div", {
                                  className: "flex-1",
                                  children: [
                                    o.jsxs("div", {
                                      className: "flex items-center gap-2 mb-2",
                                      children: [
                                        o.jsx("span", {
                                          className:
                                            "inline-block px-2 py-1 bg-slate-700 text-white text-xs rounded",
                                          children: T.unit_type,
                                        }),
                                        o.jsx("span", {
                                          className:
                                            "text-lg font-semibold text-slate-800",
                                          children: T.unit_name,
                                        }),
                                      ],
                                    }),
                                    o.jsxs("div", {
                                      className: "space-y-1",
                                      children: [
                                        T.conversion_rate &&
                                          o.jsxs("p", {
                                            className: "text-sm text-slate-600",
                                            children: [
                                              "換算比例：1 ",
                                              ((A = a[B - 1]) == null
                                                ? void 0
                                                : A.unit_name) || "上層單位",
                                              " = ",
                                              T.conversion_rate,
                                              " ",
                                              T.unit_name,
                                            ],
                                          }),
                                        T.quantity &&
                                          o.jsxs("p", {
                                            className: "text-sm text-slate-600",
                                            children: [
                                              "最小操作數量：",
                                              T.quantity,
                                              " ",
                                              T.unit_name,
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                                o.jsx("div", {
                                  className: "text-right",
                                  children: o.jsxs("span", {
                                    className: "text-xs text-slate-500",
                                    children: ["順序 ", T.sort_order],
                                  }),
                                }),
                              ],
                            }),
                          },
                          T.GUID
                        );
                      }),
                    }),
              }),
              o.jsx("div", {
                className:
                  "flex justify-between items-center gap-3 p-6 border-t border-slate-200 bg-slate-50",
                children: V
                  ? o.jsxs(o.Fragment, {
                      children: [
                        o.jsx("button", {
                          onClick: E,
                          disabled: x,
                          className:
                            "px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        o.jsx("button", {
                          onClick: P,
                          disabled: x,
                          className:
                            "px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white transition-colors flex items-center gap-2 disabled:opacity-50",
                          children: x
                            ? o.jsxs(o.Fragment, {
                                children: [
                                  o.jsx(Ke, {}),
                                  o.jsx("span", { children: "儲存中..." }),
                                ],
                              })
                            : o.jsxs(o.Fragment, {
                                children: [
                                  o.jsx(bp, { size: 16 }),
                                  o.jsx("span", { children: "儲存" }),
                                ],
                              }),
                        }),
                      ],
                    })
                  : o.jsxs(o.Fragment, {
                      children: [
                        o.jsxs("button", {
                          onClick: y,
                          className:
                            "px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors flex items-center gap-2",
                          children: [
                            o.jsx(xo, { size: 16 }),
                            o.jsx("span", { children: "編輯" }),
                          ],
                        }),
                        o.jsx("button", {
                          onClick: t,
                          className:
                            "px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 transition-colors",
                          children: "關閉",
                        }),
                      ],
                    }),
              }),
            ],
          }),
        })
      : null;
  },
  Ap = ({ isOpen: e, onClose: t, drugName: n, drugCode: r, servers: l }) => {
    if (!e) return null;
    const s = l.filter((i) => i.server_type === "藥庫"),
      a = l.filter((i) => i.server_type !== "藥庫"),
      u = (i, f) => (i < f ? "text-red-600" : "text-green-600");
    return o.jsx("div", {
      className:
        "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
      children: o.jsxs("div", {
        className:
          "bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] flex flex-col overflow-hidden",
        children: [
          o.jsx("div", {
            className: "p-6 border-b border-slate-200",
            children: o.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                o.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    o.jsx("div", {
                      className:
                        "w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center",
                      children: o.jsx(Dp, {
                        size: 20,
                        className: "text-blue-700",
                      }),
                    }),
                    o.jsxs("div", {
                      children: [
                        o.jsx("h2", {
                          className: "text-xl font-bold text-slate-800",
                          children: "伺服器詳細資料",
                        }),
                        o.jsxs("p", {
                          className: "text-sm text-slate-600",
                          children: [
                            o.jsx("span", {
                              className: "font-mono font-medium",
                              children: r,
                            }),
                            " - ",
                            n,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsx("button", {
                  onClick: t,
                  className:
                    "text-slate-400 hover:text-slate-600 transition-colors",
                  children: o.jsx(ln, { size: 24 }),
                }),
              ],
            }),
          }),
          o.jsxs("div", {
            className: "flex-1 overflow-y-auto p-6",
            children: [
              s.length > 0 &&
                o.jsxs("div", {
                  className: "mb-8",
                  children: [
                    o.jsx("h3", {
                      className: "text-lg font-semibold text-slate-700 mb-4",
                      children: "藥庫",
                    }),
                    o.jsx("div", {
                      className:
                        "bg-white rounded-lg border border-slate-200 overflow-hidden",
                      children: o.jsxs("table", {
                        className: "w-full",
                        children: [
                          o.jsx("thead", {
                            className: "bg-slate-50 border-b border-slate-200",
                            children: o.jsxs("tr", {
                              children: [
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-sm font-semibold text-slate-700",
                                  children: "伺服器名稱",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-center text-sm font-semibold text-slate-700",
                                  children: "庫存",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-center text-sm font-semibold text-slate-700",
                                  children: "安全量",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-center text-sm font-semibold text-slate-700",
                                  children: "基準量",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-sm font-semibold text-slate-700",
                                  children: "批號",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-sm font-semibold text-slate-700",
                                  children: "效期",
                                }),
                              ],
                            }),
                          }),
                          o.jsxs("tbody", {
                            className: "divide-y divide-slate-200",
                            children: [
                              s.map((i, f) =>
                                o.jsxs(
                                  "tr",
                                  {
                                    className: "hover:bg-slate-50",
                                    children: [
                                      o.jsx("td", {
                                        className:
                                          "px-4 py-3 text-sm text-slate-800 font-medium",
                                        children: i.server_name,
                                      }),
                                      o.jsx("td", {
                                        className: `px-4 py-3 text-sm text-center font-semibold ${u(
                                          i.stock,
                                          i.safety
                                        )}`,
                                        children: i.stock.toLocaleString(),
                                      }),
                                      o.jsx("td", {
                                        className:
                                          "px-4 py-3 text-sm text-center text-slate-600",
                                        children: i.safety.toLocaleString(),
                                      }),
                                      o.jsx("td", {
                                        className:
                                          "px-4 py-3 text-sm text-center text-slate-600",
                                        children: i.standard.toLocaleString(),
                                      }),
                                      o.jsx("td", {
                                        className:
                                          "px-4 py-3 text-sm text-slate-600",
                                        children:
                                          i.lots.length > 0
                                            ? o.jsx("div", {
                                                className:
                                                  "flex flex-col gap-1",
                                                children: i.lots.map((j, v) =>
                                                  o.jsxs(
                                                    "span",
                                                    {
                                                      className: "text-xs",
                                                      children: [
                                                        j,
                                                        " (",
                                                        i.quantities[v] || 0,
                                                        ")",
                                                      ],
                                                    },
                                                    v
                                                  )
                                                ),
                                              })
                                            : "-",
                                      }),
                                      o.jsx("td", {
                                        className:
                                          "px-4 py-3 text-sm text-slate-600",
                                        children:
                                          i.expiry_dates.length > 0
                                            ? o.jsx("div", {
                                                className:
                                                  "flex flex-col gap-1",
                                                children: i.expiry_dates.map(
                                                  (j, v) =>
                                                    o.jsx(
                                                      "span",
                                                      {
                                                        className: "text-xs",
                                                        children: j,
                                                      },
                                                      v
                                                    )
                                                ),
                                              })
                                            : "-",
                                      }),
                                    ],
                                  },
                                  f
                                )
                              ),
                              o.jsxs("tr", {
                                className: "bg-slate-50 font-semibold",
                                children: [
                                  o.jsx("td", {
                                    className:
                                      "px-4 py-3 text-sm text-slate-800",
                                    children: "總計",
                                  }),
                                  o.jsx("td", {
                                    className:
                                      "px-4 py-3 text-sm text-center text-slate-800",
                                    children: s
                                      .reduce((i, f) => i + f.stock, 0)
                                      .toLocaleString(),
                                  }),
                                  o.jsx("td", {
                                    className:
                                      "px-4 py-3 text-sm text-center text-slate-800",
                                    children: s
                                      .reduce((i, f) => i + f.safety, 0)
                                      .toLocaleString(),
                                  }),
                                  o.jsx("td", {
                                    className:
                                      "px-4 py-3 text-sm text-center text-slate-800",
                                    children: s
                                      .reduce((i, f) => i + f.standard, 0)
                                      .toLocaleString(),
                                  }),
                                  o.jsx("td", { colSpan: 2 }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              a.length > 0 &&
                o.jsxs("div", {
                  children: [
                    o.jsx("h3", {
                      className: "text-lg font-semibold text-slate-700 mb-4",
                      children: "藥局",
                    }),
                    o.jsx("div", {
                      className:
                        "bg-white rounded-lg border border-slate-200 overflow-hidden",
                      children: o.jsxs("table", {
                        className: "w-full",
                        children: [
                          o.jsx("thead", {
                            className: "bg-slate-50 border-b border-slate-200",
                            children: o.jsxs("tr", {
                              children: [
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-sm font-semibold text-slate-700",
                                  children: "伺服器名稱",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-center text-sm font-semibold text-slate-700",
                                  children: "庫存",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-center text-sm font-semibold text-slate-700",
                                  children: "安全量",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-center text-sm font-semibold text-slate-700",
                                  children: "基準量",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-sm font-semibold text-slate-700",
                                  children: "批號",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-sm font-semibold text-slate-700",
                                  children: "效期",
                                }),
                              ],
                            }),
                          }),
                          o.jsxs("tbody", {
                            className: "divide-y divide-slate-200",
                            children: [
                              a.map((i, f) =>
                                o.jsxs(
                                  "tr",
                                  {
                                    className: "hover:bg-slate-50",
                                    children: [
                                      o.jsx("td", {
                                        className:
                                          "px-4 py-3 text-sm text-slate-800 font-medium",
                                        children: i.server_name,
                                      }),
                                      o.jsx("td", {
                                        className: `px-4 py-3 text-sm text-center font-semibold ${u(
                                          i.stock,
                                          i.safety
                                        )}`,
                                        children: i.stock.toLocaleString(),
                                      }),
                                      o.jsx("td", {
                                        className:
                                          "px-4 py-3 text-sm text-center text-slate-600",
                                        children: i.safety.toLocaleString(),
                                      }),
                                      o.jsx("td", {
                                        className:
                                          "px-4 py-3 text-sm text-center text-slate-600",
                                        children: i.standard.toLocaleString(),
                                      }),
                                      o.jsx("td", {
                                        className:
                                          "px-4 py-3 text-sm text-slate-600",
                                        children:
                                          i.lots.length > 0
                                            ? o.jsx("div", {
                                                className:
                                                  "flex flex-col gap-1",
                                                children: i.lots.map((j, v) =>
                                                  o.jsxs(
                                                    "span",
                                                    {
                                                      className: "text-xs",
                                                      children: [
                                                        j,
                                                        " (",
                                                        i.quantities[v] || 0,
                                                        ")",
                                                      ],
                                                    },
                                                    v
                                                  )
                                                ),
                                              })
                                            : "-",
                                      }),
                                      o.jsx("td", {
                                        className:
                                          "px-4 py-3 text-sm text-slate-600",
                                        children:
                                          i.expiry_dates.length > 0
                                            ? o.jsx("div", {
                                                className:
                                                  "flex flex-col gap-1",
                                                children: i.expiry_dates.map(
                                                  (j, v) =>
                                                    o.jsx(
                                                      "span",
                                                      {
                                                        className: "text-xs",
                                                        children: j,
                                                      },
                                                      v
                                                    )
                                                ),
                                              })
                                            : "-",
                                      }),
                                    ],
                                  },
                                  f
                                )
                              ),
                              o.jsxs("tr", {
                                className: "bg-slate-50 font-semibold",
                                children: [
                                  o.jsx("td", {
                                    className:
                                      "px-4 py-3 text-sm text-slate-800",
                                    children: "總計",
                                  }),
                                  o.jsx("td", {
                                    className:
                                      "px-4 py-3 text-sm text-center text-slate-800",
                                    children: a
                                      .reduce((i, f) => i + f.stock, 0)
                                      .toLocaleString(),
                                  }),
                                  o.jsx("td", {
                                    className:
                                      "px-4 py-3 text-sm text-center text-slate-800",
                                    children: a
                                      .reduce((i, f) => i + f.safety, 0)
                                      .toLocaleString(),
                                  }),
                                  o.jsx("td", {
                                    className:
                                      "px-4 py-3 text-sm text-center text-slate-800",
                                    children: a
                                      .reduce((i, f) => i + f.standard, 0)
                                      .toLocaleString(),
                                  }),
                                  o.jsx("td", { colSpan: 2 }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              l.length === 0 &&
                o.jsx("div", {
                  className: "text-center py-12",
                  children: o.jsx("p", {
                    className: "text-slate-500",
                    children: "無伺服器資料",
                  }),
                }),
            ],
          }),
          o.jsx("div", {
            className:
              "flex justify-end gap-3 p-6 border-t border-slate-200 bg-white",
            children: o.jsx("button", {
              onClick: t,
              className:
                "px-6 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 font-medium transition-colors",
              children: "關閉",
            }),
          }),
        ],
      }),
    });
  },
  Nr = async (e) => {
    try {
      const t = { ValueAry: [e] };
      console.log("=== API Request: /api/medUnit/get_by_Med_GUID ==="),
        console.log("Request Data:", t),
        console.log("Med GUID:", e);
      const n = await Pe("/api/medUnit/get_by_Med_GUID", {
        method: "POST",
        body: t,
      });
      return console.log("Response:", n), n.Data || [];
    } catch (t) {
      throw (
        (console.error("Failed to fetch unit details by med GUID:", t),
        console.error("Error details:", t),
        t)
      );
    }
  },
  ma = async (e) => {
    try {
      const t = { Data: e };
      console.log("=== API Request: /api/medUnit/update ==="),
        console.log("Request Data:", JSON.stringify(t, null, 2)),
        await Pe("/api/medUnit/update", { method: "POST", body: t }),
        console.log("Units updated successfully");
    } catch (t) {
      throw (console.error("Failed to update units:", t), t);
    }
  },
  ha = async (e) =>
    await Pe("/api/consumption/get_avg_by_start_end", {
      method: "POST",
      body: e,
    }),
  Vp = async () => {
    try {
      const t = (
          await Pe("/api/ServerSetting/get_name", { method: "POST", body: {} })
        ).Data,
        n = new Date(),
        r = new Date();
      r.setDate(r.getDate() - 30);
      const l = (i) => {
          const f = i.getFullYear(),
            j = String(i.getMonth() + 1).padStart(2, "0"),
            v = String(i.getDate()).padStart(2, "0"),
            x = String(i.getHours()).padStart(2, "0"),
            _ = String(i.getMinutes()).padStart(2, "0"),
            k = String(i.getSeconds()).padStart(2, "0");
          return `${f}-${j}-${v} ${x}:${_}:${k}`;
        },
        s = t.map((i) =>
          Promise.all([
            Pe("/api/stock/get_stock", {
              method: "POST",
              body: { ServerName: i.name, ServerType: i.type },
            }),
            ha({
              ValueAry: [l(r), l(n)],
              ServerName: i.name,
              ServerType: i.type,
            }),
          ]).then(([f, j]) => ({
            server: i,
            stockData: f.Data,
            consumptionData: j.Data,
          }))
        ),
        a = await Promise.all(s),
        u = new Map();
      return (
        a.forEach(({ server: i, stockData: f, consumptionData: j }) => {
          const v = new Map(
            j.map((x) => [
              x.CODE,
              typeof x.ANG_QTY == "string"
                ? parseFloat(x.ANG_QTY) || 0
                : x.ANG_QTY || 0,
            ])
          );
          f.forEach((x) => {
            var U, R, q, T, B;
            const _ = x.code,
              k = x.qty.reduce((A, L) => A + parseFloat(L || "0"), 0),
              D = x.content.reduce((A, L) => {
                const H = L.Sub_content.reduce(
                  (G, Y) => G + parseFloat(Y.END_QTY || "0"),
                  0
                );
                return A + H;
              }, 0),
              V = x.content.reduce(
                (A, L) =>
                  L.Sub_content && L.Sub_content.length > 0
                    ? A
                    : A + parseFloat(L.START_QTY || "0"),
                0
              ),
              h = v.get(_) || 0,
              p = parseFloat(
                ((U = x.Classify) == null ? void 0 : U.safe_day) || "0"
              ),
              y = parseFloat(
                ((R = x.Classify) == null ? void 0 : R.standard_day) || "0"
              ),
              E = h * p,
              I = h * y,
              P = {
                server_name: i.name,
                server_type: i.type,
                stock: k,
                safety: E,
                standard: I,
                lots: x.lot || [],
                expiry_dates: x.expiry_date || [],
                quantities: x.qty || [],
                full_data: x,
              };
            if (u.has(_)) {
              const A = u.get(_);
              A.servers.push(P),
                (A.verified_qty = Math.max(A.verified_qty, D)),
                (A.transit_qty = Math.max(A.transit_qty, V));
            } else
              u.set(_, {
                code: x.code,
                material_no: x.material_no,
                name: x.name,
                cht_name:
                  ((q = x.med_cloud) == null ? void 0 : q.CHT_NAME) || "",
                unit: ((T = x.med_cloud) == null ? void 0 : T.MIN_PAKAGE) || "",
                type: ((B = x.med_cloud) == null ? void 0 : B.TYPE) || "",
                verified_qty: D,
                transit_qty: V,
                servers: [P],
              });
          });
        }),
        Array.from(u.values())
      );
    } catch (e) {
      throw (console.error("Failed to fetch inventory data:", e), e);
    }
  },
  Bp = ({ toast: e, onClose: t }) => {
    const [n, r] = N.useState(!1);
    N.useEffect(() => {
      const a = setTimeout(() => {
        r(!0), setTimeout(() => t(e.id), 300);
      }, 3e3);
      return () => clearTimeout(a);
    }, [e.id, t]);
    const l = () => {
        switch (e.type) {
          case "success":
            return o.jsx(jp, { className: "w-5 h-5 text-green-500" });
          case "error":
            return o.jsx(Tp, { className: "w-5 h-5 text-red-500" });
          case "warning":
            return o.jsx(Dl, { className: "w-5 h-5 text-yellow-500" });
          case "info":
            return o.jsx(Dl, { className: "w-5 h-5 text-blue-500" });
        }
      },
      s = () => {
        switch (e.type) {
          case "success":
            return "bg-green-50 border-green-200";
          case "error":
            return "bg-red-50 border-red-200";
          case "warning":
            return "bg-yellow-50 border-yellow-200";
          case "info":
            return "bg-blue-50 border-blue-200";
        }
      };
    return o.jsxs("div", {
      className: `
        flex items-center gap-3 min-w-[300px] max-w-md p-4 rounded-lg border shadow-lg
        ${s()}
        ${n ? "animate-slide-out-left" : "animate-slide-in-right"}
      `,
      children: [
        l(),
        o.jsx("p", {
          className: "flex-1 text-sm font-medium text-gray-800",
          children: e.message,
        }),
        o.jsx("button", {
          onClick: () => {
            r(!0), setTimeout(() => t(e.id), 300);
          },
          className: "text-gray-400 hover:text-gray-600 transition-colors",
          children: o.jsx(ln, { className: "w-4 h-4" }),
        }),
      ],
    });
  },
  Hc = N.createContext(void 0),
  xa = () => {
    const e = N.useContext(Hc);
    if (!e) throw new Error("useToast must be used within ToastProvider");
    return e;
  },
  Hp = ({ children: e }) => {
    const [t, n] = N.useState([]),
      r = N.useCallback((s, a = "info") => {
        const u = `toast-${Date.now()}-${Math.random()}`;
        n((i) => [...i, { id: u, message: s, type: a }]);
      }, []),
      l = N.useCallback((s) => {
        n((a) => a.filter((u) => u.id !== s));
      }, []);
    return o.jsxs(Hc.Provider, {
      value: { showToast: r },
      children: [
        e,
        o.jsx("div", {
          className: "fixed top-4 right-4 z-[9999] flex flex-col gap-2",
          children: t.map((s) => o.jsx(Bp, { toast: s, onClose: l }, s.id)),
        }),
      ],
    });
  },
  Wp = () => {
    const { showToast: e } = xa(),
      [t, n] = N.useState([]),
      [r, l] = N.useState(!0),
      [s, a] = N.useState(""),
      [u, i] = N.useState(new Set(["all"])),
      [f, j] = N.useState("all"),
      [v, x] = N.useState(null),
      [_, k] = N.useState(null),
      [D, V] = N.useState(!1),
      [h, p] = N.useState(!1);
    N.useEffect(() => {
      y();
    }, []);
    const y = async () => {
        try {
          l(!0);
          const L = await Vp();
          n(L);
        } catch (L) {
          console.error("Failed to load inventory data:", L),
            e("載入庫存資料失敗", "error");
        } finally {
          l(!1);
        }
      },
      E = (L, H) => {
        L.preventDefault(), x({ x: L.clientX, y: L.clientY, item: H });
      },
      I = (L) => {
        k(L), p(!0);
      },
      P = () => {
        x(null);
      },
      U = () => {
        v != null && v.item && (k(v.item), V(!0), x(null));
      },
      R = () => {
        V(!1), k(null);
      },
      q = N.useMemo(
        () => Array.from(new Set(t.map((H) => H.type).filter((H) => H))).sort(),
        [t]
      ),
      T = (L) => {
        i((H) => {
          const G = new Set(H);
          return L === "all"
            ? new Set(["all"])
            : (G.delete("all"),
              G.has(L) ? G.delete(L) : G.add(L),
              G.size === 0 ? new Set(["all"]) : G);
        });
      },
      B = N.useMemo(
        () =>
          t
            .filter((H) => {
              const G =
                  H.code.toLowerCase().includes(s.toLowerCase()) ||
                  H.name.toLowerCase().includes(s.toLowerCase()) ||
                  H.cht_name.toLowerCase().includes(s.toLowerCase()) ||
                  H.material_no.toLowerCase().includes(s.toLowerCase()),
                Y = u.has("all") || u.has(H.type),
                J = (() => {
                  if (f === "all") return !0;
                  const d = H.servers.some((m) => m.stock < m.safety);
                  return f === "low" ? d : !d;
                })();
              return G && Y && J;
            })
            .sort((H, G) => {
              const Y = (F) => {
                  let W = null;
                  return (
                    F.servers.forEach((O) => {
                      O.full_data.content.forEach((le) => {
                        le.Sub_content.forEach((ce) => {
                          if (ce.OP_TIME) {
                            const ze = new Date(ce.OP_TIME);
                            (!W || ze > W) && (W = ze);
                          }
                        });
                      });
                    }),
                    W
                  );
                },
                J = (F) => {
                  let W = null;
                  return (
                    F.servers.forEach((O) => {
                      O.full_data.content.forEach((le) => {
                        if (le.DELIVERY_TIME) {
                          const ce = new Date(le.DELIVERY_TIME);
                          (!W || ce < W) && (W = ce);
                        }
                      });
                    }),
                    W
                  );
                },
                d = (F) => F.servers.some((W) => W.stock < W.safety),
                m = H.verified_qty,
                g = G.verified_qty,
                S = H.transit_qty,
                C = G.transit_qty,
                c = m !== 0,
                w = g !== 0,
                b = m === 0 && S !== 0,
                z = g === 0 && C !== 0,
                Q = !c && !b && d(H),
                X = !w && !z && d(G);
              if (c && !w) return -1;
              if (!c && w) return 1;
              if (c && w) {
                const F = Y(H),
                  W = Y(G);
                return F && W ? W.getTime() - F.getTime() : F ? -1 : W ? 1 : 0;
              }
              if (b && !z) return -1;
              if (!b && z) return 1;
              if (b && z) {
                const F = J(H),
                  W = J(G);
                return F && W ? F.getTime() - W.getTime() : F ? -1 : W ? 1 : 0;
              }
              return Q && !X ? -1 : !Q && X ? 1 : H.code.localeCompare(G.code);
            }),
        [t, s, u, f]
      ),
      A = (L, H) =>
        L < H
          ? { color: "text-red-600", bgColor: "bg-red-50", label: "低於安全量" }
          : { color: "text-green-600", bgColor: "bg-green-50", label: "正常" };
    return r
      ? o.jsx("div", {
          className: "flex justify-center items-center py-12",
          children: o.jsx(Ke, {}),
        })
      : o.jsxs(o.Fragment, {
          children: [
            o.jsxs("div", {
              className: "space-y-4 mb-6",
              children: [
                o.jsx("div", {
                  className:
                    "bg-white rounded-lg shadow-sm border border-slate-200 p-6",
                  children: o.jsxs("div", {
                    className: "flex flex-col lg:flex-row gap-4",
                    children: [
                      o.jsxs("div", {
                        className: "flex-1 relative",
                        children: [
                          o.jsx(Pp, {
                            className:
                              "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400",
                          }),
                          o.jsx("input", {
                            type: "text",
                            placeholder: "搜尋藥碼、料號、藥名或中文名...",
                            value: s,
                            onChange: (L) => a(L.target.value),
                            className:
                              "w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                          }),
                        ],
                      }),
                      o.jsxs("select", {
                        value: f,
                        onChange: (L) => j(L.target.value),
                        className:
                          "px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white cursor-pointer",
                        children: [
                          o.jsx("option", {
                            value: "all",
                            children: "全部狀態",
                          }),
                          o.jsx("option", {
                            value: "low",
                            children: "低於安全量",
                          }),
                          o.jsx("option", {
                            value: "normal",
                            children: "庫存正常",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                o.jsx("div", {
                  className:
                    "bg-white rounded-lg shadow-sm border border-slate-200 p-4",
                  children: o.jsxs("div", {
                    className: "flex flex-col gap-4",
                    children: [
                      o.jsx("label", {
                        className: "text-sm font-medium text-slate-700",
                        children: "藥品類別:",
                      }),
                      o.jsxs("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                          o.jsx("button", {
                            onClick: () => T("all"),
                            className: `px-4 py-2 rounded-lg font-medium transition-all ${
                              u.has("all")
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`,
                            children: "全部類別",
                          }),
                          q.map((L) =>
                            o.jsx(
                              "button",
                              {
                                onClick: () => T(L),
                                className: `px-4 py-2 rounded-lg font-medium transition-all ${
                                  u.has(L)
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                }`,
                                children: L,
                              },
                              L
                            )
                          ),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            o.jsxs("div", {
              className:
                "bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden",
              children: [
                o.jsx("div", {
                  className: "overflow-x-auto max-h-[calc(100vh-300px)]",
                  children: o.jsxs("table", {
                    className: "w-full",
                    children: [
                      o.jsxs("thead", {
                        className: "bg-slate-50 border-b border-slate-200",
                        children: [
                          o.jsxs("tr", {
                            children: [
                              o.jsx("th", {
                                className:
                                  "sticky top-0 px-6 py-4 text-left text-base font-semibold text-slate-700 uppercase tracking-wider bg-slate-50 z-10",
                                children: "藥碼",
                              }),
                              o.jsx("th", {
                                className:
                                  "sticky top-0 px-6 py-4 text-left text-base font-semibold text-slate-700 uppercase tracking-wider bg-slate-50 z-10",
                                children: "料號",
                              }),
                              o.jsx("th", {
                                className:
                                  "sticky top-0 px-6 py-4 text-left text-base font-semibold text-slate-700 uppercase tracking-wider bg-slate-50 z-10",
                                children: "藥名",
                              }),
                              o.jsx("th", {
                                className:
                                  "sticky top-0 px-6 py-4 text-left text-base font-semibold text-slate-700 uppercase tracking-wider bg-slate-50 z-10",
                                children: "中文名",
                              }),
                              o.jsx("th", {
                                className:
                                  "sticky top-0 px-6 py-4 text-left text-base font-semibold text-slate-700 uppercase tracking-wider bg-slate-50 z-10",
                                children: "種類",
                              }),
                              o.jsx("th", {
                                className:
                                  "sticky top-0 px-6 py-4 text-center text-base font-semibold text-slate-700 uppercase tracking-wider bg-slate-50 z-10",
                                children: "單位",
                              }),
                              o.jsx("th", {
                                className:
                                  "sticky top-0 px-6 py-4 text-center text-base font-semibold text-slate-700 uppercase tracking-wider bg-slate-50 z-10",
                                children: "已驗量",
                              }),
                              o.jsx("th", {
                                className:
                                  "sticky top-0 px-6 py-4 text-center text-base font-semibold text-slate-700 uppercase tracking-wider bg-slate-50 z-10",
                                children: "在途量",
                              }),
                              o.jsx("th", {
                                className:
                                  "sticky top-0 px-6 py-4 text-center text-base font-semibold text-slate-700 uppercase tracking-wider bg-slate-50 z-10",
                                colSpan: 3,
                                children: "藥庫",
                              }),
                              o.jsx("th", {
                                className:
                                  "sticky top-0 px-6 py-4 text-center text-base font-semibold text-slate-700 uppercase tracking-wider bg-slate-50 z-10",
                                colSpan: 3,
                                children: "藥局",
                              }),
                            ],
                          }),
                          o.jsxs("tr", {
                            className: "bg-slate-50 border-b border-slate-200",
                            children: [
                              o.jsx("th", {
                                colSpan: 8,
                                className: "sticky top-[56px] bg-slate-50 z-10",
                              }),
                              o.jsx("th", {
                                className:
                                  "sticky top-[56px] px-3 py-2 text-center text-base font-medium text-slate-600 bg-slate-50 z-10",
                                children: "庫存",
                              }),
                              o.jsx("th", {
                                className:
                                  "sticky top-[56px] px-3 py-2 text-center text-base font-medium text-slate-600 bg-slate-50 z-10",
                                children: "安全量",
                              }),
                              o.jsx("th", {
                                className:
                                  "sticky top-[56px] px-3 py-2 text-center text-base font-medium text-slate-600 bg-slate-50 z-10",
                                children: "基準量",
                              }),
                              o.jsx("th", {
                                className:
                                  "sticky top-[56px] px-3 py-2 text-center text-base font-medium text-slate-600 bg-slate-50 z-10",
                                children: "庫存",
                              }),
                              o.jsx("th", {
                                className:
                                  "sticky top-[56px] px-3 py-2 text-center text-base font-medium text-slate-600 bg-slate-50 z-10",
                                children: "安全量",
                              }),
                              o.jsx("th", {
                                className:
                                  "sticky top-[56px] px-3 py-2 text-center text-base font-medium text-slate-600 bg-slate-50 z-10",
                                children: "基準量",
                              }),
                            ],
                          }),
                        ],
                      }),
                      o.jsx("tbody", {
                        className: "divide-y divide-slate-200",
                        children: B.map((L) => {
                          const H = L.servers.filter(
                              (w) => w.server_type === "藥庫"
                            ),
                            G = L.servers.filter(
                              (w) => w.server_type !== "藥庫"
                            ),
                            Y = H.reduce((w, b) => w + b.stock, 0),
                            J = H.reduce((w, b) => w + b.safety, 0),
                            d = H.reduce((w, b) => w + b.standard, 0),
                            m = G.reduce((w, b) => w + b.stock, 0),
                            g = G.reduce((w, b) => w + b.safety, 0),
                            S = G.reduce((w, b) => w + b.standard, 0),
                            C = A(Y, J),
                            c = A(m, g);
                          return o.jsxs(
                            "tr",
                            {
                              className:
                                "hover:bg-slate-50 transition-colors cursor-pointer",
                              onClick: () => I(L),
                              onContextMenu: (w) => E(w, L),
                              children: [
                                o.jsx("td", {
                                  className: "px-6 py-4 text-sm",
                                  children: L.code,
                                }),
                                o.jsx("td", {
                                  className: "px-6 py-4 text-sm",
                                  children: L.material_no,
                                }),
                                o.jsx("td", {
                                  className:
                                    "px-6 py-4 text-sm text-slate-700 font-medium",
                                  children: L.name,
                                }),
                                o.jsx("td", {
                                  className: "px-6 py-4 text-sm text-slate-600",
                                  children: L.cht_name || "-",
                                }),
                                o.jsx("td", {
                                  className: "px-6 py-4 text-sm",
                                  children: o.jsx("span", {
                                    className:
                                      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800",
                                    children: L.type || "-",
                                  }),
                                }),
                                o.jsx("td", {
                                  className:
                                    "px-6 py-4 text-sm text-center text-slate-700",
                                  children: L.unit,
                                }),
                                o.jsx("td", {
                                  className:
                                    "px-6 py-4 text-sm text-center font-medium text-slate-900",
                                  children: L.verified_qty.toLocaleString(),
                                }),
                                o.jsx("td", {
                                  className:
                                    "px-6 py-4 text-sm text-center font-medium text-amber-600",
                                  children: L.transit_qty.toLocaleString(),
                                }),
                                o.jsx("td", {
                                  className: `px-3 py-4 text-sm text-center font-semibold ${C.color}`,
                                  children:
                                    H.length > 0 ? Y.toLocaleString() : "-",
                                }),
                                o.jsx("td", {
                                  className:
                                    "px-3 py-4 text-sm text-center text-slate-600",
                                  children:
                                    H.length > 0 ? J.toLocaleString() : "-",
                                }),
                                o.jsx("td", {
                                  className:
                                    "px-3 py-4 text-sm text-center text-slate-600",
                                  children:
                                    H.length > 0 ? d.toLocaleString() : "-",
                                }),
                                o.jsx("td", {
                                  className: `px-3 py-4 text-sm text-center font-semibold ${c.color}`,
                                  children:
                                    G.length > 0 ? m.toLocaleString() : "-",
                                }),
                                o.jsx("td", {
                                  className:
                                    "px-3 py-4 text-sm text-center text-slate-600",
                                  children:
                                    G.length > 0 ? g.toLocaleString() : "-",
                                }),
                                o.jsx("td", {
                                  className:
                                    "px-3 py-4 text-sm text-center text-slate-600",
                                  children:
                                    G.length > 0 ? S.toLocaleString() : "-",
                                }),
                              ],
                            },
                            L.code
                          );
                        }),
                      }),
                    ],
                  }),
                }),
                B.length === 0 &&
                  o.jsxs("div", {
                    className: "text-center py-12",
                    children: [
                      o.jsx(Pr, {
                        className: "h-12 w-12 text-slate-300 mx-auto mb-3",
                      }),
                      o.jsx("p", {
                        className: "text-slate-500 text-sm",
                        children: "找不到符合條件的藥品",
                      }),
                    ],
                  }),
              ],
            }),
            o.jsxs("div", {
              className: "mt-6 text-center text-sm text-slate-500",
              children: ["共顯示 ", B.length, " 筆資料"],
            }),
            v &&
              o.jsx(fa, { x: v.x, y: v.y, onClose: P, onViewUnitDetails: U }),
            D &&
              _ &&
              _.servers.length > 0 &&
              o.jsx(pa, {
                isOpen: D,
                onClose: R,
                medGuid: _.servers[0].full_data.med_cloud.GUID,
                medName: _.name,
                onFetchUnitDetails: Nr,
                onUpdateUnits: ma,
              }),
            h &&
              _ &&
              o.jsx(Ap, {
                isOpen: h,
                onClose: () => p(!1),
                drugName: _.name,
                drugCode: _.code,
                servers: _.servers,
              }),
          ],
        });
  },
  Gp = async () =>
    await Pe("/api/ServerSetting/get_name", { method: "POST", body: {} }),
  Dr = async (e) =>
    await Pe("/api/stock/get_stock", { method: "POST", body: e }),
  qp = async (e) =>
    await Pe("/api/medClassify/add", { method: "POST", body: e }),
  Yp = async (e) =>
    await Pe("/api/medClassify/update", { method: "POST", body: e }),
  _i = async (e) =>
    await Pe("/api/stock/update_stock", { method: "POST", body: e }),
  Kp = async () =>
    await Pe("/api/medClassify/get_all", { method: "POST", body: {} }),
  Xp = () => {
    const [e, t] = N.useState([]),
      [n, r] = N.useState(null),
      [l, s] = N.useState([]),
      [a, u] = N.useState([]),
      [i, f] = N.useState(new Set()),
      [j, v] = N.useState("all"),
      [x, _] = N.useState(!0),
      [k, D] = N.useState(null),
      [V, h] = N.useState(!1),
      [p, y] = N.useState(!1),
      [E, I] = N.useState(null),
      [P, U] = N.useState(!1),
      [R, q] = N.useState("");
    N.useEffect(() => {
      B(), T();
    }, []),
      N.useEffect(() => {
        n && A(n);
      }, [n]);
    const T = async () => {
        try {
          const m = await Kp();
          m.Code === 200 && m.Data && u(m.Data);
        } catch (m) {
          console.error("Failed to fetch classifications:", m);
        }
      },
      B = async () => {
        try {
          _(!0);
          const m = await Gp();
          if (m.Code === 200 && m.Data) {
            const g = [...m.Data].sort((S, C) =>
              S.type === "藥庫" && C.type !== "藥庫"
                ? -1
                : S.type !== "藥庫" && C.type === "藥庫"
                ? 1
                : 0
            );
            t(g), g.length > 0 && r(g[0]);
          } else D(m.Result || "無法取得伺服器設定");
        } catch (m) {
          console.error("Failed to fetch server settings:", m),
            D("載入伺服器設定時發生錯誤");
        } finally {
          _(!1);
        }
      },
      A = async (m) => {
        try {
          _(!0), D(null);
          const g = await Dr({ ServerName: m.name, ServerType: m.type });
          g.Code === 200 && g.Data
            ? s(g.Data)
            : (D(g.Result || "無法取得庫存資料"), s([]));
        } catch (g) {
          console.error("Failed to fetch stock data:", g),
            D("載入庫存資料時發生錯誤"),
            s([]);
        } finally {
          _(!1);
        }
      },
      L = N.useMemo(() => {
        const m = new Set();
        return (
          l.forEach((g) => {
            var S;
            (S = g.med_cloud) != null && S.TYPE && m.add(g.med_cloud.TYPE);
          }),
          Array.from(m).sort()
        );
      }, [l]),
      H = N.useMemo(
        () =>
          j === "all"
            ? l
            : l.filter((m) => {
                var g;
                return ((g = m.med_cloud) == null ? void 0 : g.TYPE) === j;
              }),
        [l, j]
      ),
      G = N.useMemo(() => {
        const m = new Map();
        return (
          H.forEach((S) => {
            const C = S.Classify_GUID || "unclassified";
            m.has(C) || m.set(C, { classify: S.Classify, items: [] }),
              m.get(C).items.push(S);
          }),
          Array.from(m.entries())
            .map(([S, C]) => ({ guid: S, ...C }))
            .sort((S, C) => {
              var b, z;
              const c =
                  ((b = S.classify) == null ? void 0 : b.name) || "未分類",
                w = ((z = C.classify) == null ? void 0 : z.name) || "未分類";
              return c.localeCompare(w, "zh-TW");
            })
        );
      }, [H]),
      Y = (m) => {
        f((g) => {
          const S = new Set(g);
          return S.has(m) ? S.delete(m) : S.add(m), S;
        });
      },
      J = async (m, g) => {
        try {
          console.log("Updating drug classification:", {
            drugGuid: m,
            classifyGuid: g,
          });
          const S = await _i({
            ServerName: (n == null ? void 0 : n.name) || "",
            ServerType: (n == null ? void 0 : n.type) || "",
            Data: { GUID: m, Classify_GUID: g },
          });
          console.log("Update drug classification response:", S),
            S.Code === 200
              ? (n && (await A(n)), await T())
              : (console.error("Update failed with response:", S),
                alert(`更新失敗: ${S.Result || "未知錯誤"}`));
        } catch (S) {
          console.error(
            "Failed to update drug classification - Full error:",
            S
          );
          const C = S instanceof Error ? S.message : "更新藥品分類時發生錯誤";
          alert(`更新失敗: ${C}`);
        }
      },
      d = async (m, g) => {
        const S = l.filter((c) => {
          var w;
          return ((w = c.med_cloud) == null ? void 0 : w.TYPE) === m;
        });
        if (S.length === 0) {
          alert("沒有找到該類別的藥品");
          return;
        }
        if (
          confirm(`確定要將 ${S.length} 個「${m}」類別的藥品統一設定分類嗎？`)
        )
          try {
            const c = S.map((b) => ({ GUID: b.GUID, Classify_GUID: g })),
              w = await _i({
                ServerName: (n == null ? void 0 : n.name) || "",
                ServerType: (n == null ? void 0 : n.type) || "",
                Data: c,
              });
            w.Code === 200
              ? (alert(`批次更新完成
成功更新 ${S.length} 項藥品分類`),
                n && (await A(n)),
                await T())
              : alert(`批次更新失敗: ${w.Result || "未知錯誤"}`);
          } catch (c) {
            console.error("Batch update error:", c);
            const w = c instanceof Error ? c.message : "批次更新時發生錯誤";
            alert(`批次更新失敗: ${w}`);
          }
      };
    return x && e.length === 0
      ? o.jsx("div", {
          className: "flex items-center justify-center h-96",
          children: o.jsx(Ke, { size: "large" }),
        })
      : o.jsxs("div", {
          className: "space-y-6",
          children: [
            k &&
              o.jsxs("div", {
                className:
                  "p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center gap-2",
                children: [
                  o.jsx(Dl, { size: 20 }),
                  o.jsx("span", { children: k }),
                ],
              }),
            o.jsxs("div", {
              className: "space-y-4",
              children: [
                o.jsxs("div", {
                  className: "flex items-center justify-between gap-4",
                  children: [
                    o.jsx("div", {
                      className:
                        "bg-white rounded-lg shadow-sm border border-slate-200 p-4 flex-1",
                      children: o.jsx("div", {
                        className: "flex flex-wrap gap-2",
                        children: e.map((m) =>
                          o.jsx(
                            "button",
                            {
                              onClick: () => r(m),
                              className: `px-4 py-2 rounded-lg font-medium transition-colors ${
                                (n == null ? void 0 : n.name) === m.name &&
                                (n == null ? void 0 : n.type) === m.type
                                  ? "bg-blue-600 text-white"
                                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                              }`,
                              children: m.name,
                            },
                            `${m.name}-${m.type}`
                          )
                        ),
                      }),
                    }),
                    o.jsx("div", {
                      className: "flex gap-2",
                      children: o.jsxs("button", {
                        onClick: () => h(!0),
                        className:
                          "flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
                        children: [
                          o.jsx(Gl, { size: 18 }),
                          o.jsx("span", { children: "新增分類" }),
                        ],
                      }),
                    }),
                  ],
                }),
                o.jsx("div", {
                  className:
                    "bg-white rounded-lg shadow-sm border border-slate-200 p-4",
                  children: o.jsxs("div", {
                    className: "flex flex-col gap-4",
                    children: [
                      o.jsx("label", {
                        className: "text-sm font-medium text-slate-700",
                        children: "藥品類別:",
                      }),
                      o.jsxs("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                          o.jsx("button", {
                            onClick: () => v("all"),
                            className: `px-4 py-2 rounded-lg font-medium transition-all ${
                              j === "all"
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`,
                            children: "全部類別",
                          }),
                          L.map((m) =>
                            o.jsx(
                              "button",
                              {
                                onClick: () => v(m),
                                className: `px-4 py-2 rounded-lg font-medium transition-all ${
                                  j === m
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                }`,
                                children: m,
                              },
                              m
                            )
                          ),
                        ],
                      }),
                      j !== "all" &&
                        o.jsx("div", {
                          className: "pt-2 border-t border-slate-200",
                          children: o.jsxs("button", {
                            onClick: () => {
                              q(j), U(!0);
                            },
                            className:
                              "flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors",
                            children: [
                              o.jsx(xo, { size: 18 }),
                              o.jsxs("span", {
                                children: ["批次設定「", j, "」分類"],
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                }),
              ],
            }),
            x && n
              ? o.jsx("div", {
                  className: "flex items-center justify-center h-64",
                  children: o.jsx(Ke, { size: "large" }),
                })
              : l.length === 0
              ? o.jsxs("div", {
                  className:
                    "text-center py-12 bg-white rounded-lg shadow-sm border border-slate-200",
                  children: [
                    o.jsx(Pr, {
                      className: "h-12 w-12 text-slate-300 mx-auto mb-3",
                    }),
                    o.jsx("p", {
                      className: "text-slate-500 text-sm",
                      children: "目前沒有庫存資料",
                    }),
                  ],
                })
              : o.jsx("div", {
                  className: "space-y-6",
                  children: G.map((m) => {
                    const g = i.has(m.guid);
                    return o.jsxs(
                      "div",
                      {
                        className:
                          "bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden",
                        children: [
                          o.jsx("div", {
                            className:
                              "bg-slate-50 border-b border-slate-200 p-4",
                            children: o.jsxs("div", {
                              className: "flex items-center justify-between",
                              children: [
                                o.jsxs("button", {
                                  onClick: () => Y(m.guid),
                                  className:
                                    "flex items-center gap-4 flex-1 text-left hover:bg-slate-100 -m-4 p-4 rounded transition-colors",
                                  children: [
                                    g
                                      ? o.jsx(kp, {
                                          size: 20,
                                          className: "text-slate-600",
                                        })
                                      : o.jsx(Np, {
                                          size: 20,
                                          className: "text-slate-600",
                                        }),
                                    o.jsx("h3", {
                                      className:
                                        "text-lg font-semibold text-slate-800",
                                      children: m.classify
                                        ? m.classify.name
                                        : "未分類",
                                    }),
                                    o.jsxs("span", {
                                      className: "text-sm text-slate-500",
                                      children: [
                                        "(",
                                        m.items.length,
                                        " 項藥品)",
                                      ],
                                    }),
                                    m.classify &&
                                      o.jsxs(o.Fragment, {
                                        children: [
                                          o.jsxs("div", {
                                            className:
                                              "flex items-center gap-2 text-sm ml-auto mr-4",
                                            children: [
                                              o.jsx("span", {
                                                className: "text-slate-600",
                                                children: "安全量:",
                                              }),
                                              o.jsxs("span", {
                                                className:
                                                  "font-semibold text-slate-800",
                                                children: [
                                                  m.classify.safe_day,
                                                  " 天",
                                                ],
                                              }),
                                            ],
                                          }),
                                          o.jsxs("div", {
                                            className:
                                              "flex items-center gap-2 text-sm",
                                            children: [
                                              o.jsx("span", {
                                                className: "text-slate-600",
                                                children: "基準量:",
                                              }),
                                              o.jsxs("span", {
                                                className:
                                                  "font-semibold text-slate-800",
                                                children: [
                                                  m.classify.standard_day,
                                                  " 天",
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                                m.classify &&
                                  o.jsxs("button", {
                                    onClick: (S) => {
                                      S.stopPropagation(), I(m.classify), y(!0);
                                    },
                                    className:
                                      "flex items-center gap-2 px-3 py-1.5 text-sm bg-slate-100 text-slate-700 rounded hover:bg-slate-200 transition-colors ml-4",
                                    children: [
                                      o.jsx(xo, { size: 14 }),
                                      o.jsx("span", { children: "編輯" }),
                                    ],
                                  }),
                              ],
                            }),
                          }),
                          g &&
                            o.jsx("div", {
                              className: "overflow-x-auto",
                              children: o.jsxs("table", {
                                className: "w-full",
                                children: [
                                  o.jsx("thead", {
                                    className:
                                      "bg-slate-50 border-b border-slate-200",
                                    children: o.jsxs("tr", {
                                      children: [
                                        o.jsx("th", {
                                          className:
                                            "px-6 py-3 text-left text-sm font-semibold text-slate-700",
                                          children: "藥碼",
                                        }),
                                        o.jsx("th", {
                                          className:
                                            "px-6 py-3 text-left text-sm font-semibold text-slate-700",
                                          children: "藥名",
                                        }),
                                        o.jsx("th", {
                                          className:
                                            "px-6 py-3 text-left text-sm font-semibold text-slate-700",
                                          children: "料號",
                                        }),
                                        o.jsx("th", {
                                          className:
                                            "px-6 py-3 text-left text-sm font-semibold text-slate-700",
                                          children: "藥品類別",
                                        }),
                                        o.jsx("th", {
                                          className:
                                            "px-6 py-3 text-left text-sm font-semibold text-slate-700",
                                          children: "分類",
                                        }),
                                      ],
                                    }),
                                  }),
                                  o.jsx("tbody", {
                                    className: "divide-y divide-slate-200",
                                    children: m.items.map((S) => {
                                      var C;
                                      return o.jsxs(
                                        "tr",
                                        {
                                          className:
                                            "hover:bg-slate-50 transition-colors",
                                          children: [
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm font-medium text-slate-900",
                                              children: S.code,
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-slate-700",
                                              children: S.name,
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-slate-700",
                                              children: S.material_no || "-",
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-slate-700",
                                              children: o.jsx("span", {
                                                className:
                                                  "inline-block px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium",
                                                children:
                                                  ((C = S.med_cloud) == null
                                                    ? void 0
                                                    : C.TYPE) || "-",
                                              }),
                                            }),
                                            o.jsx("td", {
                                              className: "px-6 py-4",
                                              children: o.jsxs("select", {
                                                value: S.Classify_GUID || "",
                                                onChange: (c) =>
                                                  J(S.GUID, c.target.value),
                                                className:
                                                  "px-3 py-1.5 text-sm border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white",
                                                children: [
                                                  o.jsx("option", {
                                                    value: "",
                                                    children: "未分類",
                                                  }),
                                                  a.map((c) =>
                                                    o.jsx(
                                                      "option",
                                                      {
                                                        value: c.GUID,
                                                        children: c.name,
                                                      },
                                                      c.GUID
                                                    )
                                                  ),
                                                ],
                                              }),
                                            }),
                                          ],
                                        },
                                        S.GUID
                                      );
                                    }),
                                  }),
                                ],
                              }),
                            }),
                        ],
                      },
                      m.guid
                    );
                  }),
                }),
            V &&
              o.jsx(Ei, {
                onClose: () => h(!1),
                onSuccess: () => {
                  h(!1), T(), n && A(n);
                },
              }),
            p &&
              E &&
              o.jsx(Ei, {
                classify: E,
                onClose: () => {
                  y(!1), I(null);
                },
                onSuccess: () => {
                  y(!1), I(null), T(), n && A(n);
                },
              }),
            P &&
              o.jsx(Zp, {
                drugType: R,
                classifications: a,
                onClose: () => {
                  U(!1), q("");
                },
                onConfirm: (m) => {
                  d(R, m), U(!1), q("");
                },
              }),
          ],
        });
  },
  Ei = ({ classify: e, onClose: t, onSuccess: n }) => {
    const [r, l] = N.useState((e == null ? void 0 : e.name) || ""),
      [s, a] = N.useState((e == null ? void 0 : e.safe_day.toString()) || ""),
      [u, i] = N.useState(
        (e == null ? void 0 : e.standard_day.toString()) || ""
      ),
      [f, j] = N.useState(!1);
    N.useEffect(() => {
      e
        ? (l(e.name), a(e.safe_day.toString()), i(e.standard_day.toString()))
        : (l(""), a(""), i(""));
    }, [e]);
    const v = async (x) => {
      x.preventDefault(), j(!0);
      try {
        let _;
        e
          ? (_ = await Yp({
              Data: { GUID: e.GUID, name: r, safe_day: s, standard_day: u },
            }))
          : (_ = await qp({ Data: { name: r, safe_day: s, standard_day: u } })),
          _.Code === 200 ? n() : alert(_.Result || "操作失敗");
      } catch (_) {
        console.error("Failed to save classification:", _),
          alert("儲存分類時發生錯誤");
      } finally {
        j(!1);
      }
    };
    return o.jsx("div", {
      className:
        "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
      children: o.jsxs("div", {
        className: "bg-white rounded-lg shadow-xl w-full max-w-md mx-4",
        children: [
          o.jsxs("div", {
            className:
              "flex items-center justify-between p-6 border-b border-slate-200",
            children: [
              o.jsx("h3", {
                className: "text-lg font-semibold text-slate-800",
                children: e ? "編輯分類" : "新增分類",
              }),
              o.jsx("button", {
                onClick: t,
                className:
                  "text-slate-400 hover:text-slate-600 transition-colors",
                children: o.jsx(ln, { size: 20 }),
              }),
            ],
          }),
          o.jsxs("form", {
            onSubmit: v,
            className: "p-6 space-y-4",
            children: [
              o.jsxs("div", {
                children: [
                  o.jsx("label", {
                    className: "block text-sm font-medium text-slate-700 mb-1",
                    children: "分類名稱",
                  }),
                  o.jsx("input", {
                    type: "text",
                    value: r,
                    onChange: (x) => l(x.target.value),
                    className:
                      "w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                    required: !0,
                  }),
                ],
              }),
              o.jsxs("div", {
                children: [
                  o.jsx("label", {
                    className: "block text-sm font-medium text-slate-700 mb-1",
                    children: "安全量天數",
                  }),
                  o.jsx("input", {
                    type: "number",
                    value: s,
                    onChange: (x) => a(x.target.value),
                    className:
                      "w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                    required: !0,
                    min: "0",
                  }),
                ],
              }),
              o.jsxs("div", {
                children: [
                  o.jsx("label", {
                    className: "block text-sm font-medium text-slate-700 mb-1",
                    children: "基準量天數",
                  }),
                  o.jsx("input", {
                    type: "number",
                    value: u,
                    onChange: (x) => i(x.target.value),
                    className:
                      "w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                    required: !0,
                    min: "0",
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "flex gap-3 pt-4",
                children: [
                  o.jsx("button", {
                    type: "button",
                    onClick: t,
                    className:
                      "flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors",
                    children: "取消",
                  }),
                  o.jsx("button", {
                    type: "submit",
                    disabled: f,
                    className:
                      "flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                    children: f ? "處理中..." : "儲存",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Zp = ({ drugType: e, classifications: t, onClose: n, onConfirm: r }) => {
    const [l, s] = N.useState(""),
      a = (u) => {
        u.preventDefault(), l && r(l);
      };
    return o.jsx("div", {
      className:
        "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
      children: o.jsxs("div", {
        className: "bg-white rounded-lg shadow-xl w-full max-w-md mx-4",
        children: [
          o.jsxs("div", {
            className:
              "flex items-center justify-between p-6 border-b border-slate-200",
            children: [
              o.jsxs("h3", {
                className: "text-lg font-semibold text-slate-800",
                children: ["批次設定「", e, "」類別分類"],
              }),
              o.jsx("button", {
                onClick: n,
                className:
                  "text-slate-400 hover:text-slate-600 transition-colors",
                children: o.jsx(ln, { size: 20 }),
              }),
            ],
          }),
          o.jsxs("form", {
            onSubmit: a,
            className: "p-6 space-y-4",
            children: [
              o.jsx("div", {
                className: "bg-amber-50 border border-amber-200 rounded-lg p-4",
                children: o.jsxs("p", {
                  className: "text-sm text-amber-800",
                  children: [
                    "此操作將會把所有「",
                    e,
                    "」類別的藥品統一設定為選擇的分類",
                  ],
                }),
              }),
              o.jsxs("div", {
                children: [
                  o.jsx("label", {
                    className: "block text-sm font-medium text-slate-700 mb-2",
                    children: "選擇分類",
                  }),
                  o.jsxs("select", {
                    value: l,
                    onChange: (u) => s(u.target.value),
                    className:
                      "w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                    required: !0,
                    children: [
                      o.jsx("option", { value: "", children: "請選擇分類" }),
                      t.map((u) =>
                        o.jsxs(
                          "option",
                          {
                            value: u.GUID,
                            children: [
                              u.name,
                              " (安全量: ",
                              u.safe_day,
                              "天 / 基準量: ",
                              u.standard_day,
                              "天)",
                            ],
                          },
                          u.GUID
                        )
                      ),
                    ],
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "flex gap-3 pt-4",
                children: [
                  o.jsx("button", {
                    type: "button",
                    onClick: n,
                    className:
                      "flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors",
                    children: "取消",
                  }),
                  o.jsx("button", {
                    type: "submit",
                    className:
                      "flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors",
                    children: "確認批次設定",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  ql = async () =>
    await Pe("/api/ServerSetting/get_name", { method: "POST", body: {} }),
  Jp = ({
    isOpen: e,
    onClose: t,
    items: n,
    onFetchUnitDetails: r,
    destinationServerName: l,
  }) => {
    const { showToast: s } = xa(),
      [a, u] = N.useState([]),
      [i, f] = N.useState(!1),
      [j, v] = N.useState(new Map()),
      [x, _] = N.useState([]),
      [k, D] = N.useState(null),
      [V, h] = N.useState(new Map()),
      [p, y] = N.useState([]),
      [E, I] = N.useState(!1),
      [P, U] = N.useState("");
    N.useEffect(() => {
      e && R();
    }, [e]),
      N.useEffect(() => {
        e && n.length > 0 && k && T();
      }, [e, n, k]);
    const R = async () => {
        try {
          const m = (await ql()).Data.filter((g) => g.type === "藥庫");
          _(m), m.length > 0 && D(m[0]);
        } catch (d) {
          console.error("Failed to fetch warehouses:", d);
        }
      },
      q = async () => {
        var d;
        if (!k) return console.log("⚠️ No warehouse selected"), new Map();
        try {
          console.log("=== Fetching Source Stock ==="),
            console.log("Selected Warehouse:", k);
          const m = await Dr({ ServerName: k.name, ServerType: k.type });
          console.log("Stock API Response:", m),
            console.log(
              "Stock Data Length:",
              (d = m.Data) == null ? void 0 : d.length
            ),
            y(m.Data || []);
          const g = new Map();
          return (
            m.Data.forEach((S) => {
              let C = 0;
              Array.isArray(S.qty)
                ? ((C = S.qty.reduce((c, w) => c + parseFloat(w || "0"), 0)),
                  console.log(
                    `📦 code: ${S.code} | qty array: ${JSON.stringify(
                      S.qty
                    )} = ${C}`
                  ))
                : ((C =
                    typeof S.qty == "number"
                      ? S.qty
                      : parseFloat(S.qty || "0")),
                  console.log(`📦 code: ${S.code} | qty: ${S.qty} = ${C}`)),
                g.set(S.code, C);
            }),
            console.log("Stock Map Size:", g.size),
            console.log("Stock Map Keys (codes):", Array.from(g.keys())),
            h(g),
            g
          );
        } catch (m) {
          return (
            console.error("❌ Failed to fetch source stock:", m), new Map()
          );
        }
      },
      T = async () => {
        f(!0);
        try {
          const d = n.map(async (c) => {
              const w = Math.max(0, c.standardQuantity - c.currentStock);
              if (!c.medGuid)
                return {
                  code: c.code,
                  itemCode: c.material_no,
                  name: c.name,
                  rawQuantity: w,
                  adjustedQuantity: w,
                  convertedUnit: `${w} (無單位資訊)`,
                  conversionRate: 1,
                  displayUnitName: "",
                  originalItem: c,
                  sourceStock: null,
                };
              try {
                const b = await r(c.medGuid);
                if (!b || b.length === 0)
                  return {
                    code: c.code,
                    itemCode: c.material_no,
                    name: c.name,
                    rawQuantity: w,
                    adjustedQuantity: w,
                    convertedUnit: `${w} (無單位資訊)`,
                    conversionRate: 1,
                    displayUnitName: "",
                    originalItem: c,
                    sourceStock: null,
                  };
                const z = [...b].sort(
                    (he, xe) =>
                      parseInt(he.sort_order) - parseInt(xe.sort_order)
                  ),
                  Q = z[z.length - 1];
                if (!Q || !Q.conversion_rate) {
                  const he = (Q == null ? void 0 : Q.unit_name) || "";
                  return {
                    code: c.code,
                    itemCode: c.material_no,
                    name: c.name,
                    rawQuantity: w,
                    adjustedQuantity: w,
                    convertedUnit: `${w} ${he}`,
                    conversionRate: 1,
                    displayUnitName: he,
                    originalItem: c,
                    sourceStock: null,
                  };
                }
                const F = parseInt(Q.sort_order) - 1;
                let W;
                if (F < 1) W = Q.unit_name;
                else {
                  const he = b.find((xe) => parseInt(xe.sort_order) === F);
                  W = (he == null ? void 0 : he.unit_name) || Q.unit_name;
                }
                const O = parseFloat(Q.conversion_rate),
                  le = parseFloat(Q.quantity) || 0;
                let ce = Math.ceil(w / O) * O;
                ce < le && (ce = le);
                const ze = ce / O;
                return {
                  code: c.code,
                  itemCode: c.material_no,
                  name: c.name,
                  rawQuantity: w,
                  adjustedQuantity: ce,
                  convertedUnit: `${ze} ${W}`,
                  conversionRate: O,
                  displayUnitName: W,
                  originalItem: c,
                  sourceStock: null,
                };
              } catch (b) {
                return (
                  console.error(`Failed to fetch units for ${c.code}:`, b),
                  {
                    code: c.code,
                    itemCode: c.material_no,
                    name: c.name,
                    rawQuantity: w,
                    adjustedQuantity: w,
                    convertedUnit: `${w} (無法取得單位)`,
                    conversionRate: 1,
                    displayUnitName: "",
                    originalItem: c,
                    sourceStock: null,
                  }
                );
              }
            }),
            m = await Promise.all(d);
          console.log("=== Calculate Previews Results ==="),
            console.log("Results count:", m.length),
            console.log(
              "Preview codes:",
              m.map((c) => c.code)
            );
          const g = await q();
          console.log("Fresh Stock Data Size:", g.size);
          const S = m.map((c) => {
            const w = c.code,
              b = g.get(w) ?? null;
            return (
              console.log(`🔍 Matching stock for code: ${w} | stock: ${b}`),
              { ...c, sourceStock: b }
            );
          });
          console.log(
            "Results with stock:",
            S.map((c) => ({ code: c.code, sourceStock: c.sourceStock }))
          ),
            u(S);
          const C = new Map();
          S.forEach((c) => {
            const w = c.adjustedQuantity / c.conversionRate;
            C.set(c.code, { raw: c.rawQuantity, converted: w });
          }),
            v(C);
        } catch (d) {
          console.error("Failed to calculate previews:", d);
        } finally {
          f(!1);
        }
      },
      B = async (d, m) => {
        const g = parseFloat(m) || 0,
          S = a.find((C) => C.code === d);
        if (!(!S || !S.originalItem.medGuid))
          try {
            const C = await r(S.originalItem.medGuid);
            if (!C || C.length === 0) {
              const F =
                (Math.ceil(g / S.conversionRate) * S.conversionRate) /
                S.conversionRate;
              v((W) => {
                const O = new Map(W);
                return O.set(d, { raw: g, converted: F }), O;
              });
              return;
            }
            const c = [...C].sort(
                (X, F) => parseInt(X.sort_order) - parseInt(F.sort_order)
              ),
              w = c[c.length - 1],
              b = parseFloat(w.quantity) || 0;
            let z = Math.ceil(g / S.conversionRate) * S.conversionRate;
            z < b && (z = b);
            const Q = z / S.conversionRate;
            v((X) => {
              const F = new Map(X);
              return F.set(d, { raw: g, converted: Q }), F;
            });
          } catch (C) {
            console.error("Failed to fetch units for quantity adjustment:", C);
            const w =
              (Math.ceil(g / S.conversionRate) * S.conversionRate) /
              S.conversionRate;
            v((b) => {
              const z = new Map(b);
              return z.set(d, { raw: g, converted: w }), z;
            });
          }
      },
      A = (d, m) => {
        const g = parseFloat(m) || 0,
          S = a.find((c) => c.code === d);
        if (!S) return;
        const C = g * S.conversionRate;
        v((c) => {
          const w = new Map(c);
          return w.set(d, { raw: C, converted: g }), w;
        });
      },
      L = (d) => {
        const m = j.get(d.code);
        if (m) {
          const g = m.converted * d.conversionRate;
          return {
            rawQuantity: m.raw,
            adjustedQuantity: g,
            convertedCount: m.converted,
          };
        }
        return {
          rawQuantity: d.rawQuantity,
          adjustedQuantity: d.adjustedQuantity,
          convertedCount: d.adjustedQuantity / d.conversionRate,
        };
      },
      H = (d) => {
        u((m) => m.filter((g) => g.code !== d)),
          v((m) => {
            const g = new Map(m);
            return g.delete(d), g;
          });
      },
      G = $i.useMemo(() => {
        if (!P.trim()) return [];
        const d = new Set(a.map((C) => C.code)),
          m = P.toLowerCase(),
          g = p.filter((C) => {
            var Q, X, F, W;
            if (d.has(C.code)) return !1;
            const c =
                (Q = C.code) == null ? void 0 : Q.toLowerCase().includes(m),
              w = (X = C.name) == null ? void 0 : X.toLowerCase().includes(m),
              b =
                (F = C.cht_name) == null ? void 0 : F.toLowerCase().includes(m),
              z =
                (W = C.material_no) == null
                  ? void 0
                  : W.toLowerCase().includes(m);
            return c || w || b || z;
          }),
          S = new Map();
        return (
          g.forEach((C) => {
            S.has(C.code) || S.set(C.code, C);
          }),
          Array.from(S.values())
        );
      }, [P, p, a]),
      Y = async (d) => {
        if (a.some((g) => g.code === d.code)) {
          s("此藥品已在列表中", "warning");
          return;
        }
        const m = {
          code: d.code,
          name: d.name,
          material_no: d.material_no,
          currentStock: 0,
          safeStock: 0,
          standardQuantity: 0,
          medGuid: d.GUID,
        };
        try {
          const g = await r(d.med_cloud.GUID);
          let S;
          if (!g || g.length === 0)
            S = {
              code: d.code,
              itemCode: d.material_no,
              name: d.name,
              rawQuantity: 0,
              adjustedQuantity: 0,
              convertedUnit: "0 (無單位資訊)",
              conversionRate: 1,
              displayUnitName: "",
              originalItem: m,
              sourceStock: V.get(d.code) ?? null,
            };
          else {
            const C = [...g].sort(
                (w, b) => parseInt(w.sort_order) - parseInt(b.sort_order)
              ),
              c = C[C.length - 1];
            if (!c || !c.conversion_rate) {
              const w = (c == null ? void 0 : c.unit_name) || "";
              S = {
                code: d.code,
                itemCode: d.material_no,
                name: d.name,
                rawQuantity: 0,
                adjustedQuantity: 0,
                convertedUnit: `0 ${w}`,
                conversionRate: 1,
                displayUnitName: w,
                originalItem: m,
                sourceStock: V.get(d.code) ?? null,
              };
            } else {
              const b = parseInt(c.sort_order) - 1;
              let z;
              if (b < 1) z = c.unit_name;
              else {
                const X = g.find((F) => parseInt(F.sort_order) === b);
                z = (X == null ? void 0 : X.unit_name) || c.unit_name;
              }
              const Q = parseFloat(c.conversion_rate);
              S = {
                code: d.code,
                itemCode: d.material_no,
                name: d.name,
                rawQuantity: 0,
                adjustedQuantity: 0,
                convertedUnit: `0 ${z}`,
                conversionRate: Q,
                displayUnitName: z,
                originalItem: m,
                sourceStock: V.get(d.code) ?? null,
              };
            }
          }
          u((C) => [...C, S]),
            v((C) => {
              const c = new Map(C);
              return c.set(d.code, { raw: 0, converted: 0 }), c;
            }),
            I(!1),
            U(""),
            s("藥品已成功新增", "success");
        } catch (g) {
          console.error("Failed to add drug:", g), s("新增藥品失敗", "error");
        }
      },
      J = async () => {
        if (!k) {
          s("請選擇庫別", "warning");
          return;
        }
        if (a.length === 0) {
          s("請至少選擇一個藥品", "warning");
          return;
        }
        const d = Rp();
        if (!d) {
          s("無法取得登入者資訊", "error");
          return;
        }
        const m = {
          Data: a.map((g) => {
            const S = j.get(g.code),
              C = S ? S.raw : g.adjustedQuantity;
            return {
              sourceStoreType: k.name,
              destinationStoreType: l,
              code: g.code,
              name: g.name,
              sourceStoreInventory: String(g.sourceStock ?? 0),
              issuedQuantity: String(C),
              reportName: d,
              state: "等待過帳",
            };
          }),
        };
        try {
          f(!0),
            await Pe("/api/drugStotreDistribution/add", {
              method: "POST",
              body: m,
            }),
            s("撥補單建立成功", "success"),
            t();
        } catch (g) {
          console.error("Failed to create replenishment:", g),
            s("撥補單建立失敗", "error");
        } finally {
          f(!1);
        }
      };
    return e
      ? o.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
          children: o.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl max-w-7xl w-full h-[90vh] flex flex-col overflow-hidden",
            children: [
              o.jsxs("div", {
                className: "p-6 border-b border-slate-200",
                children: [
                  o.jsxs("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                      o.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          o.jsx("div", {
                            className:
                              "w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center",
                            children: o.jsx(zn, {
                              size: 20,
                              className: "text-blue-700",
                            }),
                          }),
                          o.jsxs("div", {
                            children: [
                              o.jsx("h2", {
                                className: "text-xl font-bold text-slate-800",
                                children: "建立撥補單預覽",
                              }),
                              o.jsxs("p", {
                                className: "text-sm text-slate-600",
                                children: ["共 ", n.length, " 項需撥補藥品"],
                              }),
                            ],
                          }),
                        ],
                      }),
                      o.jsx("button", {
                        onClick: t,
                        className:
                          "text-slate-400 hover:text-slate-600 transition-colors",
                        children: o.jsx(ln, { size: 24 }),
                      }),
                    ],
                  }),
                  x.length > 0 &&
                    o.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        o.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            o.jsx("label", {
                              className: "text-sm font-medium text-slate-700",
                              children: "來源庫別：",
                            }),
                            o.jsx("select", {
                              value: (k == null ? void 0 : k.name) || "",
                              onChange: (d) => {
                                const m = x.find(
                                  (g) => g.name === d.target.value
                                );
                                D(m || null);
                              },
                              className:
                                "px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",
                              children: x.map((d) =>
                                o.jsx(
                                  "option",
                                  { value: d.name, children: d.name },
                                  d.name
                                )
                              ),
                            }),
                          ],
                        }),
                        o.jsxs("button", {
                          onClick: () => I(!E),
                          className:
                            "flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors",
                          children: [o.jsx(Gl, { size: 18 }), "新增藥品"],
                        }),
                      ],
                    }),
                ],
              }),
              E &&
                o.jsxs("div", {
                  className: "px-6 py-4 bg-slate-50 border-b border-slate-200",
                  children: [
                    o.jsxs("div", {
                      className: "flex gap-3 items-start",
                      children: [
                        o.jsx("div", {
                          className: "flex-1",
                          children: o.jsx("input", {
                            type: "text",
                            placeholder: "搜尋藥碼、料號或藥名...",
                            value: P,
                            onChange: (d) => U(d.target.value),
                            className:
                              "w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                          }),
                        }),
                        o.jsx("button", {
                          onClick: () => {
                            I(!1), U("");
                          },
                          className:
                            "px-4 py-2 bg-slate-300 text-slate-700 rounded-lg hover:bg-slate-400 transition-colors",
                          children: "取消",
                        }),
                      ],
                    }),
                    G.length > 0 &&
                      o.jsx("div", {
                        className:
                          "mt-3 bg-white rounded-lg border border-slate-200 max-h-60 overflow-y-auto",
                        children: G.map((d) =>
                          o.jsxs(
                            "div",
                            {
                              className:
                                "flex items-center justify-between px-4 py-3 hover:bg-slate-50 border-b border-slate-100 last:border-b-0",
                              children: [
                                o.jsxs("div", {
                                  className: "flex-1",
                                  children: [
                                    o.jsxs("div", {
                                      className:
                                        "flex items-center gap-2 flex-wrap",
                                      children: [
                                        o.jsx("span", {
                                          className:
                                            "inline-block px-2 py-1 bg-slate-700 text-white text-xs rounded font-mono",
                                          children: d.code,
                                        }),
                                        d.material_no &&
                                          o.jsx("span", {
                                            className:
                                              "inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded font-mono",
                                            children: d.material_no,
                                          }),
                                        o.jsx("span", {
                                          className:
                                            "font-medium text-slate-800",
                                          children: d.name,
                                        }),
                                      ],
                                    }),
                                    d.cht_name &&
                                      o.jsx("p", {
                                        className:
                                          "text-sm text-slate-500 mt-1",
                                        children: d.cht_name,
                                      }),
                                  ],
                                }),
                                o.jsx("button", {
                                  onClick: () => Y(d),
                                  className:
                                    "ml-4 px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors",
                                  children: "新增",
                                }),
                              ],
                            },
                            d.GUID
                          )
                        ),
                      }),
                    P &&
                      G.length === 0 &&
                      o.jsx("div", {
                        className: "mt-3 text-center text-slate-500 py-4",
                        children: "未找到符合的藥品",
                      }),
                  ],
                }),
              o.jsx("div", {
                className: "flex-1 overflow-y-auto",
                children: i
                  ? o.jsx("div", {
                      className: "flex justify-center py-12",
                      children: o.jsx(Ke, {}),
                    })
                  : a.length === 0
                  ? o.jsxs("div", {
                      className: "text-center py-12",
                      children: [
                        o.jsx(Pr, {
                          size: 48,
                          className: "mx-auto text-slate-300 mb-4",
                        }),
                        o.jsx("p", {
                          className: "text-slate-500",
                          children: "無需撥補的藥品",
                        }),
                      ],
                    })
                  : o.jsx("div", {
                      className: "overflow-x-auto",
                      children: o.jsxs("table", {
                        className: "w-full",
                        children: [
                          o.jsx("thead", {
                            className: "bg-slate-100 sticky top-0",
                            children: o.jsxs("tr", {
                              children: [
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "藥碼",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "料號",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "藥名",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-right text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "來源庫存",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-right text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "原始數量",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-right text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "調整後數量",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-right text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "撥補數量",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-center text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "操作",
                                }),
                              ],
                            }),
                          }),
                          o.jsx("tbody", {
                            className: "bg-white divide-y divide-slate-200",
                            children: a.map((d, m) => {
                              const g = L(d);
                              return o.jsxs(
                                "tr",
                                {
                                  className:
                                    "hover:bg-slate-50 transition-colors",
                                  children: [
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm",
                                      children: d.code,
                                    }),
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm",
                                      children: d.itemCode,
                                    }),
                                    o.jsx("td", {
                                      className:
                                        "px-4 py-3 text-sm text-slate-800 font-medium",
                                      children: d.name,
                                    }),
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm text-right",
                                      children: o.jsx("span", {
                                        className: `font-semibold ${
                                          d.sourceStock !== null &&
                                          d.sourceStock < g.adjustedQuantity
                                            ? "text-red-600"
                                            : "text-green-600"
                                        }`,
                                        children:
                                          d.sourceStock !== null
                                            ? d.sourceStock
                                            : "-",
                                      }),
                                    }),
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm text-right",
                                      children: o.jsx("input", {
                                        type: "number",
                                        min: "0",
                                        step: "1",
                                        value: g.rawQuantity,
                                        onChange: (S) =>
                                          B(d.code, S.target.value),
                                        className:
                                          "w-24 px-2 py-1 text-right border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                      }),
                                    }),
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm text-right",
                                      children: o.jsx("span", {
                                        className:
                                          g.adjustedQuantity !== g.rawQuantity
                                            ? "font-semibold text-orange-600"
                                            : "text-slate-600",
                                        children: g.adjustedQuantity,
                                      }),
                                    }),
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm text-right",
                                      children: o.jsxs("div", {
                                        className:
                                          "flex items-center justify-end gap-2",
                                        children: [
                                          o.jsx("input", {
                                            type: "number",
                                            min: "0",
                                            step: "1",
                                            value: g.convertedCount,
                                            onChange: (S) =>
                                              A(d.code, S.target.value),
                                            className:
                                              "w-24 px-2 py-1 text-right border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-bold text-blue-600",
                                          }),
                                          d.displayUnitName &&
                                            o.jsx("span", {
                                              className:
                                                "text-slate-600 font-medium",
                                              children: d.displayUnitName,
                                            }),
                                        ],
                                      }),
                                    }),
                                    o.jsx("td", {
                                      className:
                                        "px-4 py-3 text-sm text-center",
                                      children: o.jsx("button", {
                                        onClick: () => H(d.code),
                                        className:
                                          "text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded transition-colors",
                                        title: "刪除此項目",
                                        children: o.jsx(da, { size: 18 }),
                                      }),
                                    }),
                                  ],
                                },
                                `${d.code}-${m}`
                              );
                            }),
                          }),
                        ],
                      }),
                    }),
              }),
              o.jsxs("div", {
                className:
                  "flex justify-end gap-3 p-6 border-t border-slate-200 bg-white",
                children: [
                  o.jsx("button", {
                    onClick: t,
                    className:
                      "px-6 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 font-medium transition-colors",
                    children: "取消",
                  }),
                  o.jsx("button", {
                    onClick: J,
                    disabled: i || a.length === 0 || !k,
                    className:
                      "px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed rounded-lg text-white font-medium transition-colors",
                    children: "確認建立",
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
  },
  em = () => {
    const [e, t] = N.useState([]),
      [n, r] = N.useState(null),
      [l, s] = N.useState([]),
      [a, u] = N.useState(new Set(["all"])),
      [i, f] = N.useState("all"),
      [j, v] = N.useState(!0),
      [x, _] = N.useState(!1),
      [k, D] = N.useState(null),
      [V, h] = N.useState(null),
      [p, y] = N.useState(!1),
      [E, I] = N.useState(!1),
      [P, U] = N.useState(new Set());
    N.useEffect(() => {
      R();
    }, []);
    const R = async () => {
        try {
          v(!0);
          const c = await ql();
          if (c.Code === 200 && c.Data) {
            const w = c.Data.filter((b) => b.type !== "藥庫");
            t(w), w.length > 0 && (r(w[0]), q(w[0]));
          }
        } catch (c) {
          console.error("Failed to fetch server settings:", c);
        } finally {
          v(!1);
        }
      },
      q = async (c) => {
        try {
          _(!0);
          const w = new Date(),
            b = new Date();
          b.setDate(b.getDate() - 30);
          const z = (F) => {
              const W = F.getFullYear(),
                O = String(F.getMonth() + 1).padStart(2, "0"),
                le = String(F.getDate()).padStart(2, "0"),
                ce = String(F.getHours()).padStart(2, "0"),
                ze = String(F.getMinutes()).padStart(2, "0"),
                he = String(F.getSeconds()).padStart(2, "0");
              return `${W}-${O}-${le} ${ce}:${ze}:${he}`;
            },
            [Q, X] = await Promise.all([
              Dr({ ServerName: c.name, ServerType: c.type }),
              ha({
                ValueAry: [z(b), z(w)],
                ServerName: c.name,
                ServerType: c.type,
              }),
            ]);
          if (Q.Code === 200 && X.Code === 200) {
            const F = new Map(
                X.Data.map((O) => [
                  O.CODE,
                  typeof O.ANG_QTY == "string"
                    ? parseFloat(O.ANG_QTY) || 0
                    : O.ANG_QTY || 0,
                ])
              ),
              W = Q.Data.map((O) => {
                var xe, vt, Ot, Qt, Un, Rn, $n;
                const le = F.get(O.code) || 0,
                  ce =
                    typeof ((xe = O.Classify) == null ? void 0 : xe.safe_day) ==
                    "string"
                      ? parseFloat(O.Classify.safe_day) || 0
                      : ((vt = O.Classify) == null ? void 0 : vt.safe_day) || 0,
                  ze =
                    typeof ((Ot = O.Classify) == null
                      ? void 0
                      : Ot.standard_day) == "string"
                      ? parseFloat(O.Classify.standard_day) || 0
                      : ((Qt = O.Classify) == null
                          ? void 0
                          : Qt.standard_day) || 0,
                  he = Array.isArray(O.qty)
                    ? O.qty.reduce((Yl, At) => {
                        const Kl =
                          typeof At == "string" ? parseFloat(At) || 0 : At || 0;
                        return Yl + Kl;
                      }, 0)
                    : 0;
                return {
                  code: O.code,
                  material_no: O.material_no,
                  name: O.cht_name || O.name,
                  type: ((Un = O.med_cloud) == null ? void 0 : Un.TYPE) || "",
                  currentStock: he,
                  avgDailyConsumption: le,
                  safetyQuantity: le * ce,
                  standardQuantity: le * ze,
                  medGuid: (Rn = O.med_cloud) == null ? void 0 : Rn.GUID,
                  fileStatus:
                    (($n = O.med_cloud) == null ? void 0 : $n.FILE_STATUS) ||
                    "",
                };
              });
            s(W);
          }
        } catch (w) {
          console.error("Failed to fetch replenishment data:", w);
        } finally {
          _(!1);
        }
      },
      T = (c) => {
        r(c), q(c);
      },
      B = (c, w) => {
        c.preventDefault(), D({ x: c.clientX, y: c.clientY }), h(w);
      },
      A = () => {
        y(!0);
      },
      L = () => {
        D(null);
      },
      H = N.useMemo(() => {
        const c = new Set();
        return (
          l.forEach((w) => {
            w.type && c.add(w.type);
          }),
          Array.from(c).sort()
        );
      }, [l]),
      G = (c) => {
        u((w) => {
          const b = new Set(w);
          return c === "all"
            ? new Set(["all"])
            : (b.delete("all"),
              b.has(c) ? b.delete(c) : b.add(c),
              b.size === 0 ? new Set(["all"]) : b);
        });
      },
      Y = N.useMemo(() => {
        let c = a.has("all") ? l : l.filter((z) => a.has(z.type));
        i === "open"
          ? (c = c.filter(
              (z) => z.fileStatus === "開檔中" || z.fileStatus === ""
            ))
          : i === "closed" && (c = c.filter((z) => z.fileStatus === "關檔中"));
        const w = c.reduce(
          (z, Q) => (
            z[Q.code]
              ? (z[Q.code].currentStock += Q.currentStock)
              : (z[Q.code] = { ...Q }),
            z
          ),
          {}
        );
        return Object.values(w).sort((z, Q) => {
          const X = z.currentStock < z.safetyQuantity,
            F = Q.currentStock < Q.safetyQuantity;
          return X && !F ? -1 : !X && F ? 1 : z.code.localeCompare(Q.code);
        });
      }, [l, a, i]),
      J = N.useMemo(
        () => Y.filter((c) => c.currentStock < c.safetyQuantity),
        [Y]
      ),
      d = () => {
        if (J.length === 0) {
          alert("目前沒有需要撥補的藥品");
          return;
        }
        I(!0);
      },
      m = () => {
        if (P.size === 0) {
          alert("請至少選擇一個品項");
          return;
        }
        I(!0);
      },
      g = (c) => {
        U((w) => {
          const b = new Set(w);
          return b.has(c) ? b.delete(c) : b.add(c), b;
        });
      },
      S = () => {
        P.size === Y.length ? U(new Set()) : U(new Set(Y.map((c) => c.code)));
      },
      C = N.useMemo(() => Y.filter((c) => P.has(c.code)), [Y, P]);
    return j
      ? o.jsx("div", {
          className: "flex justify-center items-center py-12",
          children: o.jsx(Ke, {}),
        })
      : o.jsxs("div", {
          className: "space-y-6",
          children: [
            o.jsxs("div", {
              className: "space-y-4",
              children: [
                o.jsx("div", {
                  className: "flex items-center justify-between gap-4",
                  children: o.jsx("div", {
                    className:
                      "bg-white rounded-lg shadow-sm border border-slate-200 p-4 flex-1",
                    children: o.jsx("div", {
                      className: "flex flex-wrap gap-2",
                      children: e.map((c) =>
                        o.jsx(
                          "button",
                          {
                            onClick: () => T(c),
                            className: `px-4 py-2 rounded-lg font-medium transition-colors ${
                              (n == null ? void 0 : n.name) === c.name &&
                              (n == null ? void 0 : n.type) === c.type
                                ? "bg-blue-600 text-white"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`,
                            children: c.name,
                          },
                          `${c.name}-${c.type}`
                        )
                      ),
                    }),
                  }),
                }),
                o.jsx("div", {
                  className:
                    "bg-white rounded-lg shadow-sm border border-slate-200 p-4",
                  children: o.jsxs("div", {
                    className: "flex flex-col gap-4",
                    children: [
                      o.jsxs("div", {
                        className: "flex flex-col gap-3",
                        children: [
                          o.jsx("div", {
                            className: "flex items-center justify-between",
                            children: o.jsx("label", {
                              className: "text-sm font-medium text-slate-700",
                              children: "檔案狀態:",
                            }),
                          }),
                          o.jsxs("div", {
                            className: "flex flex-wrap gap-2",
                            children: [
                              o.jsx("button", {
                                onClick: () => f("all"),
                                className: `px-4 py-2 rounded-lg font-medium transition-all ${
                                  i === "all"
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                }`,
                                children: "全部",
                              }),
                              o.jsx("button", {
                                onClick: () => f("open"),
                                className: `px-4 py-2 rounded-lg font-medium transition-all ${
                                  i === "open"
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                }`,
                                children: "開檔中",
                              }),
                              o.jsx("button", {
                                onClick: () => f("closed"),
                                className: `px-4 py-2 rounded-lg font-medium transition-all ${
                                  i === "closed"
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                }`,
                                children: "關檔中",
                              }),
                            ],
                          }),
                        ],
                      }),
                      o.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          o.jsx("label", {
                            className: "text-sm font-medium text-slate-700",
                            children: "藥品類別:",
                          }),
                          o.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              o.jsxs("button", {
                                onClick: d,
                                disabled: J.length === 0,
                                className:
                                  "flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-slate-300 disabled:cursor-not-allowed rounded-lg text-white font-medium transition-colors",
                                children: [
                                  o.jsx(zn, { size: 18 }),
                                  "自動建立撥補單 ",
                                  J.length > 0 && `(${J.length})`,
                                ],
                              }),
                              o.jsxs("button", {
                                onClick: m,
                                disabled: P.size === 0,
                                className:
                                  "flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed rounded-lg text-white font-medium transition-colors",
                                children: [
                                  o.jsx(zn, { size: 18 }),
                                  "建立選擇品項撥補單 ",
                                  P.size > 0 && `(${P.size})`,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      o.jsxs("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                          o.jsx("button", {
                            onClick: () => G("all"),
                            className: `px-4 py-2 rounded-lg font-medium transition-all ${
                              a.has("all")
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`,
                            children: "全部類別",
                          }),
                          H.map((c) =>
                            o.jsx(
                              "button",
                              {
                                onClick: () => G(c),
                                className: `px-4 py-2 rounded-lg font-medium transition-all ${
                                  a.has(c)
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                }`,
                                children: c,
                              },
                              c
                            )
                          ),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            n &&
              o.jsxs("div", {
                className:
                  "bg-white rounded-lg shadow-sm border border-slate-200",
                children: [
                  o.jsxs("div", {
                    className:
                      "sticky top-0 z-10 bg-slate-50 border-b border-slate-200 p-4",
                    children: [
                      o.jsx("h2", {
                        className: "text-lg font-semibold text-gray-800",
                        children: n.name,
                      }),
                      o.jsx("p", {
                        className: "text-sm text-slate-600 mt-1",
                        children: "建議撥補資訊（最近30天平均消耗量）",
                      }),
                    ],
                  }),
                  x
                    ? o.jsx("div", {
                        className: "flex justify-center items-center py-12",
                        children: o.jsx(Ke, {}),
                      })
                    : o.jsx("div", {
                        className: "overflow-x-auto max-h-[calc(100vh-300px)]",
                        children: o.jsxs("table", {
                          className: "w-full",
                          children: [
                            o.jsx("thead", {
                              className:
                                "bg-slate-50 border-b border-slate-200",
                              children: o.jsxs("tr", {
                                children: [
                                  o.jsx("th", {
                                    className:
                                      "sticky top-0 px-6 py-3 text-center text-base font-medium text-gray-600 uppercase tracking-wider bg-slate-50 z-10",
                                    children: o.jsx("input", {
                                      type: "checkbox",
                                      checked:
                                        P.size === Y.length && Y.length > 0,
                                      onChange: S,
                                      className: "w-4 h-4 cursor-pointer",
                                    }),
                                  }),
                                  o.jsx("th", {
                                    className:
                                      "sticky top-0 px-6 py-3 text-left text-base font-medium text-gray-600 uppercase tracking-wider bg-slate-50 z-10",
                                    children: "藥碼",
                                  }),
                                  o.jsx("th", {
                                    className:
                                      "sticky top-0 px-6 py-3 text-left text-base font-medium text-gray-600 uppercase tracking-wider bg-slate-50 z-10",
                                    children: "料號",
                                  }),
                                  o.jsx("th", {
                                    className:
                                      "sticky top-0 px-6 py-3 text-left text-base font-medium text-gray-600 uppercase tracking-wider bg-slate-50 z-10",
                                    children: "藥名",
                                  }),
                                  o.jsx("th", {
                                    className:
                                      "sticky top-0 px-6 py-3 text-left text-base font-medium text-gray-600 uppercase tracking-wider bg-slate-50 z-10",
                                    children: "種類",
                                  }),
                                  o.jsx("th", {
                                    className:
                                      "sticky top-0 px-6 py-3 text-right text-base font-medium text-gray-600 uppercase tracking-wider bg-slate-50 z-10",
                                    children: "庫存",
                                  }),
                                  o.jsx("th", {
                                    className:
                                      "sticky top-0 px-6 py-3 text-right text-base font-medium text-gray-600 uppercase tracking-wider bg-slate-50 z-10",
                                    children: "平均日消耗量",
                                  }),
                                  o.jsx("th", {
                                    className:
                                      "sticky top-0 px-6 py-3 text-right text-base font-medium text-gray-600 uppercase tracking-wider bg-slate-50 z-10",
                                    children: "安全量",
                                  }),
                                  o.jsx("th", {
                                    className:
                                      "sticky top-0 px-6 py-3 text-right text-base font-medium text-gray-600 uppercase tracking-wider bg-slate-50 z-10",
                                    children: "基準量",
                                  }),
                                ],
                              }),
                            }),
                            o.jsx("tbody", {
                              className: "bg-white divide-y divide-slate-200",
                              children:
                                Y.length === 0
                                  ? o.jsx("tr", {
                                      children: o.jsx("td", {
                                        colSpan: 9,
                                        className:
                                          "px-6 py-8 text-center text-slate-500",
                                        children: "無資料",
                                      }),
                                    })
                                  : Y.map((c, w) => {
                                      const b =
                                        c.currentStock < c.safetyQuantity;
                                      return o.jsxs(
                                        "tr",
                                        {
                                          onContextMenu: (z) => B(z, c),
                                          className: `transition-colors cursor-context-menu ${
                                            b
                                              ? "bg-red-50 hover:bg-red-100"
                                              : "hover:bg-slate-50"
                                          }`,
                                          children: [
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-center",
                                              children: o.jsx("input", {
                                                type: "checkbox",
                                                checked: P.has(c.code),
                                                onChange: () => g(c.code),
                                                onClick: (z) =>
                                                  z.stopPropagation(),
                                                className:
                                                  "w-4 h-4 cursor-pointer",
                                              }),
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900",
                                              children: c.code,
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900",
                                              children: c.material_no,
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900",
                                              children: c.name,
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-600",
                                              children: c.type,
                                            }),
                                            o.jsx("td", {
                                              className: `px-6 py-4 text-sm text-right ${
                                                b
                                                  ? "text-red-700 font-semibold"
                                                  : "text-gray-900"
                                              }`,
                                              children:
                                                c.currentStock.toFixed(2),
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900 text-right",
                                              children:
                                                c.avgDailyConsumption.toFixed(
                                                  2
                                                ),
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900 text-right",
                                              children:
                                                c.safetyQuantity.toFixed(2),
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900 text-right",
                                              children:
                                                c.standardQuantity.toFixed(2),
                                            }),
                                          ],
                                        },
                                        `${c.code}-${w}`
                                      );
                                    }),
                            }),
                          ],
                        }),
                      }),
                ],
              }),
            k &&
              V &&
              o.jsx(fa, { x: k.x, y: k.y, onClose: L, onViewUnitDetails: A }),
            p &&
              V &&
              V.medGuid &&
              o.jsx(pa, {
                isOpen: p,
                onClose: () => {
                  y(!1), h(null);
                },
                medGuid: V.medGuid,
                medName: V.name,
                onFetchUnitDetails: Nr,
                onUpdateUnits: ma,
              }),
            o.jsx(Jp, {
              isOpen: E,
              onClose: () => {
                I(!1), U(new Set());
              },
              items: P.size > 0 ? C : J,
              onFetchUnitDetails: Nr,
              destinationServerName: (n == null ? void 0 : n.name) || "",
            }),
          ],
        });
  },
  tm = ({
    isOpen: e,
    onClose: t,
    items: n,
    onFetchUnitDetails: r,
    destinationServerName: l,
  }) => {
    const { showToast: s } = xa(),
      [a, u] = N.useState([]),
      [i, f] = N.useState(!1),
      [j, v] = N.useState(new Map()),
      [x, _] = N.useState([]),
      [k, D] = N.useState(null),
      [V, h] = N.useState(new Map()),
      [p, y] = N.useState([]),
      [E, I] = N.useState(!1),
      [P, U] = N.useState("");
    N.useEffect(() => {
      e && R();
    }, [e]),
      N.useEffect(() => {
        e && n.length > 0 && k && T();
      }, [e, n, k]);
    const R = async () => {
        try {
          const m = (await ql()).Data.filter((g) => g.type === "藥庫");
          _(m), m.length > 0 && D(m[0]);
        } catch (d) {
          console.error("Failed to fetch warehouses:", d);
        }
      },
      q = async () => {
        if (!k) return new Map();
        try {
          const d = await Dr({ ServerName: k.name, ServerType: k.type });
          y(d.Data || []);
          const m = new Map();
          return (
            d.Data.forEach((g) => {
              let S = 0;
              Array.isArray(g.qty)
                ? (S = g.qty.reduce((C, c) => C + parseFloat(c || "0"), 0))
                : (S =
                    typeof g.qty == "number"
                      ? g.qty
                      : parseFloat(g.qty || "0")),
                m.set(g.code, S);
            }),
            h(m),
            m
          );
        } catch (d) {
          return console.error("Failed to fetch source stock:", d), new Map();
        }
      },
      T = async () => {
        f(!0);
        try {
          const d = n.map(async (c) => {
              var b;
              const w = Math.max(0, c.standardQuantity - c.currentStock);
              if (!c.medGuid)
                return {
                  code: c.code,
                  itemCode: c.material_no,
                  name: c.name,
                  rawQuantity: w,
                  adjustedQuantity: w,
                  convertedUnit: `${w} (無單位資訊)`,
                  conversionRate: 1,
                  displayUnitName: "",
                  originalItem: c,
                  sourceStock: null,
                  minProcurementQuantity: 1,
                  smallestUnitConversionRate: 1,
                  smallestUnitName: "",
                };
              try {
                const z = await r(c.medGuid);
                if (!z || z.length === 0)
                  return {
                    code: c.code,
                    itemCode: c.material_no,
                    name: c.name,
                    rawQuantity: w,
                    adjustedQuantity: w,
                    convertedUnit: `${w} (無單位資訊)`,
                    conversionRate: 1,
                    displayUnitName: "",
                    originalItem: c,
                    sourceStock: null,
                    minProcurementQuantity: 1,
                    smallestUnitConversionRate: 1,
                    smallestUnitName: "",
                  };
                const Q = z.find((xe) => xe.unit_type === "採購");
                if (!Q) {
                  const xe =
                    ((b = z[z.length - 1]) == null ? void 0 : b.unit_name) ||
                    "";
                  return {
                    code: c.code,
                    itemCode: c.material_no,
                    name: c.name,
                    rawQuantity: w,
                    adjustedQuantity: w,
                    convertedUnit: `${w} ${xe}`,
                    conversionRate: 1,
                    displayUnitName: xe,
                    originalItem: c,
                    sourceStock: null,
                    minProcurementQuantity: 1,
                    smallestUnitConversionRate: 1,
                    smallestUnitName: xe,
                  };
                }
                const X = z.reduce((xe, vt) => {
                    const Ot = parseInt(vt.sort_order),
                      Qt = parseInt(xe.sort_order);
                    return Ot > Qt ? vt : xe;
                  }, z[0]),
                  F = parseFloat(X.conversion_rate) || 1,
                  W = X.unit_name,
                  O = Math.ceil(w / F) * F,
                  le = Q.unit_name,
                  ce = parseFloat(Q.quantity) || 1,
                  ze = Math.ceil(O / F),
                  he = Math.max(ze, ce);
                return {
                  code: c.code,
                  itemCode: c.material_no,
                  name: c.name,
                  rawQuantity: w,
                  adjustedQuantity: O,
                  convertedUnit: `${he} ${le}`,
                  conversionRate: F,
                  displayUnitName: le,
                  originalItem: c,
                  sourceStock: null,
                  minProcurementQuantity: ce,
                  smallestUnitConversionRate: F,
                  smallestUnitName: W,
                };
              } catch (z) {
                return (
                  console.error(`Failed to fetch units for ${c.code}:`, z),
                  {
                    code: c.code,
                    itemCode: c.material_no,
                    name: c.name,
                    rawQuantity: w,
                    adjustedQuantity: w,
                    convertedUnit: `${w} (無法取得單位)`,
                    conversionRate: 1,
                    displayUnitName: "",
                    originalItem: c,
                    sourceStock: null,
                    minProcurementQuantity: 1,
                    smallestUnitConversionRate: 1,
                    smallestUnitName: "",
                  }
                );
              }
            }),
            m = await Promise.all(d),
            g = await q(),
            S = m.map((c) => ({ ...c, sourceStock: g.get(c.code) ?? null }));
          u(S);
          const C = new Map();
          S.forEach((c) => {
            const w = c.adjustedQuantity / c.conversionRate;
            C.set(c.code, { raw: c.rawQuantity, converted: w });
          }),
            v(C);
        } catch (d) {
          console.error("Failed to calculate previews:", d);
        } finally {
          f(!1);
        }
      },
      B = (d, m) => {
        const g = parseFloat(m) || 0,
          S = a.find((b) => b.code === d);
        if (!S) return;
        const C =
            Math.ceil(g / S.smallestUnitConversionRate) *
            S.smallestUnitConversionRate,
          c = Math.ceil(C / S.conversionRate),
          w = Math.max(c, S.minProcurementQuantity);
        v((b) => {
          const z = new Map(b);
          return z.set(d, { raw: g, converted: w }), z;
        });
      },
      A = (d, m) => {
        const g = parseFloat(m) || 0,
          S = a.find((w) => w.code === d);
        if (!S) return;
        const C = Math.max(g, S.minProcurementQuantity),
          c = C * S.conversionRate;
        v((w) => {
          const b = new Map(w);
          return b.set(d, { raw: c, converted: C }), b;
        });
      },
      L = (d) => {
        const m = j.get(d.code);
        if (m) {
          let g;
          return (
            m.raw === 0 || m.raw < d.smallestUnitConversionRate
              ? (g = m.converted * d.conversionRate)
              : (g =
                  Math.ceil(m.raw / d.smallestUnitConversionRate) *
                  d.smallestUnitConversionRate),
            {
              rawQuantity: m.raw,
              adjustedQuantity: g,
              convertedCount: m.converted,
            }
          );
        }
        return {
          rawQuantity: d.rawQuantity,
          adjustedQuantity: d.adjustedQuantity,
          convertedCount: d.adjustedQuantity / d.conversionRate,
        };
      },
      H = (d) => {
        u((m) => m.filter((g) => g.code !== d)),
          v((m) => {
            const g = new Map(m);
            return g.delete(d), g;
          });
      },
      G = $i.useMemo(() => {
        if (!P.trim()) return [];
        const d = new Set(a.map((C) => C.code)),
          m = P.toLowerCase(),
          g = p.filter((C) => {
            var Q, X, F, W;
            if (d.has(C.code)) return !1;
            const c =
                (Q = C.code) == null ? void 0 : Q.toLowerCase().includes(m),
              w = (X = C.name) == null ? void 0 : X.toLowerCase().includes(m),
              b =
                (F = C.cht_name) == null ? void 0 : F.toLowerCase().includes(m),
              z =
                (W = C.material_no) == null
                  ? void 0
                  : W.toLowerCase().includes(m);
            return c || w || b || z;
          }),
          S = new Map();
        return (
          g.forEach((C) => {
            S.has(C.code) || S.set(C.code, C);
          }),
          Array.from(S.values())
        );
      }, [P, p, a]),
      Y = async (d) => {
        var g;
        if (a.some((S) => S.code === d.code)) {
          s("此藥品已在列表中", "warning");
          return;
        }
        const m = {
          code: d.code,
          name: d.name,
          material_no: d.material_no,
          currentStock: 0,
          safeStock: 0,
          standardQuantity: 0,
          medGuid: d.GUID,
        };
        try {
          const S = await r(d.med_cloud.GUID);
          let C;
          if (!S || S.length === 0)
            C = {
              code: d.code,
              itemCode: d.material_no,
              name: d.name,
              rawQuantity: 0,
              adjustedQuantity: 0,
              convertedUnit: "0 (無單位資訊)",
              conversionRate: 1,
              displayUnitName: "",
              originalItem: m,
              sourceStock: V.get(d.code) ?? null,
              minProcurementQuantity: 1,
              smallestUnitConversionRate: 1,
              smallestUnitName: "",
            };
          else {
            const c = S.find((w) => w.unit_type === "採購");
            if (c) {
              const w = S.reduce((F, W) => {
                  const O = parseInt(W.sort_order),
                    le = parseInt(F.sort_order);
                  return O > le ? W : F;
                }, S[0]),
                b = parseFloat(w.conversion_rate) || 1,
                z = w.unit_name,
                Q = c.unit_name,
                X = parseFloat(c.quantity) || 1;
              C = {
                code: d.code,
                itemCode: d.material_no,
                name: d.name,
                rawQuantity: 0,
                adjustedQuantity: 0,
                convertedUnit: `0 ${Q}`,
                conversionRate: b,
                displayUnitName: Q,
                originalItem: m,
                sourceStock: V.get(d.code) ?? null,
                minProcurementQuantity: X,
                smallestUnitConversionRate: b,
                smallestUnitName: z,
              };
            } else {
              const w =
                ((g = S[S.length - 1]) == null ? void 0 : g.unit_name) || "";
              C = {
                code: d.code,
                itemCode: d.material_no,
                name: d.name,
                rawQuantity: 0,
                adjustedQuantity: 0,
                convertedUnit: `0 ${w}`,
                conversionRate: 1,
                displayUnitName: w,
                originalItem: m,
                sourceStock: V.get(d.code) ?? null,
                minProcurementQuantity: 1,
                smallestUnitConversionRate: 1,
                smallestUnitName: w,
              };
            }
          }
          u((c) => [...c, C]),
            v((c) => {
              const w = new Map(c);
              return (
                w.set(d.code, { raw: 0, converted: C.minProcurementQuantity }),
                w
              );
            }),
            I(!1),
            U(""),
            s("藥品已成功新增", "success");
        } catch (S) {
          console.error("Failed to add drug:", S), s("新增藥品失敗", "error");
        }
      },
      J = async () => {
        if (!k) {
          s("請選擇庫別", "warning");
          return;
        }
        if (a.length === 0) {
          s("請至少選擇一個藥品", "warning");
          return;
        }
        const d = {
          Data: a.map((m) => {
            const g = L(m);
            return {
              CODE: m.code,
              NAME: m.name,
              SKDIACODE: m.itemCode,
              START_QTY: String(g.convertedCount),
            };
          }),
        };
        try {
          f(!0);
          const m = await Pe("/api/inspection/download_purchaseExcel", {
              method: "POST",
              body: d,
              responseType: "blob",
            }),
            g = new Date(),
            S = `${g.getFullYear()}${String(g.getMonth() + 1).padStart(
              2,
              "0"
            )}${String(g.getDate()).padStart(2, "0")}`,
            C = `${l}-${S}-建議採購.xlsx`,
            c = window.URL.createObjectURL(new Blob([m])),
            w = document.createElement("a");
          (w.href = c),
            w.setAttribute("download", C),
            document.body.appendChild(w),
            w.click(),
            w.remove(),
            window.URL.revokeObjectURL(c),
            s("採購單已下載", "success"),
            t();
        } catch (m) {
          console.error("Failed to download procurement excel:", m),
            s("採購單下載失敗", "error");
        } finally {
          f(!1);
        }
      };
    return e
      ? o.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
          children: o.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl max-w-7xl w-full h-[90vh] flex flex-col overflow-hidden",
            children: [
              o.jsxs("div", {
                className: "p-6 border-b border-slate-200",
                children: [
                  o.jsxs("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                      o.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          o.jsx("div", {
                            className:
                              "w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center",
                            children: o.jsx(zn, {
                              size: 20,
                              className: "text-blue-700",
                            }),
                          }),
                          o.jsxs("div", {
                            children: [
                              o.jsx("h2", {
                                className: "text-xl font-bold text-slate-800",
                                children: "建立採購單預覽",
                              }),
                              o.jsxs("p", {
                                className: "text-sm text-slate-600",
                                children: ["共 ", n.length, " 項需採購藥品"],
                              }),
                            ],
                          }),
                        ],
                      }),
                      o.jsx("button", {
                        onClick: t,
                        className:
                          "text-slate-400 hover:text-slate-600 transition-colors",
                        children: o.jsx(ln, { size: 24 }),
                      }),
                    ],
                  }),
                  x.length > 0 &&
                    o.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        o.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            o.jsx("label", {
                              className: "text-sm font-medium text-slate-700",
                              children: "來源庫別：",
                            }),
                            o.jsx("select", {
                              value: (k == null ? void 0 : k.name) || "",
                              onChange: (d) => {
                                const m = x.find(
                                  (g) => g.name === d.target.value
                                );
                                D(m || null);
                              },
                              className:
                                "px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",
                              children: x.map((d) =>
                                o.jsx(
                                  "option",
                                  { value: d.name, children: d.name },
                                  d.name
                                )
                              ),
                            }),
                          ],
                        }),
                        o.jsxs("button", {
                          onClick: () => I(!E),
                          className:
                            "flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors",
                          children: [o.jsx(Gl, { size: 18 }), "新增藥品"],
                        }),
                      ],
                    }),
                ],
              }),
              E &&
                o.jsxs("div", {
                  className: "px-6 py-4 bg-slate-50 border-b border-slate-200",
                  children: [
                    o.jsxs("div", {
                      className: "flex gap-3 items-start",
                      children: [
                        o.jsx("div", {
                          className: "flex-1",
                          children: o.jsx("input", {
                            type: "text",
                            placeholder: "搜尋藥碼、料號或藥名...",
                            value: P,
                            onChange: (d) => U(d.target.value),
                            className:
                              "w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                          }),
                        }),
                        o.jsx("button", {
                          onClick: () => {
                            I(!1), U("");
                          },
                          className:
                            "px-4 py-2 bg-slate-300 text-slate-700 rounded-lg hover:bg-slate-400 transition-colors",
                          children: "取消",
                        }),
                      ],
                    }),
                    G.length > 0 &&
                      o.jsx("div", {
                        className:
                          "mt-3 bg-white rounded-lg border border-slate-200 max-h-60 overflow-y-auto",
                        children: G.map((d) =>
                          o.jsxs(
                            "div",
                            {
                              className:
                                "flex items-center justify-between px-4 py-3 hover:bg-slate-50 border-b border-slate-100 last:border-b-0",
                              children: [
                                o.jsxs("div", {
                                  className: "flex-1",
                                  children: [
                                    o.jsxs("div", {
                                      className:
                                        "flex items-center gap-2 flex-wrap",
                                      children: [
                                        o.jsx("span", {
                                          className:
                                            "inline-block px-2 py-1 bg-slate-700 text-white text-xs rounded font-mono",
                                          children: d.code,
                                        }),
                                        d.material_no &&
                                          o.jsx("span", {
                                            className:
                                              "inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded font-mono",
                                            children: d.material_no,
                                          }),
                                        o.jsx("span", {
                                          className:
                                            "font-medium text-slate-800",
                                          children: d.name,
                                        }),
                                      ],
                                    }),
                                    d.cht_name &&
                                      o.jsx("p", {
                                        className:
                                          "text-sm text-slate-500 mt-1",
                                        children: d.cht_name,
                                      }),
                                  ],
                                }),
                                o.jsx("button", {
                                  onClick: () => Y(d),
                                  className:
                                    "ml-4 px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors",
                                  children: "新增",
                                }),
                              ],
                            },
                            d.GUID
                          )
                        ),
                      }),
                    P &&
                      G.length === 0 &&
                      o.jsx("div", {
                        className: "mt-3 text-center text-slate-500 py-4",
                        children: "未找到符合的藥品",
                      }),
                  ],
                }),
              o.jsx("div", {
                className: "flex-1 overflow-y-auto",
                children: i
                  ? o.jsx("div", {
                      className: "flex justify-center py-12",
                      children: o.jsx(Ke, {}),
                    })
                  : a.length === 0
                  ? o.jsxs("div", {
                      className: "text-center py-12",
                      children: [
                        o.jsx(Pr, {
                          size: 48,
                          className: "mx-auto text-slate-300 mb-4",
                        }),
                        o.jsx("p", {
                          className: "text-slate-500",
                          children: "無需採購的藥品",
                        }),
                      ],
                    })
                  : o.jsx("div", {
                      className: "overflow-x-auto",
                      children: o.jsxs("table", {
                        className: "w-full",
                        children: [
                          o.jsx("thead", {
                            className: "bg-slate-100 sticky top-0",
                            children: o.jsxs("tr", {
                              children: [
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "藥碼",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "料號",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-left text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "藥名",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-right text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "來源庫存",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-right text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "原始數量",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-right text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "調整後數量",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-right text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "採購數量",
                                }),
                                o.jsx("th", {
                                  className:
                                    "px-4 py-3 text-center text-base font-semibold text-slate-700 uppercase tracking-wider",
                                  children: "操作",
                                }),
                              ],
                            }),
                          }),
                          o.jsx("tbody", {
                            className: "bg-white divide-y divide-slate-200",
                            children: a.map((d, m) => {
                              const g = L(d),
                                S = g.convertedCount < d.minProcurementQuantity;
                              return o.jsxs(
                                "tr",
                                {
                                  className:
                                    "hover:bg-slate-50 transition-colors",
                                  children: [
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm",
                                      children: d.code,
                                    }),
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm",
                                      children: d.itemCode,
                                    }),
                                    o.jsx("td", {
                                      className:
                                        "px-4 py-3 text-sm text-slate-800 font-medium",
                                      children: d.name,
                                    }),
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm text-right",
                                      children: o.jsx("span", {
                                        className: `font-semibold ${
                                          d.sourceStock !== null &&
                                          d.sourceStock < g.adjustedQuantity
                                            ? "text-red-600"
                                            : "text-green-600"
                                        }`,
                                        children:
                                          d.sourceStock !== null
                                            ? d.sourceStock
                                            : "-",
                                      }),
                                    }),
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm text-right",
                                      children: o.jsx("input", {
                                        type: "number",
                                        min: "0",
                                        step: "1",
                                        value: g.rawQuantity,
                                        onChange: (C) =>
                                          B(d.code, C.target.value),
                                        className:
                                          "w-24 px-2 py-1 text-right border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                                      }),
                                    }),
                                    o.jsx("td", {
                                      className: "px-4 py-3 text-sm text-right",
                                      children: o.jsx("div", {
                                        className:
                                          "flex items-center justify-end gap-1",
                                        children: o.jsx("span", {
                                          className:
                                            g.adjustedQuantity !== g.rawQuantity
                                              ? "font-semibold text-orange-600"
                                              : "text-slate-600",
                                          children: g.adjustedQuantity,
                                        }),
                                      }),
                                    }),
                                    o.jsxs("td", {
                                      className: "px-4 py-3 text-sm text-right",
                                      children: [
                                        o.jsxs("div", {
                                          className:
                                            "flex items-center justify-end gap-2",
                                          children: [
                                            o.jsx("input", {
                                              type: "number",
                                              min: d.minProcurementQuantity,
                                              step: "1",
                                              value: g.convertedCount,
                                              onChange: (C) =>
                                                A(d.code, C.target.value),
                                              className: `w-24 px-2 py-1 text-right border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-bold ${
                                                S
                                                  ? "border-red-500 text-red-600"
                                                  : "border-slate-300 text-blue-600"
                                              }`,
                                              title: `最低採購數量：${d.minProcurementQuantity}`,
                                            }),
                                            d.displayUnitName &&
                                              o.jsx("span", {
                                                className:
                                                  "text-slate-600 font-medium",
                                                children: d.displayUnitName,
                                              }),
                                          ],
                                        }),
                                        S &&
                                          o.jsxs("div", {
                                            className:
                                              "text-xs text-red-500 mt-1 text-right",
                                            children: [
                                              "最低：",
                                              d.minProcurementQuantity,
                                            ],
                                          }),
                                      ],
                                    }),
                                    o.jsx("td", {
                                      className:
                                        "px-4 py-3 text-sm text-center",
                                      children: o.jsx("button", {
                                        onClick: () => H(d.code),
                                        className:
                                          "text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded transition-colors",
                                        title: "刪除此項目",
                                        children: o.jsx(da, { size: 18 }),
                                      }),
                                    }),
                                  ],
                                },
                                `${d.code}-${m}`
                              );
                            }),
                          }),
                        ],
                      }),
                    }),
              }),
              o.jsxs("div", {
                className:
                  "flex justify-end gap-3 p-6 border-t border-slate-200 bg-white",
                children: [
                  o.jsx("button", {
                    onClick: t,
                    className:
                      "px-6 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 font-medium transition-colors",
                    children: "取消",
                  }),
                  o.jsx("button", {
                    onClick: J,
                    disabled: i || a.length === 0 || !k,
                    className:
                      "px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed rounded-lg text-white font-medium transition-colors",
                    children: "確認建立",
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
  },
  nm = () => {
    const [e, t] = N.useState([]),
      [n, r] = N.useState(null),
      [l, s] = N.useState([]),
      [a, u] = N.useState(new Set(["all"])),
      [i, f] = N.useState("all"),
      [j, v] = N.useState(!0),
      [x, _] = N.useState(!1),
      [k, D] = N.useState(null),
      [V, h] = N.useState(null),
      [p, y] = N.useState(!1),
      [E, I] = N.useState(!1),
      [P, U] = N.useState(new Set());
    N.useEffect(() => {
      R();
    }, []);
    const R = async () => {
        try {
          v(!0);
          const c = await ql();
          if (c.Code === 200 && c.Data) {
            const w = c.Data.filter((b) => b.type == "藥庫");
            t(w), w.length > 0 && (r(w[0]), q(w[0]));
          }
        } catch (c) {
          console.error("Failed to fetch server settings:", c);
        } finally {
          v(!1);
        }
      },
      q = async (c) => {
        try {
          _(!0);
          const w = new Date(),
            b = new Date();
          b.setDate(b.getDate() - 30);
          const z = (F) => {
              const W = F.getFullYear(),
                O = String(F.getMonth() + 1).padStart(2, "0"),
                le = String(F.getDate()).padStart(2, "0"),
                ce = String(F.getHours()).padStart(2, "0"),
                ze = String(F.getMinutes()).padStart(2, "0"),
                he = String(F.getSeconds()).padStart(2, "0");
              return `${W}-${O}-${le} ${ce}:${ze}:${he}`;
            },
            [Q, X] = await Promise.all([
              Dr({ ServerName: c.name, ServerType: c.type }),
              ha({
                ValueAry: [z(b), z(w)],
                ServerName: c.name,
                ServerType: c.type,
              }),
            ]);
          if (Q.Code === 200 && X.Code === 200) {
            const F = new Map(
                X.Data.map((O) => [
                  O.CODE,
                  typeof O.ANG_QTY == "string"
                    ? parseFloat(O.ANG_QTY) || 0
                    : O.ANG_QTY || 0,
                ])
              ),
              W = Q.Data.map((O) => {
                var xe, vt, Ot, Qt, Un, Rn, $n;
                const le = F.get(O.code) || 0,
                  ce =
                    typeof ((xe = O.Classify) == null ? void 0 : xe.safe_day) ==
                    "string"
                      ? parseFloat(O.Classify.safe_day) || 0
                      : ((vt = O.Classify) == null ? void 0 : vt.safe_day) || 0,
                  ze =
                    typeof ((Ot = O.Classify) == null
                      ? void 0
                      : Ot.standard_day) == "string"
                      ? parseFloat(O.Classify.standard_day) || 0
                      : ((Qt = O.Classify) == null
                          ? void 0
                          : Qt.standard_day) || 0,
                  he = Array.isArray(O.qty)
                    ? O.qty.reduce((Yl, At) => {
                        const Kl =
                          typeof At == "string" ? parseFloat(At) || 0 : At || 0;
                        return Yl + Kl;
                      }, 0)
                    : 0;
                return {
                  code: O.code,
                  material_no: O.material_no,
                  name: O.cht_name || O.name,
                  type: ((Un = O.med_cloud) == null ? void 0 : Un.TYPE) || "",
                  currentStock: he,
                  avgDailyConsumption: le,
                  safetyQuantity: le * ce,
                  standardQuantity: le * ze,
                  medGuid: (Rn = O.med_cloud) == null ? void 0 : Rn.GUID,
                  fileStatus:
                    (($n = O.med_cloud) == null ? void 0 : $n.FILE_STATUS) ||
                    "",
                };
              });
            s(W);
          }
        } catch (w) {
          console.error("Failed to fetch replenishment data:", w);
        } finally {
          _(!1);
        }
      },
      T = (c) => {
        r(c), q(c);
      },
      B = (c, w) => {
        c.preventDefault(), D({ x: c.clientX, y: c.clientY }), h(w);
      },
      A = () => {
        y(!0);
      },
      L = () => {
        D(null);
      },
      H = N.useMemo(() => {
        const c = new Set();
        return (
          l.forEach((w) => {
            w.type && c.add(w.type);
          }),
          Array.from(c).sort()
        );
      }, [l]),
      G = (c) => {
        u((w) => {
          const b = new Set(w);
          return c === "all"
            ? new Set(["all"])
            : (b.delete("all"),
              b.has(c) ? b.delete(c) : b.add(c),
              b.size === 0 ? new Set(["all"]) : b);
        });
      },
      Y = N.useMemo(() => {
        let c = a.has("all") ? l : l.filter((z) => a.has(z.type));
        i === "open"
          ? (c = c.filter(
              (z) => z.fileStatus === "開檔中" || z.fileStatus === ""
            ))
          : i === "closed" && (c = c.filter((z) => z.fileStatus === "關檔中"));
        const w = c.reduce(
          (z, Q) => (
            z[Q.code]
              ? (z[Q.code].currentStock += Q.currentStock)
              : (z[Q.code] = { ...Q }),
            z
          ),
          {}
        );
        return Object.values(w).sort((z, Q) => {
          const X = z.currentStock < z.safetyQuantity,
            F = Q.currentStock < Q.safetyQuantity;
          return X && !F ? -1 : !X && F ? 1 : z.code.localeCompare(Q.code);
        });
      }, [l, a, i]),
      J = N.useMemo(
        () => Y.filter((c) => c.currentStock < c.safetyQuantity),
        [Y]
      ),
      d = () => {
        if (J.length === 0) {
          alert("目前沒有需要採購的藥品");
          return;
        }
        I(!0);
      },
      m = () => {
        if (P.size === 0) {
          alert("請至少選擇一個品項");
          return;
        }
        I(!0);
      },
      g = (c) => {
        U((w) => {
          const b = new Set(w);
          return b.has(c) ? b.delete(c) : b.add(c), b;
        });
      },
      S = () => {
        P.size === Y.length ? U(new Set()) : U(new Set(Y.map((c) => c.code)));
      },
      C = N.useMemo(() => Y.filter((c) => P.has(c.code)), [Y, P]);
    return j
      ? o.jsx("div", {
          className: "flex justify-center items-center py-12",
          children: o.jsx(Ke, {}),
        })
      : o.jsxs("div", {
          className: "space-y-6",
          children: [
            o.jsxs("div", {
              className: "space-y-4",
              children: [
                o.jsx("div", {
                  className: "flex items-center justify-between gap-4",
                  children: o.jsx("div", {
                    className:
                      "bg-white rounded-lg shadow-sm border border-slate-200 p-4 flex-1",
                    children: o.jsx("div", {
                      className: "flex flex-wrap gap-2",
                      children: e.map((c) =>
                        o.jsx(
                          "button",
                          {
                            onClick: () => T(c),
                            className: `px-4 py-2 rounded-lg font-medium transition-colors ${
                              (n == null ? void 0 : n.name) === c.name &&
                              (n == null ? void 0 : n.type) === c.type
                                ? "bg-blue-600 text-white"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`,
                            children: c.name,
                          },
                          `${c.name}-${c.type}`
                        )
                      ),
                    }),
                  }),
                }),
                o.jsx("div", {
                  className:
                    "bg-white rounded-lg shadow-sm border border-slate-200 p-4",
                  children: o.jsxs("div", {
                    className: "flex flex-col gap-4",
                    children: [
                      o.jsxs("div", {
                        className: "flex flex-col gap-3",
                        children: [
                          o.jsx("div", {
                            className: "flex items-center justify-between",
                            children: o.jsx("label", {
                              className: "text-sm font-medium text-slate-700",
                              children: "檔案狀態:",
                            }),
                          }),
                          o.jsxs("div", {
                            className: "flex flex-wrap gap-2",
                            children: [
                              o.jsx("button", {
                                onClick: () => f("all"),
                                className: `px-4 py-2 rounded-lg font-medium transition-all ${
                                  i === "all"
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                }`,
                                children: "全部",
                              }),
                              o.jsx("button", {
                                onClick: () => f("open"),
                                className: `px-4 py-2 rounded-lg font-medium transition-all ${
                                  i === "open"
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                }`,
                                children: "開檔中",
                              }),
                              o.jsx("button", {
                                onClick: () => f("closed"),
                                className: `px-4 py-2 rounded-lg font-medium transition-all ${
                                  i === "closed"
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                }`,
                                children: "關檔中",
                              }),
                            ],
                          }),
                        ],
                      }),
                      o.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          o.jsx("label", {
                            className: "text-sm font-medium text-slate-700",
                            children: "藥品類別:",
                          }),
                          o.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              o.jsxs("button", {
                                onClick: d,
                                disabled: J.length === 0,
                                className:
                                  "flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-slate-300 disabled:cursor-not-allowed rounded-lg text-white font-medium transition-colors",
                                children: [
                                  o.jsx(zn, { size: 18 }),
                                  "自動建立採購單 ",
                                  J.length > 0 && `(${J.length})`,
                                ],
                              }),
                              o.jsxs("button", {
                                onClick: m,
                                disabled: P.size === 0,
                                className:
                                  "flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed rounded-lg text-white font-medium transition-colors",
                                children: [
                                  o.jsx(zn, { size: 18 }),
                                  "建立選擇品項採購單 ",
                                  P.size > 0 && `(${P.size})`,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      o.jsxs("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                          o.jsx("button", {
                            onClick: () => G("all"),
                            className: `px-4 py-2 rounded-lg font-medium transition-all ${
                              a.has("all")
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                            }`,
                            children: "全部類別",
                          }),
                          H.map((c) =>
                            o.jsx(
                              "button",
                              {
                                onClick: () => G(c),
                                className: `px-4 py-2 rounded-lg font-medium transition-all ${
                                  a.has(c)
                                    ? "bg-blue-600 text-white shadow-md"
                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                }`,
                                children: c,
                              },
                              c
                            )
                          ),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            n &&
              o.jsxs("div", {
                className:
                  "bg-white rounded-lg shadow-sm border border-slate-200",
                children: [
                  o.jsxs("div", {
                    className:
                      "sticky top-0 z-10 bg-slate-50 border-b border-slate-200 p-4",
                    children: [
                      o.jsx("h2", {
                        className: "text-lg font-semibold text-gray-800",
                        children: n.name,
                      }),
                      o.jsx("p", {
                        className: "text-sm text-slate-600 mt-1",
                        children: "建議採購資訊（最近30天平均消耗量）",
                      }),
                    ],
                  }),
                  x
                    ? o.jsx("div", {
                        className: "flex justify-center items-center py-12",
                        children: o.jsx(Ke, {}),
                      })
                    : o.jsx("div", {
                        className: "overflow-x-auto max-h-[calc(100vh-300px)]",
                        children: o.jsxs("table", {
                          className: "w-full",
                          children: [
                            o.jsx("thead", {
                              className:
                                "bg-slate-50 border-b border-slate-200",
                              children: o.jsxs("tr", {
                                children: [
                                  o.jsx("th", {
                                    className:
                                      "sticky top-0 px-6 py-3 text-center text-base font-medium text-gray-600 uppercase tracking-wider bg-slate-50 z-10",
                                    children: o.jsx("input", {
                                      type: "checkbox",
                                      checked:
                                        P.size === Y.length && Y.length > 0,
                                      onChange: S,
                                      className: "w-4 h-4 cursor-pointer",
                                    }),
                                  }),
                                  o.jsx("th", {
                                    className:
                                      "sticky top-0 px-6 py-3 text-left text-base font-medium text-gray-600 uppercase tracking-wider bg-slate-50 z-10",
                                    children: "藥碼",
                                  }),
                                  o.jsx("th", {
                                    className:
                                      "sticky top-0 px-6 py-3 text-left text-base font-medium text-gray-600 uppercase tracking-wider bg-slate-50 z-10",
                                    children: "料號",
                                  }),
                                  o.jsx("th", {
                                    className:
                                      "sticky top-0 px-6 py-3 text-left text-base font-medium text-gray-600 uppercase tracking-wider bg-slate-50 z-10",
                                    children: "藥名",
                                  }),
                                  o.jsx("th", {
                                    className:
                                      "sticky top-0 px-6 py-3 text-left text-base font-medium text-gray-600 uppercase tracking-wider bg-slate-50 z-10",
                                    children: "種類",
                                  }),
                                  o.jsx("th", {
                                    className:
                                      "sticky top-0 px-6 py-3 text-right text-base font-medium text-gray-600 uppercase tracking-wider bg-slate-50 z-10",
                                    children: "庫存",
                                  }),
                                  o.jsx("th", {
                                    className:
                                      "sticky top-0 px-6 py-3 text-right text-base font-medium text-gray-600 uppercase tracking-wider bg-slate-50 z-10",
                                    children: "平均日消耗量",
                                  }),
                                  o.jsx("th", {
                                    className:
                                      "sticky top-0 px-6 py-3 text-right text-base font-medium text-gray-600 uppercase tracking-wider bg-slate-50 z-10",
                                    children: "安全量",
                                  }),
                                  o.jsx("th", {
                                    className:
                                      "sticky top-0 px-6 py-3 text-right text-base font-medium text-gray-600 uppercase tracking-wider bg-slate-50 z-10",
                                    children: "基準量",
                                  }),
                                ],
                              }),
                            }),
                            o.jsx("tbody", {
                              className: "bg-white divide-y divide-slate-200",
                              children:
                                Y.length === 0
                                  ? o.jsx("tr", {
                                      children: o.jsx("td", {
                                        colSpan: 9,
                                        className:
                                          "px-6 py-8 text-center text-slate-500",
                                        children: "無資料",
                                      }),
                                    })
                                  : Y.map((c, w) => {
                                      const b =
                                        c.currentStock < c.safetyQuantity;
                                      return o.jsxs(
                                        "tr",
                                        {
                                          onContextMenu: (z) => B(z, c),
                                          className: `transition-colors cursor-context-menu ${
                                            b
                                              ? "bg-red-50 hover:bg-red-100"
                                              : "hover:bg-slate-50"
                                          }`,
                                          children: [
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-center",
                                              children: o.jsx("input", {
                                                type: "checkbox",
                                                checked: P.has(c.code),
                                                onChange: () => g(c.code),
                                                onClick: (z) =>
                                                  z.stopPropagation(),
                                                className:
                                                  "w-4 h-4 cursor-pointer",
                                              }),
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900",
                                              children: c.code,
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900",
                                              children: c.material_no,
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900",
                                              children: c.name,
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-600",
                                              children: c.type,
                                            }),
                                            o.jsx("td", {
                                              className: `px-6 py-4 text-sm text-right ${
                                                b
                                                  ? "text-red-700 font-semibold"
                                                  : "text-gray-900"
                                              }`,
                                              children:
                                                c.currentStock.toFixed(2),
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900 text-right",
                                              children:
                                                c.avgDailyConsumption.toFixed(
                                                  2
                                                ),
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900 text-right",
                                              children:
                                                c.safetyQuantity.toFixed(2),
                                            }),
                                            o.jsx("td", {
                                              className:
                                                "px-6 py-4 text-sm text-gray-900 text-right",
                                              children:
                                                c.standardQuantity.toFixed(2),
                                            }),
                                          ],
                                        },
                                        `${c.code}-${w}`
                                      );
                                    }),
                            }),
                          ],
                        }),
                      }),
                ],
              }),
            k &&
              V &&
              o.jsx(fa, { x: k.x, y: k.y, onClose: L, onViewUnitDetails: A }),
            p &&
              V &&
              V.medGuid &&
              o.jsx(pa, {
                isOpen: p,
                onClose: () => {
                  y(!1), h(null);
                },
                medGuid: V.medGuid,
                medName: V.name,
                onFetchUnitDetails: Nr,
                onUpdateUnits: ma,
              }),
            o.jsx(tm, {
              isOpen: E,
              onClose: () => {
                I(!1), U(new Set());
              },
              items: P.size > 0 ? C : J,
              onFetchUnitDetails: Nr,
              destinationServerName: (n == null ? void 0 : n.name) || "",
            }),
          ],
        });
  },
  rm = ({ onLogout: e }) => {
    const [t, n] = N.useState("inventory"),
      r = sessionStorage.getItem("loggedName") || "",
      l = sessionStorage.getItem("loggedEmployer") || "",
      s = r && l ? `${r}-${l}` : "",
      a = () => {
        sessionStorage.removeItem("user_session"),
          sessionStorage.removeItem("loggedName"),
          sessionStorage.removeItem("loggedEmployer"),
          e && e();
      },
      u = () => {
        const i = Mp();
        i != null && i.domain && (window.location.href = "../frontpage");
      };
    return o.jsx("div", {
      className: "min-h-screen bg-white",
      children: o.jsxs("div", {
        className: "w-full p-4",
        children: [
          o.jsxs("div", {
            className: "mb-8 flex items-start justify-between",
            children: [
              o.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  o.jsx("button", {
                    onClick: u,
                    className:
                      "flex items-center justify-center w-12 h-12 hover:bg-slate-200 rounded-lg transition-colors",
                    children: o.jsx(_p, {
                      size: 24,
                      className: "text-slate-700",
                    }),
                  }),
                  o.jsxs("div", {
                    children: [
                      o.jsx("h1", {
                        className:
                          "text-2xl md:text-3xl font-semibold text-gray-800",
                        children: "即時庫存查詢系統",
                      }),
                      o.jsx("p", {
                        className: "text-slate-600",
                        children: s || "即時監控藥局與藥庫的庫存狀況",
                      }),
                    ],
                  }),
                ],
              }),
              o.jsxs("button", {
                onClick: a,
                className:
                  "flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors",
                children: [
                  o.jsx(Ep, { size: 18 }),
                  o.jsx("span", { children: "登出" }),
                ],
              }),
            ],
          }),
          o.jsx("div", {
            className: "mb-6",
            children: o.jsx("div", {
              className: "border-b border-slate-200",
              children: o.jsxs("nav", {
                className: "flex gap-8",
                children: [
                  o.jsx("button", {
                    onClick: () => n("inventory"),
                    className: `py-3 px-1 border-b-2 font-medium text-base transition-colors ${
                      t === "inventory"
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-slate-600 hover:text-slate-800 hover:border-slate-300"
                    }`,
                    children: "即時庫存",
                  }),
                  o.jsx("button", {
                    onClick: () => n("classification"),
                    className: `py-3 px-1 border-b-2 font-medium text-base transition-colors ${
                      t === "classification"
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-slate-600 hover:text-slate-800 hover:border-slate-300"
                    }`,
                    children: "分類編輯",
                  }),
                  o.jsx("button", {
                    onClick: () => n("replenishment"),
                    className: `py-3 px-1 border-b-2 font-medium text-base transition-colors ${
                      t === "replenishment"
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-slate-600 hover:text-slate-800 hover:border-slate-300"
                    }`,
                    children: "建議撥補",
                  }),
                  o.jsx("button", {
                    onClick: () => n("procurement"),
                    className: `py-3 px-1 border-b-2 font-medium text-base transition-colors ${
                      t === "procurement"
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-slate-600 hover:text-slate-800 hover:border-slate-300"
                    }`,
                    children: "建議採購",
                  }),
                ],
              }),
            }),
          }),
          o.jsxs("div", {
            className: "tab-content",
            children: [
              t === "inventory" && o.jsx(Wp, {}),
              t === "classification" && o.jsx(Xp, {}),
              t === "replenishment" && o.jsx(em, {}),
              t === "procurement" && o.jsx(nm, {}),
            ],
          }),
        ],
      }),
    });
  };
function lm() {
  const [e, t] = N.useState(!1),
    [n, r] = N.useState(!1),
    [l, s] = N.useState(!0);
  N.useEffect(() => {
    (async () => {
      try {
        await Ac(), t(!0);
        const f = Up();
        r(f),
          console.log("Authentication check:", {
            authenticated: f,
            userSession: sessionStorage.getItem("user_session")
              ? "exists"
              : "missing",
          });
      } catch (f) {
        console.error("Failed to load configuration:", f);
      } finally {
        s(!1);
      }
    })();
  }, []);
  const a = () => {
      r(!0);
    },
    u = () => {
      r(!1);
    };
  return !e || l
    ? o.jsx("div", {
        className: "min-h-screen flex items-center justify-center",
        children: o.jsx("div", {
          className: "text-gray-600",
          children: "Loading...",
        }),
      })
    : o.jsx(Hp, {
        children: o.jsx(Fp, {
          children: n ? o.jsx(rm, { onLogout: u }) : o.jsx(Qp, { onLogin: a }),
        }),
      });
}
Qc(document.getElementById("root")).render(
  o.jsx(N.StrictMode, { children: o.jsx(lm, {}) })
);
//# sourceMappingURL=index-D8DloAwo.js.map
