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
function gf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var jc = { exports: {} },
  Mo = {},
  Sc = { exports: {} },
  Pe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vs = Symbol.for("react.element"),
  xf = Symbol.for("react.portal"),
  yf = Symbol.for("react.fragment"),
  vf = Symbol.for("react.strict_mode"),
  wf = Symbol.for("react.profiler"),
  bf = Symbol.for("react.provider"),
  Nf = Symbol.for("react.context"),
  jf = Symbol.for("react.forward_ref"),
  Sf = Symbol.for("react.suspense"),
  Cf = Symbol.for("react.memo"),
  kf = Symbol.for("react.lazy"),
  ui = Symbol.iterator;
function Df(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ui && e[ui]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Cc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  kc = Object.assign,
  Dc = {};
function Mr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Dc),
    (this.updater = n || Cc);
}
Mr.prototype.isReactComponent = {};
Mr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Mr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function _c() {}
_c.prototype = Mr.prototype;
function ma(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Dc),
    (this.updater = n || Cc);
}
var ha = (ma.prototype = new _c());
ha.constructor = ma;
kc(ha, Mr.prototype);
ha.isPureReactComponent = !0;
var fi = Array.isArray,
  Mc = Object.prototype.hasOwnProperty,
  ga = { current: null },
  Ec = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ic(e, t, n) {
  var s,
    o = {},
    l = null,
    a = null;
  if (t != null)
    for (s in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Mc.call(t, s) && !Ec.hasOwnProperty(s) && (o[s] = t[s]);
  var i = arguments.length - 2;
  if (i === 1) o.children = n;
  else if (1 < i) {
    for (var c = Array(i), g = 0; g < i; g++) c[g] = arguments[g + 2];
    o.children = c;
  }
  if (e && e.defaultProps)
    for (s in ((i = e.defaultProps), i)) o[s] === void 0 && (o[s] = i[s]);
  return {
    $$typeof: vs,
    type: e,
    key: l,
    ref: a,
    props: o,
    _owner: ga.current,
  };
}
function _f(e, t) {
  return {
    $$typeof: vs,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function xa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === vs;
}
function Mf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var pi = /\/+/g;
function Xo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Mf("" + e.key)
    : t.toString(36);
}
function Vs(e, t, n, s, o) {
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
          case vs:
          case xf:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = s === "" ? "." + Xo(a, 0) : s),
      fi(o)
        ? ((n = ""),
          e != null && (n = e.replace(pi, "$&/") + "/"),
          Vs(o, t, n, "", function (g) {
            return g;
          }))
        : o != null &&
          (xa(o) &&
            (o = _f(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(pi, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (s = s === "" ? "." : s + ":"), fi(e)))
    for (var i = 0; i < e.length; i++) {
      l = e[i];
      var c = s + Xo(l, i);
      a += Vs(l, t, n, c, o);
    }
  else if (((c = Df(e)), typeof c == "function"))
    for (e = c.call(e), i = 0; !(l = e.next()).done; )
      (l = l.value), (c = s + Xo(l, i++)), (a += Vs(l, t, n, c, o));
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
function ks(e, t, n) {
  if (e == null) return e;
  var s = [],
    o = 0;
  return (
    Vs(e, s, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    s
  );
}
function Ef(e) {
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
var ft = { current: null },
  Ws = { transition: null },
  If = {
    ReactCurrentDispatcher: ft,
    ReactCurrentBatchConfig: Ws,
    ReactCurrentOwner: ga,
  };
function Pc() {
  throw Error("act(...) is not supported in production builds of React.");
}
Pe.Children = {
  map: ks,
  forEach: function (e, t, n) {
    ks(
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
      ks(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ks(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!xa(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Pe.Component = Mr;
Pe.Fragment = yf;
Pe.Profiler = wf;
Pe.PureComponent = ma;
Pe.StrictMode = vf;
Pe.Suspense = Sf;
Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = If;
Pe.act = Pc;
Pe.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var s = kc({}, e.props),
    o = e.key,
    l = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (a = ga.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var i = e.type.defaultProps;
    for (c in t)
      Mc.call(t, c) &&
        !Ec.hasOwnProperty(c) &&
        (s[c] = t[c] === void 0 && i !== void 0 ? i[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) s.children = n;
  else if (1 < c) {
    i = Array(c);
    for (var g = 0; g < c; g++) i[g] = arguments[g + 2];
    s.children = i;
  }
  return { $$typeof: vs, type: e.type, key: o, ref: l, props: s, _owner: a };
};
Pe.createContext = function (e) {
  return (
    (e = {
      $$typeof: Nf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: bf, _context: e }),
    (e.Consumer = e)
  );
};
Pe.createElement = Ic;
Pe.createFactory = function (e) {
  var t = Ic.bind(null, e);
  return (t.type = e), t;
};
Pe.createRef = function () {
  return { current: null };
};
Pe.forwardRef = function (e) {
  return { $$typeof: jf, render: e };
};
Pe.isValidElement = xa;
Pe.lazy = function (e) {
  return { $$typeof: kf, _payload: { _status: -1, _result: e }, _init: Ef };
};
Pe.memo = function (e, t) {
  return { $$typeof: Cf, type: e, compare: t === void 0 ? null : t };
};
Pe.startTransition = function (e) {
  var t = Ws.transition;
  Ws.transition = {};
  try {
    e();
  } finally {
    Ws.transition = t;
  }
};
Pe.unstable_act = Pc;
Pe.useCallback = function (e, t) {
  return ft.current.useCallback(e, t);
};
Pe.useContext = function (e) {
  return ft.current.useContext(e);
};
Pe.useDebugValue = function () {};
Pe.useDeferredValue = function (e) {
  return ft.current.useDeferredValue(e);
};
Pe.useEffect = function (e, t) {
  return ft.current.useEffect(e, t);
};
Pe.useId = function () {
  return ft.current.useId();
};
Pe.useImperativeHandle = function (e, t, n) {
  return ft.current.useImperativeHandle(e, t, n);
};
Pe.useInsertionEffect = function (e, t) {
  return ft.current.useInsertionEffect(e, t);
};
Pe.useLayoutEffect = function (e, t) {
  return ft.current.useLayoutEffect(e, t);
};
Pe.useMemo = function (e, t) {
  return ft.current.useMemo(e, t);
};
Pe.useReducer = function (e, t, n) {
  return ft.current.useReducer(e, t, n);
};
Pe.useRef = function (e) {
  return ft.current.useRef(e);
};
Pe.useState = function (e) {
  return ft.current.useState(e);
};
Pe.useSyncExternalStore = function (e, t, n) {
  return ft.current.useSyncExternalStore(e, t, n);
};
Pe.useTransition = function () {
  return ft.current.useTransition();
};
Pe.version = "18.3.1";
Sc.exports = Pe;
var p = Sc.exports;
const ro = gf(p);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pf = p,
  Tf = Symbol.for("react.element"),
  Rf = Symbol.for("react.fragment"),
  Af = Object.prototype.hasOwnProperty,
  $f = Pf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Of = { key: !0, ref: !0, __self: !0, __source: !0 };
function Tc(e, t, n) {
  var s,
    o = {},
    l = null,
    a = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (s in t) Af.call(t, s) && !Of.hasOwnProperty(s) && (o[s] = t[s]);
  if (e && e.defaultProps)
    for (s in ((t = e.defaultProps), t)) o[s] === void 0 && (o[s] = t[s]);
  return {
    $$typeof: Tf,
    type: e,
    key: l,
    ref: a,
    props: o,
    _owner: $f.current,
  };
}
Mo.Fragment = Rf;
Mo.jsx = Tc;
Mo.jsxs = Tc;
jc.exports = Mo;
var r = jc.exports,
  Rc = { exports: {} },
  _t = {},
  Ac = { exports: {} },
  $c = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, H) {
    var ie = j.length;
    j.push(H);
    e: for (; 0 < ie; ) {
      var K = (ie - 1) >>> 1,
        se = j[K];
      if (0 < o(se, H)) (j[K] = H), (j[ie] = se), (ie = K);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function s(j) {
    if (j.length === 0) return null;
    var H = j[0],
      ie = j.pop();
    if (ie !== H) {
      j[0] = ie;
      e: for (var K = 0, se = j.length, be = se >>> 1; K < be; ) {
        var ue = 2 * (K + 1) - 1,
          Ce = j[ue],
          de = ue + 1,
          Q = j[de];
        if (0 > o(Ce, ie))
          de < se && 0 > o(Q, Ce)
            ? ((j[K] = Q), (j[de] = ie), (K = de))
            : ((j[K] = Ce), (j[ue] = ie), (K = ue));
        else if (de < se && 0 > o(Q, ie)) (j[K] = Q), (j[de] = ie), (K = de);
        else break e;
      }
    }
    return H;
  }
  function o(j, H) {
    var ie = j.sortIndex - H.sortIndex;
    return ie !== 0 ? ie : j.id - H.id;
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
    g = [],
    m = 1,
    h = null,
    f = 3,
    S = !1,
    b = !1,
    M = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(j) {
    for (var H = n(g); H !== null; ) {
      if (H.callback === null) s(g);
      else if (H.startTime <= j)
        s(g), (H.sortIndex = H.expirationTime), t(c, H);
      else break;
      H = n(g);
    }
  }
  function _(j) {
    if (((M = !1), x(j), !b))
      if (n(c) !== null) (b = !0), y(A);
      else {
        var H = n(g);
        H !== null && N(_, H.startTime - j);
      }
  }
  function A(j, H) {
    (b = !1), M && ((M = !1), d(F), (F = -1)), (S = !0);
    var ie = f;
    try {
      for (
        x(H), h = n(c);
        h !== null && (!(h.expirationTime > H) || (j && !z()));

      ) {
        var K = h.callback;
        if (typeof K == "function") {
          (h.callback = null), (f = h.priorityLevel);
          var se = K(h.expirationTime <= H);
          (H = e.unstable_now()),
            typeof se == "function" ? (h.callback = se) : h === n(c) && s(c),
            x(H);
        } else s(c);
        h = n(c);
      }
      if (h !== null) var be = !0;
      else {
        var ue = n(g);
        ue !== null && N(_, ue.startTime - H), (be = !1);
      }
      return be;
    } finally {
      (h = null), (f = ie), (S = !1);
    }
  }
  var I = !1,
    R = null,
    F = -1,
    le = 5,
    P = -1;
  function z() {
    return !(e.unstable_now() - P < le);
  }
  function Z() {
    if (R !== null) {
      var j = e.unstable_now();
      P = j;
      var H = !0;
      try {
        H = R(!0, j);
      } finally {
        H ? E() : ((I = !1), (R = null));
      }
    } else I = !1;
  }
  var E;
  if (typeof u == "function")
    E = function () {
      u(Z);
    };
  else if (typeof MessageChannel < "u") {
    var w = new MessageChannel(),
      V = w.port2;
    (w.port1.onmessage = Z),
      (E = function () {
        V.postMessage(null);
      });
  } else
    E = function () {
      k(Z, 0);
    };
  function y(j) {
    (R = j), I || ((I = !0), E());
  }
  function N(j, H) {
    F = k(function () {
      j(e.unstable_now());
    }, H);
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
      b || S || ((b = !0), y(A));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (le = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (j) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var H = 3;
          break;
        default:
          H = f;
      }
      var ie = f;
      f = H;
      try {
        return j();
      } finally {
        f = ie;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, H) {
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
      var ie = f;
      f = j;
      try {
        return H();
      } finally {
        f = ie;
      }
    }),
    (e.unstable_scheduleCallback = function (j, H, ie) {
      var K = e.unstable_now();
      switch (
        (typeof ie == "object" && ie !== null
          ? ((ie = ie.delay),
            (ie = typeof ie == "number" && 0 < ie ? K + ie : K))
          : (ie = K),
        j)
      ) {
        case 1:
          var se = -1;
          break;
        case 2:
          se = 250;
          break;
        case 5:
          se = 1073741823;
          break;
        case 4:
          se = 1e4;
          break;
        default:
          se = 5e3;
      }
      return (
        (se = ie + se),
        (j = {
          id: m++,
          callback: H,
          priorityLevel: j,
          startTime: ie,
          expirationTime: se,
          sortIndex: -1,
        }),
        ie > K
          ? ((j.sortIndex = ie),
            t(g, j),
            n(c) === null &&
              j === n(g) &&
              (M ? (d(F), (F = -1)) : (M = !0), N(_, ie - K)))
          : ((j.sortIndex = se), t(c, j), b || S || ((b = !0), y(A))),
        j
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (j) {
      var H = f;
      return function () {
        var ie = f;
        f = H;
        try {
          return j.apply(this, arguments);
        } finally {
          f = ie;
        }
      };
    });
})($c);
Ac.exports = $c;
var Lf = Ac.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uf = p,
  Dt = Lf;
function oe(e) {
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
var Oc = new Set(),
  ns = {};
function qn(e, t) {
  br(e, t), br(e + "Capture", t);
}
function br(e, t) {
  for (ns[e] = t, e = 0; e < t.length; e++) Oc.add(t[e]);
}
var cn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  bl = Object.prototype.hasOwnProperty,
  Bf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  mi = {},
  hi = {};
function zf(e) {
  return bl.call(hi, e)
    ? !0
    : bl.call(mi, e)
    ? !1
    : Bf.test(e)
    ? (hi[e] = !0)
    : ((mi[e] = !0), !1);
}
function Gf(e, t, n, s) {
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
function Ff(e, t, n, s) {
  if (t === null || typeof t > "u" || Gf(e, t, n, s)) return !0;
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
function pt(e, t, n, s, o, l, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = s),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = a);
}
var ot = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ot[e] = new pt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ot[t] = new pt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ot[e] = new pt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ot[e] = new pt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ot[e] = new pt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ot[e] = new pt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ot[e] = new pt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ot[e] = new pt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ot[e] = new pt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ya = /[\-:]([a-z])/g;
function va(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ya, va);
    ot[t] = new pt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ya, va);
    ot[t] = new pt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ya, va);
  ot[t] = new pt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ot[e] = new pt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ot.xlinkHref = new pt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ot[e] = new pt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function wa(e, t, n, s) {
  var o = ot.hasOwnProperty(t) ? ot[t] : null;
  (o !== null
    ? o.type !== 0
    : s ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ff(t, n, o, s) && (n = null),
    s || o === null
      ? zf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var pn = Uf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ds = Symbol.for("react.element"),
  nr = Symbol.for("react.portal"),
  rr = Symbol.for("react.fragment"),
  ba = Symbol.for("react.strict_mode"),
  Nl = Symbol.for("react.profiler"),
  Lc = Symbol.for("react.provider"),
  Uc = Symbol.for("react.context"),
  Na = Symbol.for("react.forward_ref"),
  jl = Symbol.for("react.suspense"),
  Sl = Symbol.for("react.suspense_list"),
  ja = Symbol.for("react.memo"),
  gn = Symbol.for("react.lazy"),
  Bc = Symbol.for("react.offscreen"),
  gi = Symbol.iterator;
function Rr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (gi && e[gi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var We = Object.assign,
  Qo;
function Gr(e) {
  if (Qo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Qo = (t && t[1]) || "";
    }
  return (
    `
` +
    Qo +
    e
  );
}
var Ko = !1;
function Jo(e, t) {
  if (!e || Ko) return "";
  Ko = !0;
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
        } catch (g) {
          var s = g;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (g) {
          s = g;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (g) {
        s = g;
      }
      e();
    }
  } catch (g) {
    if (g && s && typeof g.stack == "string") {
      for (
        var o = g.stack.split(`
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
    (Ko = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Gr(e) : "";
}
function Hf(e) {
  switch (e.tag) {
    case 5:
      return Gr(e.type);
    case 16:
      return Gr("Lazy");
    case 13:
      return Gr("Suspense");
    case 19:
      return Gr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Jo(e.type, !1)), e;
    case 11:
      return (e = Jo(e.type.render, !1)), e;
    case 1:
      return (e = Jo(e.type, !0)), e;
    default:
      return "";
  }
}
function Cl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case rr:
      return "Fragment";
    case nr:
      return "Portal";
    case Nl:
      return "Profiler";
    case ba:
      return "StrictMode";
    case jl:
      return "Suspense";
    case Sl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Uc:
        return (e.displayName || "Context") + ".Consumer";
      case Lc:
        return (e._context.displayName || "Context") + ".Provider";
      case Na:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ja:
        return (
          (t = e.displayName || null), t !== null ? t : Cl(e.type) || "Memo"
        );
      case gn:
        (t = e._payload), (e = e._init);
        try {
          return Cl(e(t));
        } catch {}
    }
  return null;
}
function Vf(e) {
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
      return Cl(t);
    case 8:
      return t === ba ? "StrictMode" : "Mode";
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
function En(e) {
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
function zc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Wf(e) {
  var t = zc(e) ? "checked" : "value",
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
function _s(e) {
  e._valueTracker || (e._valueTracker = Wf(e));
}
function Gc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    s = "";
  return (
    e && (s = zc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = s),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function so(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function kl(e, t) {
  var n = t.checked;
  return We({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function xi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    s = t.checked != null ? t.checked : t.defaultChecked;
  (n = En(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: s,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Fc(e, t) {
  (t = t.checked), t != null && wa(e, "checked", t, !1);
}
function Dl(e, t) {
  Fc(e, t);
  var n = En(t.value),
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
    ? _l(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && _l(e, t.type, En(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function yi(e, t, n) {
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
function _l(e, t, n) {
  (t !== "number" || so(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Fr = Array.isArray;
function hr(e, t, n, s) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && s && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + En(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), s && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ml(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(oe(91));
  return We({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function vi(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(oe(92));
      if (Fr(n)) {
        if (1 < n.length) throw Error(oe(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: En(n) };
}
function Hc(e, t) {
  var n = En(t.value),
    s = En(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    s != null && (e.defaultValue = "" + s);
}
function wi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Vc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function El(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Vc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ms,
  Wc = (function (e) {
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
        Ms = Ms || document.createElement("div"),
          Ms.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ms.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function rs(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Wr = {
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
  qf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Wr).forEach(function (e) {
  qf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Wr[t] = Wr[e]);
  });
});
function qc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Wr.hasOwnProperty(e) && Wr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Yc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var s = n.indexOf("--") === 0,
        o = qc(n, t[n], s);
      n === "float" && (n = "cssFloat"), s ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Yf = We(
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
function Il(e, t) {
  if (t) {
    if (Yf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(oe(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(oe(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(oe(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(oe(62));
  }
}
function Pl(e, t) {
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
var Tl = null;
function Sa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Rl = null,
  gr = null,
  xr = null;
function bi(e) {
  if ((e = Ns(e))) {
    if (typeof Rl != "function") throw Error(oe(280));
    var t = e.stateNode;
    t && ((t = Ro(t)), Rl(e.stateNode, e.type, t));
  }
}
function Xc(e) {
  gr ? (xr ? xr.push(e) : (xr = [e])) : (gr = e);
}
function Qc() {
  if (gr) {
    var e = gr,
      t = xr;
    if (((xr = gr = null), bi(e), t)) for (e = 0; e < t.length; e++) bi(t[e]);
  }
}
function Kc(e, t) {
  return e(t);
}
function Jc() {}
var Zo = !1;
function Zc(e, t, n) {
  if (Zo) return e(t, n);
  Zo = !0;
  try {
    return Kc(e, t, n);
  } finally {
    (Zo = !1), (gr !== null || xr !== null) && (Jc(), Qc());
  }
}
function ss(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var s = Ro(n);
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
  if (n && typeof n != "function") throw Error(oe(231, t, typeof n));
  return n;
}
var Al = !1;
if (cn)
  try {
    var Ar = {};
    Object.defineProperty(Ar, "passive", {
      get: function () {
        Al = !0;
      },
    }),
      window.addEventListener("test", Ar, Ar),
      window.removeEventListener("test", Ar, Ar);
  } catch {
    Al = !1;
  }
function Xf(e, t, n, s, o, l, a, i, c) {
  var g = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, g);
  } catch (m) {
    this.onError(m);
  }
}
var qr = !1,
  oo = null,
  lo = !1,
  $l = null,
  Qf = {
    onError: function (e) {
      (qr = !0), (oo = e);
    },
  };
function Kf(e, t, n, s, o, l, a, i, c) {
  (qr = !1), (oo = null), Xf.apply(Qf, arguments);
}
function Jf(e, t, n, s, o, l, a, i, c) {
  if ((Kf.apply(this, arguments), qr)) {
    if (qr) {
      var g = oo;
      (qr = !1), (oo = null);
    } else throw Error(oe(198));
    lo || ((lo = !0), ($l = g));
  }
}
function Yn(e) {
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
function ed(e) {
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
function Ni(e) {
  if (Yn(e) !== e) throw Error(oe(188));
}
function Zf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Yn(e)), t === null)) throw Error(oe(188));
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
        if (l === n) return Ni(o), e;
        if (l === s) return Ni(o), t;
        l = l.sibling;
      }
      throw Error(oe(188));
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
        if (!a) throw Error(oe(189));
      }
    }
    if (n.alternate !== s) throw Error(oe(190));
  }
  if (n.tag !== 3) throw Error(oe(188));
  return n.stateNode.current === n ? e : t;
}
function td(e) {
  return (e = Zf(e)), e !== null ? nd(e) : null;
}
function nd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = nd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var rd = Dt.unstable_scheduleCallback,
  ji = Dt.unstable_cancelCallback,
  ep = Dt.unstable_shouldYield,
  tp = Dt.unstable_requestPaint,
  Qe = Dt.unstable_now,
  np = Dt.unstable_getCurrentPriorityLevel,
  Ca = Dt.unstable_ImmediatePriority,
  sd = Dt.unstable_UserBlockingPriority,
  ao = Dt.unstable_NormalPriority,
  rp = Dt.unstable_LowPriority,
  od = Dt.unstable_IdlePriority,
  Eo = null,
  Jt = null;
function sp(e) {
  if (Jt && typeof Jt.onCommitFiberRoot == "function")
    try {
      Jt.onCommitFiberRoot(Eo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ht = Math.clz32 ? Math.clz32 : ap,
  op = Math.log,
  lp = Math.LN2;
function ap(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((op(e) / lp) | 0)) | 0;
}
var Es = 64,
  Is = 4194304;
function Hr(e) {
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
function io(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var s = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var i = a & ~o;
    i !== 0 ? (s = Hr(i)) : ((l &= a), l !== 0 && (s = Hr(l)));
  } else (a = n & ~o), a !== 0 ? (s = Hr(a)) : l !== 0 && (s = Hr(l));
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
      (n = 31 - Ht(t)), (o = 1 << n), (s |= e[n]), (t &= ~o);
  return s;
}
function ip(e, t) {
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
function cp(e, t) {
  for (
    var n = e.suspendedLanes,
      s = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var a = 31 - Ht(l),
      i = 1 << a,
      c = o[a];
    c === -1
      ? (!(i & n) || i & s) && (o[a] = ip(i, t))
      : c <= t && (e.expiredLanes |= i),
      (l &= ~i);
  }
}
function Ol(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ld() {
  var e = Es;
  return (Es <<= 1), !(Es & 4194240) && (Es = 64), e;
}
function el(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ws(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ht(t)),
    (e[t] = n);
}
function dp(e, t) {
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
    var o = 31 - Ht(n),
      l = 1 << o;
    (t[o] = 0), (s[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function ka(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var s = 31 - Ht(n),
      o = 1 << s;
    (o & t) | (e[s] & t) && (e[s] |= t), (n &= ~o);
  }
}
var Oe = 0;
function ad(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var id,
  Da,
  cd,
  dd,
  ud,
  Ll = !1,
  Ps = [],
  Nn = null,
  jn = null,
  Sn = null,
  os = new Map(),
  ls = new Map(),
  yn = [],
  up =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Si(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Nn = null;
      break;
    case "dragenter":
    case "dragleave":
      jn = null;
      break;
    case "mouseover":
    case "mouseout":
      Sn = null;
      break;
    case "pointerover":
    case "pointerout":
      os.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ls.delete(t.pointerId);
  }
}
function $r(e, t, n, s, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: s,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = Ns(t)), t !== null && Da(t)),
      e)
    : ((e.eventSystemFlags |= s),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function fp(e, t, n, s, o) {
  switch (t) {
    case "focusin":
      return (Nn = $r(Nn, e, t, n, s, o)), !0;
    case "dragenter":
      return (jn = $r(jn, e, t, n, s, o)), !0;
    case "mouseover":
      return (Sn = $r(Sn, e, t, n, s, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return os.set(l, $r(os.get(l) || null, e, t, n, s, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), ls.set(l, $r(ls.get(l) || null, e, t, n, s, o)), !0
      );
  }
  return !1;
}
function fd(e) {
  var t = On(e.target);
  if (t !== null) {
    var n = Yn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ed(n)), t !== null)) {
          (e.blockedOn = t),
            ud(e.priority, function () {
              cd(n);
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
function qs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ul(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var s = new n.constructor(n.type, n);
      (Tl = s), n.target.dispatchEvent(s), (Tl = null);
    } else return (t = Ns(n)), t !== null && Da(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ci(e, t, n) {
  qs(e) && n.delete(t);
}
function pp() {
  (Ll = !1),
    Nn !== null && qs(Nn) && (Nn = null),
    jn !== null && qs(jn) && (jn = null),
    Sn !== null && qs(Sn) && (Sn = null),
    os.forEach(Ci),
    ls.forEach(Ci);
}
function Or(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ll ||
      ((Ll = !0),
      Dt.unstable_scheduleCallback(Dt.unstable_NormalPriority, pp)));
}
function as(e) {
  function t(o) {
    return Or(o, e);
  }
  if (0 < Ps.length) {
    Or(Ps[0], e);
    for (var n = 1; n < Ps.length; n++) {
      var s = Ps[n];
      s.blockedOn === e && (s.blockedOn = null);
    }
  }
  for (
    Nn !== null && Or(Nn, e),
      jn !== null && Or(jn, e),
      Sn !== null && Or(Sn, e),
      os.forEach(t),
      ls.forEach(t),
      n = 0;
    n < yn.length;
    n++
  )
    (s = yn[n]), s.blockedOn === e && (s.blockedOn = null);
  for (; 0 < yn.length && ((n = yn[0]), n.blockedOn === null); )
    fd(n), n.blockedOn === null && yn.shift();
}
var yr = pn.ReactCurrentBatchConfig,
  co = !0;
function mp(e, t, n, s) {
  var o = Oe,
    l = yr.transition;
  yr.transition = null;
  try {
    (Oe = 1), _a(e, t, n, s);
  } finally {
    (Oe = o), (yr.transition = l);
  }
}
function hp(e, t, n, s) {
  var o = Oe,
    l = yr.transition;
  yr.transition = null;
  try {
    (Oe = 4), _a(e, t, n, s);
  } finally {
    (Oe = o), (yr.transition = l);
  }
}
function _a(e, t, n, s) {
  if (co) {
    var o = Ul(e, t, n, s);
    if (o === null) dl(e, t, s, uo, n), Si(e, s);
    else if (fp(o, e, t, n, s)) s.stopPropagation();
    else if ((Si(e, s), t & 4 && -1 < up.indexOf(e))) {
      for (; o !== null; ) {
        var l = Ns(o);
        if (
          (l !== null && id(l),
          (l = Ul(e, t, n, s)),
          l === null && dl(e, t, s, uo, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && s.stopPropagation();
    } else dl(e, t, s, null, n);
  }
}
var uo = null;
function Ul(e, t, n, s) {
  if (((uo = null), (e = Sa(s)), (e = On(e)), e !== null))
    if (((t = Yn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ed(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (uo = e), null;
}
function pd(e) {
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
      switch (np()) {
        case Ca:
          return 1;
        case sd:
          return 4;
        case ao:
        case rp:
          return 16;
        case od:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var wn = null,
  Ma = null,
  Ys = null;
function md() {
  if (Ys) return Ys;
  var e,
    t = Ma,
    n = t.length,
    s,
    o = "value" in wn ? wn.value : wn.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (s = 1; s <= a && t[n - s] === o[l - s]; s++);
  return (Ys = o.slice(e, 1 < s ? 1 - s : void 0));
}
function Xs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ts() {
  return !0;
}
function ki() {
  return !1;
}
function Mt(e) {
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
        ? Ts
        : ki),
      (this.isPropagationStopped = ki),
      this
    );
  }
  return (
    We(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ts));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ts));
      },
      persist: function () {},
      isPersistent: Ts,
    }),
    t
  );
}
var Er = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ea = Mt(Er),
  bs = We({}, Er, { view: 0, detail: 0 }),
  gp = Mt(bs),
  tl,
  nl,
  Lr,
  Io = We({}, bs, {
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
    getModifierState: Ia,
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
        : (e !== Lr &&
            (Lr && e.type === "mousemove"
              ? ((tl = e.screenX - Lr.screenX), (nl = e.screenY - Lr.screenY))
              : (nl = tl = 0),
            (Lr = e)),
          tl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : nl;
    },
  }),
  Di = Mt(Io),
  xp = We({}, Io, { dataTransfer: 0 }),
  yp = Mt(xp),
  vp = We({}, bs, { relatedTarget: 0 }),
  rl = Mt(vp),
  wp = We({}, Er, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bp = Mt(wp),
  Np = We({}, Er, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  jp = Mt(Np),
  Sp = We({}, Er, { data: 0 }),
  _i = Mt(Sp),
  Cp = {
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
  kp = {
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
  Dp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function _p(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Dp[e]) ? !!t[e] : !1;
}
function Ia() {
  return _p;
}
var Mp = We({}, bs, {
    key: function (e) {
      if (e.key) {
        var t = Cp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Xs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? kp[e.keyCode] || "Unidentified"
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
    getModifierState: Ia,
    charCode: function (e) {
      return e.type === "keypress" ? Xs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Xs(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Ep = Mt(Mp),
  Ip = We({}, Io, {
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
  Mi = Mt(Ip),
  Pp = We({}, bs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ia,
  }),
  Tp = Mt(Pp),
  Rp = We({}, Er, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ap = Mt(Rp),
  $p = We({}, Io, {
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
  Op = Mt($p),
  Lp = [9, 13, 27, 32],
  Pa = cn && "CompositionEvent" in window,
  Yr = null;
cn && "documentMode" in document && (Yr = document.documentMode);
var Up = cn && "TextEvent" in window && !Yr,
  hd = cn && (!Pa || (Yr && 8 < Yr && 11 >= Yr)),
  Ei = " ",
  Ii = !1;
function gd(e, t) {
  switch (e) {
    case "keyup":
      return Lp.indexOf(t.keyCode) !== -1;
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
function xd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var sr = !1;
function Bp(e, t) {
  switch (e) {
    case "compositionend":
      return xd(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ii = !0), Ei);
    case "textInput":
      return (e = t.data), e === Ei && Ii ? null : e;
    default:
      return null;
  }
}
function zp(e, t) {
  if (sr)
    return e === "compositionend" || (!Pa && gd(e, t))
      ? ((e = md()), (Ys = Ma = wn = null), (sr = !1), e)
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
      return hd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Gp = {
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
function Pi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Gp[e.type] : t === "textarea";
}
function yd(e, t, n, s) {
  Xc(s),
    (t = fo(t, "onChange")),
    0 < t.length &&
      ((n = new Ea("onChange", "change", null, n, s)),
      e.push({ event: n, listeners: t }));
}
var Xr = null,
  is = null;
function Fp(e) {
  Md(e, 0);
}
function Po(e) {
  var t = ar(e);
  if (Gc(t)) return e;
}
function Hp(e, t) {
  if (e === "change") return t;
}
var vd = !1;
if (cn) {
  var sl;
  if (cn) {
    var ol = "oninput" in document;
    if (!ol) {
      var Ti = document.createElement("div");
      Ti.setAttribute("oninput", "return;"),
        (ol = typeof Ti.oninput == "function");
    }
    sl = ol;
  } else sl = !1;
  vd = sl && (!document.documentMode || 9 < document.documentMode);
}
function Ri() {
  Xr && (Xr.detachEvent("onpropertychange", wd), (is = Xr = null));
}
function wd(e) {
  if (e.propertyName === "value" && Po(is)) {
    var t = [];
    yd(t, is, e, Sa(e)), Zc(Fp, t);
  }
}
function Vp(e, t, n) {
  e === "focusin"
    ? (Ri(), (Xr = t), (is = n), Xr.attachEvent("onpropertychange", wd))
    : e === "focusout" && Ri();
}
function Wp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Po(is);
}
function qp(e, t) {
  if (e === "click") return Po(t);
}
function Yp(e, t) {
  if (e === "input" || e === "change") return Po(t);
}
function Xp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Wt = typeof Object.is == "function" ? Object.is : Xp;
function cs(e, t) {
  if (Wt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    s = Object.keys(t);
  if (n.length !== s.length) return !1;
  for (s = 0; s < n.length; s++) {
    var o = n[s];
    if (!bl.call(t, o) || !Wt(e[o], t[o])) return !1;
  }
  return !0;
}
function Ai(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function $i(e, t) {
  var n = Ai(e);
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
    n = Ai(n);
  }
}
function bd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? bd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Nd() {
  for (var e = window, t = so(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = so(e.document);
  }
  return t;
}
function Ta(e) {
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
function Qp(e) {
  var t = Nd(),
    n = e.focusedElem,
    s = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    bd(n.ownerDocument.documentElement, n)
  ) {
    if (s !== null && Ta(n)) {
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
          (o = $i(n, l));
        var a = $i(n, s);
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
var Kp = cn && "documentMode" in document && 11 >= document.documentMode,
  or = null,
  Bl = null,
  Qr = null,
  zl = !1;
function Oi(e, t, n) {
  var s = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  zl ||
    or == null ||
    or !== so(s) ||
    ((s = or),
    "selectionStart" in s && Ta(s)
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
    (Qr && cs(Qr, s)) ||
      ((Qr = s),
      (s = fo(Bl, "onSelect")),
      0 < s.length &&
        ((t = new Ea("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: s }),
        (t.target = or))));
}
function Rs(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var lr = {
    animationend: Rs("Animation", "AnimationEnd"),
    animationiteration: Rs("Animation", "AnimationIteration"),
    animationstart: Rs("Animation", "AnimationStart"),
    transitionend: Rs("Transition", "TransitionEnd"),
  },
  ll = {},
  jd = {};
cn &&
  ((jd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete lr.animationend.animation,
    delete lr.animationiteration.animation,
    delete lr.animationstart.animation),
  "TransitionEvent" in window || delete lr.transitionend.transition);
function To(e) {
  if (ll[e]) return ll[e];
  if (!lr[e]) return e;
  var t = lr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in jd) return (ll[e] = t[n]);
  return e;
}
var Sd = To("animationend"),
  Cd = To("animationiteration"),
  kd = To("animationstart"),
  Dd = To("transitionend"),
  _d = new Map(),
  Li =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Pn(e, t) {
  _d.set(e, t), qn(t, [e]);
}
for (var al = 0; al < Li.length; al++) {
  var il = Li[al],
    Jp = il.toLowerCase(),
    Zp = il[0].toUpperCase() + il.slice(1);
  Pn(Jp, "on" + Zp);
}
Pn(Sd, "onAnimationEnd");
Pn(Cd, "onAnimationIteration");
Pn(kd, "onAnimationStart");
Pn("dblclick", "onDoubleClick");
Pn("focusin", "onFocus");
Pn("focusout", "onBlur");
Pn(Dd, "onTransitionEnd");
br("onMouseEnter", ["mouseout", "mouseover"]);
br("onMouseLeave", ["mouseout", "mouseover"]);
br("onPointerEnter", ["pointerout", "pointerover"]);
br("onPointerLeave", ["pointerout", "pointerover"]);
qn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
qn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
qn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
qn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
qn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Vr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  em = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vr));
function Ui(e, t, n) {
  var s = e.type || "unknown-event";
  (e.currentTarget = n), Jf(s, t, void 0, e), (e.currentTarget = null);
}
function Md(e, t) {
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
            g = i.currentTarget;
          if (((i = i.listener), c !== l && o.isPropagationStopped())) break e;
          Ui(o, i, g), (l = c);
        }
      else
        for (a = 0; a < s.length; a++) {
          if (
            ((i = s[a]),
            (c = i.instance),
            (g = i.currentTarget),
            (i = i.listener),
            c !== l && o.isPropagationStopped())
          )
            break e;
          Ui(o, i, g), (l = c);
        }
    }
  }
  if (lo) throw ((e = $l), (lo = !1), ($l = null), e);
}
function Ue(e, t) {
  var n = t[Wl];
  n === void 0 && (n = t[Wl] = new Set());
  var s = e + "__bubble";
  n.has(s) || (Ed(t, e, 2, !1), n.add(s));
}
function cl(e, t, n) {
  var s = 0;
  t && (s |= 4), Ed(n, e, s, t);
}
var As = "_reactListening" + Math.random().toString(36).slice(2);
function ds(e) {
  if (!e[As]) {
    (e[As] = !0),
      Oc.forEach(function (n) {
        n !== "selectionchange" && (em.has(n) || cl(n, !1, e), cl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[As] || ((t[As] = !0), cl("selectionchange", !1, t));
  }
}
function Ed(e, t, n, s) {
  switch (pd(t)) {
    case 1:
      var o = mp;
      break;
    case 4:
      o = hp;
      break;
    default:
      o = _a;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Al ||
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
function dl(e, t, n, s, o) {
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
          if (((a = On(i)), a === null)) return;
          if (((c = a.tag), c === 5 || c === 6)) {
            s = l = a;
            continue e;
          }
          i = i.parentNode;
        }
      }
      s = s.return;
    }
  Zc(function () {
    var g = l,
      m = Sa(n),
      h = [];
    e: {
      var f = _d.get(e);
      if (f !== void 0) {
        var S = Ea,
          b = e;
        switch (e) {
          case "keypress":
            if (Xs(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = Ep;
            break;
          case "focusin":
            (b = "focus"), (S = rl);
            break;
          case "focusout":
            (b = "blur"), (S = rl);
            break;
          case "beforeblur":
          case "afterblur":
            S = rl;
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
            S = Di;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = yp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = Tp;
            break;
          case Sd:
          case Cd:
          case kd:
            S = bp;
            break;
          case Dd:
            S = Ap;
            break;
          case "scroll":
            S = gp;
            break;
          case "wheel":
            S = Op;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = jp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = Mi;
        }
        var M = (t & 4) !== 0,
          k = !M && e === "scroll",
          d = M ? (f !== null ? f + "Capture" : null) : f;
        M = [];
        for (var u = g, x; u !== null; ) {
          x = u;
          var _ = x.stateNode;
          if (
            (x.tag === 5 &&
              _ !== null &&
              ((x = _),
              d !== null && ((_ = ss(u, d)), _ != null && M.push(us(u, _, x)))),
            k)
          )
            break;
          u = u.return;
        }
        0 < M.length &&
          ((f = new S(f, b, null, n, m)), h.push({ event: f, listeners: M }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Tl &&
            (b = n.relatedTarget || n.fromElement) &&
            (On(b) || b[dn]))
        )
          break e;
        if (
          (S || f) &&
          ((f =
            m.window === m
              ? m
              : (f = m.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          S
            ? ((b = n.relatedTarget || n.toElement),
              (S = g),
              (b = b ? On(b) : null),
              b !== null &&
                ((k = Yn(b)), b !== k || (b.tag !== 5 && b.tag !== 6)) &&
                (b = null))
            : ((S = null), (b = g)),
          S !== b)
        ) {
          if (
            ((M = Di),
            (_ = "onMouseLeave"),
            (d = "onMouseEnter"),
            (u = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((M = Mi),
              (_ = "onPointerLeave"),
              (d = "onPointerEnter"),
              (u = "pointer")),
            (k = S == null ? f : ar(S)),
            (x = b == null ? f : ar(b)),
            (f = new M(_, u + "leave", S, n, m)),
            (f.target = k),
            (f.relatedTarget = x),
            (_ = null),
            On(m) === g &&
              ((M = new M(d, u + "enter", b, n, m)),
              (M.target = x),
              (M.relatedTarget = k),
              (_ = M)),
            (k = _),
            S && b)
          )
            t: {
              for (M = S, d = b, u = 0, x = M; x; x = tr(x)) u++;
              for (x = 0, _ = d; _; _ = tr(_)) x++;
              for (; 0 < u - x; ) (M = tr(M)), u--;
              for (; 0 < x - u; ) (d = tr(d)), x--;
              for (; u--; ) {
                if (M === d || (d !== null && M === d.alternate)) break t;
                (M = tr(M)), (d = tr(d));
              }
              M = null;
            }
          else M = null;
          S !== null && Bi(h, f, S, M, !1),
            b !== null && k !== null && Bi(h, k, b, M, !0);
        }
      }
      e: {
        if (
          ((f = g ? ar(g) : window),
          (S = f.nodeName && f.nodeName.toLowerCase()),
          S === "select" || (S === "input" && f.type === "file"))
        )
          var A = Hp;
        else if (Pi(f))
          if (vd) A = Yp;
          else {
            A = Wp;
            var I = Vp;
          }
        else
          (S = f.nodeName) &&
            S.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (A = qp);
        if (A && (A = A(e, g))) {
          yd(h, A, n, m);
          break e;
        }
        I && I(e, f, g),
          e === "focusout" &&
            (I = f._wrapperState) &&
            I.controlled &&
            f.type === "number" &&
            _l(f, "number", f.value);
      }
      switch (((I = g ? ar(g) : window), e)) {
        case "focusin":
          (Pi(I) || I.contentEditable === "true") &&
            ((or = I), (Bl = g), (Qr = null));
          break;
        case "focusout":
          Qr = Bl = or = null;
          break;
        case "mousedown":
          zl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (zl = !1), Oi(h, n, m);
          break;
        case "selectionchange":
          if (Kp) break;
        case "keydown":
        case "keyup":
          Oi(h, n, m);
      }
      var R;
      if (Pa)
        e: {
          switch (e) {
            case "compositionstart":
              var F = "onCompositionStart";
              break e;
            case "compositionend":
              F = "onCompositionEnd";
              break e;
            case "compositionupdate":
              F = "onCompositionUpdate";
              break e;
          }
          F = void 0;
        }
      else
        sr
          ? gd(e, n) && (F = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (F = "onCompositionStart");
      F &&
        (hd &&
          n.locale !== "ko" &&
          (sr || F !== "onCompositionStart"
            ? F === "onCompositionEnd" && sr && (R = md())
            : ((wn = m),
              (Ma = "value" in wn ? wn.value : wn.textContent),
              (sr = !0))),
        (I = fo(g, F)),
        0 < I.length &&
          ((F = new _i(F, e, null, n, m)),
          h.push({ event: F, listeners: I }),
          R ? (F.data = R) : ((R = xd(n)), R !== null && (F.data = R)))),
        (R = Up ? Bp(e, n) : zp(e, n)) &&
          ((g = fo(g, "onBeforeInput")),
          0 < g.length &&
            ((m = new _i("onBeforeInput", "beforeinput", null, n, m)),
            h.push({ event: m, listeners: g }),
            (m.data = R)));
    }
    Md(h, t);
  });
}
function us(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function fo(e, t) {
  for (var n = t + "Capture", s = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = ss(e, n)),
      l != null && s.unshift(us(e, l, o)),
      (l = ss(e, t)),
      l != null && s.push(us(e, l, o))),
      (e = e.return);
  }
  return s;
}
function tr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Bi(e, t, n, s, o) {
  for (var l = t._reactName, a = []; n !== null && n !== s; ) {
    var i = n,
      c = i.alternate,
      g = i.stateNode;
    if (c !== null && c === s) break;
    i.tag === 5 &&
      g !== null &&
      ((i = g),
      o
        ? ((c = ss(n, l)), c != null && a.unshift(us(n, c, i)))
        : o || ((c = ss(n, l)), c != null && a.push(us(n, c, i)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var tm = /\r\n?/g,
  nm = /\u0000|\uFFFD/g;
function zi(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      tm,
      `
`
    )
    .replace(nm, "");
}
function $s(e, t, n) {
  if (((t = zi(t)), zi(e) !== t && n)) throw Error(oe(425));
}
function po() {}
var Gl = null,
  Fl = null;
function Hl(e, t) {
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
var Vl = typeof setTimeout == "function" ? setTimeout : void 0,
  rm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Gi = typeof Promise == "function" ? Promise : void 0,
  sm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Gi < "u"
      ? function (e) {
          return Gi.resolve(null).then(e).catch(om);
        }
      : Vl;
function om(e) {
  setTimeout(function () {
    throw e;
  });
}
function ul(e, t) {
  var n = t,
    s = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (s === 0) {
          e.removeChild(o), as(t);
          return;
        }
        s--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || s++;
    n = o;
  } while (n);
  as(t);
}
function Cn(e) {
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
function Fi(e) {
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
var Ir = Math.random().toString(36).slice(2),
  Kt = "__reactFiber$" + Ir,
  fs = "__reactProps$" + Ir,
  dn = "__reactContainer$" + Ir,
  Wl = "__reactEvents$" + Ir,
  lm = "__reactListeners$" + Ir,
  am = "__reactHandles$" + Ir;
function On(e) {
  var t = e[Kt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[dn] || n[Kt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Fi(e); e !== null; ) {
          if ((n = e[Kt])) return n;
          e = Fi(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ns(e) {
  return (
    (e = e[Kt] || e[dn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ar(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(oe(33));
}
function Ro(e) {
  return e[fs] || null;
}
var ql = [],
  ir = -1;
function Tn(e) {
  return { current: e };
}
function Be(e) {
  0 > ir || ((e.current = ql[ir]), (ql[ir] = null), ir--);
}
function Le(e, t) {
  ir++, (ql[ir] = e.current), (e.current = t);
}
var In = {},
  ct = Tn(In),
  wt = Tn(!1),
  Gn = In;
function Nr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return In;
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
function bt(e) {
  return (e = e.childContextTypes), e != null;
}
function mo() {
  Be(wt), Be(ct);
}
function Hi(e, t, n) {
  if (ct.current !== In) throw Error(oe(168));
  Le(ct, t), Le(wt, n);
}
function Id(e, t, n) {
  var s = e.stateNode;
  if (((t = t.childContextTypes), typeof s.getChildContext != "function"))
    return n;
  s = s.getChildContext();
  for (var o in s) if (!(o in t)) throw Error(oe(108, Vf(e) || "Unknown", o));
  return We({}, n, s);
}
function ho(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || In),
    (Gn = ct.current),
    Le(ct, e),
    Le(wt, wt.current),
    !0
  );
}
function Vi(e, t, n) {
  var s = e.stateNode;
  if (!s) throw Error(oe(169));
  n
    ? ((e = Id(e, t, Gn)),
      (s.__reactInternalMemoizedMergedChildContext = e),
      Be(wt),
      Be(ct),
      Le(ct, e))
    : Be(wt),
    Le(wt, n);
}
var rn = null,
  Ao = !1,
  fl = !1;
function Pd(e) {
  rn === null ? (rn = [e]) : rn.push(e);
}
function im(e) {
  (Ao = !0), Pd(e);
}
function Rn() {
  if (!fl && rn !== null) {
    fl = !0;
    var e = 0,
      t = Oe;
    try {
      var n = rn;
      for (Oe = 1; e < n.length; e++) {
        var s = n[e];
        do s = s(!0);
        while (s !== null);
      }
      (rn = null), (Ao = !1);
    } catch (o) {
      throw (rn !== null && (rn = rn.slice(e + 1)), rd(Ca, Rn), o);
    } finally {
      (Oe = t), (fl = !1);
    }
  }
  return null;
}
var cr = [],
  dr = 0,
  go = null,
  xo = 0,
  It = [],
  Pt = 0,
  Fn = null,
  on = 1,
  ln = "";
function An(e, t) {
  (cr[dr++] = xo), (cr[dr++] = go), (go = e), (xo = t);
}
function Td(e, t, n) {
  (It[Pt++] = on), (It[Pt++] = ln), (It[Pt++] = Fn), (Fn = e);
  var s = on;
  e = ln;
  var o = 32 - Ht(s) - 1;
  (s &= ~(1 << o)), (n += 1);
  var l = 32 - Ht(t) + o;
  if (30 < l) {
    var a = o - (o % 5);
    (l = (s & ((1 << a) - 1)).toString(32)),
      (s >>= a),
      (o -= a),
      (on = (1 << (32 - Ht(t) + o)) | (n << o) | s),
      (ln = l + e);
  } else (on = (1 << l) | (n << o) | s), (ln = e);
}
function Ra(e) {
  e.return !== null && (An(e, 1), Td(e, 1, 0));
}
function Aa(e) {
  for (; e === go; )
    (go = cr[--dr]), (cr[dr] = null), (xo = cr[--dr]), (cr[dr] = null);
  for (; e === Fn; )
    (Fn = It[--Pt]),
      (It[Pt] = null),
      (ln = It[--Pt]),
      (It[Pt] = null),
      (on = It[--Pt]),
      (It[Pt] = null);
}
var kt = null,
  Ct = null,
  ze = !1,
  Ft = null;
function Rd(e, t) {
  var n = Tt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Wi(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (kt = e), (Ct = Cn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (kt = e), (Ct = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Fn !== null ? { id: on, overflow: ln } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Tt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (kt = e),
            (Ct = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Yl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Xl(e) {
  if (ze) {
    var t = Ct;
    if (t) {
      var n = t;
      if (!Wi(e, t)) {
        if (Yl(e)) throw Error(oe(418));
        t = Cn(n.nextSibling);
        var s = kt;
        t && Wi(e, t)
          ? Rd(s, n)
          : ((e.flags = (e.flags & -4097) | 2), (ze = !1), (kt = e));
      }
    } else {
      if (Yl(e)) throw Error(oe(418));
      (e.flags = (e.flags & -4097) | 2), (ze = !1), (kt = e);
    }
  }
}
function qi(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  kt = e;
}
function Os(e) {
  if (e !== kt) return !1;
  if (!ze) return qi(e), (ze = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Hl(e.type, e.memoizedProps))),
    t && (t = Ct))
  ) {
    if (Yl(e)) throw (Ad(), Error(oe(418)));
    for (; t; ) Rd(e, t), (t = Cn(t.nextSibling));
  }
  if ((qi(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(oe(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ct = Cn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ct = null;
    }
  } else Ct = kt ? Cn(e.stateNode.nextSibling) : null;
  return !0;
}
function Ad() {
  for (var e = Ct; e; ) e = Cn(e.nextSibling);
}
function jr() {
  (Ct = kt = null), (ze = !1);
}
function $a(e) {
  Ft === null ? (Ft = [e]) : Ft.push(e);
}
var cm = pn.ReactCurrentBatchConfig;
function Ur(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(oe(309));
        var s = n.stateNode;
      }
      if (!s) throw Error(oe(147, e));
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
    if (typeof e != "string") throw Error(oe(284));
    if (!n._owner) throw Error(oe(290, e));
  }
  return e;
}
function Ls(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      oe(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Yi(e) {
  var t = e._init;
  return t(e._payload);
}
function $d(e) {
  function t(d, u) {
    if (e) {
      var x = d.deletions;
      x === null ? ((d.deletions = [u]), (d.flags |= 16)) : x.push(u);
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
    return (d = Mn(d, u)), (d.index = 0), (d.sibling = null), d;
  }
  function l(d, u, x) {
    return (
      (d.index = x),
      e
        ? ((x = d.alternate),
          x !== null
            ? ((x = x.index), x < u ? ((d.flags |= 2), u) : x)
            : ((d.flags |= 2), u))
        : ((d.flags |= 1048576), u)
    );
  }
  function a(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function i(d, u, x, _) {
    return u === null || u.tag !== 6
      ? ((u = vl(x, d.mode, _)), (u.return = d), u)
      : ((u = o(u, x)), (u.return = d), u);
  }
  function c(d, u, x, _) {
    var A = x.type;
    return A === rr
      ? m(d, u, x.props.children, _, x.key)
      : u !== null &&
        (u.elementType === A ||
          (typeof A == "object" &&
            A !== null &&
            A.$$typeof === gn &&
            Yi(A) === u.type))
      ? ((_ = o(u, x.props)), (_.ref = Ur(d, u, x)), (_.return = d), _)
      : ((_ = no(x.type, x.key, x.props, null, d.mode, _)),
        (_.ref = Ur(d, u, x)),
        (_.return = d),
        _);
  }
  function g(d, u, x, _) {
    return u === null ||
      u.tag !== 4 ||
      u.stateNode.containerInfo !== x.containerInfo ||
      u.stateNode.implementation !== x.implementation
      ? ((u = wl(x, d.mode, _)), (u.return = d), u)
      : ((u = o(u, x.children || [])), (u.return = d), u);
  }
  function m(d, u, x, _, A) {
    return u === null || u.tag !== 7
      ? ((u = zn(x, d.mode, _, A)), (u.return = d), u)
      : ((u = o(u, x)), (u.return = d), u);
  }
  function h(d, u, x) {
    if ((typeof u == "string" && u !== "") || typeof u == "number")
      return (u = vl("" + u, d.mode, x)), (u.return = d), u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case Ds:
          return (
            (x = no(u.type, u.key, u.props, null, d.mode, x)),
            (x.ref = Ur(d, null, u)),
            (x.return = d),
            x
          );
        case nr:
          return (u = wl(u, d.mode, x)), (u.return = d), u;
        case gn:
          var _ = u._init;
          return h(d, _(u._payload), x);
      }
      if (Fr(u) || Rr(u))
        return (u = zn(u, d.mode, x, null)), (u.return = d), u;
      Ls(d, u);
    }
    return null;
  }
  function f(d, u, x, _) {
    var A = u !== null ? u.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return A !== null ? null : i(d, u, "" + x, _);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Ds:
          return x.key === A ? c(d, u, x, _) : null;
        case nr:
          return x.key === A ? g(d, u, x, _) : null;
        case gn:
          return (A = x._init), f(d, u, A(x._payload), _);
      }
      if (Fr(x) || Rr(x)) return A !== null ? null : m(d, u, x, _, null);
      Ls(d, x);
    }
    return null;
  }
  function S(d, u, x, _, A) {
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return (d = d.get(x) || null), i(u, d, "" + _, A);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case Ds:
          return (d = d.get(_.key === null ? x : _.key) || null), c(u, d, _, A);
        case nr:
          return (d = d.get(_.key === null ? x : _.key) || null), g(u, d, _, A);
        case gn:
          var I = _._init;
          return S(d, u, x, I(_._payload), A);
      }
      if (Fr(_) || Rr(_)) return (d = d.get(x) || null), m(u, d, _, A, null);
      Ls(u, _);
    }
    return null;
  }
  function b(d, u, x, _) {
    for (
      var A = null, I = null, R = u, F = (u = 0), le = null;
      R !== null && F < x.length;
      F++
    ) {
      R.index > F ? ((le = R), (R = null)) : (le = R.sibling);
      var P = f(d, R, x[F], _);
      if (P === null) {
        R === null && (R = le);
        break;
      }
      e && R && P.alternate === null && t(d, R),
        (u = l(P, u, F)),
        I === null ? (A = P) : (I.sibling = P),
        (I = P),
        (R = le);
    }
    if (F === x.length) return n(d, R), ze && An(d, F), A;
    if (R === null) {
      for (; F < x.length; F++)
        (R = h(d, x[F], _)),
          R !== null &&
            ((u = l(R, u, F)), I === null ? (A = R) : (I.sibling = R), (I = R));
      return ze && An(d, F), A;
    }
    for (R = s(d, R); F < x.length; F++)
      (le = S(R, d, F, x[F], _)),
        le !== null &&
          (e && le.alternate !== null && R.delete(le.key === null ? F : le.key),
          (u = l(le, u, F)),
          I === null ? (A = le) : (I.sibling = le),
          (I = le));
    return (
      e &&
        R.forEach(function (z) {
          return t(d, z);
        }),
      ze && An(d, F),
      A
    );
  }
  function M(d, u, x, _) {
    var A = Rr(x);
    if (typeof A != "function") throw Error(oe(150));
    if (((x = A.call(x)), x == null)) throw Error(oe(151));
    for (
      var I = (A = null), R = u, F = (u = 0), le = null, P = x.next();
      R !== null && !P.done;
      F++, P = x.next()
    ) {
      R.index > F ? ((le = R), (R = null)) : (le = R.sibling);
      var z = f(d, R, P.value, _);
      if (z === null) {
        R === null && (R = le);
        break;
      }
      e && R && z.alternate === null && t(d, R),
        (u = l(z, u, F)),
        I === null ? (A = z) : (I.sibling = z),
        (I = z),
        (R = le);
    }
    if (P.done) return n(d, R), ze && An(d, F), A;
    if (R === null) {
      for (; !P.done; F++, P = x.next())
        (P = h(d, P.value, _)),
          P !== null &&
            ((u = l(P, u, F)), I === null ? (A = P) : (I.sibling = P), (I = P));
      return ze && An(d, F), A;
    }
    for (R = s(d, R); !P.done; F++, P = x.next())
      (P = S(R, d, F, P.value, _)),
        P !== null &&
          (e && P.alternate !== null && R.delete(P.key === null ? F : P.key),
          (u = l(P, u, F)),
          I === null ? (A = P) : (I.sibling = P),
          (I = P));
    return (
      e &&
        R.forEach(function (Z) {
          return t(d, Z);
        }),
      ze && An(d, F),
      A
    );
  }
  function k(d, u, x, _) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === rr &&
        x.key === null &&
        (x = x.props.children),
      typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case Ds:
          e: {
            for (var A = x.key, I = u; I !== null; ) {
              if (I.key === A) {
                if (((A = x.type), A === rr)) {
                  if (I.tag === 7) {
                    n(d, I.sibling),
                      (u = o(I, x.props.children)),
                      (u.return = d),
                      (d = u);
                    break e;
                  }
                } else if (
                  I.elementType === A ||
                  (typeof A == "object" &&
                    A !== null &&
                    A.$$typeof === gn &&
                    Yi(A) === I.type)
                ) {
                  n(d, I.sibling),
                    (u = o(I, x.props)),
                    (u.ref = Ur(d, I, x)),
                    (u.return = d),
                    (d = u);
                  break e;
                }
                n(d, I);
                break;
              } else t(d, I);
              I = I.sibling;
            }
            x.type === rr
              ? ((u = zn(x.props.children, d.mode, _, x.key)),
                (u.return = d),
                (d = u))
              : ((_ = no(x.type, x.key, x.props, null, d.mode, _)),
                (_.ref = Ur(d, u, x)),
                (_.return = d),
                (d = _));
          }
          return a(d);
        case nr:
          e: {
            for (I = x.key; u !== null; ) {
              if (u.key === I)
                if (
                  u.tag === 4 &&
                  u.stateNode.containerInfo === x.containerInfo &&
                  u.stateNode.implementation === x.implementation
                ) {
                  n(d, u.sibling),
                    (u = o(u, x.children || [])),
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
            (u = wl(x, d.mode, _)), (u.return = d), (d = u);
          }
          return a(d);
        case gn:
          return (I = x._init), k(d, u, I(x._payload), _);
      }
      if (Fr(x)) return b(d, u, x, _);
      if (Rr(x)) return M(d, u, x, _);
      Ls(d, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        u !== null && u.tag === 6
          ? (n(d, u.sibling), (u = o(u, x)), (u.return = d), (d = u))
          : (n(d, u), (u = vl(x, d.mode, _)), (u.return = d), (d = u)),
        a(d))
      : n(d, u);
  }
  return k;
}
var Sr = $d(!0),
  Od = $d(!1),
  yo = Tn(null),
  vo = null,
  ur = null,
  Oa = null;
function La() {
  Oa = ur = vo = null;
}
function Ua(e) {
  var t = yo.current;
  Be(yo), (e._currentValue = t);
}
function Ql(e, t, n) {
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
function vr(e, t) {
  (vo = e),
    (Oa = ur = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (yt = !0), (e.firstContext = null));
}
function $t(e) {
  var t = e._currentValue;
  if (Oa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ur === null)) {
      if (vo === null) throw Error(oe(308));
      (ur = e), (vo.dependencies = { lanes: 0, firstContext: e });
    } else ur = ur.next = e;
  return t;
}
var Ln = null;
function Ba(e) {
  Ln === null ? (Ln = [e]) : Ln.push(e);
}
function Ld(e, t, n, s) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Ba(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    un(e, s)
  );
}
function un(e, t) {
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
var xn = !1;
function za(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ud(e, t) {
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
function an(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function kn(e, t, n) {
  var s = e.updateQueue;
  if (s === null) return null;
  if (((s = s.shared), Re & 2)) {
    var o = s.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (s.pending = t),
      un(e, n)
    );
  }
  return (
    (o = s.interleaved),
    o === null ? ((t.next = t), Ba(s)) : ((t.next = o.next), (o.next = t)),
    (s.interleaved = t),
    un(e, n)
  );
}
function Qs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var s = t.lanes;
    (s &= e.pendingLanes), (n |= s), (t.lanes = n), ka(e, n);
  }
}
function Xi(e, t) {
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
function wo(e, t, n, s) {
  var o = e.updateQueue;
  xn = !1;
  var l = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    i = o.shared.pending;
  if (i !== null) {
    o.shared.pending = null;
    var c = i,
      g = c.next;
    (c.next = null), a === null ? (l = g) : (a.next = g), (a = c);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (i = m.lastBaseUpdate),
      i !== a &&
        (i === null ? (m.firstBaseUpdate = g) : (i.next = g),
        (m.lastBaseUpdate = c)));
  }
  if (l !== null) {
    var h = o.baseState;
    (a = 0), (m = g = c = null), (i = l);
    do {
      var f = i.lane,
        S = i.eventTime;
      if ((s & f) === f) {
        m !== null &&
          (m = m.next =
            {
              eventTime: S,
              lane: 0,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            });
        e: {
          var b = e,
            M = i;
          switch (((f = t), (S = n), M.tag)) {
            case 1:
              if (((b = M.payload), typeof b == "function")) {
                h = b.call(S, h, f);
                break e;
              }
              h = b;
              break e;
            case 3:
              b.flags = (b.flags & -65537) | 128;
            case 0:
              if (
                ((b = M.payload),
                (f = typeof b == "function" ? b.call(S, h, f) : b),
                f == null)
              )
                break e;
              h = We({}, h, f);
              break e;
            case 2:
              xn = !0;
          }
        }
        i.callback !== null &&
          i.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [i]) : f.push(i));
      } else
        (S = {
          eventTime: S,
          lane: f,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        }),
          m === null ? ((g = m = S), (c = h)) : (m = m.next = S),
          (a |= f);
      if (((i = i.next), i === null)) {
        if (((i = o.shared.pending), i === null)) break;
        (f = i),
          (i = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (m === null && (c = h),
      (o.baseState = c),
      (o.firstBaseUpdate = g),
      (o.lastBaseUpdate = m),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (Vn |= a), (e.lanes = a), (e.memoizedState = h);
  }
}
function Qi(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var s = e[t],
        o = s.callback;
      if (o !== null) {
        if (((s.callback = null), (s = n), typeof o != "function"))
          throw Error(oe(191, o));
        o.call(s);
      }
    }
}
var js = {},
  Zt = Tn(js),
  ps = Tn(js),
  ms = Tn(js);
function Un(e) {
  if (e === js) throw Error(oe(174));
  return e;
}
function Ga(e, t) {
  switch ((Le(ms, t), Le(ps, e), Le(Zt, js), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : El(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = El(t, e));
  }
  Be(Zt), Le(Zt, t);
}
function Cr() {
  Be(Zt), Be(ps), Be(ms);
}
function Bd(e) {
  Un(ms.current);
  var t = Un(Zt.current),
    n = El(t, e.type);
  t !== n && (Le(ps, e), Le(Zt, n));
}
function Fa(e) {
  ps.current === e && (Be(Zt), Be(ps));
}
var Fe = Tn(0);
function bo(e) {
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
var pl = [];
function Ha() {
  for (var e = 0; e < pl.length; e++)
    pl[e]._workInProgressVersionPrimary = null;
  pl.length = 0;
}
var Ks = pn.ReactCurrentDispatcher,
  ml = pn.ReactCurrentBatchConfig,
  Hn = 0,
  Ve = null,
  Je = null,
  et = null,
  No = !1,
  Kr = !1,
  hs = 0,
  dm = 0;
function lt() {
  throw Error(oe(321));
}
function Va(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Wt(e[n], t[n])) return !1;
  return !0;
}
function Wa(e, t, n, s, o, l) {
  if (
    ((Hn = l),
    (Ve = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ks.current = e === null || e.memoizedState === null ? mm : hm),
    (e = n(s, o)),
    Kr)
  ) {
    l = 0;
    do {
      if (((Kr = !1), (hs = 0), 25 <= l)) throw Error(oe(301));
      (l += 1),
        (et = Je = null),
        (t.updateQueue = null),
        (Ks.current = gm),
        (e = n(s, o));
    } while (Kr);
  }
  if (
    ((Ks.current = jo),
    (t = Je !== null && Je.next !== null),
    (Hn = 0),
    (et = Je = Ve = null),
    (No = !1),
    t)
  )
    throw Error(oe(300));
  return e;
}
function qa() {
  var e = hs !== 0;
  return (hs = 0), e;
}
function Qt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return et === null ? (Ve.memoizedState = et = e) : (et = et.next = e), et;
}
function Ot() {
  if (Je === null) {
    var e = Ve.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Je.next;
  var t = et === null ? Ve.memoizedState : et.next;
  if (t !== null) (et = t), (Je = e);
  else {
    if (e === null) throw Error(oe(310));
    (Je = e),
      (e = {
        memoizedState: Je.memoizedState,
        baseState: Je.baseState,
        baseQueue: Je.baseQueue,
        queue: Je.queue,
        next: null,
      }),
      et === null ? (Ve.memoizedState = et = e) : (et = et.next = e);
  }
  return et;
}
function gs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function hl(e) {
  var t = Ot(),
    n = t.queue;
  if (n === null) throw Error(oe(311));
  n.lastRenderedReducer = e;
  var s = Je,
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
      g = l;
    do {
      var m = g.lane;
      if ((Hn & m) === m)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null,
            }),
          (s = g.hasEagerState ? g.eagerState : e(s, g.action));
      else {
        var h = {
          lane: m,
          action: g.action,
          hasEagerState: g.hasEagerState,
          eagerState: g.eagerState,
          next: null,
        };
        c === null ? ((i = c = h), (a = s)) : (c = c.next = h),
          (Ve.lanes |= m),
          (Vn |= m);
      }
      g = g.next;
    } while (g !== null && g !== l);
    c === null ? (a = s) : (c.next = i),
      Wt(s, t.memoizedState) || (yt = !0),
      (t.memoizedState = s),
      (t.baseState = a),
      (t.baseQueue = c),
      (n.lastRenderedState = s);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (Ve.lanes |= l), (Vn |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function gl(e) {
  var t = Ot(),
    n = t.queue;
  if (n === null) throw Error(oe(311));
  n.lastRenderedReducer = e;
  var s = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (l = e(l, a.action)), (a = a.next);
    while (a !== o);
    Wt(l, t.memoizedState) || (yt = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, s];
}
function zd() {}
function Gd(e, t) {
  var n = Ve,
    s = Ot(),
    o = t(),
    l = !Wt(s.memoizedState, o);
  if (
    (l && ((s.memoizedState = o), (yt = !0)),
    (s = s.queue),
    Ya(Vd.bind(null, n, s, e), [e]),
    s.getSnapshot !== t || l || (et !== null && et.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      xs(9, Hd.bind(null, n, s, o, t), void 0, null),
      tt === null)
    )
      throw Error(oe(349));
    Hn & 30 || Fd(n, t, o);
  }
  return o;
}
function Fd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ve.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Hd(e, t, n, s) {
  (t.value = n), (t.getSnapshot = s), Wd(t) && qd(e);
}
function Vd(e, t, n) {
  return n(function () {
    Wd(t) && qd(e);
  });
}
function Wd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Wt(e, n);
  } catch {
    return !0;
  }
}
function qd(e) {
  var t = un(e, 1);
  t !== null && Vt(t, e, 1, -1);
}
function Ki(e) {
  var t = Qt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: gs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = pm.bind(null, Ve, e)),
    [t.memoizedState, e]
  );
}
function xs(e, t, n, s) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: s, next: null }),
    (t = Ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ve.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((s = n.next), (n.next = e), (e.next = s), (t.lastEffect = e))),
    e
  );
}
function Yd() {
  return Ot().memoizedState;
}
function Js(e, t, n, s) {
  var o = Qt();
  (Ve.flags |= e),
    (o.memoizedState = xs(1 | t, n, void 0, s === void 0 ? null : s));
}
function $o(e, t, n, s) {
  var o = Ot();
  s = s === void 0 ? null : s;
  var l = void 0;
  if (Je !== null) {
    var a = Je.memoizedState;
    if (((l = a.destroy), s !== null && Va(s, a.deps))) {
      o.memoizedState = xs(t, n, l, s);
      return;
    }
  }
  (Ve.flags |= e), (o.memoizedState = xs(1 | t, n, l, s));
}
function Ji(e, t) {
  return Js(8390656, 8, e, t);
}
function Ya(e, t) {
  return $o(2048, 8, e, t);
}
function Xd(e, t) {
  return $o(4, 2, e, t);
}
function Qd(e, t) {
  return $o(4, 4, e, t);
}
function Kd(e, t) {
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
function Jd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), $o(4, 4, Kd.bind(null, t, e), n)
  );
}
function Xa() {}
function Zd(e, t) {
  var n = Ot();
  t = t === void 0 ? null : t;
  var s = n.memoizedState;
  return s !== null && t !== null && Va(t, s[1])
    ? s[0]
    : ((n.memoizedState = [e, t]), e);
}
function eu(e, t) {
  var n = Ot();
  t = t === void 0 ? null : t;
  var s = n.memoizedState;
  return s !== null && t !== null && Va(t, s[1])
    ? s[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function tu(e, t, n) {
  return Hn & 21
    ? (Wt(n, t) || ((n = ld()), (Ve.lanes |= n), (Vn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (yt = !0)), (e.memoizedState = n));
}
function um(e, t) {
  var n = Oe;
  (Oe = n !== 0 && 4 > n ? n : 4), e(!0);
  var s = ml.transition;
  ml.transition = {};
  try {
    e(!1), t();
  } finally {
    (Oe = n), (ml.transition = s);
  }
}
function nu() {
  return Ot().memoizedState;
}
function fm(e, t, n) {
  var s = _n(e);
  if (
    ((n = {
      lane: s,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ru(e))
  )
    su(t, n);
  else if (((n = Ld(e, t, n, s)), n !== null)) {
    var o = ut();
    Vt(n, e, s, o), ou(n, t, s);
  }
}
function pm(e, t, n) {
  var s = _n(e),
    o = { lane: s, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ru(e)) su(t, o);
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
        if (((o.hasEagerState = !0), (o.eagerState = i), Wt(i, a))) {
          var c = t.interleaved;
          c === null
            ? ((o.next = o), Ba(t))
            : ((o.next = c.next), (c.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ld(e, t, o, s)),
      n !== null && ((o = ut()), Vt(n, e, s, o), ou(n, t, s));
  }
}
function ru(e) {
  var t = e.alternate;
  return e === Ve || (t !== null && t === Ve);
}
function su(e, t) {
  Kr = No = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ou(e, t, n) {
  if (n & 4194240) {
    var s = t.lanes;
    (s &= e.pendingLanes), (n |= s), (t.lanes = n), ka(e, n);
  }
}
var jo = {
    readContext: $t,
    useCallback: lt,
    useContext: lt,
    useEffect: lt,
    useImperativeHandle: lt,
    useInsertionEffect: lt,
    useLayoutEffect: lt,
    useMemo: lt,
    useReducer: lt,
    useRef: lt,
    useState: lt,
    useDebugValue: lt,
    useDeferredValue: lt,
    useTransition: lt,
    useMutableSource: lt,
    useSyncExternalStore: lt,
    useId: lt,
    unstable_isNewReconciler: !1,
  },
  mm = {
    readContext: $t,
    useCallback: function (e, t) {
      return (Qt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: $t,
    useEffect: Ji,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Js(4194308, 4, Kd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Js(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Js(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Qt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var s = Qt();
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
        (e = e.dispatch = fm.bind(null, Ve, e)),
        [s.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Qt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ki,
    useDebugValue: Xa,
    useDeferredValue: function (e) {
      return (Qt().memoizedState = e);
    },
    useTransition: function () {
      var e = Ki(!1),
        t = e[0];
      return (e = um.bind(null, e[1])), (Qt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var s = Ve,
        o = Qt();
      if (ze) {
        if (n === void 0) throw Error(oe(407));
        n = n();
      } else {
        if (((n = t()), tt === null)) throw Error(oe(349));
        Hn & 30 || Fd(s, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        Ji(Vd.bind(null, s, l, e), [e]),
        (s.flags |= 2048),
        xs(9, Hd.bind(null, s, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Qt(),
        t = tt.identifierPrefix;
      if (ze) {
        var n = ln,
          s = on;
        (n = (s & ~(1 << (32 - Ht(s) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = hs++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = dm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  hm = {
    readContext: $t,
    useCallback: Zd,
    useContext: $t,
    useEffect: Ya,
    useImperativeHandle: Jd,
    useInsertionEffect: Xd,
    useLayoutEffect: Qd,
    useMemo: eu,
    useReducer: hl,
    useRef: Yd,
    useState: function () {
      return hl(gs);
    },
    useDebugValue: Xa,
    useDeferredValue: function (e) {
      var t = Ot();
      return tu(t, Je.memoizedState, e);
    },
    useTransition: function () {
      var e = hl(gs)[0],
        t = Ot().memoizedState;
      return [e, t];
    },
    useMutableSource: zd,
    useSyncExternalStore: Gd,
    useId: nu,
    unstable_isNewReconciler: !1,
  },
  gm = {
    readContext: $t,
    useCallback: Zd,
    useContext: $t,
    useEffect: Ya,
    useImperativeHandle: Jd,
    useInsertionEffect: Xd,
    useLayoutEffect: Qd,
    useMemo: eu,
    useReducer: gl,
    useRef: Yd,
    useState: function () {
      return gl(gs);
    },
    useDebugValue: Xa,
    useDeferredValue: function (e) {
      var t = Ot();
      return Je === null ? (t.memoizedState = e) : tu(t, Je.memoizedState, e);
    },
    useTransition: function () {
      var e = gl(gs)[0],
        t = Ot().memoizedState;
      return [e, t];
    },
    useMutableSource: zd,
    useSyncExternalStore: Gd,
    useId: nu,
    unstable_isNewReconciler: !1,
  };
function zt(e, t) {
  if (e && e.defaultProps) {
    (t = We({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Kl(e, t, n, s) {
  (t = e.memoizedState),
    (n = n(s, t)),
    (n = n == null ? t : We({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Oo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Yn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var s = ut(),
      o = _n(e),
      l = an(s, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = kn(e, l, o)),
      t !== null && (Vt(t, e, o, s), Qs(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var s = ut(),
      o = _n(e),
      l = an(s, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = kn(e, l, o)),
      t !== null && (Vt(t, e, o, s), Qs(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ut(),
      s = _n(e),
      o = an(n, s);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = kn(e, o, s)),
      t !== null && (Vt(t, e, s, n), Qs(t, e, s));
  },
};
function Zi(e, t, n, s, o, l, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(s, l, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !cs(n, s) || !cs(o, l)
      : !0
  );
}
function lu(e, t, n) {
  var s = !1,
    o = In,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = $t(l))
      : ((o = bt(t) ? Gn : ct.current),
        (s = t.contextTypes),
        (l = (s = s != null) ? Nr(e, o) : In)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Oo),
    (e.stateNode = t),
    (t._reactInternals = e),
    s &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function ec(e, t, n, s) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, s),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, s),
    t.state !== e && Oo.enqueueReplaceState(t, t.state, null);
}
function Jl(e, t, n, s) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), za(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = $t(l))
    : ((l = bt(t) ? Gn : ct.current), (o.context = Nr(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Kl(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Oo.enqueueReplaceState(o, o.state, null),
      wo(e, n, o, s),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function kr(e, t) {
  try {
    var n = "",
      s = t;
    do (n += Hf(s)), (s = s.return);
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
function xl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Zl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var xm = typeof WeakMap == "function" ? WeakMap : Map;
function au(e, t, n) {
  (n = an(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var s = t.value;
  return (
    (n.callback = function () {
      Co || ((Co = !0), (ca = s)), Zl(e, t);
    }),
    n
  );
}
function iu(e, t, n) {
  (n = an(-1, n)), (n.tag = 3);
  var s = e.type.getDerivedStateFromError;
  if (typeof s == "function") {
    var o = t.value;
    (n.payload = function () {
      return s(o);
    }),
      (n.callback = function () {
        Zl(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        Zl(e, t),
          typeof s != "function" &&
            (Dn === null ? (Dn = new Set([this])) : Dn.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function tc(e, t, n) {
  var s = e.pingCache;
  if (s === null) {
    s = e.pingCache = new xm();
    var o = new Set();
    s.set(t, o);
  } else (o = s.get(t)), o === void 0 && ((o = new Set()), s.set(t, o));
  o.has(n) || (o.add(n), (e = Im.bind(null, e, t, n)), t.then(e, e));
}
function nc(e) {
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
function rc(e, t, n, s, o) {
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
              : ((t = an(-1, 1)), (t.tag = 2), kn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ym = pn.ReactCurrentOwner,
  yt = !1;
function dt(e, t, n, s) {
  t.child = e === null ? Od(t, null, n, s) : Sr(t, e.child, n, s);
}
function sc(e, t, n, s, o) {
  n = n.render;
  var l = t.ref;
  return (
    vr(t, o),
    (s = Wa(e, t, n, s, l, o)),
    (n = qa()),
    e !== null && !yt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        fn(e, t, o))
      : (ze && n && Ra(t), (t.flags |= 1), dt(e, t, s, o), t.child)
  );
}
function oc(e, t, n, s, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !ri(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), cu(e, t, l, s, o))
      : ((e = no(n.type, null, s, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var a = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : cs), n(a, s) && e.ref === t.ref)
    )
      return fn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Mn(l, s)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function cu(e, t, n, s, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (cs(l, s) && e.ref === t.ref)
      if (((yt = !1), (t.pendingProps = s = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (yt = !0);
      else return (t.lanes = e.lanes), fn(e, t, o);
  }
  return ea(e, t, n, s, o);
}
function du(e, t, n) {
  var s = t.pendingProps,
    o = s.children,
    l = e !== null ? e.memoizedState : null;
  if (s.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Le(pr, St),
        (St |= n);
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
          Le(pr, St),
          (St |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (s = l !== null ? l.baseLanes : n),
        Le(pr, St),
        (St |= s);
    }
  else
    l !== null ? ((s = l.baseLanes | n), (t.memoizedState = null)) : (s = n),
      Le(pr, St),
      (St |= s);
  return dt(e, t, o, n), t.child;
}
function uu(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ea(e, t, n, s, o) {
  var l = bt(n) ? Gn : ct.current;
  return (
    (l = Nr(t, l)),
    vr(t, o),
    (n = Wa(e, t, n, s, l, o)),
    (s = qa()),
    e !== null && !yt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        fn(e, t, o))
      : (ze && s && Ra(t), (t.flags |= 1), dt(e, t, n, o), t.child)
  );
}
function lc(e, t, n, s, o) {
  if (bt(n)) {
    var l = !0;
    ho(t);
  } else l = !1;
  if ((vr(t, o), t.stateNode === null))
    Zs(e, t), lu(t, n, s), Jl(t, n, s, o), (s = !0);
  else if (e === null) {
    var a = t.stateNode,
      i = t.memoizedProps;
    a.props = i;
    var c = a.context,
      g = n.contextType;
    typeof g == "object" && g !== null
      ? (g = $t(g))
      : ((g = bt(n) ? Gn : ct.current), (g = Nr(t, g)));
    var m = n.getDerivedStateFromProps,
      h =
        typeof m == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((i !== s || c !== g) && ec(t, a, s, g)),
      (xn = !1);
    var f = t.memoizedState;
    (a.state = f),
      wo(t, s, a, o),
      (c = t.memoizedState),
      i !== s || f !== c || wt.current || xn
        ? (typeof m == "function" && (Kl(t, n, m, s), (c = t.memoizedState)),
          (i = xn || Zi(t, n, i, s, f, c, g))
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
          (a.context = g),
          (s = i))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (s = !1));
  } else {
    (a = t.stateNode),
      Ud(e, t),
      (i = t.memoizedProps),
      (g = t.type === t.elementType ? i : zt(t.type, i)),
      (a.props = g),
      (h = t.pendingProps),
      (f = a.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = $t(c))
        : ((c = bt(n) ? Gn : ct.current), (c = Nr(t, c)));
    var S = n.getDerivedStateFromProps;
    (m =
      typeof S == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((i !== h || f !== c) && ec(t, a, s, c)),
      (xn = !1),
      (f = t.memoizedState),
      (a.state = f),
      wo(t, s, a, o);
    var b = t.memoizedState;
    i !== h || f !== b || wt.current || xn
      ? (typeof S == "function" && (Kl(t, n, S, s), (b = t.memoizedState)),
        (g = xn || Zi(t, n, g, s, f, b, c) || !1)
          ? (m ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(s, b, c),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(s, b, c)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (i === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (i === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = s),
            (t.memoizedState = b)),
        (a.props = s),
        (a.state = b),
        (a.context = c),
        (s = g))
      : (typeof a.componentDidUpdate != "function" ||
          (i === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (i === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (s = !1));
  }
  return ta(e, t, n, s, l, o);
}
function ta(e, t, n, s, o, l) {
  uu(e, t);
  var a = (t.flags & 128) !== 0;
  if (!s && !a) return o && Vi(t, n, !1), fn(e, t, l);
  (s = t.stateNode), (ym.current = t);
  var i =
    a && typeof n.getDerivedStateFromError != "function" ? null : s.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Sr(t, e.child, null, l)), (t.child = Sr(t, null, i, l)))
      : dt(e, t, i, l),
    (t.memoizedState = s.state),
    o && Vi(t, n, !0),
    t.child
  );
}
function fu(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Hi(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Hi(e, t.context, !1),
    Ga(e, t.containerInfo);
}
function ac(e, t, n, s, o) {
  return jr(), $a(o), (t.flags |= 256), dt(e, t, n, s), t.child;
}
var na = { dehydrated: null, treeContext: null, retryLane: 0 };
function ra(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function pu(e, t, n) {
  var s = t.pendingProps,
    o = Fe.current,
    l = !1,
    a = (t.flags & 128) !== 0,
    i;
  if (
    ((i = a) ||
      (i = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    i
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Le(Fe, o & 1),
    e === null)
  )
    return (
      Xl(t),
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
                : (l = Bo(a, s, 0, null)),
              (e = zn(e, s, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = ra(n)),
              (t.memoizedState = na),
              e)
            : Qa(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((i = o.dehydrated), i !== null)))
    return vm(e, t, a, s, i, o, n);
  if (l) {
    (l = s.fallback), (a = t.mode), (o = e.child), (i = o.sibling);
    var c = { mode: "hidden", children: s.children };
    return (
      !(a & 1) && t.child !== o
        ? ((s = t.child),
          (s.childLanes = 0),
          (s.pendingProps = c),
          (t.deletions = null))
        : ((s = Mn(o, c)), (s.subtreeFlags = o.subtreeFlags & 14680064)),
      i !== null ? (l = Mn(i, l)) : ((l = zn(l, a, n, null)), (l.flags |= 2)),
      (l.return = t),
      (s.return = t),
      (s.sibling = l),
      (t.child = s),
      (s = l),
      (l = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? ra(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (l.memoizedState = a),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = na),
      s
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (s = Mn(l, { mode: "visible", children: s.children })),
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
function Qa(e, t) {
  return (
    (t = Bo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Us(e, t, n, s) {
  return (
    s !== null && $a(s),
    Sr(t, e.child, null, n),
    (e = Qa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function vm(e, t, n, s, o, l, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (s = xl(Error(oe(422)))), Us(e, t, a, s))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = s.fallback),
        (o = t.mode),
        (s = Bo({ mode: "visible", children: s.children }, o, 0, null)),
        (l = zn(l, o, a, null)),
        (l.flags |= 2),
        (s.return = t),
        (l.return = t),
        (s.sibling = l),
        (t.child = s),
        t.mode & 1 && Sr(t, e.child, null, a),
        (t.child.memoizedState = ra(a)),
        (t.memoizedState = na),
        l);
  if (!(t.mode & 1)) return Us(e, t, a, null);
  if (o.data === "$!") {
    if (((s = o.nextSibling && o.nextSibling.dataset), s)) var i = s.dgst;
    return (
      (s = i), (l = Error(oe(419))), (s = xl(l, s, void 0)), Us(e, t, a, s)
    );
  }
  if (((i = (a & e.childLanes) !== 0), yt || i)) {
    if (((s = tt), s !== null)) {
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
          ((l.retryLane = o), un(e, o), Vt(s, e, o, -1));
    }
    return ni(), (s = xl(Error(oe(421)))), Us(e, t, a, s);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Pm.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Ct = Cn(o.nextSibling)),
      (kt = t),
      (ze = !0),
      (Ft = null),
      e !== null &&
        ((It[Pt++] = on),
        (It[Pt++] = ln),
        (It[Pt++] = Fn),
        (on = e.id),
        (ln = e.overflow),
        (Fn = t)),
      (t = Qa(t, s.children)),
      (t.flags |= 4096),
      t);
}
function ic(e, t, n) {
  e.lanes |= t;
  var s = e.alternate;
  s !== null && (s.lanes |= t), Ql(e.return, t, n);
}
function yl(e, t, n, s, o) {
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
function mu(e, t, n) {
  var s = t.pendingProps,
    o = s.revealOrder,
    l = s.tail;
  if ((dt(e, t, s.children, n), (s = Fe.current), s & 2))
    (s = (s & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ic(e, n, t);
        else if (e.tag === 19) ic(e, n, t);
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
  if ((Le(Fe, s), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && bo(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          yl(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && bo(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        yl(t, !0, n, null, l);
        break;
      case "together":
        yl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Zs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function fn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Vn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(oe(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Mn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Mn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function wm(e, t, n) {
  switch (t.tag) {
    case 3:
      fu(t), jr();
      break;
    case 5:
      Bd(t);
      break;
    case 1:
      bt(t.type) && ho(t);
      break;
    case 4:
      Ga(t, t.stateNode.containerInfo);
      break;
    case 10:
      var s = t.type._context,
        o = t.memoizedProps.value;
      Le(yo, s._currentValue), (s._currentValue = o);
      break;
    case 13:
      if (((s = t.memoizedState), s !== null))
        return s.dehydrated !== null
          ? (Le(Fe, Fe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? pu(e, t, n)
          : (Le(Fe, Fe.current & 1),
            (e = fn(e, t, n)),
            e !== null ? e.sibling : null);
      Le(Fe, Fe.current & 1);
      break;
    case 19:
      if (((s = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (s) return mu(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Le(Fe, Fe.current),
        s)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), du(e, t, n);
  }
  return fn(e, t, n);
}
var hu, sa, gu, xu;
hu = function (e, t) {
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
sa = function () {};
gu = function (e, t, n, s) {
  var o = e.memoizedProps;
  if (o !== s) {
    (e = t.stateNode), Un(Zt.current);
    var l = null;
    switch (n) {
      case "input":
        (o = kl(e, o)), (s = kl(e, s)), (l = []);
        break;
      case "select":
        (o = We({}, o, { value: void 0 })),
          (s = We({}, s, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = Ml(e, o)), (s = Ml(e, s)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof s.onClick == "function" &&
          (e.onclick = po);
    }
    Il(n, s);
    var a;
    n = null;
    for (g in o)
      if (!s.hasOwnProperty(g) && o.hasOwnProperty(g) && o[g] != null)
        if (g === "style") {
          var i = o[g];
          for (a in i) i.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          g !== "dangerouslySetInnerHTML" &&
            g !== "children" &&
            g !== "suppressContentEditableWarning" &&
            g !== "suppressHydrationWarning" &&
            g !== "autoFocus" &&
            (ns.hasOwnProperty(g)
              ? l || (l = [])
              : (l = l || []).push(g, null));
    for (g in s) {
      var c = s[g];
      if (
        ((i = o != null ? o[g] : void 0),
        s.hasOwnProperty(g) && c !== i && (c != null || i != null))
      )
        if (g === "style")
          if (i) {
            for (a in i)
              !i.hasOwnProperty(a) ||
                (c && c.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in c)
              c.hasOwnProperty(a) &&
                i[a] !== c[a] &&
                (n || (n = {}), (n[a] = c[a]));
          } else n || (l || (l = []), l.push(g, n)), (n = c);
        else
          g === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (i = i ? i.__html : void 0),
              c != null && i !== c && (l = l || []).push(g, c))
            : g === "children"
            ? (typeof c != "string" && typeof c != "number") ||
              (l = l || []).push(g, "" + c)
            : g !== "suppressContentEditableWarning" &&
              g !== "suppressHydrationWarning" &&
              (ns.hasOwnProperty(g)
                ? (c != null && g === "onScroll" && Ue("scroll", e),
                  l || i === c || (l = []))
                : (l = l || []).push(g, c));
    }
    n && (l = l || []).push("style", n);
    var g = l;
    (t.updateQueue = g) && (t.flags |= 4);
  }
};
xu = function (e, t, n, s) {
  n !== s && (t.flags |= 4);
};
function Br(e, t) {
  if (!ze)
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
function at(e) {
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
function bm(e, t, n) {
  var s = t.pendingProps;
  switch ((Aa(t), t.tag)) {
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
      return at(t), null;
    case 1:
      return bt(t.type) && mo(), at(t), null;
    case 3:
      return (
        (s = t.stateNode),
        Cr(),
        Be(wt),
        Be(ct),
        Ha(),
        s.pendingContext &&
          ((s.context = s.pendingContext), (s.pendingContext = null)),
        (e === null || e.child === null) &&
          (Os(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ft !== null && (fa(Ft), (Ft = null)))),
        sa(e, t),
        at(t),
        null
      );
    case 5:
      Fa(t);
      var o = Un(ms.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        gu(e, t, n, s, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!s) {
          if (t.stateNode === null) throw Error(oe(166));
          return at(t), null;
        }
        if (((e = Un(Zt.current)), Os(t))) {
          (s = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((s[Kt] = t), (s[fs] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Ue("cancel", s), Ue("close", s);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ue("load", s);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Vr.length; o++) Ue(Vr[o], s);
              break;
            case "source":
              Ue("error", s);
              break;
            case "img":
            case "image":
            case "link":
              Ue("error", s), Ue("load", s);
              break;
            case "details":
              Ue("toggle", s);
              break;
            case "input":
              xi(s, l), Ue("invalid", s);
              break;
            case "select":
              (s._wrapperState = { wasMultiple: !!l.multiple }),
                Ue("invalid", s);
              break;
            case "textarea":
              vi(s, l), Ue("invalid", s);
          }
          Il(n, l), (o = null);
          for (var a in l)
            if (l.hasOwnProperty(a)) {
              var i = l[a];
              a === "children"
                ? typeof i == "string"
                  ? s.textContent !== i &&
                    (l.suppressHydrationWarning !== !0 &&
                      $s(s.textContent, i, e),
                    (o = ["children", i]))
                  : typeof i == "number" &&
                    s.textContent !== "" + i &&
                    (l.suppressHydrationWarning !== !0 &&
                      $s(s.textContent, i, e),
                    (o = ["children", "" + i]))
                : ns.hasOwnProperty(a) &&
                  i != null &&
                  a === "onScroll" &&
                  Ue("scroll", s);
            }
          switch (n) {
            case "input":
              _s(s), yi(s, l, !0);
              break;
            case "textarea":
              _s(s), wi(s);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (s.onclick = po);
          }
          (s = o), (t.updateQueue = s), s !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Vc(n)),
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
            (e[Kt] = t),
            (e[fs] = s),
            hu(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Pl(n, s)), n)) {
              case "dialog":
                Ue("cancel", e), Ue("close", e), (o = s);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ue("load", e), (o = s);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Vr.length; o++) Ue(Vr[o], e);
                o = s;
                break;
              case "source":
                Ue("error", e), (o = s);
                break;
              case "img":
              case "image":
              case "link":
                Ue("error", e), Ue("load", e), (o = s);
                break;
              case "details":
                Ue("toggle", e), (o = s);
                break;
              case "input":
                xi(e, s), (o = kl(e, s)), Ue("invalid", e);
                break;
              case "option":
                o = s;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!s.multiple }),
                  (o = We({}, s, { value: void 0 })),
                  Ue("invalid", e);
                break;
              case "textarea":
                vi(e, s), (o = Ml(e, s)), Ue("invalid", e);
                break;
              default:
                o = s;
            }
            Il(n, o), (i = o);
            for (l in i)
              if (i.hasOwnProperty(l)) {
                var c = i[l];
                l === "style"
                  ? Yc(e, c)
                  : l === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && Wc(e, c))
                  : l === "children"
                  ? typeof c == "string"
                    ? (n !== "textarea" || c !== "") && rs(e, c)
                    : typeof c == "number" && rs(e, "" + c)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (ns.hasOwnProperty(l)
                      ? c != null && l === "onScroll" && Ue("scroll", e)
                      : c != null && wa(e, l, c, a));
              }
            switch (n) {
              case "input":
                _s(e), yi(e, s, !1);
                break;
              case "textarea":
                _s(e), wi(e);
                break;
              case "option":
                s.value != null && e.setAttribute("value", "" + En(s.value));
                break;
              case "select":
                (e.multiple = !!s.multiple),
                  (l = s.value),
                  l != null
                    ? hr(e, !!s.multiple, l, !1)
                    : s.defaultValue != null &&
                      hr(e, !!s.multiple, s.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = po);
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
      return at(t), null;
    case 6:
      if (e && t.stateNode != null) xu(e, t, e.memoizedProps, s);
      else {
        if (typeof s != "string" && t.stateNode === null) throw Error(oe(166));
        if (((n = Un(ms.current)), Un(Zt.current), Os(t))) {
          if (
            ((s = t.stateNode),
            (n = t.memoizedProps),
            (s[Kt] = t),
            (l = s.nodeValue !== n) && ((e = kt), e !== null))
          )
            switch (e.tag) {
              case 3:
                $s(s.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  $s(s.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (s = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(s)),
            (s[Kt] = t),
            (t.stateNode = s);
      }
      return at(t), null;
    case 13:
      if (
        (Be(Fe),
        (s = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ze && Ct !== null && t.mode & 1 && !(t.flags & 128))
          Ad(), jr(), (t.flags |= 98560), (l = !1);
        else if (((l = Os(t)), s !== null && s.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(oe(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(oe(317));
            l[Kt] = t;
          } else
            jr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          at(t), (l = !1);
        } else Ft !== null && (fa(Ft), (Ft = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((s = s !== null),
          s !== (e !== null && e.memoizedState !== null) &&
            s &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Fe.current & 1 ? Ze === 0 && (Ze = 3) : ni())),
          t.updateQueue !== null && (t.flags |= 4),
          at(t),
          null);
    case 4:
      return (
        Cr(), sa(e, t), e === null && ds(t.stateNode.containerInfo), at(t), null
      );
    case 10:
      return Ua(t.type._context), at(t), null;
    case 17:
      return bt(t.type) && mo(), at(t), null;
    case 19:
      if ((Be(Fe), (l = t.memoizedState), l === null)) return at(t), null;
      if (((s = (t.flags & 128) !== 0), (a = l.rendering), a === null))
        if (s) Br(l, !1);
        else {
          if (Ze !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = bo(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Br(l, !1),
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
                return Le(Fe, (Fe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            Qe() > Dr &&
            ((t.flags |= 128), (s = !0), Br(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!s)
          if (((e = bo(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (s = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Br(l, !0),
              l.tail === null && l.tailMode === "hidden" && !a.alternate && !ze)
            )
              return at(t), null;
          } else
            2 * Qe() - l.renderingStartTime > Dr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (s = !0), Br(l, !1), (t.lanes = 4194304));
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
          (l.renderingStartTime = Qe()),
          (t.sibling = null),
          (n = Fe.current),
          Le(Fe, s ? (n & 1) | 2 : n & 1),
          t)
        : (at(t), null);
    case 22:
    case 23:
      return (
        ti(),
        (s = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== s && (t.flags |= 8192),
        s && t.mode & 1
          ? St & 1073741824 && (at(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : at(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(oe(156, t.tag));
}
function Nm(e, t) {
  switch ((Aa(t), t.tag)) {
    case 1:
      return (
        bt(t.type) && mo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Cr(),
        Be(wt),
        Be(ct),
        Ha(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Fa(t), null;
    case 13:
      if (
        (Be(Fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(oe(340));
        jr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Be(Fe), null;
    case 4:
      return Cr(), null;
    case 10:
      return Ua(t.type._context), null;
    case 22:
    case 23:
      return ti(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Bs = !1,
  it = !1,
  jm = typeof WeakSet == "function" ? WeakSet : Set,
  we = null;
function fr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (s) {
        qe(e, t, s);
      }
    else n.current = null;
}
function oa(e, t, n) {
  try {
    n();
  } catch (s) {
    qe(e, t, s);
  }
}
var cc = !1;
function Sm(e, t) {
  if (((Gl = co), (e = Nd()), Ta(e))) {
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
            g = 0,
            m = 0,
            h = e,
            f = null;
          t: for (;;) {
            for (
              var S;
              h !== n || (o !== 0 && h.nodeType !== 3) || (i = a + o),
                h !== l || (s !== 0 && h.nodeType !== 3) || (c = a + s),
                h.nodeType === 3 && (a += h.nodeValue.length),
                (S = h.firstChild) !== null;

            )
              (f = h), (h = S);
            for (;;) {
              if (h === e) break t;
              if (
                (f === n && ++g === o && (i = a),
                f === l && ++m === s && (c = a),
                (S = h.nextSibling) !== null)
              )
                break;
              (h = f), (f = h.parentNode);
            }
            h = S;
          }
          n = i === -1 || c === -1 ? null : { start: i, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    Fl = { focusedElem: e, selectionRange: n }, co = !1, we = t;
    we !== null;

  )
    if (((t = we), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (we = e);
    else
      for (; we !== null; ) {
        t = we;
        try {
          var b = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (b !== null) {
                  var M = b.memoizedProps,
                    k = b.memoizedState,
                    d = t.stateNode,
                    u = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? M : zt(t.type, M),
                      k
                    );
                  d.__reactInternalSnapshotBeforeUpdate = u;
                }
                break;
              case 3:
                var x = t.stateNode.containerInfo;
                x.nodeType === 1
                  ? (x.textContent = "")
                  : x.nodeType === 9 &&
                    x.documentElement &&
                    x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(oe(163));
            }
        } catch (_) {
          qe(t, t.return, _);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (we = e);
          break;
        }
        we = t.return;
      }
  return (b = cc), (cc = !1), b;
}
function Jr(e, t, n) {
  var s = t.updateQueue;
  if (((s = s !== null ? s.lastEffect : null), s !== null)) {
    var o = (s = s.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && oa(t, n, l);
      }
      o = o.next;
    } while (o !== s);
  }
}
function Lo(e, t) {
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
function la(e) {
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
function yu(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), yu(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Kt], delete t[fs], delete t[Wl], delete t[lm], delete t[am])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function vu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function dc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || vu(e.return)) return null;
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
function aa(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = po));
  else if (s !== 4 && ((e = e.child), e !== null))
    for (aa(e, t, n), e = e.sibling; e !== null; ) aa(e, t, n), (e = e.sibling);
}
function ia(e, t, n) {
  var s = e.tag;
  if (s === 5 || s === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (s !== 4 && ((e = e.child), e !== null))
    for (ia(e, t, n), e = e.sibling; e !== null; ) ia(e, t, n), (e = e.sibling);
}
var rt = null,
  Gt = !1;
function hn(e, t, n) {
  for (n = n.child; n !== null; ) wu(e, t, n), (n = n.sibling);
}
function wu(e, t, n) {
  if (Jt && typeof Jt.onCommitFiberUnmount == "function")
    try {
      Jt.onCommitFiberUnmount(Eo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      it || fr(n, t);
    case 6:
      var s = rt,
        o = Gt;
      (rt = null),
        hn(e, t, n),
        (rt = s),
        (Gt = o),
        rt !== null &&
          (Gt
            ? ((e = rt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : rt.removeChild(n.stateNode));
      break;
    case 18:
      rt !== null &&
        (Gt
          ? ((e = rt),
            (n = n.stateNode),
            e.nodeType === 8
              ? ul(e.parentNode, n)
              : e.nodeType === 1 && ul(e, n),
            as(e))
          : ul(rt, n.stateNode));
      break;
    case 4:
      (s = rt),
        (o = Gt),
        (rt = n.stateNode.containerInfo),
        (Gt = !0),
        hn(e, t, n),
        (rt = s),
        (Gt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !it &&
        ((s = n.updateQueue), s !== null && ((s = s.lastEffect), s !== null))
      ) {
        o = s = s.next;
        do {
          var l = o,
            a = l.destroy;
          (l = l.tag),
            a !== void 0 && (l & 2 || l & 4) && oa(n, t, a),
            (o = o.next);
        } while (o !== s);
      }
      hn(e, t, n);
      break;
    case 1:
      if (
        !it &&
        (fr(n, t),
        (s = n.stateNode),
        typeof s.componentWillUnmount == "function")
      )
        try {
          (s.props = n.memoizedProps),
            (s.state = n.memoizedState),
            s.componentWillUnmount();
        } catch (i) {
          qe(n, t, i);
        }
      hn(e, t, n);
      break;
    case 21:
      hn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((it = (s = it) || n.memoizedState !== null), hn(e, t, n), (it = s))
        : hn(e, t, n);
      break;
    default:
      hn(e, t, n);
  }
}
function uc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new jm()),
      t.forEach(function (s) {
        var o = Tm.bind(null, e, s);
        n.has(s) || (n.add(s), s.then(o, o));
      });
  }
}
function Bt(e, t) {
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
              (rt = i.stateNode), (Gt = !1);
              break e;
            case 3:
              (rt = i.stateNode.containerInfo), (Gt = !0);
              break e;
            case 4:
              (rt = i.stateNode.containerInfo), (Gt = !0);
              break e;
          }
          i = i.return;
        }
        if (rt === null) throw Error(oe(160));
        wu(l, a, o), (rt = null), (Gt = !1);
        var c = o.alternate;
        c !== null && (c.return = null), (o.return = null);
      } catch (g) {
        qe(o, t, g);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) bu(t, e), (t = t.sibling);
}
function bu(e, t) {
  var n = e.alternate,
    s = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Bt(t, e), Yt(e), s & 4)) {
        try {
          Jr(3, e, e.return), Lo(3, e);
        } catch (M) {
          qe(e, e.return, M);
        }
        try {
          Jr(5, e, e.return);
        } catch (M) {
          qe(e, e.return, M);
        }
      }
      break;
    case 1:
      Bt(t, e), Yt(e), s & 512 && n !== null && fr(n, n.return);
      break;
    case 5:
      if (
        (Bt(t, e),
        Yt(e),
        s & 512 && n !== null && fr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          rs(o, "");
        } catch (M) {
          qe(e, e.return, M);
        }
      }
      if (s & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          a = n !== null ? n.memoizedProps : l,
          i = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            i === "input" && l.type === "radio" && l.name != null && Fc(o, l),
              Pl(i, a);
            var g = Pl(i, l);
            for (a = 0; a < c.length; a += 2) {
              var m = c[a],
                h = c[a + 1];
              m === "style"
                ? Yc(o, h)
                : m === "dangerouslySetInnerHTML"
                ? Wc(o, h)
                : m === "children"
                ? rs(o, h)
                : wa(o, m, h, g);
            }
            switch (i) {
              case "input":
                Dl(o, l);
                break;
              case "textarea":
                Hc(o, l);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var S = l.value;
                S != null
                  ? hr(o, !!l.multiple, S, !1)
                  : f !== !!l.multiple &&
                    (l.defaultValue != null
                      ? hr(o, !!l.multiple, l.defaultValue, !0)
                      : hr(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[fs] = l;
          } catch (M) {
            qe(e, e.return, M);
          }
      }
      break;
    case 6:
      if ((Bt(t, e), Yt(e), s & 4)) {
        if (e.stateNode === null) throw Error(oe(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (M) {
          qe(e, e.return, M);
        }
      }
      break;
    case 3:
      if (
        (Bt(t, e), Yt(e), s & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          as(t.containerInfo);
        } catch (M) {
          qe(e, e.return, M);
        }
      break;
    case 4:
      Bt(t, e), Yt(e);
      break;
    case 13:
      Bt(t, e),
        Yt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Za = Qe())),
        s & 4 && uc(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((it = (g = it) || m), Bt(t, e), (it = g)) : Bt(t, e),
        Yt(e),
        s & 8192)
      ) {
        if (
          ((g = e.memoizedState !== null),
          (e.stateNode.isHidden = g) && !m && e.mode & 1)
        )
          for (we = e, m = e.child; m !== null; ) {
            for (h = we = m; we !== null; ) {
              switch (((f = we), (S = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Jr(4, f, f.return);
                  break;
                case 1:
                  fr(f, f.return);
                  var b = f.stateNode;
                  if (typeof b.componentWillUnmount == "function") {
                    (s = f), (n = f.return);
                    try {
                      (t = s),
                        (b.props = t.memoizedProps),
                        (b.state = t.memoizedState),
                        b.componentWillUnmount();
                    } catch (M) {
                      qe(s, n, M);
                    }
                  }
                  break;
                case 5:
                  fr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    pc(h);
                    continue;
                  }
              }
              S !== null ? ((S.return = f), (we = S)) : pc(h);
            }
            m = m.sibling;
          }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                (o = h.stateNode),
                  g
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
                      (i.style.display = qc("display", a)));
              } catch (M) {
                qe(e, e.return, M);
              }
            }
          } else if (h.tag === 6) {
            if (m === null)
              try {
                h.stateNode.nodeValue = g ? "" : h.memoizedProps;
              } catch (M) {
                qe(e, e.return, M);
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
            m === h && (m = null), (h = h.return);
          }
          m === h && (m = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Bt(t, e), Yt(e), s & 4 && uc(e);
      break;
    case 21:
      break;
    default:
      Bt(t, e), Yt(e);
  }
}
function Yt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (vu(n)) {
            var s = n;
            break e;
          }
          n = n.return;
        }
        throw Error(oe(160));
      }
      switch (s.tag) {
        case 5:
          var o = s.stateNode;
          s.flags & 32 && (rs(o, ""), (s.flags &= -33));
          var l = dc(e);
          ia(e, l, o);
          break;
        case 3:
        case 4:
          var a = s.stateNode.containerInfo,
            i = dc(e);
          aa(e, i, a);
          break;
        default:
          throw Error(oe(161));
      }
    } catch (c) {
      qe(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Cm(e, t, n) {
  (we = e), Nu(e);
}
function Nu(e, t, n) {
  for (var s = (e.mode & 1) !== 0; we !== null; ) {
    var o = we,
      l = o.child;
    if (o.tag === 22 && s) {
      var a = o.memoizedState !== null || Bs;
      if (!a) {
        var i = o.alternate,
          c = (i !== null && i.memoizedState !== null) || it;
        i = Bs;
        var g = it;
        if (((Bs = a), (it = c) && !g))
          for (we = o; we !== null; )
            (a = we),
              (c = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? mc(o)
                : c !== null
                ? ((c.return = a), (we = c))
                : mc(o);
        for (; l !== null; ) (we = l), Nu(l), (l = l.sibling);
        (we = o), (Bs = i), (it = g);
      }
      fc(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (we = l)) : fc(e);
  }
}
function fc(e) {
  for (; we !== null; ) {
    var t = we;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              it || Lo(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !it)
                if (n === null) s.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : zt(t.type, n.memoizedProps);
                  s.componentDidUpdate(
                    o,
                    n.memoizedState,
                    s.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && Qi(t, l, s);
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
                Qi(t, a, n);
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
                var g = t.alternate;
                if (g !== null) {
                  var m = g.memoizedState;
                  if (m !== null) {
                    var h = m.dehydrated;
                    h !== null && as(h);
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
              throw Error(oe(163));
          }
        it || (t.flags & 512 && la(t));
      } catch (f) {
        qe(t, t.return, f);
      }
    }
    if (t === e) {
      we = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (we = n);
      break;
    }
    we = t.return;
  }
}
function pc(e) {
  for (; we !== null; ) {
    var t = we;
    if (t === e) {
      we = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (we = n);
      break;
    }
    we = t.return;
  }
}
function mc(e) {
  for (; we !== null; ) {
    var t = we;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Lo(4, t);
          } catch (c) {
            qe(t, n, c);
          }
          break;
        case 1:
          var s = t.stateNode;
          if (typeof s.componentDidMount == "function") {
            var o = t.return;
            try {
              s.componentDidMount();
            } catch (c) {
              qe(t, o, c);
            }
          }
          var l = t.return;
          try {
            la(t);
          } catch (c) {
            qe(t, l, c);
          }
          break;
        case 5:
          var a = t.return;
          try {
            la(t);
          } catch (c) {
            qe(t, a, c);
          }
      }
    } catch (c) {
      qe(t, t.return, c);
    }
    if (t === e) {
      we = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      (i.return = t.return), (we = i);
      break;
    }
    we = t.return;
  }
}
var km = Math.ceil,
  So = pn.ReactCurrentDispatcher,
  Ka = pn.ReactCurrentOwner,
  Rt = pn.ReactCurrentBatchConfig,
  Re = 0,
  tt = null,
  Ke = null,
  st = 0,
  St = 0,
  pr = Tn(0),
  Ze = 0,
  ys = null,
  Vn = 0,
  Uo = 0,
  Ja = 0,
  Zr = null,
  xt = null,
  Za = 0,
  Dr = 1 / 0,
  nn = null,
  Co = !1,
  ca = null,
  Dn = null,
  zs = !1,
  bn = null,
  ko = 0,
  es = 0,
  da = null,
  eo = -1,
  to = 0;
function ut() {
  return Re & 6 ? Qe() : eo !== -1 ? eo : (eo = Qe());
}
function _n(e) {
  return e.mode & 1
    ? Re & 2 && st !== 0
      ? st & -st
      : cm.transition !== null
      ? (to === 0 && (to = ld()), to)
      : ((e = Oe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : pd(e.type))),
        e)
    : 1;
}
function Vt(e, t, n, s) {
  if (50 < es) throw ((es = 0), (da = null), Error(oe(185)));
  ws(e, n, s),
    (!(Re & 2) || e !== tt) &&
      (e === tt && (!(Re & 2) && (Uo |= n), Ze === 4 && vn(e, st)),
      Nt(e, s),
      n === 1 && Re === 0 && !(t.mode & 1) && ((Dr = Qe() + 500), Ao && Rn()));
}
function Nt(e, t) {
  var n = e.callbackNode;
  cp(e, t);
  var s = io(e, e === tt ? st : 0);
  if (s === 0)
    n !== null && ji(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = s & -s), e.callbackPriority !== t)) {
    if ((n != null && ji(n), t === 1))
      e.tag === 0 ? im(hc.bind(null, e)) : Pd(hc.bind(null, e)),
        sm(function () {
          !(Re & 6) && Rn();
        }),
        (n = null);
    else {
      switch (ad(s)) {
        case 1:
          n = Ca;
          break;
        case 4:
          n = sd;
          break;
        case 16:
          n = ao;
          break;
        case 536870912:
          n = od;
          break;
        default:
          n = ao;
      }
      n = Eu(n, ju.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ju(e, t) {
  if (((eo = -1), (to = 0), Re & 6)) throw Error(oe(327));
  var n = e.callbackNode;
  if (wr() && e.callbackNode !== n) return null;
  var s = io(e, e === tt ? st : 0);
  if (s === 0) return null;
  if (s & 30 || s & e.expiredLanes || t) t = Do(e, s);
  else {
    t = s;
    var o = Re;
    Re |= 2;
    var l = Cu();
    (tt !== e || st !== t) && ((nn = null), (Dr = Qe() + 500), Bn(e, t));
    do
      try {
        Mm();
        break;
      } catch (i) {
        Su(e, i);
      }
    while (!0);
    La(),
      (So.current = l),
      (Re = o),
      Ke !== null ? (t = 0) : ((tt = null), (st = 0), (t = Ze));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Ol(e)), o !== 0 && ((s = o), (t = ua(e, o)))), t === 1)
    )
      throw ((n = ys), Bn(e, 0), vn(e, s), Nt(e, Qe()), n);
    if (t === 6) vn(e, s);
    else {
      if (
        ((o = e.current.alternate),
        !(s & 30) &&
          !Dm(o) &&
          ((t = Do(e, s)),
          t === 2 && ((l = Ol(e)), l !== 0 && ((s = l), (t = ua(e, l)))),
          t === 1))
      )
        throw ((n = ys), Bn(e, 0), vn(e, s), Nt(e, Qe()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = s), t)) {
        case 0:
        case 1:
          throw Error(oe(345));
        case 2:
          $n(e, xt, nn);
          break;
        case 3:
          if (
            (vn(e, s), (s & 130023424) === s && ((t = Za + 500 - Qe()), 10 < t))
          ) {
            if (io(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & s) !== s)) {
              ut(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Vl($n.bind(null, e, xt, nn), t);
            break;
          }
          $n(e, xt, nn);
          break;
        case 4:
          if ((vn(e, s), (s & 4194240) === s)) break;
          for (t = e.eventTimes, o = -1; 0 < s; ) {
            var a = 31 - Ht(s);
            (l = 1 << a), (a = t[a]), a > o && (o = a), (s &= ~l);
          }
          if (
            ((s = o),
            (s = Qe() - s),
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
                : 1960 * km(s / 1960)) - s),
            10 < s)
          ) {
            e.timeoutHandle = Vl($n.bind(null, e, xt, nn), s);
            break;
          }
          $n(e, xt, nn);
          break;
        case 5:
          $n(e, xt, nn);
          break;
        default:
          throw Error(oe(329));
      }
    }
  }
  return Nt(e, Qe()), e.callbackNode === n ? ju.bind(null, e) : null;
}
function ua(e, t) {
  var n = Zr;
  return (
    e.current.memoizedState.isDehydrated && (Bn(e, t).flags |= 256),
    (e = Do(e, t)),
    e !== 2 && ((t = xt), (xt = n), t !== null && fa(t)),
    e
  );
}
function fa(e) {
  xt === null ? (xt = e) : xt.push.apply(xt, e);
}
function Dm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var s = 0; s < n.length; s++) {
          var o = n[s],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!Wt(l(), o)) return !1;
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
function vn(e, t) {
  for (
    t &= ~Ja,
      t &= ~Uo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ht(t),
      s = 1 << n;
    (e[n] = -1), (t &= ~s);
  }
}
function hc(e) {
  if (Re & 6) throw Error(oe(327));
  wr();
  var t = io(e, 0);
  if (!(t & 1)) return Nt(e, Qe()), null;
  var n = Do(e, t);
  if (e.tag !== 0 && n === 2) {
    var s = Ol(e);
    s !== 0 && ((t = s), (n = ua(e, s)));
  }
  if (n === 1) throw ((n = ys), Bn(e, 0), vn(e, t), Nt(e, Qe()), n);
  if (n === 6) throw Error(oe(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    $n(e, xt, nn),
    Nt(e, Qe()),
    null
  );
}
function ei(e, t) {
  var n = Re;
  Re |= 1;
  try {
    return e(t);
  } finally {
    (Re = n), Re === 0 && ((Dr = Qe() + 500), Ao && Rn());
  }
}
function Wn(e) {
  bn !== null && bn.tag === 0 && !(Re & 6) && wr();
  var t = Re;
  Re |= 1;
  var n = Rt.transition,
    s = Oe;
  try {
    if (((Rt.transition = null), (Oe = 1), e)) return e();
  } finally {
    (Oe = s), (Rt.transition = n), (Re = t), !(Re & 6) && Rn();
  }
}
function ti() {
  (St = pr.current), Be(pr);
}
function Bn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), rm(n)), Ke !== null))
    for (n = Ke.return; n !== null; ) {
      var s = n;
      switch ((Aa(s), s.tag)) {
        case 1:
          (s = s.type.childContextTypes), s != null && mo();
          break;
        case 3:
          Cr(), Be(wt), Be(ct), Ha();
          break;
        case 5:
          Fa(s);
          break;
        case 4:
          Cr();
          break;
        case 13:
          Be(Fe);
          break;
        case 19:
          Be(Fe);
          break;
        case 10:
          Ua(s.type._context);
          break;
        case 22:
        case 23:
          ti();
      }
      n = n.return;
    }
  if (
    ((tt = e),
    (Ke = e = Mn(e.current, null)),
    (st = St = t),
    (Ze = 0),
    (ys = null),
    (Ja = Uo = Vn = 0),
    (xt = Zr = null),
    Ln !== null)
  ) {
    for (t = 0; t < Ln.length; t++)
      if (((n = Ln[t]), (s = n.interleaved), s !== null)) {
        n.interleaved = null;
        var o = s.next,
          l = n.pending;
        if (l !== null) {
          var a = l.next;
          (l.next = o), (s.next = a);
        }
        n.pending = s;
      }
    Ln = null;
  }
  return e;
}
function Su(e, t) {
  do {
    var n = Ke;
    try {
      if ((La(), (Ks.current = jo), No)) {
        for (var s = Ve.memoizedState; s !== null; ) {
          var o = s.queue;
          o !== null && (o.pending = null), (s = s.next);
        }
        No = !1;
      }
      if (
        ((Hn = 0),
        (et = Je = Ve = null),
        (Kr = !1),
        (hs = 0),
        (Ka.current = null),
        n === null || n.return === null)
      ) {
        (Ze = 1), (ys = t), (Ke = null);
        break;
      }
      e: {
        var l = e,
          a = n.return,
          i = n,
          c = t;
        if (
          ((t = st),
          (i.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var g = c,
            m = i,
            h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var f = m.alternate;
            f
              ? ((m.updateQueue = f.updateQueue),
                (m.memoizedState = f.memoizedState),
                (m.lanes = f.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var S = nc(a);
          if (S !== null) {
            (S.flags &= -257),
              rc(S, a, i, l, t),
              S.mode & 1 && tc(l, g, t),
              (t = S),
              (c = g);
            var b = t.updateQueue;
            if (b === null) {
              var M = new Set();
              M.add(c), (t.updateQueue = M);
            } else b.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              tc(l, g, t), ni();
              break e;
            }
            c = Error(oe(426));
          }
        } else if (ze && i.mode & 1) {
          var k = nc(a);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              rc(k, a, i, l, t),
              $a(kr(c, i));
            break e;
          }
        }
        (l = c = kr(c, i)),
          Ze !== 4 && (Ze = 2),
          Zr === null ? (Zr = [l]) : Zr.push(l),
          (l = a);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var d = au(l, c, t);
              Xi(l, d);
              break e;
            case 1:
              i = c;
              var u = l.type,
                x = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof u.getDerivedStateFromError == "function" ||
                  (x !== null &&
                    typeof x.componentDidCatch == "function" &&
                    (Dn === null || !Dn.has(x))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var _ = iu(l, i, t);
                Xi(l, _);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Du(n);
    } catch (A) {
      (t = A), Ke === n && n !== null && (Ke = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Cu() {
  var e = So.current;
  return (So.current = jo), e === null ? jo : e;
}
function ni() {
  (Ze === 0 || Ze === 3 || Ze === 2) && (Ze = 4),
    tt === null || (!(Vn & 268435455) && !(Uo & 268435455)) || vn(tt, st);
}
function Do(e, t) {
  var n = Re;
  Re |= 2;
  var s = Cu();
  (tt !== e || st !== t) && ((nn = null), Bn(e, t));
  do
    try {
      _m();
      break;
    } catch (o) {
      Su(e, o);
    }
  while (!0);
  if ((La(), (Re = n), (So.current = s), Ke !== null)) throw Error(oe(261));
  return (tt = null), (st = 0), Ze;
}
function _m() {
  for (; Ke !== null; ) ku(Ke);
}
function Mm() {
  for (; Ke !== null && !ep(); ) ku(Ke);
}
function ku(e) {
  var t = Mu(e.alternate, e, St);
  (e.memoizedProps = e.pendingProps),
    t === null ? Du(e) : (Ke = t),
    (Ka.current = null);
}
function Du(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Nm(n, t)), n !== null)) {
        (n.flags &= 32767), (Ke = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ze = 6), (Ke = null);
        return;
      }
    } else if (((n = bm(n, t, St)), n !== null)) {
      Ke = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ke = t;
      return;
    }
    Ke = t = e;
  } while (t !== null);
  Ze === 0 && (Ze = 5);
}
function $n(e, t, n) {
  var s = Oe,
    o = Rt.transition;
  try {
    (Rt.transition = null), (Oe = 1), Em(e, t, n, s);
  } finally {
    (Rt.transition = o), (Oe = s);
  }
  return null;
}
function Em(e, t, n, s) {
  do wr();
  while (bn !== null);
  if (Re & 6) throw Error(oe(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(oe(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (dp(e, l),
    e === tt && ((Ke = tt = null), (st = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      zs ||
      ((zs = !0),
      Eu(ao, function () {
        return wr(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = Rt.transition), (Rt.transition = null);
    var a = Oe;
    Oe = 1;
    var i = Re;
    (Re |= 4),
      (Ka.current = null),
      Sm(e, n),
      bu(n, e),
      Qp(Fl),
      (co = !!Gl),
      (Fl = Gl = null),
      (e.current = n),
      Cm(n),
      tp(),
      (Re = i),
      (Oe = a),
      (Rt.transition = l);
  } else e.current = n;
  if (
    (zs && ((zs = !1), (bn = e), (ko = o)),
    (l = e.pendingLanes),
    l === 0 && (Dn = null),
    sp(n.stateNode),
    Nt(e, Qe()),
    t !== null)
  )
    for (s = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), s(o.value, { componentStack: o.stack, digest: o.digest });
  if (Co) throw ((Co = !1), (e = ca), (ca = null), e);
  return (
    ko & 1 && e.tag !== 0 && wr(),
    (l = e.pendingLanes),
    l & 1 ? (e === da ? es++ : ((es = 0), (da = e))) : (es = 0),
    Rn(),
    null
  );
}
function wr() {
  if (bn !== null) {
    var e = ad(ko),
      t = Rt.transition,
      n = Oe;
    try {
      if (((Rt.transition = null), (Oe = 16 > e ? 16 : e), bn === null))
        var s = !1;
      else {
        if (((e = bn), (bn = null), (ko = 0), Re & 6)) throw Error(oe(331));
        var o = Re;
        for (Re |= 4, we = e.current; we !== null; ) {
          var l = we,
            a = l.child;
          if (we.flags & 16) {
            var i = l.deletions;
            if (i !== null) {
              for (var c = 0; c < i.length; c++) {
                var g = i[c];
                for (we = g; we !== null; ) {
                  var m = we;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jr(8, m, l);
                  }
                  var h = m.child;
                  if (h !== null) (h.return = m), (we = h);
                  else
                    for (; we !== null; ) {
                      m = we;
                      var f = m.sibling,
                        S = m.return;
                      if ((yu(m), m === g)) {
                        we = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = S), (we = f);
                        break;
                      }
                      we = S;
                    }
                }
              }
              var b = l.alternate;
              if (b !== null) {
                var M = b.child;
                if (M !== null) {
                  b.child = null;
                  do {
                    var k = M.sibling;
                    (M.sibling = null), (M = k);
                  } while (M !== null);
                }
              }
              we = l;
            }
          }
          if (l.subtreeFlags & 2064 && a !== null) (a.return = l), (we = a);
          else
            e: for (; we !== null; ) {
              if (((l = we), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Jr(9, l, l.return);
                }
              var d = l.sibling;
              if (d !== null) {
                (d.return = l.return), (we = d);
                break e;
              }
              we = l.return;
            }
        }
        var u = e.current;
        for (we = u; we !== null; ) {
          a = we;
          var x = a.child;
          if (a.subtreeFlags & 2064 && x !== null) (x.return = a), (we = x);
          else
            e: for (a = u; we !== null; ) {
              if (((i = we), i.flags & 2048))
                try {
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lo(9, i);
                  }
                } catch (A) {
                  qe(i, i.return, A);
                }
              if (i === a) {
                we = null;
                break e;
              }
              var _ = i.sibling;
              if (_ !== null) {
                (_.return = i.return), (we = _);
                break e;
              }
              we = i.return;
            }
        }
        if (
          ((Re = o), Rn(), Jt && typeof Jt.onPostCommitFiberRoot == "function")
        )
          try {
            Jt.onPostCommitFiberRoot(Eo, e);
          } catch {}
        s = !0;
      }
      return s;
    } finally {
      (Oe = n), (Rt.transition = t);
    }
  }
  return !1;
}
function gc(e, t, n) {
  (t = kr(n, t)),
    (t = au(e, t, 1)),
    (e = kn(e, t, 1)),
    (t = ut()),
    e !== null && (ws(e, 1, t), Nt(e, t));
}
function qe(e, t, n) {
  if (e.tag === 3) gc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        gc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof s.componentDidCatch == "function" &&
            (Dn === null || !Dn.has(s)))
        ) {
          (e = kr(n, e)),
            (e = iu(t, e, 1)),
            (t = kn(t, e, 1)),
            (e = ut()),
            t !== null && (ws(t, 1, e), Nt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Im(e, t, n) {
  var s = e.pingCache;
  s !== null && s.delete(t),
    (t = ut()),
    (e.pingedLanes |= e.suspendedLanes & n),
    tt === e &&
      (st & n) === n &&
      (Ze === 4 || (Ze === 3 && (st & 130023424) === st && 500 > Qe() - Za)
        ? Bn(e, 0)
        : (Ja |= n)),
    Nt(e, t);
}
function _u(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Is), (Is <<= 1), !(Is & 130023424) && (Is = 4194304))
      : (t = 1));
  var n = ut();
  (e = un(e, t)), e !== null && (ws(e, t, n), Nt(e, n));
}
function Pm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), _u(e, n);
}
function Tm(e, t) {
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
      throw Error(oe(314));
  }
  s !== null && s.delete(t), _u(e, n);
}
var Mu;
Mu = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || wt.current) yt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (yt = !1), wm(e, t, n);
      yt = !!(e.flags & 131072);
    }
  else (yt = !1), ze && t.flags & 1048576 && Td(t, xo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var s = t.type;
      Zs(e, t), (e = t.pendingProps);
      var o = Nr(t, ct.current);
      vr(t, n), (o = Wa(null, t, s, e, o, n));
      var l = qa();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            bt(s) ? ((l = !0), ho(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            za(t),
            (o.updater = Oo),
            (t.stateNode = o),
            (o._reactInternals = t),
            Jl(t, s, e, n),
            (t = ta(null, t, s, !0, l, n)))
          : ((t.tag = 0), ze && l && Ra(t), dt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      s = t.elementType;
      e: {
        switch (
          (Zs(e, t),
          (e = t.pendingProps),
          (o = s._init),
          (s = o(s._payload)),
          (t.type = s),
          (o = t.tag = Am(s)),
          (e = zt(s, e)),
          o)
        ) {
          case 0:
            t = ea(null, t, s, e, n);
            break e;
          case 1:
            t = lc(null, t, s, e, n);
            break e;
          case 11:
            t = sc(null, t, s, e, n);
            break e;
          case 14:
            t = oc(null, t, s, zt(s.type, e), n);
            break e;
        }
        throw Error(oe(306, s, ""));
      }
      return t;
    case 0:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : zt(s, o)),
        ea(e, t, s, o, n)
      );
    case 1:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : zt(s, o)),
        lc(e, t, s, o, n)
      );
    case 3:
      e: {
        if ((fu(t), e === null)) throw Error(oe(387));
        (s = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          Ud(e, t),
          wo(t, s, null, n);
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
            (o = kr(Error(oe(423)), t)), (t = ac(e, t, s, n, o));
            break e;
          } else if (s !== o) {
            (o = kr(Error(oe(424)), t)), (t = ac(e, t, s, n, o));
            break e;
          } else
            for (
              Ct = Cn(t.stateNode.containerInfo.firstChild),
                kt = t,
                ze = !0,
                Ft = null,
                n = Od(t, null, s, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((jr(), s === o)) {
            t = fn(e, t, n);
            break e;
          }
          dt(e, t, s, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Bd(t),
        e === null && Xl(t),
        (s = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (a = o.children),
        Hl(s, o) ? (a = null) : l !== null && Hl(s, l) && (t.flags |= 32),
        uu(e, t),
        dt(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Xl(t), null;
    case 13:
      return pu(e, t, n);
    case 4:
      return (
        Ga(t, t.stateNode.containerInfo),
        (s = t.pendingProps),
        e === null ? (t.child = Sr(t, null, s, n)) : dt(e, t, s, n),
        t.child
      );
    case 11:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : zt(s, o)),
        sc(e, t, s, o, n)
      );
    case 7:
      return dt(e, t, t.pendingProps, n), t.child;
    case 8:
      return dt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return dt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((s = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (a = o.value),
          Le(yo, s._currentValue),
          (s._currentValue = a),
          l !== null)
        )
          if (Wt(l.value, a)) {
            if (l.children === o.children && !wt.current) {
              t = fn(e, t, n);
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
                      (c = an(-1, n & -n)), (c.tag = 2);
                      var g = l.updateQueue;
                      if (g !== null) {
                        g = g.shared;
                        var m = g.pending;
                        m === null
                          ? (c.next = c)
                          : ((c.next = m.next), (m.next = c)),
                          (g.pending = c);
                      }
                    }
                    (l.lanes |= n),
                      (c = l.alternate),
                      c !== null && (c.lanes |= n),
                      Ql(l.return, n, t),
                      (i.lanes |= n);
                    break;
                  }
                  c = c.next;
                }
              } else if (l.tag === 10) a = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((a = l.return), a === null)) throw Error(oe(341));
                (a.lanes |= n),
                  (i = a.alternate),
                  i !== null && (i.lanes |= n),
                  Ql(a, n, t),
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
        dt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (s = t.pendingProps.children),
        vr(t, n),
        (o = $t(o)),
        (s = s(o)),
        (t.flags |= 1),
        dt(e, t, s, n),
        t.child
      );
    case 14:
      return (
        (s = t.type),
        (o = zt(s, t.pendingProps)),
        (o = zt(s.type, o)),
        oc(e, t, s, o, n)
      );
    case 15:
      return cu(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (s = t.type),
        (o = t.pendingProps),
        (o = t.elementType === s ? o : zt(s, o)),
        Zs(e, t),
        (t.tag = 1),
        bt(s) ? ((e = !0), ho(t)) : (e = !1),
        vr(t, n),
        lu(t, s, o),
        Jl(t, s, o, n),
        ta(null, t, s, !0, e, n)
      );
    case 19:
      return mu(e, t, n);
    case 22:
      return du(e, t, n);
  }
  throw Error(oe(156, t.tag));
};
function Eu(e, t) {
  return rd(e, t);
}
function Rm(e, t, n, s) {
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
function Tt(e, t, n, s) {
  return new Rm(e, t, n, s);
}
function ri(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Am(e) {
  if (typeof e == "function") return ri(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Na)) return 11;
    if (e === ja) return 14;
  }
  return 2;
}
function Mn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Tt(e.tag, t, e.key, e.mode)),
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
function no(e, t, n, s, o, l) {
  var a = 2;
  if (((s = e), typeof e == "function")) ri(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case rr:
        return zn(n.children, o, l, t);
      case ba:
        (a = 8), (o |= 8);
        break;
      case Nl:
        return (
          (e = Tt(12, n, t, o | 2)), (e.elementType = Nl), (e.lanes = l), e
        );
      case jl:
        return (e = Tt(13, n, t, o)), (e.elementType = jl), (e.lanes = l), e;
      case Sl:
        return (e = Tt(19, n, t, o)), (e.elementType = Sl), (e.lanes = l), e;
      case Bc:
        return Bo(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Lc:
              a = 10;
              break e;
            case Uc:
              a = 9;
              break e;
            case Na:
              a = 11;
              break e;
            case ja:
              a = 14;
              break e;
            case gn:
              (a = 16), (s = null);
              break e;
          }
        throw Error(oe(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Tt(a, n, t, o)), (t.elementType = e), (t.type = s), (t.lanes = l), t
  );
}
function zn(e, t, n, s) {
  return (e = Tt(7, e, s, t)), (e.lanes = n), e;
}
function Bo(e, t, n, s) {
  return (
    (e = Tt(22, e, s, t)),
    (e.elementType = Bc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function vl(e, t, n) {
  return (e = Tt(6, e, null, t)), (e.lanes = n), e;
}
function wl(e, t, n) {
  return (
    (t = Tt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function $m(e, t, n, s, o) {
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
    (this.eventTimes = el(0)),
    (this.expirationTimes = el(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = el(0)),
    (this.identifierPrefix = s),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function si(e, t, n, s, o, l, a, i, c) {
  return (
    (e = new $m(e, t, n, i, c)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Tt(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: s,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    za(l),
    e
  );
}
function Om(e, t, n) {
  var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: nr,
    key: s == null ? null : "" + s,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Iu(e) {
  if (!e) return In;
  e = e._reactInternals;
  e: {
    if (Yn(e) !== e || e.tag !== 1) throw Error(oe(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (bt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(oe(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (bt(n)) return Id(e, n, t);
  }
  return t;
}
function Pu(e, t, n, s, o, l, a, i, c) {
  return (
    (e = si(n, s, !0, e, o, l, a, i, c)),
    (e.context = Iu(null)),
    (n = e.current),
    (s = ut()),
    (o = _n(n)),
    (l = an(s, o)),
    (l.callback = t ?? null),
    kn(n, l, o),
    (e.current.lanes = o),
    ws(e, o, s),
    Nt(e, s),
    e
  );
}
function zo(e, t, n, s) {
  var o = t.current,
    l = ut(),
    a = _n(o);
  return (
    (n = Iu(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = an(l, a)),
    (t.payload = { element: e }),
    (s = s === void 0 ? null : s),
    s !== null && (t.callback = s),
    (e = kn(o, t, a)),
    e !== null && (Vt(e, o, a, l), Qs(e, o, a)),
    a
  );
}
function _o(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function xc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function oi(e, t) {
  xc(e, t), (e = e.alternate) && xc(e, t);
}
function Lm() {
  return null;
}
var Tu =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function li(e) {
  this._internalRoot = e;
}
Go.prototype.render = li.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(oe(409));
  zo(e, t, null, null);
};
Go.prototype.unmount = li.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Wn(function () {
      zo(null, e, null, null);
    }),
      (t[dn] = null);
  }
};
function Go(e) {
  this._internalRoot = e;
}
Go.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = dd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < yn.length && t !== 0 && t < yn[n].priority; n++);
    yn.splice(n, 0, e), n === 0 && fd(e);
  }
};
function ai(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Fo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function yc() {}
function Um(e, t, n, s, o) {
  if (o) {
    if (typeof s == "function") {
      var l = s;
      s = function () {
        var g = _o(a);
        l.call(g);
      };
    }
    var a = Pu(t, s, e, 0, null, !1, !1, "", yc);
    return (
      (e._reactRootContainer = a),
      (e[dn] = a.current),
      ds(e.nodeType === 8 ? e.parentNode : e),
      Wn(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof s == "function") {
    var i = s;
    s = function () {
      var g = _o(c);
      i.call(g);
    };
  }
  var c = si(e, 0, !1, null, null, !1, !1, "", yc);
  return (
    (e._reactRootContainer = c),
    (e[dn] = c.current),
    ds(e.nodeType === 8 ? e.parentNode : e),
    Wn(function () {
      zo(t, c, n, s);
    }),
    c
  );
}
function Ho(e, t, n, s, o) {
  var l = n._reactRootContainer;
  if (l) {
    var a = l;
    if (typeof o == "function") {
      var i = o;
      o = function () {
        var c = _o(a);
        i.call(c);
      };
    }
    zo(t, a, e, o);
  } else a = Um(n, t, e, o, s);
  return _o(a);
}
id = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Hr(t.pendingLanes);
        n !== 0 &&
          (ka(t, n | 1), Nt(t, Qe()), !(Re & 6) && ((Dr = Qe() + 500), Rn()));
      }
      break;
    case 13:
      Wn(function () {
        var s = un(e, 1);
        if (s !== null) {
          var o = ut();
          Vt(s, e, 1, o);
        }
      }),
        oi(e, 1);
  }
};
Da = function (e) {
  if (e.tag === 13) {
    var t = un(e, 134217728);
    if (t !== null) {
      var n = ut();
      Vt(t, e, 134217728, n);
    }
    oi(e, 134217728);
  }
};
cd = function (e) {
  if (e.tag === 13) {
    var t = _n(e),
      n = un(e, t);
    if (n !== null) {
      var s = ut();
      Vt(n, e, t, s);
    }
    oi(e, t);
  }
};
dd = function () {
  return Oe;
};
ud = function (e, t) {
  var n = Oe;
  try {
    return (Oe = e), t();
  } finally {
    Oe = n;
  }
};
Rl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Dl(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = Ro(s);
            if (!o) throw Error(oe(90));
            Gc(s), Dl(s, o);
          }
        }
      }
      break;
    case "textarea":
      Hc(e, n);
      break;
    case "select":
      (t = n.value), t != null && hr(e, !!n.multiple, t, !1);
  }
};
Kc = ei;
Jc = Wn;
var Bm = { usingClientEntryPoint: !1, Events: [Ns, ar, Ro, Xc, Qc, ei] },
  zr = {
    findFiberByHostInstance: On,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  zm = {
    bundleType: zr.bundleType,
    version: zr.version,
    rendererPackageName: zr.rendererPackageName,
    rendererConfig: zr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: pn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = td(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: zr.findFiberByHostInstance || Lm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Gs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Gs.isDisabled && Gs.supportsFiber)
    try {
      (Eo = Gs.inject(zm)), (Jt = Gs);
    } catch {}
}
_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bm;
_t.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ai(t)) throw Error(oe(200));
  return Om(e, t, null, n);
};
_t.createRoot = function (e, t) {
  if (!ai(e)) throw Error(oe(299));
  var n = !1,
    s = "",
    o = Tu;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = si(e, 1, !1, null, null, n, !1, s, o)),
    (e[dn] = t.current),
    ds(e.nodeType === 8 ? e.parentNode : e),
    new li(t)
  );
};
_t.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(oe(188))
      : ((e = Object.keys(e).join(",")), Error(oe(268, e)));
  return (e = td(t)), (e = e === null ? null : e.stateNode), e;
};
_t.flushSync = function (e) {
  return Wn(e);
};
_t.hydrate = function (e, t, n) {
  if (!Fo(t)) throw Error(oe(200));
  return Ho(null, e, t, !0, n);
};
_t.hydrateRoot = function (e, t, n) {
  if (!ai(e)) throw Error(oe(405));
  var s = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    a = Tu;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Pu(t, null, e, 1, n ?? null, o, !1, l, a)),
    (e[dn] = t.current),
    ds(e),
    s)
  )
    for (e = 0; e < s.length; e++)
      (n = s[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Go(t);
};
_t.render = function (e, t, n) {
  if (!Fo(t)) throw Error(oe(200));
  return Ho(null, e, t, !1, n);
};
_t.unmountComponentAtNode = function (e) {
  if (!Fo(e)) throw Error(oe(40));
  return e._reactRootContainer
    ? (Wn(function () {
        Ho(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[dn] = null);
        });
      }),
      !0)
    : !1;
};
_t.unstable_batchedUpdates = ei;
_t.unstable_renderSubtreeIntoContainer = function (e, t, n, s) {
  if (!Fo(n)) throw Error(oe(200));
  if (e == null || e._reactInternals === void 0) throw Error(oe(38));
  return Ho(e, t, n, !1, s);
};
_t.version = "18.3.1-next-f1338f8080-20240426";
function Ru() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ru);
    } catch (e) {
      console.error(e);
    }
}
Ru(), (Rc.exports = _t);
var Gm = Rc.exports,
  Au,
  vc = Gm;
(Au = vc.createRoot), vc.hydrateRoot;
class Fm {
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
}
const ke = new Fm();
class Hm {
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
                contents: [],
                med_list: [],
              }),
              Array.isArray(l.sub_section) &&
                l.sub_section.forEach((c, g) => {
                  let m = {
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
                  o.contents[a].contents[g] = m;
                  let h = 0;
                  Array.isArray(c.shelf) &&
                    c.shelf.forEach((f, S) => {
                      let b = {
                        GUID: f.GUID,
                        Master_GUID: f.Master_GUID,
                        name: `層架_${S}`,
                        class: 3,
                        gird_position: f.position,
                        serverName: f.serverName || "",
                        serverType: f.serverType || "",
                        device_type: f.device_type || "",
                        type: f.type,
                        contents: [],
                      };
                      if (
                        (b.serverName &&
                          (b.serverName = t.sys_ServerSetting.name),
                        b.serverType &&
                          (b.serverType = t.sys_ServerSetting.type),
                        f.type == "dispensing_shelves" || f.type == "shelf")
                      )
                        f.type == "shelf" && (b.type = "dispensing_shelves"),
                          Array.isArray(f.medMapBox) &&
                            f.medMapBox.forEach((k, d) => {
                              let u = {
                                  GUID: k.GUID,
                                  Master_GUID: k.Master_GUID,
                                  name: "藥盒",
                                  class: 4,
                                  gird_position: k.position,
                                  ip: k.ip_box,
                                  box_type: "",
                                  width: k.width,
                                  height: k.height,
                                  serverType: k.serverType,
                                  serverName: k.serverName,
                                  med_info: [],
                                  type: "med_box",
                                },
                                x = {},
                                _ = f.position.split(","),
                                A = k.position.split(",");
                              if (k.storage) {
                                switch (
                                  ((u.device_type = k.storage.DeviceType),
                                  (u.storage = k.storage),
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
                                (x.name = k.storage.Name),
                                  (x.code = k.storage.Code),
                                  (x.cht_name = k.storage.ChineseName),
                                  (x.SKDIACODE = k.storage.SKDIACODE),
                                  (x.device_type = k.storage.device_type),
                                  (x.qty = k.storage.StorageName),
                                  (x.stockCol = `${+_[0] + 1}`),
                                  (x.stockRow = ""),
                                  (x.stock = `${+A[1] + 1}`);
                              } else
                                (u.device_type = 10),
                                  (u.box_type = "2.9"),
                                  (x.name = ""),
                                  (x.code = ""),
                                  (x.cht_name = ""),
                                  (x.stockCol = `${+_[0] + 1}`),
                                  (x.stockRow = ""),
                                  (x.stock = `${+A[1] + 1}`);
                              o.contents[a].med_list.push(x),
                                (u.med_info[0] = x),
                                b.contents.push(u);
                            });
                      else {
                        (b.type = "store_shelves"),
                          (b.ip = f.ip_light),
                          (b.width = f.width),
                          (b.height = f.height);
                        const k = f.medMapStock.sort((d, u) => {
                          const [x] = d.location.split(",").map(Number),
                            [_] = u.location.split(",").map(Number);
                          return x - _;
                        });
                        (b.medMapStock = k),
                          (b.name = f.name),
                          k.forEach((d, u) => {
                            let x = f.position.split(","),
                              _ = c.position.split(",");
                            if (d.code) {
                              let A = {};
                              (A.name = d.name),
                                (A.code = d.code),
                                (A.cht_name = ""),
                                (A.SKDIACODE = d.material_no),
                                (A.qty = d.qty),
                                (A.stockCol = `${+x[0] + 1}`),
                                (A.stockRow = `${+_[1] + 1}`),
                                (A.stock = `${u + 1}`),
                                o.contents[a].med_list.push(A);
                            }
                          });
                      }
                      let M = f.position.split(",")[1];
                      h < +M &&
                        ((h = +M), (o.contents[a].contents[g].oriMaxCol = +h)),
                        o.contents[a].contents[g].contents.push(b);
                    }),
                    Array.isArray(c.drawer) &&
                      c.drawer.forEach((f, S) => {
                        let b = {
                          GUID: f.GUID,
                          Master_GUID: f.Master_GUID,
                          name: `抽屜 ${S}`,
                          class: 3,
                          gird_position: f.position,
                          ip: f.ip_drawer,
                          serverName: f.serverName,
                          serverType: f.serverType,
                        };
                        b.serverName &&
                          (b.serverName = t.sys_ServerSetting.name),
                          b.serverType &&
                            (b.serverType = t.sys_ServerSetting.type),
                          f.drawer
                            ? ((b.drawer = f.drawer),
                              f.drawer.Boxes &&
                                ((b.type = "grid_draw"),
                                (b.name = f.drawer.Name),
                                (b.Boxes = []),
                                Array.isArray(f.drawer.Boxes)
                                  ? f.drawer.Boxes.forEach((d, u) => {
                                      let x = [];
                                      Array.isArray(d) &&
                                        d.forEach((_, A) => {
                                          let I = {
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
                                          x.push(I),
                                            _.Code &&
                                              o.contents[a].med_list.push(
                                                _.Code
                                              );
                                        }),
                                        b.Boxes.push(x);
                                    })
                                  : (b.Boxes = f.drawer.Boxes)))
                            : ((b.type = "list_draw"),
                              (b.name = `清單抽屜 ${S}`));
                        let M = f.position.split(",")[1];
                        h < +M &&
                          ((h = +M),
                          (o.contents[a].contents[g].oriMaxCol = +h)),
                          o.contents[a].contents[g].contents.push(b);
                      });
                });
          }),
        o
      );
    } else return {};
  }
  convertSingleComponent(t, n, s) {
    var l, a, i, c, g;
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
        depth: ((g = t.dimensions) == null ? void 0 : g.depth) || t.depth || 30,
      },
      med_box: t.med_box || t.medBox || t.medicine_boxes || [],
      Master_GUID: s,
    };
    return (
      t.components &&
        Array.isArray(t.components) &&
        (o.components = t.components.map((m, h) =>
          this.convertSingleComponent(m, h, o.GUID)
        )),
      Object.keys(t).forEach((m) => {
        [
          "GUID",
          "type",
          "name",
          "position",
          "dimensions",
          "med_box",
          "components",
        ].includes(m) || (o[m] = t[m]);
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
const At = new Hm(),
  Vm = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: At },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  $u = p.createContext(void 0),
  Wm = ({ children: e }) => {
    const [t, n] = p.useState(!1),
      [s, o] = p.useState(null),
      [l, a] = p.useState(!1),
      [i, c] = p.useState(null),
      [g, m] = p.useState(null),
      [h, f] = p.useState("medicine"),
      [S, b] = p.useState(!1),
      [M, k] = p.useState(0),
      [d, u] = p.useState({ message: "", type: "success", isVisible: !1 }),
      [x, _] = p.useState(!1),
      [A, I] = p.useState(null),
      [R, F] = p.useState("edit"),
      [le, P] = p.useState(!1),
      [z, Z] = p.useState(null),
      [E, w] = p.useState(!1),
      [V, y] = p.useState(null),
      [N, j] = p.useState(!1),
      [H, ie] = p.useState(!1),
      [K, se] = p.useState(null),
      [be, ue] = p.useState(!1),
      [Ce, de] = p.useState(null),
      [Q, he] = p.useState(!1),
      [Ne, T] = p.useState(null),
      [fe, B] = p.useState(!1),
      [D, ne] = p.useState(null),
      [ce, U] = p.useState(null),
      [C, $] = p.useState("add"),
      [q, ee] = p.useState(!1),
      [ae, xe] = p.useState([]),
      [ye, Me] = p.useState([]),
      [ge, ve] = p.useState(!1),
      [je, Ie] = p.useState(!1),
      [nt, _e] = p.useState(""),
      [Xe, Ge] = p.useState(!1),
      [Lt, ht] = p.useState(""),
      [qt, en] = p.useState(!1),
      [Ss, Pr] = p.useState(null),
      [Wo, v] = p.useState(null),
      [J, W] = p.useState(!1),
      [O, Y] = p.useState(null),
      [L, re] = p.useState(!1),
      [te, X] = p.useState(null),
      G = () => {
        sessionStorage.removeItem("user_session"), n(!1), o(null);
      },
      pe = p.useCallback(() => {
        k((Ee) => Ee + 1);
      }, []),
      me = p.useCallback((Ee, Et) => {
        u({ message: Ee, type: Et, isVisible: !0 });
      }, []),
      De = p.useCallback(() => {
        u((Ee) => ({ ...Ee, isVisible: !1 }));
      }, []),
      Se = (Ee) => {
        I(Ee), F("edit"), _(!0);
      },
      Te = () => {
        const Ee = {
          GUID: `new_medbox_${Date.now()}`,
          name: "",
          box_type: "",
          width: [],
          width_index: 0,
          med_info: [],
          parentShelf: null,
        };
        I(Ee), F("add"), _(!0);
      },
      gt = () => {
        _(!1), I(null), F("edit");
      },
      Ae = (Ee) => {
        Z(Ee), P(!0);
      },
      tn = () => {
        P(!1), Z(null);
      },
      Tr = (Ee) => {
        y(Ee), w(!0);
      },
      qo = () => {
        w(!1), y(null);
      },
      Vu = (Ee) => {
        se(Ee), ie(!0);
      },
      Wu = () => {
        ie(!1), se(null);
      },
      qu = (Ee) => {
        de(Ee), ue(!0);
      },
      Yu = () => {
        ue(!1), de(null);
      },
      Xu = (Ee) => {
        T(Ee), he(!0);
      },
      Qu = () => {
        he(!1), T(null);
      },
      Ku = (Ee) => {
        ne(Ee), U(null), $("add"), B(!0);
      },
      Ju = (Ee, Et) => {
        ne(Ee), U(Et), $("edit"), B(!0);
      },
      Zu = () => {
        B(!1), ne(null), U(null), $("add");
      },
      ef = () => {
        ee(!0);
      },
      tf = () => {
        ee(!1);
      },
      nf = (Ee = "") => {
        _e(Ee), Ie(!0);
      },
      rf = () => {
        Ie(!1);
      },
      sf = (Ee) => {
        ht(Ee), Ge(!0);
      },
      of = () => {
        Ge(!1), ht("");
      },
      lf = (Ee, Et) => {
        Pr(Ee), v(Et || null), en(!0);
      },
      af = () => {
        en(!1), Pr(null), v(null);
      },
      cf = (Ee) => {
        Y(Ee), W(!0);
      },
      df = () => {
        W(!1), Y(null);
      },
      uf = (Ee) => {
        X(Ee), re(!0);
      },
      ff = () => {
        re(!1), X(null);
      },
      pf = p.useCallback(async () => {
        if (!i) {
          console.warn("沒有選擇部門分類，無法重新載入資料");
          return;
        }
        console.log("🔄 重新載入藥品地圖資料，部門類型:", i), j(!0);
        try {
          const Ee = await ke.getMedMapByDepartment(i);
          if (Ee.Code === 200 && Ee.Data) {
            console.log("📡 重新載入成功:", Ee.Data);
            const Et = At.convertMedMapApiToFakeData(Ee.Data);
            if (!At.validateConvertedData(Et)) {
              console.error("❌ 轉換後的資料驗證失敗"), m(null);
              return;
            }
            m(Et), console.log("✅ 地圖資料已重新載入");
          } else console.error("❌ API 回傳錯誤:", Ee), m(null);
        } catch (Ee) {
          console.error("💥 重新載入藥品地圖資料失敗:", Ee), m(null);
        } finally {
          j(!1);
        }
      }, [i, j, m]),
      mf = p.useCallback((Ee, Et) => {
        m(
          (Xn) =>
            Xn &&
            Xn.map((ci) => {
              const Qn = { ...ci };
              return (
                Qn.contents &&
                  (Qn.contents = Qn.contents.map((Kn) => {
                    const Jn = { ...Kn };
                    return (
                      Jn.contents &&
                        (Jn.contents = Jn.contents.map((Zn) => {
                          const er = { ...Zn };
                          return (
                            er.contents &&
                              (er.contents = er.contents.map((mn) => {
                                if (mn.GUID === Ee) {
                                  const Ut = { ...mn };
                                  return (
                                    Ut.medMapStock || (Ut.medMapStock = []),
                                    (Ut.medMapStock = [...Ut.medMapStock, Et]),
                                    Ut
                                  );
                                }
                                return mn;
                              })),
                            er
                          );
                        })),
                      Jn
                    );
                  })),
                Qn
              );
            })
        );
      }, []),
      hf = p.useCallback((Ee, Et, Xn) => {
        m(
          (Cs) =>
            Cs &&
            Cs.map((Qn) => {
              const Kn = { ...Qn };
              return (
                Kn.contents &&
                  (Kn.contents = Kn.contents.map((Jn) => {
                    const Zn = { ...Jn };
                    return (
                      Zn.contents &&
                        (Zn.contents = Zn.contents.map((er) => {
                          const mn = { ...er };
                          return (
                            mn.contents &&
                              (mn.contents = mn.contents.map((Ut) => {
                                if (Ut.GUID === Ee && Ut.medMapStock) {
                                  const di = { ...Ut };
                                  return (
                                    (di.medMapStock = Ut.medMapStock.map((Yo) =>
                                      Yo.GUID === Et ? { ...Yo, ...Xn } : Yo
                                    )),
                                    di
                                  );
                                }
                                return Ut;
                              })),
                            mn
                          );
                        })),
                      Zn
                    );
                  })),
                Kn
              );
            })
        );
      }, []);
    return r.jsx($u.Provider, {
      value: {
        isAuthenticated: t,
        setIsAuthenticated: n,
        currentUser: s,
        setCurrentUser: o,
        logout: G,
        sidebarOpen: l,
        setSidebarOpen: a,
        selectedDepartmentType: i,
        setSelectedDepartmentType: c,
        isAdminMode: S,
        setIsAdminMode: b,
        apiDepartmentData: g,
        setApiDepartmentData: m,
        viewMode: h,
        setViewMode: f,
        refreshTrigger: M,
        triggerRefresh: pe,
        addStockToShelf: mf,
        notification: d,
        showNotification: me,
        hideNotification: De,
        medBoxModalOpen: x,
        setMedBoxModalOpen: _,
        selectedMedBox: A,
        setSelectedMedBox: I,
        openMedBoxModal: Se,
        closeMedBoxModal: gt,
        modalMode: R,
        setModalMode: F,
        openAddMedBoxModal: Te,
        listDrawModalOpen: le,
        setListDrawModalOpen: P,
        selectedListDraw: z,
        setSelectedListDraw: Z,
        openListDrawModal: Ae,
        closeListDrawModal: tn,
        gridDrawModalOpen: E,
        setGridDrawModalOpen: w,
        selectedGridDraw: V,
        setSelectedGridDraw: y,
        openGridDrawModal: Tr,
        closeGridDrawModal: qo,
        isLoadingMedMap: N,
        setIsLoadingMedMap: j,
        addParentContainerModalOpen: H,
        setAddParentContainerModalOpen: ie,
        selectedDepartmentForAdd: K,
        setSelectedDepartmentForAdd: se,
        openAddParentContainerModal: Vu,
        closeAddParentContainerModal: Wu,
        addShelfDrawContainerModalOpen: be,
        setAddShelfDrawContainerModalOpen: ue,
        selectedSubContainerForAdd: Ce,
        setSelectedSubContainerForAdd: de,
        openAddShelfDrawContainerModal: qu,
        closeAddShelfDrawContainerModal: Yu,
        addSubContainerModalOpen: Q,
        setAddSubContainerModalOpen: he,
        selectedParentContainerForAdd: Ne,
        setSelectedParentContainerForAdd: T,
        openAddSubContainerModal: Xu,
        closeAddSubContainerModal: Qu,
        addStoreItemModalOpen: fe,
        setAddStoreItemModalOpen: B,
        selectedStoreShelfForAdd: D,
        setSelectedStoreShelfForAdd: ne,
        selectedStockItemForEdit: ce,
        setSelectedStockItemForEdit: U,
        storeItemModalMode: C,
        setStoreItemModalMode: $,
        openAddStoreItemModal: Ku,
        openEditStoreItemModal: Ju,
        closeAddStoreItemModal: Zu,
        updateStockInShelf: hf,
        addDepartmentModalOpen: q,
        setAddDepartmentModalOpen: ee,
        allDepartmentsList: ae,
        setAllDepartmentsList: xe,
        openAddDepartmentModal: ef,
        closeAddDepartmentModal: tf,
        reloadMedMapData: pf,
        qrCodeScannerModalOpen: je,
        qrCodeScannerMode: nt,
        setQRCodeScannerModalOpen: Ie,
        openQRCodeScannerModal: nf,
        closeQRCodeScannerModal: rf,
        addBarcodeModalOpen: Xe,
        setAddBarcodeModalOpen: Ge,
        openAddBarcodeModal: sf,
        closeAddBarcodeModal: of,
        initialBarcodeValue: Lt,
        containerDetailModalOpen: qt,
        setContainerDetailModalOpen: en,
        selectedContainerForDetail: Ss,
        setSelectedContainerForDetail: Pr,
        highlightedMedicineCode: Wo,
        setHighlightedMedicineCode: v,
        openContainerDetailModal: lf,
        closeContainerDetailModal: af,
        editStoreShelfModalOpen: J,
        setEditStoreShelfModalOpen: W,
        selectedStoreShelfForEdit: O,
        setSelectedStoreShelfForEdit: Y,
        openEditStoreShelfModal: cf,
        closeEditStoreShelfModal: df,
        editParentContainerModalOpen: L,
        setEditParentContainerModalOpen: re,
        selectedParentContainerForEdit: te,
        setSelectedParentContainerForEdit: X,
        openEditParentContainerModal: uf,
        closeEditParentContainerModal: ff,
        medicineList: ye,
        setMedicineList: Me,
        isLoadingMedicines: ge,
        setIsLoadingMedicines: ve,
      },
      children: e,
    });
  },
  Ye = () => {
    const e = p.useContext($u);
    if (e === void 0)
      throw new Error("useDrugMap must be used within a DrugMapProvider");
    return e;
  },
  qm = {
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
  Ou = p.createContext(void 0),
  Ym = ({ children: e }) => {
    const [t, n] = p.useState("zh-TW"),
      s = (o) => qm[t][o] || o;
    return r.jsx(Ou.Provider, {
      value: { language: t, setLanguage: n, t: s },
      children: e,
    });
  },
  mt = () => {
    const e = p.useContext(Ou);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Xm = {
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
 */ const Qm = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  $e = (e, t) => {
    const n = p.forwardRef(
      (
        {
          color: s = "currentColor",
          size: o = 24,
          strokeWidth: l = 2,
          absoluteStrokeWidth: a,
          className: i = "",
          children: c,
          ...g
        },
        m
      ) =>
        p.createElement(
          "svg",
          {
            ref: m,
            ...Xm,
            width: o,
            height: o,
            stroke: s,
            strokeWidth: a ? (Number(l) * 24) / Number(o) : l,
            className: ["lucide", `lucide-${Qm(e)}`, i].join(" "),
            ...g,
          },
          [
            ...t.map(([h, f]) => p.createElement(h, f)),
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
 */ const Km = $e("Archive", [
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
 */ const wc = $e("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lu = $e("Building2", [
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
 */ const _r = $e("Camera", [
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
 */ const Jm = $e("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fs = $e("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Uu = $e("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zm = $e("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eh = $e("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const th = $e("EyeOff", [
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
 */ const nh = $e("Eye", [
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
 */ const rh = $e("Globe", [
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
 */ const Bu = $e("Grid3x3", [
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
 */ const ii = $e("Layers", [
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
 */ const sh = $e("Lightbulb", [
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
 */ const oh = $e("ListX", [
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
 */ const pa = $e("List", [
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
 */ const jt = $e("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zu = $e("Lock", [
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
 */ const lh = $e("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ah = $e("Package", [
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
 */ const mr = $e("Pen", [
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
 */ const ih = $e("Pill", [
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
 */ const vt = $e("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sn = $e("Settings", [
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
 */ const Gu = $e("Trash2", [
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
 */ const Fu = $e("Unlock", [
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
 */ const ch = $e("Warehouse", [
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
 */ const dh = $e("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const He = $e("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  uh = () => {
    const { sidebarOpen: e, setSidebarOpen: t } = Ye(),
      { t: n } = mt();
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
              children: r.jsx(ii, { className: "w-5 h-5" }),
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
                ? r.jsx(pa, { className: "w-6 h-6" })
                : r.jsx(pa, { className: "w-6 h-6" }),
            }),
          ],
        }),
      }),
    });
  },
  fh = () => {
    const {
        viewMode: e,
        setViewMode: t,
        logout: n,
        currentUser: s,
        selectedDepartmentType: o,
        openAddDepartmentModal: l,
        apiDepartmentData: a,
        allDepartmentsList: i,
      } = Ye(),
      { language: c, setLanguage: g, t: m } = mt(),
      [h, f] = ro.useState(!1),
      S = () => {
        g(c === "zh-TW" ? "en" : "zh-TW");
      },
      b = ro.useMemo(() => {
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
                        r.jsx(ih, { className: "w-4 h-4" }),
                        r.jsx("span", {
                          className: "text-sm font-medium",
                          children: m("topbar.medicine"),
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
                        r.jsx(Lu, { className: "w-4 h-4" }),
                        r.jsx("span", {
                          className: "text-sm font-medium",
                          children: m("topbar.department"),
                        }),
                      ],
                    }),
                  ],
                }),
                r.jsx("button", {
                  onClick: () => f(!h),
                  className:
                    "lg:hidden flex items-center justify-center p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                  children: h
                    ? r.jsx(eh, { className: "w-4 h-4" })
                    : r.jsx(Uu, { className: "w-4 h-4" }),
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
                  b &&
                  r.jsxs(r.Fragment, {
                    children: [
                      r.jsxs("button", {
                        onClick: () => l(),
                        className:
                          "w-full lg:w-auto flex justify-center items-center space-x-2 px-3 py-1.5 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors border border-green-700",
                        children: [
                          r.jsx(vt, { className: "w-4 h-4" }),
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
                  onClick: S,
                  className:
                    "w-full lg:w-auto flex justify-center items-center space-x-2 px-3 py-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors border",
                  children: [
                    r.jsx(rh, { className: "w-4 h-4" }),
                    r.jsx("span", {
                      className: "text-sm font-medium",
                      children: m("topbar.language"),
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
                    r.jsx(lh, { className: "w-4 h-4" }),
                    r.jsx("span", {
                      className: "text-sm font-medium",
                      children: m("topbar.logout"),
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
  ph = [
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
  mh = ({ isOpen: e, onClose: t }) => {
    const [n, s] = p.useState("blue"),
      [o, l] = p.useState(1),
      [a, i] = p.useState(60),
      [c, g] = p.useState(""),
      [m, h] = p.useState(""),
      [f, S] = p.useState([]),
      [b, M] = p.useState([]),
      [k, d] = p.useState([]),
      [u, x] = p.useState(!1),
      [_, A] = p.useState(!1),
      I = p.useRef(null),
      R = p.useRef(null),
      F = p.useRef(null),
      le = p.useRef(null);
    p.useEffect(() => {
      if (e) {
        const y = localStorage.getItem("medMap_setting");
        if (y)
          try {
            const N = JSON.parse(y);
            s(N.light_color || "blue"),
              l(N.brightness !== void 0 ? N.brightness : 1),
              i(N.light_sec !== void 0 ? N.light_sec : 60),
              g(N.default_person || ""),
              h(N.default_person_id || "");
          } catch (N) {
            console.error("讀取設定失敗:", N),
              s("blue"),
              l(1),
              i(60),
              g(""),
              h("");
          }
        else s("blue"), l(1), i(60), g(""), h("");
        P();
      }
    }, [e]),
      p.useEffect(() => {
        const y = (N) => {
          F.current &&
            !F.current.contains(N.target) &&
            I.current &&
            !I.current.contains(N.target) &&
            x(!1),
            le.current &&
              !le.current.contains(N.target) &&
              R.current &&
              !R.current.contains(N.target) &&
              A(!1);
        };
        return (
          document.addEventListener("mousedown", y),
          () => document.removeEventListener("mousedown", y)
        );
      }, []);
    const P = async () => {
        try {
          const y = await ke.getAllStaffInfo();
          y.Code === 200 && y.Data && S(y.Data);
        } catch (y) {
          console.error("獲取人員資料失敗:", y);
        }
      },
      z = (y) => {
        if ((g(y), y.trim() === "")) {
          M([]), x(!1);
          return;
        }
        const N = f.filter(
          (j) => j.name && j.name.toLowerCase().includes(y.toLowerCase())
        );
        M(N), x(N.length > 0);
      },
      Z = (y) => {
        if ((h(y), y.trim() === "")) {
          d([]), A(!1);
          return;
        }
        const N = f.filter(
          (j) => j.ID && j.ID.toLowerCase().includes(y.toLowerCase())
        );
        d(N), A(N.length > 0);
      },
      E = (y) => {
        g(y.name), h(y.ID), x(!1);
      },
      w = (y) => {
        g(y.name), h(y.ID), A(!1);
      },
      V = () => {
        const y = {
          light_color: n,
          brightness: o,
          light_sec: a,
          default_person: c,
          default_person_id: m,
        };
        localStorage.setItem("medMap_setting", JSON.stringify(y)),
          console.log("設定已儲存:", y),
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
                      children: r.jsx(He, { className: "w-5 h-5" }),
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
                                  ref: I,
                                  type: "text",
                                  value: c,
                                  onChange: (y) => z(y.target.value),
                                  onFocus: () => {
                                    c.trim() && z(c);
                                  },
                                  placeholder: "請輸入人員名稱",
                                  className:
                                    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                                }),
                                u &&
                                  r.jsx("div", {
                                    ref: F,
                                    className:
                                      "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto",
                                    children: b.map((y, N) =>
                                      r.jsxs(
                                        "div",
                                        {
                                          onClick: () => E(y),
                                          className:
                                            "px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                          children: [
                                            r.jsx("div", {
                                              className:
                                                "font-medium text-gray-900",
                                              children: y.name,
                                            }),
                                            r.jsx("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: y.ID,
                                            }),
                                          ],
                                        },
                                        N
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
                                  ref: R,
                                  type: "text",
                                  value: m,
                                  onChange: (y) => Z(y.target.value),
                                  onFocus: () => {
                                    m.trim() && Z(m);
                                  },
                                  placeholder: "請輸入人員 ID",
                                  className:
                                    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                                }),
                                _ &&
                                  r.jsx("div", {
                                    ref: le,
                                    className:
                                      "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto",
                                    children: k.map((y, N) =>
                                      r.jsxs(
                                        "div",
                                        {
                                          onClick: () => w(y),
                                          className:
                                            "px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                          children: [
                                            r.jsx("div", {
                                              className:
                                                "font-medium text-gray-900",
                                              children: y.ID,
                                            }),
                                            r.jsx("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: y.name,
                                            }),
                                          ],
                                        },
                                        N
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
                          children: ph.map((y) =>
                            r.jsxs(
                              "button",
                              {
                                onClick: () => s(y.value),
                                className: `
                    relative p-3 rounded-lg border-2 transition-all
                    ${y.bgColor} ${y.textColor}
                    ${
                      n === y.value
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
                                        children: y.name,
                                      }),
                                      r.jsx("div", {
                                        className: "text-xs opacity-90",
                                        children: y.bgr,
                                      }),
                                    ],
                                  }),
                                  n === y.value &&
                                    r.jsx("div", {
                                      className:
                                        "absolute top-1 right-1 w-3 h-3 bg-white rounded-full border-2 border-gray-900",
                                    }),
                                ],
                              },
                              y.value
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
                              onChange: (y) => l(parseFloat(y.target.value)),
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
                              onChange: (y) => i(parseInt(y.target.value)),
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
                      onClick: V,
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
  hh = () => {
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
        setIsAdminMode: g,
      } = Ye(),
      { t: m } = mt(),
      [h, f] = p.useState(new Set()),
      [S, b] = p.useState([]),
      [M, k] = p.useState(!0),
      [d, u] = p.useState([]),
      [x, _] = p.useState(!1),
      A = () => {
        c
          ? g(!1)
          : prompt("請輸入後台密碼：") === "66437068"
          ? g(!0)
          : alert("密碼錯誤，無法開啟後台模式");
      };
    p.useEffect(() => {
      (async () => {
        k(!0);
        try {
          const z = await ke.getDepartments();
          z.Code === 200 && z.Data
            ? (console.log(z.Data), b(z.Data), i(z.Data))
            : (console.error("API returned error:", z), b([]), i([]));
        } catch (z) {
          console.error("Failed to fetch department data:", z), b([]), i([]);
        } finally {
          k(!1);
        }
      })();
    }, []);
    const I = S.reduce((P, z) => {
        const Z = z["department_type "];
        return P[Z] || (P[Z] = []), P[Z].push(z), P;
      }, {}),
      R = (P) => {
        const z = new Set(h);
        z.has(P) ? z.delete(P) : z.add(P), f(z);
      },
      F = async (P) => {
        console.log("🏢 選擇部門:", P), s(P), await le(P), t(!1);
      },
      le = async (P) => {
        console.log("🚀 開始取得藥品地圖資料，部門類型:", P), a(!0);
        try {
          const z = await ke.getMedMapByDepartment(P);
          if (z.Code === 200 && z.Data) {
            console.log("📡 API 回傳成功:", z.Data);
            const Z = At.convertMedMapApiToFakeData(z.Data);
            if (!At.validateConvertedData(Z)) {
              console.error("❌ 轉換後的資料驗證失敗"), u([]);
              return;
            }
            const w = At.generateConversionReport(z.Data, Z);
            u(Z),
              o(Z),
              console.log("💾 已暫存轉換後的資料到狀態中"),
              console.log("📊 最終轉換結果:", Z),
              console.log("📋 轉換報告:", w);
          } else console.error("❌ API 回傳錯誤:", z), u([]), o(null);
        } catch (z) {
          console.error("💥 取得藥品地圖資料失敗:", z), u([]), o(null);
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
                          title: m("nav.home"),
                          children: r.jsx(ii, { className: "w-5 h-5" }),
                        }),
                        r.jsx("h1", {
                          className: "text-lg font-semibold text-gray-900",
                          children: m("sidebar.drugMap"),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: () => t(!e),
                      className:
                        "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                      title: m("sidebar.closeSidebar"),
                      children: r.jsx(oh, { className: "w-6 h-6" }),
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
                          children: m("sidebar.departmentCategories"),
                        }),
                        Object.entries(I).map(([P, z]) =>
                          r.jsxs(
                            "div",
                            {
                              className: "space-y-1",
                              children: [
                                r.jsxs("button", {
                                  onClick: () => F(P),
                                  disabled: l,
                                  className: `w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 border ${
                                    n === P
                                      ? "bg-blue-50 text-blue-700 border-blue-200 shadow-sm"
                                      : "text-gray-700 hover:bg-gray-50 hover:shadow-sm border-transparent"
                                  } ${
                                    l ? "opacity-50 cursor-not-allowed" : ""
                                  }`,
                                  children: [
                                    r.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        P === "B1F"
                                          ? r.jsx(Lu, { className: "w-4 h-4" })
                                          : r.jsx(ch, { className: "w-4 h-4" }),
                                        r.jsxs("div", {
                                          className: "text-left",
                                          children: [
                                            r.jsx("div", {
                                              className: "font-medium",
                                              children: P,
                                            }),
                                            r.jsxs("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children: [
                                                z.length,
                                                " ",
                                                m("sidebar.departments"),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    r.jsx("div", {
                                      onClick: (Z) => {
                                        Z.stopPropagation(), R(P);
                                      },
                                      className:
                                        "p-1 hover:bg-gray-200/50 rounded transition-colors",
                                      children: h.has(P)
                                        ? r.jsx(Uu, { className: "w-4 h-4" })
                                        : r.jsx(Zm, { className: "w-4 h-4" }),
                                    }),
                                  ],
                                }),
                                h.has(P) &&
                                  r.jsx("div", {
                                    className: "ml-6 space-y-2",
                                    children: z.map((Z) =>
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
                                                children: Z.name,
                                              }),
                                              r.jsx("span", {
                                                className: `text-xs px-2 py-1 rounded-full ${
                                                  Z.type === "調劑台"
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-blue-100 text-blue-800"
                                                }`,
                                                children: Z.type,
                                              }),
                                            ],
                                          }),
                                        },
                                        Z.GUID
                                      )
                                    ),
                                  }),
                              ],
                            },
                            P
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
                          id: "admin-mode-toggle",
                          role: "switch",
                          "aria-checked": c,
                          onClick: A,
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
                      onClick: () => _(!0),
                      className:
                        "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 rounded-lg transition-colors",
                      title: "設定",
                      children: r.jsx(sn, { className: "w-5 h-5" }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        r.jsx(mh, { isOpen: x, onClose: () => _(!1) }),
      ],
    });
  },
  gh = () => {
    const { t: e } = mt();
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
  xh = ({
    component: e,
    scale: t,
    isLocked: n,
    isHighlighted: s = !1,
    onContainerClick: o,
  }) => {
    const l = p.useRef(null),
      { t: a } = mt(),
      {
        apiDepartmentData: i,
        setApiDepartmentData: c,
        showNotification: g,
      } = Ye(),
      [m, h] = p.useState(!1),
      [f, S] = p.useState({ x: 0, y: 0 }),
      [b, M] = p.useState(e.position),
      [k, d] = p.useState(!1),
      [u, x] = p.useState(null),
      [_, A] = p.useState({ x: 0, y: 0 }),
      [I, R] = p.useState({ x: 0, y: 0 }),
      F = () => {
        try {
          const Q = localStorage.getItem("medMap_setting");
          if (Q) return JSON.parse(Q).light_color || "red";
        } catch (Q) {
          console.error("讀取高亮顏色設定失敗:", Q);
        }
        return "red";
      },
      le = p.useCallback(
        async (Q, he) => {
          if (!i) return;
          console.log("🔄 更新組件位置:", Q, he);
          const Ne = JSON.parse(JSON.stringify(i)),
            T = (B) => {
              for (const D of B) {
                if (D.GUID === Q)
                  return (
                    (D.position = { x: he.x.toFixed(3), y: he.y.toFixed(3) }),
                    console.log(
                      "✅ 組件位置已更新:",
                      D.name,
                      he.x.toFixed(3),
                      he.y.toFixed(3)
                    ),
                    !0
                  );
                if (
                  (D.components &&
                    Array.isArray(D.components) &&
                    T(D.components)) ||
                  (D.contents && Array.isArray(D.contents) && T(D.contents))
                )
                  return !0;
              }
              return !1;
            };
          if (T(Ne)) {
            c(Ne), console.log("💾 全域資料已更新");
            try {
              console.log("📡 開始同步後端位置資料...");
              const B = await ke.updateContainerPosition({
                GUID: Q,
                absolute_position: `${he.x.toFixed(3)},${he.y.toFixed(3)}`,
              });
              B.Code === 200
                ? (console.log("✅ 後端位置同步成功", B),
                  g("位置更新成功", "success"))
                : (console.error("❌ 後端位置同步失敗:", B),
                  g(`位置更新失敗: ${B.Result || "未知錯誤"}`, "error"));
            } catch (B) {
              console.error("💥 後端位置同步發生錯誤:", B),
                g("位置更新失敗: 網路錯誤", "error");
            }
          } else console.warn("⚠️ 未找到要更新的組件:", Q);
        },
        [i, c, g]
      ),
      { position: P, dimensions: z, name: Z, type: E } = e,
      w = p.useCallback(
        (Q) => {
          const he = l.current;
          if (he)
            if ((R({ x: Q.clientX, y: Q.clientY }), n)) {
              Q.preventDefault(),
                Q.stopPropagation(),
                he.setPointerCapture(Q.pointerId);
              const Ne = he.getBoundingClientRect(),
                T = Q.clientX - Ne.left,
                fe = Q.clientY - Ne.top;
              S({ x: T, y: fe }), h(!0), d(!1);
            } else d(!1);
        },
        [n]
      ),
      V = p.useCallback(() => {
        if (!i) return [];
        const Q = [],
          he = (Ne) => {
            for (const T of Ne)
              T.GUID !== e.GUID &&
                T.position &&
                Q.push({
                  GUID: T.GUID,
                  position: T.position,
                  dimensions: T.dimensions,
                }),
                T.components && Array.isArray(T.components) && he(T.components),
                T.contents && Array.isArray(T.contents) && he(T.contents);
          };
        return he(i), Q;
      }, [i, e.GUID]),
      y = p.useCallback(
        (Q, he) => {
          const T = V();
          let fe = Q,
            B = he;
          for (const D of T) {
            const ne = parseFloat(D.position.x),
              ce = parseFloat(D.position.y);
            if (
              (Math.abs(Q - ne) < 20 && (fe = ne),
              Math.abs(he - ce) < 20 && (B = ce),
              D.dimensions && e.dimensions)
            ) {
              const U = ne + parseFloat(D.dimensions.width),
                C = Q + parseFloat(e.dimensions.width);
              Math.abs(C - U) < 20 && (fe = U - parseFloat(e.dimensions.width));
              const $ = ce + parseFloat(D.dimensions.depth),
                q = he + parseFloat(e.dimensions.depth);
              Math.abs(q - $) < 20 && (B = $ - parseFloat(e.dimensions.depth));
            }
          }
          return { x: fe, y: B };
        },
        [V, e.dimensions]
      ),
      N = p.useCallback(
        (Q) => {
          const he = Math.abs(Q.clientX - I.x),
            Ne = Math.abs(Q.clientY - I.y);
          if (((he > 5 || Ne > 5) && d(!0), !m || !n)) return;
          Q.preventDefault(), Q.stopPropagation();
          const T = l.current;
          if (!T) return;
          const fe = T.closest("[data-canvas-content]");
          if (!fe) return;
          const B = fe.getBoundingClientRect(),
            D = (Q.clientX - B.left - f.x) / t,
            ne = (Q.clientY - B.top - f.y) / t,
            ce = y(D, ne);
          M(ce);
        },
        [m, f, t, n, y, I]
      ),
      j = p.useCallback(
        (Q) => {
          const he = Math.abs(Q.clientX - I.x),
            Ne = Math.abs(Q.clientY - I.y),
            T = he > 5 || Ne > 5;
          if (n) {
            if (!m) return;
            Q.preventDefault(), Q.stopPropagation();
            const fe = l.current;
            fe && fe.releasePointerCapture(Q.pointerId),
              h(!1),
              T ? le(e.GUID, b) : o && o(e),
              d(!1);
          } else
            !T && o && (Q.preventDefault(), Q.stopPropagation(), o(e)), d(!1);
        },
        [m, n, o, e, le, b, I]
      ),
      H = p.useCallback(
        (Q) => {
          const he = l.current;
          if (!he) return;
          const Ne = Q.touches[0];
          if (Ne && (A({ x: Ne.clientX, y: Ne.clientY }), n)) {
            Q.preventDefault(), Q.stopPropagation(), x(Ne.identifier);
            const T = he.getBoundingClientRect(),
              fe = Ne.clientX - T.left,
              B = Ne.clientY - T.top;
            S({ x: fe, y: B }), h(!0);
          }
        },
        [n]
      ),
      ie = p.useCallback(
        (Q) => {
          if (!m || !n || u === null) return;
          Q.preventDefault(), Q.stopPropagation();
          const he = l.current;
          if (!he) return;
          const Ne = Array.from(Q.touches).find((ce) => ce.identifier === u);
          if (!Ne) return;
          const T = he.closest("[data-canvas-content]");
          if (!T) return;
          const fe = T.getBoundingClientRect(),
            B = (Ne.clientX - fe.left - f.x) / t,
            D = (Ne.clientY - fe.top - f.y) / t,
            ne = y(B, D);
          M(ne);
        },
        [m, f, t, n, u, y]
      ),
      K = p.useCallback(
        (Q) => {
          const he = Array.from(Q.changedTouches)[0];
          if (!he) return;
          const Ne = Math.abs(he.clientX - _.x),
            T = Math.abs(he.clientY - _.y),
            fe = Ne > 10 || T > 10;
          if (n) {
            if (
              !m ||
              u === null ||
              !Array.from(Q.changedTouches).some((D) => D.identifier === u)
            )
              return;
            Q.preventDefault(),
              Q.stopPropagation(),
              h(!1),
              x(null),
              A({ x: 0, y: 0 }),
              fe ? le(e.GUID, b) : o && o(e);
          } else
            !fe && o && (Q.preventDefault(), Q.stopPropagation(), o(e)),
              A({ x: 0, y: 0 });
        },
        [m, n, u, le, e, b, _, o]
      ),
      se = p.useCallback(
        (Q) => {
          !m ||
            !n ||
            u === null ||
            !Array.from(Q.changedTouches).some((Ne) => Ne.identifier === u) ||
            (Q.preventDefault(),
            Q.stopPropagation(),
            M(e.position),
            h(!1),
            x(null),
            A({ x: 0, y: 0 }));
        },
        [m, n, u, e.position]
      ),
      be = (Q) => {
        if (s) return `highlight-breathe-${F()}`;
        switch (Q) {
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
      ue = (Q) => {
        if (s) return `highlight-breathe-${F()}`;
        switch (Q) {
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
      Ce = (Q) => {
        if (s) return `highlight-tag-${F()}`;
        switch (Q) {
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
      de = (Q) => {
        const he =
          Q === "調劑台"
            ? "type.dispensingStation"
            : Q === "藥庫"
            ? "type.warehouse"
            : Q === "parent_container"
            ? "櫃體"
            : "type." + Q;
        return a(he) || Q;
      };
    return r.jsx("div", {
      ref: l,
      className: `flex flex-col absolute border-2 rounded-lg shadow-lg hover:shadow-xl ${be(
        E
      )} overflow-hidden ${n ? "cursor-move" : "cursor-default"} ${
        m ? "shadow-2xl z-50" : ""
      }`,
      style: {
        left: `${b.x}px`,
        top: `${b.y}px`,
        minWidth: E === "調劑台" || E === "藥庫" ? "120px" : "180px",
        minHeight: E === "調劑台" || E === "藥庫" ? "60px" : "120px",
        userSelect: "none",
        touchAction: "none",
        transition: m
          ? "none"
          : "transform 0.2s ease-out, box-shadow 0.2s ease-out",
      },
      onPointerDown: w,
      onPointerMove: N,
      onPointerUp: j,
      onTouchStart: H,
      onTouchMove: ie,
      onTouchEnd: K,
      onTouchCancel: se,
      children: r.jsx("div", {
        className: `w-full min-w-[400px] h-auto flex items-start flex-1 justify-between p-2 border-gray-600 ${ue(
          E
        )}`,
        children: r.jsx("div", {
          className: "flex space-x-2 flex-1 min-w-0",
          children: r.jsxs("div", {
            className: "min-w-0 flex gap-4",
            children: [
              r.jsx("div", {
                className: "font-semibold text-lg truncate",
                children: Z,
              }),
              r.jsx("div", {
                className: `text-sm truncate py-1 px-3 text-white rounded-2xl ${Ce(
                  E
                )}`,
                children: de(E),
              }),
            ],
          }),
        }),
      }),
    });
  },
  Vo = ({ isOpen: e, onClose: t, onScanSuccess: n, mode: s }) => {
    const { showNotification: o, openAddBarcodeModal: l } = Ye();
    console.log("🔍 QRCodeScannerModal props:", {
      isOpen: e,
      mode: s,
      hasOnScanSuccess: !!n,
    });
    const a = p.useRef(null),
      i = p.useRef(null),
      c = p.useRef(null),
      g = p.useRef(null),
      m = p.useRef(null),
      [h, f] = p.useState(!1),
      [S, b] = p.useState(""),
      [M, k] = p.useState(0),
      [d, u] = p.useState(null),
      [x, _] = p.useState(!1);
    p.useEffect(() => {
      const z = () => {
        const Z = window.innerWidth < 680;
        _(Z);
      };
      return (
        z(),
        window.addEventListener("resize", z),
        () => window.removeEventListener("resize", z)
      );
    }, []);
    const A = async () => {
        try {
          b("");
          const z = await navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: "environment",
              width: { ideal: 1920 },
              height: { ideal: 1080 },
            },
          });
          (c.current = z),
            a.current &&
              ((a.current.srcObject = z),
              await a.current.play(),
              console.log("✅ Camera started, setting isScanning to true"),
              f(!0));
        } catch (z) {
          console.error("無法開啟相機:", z),
            b("無法開啟相機，請確認相機權限已開啟");
        }
      },
      I = () => {
        g.current && (clearInterval(g.current), (g.current = null)),
          c.current &&
            (c.current.getTracks().forEach((z) => z.stop()),
            (c.current = null)),
          a.current && (a.current.srcObject = null),
          f(!1);
      },
      R = async () => {
        if (
          (console.log("🔄 captureAndScan called"),
          console.log("📹 videoRef.current:", !!a.current),
          console.log("🖼️ canvasRef.current:", !!i.current),
          console.log("▶️ isScanning:", h),
          !a.current || !i.current || !h)
        ) {
          console.log("❌ Early return: missing refs or not scanning");
          return;
        }
        const z = Date.now();
        if (z - M < 1e3) {
          console.log("⏱️ Throttled: too soon since last scan");
          return;
        }
        k(z);
        const Z = a.current,
          E = i.current,
          w = E.getContext("2d");
        if (
          (console.log("🎥 video.readyState:", Z.readyState),
          console.log("🎥 HAVE_ENOUGH_DATA:", Z.HAVE_ENOUGH_DATA),
          !w || Z.readyState !== Z.HAVE_ENOUGH_DATA)
        ) {
          console.log("❌ Video not ready or no context");
          return;
        }
        (E.width = Z.videoWidth),
          (E.height = Z.videoHeight),
          w.drawImage(Z, 0, 0, E.width, E.height),
          E.toBlob(
            async (V) => {
              if (!V) return;
              const y = new File([V], "scan.jpg", { type: "image/jpeg" }),
                N = performance.now();
              try {
                console.log("📸 [相機掃描] 截取圖片並掃描...");
                const j = performance.now(),
                  H = await ke.scanBarcode(y),
                  ie = performance.now();
                if (
                  (console.log(
                    `⏱️ [相機掃描] 掃描條碼API用時: ${(ie - j).toFixed(2)}ms`
                  ),
                  !H.results || H.results.length === 0)
                ) {
                  console.log("⚠️ 未辨識到條碼");
                  return;
                }
                const K = H.results[0];
                if (!K.code) {
                  console.log("⚠️ 辨識到條碼但無法讀取內容");
                  return;
                }
                console.log("✅ 成功辨識條碼:", K.code),
                  console.log("📋 條碼類型:", K.type),
                  console.log("📊 信心度:", K.conf),
                  I(),
                  t();
                try {
                  const se = performance.now(),
                    be = await ke.searchByBarCode(K.code),
                    ue = performance.now();
                  if (
                    (console.log(
                      `⏱️ [相機掃描] 搜尋藥品資料API用時: ${(ue - se).toFixed(
                        2
                      )}ms`
                    ),
                    console.log("🔍 條碼搜尋結果:", be),
                    be.Code === 200)
                  )
                    if (
                      (console.log("✅ 找到藥品資料:", be.Data),
                      console.log("🎯 準備調用 onScanSuccess, mode:", s),
                      o("找到藥品資料", "success"),
                      n)
                    ) {
                      console.log("✅ onScanSuccess 存在，開始調用");
                      const Ce = performance.now();
                      n(K.code, be.Data);
                      const de = performance.now();
                      console.log(
                        `⏱️ [相機掃描] 定位藥品用時: ${(de - Ce).toFixed(2)}ms`
                      );
                      const Q = performance.now();
                      console.log(
                        `⏱️ [相機掃描] 總用時: ${(Q - N).toFixed(2)}ms`
                      ),
                        console.log("✅ onScanSuccess 調用完成");
                    } else console.warn("⚠️ onScanSuccess 不存在");
                  else
                    be.Code === -200 && be.Result === "查無資料"
                      ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                        o("查無條碼資料，請建立條碼", "warning"),
                        l(K.code))
                      : (console.log("❌ 搜尋失敗:", be.Result),
                        o(be.Result || "搜尋失敗", "error"));
                } catch (se) {
                  console.error("條碼搜尋錯誤:", se),
                    o("搜尋失敗，請稍後再試", "error");
                }
              } catch (j) {
                console.error("掃描錯誤:", j);
              }
            },
            "image/jpeg",
            1
          );
      },
      F = () => {
        g.current && clearInterval(g.current),
          (g.current = setInterval(() => {
            R();
          }, 1e3));
      };
    p.useEffect(
      () => (
        e ? A() : I(),
        () => {
          I();
        }
      ),
      [e]
    ),
      p.useEffect(() => {
        h && !g.current
          ? (console.log("🚀 isScanning became true, starting interval"), F())
          : !h &&
            g.current &&
            (console.log("🛑 isScanning became false, stopping interval"),
            g.current && (clearInterval(g.current), (g.current = null)));
      }, [h]);
    const le = () => {
        I(), t();
      },
      P = async (z) => {
        if (!c.current || !m.current) return;
        const Z = m.current.getBoundingClientRect(),
          E = (z.clientX - Z.left) / Z.width,
          w = (z.clientY - Z.top) / Z.height;
        console.log("🎯 點擊聚焦位置:", { x: E, y: w }),
          u({ x: z.clientX - Z.left, y: z.clientY - Z.top }),
          setTimeout(() => u(null), 1e3);
        try {
          const V = c.current.getVideoTracks()[0],
            y = V.getCapabilities();
          if (
            (console.log("📹 相機能力:", y),
            !y.focusMode || !y.focusMode.includes("manual"))
          ) {
            console.log("⚠️ 此相機不支援手動聚焦");
            return;
          }
          const N = {
            advanced: [
              {
                focusMode: "manual",
                focusDistance: 0,
                pointsOfInterest: [{ x: E, y: w }],
              },
            ],
          };
          await V.applyConstraints(N), console.log("✅ 聚焦成功");
        } catch (V) {
          console.log("⚠️ 聚焦失敗 (可能不支援):", V);
        }
      };
    return e
      ? x
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
                      r.jsx(_r, { className: "w-6 h-6 text-white" }),
                      r.jsx("h2", {
                        className: "text-lg font-semibold text-white",
                        children: "條碼掃描",
                      }),
                    ],
                  }),
                  r.jsx("button", {
                    onClick: le,
                    className:
                      "p-2 hover:bg-gray-700 rounded-lg transition-colors",
                    children: r.jsx(He, { className: "w-6 h-6 text-white" }),
                  }),
                ],
              }),
              r.jsxs("div", {
                className: "flex-1 relative",
                children: [
                  r.jsxs("div", {
                    ref: m,
                    className: "absolute inset-0 bg-black cursor-crosshair",
                    onClick: P,
                    children: [
                      r.jsx("video", {
                        ref: a,
                        className: "w-full h-full object-cover",
                        playsInline: !0,
                        muted: !0,
                      }),
                      d &&
                        r.jsxs("div", {
                          className: "absolute pointer-events-none",
                          style: {
                            left: d.x,
                            top: d.y,
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
                  S &&
                    r.jsx("div", {
                      className:
                        "bg-red-500 bg-opacity-20 border border-red-500 rounded-lg px-3 py-2 mb-3",
                      children: r.jsx("p", {
                        className: "text-red-200 text-sm",
                        children: S,
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
                          children: r.jsx(_r, {
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
                      onClick: le,
                      className:
                        "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(He, {
                        className: "w-6 h-6 text-gray-600",
                      }),
                    }),
                  ],
                }),
                r.jsxs("div", {
                  className: "flex-1 overflow-y-auto p-4",
                  children: [
                    S &&
                      r.jsx("div", {
                        className:
                          "bg-red-50 border border-red-200 rounded-lg px-3 py-2 mb-4",
                        children: r.jsx("p", {
                          className: "text-red-600 text-sm",
                          children: S,
                        }),
                      }),
                    r.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        r.jsx("div", {
                          ref: m,
                          className:
                            "relative bg-black rounded-xl overflow-hidden cursor-crosshair",
                          style: { aspectRatio: "16/9" },
                          onClick: P,
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
class yh {
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
          const g = performance.now();
          console.log(
            `⏱️ 亮燈API用時 (${i.serverName}/${i.medicineCode}): ${(
              g - c
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
const ts = new yh(),
  vh = ({ children: e }) => {
    const t = p.useRef(null),
      {
        selectedDepartmentType: n,
        apiDepartmentData: s,
        showNotification: o,
        openAddBarcodeModal: l,
        openContainerDetailModal: a,
        highlightedMedicineCode: i,
        setHighlightedMedicineCode: c,
      } = Ye(),
      { t: g } = mt(),
      [m, h] = p.useState({ x: 0, y: 0, scale: 1 }),
      [f, S] = p.useState(!1),
      [b, M] = p.useState(!1),
      [k, d] = p.useState({ x: 0, y: 0 }),
      [u, x] = p.useState(!1),
      [_, A] = p.useState(!1),
      [I, R] = p.useState(""),
      [F, le] = p.useState([]),
      [P, z] = p.useState(null),
      Z = {
        blue: "255,0,0",
        green: "0,255,0",
        red: "0,0,255",
        yellow: "0,255,255",
        purple: "255,0,255",
        cyan: "255,255,0",
      },
      E = () => {
        try {
          const C = localStorage.getItem("med_map_anchor");
          return C ? JSON.parse(C) : [];
        } catch (C) {
          return (
            console.error("Error reading canvas states from localStorage:", C),
            []
          );
        }
      },
      w = (C, $, q, ee) => {
        try {
          const ae = E(),
            xe = ae.findIndex(
              (Me) => Me.department === C && Me.canvasType === $
            ),
            ye = { department: C, canvasType: $, scale: q, position: ee };
          xe >= 0 ? (ae[xe] = ye) : ae.push(ye),
            localStorage.setItem("med_map_anchor", JSON.stringify(ae));
        } catch (ae) {
          console.error("Error saving canvas state to localStorage:", ae);
        }
      },
      V = (C, $) =>
        E().find((ee) => ee.department === C && ee.canvasType === $) || null;
    p.useEffect(() => {
      if (n) {
        const C = V(n, "InfiniteCanvas");
        if (C) h({ x: C.position.x, y: C.position.y, scale: C.scale });
        else {
          const $ = { x: 0, y: 0, scale: 1 };
          h($), w(n, "InfiniteCanvas", $.scale, $);
        }
      }
    }, [n]),
      p.useEffect(() => {
        if (!n) return;
        const C = setTimeout(() => {
          w(n, "InfiniteCanvas", m.scale, { x: m.x, y: m.y });
        }, 500);
        return () => clearTimeout(C);
      }, [m, n]),
      p.useEffect(() => {
        const C = (q) => {
            q.code === "Space" && !q.repeat && (q.preventDefault(), x(!0));
          },
          $ = (q) => {
            q.code === "Space" && (q.preventDefault(), x(!1), S(!1));
          };
        return (
          window.addEventListener("keydown", C),
          window.addEventListener("keyup", $),
          () => {
            window.removeEventListener("keydown", C),
              window.removeEventListener("keyup", $);
          }
        );
      }, []);
    const y = p.useCallback(
        (C) => {
          var q;
          if (b) return;
          if (
            (C.ctrlKey && !navigator.userAgent.includes("Mac")) ||
            (C.metaKey && navigator.userAgent.includes("Mac"))
          ) {
            C.preventDefault(), C.stopPropagation();
            const ee =
              (q = t.current) == null ? void 0 : q.getBoundingClientRect();
            if (!ee) return;
            const ae = C.clientX - ee.left,
              xe = C.clientY - ee.top,
              ye = C.deltaY > 0 ? 0.9 : 1.1,
              Me = Math.max(0.1, Math.min(5, m.scale * ye)),
              ge = Me / m.scale,
              ve = ae - (ae - m.x) * ge,
              je = xe - (xe - m.y) * ge;
            h({ x: ve, y: je, scale: Me });
          }
        },
        [m, b]
      ),
      N = p.useCallback(
        (C) => {
          b ||
            !u ||
            (S(!0), d({ x: C.clientX, y: C.clientY }), C.preventDefault());
        },
        [b, u]
      ),
      j = p.useCallback(
        (C) => {
          if (!f || b) return;
          const $ = C.clientX - k.x,
            q = C.clientY - k.y;
          h((ee) => ({ ...ee, x: ee.x + $, y: ee.y + q })),
            d({ x: C.clientX, y: C.clientY });
        },
        [f, k, b]
      ),
      H = p.useCallback(() => {
        S(!1);
      }, []),
      ie = p.useCallback(
        (C) => {
          if (!s) return [];
          const $ = [],
            q = (ee) => {
              for (const ae of ee)
                ae.med_list &&
                  Array.isArray(ae.med_list) &&
                  ae.med_list.some((ye) => ye.code == C) &&
                  (console.log("✅ 找到藥品所在櫃體:", ae.name, ae.GUID),
                  $.push(ae)),
                  ae.components &&
                    Array.isArray(ae.components) &&
                    q(ae.components),
                  ae.contents && Array.isArray(ae.contents) && q(ae.contents);
            };
          return q(s), $;
        },
        [s]
      ),
      K = p.useCallback(() => {
        try {
          const $ = localStorage.getItem("medMap_setting");
          if ($) {
            const ee = JSON.parse($).light_sec;
            if (ee != null && ee !== "") {
              const ae = Number(ee);
              if (!isNaN(ae) && ae > 0) return ae * 1e3;
            }
          }
        } catch ($) {
          console.error("讀取亮燈設定失敗:", $);
        }
        return 6e4;
      }, []),
      se = p.useCallback(() => {
        const C = { rgb_color: "255,0,0", brightness: "100" };
        try {
          const $ = localStorage.getItem("medMap_setting");
          if ($) {
            const q = JSON.parse($),
              ee = q.light_color || "red";
            return {
              rgb_color: Z[ee] || Z.red,
              brightness: String(q.brightness !== void 0 ? q.brightness : 100),
            };
          }
        } catch ($) {
          console.error("讀取亮燈設定失敗:", $);
        }
        return C;
      }, []),
      be = p.useCallback(
        async (C) => {
          if (!C.trim()) return;
          console.log("🔍 搜尋藥碼:", C);
          const $ = ie(C);
          if ($.length > 0) {
            const q = K(),
              ee = se();
            console.log(`🎯 高亮 ${$.length} 個櫃體:`, $),
              console.log(`⏱️ 亮燈時長: ${q}ms (${q / 1e3}秒)`),
              console.log("💡 亮燈設定:", ee);
            const ae = $.map((ye) => ye.GUID);
            le(ae), z(C), c(C);
            const xe = $.filter((ye) => ye.serverName && ye.serverType).map(
              (ye) => ({
                serverName: ye.serverName,
                serverType: ye.serverType,
                medicineCode: C,
                deviceType: ye.device_type,
              })
            );
            xe.length > 0 &&
              (await ts.startLighting(xe, ee.rgb_color, ee.brightness, q),
              setTimeout(() => {
                le([]), z(null), c(null);
              }, q));
          } else
            console.log("❌ 未找到包含此藥品的櫃體"), le([]), z(null), c(null);
        },
        [ie, K, se, c]
      ),
      ue = (C, $) => {
        var xe, ye;
        console.log("📍 [相機掃描-部門視圖] 藥品定位模式 - 掃描到藥品:", {
          barcode: C,
          medicineData: $,
        });
        const q =
          ((xe = $[0]) == null ? void 0 : xe.CODE) ||
          ((ye = $[0]) == null ? void 0 : ye.code);
        A(!1);
        const ee = performance.now();
        be(q);
        const ae = performance.now();
        console.log(
          `⏱️ [相機掃描-部門視圖] 亮燈用時: ${(ae - ee).toFixed(2)}ms`
        );
      },
      Ce = async (C) => {
        var $, q;
        if (C.key === "Enter") {
          if ((C.preventDefault(), !I.trim())) {
            o("請輸入條碼", "warning");
            return;
          }
          const ee = performance.now();
          try {
            console.log("🔍 [手動輸入-部門視圖] 搜尋條碼:", I);
            const ae = performance.now(),
              xe = await ke.searchByBarCode(I),
              ye = performance.now();
            if (
              (console.log(
                `⏱️ [手動輸入-部門視圖] API搜尋藥品資料用時: ${(
                  ye - ae
                ).toFixed(2)}ms`
              ),
              console.log("📋 條碼搜尋回應:", xe),
              xe.Code === 200 && xe.Data && xe.Data.length > 0)
            ) {
              const Me =
                (($ = xe.Data[0]) == null ? void 0 : $.CODE) ||
                ((q = xe.Data[0]) == null ? void 0 : q.code);
              console.log("✅ 找到藥品資料:", xe.Data),
                o("找到藥品，開始亮燈", "success");
              const ge = performance.now();
              be(Me);
              const ve = performance.now();
              console.log(
                `⏱️ [手動輸入-部門視圖] 亮燈用時: ${(ve - ge).toFixed(2)}ms`
              ),
                R("");
              const je = performance.now();
              console.log(
                `⏱️ [手動輸入-部門視圖] 總用時: ${(je - ee).toFixed(2)}ms`
              );
            } else
              xe.Code === -200 && xe.Result === "查無資料"
                ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                  o("查無條碼資料，請建立條碼", "warning"),
                  l(I),
                  R(""))
                : (console.log("❌ 搜尋失敗:", xe.Result),
                  o(xe.Result || "搜尋失敗", "error"));
          } catch (ae) {
            console.error("條碼搜尋錯誤:", ae),
              o("搜尋失敗，請稍後再試", "error");
          }
        }
      };
    p.useEffect(
      () => () => {
        ts.cleanup();
      },
      []
    ),
      p.useEffect(() => {
        if (i) {
          console.log("🔔 Context highlightedMedicineCode 變化:", i);
          const C = ie(i);
          if (C.length > 0) {
            const $ = C.map((q) => q.GUID);
            le($), z(i), console.log("✨ UI 高亮已更新:", $);
          }
        } else le([]), z(null);
      }, [i, ie]);
    const [de, Q] = p.useState(null),
      [he, Ne] = p.useState({ x: 0, y: 0 }),
      T = (C) => {
        if (C.length < 2) return null;
        const $ = C[0],
          q = C[1];
        return Math.sqrt(
          Math.pow(q.clientX - $.clientX, 2) +
            Math.pow(q.clientY - $.clientY, 2)
        );
      },
      fe = (C) => {
        if (C.length === 1) return { x: C[0].clientX, y: C[0].clientY };
        const $ = C[0],
          q = C[1];
        return {
          x: ($.clientX + q.clientX) / 2,
          y: ($.clientY + q.clientY) / 2,
        };
      },
      B = p.useCallback(
        (C) => {
          if (!b) {
            if (C.touches.length === 2) {
              const $ = T(C.touches),
                q = fe(C.touches);
              Q($), Ne(q);
            } else if (C.touches.length === 1) {
              const $ = C.touches[0];
              d({ x: $.clientX, y: $.clientY }), S(!0);
            }
          }
        },
        [b]
      ),
      D = p.useCallback(
        (C) => {
          var $;
          if (!b) {
            if ((C.preventDefault(), C.touches.length === 2 && de !== null)) {
              const q = T(C.touches),
                ee = fe(C.touches);
              if (q && de) {
                const ae =
                  ($ = t.current) == null ? void 0 : $.getBoundingClientRect();
                if (!ae) return;
                const xe = q / de,
                  ye = Math.max(0.1, Math.min(5, m.scale * xe)),
                  Me = ee.x - ae.left,
                  ge = ee.y - ae.top,
                  ve = ye / m.scale,
                  je = Me - (Me - m.x) * ve,
                  Ie = ge - (ge - m.y) * ve;
                h({ x: je, y: Ie, scale: ye }), Q(q), Ne(ee);
              }
            } else if (C.touches.length === 1 && f) {
              const q = C.touches[0],
                ee = q.clientX - k.x,
                ae = q.clientY - k.y;
              h((xe) => ({ ...xe, x: xe.x + ee, y: xe.y + ae })),
                d({ x: q.clientX, y: q.clientY });
            }
          }
        },
        [m, de, f, k, b]
      ),
      ne = p.useCallback(() => {
        Q(null), S(!1);
      }, []);
    p.useEffect(() => {
      const C = t.current;
      if (C)
        return (
          C.addEventListener("wheel", y, { passive: !1 }),
          () => C.removeEventListener("wheel", y)
        );
    }, [y]),
      p.useCallback(() => {
        h({ x: 0, y: 0, scale: 1 });
      }, []);
    const U = (() => {
      if (!s || s.length === 0) return [];
      const C = s,
        $ = [];
      for (const q of C)
        if (q.type === "調劑台" || q.type === "藥庫")
          for (const ee of q.contents)
            $.push({
              GUID: ee.GUID,
              type: ee.type,
              name: `${ee.name}`,
              position: ee.position,
              dimensions: ee.dimensions,
              med_list: ee.med_list,
              serverName: ee.serverName,
              serverType: ee.serverType,
              Master_GUID: q.GUID,
              contents: ee.contents || [],
            });
        else q.componets && q.componets.length > 0 && $.push(...q.componets);
      return $;
    })();
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
                value: I,
                onChange: (C) => R(C.target.value),
                onKeyPress: Ce,
                placeholder: "輸入條碼或掃描...",
                className:
                  "px-4 py-2 w-50 focus:outline-none text-gray-700 disabled:opacity-50",
              }),
              r.jsx("button", {
                onClick: () => A(!0),
                className: "p-2",
                title: "掃描條碼",
                children: r.jsx(_r, { className: "w-6 h-6 text-blue-600" }),
              }),
            ],
          }),
        }),
        r.jsx("div", {
          className: "absolute bottom-4 right-4 z-10 flex gap-2",
          children: r.jsx("button", {
            onClick: () => M(!b),
            className: `p-3 rounded-lg shadow-lg transition-colors ${
              b
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`,
            title: g(b ? "canvas.unlockCanvas" : "canvas.lockCanvas"),
            children: b
              ? r.jsx(zu, { className: "w-6 h-6" })
              : r.jsx(Fu, { className: "w-6 h-6" }),
          }),
        }),
        r.jsx("div", {
          ref: t,
          className: `w-full h-full relative ${
            u && !b ? "cursor-grab" : "cursor-default"
          } ${f ? "cursor-grabbing" : ""}`,
          onMouseDown: N,
          onMouseMove: j,
          onMouseUp: H,
          onMouseLeave: H,
          onTouchStart: B,
          onTouchMove: D,
          onTouchEnd: ne,
          children: r.jsxs("div", {
            className: "absolute inset-0 origin-top-left",
            style: {
              transform: `translate(${m.x}px, ${m.y}px) scale(${m.scale})`,
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
                  U.map((C) =>
                    r.jsx(
                      xh,
                      {
                        component: C,
                        scale: m.scale,
                        isLocked: b,
                        isHighlighted: F.includes(C.GUID),
                        onContainerClick: ($) => {
                          console.log("🖱️ 點擊櫃體，傳遞亮燈藥品代碼:", P),
                            a($, P);
                        },
                      },
                      C.GUID
                    )
                  ),
                  e,
                ],
              }),
            ],
          }),
        }),
        r.jsx(Vo, {
          isOpen: _,
          onClose: () => A(!1),
          onScanSuccess: ue,
          mode: "med_light_location_mode",
        }),
      ],
    });
  },
  Hs = ({ content: e, isAdminMode: t }) => {
    const {
        openMedBoxModal: n,
        openAddMedBoxModal: s,
        openListDrawModal: o,
        openGridDrawModal: l,
        openAddShelfDrawContainerModal: a,
        openAddSubContainerModal: i,
        openAddStoreItemModal: c,
        setSelectedMedBox: g,
        setModalMode: m,
        setMedBoxModalOpen: h,
        showNotification: f,
        triggerRefresh: S,
        openEditStoreShelfModal: b,
        openEditParentContainerModal: M,
        reloadMedMapData: k,
      } = Ye(),
      { t: d } = mt(),
      [u, x] = p.useState(!1),
      [_, A] = p.useState(""),
      [I, R] = p.useState(!1),
      [F, le] = p.useState(e.name);
    p.useEffect(() => {
      le(e.name);
    }, [e.name]);
    const P = (N) => {
        N.stopPropagation(), A(e.name || ""), x(!0);
      },
      z = (N) => {
        N.stopPropagation(), x(!1), A("");
      },
      Z = async (N) => {
        if ((N.stopPropagation(), !_.trim())) {
          f("名稱不能為空", "error");
          return;
        }
        if (_ === e.name) {
          x(!1);
          return;
        }
        R(!0);
        try {
          const j = [
            {
              GUID: e.GUID,
              name: _.trim(),
              Master_GUID: e.Master_GUID,
              position: e.gird_position,
              serverName: e.serverName,
              serverType: e.serverType,
            },
          ];
          let H;
          if (e.type === "store_shelves" || e.type === "dispensing_shelves")
            H = await ke.updateMedMapShelf(j);
          else if (e.type === "sub_container") H = await ke.updateSubSection(j);
          else if (e.type === "parent_container")
            H = await ke.updateMedMapSection(j);
          else {
            f("不支援的容器類型", "error"), R(!1);
            return;
          }
          H.Code === 200
            ? (f("名稱更新成功", "success"), x(!1), await k())
            : f(H.Result || "更新失敗", "error");
        } catch (j) {
          console.error("更新名稱失敗:", j), f("更新失敗，請稍後再試", "error");
        } finally {
          R(!1);
        }
      },
      E = (N) => {
        switch (N) {
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
      w = (N) => {
        switch (N) {
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
      V = (N) => {
        switch (N) {
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
      y = (N) => {
        switch (N) {
          case "parent_container":
            return d("type.parentContainer");
          case "sub_container":
            return d("type.subContainer");
          case "dispensing_shelves":
            return d("type.medBoxShelf");
          case "store_shelves":
            return d("type.storeShelf");
          case "grid_draw":
            return d("type.gridDraw");
          case "list_draw":
            return d("type.listDraw");
          case "med_box":
            return d("type.medBox");
          default:
            return N;
        }
      };
    switch (e.type) {
      case "sub_container":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${E(
            e.type || 0
          )} ${w(e.type || 0)}`,
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                u
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: _,
                          onChange: (N) => A(N.target.value),
                          onClick: (N) => N.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: I,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: Z,
                          disabled: I,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(Fs, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: z,
                          disabled: I,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(He, {
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
                          children: F,
                        }),
                        r.jsx("button", {
                          onClick: P,
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(mr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !u &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${V(
                      e.type
                    )}`,
                    children: y(e.type),
                  }),
              ],
            }),
            e.type !== "none" &&
              !u &&
              r.jsx("div", {
                className: "flex items-center space-x-1",
                children: r.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (N) => {
                    N.stopPropagation(), a(e);
                  },
                  title: d("modal.add"),
                  children: r.jsx(vt, { className: "w-6 h-6 text-green-700" }),
                }),
              }),
          ],
        });
      case "parent_container":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${E(
            e.type || 0
          )} ${w(
            e.type || 0
          )} cursor-pointer hover:bg-black/5 transition-colors`,
          onClick: (N) => {
            u || M(e);
          },
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                u
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: _,
                          onChange: (N) => A(N.target.value),
                          onClick: (N) => N.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: I,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: (N) => {
                            N.stopPropagation(), Z(N);
                          },
                          disabled: I,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(Fs, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: (N) => {
                            N.stopPropagation(), z(N);
                          },
                          disabled: I,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(He, {
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
                          children: F,
                        }),
                        r.jsx("button", {
                          onClick: (N) => {
                            N.stopPropagation(), P(N);
                          },
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(mr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" && !u
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${V(
                        e.type
                      )}`,
                      children: y(e.type),
                    })
                  : null,
              ],
            }),
            e.type !== "none" &&
              !u &&
              r.jsx("div", {
                className: "flex items-center space-x-1",
                children: r.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (N) => {
                    N.stopPropagation(), i(e);
                  },
                  title: d("modal.add"),
                  children: r.jsx(vt, { className: "w-6 h-6 text-green-700" }),
                }),
              }),
          ],
        });
      case "med_box":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${E(
            e.type || 0
          )} ${w(e.type || 0)}`,
          children: [
            r.jsx("div", {
              className: "flex items-center mr-4",
              children:
                e.type != "parent_container"
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${V(
                        e.type
                      )}`,
                      children: y(e.type),
                    })
                  : null,
            }),
            r.jsx("div", {
              className: "flex items-center space-x-1",
              children: r.jsx("button", {
                className: "p-1 hover:bg-black/10 rounded transition-colors",
                onClick: (N) => {
                  N.stopPropagation(), n(e);
                },
                title: d("modal.settings"),
                children: r.jsx(sn, { className: "w-6 h-6 text-gray-600" }),
              }),
            }),
          ],
        });
      case "dispensing_shelves":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${E(
            e.type || 0
          )} ${w(e.type || 0)}`,
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                u
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: _,
                          onChange: (N) => A(N.target.value),
                          onClick: (N) => N.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: I,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: Z,
                          disabled: I,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(Fs, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: z,
                          disabled: I,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(He, {
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
                          children: F,
                        }),
                        r.jsx("button", {
                          onClick: P,
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(mr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !u &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${V(
                      e.type
                    )}`,
                    children: y(e.type),
                  }),
              ],
            }),
            r.jsxs("div", {
              className: "flex items-center space-x-1",
              children: [
                r.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (N) => {
                    N.stopPropagation();
                    const j = {
                      GUID: `new_medbox_${Date.now()}`,
                      name: "",
                      box_type: "",
                      width: [],
                      width_index: 0,
                      med_info: [],
                      parentShelf: e,
                    };
                    g(j), m("add"), h(!0);
                  },
                  title: d("modal.add"),
                  children: r.jsx(vt, { className: "w-6 h-6 text-green-700" }),
                }),
                r.jsx("button", {
                  className: "p-1 hover:bg-black/10 rounded transition-colors",
                  onClick: (N) => {},
                  title: d("modal.settings"),
                  children: r.jsx(sn, { className: "w-6 h-6 text-gray-600" }),
                }),
              ],
            }),
          ],
        });
      case "store_shelves":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${E(
            e.type || 0
          )} ${w(
            e.type || 0
          )} cursor-pointer hover:bg-black/5 transition-colors`,
          onClick: (N) => {
            u || b(e);
          },
          children: [
            r.jsxs("div", {
              className: "flex items-center space-x-2 mr-6 flex-1",
              children: [
                u
                  ? r.jsxs("div", {
                      className: "flex items-center space-x-2 flex-1",
                      children: [
                        r.jsx("input", {
                          type: "text",
                          value: _,
                          onChange: (N) => A(N.target.value),
                          onClick: (N) => N.stopPropagation(),
                          className:
                            "text-base font-semibold text-gray-800 border-2 border-blue-400 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500",
                          disabled: I,
                          autoFocus: !0,
                        }),
                        r.jsx("button", {
                          onClick: (N) => {
                            N.stopPropagation(), Z(N);
                          },
                          disabled: I,
                          className:
                            "p-1 hover:bg-green-100 rounded transition-colors disabled:opacity-50",
                          title: "更新",
                          children: r.jsx(Fs, {
                            className: "w-5 h-5 text-green-600",
                          }),
                        }),
                        r.jsx("button", {
                          onClick: (N) => {
                            N.stopPropagation(), z(N);
                          },
                          disabled: I,
                          className:
                            "p-1 hover:bg-red-100 rounded transition-colors disabled:opacity-50",
                          title: "取消",
                          children: r.jsx(He, {
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
                          children: F,
                        }),
                        r.jsx("button", {
                          onClick: (N) => {
                            N.stopPropagation(), P(N);
                          },
                          className:
                            "p-1 hover:bg-black/10 rounded transition-colors",
                          title: "編輯名稱",
                          children: r.jsx(mr, {
                            className: "w-4 h-4 text-gray-600",
                          }),
                        }),
                      ],
                    }),
                e.type != "parent_container" &&
                  !u &&
                  r.jsx("span", {
                    className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${V(
                      e.type
                    )}`,
                    children: y(e.type),
                  }),
              ],
            }),
            r.jsx("div", {
              className: "flex items-center space-x-1",
              children: r.jsx("button", {
                className: "p-1 hover:bg-black/10 rounded transition-colors",
                onClick: (N) => {
                  N.stopPropagation(), c(e);
                },
                title: d("modal.add"),
                children: r.jsx(vt, { className: "w-6 h-6 text-green-700" }),
              }),
            }),
          ],
        });
      case "list_draw":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${E(
            e.type || 0
          )} ${w(e.type || 0)}`,
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
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${V(
                        e.type
                      )}`,
                      children: y(e.type),
                    })
                  : null,
              ],
            }),
            r.jsx("button", {
              className: "p-1 hover:bg-black/10 rounded transition-colors",
              onClick: (N) => {
                N.stopPropagation(), o(e);
              },
              title: d("modal.settings"),
              children: r.jsx(sn, { className: "w-6 h-6 text-gray-600" }),
            }),
          ],
        });
      case "grid_draw":
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${E(
            e.type || 0
          )} ${w(e.type || 0)}`,
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
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${V(
                        e.type
                      )}`,
                      children: y(e.type),
                    })
                  : null,
              ],
            }),
            r.jsx("button", {
              className: "p-1 hover:bg-black/10 rounded transition-colors",
              onClick: (N) => {
                N.stopPropagation(), l(e);
              },
              title: d("modal.settings"),
              children: r.jsx(sn, { className: "w-6 h-6 text-gray-600" }),
            }),
          ],
        });
      default:
        return r.jsxs("div", {
          className: `flex items-center justify-between px-3 py-2 border-b-2 ${E(
            e.type || 0
          )} ${w(e.type || 0)}`,
          children: [
            r.jsx("div", {
              className: "flex items-center space-x-2 mr-6",
              children:
                e.type != "parent_container"
                  ? r.jsx("span", {
                      className: `text-sm px-3 py-1 rounded-full whitespace-nowrap ${V(
                        e.type
                      )}`,
                      children: y(e.type),
                    })
                  : null,
            }),
            e.type !== "none" &&
              r.jsx("button", {
                className: "p-1 hover:bg-black/10 rounded transition-colors",
                title: d("modal.settings"),
                children: r.jsx(sn, { className: "w-6 h-6 text-gray-600" }),
              }),
          ],
        });
    }
  },
  Hu = p.forwardRef(({ children: e }, t) => {
    const n = p.useRef(null),
      {
        selectedDepartmentType: s,
        apiDepartmentData: o,
        setSidebarOpen: l,
        openAddParentContainerModal: a,
        openEditStoreItemModal: i,
        openQRCodeScannerModal: c,
        openAddBarcodeModal: g,
        showNotification: m,
        isAdminMode: h,
      } = Ye(),
      [f, S] = p.useState({ x: 0, y: 0, scale: 1 }),
      [b, M] = p.useState(!1),
      [k, d] = p.useState(!1),
      [u, x] = p.useState({ x: 0, y: 0 }),
      [_, A] = p.useState(!1),
      [I, R] = p.useState(""),
      [F, le] = p.useState(!1),
      [P, z] = p.useState(null),
      [Z, E] = p.useState(!1),
      [w, V] = p.useState({
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
      [y, N] = p.useState(null),
      j = p.useRef({}),
      H = () =>
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0,
      ie = 8,
      K = () => {
        try {
          const v = localStorage.getItem("med_map_anchor");
          return v ? JSON.parse(v) : [];
        } catch (v) {
          return (
            console.error("Error reading canvas states from localStorage:", v),
            []
          );
        }
      },
      se = (v, J, W, O) => {
        try {
          const Y = K(),
            L = Y.findIndex((te) => te.department === v && te.canvasType === J),
            re = { department: v, canvasType: J, scale: W, position: O };
          L >= 0 ? (Y[L] = re) : Y.push(re),
            localStorage.setItem("med_map_anchor", JSON.stringify(Y));
        } catch (Y) {
          console.error("Error saving canvas state to localStorage:", Y);
        }
      },
      be = (v, J) =>
        K().find((O) => O.department === v && O.canvasType === J) || null;
    p.useEffect(() => {
      if (s) {
        const v = be(s, "drugCanvas");
        if (v) S({ x: v.position.x, y: v.position.y, scale: v.scale });
        else {
          const J = { x: 0, y: 0, scale: 1 };
          S(J), se(s, "drugCanvas", J.scale, J);
        }
      }
    }, [s]),
      p.useEffect(() => {
        if (!s) return;
        const v = setTimeout(() => {
          se(s, "drugCanvas", f.scale, { x: f.x, y: f.y });
        }, 500);
        return () => clearTimeout(v);
      }, [f, s]);
    const ue = (v) =>
        [
          "parent_container",
          "sub_container",
          "dispensing_shelves",
          "store_shelves",
          "grid_draw",
          "list_draw",
          "med_box",
        ].includes(v),
      Ce = (v) =>
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
        }[v] || []),
      de = (v) => {
        const [J, W] = v.split(",").map(Number);
        return { row: J || 0, col: W || 0 };
      },
      Q = (v, J) => `${v},${J}`,
      he = (v, J) => {
        const W = (Y, L = null) => {
            if (Y.GUID === v) return { container: Y, parent: L };
            if (Y.contents)
              for (const re of Y.contents) {
                const te = W(re, Y);
                if (te) return te;
              }
            return null;
          },
          O = nt();
        for (const Y of O) {
          const L = W(Y);
          if (L) return L;
        }
        return null;
      },
      Ne = (v, J) => {
        if (!v.contents) return;
        const { sortedContents: W, maxRow: O, maxCol: Y } = _e(v.contents),
          L = J;
        if (!L) return;
        const re = de(L.gird_position);
        console.log(O), console.log(Y), console.log(L), console.log(re);
        for (let te = 0; te < W.length; te++) {
          const X = W[te],
            G = de(X.gird_position);
          if (G.row === re.row && G.col > re.col)
            (X.gird_position = Q(G.row, G.col - 1)),
              (j.current[X.GUID] = {
                GUID: X.GUID,
                Master_GUID: v.GUID,
                position: `${G.row},${G.col - 1}`,
                serverName: v.serverName,
                serverType: v.serverType,
                type: X.type,
                containerData: X,
              });
          else if (G.row > re.row) {
            const pe = G.col === 0 ? Y : G.col - 1,
              me = G.col === 0 ? G.row - 1 : G.row;
            (X.gird_position = Q(me, pe)),
              (j.current[X.GUID] = {
                GUID: X.GUID,
                Master_GUID: v.GUID,
                position: `${me},${pe}`,
                serverName: v.serverName,
                serverType: v.serverType,
                type: X.type,
                containerData: X,
              });
          }
        }
        return console.log("移除更新其餘容器", W), W;
      },
      T = (v, J, W, O, Y) => {
        v.contents || (v.contents = []);
        let L = Math.max(
            1,
            ...v.contents.map((X) => de(X.gird_position || "0,0").col + 1)
          ),
          re = Math.max(
            1,
            ...v.contents.map((X) => de(X.gird_position || "0,0").row + 1)
          );
        console.log("--------", v),
          console.log("目標容器最大列", L),
          console.log("目標容器最大行", re),
          (v.type == "sub_container" ||
            v.type == "parent_container" ||
            v.type == "調劑台" ||
            v.type == "藥庫") &&
            (L = +v.oriMaxCol + 1),
          Y != null &&
            Y === "right" &&
            J.type !== "med_box" &&
            O == L &&
            ((W = W + 1),
            v.contents.filter((G) => `${W},0` == G.gird_position).length > 0
              ? (O = L - 1)
              : (O = 0)),
          console.log(W),
          console.log(O);
        const te = v.contents.filter((X) => {
          const G = de(X.gird_position || "0,0");
          return G.row > W || (G.row === W && G.col >= O);
        });
        te.sort((X, G) => {
          const pe = de(X.gird_position || "0,0"),
            me = de(G.gird_position || "0,0");
          return pe.row !== me.row ? me.row - pe.row : me.col - pe.col;
        }),
          console.log("會做變更的目標容器", te),
          te.forEach((X) => {
            const G = de(X.gird_position || "0,0");
            let pe = G.row,
              me = G.col;
            X.type === "med_box" || me < L - 1
              ? (me += 1)
              : ((pe += 1), (me = 0)),
              (X.gird_position = `${pe},${me}`),
              (j.current[X.GUID] = {
                GUID: X.GUID,
                Master_GUID: v.GUID,
                position: `${pe},${me}`,
                serverName: v.serverName,
                serverType: v.serverType,
                type: X.type,
                containerData: X,
              }),
              console.log(
                `Shifted container ${X.GUID} from ${G.row},${G.col} to ${pe},${me}`
              );
          }),
          v.contents.length == 0 && ((W = 0), (O = 0)),
          (J.gird_position = `${W},${O}`),
          (J.Master_GUID = v.GUID),
          console.log(`Inserted container ${J.GUID} at position ${W},${O}`),
          v.contents.push(J),
          (j.current[J.GUID] = {
            GUID: J.GUID,
            Master_GUID: v.GUID,
            position: `${W},${O}`,
            serverName: v.serverName,
            serverType: v.serverType,
            type: J.type,
            containerData: J,
          }),
          J.type === "dispensing_shelves" &&
            J.contents &&
            J.contents.forEach((X) => {
              X.type === "med_box" &&
                (j.current[X.GUID] = {
                  GUID: X.GUID,
                  Master_GUID: X.Master_GUID,
                  position: X.gird_position,
                  serverName: v.serverName,
                  serverType: v.serverType,
                  type: X.type,
                  containerData: X,
                });
            });
      },
      fe = (v, J, W) => {
        const O = v.getBoundingClientRect(),
          Y = O.left + O.width / 2,
          L = O.top + O.height / 2,
          re = J - Y,
          te = W - L;
        return Math.abs(re) > Math.abs(te)
          ? re > 0
            ? "right"
            : "left"
          : te > 0
          ? "bottom"
          : "top";
      },
      B = (v, J, W, O) => {
        if (!k) return;
        if ((O.preventDefault(), O.stopPropagation(), w.floatingElement))
          try {
            w.floatingElement.parentNode &&
              w.floatingElement.parentNode.removeChild(w.floatingElement);
          } catch (pe) {
            console.error("清除舊浮動元素失敗:", pe);
          }
        const Y = H(),
          L =
            "touches" in O
              ? O.touches[0].clientX
              : ("pointerId" in O, O.clientX),
          re =
            "touches" in O
              ? O.touches[0].clientY
              : ("pointerId" in O, O.clientY),
          te = W.getBoundingClientRect(),
          X = { x: L - te.left, y: re - te.top },
          G = W.cloneNode(!0);
        (G.style.position = "fixed"),
          (G.style.left = `${L - X.x}px`),
          (G.style.top = `${re - X.y}px`),
          (G.style.width = `${te.width}px`),
          (G.style.height = `${te.height}px`),
          (G.style.zIndex = "9999"),
          (G.style.opacity = "0.8"),
          (G.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)"),
          (G.style.pointerEvents = "none"),
          document.body.appendChild(G),
          console.log("開始拖曳 stockItem:", v),
          console.log("來源 shelf:", J),
          V({
            isDragging: !0,
            draggedContainer: null,
            draggedElement: W,
            floatingElement: G,
            originalParent: null,
            originalPosition: "",
            originalIndex: -1,
            mouseOffset: X,
            isMobileDrag: Y,
            originalData: null,
            draggedStockItem: v,
            draggedStockShelf: J,
          });
      },
      D = (v, J, W) => {
        if (!k || !ue(v.type)) return;
        if (
          ((j.current = {}),
          W.preventDefault(),
          W.stopPropagation(),
          w.floatingElement)
        )
          try {
            w.floatingElement.parentNode &&
              w.floatingElement.parentNode.removeChild(w.floatingElement);
          } catch (pe) {
            console.error("清除舊浮動元素失敗:", pe);
          }
        const O = H(),
          Y =
            "touches" in W
              ? W.touches[0].clientX
              : ("pointerId" in W, W.clientX),
          L =
            "touches" in W
              ? W.touches[0].clientY
              : ("pointerId" in W, W.clientY),
          re = J.getBoundingClientRect(),
          te = { x: Y - re.left, y: L - re.top },
          X = he(v.GUID);
        if (!X) return;
        console.log("拖曳目標", v), console.log("拖曳目標", X);
        const G = J.cloneNode(!0);
        if (
          ((G.style.position = "fixed"),
          (G.style.left = `${Y - te.x}px`),
          (G.style.top = `${L - te.y}px`),
          (G.style.width = `${re.width}px`),
          (G.style.height = `${re.height}px`),
          (G.style.zIndex = "9999"),
          (G.style.opacity = "0.8"),
          (G.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)"),
          (G.style.pointerEvents = "none"),
          document.body.appendChild(G),
          O)
        ) {
          const pe = X.parent.contents.findIndex((De) => De.GUID === v.GUID);
          X.parent.contents.splice(pe, 1), console.log(pe), X.parent;
          const me = Ne(X.parent, v);
          (X.parent.contents = me),
            console.log(X.parent),
            V({
              isDragging: !0,
              draggedContainer: v,
              draggedElement: J,
              floatingElement: G,
              originalParent: X.parent,
              originalPosition: v.gird_position,
              originalIndex: pe,
              mouseOffset: te,
              isMobileDrag: !1,
              originalData: null,
            });
        } else {
          const pe = X.parent.contents.findIndex((Se) => Se.GUID === v.GUID);
          X.parent.contents.splice(pe, 1), console.log(pe);
          const me = X.parent,
            De = Ne(X.parent, v);
          (X.parent.contents = De),
            console.log(X.parent),
            V({
              isDragging: !0,
              draggedContainer: v,
              draggedElement: J,
              floatingElement: G,
              originalParent: me,
              originalPosition: v.gird_position,
              originalIndex: pe,
              mouseOffset: te,
              isMobileDrag: !1,
              originalData: null,
            });
        }
      },
      ne = (v) => {
        if (!w.isDragging || !w.floatingElement) return;
        const J = "touches" in v ? v.touches[0].clientX : v.clientX,
          W = "touches" in v ? v.touches[0].clientY : v.clientY;
        if (
          ((w.floatingElement.style.left = `${J - w.mouseOffset.x}px`),
          (w.floatingElement.style.top = `${W - w.mouseOffset.y}px`),
          w.draggedStockItem)
        ) {
          const L = document.elementFromPoint(J, W),
            re = L == null ? void 0 : L.closest("[data-stock-guid]");
          if (re) {
            const X = re.getAttribute("data-stock-guid"),
              G = (me) => {
                for (const De of me) {
                  if (De.type === "store_shelves" && De.medMapStock) {
                    const Se = De.medMapStock.find((Te) => Te.GUID === X);
                    if (Se) return { stockItem: Se, shelf: De };
                  }
                  if (De.contents) {
                    const Se = G(De.contents);
                    if (Se) return Se;
                  }
                }
                return null;
              },
              pe = G(o);
            if (pe && pe.stockItem.GUID !== w.draggedStockItem.GUID) {
              const me = re.getBoundingClientRect(),
                De = me.left + me.width / 2,
                Se = J < De ? "left" : "right";
              N({
                container: pe.shelf,
                direction: null,
                element: re,
                stockItem: pe.stockItem,
                stockItemDirection: Se,
              });
              return;
            }
          }
          const te = L == null ? void 0 : L.closest("[data-container-guid]");
          if (te) {
            const X = te.getAttribute("data-container-guid"),
              G = he(X);
            if (G && G.container.type === "store_shelves") {
              N({ container: G.container, direction: null, element: te });
              return;
            }
          }
          N(null);
          return;
        }
        const O = document.elementFromPoint(J, W),
          Y = O == null ? void 0 : O.closest("[data-container-guid]");
        if (Y) {
          const L = Y.getAttribute("data-container-guid"),
            re = he(L);
          if (re && Ce(w.draggedContainer.type).includes(re.container.type)) {
            const X = fe(Y, J, W);
            if (
              w.draggedContainer.type === "med_box" &&
              !["left", "right"].includes(X)
            ) {
              N(null);
              return;
            }
            N({ container: re.container, direction: X, element: Y });
            return;
          }
        }
        N(null);
      },
      ce = async (v) => {
        if (!w.isDragging) return;
        if (w.floatingElement)
          try {
            w.floatingElement.parentNode &&
              w.floatingElement.parentNode.removeChild(w.floatingElement);
          } catch (Y) {
            console.error("清除浮動元素失敗:", Y);
          }
        if (w.draggedStockItem && w.draggedStockShelf) {
          if (
            (console.log("StockItem 拖曳結束"),
            console.log("Drop Target:", y),
            y)
          ) {
            const Y = [];
            if (y.stockItem && y.stockItemDirection) {
              console.log(
                `拖曳到 stockItem ${y.stockItem.GUID} 的 ${y.stockItemDirection} 邊`
              );
              const L = y.container,
                re = w.draggedStockShelf,
                te = w.draggedStockItem,
                X = Number(y.stockItem.location),
                G = Number(te.location);
              if (L.GUID === re.GUID) {
                console.log("同一層架內移動");
                const me = re.medMapStock.findIndex(
                  (Te) => Te.GUID === te.GUID
                );
                me !== -1 && re.medMapStock.splice(me, 1),
                  re.medMapStock.forEach((Te) => {
                    const gt = Number(Te.location);
                    gt > G &&
                      ((Te.location = String(gt - 1)), Y.push({ ...Te }));
                  });
                let De;
                const Se = X > G ? X - 1 : X;
                y.stockItemDirection === "left" ? (De = Se) : (De = Se + 1),
                  re.medMapStock.forEach((Te) => {
                    const gt = Number(Te.location);
                    gt >= De &&
                      ((Te.location = String(gt + 1)), Y.push({ ...Te }));
                  }),
                  (te.location = String(De)),
                  re.medMapStock.push(te),
                  re.medMapStock.sort(
                    (Te, gt) => Number(Te.location) - Number(gt.location)
                  ),
                  Y.push({ ...te });
              } else {
                console.log("不同層架間移動");
                const me = re.medMapStock.findIndex(
                  (Se) => Se.GUID === te.GUID
                );
                me !== -1 && re.medMapStock.splice(me, 1),
                  re.medMapStock.forEach((Se) => {
                    const Te = Number(Se.location);
                    Te > G &&
                      ((Se.location = String(Te - 1)), Y.push({ ...Se }));
                  });
                let De;
                y.stockItemDirection === "left" ? (De = X) : (De = X + 1),
                  L.medMapStock.forEach((Se) => {
                    const Te = Number(Se.location);
                    Te >= De &&
                      ((Se.location = String(Te + 1)), Y.push({ ...Se }));
                  }),
                  (te.location = String(De)),
                  (te.shelf_guid = L.GUID),
                  L.medMapStock.push(te),
                  L.medMapStock.sort(
                    (Se, Te) => Number(Se.location) - Number(Te.location)
                  ),
                  Y.push({ ...te });
              }
            } else if (y.container.type === "store_shelves") {
              console.log("拖曳到 store_shelves 容器");
              const L = y.container,
                re = w.draggedStockShelf,
                te = w.draggedStockItem,
                X = Number(te.location),
                G = re.medMapStock.findIndex((pe) => pe.GUID === te.GUID);
              G !== -1 &&
                (re.medMapStock.splice(G, 1),
                re.medMapStock.forEach((pe) => {
                  const me = Number(pe.location);
                  me > X && ((pe.location = String(me - 1)), Y.push({ ...pe }));
                })),
                (te.location = "0"),
                (te.shelf_guid = L.GUID),
                L.medMapStock || (L.medMapStock = []),
                L.medMapStock.forEach((pe) => {
                  const me = Number(pe.location);
                  (pe.location = String(me + 1)), Y.push({ ...pe });
                }),
                L.medMapStock.push(te),
                L.medMapStock.sort(
                  (pe, me) => Number(pe.location) - Number(me.location)
                ),
                Y.push({ ...te });
            }
            if (Y.length > 0) {
              console.log("準備更新的 stockItems:", Y);
              try {
                const L = await ke.updateStock(Y);
                L.Code === 200
                  ? m("藥品位置更新成功", "success")
                  : m(L.Result || "更新失敗", "error");
              } catch (L) {
                console.error("更新 stockItem 失敗:", L),
                  m("更新失敗，請稍後再試", "error");
              }
            }
          }
          V({
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
            N(null);
          return;
        }
        let J = null,
          W = null,
          O = null;
        if (
          (console.log("Drop Target:", y),
          console.log("Is Mobile Drag:", w.isMobileDrag),
          w.isMobileDrag)
        )
          if (y) {
            (J = y.direction), (O = y.container);
            const Y = he(w.draggedContainer.GUID);
            if (Y) {
              const pe = Y.parent.contents.findIndex(
                (De) => De.GUID === w.draggedContainer.GUID
              );
              Y.parent.contents.splice(pe, 1);
              const me = Ne(Y.parent, w.draggedContainer);
              Y.parent.contents = me;
            }
            const L = de(y.container.gird_position || "0,0");
            let re = L.row,
              te = L.col;
            switch (y.direction) {
              case "top":
                re = Math.max(0, L.row);
                break;
              case "bottom":
                re = L.row + 1;
                break;
              case "left":
                te = Math.max(0, L.col);
                break;
              case "right":
                te = L.col + 1;
                break;
            }
            const X = he(y.container.Master_GUID || y.container.GUID);
            let G = (X == null ? void 0 : X.container) || y.container;
            if (
              (w.draggedContainer.class != y.class && (G = y),
              w.draggedContainer.type === "med_box" &&
                y.container.type !== "med_box")
            )
              if (
                (console.log("藥盒移動目標到層架上"),
                (G = y.container),
                G.contents.length > 0)
              ) {
                let pe = 0,
                  me = 0;
                G.contents.forEach((De) => {
                  const Se = de(De.gird_position || "0,0").row,
                    Te = de(De.gird_position || "0,0").col;
                  pe > Se && (pe = Se), me > Te && (me = Te);
                });
                for (let De = 0; De <= me; De++)
                  for (let Se = 0; Se <= pe; Se++) {
                    const Te = `${De},${Se}`;
                    G.contents.filter((Ae) => Ae.grid_position === Te)
                      .length === 0 && ((re = De), (te = Se));
                  }
              } else (re = 0), (te = 0);
            (W = G), T(G, w.draggedContainer, re, te, y.direction);
          } else (J = null), (O = null), (W = w.originalParent);
        else if (y) {
          (J = y.direction), (O = y.container);
          const Y = de(y.container.gird_position || "0,0");
          let L = Y.row,
            re = Y.col;
          switch (y.direction) {
            case "top":
              L = Math.max(0, Y.row);
              break;
            case "bottom":
              L = Y.row + 1;
              break;
            case "left":
              re = Math.max(0, Y.col);
              break;
            case "right":
              re = Y.col + 1;
              break;
          }
          const te = he(y.container.Master_GUID || y.container.GUID);
          console.log("------目標容器", y),
            console.log("------拖曳容器", w.draggedContainer);
          let X = (te == null ? void 0 : te.container) || y.container;
          if (
            (console.log(w.draggedContainer.class),
            console.log(y.container.class),
            console.log(w.draggedContainer.class != y.container.class),
            w.draggedContainer.class != y.container.class &&
              ((X = y.container),
              console.log("------這邊顯示放到上層容器現象"),
              console.log("------目標容器", y),
              console.log("------拖曳容器", w.draggedContainer),
              console.log("------目標父容器", X)),
            w.draggedContainer.type === "med_box" &&
              y.container.type !== "med_box")
          )
            if (
              (console.log("藥盒移動目標到層架上"),
              (X = y.container),
              X.contents.length > 0)
            ) {
              let G = 0,
                pe = 0;
              X.contents.forEach((me) => {
                const De = de(me.gird_position || "0,0").row,
                  Se = de(me.gird_position || "0,0").col;
                G > De && (G = De), pe > Se && (pe = Se);
              });
              for (let me = 0; me <= pe; me++)
                for (let De = 0; De <= G; De++) {
                  const Se = `${me},${De}`;
                  X.contents.filter((gt) => gt.grid_position === Se).length ===
                    0 && ((L = me), (re = De));
                }
            } else (L = 0), (re = 0);
          (W = X), T(X, w.draggedContainer, L, re, y.direction);
        } else {
          (J = null),
            (O = null),
            (W = w.originalParent),
            (w.draggedContainer.gird_position = w.originalPosition);
          const Y = de(w.originalPosition || "0,0").row,
            L = de(w.originalPosition || "0,0").col;
          T(w.originalParent, w.draggedContainer, Y, L, null);
        }
        V({
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
          N(null),
          console.log("Drop Direction:", J),
          console.log("Parent Object:", W),
          console.log("Target Object:", O),
          console.log("API更新資料：", j),
          await wh(j);
      };
    p.useEffect(() => {
      if (w.isDragging)
        if (H()) {
          const J = (Y) => {
              Y.preventDefault(), ne(Y);
            },
            W = (Y) => ce(),
            O = (Y) => ce();
          return (
            document.addEventListener("pointermove", J, { passive: !1 }),
            document.addEventListener("pointerup", W),
            document.addEventListener("pointercancel", O),
            () => {
              document.removeEventListener("pointermove", J),
                document.removeEventListener("pointerup", W),
                document.removeEventListener("pointercancel", O);
            }
          );
        } else {
          const J = (L) => ne(L),
            W = (L) => ce(),
            O = (L) => {
              L.preventDefault(), ne(L);
            },
            Y = (L) => ce();
          return (
            document.addEventListener("mousemove", J),
            document.addEventListener("mouseup", W),
            document.addEventListener("touchmove", O, { passive: !1 }),
            document.addEventListener("touchend", Y),
            () => {
              document.removeEventListener("mousemove", J),
                document.removeEventListener("mouseup", W),
                document.removeEventListener("touchmove", O),
                document.removeEventListener("touchend", Y);
            }
          );
        }
    }, [w.isDragging, y]),
      p.useEffect(
        () => () => {
          if (w.floatingElement)
            try {
              w.floatingElement.parentNode &&
                w.floatingElement.parentNode.removeChild(w.floatingElement);
            } catch (v) {
              console.error("組件卸載時清除浮動元素失敗:", v);
            }
        },
        [w.floatingElement]
      ),
      p.useEffect(() => {
        const v = (W) => {
            W.code === "Space" && !W.repeat && (W.preventDefault(), A(!0));
          },
          J = (W) => {
            W.code === "Space" && (W.preventDefault(), A(!1), M(!1));
          };
        return (
          window.addEventListener("keydown", v),
          window.addEventListener("keyup", J),
          () => {
            window.removeEventListener("keydown", v),
              window.removeEventListener("keyup", J);
          }
        );
      }, []);
    const U = p.useCallback(
        (v) => {
          var W;
          if (k) return;
          if (v.ctrlKey || v.metaKey) {
            v.preventDefault(), v.stopPropagation();
            const O =
              (W = n.current) == null ? void 0 : W.getBoundingClientRect();
            if (!O) return;
            const Y = v.clientX - O.left,
              L = v.clientY - O.top,
              re = v.deltaY > 0 ? 0.9 : 1.1,
              te = Math.max(0.1, Math.min(5, f.scale * re)),
              X = te / f.scale,
              G = Y - (Y - f.x) * X,
              pe = L - (L - f.y) * X;
            S({ x: G, y: pe, scale: te });
          }
        },
        [f, k]
      ),
      C = p.useCallback(
        (v) => {
          k ||
            !_ ||
            (M(!0),
            x({ x: v.clientX, y: v.clientY }),
            z({ x: v.clientX, y: v.clientY }),
            E(!1),
            v.preventDefault());
        },
        [k, _]
      ),
      $ = p.useCallback(
        (v) => {
          if (!b || k) return;
          const J = v.clientX - u.x,
            W = v.clientY - u.y;
          if (P) {
            const O = Math.abs(v.clientX - P.x),
              Y = Math.abs(v.clientY - P.y);
            (O > 5 || Y > 5) && E(!0);
          }
          S((O) => ({ ...O, x: O.x + J, y: O.y + W })),
            x({ x: v.clientX, y: v.clientY });
        },
        [b, u, k, P]
      ),
      q = p.useCallback(() => {
        M(!1), z(null);
      }, []),
      [ee, ae] = p.useState(null),
      [xe, ye] = p.useState({ x: 0, y: 0 }),
      Me = (v) => {
        if (v.length < 2) return null;
        const J = v[0],
          W = v[1];
        return Math.sqrt(
          Math.pow(W.clientX - J.clientX, 2) +
            Math.pow(W.clientY - J.clientY, 2)
        );
      },
      ge = (v) => {
        if (v.length === 1) return { x: v[0].clientX, y: v[0].clientY };
        const J = v[0],
          W = v[1];
        return {
          x: (J.clientX + W.clientX) / 2,
          y: (J.clientY + W.clientY) / 2,
        };
      },
      ve = p.useCallback(
        (v) => {
          if (!k) {
            if (v.touches.length === 2) {
              const J = Me(v.touches),
                W = ge(v.touches);
              ae(J), ye(W);
            } else if (v.touches.length === 1) {
              const J = v.touches[0];
              x({ x: J.clientX, y: J.clientY }), M(!0);
            }
          }
        },
        [k]
      ),
      je = p.useCallback(
        (v) => {
          var J;
          if (!k) {
            if ((v.preventDefault(), v.touches.length === 2 && ee !== null)) {
              const W = Me(v.touches),
                O = ge(v.touches);
              if (W && ee) {
                const Y =
                  (J = n.current) == null ? void 0 : J.getBoundingClientRect();
                if (!Y) return;
                const L = W / ee,
                  re = Math.max(0.1, Math.min(5, f.scale * L)),
                  te = O.x - Y.left,
                  X = O.y - Y.top,
                  G = re / f.scale,
                  pe = te - (te - f.x) * G,
                  me = X - (X - f.y) * G;
                S({ x: pe, y: me, scale: re }), ae(W), ye(O);
              }
            } else if (v.touches.length === 1 && b) {
              const W = v.touches[0],
                O = W.clientX - u.x,
                Y = W.clientY - u.y;
              S((L) => ({ ...L, x: L.x + O, y: L.y + Y })),
                x({ x: W.clientX, y: W.clientY });
            }
          }
        },
        [f, ee, b, u, k]
      ),
      Ie = p.useCallback(() => {
        ae(null), M(!1);
      }, []);
    p.useEffect(() => {
      const v = n.current;
      if (v)
        return (
          v.addEventListener("wheel", U, { passive: !1 }),
          () => v.removeEventListener("wheel", U)
        );
    }, [U]);
    const nt = () => (!o || o.length === 0 ? [] : o),
      _e = (v) => {
        if (!v || v.length === 0)
          return { sortedContents: [], maxRow: 0, maxCol: 0 };
        const J = v.map((L) => ({
            ...L,
            gridPos: de(L.gird_position || "0,0"),
          })),
          W = Math.max(...J.map((L) => L.gridPos.row), 0),
          O = Math.max(...J.map((L) => L.gridPos.col), 0);
        return {
          sortedContents: J.sort((L, re) =>
            L.gridPos.row !== re.gridPos.row
              ? L.gridPos.row - re.gridPos.row
              : L.gridPos.col - re.gridPos.col
          ),
          maxRow: W,
          maxCol: O,
        };
      },
      Xe = nt(),
      Ge = Math.max(...Xe.map((v) => de(v.gird_position || "0,0").row), 0),
      Lt = Math.max(...Xe.map((v) => de(v.gird_position || "0,0").col), 0),
      ht = (v) => {
        const J = (O) => {
            if (
              O.width &&
              Array.isArray(O.width) &&
              typeof O.width_index == "number" &&
              O.width_index >= 0 &&
              O.width_index < O.width.length
            ) {
              const L = parseFloat(O.width[O.width_index]);
              if (!isNaN(L)) {
                const re = L * 20;
                return Math.max(200, re);
              }
            }
            return 200;
          },
          W = (O) => {
            switch (O) {
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
        switch (v.type) {
          case "med_box":
            return (
              J(v),
              r.jsxs(
                "div",
                {
                  "data-container-guid": v.GUID,
                  className: `${
                    v.type !== "sub_container"
                      ? "border-2 rounded-lg shadow-sm"
                      : ""
                  } ${W(
                    v.type || 0
                  )} min-h-[80px] flex flex-col flex-shrink-0 h-full overflow-hidden`,
                  children: [
                    r.jsx("div", {
                      onMouseDown:
                        k && ue(v.type) && !H()
                          ? (O) =>
                              D(
                                v,
                                O.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                O
                              )
                          : void 0,
                      onTouchStart:
                        k && ue(v.type) && !H()
                          ? (O) =>
                              D(
                                v,
                                O.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                O
                              )
                          : void 0,
                      onPointerDown:
                        k && ue(v.type) && H()
                          ? (O) =>
                              D(
                                v,
                                O.currentTarget.closest(
                                  "[data-container-guid]"
                                ),
                                O
                              )
                          : void 0,
                      className: k && ue(v.type) ? "cursor-move" : "",
                      children: r.jsx(Hs, { content: v, isAdminMode: h }),
                    }),
                    r.jsx("div", { className: "flex-1 p-1", children: qt(v) }),
                  ],
                },
                v.GUID
              )
            );
          case "sub_container":
          case "parent_container":
            return r.jsxs(
              "div",
              {
                "data-container-guid": v.GUID,
                className: `${W(
                  v.type || 0
                )} border-2 overflow-hidden rounded-lg shadow-sm min-h-[80px] flex flex-col h-full`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      k && ue(v.type) && !H()
                        ? (O) =>
                            D(
                              v,
                              O.currentTarget.closest("[data-container-guid]"),
                              O
                            )
                        : void 0,
                    onTouchStart:
                      k && ue(v.type) && !H()
                        ? (O) =>
                            D(
                              v,
                              O.currentTarget.closest("[data-container-guid]"),
                              O
                            )
                        : void 0,
                    onPointerDown:
                      k && ue(v.type) && H()
                        ? (O) =>
                            D(
                              v,
                              O.currentTarget.closest("[data-container-guid]"),
                              O
                            )
                        : void 0,
                    className: k && ue(v.type) ? "cursor-move" : "",
                    children: r.jsx(Hs, { content: v, isAdminMode: h }),
                  }),
                  r.jsx("div", { className: "flex-1  p-1", children: qt(v) }),
                ],
              },
              v.GUID
            );
          case "grid_draw":
            return r.jsxs(
              "div",
              {
                "data-container-guid": v.GUID,
                className: `${
                  v.type !== "sub_container"
                    ? "border-2 rounded-lg shadow-sm"
                    : ""
                } ${W(
                  v.type || 0
                )} min-h-[80px] flex flex-col h-full overflow-hidden`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      k && ue(v.type) && !H()
                        ? (O) =>
                            D(
                              v,
                              O.currentTarget.closest("[data-container-guid]"),
                              O
                            )
                        : void 0,
                    onTouchStart:
                      k && ue(v.type) && !H()
                        ? (O) =>
                            D(
                              v,
                              O.currentTarget.closest("[data-container-guid]"),
                              O
                            )
                        : void 0,
                    onPointerDown:
                      k && ue(v.type) && H()
                        ? (O) =>
                            D(
                              v,
                              O.currentTarget.closest("[data-container-guid]"),
                              O
                            )
                        : void 0,
                    className: k && ue(v.type) ? "cursor-move" : "",
                    children: r.jsx(Hs, { content: v, isAdminMode: h }),
                  }),
                  r.jsx("div", {
                    className: "flex-1 p-1 flex items-center",
                    children: qt(v),
                  }),
                ],
              },
              v.GUID
            );
          default:
            return r.jsxs(
              "div",
              {
                "data-container-guid": v.GUID,
                className: `${
                  v.type !== "sub_container"
                    ? "border-2 rounded-lg shadow-sm"
                    : ""
                } ${W(
                  v.type || 0
                )} min-h-[80px] flex flex-col h-full overflow-hidden ${
                  v.type == "none" ? "opacity-0" : ""
                }`,
                children: [
                  r.jsx("div", {
                    onMouseDown:
                      k && ue(v.type) && !H()
                        ? (O) =>
                            D(
                              v,
                              O.currentTarget.closest("[data-container-guid]"),
                              O
                            )
                        : void 0,
                    onTouchStart:
                      k && ue(v.type) && !H()
                        ? (O) =>
                            D(
                              v,
                              O.currentTarget.closest("[data-container-guid]"),
                              O
                            )
                        : void 0,
                    onPointerDown:
                      k && ue(v.type) && H()
                        ? (O) =>
                            D(
                              v,
                              O.currentTarget.closest("[data-container-guid]"),
                              O
                            )
                        : void 0,
                    className: k && ue(v.type) ? "cursor-move" : "",
                    children: r.jsx(Hs, { content: v, isAdminMode: h }),
                  }),
                  r.jsx("div", { className: "flex-1 p-1", children: qt(v) }),
                ],
              },
              v.GUID
            );
        }
      },
      qt = (v) => {
        const J = (W, O, Y) => {
          const L = Array(O + 1)
              .fill(null)
              .map(() => Array(Y + 1).fill(!1)),
            re = {};
          return (
            W.forEach((te) => {
              const X = de(te.gird_position || "0,0");
              (re[`${X.row},${X.col}`] = te), (L[X.row][X.col] = !0);
            }),
            r.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: r.jsx("tbody", {
                children: Array.from({ length: O + 1 }, (te, X) =>
                  r.jsx(
                    "tr",
                    {
                      className: "h-full",
                      style: { height: `${100 / (O + 1)}%`, minHeight: "80px" },
                      children: Array.from({ length: Y + 1 }, (G, pe) => {
                        const me = `${X},${pe}`,
                          De = re[me];
                        return De
                          ? r.jsxs(
                              "td",
                              {
                                className: "align-top bg-transparent",
                                style: {
                                  width: `${100 / (Y + 1)}%`,
                                  height: `${100 / (O + 1)}%`,
                                  minHeight: "80px",
                                  border: "none",
                                  position: "relative",
                                },
                                children: [
                                  ht(De),
                                  (y == null ? void 0 : y.container.GUID) ===
                                    De.GUID &&
                                    r.jsx("div", {
                                      className:
                                        "absolute inset-0 pointer-events-none",
                                      children: r.jsx("div", {
                                        className: `absolute bg-blue-400 opacity-50 ${
                                          y.direction === "top"
                                            ? "top-0 left-0 right-0 h-1"
                                            : y.direction === "bottom"
                                            ? "bottom-0 left-0 right-0 h-1"
                                            : y.direction === "left"
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
                                  width: `${100 / (Y + 1)}%`,
                                  height: `${100 / (O + 1)}%`,
                                  minHeight: "80px",
                                  border: "none",
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
                    X
                  )
                ),
              }),
            })
          );
        };
        switch (v.type) {
          case "parent_container":
          case "sub_container":
            if (v.contents && v.contents.length > 0) {
              const {
                sortedContents: G,
                maxRow: pe,
                maxCol: me,
              } = _e(v.contents);
              return J(G, pe, me);
            } else
              return r.jsx("table", {
                className: "bg-transparent w-full h-full",
                style: { borderCollapse: "separate", borderSpacing: "1px" },
                children: r.jsx("tbody", { children: r.jsx("tr", {}) }),
              });
          case "dispensing_shelves":
            if (v.contents && v.contents.length > 0) {
              const {
                sortedContents: G,
                maxRow: pe,
                maxCol: me,
              } = _e(v.contents);
              return J(G, pe, me);
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
            if (v.medMapStock && v.medMapStock.length > 0) {
              const G = v.medMapStock,
                pe = G.length,
                me = pe > 0 ? 100 / pe : 100,
                De = v.width ? v.width * 5 : 500;
              return r.jsx("div", {
                className: "flex h-full",
                style: { minWidth: `${De}px` },
                children: G.map((Se, Te) => {
                  const gt = Number(Se.location);
                  return r.jsx(
                    "div",
                    {
                      className: "m-1 flex-shrink-0 relative",
                      style: { width: `calc(${me}% - 8px)` },
                      "data-stock-guid": Se.GUID,
                      children: r.jsxs("div", {
                        className: `border-2 bg-yellow-50 border-yellow-400 rounded-lg p-2 h-full flex flex-col justify-center items-center cursor-pointer bg-white hover:bg-yellow-100 hover:border-yellow-500 hover:shadow-md transition-all ${
                          k ? "cursor-move" : ""
                        }`,
                        onMouseDown: (Ae) => {
                          k
                            ? B(
                                Se,
                                v,
                                Ae.currentTarget.closest("[data-stock-guid]"),
                                Ae
                              )
                            : !b &&
                              !_ &&
                              (z({ x: Ae.clientX, y: Ae.clientY }), E(!1));
                        },
                        onMouseUp: (Ae) => {
                          if (!b && !_ && !Z && P && !k) {
                            const tn = Math.abs(Ae.clientX - P.x),
                              Tr = Math.abs(Ae.clientY - P.y);
                            tn <= 5 &&
                              Tr <= 5 &&
                              (Ae.stopPropagation(), i(v, Se));
                          }
                          k || (z(null), E(!1));
                        },
                        onTouchStart: (Ae) => {
                          if (k && H())
                            B(
                              Se,
                              v,
                              Ae.currentTarget.closest("[data-stock-guid]"),
                              Ae
                            );
                          else if (!b && !k) {
                            const tn = Ae.touches[0];
                            z({ x: tn.clientX, y: tn.clientY }), E(!1);
                          }
                        },
                        onTouchEnd: (Ae) => {
                          if (!b && !Z && P && !k) {
                            const tn = Ae.changedTouches[0],
                              Tr = Math.abs(tn.clientX - P.x),
                              qo = Math.abs(tn.clientY - P.y);
                            Tr <= 5 &&
                              qo <= 5 &&
                              (Ae.stopPropagation(), i(v, Se));
                          }
                          k || (z(null), E(!1));
                        },
                        onPointerDown: (Ae) => {
                          k &&
                            H() &&
                            B(
                              Se,
                              v,
                              Ae.currentTarget.closest("[data-stock-guid]"),
                              Ae
                            );
                        },
                        children: [
                          r.jsx("div", {
                            className:
                              "text-base font-semibold text-gray-800 flex truncate w-full items-center flex-1",
                            children: r.jsx("div", {
                              className:
                                "w-full text-center truncate whitespace-normal",
                              children: Se.name || Se.material_no,
                            }),
                          }),
                          r.jsxs("div", {
                            className: "w-full flex justify-between items-end",
                            children: [
                              r.jsxs("div", {
                                className: "",
                                children: [
                                  r.jsxs("div", {
                                    className: "text-sm text-gray-600 mt-1",
                                    children: ["數量: ", +Se.qty || 0],
                                  }),
                                  r.jsxs("div", {
                                    className: "text-sm text-gray-500 mt-1",
                                    children: ["位置: ", gt],
                                  }),
                                ],
                              }),
                              r.jsx("div", {
                                className: "flex justify-end items-end mt-2",
                                children: r.jsx("button", {
                                  onMouseDown: (Ae) => {
                                    Ae.stopPropagation();
                                  },
                                  onMouseUp: (Ae) => {
                                    Ae.stopPropagation();
                                  },
                                  onTouchStart: (Ae) => {
                                    Ae.stopPropagation();
                                  },
                                  onTouchEnd: (Ae) => {
                                    Ae.stopPropagation();
                                  },
                                  onClick: (Ae) => Pr(Se, v, Ae),
                                  className:
                                    "text-red-500 hover:text-red-600 rounded-full p-2 transition-all z-10",
                                  title: "刪除",
                                  children: r.jsx(Gu, { className: "w-6 h-6" }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    Se.GUID || Te
                  );
                }),
              });
            } else if (v.contents && v.contents.length > 0) {
              const {
                sortedContents: G,
                maxRow: pe,
                maxCol: me,
              } = _e(v.contents);
              return J(G, pe, me);
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
            if (v.contents && v.contents.length > 0) {
              const {
                sortedContents: G,
                maxRow: pe,
                maxCol: me,
              } = _e(v.contents);
              return J(G, pe, me);
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
            const W = Math.max(
                ...v.Boxes.flat().map((G) => +G.Row + +G.Height - 1)
              ),
              O = Math.max(
                ...v.Boxes.flat().map((G) => +G.Column + +G.Width - 1)
              ),
              Y = W + 1,
              L = O + 1,
              re = v.Boxes.flat(),
              te = Array(Y)
                .fill(null)
                .map(() => Array(L).fill(!1)),
              X = {};
            return (
              re.forEach((G) => {
                G.Slave || (X[`${G.Row},${G.Column}`] = G);
              }),
              re.forEach((G) => {
                if (!G.Slave && (G.Width > 1 || G.Height > 1))
                  for (let pe = G.Row; pe < G.Row + G.Height; pe++)
                    for (let me = G.Column; me < G.Column + G.Width; me++)
                      (pe !== G.Row || me !== G.Column) && (te[pe][me] = !0);
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
            return v.med_info && v.med_info.length > 0
              ? r.jsxs("div", {
                  className:
                    "text-base text-left h-full min-h-[40px] max-w-[200px] min-w-[200px] p-1 flex items-center justify-between flex-col",
                  children: [
                    r.jsx("div", {
                      className: "text-gray-700 font-bold truncate w-full",
                      children: v.med_info[0].name,
                    }),
                    r.jsxs("div", {
                      className:
                        "text-gray-700 w-full flex justify-between px-1",
                      children: [
                        r.jsxs("div", { children: [v.box_type, "吋"] }),
                        r.jsxs("div", {
                          children: [v.width[v.width_index], "cm"],
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
            return v.contents && v.contents.length > 0
              ? r.jsx("div", {
                  className: "space-y-2",
                  children: v.contents.map((G) => ht(G)),
                })
              : r.jsx("div", {
                  className:
                    "h-full flex items-center justify-center text-gray-500",
                  children: r.jsxs("div", {
                    className: "text-base",
                    children: ["未知類型: ", v.type],
                  }),
                });
        }
      },
      en = (v) => {
        if (
          (de(v.gird_position || "0,0"),
          v.type !== "調劑台" && v.type !== "藥庫")
        )
          return null;
        const J = (W) => {
          if (!W || W.length === 0)
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
          const { sortedContents: O, maxRow: Y, maxCol: L } = _e(W),
            re = Array(Y + 1)
              .fill(null)
              .map(() => Array(L + 1).fill(!1)),
            te = {};
          return (
            O.forEach((X) => {
              const G = de(X.gird_position || "0,0");
              (te[`${G.row},${G.col}`] = X), (re[G.row][G.col] = !0);
            }),
            r.jsx("table", {
              className: "w-full h-full",
              style: { borderCollapse: "none", borderSpacing: "0px" },
              children: r.jsx("tbody", {
                children: Array.from({ length: Y + 1 }, (X, G) =>
                  r.jsx(
                    "tr",
                    {
                      className: "h-full",
                      children: Array.from({ length: L + 1 }, (pe, me) => {
                        const De = `${G},${me}`,
                          Se = te[De];
                        return Se
                          ? r.jsx(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / (L + 1)}%`,
                                  height: `${100 / (Y + 1)}%`,
                                  minHeight: "120px",
                                  border: "none",
                                },
                                children: ht(Se),
                              },
                              me
                            )
                          : r.jsx(
                              "td",
                              {
                                className: "p-1 align-top bg-transparent",
                                style: {
                                  width: `${100 / (L + 1)}%`,
                                  height: `${100 / (Y + 1)}%`,
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
                    G
                  )
                ),
              }),
            })
          );
        };
        return r.jsxs(
          "div",
          {
            "data-container-guid": v.GUID,
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
                      children: v.name,
                    }),
                  }),
                  r.jsx("div", {
                    className: "flex items-center space-x-1",
                    children: r.jsx("button", {
                      className:
                        "p-1 hover:bg-black/10 rounded transition-colors",
                      onClick: (W) => {
                        W.stopPropagation(),
                          console.log("🔘 點擊新增父容器按鈕"),
                          console.log("📋 找到的部門資料:", v),
                          v
                            ? (console.log(
                                "✅ 呼叫 openAddParentContainerModal"
                              ),
                              a(v))
                            : console.warn("⚠️ 未找到對應的部門資料");
                      },
                      title: "新增",
                      children: r.jsx(vt, {
                        className: "w-6 h-6 text-green-700",
                      }),
                    }),
                  }),
                ],
              }),
              r.jsx("div", {
                className: `flex-1 bg-orange-50 ${
                  (y == null ? void 0 : y.container.GUID) === v.GUID
                    ? "ring-2 ring-blue-400 ring-inset"
                    : ""
                }`,
                children: J(v.contents || []),
              }),
            ],
          },
          v.GUID
        );
      },
      Ss = p.useCallback(
        (v) => {
          if (
            (console.log("🎯 locateDrugOnCanvas 被調用，藥品資料:", v),
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
          const J = v[0].CODE || v[0].code;
          if ((console.log("🎯 提取的藥碼:", J), !J)) {
            console.warn("⚠️ 無法定位藥品：缺少藥碼");
            return;
          }
          console.log("🎯 開始定位藥品:", J);
          const W = (Y) => {
              for (const L of Y) {
                if (L.type === "grid_draw" && L.Boxes) {
                  for (const re of L.Boxes)
                    for (const te of re)
                      if (te.Code === J) {
                        const X = document.querySelector(
                          `[data-container-guid="${L.GUID}"]`
                        );
                        if (X)
                          return (
                            console.log("✅ 找到藥品容器 (grid_draw):", L),
                            { element: X, bounds: X.getBoundingClientRect() }
                          );
                      }
                }
                if (
                  L.type === "list_draw" &&
                  L.drugs &&
                  L.drugs.some((te) => te.code === J)
                ) {
                  const te = document.querySelector(
                    `[data-container-guid="${L.GUID}"]`
                  );
                  if (te)
                    return (
                      console.log("✅ 找到藥品容器 (list_draw):", L),
                      { element: te, bounds: te.getBoundingClientRect() }
                    );
                }
                if (
                  (L.type === "store_shelves" ||
                    L.type === "dispensing_shelves") &&
                  L.medMapStock &&
                  L.medMapStock.some(
                    (te) => te.code === J || te.material_no === J
                  )
                ) {
                  const te = document.querySelector(
                    `[data-container-guid="${L.GUID}"]`
                  );
                  if (te)
                    return (
                      console.log("✅ 找到藥品容器 (store_shelves):", L),
                      { element: te, bounds: te.getBoundingClientRect() }
                    );
                }
                if (
                  L.type === "med_box" &&
                  L.med_info &&
                  L.med_info.length > 0 &&
                  L.med_info.some((te) => te.code === J)
                ) {
                  const te = document.querySelector(
                    `[data-container-guid="${L.GUID}"]`
                  );
                  if (te)
                    return (
                      console.log("✅ 找到藥品容器 (med_box):", L),
                      { element: te, bounds: te.getBoundingClientRect() }
                    );
                }
                if (L.contents && L.contents.length > 0) {
                  const re = W(L.contents);
                  if (re) return re;
                }
              }
              return null;
            },
            O = W(o);
          if (O) {
            const Y = n.current.getBoundingClientRect(),
              L = O.bounds,
              re = (L.left + L.right) / 2,
              te = (L.top + L.bottom) / 2,
              X = (re - Y.left - f.x) / f.scale,
              G = (te - Y.top - f.y) / f.scale,
              pe = Y.width / 2,
              me = Y.height / 2,
              De = pe - X * f.scale,
              Se = me - G * f.scale;
            S((Te) => ({ ...Te, x: De, y: Se })),
              console.log("✅ 定位完成", {
                elementScreenCenter: { x: re, y: te },
                elementCanvasPos: { x: X, y: G },
                screenCenter: { x: pe, y: me },
                newTransform: { x: De, y: Se },
              }),
              m(`已定位到藥品：${v.CHT_NAME || v.NAME || J}`, "success");
          } else
            console.warn("❌ 未找到藥品容器"),
              m("未找到該藥品的儲存位置", "error");
        },
        [o, f, m]
      );
    p.useImperativeHandle(
      t,
      () => (
        console.log("🔧 useImperativeHandle 設置 ref 方法"), { locateDrug: Ss }
      )
    );
    const Pr = async (v, J, W) => {
        if (
          (W.stopPropagation(),
          W.preventDefault(),
          !!window.confirm(`確定要刪除 ${v.name || v.material_no} 嗎？`))
        )
          try {
            const Y = await ke.deleteStockByGUID([v.GUID]);
            if (Y.Code === 200) {
              const L = J.medMapStock.findIndex((re) => re.GUID === v.GUID);
              L !== -1 &&
                (J.medMapStock.splice(L, 1),
                J.medMapStock.forEach((re, te) => {
                  re.location = String(te);
                })),
                m("刪除成功", "success");
            } else m(Y.Result || "刪除失敗", "error");
          } catch (Y) {
            console.error("刪除 stock 失敗:", Y),
              m("刪除失敗，請稍後再試", "error");
          }
      },
      Wo = async (v) => {
        if (v.key === "Enter" && I.trim() && !F) {
          v.preventDefault(), le(!0);
          const J = performance.now();
          try {
            console.log("🔍 [手動輸入] 搜尋條碼:", I);
            const W = performance.now(),
              O = await ke.searchByBarCode(I.trim()),
              Y = performance.now();
            if (
              (console.log(
                `⏱️ [手動輸入] API搜尋藥品資料用時: ${(Y - W).toFixed(2)}ms`
              ),
              console.log("📋 條碼搜尋回應:", O),
              O.Code === 200)
            ) {
              console.log("✅ 找到藥品資料:", O.Data),
                m("找到藥品資料", "success");
              const L = performance.now();
              Ss(O.Data);
              const re = performance.now();
              console.log(
                `⏱️ [手動輸入] 定位藥品用時: ${(re - L).toFixed(2)}ms`
              ),
                R("");
              const te = performance.now();
              console.log(`⏱️ [手動輸入] 總用時: ${(te - J).toFixed(2)}ms`);
            } else
              O.Code === -200 && O.Result === "查無資料"
                ? (console.log("⚠️ 查無資料，開啟建立條碼彈窗"),
                  m("查無資料，請建立條碼", "error"),
                  g(I.trim()),
                  R(""))
                : (console.log("❌ 搜尋失敗:", O.Result),
                  m(O.Result || "搜尋失敗", "error"));
          } catch (W) {
            console.error("條碼搜尋錯誤:", W),
              m("搜尋失敗，請稍後再試", "error");
          } finally {
            le(!1);
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
                value: I,
                onChange: (v) => R(v.target.value),
                onKeyDown: Wo,
                placeholder: "輸入條碼或掃描...",
                className:
                  "px-4 py-2 w-50 focus:outline-none text-gray-700 disabled:opacity-50",
                disabled: F,
              }),
              r.jsx("button", {
                onClick: () => c("track_Drug_mode"),
                className: "p-2",
                title: "掃描條碼",
                disabled: F,
                children: r.jsx(_r, { className: "w-6 h-6 text-blue-600" }),
              }),
            ],
          }),
        }),
        r.jsx("div", {
          className: "absolute bottom-4 right-4 z-10 flex gap-2",
          children: r.jsx("button", {
            onClick: () => d(!k),
            className: `rounded-lg shadow-lg p-2 transition-colors ${
              k
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`,
            title: k ? "Unlock Canvas" : "Lock Canvas",
            children: k
              ? r.jsx(zu, { className: "w-6 h-6" })
              : r.jsx(Fu, { className: "w-6 h-6" }),
          }),
        }),
        r.jsx("div", {
          ref: n,
          className: `w-full h-full relative ${
            _ && !k ? "cursor-grab" : "cursor-default"
          } ${b ? "cursor-grabbing" : ""}`,
          onMouseDown: C,
          onMouseMove: $,
          onMouseUp: q,
          onMouseLeave: q,
          onTouchStart: ve,
          onTouchMove: je,
          onTouchEnd: Ie,
          children: r.jsxs("div", {
            className: "absolute inset-0 origin-top-left",
            style: {
              transform: `translate(${f.x}px, ${f.y}px) scale(${f.scale})`,
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
                    borderSpacing: `${ie}px`,
                    minWidth: "fit-content",
                    minHeight: "fit-content",
                  },
                  children: r.jsx("tbody", {
                    children: Array.from({ length: Ge + 1 }, (v, J) =>
                      r.jsx(
                        "tr",
                        {
                          children: Array.from({ length: Lt + 1 }, (W, O) => {
                            const Y = Xe.find((L) => {
                              const re = de(L.gird_position || "0,0");
                              return re.row === J && re.col === O;
                            });
                            return Y
                              ? r.jsx(
                                  "td",
                                  {
                                    className: "align-top",
                                    style: {
                                      minWidth: "150px",
                                      minHeight: "120px",
                                      border: "none",
                                    },
                                    children: en(Y),
                                  },
                                  O
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
                                  O
                                );
                          }),
                        },
                        J
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
Hu.displayName = "DrugCanvas";
const wh = async (e) => {
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
      var g, m, h;
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
          const f = {
            ...c,
            absolute_position:
              ((g = i.containerData) == null ? void 0 : g.absolute_position) ||
              i.position,
            name: ((m = i.containerData) == null ? void 0 : m.name) || "",
            ip: ((h = i.containerData) == null ? void 0 : h.ip) || "",
          };
          o.push(f);
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
        g = 0;
      const m = [];
      i.forEach((h) => {
        var f, S;
        if (h.error)
          (g += h.count),
            m.push(`${h.type}: ${h.error.message || "網路錯誤"}`),
            console.error(`❌ ${h.type} API 失敗:`, h.error);
        else if (((f = h.response) == null ? void 0 : f.Code) === 200)
          (c += h.count), console.log(`✅ ${h.type} API 成功:`, h.response);
        else {
          g += h.count;
          const b =
            ((S = h.response) == null ? void 0 : S.Result) || "未知錯誤";
          m.push(`${h.type}: ${b}`),
            console.error(`❌ ${h.type} API 失敗:`, h.response);
        }
      });
    } catch (i) {
      console.error("💥 批次更新過程中發生錯誤:", i);
    } finally {
      console.log("完成更新");
    }
  },
  bh = "modulepreload",
  Nh = function (e) {
    return "/" + e;
  },
  bc = {},
  jh = function (t, n, s) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const a = document.querySelector("meta[property=csp-nonce]"),
        i =
          (a == null ? void 0 : a.nonce) ||
          (a == null ? void 0 : a.getAttribute("nonce"));
      o = Promise.allSettled(
        n.map((c) => {
          if (((c = Nh(c)), c in bc)) return;
          bc[c] = !0;
          const g = c.endsWith(".css"),
            m = g ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${c}"]${m}`)) return;
          const h = document.createElement("link");
          if (
            ((h.rel = g ? "stylesheet" : bh),
            g || (h.as = "script"),
            (h.crossOrigin = ""),
            (h.href = c),
            i && h.setAttribute("nonce", i),
            document.head.appendChild(h),
            g)
          )
            return new Promise((f, S) => {
              h.addEventListener("load", f),
                h.addEventListener("error", () =>
                  S(new Error(`Unable to preload CSS for ${c}`))
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
  Xt = [
    { name: "2.13吋", box_type: "2.13", width: ["7.5"], unit: "cm" },
    { name: "2.9吋", type: "2.9", width: ["10", "15", "20"], unit: "cm" },
    { name: "4.2吋", type: "4.2", width: ["11", "16"], unit: "cm" },
  ],
  Sh = () => {
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
        medicineList: g,
      } = Ye(),
      { t: m } = mt(),
      [h, f] = p.useState(0),
      [S, b] = p.useState({}),
      [M, k] = p.useState(""),
      [d, u] = p.useState(""),
      [x, _] = p.useState("N"),
      [A, I] = p.useState([]),
      [R, F] = p.useState(!1),
      [le, P] = p.useState(!1),
      [z, Z] = p.useState(null),
      [E, w] = p.useState(null),
      [V, y] = p.useState(!1),
      [N, j] = p.useState(!1);
    p.useEffect(() => {
      if (n && e)
        if (c === "add") {
          f(0);
          const B = {};
          Xt.forEach((D, ne) => {
            B[ne] = 0;
          }),
            b(B),
            k(""),
            P(!1),
            H();
        } else {
          const B = Xt.findIndex(
            (D) => D.box_type === n.box_type || D.type === n.box_type
          );
          if ((console.log(n), B >= 0)) {
            f(B);
            const ne = Xt[B].width.findIndex((U) => {
                var C;
                return (
                  U === ((C = n.width) == null ? void 0 : C[n.width_index || 0])
                );
              }),
              ce = {};
            Xt.forEach((U, C) => {
              C === B ? (ce[C] = ne >= 0 ? ne : 0) : (ce[C] = 0);
            }),
              b(ce);
          } else {
            f(0);
            const D = {};
            Xt.forEach((ne, ce) => {
              D[ce] = 0;
            }),
              b(D);
          }
          k(n.ip || ""),
            w({
              box_type: n.box_type,
              width: n.width,
              width_index: n.width_index,
              ip: n.ip || "",
              storage: n.storage ? JSON.parse(JSON.stringify(n.storage)) : null,
            });
        }
    }, [n, e, c]);
    const H = () => {
        n && n.parentShelf && Z(n.parentShelf);
      },
      ie = (B) => {
        if (!B || !B.contents || B.contents.length === 0) return "0,0";
        let D = -1,
          ne = 0;
        return (
          B.contents.forEach((ce) => {
            if (ce.gird_position) {
              const [U, C] = ce.gird_position.split(",").map(Number);
              C > D && ((D = C), (ne = U));
            }
          }),
          `${ne},${D + 1}`
        );
      },
      K = () => {
        if (!E || c !== "edit") return !1;
        const B = Xt[h],
          D = S[h] || 0,
          ne = B.box_type || B.type || B.name;
        return (
          E.box_type !== ne ||
          E.width_index !== D ||
          E.ip !== M ||
          JSON.stringify(E.storage) !==
            JSON.stringify(n == null ? void 0 : n.storage)
        );
      },
      se = (B) => {
        f(B);
      },
      be = (B, D) => {
        b((ne) => ({ ...ne, [B]: D }));
      },
      ue = () => {
        n && (c === "add" ? de() : Q());
      },
      Ce = () => {
        t();
      },
      de = async () => {
        if (!n || !z) {
          a("缺少必要資料，無法新增藥盒", "error");
          return;
        }
        P(!0);
        try {
          const B = Xt[h],
            D = S[h] || 0,
            ne = B.width[D],
            ce = ie(z),
            U = {
              Master_GUID: z.GUID,
              position: ce,
              width: ne.toString(),
              height: "60",
              ip_box: M,
              serverName: z.serverName || "",
              serverType: z.serverType || "",
            };
          console.log("🚀 發送新增藥盒 API 請求:", U);
          const C = await ke.addMedMapBox(U);
          C.Code === 200
            ? (a("藥盒新增成功", "success"), t(), await he())
            : a(`藥盒新增失敗：${C.Result || "未知錯誤"}`, "error");
        } catch (B) {
          console.error("Add med box failed:", B),
            a("藥盒新增失敗：網路錯誤", "error");
        } finally {
          P(!1);
        }
      },
      Q = async () => {
        var B;
        if (!n || !K()) {
          a("沒有資料變更", "error");
          return;
        }
        y(!0);
        try {
          const D = Xt[h],
            ne = S[h] || 0,
            ce = D.width[ne],
            U = D.box_type || D.type || D.name,
            C = E.box_type !== U || E.width_index !== ne || E.ip !== M,
            $ =
              JSON.stringify(E.storage) !==
              JSON.stringify(n == null ? void 0 : n.storage),
            q = [];
          if (C) {
            const xe = {
              GUID: n.GUID,
              Master_GUID: n.Master_GUID,
              position: n.gird_position,
              ip_light: M,
              serverName: n.serverName,
              serverType: n.serverType,
            };
            q.push(ke.updateMedMapBox([xe]));
          }
          $ &&
            q.push(
              ke.updateEpd266Storages(n.serverName || "", n.serverType || "", [
                n.storage,
              ])
            );
          const ee = await Promise.all(q);
          if (ee.every((xe) => xe.Code === 200))
            a("藥盒更新成功", "success"), t(), await he();
          else {
            const xe = ee.filter((ye) => ye.Code !== 200);
            a(
              `藥盒更新失敗：${
                ((B = xe[0]) == null ? void 0 : B.Result) || "未知錯誤"
              }`,
              "error"
            );
          }
        } catch (D) {
          console.error("Update med box failed:", D),
            a("藥盒更新失敗：網路錯誤", "error");
        } finally {
          y(!1);
        }
      },
      he = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0);
        try {
          const B = await ke.getMedMapByDepartment(s);
          if (B.Code === 200 && B.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const D = await jh(() => Promise.resolve().then(() => Vm), void 0),
              ne = D.default.convertMedMapApiToFakeData(B.Data);
            if (!D.default.validateConvertedData(ne)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(ne), console.log("✅ 藥品地圖資料已更新");
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
      Ne = async () => {
        F(!0);
        try {
          const B = d.toLowerCase().trim();
          let D = g;
          B &&
            (D = D.filter((ne) => {
              var ce, U, C;
              return (
                ((ce = ne.CODE) == null
                  ? void 0
                  : ce.toLowerCase().includes(B)) ||
                ((U = ne.NAME) == null
                  ? void 0
                  : U.toLowerCase().includes(B)) ||
                ((C = ne.CHT_NAME) == null
                  ? void 0
                  : C.toLowerCase().includes(B))
              );
            })),
            x !== "N" && (D = D.filter((ne) => ne.DRUGKIND === x)),
            I(D);
        } catch (B) {
          console.error("Search failed:", B), I([]);
        } finally {
          F(!1);
        }
      },
      T = (B, D) => {
        console.log("📸 掃描成功，藥品資料:", D), j(!1), fe(D);
      },
      fe = async (B) => {
        if (n)
          try {
            console.log("🚀 開始更新藥盒藥品代碼:", B.CODE);
            const D = await ke.updateEpd266Medcode(
              n.serverName || "",
              n.serverType || "",
              B.CODE,
              n.storage || {}
            );
            D.Code === 200
              ? (console.log("✅ 藥品代碼更新成功:", D.Data),
                (n.storage = D.Data),
                (n.med_info = [
                  { name: B.NAME, cht_name: B.CHT_NAME, code: B.CODE },
                ]),
                a("藥品更新成功", "success"),
                i())
              : (console.error("❌ 藥品代碼更新失敗:", D),
                a(`藥品更新失敗：${D.Result || "未知錯誤"}`, "error"));
          } catch (D) {
            console.error("💥 藥品代碼更新發生錯誤:", D),
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
              onClick: Ce,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh" },
              onClick: (B) => B.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(sn, { className: "w-6 h-6 text-gray-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: m(
                            c === "add"
                              ? "modal.addMedBox"
                              : "modal.medBoxSettings"
                          ),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: Ce,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(He, { className: "w-6 h-6" }),
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
                              children: m("form.ipAddress"),
                            }),
                            r.jsx("div", {
                              className: "flex items-center",
                              children: r.jsx("input", {
                                type: "text",
                                onChange: (B) => k(B.target.value),
                                placeholder:
                                  (n == null ? void 0 : n.ip) ||
                                  (n == null ? void 0 : n.name) ||
                                  m("placeholder.ipAddress"),
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
                                children: m("form.medBoxType"),
                              }),
                              r.jsx("div", {
                                className: "flex gap-4 justify-between",
                                children: Xt.map((B, D) =>
                                  r.jsxs(
                                    "label",
                                    {
                                      className: `flex items-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                                        h === D
                                          ? "border-blue-500 bg-blue-50"
                                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                      }`,
                                      children: [
                                        r.jsx("input", {
                                          type: "radio",
                                          name: "boxType",
                                          value: D,
                                          checked: h === D,
                                          onChange: () => se(D),
                                          className:
                                            "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 hidden",
                                        }),
                                        r.jsx("div", {
                                          children: r.jsx("div", {
                                            className:
                                              "text-sm font-medium text-gray-900",
                                            children: B.name,
                                          }),
                                        }),
                                      ],
                                    },
                                    D
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
                                children: m("form.widthSelection"),
                              }),
                              Xt.map((B, D) =>
                                r.jsx(
                                  "div",
                                  {
                                    className: `flex gap-4 ${
                                      h === D ? "block" : "hidden"
                                    }`,
                                    children: B.width.map((ne, ce) =>
                                      r.jsxs(
                                        "label",
                                        {
                                          className: `flex items-center justify-center px-4 py-2 border-2 rounded-lg cursor-pointer transition-all ${
                                            h === D && (S[D] || 0) === ce
                                              ? "border-green-500 bg-green-50"
                                              : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                          }`,
                                          children: [
                                            r.jsx("input", {
                                              type: "radio",
                                              name: `width-${D}`,
                                              value: ce,
                                              checked:
                                                h === D && (S[D] || 0) === ce,
                                              onChange: () => be(D, ce),
                                              className:
                                                "w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500 hidden",
                                            }),
                                            r.jsx("div", {
                                              className: "text-center",
                                              children: r.jsxs("div", {
                                                className:
                                                  "text-sm font-semibold text-gray-900",
                                                children: [ne, " ", B.unit],
                                              }),
                                            }),
                                          ],
                                        },
                                        `${D}-${ce}`
                                      )
                                    ),
                                  },
                                  D
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
                                  children: m("form.drugInfo"),
                                }),
                                r.jsx("div", {
                                  children:
                                    n != null &&
                                    n.med_info &&
                                    n.med_info.length > 0
                                      ? r.jsx("div", {
                                          children: n.med_info.map((B, D) =>
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
                                                          m("form.drugCode"),
                                                          ":",
                                                        ],
                                                      }),
                                                      r.jsx("div", {
                                                        className:
                                                          "text-base text-gray-900 mt-1",
                                                        children:
                                                          B.code ||
                                                          m("status.notSet"),
                                                      }),
                                                    ],
                                                  }),
                                                  r.jsxs("div", {
                                                    children: [
                                                      r.jsxs("span", {
                                                        className:
                                                          "text-sm font-medium text-gray-600",
                                                        children: [
                                                          m("form.drugName"),
                                                          ":",
                                                        ],
                                                      }),
                                                      r.jsx("div", {
                                                        className:
                                                          "text-base text-gray-900 mt-1",
                                                        children:
                                                          B.name ||
                                                          m("status.notSet"),
                                                      }),
                                                    ],
                                                  }),
                                                  r.jsxs("div", {
                                                    children: [
                                                      r.jsxs("span", {
                                                        className:
                                                          "text-sm font-medium text-gray-600",
                                                        children: [
                                                          m("form.chineseName"),
                                                          ":",
                                                        ],
                                                      }),
                                                      r.jsx("div", {
                                                        className:
                                                          "text-base text-gray-900 mt-1",
                                                        children:
                                                          B.cht_name ||
                                                          m("status.notSet"),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              D
                                            )
                                          ),
                                        })
                                      : r.jsx("div", {
                                          className:
                                            "bg-gray-50 border border-gray-200 rounded-lg py-8 px-4 text-center space-y-4",
                                          children: r.jsx("div", {
                                            className:
                                              "text-gray-500 text-base",
                                            children: m("status.noDrugData"),
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
                                  children: m("form.drugInfo"),
                                }),
                                r.jsx("div", {
                                  className:
                                    "bg-gray-50 border border-gray-200 rounded-lg py-2 px-4 min-h-[262px] max-h-[262px]",
                                  children: r.jsx("div", {
                                    className: "text-center py-8 space-y-4",
                                    children: r.jsx("div", {
                                      className: "text-gray-500 text-base",
                                      children: m("status.newMedBoxNoDrug"),
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
                                    children: m("form.drugSearch"),
                                  }),
                                  r.jsx("button", {
                                    onClick: () => j(!0),
                                    className:
                                      "p-2 hover:bg-gray-100 rounded-full transition-colors",
                                    title: "掃描條碼",
                                    children: r.jsx(_r, {
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
                                    onChange: (B) => u(B.target.value),
                                    placeholder: m("placeholder.drugSearch"),
                                    className:
                                      "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                  r.jsxs("select", {
                                    value: x,
                                    onChange: (B) => _(B.target.value),
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
                                    onClick: Ne,
                                    disabled: R,
                                    className:
                                      "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                    children: [
                                      R &&
                                        r.jsx(jt, {
                                          className: "w-4 h-4 animate-spin",
                                        }),
                                      m("button.search"),
                                    ],
                                  }),
                                ],
                              }),
                              r.jsx("div", {
                                className:
                                  "bg-white border rounded p-3 min-h-[220px] max-h-[220px] overflow-y-auto",
                                children: R
                                  ? r.jsxs("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: [
                                        r.jsx(jt, {
                                          className:
                                            "w-5 h-5 animate-spin mr-2",
                                        }),
                                        m("status.searching"),
                                      ],
                                    })
                                  : A.length > 0
                                  ? r.jsx("div", {
                                      className: "space-y-1",
                                      children: A.map((B, D) =>
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
                                                    children: B.NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-500 truncate",
                                                    children: B.CHT_NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-400 font-mono",
                                                    children: B.CODE,
                                                  }),
                                                ],
                                              }),
                                              r.jsx("button", {
                                                onClick: () => fe(B),
                                                className:
                                                  "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                title: m("button.add"),
                                                children: r.jsx(vt, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          },
                                          B.GUID || D
                                        )
                                      ),
                                    })
                                  : r.jsx("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: m(
                                        d || x !== "N"
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
                      onClick: Ce,
                      disabled: le || V,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                      children: m("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: ue,
                      disabled: le || V,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        (le || V) &&
                          r.jsx(jt, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", {
                          children: le
                            ? "新增中..."
                            : V
                            ? "更新中..."
                            : m(c === "add" ? "button.add" : "button.save"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            r.jsx(Vo, {
              isOpen: N,
              onClose: () => j(!1),
              onScanSuccess: T,
              mode: "set_med_box_med_mode",
            }),
          ],
        });
  },
  Ch = () => {
    const {
        listDrawModalOpen: e,
        closeListDrawModal: t,
        selectedListDraw: n,
        triggerRefresh: s,
      } = Ye(),
      { t: o } = mt(),
      [l, a] = p.useState(""),
      [i, c] = p.useState([]),
      [g, m] = p.useState(""),
      [h, f] = p.useState("N"),
      [S, b] = p.useState([]),
      [M, k] = p.useState(!1);
    p.useEffect(() => {
      n && e && (a(n.name || ""), c(n.med_info || []));
    }, [n, e]);
    const d = (I) => {
        c((R) => R.filter((F) => F.code !== I));
      },
      u = async () => {
        k(!0);
        try {
          const I = await ke.searchMedicine(g, h);
          b(I);
        } catch (I) {
          console.error("Search failed:", I), b([]);
        } finally {
          k(!1);
        }
      },
      x = (I) => {
        const R = {
          id: I.GUID || `${Date.now()}_${Math.random()}`,
          name: I.NAME,
          cht_name: I.CHT_NAME,
          code: I.CODE,
        };
        c((F) => (F.some((P) => P.code === R.code) ? F : [...F, R]));
      },
      _ = () => {
        n && ((n.name = l), (n.med_info = i), s(), t());
      },
      A = () => {
        t();
      };
    return !e || !n
      ? null
      : r.jsxs("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center",
          children: [
            r.jsx("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              onClick: A,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh" },
              onClick: (I) => I.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(sn, { className: "w-6 h-6 text-gray-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: o("modal.listDrawSettings"),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: A,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(He, { className: "w-6 h-6" }),
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
                            onChange: (I) => a(I.target.value),
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
                                    children: i.map((I) =>
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
                                                    I.code &&
                                                      r.jsx("div", {
                                                        children: r.jsx("div", {
                                                          className:
                                                            "text-sm text-gray-900 font-mono",
                                                          children: I.code,
                                                        }),
                                                      }),
                                                    r.jsx("div", {
                                                      children: r.jsx("div", {
                                                        className:
                                                          "text-sm text-gray-900 font-medium",
                                                        children:
                                                          I.name ||
                                                          o("status.notSet"),
                                                      }),
                                                    }),
                                                    r.jsx("div", {
                                                      children: r.jsx("div", {
                                                        className:
                                                          "text-sm text-gray-900",
                                                        children:
                                                          I.cht_name ||
                                                          o("status.notSet"),
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              r.jsx("button", {
                                                onClick: () => d(I.code),
                                                className:
                                                  "ml-3 p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0",
                                                title: o("button.remove"),
                                                children: r.jsx(He, {
                                                  className: "w-5 h-5",
                                                }),
                                              }),
                                            ],
                                          }),
                                        },
                                        I.id
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
                                    value: g,
                                    onChange: (I) => m(I.target.value),
                                    placeholder: o("placeholder.drugSearch"),
                                    className:
                                      "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                  r.jsxs("select", {
                                    value: h,
                                    onChange: (I) => f(I.target.value),
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
                                        r.jsx(jt, {
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
                                        r.jsx(jt, {
                                          className:
                                            "w-5 h-5 animate-spin mr-2",
                                        }),
                                        o("status.searching"),
                                      ],
                                    })
                                  : S.length > 0
                                  ? r.jsx("div", {
                                      className: "space-y-1",
                                      children: S.map((I, R) =>
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
                                                    children: I.NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-500 truncate",
                                                    children: I.CHT_NAME,
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "text-xs text-gray-400 font-mono",
                                                    children: I.CODE,
                                                  }),
                                                ],
                                              }),
                                              r.jsx("button", {
                                                onClick: () => x(I),
                                                className:
                                                  "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                                title: o("button.add"),
                                                children: r.jsx(vt, {
                                                  className: "w-4 h-4",
                                                }),
                                              }),
                                            ],
                                          },
                                          I.GUID || R
                                        )
                                      ),
                                    })
                                  : r.jsx("div", {
                                      className:
                                        "text-gray-500 text-center flex items-center justify-center h-full",
                                      children: o(
                                        g || h !== "N"
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
                      onClick: A,
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
  kh = () => {
    const {
        gridDrawModalOpen: e,
        closeGridDrawModal: t,
        selectedGridDraw: n,
        triggerRefresh: s,
        apiDepartmentData: o,
        setApiDepartmentData: l,
        showNotification: a,
        medicineList: i,
      } = Ye(),
      { t: c } = mt(),
      [g, m] = p.useState(""),
      [h, f] = p.useState(null),
      [S, b] = p.useState(!1),
      [M, k] = p.useState(!1),
      [d, u] = p.useState(null),
      [x, _] = p.useState(""),
      [A, I] = p.useState("N"),
      [R, F] = p.useState([]),
      [le, P] = p.useState(!1),
      [z, Z] = p.useState(0),
      [E, w] = p.useState({ x: 0, y: 0 });
    p.useEffect(() => {
      if (n && e)
        if ((m(n.name || ""), n.drawer)) {
          if (!S) {
            console.log("🔄 備份原始 drawer 資料:", n);
            const U = JSON.parse(JSON.stringify(n.drawer));
            f(U), b(!0), console.log("✅ 備份完成，備份資料:", U);
          }
        } else console.log("⚠️ 沒有 drawer 資料可備份"), f(null), b(!1);
    }, [n, e, S]),
      p.useEffect(() => {
        e || (b(!1), f(null), u(null));
      }, [e]);
    const V = () => {
        n && ne();
      },
      y = () => {
        if (
          (console.log("🔄 開始恢復原始資料..."),
          console.log("原始備份資料:", h),
          console.log("當前 selectedGridDraw:", n),
          n && h && S)
        ) {
          console.log("📦 恢復 drawer 資料...");
          const U = JSON.parse(JSON.stringify(h));
          if (((n.drawer = U), o)) {
            const C = (q) => {
                q.forEach((ee) => {
                  ee.GUID === n.GUID &&
                    (console.log("🎯 找到目標格線抽屜，更新資料"),
                    (ee.drawer = U)),
                    ee.contents && Array.isArray(ee.contents) && C(ee.contents),
                    ee.components &&
                      Array.isArray(ee.components) &&
                      C(ee.components);
                });
              },
              $ = JSON.parse(JSON.stringify(o));
            C($), l($), console.log("🔄 已更新全域資料狀態");
          }
          console.log("✅ 資料已恢復:", n.drawer);
        } else
          console.log(
            "⚠️ 無法恢復資料 - selectedGridDraw、originalDrawerData 或 hasBackup 為空"
          ),
            console.log("selectedGridDraw:", !!n),
            console.log("originalDrawerData:", !!h),
            console.log("hasBackup:", S);
        u(null), b(!1), f(null), s(), t();
      },
      N = (U, C) => {
        if (!d) return !1;
        const $ = Math.min(d.startRow, d.endRow),
          q = Math.max(d.startRow, d.endRow),
          ee = Math.min(d.startCol, d.endCol),
          ae = Math.max(d.startCol, d.endCol);
        return U >= $ && U <= q && C >= ee && C <= ae;
      },
      j = (U) => {
        var Me;
        if (
          !((Me = n == null ? void 0 : n.drawer) != null && Me.Boxes) ||
          U.Slave
        )
          return { width: 1, height: 1 };
        const $ = n.drawer.Boxes.flat().filter(
          (ge) =>
            ge.Slave &&
            ge.MasterBox_Row === U.Row &&
            ge.MasterBox_Column === U.Column
        );
        if ($.length === 0) return { width: 1, height: 1 };
        const q = [U, ...$],
          ee = Math.min(...q.map((ge) => ge.Row)),
          ae = Math.max(...q.map((ge) => ge.Row)),
          xe = Math.min(...q.map((ge) => ge.Column));
        return {
          width: Math.max(...q.map((ge) => ge.Column)) - xe + 1,
          height: ae - ee + 1,
        };
      },
      H = () => {
        var xe;
        if (!d || !((xe = n == null ? void 0 : n.drawer) != null && xe.Boxes))
          return [];
        const U = n.drawer.Boxes.flat(),
          C = Math.min(d.startRow, d.endRow),
          $ = Math.max(d.startRow, d.endRow),
          q = Math.min(d.startCol, d.endCol),
          ee = Math.max(d.startCol, d.endCol),
          ae = [];
        return (
          U.forEach((ye) => {
            if (!ye.Slave) {
              const Me = j(ye),
                ge = ye.Row + Me.height - 1,
                ve = ye.Column + Me.width - 1;
              ye.Row >= C &&
                ge <= $ &&
                ye.Column >= q &&
                ve <= ee &&
                ae.push(ye);
            }
          }),
          ae
        );
      },
      ie = (U, C, $, q) => {
        var ve;
        if (!d || !((ve = n == null ? void 0 : n.drawer) != null && ve.Boxes))
          return !1;
        const ee = n.drawer.Boxes.flat();
        let ae = !0,
          xe = U,
          ye = C,
          Me = $,
          ge = q;
        for (; ae; )
          (ae = !1),
            ee.forEach((je) => {
              if (!je.Slave) {
                const Ie = j(je),
                  nt = je.Row + Ie.height - 1,
                  _e = je.Column + Ie.width - 1;
                !(je.Row > ye || nt < xe || je.Column > ge || _e < Me) &&
                  (je.Row < xe && ((xe = je.Row), (ae = !0)),
                  nt > ye && ((ye = nt), (ae = !0)),
                  je.Column < Me && ((Me = je.Column), (ae = !0)),
                  _e > ge && ((ge = _e), (ae = !0)));
              }
            });
        return { minRow: xe, maxRow: ye, minCol: Me, maxCol: ge };
      },
      K = () => {
        var ae;
        if (!d || !((ae = n == null ? void 0 : n.drawer) != null && ae.Boxes))
          return !1;
        const U = Math.min(d.startRow, d.endRow),
          C = Math.max(d.startRow, d.endRow),
          $ = Math.min(d.startCol, d.endCol),
          q = Math.max(d.startCol, d.endCol),
          ee = n.drawer.Boxes.flat();
        for (let xe = U; xe <= C; xe++)
          for (let ye = $; ye <= q; ye++) {
            let Me = !1;
            for (const ge of ee)
              if (!ge.Slave) {
                const ve = j(ge),
                  je = ge.Row + ve.height - 1,
                  Ie = ge.Column + ve.width - 1;
                if (xe >= ge.Row && xe <= je && ye >= ge.Column && ye <= Ie) {
                  Me = !0;
                  break;
                }
              }
            if (!Me) return !1;
          }
        return !0;
      },
      se = () => {
        var ve, je;
        const U = H();
        if (!d) return { canMerge: !1, canUnmerge: !1 };
        if (U.length === 0) return { canMerge: !1, canUnmerge: !1 };
        const C =
            ((je =
              (ve = n == null ? void 0 : n.drawer) == null
                ? void 0
                : ve.Boxes) == null
              ? void 0
              : je.flat()) || [],
          $ = U.some(
            (Ie) =>
              C.filter(
                (_e) =>
                  _e.Slave &&
                  _e.MasterBox_Row === Ie.Row &&
                  _e.MasterBox_Column === Ie.Column
              ).length > 0
          ),
          q = Math.min(d.startRow, d.endRow),
          ee = Math.max(d.startRow, d.endRow),
          ae = Math.min(d.startCol, d.endCol),
          xe = Math.max(d.startCol, d.endCol),
          ye = C.some(
            (Ie) =>
              Ie.Slave &&
              Ie.Row >= q &&
              Ie.Row <= ee &&
              Ie.Column >= ae &&
              Ie.Column <= xe
          );
        return { canMerge: U.length > 1 && K(), canUnmerge: $ || ye };
      },
      { canMerge: be, canUnmerge: ue } = se(),
      Ce = async () => {
        P(!0);
        try {
          const U = x.toLowerCase().trim();
          let C = i;
          U &&
            (C = C.filter(($) => {
              var q, ee, ae;
              return (
                ((q = $.CODE) == null ? void 0 : q.toLowerCase().includes(U)) ||
                ((ee = $.NAME) == null
                  ? void 0
                  : ee.toLowerCase().includes(U)) ||
                ((ae = $.CHT_NAME) == null
                  ? void 0
                  : ae.toLowerCase().includes(U))
              );
            })),
            A !== "N" && (C = C.filter(($) => $.DRUGKIND === A)),
            F(C);
        } catch (U) {
          console.error("Search failed:", U), F([]);
        } finally {
          P(!1);
        }
      },
      de = async (U) => {
        var $;
        if (!d || !(($ = n == null ? void 0 : n.drawer) != null && $.Boxes))
          return;
        const C = H();
        if (C.length !== 0)
          try {
            const q = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [`guid=${C[0].GUID}`, `code=${U.CODE}`],
              Data: n.drawer,
            };
            console.log("🚀 發送更新藥品 API 請求:", q);
            const ee = await ke.request("/api/device/update_drawer_medcode", {
              method: "POST",
              body: JSON.stringify(q),
            });
            if (
              (console.log("📡 更新藥品 API 回應:", ee),
              ee.Code === 200 && ee.Data)
            ) {
              if (
                ((n.drawer = ee.Data),
                ee.Data.Boxes && (n.Boxes = ee.Data.Boxes),
                console.log("✅ 藥品資料更新成功"),
                o)
              ) {
                const ae = (ye) => {
                    ye.forEach((Me) => {
                      Me.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (Me.drawer = n.drawer),
                        n.Boxes && (Me.Boxes = n.Boxes)),
                        Me.contents &&
                          Array.isArray(Me.contents) &&
                          ae(Me.contents),
                        Me.components &&
                          Array.isArray(Me.components) &&
                          ae(Me.components);
                    });
                  },
                  xe = JSON.parse(JSON.stringify(o));
                ae(xe), l(xe);
              }
              u(null), s();
            } else
              console.error("❌ 藥品更新失敗:", ee),
                a(`藥品更新失敗：${ee.Result || "未知錯誤"}`, "error");
          } catch (q) {
            console.error("💥 藥品更新 API 調用失敗:", q),
              a("藥品更新失敗：網路錯誤", "error");
          }
      },
      Q = (U, C, $) => {
        $.preventDefault(),
          $.stopPropagation(),
          "touches" in $ &&
            (Z(Date.now()),
            w({ x: $.touches[0].clientX, y: $.touches[0].clientY })),
          k(!0),
          u({ startRow: U, startCol: C, endRow: U, endCol: C });
      },
      he = (U, C) => {
        if (!M || !d) return;
        const $ = Math.min(d.startRow, U),
          q = Math.max(d.startRow, U),
          ee = Math.min(d.startCol, C),
          ae = Math.max(d.startCol, C),
          xe = ie($, q, ee, ae);
        xe &&
          u((ye) =>
            ye
              ? {
                  startRow: ye.startRow,
                  startCol: ye.startCol,
                  endRow: U >= ye.startRow ? xe.maxRow : xe.minRow,
                  endCol: C >= ye.startCol ? xe.maxCol : xe.minCol,
                }
              : null
          );
      },
      Ne = () => {
        if (M && (k(!1), d && n != null && n.Boxes)) {
          const U = Math.min(d.startRow, d.endRow),
            C = Math.max(d.startRow, d.endRow),
            $ = Math.min(d.startCol, d.endCol),
            q = Math.max(d.startCol, d.endCol),
            ee = ie(U, C, $, q);
          ee &&
            u({
              startRow: ee.minRow,
              startCol: ee.minCol,
              endRow: ee.maxRow,
              endCol: ee.maxCol,
            });
        }
      },
      T = () => {
        var U;
        !be ||
          !((U = n == null ? void 0 : n.drawer) != null && U.Boxes) ||
          !d ||
          D();
      },
      fe = () => {
        var U;
        !ue ||
          !((U = n == null ? void 0 : n.drawer) != null && U.Boxes) ||
          !d ||
          (console.log(d), B());
      },
      B = async () => {
        var U;
        if (!(!d || !((U = n == null ? void 0 : n.drawer) != null && U.Boxes)))
          try {
            const C = Math.min(d.startRow, d.endRow),
              $ = Math.max(d.startRow, d.endRow),
              q = Math.min(d.startCol, d.endCol),
              ee = Math.max(d.startCol, d.endCol),
              xe = n.drawer.Boxes.flat().filter(
                (je) =>
                  je.Row >= C &&
                  je.Row <= $ &&
                  je.Column >= q &&
                  je.Column <= ee
              ),
              ye = [],
              Me = [];
            xe.forEach((je) => {
              ye.push(je.Column.toString()), Me.push(je.Row.toString());
            });
            const ge = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [
                `SelectColumns=${ye.join(",")}`,
                `SelectRows=${Me.join(",")}`,
              ],
              Data: { IP: n.ip, Boxes: n.Boxes },
            };
            console.log("🚀 發送 API 請求:", ge);
            const ve = await ke.request("/api/device/separate_drawer_boxes", {
              method: "POST",
              body: JSON.stringify(ge),
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
                const je = (nt) => {
                    nt.forEach((_e) => {
                      _e.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (_e.drawer = n.drawer)),
                        _e.contents &&
                          Array.isArray(_e.contents) &&
                          je(_e.contents),
                        _e.components &&
                          Array.isArray(_e.components) &&
                          je(_e.components);
                    });
                  },
                  Ie = JSON.parse(JSON.stringify(o));
                je(Ie), l(Ie);
              }
            } else
              console.error("❌ API 回應錯誤:", ve),
                a(`取消合併失敗：${ve.Result || "未知錯誤"}`, "error");
          } catch (C) {
            console.error("💥 API 調用失敗:", C),
              a("取消合併失敗：網路錯誤", "error");
          } finally {
            console.log("更新後資料：", n),
              console.log("更新後最深層資料：", o),
              u(null),
              s();
          }
      },
      D = async () => {
        var U;
        if (!(!d || !((U = n == null ? void 0 : n.drawer) != null && U.Boxes)))
          try {
            const C = Math.min(d.startRow, d.endRow),
              $ = Math.max(d.startRow, d.endRow),
              q = Math.min(d.startCol, d.endCol),
              ee = Math.max(d.startCol, d.endCol),
              xe = n.drawer.Boxes.flat().filter(
                (je) =>
                  je.Row >= C &&
                  je.Row <= $ &&
                  je.Column >= q &&
                  je.Column <= ee
              ),
              ye = [],
              Me = [];
            xe.forEach((je) => {
              ye.push(je.Column.toString()), Me.push(je.Row.toString());
            });
            const ge = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              ValueAry: [
                `SelectColumns=${ye.join(",")}`,
                `SelectRows=${Me.join(",")}`,
              ],
              Data: { IP: n.ip, Boxes: n.Boxes },
            };
            console.log("🚀 發送 API 請求:", ge);
            const ve = await ke.request("/api/device/combine_drawer_boxes", {
              method: "POST",
              body: JSON.stringify(ge),
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
                const je = (nt) => {
                    nt.forEach((_e) => {
                      _e.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新資料"),
                        (_e.drawer = n.drawer)),
                        _e.contents &&
                          Array.isArray(_e.contents) &&
                          je(_e.contents),
                        _e.components &&
                          Array.isArray(_e.components) &&
                          je(_e.components);
                    });
                  },
                  Ie = JSON.parse(JSON.stringify(o));
                je(Ie), l(Ie);
              }
            } else
              console.error("❌ API 回應錯誤:", ve),
                a(`取消合併失敗：${ve.Result || "未知錯誤"}`, "error");
          } catch (C) {
            console.error("💥 API 調用失敗:", C),
              a("取消合併失敗：網路錯誤", "error");
          } finally {
            console.log("更新後資料：", n),
              console.log("更新後最深層資料：", o),
              u(null),
              s();
          }
      },
      ne = async () => {
        if (n)
          try {
            n.name = g;
            const U = {
              ServerName: n.serverName,
              ServerType: n.serverType,
              Data: [n.drawer],
            };
            console.log("🚀 發送確認更新 API 請求:", U);
            const C = await ke.request("/api/device/update_epd583_drawers", {
              method: "POST",
              body: JSON.stringify(U),
            });
            if ((console.log("📡 確認更新 API 回應:", C), C.Code === 200)) {
              if (
                (console.log("✅ 抽屜資料更新成功"),
                a("抽屜資料更新成功", "success"),
                o)
              ) {
                const $ = (ee) => {
                    ee.forEach((ae) => {
                      ae.GUID === n.GUID &&
                        (console.log("🎯 找到目標格線抽屜，更新名稱"),
                        (ae.name = n.name)),
                        ae.contents &&
                          Array.isArray(ae.contents) &&
                          $(ae.contents),
                        ae.components &&
                          Array.isArray(ae.components) &&
                          $(ae.components);
                    });
                  },
                  q = JSON.parse(JSON.stringify(o));
                $(q), l(q);
              }
              b(!1), f(null), s(), t();
            } else
              console.error("❌ 抽屜資料更新失敗:", C),
                a(`抽屜資料更新失敗：${C.Result || "未知錯誤"}`, "error");
          } catch (U) {
            console.error("💥 抽屜資料更新 API 調用失敗:", U),
              a("抽屜資料更新失敗：網路錯誤", "error");
          }
      },
      ce = () => {
        var Me;
        if (
          !((Me = n == null ? void 0 : n.drawer) != null && Me.Boxes) ||
          n.drawer.Boxes.length === 0
        )
          return r.jsx("div", {
            className:
              "bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg py-12",
            children: r.jsxs("div", {
              className: "text-center",
              children: [
                r.jsx(Bu, {
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
          C = (ge) => {
            if (ge.Slave) return { width: 1, height: 1 };
            const ve = U.filter(
              (Ge) =>
                Ge.Slave &&
                Ge.MasterBox_Row === ge.Row &&
                Ge.MasterBox_Column === ge.Column
            );
            if (ve.length === 0) return { width: 1, height: 1 };
            const je = [ge, ...ve],
              Ie = Math.min(...je.map((Ge) => Ge.Row)),
              nt = Math.max(...je.map((Ge) => Ge.Row)),
              _e = Math.min(...je.map((Ge) => Ge.Column));
            return {
              width: Math.max(...je.map((Ge) => Ge.Column)) - _e + 1,
              height: nt - Ie + 1,
            };
          },
          $ = Math.max(...U.map((ge) => ge.Row + 1 - 1)),
          q = Math.max(...U.map((ge) => ge.Column + 1 - 1)),
          ee = $ + 1,
          ae = q + 1,
          xe = Array(ee)
            .fill(null)
            .map(() => Array(ae).fill(!1)),
          ye = {};
        return (
          U.forEach((ge) => {
            if (!ge.Slave) {
              const ve = C(ge);
              (ye[`${ge.Row},${ge.Column}`] = ge),
                (ge.calculatedWidth = ve.width),
                (ge.calculatedHeight = ve.height);
            }
          }),
          U.forEach((ge) => {
            if (
              !ge.Slave &&
              (ge.calculatedWidth > 1 || ge.calculatedHeight > 1)
            )
              for (let ve = ge.Row; ve < ge.Row + ge.calculatedHeight; ve++)
                for (
                  let je = ge.Column;
                  je < ge.Column + ge.calculatedWidth;
                  je++
                )
                  (ve !== ge.Row || je !== ge.Column) && (xe[ve][je] = !0);
          }),
          r.jsx("div", {
            className: "rounded-lg",
            children: r.jsx("table", {
              className: "w-full",
              children: r.jsx("tbody", {
                children: Array.from({ length: ee }, (ge, ve) =>
                  r.jsx(
                    "tr",
                    {
                      children: Array.from({ length: ae }, (je, Ie) => {
                        if (xe[ve][Ie]) return null;
                        const nt = `${ve},${Ie}`,
                          _e = ye[nt];
                        return _e
                          ? r.jsx(
                              "td",
                              {
                                className: `border border-gray-400 pt-1 pl-1 align-top cursor-pointer select-none ${
                                  N(ve, Ie)
                                    ? "bg-blue-200"
                                    : "bg-white hover:bg-gray-100"
                                }`,
                                style: {
                                  width: `${100 / ae}%`,
                                  minHeight: "40px",
                                  height: `${50 * _e.calculatedHeight}px`,
                                  maxHeight: `${50 * _e.calculatedHeight}px`,
                                },
                                colSpan: _e.calculatedWidth,
                                rowSpan: _e.calculatedHeight,
                                onMouseDown: (Xe) => Q(ve, Ie, Xe),
                                onMouseEnter: () => he(ve, Ie),
                                onMouseUp: Ne,
                                onTouchStart: (Xe) => Q(ve, Ie, Xe),
                                onTouchMove: (Xe) => {
                                  if ((Xe.preventDefault(), !M)) return;
                                  const Ge = Xe.touches[0],
                                    Lt = document.elementFromPoint(
                                      Ge.clientX,
                                      Ge.clientY
                                    ),
                                    ht = Lt == null ? void 0 : Lt.closest("td");
                                  if (ht) {
                                    const qt = parseInt(
                                        ht.getAttribute("data-row") || "0"
                                      ),
                                      en = parseInt(
                                        ht.getAttribute("data-col") || "0"
                                      );
                                    he(qt, en);
                                  }
                                },
                                onTouchEnd: Ne,
                                "data-row": ve,
                                "data-col": Ie,
                                children: r.jsx("div", {
                                  className: "h-full flex flex-col",
                                  children:
                                    _e.Code || _e.Name || _e.ChineseName
                                      ? r.jsxs(r.Fragment, {
                                          children: [
                                            _e.Code &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs font-mono text-gray-600",
                                                children: _e.Code,
                                              }),
                                            _e.Name &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs font-medium text-gray-900",
                                                children: _e.Name,
                                              }),
                                            _e.ChineseName &&
                                              r.jsx("div", {
                                                className:
                                                  "text-xs text-gray-700",
                                                children: _e.ChineseName,
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
                              Ie
                            )
                          : r.jsx(
                              "td",
                              {
                                className: `border border-gray-300 p-2 align-top cursor-pointer select-none ${
                                  N(ve, Ie)
                                    ? "border-1 border-blue-500 bg-blue-100"
                                    : "bg-gray-50 hover:bg-gray-100"
                                }`,
                                style: {
                                  width: `${100 / ae}%`,
                                  minWidth: "80px",
                                  minHeight: "80px",
                                },
                                onMouseDown: (Xe) => Q(ve, Ie, Xe),
                                onMouseEnter: () => he(ve, Ie),
                                onMouseUp: Ne,
                                onTouchStart: (Xe) => Q(ve, Ie, Xe),
                                onTouchMove: (Xe) => {
                                  if ((Xe.preventDefault(), !M)) return;
                                  const Ge = Xe.touches[0],
                                    Lt = document.elementFromPoint(
                                      Ge.clientX,
                                      Ge.clientY
                                    ),
                                    ht = Lt == null ? void 0 : Lt.closest("td");
                                  if (ht) {
                                    const qt = parseInt(
                                        ht.getAttribute("data-row") || "0"
                                      ),
                                      en = parseInt(
                                        ht.getAttribute("data-col") || "0"
                                      );
                                    he(qt, en);
                                  }
                                },
                                onTouchEnd: Ne,
                                "data-row": ve,
                                "data-col": Ie,
                                children: r.jsx("div", {
                                  className:
                                    "h-full flex items-center justify-center text-gray-400 text-xs",
                                  children: c("status.notAdded"),
                                }),
                              },
                              Ie
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
              onClick: y,
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
                        r.jsx(sn, { className: "w-6 h-6 text-gray-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: c("modal.gridDrawSettings"),
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: y,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(He, { className: "w-6 h-6" }),
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
                              value: g,
                              onChange: (U) => m(U.target.value),
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
                          children: ce(),
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
                                onClick: T,
                                disabled: !be,
                                className: `px-4 py-2 rounded transition-colors ${
                                  be
                                    ? "bg-blue-600 text-white hover:bg-blue-700"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`,
                                children: c("button.merge"),
                              }),
                              r.jsx("button", {
                                onClick: fe,
                                disabled: !ue,
                                className: `px-4 py-2 rounded transition-colors ${
                                  ue
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
                            const U = H(),
                              C = U.find(($) => !$.Slave);
                            return C && (C.Code || C.Name || C.ChineseName)
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
                                          children: C.Code || "-",
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
                                          children: C.Name || "-",
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
                                          children: C.ChineseName || "-",
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
                                  value: x,
                                  onChange: (U) => _(U.target.value),
                                  placeholder: c("placeholder.drugSearch"),
                                  className:
                                    "border rounded px-3 py-1 flex-1 min-w-0 focus:border-blue-500 focus:outline-none transition-colors",
                                }),
                                r.jsxs("select", {
                                  value: A,
                                  onChange: (U) => I(U.target.value),
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
                                  onClick: Ce,
                                  disabled: le,
                                  className:
                                    "bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2",
                                  children: [
                                    le &&
                                      r.jsx(jt, {
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
                              children: le
                                ? r.jsxs("div", {
                                    className:
                                      "text-gray-500 text-center flex items-center justify-center h-full",
                                    children: [
                                      r.jsx(jt, {
                                        className: "w-5 h-5 animate-spin mr-2",
                                      }),
                                      c("status.searching"),
                                    ],
                                  })
                                : R.length > 0
                                ? r.jsx("div", {
                                    className: "space-y-1",
                                    children: R.map((U, C) =>
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
                                              onClick: () => de(U),
                                              className:
                                                "ml-2 p-1 text-green-600 hover:text-green-700 hover:bg-green-50 rounded transition-colors flex-shrink-0",
                                              title: c("button.add"),
                                              children: r.jsx(vt, {
                                                className: "w-4 h-4",
                                              }),
                                            }),
                                          ],
                                        },
                                        U.GUID || C
                                      )
                                    ),
                                  })
                                : r.jsx("div", {
                                    className:
                                      "text-gray-500 text-center flex items-center justify-center h-full",
                                    children: c(
                                      x || A !== "N"
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
                          onClick: y,
                          className:
                            "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                          children: c("button.cancel"),
                        }),
                        r.jsx("button", {
                          onClick: V,
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
                  onMouseUp: Ne,
                  onMouseLeave: Ne,
                  onTouchEnd: Ne,
                  onTouchCancel: Ne,
                }),
              ],
            }),
          ],
        });
  },
  Dh = () => {
    var Z;
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
      } = Ye(),
      { t: g } = mt(),
      [m, h] = p.useState(null),
      [f, S] = p.useState(0),
      [b, M] = p.useState(0),
      [k, d] = p.useState(!1);
    p.useEffect(() => {
      e && (h(null), S(0), M(0), d(!1));
    }, [e]),
      p.useEffect(() => {
        m && (S(m.row), M(m.col));
      }, [m]);
    const u = () => {
        const E = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((w) => {
              w.type === "parent_container" &&
                w.gird_position &&
                E.add(w.gird_position);
            }),
          E
        );
      },
      x = () => {
        const E = u(),
          w = [];
        if (E.size === 0) return w.push({ row: 0, col: 0 }), w;
        const V = [];
        E.forEach((N) => {
          const [j, H] = N.split(",").map(Number);
          V.push({ row: j, col: H });
        });
        const y = new Set();
        return (
          V.forEach(({ row: N, col: j }) => {
            y.add(`${N},${j + 1}`),
              y.add(`${N + 1},${j}`),
              j > 0 && y.add(`${N},${j - 1}`),
              N > 0 && y.add(`${N - 1},${j}`);
          }),
          y.forEach((N) => {
            if (!E.has(N)) {
              const [j, H] = N.split(",").map(Number);
              j >= 0 && H >= 0 && w.push({ row: j, col: H });
            }
          }),
          E.has("0,1") ||
            w.some((j) => j.row === 0 && j.col === 1) ||
            w.push({ row: 0, col: 1 }),
          E.has("1,0") ||
            w.some((j) => j.row === 1 && j.col === 0) ||
            w.push({ row: 1, col: 0 }),
          w.sort((N, j) => (N.row === j.row ? N.col - j.col : N.row - j.row))
        );
      },
      _ = (E) => {
        h(E);
      },
      A = (E) => {
        S(E), h({ row: E, col: b });
      },
      I = (E) => {
        M(E), h({ row: f, col: E });
      },
      R = m && !u().has(`${m.row},${m.col}`) && m.row >= 0 && m.col >= 0,
      F = async () => {
        if (!(!m || !n || !R)) {
          d(!0);
          try {
            const E = `${m.row},${m.col}`,
              w = await ke.addMedMapSection(n.GUID, E);
            w.Code === 200
              ? (a("新增成功", "success"), t(), c(!1), await le())
              : a(`新增失敗：${w.Result || "未知錯誤"}`, "error");
          } catch (E) {
            console.error("Add parent container failed:", E),
              a("新增失敗：網路錯誤", "error");
          } finally {
            d(!1);
          }
        }
      },
      le = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0);
        try {
          const E = await ke.getMedMapByDepartment(s);
          if (E.Code === 200 && E.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const w = At.convertMedMapApiToFakeData(E.Data);
            if (!At.validateConvertedData(w)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(w), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", E),
              a("資料更新失敗：API 錯誤", "error");
        } catch (E) {
          console.error("💥 重新獲取藥品地圖資料失敗:", E),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      P = () => {
        t();
      },
      z = () => {
        const E = u(),
          w = x(),
          V = [...E]
            .map((se) => {
              const [be, ue] = se.split(",").map(Number);
              return { row: be, col: ue };
            })
            .concat(w);
        V.length === 0 && V.push({ row: 0, col: 0 });
        const y = Math.max(...V.map((se) => se.row)),
          N = Math.max(...V.map((se) => se.col)),
          j = Math.min(...V.map((se) => se.row)),
          H = Math.min(...V.map((se) => se.col)),
          ie = y - j + 1,
          K = N - H + 1;
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
                style: { gridTemplateColumns: `repeat(${K}, 1fr)` },
                children: Array.from({ length: ie * K }, (se, be) => {
                  const ue = Math.floor(be / K) + j,
                    Ce = (be % K) + H,
                    de = `${ue},${Ce}`,
                    Q = E.has(de),
                    he = w.some((T) => T.row === ue && T.col === Ce),
                    Ne =
                      (m == null ? void 0 : m.row) === ue &&
                      (m == null ? void 0 : m.col) === Ce;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => he && _({ row: ue, col: Ce }),
                      disabled: Q || !he,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      Q
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : Ne
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : he
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: Q ? "已占用" : he ? "可選擇" : "不可用",
                      children: Q ? "占用" : `${ue},${Ce}`,
                    },
                    de
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
              onClick: P,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh", maxWidth: "800px" },
              onClick: (E) => E.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(vt, { className: "w-6 h-6 text-green-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增櫃體",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: P,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(He, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-6 py-4 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      z(),
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
                                    value: f,
                                    onChange: (E) =>
                                      A(parseInt(E.target.value) || 0),
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
                                    value: b,
                                    onChange: (E) =>
                                      I(parseInt(E.target.value) || 0),
                                    className:
                                      "w-20 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          m &&
                            r.jsx("div", {
                              className: `text-sm p-2 rounded ${
                                R
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: R
                                ? `已選擇位置：${m.row},${m.col}`
                                : `位置 ${m.row},${m.col} 已被占用或無效`,
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
                                  ((Z = n == null ? void 0 : n.contents) == null
                                    ? void 0
                                    : Z.filter(
                                        (E) => E.type === "parent_container"
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
                      onClick: P,
                      disabled: k,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: g("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: F,
                      disabled: !R || k,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        k && r.jsx(jt, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", { children: k ? "新增中..." : "新增" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  Nc = [
    {
      value: "dispensing_shelves",
      label: "藥盒層架",
      icon: r.jsx(ah, { className: "w-5 h-5" }),
      isShelf: !0,
    },
    {
      value: "store_shelves",
      label: "藥品層架",
      icon: r.jsx(Km, { className: "w-5 h-5" }),
      isShelf: !0,
    },
    {
      value: "list_draw",
      label: "清單抽屜",
      icon: r.jsx(pa, { className: "w-5 h-5" }),
      isShelf: !1,
    },
    {
      value: "grid_draw",
      label: "格線抽屜",
      icon: r.jsx(Bu, { className: "w-5 h-5" }),
      isShelf: !1,
    },
  ],
  _h = () => {
    var ie;
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
      } = Ye(),
      { t: g } = mt(),
      [m, h] = p.useState("dispensing_shelves"),
      [f, S] = p.useState("1"),
      [b, M] = p.useState("1"),
      [k, d] = p.useState(""),
      [u, x] = p.useState(null),
      [_, A] = p.useState(0),
      [I, R] = p.useState(0),
      [F, le] = p.useState(!1);
    p.useEffect(() => {
      e &&
        (h("dispensing_shelves"),
        S("1"),
        M("1"),
        d(""),
        x(null),
        A(0),
        R(0),
        le(!1));
    }, [e]),
      p.useEffect(() => {
        u && (A(u.row), R(u.col));
      }, [u]);
    const P = () => {
        const K = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((se) => {
              se.gird_position && K.add(se.gird_position);
            }),
          K
        );
      },
      z = () => {
        const K = P(),
          se = [];
        if (K.size === 0) return se.push({ row: 0, col: 0 }), se;
        const be = [];
        K.forEach((Ce) => {
          const [de, Q] = Ce.split(",").map(Number);
          be.push({ row: de, col: Q });
        });
        const ue = new Set();
        return (
          be.forEach(({ row: Ce, col: de }) => {
            ue.add(`${Ce},${de + 1}`),
              ue.add(`${Ce + 1},${de}`),
              de > 0 && ue.add(`${Ce},${de - 1}`),
              Ce > 0 && ue.add(`${Ce - 1},${de}`);
          }),
          ue.forEach((Ce) => {
            if (!K.has(Ce)) {
              const [de, Q] = Ce.split(",").map(Number);
              de >= 0 && Q >= 0 && se.push({ row: de, col: Q });
            }
          }),
          K.has("0,1") ||
            se.some((de) => de.row === 0 && de.col === 1) ||
            se.push({ row: 0, col: 1 }),
          K.has("1,0") ||
            se.some((de) => de.row === 1 && de.col === 0) ||
            se.push({ row: 1, col: 0 }),
          se.sort((Ce, de) =>
            Ce.row === de.row ? Ce.col - de.col : Ce.row - de.row
          )
        );
      },
      Z = (K) => {
        x(K);
      },
      E = (K) => {
        A(K), x({ row: K, col: I });
      },
      w = (K) => {
        R(K), x({ row: _, col: K });
      },
      V = u && !P().has(`${u.row},${u.col}`) && u.row >= 0 && u.col >= 0,
      y = async () => {
        if (!(!u || !n || !V)) {
          le(!0);
          try {
            const K = `${u.row},${u.col}`,
              se = Nc.find((ue) => ue.value === m);
            let be;
            se != null && se.isShelf
              ? (be = await ke.addMedMapShelf({
                  Master_GUID: n.GUID,
                  position: K,
                  width: f,
                  height: b,
                  ip_light: k,
                  type: m,
                }))
              : (be = await ke.addMedMapDrawer({
                  Master_GUID: n.GUID,
                  position: K,
                  width: f,
                  height: b,
                  ip_drawer: k,
                  type: m,
                })),
              be.Code === 200
                ? (a("新增成功", "success"), t(), c(!1), await N())
                : a(`新增失敗：${be.Result || "未知錯誤"}`, "error");
          } catch (K) {
            console.error("Add container failed:", K),
              a("新增失敗：網路錯誤", "error");
          } finally {
            le(!1);
          }
        }
      },
      N = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0);
        try {
          const K = await ke.getMedMapByDepartment(s);
          if (K.Code === 200 && K.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const se = At.convertMedMapApiToFakeData(K.Data);
            if (!At.validateConvertedData(se)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(se), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", K),
              a("資料更新失敗：API 錯誤", "error");
        } catch (K) {
          console.error("💥 重新獲取藥品地圖資料失敗:", K),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      j = () => {
        t();
      },
      H = () => {
        const K = P(),
          se = z(),
          be = [...K]
            .map((T) => {
              const [fe, B] = T.split(",").map(Number);
              return { row: fe, col: B };
            })
            .concat(se);
        be.length === 0 && be.push({ row: 0, col: 0 });
        const ue = Math.max(...be.map((T) => T.row)),
          Ce = Math.max(...be.map((T) => T.col)),
          de = Math.min(...be.map((T) => T.row)),
          Q = Math.min(...be.map((T) => T.col)),
          he = ue - de + 1,
          Ne = Ce - Q + 1;
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
                style: { gridTemplateColumns: `repeat(${Ne}, 1fr)` },
                children: Array.from({ length: he * Ne }, (T, fe) => {
                  const B = Math.floor(fe / Ne) + de,
                    D = (fe % Ne) + Q,
                    ne = `${B},${D}`,
                    ce = K.has(ne),
                    U = se.some(($) => $.row === B && $.col === D),
                    C =
                      (u == null ? void 0 : u.row) === B &&
                      (u == null ? void 0 : u.col) === D;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => U && Z({ row: B, col: D }),
                      disabled: ce || !U,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      ce
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : C
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : U
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: ce ? "已占用" : U ? "可選擇" : "不可用",
                      children: ce ? "占用" : `${B},${D}`,
                    },
                    ne
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
              onClick: j,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh", maxWidth: "1000px" },
              onClick: (K) => K.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(vt, { className: "w-6 h-6 text-green-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增層架/抽屜",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: j,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(He, { className: "w-6 h-6" }),
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
                            children: Nc.map((K) =>
                              r.jsxs(
                                "label",
                                {
                                  className: `flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                    m === K.value
                                      ? "border-blue-500 bg-blue-50"
                                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                  }`,
                                  children: [
                                    r.jsx("input", {
                                      type: "radio",
                                      name: "containerType",
                                      value: K.value,
                                      checked: m === K.value,
                                      onChange: (se) => h(se.target.value),
                                      className:
                                        "w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 hidden",
                                    }),
                                    r.jsxs("div", {
                                      className: "flex items-center space-x-3",
                                      children: [
                                        K.icon,
                                        r.jsx("span", {
                                          className:
                                            "font-medium text-gray-900",
                                          children: K.label,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                K.value
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
                                value: f,
                                onChange: (K) => S(K.target.value),
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
                                value: b,
                                onChange: (K) => M(K.target.value),
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
                            value: k,
                            onChange: (K) => d(K.target.value),
                            placeholder: "請輸入 IP 位址",
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                          }),
                        ],
                      }),
                      H(),
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
                                    onChange: (K) =>
                                      E(parseInt(K.target.value) || 0),
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
                                    value: I,
                                    onChange: (K) =>
                                      w(parseInt(K.target.value) || 0),
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
                                V
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: V
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
                                  ((ie = n == null ? void 0 : n.contents) ==
                                  null
                                    ? void 0
                                    : ie.length) || 0,
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
                      onClick: j,
                      disabled: F,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: g("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: y,
                      disabled: !V || F,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        F && r.jsx(jt, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", { children: F ? "新增中..." : "新增" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  Mh = () => {
    var Z;
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
      } = Ye(),
      { t: g } = mt(),
      [m, h] = p.useState(null),
      [f, S] = p.useState(0),
      [b, M] = p.useState(0),
      [k, d] = p.useState(!1);
    p.useEffect(() => {
      e && (h(null), S(0), M(0), d(!1));
    }, [e]),
      p.useEffect(() => {
        m && (S(m.row), M(m.col));
      }, [m]);
    const u = () => {
        const E = new Set();
        return (
          n != null &&
            n.contents &&
            n.contents.forEach((w) => {
              w.type === "sub_container" &&
                w.gird_position &&
                E.add(w.gird_position);
            }),
          E
        );
      },
      x = () => {
        const E = u(),
          w = [];
        if (E.size === 0) return w.push({ row: 0, col: 0 }), w;
        const V = [];
        E.forEach((N) => {
          const [j, H] = N.split(",").map(Number);
          V.push({ row: j, col: H });
        });
        const y = new Set();
        return (
          V.forEach(({ row: N, col: j }) => {
            y.add(`${N},${j + 1}`),
              y.add(`${N + 1},${j}`),
              j > 0 && y.add(`${N},${j - 1}`),
              N > 0 && y.add(`${N - 1},${j}`);
          }),
          y.forEach((N) => {
            if (!E.has(N)) {
              const [j, H] = N.split(",").map(Number);
              j >= 0 && H >= 0 && w.push({ row: j, col: H });
            }
          }),
          E.has("0,1") ||
            w.some((j) => j.row === 0 && j.col === 1) ||
            w.push({ row: 0, col: 1 }),
          E.has("1,0") ||
            w.some((j) => j.row === 1 && j.col === 0) ||
            w.push({ row: 1, col: 0 }),
          w.sort((N, j) => (N.row === j.row ? N.col - j.col : N.row - j.row))
        );
      },
      _ = (E) => {
        h(E);
      },
      A = (E) => {
        S(E), h({ row: E, col: b });
      },
      I = (E) => {
        M(E), h({ row: f, col: E });
      },
      R = m && !u().has(`${m.row},${m.col}`) && m.row >= 0 && m.col >= 0,
      F = async () => {
        if (!(!m || !n || !R)) {
          d(!0);
          try {
            const E = `${m.row},${m.col}`,
              w = await ke.addSubSection(n.GUID, E);
            w.Code === 200
              ? (a("新增成功", "success"), t(), c(!1), await le())
              : a(`新增失敗：${w.Result || "未知錯誤"}`, "error");
          } catch (E) {
            console.error("Add sub container failed:", E),
              a("新增失敗：網路錯誤", "error");
          } finally {
            d(!1);
          }
        }
      },
      le = async () => {
        if (!s) {
          console.warn("⚠️ 沒有選中的部門類型，無法重新獲取資料");
          return;
        }
        console.log("🔄 重新獲取藥品地圖資料，部門類型:", s), l(!0);
        try {
          const E = await ke.getMedMapByDepartment(s);
          if (E.Code === 200 && E.Data) {
            console.log("📡 API 回傳成功，開始轉換資料");
            const w = At.convertMedMapApiToFakeData(E.Data);
            if (!At.validateConvertedData(w)) {
              console.error("❌ 轉換後的資料驗證失敗"),
                a("資料更新失敗：資料格式錯誤", "error");
              return;
            }
            o(w), console.log("✅ 藥品地圖資料已更新");
          } else
            console.error("❌ API 回傳錯誤:", E),
              a("資料更新失敗：API 錯誤", "error");
        } catch (E) {
          console.error("💥 重新獲取藥品地圖資料失敗:", E),
            a("資料更新失敗：網路錯誤", "error");
        } finally {
          l(!1);
        }
      },
      P = () => {
        t();
      },
      z = () => {
        const E = u(),
          w = x(),
          V = [...E]
            .map((se) => {
              const [be, ue] = se.split(",").map(Number);
              return { row: be, col: ue };
            })
            .concat(w);
        V.length === 0 && V.push({ row: 0, col: 0 });
        const y = Math.max(...V.map((se) => se.row)),
          N = Math.max(...V.map((se) => se.col)),
          j = Math.min(...V.map((se) => se.row)),
          H = Math.min(...V.map((se) => se.col)),
          ie = y - j + 1,
          K = N - H + 1;
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
                style: { gridTemplateColumns: `repeat(${K}, 1fr)` },
                children: Array.from({ length: ie * K }, (se, be) => {
                  const ue = Math.floor(be / K) + j,
                    Ce = (be % K) + H,
                    de = `${ue},${Ce}`,
                    Q = E.has(de),
                    he = w.some((T) => T.row === ue && T.col === Ce),
                    Ne =
                      (m == null ? void 0 : m.row) === ue &&
                      (m == null ? void 0 : m.col) === Ce;
                  return r.jsx(
                    "button",
                    {
                      onClick: () => he && _({ row: ue, col: Ce }),
                      disabled: Q || !he,
                      className: `
                    w-16 h-16 border-2 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium
                    ${
                      Q
                        ? "bg-red-100 border-red-300 text-red-600 cursor-not-allowed"
                        : Ne
                        ? "bg-blue-500 border-blue-600 text-white shadow-lg"
                        : he
                        ? "bg-green-100 border-green-300 text-green-700 hover:bg-green-200 hover:border-green-400 cursor-pointer"
                        : "bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed"
                    }
                  `,
                      title: Q ? "已占用" : he ? "可選擇" : "不可用",
                      children: Q ? "占用" : `${ue},${Ce}`,
                    },
                    de
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
              onClick: P,
            }),
            r.jsxs("div", {
              className:
                "relative flex flex-col bg-white rounded-xl shadow-2xl border border-gray-200",
              style: { width: "90vw", height: "90vh", maxWidth: "800px" },
              onClick: (E) => E.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-4 py-2 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(vt, { className: "w-6 h-6 text-green-600" }),
                        r.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "新增虛擬容器",
                        }),
                      ],
                    }),
                    r.jsx("button", {
                      onClick: P,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                      children: r.jsx(He, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 px-6 py-4 overflow-y-auto",
                  children: r.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      z(),
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
                                    value: f,
                                    onChange: (E) =>
                                      A(parseInt(E.target.value) || 0),
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
                                    value: b,
                                    onChange: (E) =>
                                      I(parseInt(E.target.value) || 0),
                                    className:
                                      "w-20 px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          m &&
                            r.jsx("div", {
                              className: `text-sm p-2 rounded ${
                                R
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-red-50 text-red-700 border border-red-200"
                              }`,
                              children: R
                                ? `已選擇位置：${m.row},${m.col}`
                                : `位置 ${m.row},${m.col} 已被占用或無效`,
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
                                  ((Z = n == null ? void 0 : n.contents) == null
                                    ? void 0
                                    : Z.filter(
                                        (E) => E.type === "sub_container"
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
                      onClick: P,
                      disabled: k,
                      className:
                        "px-6 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: g("button.cancel"),
                    }),
                    r.jsxs("button", {
                      onClick: F,
                      disabled: !R || k,
                      className:
                        "px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        k && r.jsx(jt, { className: "w-4 h-4 animate-spin" }),
                        r.jsx("span", { children: k ? "新增中..." : "新增" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  Eh = ({ isOpen: e, onClose: t, storeShelf: n }) => {
    const {
        showNotification: s,
        medicineList: o,
        isLoadingMedicines: l,
        addStockToShelf: a,
        selectedStockItemForEdit: i,
        storeItemModalMode: c,
        updateStockInShelf: g,
      } = Ye(),
      [m, h] = p.useState(""),
      [f, S] = p.useState(""),
      [b, M] = p.useState(""),
      [k, d] = p.useState(""),
      [u, x] = p.useState([]),
      [_, A] = p.useState([]),
      [I, R] = p.useState(""),
      [F, le] = p.useState(""),
      [P, z] = p.useState(""),
      [Z, E] = p.useState(null),
      [w, V] = p.useState([]),
      [y, N] = p.useState(""),
      [j, H] = p.useState(!1),
      ie = p.useRef(null);
    p.useEffect(() => {
      if (e && c === "edit" && i) {
        h(i.code || ""), S(i.name || ""), M(""), d(i.material_no || "");
        const T = i.lot || [],
          fe = i.expiry_date || [],
          B = i.qty || [],
          D = [];
        if (T.length > 0 || fe.length > 0 || B.length > 0) {
          const ne = Math.max(T.length, fe.length, B.length),
            ce = [];
          for (let U = 0; U < ne; U++) {
            const C = fe[U] || "";
            let $ = "";
            C && ($ = C.split("T")[0]),
              ($ = $.replace(/\//g, "-")),
              ce.push({
                id: `batch_${Date.now()}_${U}`,
                lot: T[U] || "",
                expiryDate: $,
                qty: String(B[U] || ""),
              }),
              $ && D.push($);
          }
          x(ce), A(D);
        } else x([]), A([]);
        R(i.location || ""), le(i.led_index || ""), z(i.ip || "");
      } else if (e && c === "add")
        if (
          (h(""),
          S(""),
          M(""),
          d(""),
          x([]),
          A([]),
          le(""),
          z(""),
          n && n.medMapStock && n.medMapStock.length > 0)
        ) {
          const T = n.medMapStock.map((B) => Number(B.location));
          let fe = 0;
          for (; T.includes(fe); ) fe++;
          R(String(fe));
        } else R("0");
    }, [e, c, i, n]),
      p.useEffect(() => {
        const T = (fe) => {
          ie.current && !ie.current.contains(fe.target) && E(null);
        };
        return (
          document.addEventListener("mousedown", T),
          () => {
            document.removeEventListener("mousedown", T);
          }
        );
      }, []);
    const K = (T, fe) => {
        if (!fe.trim()) {
          V([]);
          return;
        }
        const B = fe.toLowerCase(),
          D = o.filter((ne) => {
            var ce, U, C, $;
            switch (T) {
              case "code":
                return (ce = ne.CODE) == null
                  ? void 0
                  : ce.toLowerCase().includes(B);
              case "name":
                return (U = ne.NAME) == null
                  ? void 0
                  : U.toLowerCase().includes(B);
              case "chineseName":
                return (C = ne.CHT_NAME) == null
                  ? void 0
                  : C.toLowerCase().includes(B);
              case "skdiacode":
                return ($ = ne.SKDIACODE) == null
                  ? void 0
                  : $.toLowerCase().includes(B);
              default:
                return !1;
            }
          });
        V(D.slice(0, 50));
      },
      se = (T, fe) => {
        switch ((E(T), T)) {
          case "code":
            h(fe);
            break;
          case "name":
            S(fe);
            break;
          case "chineseName":
            M(fe);
            break;
          case "skdiacode":
            d(fe);
            break;
        }
        K(T, fe);
      },
      be = (T, fe) => {
        switch (fe) {
          case "code":
            h(T.CODE || ""),
              S(T.NAME || ""),
              M(T.CHT_NAME || ""),
              d(T.SKDIACODE || "");
            break;
          case "name":
            h(T.CODE || ""),
              S(T.NAME || ""),
              M(T.CHT_NAME || ""),
              d(T.SKDIACODE || "");
            break;
          case "chineseName":
            h(T.CODE || ""),
              S(T.NAME || ""),
              M(T.CHT_NAME || ""),
              d(T.SKDIACODE || "");
            break;
          case "skdiacode":
            h(T.CODE || ""),
              S(T.NAME || ""),
              M(T.CHT_NAME || ""),
              d(T.SKDIACODE || "");
            break;
        }
        N(T.GUID), E(null), V([]);
      },
      ue = () => {
        const T = {
          id: `batch_${Date.now()}`,
          lot: "",
          expiryDate: "",
          qty: "",
        };
        x([...u, T]);
      },
      Ce = (T) => {
        x(u.filter((fe) => fe.id !== T));
      },
      de = (T, fe, B) => {
        x(u.map((D) => (D.id === T ? { ...D, [fe]: B } : D)));
      },
      Q = async () => {
        var D;
        if (!m || !f) {
          s("請選擇藥品", "error");
          return;
        }
        if (!n || !n.GUID) {
          s("層架資訊錯誤", "error");
          return;
        }
        const T = [],
          fe = [],
          B = [];
        u.forEach((ne) => {
          T.push(ne.lot || "");
          let ce = "";
          ne.expiryDate && (ce = `${ne.expiryDate}`),
            fe.push(ce),
            B.push(ne.qty ? `${Number(ne.qty)}` : "0");
        });
        try {
          if (c === "edit" && i) {
            const ne = {
                GUID: i.GUID,
                code: m,
                device_type: "EPD290",
                expiry_date: fe,
                ip_light: P || "",
                led_index: F || "",
                location: I || "",
                lot: T,
                material_no: k || "",
                name: f,
                qty: B,
                shelf_guid: n.GUID,
              },
              ce = await ke.updateStock([ne]);
            if (ce.Code === 200) {
              g(n.GUID, i.GUID, ne), console.log("檢查有無貨物批次被刪除");
              const U = _.filter((C) => !fe.includes(C));
              if ((console.log(U), U.length > 0)) {
                console.log("🗑️ 檢測到被刪除的批次效期:", U);
                let C = "";
                try {
                  i.Value &&
                    ((C = JSON.parse(i.Value).GUID || ""),
                    console.log("📦 從 Value 欄位解析出的 GUID:", C));
                } catch ($) {
                  console.error("❌ 解析 Value 欄位失敗:", $);
                }
                if (C) {
                  for (const $ of U)
                    try {
                      console.log(`🗑️ 正在刪除批次，GUID: ${C}, 效期: ${$}`);
                      const q = await ke.stockDeleteValidityPeriod(C, $);
                      q.Code === 200
                        ? console.log(`✅ 成功刪除批次效期: ${$}`)
                        : console.warn(
                            `⚠️ 刪除批次失敗 (效期: ${$}):`,
                            q.Result
                          );
                    } catch (q) {
                      console.error(`❌ 刪除批次時發生錯誤 (效期: ${$}):`, q);
                    }
                  s(`更新貨物成功，已刪除 ${U.length} 個批次`, "success");
                } else
                  console.warn("⚠️ 無法取得 Value GUID，跳過批次刪除"),
                    s("更新貨物成功（但無法刪除批次）", "success");
              } else s("更新貨物成功", "success");
              Ne();
            } else s(ce.Result || "更新貨物失敗", "error");
          } else {
            const ne = {
                code: m,
                device_type: "EPD290",
                expiry_date: fe,
                ip_light: P || "",
                led_index: F || "",
                location: I || "",
                lot: T,
                material_no: k || "",
                name: f,
                qty: B,
                shelf_guid: n.GUID,
              },
              ce = await ke.addStock([ne]);
            ce.Code === 200
              ? (a(n.GUID, {
                  GUID:
                    ((D = ce.Data) == null ? void 0 : D.GUID) ||
                    `stock_${Date.now()}`,
                  ...ne,
                }),
                s("新增貨物成功", "success"),
                Ne())
              : s(ce.Result || "新增貨物失敗", "error");
          }
        } catch (ne) {
          console.error("貨物操作錯誤:", ne),
            s(
              c === "edit"
                ? "更新貨物失敗，請稍後再試"
                : "新增貨物失敗，請稍後再試",
              "error"
            );
        }
      },
      he = (T, fe) => {
        console.log("📸 掃描成功，填入藥品資料:", fe),
          h(fe[0].CODE || fe[0].code || ""),
          S(fe[0].NAME || fe[0].name || ""),
          M(fe[0].CHT_NAME || fe[0].cht_name || ""),
          d(fe[0].SKDIACODE || fe[0].skdiacode || fe[0].material_no || ""),
          N(fe[0].GUID || ""),
          H(!1),
          s("已自動填入藥品資料", "success");
      },
      Ne = () => {
        h(""),
          S(""),
          M(""),
          d(""),
          x([]),
          A([]),
          R(""),
          le(""),
          z(""),
          N(""),
          V([]),
          E(null),
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
                      onClick: Ne,
                      className:
                        "p-2 hover:bg-gray-100 rounded-full transition-colors",
                      children: r.jsx(He, { className: "w-5 h-5" }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "p-6 space-y-6",
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
                            className: "space-y-4",
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
                                    onClick: () => H(!0),
                                    className:
                                      "hover:bg-gray-100 rounded-lg transition-colors p-2",
                                    title: "掃描條碼",
                                    children: r.jsx(_r, {
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
                                    ref: Z === "code" ? ie : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "藥碼",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: m,
                                        onChange: (T) =>
                                          se("code", T.target.value),
                                        onFocus: () => E("code"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入藥品代碼",
                                      }),
                                      Z === "code" &&
                                        w.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: w.map((T) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () => be(T, "code"),
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
                                                        children: T.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: T.NAME,
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
                                                        children: T.CHT_NAME,
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
                                                          T.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              T.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: Z === "name" ? ie : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "藥名",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: f,
                                        onChange: (T) =>
                                          se("name", T.target.value),
                                        onFocus: () => E("name"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入藥品名稱",
                                      }),
                                      Z === "name" &&
                                        w.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: w.map((T) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () => be(T, "name"),
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
                                                        children: T.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: T.NAME,
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
                                                        children: T.CHT_NAME,
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
                                                          T.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              T.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: Z === "chineseName" ? ie : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "中文名",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: b,
                                        onChange: (T) =>
                                          se("chineseName", T.target.value),
                                        onFocus: () => E("chineseName"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入中文名稱",
                                      }),
                                      Z === "chineseName" &&
                                        w.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: w.map((T) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () =>
                                                  be(T, "chineseName"),
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
                                                        children: T.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: T.NAME,
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
                                                        children: T.CHT_NAME,
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
                                                          T.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              T.GUID
                                            )
                                          ),
                                        }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "relative",
                                    ref: Z === "skdiacode" ? ie : null,
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-sm font-medium text-gray-700 mb-1",
                                        children: "料號",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: k,
                                        onChange: (T) =>
                                          se("skdiacode", T.target.value),
                                        onFocus: () => E("skdiacode"),
                                        className:
                                          "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                                        placeholder: "輸入料號",
                                      }),
                                      Z === "skdiacode" &&
                                        w.length > 0 &&
                                        r.jsx("div", {
                                          className:
                                            "absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto",
                                          children: w.map((T) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                onClick: () =>
                                                  be(T, "skdiacode"),
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
                                                        children: T.CODE,
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-600",
                                                        children: "|",
                                                      }),
                                                      r.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: T.NAME,
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
                                                        children: T.CHT_NAME,
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
                                                          T.SKDIACODE,
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              T.GUID
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
                            className: "space-y-4",
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
                                    onClick: ue,
                                    className:
                                      "flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors",
                                    title: "新增批次",
                                    children: [
                                      r.jsx(vt, { className: "w-4 h-4" }),
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
                                    children: u.map((T, fe) =>
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
                                                  children: ["批次 ", fe + 1],
                                                }),
                                                r.jsx("button", {
                                                  onClick: () => Ce(T.id),
                                                  className:
                                                    "p-1 text-red-600 hover:bg-red-50 rounded transition-colors",
                                                  title: "刪除批次",
                                                  children: r.jsx(Gu, {
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
                                                      value: T.lot,
                                                      onChange: (B) =>
                                                        de(
                                                          T.id,
                                                          "lot",
                                                          B.target.value
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
                                                      value: T.expiryDate,
                                                      onChange: (B) =>
                                                        de(
                                                          T.id,
                                                          "expiryDate",
                                                          B.target.value
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
                                                      value: T.qty,
                                                      onChange: (B) =>
                                                        de(
                                                          T.id,
                                                          "qty",
                                                          B.target.value
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
                                        T.id
                                      )
                                    ),
                                  }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "space-y-4",
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
                                        value: I,
                                        onChange: (T) => R(T.target.value),
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
                                        children: "LED 索引",
                                      }),
                                      r.jsx("input", {
                                        type: "text",
                                        value: F,
                                        onChange: (T) => le(T.target.value),
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
                                        value: P,
                                        onChange: (T) => z(T.target.value),
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
                      onClick: Ne,
                      className:
                        "px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
                      children: "取消",
                    }),
                    r.jsx("button", {
                      onClick: Q,
                      disabled: l || o.length === 0,
                      className:
                        "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400",
                      children: c === "edit" ? "修改" : "新增",
                    }),
                  ],
                }),
              ],
            }),
            r.jsx(Vo, {
              isOpen: j,
              onClose: () => H(!1),
              onScanSuccess: he,
              mode: "set_store_med_mode",
            }),
          ],
        })
      : null;
  },
  Ih = ({ isOpen: e, onClose: t }) => {
    const {
        selectedDepartmentType: n,
        apiDepartmentData: s,
        allDepartmentsList: o,
        showNotification: l,
        triggerRefresh: a,
        reloadMedMapData: i,
      } = Ye(),
      [c, g] = p.useState(null),
      [m, h] = p.useState(""),
      [f, S] = p.useState(!1),
      b = () => (s ? s.map((R) => R.name) : []),
      M = () => (!n || !o ? [] : o.filter((R) => R["department_type "] === n)),
      k = () => {
        const R = b();
        return M().filter((le) => !R.includes(le.name));
      },
      d = () => (s ? s.map((R) => R.gird_position) : []),
      u = () => {
        const R = d(),
          F = [];
        for (let le = 0; le < 10; le++)
          for (let P = 0; P < 10; P++) {
            const z = `${le},${P}`;
            R.includes(z) || F.push(z);
          }
        return F.slice(0, 20);
      };
    p.useEffect(() => {
      e && (g(null), h(""));
    }, [e]);
    const x = async () => {
        if (!c) {
          l("請選擇部門", "error");
          return;
        }
        if (!m) {
          l("請選擇位置", "error");
          return;
        }
        if (!n) {
          l("部門分類資訊錯誤", "error");
          return;
        }
        S(!0);
        try {
          const R = await ke.addMedMap(c.name, c.type, m);
          R.Code === 200
            ? (l("新增部門成功", "success"), await i(), _())
            : l(R.Result || "新增部門失敗", "error");
        } catch (R) {
          console.error("新增部門錯誤:", R),
            l("新增部門失敗，請稍後再試", "error");
        } finally {
          S(!1);
        }
      },
      _ = () => {
        g(null), h(""), t();
      };
    if (!e) return null;
    const A = k(),
      I = u();
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
                children: r.jsx(He, { className: "w-5 h-5" }),
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
                  A.length === 0
                    ? r.jsx("div", {
                        className: "text-center py-8",
                        children: r.jsx("p", {
                          className: "text-gray-600",
                          children: "所有部門都已新增",
                        }),
                      })
                    : r.jsx("div", {
                        className: "space-y-2",
                        children: A.map((R) =>
                          r.jsxs(
                            "label",
                            {
                              className: `flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                (c == null ? void 0 : c.name) === R.name
                                  ? "border-blue-500 bg-blue-50"
                                  : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                              }`,
                              children: [
                                r.jsx("input", {
                                  type: "radio",
                                  name: "department",
                                  value: R.name,
                                  checked:
                                    (c == null ? void 0 : c.name) === R.name,
                                  onChange: () => g(R),
                                  className:
                                    "w-4 h-4 text-blue-600 focus:ring-blue-500",
                                }),
                                r.jsxs("div", {
                                  className: "ml-3",
                                  children: [
                                    r.jsx("div", {
                                      className:
                                        "text-sm font-medium text-gray-900",
                                      children: R.name,
                                    }),
                                    r.jsx("div", {
                                      className: "text-xs text-gray-500",
                                      children: R.type,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            R.name
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
                    I.length === 0
                      ? r.jsx("div", {
                          className: "text-center py-8",
                          children: r.jsx("p", {
                            className: "text-gray-600",
                            children: "沒有可用的位置",
                          }),
                        })
                      : r.jsx("div", {
                          className: "grid grid-cols-5 gap-2",
                          children: I.map((R) => {
                            const [F, le] = R.split(",");
                            return r.jsxs(
                              "button",
                              {
                                onClick: () => h(R),
                                className: `p-3 border-2 rounded-lg text-sm font-medium transition-all ${
                                  m === R
                                    ? "border-blue-500 bg-blue-500 text-white"
                                    : "border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700"
                                }`,
                                children: ["(", F, ",", le, ")"],
                              },
                              R
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
                disabled: f,
                children: "取消",
              }),
              r.jsx("button", {
                onClick: x,
                disabled: !c || !m || f,
                className:
                  "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                children: f ? "新增中..." : "新增",
              }),
            ],
          }),
        ],
      }),
    });
  },
  Ph = ({ isOpen: e, onClose: t, initialBarcode: n = "" }) => {
    const {
        showNotification: s,
        medicineList: o,
        isLoadingMedicines: l,
      } = Ye(),
      [a, i] = p.useState(""),
      [c, g] = p.useState(""),
      [m, h] = p.useState(""),
      [f, S] = p.useState(""),
      [b, M] = p.useState(""),
      [k, d] = p.useState(null),
      [u, x] = p.useState([]),
      [_, A] = p.useState(""),
      [I, R] = p.useState(null),
      [F, le] = p.useState(!1),
      P = p.useRef(null);
    p.useEffect(() => {
      e && (i(n), g(""), h(""), S(""), M(""), A(""), R(null), d(null));
    }, [e, n]),
      p.useEffect(() => {
        const y = (N) => {
          P.current && !P.current.contains(N.target) && d(null);
        };
        return (
          document.addEventListener("mousedown", y),
          () => {
            document.removeEventListener("mousedown", y);
          }
        );
      }, []);
    const z = (y, N) => {
        if (!N.trim() || l) {
          x([]);
          return;
        }
        const j = N.toLowerCase(),
          H = o.filter((ie) => {
            var K, se, be, ue;
            switch (y) {
              case "code":
                return (K = ie.CODE) == null
                  ? void 0
                  : K.toLowerCase().includes(j);
              case "name":
                return (se = ie.NAME) == null
                  ? void 0
                  : se.toLowerCase().includes(j);
              case "chineseName":
                return (be = ie.CHT_NAME) == null
                  ? void 0
                  : be.toLowerCase().includes(j);
              case "skdiacode":
                return (ue = ie.SKDIACODE) == null
                  ? void 0
                  : ue.toLowerCase().includes(j);
              default:
                return !1;
            }
          });
        x(H.slice(0, 10));
      },
      Z = (y, N) => {
        switch ((d(y), y)) {
          case "code":
            g(N);
            break;
          case "name":
            h(N);
            break;
          case "chineseName":
            S(N);
            break;
          case "skdiacode":
            M(N);
            break;
        }
        z(y, N);
      },
      E = (y) => {
        A(y.GUID),
          R(y),
          g(y.CODE || ""),
          h(y.NAME || ""),
          S(y.CHT_NAME || ""),
          M(y.SKDIACODE || ""),
          d(null),
          x([]);
      },
      w = () => {
        i(""), g(""), h(""), S(""), M(""), A(""), R(null), d(null), x([]), t();
      },
      V = async () => {
        if (!c.trim()) {
          s("藥碼為必填欄位", "error");
          return;
        }
        if (!a.trim()) {
          s("條碼不能為空", "error");
          return;
        }
        le(!0);
        try {
          let y = [];
          if (I && I.BARCODE2)
            try {
              const j = JSON.parse(I.BARCODE2);
              Array.isArray(j)
                ? (y = [...j])
                : typeof j == "string" && (y = [j]);
            } catch {
              console.warn("解析 BARCODE2 失敗，使用原始值:", I.BARCODE2),
                I.BARCODE2 && (y = [I.BARCODE2]);
            }
          y.includes(a.trim()) || y.push(a.trim()),
            console.log("📋 處理後的 BARCODE2 陣列:", y);
          const N = await ke.addMedClouds(
            a.trim(),
            c.trim(),
            JSON.stringify(y),
            I.BARCODE
          );
          N.Code === 200
            ? (s("條碼建立成功", "success"), w())
            : s(N.Result || "建立條碼失敗", "error");
        } catch (y) {
          console.error("建立條碼失敗:", y),
            s("建立條碼失敗，請稍後再試", "error");
        } finally {
          le(!1);
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
                        children: r.jsx(vt, {
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
                    disabled: F,
                    children: r.jsx(He, { className: "w-6 h-6 text-gray-600" }),
                  }),
                ],
              }),
              r.jsx("div", {
                className: "flex-1 overflow-y-auto p-6",
                children: r.jsxs("div", {
                  className: "space-y-4",
                  ref: P,
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
                          onChange: (y) => Z("code", y.target.value),
                          onFocus: () => d("code"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入藥碼搜尋...",
                          disabled: F,
                        }),
                        k === "code" &&
                          u.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: u.map((y) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => E(y),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: y.CODE,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: y.NAME,
                                    }),
                                  ],
                                },
                                y.GUID
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
                          value: m,
                          onChange: (y) => Z("name", y.target.value),
                          onFocus: () => d("name"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入藥名搜尋...",
                          disabled: F,
                        }),
                        k === "name" &&
                          u.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: u.map((y) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => E(y),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: y.NAME,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: y.CODE,
                                    }),
                                  ],
                                },
                                y.GUID
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
                          value: f,
                          onChange: (y) => Z("chineseName", y.target.value),
                          onFocus: () => d("chineseName"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入中文名搜尋...",
                          disabled: F,
                        }),
                        k === "chineseName" &&
                          u.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: u.map((y) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => E(y),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: y.CHT_NAME,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: y.CODE,
                                    }),
                                  ],
                                },
                                y.GUID
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
                          value: b,
                          onChange: (y) => Z("skdiacode", y.target.value),
                          onFocus: () => d("skdiacode"),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent",
                          placeholder: "輸入料號搜尋...",
                          disabled: F,
                        }),
                        k === "skdiacode" &&
                          u.length > 0 &&
                          r.jsx("div", {
                            className:
                              "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                            children: u.map((y) =>
                              r.jsxs(
                                "div",
                                {
                                  onClick: () => E(y),
                                  className:
                                    "px-4 py-2 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0",
                                  children: [
                                    r.jsx("div", {
                                      className: "font-medium text-gray-800",
                                      children: y.SKDIACODE,
                                    }),
                                    r.jsx("div", {
                                      className: "text-sm text-gray-600",
                                      children: y.NAME,
                                    }),
                                  ],
                                },
                                y.GUID
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
                      disabled: F,
                      className:
                        "px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: "取消",
                    }),
                    r.jsx("button", {
                      onClick: V,
                      disabled: F || !c.trim(),
                      className:
                        "px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                      children: F ? "建立中..." : "確認建立",
                    }),
                  ],
                }),
              }),
            ],
          }),
        })
      : null;
  },
  Th = ({
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
        const [f, S] = h.split(",").map(Number);
        return { row: f || 0, col: S || 0 };
      },
      a = (h) => {
        if (!h || h.length === 0)
          return { sortedContents: [], maxRow: 0, maxCol: 0 };
        const f = h.map((k) => ({
            ...k,
            gridPos: l(k.gird_position || "0,0"),
          })),
          S = Math.max(...f.map((k) => k.gridPos.row), 0),
          b = Math.max(...f.map((k) => k.gridPos.col), 0);
        return {
          sortedContents: f.sort((k, d) =>
            k.gridPos.row !== d.gridPos.row
              ? k.gridPos.row - d.gridPos.row
              : k.gridPos.col - d.gridPos.col
          ),
          maxRow: S,
          maxCol: b,
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
        const f = [
          "med_box",
          "dispensing_shelves",
          "store_shelves",
          "grid_draw",
          "list_draw",
        ].includes(h.type);
        return r.jsx(
          "div",
          {
            className: `${f ? "shadow-sm border-2 p-1 rounded-lg" : ""} ${i(
              h.type
            )} flex flex-col max-w-full min-w-0 h-full overflow-hidden`,
            children: r.jsx("div", {
              className: "flex-1 min-w-0 overflow-hidden",
              children: m(h),
            }),
          },
          h.GUID
        );
      },
      g = (h, f, S) => {
        const b = {};
        return (
          h.forEach((M) => {
            const k = l(M.gird_position || "0,0");
            b[`${k.row},${k.col}`] = M;
          }),
          r.jsx("table", {
            className: "w-full h-full max-w-full table-fixed",
            style: { borderCollapse: "separate", borderSpacing: "0px" },
            children: r.jsx("tbody", {
              children: Array.from({ length: f + 1 }, (M, k) =>
                r.jsx(
                  "tr",
                  {
                    children: Array.from({ length: S + 1 }, (d, u) => {
                      const x = `${k},${u}`,
                        _ = b[x];
                      return _
                        ? r.jsx(
                            "td",
                            {
                              className:
                                "align-top bg-transparent overflow-hidden",
                              style: {
                                width: `${100 / (S + 1)}%`,
                                maxWidth: `${100 / (S + 1)}%`,
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
                                width: `${100 / (S + 1)}%`,
                                maxWidth: `${100 / (S + 1)}%`,
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
                  k
                )
              ),
            }),
          })
        );
      },
      m = (h) => {
        switch (h.type) {
          case "parent_container":
            if (h.contents && h.contents.length > 0) {
              const { sortedContents: f, maxRow: S, maxCol: b } = a(h.contents);
              return g(f, S, b);
            } else return r.jsx("div", { className: "" });
          case "sub_container":
            if (h.contents && h.contents.length > 0) {
              const { sortedContents: f, maxRow: S, maxCol: b } = a(h.contents);
              return g(f, S, b);
            } else return r.jsx("div", { className: "" });
          case "dispensing_shelves":
            if (h.contents && h.contents.length > 0) {
              const { sortedContents: f, maxRow: S, maxCol: b } = a(h.contents);
              return g(f, S, b);
            } else
              return r.jsx("div", {
                className:
                  "border-2 rounded-lg flex py-3 items-center justify-center h-full text-gray-400 text-sm",
                children: "無藥盒",
              });
          case "store_shelves":
            if (h.medMapStock && h.medMapStock.length > 0) {
              const f = h.medMapStock,
                S = f.length,
                b = S > 0 ? 100 / S : 100;
              return r.jsx("div", {
                className: "flex h-full w-full overflow-hidden",
                children: f.map((M, k) => {
                  let d = 0;
                  M.qty.forEach((A) => {
                    d += +A;
                  });
                  const u = t && (M.code == t || M.material_no == t),
                    x = n.includes(M.code) || n.includes(M.material_no),
                    _ = o();
                  return r.jsxs(
                    "div",
                    {
                      className: `border-2 rounded-lg border-gray-300 p-2 flex flex-col text-gray-800 justify-center items-center transition-colors cursor-pointer min-w-0 overflow-hidden ${
                        x
                          ? "highlight-breathe-red"
                          : u
                          ? `highlight-breathe-${_}`
                          : ""
                      }`,
                      style: {
                        width: `${b}%`,
                        maxWidth: `${b}%`,
                        flexShrink: 0,
                      },
                      onClick: () =>
                        s && s({ code: M.code || M.material_no, name: M.name }),
                      children: [
                        r.jsx("div", {
                          className:
                            "text-sm font-semibold truncate w-full text-center whitespace-normal overflow-hidden",
                          children: M.name || M.material_no,
                        }),
                        r.jsxs("div", {
                          className: "text-xs mt-1",
                          children: ["數量: ", d || 0],
                        }),
                      ],
                    },
                    M.GUID || k
                  );
                }),
              });
            } else if (h.contents && h.contents.length > 0) {
              const { sortedContents: f, maxRow: S, maxCol: b } = a(h.contents);
              return g(f, S, b);
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
              const f = t && h.med_info.some((M) => M.code == t),
                S = h.med_info.some((M) => n.includes(M.code)),
                b = o();
              return r.jsx("div", {
                className: `text-sm text-center h-full p-2 flex flex-col text-gray-800 justify-center transition-colors cursor-pointer overflow-hidden ${
                  S
                    ? "highlight-breathe-red"
                    : f
                    ? `highlight-breathe-${b}`
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
              const { sortedContents: f, maxRow: S, maxCol: b } = a(h.contents);
              return g(f, S, b);
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
            children: m(e),
          }),
        })
      : r.jsx("div", {
          className: "flex items-center justify-center h-full text-gray-400",
          children: r.jsx("p", { children: "無容器資料" }),
        });
  },
  Rh = ({ isOpen: e, onClose: t, type: n, data: s, onApprove: o }) => {
    const [l, a] = p.useState("0"),
      [i, c] = p.useState("0"),
      [g, m] = p.useState(null),
      [h, f] = p.useState(null),
      [S, b] = p.useState(!1),
      [M, k] = p.useState(!1),
      [d, u] = p.useState(""),
      [x, _] = p.useState(""),
      [A, I] = p.useState([]),
      [R, F] = p.useState([]),
      [le, P] = p.useState([]),
      [z, Z] = p.useState(!1),
      [E, w] = p.useState(!1),
      V = p.useRef(null),
      y = p.useRef(null),
      N = p.useRef(null),
      j = p.useRef(null);
    p.useEffect(() => {
      if (e && s) {
        const D = s.issuedQuantity || s.requestedQuantity || "0";
        a(D), c(D), m(null), f(null), b(!1);
        const ne = localStorage.getItem("medMap_setting");
        if (ne)
          try {
            const ce = JSON.parse(ne);
            u(ce.default_person || ""), _(ce.default_person_id || "");
          } catch (ce) {
            console.error("讀取設定失敗:", ce), u(""), _("");
          }
        else u(""), _("");
        H();
      }
    }, [e, s]),
      p.useEffect(() => {
        const D = (ne) => {
          N.current &&
            !N.current.contains(ne.target) &&
            V.current &&
            !V.current.contains(ne.target) &&
            Z(!1),
            j.current &&
              !j.current.contains(ne.target) &&
              y.current &&
              !y.current.contains(ne.target) &&
              w(!1);
        };
        return (
          document.addEventListener("mousedown", D),
          () => document.removeEventListener("mousedown", D)
        );
      }, []);
    const H = async () => {
        try {
          const D = await ke.getAllStaffInfo();
          D.Code === 200 && D.Data && I(D.Data);
        } catch (D) {
          console.error("獲取人員資料失敗:", D);
        }
      },
      ie = (D) => {
        if ((u(D), D.trim() === "")) {
          F([]), Z(!1);
          return;
        }
        const ne = A.filter(
          (ce) => ce.name && ce.name.toLowerCase().includes(D.toLowerCase())
        );
        F(ne), Z(ne.length > 0);
      },
      K = (D) => {
        if ((_(D), D.trim() === "")) {
          P([]), w(!1);
          return;
        }
        const ne = A.filter(
          (ce) => ce.ID && ce.ID.toLowerCase().includes(D.toLowerCase())
        );
        P(ne), w(ne.length > 0);
      },
      se = (D) => {
        u(D.name), _(D.ID), Z(!1);
      },
      be = (D) => {
        u(D.name), _(D.ID), w(!1);
      };
    if (!e || !s) return null;
    const ue = (D) => {
        if (S) a(D), c(D), b(!1);
        else {
          const ne = l === "0" ? D : l + D;
          a(ne), c(ne);
        }
      },
      Ce = (D) => {
        g && h !== null && !S && de(), f(i), m(D), b(!0);
      },
      de = () => {
        if (g === null || h === null) return;
        const D = parseFloat(h),
          ne = parseFloat(i);
        let ce = 0;
        switch (g) {
          case "+":
            ce = D + ne;
            break;
          case "-":
            ce = D - ne;
            break;
          case "×":
            ce = D * ne;
            break;
          case "÷":
            ce = ne !== 0 ? D / ne : 0;
            break;
          default:
            return;
        }
        const U = ce.toString();
        a(U), c(U), m(null), f(null), b(!0);
      },
      Q = () => {
        de();
      },
      he = () => {
        if (S) a("0."), c("0."), b(!1);
        else if (!l.includes(".")) {
          const D = l + ".";
          a(D), c(D);
        }
      },
      Ne = () => {
        a("0"), c("0"), m(null), f(null), b(!1);
      },
      T = () => {
        const D = new Date(),
          ne = D.getFullYear(),
          ce = String(D.getMonth() + 1).padStart(2, "0"),
          U = String(D.getDate()).padStart(2, "0"),
          C = String(D.getHours()).padStart(2, "0"),
          $ = String(D.getMinutes()).padStart(2, "0"),
          q = String(D.getSeconds()).padStart(2, "0");
        return `${ne}-${ce}-${U}T${C}:${$}:${q}`;
      },
      fe = async () => {
        if (!s) return;
        if (!d.trim()) {
          alert("請輸入核撥人員名稱");
          return;
        }
        const D = n === "requisition" ? "申領" : "撥補";
        if (
          window.confirm(`確認核撥資訊：

藥品名稱：${s.name}
實際撥發量：${l}
核撥人員：${d}${x ? ` (${x})` : ""}

是否確認${D}？`)
        ) {
          k(!0);
          try {
            const ce = T();
            if (n === "requisition") {
              const U = await ke.updateRequisitionActualQuantity(s.GUID, l);
              if (U.Code !== 200) {
                alert(`更新實際撥發量失敗：${U.Message || "未知錯誤"}`), k(!1);
                return;
              }
              const C = {
                ...s,
                actualQuantity: l,
                notice: "False",
                state: "已過帳",
                issuingPerson: d,
                issueTime: ce,
              };
              console.log("申領request", C);
              const $ = await ke.updateRequisitionByGuid(C);
              if ($.Code !== 200) {
                alert(`申領過帳失敗：${$.Message || "未知錯誤"}`), k(!1);
                return;
              }
              console.log("✅ 申領核撥成功:", {
                GUID: s.GUID,
                name: s.name,
                actualQuantity: l,
                issuingPerson: d,
                issueTime: ce,
              });
            } else {
              const U = await ke.updateDistributionActualQuantity(s.GUID, l);
              if (U.Code !== 200) {
                alert(`更新實際撥發量失敗：${U.Message || "未知錯誤"}`), k(!1);
                return;
              }
              const C = {
                ...s,
                actualQuantity: l,
                notice: "False",
                state: "已過帳",
                issuer: d,
                issuanceTime: ce,
              };
              console.log("撥補request", C);
              const $ = await ke.updateDistributionByGuid(C);
              if ($.Code !== 200) {
                alert(`撥補過帳失敗：${$.Message || "未知錯誤"}`), k(!1);
                return;
              }
              console.log("✅ 撥補核撥成功:", {
                GUID: s.GUID,
                name: s.name,
                actualQuantity: l,
                issuer: d,
                issuanceTime: ce,
              });
            }
            o && (await o()), alert(`${D}核撥成功！`), t();
          } catch (ce) {
            console.error(`${D}核撥失敗:`, ce),
              alert(`${D}核撥失敗，請稍後再試`);
          } finally {
            k(!1);
          }
        }
      },
      B = n === "requisition" ? s.requestedQuantity : s.issuedQuantity;
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
                  children: r.jsx(He, { className: "w-5 h-5 text-gray-700" }),
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
                                ref: V,
                                type: "text",
                                value: d,
                                onChange: (D) => ie(D.target.value),
                                onFocus: () => {
                                  d.trim() && ie(d);
                                },
                                placeholder: "人員名稱",
                                className:
                                  "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                              }),
                              z &&
                                r.jsx("div", {
                                  ref: N,
                                  className:
                                    "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto",
                                  children: R.map((D, ne) =>
                                    r.jsxs(
                                      "div",
                                      {
                                        onClick: () => se(D),
                                        className:
                                          "px-3 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                        children: [
                                          r.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: D.ID,
                                          }),
                                          r.jsx("div", {
                                            className:
                                              "font-medium text-gray-900 text-sm",
                                            children: D.name,
                                          }),
                                        ],
                                      },
                                      ne
                                    )
                                  ),
                                }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "relative",
                            children: [
                              r.jsx("input", {
                                ref: y,
                                type: "text",
                                value: x,
                                onChange: (D) => K(D.target.value),
                                onFocus: () => {
                                  x.trim() && K(x);
                                },
                                placeholder: "人員 ID",
                                className:
                                  "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                              }),
                              E &&
                                r.jsx("div", {
                                  ref: j,
                                  className:
                                    "absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto",
                                  children: le.map((D, ne) =>
                                    r.jsxs(
                                      "div",
                                      {
                                        onClick: () => be(D),
                                        className:
                                          "px-3 py-2 hover:bg-blue-50 cursor-pointer transition-colors",
                                        children: [
                                          r.jsx("div", {
                                            className:
                                              "font-medium text-gray-900 text-sm",
                                            children: D.ID,
                                          }),
                                          r.jsx("div", {
                                            className: "text-xs text-gray-500",
                                            children: D.name,
                                          }),
                                        ],
                                      },
                                      ne
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
                            children: B || "-",
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
                        onClick: () => ue("7"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "7",
                      }),
                      r.jsx("button", {
                        onClick: () => ue("8"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "8",
                      }),
                      r.jsx("button", {
                        onClick: () => ue("9"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "9",
                      }),
                      r.jsx("button", {
                        onClick: () => Ce("÷"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "÷",
                      }),
                      r.jsx("button", {
                        onClick: () => ue("4"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "4",
                      }),
                      r.jsx("button", {
                        onClick: () => ue("5"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "5",
                      }),
                      r.jsx("button", {
                        onClick: () => ue("6"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "6",
                      }),
                      r.jsx("button", {
                        onClick: () => Ce("×"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "×",
                      }),
                      r.jsx("button", {
                        onClick: () => ue("1"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "1",
                      }),
                      r.jsx("button", {
                        onClick: () => ue("2"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "2",
                      }),
                      r.jsx("button", {
                        onClick: () => ue("3"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "3",
                      }),
                      r.jsx("button", {
                        onClick: () => Ce("-"),
                        className:
                          "py-4 text-lg font-semibold bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors",
                        children: "-",
                      }),
                      r.jsx("button", {
                        onClick: () => ue("0"),
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: "0",
                      }),
                      r.jsx("button", {
                        onClick: he,
                        className:
                          "py-4 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors",
                        children: ".",
                      }),
                      r.jsx("button", {
                        onClick: Q,
                        className:
                          "py-4 text-lg font-semibold bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors",
                        children: "=",
                      }),
                      r.jsx("button", {
                        onClick: () => Ce("+"),
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
                  onClick: Ne,
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
                  onClick: fe,
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
  Ah = ({
    isOpen: e,
    onClose: t,
    medicineInfo: n,
    requisitions: s,
    distributions: o,
    onNoticeUpdated: l,
  }) => {
    const { setHighlightedMedicineCode: a } = Ye(),
      [i, c] = p.useState(s),
      [g, m] = p.useState(o),
      [h, f] = p.useState(null),
      [S, b] = p.useState(!1),
      [M, k] = p.useState(null),
      [d, u] = p.useState("requisition"),
      [x, _] = p.useState(!1),
      [A, I] = p.useState(!1);
    ro.useEffect(() => {
      c(s), m(o);
    }, [s, o]),
      p.useEffect(
        () => () => {
          ts.cleanup();
        },
        []
      );
    const R = async () => {
        var w;
        if (n && !A) {
          if (!n.serverName || !n.serverType) {
            alert("無法取得藥品位置資訊");
            return;
          }
          I(!0);
          try {
            const V = localStorage.getItem("medMap_setting");
            let y = "255,0,0",
              N = "1",
              j = 60;
            if (V)
              try {
                const H = JSON.parse(V);
                (y =
                  {
                    blue: "255,0,0",
                    green: "0,255,0",
                    red: "0,0,255",
                    yellow: "0,255,255",
                    purple: "255,0,255",
                    cyan: "255,255,0",
                  }[H.light_color] || "255,0,0"),
                  (N =
                    ((w = H.brightness) == null ? void 0 : w.toString()) ||
                    "1"),
                  (j = H.light_sec || 60);
              } catch (H) {
                console.error("讀取設定失敗:", H);
              }
            if (x) await ts.turnOffAllLights(), _(!1), a(null);
            else {
              const H = [
                {
                  serverName: n.serverName,
                  serverType: n.serverType,
                  medicineCode: n.code,
                },
              ];
              await ts.startLighting(H, y, N, j * 1e3, () => {
                _(!1), a(null);
              }),
                _(!0),
                a(n.code);
            }
          } catch (V) {
            console.error("亮燈操作失敗:", V);
          } finally {
            I(!1);
          }
        }
      },
      F = async (w) => {
        const V = w.notice === "True" ? "False" : "True";
        f(w.GUID);
        const y = [...i],
          N = y.findIndex((j) => j.GUID === w.GUID);
        if (N === -1) {
          f(null);
          return;
        }
        (y[N] = { ...w, notice: V }), c(y);
        try {
          const j = await ke.updateRequisitionNotice(w.GUID, V);
          j.Code !== 200
            ? ((y[N] = { ...w, notice: w.notice }),
              c(y),
              console.error("更新申領通知狀態失敗:", j))
            : l && l();
        } catch (j) {
          (y[N] = { ...w, notice: w.notice }),
            c(y),
            console.error("更新申領通知狀態失敗:", j);
        } finally {
          f(null);
        }
      },
      le = async (w) => {
        const V = w.notice === "True" ? "False" : "True";
        f(w.GUID);
        const y = [...g],
          N = y.findIndex((j) => j.GUID === w.GUID);
        if (N === -1) {
          f(null);
          return;
        }
        (y[N] = { ...w, notice: V }), m(y);
        try {
          const j = await ke.updateDistributionNotice(w.GUID, V);
          j.Code !== 200
            ? ((y[N] = { ...w, notice: w.notice }),
              m(y),
              console.error("更新撥補通知狀態失敗:", j))
            : l && l();
        } catch (j) {
          (y[N] = { ...w, notice: w.notice }),
            m(y),
            console.error("更新撥補通知狀態失敗:", j);
        } finally {
          f(null);
        }
      };
    if (!e || !n) return null;
    const P = i.filter((w) => w.state === "等待過帳"),
      z = g.filter((w) => w.state === "等待過帳"),
      Z = P.length === 0 && z.length === 0,
      E = (w) => {
        if (!w || w === "1/01/01 00:00:00" || w === "0001-01-01T00:00:00")
          return "-";
        try {
          const V = new Date(w);
          if (isNaN(V.getTime())) return w;
          const y = V.getFullYear(),
            N = String(V.getMonth() + 1).padStart(2, "0"),
            j = String(V.getDate()).padStart(2, "0"),
            H = String(V.getHours()).padStart(2, "0"),
            ie = String(V.getMinutes()).padStart(2, "0");
          return `${y}/${N}/${j} ${H}:${ie}`;
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
                      onClick: R,
                      disabled: A,
                      className: `p-2 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                        x
                          ? "bg-green-500 text-white hover:bg-green-600 shadow-lg"
                          : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                      }`,
                      title: x ? "點擊關燈" : "點擊亮燈",
                      children: r.jsx(sh, {
                        className: "w-6 h-6",
                        fill: x ? "currentColor" : "none",
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
                    children: r.jsx(He, { className: "w-6 h-6 text-gray-700" }),
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
              children: Z
                ? r.jsx("div", {
                    className:
                      "flex items-center justify-center h-40 text-gray-400 text-lg",
                    children: "無藥品需求",
                  })
                : r.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      P.map((w, V) =>
                        r.jsxs(
                          "div",
                          {
                            className:
                              "border border-blue-200 rounded-lg p-3 bg-blue-50 hover:shadow-md transition-shadow",
                            onClick: () => {
                              u("requisition"), k(w), b(!0);
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
                                        onClick: (y) => {
                                          y.stopPropagation(), F(w);
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
                                        children: r.jsx(wc, {
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
                                        children: E(w.requestTime),
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
                      z.map((w, V) =>
                        r.jsxs(
                          "div",
                          {
                            className:
                              "border border-yellow-200 rounded-lg p-3 bg-yellow-50 hover:shadow-md transition-shadow",
                            onClick: () => {
                              u("distribution"), k(w), b(!0);
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
                                    onClick: (y) => {
                                      y.stopPropagation(), le(w);
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
                                    children: r.jsx(wc, {
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
                                        children: E(w.addedTime),
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
        r.jsx(Rh, {
          isOpen: S,
          onClose: () => b(!1),
          type: d,
          data: M,
          onApprove: l,
        }),
      ],
    });
  },
  $h = ({ isOpen: e, onClose: t, container: n }) => {
    const [s, o] = p.useState("list_mode"),
      { highlightedMedicineCode: l } = Ye(),
      [a, i] = p.useState(!1),
      [c, g] = p.useState([]),
      [m, h] = p.useState([]),
      [f, S] = p.useState([]),
      [b, M] = p.useState(!1),
      [k, d] = p.useState(null),
      u = p.useRef(null),
      x = p.useRef(null),
      _ = () => {
        try {
          const z = localStorage.getItem("medMap_setting");
          if (z) {
            const E = JSON.parse(z).light_sec;
            if (E != null && E !== "") {
              const w = Number(E);
              if (!isNaN(w) && w > 0) return w * 1e3;
            }
          }
        } catch (z) {
          console.error("讀取亮燈設定失敗:", z);
        }
        return 6e4;
      },
      A = () => {
        try {
          const P = localStorage.getItem("medMap_setting");
          if (P) return JSON.parse(P).light_color || "red";
        } catch (P) {
          console.error("讀取高亮顏色設定失敗:", P);
        }
        return "red";
      },
      I = p.useCallback(async () => {
        try {
          const P = new Date(),
            z = `${P.getFullYear()}-${String(P.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(P.getDate()).padStart(2, "0")} 00:00:00`,
            Z = `${P.getFullYear()}-${String(P.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(P.getDate()).padStart(2, "0")} 23:59:59`,
            [E, w] = await Promise.all([
              ke.getRequisitionByTime(z, Z),
              ke.getDistributionByTime(z, Z),
            ]),
            V = [];
          if (E.Code === 200 && E.Data) {
            const y = E.Data.filter((j) => {
              var H;
              return (H = n == null ? void 0 : n.med_list) == null
                ? void 0
                : H.some((ie) => ie.code === j.code);
            });
            h(y),
              y
                .filter((j) => j.state === "等待過帳" && j.notice === "True")
                .forEach((j) => {
                  j.code && V.push(j.code);
                });
          }
          if (w.Code === 200 && w.Data) {
            const y = w.Data.filter((j) => {
              var H;
              return (H = n == null ? void 0 : n.med_list) == null
                ? void 0
                : H.some((ie) => ie.code === j.code);
            });
            S(y),
              y
                .filter((j) => j.state === "等待過帳" && j.notice === "True")
                .forEach((j) => {
                  j.code && (V.includes(j.code) || V.push(j.code));
                });
          }
          g(V);
        } catch (P) {
          console.error("檢查申領撥補資料失敗:", P);
        }
      }, [n]);
    p.useEffect(
      () => (
        e
          ? (I(),
            x.current && clearInterval(x.current),
            (x.current = setInterval(() => {
              I();
            }, 1e4)))
          : x.current && (clearInterval(x.current), (x.current = null)),
        () => {
          x.current && (clearInterval(x.current), (x.current = null));
        }
      ),
      [e, I]
    ),
      p.useEffect(() => {
        if (
          (console.log("容器資料：", n),
          console.log("🔍 ContainerDetailModal - 亮燈狀態檢查:", {
            isOpen: e,
            highlightedMedicineCode: l,
            containerName: n == null ? void 0 : n.name,
          }),
          e && l)
        ) {
          i(!0);
          const P = _();
          console.log("✅ ContainerDetailModal - 啟動亮燈:", {
            medicineCode: l,
            duration: P / 1e3 + "秒",
          }),
            u.current && clearTimeout(u.current),
            (u.current = setTimeout(() => {
              console.log("⏱️ ContainerDetailModal - 亮燈時間結束"),
                i(!1),
                (u.current = null);
            }, P));
        } else i(!1);
        return () => {
          u.current && clearTimeout(u.current);
        };
      }, [e, l]);
    const R = (P) => {
      var E, w;
      m.filter((V) => V.code === P.code), f.filter((V) => V.code === P.code);
      const z = (V) => {
          for (const y of V) {
            if (y.type === "store_shelves" && y.medMapStock) {
              const N = y.medMapStock.find((j) => j.code === P.code);
              if (N) return { stock: N, shelf: y };
            }
            if (y.contents && y.contents.length > 0) {
              const N = z(y.contents);
              if (N) return N;
            }
          }
          return null;
        },
        Z = n ? z([n]) : null;
      d({
        code: P.code,
        name: P.name,
        cht_name: P.cht_name,
        skdiacode: P.SKDIACODE || P.skdiacode,
        serverName:
          (E = Z == null ? void 0 : Z.shelf) == null ? void 0 : E.serverName,
        serverType:
          (w = Z == null ? void 0 : Z.shelf) == null ? void 0 : w.serverType,
      }),
        M(!0);
    };
    if (!e) return null;
    const F = () =>
        !(n != null && n.med_list) || n.med_list.length === 0
          ? r.jsx("div", {
              className:
                "flex items-center justify-center h-full text-gray-400",
              children: r.jsx("p", { children: "無藥品資料" }),
            })
          : r.jsx("div", {
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
                    children: n.med_list.map((P, z) => {
                      const Z = a && l && P.code == l,
                        E = c.includes(P.code);
                      let w = 0;
                      P.qty.forEach((y) => {
                        w += +y;
                      }),
                        z === 0 &&
                          console.log(
                            "🧪 ContainerDetailModal - 第一筆藥品檢查:",
                            {
                              medCode: P.code,
                              highlightedCode: l,
                              isHighlightActive: a,
                              isHighlighted: Z,
                              isPendingRequisition: E,
                              comparison: `${P.code} == ${l} = ${P.code == l}`,
                            }
                          );
                      const V = A();
                      return r.jsxs(
                        "tr",
                        {
                          className: `transition-colors cursor-pointer ${
                            E
                              ? "highlight-breathe-red"
                              : Z
                              ? `highlight-breathe-${V}`
                              : "hover:bg-gray-50"
                          }`,
                          onClick: () => R(P),
                          children: [
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm",
                              children: P.code || "-",
                            }),
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm",
                              children: P.SKDIACODE || "-",
                            }),
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm",
                              children: P.name || "-",
                            }),
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm text-right",
                              children: w || "-",
                            }),
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm text-center",
                              children: P.stockCol || "-",
                            }),
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm text-center",
                              children: P.stockRow || "-",
                            }),
                            r.jsx("td", {
                              className:
                                "border border-gray-300 px-1 py-2 text-sm text-center",
                              children: P.stock || "-",
                            }),
                          ],
                        },
                        z
                      );
                    }),
                  }),
                ],
              }),
            }),
      le = () =>
        n
          ? r.jsx(Th, {
              container: n,
              highlightedMedicineCode: a ? l : null,
              pendingRequisitionCodes: c,
              onMedicineClick: R,
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
                      children: r.jsx(He, {
                        className: "w-6 h-6 text-gray-700",
                      }),
                    }),
                  ],
                }),
                r.jsx("div", {
                  className: "flex-1 overflow-hidden p-3",
                  children: s === "list_mode" ? F() : le(),
                }),
              ],
            }),
          ],
        }),
        r.jsx(Ah, {
          isOpen: b,
          onClose: () => M(!1),
          medicineInfo: k,
          requisitions: k ? m.filter((P) => P.code === k.code) : [],
          distributions: k ? f.filter((P) => P.code === k.code) : [],
          onNoticeUpdated: I,
        }),
      ],
    });
  },
  Oh = () => {
    const {
        editStoreShelfModalOpen: e,
        closeEditStoreShelfModal: t,
        selectedStoreShelfForEdit: n,
        showNotification: s,
        reloadMedMapData: o,
      } = Ye(),
      [l, a] = p.useState({
        name: "",
        position: "",
        width: "85",
        height: "29",
        ip: "",
        serverName: "",
        serverType: "",
        deviceType: "",
      }),
      [i, c] = p.useState(!1);
    p.useEffect(() => {
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
    const g = (f, S) => {
        a((b) => ({ ...b, [f]: S }));
      },
      m = async () => {
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
            const f = {
                Data: [
                  {
                    Master_GUID: n.Master_GUID,
                    name: l.name.trim(),
                    position: l.position.trim(),
                    type: n.type,
                    width: l.width,
                    height: l.height,
                    ip_light: l.ip.trim(),
                    device_type: l.deviceType,
                    serverName: l.serverName.trim(),
                    serverType: l.serverType.trim(),
                    GUID: n.GUID,
                  },
                ],
              },
              b = `${(await ke.getConfig()).domain}/api/medmap/update_shelf`,
              k = await (
                await fetch(b, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(f),
                })
              ).json();
            console.log(f),
              console.log(k),
              k.Code === 200
                ? (s("層架更新成功", "success"), t(), await o())
                : s(k.Result || "更新失敗", "error");
          } catch (f) {
            console.error("更新層架失敗:", f),
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
              onClick: (f) => f.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-6 py-4 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(mr, { className: "w-6 h-6 text-gray-600" }),
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
                      children: r.jsx(He, { className: "w-6 h-6" }),
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
                            onChange: (f) => g("name", f.target.value),
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
                            onChange: (f) => g("position", f.target.value),
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
                                onChange: (f) => g("width", f.target.value),
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
                                onChange: (f) => g("height", f.target.value),
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
                            onChange: (f) => g("ip", f.target.value),
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
                            onChange: (f) => g("serverName", f.target.value),
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
                            onChange: (f) => g("serverType", f.target.value),
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
                            onChange: (f) => g("deviceType", f.target.value),
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
                      onClick: m,
                      disabled: i,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        i && r.jsx(jt, { className: "w-4 h-4 animate-spin" }),
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
  Lh = () => {
    const {
        editParentContainerModalOpen: e,
        closeEditParentContainerModal: t,
        selectedParentContainerForEdit: n,
        showNotification: s,
        reloadMedMapData: o,
      } = Ye(),
      [l, a] = p.useState({
        name: "",
        position: "",
        ip_light: "",
        serverName: "",
        serverType: "",
        deviceType: "",
      }),
      [i, c] = p.useState(!1);
    p.useEffect(() => {
      n &&
        e &&
        a({
          name: n.name || "",
          position: n.gird_position || "",
          ip_light: n.ip_light || "",
          serverName: n.serverName || "",
          serverType: n.serverType || "",
          deviceType: n.device_type || "",
        });
    }, [n, e]);
    const g = (f, S) => {
        a((b) => ({ ...b, [f]: S }));
      },
      m = async () => {
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
            const f = [
                {
                  GUID: n.GUID,
                  name: l.name.trim(),
                  position: l.position.trim(),
                  absolute_position: n.absolute_position || "0,0",
                  ip_light: l.ip_light.trim(),
                  serverName: l.serverName.trim(),
                  serverType: l.serverType.trim(),
                  device_type: l.deviceType,
                },
              ],
              S = await ke.updateMedMapSection(f);
            S.Code === 200
              ? (s("父容器更新成功", "success"), t(), await o())
              : s(S.Result || "更新失敗", "error");
          } catch (f) {
            console.error("更新父容器失敗:", f),
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
              onClick: (f) => f.stopPropagation(),
              children: [
                r.jsxs("div", {
                  className:
                    "flex items-center justify-between px-6 py-4 border-b border-gray-200",
                  children: [
                    r.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        r.jsx(mr, { className: "w-6 h-6 text-gray-600" }),
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
                      children: r.jsx(He, { className: "w-6 h-6" }),
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
                            onChange: (f) => g("name", f.target.value),
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
                            onChange: (f) => g("position", f.target.value),
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
                            onChange: (f) => g("ip_light", f.target.value),
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
                            onChange: (f) => g("serverName", f.target.value),
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
                            onChange: (f) => g("serverType", f.target.value),
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
                            onChange: (f) => g("deviceType", f.target.value),
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
                      onClick: m,
                      disabled: i,
                      className:
                        "px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2",
                      children: [
                        i && r.jsx(jt, { className: "w-4 h-4 animate-spin" }),
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
  Uh = ({ isOpen: e, onLoginSuccess: t }) => {
    const { t: n } = mt(),
      [s, o] = p.useState(""),
      [l, a] = p.useState(""),
      [i, c] = p.useState(!1),
      [g, m] = p.useState(!1),
      [h, f] = p.useState(""),
      S = async (M) => {
        if ((M.preventDefault(), !s.trim() || !l.trim())) {
          f("Please enter both ID and password");
          return;
        }
        m(!0), f("");
        try {
          const k = await ke.login({ ID: s.trim(), Password: l });
          if (k.Code === 200 && k.Data) {
            const d = { ...k.Data, loginTime: new Date().toISOString() };
            sessionStorage.setItem("user_session", JSON.stringify(d)), t(d);
          } else f(k.Result || "Login failed");
        } catch (k) {
          console.error("Login failed:", k),
            f("Network error. Please try again.");
        } finally {
          m(!1);
        }
      },
      b = (M) => {
        M.key === "Enter" && !g && S(M);
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
                      onSubmit: S,
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
                              onKeyPress: b,
                              placeholder: n("login.userIdPlaceholder"),
                              className:
                                "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                              disabled: g,
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
                                  onKeyPress: b,
                                  placeholder: n("login.passwordPlaceholder"),
                                  className:
                                    "w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                                  disabled: g,
                                  autoComplete: "current-password",
                                }),
                                r.jsx("button", {
                                  type: "button",
                                  onClick: () => c(!i),
                                  className:
                                    "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors",
                                  disabled: g,
                                  children: i
                                    ? r.jsx(th, { className: "w-5 h-5" })
                                    : r.jsx(nh, { className: "w-5 h-5" }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        r.jsx("button", {
                          type: "submit",
                          disabled: g || !s.trim() || !l.trim(),
                          className:
                            "w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                          children: g
                            ? r.jsxs(r.Fragment, {
                                children: [
                                  r.jsx(jt, {
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
  Bh = ({ isVisible: e, message: t }) => {
    const { t: n } = mt();
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
                        children: r.jsx(ii, {
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
                      r.jsx(jt, {
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
  zh = ({
    message: e,
    type: t,
    isVisible: n,
    onClose: s,
    duration: o = 3e3,
  }) => {
    const [l, a] = p.useState(!1);
    return (
      p.useEffect(() => {
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
                  ? r.jsx(Jm, { className: "w-5 h-5 text-green-600" })
                  : r.jsx(dh, { className: "w-5 h-5 text-red-600" }),
                r.jsx("span", {
                  className: "text-sm font-medium",
                  children: e,
                }),
                r.jsx("button", {
                  onClick: s,
                  className: `p-1 rounded-full hover:bg-black/10 transition-colors ${
                    t === "success" ? "text-green-600" : "text-red-600"
                  }`,
                  children: r.jsx(He, { className: "w-4 h-4" }),
                }),
              ],
            }),
          })
        : null
    );
  };
function Gh() {
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
    closeAddParentContainerModal: g,
    selectedDepartmentForAdd: m,
    addStoreItemModalOpen: h,
    closeAddStoreItemModal: f,
    selectedStoreShelfForAdd: S,
    addDepartmentModalOpen: b,
    closeAddDepartmentModal: M,
    qrCodeScannerModalOpen: k,
    qrCodeScannerMode: d,
    closeQRCodeScannerModal: u,
    addBarcodeModalOpen: x,
    closeAddBarcodeModal: _,
    initialBarcodeValue: A,
    containerDetailModalOpen: I,
    closeContainerDetailModal: R,
    selectedContainerForDetail: F,
    setMedicineList: le,
    setIsLoadingMedicines: P,
    showNotification: z,
  } = Ye();
  p.useEffect(() => {
    (() => {
      try {
        const y = sessionStorage.getItem("user_session");
        if (y) {
          const N = JSON.parse(y);
          N.GUID && N.ID && N.Name
            ? (o(N), s(!0))
            : sessionStorage.removeItem("user_session");
        }
      } catch (y) {
        console.error("Error checking session:", y),
          sessionStorage.removeItem("user_session");
      }
    })();
  }, [s, o]),
    p.useEffect(() => {
      let V = !0;
      return (
        (async () => {
          if (n) {
            P(!0);
            try {
              console.log("開始載入藥品資料...");
              const N = await ke.getMedicineCloud();
              if ((console.log("藥品資料 API 回應:", N), !V)) return;
              N.Code === 200 && N.Data
                ? (le(N.Data),
                  console.log(`✅ 成功載入 ${N.Data.length} 筆藥品資料`),
                  z(`載入 ${N.Data.length} 筆藥品資料`, "success"))
                : (console.warn("API 回應異常:", N),
                  le([]),
                  z("藥品資料載入異常，請稍後重試", "error"));
            } catch (N) {
              if (!V) return;
              console.error("載入藥品資料失敗:", N),
                le([]),
                z("無法連線到藥品資料庫，部分功能可能無法使用", "error");
            } finally {
              V && P(!1);
            }
          }
        })(),
        () => {
          V = !1;
        }
      );
    }, [n]);
  const Z = (V) => {
      o(V), s(!0);
    },
    E = ro.useRef(null),
    w = (V, y) => {
      if (
        (console.log("📸 QR掃描成功 - handleQRScanSuccess 被調用:", {
          barcode: V,
          medicineData: y,
          mode: d,
        }),
        console.log("📸 當前 mode:", d),
        console.log("📸 當前 viewMode:", t),
        console.log("📸 drugCanvasRef.current:", E.current),
        d === "track_Drug_mode")
      ) {
        if ((console.log("✅ 進入 track_Drug_mode 分支"), t !== "medicine")) {
          console.warn("⚠️ 當前不在藥品地圖視圖，無法定位藥品"),
            z("請切換到藥品地圖視圖後再使用此功能", "error");
          return;
        }
        E.current
          ? (console.log("✅ drugCanvasRef.current 存在"),
            console.log(
              "📸 drugCanvasRef.current.locateDrug 類型:",
              typeof E.current.locateDrug
            ),
            typeof E.current.locateDrug == "function"
              ? (console.log("✅ 呼叫 locateDrug 函數"),
                E.current.locateDrug(y))
              : console.warn("⚠️ locateDrug 不是函數"))
          : console.warn("⚠️ drugCanvasRef.current 不存在");
      } else console.log("⚠️ mode 不是 track_Drug_mode，當前 mode:", d);
    };
  return n
    ? r.jsxs("div", {
        className: "min-h-screen bg-gray-50",
        children: [
          r.jsx(uh, {}),
          r.jsx(fh, {}),
          r.jsx(hh, {}),
          r.jsx("div", {
            className: "fixed inset-0",
            children: r.jsx("div", {
              className: "w-full h-full",
              children:
                t === "department" ? r.jsx(vh, {}) : r.jsx(Hu, { ref: E }),
            }),
          }),
          r.jsx(gh, {}),
          r.jsx(Sh, {}),
          r.jsx(Ch, {}),
          r.jsx(kh, {}),
          r.jsx(Dh, {}),
          r.jsx(_h, {}),
          r.jsx(Mh, {}),
          r.jsx(Eh, { isOpen: h, onClose: f, storeShelf: S }),
          r.jsx(Ih, { isOpen: b, onClose: M }),
          r.jsx(Vo, { isOpen: k, onClose: u, mode: d, onScanSuccess: w }),
          r.jsx(Ph, { isOpen: x, onClose: _, initialBarcode: A }),
          r.jsx($h, { isOpen: I, onClose: R, container: F }),
          r.jsx(Oh, {}),
          r.jsx(Lh, {}),
          r.jsx(Bh, { isVisible: l }),
          r.jsx(zh, {
            message: a.message,
            type: a.type,
            isVisible: a.isVisible,
            onClose: i,
          }),
        ],
      })
    : r.jsx(Uh, { isOpen: !0, onLoginSuccess: Z });
}
function Fh() {
  return r.jsx(Ym, { children: r.jsx(Wm, { children: r.jsx(Gh, {}) }) });
}
Au(document.getElementById("root")).render(
  r.jsx(p.StrictMode, { children: r.jsx(Fh, {}) })
);
