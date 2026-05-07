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
var vo = { exports: {} },
  dl = {},
  yo = { exports: {} },
  _ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nr = Symbol.for("react.element"),
  Hc = Symbol.for("react.portal"),
  Oc = Symbol.for("react.fragment"),
  Vc = Symbol.for("react.strict_mode"),
  Uc = Symbol.for("react.profiler"),
  Fc = Symbol.for("react.provider"),
  Qc = Symbol.for("react.context"),
  Wc = Symbol.for("react.forward_ref"),
  $c = Symbol.for("react.suspense"),
  qc = Symbol.for("react.memo"),
  Gc = Symbol.for("react.lazy"),
  Ya = Symbol.iterator;
function Zc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ya && e[Ya]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var No = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  wo = Object.assign,
  ko = {};
function mn(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = ko),
    (this.updater = n || No));
}
mn.prototype.isReactComponent = {};
mn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
mn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function jo() {}
jo.prototype = mn.prototype;
function Js(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = ko),
    (this.updater = n || No));
}
var ea = (Js.prototype = new jo());
ea.constructor = Js;
wo(ea, mn.prototype);
ea.isPureReactComponent = !0;
var Ja = Array.isArray,
  Co = Object.prototype.hasOwnProperty,
  ta = { current: null },
  So = { key: !0, ref: !0, __self: !0, __source: !0 };
function bo(e, t, n) {
  var r,
    l = {},
    s = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Co.call(t, r) && !So.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var u = Array(o), d = 0; d < o; d++) u[d] = arguments[d + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((o = e.defaultProps), o)) l[r] === void 0 && (l[r] = o[r]);
  return {
    $$typeof: nr,
    type: e,
    key: s,
    ref: i,
    props: l,
    _owner: ta.current,
  };
}
function Kc(e, t) {
  return {
    $$typeof: nr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function na(e) {
  return typeof e == "object" && e !== null && e.$$typeof === nr;
}
function Xc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ei = /\/+/g;
function El(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Xc("" + e.key)
    : t.toString(36);
}
function Dr(e, t, n, r, l) {
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
          case nr:
          case Hc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + El(i, 0) : r),
      Ja(l)
        ? ((n = ""),
          e != null && (n = e.replace(ei, "$&/") + "/"),
          Dr(l, t, n, "", function (d) {
            return d;
          }))
        : l != null &&
          (na(l) &&
            (l = Kc(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(ei, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Ja(e)))
    for (var o = 0; o < e.length; o++) {
      s = e[o];
      var u = r + El(s, o);
      i += Dr(s, t, n, u, l);
    }
  else if (((u = Zc(e)), typeof u == "function"))
    for (e = u.call(e), o = 0; !(s = e.next()).done; )
      ((s = s.value), (u = r + El(s, o++)), (i += Dr(s, t, n, u, l)));
  else if (s === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return i;
}
function cr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Dr(e, r, "", "", function (s) {
      return t.call(n, s, l++);
    }),
    r
  );
}
function Yc(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ce = { current: null },
  Lr = { transition: null },
  Jc = {
    ReactCurrentDispatcher: ce,
    ReactCurrentBatchConfig: Lr,
    ReactCurrentOwner: ta,
  };
function Do() {
  throw Error("act(...) is not supported in production builds of React.");
}
_.Children = {
  map: cr,
  forEach: function (e, t, n) {
    cr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      cr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      cr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!na(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
_.Component = mn;
_.Fragment = Oc;
_.Profiler = Uc;
_.PureComponent = Js;
_.StrictMode = Vc;
_.Suspense = $c;
_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jc;
_.act = Do;
_.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = wo({}, e.props),
    l = e.key,
    s = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (i = ta.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (u in t)
      Co.call(t, u) &&
        !So.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    o = Array(u);
    for (var d = 0; d < u; d++) o[d] = arguments[d + 2];
    r.children = o;
  }
  return { $$typeof: nr, type: e.type, key: l, ref: s, props: r, _owner: i };
};
_.createContext = function (e) {
  return (
    (e = {
      $$typeof: Qc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Fc, _context: e }),
    (e.Consumer = e)
  );
};
_.createElement = bo;
_.createFactory = function (e) {
  var t = bo.bind(null, e);
  return ((t.type = e), t);
};
_.createRef = function () {
  return { current: null };
};
_.forwardRef = function (e) {
  return { $$typeof: Wc, render: e };
};
_.isValidElement = na;
_.lazy = function (e) {
  return { $$typeof: Gc, _payload: { _status: -1, _result: e }, _init: Yc };
};
_.memo = function (e, t) {
  return { $$typeof: qc, type: e, compare: t === void 0 ? null : t };
};
_.startTransition = function (e) {
  var t = Lr.transition;
  Lr.transition = {};
  try {
    e();
  } finally {
    Lr.transition = t;
  }
};
_.unstable_act = Do;
_.useCallback = function (e, t) {
  return ce.current.useCallback(e, t);
};
_.useContext = function (e) {
  return ce.current.useContext(e);
};
_.useDebugValue = function () {};
_.useDeferredValue = function (e) {
  return ce.current.useDeferredValue(e);
};
_.useEffect = function (e, t) {
  return ce.current.useEffect(e, t);
};
_.useId = function () {
  return ce.current.useId();
};
_.useImperativeHandle = function (e, t, n) {
  return ce.current.useImperativeHandle(e, t, n);
};
_.useInsertionEffect = function (e, t) {
  return ce.current.useInsertionEffect(e, t);
};
_.useLayoutEffect = function (e, t) {
  return ce.current.useLayoutEffect(e, t);
};
_.useMemo = function (e, t) {
  return ce.current.useMemo(e, t);
};
_.useReducer = function (e, t, n) {
  return ce.current.useReducer(e, t, n);
};
_.useRef = function (e) {
  return ce.current.useRef(e);
};
_.useState = function (e) {
  return ce.current.useState(e);
};
_.useSyncExternalStore = function (e, t, n) {
  return ce.current.useSyncExternalStore(e, t, n);
};
_.useTransition = function () {
  return ce.current.useTransition();
};
_.version = "18.3.1";
yo.exports = _;
var M = yo.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ed = M,
  td = Symbol.for("react.element"),
  nd = Symbol.for("react.fragment"),
  rd = Object.prototype.hasOwnProperty,
  ld = ed.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  sd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Lo(e, t, n) {
  var r,
    l = {},
    s = null,
    i = null;
  (n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (i = t.ref));
  for (r in t) rd.call(t, r) && !sd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: td,
    type: e,
    key: s,
    ref: i,
    props: l,
    _owner: ld.current,
  };
}
dl.Fragment = nd;
dl.jsx = Lo;
dl.jsxs = Lo;
vo.exports = dl;
var a = vo.exports,
  Eo = { exports: {} },
  we = {},
  Po = { exports: {} },
  To = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, L) {
    var P = j.length;
    j.push(L);
    e: for (; 0 < P; ) {
      var R = (P - 1) >>> 1,
        X = j[R];
      if (0 < l(X, L)) ((j[R] = L), (j[P] = X), (P = R));
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var L = j[0],
      P = j.pop();
    if (P !== L) {
      j[0] = P;
      e: for (var R = 0, X = j.length, or = X >>> 1; R < or; ) {
        var yt = 2 * (R + 1) - 1,
          Ll = j[yt],
          Nt = yt + 1,
          ur = j[Nt];
        if (0 > l(Ll, P))
          Nt < X && 0 > l(ur, Ll)
            ? ((j[R] = ur), (j[Nt] = P), (R = Nt))
            : ((j[R] = Ll), (j[yt] = P), (R = yt));
        else if (Nt < X && 0 > l(ur, P)) ((j[R] = ur), (j[Nt] = P), (R = Nt));
        else break e;
      }
    }
    return L;
  }
  function l(j, L) {
    var P = j.sortIndex - L.sortIndex;
    return P !== 0 ? P : j.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var i = Date,
      o = i.now();
    e.unstable_now = function () {
      return i.now() - o;
    };
  }
  var u = [],
    d = [],
    g = 1,
    h = null,
    p = 3,
    N = !1,
    x = !1,
    w = !1,
    A = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(j) {
    for (var L = n(d); L !== null; ) {
      if (L.callback === null) r(d);
      else if (L.startTime <= j)
        (r(d), (L.sortIndex = L.expirationTime), t(u, L));
      else break;
      L = n(d);
    }
  }
  function v(j) {
    if (((w = !1), f(j), !x))
      if (n(u) !== null) ((x = !0), hn(k));
      else {
        var L = n(d);
        L !== null && gn(v, L.startTime - j);
      }
  }
  function k(j, L) {
    ((x = !1), w && ((w = !1), m(D), (D = -1)), (N = !0));
    var P = p;
    try {
      for (
        f(L), h = n(u);
        h !== null && (!(h.expirationTime > L) || (j && !ee()));
      ) {
        var R = h.callback;
        if (typeof R == "function") {
          ((h.callback = null), (p = h.priorityLevel));
          var X = R(h.expirationTime <= L);
          ((L = e.unstable_now()),
            typeof X == "function" ? (h.callback = X) : h === n(u) && r(u),
            f(L));
        } else r(u);
        h = n(u);
      }
      if (h !== null) var or = !0;
      else {
        var yt = n(d);
        (yt !== null && gn(v, yt.startTime - L), (or = !1));
      }
      return or;
    } finally {
      ((h = null), (p = P), (N = !1));
    }
  }
  var S = !1,
    b = null,
    D = -1,
    U = 5,
    T = -1;
  function ee() {
    return !(e.unstable_now() - T < U);
  }
  function Ye() {
    if (b !== null) {
      var j = e.unstable_now();
      T = j;
      var L = !0;
      try {
        L = b(!0, j);
      } finally {
        L ? Ie() : ((S = !1), (b = null));
      }
    } else S = !1;
  }
  var Ie;
  if (typeof c == "function")
    Ie = function () {
      c(Ye);
    };
  else if (typeof MessageChannel < "u") {
    var ir = new MessageChannel(),
      Dl = ir.port2;
    ((ir.port1.onmessage = Ye),
      (Ie = function () {
        Dl.postMessage(null);
      }));
  } else
    Ie = function () {
      A(Ye, 0);
    };
  function hn(j) {
    ((b = j), S || ((S = !0), Ie()));
  }
  function gn(j, L) {
    D = A(function () {
      j(e.unstable_now());
    }, L);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || N || ((x = !0), hn(k));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (U = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (j) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = p;
      }
      var P = p;
      p = L;
      try {
        return j();
      } finally {
        p = P;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, L) {
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
      var P = p;
      p = j;
      try {
        return L();
      } finally {
        p = P;
      }
    }),
    (e.unstable_scheduleCallback = function (j, L, P) {
      var R = e.unstable_now();
      switch (
        (typeof P == "object" && P !== null
          ? ((P = P.delay), (P = typeof P == "number" && 0 < P ? R + P : R))
          : (P = R),
        j)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = P + X),
        (j = {
          id: g++,
          callback: L,
          priorityLevel: j,
          startTime: P,
          expirationTime: X,
          sortIndex: -1,
        }),
        P > R
          ? ((j.sortIndex = P),
            t(d, j),
            n(u) === null &&
              j === n(d) &&
              (w ? (m(D), (D = -1)) : (w = !0), gn(v, P - R)))
          : ((j.sortIndex = X), t(u, j), x || N || ((x = !0), hn(k))),
        j
      );
    }),
    (e.unstable_shouldYield = ee),
    (e.unstable_wrapCallback = function (j) {
      var L = p;
      return function () {
        var P = p;
        p = L;
        try {
          return j.apply(this, arguments);
        } finally {
          p = P;
        }
      };
    }));
})(To);
Po.exports = To;
var ad = Po.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var id = M,
  Ne = ad;
function y(e) {
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
var _o = new Set(),
  Hn = {};
function zt(e, t) {
  (rn(e, t), rn(e + "Capture", t));
}
function rn(e, t) {
  for (Hn[e] = t, e = 0; e < t.length; e++) _o.add(t[e]);
}
var qe = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  as = Object.prototype.hasOwnProperty,
  od =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ti = {},
  ni = {};
function ud(e) {
  return as.call(ni, e)
    ? !0
    : as.call(ti, e)
      ? !1
      : od.test(e)
        ? (ni[e] = !0)
        : ((ti[e] = !0), !1);
}
function cd(e, t, n, r) {
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
function dd(e, t, n, r) {
  if (t === null || typeof t > "u" || cd(e, t, n, r)) return !0;
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
function de(e, t, n, r, l, s, i) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = i));
}
var re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    re[e] = new de(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  re[t] = new de(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  re[e] = new de(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  re[e] = new de(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    re[e] = new de(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  re[e] = new de(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  re[e] = new de(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  re[e] = new de(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  re[e] = new de(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ra = /[\-:]([a-z])/g;
function la(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ra, la);
    re[t] = new de(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ra, la);
    re[t] = new de(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ra, la);
  re[t] = new de(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  re[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new de(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  re[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function sa(e, t, n, r) {
  var l = re.hasOwnProperty(t) ? re[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (dd(t, n, l, r) && (n = null),
    r || l === null
      ? ud(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Xe = id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  dr = Symbol.for("react.element"),
  Ht = Symbol.for("react.portal"),
  Ot = Symbol.for("react.fragment"),
  aa = Symbol.for("react.strict_mode"),
  is = Symbol.for("react.profiler"),
  Ao = Symbol.for("react.provider"),
  Mo = Symbol.for("react.context"),
  ia = Symbol.for("react.forward_ref"),
  os = Symbol.for("react.suspense"),
  us = Symbol.for("react.suspense_list"),
  oa = Symbol.for("react.memo"),
  et = Symbol.for("react.lazy"),
  zo = Symbol.for("react.offscreen"),
  ri = Symbol.iterator;
function xn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ri && e[ri]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var W = Object.assign,
  Pl;
function Sn(e) {
  if (Pl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Pl = (t && t[1]) || "";
    }
  return (
    `
` +
    Pl +
    e
  );
}
var Tl = !1;
function _l(e, t) {
  if (!e || Tl) return "";
  Tl = !0;
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
        } catch (d) {
          var r = d;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (d) {
          r = d;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (
        var l = d.stack.split(`
`),
          s = r.stack.split(`
`),
          i = l.length - 1,
          o = s.length - 1;
        1 <= i && 0 <= o && l[i] !== s[o];
      )
        o--;
      for (; 1 <= i && 0 <= o; i--, o--)
        if (l[i] !== s[o]) {
          if (i !== 1 || o !== 1)
            do
              if ((i--, o--, 0 > o || l[i] !== s[o])) {
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
            while (1 <= i && 0 <= o);
          break;
        }
    }
  } finally {
    ((Tl = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Sn(e) : "";
}
function md(e) {
  switch (e.tag) {
    case 5:
      return Sn(e.type);
    case 16:
      return Sn("Lazy");
    case 13:
      return Sn("Suspense");
    case 19:
      return Sn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = _l(e.type, !1)), e);
    case 11:
      return ((e = _l(e.type.render, !1)), e);
    case 1:
      return ((e = _l(e.type, !0)), e);
    default:
      return "";
  }
}
function cs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ot:
      return "Fragment";
    case Ht:
      return "Portal";
    case is:
      return "Profiler";
    case aa:
      return "StrictMode";
    case os:
      return "Suspense";
    case us:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Mo:
        return (e.displayName || "Context") + ".Consumer";
      case Ao:
        return (e._context.displayName || "Context") + ".Provider";
      case ia:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case oa:
        return (
          (t = e.displayName || null),
          t !== null ? t : cs(e.type) || "Memo"
        );
      case et:
        ((t = e._payload), (e = e._init));
        try {
          return cs(e(t));
        } catch {}
    }
  return null;
}
function fd(e) {
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
      return cs(t);
    case 8:
      return t === aa ? "StrictMode" : "Mode";
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
function pt(e) {
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
function Io(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function pd(e) {
  var t = Io(e) ? "checked" : "value",
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
          ((r = "" + i), s.call(this, i));
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
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function mr(e) {
  e._valueTracker || (e._valueTracker = pd(e));
}
function Ro(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Io(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Hr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ds(e, t) {
  var n = t.checked;
  return W({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function li(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = pt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Bo(e, t) {
  ((t = t.checked), t != null && sa(e, "checked", t, !1));
}
function ms(e, t) {
  Bo(e, t);
  var n = pt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? fs(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && fs(e, t.type, pt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function si(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function fs(e, t, n) {
  (t !== "number" || Hr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var bn = Array.isArray;
function Xt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      ((l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + pt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ps(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return W({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ai(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (bn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: pt(n) };
}
function Ho(e, t) {
  var n = pt(t.value),
    r = pt(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function ii(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Oo(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function hs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Oo(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var fr,
  Vo = (function (e) {
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
        fr = fr || document.createElement("div"),
          fr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = fr.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function On(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Pn = {
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
  hd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Pn).forEach(function (e) {
  hd.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Pn[t] = Pn[e]));
  });
});
function Uo(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Pn.hasOwnProperty(e) && Pn[e])
      ? ("" + t).trim()
      : t + "px";
}
function Fo(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Uo(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
    }
}
var gd = W(
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
  },
);
function gs(e, t) {
  if (t) {
    if (gd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function xs(e, t) {
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
var vs = null;
function ua(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ys = null,
  Yt = null,
  Jt = null;
function oi(e) {
  if ((e = sr(e))) {
    if (typeof ys != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = gl(t)), ys(e.stateNode, e.type, t));
  }
}
function Qo(e) {
  Yt ? (Jt ? Jt.push(e) : (Jt = [e])) : (Yt = e);
}
function Wo() {
  if (Yt) {
    var e = Yt,
      t = Jt;
    if (((Jt = Yt = null), oi(e), t)) for (e = 0; e < t.length; e++) oi(t[e]);
  }
}
function $o(e, t) {
  return e(t);
}
function qo() {}
var Al = !1;
function Go(e, t, n) {
  if (Al) return e(t, n);
  Al = !0;
  try {
    return $o(e, t, n);
  } finally {
    ((Al = !1), (Yt !== null || Jt !== null) && (qo(), Wo()));
  }
}
function Vn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = gl(n);
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
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var Ns = !1;
if (qe)
  try {
    var vn = {};
    (Object.defineProperty(vn, "passive", {
      get: function () {
        Ns = !0;
      },
    }),
      window.addEventListener("test", vn, vn),
      window.removeEventListener("test", vn, vn));
  } catch {
    Ns = !1;
  }
function xd(e, t, n, r, l, s, i, o, u) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (g) {
    this.onError(g);
  }
}
var Tn = !1,
  Or = null,
  Vr = !1,
  ws = null,
  vd = {
    onError: function (e) {
      ((Tn = !0), (Or = e));
    },
  };
function yd(e, t, n, r, l, s, i, o, u) {
  ((Tn = !1), (Or = null), xd.apply(vd, arguments));
}
function Nd(e, t, n, r, l, s, i, o, u) {
  if ((yd.apply(this, arguments), Tn)) {
    if (Tn) {
      var d = Or;
      ((Tn = !1), (Or = null));
    } else throw Error(y(198));
    Vr || ((Vr = !0), (ws = d));
  }
}
function It(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Zo(e) {
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
function ui(e) {
  if (It(e) !== e) throw Error(y(188));
}
function wd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = It(e)), t === null)) throw Error(y(188));
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
        if (s === n) return (ui(l), e);
        if (s === r) return (ui(l), t);
        s = s.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) ((n = l), (r = s));
    else {
      for (var i = !1, o = l.child; o; ) {
        if (o === n) {
          ((i = !0), (n = l), (r = s));
          break;
        }
        if (o === r) {
          ((i = !0), (r = l), (n = s));
          break;
        }
        o = o.sibling;
      }
      if (!i) {
        for (o = s.child; o; ) {
          if (o === n) {
            ((i = !0), (n = s), (r = l));
            break;
          }
          if (o === r) {
            ((i = !0), (r = s), (n = l));
            break;
          }
          o = o.sibling;
        }
        if (!i) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Ko(e) {
  return ((e = wd(e)), e !== null ? Xo(e) : null);
}
function Xo(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Xo(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Yo = Ne.unstable_scheduleCallback,
  ci = Ne.unstable_cancelCallback,
  kd = Ne.unstable_shouldYield,
  jd = Ne.unstable_requestPaint,
  q = Ne.unstable_now,
  Cd = Ne.unstable_getCurrentPriorityLevel,
  ca = Ne.unstable_ImmediatePriority,
  Jo = Ne.unstable_UserBlockingPriority,
  Ur = Ne.unstable_NormalPriority,
  Sd = Ne.unstable_LowPriority,
  eu = Ne.unstable_IdlePriority,
  ml = null,
  Oe = null;
function bd(e) {
  if (Oe && typeof Oe.onCommitFiberRoot == "function")
    try {
      Oe.onCommitFiberRoot(ml, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ae = Math.clz32 ? Math.clz32 : Ed,
  Dd = Math.log,
  Ld = Math.LN2;
function Ed(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Dd(e) / Ld) | 0)) | 0);
}
var pr = 64,
  hr = 4194304;
function Dn(e) {
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
function Fr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    s = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var o = i & ~l;
    o !== 0 ? (r = Dn(o)) : ((s &= i), s !== 0 && (r = Dn(s)));
  } else ((i = n & ~l), i !== 0 ? (r = Dn(i)) : s !== 0 && (r = Dn(s)));
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
      ((n = 31 - Ae(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
  return r;
}
function Pd(e, t) {
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
function Td(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;
  ) {
    var i = 31 - Ae(s),
      o = 1 << i,
      u = l[i];
    (u === -1
      ? (!(o & n) || o & r) && (l[i] = Pd(o, t))
      : u <= t && (e.expiredLanes |= o),
      (s &= ~o));
  }
}
function ks(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function tu() {
  var e = pr;
  return ((pr <<= 1), !(pr & 4194240) && (pr = 64), e);
}
function Ml(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function rr(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ae(t)),
    (e[t] = n));
}
function _d(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ae(n),
      s = 1 << l;
    ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~s));
  }
}
function da(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ae(n),
      l = 1 << r;
    ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
  }
}
var I = 0;
function nu(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var ru,
  ma,
  lu,
  su,
  au,
  js = !1,
  gr = [],
  at = null,
  it = null,
  ot = null,
  Un = new Map(),
  Fn = new Map(),
  nt = [],
  Ad =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function di(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      at = null;
      break;
    case "dragenter":
    case "dragleave":
      it = null;
      break;
    case "mouseover":
    case "mouseout":
      ot = null;
      break;
    case "pointerover":
    case "pointerout":
      Un.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fn.delete(t.pointerId);
  }
}
function yn(e, t, n, r, l, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [l],
      }),
      t !== null && ((t = sr(t)), t !== null && ma(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Md(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ((at = yn(at, e, t, n, r, l)), !0);
    case "dragenter":
      return ((it = yn(it, e, t, n, r, l)), !0);
    case "mouseover":
      return ((ot = yn(ot, e, t, n, r, l)), !0);
    case "pointerover":
      var s = l.pointerId;
      return (Un.set(s, yn(Un.get(s) || null, e, t, n, r, l)), !0);
    case "gotpointercapture":
      return (
        (s = l.pointerId),
        Fn.set(s, yn(Fn.get(s) || null, e, t, n, r, l)),
        !0
      );
  }
  return !1;
}
function iu(e) {
  var t = St(e.target);
  if (t !== null) {
    var n = It(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Zo(n)), t !== null)) {
          ((e.blockedOn = t),
            au(e.priority, function () {
              lu(n);
            }));
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
function Er(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Cs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((vs = r), n.target.dispatchEvent(r), (vs = null));
    } else return ((t = sr(n)), t !== null && ma(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function mi(e, t, n) {
  Er(e) && n.delete(t);
}
function zd() {
  ((js = !1),
    at !== null && Er(at) && (at = null),
    it !== null && Er(it) && (it = null),
    ot !== null && Er(ot) && (ot = null),
    Un.forEach(mi),
    Fn.forEach(mi));
}
function Nn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    js ||
      ((js = !0),
      Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, zd)));
}
function Qn(e) {
  function t(l) {
    return Nn(l, e);
  }
  if (0 < gr.length) {
    Nn(gr[0], e);
    for (var n = 1; n < gr.length; n++) {
      var r = gr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    at !== null && Nn(at, e),
      it !== null && Nn(it, e),
      ot !== null && Nn(ot, e),
      Un.forEach(t),
      Fn.forEach(t),
      n = 0;
    n < nt.length;
    n++
  )
    ((r = nt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < nt.length && ((n = nt[0]), n.blockedOn === null); )
    (iu(n), n.blockedOn === null && nt.shift());
}
var en = Xe.ReactCurrentBatchConfig,
  Qr = !0;
function Id(e, t, n, r) {
  var l = I,
    s = en.transition;
  en.transition = null;
  try {
    ((I = 1), fa(e, t, n, r));
  } finally {
    ((I = l), (en.transition = s));
  }
}
function Rd(e, t, n, r) {
  var l = I,
    s = en.transition;
  en.transition = null;
  try {
    ((I = 4), fa(e, t, n, r));
  } finally {
    ((I = l), (en.transition = s));
  }
}
function fa(e, t, n, r) {
  if (Qr) {
    var l = Cs(e, t, n, r);
    if (l === null) (Ql(e, t, r, Wr, n), di(e, r));
    else if (Md(l, e, t, n, r)) r.stopPropagation();
    else if ((di(e, r), t & 4 && -1 < Ad.indexOf(e))) {
      for (; l !== null; ) {
        var s = sr(l);
        if (
          (s !== null && ru(s),
          (s = Cs(e, t, n, r)),
          s === null && Ql(e, t, r, Wr, n),
          s === l)
        )
          break;
        l = s;
      }
      l !== null && r.stopPropagation();
    } else Ql(e, t, r, null, n);
  }
}
var Wr = null;
function Cs(e, t, n, r) {
  if (((Wr = null), (e = ua(r)), (e = St(e)), e !== null))
    if (((t = It(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Zo(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((Wr = e), null);
}
function ou(e) {
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
      switch (Cd()) {
        case ca:
          return 1;
        case Jo:
          return 4;
        case Ur:
        case Sd:
          return 16;
        case eu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var lt = null,
  pa = null,
  Pr = null;
function uu() {
  if (Pr) return Pr;
  var e,
    t = pa,
    n = t.length,
    r,
    l = "value" in lt ? lt.value : lt.textContent,
    s = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[s - r]; r++);
  return (Pr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Tr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function xr() {
  return !0;
}
function fi() {
  return !1;
}
function ke(e) {
  function t(n, r, l, s, i) {
    ((this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = i),
      (this.currentTarget = null));
    for (var o in e)
      e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(s) : s[o]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? xr
        : fi),
      (this.isPropagationStopped = fi),
      this
    );
  }
  return (
    W(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = xr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = xr));
      },
      persist: function () {},
      isPersistent: xr,
    }),
    t
  );
}
var fn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ha = ke(fn),
  lr = W({}, fn, { view: 0, detail: 0 }),
  Bd = ke(lr),
  zl,
  Il,
  wn,
  fl = W({}, lr, {
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
    getModifierState: ga,
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
        : (e !== wn &&
            (wn && e.type === "mousemove"
              ? ((zl = e.screenX - wn.screenX), (Il = e.screenY - wn.screenY))
              : (Il = zl = 0),
            (wn = e)),
          zl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Il;
    },
  }),
  pi = ke(fl),
  Hd = W({}, fl, { dataTransfer: 0 }),
  Od = ke(Hd),
  Vd = W({}, lr, { relatedTarget: 0 }),
  Rl = ke(Vd),
  Ud = W({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Fd = ke(Ud),
  Qd = W({}, fn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Wd = ke(Qd),
  $d = W({}, fn, { data: 0 }),
  hi = ke($d),
  qd = {
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
  Gd = {
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
  Zd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Kd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Zd[e]) ? !!t[e] : !1;
}
function ga() {
  return Kd;
}
var Xd = W({}, lr, {
    key: function (e) {
      if (e.key) {
        var t = qd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Tr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Gd[e.keyCode] || "Unidentified"
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
    getModifierState: ga,
    charCode: function (e) {
      return e.type === "keypress" ? Tr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Tr(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Yd = ke(Xd),
  Jd = W({}, fl, {
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
  gi = ke(Jd),
  e0 = W({}, lr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ga,
  }),
  t0 = ke(e0),
  n0 = W({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  r0 = ke(n0),
  l0 = W({}, fl, {
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
  s0 = ke(l0),
  a0 = [9, 13, 27, 32],
  xa = qe && "CompositionEvent" in window,
  _n = null;
qe && "documentMode" in document && (_n = document.documentMode);
var i0 = qe && "TextEvent" in window && !_n,
  cu = qe && (!xa || (_n && 8 < _n && 11 >= _n)),
  xi = " ",
  vi = !1;
function du(e, t) {
  switch (e) {
    case "keyup":
      return a0.indexOf(t.keyCode) !== -1;
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
function mu(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Vt = !1;
function o0(e, t) {
  switch (e) {
    case "compositionend":
      return mu(t);
    case "keypress":
      return t.which !== 32 ? null : ((vi = !0), xi);
    case "textInput":
      return ((e = t.data), e === xi && vi ? null : e);
    default:
      return null;
  }
}
function u0(e, t) {
  if (Vt)
    return e === "compositionend" || (!xa && du(e, t))
      ? ((e = uu()), (Pr = pa = lt = null), (Vt = !1), e)
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
      return cu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var c0 = {
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
function yi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!c0[e.type] : t === "textarea";
}
function fu(e, t, n, r) {
  (Qo(r),
    (t = $r(t, "onChange")),
    0 < t.length &&
      ((n = new ha("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var An = null,
  Wn = null;
function d0(e) {
  Cu(e, 0);
}
function pl(e) {
  var t = Qt(e);
  if (Ro(t)) return e;
}
function m0(e, t) {
  if (e === "change") return t;
}
var pu = !1;
if (qe) {
  var Bl;
  if (qe) {
    var Hl = "oninput" in document;
    if (!Hl) {
      var Ni = document.createElement("div");
      (Ni.setAttribute("oninput", "return;"),
        (Hl = typeof Ni.oninput == "function"));
    }
    Bl = Hl;
  } else Bl = !1;
  pu = Bl && (!document.documentMode || 9 < document.documentMode);
}
function wi() {
  An && (An.detachEvent("onpropertychange", hu), (Wn = An = null));
}
function hu(e) {
  if (e.propertyName === "value" && pl(Wn)) {
    var t = [];
    (fu(t, Wn, e, ua(e)), Go(d0, t));
  }
}
function f0(e, t, n) {
  e === "focusin"
    ? (wi(), (An = t), (Wn = n), An.attachEvent("onpropertychange", hu))
    : e === "focusout" && wi();
}
function p0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return pl(Wn);
}
function h0(e, t) {
  if (e === "click") return pl(t);
}
function g0(e, t) {
  if (e === "input" || e === "change") return pl(t);
}
function x0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ze = typeof Object.is == "function" ? Object.is : x0;
function $n(e, t) {
  if (ze(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!as.call(t, l) || !ze(e[l], t[l])) return !1;
  }
  return !0;
}
function ki(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ji(e, t) {
  var n = ki(e);
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
    n = ki(n);
  }
}
function gu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? gu(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function xu() {
  for (var e = window, t = Hr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Hr(e.document);
  }
  return t;
}
function va(e) {
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
function v0(e) {
  var t = xu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    gu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && va(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          s = Math.min(r.start, l);
        ((r = r.end === void 0 ? s : Math.min(r.end, l)),
          !e.extend && s > r && ((l = r), (r = s), (s = l)),
          (l = ji(n, s)));
        var i = ji(n, r);
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
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var y0 = qe && "documentMode" in document && 11 >= document.documentMode,
  Ut = null,
  Ss = null,
  Mn = null,
  bs = !1;
function Ci(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  bs ||
    Ut == null ||
    Ut !== Hr(r) ||
    ((r = Ut),
    "selectionStart" in r && va(r)
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
    (Mn && $n(Mn, r)) ||
      ((Mn = r),
      (r = $r(Ss, "onSelect")),
      0 < r.length &&
        ((t = new ha("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ut))));
}
function vr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ft = {
    animationend: vr("Animation", "AnimationEnd"),
    animationiteration: vr("Animation", "AnimationIteration"),
    animationstart: vr("Animation", "AnimationStart"),
    transitionend: vr("Transition", "TransitionEnd"),
  },
  Ol = {},
  vu = {};
qe &&
  ((vu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ft.animationend.animation,
    delete Ft.animationiteration.animation,
    delete Ft.animationstart.animation),
  "TransitionEvent" in window || delete Ft.transitionend.transition);
function hl(e) {
  if (Ol[e]) return Ol[e];
  if (!Ft[e]) return e;
  var t = Ft[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in vu) return (Ol[e] = t[n]);
  return e;
}
var yu = hl("animationend"),
  Nu = hl("animationiteration"),
  wu = hl("animationstart"),
  ku = hl("transitionend"),
  ju = new Map(),
  Si =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function gt(e, t) {
  (ju.set(e, t), zt(t, [e]));
}
for (var Vl = 0; Vl < Si.length; Vl++) {
  var Ul = Si[Vl],
    N0 = Ul.toLowerCase(),
    w0 = Ul[0].toUpperCase() + Ul.slice(1);
  gt(N0, "on" + w0);
}
gt(yu, "onAnimationEnd");
gt(Nu, "onAnimationIteration");
gt(wu, "onAnimationStart");
gt("dblclick", "onDoubleClick");
gt("focusin", "onFocus");
gt("focusout", "onBlur");
gt(ku, "onTransitionEnd");
rn("onMouseEnter", ["mouseout", "mouseover"]);
rn("onMouseLeave", ["mouseout", "mouseover"]);
rn("onPointerEnter", ["pointerout", "pointerover"]);
rn("onPointerLeave", ["pointerout", "pointerover"]);
zt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
zt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
zt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
zt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
zt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
zt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Ln =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  k0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ln));
function bi(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), Nd(r, t, void 0, e), (e.currentTarget = null));
}
function Cu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var o = r[i],
            u = o.instance,
            d = o.currentTarget;
          if (((o = o.listener), u !== s && l.isPropagationStopped())) break e;
          (bi(l, o, d), (s = u));
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((o = r[i]),
            (u = o.instance),
            (d = o.currentTarget),
            (o = o.listener),
            u !== s && l.isPropagationStopped())
          )
            break e;
          (bi(l, o, d), (s = u));
        }
    }
  }
  if (Vr) throw ((e = ws), (Vr = !1), (ws = null), e);
}
function H(e, t) {
  var n = t[Ts];
  n === void 0 && (n = t[Ts] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Su(t, e, 2, !1), n.add(r));
}
function Fl(e, t, n) {
  var r = 0;
  (t && (r |= 4), Su(n, e, r, t));
}
var yr = "_reactListening" + Math.random().toString(36).slice(2);
function qn(e) {
  if (!e[yr]) {
    ((e[yr] = !0),
      _o.forEach(function (n) {
        n !== "selectionchange" && (k0.has(n) || Fl(n, !1, e), Fl(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[yr] || ((t[yr] = !0), Fl("selectionchange", !1, t));
  }
}
function Su(e, t, n, r) {
  switch (ou(t)) {
    case 1:
      var l = Id;
      break;
    case 4:
      l = Rd;
      break;
    default:
      l = fa;
  }
  ((n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ns ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1));
}
function Ql(e, t, n, r, l) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var o = r.stateNode.containerInfo;
        if (o === l || (o.nodeType === 8 && o.parentNode === l)) break;
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
        for (; o !== null; ) {
          if (((i = St(o)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = s = i;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
  Go(function () {
    var d = s,
      g = ua(n),
      h = [];
    e: {
      var p = ju.get(e);
      if (p !== void 0) {
        var N = ha,
          x = e;
        switch (e) {
          case "keypress":
            if (Tr(n) === 0) break e;
          case "keydown":
          case "keyup":
            N = Yd;
            break;
          case "focusin":
            ((x = "focus"), (N = Rl));
            break;
          case "focusout":
            ((x = "blur"), (N = Rl));
            break;
          case "beforeblur":
          case "afterblur":
            N = Rl;
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
            N = pi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            N = Od;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            N = t0;
            break;
          case yu:
          case Nu:
          case wu:
            N = Fd;
            break;
          case ku:
            N = r0;
            break;
          case "scroll":
            N = Bd;
            break;
          case "wheel":
            N = s0;
            break;
          case "copy":
          case "cut":
          case "paste":
            N = Wd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            N = gi;
        }
        var w = (t & 4) !== 0,
          A = !w && e === "scroll",
          m = w ? (p !== null ? p + "Capture" : null) : p;
        w = [];
        for (var c = d, f; c !== null; ) {
          f = c;
          var v = f.stateNode;
          if (
            (f.tag === 5 &&
              v !== null &&
              ((f = v),
              m !== null && ((v = Vn(c, m)), v != null && w.push(Gn(c, v, f)))),
            A)
          )
            break;
          c = c.return;
        }
        0 < w.length &&
          ((p = new N(p, x, null, n, g)), h.push({ event: p, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (N = e === "mouseout" || e === "pointerout"),
          p &&
            n !== vs &&
            (x = n.relatedTarget || n.fromElement) &&
            (St(x) || x[Ge]))
        )
          break e;
        if (
          (N || p) &&
          ((p =
            g.window === g
              ? g
              : (p = g.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          N
            ? ((x = n.relatedTarget || n.toElement),
              (N = d),
              (x = x ? St(x) : null),
              x !== null &&
                ((A = It(x)), x !== A || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((N = null), (x = d)),
          N !== x)
        ) {
          if (
            ((w = pi),
            (v = "onMouseLeave"),
            (m = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = gi),
              (v = "onPointerLeave"),
              (m = "onPointerEnter"),
              (c = "pointer")),
            (A = N == null ? p : Qt(N)),
            (f = x == null ? p : Qt(x)),
            (p = new w(v, c + "leave", N, n, g)),
            (p.target = A),
            (p.relatedTarget = f),
            (v = null),
            St(g) === d &&
              ((w = new w(m, c + "enter", x, n, g)),
              (w.target = f),
              (w.relatedTarget = A),
              (v = w)),
            (A = v),
            N && x)
          )
            t: {
              for (w = N, m = x, c = 0, f = w; f; f = Rt(f)) c++;
              for (f = 0, v = m; v; v = Rt(v)) f++;
              for (; 0 < c - f; ) ((w = Rt(w)), c--);
              for (; 0 < f - c; ) ((m = Rt(m)), f--);
              for (; c--; ) {
                if (w === m || (m !== null && w === m.alternate)) break t;
                ((w = Rt(w)), (m = Rt(m)));
              }
              w = null;
            }
          else w = null;
          (N !== null && Di(h, p, N, w, !1),
            x !== null && A !== null && Di(h, A, x, w, !0));
        }
      }
      e: {
        if (
          ((p = d ? Qt(d) : window),
          (N = p.nodeName && p.nodeName.toLowerCase()),
          N === "select" || (N === "input" && p.type === "file"))
        )
          var k = m0;
        else if (yi(p))
          if (pu) k = g0;
          else {
            k = p0;
            var S = f0;
          }
        else
          (N = p.nodeName) &&
            N.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (k = h0);
        if (k && (k = k(e, d))) {
          fu(h, k, n, g);
          break e;
        }
        (S && S(e, p, d),
          e === "focusout" &&
            (S = p._wrapperState) &&
            S.controlled &&
            p.type === "number" &&
            fs(p, "number", p.value));
      }
      switch (((S = d ? Qt(d) : window), e)) {
        case "focusin":
          (yi(S) || S.contentEditable === "true") &&
            ((Ut = S), (Ss = d), (Mn = null));
          break;
        case "focusout":
          Mn = Ss = Ut = null;
          break;
        case "mousedown":
          bs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((bs = !1), Ci(h, n, g));
          break;
        case "selectionchange":
          if (y0) break;
        case "keydown":
        case "keyup":
          Ci(h, n, g);
      }
      var b;
      if (xa)
        e: {
          switch (e) {
            case "compositionstart":
              var D = "onCompositionStart";
              break e;
            case "compositionend":
              D = "onCompositionEnd";
              break e;
            case "compositionupdate":
              D = "onCompositionUpdate";
              break e;
          }
          D = void 0;
        }
      else
        Vt
          ? du(e, n) && (D = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (D = "onCompositionStart");
      (D &&
        (cu &&
          n.locale !== "ko" &&
          (Vt || D !== "onCompositionStart"
            ? D === "onCompositionEnd" && Vt && (b = uu())
            : ((lt = g),
              (pa = "value" in lt ? lt.value : lt.textContent),
              (Vt = !0))),
        (S = $r(d, D)),
        0 < S.length &&
          ((D = new hi(D, e, null, n, g)),
          h.push({ event: D, listeners: S }),
          b ? (D.data = b) : ((b = mu(n)), b !== null && (D.data = b)))),
        (b = i0 ? o0(e, n) : u0(e, n)) &&
          ((d = $r(d, "onBeforeInput")),
          0 < d.length &&
            ((g = new hi("onBeforeInput", "beforeinput", null, n, g)),
            h.push({ event: g, listeners: d }),
            (g.data = b))));
    }
    Cu(h, t);
  });
}
function Gn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function $r(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      s = l.stateNode;
    (l.tag === 5 &&
      s !== null &&
      ((l = s),
      (s = Vn(e, n)),
      s != null && r.unshift(Gn(e, s, l)),
      (s = Vn(e, t)),
      s != null && r.push(Gn(e, s, l))),
      (e = e.return));
  }
  return r;
}
function Rt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Di(e, t, n, r, l) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var o = n,
      u = o.alternate,
      d = o.stateNode;
    if (u !== null && u === r) break;
    (o.tag === 5 &&
      d !== null &&
      ((o = d),
      l
        ? ((u = Vn(n, s)), u != null && i.unshift(Gn(n, u, o)))
        : l || ((u = Vn(n, s)), u != null && i.push(Gn(n, u, o)))),
      (n = n.return));
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var j0 = /\r\n?/g,
  C0 = /\u0000|\uFFFD/g;
function Li(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      j0,
      `
`,
    )
    .replace(C0, "");
}
function Nr(e, t, n) {
  if (((t = Li(t)), Li(e) !== t && n)) throw Error(y(425));
}
function qr() {}
var Ds = null,
  Ls = null;
function Es(e, t) {
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
var Ps = typeof setTimeout == "function" ? setTimeout : void 0,
  S0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ei = typeof Promise == "function" ? Promise : void 0,
  b0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ei < "u"
        ? function (e) {
            return Ei.resolve(null).then(e).catch(D0);
          }
        : Ps;
function D0(e) {
  setTimeout(function () {
    throw e;
  });
}
function Wl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(l), Qn(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Qn(t);
}
function ut(e) {
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
function Pi(e) {
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
var pn = Math.random().toString(36).slice(2),
  He = "__reactFiber$" + pn,
  Zn = "__reactProps$" + pn,
  Ge = "__reactContainer$" + pn,
  Ts = "__reactEvents$" + pn,
  L0 = "__reactListeners$" + pn,
  E0 = "__reactHandles$" + pn;
function St(e) {
  var t = e[He];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ge] || n[He])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Pi(e); e !== null; ) {
          if ((n = e[He])) return n;
          e = Pi(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function sr(e) {
  return (
    (e = e[He] || e[Ge]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Qt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function gl(e) {
  return e[Zn] || null;
}
var _s = [],
  Wt = -1;
function xt(e) {
  return { current: e };
}
function O(e) {
  0 > Wt || ((e.current = _s[Wt]), (_s[Wt] = null), Wt--);
}
function B(e, t) {
  (Wt++, (_s[Wt] = e.current), (e.current = t));
}
var ht = {},
  ie = xt(ht),
  pe = xt(!1),
  Pt = ht;
function ln(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ht;
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
function he(e) {
  return ((e = e.childContextTypes), e != null);
}
function Gr() {
  (O(pe), O(ie));
}
function Ti(e, t, n) {
  if (ie.current !== ht) throw Error(y(168));
  (B(ie, t), B(pe, n));
}
function bu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, fd(e) || "Unknown", l));
  return W({}, n, r);
}
function Zr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ht),
    (Pt = ie.current),
    B(ie, e),
    B(pe, pe.current),
    !0
  );
}
function _i(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  (n
    ? ((e = bu(e, t, Pt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      O(pe),
      O(ie),
      B(ie, e))
    : O(pe),
    B(pe, n));
}
var Fe = null,
  xl = !1,
  $l = !1;
function Du(e) {
  Fe === null ? (Fe = [e]) : Fe.push(e);
}
function P0(e) {
  ((xl = !0), Du(e));
}
function vt() {
  if (!$l && Fe !== null) {
    $l = !0;
    var e = 0,
      t = I;
    try {
      var n = Fe;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Fe = null), (xl = !1));
    } catch (l) {
      throw (Fe !== null && (Fe = Fe.slice(e + 1)), Yo(ca, vt), l);
    } finally {
      ((I = t), ($l = !1));
    }
  }
  return null;
}
var $t = [],
  qt = 0,
  Kr = null,
  Xr = 0,
  je = [],
  Ce = 0,
  Tt = null,
  Qe = 1,
  We = "";
function kt(e, t) {
  (($t[qt++] = Xr), ($t[qt++] = Kr), (Kr = e), (Xr = t));
}
function Lu(e, t, n) {
  ((je[Ce++] = Qe), (je[Ce++] = We), (je[Ce++] = Tt), (Tt = e));
  var r = Qe;
  e = We;
  var l = 32 - Ae(r) - 1;
  ((r &= ~(1 << l)), (n += 1));
  var s = 32 - Ae(t) + l;
  if (30 < s) {
    var i = l - (l % 5);
    ((s = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Qe = (1 << (32 - Ae(t) + l)) | (n << l) | r),
      (We = s + e));
  } else ((Qe = (1 << s) | (n << l) | r), (We = e));
}
function ya(e) {
  e.return !== null && (kt(e, 1), Lu(e, 1, 0));
}
function Na(e) {
  for (; e === Kr; )
    ((Kr = $t[--qt]), ($t[qt] = null), (Xr = $t[--qt]), ($t[qt] = null));
  for (; e === Tt; )
    ((Tt = je[--Ce]),
      (je[Ce] = null),
      (We = je[--Ce]),
      (je[Ce] = null),
      (Qe = je[--Ce]),
      (je[Ce] = null));
}
var ye = null,
  ve = null,
  V = !1,
  _e = null;
function Eu(e, t) {
  var n = Se(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Ai(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ye = e), (ve = ut(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ye = e), (ve = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Tt !== null ? { id: Qe, overflow: We } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Se(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ye = e),
            (ve = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function As(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ms(e) {
  if (V) {
    var t = ve;
    if (t) {
      var n = t;
      if (!Ai(e, t)) {
        if (As(e)) throw Error(y(418));
        t = ut(n.nextSibling);
        var r = ye;
        t && Ai(e, t)
          ? Eu(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (V = !1), (ye = e));
      }
    } else {
      if (As(e)) throw Error(y(418));
      ((e.flags = (e.flags & -4097) | 2), (V = !1), (ye = e));
    }
  }
}
function Mi(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ye = e;
}
function wr(e) {
  if (e !== ye) return !1;
  if (!V) return (Mi(e), (V = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Es(e.type, e.memoizedProps))),
    t && (t = ve))
  ) {
    if (As(e)) throw (Pu(), Error(y(418)));
    for (; t; ) (Eu(e, t), (t = ut(t.nextSibling)));
  }
  if ((Mi(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ve = ut(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else ve = ye ? ut(e.stateNode.nextSibling) : null;
  return !0;
}
function Pu() {
  for (var e = ve; e; ) e = ut(e.nextSibling);
}
function sn() {
  ((ve = ye = null), (V = !1));
}
function wa(e) {
  _e === null ? (_e = [e]) : _e.push(e);
}
var T0 = Xe.ReactCurrentBatchConfig;
function kn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (i) {
            var o = l.refs;
            i === null ? delete o[s] : (o[s] = i);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function kr(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function zi(e) {
  var t = e._init;
  return t(e._payload);
}
function Tu(e) {
  function t(m, c) {
    if (e) {
      var f = m.deletions;
      f === null ? ((m.deletions = [c]), (m.flags |= 16)) : f.push(c);
    }
  }
  function n(m, c) {
    if (!e) return null;
    for (; c !== null; ) (t(m, c), (c = c.sibling));
    return null;
  }
  function r(m, c) {
    for (m = new Map(); c !== null; )
      (c.key !== null ? m.set(c.key, c) : m.set(c.index, c), (c = c.sibling));
    return m;
  }
  function l(m, c) {
    return ((m = ft(m, c)), (m.index = 0), (m.sibling = null), m);
  }
  function s(m, c, f) {
    return (
      (m.index = f),
      e
        ? ((f = m.alternate),
          f !== null
            ? ((f = f.index), f < c ? ((m.flags |= 2), c) : f)
            : ((m.flags |= 2), c))
        : ((m.flags |= 1048576), c)
    );
  }
  function i(m) {
    return (e && m.alternate === null && (m.flags |= 2), m);
  }
  function o(m, c, f, v) {
    return c === null || c.tag !== 6
      ? ((c = Jl(f, m.mode, v)), (c.return = m), c)
      : ((c = l(c, f)), (c.return = m), c);
  }
  function u(m, c, f, v) {
    var k = f.type;
    return k === Ot
      ? g(m, c, f.props.children, v, f.key)
      : c !== null &&
          (c.elementType === k ||
            (typeof k == "object" &&
              k !== null &&
              k.$$typeof === et &&
              zi(k) === c.type))
        ? ((v = l(c, f.props)), (v.ref = kn(m, c, f)), (v.return = m), v)
        : ((v = Br(f.type, f.key, f.props, null, m.mode, v)),
          (v.ref = kn(m, c, f)),
          (v.return = m),
          v);
  }
  function d(m, c, f, v) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== f.containerInfo ||
      c.stateNode.implementation !== f.implementation
      ? ((c = es(f, m.mode, v)), (c.return = m), c)
      : ((c = l(c, f.children || [])), (c.return = m), c);
  }
  function g(m, c, f, v, k) {
    return c === null || c.tag !== 7
      ? ((c = Et(f, m.mode, v, k)), (c.return = m), c)
      : ((c = l(c, f)), (c.return = m), c);
  }
  function h(m, c, f) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return ((c = Jl("" + c, m.mode, f)), (c.return = m), c);
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case dr:
          return (
            (f = Br(c.type, c.key, c.props, null, m.mode, f)),
            (f.ref = kn(m, null, c)),
            (f.return = m),
            f
          );
        case Ht:
          return ((c = es(c, m.mode, f)), (c.return = m), c);
        case et:
          var v = c._init;
          return h(m, v(c._payload), f);
      }
      if (bn(c) || xn(c))
        return ((c = Et(c, m.mode, f, null)), (c.return = m), c);
      kr(m, c);
    }
    return null;
  }
  function p(m, c, f, v) {
    var k = c !== null ? c.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return k !== null ? null : o(m, c, "" + f, v);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case dr:
          return f.key === k ? u(m, c, f, v) : null;
        case Ht:
          return f.key === k ? d(m, c, f, v) : null;
        case et:
          return ((k = f._init), p(m, c, k(f._payload), v));
      }
      if (bn(f) || xn(f)) return k !== null ? null : g(m, c, f, v, null);
      kr(m, f);
    }
    return null;
  }
  function N(m, c, f, v, k) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return ((m = m.get(f) || null), o(c, m, "" + v, k));
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case dr:
          return (
            (m = m.get(v.key === null ? f : v.key) || null),
            u(c, m, v, k)
          );
        case Ht:
          return (
            (m = m.get(v.key === null ? f : v.key) || null),
            d(c, m, v, k)
          );
        case et:
          var S = v._init;
          return N(m, c, f, S(v._payload), k);
      }
      if (bn(v) || xn(v)) return ((m = m.get(f) || null), g(c, m, v, k, null));
      kr(c, v);
    }
    return null;
  }
  function x(m, c, f, v) {
    for (
      var k = null, S = null, b = c, D = (c = 0), U = null;
      b !== null && D < f.length;
      D++
    ) {
      b.index > D ? ((U = b), (b = null)) : (U = b.sibling);
      var T = p(m, b, f[D], v);
      if (T === null) {
        b === null && (b = U);
        break;
      }
      (e && b && T.alternate === null && t(m, b),
        (c = s(T, c, D)),
        S === null ? (k = T) : (S.sibling = T),
        (S = T),
        (b = U));
    }
    if (D === f.length) return (n(m, b), V && kt(m, D), k);
    if (b === null) {
      for (; D < f.length; D++)
        ((b = h(m, f[D], v)),
          b !== null &&
            ((c = s(b, c, D)),
            S === null ? (k = b) : (S.sibling = b),
            (S = b)));
      return (V && kt(m, D), k);
    }
    for (b = r(m, b); D < f.length; D++)
      ((U = N(b, m, D, f[D], v)),
        U !== null &&
          (e && U.alternate !== null && b.delete(U.key === null ? D : U.key),
          (c = s(U, c, D)),
          S === null ? (k = U) : (S.sibling = U),
          (S = U)));
    return (
      e &&
        b.forEach(function (ee) {
          return t(m, ee);
        }),
      V && kt(m, D),
      k
    );
  }
  function w(m, c, f, v) {
    var k = xn(f);
    if (typeof k != "function") throw Error(y(150));
    if (((f = k.call(f)), f == null)) throw Error(y(151));
    for (
      var S = (k = null), b = c, D = (c = 0), U = null, T = f.next();
      b !== null && !T.done;
      D++, T = f.next()
    ) {
      b.index > D ? ((U = b), (b = null)) : (U = b.sibling);
      var ee = p(m, b, T.value, v);
      if (ee === null) {
        b === null && (b = U);
        break;
      }
      (e && b && ee.alternate === null && t(m, b),
        (c = s(ee, c, D)),
        S === null ? (k = ee) : (S.sibling = ee),
        (S = ee),
        (b = U));
    }
    if (T.done) return (n(m, b), V && kt(m, D), k);
    if (b === null) {
      for (; !T.done; D++, T = f.next())
        ((T = h(m, T.value, v)),
          T !== null &&
            ((c = s(T, c, D)),
            S === null ? (k = T) : (S.sibling = T),
            (S = T)));
      return (V && kt(m, D), k);
    }
    for (b = r(m, b); !T.done; D++, T = f.next())
      ((T = N(b, m, D, T.value, v)),
        T !== null &&
          (e && T.alternate !== null && b.delete(T.key === null ? D : T.key),
          (c = s(T, c, D)),
          S === null ? (k = T) : (S.sibling = T),
          (S = T)));
    return (
      e &&
        b.forEach(function (Ye) {
          return t(m, Ye);
        }),
      V && kt(m, D),
      k
    );
  }
  function A(m, c, f, v) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === Ot &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case dr:
          e: {
            for (var k = f.key, S = c; S !== null; ) {
              if (S.key === k) {
                if (((k = f.type), k === Ot)) {
                  if (S.tag === 7) {
                    (n(m, S.sibling),
                      (c = l(S, f.props.children)),
                      (c.return = m),
                      (m = c));
                    break e;
                  }
                } else if (
                  S.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === et &&
                    zi(k) === S.type)
                ) {
                  (n(m, S.sibling),
                    (c = l(S, f.props)),
                    (c.ref = kn(m, S, f)),
                    (c.return = m),
                    (m = c));
                  break e;
                }
                n(m, S);
                break;
              } else t(m, S);
              S = S.sibling;
            }
            f.type === Ot
              ? ((c = Et(f.props.children, m.mode, v, f.key)),
                (c.return = m),
                (m = c))
              : ((v = Br(f.type, f.key, f.props, null, m.mode, v)),
                (v.ref = kn(m, c, f)),
                (v.return = m),
                (m = v));
          }
          return i(m);
        case Ht:
          e: {
            for (S = f.key; c !== null; ) {
              if (c.key === S)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === f.containerInfo &&
                  c.stateNode.implementation === f.implementation
                ) {
                  (n(m, c.sibling),
                    (c = l(c, f.children || [])),
                    (c.return = m),
                    (m = c));
                  break e;
                } else {
                  n(m, c);
                  break;
                }
              else t(m, c);
              c = c.sibling;
            }
            ((c = es(f, m.mode, v)), (c.return = m), (m = c));
          }
          return i(m);
        case et:
          return ((S = f._init), A(m, c, S(f._payload), v));
      }
      if (bn(f)) return x(m, c, f, v);
      if (xn(f)) return w(m, c, f, v);
      kr(m, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        c !== null && c.tag === 6
          ? (n(m, c.sibling), (c = l(c, f)), (c.return = m), (m = c))
          : (n(m, c), (c = Jl(f, m.mode, v)), (c.return = m), (m = c)),
        i(m))
      : n(m, c);
  }
  return A;
}
var an = Tu(!0),
  _u = Tu(!1),
  Yr = xt(null),
  Jr = null,
  Gt = null,
  ka = null;
function ja() {
  ka = Gt = Jr = null;
}
function Ca(e) {
  var t = Yr.current;
  (O(Yr), (e._currentValue = t));
}
function zs(e, t, n) {
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
function tn(e, t) {
  ((Jr = e),
    (ka = Gt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (fe = !0), (e.firstContext = null)));
}
function De(e) {
  var t = e._currentValue;
  if (ka !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Gt === null)) {
      if (Jr === null) throw Error(y(308));
      ((Gt = e), (Jr.dependencies = { lanes: 0, firstContext: e }));
    } else Gt = Gt.next = e;
  return t;
}
var bt = null;
function Sa(e) {
  bt === null ? (bt = [e]) : bt.push(e);
}
function Au(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Sa(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ze(e, r)
  );
}
function Ze(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var tt = !1;
function ba(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Mu(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function $e(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ct(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), z & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ze(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Sa(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ze(e, n)
  );
}
function _r(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), da(e, n));
  }
}
function Ii(e, t) {
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
        (s === null ? (l = s = i) : (s = s.next = i), (n = n.next));
      } while (n !== null);
      s === null ? (l = s = t) : (s = s.next = t);
    } else l = s = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function el(e, t, n, r) {
  var l = e.updateQueue;
  tt = !1;
  var s = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var u = o,
      d = u.next;
    ((u.next = null), i === null ? (s = d) : (i.next = d), (i = u));
    var g = e.alternate;
    g !== null &&
      ((g = g.updateQueue),
      (o = g.lastBaseUpdate),
      o !== i &&
        (o === null ? (g.firstBaseUpdate = d) : (o.next = d),
        (g.lastBaseUpdate = u)));
  }
  if (s !== null) {
    var h = l.baseState;
    ((i = 0), (g = d = u = null), (o = s));
    do {
      var p = o.lane,
        N = o.eventTime;
      if ((r & p) === p) {
        g !== null &&
          (g = g.next =
            {
              eventTime: N,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var x = e,
            w = o;
          switch (((p = t), (N = n), w.tag)) {
            case 1:
              if (((x = w.payload), typeof x == "function")) {
                h = x.call(N, h, p);
                break e;
              }
              h = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = w.payload),
                (p = typeof x == "function" ? x.call(N, h, p) : x),
                p == null)
              )
                break e;
              h = W({}, h, p);
              break e;
            case 2:
              tt = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [o]) : p.push(o));
      } else
        ((N = {
          eventTime: N,
          lane: p,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          g === null ? ((d = g = N), (u = h)) : (g = g.next = N),
          (i |= p));
      if (((o = o.next), o === null)) {
        if (((o = l.shared.pending), o === null)) break;
        ((p = o),
          (o = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null));
      }
    } while (!0);
    if (
      (g === null && (u = h),
      (l.baseState = u),
      (l.firstBaseUpdate = d),
      (l.lastBaseUpdate = g),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do ((i |= l.lane), (l = l.next));
      while (l !== t);
    } else s === null && (l.shared.lanes = 0);
    ((At |= i), (e.lanes = i), (e.memoizedState = h));
  }
}
function Ri(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var ar = {},
  Ve = xt(ar),
  Kn = xt(ar),
  Xn = xt(ar);
function Dt(e) {
  if (e === ar) throw Error(y(174));
  return e;
}
function Da(e, t) {
  switch ((B(Xn, t), B(Kn, e), B(Ve, ar), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : hs(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = hs(t, e)));
  }
  (O(Ve), B(Ve, t));
}
function on() {
  (O(Ve), O(Kn), O(Xn));
}
function zu(e) {
  Dt(Xn.current);
  var t = Dt(Ve.current),
    n = hs(t, e.type);
  t !== n && (B(Kn, e), B(Ve, n));
}
function La(e) {
  Kn.current === e && (O(Ve), O(Kn));
}
var F = xt(0);
function tl(e) {
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
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var ql = [];
function Ea() {
  for (var e = 0; e < ql.length; e++)
    ql[e]._workInProgressVersionPrimary = null;
  ql.length = 0;
}
var Ar = Xe.ReactCurrentDispatcher,
  Gl = Xe.ReactCurrentBatchConfig,
  _t = 0,
  Q = null,
  Z = null,
  Y = null,
  nl = !1,
  zn = !1,
  Yn = 0,
  _0 = 0;
function le() {
  throw Error(y(321));
}
function Pa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ze(e[n], t[n])) return !1;
  return !0;
}
function Ta(e, t, n, r, l, s) {
  if (
    ((_t = s),
    (Q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ar.current = e === null || e.memoizedState === null ? I0 : R0),
    (e = n(r, l)),
    zn)
  ) {
    s = 0;
    do {
      if (((zn = !1), (Yn = 0), 25 <= s)) throw Error(y(301));
      ((s += 1),
        (Y = Z = null),
        (t.updateQueue = null),
        (Ar.current = B0),
        (e = n(r, l)));
    } while (zn);
  }
  if (
    ((Ar.current = rl),
    (t = Z !== null && Z.next !== null),
    (_t = 0),
    (Y = Z = Q = null),
    (nl = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function _a() {
  var e = Yn !== 0;
  return ((Yn = 0), e);
}
function Be() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (Y === null ? (Q.memoizedState = Y = e) : (Y = Y.next = e), Y);
}
function Le() {
  if (Z === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z.next;
  var t = Y === null ? Q.memoizedState : Y.next;
  if (t !== null) ((Y = t), (Z = e));
  else {
    if (e === null) throw Error(y(310));
    ((Z = e),
      (e = {
        memoizedState: Z.memoizedState,
        baseState: Z.baseState,
        baseQueue: Z.baseQueue,
        queue: Z.queue,
        next: null,
      }),
      Y === null ? (Q.memoizedState = Y = e) : (Y = Y.next = e));
  }
  return Y;
}
function Jn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Zl(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = Z,
    l = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (l !== null) {
      var i = l.next;
      ((l.next = s.next), (s.next = i));
    }
    ((r.baseQueue = l = s), (n.pending = null));
  }
  if (l !== null) {
    ((s = l.next), (r = r.baseState));
    var o = (i = null),
      u = null,
      d = s;
    do {
      var g = d.lane;
      if ((_t & g) === g)
        (u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (r = d.hasEagerState ? d.eagerState : e(r, d.action)));
      else {
        var h = {
          lane: g,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        (u === null ? ((o = u = h), (i = r)) : (u = u.next = h),
          (Q.lanes |= g),
          (At |= g));
      }
      d = d.next;
    } while (d !== null && d !== s);
    (u === null ? (i = r) : (u.next = o),
      ze(r, t.memoizedState) || (fe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do ((s = l.lane), (Q.lanes |= s), (At |= s), (l = l.next));
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Kl(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    s = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do ((s = e(s, i.action)), (i = i.next));
    while (i !== l);
    (ze(s, t.memoizedState) || (fe = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s));
  }
  return [s, r];
}
function Iu() {}
function Ru(e, t) {
  var n = Q,
    r = Le(),
    l = t(),
    s = !ze(r.memoizedState, l);
  if (
    (s && ((r.memoizedState = l), (fe = !0)),
    (r = r.queue),
    Aa(Ou.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (Y !== null && Y.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      er(9, Hu.bind(null, n, r, l, t), void 0, null),
      J === null)
    )
      throw Error(y(349));
    _t & 30 || Bu(n, t, l);
  }
  return l;
}
function Bu(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function Hu(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Vu(t) && Uu(e));
}
function Ou(e, t, n) {
  return n(function () {
    Vu(t) && Uu(e);
  });
}
function Vu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ze(e, n);
  } catch {
    return !0;
  }
}
function Uu(e) {
  var t = Ze(e, 1);
  t !== null && Me(t, e, 1, -1);
}
function Bi(e) {
  var t = Be();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Jn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = z0.bind(null, Q, e)),
    [t.memoizedState, e]
  );
}
function er(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Fu() {
  return Le().memoizedState;
}
function Mr(e, t, n, r) {
  var l = Be();
  ((Q.flags |= e),
    (l.memoizedState = er(1 | t, n, void 0, r === void 0 ? null : r)));
}
function vl(e, t, n, r) {
  var l = Le();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (Z !== null) {
    var i = Z.memoizedState;
    if (((s = i.destroy), r !== null && Pa(r, i.deps))) {
      l.memoizedState = er(t, n, s, r);
      return;
    }
  }
  ((Q.flags |= e), (l.memoizedState = er(1 | t, n, s, r)));
}
function Hi(e, t) {
  return Mr(8390656, 8, e, t);
}
function Aa(e, t) {
  return vl(2048, 8, e, t);
}
function Qu(e, t) {
  return vl(4, 2, e, t);
}
function Wu(e, t) {
  return vl(4, 4, e, t);
}
function $u(e, t) {
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
function qu(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    vl(4, 4, $u.bind(null, t, e), n)
  );
}
function Ma() {}
function Gu(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pa(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Zu(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pa(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ku(e, t, n) {
  return _t & 21
    ? (ze(n, t) || ((n = tu()), (Q.lanes |= n), (At |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (fe = !0)), (e.memoizedState = n));
}
function A0(e, t) {
  var n = I;
  ((I = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Gl.transition;
  Gl.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((I = n), (Gl.transition = r));
  }
}
function Xu() {
  return Le().memoizedState;
}
function M0(e, t, n) {
  var r = mt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Yu(e))
  )
    Ju(t, n);
  else if (((n = Au(e, t, n, r)), n !== null)) {
    var l = ue();
    (Me(n, e, r, l), ec(n, t, r));
  }
}
function z0(e, t, n) {
  var r = mt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Yu(e)) Ju(t, l);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var i = t.lastRenderedState,
          o = s(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = o), ze(o, i))) {
          var u = t.interleaved;
          (u === null
            ? ((l.next = l), Sa(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l));
          return;
        }
      } catch {
      } finally {
      }
    ((n = Au(e, t, l, r)),
      n !== null && ((l = ue()), Me(n, e, r, l), ec(n, t, r)));
  }
}
function Yu(e) {
  var t = e.alternate;
  return e === Q || (t !== null && t === Q);
}
function Ju(e, t) {
  zn = nl = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function ec(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), da(e, n));
  }
}
var rl = {
    readContext: De,
    useCallback: le,
    useContext: le,
    useEffect: le,
    useImperativeHandle: le,
    useInsertionEffect: le,
    useLayoutEffect: le,
    useMemo: le,
    useReducer: le,
    useRef: le,
    useState: le,
    useDebugValue: le,
    useDeferredValue: le,
    useTransition: le,
    useMutableSource: le,
    useSyncExternalStore: le,
    useId: le,
    unstable_isNewReconciler: !1,
  },
  I0 = {
    readContext: De,
    useCallback: function (e, t) {
      return ((Be().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: De,
    useEffect: Hi,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Mr(4194308, 4, $u.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Mr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Mr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Be();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Be();
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
        (e = e.dispatch = M0.bind(null, Q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Be();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Bi,
    useDebugValue: Ma,
    useDeferredValue: function (e) {
      return (Be().memoizedState = e);
    },
    useTransition: function () {
      var e = Bi(!1),
        t = e[0];
      return ((e = A0.bind(null, e[1])), (Be().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Q,
        l = Be();
      if (V) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), J === null)) throw Error(y(349));
        _t & 30 || Bu(r, t, n);
      }
      l.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (l.queue = s),
        Hi(Ou.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        er(9, Hu.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Be(),
        t = J.identifierPrefix;
      if (V) {
        var n = We,
          r = Qe;
        ((n = (r & ~(1 << (32 - Ae(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Yn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = _0++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  R0 = {
    readContext: De,
    useCallback: Gu,
    useContext: De,
    useEffect: Aa,
    useImperativeHandle: qu,
    useInsertionEffect: Qu,
    useLayoutEffect: Wu,
    useMemo: Zu,
    useReducer: Zl,
    useRef: Fu,
    useState: function () {
      return Zl(Jn);
    },
    useDebugValue: Ma,
    useDeferredValue: function (e) {
      var t = Le();
      return Ku(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = Zl(Jn)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: Iu,
    useSyncExternalStore: Ru,
    useId: Xu,
    unstable_isNewReconciler: !1,
  },
  B0 = {
    readContext: De,
    useCallback: Gu,
    useContext: De,
    useEffect: Aa,
    useImperativeHandle: qu,
    useInsertionEffect: Qu,
    useLayoutEffect: Wu,
    useMemo: Zu,
    useReducer: Kl,
    useRef: Fu,
    useState: function () {
      return Kl(Jn);
    },
    useDebugValue: Ma,
    useDeferredValue: function (e) {
      var t = Le();
      return Z === null ? (t.memoizedState = e) : Ku(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = Kl(Jn)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: Iu,
    useSyncExternalStore: Ru,
    useId: Xu,
    unstable_isNewReconciler: !1,
  };
function Pe(e, t) {
  if (e && e.defaultProps) {
    ((t = W({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Is(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : W({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var yl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? It(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = mt(e),
      s = $e(r, l);
    ((s.payload = t),
      n != null && (s.callback = n),
      (t = ct(e, s, l)),
      t !== null && (Me(t, e, l, r), _r(t, e, l)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = mt(e),
      s = $e(r, l);
    ((s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = ct(e, s, l)),
      t !== null && (Me(t, e, l, r), _r(t, e, l)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ue(),
      r = mt(e),
      l = $e(n, r);
    ((l.tag = 2),
      t != null && (l.callback = t),
      (t = ct(e, l, r)),
      t !== null && (Me(t, e, r, n), _r(t, e, r)));
  },
};
function Oi(e, t, n, r, l, s, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !$n(n, r) || !$n(l, s)
        : !0
  );
}
function tc(e, t, n) {
  var r = !1,
    l = ht,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = De(s))
      : ((l = he(t) ? Pt : ie.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? ln(e, l) : ht)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = yl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Vi(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && yl.enqueueReplaceState(t, t.state, null));
}
function Rs(e, t, n, r) {
  var l = e.stateNode;
  ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), ba(e));
  var s = t.contextType;
  (typeof s == "object" && s !== null
    ? (l.context = De(s))
    : ((s = he(t) ? Pt : ie.current), (l.context = ln(e, s))),
    (l.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Is(e, t, s, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && yl.enqueueReplaceState(l, l.state, null),
      el(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308));
}
function un(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += md(r)), (r = r.return));
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
function Xl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Bs(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var H0 = typeof WeakMap == "function" ? WeakMap : Map;
function nc(e, t, n) {
  ((n = $e(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (sl || ((sl = !0), (Gs = r)), Bs(e, t));
    }),
    n
  );
}
function rc(e, t, n) {
  ((n = $e(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    ((n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Bs(e, t);
      }));
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        (Bs(e, t),
          typeof r != "function" &&
            (dt === null ? (dt = new Set([this])) : dt.add(this)));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Ui(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new H0();
    var l = new Set();
    r.set(t, l);
  } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
  l.has(n) || (l.add(n), (e = J0.bind(null, e, t, n)), t.then(e, e));
}
function Fi(e) {
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
function Qi(e, t, n, r, l) {
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
              : ((t = $e(-1, 1)), (t.tag = 2), ct(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var O0 = Xe.ReactCurrentOwner,
  fe = !1;
function oe(e, t, n, r) {
  t.child = e === null ? _u(t, null, n, r) : an(t, e.child, n, r);
}
function Wi(e, t, n, r, l) {
  n = n.render;
  var s = t.ref;
  return (
    tn(t, l),
    (r = Ta(e, t, n, r, s, l)),
    (n = _a()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ke(e, t, l))
      : (V && n && ya(t), (t.flags |= 1), oe(e, t, r, l), t.child)
  );
}
function $i(e, t, n, r, l) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Ua(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), lc(e, t, s, r, l))
      : ((e = Br(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & l))) {
    var i = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : $n), n(i, r) && e.ref === t.ref)
    )
      return Ke(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = ft(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function lc(e, t, n, r, l) {
  if (e !== null) {
    var s = e.memoizedProps;
    if ($n(s, r) && e.ref === t.ref)
      if (((fe = !1), (t.pendingProps = r = s), (e.lanes & l) !== 0))
        e.flags & 131072 && (fe = !0);
      else return ((t.lanes = e.lanes), Ke(e, t, l));
  }
  return Hs(e, t, n, r, l);
}
function sc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        B(Kt, xe),
        (xe |= n));
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
          B(Kt, xe),
          (xe |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        B(Kt, xe),
        (xe |= r));
    }
  else
    (s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      B(Kt, xe),
      (xe |= r));
  return (oe(e, t, l, n), t.child);
}
function ac(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Hs(e, t, n, r, l) {
  var s = he(n) ? Pt : ie.current;
  return (
    (s = ln(t, s)),
    tn(t, l),
    (n = Ta(e, t, n, r, s, l)),
    (r = _a()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ke(e, t, l))
      : (V && r && ya(t), (t.flags |= 1), oe(e, t, n, l), t.child)
  );
}
function qi(e, t, n, r, l) {
  if (he(n)) {
    var s = !0;
    Zr(t);
  } else s = !1;
  if ((tn(t, l), t.stateNode === null))
    (zr(e, t), tc(t, n, r), Rs(t, n, r, l), (r = !0));
  else if (e === null) {
    var i = t.stateNode,
      o = t.memoizedProps;
    i.props = o;
    var u = i.context,
      d = n.contextType;
    typeof d == "object" && d !== null
      ? (d = De(d))
      : ((d = he(n) ? Pt : ie.current), (d = ln(t, d)));
    var g = n.getDerivedStateFromProps,
      h =
        typeof g == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    (h ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((o !== r || u !== d) && Vi(t, i, r, d)),
      (tt = !1));
    var p = t.memoizedState;
    ((i.state = p),
      el(t, r, i, l),
      (u = t.memoizedState),
      o !== r || p !== u || pe.current || tt
        ? (typeof g == "function" && (Is(t, n, g, r), (u = t.memoizedState)),
          (o = tt || Oi(t, n, o, r, p, u, d))
            ? (h ||
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
          (i.context = d),
          (r = o))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((i = t.stateNode),
      Mu(e, t),
      (o = t.memoizedProps),
      (d = t.type === t.elementType ? o : Pe(t.type, o)),
      (i.props = d),
      (h = t.pendingProps),
      (p = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = De(u))
        : ((u = he(n) ? Pt : ie.current), (u = ln(t, u))));
    var N = n.getDerivedStateFromProps;
    ((g =
      typeof N == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((o !== h || p !== u) && Vi(t, i, r, u)),
      (tt = !1),
      (p = t.memoizedState),
      (i.state = p),
      el(t, r, i, l));
    var x = t.memoizedState;
    o !== h || p !== x || pe.current || tt
      ? (typeof N == "function" && (Is(t, n, N, r), (x = t.memoizedState)),
        (d = tt || Oi(t, n, d, r, p, x, u) || !1)
          ? (g ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, x, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, x, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (o === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (i.props = r),
        (i.state = x),
        (i.context = u),
        (r = d))
      : (typeof i.componentDidUpdate != "function" ||
          (o === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Os(e, t, n, r, s, l);
}
function Os(e, t, n, r, l, s) {
  ac(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return (l && _i(t, n, !1), Ke(e, t, s));
  ((r = t.stateNode), (O0.current = t));
  var o =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = an(t, e.child, null, s)), (t.child = an(t, null, o, s)))
      : oe(e, t, o, s),
    (t.memoizedState = r.state),
    l && _i(t, n, !0),
    t.child
  );
}
function ic(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Ti(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ti(e, t.context, !1),
    Da(e, t.containerInfo));
}
function Gi(e, t, n, r, l) {
  return (sn(), wa(l), (t.flags |= 256), oe(e, t, n, r), t.child);
}
var Vs = { dehydrated: null, treeContext: null, retryLane: 0 };
function Us(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function oc(e, t, n) {
  var r = t.pendingProps,
    l = F.current,
    s = !1,
    i = (t.flags & 128) !== 0,
    o;
  if (
    ((o = i) ||
      (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    o
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    B(F, l & 1),
    e === null)
  )
    return (
      Ms(t),
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
                : (s = kl(i, r, 0, null)),
              (e = Et(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Us(n)),
              (t.memoizedState = Vs),
              e)
            : za(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
    return V0(e, t, i, r, o, l, n);
  if (s) {
    ((s = r.fallback), (i = t.mode), (l = e.child), (o = l.sibling));
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = ft(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      o !== null ? (s = ft(o, s)) : ((s = Et(s, i, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Us(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (s.memoizedState = i),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Vs),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = ft(s, { mode: "visible", children: r.children })),
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
function za(e, t) {
  return (
    (t = kl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function jr(e, t, n, r) {
  return (
    r !== null && wa(r),
    an(t, e.child, null, n),
    (e = za(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function V0(e, t, n, r, l, s, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Xl(Error(y(422)))), jr(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (l = t.mode),
          (r = kl({ mode: "visible", children: r.children }, l, 0, null)),
          (s = Et(s, l, i, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && an(t, e.child, null, i),
          (t.child.memoizedState = Us(i)),
          (t.memoizedState = Vs),
          s);
  if (!(t.mode & 1)) return jr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
    return (
      (r = o),
      (s = Error(y(419))),
      (r = Xl(s, r, void 0)),
      jr(e, t, i, r)
    );
  }
  if (((o = (i & e.childLanes) !== 0), fe || o)) {
    if (((r = J), r !== null)) {
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
      ((l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== s.retryLane &&
          ((s.retryLane = l), Ze(e, l), Me(r, e, l, -1)));
    }
    return (Va(), (r = Xl(Error(y(421)))), jr(e, t, i, r));
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = em.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (ve = ut(l.nextSibling)),
      (ye = t),
      (V = !0),
      (_e = null),
      e !== null &&
        ((je[Ce++] = Qe),
        (je[Ce++] = We),
        (je[Ce++] = Tt),
        (Qe = e.id),
        (We = e.overflow),
        (Tt = t)),
      (t = za(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Zi(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), zs(e.return, t, n));
}
function Yl(e, t, n, r, l) {
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
function uc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    s = r.tail;
  if ((oe(e, t, r.children, n), (r = F.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Zi(e, n, t);
        else if (e.tag === 19) Zi(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((B(F, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          ((e = n.alternate),
            e !== null && tl(e) === null && (l = n),
            (n = n.sibling));
        ((n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Yl(t, !1, l, n, s));
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && tl(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
        }
        Yl(t, !0, n, null, s);
        break;
      case "together":
        Yl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function zr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ke(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (At |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ft(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = ft(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function U0(e, t, n) {
  switch (t.tag) {
    case 3:
      (ic(t), sn());
      break;
    case 5:
      zu(t);
      break;
    case 1:
      he(t.type) && Zr(t);
      break;
    case 4:
      Da(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      (B(Yr, r._currentValue), (r._currentValue = l));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (B(F, F.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? oc(e, t, n)
            : (B(F, F.current & 1),
              (e = Ke(e, t, n)),
              e !== null ? e.sibling : null);
      B(F, F.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return uc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        B(F, F.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), sc(e, t, n));
  }
  return Ke(e, t, n);
}
var cc, Fs, dc, mc;
cc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Fs = function () {};
dc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    ((e = t.stateNode), Dt(Ve.current));
    var s = null;
    switch (n) {
      case "input":
        ((l = ds(e, l)), (r = ds(e, r)), (s = []));
        break;
      case "select":
        ((l = W({}, l, { value: void 0 })),
          (r = W({}, r, { value: void 0 })),
          (s = []));
        break;
      case "textarea":
        ((l = ps(e, l)), (r = ps(e, r)), (s = []));
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = qr);
    }
    gs(n, r);
    var i;
    n = null;
    for (d in l)
      if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
        if (d === "style") {
          var o = l[d];
          for (i in o) o.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (Hn.hasOwnProperty(d)
              ? s || (s = [])
              : (s = s || []).push(d, null));
    for (d in r) {
      var u = r[d];
      if (
        ((o = l != null ? l[d] : void 0),
        r.hasOwnProperty(d) && u !== o && (u != null || o != null))
      )
        if (d === "style")
          if (o) {
            for (i in o)
              !o.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                o[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else (n || (s || (s = []), s.push(d, n)), (n = u));
        else
          d === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (o = o ? o.__html : void 0),
              u != null && o !== u && (s = s || []).push(d, u))
            : d === "children"
              ? (typeof u != "string" && typeof u != "number") ||
                (s = s || []).push(d, "" + u)
              : d !== "suppressContentEditableWarning" &&
                d !== "suppressHydrationWarning" &&
                (Hn.hasOwnProperty(d)
                  ? (u != null && d === "onScroll" && H("scroll", e),
                    s || o === u || (s = []))
                  : (s = s || []).push(d, u));
    }
    n && (s = s || []).push("style", n);
    var d = s;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
mc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function jn(e, t) {
  if (!V)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function se(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      ((n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling));
  else
    for (l = e.child; l !== null; )
      ((n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function F0(e, t, n) {
  var r = t.pendingProps;
  switch ((Na(t), t.tag)) {
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
      return (se(t), null);
    case 1:
      return (he(t.type) && Gr(), se(t), null);
    case 3:
      return (
        (r = t.stateNode),
        on(),
        O(pe),
        O(ie),
        Ea(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (wr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), _e !== null && (Xs(_e), (_e = null)))),
        Fs(e, t),
        se(t),
        null
      );
    case 5:
      La(t);
      var l = Dt(Xn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (dc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return (se(t), null);
        }
        if (((e = Dt(Ve.current)), wr(t))) {
          ((r = t.stateNode), (n = t.type));
          var s = t.memoizedProps;
          switch (((r[He] = t), (r[Zn] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (H("cancel", r), H("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              H("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Ln.length; l++) H(Ln[l], r);
              break;
            case "source":
              H("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (H("error", r), H("load", r));
              break;
            case "details":
              H("toggle", r);
              break;
            case "input":
              (li(r, s), H("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!s.multiple }),
                H("invalid", r));
              break;
            case "textarea":
              (ai(r, s), H("invalid", r));
          }
          (gs(n, s), (l = null));
          for (var i in s)
            if (s.hasOwnProperty(i)) {
              var o = s[i];
              i === "children"
                ? typeof o == "string"
                  ? r.textContent !== o &&
                    (s.suppressHydrationWarning !== !0 &&
                      Nr(r.textContent, o, e),
                    (l = ["children", o]))
                  : typeof o == "number" &&
                    r.textContent !== "" + o &&
                    (s.suppressHydrationWarning !== !0 &&
                      Nr(r.textContent, o, e),
                    (l = ["children", "" + o]))
                : Hn.hasOwnProperty(i) &&
                  o != null &&
                  i === "onScroll" &&
                  H("scroll", r);
            }
          switch (n) {
            case "input":
              (mr(r), si(r, s, !0));
              break;
            case "textarea":
              (mr(r), ii(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = qr);
          }
          ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Oo(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
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
            (e[He] = t),
            (e[Zn] = r),
            cc(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((i = xs(n, r)), n)) {
              case "dialog":
                (H("cancel", e), H("close", e), (l = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (H("load", e), (l = r));
                break;
              case "video":
              case "audio":
                for (l = 0; l < Ln.length; l++) H(Ln[l], e);
                l = r;
                break;
              case "source":
                (H("error", e), (l = r));
                break;
              case "img":
              case "image":
              case "link":
                (H("error", e), H("load", e), (l = r));
                break;
              case "details":
                (H("toggle", e), (l = r));
                break;
              case "input":
                (li(e, r), (l = ds(e, r)), H("invalid", e));
                break;
              case "option":
                l = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = W({}, r, { value: void 0 })),
                  H("invalid", e));
                break;
              case "textarea":
                (ai(e, r), (l = ps(e, r)), H("invalid", e));
                break;
              default:
                l = r;
            }
            (gs(n, l), (o = l));
            for (s in o)
              if (o.hasOwnProperty(s)) {
                var u = o[s];
                s === "style"
                  ? Fo(e, u)
                  : s === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && Vo(e, u))
                    : s === "children"
                      ? typeof u == "string"
                        ? (n !== "textarea" || u !== "") && On(e, u)
                        : typeof u == "number" && On(e, "" + u)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (Hn.hasOwnProperty(s)
                          ? u != null && s === "onScroll" && H("scroll", e)
                          : u != null && sa(e, s, u, i));
              }
            switch (n) {
              case "input":
                (mr(e), si(e, r, !1));
                break;
              case "textarea":
                (mr(e), ii(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + pt(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Xt(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Xt(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = qr);
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
      return (se(t), null);
    case 6:
      if (e && t.stateNode != null) mc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = Dt(Xn.current)), Dt(Ve.current), wr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[He] = t),
            (s = r.nodeValue !== n) && ((e = ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                Nr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Nr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[He] = t),
            (t.stateNode = r));
      }
      return (se(t), null);
    case 13:
      if (
        (O(F),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (V && ve !== null && t.mode & 1 && !(t.flags & 128))
          (Pu(), sn(), (t.flags |= 98560), (s = !1));
        else if (((s = wr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(y(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(y(317));
            s[He] = t;
          } else
            (sn(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (se(t), (s = !1));
        } else (_e !== null && (Xs(_e), (_e = null)), (s = !0));
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || F.current & 1 ? K === 0 && (K = 3) : Va())),
          t.updateQueue !== null && (t.flags |= 4),
          se(t),
          null);
    case 4:
      return (
        on(),
        Fs(e, t),
        e === null && qn(t.stateNode.containerInfo),
        se(t),
        null
      );
    case 10:
      return (Ca(t.type._context), se(t), null);
    case 17:
      return (he(t.type) && Gr(), se(t), null);
    case 19:
      if ((O(F), (s = t.memoizedState), s === null)) return (se(t), null);
      if (((r = (t.flags & 128) !== 0), (i = s.rendering), i === null))
        if (r) jn(s, !1);
        else {
          if (K !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = tl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    jn(s, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((s = n),
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
                    (n = n.sibling));
                return (B(F, (F.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          s.tail !== null &&
            q() > cn &&
            ((t.flags |= 128), (r = !0), jn(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = tl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              jn(s, !0),
              s.tail === null && s.tailMode === "hidden" && !i.alternate && !V)
            )
              return (se(t), null);
          } else
            2 * q() - s.renderingStartTime > cn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), jn(s, !1), (t.lanes = 4194304));
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
          (s.renderingStartTime = q()),
          (t.sibling = null),
          (n = F.current),
          B(F, r ? (n & 1) | 2 : n & 1),
          t)
        : (se(t), null);
    case 22:
    case 23:
      return (
        Oa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? xe & 1073741824 && (se(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : se(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function Q0(e, t) {
  switch ((Na(t), t.tag)) {
    case 1:
      return (
        he(t.type) && Gr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        on(),
        O(pe),
        O(ie),
        Ea(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (La(t), null);
    case 13:
      if ((O(F), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        sn();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (O(F), null);
    case 4:
      return (on(), null);
    case 10:
      return (Ca(t.type._context), null);
    case 22:
    case 23:
      return (Oa(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Cr = !1,
  ae = !1,
  W0 = typeof WeakSet == "function" ? WeakSet : Set,
  C = null;
function Zt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        $(e, t, r);
      }
    else n.current = null;
}
function Qs(e, t, n) {
  try {
    n();
  } catch (r) {
    $(e, t, r);
  }
}
var Ki = !1;
function $0(e, t) {
  if (((Ds = Qr), (e = xu()), va(e))) {
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
            (n.nodeType, s.nodeType);
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            o = -1,
            u = -1,
            d = 0,
            g = 0,
            h = e,
            p = null;
          t: for (;;) {
            for (
              var N;
              h !== n || (l !== 0 && h.nodeType !== 3) || (o = i + l),
                h !== s || (r !== 0 && h.nodeType !== 3) || (u = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (N = h.firstChild) !== null;
            )
              ((p = h), (h = N));
            for (;;) {
              if (h === e) break t;
              if (
                (p === n && ++d === l && (o = i),
                p === s && ++g === r && (u = i),
                (N = h.nextSibling) !== null)
              )
                break;
              ((h = p), (p = h.parentNode));
            }
            h = N;
          }
          n = o === -1 || u === -1 ? null : { start: o, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ls = { focusedElem: e, selectionRange: n }, Qr = !1, C = t; C !== null; )
    if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (C = e));
    else
      for (; C !== null; ) {
        t = C;
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
                  var w = x.memoizedProps,
                    A = x.memoizedState,
                    m = t.stateNode,
                    c = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Pe(t.type, w),
                      A,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = "")
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (v) {
          $(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (C = e));
          break;
        }
        C = t.return;
      }
  return ((x = Ki), (Ki = !1), x);
}
function In(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var s = l.destroy;
        ((l.destroy = void 0), s !== void 0 && Qs(t, n, s));
      }
      l = l.next;
    } while (l !== r);
  }
}
function Nl(e, t) {
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
function Ws(e) {
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
function fc(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), fc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[He], delete t[Zn], delete t[Ts], delete t[L0], delete t[E0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function pc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Xi(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || pc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function $s(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = qr)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for ($s(e, t, n), e = e.sibling; e !== null; )
      ($s(e, t, n), (e = e.sibling));
}
function qs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (qs(e, t, n), e = e.sibling; e !== null; )
      (qs(e, t, n), (e = e.sibling));
}
var te = null,
  Te = !1;
function Je(e, t, n) {
  for (n = n.child; n !== null; ) (hc(e, t, n), (n = n.sibling));
}
function hc(e, t, n) {
  if (Oe && typeof Oe.onCommitFiberUnmount == "function")
    try {
      Oe.onCommitFiberUnmount(ml, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ae || Zt(n, t);
    case 6:
      var r = te,
        l = Te;
      ((te = null),
        Je(e, t, n),
        (te = r),
        (Te = l),
        te !== null &&
          (Te
            ? ((e = te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : te.removeChild(n.stateNode)));
      break;
    case 18:
      te !== null &&
        (Te
          ? ((e = te),
            (n = n.stateNode),
            e.nodeType === 8
              ? Wl(e.parentNode, n)
              : e.nodeType === 1 && Wl(e, n),
            Qn(e))
          : Wl(te, n.stateNode));
      break;
    case 4:
      ((r = te),
        (l = Te),
        (te = n.stateNode.containerInfo),
        (Te = !0),
        Je(e, t, n),
        (te = r),
        (Te = l));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ae &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var s = l,
            i = s.destroy;
          ((s = s.tag),
            i !== void 0 && (s & 2 || s & 4) && Qs(n, t, i),
            (l = l.next));
        } while (l !== r);
      }
      Je(e, t, n);
      break;
    case 1:
      if (
        !ae &&
        (Zt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (o) {
          $(n, t, o);
        }
      Je(e, t, n);
      break;
    case 21:
      Je(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ae = (r = ae) || n.memoizedState !== null), Je(e, t, n), (ae = r))
        : Je(e, t, n);
      break;
    default:
      Je(e, t, n);
  }
}
function Yi(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new W0()),
      t.forEach(function (r) {
        var l = tm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      }));
  }
}
function Ee(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var s = e,
          i = t,
          o = i;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              ((te = o.stateNode), (Te = !1));
              break e;
            case 3:
              ((te = o.stateNode.containerInfo), (Te = !0));
              break e;
            case 4:
              ((te = o.stateNode.containerInfo), (Te = !0));
              break e;
          }
          o = o.return;
        }
        if (te === null) throw Error(y(160));
        (hc(s, i, l), (te = null), (Te = !1));
        var u = l.alternate;
        (u !== null && (u.return = null), (l.return = null));
      } catch (d) {
        $(l, t, d);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (gc(t, e), (t = t.sibling));
}
function gc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ee(t, e), Re(e), r & 4)) {
        try {
          (In(3, e, e.return), Nl(3, e));
        } catch (w) {
          $(e, e.return, w);
        }
        try {
          In(5, e, e.return);
        } catch (w) {
          $(e, e.return, w);
        }
      }
      break;
    case 1:
      (Ee(t, e), Re(e), r & 512 && n !== null && Zt(n, n.return));
      break;
    case 5:
      if (
        (Ee(t, e),
        Re(e),
        r & 512 && n !== null && Zt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          On(l, "");
        } catch (w) {
          $(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var s = e.memoizedProps,
          i = n !== null ? n.memoizedProps : s,
          o = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            (o === "input" && s.type === "radio" && s.name != null && Bo(l, s),
              xs(o, i));
            var d = xs(o, s);
            for (i = 0; i < u.length; i += 2) {
              var g = u[i],
                h = u[i + 1];
              g === "style"
                ? Fo(l, h)
                : g === "dangerouslySetInnerHTML"
                  ? Vo(l, h)
                  : g === "children"
                    ? On(l, h)
                    : sa(l, g, h, d);
            }
            switch (o) {
              case "input":
                ms(l, s);
                break;
              case "textarea":
                Ho(l, s);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!s.multiple;
                var N = s.value;
                N != null
                  ? Xt(l, !!s.multiple, N, !1)
                  : p !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Xt(l, !!s.multiple, s.defaultValue, !0)
                      : Xt(l, !!s.multiple, s.multiple ? [] : "", !1));
            }
            l[Zn] = s;
          } catch (w) {
            $(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Ee(t, e), Re(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        ((l = e.stateNode), (s = e.memoizedProps));
        try {
          l.nodeValue = s;
        } catch (w) {
          $(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Ee(t, e), Re(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Qn(t.containerInfo);
        } catch (w) {
          $(e, e.return, w);
        }
      break;
    case 4:
      (Ee(t, e), Re(e));
      break;
    case 13:
      (Ee(t, e),
        Re(e),
        (l = e.child),
        l.flags & 8192 &&
          ((s = l.memoizedState !== null),
          (l.stateNode.isHidden = s),
          !s ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ba = q())),
        r & 4 && Yi(e));
      break;
    case 22:
      if (
        ((g = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ae = (d = ae) || g), Ee(t, e), (ae = d)) : Ee(t, e),
        Re(e),
        r & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !g && e.mode & 1)
        )
          for (C = e, g = e.child; g !== null; ) {
            for (h = C = g; C !== null; ) {
              switch (((p = C), (N = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  In(4, p, p.return);
                  break;
                case 1:
                  Zt(p, p.return);
                  var x = p.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    ((r = p), (n = p.return));
                    try {
                      ((t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount());
                    } catch (w) {
                      $(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Zt(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    eo(h);
                    continue;
                  }
              }
              N !== null ? ((N.return = p), (C = N)) : eo(h);
            }
            g = g.sibling;
          }
        e: for (g = null, h = e; ; ) {
          if (h.tag === 5) {
            if (g === null) {
              g = h;
              try {
                ((l = h.stateNode),
                  d
                    ? ((s = l.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((o = h.stateNode),
                      (u = h.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (o.style.display = Uo("display", i))));
              } catch (w) {
                $(e, e.return, w);
              }
            }
          } else if (h.tag === 6) {
            if (g === null)
              try {
                h.stateNode.nodeValue = d ? "" : h.memoizedProps;
              } catch (w) {
                $(e, e.return, w);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            ((h.child.return = h), (h = h.child));
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            (g === h && (g = null), (h = h.return));
          }
          (g === h && (g = null),
            (h.sibling.return = h.return),
            (h = h.sibling));
        }
      }
      break;
    case 19:
      (Ee(t, e), Re(e), r & 4 && Yi(e));
      break;
    case 21:
      break;
    default:
      (Ee(t, e), Re(e));
  }
}
function Re(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (pc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (On(l, ""), (r.flags &= -33));
          var s = Xi(e);
          qs(e, s, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            o = Xi(e);
          $s(e, o, i);
          break;
        default:
          throw Error(y(161));
      }
    } catch (u) {
      $(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function q0(e, t, n) {
  ((C = e), xc(e));
}
function xc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C,
      s = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Cr;
      if (!i) {
        var o = l.alternate,
          u = (o !== null && o.memoizedState !== null) || ae;
        o = Cr;
        var d = ae;
        if (((Cr = i), (ae = u) && !d))
          for (C = l; C !== null; )
            ((i = C),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? to(l)
                : u !== null
                  ? ((u.return = i), (C = u))
                  : to(l));
        for (; s !== null; ) ((C = s), xc(s), (s = s.sibling));
        ((C = l), (Cr = o), (ae = d));
      }
      Ji(e);
    } else
      l.subtreeFlags & 8772 && s !== null ? ((s.return = l), (C = s)) : Ji(e);
  }
}
function Ji(e) {
  for (; C !== null; ) {
    var t = C;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ae || Nl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ae)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Pe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = t.updateQueue;
              s !== null && Ri(t, s, r);
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
                Ri(t, i, n);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (n === null && t.flags & 4) {
                n = o;
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
                var d = t.alternate;
                if (d !== null) {
                  var g = d.memoizedState;
                  if (g !== null) {
                    var h = g.dehydrated;
                    h !== null && Qn(h);
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
              throw Error(y(163));
          }
        ae || (t.flags & 512 && Ws(t));
      } catch (p) {
        $(t, t.return, p);
      }
    }
    if (t === e) {
      C = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (C = n));
      break;
    }
    C = t.return;
  }
}
function eo(e) {
  for (; C !== null; ) {
    var t = C;
    if (t === e) {
      C = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (C = n));
      break;
    }
    C = t.return;
  }
}
function to(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Nl(4, t);
          } catch (u) {
            $(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              $(t, l, u);
            }
          }
          var s = t.return;
          try {
            Ws(t);
          } catch (u) {
            $(t, s, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ws(t);
          } catch (u) {
            $(t, i, u);
          }
      }
    } catch (u) {
      $(t, t.return, u);
    }
    if (t === e) {
      C = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      ((o.return = t.return), (C = o));
      break;
    }
    C = t.return;
  }
}
var G0 = Math.ceil,
  ll = Xe.ReactCurrentDispatcher,
  Ia = Xe.ReactCurrentOwner,
  be = Xe.ReactCurrentBatchConfig,
  z = 0,
  J = null,
  G = null,
  ne = 0,
  xe = 0,
  Kt = xt(0),
  K = 0,
  tr = null,
  At = 0,
  wl = 0,
  Ra = 0,
  Rn = null,
  me = null,
  Ba = 0,
  cn = 1 / 0,
  Ue = null,
  sl = !1,
  Gs = null,
  dt = null,
  Sr = !1,
  st = null,
  al = 0,
  Bn = 0,
  Zs = null,
  Ir = -1,
  Rr = 0;
function ue() {
  return z & 6 ? q() : Ir !== -1 ? Ir : (Ir = q());
}
function mt(e) {
  return e.mode & 1
    ? z & 2 && ne !== 0
      ? ne & -ne
      : T0.transition !== null
        ? (Rr === 0 && (Rr = tu()), Rr)
        : ((e = I),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ou(e.type))),
          e)
    : 1;
}
function Me(e, t, n, r) {
  if (50 < Bn) throw ((Bn = 0), (Zs = null), Error(y(185)));
  (rr(e, n, r),
    (!(z & 2) || e !== J) &&
      (e === J && (!(z & 2) && (wl |= n), K === 4 && rt(e, ne)),
      ge(e, r),
      n === 1 && z === 0 && !(t.mode & 1) && ((cn = q() + 500), xl && vt())));
}
function ge(e, t) {
  var n = e.callbackNode;
  Td(e, t);
  var r = Fr(e, e === J ? ne : 0);
  if (r === 0)
    (n !== null && ci(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ci(n), t === 1))
      (e.tag === 0 ? P0(no.bind(null, e)) : Du(no.bind(null, e)),
        b0(function () {
          !(z & 6) && vt();
        }),
        (n = null));
    else {
      switch (nu(r)) {
        case 1:
          n = ca;
          break;
        case 4:
          n = Jo;
          break;
        case 16:
          n = Ur;
          break;
        case 536870912:
          n = eu;
          break;
        default:
          n = Ur;
      }
      n = Sc(n, vc.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function vc(e, t) {
  if (((Ir = -1), (Rr = 0), z & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (nn() && e.callbackNode !== n) return null;
  var r = Fr(e, e === J ? ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = il(e, r);
  else {
    t = r;
    var l = z;
    z |= 2;
    var s = Nc();
    (J !== e || ne !== t) && ((Ue = null), (cn = q() + 500), Lt(e, t));
    do
      try {
        X0();
        break;
      } catch (o) {
        yc(e, o);
      }
    while (!0);
    (ja(),
      (ll.current = s),
      (z = l),
      G !== null ? (t = 0) : ((J = null), (ne = 0), (t = K)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = ks(e)), l !== 0 && ((r = l), (t = Ks(e, l)))), t === 1)
    )
      throw ((n = tr), Lt(e, 0), rt(e, r), ge(e, q()), n);
    if (t === 6) rt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Z0(l) &&
          ((t = il(e, r)),
          t === 2 && ((s = ks(e)), s !== 0 && ((r = s), (t = Ks(e, s)))),
          t === 1))
      )
        throw ((n = tr), Lt(e, 0), rt(e, r), ge(e, q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          jt(e, me, Ue);
          break;
        case 3:
          if (
            (rt(e, r), (r & 130023424) === r && ((t = Ba + 500 - q()), 10 < t))
          ) {
            if (Fr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              (ue(), (e.pingedLanes |= e.suspendedLanes & l));
              break;
            }
            e.timeoutHandle = Ps(jt.bind(null, e, me, Ue), t);
            break;
          }
          jt(e, me, Ue);
          break;
        case 4:
          if ((rt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ae(r);
            ((s = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~s));
          }
          if (
            ((r = l),
            (r = q() - r),
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
                          : 1960 * G0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ps(jt.bind(null, e, me, Ue), r);
            break;
          }
          jt(e, me, Ue);
          break;
        case 5:
          jt(e, me, Ue);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return (ge(e, q()), e.callbackNode === n ? vc.bind(null, e) : null);
}
function Ks(e, t) {
  var n = Rn;
  return (
    e.current.memoizedState.isDehydrated && (Lt(e, t).flags |= 256),
    (e = il(e, t)),
    e !== 2 && ((t = me), (me = n), t !== null && Xs(t)),
    e
  );
}
function Xs(e) {
  me === null ? (me = e) : me.push.apply(me, e);
}
function Z0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            s = l.getSnapshot;
          l = l.value;
          try {
            if (!ze(s(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function rt(e, t) {
  for (
    t &= ~Ra,
      t &= ~wl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Ae(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function no(e) {
  if (z & 6) throw Error(y(327));
  nn();
  var t = Fr(e, 0);
  if (!(t & 1)) return (ge(e, q()), null);
  var n = il(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ks(e);
    r !== 0 && ((t = r), (n = Ks(e, r)));
  }
  if (n === 1) throw ((n = tr), Lt(e, 0), rt(e, t), ge(e, q()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    jt(e, me, Ue),
    ge(e, q()),
    null
  );
}
function Ha(e, t) {
  var n = z;
  z |= 1;
  try {
    return e(t);
  } finally {
    ((z = n), z === 0 && ((cn = q() + 500), xl && vt()));
  }
}
function Mt(e) {
  st !== null && st.tag === 0 && !(z & 6) && nn();
  var t = z;
  z |= 1;
  var n = be.transition,
    r = I;
  try {
    if (((be.transition = null), (I = 1), e)) return e();
  } finally {
    ((I = r), (be.transition = n), (z = t), !(z & 6) && vt());
  }
}
function Oa() {
  ((xe = Kt.current), O(Kt));
}
function Lt(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), S0(n)), G !== null))
    for (n = G.return; n !== null; ) {
      var r = n;
      switch ((Na(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && Gr());
          break;
        case 3:
          (on(), O(pe), O(ie), Ea());
          break;
        case 5:
          La(r);
          break;
        case 4:
          on();
          break;
        case 13:
          O(F);
          break;
        case 19:
          O(F);
          break;
        case 10:
          Ca(r.type._context);
          break;
        case 22:
        case 23:
          Oa();
      }
      n = n.return;
    }
  if (
    ((J = e),
    (G = e = ft(e.current, null)),
    (ne = xe = t),
    (K = 0),
    (tr = null),
    (Ra = wl = At = 0),
    (me = Rn = null),
    bt !== null)
  ) {
    for (t = 0; t < bt.length; t++)
      if (((n = bt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          s = n.pending;
        if (s !== null) {
          var i = s.next;
          ((s.next = l), (r.next = i));
        }
        n.pending = r;
      }
    bt = null;
  }
  return e;
}
function yc(e, t) {
  do {
    var n = G;
    try {
      if ((ja(), (Ar.current = rl), nl)) {
        for (var r = Q.memoizedState; r !== null; ) {
          var l = r.queue;
          (l !== null && (l.pending = null), (r = r.next));
        }
        nl = !1;
      }
      if (
        ((_t = 0),
        (Y = Z = Q = null),
        (zn = !1),
        (Yn = 0),
        (Ia.current = null),
        n === null || n.return === null)
      ) {
        ((K = 1), (tr = t), (G = null));
        break;
      }
      e: {
        var s = e,
          i = n.return,
          o = n,
          u = t;
        if (
          ((t = ne),
          (o.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var d = u,
            g = o,
            h = g.tag;
          if (!(g.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = g.alternate;
            p
              ? ((g.updateQueue = p.updateQueue),
                (g.memoizedState = p.memoizedState),
                (g.lanes = p.lanes))
              : ((g.updateQueue = null), (g.memoizedState = null));
          }
          var N = Fi(i);
          if (N !== null) {
            ((N.flags &= -257),
              Qi(N, i, o, s, t),
              N.mode & 1 && Ui(s, d, t),
              (t = N),
              (u = d));
            var x = t.updateQueue;
            if (x === null) {
              var w = new Set();
              (w.add(u), (t.updateQueue = w));
            } else x.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              (Ui(s, d, t), Va());
              break e;
            }
            u = Error(y(426));
          }
        } else if (V && o.mode & 1) {
          var A = Fi(i);
          if (A !== null) {
            (!(A.flags & 65536) && (A.flags |= 256),
              Qi(A, i, o, s, t),
              wa(un(u, o)));
            break e;
          }
        }
        ((s = u = un(u, o)),
          K !== 4 && (K = 2),
          Rn === null ? (Rn = [s]) : Rn.push(s),
          (s = i));
        do {
          switch (s.tag) {
            case 3:
              ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
              var m = nc(s, u, t);
              Ii(s, m);
              break e;
            case 1:
              o = u;
              var c = s.type,
                f = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (dt === null || !dt.has(f))))
              ) {
                ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                var v = rc(s, o, t);
                Ii(s, v);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      kc(n);
    } catch (k) {
      ((t = k), G === n && n !== null && (G = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Nc() {
  var e = ll.current;
  return ((ll.current = rl), e === null ? rl : e);
}
function Va() {
  ((K === 0 || K === 3 || K === 2) && (K = 4),
    J === null || (!(At & 268435455) && !(wl & 268435455)) || rt(J, ne));
}
function il(e, t) {
  var n = z;
  z |= 2;
  var r = Nc();
  (J !== e || ne !== t) && ((Ue = null), Lt(e, t));
  do
    try {
      K0();
      break;
    } catch (l) {
      yc(e, l);
    }
  while (!0);
  if ((ja(), (z = n), (ll.current = r), G !== null)) throw Error(y(261));
  return ((J = null), (ne = 0), K);
}
function K0() {
  for (; G !== null; ) wc(G);
}
function X0() {
  for (; G !== null && !kd(); ) wc(G);
}
function wc(e) {
  var t = Cc(e.alternate, e, xe);
  ((e.memoizedProps = e.pendingProps),
    t === null ? kc(e) : (G = t),
    (Ia.current = null));
}
function kc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Q0(n, t)), n !== null)) {
        ((n.flags &= 32767), (G = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((K = 6), (G = null));
        return;
      }
    } else if (((n = F0(n, t, xe)), n !== null)) {
      G = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      G = t;
      return;
    }
    G = t = e;
  } while (t !== null);
  K === 0 && (K = 5);
}
function jt(e, t, n) {
  var r = I,
    l = be.transition;
  try {
    ((be.transition = null), (I = 1), Y0(e, t, n, r));
  } finally {
    ((be.transition = l), (I = r));
  }
  return null;
}
function Y0(e, t, n, r) {
  do nn();
  while (st !== null);
  if (z & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var s = n.lanes | n.childLanes;
  if (
    (_d(e, s),
    e === J && ((G = J = null), (ne = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Sr ||
      ((Sr = !0),
      Sc(Ur, function () {
        return (nn(), null);
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    ((s = be.transition), (be.transition = null));
    var i = I;
    I = 1;
    var o = z;
    ((z |= 4),
      (Ia.current = null),
      $0(e, n),
      gc(n, e),
      v0(Ls),
      (Qr = !!Ds),
      (Ls = Ds = null),
      (e.current = n),
      q0(n),
      jd(),
      (z = o),
      (I = i),
      (be.transition = s));
  } else e.current = n;
  if (
    (Sr && ((Sr = !1), (st = e), (al = l)),
    (s = e.pendingLanes),
    s === 0 && (dt = null),
    bd(n.stateNode),
    ge(e, q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
  if (sl) throw ((sl = !1), (e = Gs), (Gs = null), e);
  return (
    al & 1 && e.tag !== 0 && nn(),
    (s = e.pendingLanes),
    s & 1 ? (e === Zs ? Bn++ : ((Bn = 0), (Zs = e))) : (Bn = 0),
    vt(),
    null
  );
}
function nn() {
  if (st !== null) {
    var e = nu(al),
      t = be.transition,
      n = I;
    try {
      if (((be.transition = null), (I = 16 > e ? 16 : e), st === null))
        var r = !1;
      else {
        if (((e = st), (st = null), (al = 0), z & 6)) throw Error(y(331));
        var l = z;
        for (z |= 4, C = e.current; C !== null; ) {
          var s = C,
            i = s.child;
          if (C.flags & 16) {
            var o = s.deletions;
            if (o !== null) {
              for (var u = 0; u < o.length; u++) {
                var d = o[u];
                for (C = d; C !== null; ) {
                  var g = C;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      In(8, g, s);
                  }
                  var h = g.child;
                  if (h !== null) ((h.return = g), (C = h));
                  else
                    for (; C !== null; ) {
                      g = C;
                      var p = g.sibling,
                        N = g.return;
                      if ((fc(g), g === d)) {
                        C = null;
                        break;
                      }
                      if (p !== null) {
                        ((p.return = N), (C = p));
                        break;
                      }
                      C = N;
                    }
                }
              }
              var x = s.alternate;
              if (x !== null) {
                var w = x.child;
                if (w !== null) {
                  x.child = null;
                  do {
                    var A = w.sibling;
                    ((w.sibling = null), (w = A));
                  } while (w !== null);
                }
              }
              C = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) ((i.return = s), (C = i));
          else
            e: for (; C !== null; ) {
              if (((s = C), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    In(9, s, s.return);
                }
              var m = s.sibling;
              if (m !== null) {
                ((m.return = s.return), (C = m));
                break e;
              }
              C = s.return;
            }
        }
        var c = e.current;
        for (C = c; C !== null; ) {
          i = C;
          var f = i.child;
          if (i.subtreeFlags & 2064 && f !== null) ((f.return = i), (C = f));
          else
            e: for (i = c; C !== null; ) {
              if (((o = C), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nl(9, o);
                  }
                } catch (k) {
                  $(o, o.return, k);
                }
              if (o === i) {
                C = null;
                break e;
              }
              var v = o.sibling;
              if (v !== null) {
                ((v.return = o.return), (C = v));
                break e;
              }
              C = o.return;
            }
        }
        if (
          ((z = l), vt(), Oe && typeof Oe.onPostCommitFiberRoot == "function")
        )
          try {
            Oe.onPostCommitFiberRoot(ml, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((I = n), (be.transition = t));
    }
  }
  return !1;
}
function ro(e, t, n) {
  ((t = un(n, t)),
    (t = nc(e, t, 1)),
    (e = ct(e, t, 1)),
    (t = ue()),
    e !== null && (rr(e, 1, t), ge(e, t)));
}
function $(e, t, n) {
  if (e.tag === 3) ro(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ro(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (dt === null || !dt.has(r)))
        ) {
          ((e = un(n, e)),
            (e = rc(t, e, 1)),
            (t = ct(t, e, 1)),
            (e = ue()),
            t !== null && (rr(t, 1, e), ge(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function J0(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    J === e &&
      (ne & n) === n &&
      (K === 4 || (K === 3 && (ne & 130023424) === ne && 500 > q() - Ba)
        ? Lt(e, 0)
        : (Ra |= n)),
    ge(e, t));
}
function jc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = hr), (hr <<= 1), !(hr & 130023424) && (hr = 4194304))
      : (t = 1));
  var n = ue();
  ((e = Ze(e, t)), e !== null && (rr(e, t, n), ge(e, n)));
}
function em(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), jc(e, n));
}
function tm(e, t) {
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
      throw Error(y(314));
  }
  (r !== null && r.delete(t), jc(e, n));
}
var Cc;
Cc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pe.current) fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((fe = !1), U0(e, t, n));
      fe = !!(e.flags & 131072);
    }
  else ((fe = !1), V && t.flags & 1048576 && Lu(t, Xr, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (zr(e, t), (e = t.pendingProps));
      var l = ln(t, ie.current);
      (tn(t, n), (l = Ta(null, t, r, e, l, n)));
      var s = _a();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            he(r) ? ((s = !0), Zr(t)) : (s = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            ba(t),
            (l.updater = yl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Rs(t, r, e, n),
            (t = Os(null, t, r, !0, s, n)))
          : ((t.tag = 0), V && s && ya(t), oe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (zr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = rm(r)),
          (e = Pe(r, e)),
          l)
        ) {
          case 0:
            t = Hs(null, t, r, e, n);
            break e;
          case 1:
            t = qi(null, t, r, e, n);
            break e;
          case 11:
            t = Wi(null, t, r, e, n);
            break e;
          case 14:
            t = $i(null, t, r, Pe(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Pe(r, l)),
        Hs(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Pe(r, l)),
        qi(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((ic(t), e === null)) throw Error(y(387));
        ((r = t.pendingProps),
          (s = t.memoizedState),
          (l = s.element),
          Mu(e, t),
          el(t, r, null, n));
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
            ((l = un(Error(y(423)), t)), (t = Gi(e, t, r, n, l)));
            break e;
          } else if (r !== l) {
            ((l = un(Error(y(424)), t)), (t = Gi(e, t, r, n, l)));
            break e;
          } else
            for (
              ve = ut(t.stateNode.containerInfo.firstChild),
                ye = t,
                V = !0,
                _e = null,
                n = _u(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((sn(), r === l)) {
            t = Ke(e, t, n);
            break e;
          }
          oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        zu(t),
        e === null && Ms(t),
        (r = t.type),
        (l = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Es(r, l) ? (i = null) : s !== null && Es(r, s) && (t.flags |= 32),
        ac(e, t),
        oe(e, t, i, n),
        t.child
      );
    case 6:
      return (e === null && Ms(t), null);
    case 13:
      return oc(e, t, n);
    case 4:
      return (
        Da(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = an(t, null, r, n)) : oe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Pe(r, l)),
        Wi(e, t, r, l, n)
      );
    case 7:
      return (oe(e, t, t.pendingProps, n), t.child);
    case 8:
      return (oe(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (oe(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (s = t.memoizedProps),
          (i = l.value),
          B(Yr, r._currentValue),
          (r._currentValue = i),
          s !== null)
        )
          if (ze(s.value, i)) {
            if (s.children === l.children && !pe.current) {
              t = Ke(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var o = s.dependencies;
              if (o !== null) {
                i = s.child;
                for (var u = o.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (s.tag === 1) {
                      ((u = $e(-1, n & -n)), (u.tag = 2));
                      var d = s.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var g = d.pending;
                        (g === null
                          ? (u.next = u)
                          : ((u.next = g.next), (g.next = u)),
                          (d.pending = u));
                      }
                    }
                    ((s.lanes |= n),
                      (u = s.alternate),
                      u !== null && (u.lanes |= n),
                      zs(s.return, n, t),
                      (o.lanes |= n));
                    break;
                  }
                  u = u.next;
                }
              } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((i = s.return), i === null)) throw Error(y(341));
                ((i.lanes |= n),
                  (o = i.alternate),
                  o !== null && (o.lanes |= n),
                  zs(i, n, t),
                  (i = s.sibling));
              } else i = s.child;
              if (i !== null) i.return = s;
              else
                for (i = s; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((s = i.sibling), s !== null)) {
                    ((s.return = i.return), (i = s));
                    break;
                  }
                  i = i.return;
                }
              s = i;
            }
        (oe(e, t, l.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        tn(t, n),
        (l = De(l)),
        (r = r(l)),
        (t.flags |= 1),
        oe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Pe(r, t.pendingProps)),
        (l = Pe(r.type, l)),
        $i(e, t, r, l, n)
      );
    case 15:
      return lc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Pe(r, l)),
        zr(e, t),
        (t.tag = 1),
        he(r) ? ((e = !0), Zr(t)) : (e = !1),
        tn(t, n),
        tc(t, r, l),
        Rs(t, r, l, n),
        Os(null, t, r, !0, e, n)
      );
    case 19:
      return uc(e, t, n);
    case 22:
      return sc(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function Sc(e, t) {
  return Yo(e, t);
}
function nm(e, t, n, r) {
  ((this.tag = e),
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
    (this.alternate = null));
}
function Se(e, t, n, r) {
  return new nm(e, t, n, r);
}
function Ua(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function rm(e) {
  if (typeof e == "function") return Ua(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ia)) return 11;
    if (e === oa) return 14;
  }
  return 2;
}
function ft(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Se(e.tag, t, e.key, e.mode)),
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
function Br(e, t, n, r, l, s) {
  var i = 2;
  if (((r = e), typeof e == "function")) Ua(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Ot:
        return Et(n.children, l, s, t);
      case aa:
        ((i = 8), (l |= 8));
        break;
      case is:
        return (
          (e = Se(12, n, t, l | 2)),
          (e.elementType = is),
          (e.lanes = s),
          e
        );
      case os:
        return ((e = Se(13, n, t, l)), (e.elementType = os), (e.lanes = s), e);
      case us:
        return ((e = Se(19, n, t, l)), (e.elementType = us), (e.lanes = s), e);
      case zo:
        return kl(n, l, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ao:
              i = 10;
              break e;
            case Mo:
              i = 9;
              break e;
            case ia:
              i = 11;
              break e;
            case oa:
              i = 14;
              break e;
            case et:
              ((i = 16), (r = null));
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Se(i, n, t, l)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = s),
    t
  );
}
function Et(e, t, n, r) {
  return ((e = Se(7, e, r, t)), (e.lanes = n), e);
}
function kl(e, t, n, r) {
  return (
    (e = Se(22, e, r, t)),
    (e.elementType = zo),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Jl(e, t, n) {
  return ((e = Se(6, e, null, t)), (e.lanes = n), e);
}
function es(e, t, n) {
  return (
    (t = Se(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function lm(e, t, n, r, l) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ml(0)),
    (this.expirationTimes = Ml(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ml(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null));
}
function Fa(e, t, n, r, l, s, i, o, u) {
  return (
    (e = new lm(e, t, n, o, u)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Se(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ba(s),
    e
  );
}
function sm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ht,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function bc(e) {
  if (!e) return ht;
  e = e._reactInternals;
  e: {
    if (It(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (he(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (he(n)) return bu(e, n, t);
  }
  return t;
}
function Dc(e, t, n, r, l, s, i, o, u) {
  return (
    (e = Fa(n, r, !0, e, l, s, i, o, u)),
    (e.context = bc(null)),
    (n = e.current),
    (r = ue()),
    (l = mt(n)),
    (s = $e(r, l)),
    (s.callback = t ?? null),
    ct(n, s, l),
    (e.current.lanes = l),
    rr(e, l, r),
    ge(e, r),
    e
  );
}
function jl(e, t, n, r) {
  var l = t.current,
    s = ue(),
    i = mt(l);
  return (
    (n = bc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = $e(s, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ct(l, t, i)),
    e !== null && (Me(e, l, i, s), _r(e, l, i)),
    i
  );
}
function ol(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function lo(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Qa(e, t) {
  (lo(e, t), (e = e.alternate) && lo(e, t));
}
function am() {
  return null;
}
var Lc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Wa(e) {
  this._internalRoot = e;
}
Cl.prototype.render = Wa.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  jl(e, t, null, null);
};
Cl.prototype.unmount = Wa.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Mt(function () {
      jl(null, e, null, null);
    }),
      (t[Ge] = null));
  }
};
function Cl(e) {
  this._internalRoot = e;
}
Cl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = su();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < nt.length && t !== 0 && t < nt[n].priority; n++);
    (nt.splice(n, 0, e), n === 0 && iu(e));
  }
};
function $a(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Sl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function so() {}
function im(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var d = ol(i);
        s.call(d);
      };
    }
    var i = Dc(t, r, e, 0, null, !1, !1, "", so);
    return (
      (e._reactRootContainer = i),
      (e[Ge] = i.current),
      qn(e.nodeType === 8 ? e.parentNode : e),
      Mt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function () {
      var d = ol(u);
      o.call(d);
    };
  }
  var u = Fa(e, 0, !1, null, null, !1, !1, "", so);
  return (
    (e._reactRootContainer = u),
    (e[Ge] = u.current),
    qn(e.nodeType === 8 ? e.parentNode : e),
    Mt(function () {
      jl(t, u, n, r);
    }),
    u
  );
}
function bl(e, t, n, r, l) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof l == "function") {
      var o = l;
      l = function () {
        var u = ol(i);
        o.call(u);
      };
    }
    jl(t, i, e, l);
  } else i = im(n, t, e, l, r);
  return ol(i);
}
ru = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Dn(t.pendingLanes);
        n !== 0 &&
          (da(t, n | 1), ge(t, q()), !(z & 6) && ((cn = q() + 500), vt()));
      }
      break;
    case 13:
      (Mt(function () {
        var r = Ze(e, 1);
        if (r !== null) {
          var l = ue();
          Me(r, e, 1, l);
        }
      }),
        Qa(e, 1));
  }
};
ma = function (e) {
  if (e.tag === 13) {
    var t = Ze(e, 134217728);
    if (t !== null) {
      var n = ue();
      Me(t, e, 134217728, n);
    }
    Qa(e, 134217728);
  }
};
lu = function (e) {
  if (e.tag === 13) {
    var t = mt(e),
      n = Ze(e, t);
    if (n !== null) {
      var r = ue();
      Me(n, e, t, r);
    }
    Qa(e, t);
  }
};
su = function () {
  return I;
};
au = function (e, t) {
  var n = I;
  try {
    return ((I = e), t());
  } finally {
    I = n;
  }
};
ys = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ms(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = gl(r);
            if (!l) throw Error(y(90));
            (Ro(r), ms(r, l));
          }
        }
      }
      break;
    case "textarea":
      Ho(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Xt(e, !!n.multiple, t, !1));
  }
};
$o = Ha;
qo = Mt;
var om = { usingClientEntryPoint: !1, Events: [sr, Qt, gl, Qo, Wo, Ha] },
  Cn = {
    findFiberByHostInstance: St,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  um = {
    bundleType: Cn.bundleType,
    version: Cn.version,
    rendererPackageName: Cn.rendererPackageName,
    rendererConfig: Cn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xe.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Ko(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Cn.findFiberByHostInstance || am,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var br = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!br.isDisabled && br.supportsFiber)
    try {
      ((ml = br.inject(um)), (Oe = br));
    } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = om;
we.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!$a(t)) throw Error(y(200));
  return sm(e, t, null, n);
};
we.createRoot = function (e, t) {
  if (!$a(e)) throw Error(y(299));
  var n = !1,
    r = "",
    l = Lc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Fa(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ge] = t.current),
    qn(e.nodeType === 8 ? e.parentNode : e),
    new Wa(t)
  );
};
we.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return ((e = Ko(t)), (e = e === null ? null : e.stateNode), e);
};
we.flushSync = function (e) {
  return Mt(e);
};
we.hydrate = function (e, t, n) {
  if (!Sl(t)) throw Error(y(200));
  return bl(null, e, t, !0, n);
};
we.hydrateRoot = function (e, t, n) {
  if (!$a(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    s = "",
    i = Lc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Dc(t, null, e, 1, n ?? null, l, !1, s, i)),
    (e[Ge] = t.current),
    qn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l));
  return new Cl(t);
};
we.render = function (e, t, n) {
  if (!Sl(t)) throw Error(y(200));
  return bl(null, e, t, !1, n);
};
we.unmountComponentAtNode = function (e) {
  if (!Sl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Mt(function () {
        bl(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Ge] = null));
        });
      }),
      !0)
    : !1;
};
we.unstable_batchedUpdates = Ha;
we.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Sl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return bl(e, t, n, !1, r);
};
we.version = "18.3.1-next-f1338f8080-20240426";
function Ec() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ec);
    } catch (e) {
      console.error(e);
    }
}
(Ec(), (Eo.exports = we));
var cm = Eo.exports,
  Pc,
  ao = cm;
((Pc = ao.createRoot), ao.hydrateRoot);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var dm = {
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
 */ const mm = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  E = (e, t) => {
    const n = M.forwardRef(
      (
        {
          color: r = "currentColor",
          size: l = 24,
          strokeWidth: s = 2,
          absoluteStrokeWidth: i,
          className: o = "",
          children: u,
          ...d
        },
        g,
      ) =>
        M.createElement(
          "svg",
          {
            ref: g,
            ...dm,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: i ? (Number(s) * 24) / Number(l) : s,
            className: ["lucide", `lucide-${mm(e)}`, o].join(" "),
            ...d,
          },
          [
            ...t.map(([h, p]) => M.createElement(h, p)),
            ...(Array.isArray(u) ? u : [u]),
          ],
        ),
    );
    return ((n.displayName = `${e}`), n);
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const io = E("Activity", [
  ["path", { d: "M22 12h-4l-3 9L9 3l-3 9H2", key: "d5dnw9" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fm = E("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dn = E("AlertTriangle", [
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
 */ const pm = E("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hm = E("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gm = E("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xm = E("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vm = E("BarChart2", [
  ["line", { x1: "18", x2: "18", y1: "20", y2: "10", key: "1xfpm4" }],
  ["line", { x1: "12", x2: "12", y1: "20", y2: "4", key: "be30l9" }],
  ["line", { x1: "6", x2: "6", y1: "20", y2: "14", key: "1r4le6" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ym = E("BarChart3", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nm = E("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wm = E("BookOpen", [
  ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" }],
  ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tc = E("Bot", [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  [
    "rect",
    { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" },
  ],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qa = E("Building2", [
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
 */ const oo = E("Calendar", [
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
 */ const Ct = E("CheckCircle2", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const km = E("CheckSquare", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  [
    "path",
    {
      d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",
      key: "1jnkn4",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jm = E("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cm = E("CircleUser", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  [
    "path",
    { d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662", key: "154egf" },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ts = E("ClipboardCheck", [
  [
    "rect",
    {
      width: "8",
      height: "4",
      x: "8",
      y: "2",
      rx: "1",
      ry: "1",
      key: "tgr4d6",
    },
  ],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196",
    },
  ],
  ["path", { d: "m9 14 2 2 4-4", key: "df797q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ga = E("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sm = E("EyeOff", [
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
 */ const bm = E("Eye", [
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
 */ const Dm = E("FileSearch", [
  [
    "path",
    { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3", key: "1vg67v" },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["circle", { cx: "5", cy: "14", r: "3", key: "ufru5t" }],
  ["path", { d: "m9 18-1.5-1.5", key: "1j6qii" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Za = E("FileText", [
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
 */ const ul = E("FlaskConical", [
  [
    "path",
    {
      d: "M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",
      key: "pzvekw",
    },
  ],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }],
  ["path", { d: "M7 16h10", key: "wp8him" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lm = E("GitCompareArrows", [
  ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
  ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7", key: "1yj91y" }],
  ["path", { d: "m15 9-3-3 3-3", key: "1lwv8l" }],
  ["circle", { cx: "19", cy: "18", r: "3", key: "1qljk2" }],
  ["path", { d: "M12 18H7a2 2 0 0 1-2-2V9", key: "16sdep" }],
  ["path", { d: "m9 15 3 3-3 3", key: "1m3kbl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _c = E("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Em = E("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uo = E("Package", [
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
 */ const co = E("Pill", [
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
 */ const Pm = E("Printer", [
  ["polyline", { points: "6 9 6 2 18 2 18 9", key: "1306q4" }],
  [
    "path",
    {
      d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
      key: "143wyd",
    },
  ],
  ["rect", { width: "12", height: "8", x: "6", y: "14", key: "5ipwut" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ac = E("RefreshCw", [
  [
    "path",
    { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" },
  ],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  [
    "path",
    { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" },
  ],
  ["path", { d: "M8 16H3v5", key: "1cv678" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tm = E("Ruler", [
  [
    "path",
    {
      d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",
      key: "icamh8",
    },
  ],
  ["path", { d: "m14.5 12.5 2-2", key: "inckbg" }],
  ["path", { d: "m11.5 9.5 2-2", key: "fmmyf7" }],
  ["path", { d: "m8.5 6.5 2-2", key: "vc6u1g" }],
  ["path", { d: "m17.5 15.5 2-2", key: "wo5hmg" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _m = E("Scale", [
  [
    "path",
    { d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "7g6ntu" },
  ],
  [
    "path",
    { d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "ijws7r" },
  ],
  ["path", { d: "M7 21h10", key: "1b0cd5" }],
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["path", { d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2", key: "3gwbw2" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cl = E("ScanLine", [
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
 */ const Am = E("Settings", [
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
 */ const Mm = E("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const En = E("ShoppingBag", [
  [
    "path",
    { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", key: "hou9p0" },
  ],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zm = E("Sparkles", [
  [
    "path",
    {
      d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
      key: "17u4zn",
    },
  ],
  ["path", { d: "M5 3v4", key: "bklmnn" }],
  ["path", { d: "M19 17v4", key: "iiml17" }],
  ["path", { d: "M3 5h4", key: "nem4j1" }],
  ["path", { d: "M17 19h4", key: "lbex7p" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Im = E("Square", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ka = E("Stethoscope", [
  [
    "path",
    {
      d: "M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",
      key: "1jd90r",
    },
  ],
  ["path", { d: "M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4", key: "126ukv" }],
  ["circle", { cx: "20", cy: "10", r: "2", key: "ts1r5v" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rm = E("TrendingDown", [
  ["polyline", { points: "22 17 13.5 8.5 8.5 13.5 2 7", key: "1r2t7k" }],
  ["polyline", { points: "16 17 22 17 22 11", key: "11uiuu" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mc = E("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bm = E("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hm = E("Weight", [
  ["circle", { cx: "12", cy: "5", r: "3", key: "rqqgnr" }],
  [
    "path",
    {
      d: "M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z",
      key: "56o5sh",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zc = E("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Om = [
    {
      id: "1",
      username: "admin",
      password: "123456",
      employeeId: "A042",
      name: "陳曉明",
      role: "藥劑科",
    },
    {
      id: "2",
      username: "pharmacist01",
      password: "123456",
      employeeId: "B018",
      name: "林藥師",
      role: "藥師",
    },
  ],
  wt = {
    collectedDate: "2026-05-06",
    bsa: 1.85,
    cycle: 3,
    portStatus: "good",
    nadirWbc: 3.2,
    groups: [
      {
        groupName: "血液常規",
        items: [
          {
            name: "WBC",
            value: 5.6,
            unit: "K/uL",
            refLow: 4,
            refHigh: 10,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
          {
            name: "ANC",
            value: 2.97,
            unit: "K/uL",
            refLow: 1.8,
            refHigh: 7.5,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
          {
            name: "Hgb",
            value: 12.5,
            unit: "g/dL",
            refLow: 11.5,
            refHigh: 16.5,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
          {
            name: "Platelet",
            value: 210,
            unit: "K/uL",
            refLow: 150,
            refHigh: 400,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
        ],
      },
      {
        groupName: "腎功能",
        items: [
          {
            name: "BUN",
            value: 14,
            unit: "mg/dL",
            refLow: 7,
            refHigh: 23,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
          {
            name: "Cr",
            value: 0.84,
            unit: "mg/dL",
            refLow: 0.6,
            refHigh: 1.2,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
          {
            name: "Ccr",
            value: 83,
            unit: "mL/min",
            refLow: 60,
            refHigh: 120,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
        ],
      },
      {
        groupName: "肝功能",
        items: [
          {
            name: "GOT",
            value: 23,
            unit: "U/L",
            refLow: 10,
            refHigh: 40,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
          {
            name: "GPT",
            value: 20,
            unit: "U/L",
            refLow: 7,
            refHigh: 40,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
          {
            name: "T.Bil",
            value: 0.3,
            unit: "mg/dL",
            refLow: 0.2,
            refHigh: 1.2,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
        ],
      },
      {
        groupName: "感染標記",
        items: [
          {
            name: "HBV",
            value: 0,
            unit: "",
            refLow: 0,
            refHigh: 1,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
          {
            name: "HCV",
            value: 0.09,
            unit: "S/CO",
            refLow: 0,
            refHigh: 1,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
        ],
      },
    ],
  },
  ns = {
    collectedDate: "2026-05-06",
    bsa: 1.73,
    cycle: 2,
    portStatus: "good",
    nadirWbc: 1.85,
    groups: [
      {
        groupName: "血液常規",
        items: [
          {
            name: "WBC",
            value: 3.4,
            unit: "K/uL",
            refLow: 4,
            refHigh: 10,
            flag: "low",
            collectedDate: "2026-05-06",
          },
          {
            name: "ANC",
            value: 1.62,
            unit: "K/uL",
            refLow: 1.8,
            refHigh: 7.5,
            flag: "low",
            collectedDate: "2026-05-06",
          },
          {
            name: "Hgb",
            value: 9.6,
            unit: "g/dL",
            refLow: 13.5,
            refHigh: 17.5,
            flag: "low",
            collectedDate: "2026-05-06",
          },
          {
            name: "Platelet",
            value: 128,
            unit: "K/uL",
            refLow: 150,
            refHigh: 400,
            flag: "low",
            collectedDate: "2026-05-06",
          },
        ],
      },
      {
        groupName: "腎功能",
        items: [
          {
            name: "BUN",
            value: 18,
            unit: "mg/dL",
            refLow: 7,
            refHigh: 23,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
          {
            name: "Cr",
            value: 1.04,
            unit: "mg/dL",
            refLow: 0.6,
            refHigh: 1.2,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
          {
            name: "Ccr",
            value: 62,
            unit: "mL/min",
            refLow: 60,
            refHigh: 120,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
        ],
      },
      {
        groupName: "肝功能",
        items: [
          {
            name: "GOT",
            value: 35,
            unit: "U/L",
            refLow: 10,
            refHigh: 40,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
          {
            name: "GPT",
            value: 31,
            unit: "U/L",
            refLow: 7,
            refHigh: 40,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
          {
            name: "T.Bil",
            value: 0.8,
            unit: "mg/dL",
            refLow: 0.2,
            refHigh: 1.2,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
        ],
      },
      {
        groupName: "感染標記",
        items: [
          {
            name: "HBV",
            value: 0,
            unit: "",
            refLow: 0,
            refHigh: 1,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
          {
            name: "HCV",
            value: 0.07,
            unit: "S/CO",
            refLow: 0,
            refHigh: 1,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
        ],
      },
    ],
  },
  rs = {
    collectedDate: "2026-05-05",
    bsa: 1.78,
    cycle: 4,
    portStatus: "fair",
    nadirWbc: 2.4,
    groups: [
      {
        groupName: "血液常規",
        items: [
          {
            name: "WBC",
            value: 4.2,
            unit: "K/uL",
            refLow: 4,
            refHigh: 10,
            flag: "normal",
            collectedDate: "2026-05-05",
          },
          {
            name: "ANC",
            value: 2.1,
            unit: "K/uL",
            refLow: 1.8,
            refHigh: 7.5,
            flag: "normal",
            collectedDate: "2026-05-05",
          },
          {
            name: "Hgb",
            value: 10.8,
            unit: "g/dL",
            refLow: 11.5,
            refHigh: 16.5,
            flag: "low",
            collectedDate: "2026-05-05",
          },
          {
            name: "Platelet",
            value: 180,
            unit: "K/uL",
            refLow: 150,
            refHigh: 400,
            flag: "normal",
            collectedDate: "2026-05-05",
          },
        ],
      },
      {
        groupName: "腎功能",
        items: [
          {
            name: "BUN",
            value: 22,
            unit: "mg/dL",
            refLow: 7,
            refHigh: 23,
            flag: "normal",
            collectedDate: "2026-05-05",
          },
          {
            name: "Cr",
            value: 1.18,
            unit: "mg/dL",
            refLow: 0.6,
            refHigh: 1.2,
            flag: "normal",
            collectedDate: "2026-05-05",
          },
          {
            name: "Ccr",
            value: 55,
            unit: "mL/min",
            refLow: 60,
            refHigh: 120,
            flag: "low",
            collectedDate: "2026-05-05",
          },
        ],
      },
      {
        groupName: "肝功能",
        items: [
          {
            name: "GOT",
            value: 68,
            unit: "U/L",
            refLow: 10,
            refHigh: 40,
            flag: "high",
            collectedDate: "2026-05-05",
          },
          {
            name: "GPT",
            value: 92,
            unit: "U/L",
            refLow: 7,
            refHigh: 40,
            flag: "high",
            collectedDate: "2026-05-05",
          },
          {
            name: "T.Bil",
            value: 1.8,
            unit: "mg/dL",
            refLow: 0.2,
            refHigh: 1.2,
            flag: "high",
            collectedDate: "2026-05-05",
          },
        ],
      },
      {
        groupName: "感染標記",
        items: [
          {
            name: "HBV",
            value: 0,
            unit: "",
            refLow: 0,
            refHigh: 1,
            flag: "normal",
            collectedDate: "2026-05-05",
          },
          {
            name: "HCV",
            value: 0.12,
            unit: "S/CO",
            refLow: 0,
            refHigh: 1,
            flag: "normal",
            collectedDate: "2026-05-05",
          },
        ],
      },
    ],
  },
  Bt = {
    collectedDate: "2026-05-07",
    bsa: 1.61,
    cycle: 5,
    portStatus: "good",
    nadirWbc: 3.8,
    groups: [
      {
        groupName: "血液常規",
        items: [
          {
            name: "WBC",
            value: 6.1,
            unit: "K/uL",
            refLow: 4,
            refHigh: 10,
            flag: "normal",
            collectedDate: "2026-05-07",
          },
          {
            name: "ANC",
            value: 3.5,
            unit: "K/uL",
            refLow: 1.8,
            refHigh: 7.5,
            flag: "normal",
            collectedDate: "2026-05-07",
          },
          {
            name: "Hgb",
            value: 11.8,
            unit: "g/dL",
            refLow: 11.5,
            refHigh: 16.5,
            flag: "normal",
            collectedDate: "2026-05-07",
          },
          {
            name: "Platelet",
            value: 265,
            unit: "K/uL",
            refLow: 150,
            refHigh: 400,
            flag: "normal",
            collectedDate: "2026-05-07",
          },
        ],
      },
      {
        groupName: "腎功能",
        items: [
          {
            name: "BUN",
            value: 16,
            unit: "mg/dL",
            refLow: 7,
            refHigh: 23,
            flag: "normal",
            collectedDate: "2026-05-07",
          },
          {
            name: "Cr",
            value: 0.72,
            unit: "mg/dL",
            refLow: 0.6,
            refHigh: 1.2,
            flag: "normal",
            collectedDate: "2026-05-07",
          },
          {
            name: "Ccr",
            value: 91,
            unit: "mL/min",
            refLow: 60,
            refHigh: 120,
            flag: "normal",
            collectedDate: "2026-05-07",
          },
        ],
      },
      {
        groupName: "肝功能",
        items: [
          {
            name: "GOT",
            value: 18,
            unit: "U/L",
            refLow: 10,
            refHigh: 40,
            flag: "normal",
            collectedDate: "2026-05-07",
          },
          {
            name: "GPT",
            value: 22,
            unit: "U/L",
            refLow: 7,
            refHigh: 40,
            flag: "normal",
            collectedDate: "2026-05-07",
          },
          {
            name: "T.Bil",
            value: 0.5,
            unit: "mg/dL",
            refLow: 0.2,
            refHigh: 1.2,
            flag: "normal",
            collectedDate: "2026-05-07",
          },
        ],
      },
      {
        groupName: "感染標記",
        items: [
          {
            name: "HBV",
            value: 0,
            unit: "",
            refLow: 0,
            refHigh: 1,
            flag: "normal",
            collectedDate: "2026-05-07",
          },
          {
            name: "HCV",
            value: 0.08,
            unit: "S/CO",
            refLow: 0,
            refHigh: 1,
            flag: "normal",
            collectedDate: "2026-05-07",
          },
        ],
      },
    ],
  },
  Vm = {
    collectedDate: "2026-05-06",
    bsa: 1.92,
    cycle: 1,
    portStatus: "poor",
    nadirWbc: 0.95,
    groups: [
      {
        groupName: "血液常規",
        items: [
          {
            name: "WBC",
            value: 2.1,
            unit: "K/uL",
            refLow: 4,
            refHigh: 10,
            flag: "low",
            collectedDate: "2026-05-06",
          },
          {
            name: "ANC",
            value: 0.8,
            unit: "K/uL",
            refLow: 1.8,
            refHigh: 7.5,
            flag: "low",
            collectedDate: "2026-05-06",
          },
          {
            name: "Hgb",
            value: 7.8,
            unit: "g/dL",
            refLow: 11.5,
            refHigh: 16.5,
            flag: "low",
            collectedDate: "2026-05-06",
          },
          {
            name: "Platelet",
            value: 68,
            unit: "K/uL",
            refLow: 150,
            refHigh: 400,
            flag: "low",
            collectedDate: "2026-05-06",
          },
        ],
      },
      {
        groupName: "腎功能",
        items: [
          {
            name: "BUN",
            value: 34,
            unit: "mg/dL",
            refLow: 7,
            refHigh: 23,
            flag: "high",
            collectedDate: "2026-05-06",
          },
          {
            name: "Cr",
            value: 1.65,
            unit: "mg/dL",
            refLow: 0.6,
            refHigh: 1.2,
            flag: "high",
            collectedDate: "2026-05-06",
          },
          {
            name: "Ccr",
            value: 38,
            unit: "mL/min",
            refLow: 60,
            refHigh: 120,
            flag: "low",
            collectedDate: "2026-05-06",
          },
        ],
      },
      {
        groupName: "肝功能",
        items: [
          {
            name: "GOT",
            value: 25,
            unit: "U/L",
            refLow: 10,
            refHigh: 40,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
          {
            name: "GPT",
            value: 28,
            unit: "U/L",
            refLow: 7,
            refHigh: 40,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
          {
            name: "T.Bil",
            value: 0.6,
            unit: "mg/dL",
            refLow: 0.2,
            refHigh: 1.2,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
        ],
      },
      {
        groupName: "感染標記",
        items: [
          {
            name: "HBV",
            value: 0,
            unit: "",
            refLow: 0,
            refHigh: 1,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
          {
            name: "HCV",
            value: 0.05,
            unit: "S/CO",
            refLow: 0,
            refHigh: 1,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
        ],
      },
    ],
  },
  ls = {
    collectedDate: "2026-05-07",
    bsa: 1.68,
    cycle: 6,
    portStatus: "good",
    nadirWbc: 2.7,
    groups: [
      {
        groupName: "血液常規",
        items: [
          {
            name: "WBC",
            value: 3.8,
            unit: "K/uL",
            refLow: 4,
            refHigh: 10,
            flag: "low",
            collectedDate: "2026-05-07",
          },
          {
            name: "ANC",
            value: 1.95,
            unit: "K/uL",
            refLow: 1.8,
            refHigh: 7.5,
            flag: "normal",
            collectedDate: "2026-05-07",
          },
          {
            name: "Hgb",
            value: 10.2,
            unit: "g/dL",
            refLow: 11.5,
            refHigh: 16.5,
            flag: "low",
            collectedDate: "2026-05-07",
          },
          {
            name: "Platelet",
            value: 195,
            unit: "K/uL",
            refLow: 150,
            refHigh: 400,
            flag: "normal",
            collectedDate: "2026-05-07",
          },
        ],
      },
      {
        groupName: "腎功能",
        items: [
          {
            name: "BUN",
            value: 19,
            unit: "mg/dL",
            refLow: 7,
            refHigh: 23,
            flag: "normal",
            collectedDate: "2026-05-07",
          },
          {
            name: "Cr",
            value: 0.91,
            unit: "mg/dL",
            refLow: 0.6,
            refHigh: 1.2,
            flag: "normal",
            collectedDate: "2026-05-07",
          },
          {
            name: "Ccr",
            value: 74,
            unit: "mL/min",
            refLow: 60,
            refHigh: 120,
            flag: "normal",
            collectedDate: "2026-05-07",
          },
        ],
      },
      {
        groupName: "肝功能",
        items: [
          {
            name: "GOT",
            value: 44,
            unit: "U/L",
            refLow: 10,
            refHigh: 40,
            flag: "high",
            collectedDate: "2026-05-07",
          },
          {
            name: "GPT",
            value: 38,
            unit: "U/L",
            refLow: 7,
            refHigh: 40,
            flag: "normal",
            collectedDate: "2026-05-07",
          },
          {
            name: "T.Bil",
            value: 0.7,
            unit: "mg/dL",
            refLow: 0.2,
            refHigh: 1.2,
            flag: "normal",
            collectedDate: "2026-05-07",
          },
        ],
      },
      {
        groupName: "感染標記",
        items: [
          {
            name: "HBV",
            value: 0,
            unit: "",
            refLow: 0,
            refHigh: 1,
            flag: "normal",
            collectedDate: "2026-05-07",
          },
          {
            name: "HCV",
            value: 0.06,
            unit: "S/CO",
            refLow: 0,
            refHigh: 1,
            flag: "normal",
            collectedDate: "2026-05-07",
          },
        ],
      },
    ],
  },
  Um = {
    collectedDate: "2026-05-06",
    bsa: 1.58,
    cycle: 2,
    portStatus: "good",
    nadirWbc: 2.72,
    groups: [
      {
        groupName: "血液常規",
        items: [
          {
            name: "WBC",
            value: 5.6,
            unit: "K/uL",
            refLow: 4,
            refHigh: 10,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
          {
            name: "ANC",
            value: 2.97,
            unit: "K/uL",
            refLow: 1.8,
            refHigh: 7.5,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
          {
            name: "Hgb",
            value: 10.5,
            unit: "g/dL",
            refLow: 11.5,
            refHigh: 16.5,
            flag: "low",
            collectedDate: "2026-05-06",
          },
          {
            name: "Platelet",
            value: 309,
            unit: "K/uL",
            refLow: 150,
            refHigh: 400,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
        ],
      },
      {
        groupName: "腎功能",
        items: [
          {
            name: "BUN",
            value: 14,
            unit: "mg/dL",
            refLow: 7,
            refHigh: 23,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
          {
            name: "Cr",
            value: 0.84,
            unit: "mg/dL",
            refLow: 0.6,
            refHigh: 1.2,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
          {
            name: "Ccr",
            value: 83,
            unit: "mL/min",
            refLow: 60,
            refHigh: 120,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
        ],
      },
      {
        groupName: "肝功能",
        items: [
          {
            name: "GOT",
            value: 23,
            unit: "U/L",
            refLow: 10,
            refHigh: 40,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
          {
            name: "GPT",
            value: 20,
            unit: "U/L",
            refLow: 7,
            refHigh: 40,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
          {
            name: "T.Bil",
            value: 0.3,
            unit: "mg/dL",
            refLow: 0.2,
            refHigh: 1.2,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
        ],
      },
      {
        groupName: "感染標記",
        items: [
          {
            name: "HBV",
            value: 0,
            unit: "",
            refLow: 0,
            refHigh: 1,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
          {
            name: "HCV",
            value: 0.09,
            unit: "S/CO",
            refLow: 0,
            refHigh: 1,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
        ],
      },
    ],
  },
  Fm = {
    collectedDate: "2026-05-05",
    bsa: 1.88,
    cycle: 4,
    portStatus: "good",
    nadirWbc: 1.42,
    groups: [
      {
        groupName: "血液常規",
        items: [
          {
            name: "WBC",
            value: 2.85,
            unit: "K/uL",
            refLow: 4,
            refHigh: 10,
            flag: "low",
            collectedDate: "2026-05-05",
          },
          {
            name: "ANC",
            value: 1.1,
            unit: "K/uL",
            refLow: 1.8,
            refHigh: 7.5,
            flag: "low",
            collectedDate: "2026-05-05",
          },
          {
            name: "Hgb",
            value: 8.9,
            unit: "g/dL",
            refLow: 13.5,
            refHigh: 17.5,
            flag: "low",
            collectedDate: "2026-05-05",
          },
          {
            name: "Platelet",
            value: 92,
            unit: "K/uL",
            refLow: 150,
            refHigh: 400,
            flag: "low",
            collectedDate: "2026-05-05",
          },
        ],
      },
      {
        groupName: "腎功能",
        items: [
          {
            name: "BUN",
            value: 28,
            unit: "mg/dL",
            refLow: 7,
            refHigh: 23,
            flag: "high",
            collectedDate: "2026-05-05",
          },
          {
            name: "Cr",
            value: 1.45,
            unit: "mg/dL",
            refLow: 0.6,
            refHigh: 1.2,
            flag: "high",
            collectedDate: "2026-05-05",
          },
          {
            name: "Ccr",
            value: 48,
            unit: "mL/min",
            refLow: 60,
            refHigh: 120,
            flag: "low",
            collectedDate: "2026-05-05",
          },
        ],
      },
      {
        groupName: "肝功能",
        items: [
          {
            name: "GOT",
            value: 31,
            unit: "U/L",
            refLow: 10,
            refHigh: 40,
            flag: "normal",
            collectedDate: "2026-05-05",
          },
          {
            name: "GPT",
            value: 27,
            unit: "U/L",
            refLow: 7,
            refHigh: 40,
            flag: "normal",
            collectedDate: "2026-05-05",
          },
          {
            name: "T.Bil",
            value: 0.4,
            unit: "mg/dL",
            refLow: 0.2,
            refHigh: 1.2,
            flag: "normal",
            collectedDate: "2026-05-05",
          },
        ],
      },
      {
        groupName: "感染標記",
        items: [
          {
            name: "HBV",
            value: 0,
            unit: "",
            refLow: 0,
            refHigh: 1,
            flag: "normal",
            collectedDate: "2026-05-05",
          },
          {
            name: "HCV",
            value: 0.11,
            unit: "S/CO",
            refLow: 0,
            refHigh: 1,
            flag: "normal",
            collectedDate: "2026-05-05",
          },
        ],
      },
    ],
  },
  mo = {
    collectedDate: "2026-05-06",
    bsa: 1.62,
    cycle: 3,
    portStatus: "good",
    nadirWbc: 3.1,
    groups: [
      {
        groupName: "血液常規",
        items: [
          {
            name: "WBC",
            value: 5.2,
            unit: "K/uL",
            refLow: 4,
            refHigh: 10,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
          {
            name: "ANC",
            value: 2.8,
            unit: "K/uL",
            refLow: 1.8,
            refHigh: 7.5,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
          {
            name: "Hgb",
            value: 11.2,
            unit: "g/dL",
            refLow: 11.5,
            refHigh: 16.5,
            flag: "low",
            collectedDate: "2026-05-06",
          },
          {
            name: "Platelet",
            value: 232,
            unit: "K/uL",
            refLow: 150,
            refHigh: 400,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
        ],
      },
      {
        groupName: "腎功能",
        items: [
          {
            name: "BUN",
            value: 15,
            unit: "mg/dL",
            refLow: 7,
            refHigh: 23,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
          {
            name: "Cr",
            value: 0.78,
            unit: "mg/dL",
            refLow: 0.6,
            refHigh: 1.2,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
          {
            name: "Ccr",
            value: 88,
            unit: "mL/min",
            refLow: 60,
            refHigh: 120,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
        ],
      },
      {
        groupName: "肝功能",
        items: [
          {
            name: "GOT",
            value: 20,
            unit: "U/L",
            refLow: 10,
            refHigh: 40,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
          {
            name: "GPT",
            value: 18,
            unit: "U/L",
            refLow: 7,
            refHigh: 40,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
          {
            name: "T.Bil",
            value: 0.4,
            unit: "mg/dL",
            refLow: 0.2,
            refHigh: 1.2,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
        ],
      },
      {
        groupName: "感染標記",
        items: [
          {
            name: "HBV",
            value: 0,
            unit: "",
            refLow: 0,
            refHigh: 1,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
          {
            name: "HCV",
            value: 0.07,
            unit: "S/CO",
            refLow: 0,
            refHigh: 1,
            flag: "normal",
            collectedDate: "2026-05-06",
          },
        ],
      },
    ],
  },
  Xa = [
    {
      id: "R001",
      chartNumber: "D1023456",
      patientName: "王大明",
      height: 172,
      weight: 70,
      birthDate: "1968-06-15",
      department: "腫瘤科",
      admissionNumber: "",
      effectiveDateTime: "2026-05-08 08:15",
      reviewedDateTime: "2026-05-08 07:50",
      diagnosis: "肺腺癌（第三期B）",
      prescribingDoctor: "林俊賢 醫師",
      reviewingDoctor: "張明輝 醫師",
      reviewingPharmacist: "-",
      status: "unexamined",
      chemoAssistantText: `57歲男性，診斷為肺腺癌第三期B，門診接受第一線Carboplatin合併Pemetrexed化學治療。本次療程使用Carboplatin（AUC 5）靜脈輸注，並合併Pemetrexed 500 mg/m² 靜脈輸注，輸注時間≥10分鐘。Carboplatin以NS 250ml稀釋後於Pemetrexed後給予，輸注時間≥30分鐘。

檢驗結果顯示血液常規大致正常，WBC 5.60 K/uL、ANC 2.97 K/uL、Hgb 12.5 g/dL、Platelet 210 K/uL，腎肝功能正常範圍。本療程建議Pemetrexed給藥前補充葉酸及維生素B12以降低毒性，並給予地塞米松預處置。`,
      labData: wt,
      drugs: [
        {
          id: "U001",
          drugCode: "CAR300",
          drugName: "Carboplatin",
          drugNameZh: "卡鉑注射劑",
          dose: "AUC 5",
          route: "IV",
          frequency: "D1 Q3W",
          qty: 1,
          dispenseNote: `1. 取NS 250ml，將藥品溶解後加入輸液袋。
2. 輸注時間≥30分鐘。`,
          dispenseQty: "1 vial",
          storageLocation: "A-04-01",
          checked: !1,
        },
        {
          id: "U002",
          drugCode: "PEM500",
          drugName: "Pemetrexed",
          drugNameZh: "培美曲塞注射劑",
          dose: "500 mg/m²",
          route: "IV",
          frequency: "D1 Q3W",
          qty: 1,
          dispenseNote: `1. 以4.2ml生理食鹽水回溶，搖勻至完全溶解。
2. 再稀釋至100ml NS輸注，輸注時間≥10分鐘。`,
          dispenseQty: "1 vial",
          storageLocation: "A-07-02",
          checked: !1,
        },
      ],
    },
    {
      id: "R002",
      chartNumber: "D2034567",
      patientName: "李美玲",
      height: 160,
      weight: 55,
      birthDate: "1981-03-22",
      department: "血液科",
      admissionNumber: "",
      effectiveDateTime: "2026-05-08 08:30",
      reviewedDateTime: "2026-05-08 08:10",
      diagnosis: "乳癌（ER+/PR+，第二期）",
      prescribingDoctor: "陳建志 醫師",
      reviewingDoctor: "王雅文 醫師",
      reviewingPharmacist: "-",
      status: "unexamined",
      chemoAssistantText: `44歲女性，診斷為乳癌（ER+/PR+ 第二期），門診接受EC方案化學治療，包含Epirubicin 100 mg/m² 及Cyclophosphamide 600 mg/m² 靜脈輸注，並合併Granisetron 3mg止吐前處置。Epirubicin需避光保存，輸注前確認管路暢通；Cyclophosphamide以NS 500ml稀釋，輸注時間60分鐘並注意足量水化。

檢驗結果顯示WBC 3.2 K/uL（輕度偏低），ANC 1.5 K/uL接近臨界值，Platelet 145 K/uL輕度偏低，建議本次給藥後密切追蹤血液常規，並提醒病人注意感染跡象。`,
      labData: ns,
      drugs: [
        {
          id: "U003",
          drugCode: "EPI100",
          drugName: "Epirubicin",
          drugNameZh: "表柔比星注射劑",
          dose: "100 mg/m²",
          route: "IV",
          frequency: "D1 Q3W",
          qty: 1,
          dispenseNote: `1. 以注射用水稀釋至適當濃度。
2. 避光保存，輸注前確認管路暢通。`,
          dispenseQty: "1 vial",
          storageLocation: "A-01-04",
          checked: !1,
        },
        {
          id: "U004",
          drugCode: "CYC600",
          drugName: "Cyclophosphamide",
          drugNameZh: "環磷醯胺注射劑",
          dose: "600 mg/m²",
          route: "IV",
          frequency: "D1 Q3W",
          qty: 2,
          dispenseNote: `1. 以生理食鹽水稀釋至500ml輸注。
2. 輸注時間60分鐘，注意水化處理。`,
          dispenseQty: "2 vials",
          storageLocation: "A-02-05",
          checked: !1,
        },
        {
          id: "U005",
          drugCode: "GRA003",
          drugName: "Granisetron",
          drugNameZh: "格拉司瓊注射劑",
          dose: "3 mg",
          route: "IV",
          frequency: "PRN",
          qty: 1,
          dispenseNote: "",
          dispenseQty: "1 amp",
          storageLocation: "B-04-02",
          checked: !1,
        },
      ],
    },
    {
      id: "R003",
      chartNumber: "D3045678",
      patientName: "張志偉",
      height: 168,
      weight: 65,
      birthDate: "1964-11-08",
      department: "腫瘤科",
      admissionNumber: "H20260310-003",
      effectiveDateTime: "2026-05-08 08:45",
      reviewedDateTime: "2026-05-08 08:20",
      diagnosis: "瀰漫性大B細胞淋巴瘤（第四期）",
      prescribingDoctor: "張明輝 醫師",
      reviewingDoctor: "林俊賢 醫師",
      reviewingPharmacist: "-",
      status: "unexamined",
      chemoAssistantText: `61歲男性，診斷為瀰漫性大B細胞淋巴瘤（第四期），住院接受R-CHOP方案化學治療，包含Rituximab 375 mg/m²、Cyclophosphamide 750 mg/m²、Doxorubicin 50 mg/m²、Vincristine 1.4 mg/m² 靜脈輸注，合併Prednisolone 100 mg口服D1-5。Rituximab首次輸注需從50 mg/hr低速開始，密切監測輸注反應；Vincristine嚴禁鞘內給藥。

本次為住院治療，AST/ALT輕度偏高，建議持續監測肝功能。Cyclophosphamide注意足量水化，必要時預防性給予美司鈉（Mesna）。`,
      labData: rs,
      drugs: [
        {
          id: "U006",
          drugCode: "RIT375",
          drugName: "Rituximab",
          drugNameZh: "利妥昔單抗注射劑",
          dose: "375 mg/m²",
          route: "IV",
          frequency: "D1 Q3W",
          qty: 1,
          dispenseNote: `1. 以NS稀釋至1-4mg/ml。
2. 首次輸注速率50mg/hr起，每30分鐘增加50mg/hr，最大400mg/hr。
3. 密切監測輸注反應。`,
          dispenseQty: "1 vial",
          storageLocation: "C-04-01",
          checked: !1,
        },
        {
          id: "U007",
          drugCode: "CYC750",
          drugName: "Cyclophosphamide",
          drugNameZh: "環磷醯胺注射劑",
          dose: "750 mg/m²",
          route: "IV",
          frequency: "D1 Q3W",
          qty: 2,
          dispenseNote: "1. 以生理食鹽水稀釋後輸注，輸注時間60分鐘。",
          dispenseQty: "2 vials",
          storageLocation: "A-02-05",
          checked: !1,
        },
        {
          id: "U008",
          drugCode: "DOX050",
          drugName: "Doxorubicin",
          drugNameZh: "多柔比星注射劑",
          dose: "50 mg/m²",
          route: "IV",
          frequency: "D1 Q3W",
          qty: 1,
          dispenseNote: `1. 溶於NS後靜脈推注，時間3-5分鐘。
2. 避光保存。`,
          dispenseQty: "1 vial",
          storageLocation: "A-01-02",
          checked: !1,
        },
        {
          id: "U009",
          drugCode: "VIN140",
          drugName: "Vincristine",
          drugNameZh: "長春新鹼注射劑",
          dose: "1.4 mg/m²",
          route: "IV",
          frequency: "D1 Q3W",
          qty: 1,
          dispenseNote: `1. 嚴禁鞘內給藥。
2. 以NS稀釋後緩慢靜推。`,
          dispenseQty: "1 vial",
          storageLocation: "B-05-03",
          checked: !1,
        },
        {
          id: "U010",
          drugCode: "PRE100",
          drugName: "Prednisolone",
          drugNameZh: "普賴松龍錠",
          dose: "100 mg",
          route: "PO",
          frequency: "QD D1-5",
          qty: 5,
          dispenseNote: "",
          dispenseQty: "5 tabs",
          storageLocation: "B-01-01",
          checked: !1,
        },
      ],
    },
    {
      id: "R004",
      chartNumber: "D4056789",
      patientName: "陳淑芬",
      height: 158,
      weight: 52,
      birthDate: "1974-07-19",
      department: "婦癌科",
      admissionNumber: "",
      effectiveDateTime: "2026-05-08 09:00",
      reviewedDateTime: "2026-05-08 08:40",
      diagnosis: "卵巢癌（第三期C）",
      prescribingDoctor: "劉玉芳 醫師",
      reviewingDoctor: "陳建志 醫師",
      reviewingPharmacist: "-",
      status: "unexamined",
      chemoAssistantText: `51歲女性，診斷為卵巢癌（第三期C），門診接受TC方案化學治療，包含Paclitaxel 175 mg/m²（輸注時間3小時，需使用0.22μm過濾器）及Carboplatin AUC 5靜脈輸注。Paclitaxel前需給予地塞米松、苯海拉明等前處置；Carboplatin於Paclitaxel後以NS 250ml稀釋輸注，時間≥30分鐘。

檢驗結果各項指標均在正常範圍，腎肝功能良好，可依標準劑量給予。建議給藥後監測骨髓抑制情形，並追蹤CA-125腫瘤指標變化。`,
      labData: Bt,
      drugs: [
        {
          id: "U011",
          drugCode: "PAC175",
          drugName: "Paclitaxel",
          drugNameZh: "紫杉醇注射劑",
          dose: "175 mg/m²",
          route: "IV",
          frequency: "D1 Q3W",
          qty: 1,
          dispenseNote: `1. 以5%葡萄糖液或NS稀釋至0.3-1.2mg/ml。
2. 輸注時間3小時，需使用0.22μm過濾器。
3. 輸注前給予前處置藥物（地塞米松、苯海拉明）。`,
          dispenseQty: "1 vial",
          storageLocation: "A-03-02",
          checked: !1,
        },
        {
          id: "U012",
          drugCode: "CAR300",
          drugName: "Carboplatin",
          drugNameZh: "卡鉑注射劑",
          dose: "AUC 5",
          route: "IV",
          frequency: "D1 Q3W",
          qty: 1,
          dispenseNote: `1. 取NS 250ml，將藥品溶解後加入。
2. 輸注時間≥30分鐘，於Paclitaxel後給予。`,
          dispenseQty: "1 vial",
          storageLocation: "A-04-01",
          checked: !1,
        },
      ],
    },
    {
      id: "R005",
      chartNumber: "D5067890",
      patientName: "黃建國",
      height: 175,
      weight: 72,
      birthDate: "1956-02-14",
      department: "泌尿腫瘤科",
      admissionNumber: "H20260310-005",
      effectiveDateTime: "2026-05-08 09:15",
      reviewedDateTime: "2026-05-08 08:55",
      diagnosis: "攝護腺癌（去勢抵抗性，骨轉移）",
      prescribingDoctor: "黃偉明 醫師",
      reviewingDoctor: "吳建華 醫師",
      reviewingPharmacist: "-",
      status: "unexamined",
      chemoAssistantText: `70歲男性，診斷為去勢抵抗性攝護腺癌（骨轉移），住院接受Docetaxel 75 mg/m² 靜脈輸注治療，合併Prednisolone 5 mg口服每日兩次。Docetaxel先以隨附稀釋液混合，再加入NS或D5W至250ml，輸注時間1小時；輸注前需給予地塞米松預處置以降低過敏與液體滯留風險。

檢驗顯示WBC 1.8 K/uL（明顯偏低），ANC 0.5 K/uL（重度骨髓抑制），建議評估是否預防性使用G-CSF，並嚴密監測感染症狀。Hgb 8.2 g/dL，必要時考慮輸血支持。`,
      labData: Vm,
      drugs: [
        {
          id: "U013",
          drugCode: "DOC075",
          drugName: "Docetaxel",
          drugNameZh: "多西他賽注射劑",
          dose: "75 mg/m²",
          route: "IV",
          frequency: "D1 Q3W",
          qty: 1,
          dispenseNote: `1. 先以隨附稀釋液混合，再加入NS或D5W至250ml。
2. 輸注時間1小時，輸注前使用地塞米松預處置。`,
          dispenseQty: "1 vial",
          storageLocation: "A-08-01",
          checked: !1,
        },
        {
          id: "U014",
          drugCode: "PRE005",
          drugName: "Prednisolone",
          drugNameZh: "普賴松龍錠",
          dose: "5 mg",
          route: "PO",
          frequency: "BID",
          qty: 42,
          dispenseNote: "",
          dispenseQty: "42 tabs",
          storageLocation: "B-01-01",
          checked: !1,
        },
      ],
    },
    {
      id: "R006",
      chartNumber: "D6078901",
      patientName: "吳雅惠",
      height: 162,
      weight: 58,
      birthDate: "1988-09-05",
      department: "血液科",
      admissionNumber: "",
      effectiveDateTime: "2026-05-08 09:30",
      reviewedDateTime: "2026-05-08 09:10",
      diagnosis: "急性淋巴性白血病（Ph陽性）",
      prescribingDoctor: "王雅文 醫師",
      reviewingDoctor: "張明輝 醫師",
      reviewingPharmacist: "-",
      status: "unexamined",
      chemoAssistantText: `37歲女性，診斷為Ph陽性急性淋巴性白血病，門診接受Hyper-CVAD部分化療（Cyclophosphamide 300 mg/m² Q12H D1-3、Vincristine D4,11、Doxorubicin 50 mg/m² D4），全程密切水化處置，Cyclophosphamide相關膀胱毒性預防完備。Vincristine嚴格確認非鞘內途徑，Doxorubicin避光保存並確認管路暢通後給藥。

檢驗顯示WBC 3.5 K/uL、ANC 1.6 K/uL（接近臨界值），Platelet 135 K/uL輕度偏低，注意骨髓抑制進展，建議本次給藥後3-7天複查血液常規。`,
      labData: ls,
      drugs: [
        {
          id: "U015",
          drugCode: "CYC300",
          drugName: "Cyclophosphamide",
          drugNameZh: "環磷醯胺注射劑",
          dose: "300 mg/m²",
          route: "IV",
          frequency: "Q12H D1-3",
          qty: 6,
          dispenseNote: `1. 以生理食鹽水稀釋後輸注，輸注時間60分鐘。
2. 注意足量水化處理。`,
          dispenseQty: "6 vials",
          storageLocation: "A-02-05",
          checked: !1,
        },
        {
          id: "U016",
          drugCode: "VIN140",
          drugName: "Vincristine",
          drugNameZh: "長春新鹼注射劑",
          dose: "2 mg",
          route: "IV",
          frequency: "D4,11",
          qty: 2,
          dispenseNote: `1. 嚴禁鞘內給藥。
2. 以NS稀釋後緩慢靜推。`,
          dispenseQty: "2 vials",
          storageLocation: "B-05-03",
          checked: !1,
        },
        {
          id: "U017",
          drugCode: "DOX050",
          drugName: "Doxorubicin",
          drugNameZh: "多柔比星注射劑",
          dose: "50 mg/m²",
          route: "IV",
          frequency: "D4",
          qty: 1,
          dispenseNote: "1. 溶於NS後靜脈推注，時間3-5分鐘，避光保存。",
          dispenseQty: "1 vial",
          storageLocation: "A-01-02",
          checked: !1,
        },
      ],
    },
    {
      id: "R007",
      chartNumber: "D7089012",
      patientName: "林俊宏",
      height: 170,
      weight: 68,
      birthDate: "1971-12-30",
      department: "腫瘤科",
      admissionNumber: "H20260310-007",
      effectiveDateTime: "2026-05-08 09:45",
      reviewedDateTime: "2026-05-08 09:25",
      diagnosis: "胃腺癌（第四期，腹膜轉移）",
      prescribingDoctor: "吳建華 醫師",
      reviewingDoctor: "劉玉芳 醫師",
      reviewingPharmacist: "-",
      status: "unexamined",
      chemoAssistantText: `54歲男性，診斷為胃腺癌（第四期，腹膜轉移），住院接受SOX方案化學治療，包含Oxaliplatin 130 mg/m² 靜脈輸注及S-1（Tegafur）40 mg口服BID D1-14。Oxaliplatin以D5W稀釋（禁用NS），輸注時間2-6小時，治療期間需嚴格避免冷刺激以防加重周圍神經毒性。

腎肝功能正常，血液常規大致正常，可依標準劑量給予。提醒病人S-1口服期間注意黏膜炎及手足症候群，飲食上避免冰冷食物。`,
      labData: wt,
      drugs: [
        {
          id: "U018",
          drugCode: "OXA130",
          drugName: "Oxaliplatin",
          drugNameZh: "奧沙利鉑注射劑",
          dose: "130 mg/m²",
          route: "IV",
          frequency: "D1 Q3W",
          qty: 1,
          dispenseNote: `1. 以D5W稀釋至250-500ml（禁用NS）。
2. 輸注時間2-6小時，避免接觸冷刺激。`,
          dispenseQty: "1 vial",
          storageLocation: "A-05-03",
          checked: !1,
        },
        {
          id: "U019",
          drugCode: "S1_040",
          drugName: "S-1 (Tegafur)",
          drugNameZh: "替吉奧膠囊",
          dose: "40 mg",
          route: "PO",
          frequency: "BID D1-14",
          qty: 28,
          dispenseNote: "",
          dispenseQty: "28 caps",
          storageLocation: "B-06-01",
          checked: !1,
        },
      ],
    },
    {
      id: "R008",
      chartNumber: "D8090123",
      patientName: "劉玉蘭",
      height: 155,
      weight: 48,
      birthDate: "1977-04-12",
      department: "腫瘤科",
      admissionNumber: "",
      effectiveDateTime: "2026-05-08 10:00",
      reviewedDateTime: "2026-05-08 09:40",
      diagnosis: "乳癌（HER2陽性，第三期）",
      prescribingDoctor: "林俊賢 醫師",
      reviewingDoctor: "張明輝 醫師",
      reviewingPharmacist: "陳藥師",
      status: "preparing",
      chemoAssistantText: `49歲女性，診斷為HER2陽性乳癌（第三期），門診接受AC方案化學治療，包含Doxorubicin 60 mg/m²（靜脈推注3-5分鐘，避光保存）及Cyclophosphamide 600 mg/m²（以NS 500ml稀釋，輸注60分鐘），合併Ondansetron止吐前處置。

血液常規顯示WBC 3.2 K/uL、ANC 1.5 K/uL接近臨界值，Platelet 145 K/uL偏低，建議本次備藥完成後通知醫師再次確認是否維持原劑量。Cyclophosphamide輸注後注意水化，降低膀胱毒性風險。`,
      labData: ns,
      drugs: [
        {
          id: "D001",
          drugCode: "DOX050",
          drugName: "Doxorubicin",
          drugNameZh: "多柔比星注射劑",
          dose: "60 mg/m²",
          route: "IV",
          frequency: "D1 Q3W",
          qty: 1,
          dispenseNote: `1. 溶於NS後靜脈推注，時間3-5分鐘。
2. 避光保存。`,
          dispenseQty: "1 vial",
          storageLocation: "A-01-02",
          checked: !1,
        },
        {
          id: "D002",
          drugCode: "CYC600",
          drugName: "Cyclophosphamide",
          drugNameZh: "環磷醯胺注射劑",
          dose: "600 mg/m²",
          route: "IV",
          frequency: "D1 Q3W",
          qty: 2,
          dispenseNote: "1. 以生理食鹽水稀釋至500ml輸注，時間60分鐘。",
          dispenseQty: "2 vials",
          storageLocation: "A-02-05",
          checked: !1,
        },
        {
          id: "D003",
          drugCode: "OND008",
          drugName: "Ondansetron",
          drugNameZh: "昂丹司瓊注射劑",
          dose: "8 mg",
          route: "IV",
          frequency: "PRN",
          qty: 1,
          dispenseNote: "",
          dispenseQty: "1 amp",
          storageLocation: "B-03-01",
          checked: !1,
        },
      ],
    },
    {
      id: "R009",
      chartNumber: "D9101234",
      patientName: "許文雄",
      height: 169,
      weight: 63,
      birthDate: "1962-08-25",
      department: "血液科",
      admissionNumber: "H20260310-009",
      effectiveDateTime: "2026-05-08 10:15",
      reviewedDateTime: "2026-05-08 09:55",
      diagnosis: "多發性骨髓瘤（IgG kappa型）",
      prescribingDoctor: "陳建志 醫師",
      reviewingDoctor: "王雅文 醫師",
      reviewingPharmacist: "林藥師",
      status: "preparing",
      chemoAssistantText: `63歲男性，診斷為IgG kappa型多發性骨髓瘤，住院接受VRd方案治療，包含Bortezomib 1.3 mg/m² 皮下注射（D1,4,8,11，以1.4ml NS回溶，注射部位輪替）、Lenalidomide 25 mg口服QD D1-21，及Dexamethasone 20 mg口服D1,2,4,5,8,9。

各項血液及腎肝功能指標均在正常範圍。Bortezomib皮下注射需留意注射部位反應及周圍神經病變，Lenalidomide需確認血栓預防措施。Dexamethasone口服建議飯後服用，注意血糖監測。`,
      labData: Bt,
      drugs: [
        {
          id: "D004",
          drugCode: "BOR001",
          drugName: "Bortezomib",
          drugNameZh: "硼替佐米注射劑",
          dose: "1.3 mg/m²",
          route: "SC",
          frequency: "D1,4,8,11 Q3W",
          qty: 1,
          dispenseNote: `1. 以1.4ml NS回溶（皮下注射濃度）。
2. 注射部位輪替，避免同一部位重複注射。`,
          dispenseQty: "1 vial",
          storageLocation: "C-01-03",
          checked: !1,
        },
        {
          id: "D005",
          drugCode: "LEN025",
          drugName: "Lenalidomide",
          drugNameZh: "來那度胺膠囊",
          dose: "25 mg",
          route: "PO",
          frequency: "QD D1-21",
          qty: 21,
          dispenseNote: "",
          dispenseQty: "21 caps",
          storageLocation: "C-02-01",
          checked: !1,
        },
        {
          id: "D006",
          drugCode: "DEX020",
          drugName: "Dexamethasone",
          drugNameZh: "地塞米松錠",
          dose: "20 mg",
          route: "PO",
          frequency: "D1,2,4,5,8,9",
          qty: 12,
          dispenseNote: "",
          dispenseQty: "12 tabs",
          storageLocation: "B-01-04",
          checked: !1,
        },
      ],
    },
    {
      id: "R010",
      chartNumber: "D1012345",
      patientName: "蔡美麗",
      height: 157,
      weight: 54,
      birthDate: "1970-01-30",
      department: "婦癌科",
      admissionNumber: "",
      effectiveDateTime: "2026-05-08 10:30",
      reviewedDateTime: "2026-05-08 10:10",
      diagnosis: "子宮頸癌（第二期B）",
      prescribingDoctor: "劉玉芳 醫師",
      reviewingDoctor: "黃偉明 醫師",
      reviewingPharmacist: "陳藥師",
      status: "preparing",
      chemoAssistantText: `56歲女性，診斷為子宮頸癌（第二期B），門診接受TC方案化學治療，包含Paclitaxel 175 mg/m²（以5%葡萄糖液或NS稀釋至0.3-1.2 mg/ml，輸注3小時，需使用0.22μm過濾器）及Carboplatin AUC 5（以NS 250ml稀釋，Paclitaxel後給予，輸注時間≥30分鐘）。

檢驗顯示血紅素9.8 g/dL（偏低），WBC及Platelet正常，腎肝功能輕度偏低。建議Paclitaxel輸注前給予地塞米松、苯海拉明等過敏預處置，並在輸注過程監測生命徵象。`,
      labData: ls,
      drugs: [
        {
          id: "D007",
          drugCode: "PAC175",
          drugName: "Paclitaxel",
          drugNameZh: "紫杉醇注射劑",
          dose: "175 mg/m²",
          route: "IV",
          frequency: "D1 Q3W",
          qty: 1,
          dispenseNote: `1. 以5%葡萄糖液或NS稀釋至0.3-1.2mg/ml。
2. 輸注時間3小時，需使用0.22μm過濾器。`,
          dispenseQty: "1 vial",
          storageLocation: "A-03-02",
          checked: !1,
        },
        {
          id: "D008",
          drugCode: "CAR300",
          drugName: "Carboplatin",
          drugNameZh: "卡鉑注射劑",
          dose: "AUC 5",
          route: "IV",
          frequency: "D1 Q3W",
          qty: 1,
          dispenseNote: `1. 取NS 250ml，將藥品溶解後加入。
2. 輸注時間≥30分鐘，於Paclitaxel後給予。`,
          dispenseQty: "1 vial",
          storageLocation: "A-04-01",
          checked: !1,
        },
      ],
    },
    {
      id: "R011",
      chartNumber: "D1112345",
      patientName: "鄭建明",
      height: 173,
      weight: 71,
      birthDate: "1959-11-08",
      department: "腸胃腫瘤科",
      admissionNumber: "H20260310-011",
      effectiveDateTime: "2026-05-08 10:45",
      reviewedDateTime: "2026-05-08 10:25",
      diagnosis: "大腸直腸癌（第四期，肝轉移）",
      prescribingDoctor: "吳建華 醫師",
      reviewingDoctor: "張淑玲 醫師",
      reviewingPharmacist: "林藥師",
      status: "preparing",
      chemoAssistantText: `66歲男性，診斷為大腸直腸癌（第四期，肝轉移），住院接受FOLFOX + Bevacizumab方案，包含Oxaliplatin 85 mg/m²（以D5W稀釋，禁用NS，輸注2-6小時）、Leucovorin 400 mg/m²、Fluorouracil 2400 mg/m²（持續輸注46小時），合併Bevacizumab 5 mg/kg（以NS稀釋至100ml，首次輸注90分鐘）。

檢驗顯示AST 68 U/L、ALT 52 U/L（明顯偏高），與肝轉移相關，建議評估Bevacizumab輸注前確認傷口癒合狀況及血壓，Oxaliplatin治療後注意周圍神經病變並避免冷刺激。`,
      labData: rs,
      drugs: [
        {
          id: "D009",
          drugCode: "OXA085",
          drugName: "Oxaliplatin",
          drugNameZh: "奧沙利鉑注射劑",
          dose: "85 mg/m²",
          route: "IV",
          frequency: "D1 Q2W",
          qty: 1,
          dispenseNote: `1. 以D5W稀釋至250-500ml（禁用NS）。
2. 輸注時間2-6小時。`,
          dispenseQty: "1 vial",
          storageLocation: "A-05-03",
          checked: !1,
        },
        {
          id: "D010",
          drugCode: "LEU400",
          drugName: "Leucovorin",
          drugNameZh: "甲醯四氫葉酸注射劑",
          dose: "400 mg/m²",
          route: "IV",
          frequency: "D1 Q2W",
          qty: 2,
          dispenseNote: "1. 以NS稀釋後輸注，與5-FU同時輸注。",
          dispenseQty: "2 amps",
          storageLocation: "B-02-02",
          checked: !1,
        },
        {
          id: "D011",
          drugCode: "FU2400",
          drugName: "Fluorouracil",
          drugNameZh: "氟尿嘧啶注射劑",
          dose: "2400 mg/m²",
          route: "IV",
          frequency: "D1-2 Q2W",
          qty: 3,
          dispenseNote: `1. 以NS稀釋後持續輸注46小時（使用輸注泵）。
2. 定期更換輸注管路。`,
          dispenseQty: "3 vials",
          storageLocation: "A-06-01",
          checked: !1,
        },
        {
          id: "D012",
          drugCode: "BEV400",
          drugName: "Bevacizumab",
          drugNameZh: "貝伐珠單抗注射劑",
          dose: "5 mg/kg",
          route: "IV",
          frequency: "D1 Q2W",
          qty: 1,
          dispenseNote: `1. 以NS稀釋至100ml。
2. 首次輸注時間90分鐘，若耐受良好後可縮短至60/30分鐘。
3. 密切監測輸注反應。`,
          dispenseQty: "1 vial",
          storageLocation: "C-03-02",
          checked: !1,
        },
      ],
    },
    {
      id: "R012",
      chartNumber: "D1212345",
      patientName: "趙麗華",
      height: 163,
      weight: 57,
      birthDate: "1983-05-20",
      department: "腫瘤科",
      admissionNumber: "",
      effectiveDateTime: "2026-05-08 07:30",
      reviewedDateTime: "2026-05-08 07:10",
      diagnosis: "乳癌（三陰性，第三期）",
      prescribingDoctor: "林俊賢 醫師",
      reviewingDoctor: "陳建志 醫師",
      reviewingPharmacist: "陳藥師",
      status: "dispense",
      chemoAssistantText: `42歲女性，診斷為三陰性乳癌（第三期），門診接受Gemcitabine合併Carboplatin化學治療。本次療程使用Gemcitabine 1000 mg/m²（以NS稀釋，輸注30分鐘，勿超過60分鐘）及Carboplatin AUC 2（以NS 250ml稀釋，輸注時間≥30分鐘）。本次處方曾手動調整Ccr（83.04 mL/min）及劑量：Gemcitabine由1850 mg調整為1800 mg，Carboplatin因成本考量拆分規格給藥。

檢驗顯示腎肝功能正常，WBC 5.60 K/uL、ANC 2.97 K/uL、Platelet 309 K/uL，血球指標正常，本次可依調整後劑量給藥。`,
      behaviorErrorVideo: "./videos/error01.mp4",
      behaviorErrorTextAry: ["口罩未依標準遮住口鼻", "手套未依標準遮住皮膚"],
      changAry: [
        {
          udmdpnam: "Gemcitabine 1000mg",
          usdate: "2026-05-06",
          ustime: "09:14",
          varrsn: "",
          vardata: "成本考量自動更換為：<br>Gemcitabine 1g/25ml x1 vial",
        },
        {
          udmdpnam: "Carboplatin 150_SP",
          usdate: "2026-05-06",
          ustime: "09:14",
          varrsn: "",
          vardata:
            "成本考量自動更換為：<br>Carboplatin 450_SP 450.0 MG<br>, Carboplatin 150_SP 50.0 MG",
        },
        {
          udmdpnam: "",
          usdate: "2026-05-06",
          ustime: "09:15",
          varrsn: "",
          vardata: "手動修改Ccr，原Ccr = 68.5mL/min，新Ccr = 83.04mL/min",
        },
        {
          udmdpnam: "Carboplatin 150_SP",
          usdate: "2026-05-06",
          ustime: "09:16",
          varrsn: "",
          vardata: "劑量濃度建議：1.667（0.5-99.0mg/ml）建議濃度",
        },
        {
          udmdpnam: "Gemcitabine 1000mg",
          usdate: "2026-05-06",
          ustime: "09:17",
          varrsn: "",
          vardata: "原劑量=1850MG，新劑量=1800MG",
        },
      ],
      labData: Um,
      drugs: [
        {
          id: "E001",
          drugCode: "GEM1000",
          drugName: "Gemcitabine",
          drugNameZh: "吉西他濱注射劑",
          dose: "1000 mg/m²",
          route: "IV",
          frequency: "D1,8 Q3W",
          qty: 1,
          dispenseNote: `1. 以NS稀釋至適當濃度。
2. 輸注時間30分鐘，輸注時間勿超過60分鐘。`,
          dispenseQty: "1 vial",
          storageLocation: "A-09-01",
          checked: !1,
        },
        {
          id: "E002",
          drugCode: "CAR300",
          drugName: "Carboplatin",
          drugNameZh: "卡鉑注射劑",
          dose: "AUC 2",
          route: "IV",
          frequency: "D1,8 Q3W",
          qty: 1,
          dispenseNote: `1. 取NS 250ml，將藥品溶解後加入。
2. 輸注時間≥30分鐘。`,
          dispenseQty: "1 vial",
          storageLocation: "A-04-01",
          checked: !1,
        },
      ],
    },
    {
      id: "R013",
      chartNumber: "D1312345",
      patientName: "楊文凱",
      height: 171,
      weight: 69,
      birthDate: "1967-04-15",
      department: "血液科",
      admissionNumber: "H20260310-013",
      effectiveDateTime: "2026-05-08 07:45",
      reviewedDateTime: "2026-05-08 07:25",
      diagnosis: "急性骨髓性白血病（第四療程）",
      prescribingDoctor: "王雅文 醫師",
      reviewingDoctor: "張明輝 醫師",
      reviewingPharmacist: "林藥師",
      status: "dispense",
      chemoAssistantText: `58歲男性，診斷為急性骨髓性白血病，住院進行第四療程IA方案化學治療，包含Idarubicin 12 mg/m² D1-3（以NS稀釋後靜脈推注5-10分鐘，避光保存，確認管路通暢）及Cytarabine 200 mg/m² D1-7持續輸注（以NS或D5W稀釋，每24小時更換）。本次處方手動修改BSA（1.75 m²），Idarubicin調整為24 mg，Cytarabine調整為360 mg。

因為住院治療，全程需密切監測骨髓抑制、黏膜炎及發燒性嗜中性白血球減少症（FN），維持靜脈管路通暢，並注意配伍禁忌。`,
      behaviorErrorVideo: "./videos/error02.mp4",
      behaviorErrorTextAry: ["沒有消毒藥品瓶口"],
      changAry: [
        {
          udmdpnam: "Idarubicin 10mg",
          usdate: "2026-05-06",
          ustime: "07:30",
          varrsn: "",
          vardata: "原劑量=25.2MG，新劑量=24MG",
        },
        {
          udmdpnam: "Cytarabine 500mg",
          usdate: "2026-05-06",
          ustime: "07:30",
          varrsn: "",
          vardata: "原劑量=370.0MG，新劑量=360MG",
        },
        {
          udmdpnam: "CTC Inj time:",
          usdate: "2026-05-06",
          ustime: "07:31",
          varrsn: "",
          vardata: "2.5",
        },
        {
          udmdpnam: "",
          usdate: "2026-05-06",
          ustime: "07:32",
          varrsn: "",
          vardata: "手動修改BSA，原BSA = 1.80m²，新BSA = 1.75m²",
        },
      ],
      labData: Fm,
      drugs: [
        {
          id: "E003",
          drugCode: "IDA012",
          drugName: "Idarubicin",
          drugNameZh: "伊達比星注射劑",
          dose: "12 mg/m²",
          route: "IV",
          frequency: "D1-3",
          qty: 3,
          dispenseNote: `1. 以NS稀釋後緩慢靜推5-10分鐘。
2. 避光保存，確認管路通暢後給藥。`,
          dispenseQty: "3 vials",
          storageLocation: "A-01-03",
          checked: !1,
        },
        {
          id: "E004",
          drugCode: "ARA200",
          drugName: "Cytarabine",
          drugNameZh: "阿糖胞苷注射劑",
          dose: "200 mg/m²",
          route: "IV",
          frequency: "D1-7 CI",
          qty: 7,
          dispenseNote: `1. 以NS或D5W稀釋後持續輸注24小時。
2. 每日更換配製，注意配伍禁忌。`,
          dispenseQty: "7 vials",
          storageLocation: "A-10-02",
          checked: !1,
        },
      ],
    },
    {
      id: "R014",
      chartNumber: "D1412345",
      patientName: "周淑娟",
      height: 160,
      weight: 53,
      birthDate: "1975-08-11",
      department: "婦癌科",
      admissionNumber: "",
      effectiveDateTime: "2026-05-08 08:00",
      reviewedDateTime: "2026-05-08 07:40",
      diagnosis: "子宮內膜癌（第三期）",
      prescribingDoctor: "劉玉芳 醫師",
      reviewingDoctor: "吳建華 醫師",
      reviewingPharmacist: "陳藥師",
      status: "completed",
      chemoAssistantText: `50歲女性，診斷為子宮內膜癌（第三期），門診接受TC方案化學治療，包含Carboplatin AUC 5（以NS 250ml稀釋，輸注時間≥30分鐘）及Paclitaxel 175 mg/m²（以NS稀釋至適當濃度，輸注時間3小時），藥品調劑完成，秤重核對符合規範。

本次調劑Carboplatin秤重前52.30 g、後103.85 g；Paclitaxel秤重前48.60 g、後97.25 g，均在容許範圍內。腎肝功能及血液常規正常，本療程藥品備齊完成。`,
      labData: mo,
      drugs: [
        {
          id: "F001",
          drugCode: "CAR300",
          drugName: "Carboplatin",
          drugNameZh: "卡鉑注射劑",
          dose: "AUC 5",
          route: "IV",
          frequency: "D1 Q3W",
          qty: 1,
          dispenseNote: `1. 取NS 250ml，將藥品溶解後加入。
2. 輸注時間≥30分鐘。`,
          dispenseQty: "1 vial",
          storageLocation: "A-04-01",
          checked: !0,
          weightBefore: 52.3,
          weightAfter: 103.85,
        },
        {
          id: "F002",
          drugCode: "PAC175",
          drugName: "Paclitaxel",
          drugNameZh: "紫杉醇注射劑",
          dose: "175 mg/m²",
          route: "IV",
          frequency: "D1 Q3W",
          qty: 1,
          dispenseNote: "1. 以NS稀釋至適當濃度，輸注時間3小時。",
          dispenseQty: "1 vial",
          storageLocation: "A-03-02",
          checked: !0,
          weightBefore: 48.6,
          weightAfter: 97.25,
        },
      ],
    },
    {
      id: "R015",
      chartNumber: "D1512345",
      patientName: "謝宗翰",
      height: 174,
      weight: 73,
      birthDate: "1972-03-18",
      department: "腫瘤科",
      admissionNumber: "H20260508-015",
      effectiveDateTime: "2026-05-08 08:10",
      reviewedDateTime: "2026-05-08 07:50",
      diagnosis: "非小細胞肺癌（第三期A，鱗狀細胞癌）",
      prescribingDoctor: "林俊賢 醫師",
      reviewingDoctor: "陳建志 醫師",
      reviewingPharmacist: "林藥師",
      status: "dispense",
      chemoAssistantText: `54歲男性，診斷為非小細胞肺癌（第三期A，鱗狀細胞癌），住院接受Cisplatin合併Vinorelbine化學治療。本次使用Cisplatin 75 mg/m²（以NS 500ml稀釋，輸注1-2小時，前後需充分水化，並預防性給予止吐藥）及Vinorelbine 25 mg/m²（以NS或D5W稀釋至6-8 mg/ml，輸注6-10分鐘，輸注後以100-125ml NS沖洗管路）。本次Cisplatin由142.5 mg調整為140 mg，Vinorelbine由48.3 mg調整為48 mg。

腎肝功能及血球指標正常，可依調整後劑量給藥。Cisplatin治療期間嚴密監測腎功能及電解質，並確保足量水化。`,
      behaviorErrorVideo: "./videos/error03.mp4",
      behaviorErrorTextAry: ["沒有採側向旁插方式針頭套回蓋"],
      changAry: [
        {
          udmdpnam: "Cisplatin 50mg",
          usdate: "2026-05-06",
          ustime: "08:00",
          varrsn: "",
          vardata: "原劑量=142.5MG，新劑量=140MG",
        },
        {
          udmdpnam: "Vinorelbine 50mg",
          usdate: "2026-05-06",
          ustime: "08:01",
          varrsn: "",
          vardata: "原劑量=48.3MG，新劑量=48MG",
        },
        {
          udmdpnam: "CTC Inj nhi:",
          usdate: "2026-05-06",
          ustime: "08:02",
          varrsn: "",
          vardata: "67271",
        },
      ],
      labData: wt,
      drugs: [
        {
          id: "E005",
          drugCode: "CIS075",
          drugName: "Cisplatin",
          drugNameZh: "順鉑注射劑",
          dose: "75 mg/m²",
          route: "IV",
          frequency: "D1 Q3W",
          qty: 1,
          dispenseNote: `1. 以NS 500ml稀釋後輸注，輸注時間1-2小時。
2. 前後需充分水化，並預防性給予止吐藥。`,
          dispenseQty: "1 vial",
          storageLocation: "A-04-03",
          checked: !1,
        },
        {
          id: "E006",
          drugCode: "VNR025",
          drugName: "Vinorelbine",
          drugNameZh: "長春瑞濱注射劑",
          dose: "25 mg/m²",
          route: "IV",
          frequency: "D1,8 Q3W",
          qty: 1,
          dispenseNote: `1. 以NS或D5W稀釋至6-8mg/ml，輸注時間6-10分鐘。
2. 輸注後需以100-125ml NS沖洗管路。`,
          dispenseQty: "1 vial",
          storageLocation: "B-05-04",
          checked: !1,
        },
      ],
    },
    {
      id: "R016",
      chartNumber: "D1612345",
      patientName: "方雅婷",
      height: 159,
      weight: 51,
      birthDate: "1985-07-04",
      department: "血液科",
      admissionNumber: "",
      effectiveDateTime: "2026-05-08 08:25",
      reviewedDateTime: "2026-05-08 08:05",
      diagnosis: "霍奇金淋巴瘤（第二期B）",
      prescribingDoctor: "王雅文 醫師",
      reviewingDoctor: "張明輝 醫師",
      reviewingPharmacist: "陳藥師",
      status: "dispense",
      chemoAssistantText: `40歲女性，診斷為霍奇金淋巴瘤（第二期B），門診接受ABVD方案化學治療，包含Bleomycin 10 U/m²（以50ml NS稀釋後緩慢輸注≥10分鐘，首次給藥需先行皮試）、Etoposide 100 mg/m²（以NS或D5W稀釋至0.2-0.4 mg/ml，輸注時間≥30分鐘）、Doxorubicin 25 mg/m²（溶於NS靜脈推注3-5分鐘，避光保存）及Vincristine 1.4 mg/m²（嚴禁鞘內給藥，以NS稀釋後緩慢靜推）。本次因成本考量Doxorubicin改為50mg規格，Bleomycin、Etoposide、Vincristine均依計算調整劑量。

血液常規顯示WBC 3.8 K/uL輕度偏低，ANC 2.1 K/uL正常，Platelet 130 K/uL輕度偏低，建議給藥後監測骨髓抑制。`,
      behaviorErrorVideo: "./videos/error04.mp4",
      behaviorErrorTextAry: ["針筒內容量沒有低於4/5"],
      changAry: [
        {
          udmdpnam: "Bleomycin 15U",
          usdate: "2026-05-07",
          ustime: "08:10",
          varrsn: "",
          vardata: "原劑量=17.8U，新劑量=16U",
        },
        {
          udmdpnam: "Etoposide 100mg",
          usdate: "2026-05-07",
          ustime: "08:10",
          varrsn: "",
          vardata: "原劑量=178.0MG，新劑量=160MG",
        },
        {
          udmdpnam: "Doxorubicin 10mg",
          usdate: "2026-05-07",
          ustime: "08:11",
          varrsn: "",
          vardata: "成本考量自動更換為：<br>Doxorubicin 50mg x1 vial",
        },
        {
          udmdpnam: "Vincristine 1mg",
          usdate: "2026-05-07",
          ustime: "08:11",
          varrsn: "",
          vardata: "原劑量=2.49MG，新劑量=2.4MG（上限2.4MG）",
        },
        {
          udmdpnam: "",
          usdate: "2026-05-07",
          ustime: "08:12",
          varrsn: "",
          vardata: "手動修改Ccr，原Ccr = 72.1mL/min，新Ccr = 78.5mL/min",
        },
      ],
      labData: ls,
      drugs: [
        {
          id: "E007",
          drugCode: "BLE015",
          drugName: "Bleomycin",
          drugNameZh: "博萊黴素注射劑",
          dose: "10 U/m²",
          route: "IV",
          frequency: "D1,15 Q4W",
          qty: 1,
          dispenseNote: `1. 以50ml NS稀釋後緩慢靜推或輸注，時間10分鐘以上。
2. 首次給藥前需先行皮試。`,
          dispenseQty: "1 vial",
          storageLocation: "C-05-01",
          checked: !1,
        },
        {
          id: "E008",
          drugCode: "ETO100",
          drugName: "Etoposide",
          drugNameZh: "依託泊苷注射劑",
          dose: "100 mg/m²",
          route: "IV",
          frequency: "D1-3 Q4W",
          qty: 3,
          dispenseNote: `1. 以NS或D5W稀釋至0.2-0.4mg/ml，輸注時間≥30分鐘。
2. 快速輸注可能導致低血壓。`,
          dispenseQty: "3 vials",
          storageLocation: "A-11-02",
          checked: !1,
        },
        {
          id: "E009",
          drugCode: "DOX025",
          drugName: "Doxorubicin",
          drugNameZh: "多柔比星注射劑",
          dose: "25 mg/m²",
          route: "IV",
          frequency: "D1,15 Q4W",
          qty: 1,
          dispenseNote: "1. 溶於NS後靜脈推注，時間3-5分鐘，避光保存。",
          dispenseQty: "1 vial",
          storageLocation: "A-01-02",
          checked: !1,
        },
        {
          id: "E010",
          drugCode: "VIN140",
          drugName: "Vincristine",
          drugNameZh: "長春新鹼注射劑",
          dose: "1.4 mg/m²",
          route: "IV",
          frequency: "D1,15 Q4W",
          qty: 1,
          dispenseNote: `1. 嚴禁鞘內給藥。
2. 以NS稀釋後緩慢靜推。`,
          dispenseQty: "1 vial",
          storageLocation: "B-05-03",
          checked: !1,
        },
      ],
    },
    {
      id: "R017",
      chartNumber: "D1712345",
      patientName: "孫啟銘",
      height: 168,
      weight: 66,
      birthDate: "1960-09-22",
      department: "腸胃腫瘤科",
      admissionNumber: "H20260508-017",
      effectiveDateTime: "2026-05-08 08:40",
      reviewedDateTime: "2026-05-08 08:20",
      diagnosis: "肝細胞癌（Child-Pugh A，第三期）",
      prescribingDoctor: "吳建華 醫師",
      reviewingDoctor: "劉玉芳 醫師",
      reviewingPharmacist: "林藥師",
      status: "dispense",
      chemoAssistantText: `65歲男性，診斷為肝細胞癌（Child-Pugh A，第三期），住院接受口服標靶治療，Sorafenib因肝功能異常由400 mg BID減量為200 mg BID口服，本次調配60錠；合併Ondansetron 8 mg IV PRN止吐支持。Child-Pugh評分已由醫師確認修改為A級，Sorafenib劑量已依肝功能異常適當減量。

 AST 68 U/L、ALT 52 U/L偏高（與肝腫瘤相關），建議持續監測肝功能，Sorafenib口服時注意手足症候群及高血壓等副作用，並觀察是否有出血傾向。`,
      behaviorErrorVideo: "./videos/error05.mp4",
      behaviorErrorTextAry: ["移動針筒手部碰觸針筒推桿底部"],
      changAry: [
        {
          udmdpnam: "Sorafenib 200mg",
          usdate: "2026-05-07",
          ustime: "09:05",
          varrsn: "",
          vardata: "劑量調整：原400mg BID，改為200mg BID（肝功能異常減量）",
        },
        {
          udmdpnam: "",
          usdate: "2026-05-07",
          ustime: "09:06",
          varrsn: "",
          vardata: "手動修改Child-Pugh評分，原B，新A（醫師確認後修改）",
        },
      ],
      labData: rs,
      drugs: [
        {
          id: "E011",
          drugCode: "SOR200",
          drugName: "Sorafenib",
          drugNameZh: "索拉非尼錠",
          dose: "400 mg",
          route: "PO",
          frequency: "BID",
          qty: 60,
          dispenseNote: "",
          dispenseQty: "60 tabs",
          storageLocation: "C-06-02",
          checked: !1,
        },
        {
          id: "E012",
          drugCode: "OND008",
          drugName: "Ondansetron",
          drugNameZh: "昂丹司瓊注射劑",
          dose: "8 mg",
          route: "IV",
          frequency: "PRN",
          qty: 2,
          dispenseNote: "",
          dispenseQty: "2 amps",
          storageLocation: "B-03-01",
          checked: !1,
        },
      ],
    },
    {
      id: "R018",
      chartNumber: "D1812345",
      patientName: "洪玉珍",
      height: 156,
      weight: 50,
      birthDate: "1978-12-01",
      department: "婦癌科",
      admissionNumber: "",
      effectiveDateTime: "2026-05-08 08:55",
      reviewedDateTime: "2026-05-08 08:35",
      diagnosis: "卵巢癌（鉑敏感性復發）",
      prescribingDoctor: "劉玉芳 醫師",
      reviewingDoctor: "王雅文 醫師",
      reviewingPharmacist: "陳藥師",
      status: "dispense",
      chemoAssistantText: `47歲女性，診斷為卵巢癌（鉑敏感性復發），門診接受Gemcitabine合併Carboplatin及Bevacizumab化學治療。本次使用Gemcitabine 800 mg/m²（以NS稀釋，輸注30分鐘）、Carboplatin AUC 4（以NS 250ml稀釋，輸注≥30分鐘），合併Bevacizumab 15 mg/kg（以NS稀釋至100ml，首次輸注90分鐘，密切監測輸注反應與血壓）。本次手動調整Ccr（83.04 mL/min），Carboplatin因成本考量拆分規格，Bevacizumab由765 mg調整為750 mg，Gemcitabine由820 mg調整為800 mg。

腎肝功能及血球指標均在正常範圍，可依調整後劑量給藥。Bevacizumab給藥前確認傷口癒合及血壓控制狀況。`,
      behaviorErrorVideo: "./videos/error06.mp4",
      behaviorErrorTextAry: ["藥品抽取動作沒有平行身體"],
      changAry: [
        {
          udmdpnam: "Carboplatin 150_SP",
          usdate: "2026-05-08",
          ustime: "08:40",
          varrsn: "",
          vardata:
            "成本考量自動更換為：<br>Carboplatin 450_SP 450.0 MG<br>, Carboplatin 150_SP 50.0 MG",
        },
        {
          udmdpnam: "",
          usdate: "2026-05-08",
          ustime: "08:41",
          varrsn: "",
          vardata: "手動修改Ccr，原Ccr = 68.5mL/min，新Ccr = 83.04mL/min",
        },
        {
          udmdpnam: "Carboplatin 150_SP",
          usdate: "2026-05-08",
          ustime: "08:41",
          varrsn: "",
          vardata: "劑量濃度建議：1.667（0.5-99.0mg/ml）建議濃度",
        },
        {
          udmdpnam: "Bevacizumab 100mg",
          usdate: "2026-05-08",
          ustime: "08:42",
          varrsn: "",
          vardata: "原劑量=765MG，新劑量=750MG",
        },
        {
          udmdpnam: "Gemcitabine 1000mg",
          usdate: "2026-05-08",
          ustime: "08:42",
          varrsn: "",
          vardata: "原劑量=820MG，新劑量=800MG",
        },
        {
          udmdpnam: "CTC Inj nhi:",
          usdate: "2026-05-08",
          ustime: "08:43",
          varrsn: "",
          vardata: "67271",
        },
      ],
      labData: Bt,
      drugs: [
        {
          id: "E013",
          drugCode: "GEM800",
          drugName: "Gemcitabine",
          drugNameZh: "吉西他濱注射劑",
          dose: "800 mg/m²",
          route: "IV",
          frequency: "D1,8 Q3W",
          qty: 1,
          dispenseNote: "1. 以NS稀釋至適當濃度，輸注時間30分鐘。",
          dispenseQty: "1 vial",
          storageLocation: "A-09-01",
          checked: !1,
        },
        {
          id: "E014",
          drugCode: "CAR400",
          drugName: "Carboplatin",
          drugNameZh: "卡鉑注射劑",
          dose: "AUC 4",
          route: "IV",
          frequency: "D1 Q3W",
          qty: 1,
          dispenseNote: `1. 取NS 250ml，將藥品溶解後加入。
2. 輸注時間≥30分鐘。`,
          dispenseQty: "1 vial",
          storageLocation: "A-04-01",
          checked: !1,
        },
        {
          id: "E015",
          drugCode: "BEV150",
          drugName: "Bevacizumab",
          drugNameZh: "貝伐珠單抗注射劑",
          dose: "15 mg/kg",
          route: "IV",
          frequency: "D1 Q3W",
          qty: 1,
          dispenseNote: `1. 以NS稀釋至100ml，首次輸注時間90分鐘。
2. 密切監測輸注反應與血壓。`,
          dispenseQty: "1 vial",
          storageLocation: "C-03-02",
          checked: !1,
        },
      ],
    },
    {
      id: "R019",
      chartNumber: "D1912345",
      patientName: "江明哲",
      height: 176,
      weight: 74,
      birthDate: "1965-05-30",
      department: "腫瘤科",
      admissionNumber: "H20260508-019",
      effectiveDateTime: "2026-05-08 06:50",
      reviewedDateTime: "2026-05-08 06:30",
      diagnosis: "非小細胞肺癌（第四期，腦轉移）",
      prescribingDoctor: "林俊賢 醫師",
      reviewingDoctor: "張明輝 醫師",
      reviewingPharmacist: "陳藥師",
      status: "shipping",
      chemoAssistantText: `60歲男性，診斷為非小細胞肺癌（第四期，腦轉移），住院接受Pemetrexed合併Carboplatin化學治療。本次Pemetrexed 500 mg/m²（以4.2ml NS回溶後稀釋至100ml NS，輸注時間≥10分鐘）及Carboplatin AUC 5（以NS 250ml稀釋，輸注≥30分鐘）已完成調劑並運送中，藥品秤重核對：Pemetrexed 61.40 g→138.75 g，Carboplatin 52.30 g→106.20 g，均符合規範。

腎肝功能及血球指標正常，建議Pemetrexed給藥前補充葉酸及維生素B12，並給予地塞米松預處置。本次藥品已完成調劑送出。`,
      labData: wt,
      drugs: [
        {
          id: "G001",
          drugCode: "PEM500",
          drugName: "Pemetrexed",
          drugNameZh: "培美曲塞注射劑",
          dose: "500 mg/m²",
          route: "IV",
          frequency: "D1 Q3W",
          qty: 1,
          dispenseNote: `1. 以4.2ml生理食鹽水回溶，再稀釋至100ml NS輸注。
2. 輸注時間≥10分鐘。`,
          dispenseQty: "1 vial",
          storageLocation: "A-07-02",
          checked: !0,
          weightBefore: 61.4,
          weightAfter: 138.75,
        },
        {
          id: "G002",
          drugCode: "CAR300",
          drugName: "Carboplatin",
          drugNameZh: "卡鉑注射劑",
          dose: "AUC 5",
          route: "IV",
          frequency: "D1 Q3W",
          qty: 1,
          dispenseNote: `1. 取NS 250ml，將藥品溶解後加入。
2. 輸注時間≥30分鐘。`,
          dispenseQty: "1 vial",
          storageLocation: "A-04-01",
          checked: !0,
          weightBefore: 52.3,
          weightAfter: 106.2,
        },
      ],
    },
    {
      id: "R020",
      chartNumber: "D2012345",
      patientName: "賴佳穎",
      height: 161,
      weight: 54,
      birthDate: "1989-02-14",
      department: "血液科",
      admissionNumber: "",
      effectiveDateTime: "2026-05-08 07:00",
      reviewedDateTime: "2026-05-08 06:40",
      diagnosis: "急性淋巴性白血病（第二療程維持期）",
      prescribingDoctor: "王雅文 醫師",
      reviewingDoctor: "陳建志 醫師",
      reviewingPharmacist: "林藥師",
      status: "shipping",
      chemoAssistantText: `37歲女性，診斷為急性淋巴性白血病（第二療程維持期），門診接受鞘內注射Methotrexate 15 mg/m²（以不含防腐劑NS稀釋至5ml，嚴格無菌操作）及Dexamethasone 4 mg口服QD D1-7支持治療。藥品調劑完成並已運送：Methotrexate秤重22.10 g→27.45 g，Dexamethasone 18.50 g→46.55 g，均符合規範。

血液常規顯示WBC 3.2 K/uL輕度偏低，ANC 1.5 K/uL接近臨界值，Platelet 145 K/uL偏低，建議鞘內注射後密切監測神經系統症狀，並追蹤血液常規變化。`,
      labData: ns,
      drugs: [
        {
          id: "G003",
          drugCode: "MTX015",
          drugName: "Methotrexate",
          drugNameZh: "甲氨蝶呤注射劑",
          dose: "15 mg/m²",
          route: "IT",
          frequency: "Q4W",
          qty: 1,
          dispenseNote: `1. 以不含防腐劑NS稀釋至5ml，鞘內注射使用。
2. 嚴格無菌操作。`,
          dispenseQty: "1 vial",
          storageLocation: "C-07-01",
          checked: !0,
          weightBefore: 22.1,
          weightAfter: 27.45,
        },
        {
          id: "G004",
          drugCode: "DEX004",
          drugName: "Dexamethasone",
          drugNameZh: "地塞米松錠",
          dose: "4 mg",
          route: "PO",
          frequency: "QD D1-7",
          qty: 7,
          dispenseNote: "",
          dispenseQty: "7 tabs",
          storageLocation: "B-01-04",
          checked: !0,
          weightBefore: 18.5,
          weightAfter: 46.55,
        },
      ],
    },
    {
      id: "R021",
      chartNumber: "D2112345",
      patientName: "馬俊傑",
      height: 172,
      weight: 68,
      birthDate: "1970-08-08",
      department: "腸胃腫瘤科",
      admissionNumber: "H20260508-021",
      effectiveDateTime: "2026-05-08 06:30",
      reviewedDateTime: "2026-05-08 06:10",
      diagnosis: "大腸直腸癌（第三期，術後輔助化療）",
      prescribingDoctor: "吳建華 醫師",
      reviewingDoctor: "劉玉芳 醫師",
      reviewingPharmacist: "陳藥師",
      status: "received",
      chemoAssistantText: `55歲男性，診斷為大腸直腸癌（第三期，術後輔助化療），住院接受XELOX方案，包含Oxaliplatin 85 mg/m²（以D5W稀釋至250-500ml，禁用NS，輸注2-6小時）及Capecitabine 1250 mg/m² 口服BID D1-14（共28錠）。藥品已完成調劑並由護理站簽收，Oxaliplatin秤重34.80 g→98.65 g，Capecitabine 12.30 g→98.45 g，均符合規範。

腎肝功能及血球指標正常，可依標準劑量給藥。Oxaliplatin輸注後提醒病人避免冷刺激，Capecitabine口服需注意手足症候群及黏膜炎。`,
      labData: wt,
      drugs: [
        {
          id: "G005",
          drugCode: "OXA085",
          drugName: "Oxaliplatin",
          drugNameZh: "奧沙利鉑注射劑",
          dose: "85 mg/m²",
          route: "IV",
          frequency: "D1 Q2W",
          qty: 1,
          dispenseNote: `1. 以D5W稀釋至250-500ml（禁用NS）。
2. 輸注時間2-6小時。`,
          dispenseQty: "1 vial",
          storageLocation: "A-05-03",
          checked: !0,
          weightBefore: 34.8,
          weightAfter: 98.65,
        },
        {
          id: "G006",
          drugCode: "CAP150",
          drugName: "Capecitabine",
          drugNameZh: "卡培他濱錠",
          dose: "1250 mg/m²",
          route: "PO",
          frequency: "BID D1-14",
          qty: 28,
          dispenseNote: "",
          dispenseQty: "28 tabs",
          storageLocation: "B-07-01",
          checked: !0,
          weightBefore: 12.3,
          weightAfter: 98.45,
        },
      ],
    },
    {
      id: "R022",
      chartNumber: "D2212345",
      patientName: "潘淑雯",
      height: 162,
      weight: 57,
      birthDate: "1982-11-25",
      department: "腫瘤科",
      admissionNumber: "",
      effectiveDateTime: "2026-05-08 06:45",
      reviewedDateTime: "2026-05-08 06:25",
      diagnosis: "乳癌（HER2陽性，術後輔助）",
      prescribingDoctor: "陳建志 醫師",
      reviewingDoctor: "林俊賢 醫師",
      reviewingPharmacist: "林藥師",
      status: "received",
      chemoAssistantText: `43歲女性，診斷為HER2陽性乳癌（術後輔助治療），門診接受Trastuzumab 6 mg/kg維持劑量靜脈輸注（以NS稀釋至250ml，維持劑量可縮短至30分鐘輸注，密切監測心臟功能）。藥品已完成調劑並由護理站簽收，秤重核對44.20 g→104.60 g，符合規範。

腎肝功能及血球指標均在正常範圍。Trastuzumab長期使用需定期追蹤左心室射出分率（LVEF），若LVEF下降≥10%或低於50%，應考慮暫停治療。本次為維持劑量，無首次輸注反應風險，但仍應備妥緊急處置措施。`,
      labData: Bt,
      drugs: [
        {
          id: "G007",
          drugCode: "TRA440",
          drugName: "Trastuzumab",
          drugNameZh: "曲妥珠單抗注射劑",
          dose: "6 mg/kg",
          route: "IV",
          frequency: "Q3W",
          qty: 1,
          dispenseNote: `1. 以NS稀釋至250ml，首次輸注時間90分鐘，維持劑量可縮短至30分鐘。
2. 密切監測心臟功能。`,
          dispenseQty: "1 vial",
          storageLocation: "C-08-01",
          checked: !0,
          weightBefore: 44.2,
          weightAfter: 104.6,
        },
      ],
    },
    {
      id: "R023",
      chartNumber: "D2312345",
      patientName: "柯建安",
      height: 170,
      weight: 67,
      birthDate: "1958-04-17",
      department: "泌尿腫瘤科",
      admissionNumber: "H20260508-023",
      effectiveDateTime: "2026-05-08 06:00",
      reviewedDateTime: "2026-05-08 05:45",
      diagnosis: "膀胱尿路上皮癌（第三期，根治性切除後）",
      prescribingDoctor: "黃偉明 醫師",
      reviewingDoctor: "吳建華 醫師",
      reviewingPharmacist: "陳藥師",
      status: "administered",
      chemoAssistantText: `67歲男性，診斷為膀胱尿路上皮癌（第三期，根治性切除後），住院接受GC方案輔助化療，包含Gemcitabine 1200 mg/m²（以NS稀釋，輸注30分鐘）及Cisplatin 70 mg/m²（以NS 500ml稀釋，輸注1-2小時，前後水化）。本次藥品均已給藥完成，病人已於12:30離院。藥品秤重核對：Gemcitabine 55.70 g→118.35 g，Cisplatin 38.90 g→88.60 g，均符合規範。

治療過程生命徵象平穩，Cisplatin給藥前後均已完成足量水化。建議持續追蹤腎功能及聽力，並監測遠端轉移狀況。`,
      departureTime: "2026-05-08 12:30",
      labData: wt,
      drugs: [
        {
          id: "G008",
          drugCode: "GEM1200",
          drugName: "Gemcitabine",
          drugNameZh: "吉西他濱注射劑",
          dose: "1200 mg/m²",
          route: "IV",
          frequency: "D1,8 Q3W",
          qty: 1,
          dispenseNote: "1. 以NS稀釋至適當濃度，輸注時間30分鐘。",
          dispenseQty: "1 vial",
          storageLocation: "A-09-01",
          checked: !0,
          weightBefore: 55.7,
          weightAfter: 118.35,
        },
        {
          id: "G009",
          drugCode: "CIS070",
          drugName: "Cisplatin",
          drugNameZh: "順鉑注射劑",
          dose: "70 mg/m²",
          route: "IV",
          frequency: "D1 Q3W",
          qty: 1,
          dispenseNote: "1. 以NS 500ml稀釋，輸注時間1-2小時，前後水化。",
          dispenseQty: "1 vial",
          storageLocation: "A-04-03",
          checked: !0,
          weightBefore: 38.9,
          weightAfter: 88.6,
        },
      ],
    },
    {
      id: "R024",
      chartNumber: "D2412345",
      patientName: "石雅惠",
      height: 158,
      weight: 52,
      birthDate: "1976-06-09",
      department: "婦癌科",
      admissionNumber: "",
      effectiveDateTime: "2026-05-08 06:15",
      reviewedDateTime: "2026-05-08 06:00",
      diagnosis: "子宮頸癌（第一期B，術後放化療）",
      prescribingDoctor: "劉玉芳 醫師",
      reviewingDoctor: "張明輝 醫師",
      reviewingPharmacist: "林藥師",
      status: "administered",
      chemoAssistantText: `49歲女性，診斷為子宮頸癌（第一期B，術後放化療），門診接受每週Cisplatin 40 mg/m²同步放化療方案（共6次，以NS 500ml稀釋，輸注1小時，前後水化）。本次藥品已給藥完成，病人已於11:15離院，秤重核對29.50 g→68.15 g，符合規範。

本療程為每週給藥配合放療，腎肝功能及血球指標正常。Cisplatin同步放化療期間需每週監測腎功能、血液常規及電解質，並注意放射性黏膜炎及腸胃道副作用，確保每次給藥前完成足量水化。`,
      departureTime: "2026-05-08 11:15",
      labData: mo,
      drugs: [
        {
          id: "G010",
          drugCode: "CIS040",
          drugName: "Cisplatin",
          drugNameZh: "順鉑注射劑",
          dose: "40 mg/m²",
          route: "IV",
          frequency: "QW × 6",
          qty: 1,
          dispenseNote: "1. 以NS 500ml稀釋，輸注時間1小時，前後水化。",
          dispenseQty: "1 vial",
          storageLocation: "A-04-03",
          checked: !0,
          weightBefore: 29.5,
          weightAfter: 68.15,
        },
      ],
    },
    {
      id: "R025",
      chartNumber: "D2512345",
      patientName: "林靜宜",
      height: 162,
      weight: 56,
      birthDate: "1979-03-14",
      department: "婦癌科",
      admissionNumber: "",
      effectiveDateTime: "2026-05-08 11:00",
      reviewedDateTime: "2026-05-08 10:40",
      diagnosis: "卵巢癌（第二期，術後輔助）",
      prescribingDoctor: "劉玉芳 醫師",
      reviewingDoctor: "黃偉明 醫師",
      reviewingPharmacist: "陳藥師",
      status: "completed",
      chemoAssistantText: `47歲女性，診斷為卵巢癌（第二期，術後輔助），門診接受TC方案化學治療，包含Paclitaxel 175 mg/m²（輸注3小時，使用0.22μm過濾器）及Carboplatin AUC 5。藥品已完成調劑備妥，尚待上架至藥品領取區。

血液常規及腎肝功能均在正常範圍，可依標準劑量給予。Paclitaxel輸注前給予地塞米松、苯海拉明前處置。`,
      labData: Bt,
      drugs: [
        {
          id: "H001",
          drugCode: "PAC175",
          drugName: "Paclitaxel",
          drugNameZh: "紫杉醇注射劑",
          dose: "175 mg/m²",
          route: "IV",
          frequency: "D1 Q3W",
          qty: 1,
          dispenseNote:
            "1. 以NS稀釋至0.3-1.2mg/ml，輸注3小時，使用0.22μm過濾器。",
          dispenseQty: "1 vial",
          storageLocation: "A-03-02",
          checked: !0,
          weightBefore: 47.2,
          weightAfter: 105.4,
        },
        {
          id: "H002",
          drugCode: "CAR300",
          drugName: "Carboplatin",
          drugNameZh: "卡鉑注射劑",
          dose: "AUC 5",
          route: "IV",
          frequency: "D1 Q3W",
          qty: 1,
          dispenseNote: "1. 取NS 250ml，溶解後加入輸液袋，輸注時間≥30分鐘。",
          dispenseQty: "1 vial",
          storageLocation: "A-04-01",
          checked: !0,
          weightBefore: 51.8,
          weightAfter: 108.3,
        },
      ],
    },
    {
      id: "R026",
      chartNumber: "D2612345",
      patientName: "吳俊豪",
      height: 175,
      weight: 73,
      birthDate: "1966-07-22",
      department: "腫瘤科",
      admissionNumber: "H20260508-026",
      effectiveDateTime: "2026-05-08 11:15",
      reviewedDateTime: "2026-05-08 10:55",
      diagnosis: "非小細胞肺癌（第二期A，鱗狀細胞癌）",
      prescribingDoctor: "林俊賢 醫師",
      reviewingDoctor: "張明輝 醫師",
      reviewingPharmacist: "林藥師",
      status: "completed",
      chemoAssistantText: `59歲男性，診斷為非小細胞肺癌（第二期A，鱗狀細胞癌），住院接受Cisplatin合併Vinorelbine化學治療。藥品已完成調劑，Cisplatin 150 mg及Vinorelbine 50 mg秤重核對均符合規範，尚待上架。

血液常規及腎肝功能正常，Cisplatin給藥前後需確保足量水化，Vinorelbine輸注後以NS沖洗管路，注意避免藥液外滲。`,
      labData: wt,
      drugs: [
        {
          id: "H003",
          drugCode: "CIS075",
          drugName: "Cisplatin",
          drugNameZh: "順鉑注射劑",
          dose: "75 mg/m²",
          route: "IV",
          frequency: "D1 Q3W",
          qty: 1,
          dispenseNote: "1. 以NS 500ml稀釋，輸注1-2小時，前後充分水化。",
          dispenseQty: "1 vial",
          storageLocation: "A-04-03",
          checked: !0,
          weightBefore: 62.1,
          weightAfter: 148.5,
        },
        {
          id: "H004",
          drugCode: "VNR025",
          drugName: "Vinorelbine",
          drugNameZh: "長春瑞濱注射劑",
          dose: "25 mg/m²",
          route: "IV",
          frequency: "D1,8 Q3W",
          qty: 1,
          dispenseNote:
            "1. 以NS或D5W稀釋至6-8mg/ml，輸注6-10分鐘，輸注後以100ml NS沖洗。",
          dispenseQty: "1 vial",
          storageLocation: "B-05-04",
          checked: !0,
          weightBefore: 28.4,
          weightAfter: 64.2,
        },
      ],
    },
    {
      id: "R027",
      chartNumber: "D2712345",
      patientName: "蔡怡君",
      height: 158,
      weight: 53,
      birthDate: "1984-10-05",
      department: "血液科",
      admissionNumber: "",
      effectiveDateTime: "2026-05-08 11:30",
      reviewedDateTime: "2026-05-08 11:10",
      diagnosis: "霍奇金淋巴瘤（第三期A）",
      prescribingDoctor: "王雅文 醫師",
      reviewingDoctor: "陳建志 醫師",
      reviewingPharmacist: "陳藥師",
      status: "readyForPickup",
      chemoAssistantText: `41歲女性，診斷為霍奇金淋巴瘤（第三期A），門診接受ABVD方案化學治療，藥品已完成調劑並上架至領取區，等待病人領取。

血液常規顯示WBC 4.2 K/uL、ANC 2.3 K/uL正常，Platelet 180 K/uL正常，腎肝功能均在正常範圍。Bleomycin首次給藥需先行皮試，Vincristine嚴禁鞘內給藥，請再次確認給藥途徑。`,
      labData: Bt,
      drugs: [
        {
          id: "H005",
          drugCode: "BLE10U",
          drugName: "Bleomycin",
          drugNameZh: "博萊黴素注射劑",
          dose: "10 U/m²",
          route: "IV",
          frequency: "D1,15 Q4W",
          qty: 1,
          dispenseNote: `1. 以50ml NS稀釋後緩慢輸注≥10分鐘。
2. 首次給藥需皮試。`,
          dispenseQty: "1 vial",
          storageLocation: "C-05-02",
          checked: !0,
          weightBefore: 18.6,
          weightAfter: 38.4,
        },
        {
          id: "H006",
          drugCode: "DOX025",
          drugName: "Doxorubicin",
          drugNameZh: "多柔比星注射劑",
          dose: "25 mg/m²",
          route: "IV",
          frequency: "D1,15 Q4W",
          qty: 1,
          dispenseNote: "1. 溶於NS後靜脈推注3-5分鐘，避光保存。",
          dispenseQty: "1 vial",
          storageLocation: "A-01-02",
          checked: !0,
          weightBefore: 23.1,
          weightAfter: 46.85,
        },
        {
          id: "H007",
          drugCode: "VIN140",
          drugName: "Vincristine",
          drugNameZh: "長春新鹼注射劑",
          dose: "1.4 mg/m²",
          route: "IV",
          frequency: "D1,15 Q4W",
          qty: 1,
          dispenseNote: `1. 嚴禁鞘內給藥。
2. 以NS稀釋後緩慢靜推。`,
          dispenseQty: "1 vial",
          storageLocation: "B-05-03",
          checked: !0,
          weightBefore: 14.2,
          weightAfter: 21.3,
        },
      ],
    },
  ],
  Ic = "/assets/chemo-background-BMjbPoXY.jpg";
function Qm({ onLoginSuccess: e }) {
  const [t, n] = M.useState(""),
    [r, l] = M.useState(""),
    [s, i] = M.useState(!1),
    [o, u] = M.useState(""),
    [d, g] = M.useState(!1),
    h = async (p) => {
      (p.preventDefault(),
        u(""),
        g(!0),
        await new Promise((x) => setTimeout(x, 600)));
      const N = Om.find((x) => x.username === t && x.password === r);
      (N ? e(N) : u("帳號或密碼錯誤，請重新輸入"), g(!1));
    };
  return a.jsxs("div", {
    className: "min-h-screen w-full flex flex-col relative overflow-hidden",
    style: {
      backgroundImage: `url(${Ic})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    children: [
      a.jsx("div", {
        className: "absolute inset-0 bg-white/30 backdrop-blur-[2px]",
      }),
      a.jsxs("header", {
        className: "relative z-10 flex items-center justify-between px-10 py-6",
        children: [
          a.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              a.jsx("div", {
                className:
                  "w-12 h-12 rounded-xl bg-white/70 border border-blue-200/60 flex items-center justify-center shadow-sm backdrop-blur-sm",
                children: a.jsx(ul, { className: "w-6 h-6 text-blue-500" }),
              }),
              a.jsx("span", {
                className:
                  "text-blue-700/70 text-sm font-semibold tracking-widest uppercase",
                children: "Chemo Pharm",
              }),
            ],
          }),
          a.jsxs("div", {
            className: "text-right",
            children: [
              a.jsx("p", {
                className: "text-slate-700 font-semibold text-lg leading-tight",
                children: "台灣醫療中心",
              }),
              a.jsx("p", {
                className: "text-slate-500 text-sm tracking-wider",
                children: "Taiwan Medical Center",
              }),
            ],
          }),
        ],
      }),
      a.jsx("main", {
        className: "relative z-10 flex-1 flex items-center justify-center px-8",
        children: a.jsx("div", {
          className: "w-full max-w-md",
          children: a.jsxs("div", {
            className:
              "bg-white/55 backdrop-blur-xl border border-white/80 rounded-3xl shadow-2xl shadow-blue-200/40 p-10",
            children: [
              a.jsxs("div", {
                className: "mb-8 text-center",
                children: [
                  a.jsx("div", {
                    className:
                      "inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100/80 border border-blue-200/60 mb-5 shadow-sm",
                    children: a.jsx(ul, { className: "w-8 h-8 text-blue-500" }),
                  }),
                  a.jsx("h1", {
                    className: "text-slate-800 text-2xl font-bold mb-1",
                    children: "化療藥局系統",
                  }),
                  a.jsx("p", {
                    className: "text-slate-500 text-sm tracking-wider",
                    children: "Chemotherapy Pharmacy System",
                  }),
                ],
              }),
              a.jsxs("form", {
                onSubmit: h,
                className: "space-y-5",
                children: [
                  a.jsxs("div", {
                    children: [
                      a.jsx("label", {
                        className:
                          "block text-slate-600 text-sm font-medium mb-2 ml-1",
                        children: "帳號 Account",
                      }),
                      a.jsx("input", {
                        type: "text",
                        value: t,
                        onChange: (p) => n(p.target.value),
                        placeholder: "請輸入帳號",
                        className:
                          "w-full bg-white/60 backdrop-blur-sm border border-slate-200/80 rounded-xl text-slate-800 placeholder-slate-400 px-4 py-3 focus:outline-none focus:border-blue-400/70 focus:bg-white/80 transition-all duration-200 text-base",
                        autoComplete: "username",
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("label", {
                        className:
                          "block text-slate-600 text-sm font-medium mb-2 ml-1",
                        children: "密碼 Password",
                      }),
                      a.jsxs("div", {
                        className: "relative",
                        children: [
                          a.jsx("input", {
                            type: s ? "text" : "password",
                            value: r,
                            onChange: (p) => l(p.target.value),
                            placeholder: "請輸入密碼",
                            className:
                              "w-full bg-white/60 backdrop-blur-sm border border-slate-200/80 rounded-xl text-slate-800 placeholder-slate-400 px-4 py-3 pr-12 focus:outline-none focus:border-blue-400/70 focus:bg-white/80 transition-all duration-200 text-base",
                            autoComplete: "current-password",
                          }),
                          a.jsx("button", {
                            type: "button",
                            onClick: () => i(!s),
                            className:
                              "absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors",
                            children: s
                              ? a.jsx(Sm, { className: "w-5 h-5" })
                              : a.jsx(bm, { className: "w-5 h-5" }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  o &&
                    a.jsxs("div", {
                      className:
                        "flex items-center gap-2 bg-red-50/80 border border-red-200 rounded-xl px-4 py-3",
                      children: [
                        a.jsx(fm, {
                          className: "w-4 h-4 text-red-500 flex-shrink-0",
                        }),
                        a.jsx("span", {
                          className: "text-red-600 text-sm",
                          children: o,
                        }),
                      ],
                    }),
                  a.jsx("button", {
                    type: "submit",
                    disabled: d || !t || !r,
                    className: `w-full py-4 mt-2 rounded-xl font-semibold text-base
                           bg-blue-500/80 hover:bg-blue-500/90
                           backdrop-blur-sm
                           border border-blue-400/50
                           text-white
                           shadow-[0_4px_20px_rgba(59,130,246,0.35),inset_0_1px_0_rgba(255,255,255,0.25)]
                           hover:shadow-[0_6px_28px_rgba(59,130,246,0.5),inset_0_1px_0_rgba(255,255,255,0.3)]
                           active:scale-[0.98]
                           transition-all duration-200
                           disabled:opacity-50 disabled:cursor-not-allowed`,
                    children: d
                      ? a.jsxs("span", {
                          className: "flex items-center justify-center gap-2",
                          children: [
                            a.jsxs("svg", {
                              className: "animate-spin w-4 h-4",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              children: [
                                a.jsx("circle", {
                                  className: "opacity-25",
                                  cx: "12",
                                  cy: "12",
                                  r: "10",
                                  stroke: "currentColor",
                                  strokeWidth: "4",
                                }),
                                a.jsx("path", {
                                  className: "opacity-75",
                                  fill: "currentColor",
                                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z",
                                }),
                              ],
                            }),
                            "驗證中...",
                          ],
                        })
                      : "登入系統",
                  }),
                ],
              }),
              a.jsx("div", {
                className: "mt-6 pt-6 border-t border-slate-200/60 text-center",
                children: a.jsx("p", {
                  className: "text-slate-400 text-xs",
                  children: "測試帳號：admin / 123456",
                }),
              }),
            ],
          }),
        }),
      }),
      a.jsx("footer", {
        className: "relative z-10 py-5 text-center",
        children: a.jsx("p", {
          className: "text-slate-400/70 text-xs tracking-wider",
          children:
            "化療藥局資訊管理系統  ·  Chemotherapy Pharmacy Information System  ·  v1.0.0",
        }),
      }),
    ],
  });
}
const Wm = [
  { key: "dispense", labelZh: "調劑排程", labelEn: "DISPENSE" },
  { key: "information", labelZh: "審核資訊", labelEn: "INFORMATION" },
  { key: "inventory", labelZh: "庫存管理", labelEn: "INVENTORY" },
  { key: "setting", labelZh: "系統設定", labelEn: "SETTING" },
];
function $m({ activeTab: e, onTabChange: t, currentUser: n, onLogout: r }) {
  return a.jsx("header", {
    className:
      "w-full bg-white/65 backdrop-blur-xl py-2 border-b border-white/80 shadow-sm shadow-blue-100/40",
    children: a.jsxs("div", {
      className: "flex items-center h-16 px-6 gap-4",
      children: [
        a.jsx("nav", {
          className: "flex-1 flex items-center justify-center gap-2",
          children: Wm.map((l) =>
            a.jsxs(
              "button",
              {
                onClick: () => t(l.key),
                className: `
                relative px-5 py-2.5 rounded-xl text-sm font-semibold tracking-wide
                transition-all duration-200 cursor-pointer select-none
                ${e === l.key ? "text-black" : "text-gray-500"}
              `,
                children: [
                  a.jsx("span", {
                    className: "block text-lg font-extrabold leading-tight",
                    children: l.labelZh,
                  }),
                  a.jsx("span", {
                    className:
                      "block text-xs font-bold tracking-widest opacity-60",
                    children: l.labelEn,
                  }),
                ],
              },
              l.key,
            ),
          ),
        }),
        a.jsxs("div", {
          className: "flex items-center gap-3 flex-shrink-0 justify-end",
          children: [
            a.jsxs("div", {
              className:
                "flex items-center gap-2.5 bg-white/60 border border-slate-200/70 rounded-xl px-3 py-2 shadow-sm",
              children: [
                a.jsx(Cm, { className: "w-6 h-6 text-blue-400 flex-shrink-0" }),
                a.jsx("div", {
                  className: "w-px h-5 bg-slate-200/80 flex-shrink-0",
                }),
                a.jsxs("div", {
                  children: [
                    a.jsx("p", {
                      className:
                        "text-slate-800 text-sm font-semibold leading-tight",
                      children: n.name,
                    }),
                    a.jsx("p", {
                      className: "text-slate-400 text-[11px] leading-tight",
                      children: n.role,
                    }),
                  ],
                }),
              ],
            }),
            a.jsx("button", {
              onClick: r,
              title: "登出",
              className: `w-9 h-9 flex items-center justify-center rounded-xl
                       bg-white/60 border border-slate-200/70 shadow-sm
                       text-slate-400 hover:text-slate-600 hover:bg-white/80
                       transition-all duration-200 active:scale-95`,
              children: a.jsx(_c, { className: "w-4 h-4" }),
            }),
          ],
        }),
      ],
    }),
  });
}
const qm = {
  unexamined: {
    bg: "bg-slate-100/70 hover:bg-slate-50/90",
    numColor: "text-slate-700",
    labelColor: "text-slate-800",
    subColor: "text-slate-400",
    ringColor: "ring-slate-400/40",
    accentBar: "bg-slate-400",
  },
  preparing: {
    bg: "bg-amber-50/70 hover:bg-amber-50/90",
    numColor: "text-amber-600",
    labelColor: "text-amber-800",
    subColor: "text-amber-400",
    ringColor: "ring-amber-400/40",
    accentBar: "bg-amber-400",
  },
  dispense: {
    bg: "bg-blue-50/70 hover:bg-blue-50/90",
    numColor: "text-blue-600",
    labelColor: "text-blue-800",
    subColor: "text-blue-400",
    ringColor: "ring-blue-400/40",
    accentBar: "bg-blue-400",
  },
  completed: {
    bg: "bg-emerald-50/70 hover:bg-emerald-50/90",
    numColor: "text-emerald-600",
    labelColor: "text-emerald-800",
    subColor: "text-emerald-400",
    ringColor: "ring-emerald-400/40",
    accentBar: "bg-emerald-400",
  },
  readyForPickup: {
    bg: "bg-teal-50/70 hover:bg-teal-50/90",
    numColor: "text-teal-600",
    labelColor: "text-teal-800",
    subColor: "text-teal-400",
    ringColor: "ring-teal-400/40",
    accentBar: "bg-teal-400",
  },
  shipping: {
    bg: "bg-sky-50/70 hover:bg-sky-50/90",
    numColor: "text-sky-600",
    labelColor: "text-sky-800",
    subColor: "text-sky-400",
    ringColor: "ring-sky-400/40",
    accentBar: "bg-sky-400",
  },
  received: {
    bg: "bg-slate-100/70 hover:bg-slate-50/90",
    numColor: "text-slate-600",
    labelColor: "text-slate-800",
    subColor: "text-slate-400",
    ringColor: "ring-slate-400/40",
    accentBar: "bg-slate-400",
  },
  administered: {
    bg: "bg-slate-100/70 hover:bg-slate-50/90",
    numColor: "text-slate-600",
    labelColor: "text-slate-800",
    subColor: "text-slate-400",
    ringColor: "ring-slate-400/40",
    accentBar: "bg-slate-400",
  },
};
function Gm({ stats: e, activeStatus: t, onSelect: n }) {
  return a.jsx("div", {
    className: "grid grid-cols-4 gap-5 p-3",
    children: e.map((r) => {
      const l = qm[r.status],
        s = t === r.status;
      return a.jsxs(
        "button",
        {
          onClick: () => n(r.status),
          className: `
              relative overflow-hidden
              ${l.bg}
              backdrop-blur-md
              border border-white/70
              rounded-2xl p-3
              flex flex-col items-center justify-center gap-3
              cursor-pointer select-none
              transition-all duration-300 ease-out
              hover:scale-[1.03] hover:shadow-xl hover:shadow-blue-100/40
              active:scale-[0.98]
              min-h-[160px]
              shadow-md shadow-slate-200/40
              ${s ? `ring-2 ${l.ringColor} shadow-xl scale-[1.02]` : ""}
            `,
          children: [
            a.jsx("div", {
              className: "absolute top-0 left-0 right-0 h-0.5",
              children: a.jsx("div", {
                className: `h-full w-full ${l.accentBar} opacity-50`,
              }),
            }),
            a.jsx("div", {
              className: "absolute top-0 left-0 right-0 h-px bg-white/80",
            }),
            a.jsx("span", {
              className: `text-6xl font-extrabold tabular-nums ${l.numColor}`,
              children: r.count,
            }),
            a.jsx("div", {
              className: `w-[60%] h-[2px] background-black my-8 ${l.accentBar} opacity-40`,
            }),
            a.jsxs("div", {
              className: "text-center",
              children: [
                a.jsx("p", {
                  className: `text-2xl font-semibold leading-tight ${l.labelColor}`,
                  children: r.labelZh,
                }),
                a.jsx("p", {
                  className: `text-sm tracking-widest mt-0.5 ${l.subColor}`,
                  children: r.labelEn,
                }),
              ],
            }),
            s &&
              a.jsxs("div", {
                className:
                  "absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1",
                children: [
                  a.jsx("div", {
                    className: `w-1 h-1 rounded-full ${l.accentBar} opacity-50`,
                  }),
                  a.jsx("div", {
                    className: `w-5 h-1 rounded-full ${l.accentBar} opacity-80`,
                  }),
                  a.jsx("div", {
                    className: `w-1 h-1 rounded-full ${l.accentBar} opacity-50`,
                  }),
                ],
              }),
          ],
        },
        r.status,
      );
    }),
  });
}
function Zm({ drugs: e, checkable: t = !1, onToggle: n, plainView: r = !1 }) {
  return e.length === 0
    ? a.jsx("div", {
        className: "flex items-center justify-center py-12",
        children: a.jsx("p", {
          className: "text-slate-400 text-sm",
          children: "無藥品資料",
        }),
      })
    : a.jsx("div", {
        className: "flex-1 overflow-y-auto scrollbar-thin",
        children: e.map((l) =>
          a.jsxs(
            "div",
            {
              className: `flex items-start gap-3 px-4 py-3 border-b border-slate-100 last:border-0 transition-colors duration-150 ${!r && l.checked ? "bg-emerald-50/50" : "hover:bg-slate-50/60"}`,
              children: [
                t &&
                  n &&
                  a.jsx("button", {
                    onClick: () => n(l.id),
                    className:
                      "flex-shrink-0 text-slate-300 hover:text-emerald-500 transition-colors mt-0.5",
                    children: l.checked
                      ? a.jsx(km, { className: "w-5 h-5 text-emerald-500" })
                      : a.jsx(Im, { className: "w-5 h-5" }),
                  }),
                a.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [
                    a.jsxs("div", {
                      className: "flex items-start justify-between gap-3",
                      children: [
                        a.jsxs("div", {
                          className: "min-w-0",
                          children: [
                            a.jsx("span", {
                              className: `text-base font-semibold leading-snug ${!r && l.checked ? "text-slate-400 line-through" : "text-slate-800"}`,
                              children: l.drugName,
                            }),
                            a.jsx("span", {
                              className: "text-base text-slate-500 ml-1.5",
                              children: l.drugNameZh,
                            }),
                            a.jsxs("span", {
                              className:
                                "text-base font-mono text-slate-400 ml-1.5",
                              children: ["(", l.drugCode, ")"],
                            }),
                          ],
                        }),
                        a.jsx("div", {
                          className: "flex-shrink-0 flex flex-col items-end",
                          children: a.jsxs("span", {
                            className: `text-2xl flex items-end gap-1 font-bold leading-none px-3 py-2 rounded-lg ${l.checked ? "text-slate-400 bg-slate-100" : "text-slate-700 bg-slate-100"}`,
                            children: [
                              a.jsx("span", {
                                className:
                                  "text-sm text-slate-400 leading-none mb-0.5",
                                children: "發藥數量",
                              }),
                              a.jsx("span", { children: l.dispenseQty }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className:
                        "flex items-center justify-between gap-3 mt-1.5",
                      children: [
                        a.jsxs("div", {
                          className: "flex items-center gap-2 flex-wrap",
                          children: [
                            a.jsxs("span", {
                              className: "flex items-center gap-1",
                              children: [
                                a.jsx("span", {
                                  className: "text-base text-slate-400",
                                  children: "劑量",
                                }),
                                a.jsx("span", {
                                  className:
                                    "text-base font-semibold text-slate-700",
                                  children: l.dose,
                                }),
                              ],
                            }),
                            a.jsx("span", {
                              className: "text-slate-200 text-base",
                              children: "·",
                            }),
                            a.jsxs("span", {
                              className: "flex items-center gap-1",
                              children: [
                                a.jsx("span", {
                                  className: "text-base text-slate-400",
                                  children: "途徑",
                                }),
                                a.jsx("span", {
                                  className:
                                    "text-base font-medium text-sky-700",
                                  children: l.route,
                                }),
                              ],
                            }),
                            a.jsx("span", {
                              className: "text-slate-200 text-base",
                              children: "·",
                            }),
                            a.jsxs("span", {
                              className: "flex items-center gap-1",
                              children: [
                                a.jsx("span", {
                                  className: "text-base text-slate-400",
                                  children: "頻次",
                                }),
                                a.jsx("span", {
                                  className:
                                    "text-base font-medium text-slate-700",
                                  children: l.frequency,
                                }),
                              ],
                            }),
                            a.jsx("span", {
                              className: "text-slate-200 text-base",
                              children: "·",
                            }),
                            a.jsxs("span", {
                              className: "flex items-center gap-1",
                              children: [
                                a.jsx("span", {
                                  className: "text-base text-slate-400",
                                  children: "數量",
                                }),
                                a.jsx("span", {
                                  className:
                                    "text-base font-medium text-slate-700",
                                  children: l.qty,
                                }),
                              ],
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          className: "flex gap-1 text-sm items-center",
                          children: [
                            a.jsx("span", {
                              className: "text-slate-400 leading-none mb-0.5",
                              children: "儲位",
                            }),
                            a.jsx("span", {
                              className: "font-mono text-amber-700",
                              children: l.storageLocation,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (l.weightBefore !== void 0 || l.weightAfter !== void 0) &&
                      a.jsxs("div", {
                        className:
                          "mt-2 flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200/70",
                        children: [
                          a.jsx(_m, {
                            className: "w-4 h-4 text-slate-400 flex-shrink-0",
                          }),
                          a.jsx("span", {
                            className: "text-slate-400 text-base",
                            children: "秤重",
                          }),
                          a.jsxs("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                              a.jsx("span", {
                                className: "text-slate-500 text-base",
                                children: "前",
                              }),
                              a.jsx("span", {
                                className:
                                  "text-base font-semibold font-mono text-slate-800",
                                children:
                                  l.weightBefore !== void 0
                                    ? `${l.weightBefore.toFixed(2)} g`
                                    : "—",
                              }),
                            ],
                          }),
                          a.jsx("span", {
                            className: "text-slate-300 text-base",
                            children: "→",
                          }),
                          a.jsxs("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                              a.jsx("span", {
                                className: "text-slate-500 text-base",
                                children: "後",
                              }),
                              a.jsx("span", {
                                className:
                                  "text-base font-semibold font-mono text-slate-800",
                                children:
                                  l.weightAfter !== void 0
                                    ? `${l.weightAfter.toFixed(2)} g`
                                    : "—",
                              }),
                            ],
                          }),
                        ],
                      }),
                    l.dispenseNote &&
                      a.jsxs("div", {
                        className:
                          "mt-2 p-2.5 rounded-lg bg-sky-50/70 border border-sky-200/50",
                        children: [
                          a.jsx("p", {
                            className:
                              "text-slate-400 text-xs font-semibold mb-1",
                            children: "調劑事項",
                          }),
                          a.jsx("p", {
                            className:
                              "text-slate-600 text-sm whitespace-pre-line leading-relaxed",
                            children: l.dispenseNote,
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            },
            l.id,
          ),
        ),
      });
}
function Km({ onClose: e, videoSrc: t, errorTextAry: n }) {
  return a.jsxs("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center",
    children: [
      a.jsx("div", {
        className: "absolute inset-0 bg-slate-900/60 backdrop-blur-sm",
        onClick: e,
      }),
      a.jsxs("div", {
        className:
          "relative z-10 w-full max-w-2xl mx-4 bg-white rounded-3xl shadow-2xl shadow-rose-900/20 overflow-hidden",
        children: [
          a.jsxs("div", {
            className:
              "bg-gradient-to-r from-rose-500 to-red-600 px-6 py-5 flex items-center justify-between",
            children: [
              a.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  a.jsx("div", {
                    className:
                      "w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center",
                    children: a.jsx(dn, { className: "w-5 h-5 text-white" }),
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("h2", {
                        className: "text-white font-bold text-lg leading-tight",
                        children: "行為錯誤警示",
                      }),
                      a.jsx("p", {
                        className: "text-rose-100 text-sm",
                        children: "Behavior Error Alert",
                      }),
                    ],
                  }),
                ],
              }),
              a.jsx("button", {
                onClick: e,
                className:
                  "w-8 h-8 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors duration-150",
                children: a.jsx(zc, { className: "w-4 h-4 text-white" }),
              }),
            ],
          }),
          a.jsx("div", {
            className: "px-6 py-5 border-b border-slate-100",
            children: a.jsxs("div", {
              className: "flex items-center gap-3 py-2 rounded-2xl",
              children: [
                a.jsx(dn, {
                  className: "w-8 h-8 text-rose-500 flex-shrink-0 mt-0.5",
                }),
                n && n.length > 0
                  ? a.jsx("div", {
                      className: "flex flex-wrap gap-2",
                      children: n.map((r, l) =>
                        a.jsx(
                          "span",
                          {
                            className:
                              "inline-flex items-center px-4 py-2 rounded-full bg-rose-100 border border-rose-300/60 text-rose-800 font-medium leading-tight",
                            children: r,
                          },
                          l,
                        ),
                      ),
                    })
                  : a.jsx("p", {
                      className:
                        "text-rose-800 text-base font-medium leading-relaxed",
                      children:
                        "偵測到調劑行為異常，請確認操作流程是否符合標準程序。",
                    }),
              ],
            }),
          }),
          a.jsxs("div", {
            className: "px-6 py-5 border-b border-slate-100",
            children: [
              a.jsx("p", {
                className:
                  "text-slate-500 text-sm font-semibold mb-3 uppercase tracking-wider",
                children: "行為錯誤影片",
              }),
              t
                ? a.jsx("video", {
                    src: t,
                    controls: !0,
                    autoPlay: !0,
                    muted: !0,
                    className:
                      "w-full rounded-2xl bg-slate-900 aspect-video object-contain",
                  })
                : a.jsx("div", {
                    className:
                      "aspect-video w-full rounded-2xl bg-slate-100 border-2 border-dashed border-slate-200 flex items-center justify-center",
                    children: a.jsx("p", {
                      className: "text-slate-400 text-sm",
                      children: "影片尚未提供",
                    }),
                  }),
            ],
          }),
          a.jsx("div", {
            className: "px-6 py-4 flex justify-end",
            children: a.jsxs("button", {
              onClick: e,
              className:
                "flex items-center gap-2 px-8 py-2.5 rounded-xl text-base font-semibold bg-rose-500 text-white shadow-[0_2px_16px_rgba(239,68,68,0.35)] hover:bg-rose-600 hover:shadow-[0_4px_22px_rgba(239,68,68,0.45)] active:scale-[0.97] transition-all duration-200 cursor-pointer",
              children: [a.jsx(Ct, { className: "w-4 h-4" }), "確認知悉"],
            }),
          }),
        ],
      }),
    ],
  });
}
function Xm({ text: e }) {
  const [t, n] = M.useState(""),
    r = M.useRef(0);
  M.useEffect(() => {
    ((r.current = 0), n(""));
    const s = setInterval(() => {
      if (r.current >= e.length) {
        clearInterval(s);
        return;
      }
      (n(e.slice(0, r.current + 1)), r.current++);
    }, 18);
    return () => clearInterval(s);
  }, [e]);
  const l = t.length >= e.length;
  return a.jsxs("p", {
    className:
      "bg-slate-50 rounded-2xl p-5 whitespace-pre-wrap text-base text-slate-700 leading-relaxed",
    children: [
      t,
      !l &&
        a.jsx("span", {
          className:
            "inline-block w-0.5 h-4 ml-0.5 bg-sky-400 align-middle animate-pulse",
        }),
    ],
  });
}
function Ym({ regimen: e, onClose: t }) {
  return a.jsxs("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center",
    children: [
      a.jsx("div", {
        className: "absolute inset-0 bg-slate-900/40 backdrop-blur-sm",
        onClick: t,
      }),
      a.jsxs("div", {
        className:
          "relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col",
        style: { maxHeight: "85vh" },
        children: [
          a.jsxs("div", {
            className:
              "px-5 py-4 flex items-center gap-3 border-b border-slate-100",
            children: [
              a.jsx("div", {
                className:
                  "w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center",
                children: a.jsx(Tc, { className: "w-5 h-5 text-white" }),
              }),
              a.jsxs("div", {
                className: "flex items-center gap-2 flex-1 min-w-0",
                children: [
                  a.jsx("span", {
                    className: "text-slate-800 font-bold text-base",
                    children: "化療助手",
                  }),
                  a.jsxs("div", {
                    className:
                      "flex items-center gap-1 px-2 py-0.5 rounded-full bg-sky-50 border border-sky-200/60",
                    children: [
                      a.jsx(zm, { className: "w-3 h-3 text-sky-500" }),
                      a.jsx("span", {
                        className: "text-sky-600 text-xs font-semibold",
                        children: "AI 生成",
                      }),
                    ],
                  }),
                  a.jsx("span", {
                    className: "text-slate-300 text-sm",
                    children: "·",
                  }),
                  a.jsx("span", {
                    className: "text-slate-500 text-sm font-medium truncate",
                    children: e.patientName,
                  }),
                  a.jsx("span", {
                    className: "text-slate-400 text-sm font-mono",
                    children: e.chartNumber,
                  }),
                ],
              }),
              a.jsx("button", {
                onClick: t,
                className:
                  "w-7 h-7 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-colors duration-150 flex-shrink-0",
                children: a.jsx(zc, { className: "w-4 h-4 text-slate-400" }),
              }),
            ],
          }),
          a.jsx("div", {
            className: "px-5 py-5",
            children: e.chemoAssistantText
              ? a.jsx(Xm, { text: e.chemoAssistantText })
              : a.jsx("p", {
                  className: "text-slate-400 text-sm text-center py-8",
                  children: "此處方尚無 AI 摘要內容",
                }),
          }),
          a.jsx("div", {
            className: "border-t border-slate-100 px-5 py-3",
            children: a.jsx("p", {
              className: "text-slate-400 text-xs leading-relaxed",
              children:
                "本內容由 AI 根據處方資料自動生成，僅供臨床參考，不代表最終臨床決策",
            }),
          }),
        ],
      }),
    ],
  });
}
const fo = {
    good: {
      label: "good",
      className: "text-emerald-700 bg-emerald-50 border-emerald-300/60",
    },
    fair: {
      label: "fair",
      className: "text-amber-700 bg-amber-50 border-amber-300/60",
    },
    poor: {
      label: "poor",
      className: "text-rose-700 bg-rose-50 border-rose-300/60",
    },
  },
  Jm = {
    high: {
      label: "偏高",
      icon: a.jsx(xm, { className: "w-3 h-3" }),
      rowClass: "border-l-2 border-l-rose-400 bg-rose-50/40",
      valueClass: "text-rose-600 font-bold",
      badgeClass: "bg-rose-100 text-rose-700 border border-rose-300/60",
    },
    low: {
      label: "偏低",
      icon: a.jsx(pm, { className: "w-3 h-3" }),
      rowClass: "border-l-2 border-l-amber-400 bg-amber-50/40",
      valueClass: "text-amber-600 font-bold",
      badgeClass: "bg-amber-100 text-amber-700 border border-amber-300/60",
    },
    normal: {
      label: "",
      icon: a.jsx(Em, { className: "w-3 h-3" }),
      rowClass: "",
      valueClass: "text-slate-700",
      badgeClass: "",
    },
  };
function ef(e) {
  return e.groups.reduce(
    (t, n) => t + n.items.filter((r) => r.flag !== "normal").length,
    0,
  );
}
function tf({ item: e }) {
  const t = Jm[e.flag],
    n = e.flag !== "normal";
  return a.jsxs("div", {
    className: `flex items-center gap-0 px-5 py-3.5 border-b border-slate-100 last:border-0 transition-colors duration-150 hover:bg-slate-50/60 ${t.rowClass}`,
    children: [
      a.jsx("div", {
        className: "w-32 flex-shrink-0",
        children: a.jsx("span", {
          className: "text-slate-800 text-base font-semibold",
          children: e.name,
        }),
      }),
      a.jsxs("div", {
        className: "w-44 flex-shrink-0 flex items-baseline gap-1.5",
        children: [
          a.jsx("span", {
            className: `text-base ${t.valueClass}`,
            children: e.value,
          }),
          a.jsx("span", {
            className: "text-slate-400 text-sm",
            children: e.unit,
          }),
        ],
      }),
      a.jsx("div", {
        className: "w-40 flex-shrink-0",
        children: a.jsxs("span", {
          className: "text-slate-500 text-base",
          children: [e.refLow, " — ", e.refHigh],
        }),
      }),
      a.jsx("div", {
        className: "w-28 flex-shrink-0",
        children: n
          ? a.jsxs("span", {
              className: `inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${t.badgeClass}`,
              children: [t.icon, t.label],
            })
          : a.jsx("span", {
              className: "text-slate-300 text-base",
              children: "—",
            }),
      }),
      a.jsx("div", { className: "flex-1" }),
      a.jsx("div", {
        className: "flex-shrink-0",
        children: a.jsx("span", {
          className: "text-slate-400 text-sm font-mono",
          children: e.collectedDate,
        }),
      }),
    ],
  });
}
function nf({ labData: e }) {
  const t = ef(e),
    n = fo[e.portStatus] ?? fo.fair;
  return a.jsxs("div", {
    className: "flex flex-col flex-1 min-h-0 gap-3",
    children: [
      a.jsxs("div", {
        className:
          "glass-card-solid px-5 py-3.5 flex-shrink-0 flex items-center justify-between flex-wrap gap-3",
        children: [
          a.jsxs("div", {
            className: "flex items-center gap-4",
            children: [
              a.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  a.jsx(io, { className: "w-4 h-4 text-teal-500" }),
                  a.jsx("span", {
                    className: "text-slate-800 font-bold text-base",
                    children: "檢驗數值",
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "flex items-center gap-1.5 text-slate-500 text-base",
                children: [
                  a.jsx("span", { children: "採檢日期：" }),
                  a.jsx("span", {
                    className: "font-mono font-semibold text-slate-700",
                    children: e.collectedDate,
                  }),
                ],
              }),
              t > 0
                ? a.jsxs("div", {
                    className:
                      "flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/60",
                    children: [
                      a.jsx(dn, { className: "w-3.5 h-3.5 text-rose-500" }),
                      a.jsxs("span", {
                        className: "text-rose-700 text-sm font-bold",
                        children: [t, " 項異常"],
                      }),
                    ],
                  })
                : a.jsxs("div", {
                    className:
                      "flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60",
                    children: [
                      a.jsx(Ct, { className: "w-3.5 h-3.5 text-emerald-500" }),
                      a.jsx("span", {
                        className: "text-emerald-700 text-sm font-semibold",
                        children: "全部正常",
                      }),
                    ],
                  }),
            ],
          }),
          a.jsxs("div", {
            className: "flex items-center gap-5 text-sm text-slate-500",
            children: [
              a.jsxs("span", {
                children: [
                  "BSA ",
                  a.jsx("span", {
                    className: "text-slate-800 font-bold text-base",
                    children: e.bsa,
                  }),
                  a.jsx("span", {
                    className: "text-slate-400 ml-0.5",
                    children: "m²",
                  }),
                ],
              }),
              a.jsx("span", { className: "w-px h-4 bg-slate-200" }),
              a.jsxs("span", {
                children: [
                  "Cycle ",
                  a.jsx("span", {
                    className: "text-slate-800 font-bold text-base",
                    children: e.cycle,
                  }),
                ],
              }),
              a.jsx("span", { className: "w-px h-4 bg-slate-200" }),
              a.jsxs("span", {
                className: "flex items-center gap-1.5",
                children: [
                  a.jsx(io, { className: "w-3.5 h-3.5 text-slate-400" }),
                  a.jsx("span", { children: "Port-A" }),
                  a.jsx("span", {
                    className: `px-2 py-0.5 rounded-full text-xs font-bold border ${n.className}`,
                    children: n.label,
                  }),
                ],
              }),
              a.jsx("span", { className: "w-px h-4 bg-slate-200" }),
              a.jsxs("span", {
                children: [
                  "Nadir WBC",
                  a.jsx("span", {
                    className: `ml-1.5 font-bold text-base ${e.nadirWbc < 1.8 ? "text-rose-600" : e.nadirWbc < 3 ? "text-amber-600" : "text-slate-800"}`,
                    children: e.nadirWbc,
                  }),
                  a.jsx("span", {
                    className: "text-slate-400 ml-0.5",
                    children: "K/uL",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      a.jsxs("div", {
        className:
          "glass-card-solid flex-1 flex flex-col min-h-0 overflow-hidden",
        children: [
          a.jsxs("div", {
            className:
              "flex items-center gap-0 px-5 py-2.5 border-b border-slate-200/70 flex-shrink-0 bg-slate-50/60",
            children: [
              a.jsx("div", {
                className: "w-32 flex-shrink-0",
                children: a.jsx("span", {
                  className: "text-slate-400 text-sm font-semibold",
                  children: "項目",
                }),
              }),
              a.jsx("div", {
                className: "w-44 flex-shrink-0",
                children: a.jsx("span", {
                  className: "text-slate-400 text-sm font-semibold",
                  children: "數值",
                }),
              }),
              a.jsx("div", {
                className: "w-40 flex-shrink-0",
                children: a.jsx("span", {
                  className: "text-slate-400 text-sm font-semibold",
                  children: "參考範圍",
                }),
              }),
              a.jsx("div", {
                className: "w-28 flex-shrink-0",
                children: a.jsx("span", {
                  className: "text-slate-400 text-sm font-semibold",
                  children: "旗標",
                }),
              }),
              a.jsx("div", { className: "flex-1" }),
              a.jsx("div", {
                className: "flex-shrink-0",
                children: a.jsx("span", {
                  className: "text-slate-400 text-sm font-semibold",
                  children: "採檢日",
                }),
              }),
            ],
          }),
          a.jsx("div", {
            className: "flex-1 overflow-y-auto scrollbar-thin",
            children: e.groups.map((r) => {
              const l = r.items.filter((s) => s.flag !== "normal").length;
              return a.jsxs(
                "div",
                {
                  children: [
                    a.jsxs("div", {
                      className:
                        "flex items-center gap-3 px-5 py-2.5 bg-slate-50/80 border-b border-slate-100 sticky top-0 z-10",
                      children: [
                        a.jsx("span", {
                          className: "text-slate-700 text-sm font-bold",
                          children: r.groupName,
                        }),
                        l > 0 &&
                          a.jsxs("span", {
                            className:
                              "px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 border border-rose-200/60 text-xs font-semibold",
                            children: [l, " 異常"],
                          }),
                      ],
                    }),
                    r.items.map((s) => a.jsx(tf, { item: s }, s.name)),
                  ],
                },
                r.groupName,
              );
            }),
          }),
        ],
      }),
    ],
  });
}
function rf({ changAry: e }) {
  return !e || e.length === 0
    ? a.jsx("div", {
        className: "flex-1 flex items-center justify-center",
        children: a.jsxs("div", {
          className: "glass-card px-10 py-8 text-center",
          children: [
            a.jsx(Lm, { className: "w-8 h-8 text-slate-300 mx-auto mb-3" }),
            a.jsx("p", {
              className: "text-slate-500 text-base font-medium",
              children: "無變異紀錄",
            }),
            a.jsx("p", {
              className: "text-slate-400 text-sm mt-1",
              children: "No variation records",
            }),
          ],
        }),
      })
    : a.jsx("div", {
        className: "flex-1 flex flex-col min-h-0 overflow-hidden",
        children: a.jsxs("div", {
          className: "overflow-y-auto flex-1 px-1",
          children: [
            a.jsxs("div", {
              className:
                "rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-sm",
              children: [
                a.jsxs("div", {
                  className:
                    "grid grid-cols-[140px_1fr_2fr] bg-slate-50 border-b border-slate-200/80 px-5 py-3",
                  children: [
                    a.jsxs("div", {
                      className:
                        "flex items-center gap-1.5 text-slate-500 text-sm font-semibold",
                      children: [
                        a.jsx(Ga, { className: "w-3.5 h-3.5" }),
                        "異動時間",
                      ],
                    }),
                    a.jsxs("div", {
                      className:
                        "flex items-center gap-1.5 text-slate-500 text-sm font-semibold",
                      children: [
                        a.jsx(co, { className: "w-3.5 h-3.5" }),
                        "藥品名稱",
                      ],
                    }),
                    a.jsxs("div", {
                      className:
                        "flex items-center gap-1.5 text-slate-500 text-sm font-semibold",
                      children: [
                        a.jsx(Za, { className: "w-3.5 h-3.5" }),
                        "異變內容",
                      ],
                    }),
                  ],
                }),
                e.map((t, n) => {
                  const r = t.udmdpnam.trim() !== "";
                  return a.jsxs(
                    "div",
                    {
                      className: `grid grid-cols-[140px_1fr_2fr] px-5 py-3.5 border-b border-slate-100 last:border-0 transition-colors duration-100 hover:bg-slate-50/70 ${n % 2 === 0 ? "bg-white" : "bg-slate-50/30"}`,
                      children: [
                        a.jsxs("div", {
                          className: "flex items-start gap-2",
                          children: [
                            a.jsx("span", {
                              className:
                                "font-mono text-sm text-slate-600 tabular-nums",
                              children: t.usdate,
                            }),
                            a.jsx("span", {
                              className:
                                "font-mono text-sm text-slate-400 tabular-nums flex-shrink-0",
                              children: t.ustime,
                            }),
                          ],
                        }),
                        a.jsx("div", {
                          className: "pr-4",
                          children: r
                            ? a.jsxs("span", {
                                className:
                                  "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-sky-50 border border-sky-200/60 text-sky-700 text-sm font-medium",
                                children: [
                                  a.jsx(co, { className: "w-3 h-3" }),
                                  t.udmdpnam,
                                ],
                              })
                            : a.jsx("span", {
                                className: "text-slate-400 text-sm italic",
                                children: "系統異動",
                              }),
                        }),
                        a.jsx("div", {
                          className: "text-slate-700 text-sm leading-relaxed",
                          children: t.vardata
                            .split("<br>")
                            .map((l, s) =>
                              a.jsxs(
                                "span",
                                {
                                  children: [
                                    s > 0 && a.jsx("br", {}),
                                    l.replace(/^,\s*/, ""),
                                  ],
                                },
                                s,
                              ),
                            ),
                        }),
                      ],
                    },
                    n,
                  );
                }),
              ],
            }),
            a.jsxs("p", {
              className: "text-slate-400 text-xs mt-2 pb-2 text-right",
              children: ["共 ", e.length, " 筆紀錄"],
            }),
          ],
        }),
      });
}
const po = [
  {
    key: "regimen",
    label: "Regimen",
    icon: a.jsx(wm, { className: "w-3.5 h-3.5" }),
  },
  {
    key: "treatment",
    label: "計劃治療書",
    icon: a.jsx(Za, { className: "w-3.5 h-3.5" }),
  },
  {
    key: "project",
    label: "專案用藥",
    icon: a.jsx(ul, { className: "w-3.5 h-3.5" }),
  },
  {
    key: "variation",
    label: "變異紀錄",
    icon: a.jsx(vm, { className: "w-3.5 h-3.5" }),
  },
  {
    key: "labvalue",
    label: "檢驗數值",
    icon: a.jsx(Ka, { className: "w-3.5 h-3.5" }),
  },
  {
    key: "alert",
    label: "異常提醒",
    icon: a.jsx(dn, { className: "w-3.5 h-3.5" }),
  },
];
function lf(e) {
  const t = new Date(e),
    n = new Date();
  let r = n.getFullYear() - t.getFullYear();
  const l = n.getMonth() - t.getMonth();
  return ((l < 0 || (l === 0 && n.getDate() < t.getDate())) && r--, r);
}
function Rc({ regimen: e, status: t, onBack: n, onConfirm: r }) {
  var j;
  const [l, s] = M.useState("main"),
    [i, o] = M.useState(e.drugs),
    [u, d] = M.useState(!1);
  M.useEffect(() => {
    (o(e.drugs), d(!1));
  }, [e.id]);
  const [g, h] = M.useState(!1),
    [p, N] = M.useState(!1),
    x = t === "dispense",
    w = e.status === "readyForPickup";
  M.useEffect(() => {
    if (!x) return;
    const L = setTimeout(() => d(!0), 5e3);
    return () => clearTimeout(L);
  }, [x]);
  const A = e.admissionNumber ? "inpatient" : "outpatient",
    m = (L) => {
      o((P) => P.map((R) => (R.id === L ? { ...R, checked: !R.checked } : R)));
    },
    c = t === "unexamined",
    f = i.filter((L) => L.checked).length,
    v = i.length > 0 && f === i.length,
    k = t === "preparing",
    S = (k || x) && l === "main",
    b = k ? "備藥完成" : "調劑完成",
    D = t === "completed",
    U = D && l === "main" && !w,
    T = x ? "調劑" : k ? "備藥" : c ? "審核" : "已完成",
    [ee, Ye] = M.useState(null),
    Ie = (L, P, R) => {
      (Ye({ message: L, color: P, icon: R }), setTimeout(() => Ye(null), 2e3));
    },
    ir = () => {
      (Ie(
        "審核通過，進入下一筆",
        "from-sky-500 to-sky-600",
        a.jsx(ts, { className: "w-5 h-5" }),
      ),
        r ? r() : n());
    },
    Dl = () => {
      (Ie(
        "備藥完成，進入下一筆",
        "from-amber-500 to-amber-600",
        a.jsx(Ct, { className: "w-5 h-5" }),
      ),
        r ? r() : n());
    },
    hn = () => {
      (Ie(
        "調劑完成，進入下一筆",
        "from-emerald-500 to-emerald-600",
        a.jsx(Ct, { className: "w-5 h-5" }),
      ),
        r ? r() : n());
    },
    gn = () => {
      (Ie(
        "已標記為待領取，進入下一筆",
        "from-teal-500 to-teal-600",
        a.jsx(En, { className: "w-5 h-5" }),
      ),
        r ? r() : n());
    };
  return a.jsxs(a.Fragment, {
    children: [
      a.jsxs("div", {
        className: "flex flex-col flex-1 gap-4 px-4 pb-2 min-h-0",
        children: [
          a.jsxs("div", {
            className: "flex items-center gap-4 flex-shrink-0",
            children: [
              a.jsxs("button", {
                onClick: n,
                className:
                  "flex items-center gap-2 px-3 py-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-white/70 border border-transparent hover:border-slate-200/60 transition-all duration-150 text-base font-medium",
                children: [a.jsx(hm, { className: "w-4 h-4" }), "返回清單"],
              }),
              a.jsxs("div", {
                className: "flex items-center gap-2 flex-1 flex-wrap",
                children: [
                  a.jsxs("div", {
                    children: [
                      a.jsx("span", {
                        className: "text-slate-800 font-bold text-lg",
                        children: e.patientName,
                      }),
                      a.jsx("span", {
                        className: "text-slate-400 mx-2",
                        children: "—",
                      }),
                      a.jsx("span", {
                        className: "text-slate-500 font-mono text-base",
                        children: e.chartNumber,
                      }),
                    ],
                  }),
                  a.jsx("span", {
                    className:
                      A === "outpatient" ? "tag-outpatient" : "tag-inpatient",
                    children: A === "outpatient" ? "門診" : "住院",
                  }),
                  A === "inpatient" &&
                    e.admissionNumber &&
                    a.jsxs("div", {
                      className:
                        "flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200/60",
                      children: [
                        a.jsx(qa, { className: "w-3.5 h-3.5 text-amber-500" }),
                        a.jsx("span", {
                          className:
                            "text-amber-700 text-sm font-mono font-semibold",
                          children: e.admissionNumber,
                        }),
                      ],
                    }),
                  c &&
                    a.jsx("span", {
                      className:
                        "px-2.5 py-0.5 rounded-full text-sm font-semibold bg-rose-100 text-rose-600 border border-rose-200/60",
                      children: "待審核",
                    }),
                  w &&
                    a.jsxs("span", {
                      className:
                        "flex items-center gap-1 px-2.5 py-0.5 rounded-full text-sm font-semibold bg-teal-50 text-teal-700 border border-teal-200/60",
                      children: [
                        a.jsx(En, { className: "w-3.5 h-3.5" }),
                        "待領取",
                      ],
                    }),
                ],
              }),
              x &&
                a.jsxs("button", {
                  disabled: !u,
                  onClick: () => u && h(!0),
                  style: u
                    ? {
                        animation:
                          "behavior-error-pulse 1.6s ease-in-out infinite",
                      }
                    : void 0,
                  className: `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold flex-shrink-0 transition-all duration-300 ${u ? "text-white cursor-pointer" : "bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed"}`,
                  children: [a.jsx(dn, { className: "w-4 h-4" }), "行為錯誤"],
                }),
              a.jsxs("button", {
                onClick: () => N(!0),
                className:
                  "flex items-center gap-2 px-4 py-2 rounded-xl text-base font-semibold bg-gradient-to-r from-sky-500 to-teal-500 text-white shadow-[0_2px_12px_rgba(14,165,233,0.35)] hover:shadow-[0_4px_18px_rgba(14,165,233,0.45)] hover:brightness-105 active:scale-[0.97] transition-all duration-200 flex-shrink-0",
                children: [a.jsx(Tc, { className: "w-4 h-4" }), "化療助手"],
              }),
              a.jsxs("select", {
                value: l,
                onChange: (L) => s(L.target.value),
                className:
                  "bg-white/70 border border-slate-200/70 rounded-xl px-3 py-1 text-base font-medium text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300/50 focus:border-sky-300 transition-all cursor-pointer",
                children: [
                  a.jsx("option", { value: "main", children: T }),
                  po.map((L) =>
                    a.jsx("option", { value: L.key, children: L.label }, L.key),
                  ),
                ],
              }),
            ],
          }),
          l === "labvalue" && a.jsx(nf, { labData: e.labData }),
          l === "variation" && a.jsx(rf, { changAry: e.changAry }),
          l !== "main" &&
            l !== "labvalue" &&
            l !== "variation" &&
            a.jsx("div", {
              className: "flex-1 flex items-center justify-center",
              children: a.jsxs("div", {
                className: "glass-card px-10 py-8 text-center",
                children: [
                  a.jsxs("p", {
                    className: "text-slate-600 text-base font-medium",
                    children: [
                      (j = po.find((L) => L.key === l)) == null
                        ? void 0
                        : j.label,
                      " 功能建置中",
                    ],
                  }),
                  a.jsx("p", {
                    className: "text-slate-400 text-base mt-1.5",
                    children: "Under Development",
                  }),
                ],
              }),
            }),
          l === "main" &&
            a.jsxs("div", {
              className: "flex flex-col gap-3 flex-1 min-h-0",
              children: [
                a.jsx("div", {
                  className: "glass-card-solid px-5 py-4 flex-shrink-0",
                  children: a.jsxs("div", {
                    className: "space-y-2.5",
                    children: [
                      a.jsxs("div", {
                        className: "flex items-center gap-5",
                        children: [
                          a.jsxs("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                              a.jsx(oo, {
                                className: "w-4 h-4 text-slate-400",
                              }),
                              a.jsxs("span", {
                                className:
                                  "text-slate-700 text-base font-semibold",
                                children: [lf(e.birthDate), "歲"],
                              }),
                              a.jsxs("span", {
                                className: "text-slate-400 text-sm font-mono",
                                children: ["(", e.birthDate, ")"],
                              }),
                            ],
                          }),
                          a.jsx("div", { className: "w-px h-4 bg-slate-200" }),
                          a.jsxs("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                              a.jsx(Tm, {
                                className: "w-4 h-4 text-slate-400",
                              }),
                              a.jsxs("span", {
                                className:
                                  "text-slate-700 text-base font-semibold",
                                children: [e.height, " cm"],
                              }),
                            ],
                          }),
                          a.jsx("div", { className: "w-px h-4 bg-slate-200" }),
                          a.jsxs("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                              a.jsx(Hm, {
                                className: "w-4 h-4 text-slate-400",
                              }),
                              a.jsxs("span", {
                                className:
                                  "text-slate-700 text-base font-semibold",
                                children: [e.weight, " kg"],
                              }),
                            ],
                          }),
                          a.jsx("div", { className: "flex-1" }),
                          a.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              a.jsx(oo, {
                                className: "w-4 h-4 text-slate-400",
                              }),
                              a.jsx("span", {
                                className:
                                  "text-slate-700 text-base font-semibold font-mono",
                                children: e.effectiveDateTime,
                              }),
                            ],
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className: "flex items-baseline gap-3",
                        children: [
                          a.jsx("span", {
                            className:
                              "text-slate-400 text-base w-16 flex-shrink-0",
                            children: "診斷",
                          }),
                          a.jsx("span", {
                            className: "text-slate-800 text-base font-semibold",
                            children: e.diagnosis,
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className: "flex items-baseline gap-3",
                        children: [
                          a.jsx("span", {
                            className:
                              "text-slate-400 text-base w-16 flex-shrink-0",
                            children: "科別",
                          }),
                          a.jsx("span", {
                            className: "text-slate-800 text-base font-semibold",
                            children: e.department,
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className: "flex items-center gap-6",
                        children: [
                          a.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              a.jsx("span", {
                                className: "text-slate-400 text-base",
                                children: "開立醫師",
                              }),
                              a.jsx("span", {
                                className:
                                  "text-slate-700 text-base font-semibold",
                                children: e.prescribingDoctor,
                              }),
                            ],
                          }),
                          a.jsx("div", { className: "w-px h-4 bg-slate-200" }),
                          a.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              a.jsx("span", {
                                className: "text-slate-400 text-base",
                                children: "審核醫師",
                              }),
                              a.jsx("span", {
                                className:
                                  "text-slate-700 text-base font-semibold",
                                children: e.reviewingDoctor,
                              }),
                            ],
                          }),
                          a.jsx("div", { className: "w-px h-4 bg-slate-200" }),
                          a.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              a.jsx("span", {
                                className: "text-slate-400 text-base",
                                children: "審核藥師",
                              }),
                              a.jsx("span", {
                                className:
                                  "text-slate-700 text-base font-semibold",
                                children: e.reviewingPharmacist || "-",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                a.jsx("div", {
                  className:
                    "glass-card-solid flex-1 flex flex-col min-h-0 overflow-hidden",
                  children: a.jsx(Zm, {
                    drugs: c || x || D ? e.drugs : i,
                    checkable: k,
                    onToggle: k ? m : void 0,
                    plainView: x || D,
                  }),
                }),
                c &&
                  a.jsxs("div", {
                    className:
                      "flex items-center justify-between glass-card px-5 py-3 flex-shrink-0",
                    children: [
                      a.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          a.jsx(ts, { className: "w-4 h-4 text-slate-400" }),
                          a.jsx("span", {
                            className: "text-slate-500 text-base",
                            children: "請確認處方內容後進行審核",
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          a.jsx("button", {
                            className:
                              "flex items-center gap-2 px-5 py-2.5 rounded-xl text-base font-semibold border border-rose-200 text-rose-600 bg-rose-50 hover:bg-rose-100 transition-all duration-200 cursor-pointer",
                            children: "退回",
                          }),
                          a.jsxs("button", {
                            onClick: ir,
                            className:
                              "flex items-center gap-2 px-6 py-2.5 rounded-xl text-base font-semibold bg-sky-500 text-white shadow-[0_2px_16px_rgba(14,165,233,0.35)] hover:bg-sky-600 hover:shadow-[0_4px_22px_rgba(14,165,233,0.45)] active:scale-[0.97] transition-all duration-200 cursor-pointer",
                            children: [
                              a.jsx(ts, { className: "w-4 h-4" }),
                              "審核通過",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                S &&
                  a.jsxs("div", {
                    className:
                      "flex items-center justify-between glass-card px-5 py-3 flex-shrink-0",
                    children: [
                      k
                        ? a.jsxs("div", {
                            className: `flex items-center gap-3 text-base font-medium ${v ? "text-emerald-600" : "text-slate-400"}`,
                            children: [
                              a.jsx(Ct, {
                                className: `w-4 h-4 ${v ? "text-emerald-500" : "text-slate-300"}`,
                              }),
                              v
                                ? "所有藥品已勾選，可確認送出"
                                : `尚有 ${i.length - f} 項藥品未勾選`,
                              a.jsxs("span", {
                                className: `text-sm font-semibold px-2.5 py-1 rounded-lg border ${v ? "bg-emerald-50 border-emerald-200/60 text-emerald-600" : "bg-slate-50 border-slate-200/60 text-slate-400"}`,
                                children: ["已備 ", f, " / ", i.length],
                              }),
                            ],
                          })
                        : a.jsxs("div", {
                            className:
                              "flex items-center gap-1.5 text-base font-medium text-slate-400",
                            children: [
                              a.jsx(Ct, {
                                className: "w-4 h-4 text-slate-300",
                              }),
                              "請確認調劑內容後完成",
                            ],
                          }),
                      a.jsxs("button", {
                        disabled: k && !v,
                        onClick: k ? Dl : hn,
                        className: `flex items-center gap-2 px-6 py-2.5 rounded-xl text-base font-semibold transition-all duration-200 ${!k || v ? "bg-emerald-500 text-white shadow-[0_2px_16px_rgba(16,185,129,0.35)] hover:bg-emerald-600 hover:shadow-[0_4px_22px_rgba(16,185,129,0.45)] active:scale-[0.97] cursor-pointer" : "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"}`,
                        children: [a.jsx(Ct, { className: "w-4 h-4" }), b],
                      }),
                    ],
                  }),
                U &&
                  a.jsxs("div", {
                    className:
                      "flex items-center justify-between glass-card px-5 py-3 flex-shrink-0",
                    children: [
                      a.jsxs("div", {
                        className:
                          "flex items-center gap-1.5 text-base font-medium text-slate-400",
                        children: [
                          a.jsx(En, { className: "w-4 h-4 text-slate-300" }),
                          "確認後將標記為待領取狀態",
                        ],
                      }),
                      a.jsxs("button", {
                        onClick: gn,
                        className:
                          "flex items-center gap-2 px-6 py-2.5 rounded-xl text-base font-semibold bg-teal-500 text-white shadow-[0_2px_16px_rgba(20,184,166,0.35)] hover:bg-teal-600 hover:shadow-[0_4px_22px_rgba(20,184,166,0.45)] active:scale-[0.97] transition-all duration-200 cursor-pointer",
                        children: [a.jsx(En, { className: "w-4 h-4" }), "上架"],
                      }),
                    ],
                  }),
              ],
            }),
        ],
      }),
      g &&
        a.jsx(Km, {
          onClose: () => h(!1),
          videoSrc: e.behaviorErrorVideo,
          errorTextAry: e.behaviorErrorTextAry,
        }),
      p && a.jsx(Ym, { regimen: e, onClose: () => N(!1) }),
      a.jsx("div", {
        className: `fixed top-6 left-0 z-50 transition-all duration-500 ease-out ${ee ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 -translate-x-full pointer-events-none"}`,
        children:
          ee &&
          a.jsxs("div", {
            className: `flex items-center gap-3 pl-5 pr-6 py-3.5 rounded-r-2xl text-white font-semibold text-base shadow-2xl bg-gradient-to-r ${ee.color}`,
            children: [
              a.jsx("div", { className: "flex-shrink-0", children: ee.icon }),
              a.jsx("span", { children: ee.message }),
            ],
          }),
      }),
    ],
  });
}
const ho = {
    unexamined: "審核",
    preparing: "備藥",
    dispense: "調劑",
    completed: "上架",
    readyForPickup: "調閱",
    shipping: "查看",
    received: "查看",
    administered: "查看",
  },
  sf = {
    outpatient: {
      card: "bg-sky-50/60 border-sky-200/50 hover:bg-sky-50/90",
      badge: "bg-sky-100 text-sky-700 border-sky-200/60",
      dot: "bg-sky-400",
    },
    inpatient: {
      card: "bg-amber-50/60 border-amber-200/50 hover:bg-amber-50/90",
      badge: "bg-amber-100 text-amber-700 border-amber-200/60",
      dot: "bg-amber-400",
    },
  },
  go = {
    unexamined: "bg-rose-500 hover:bg-rose-600 shadow-rose-200",
    preparing: "bg-amber-500 hover:bg-amber-600 shadow-amber-200",
    dispense: "bg-blue-500 hover:bg-blue-600 shadow-blue-200",
    completed: "bg-teal-500 hover:bg-teal-600 shadow-teal-200",
    readyForPickup: "bg-slate-400 hover:bg-slate-500 shadow-slate-200",
    shipping: "bg-slate-500 hover:bg-slate-600 shadow-slate-200",
    received: "bg-slate-500 hover:bg-slate-600 shadow-slate-200",
    administered: "bg-slate-500 hover:bg-slate-600 shadow-slate-200",
  };
function Bc(e) {
  return e.admissionNumber ? "inpatient" : "outpatient";
}
function af({ rx: e, listStatus: t, onSelect: n }) {
  const r = Bc(e),
    l = sf[r],
    s = e.status === "readyForPickup",
    i = s ? ho.readyForPickup : ho[t],
    o = s ? go.readyForPickup : go[t],
    [u, d] = e.effectiveDateTime.split(" ");
  return a.jsxs("div", {
    className: `flex items-center gap-4 px-4 py-3 rounded-2xl border transition-all duration-200 cursor-pointer group ${l.card}`,
    onClick: () => n(e),
    children: [
      a.jsx("div", {
        className: `w-1 h-12 rounded-full flex-shrink-0 ${l.dot}`,
      }),
      a.jsxs("div", {
        className: "flex flex-col gap-0.5 w-32 flex-shrink-0",
        children: [
          a.jsx("span", {
            className: "text-slate-800 text-base font-semibold font-mono",
            children: u,
          }),
          a.jsxs("div", {
            className: "flex items-center gap-1",
            children: [
              a.jsx(Ga, { className: "w-3.5 h-3.5 text-slate-400" }),
              a.jsx("span", {
                className: "text-slate-600 text-base font-mono",
                children: d,
              }),
            ],
          }),
        ],
      }),
      a.jsxs("div", {
        className:
          "flex items-center gap-1.5 w-28 flex-shrink-0 flex-wrap gap-y-1",
        children: [
          a.jsx("span", {
            className: `text-sm font-semibold px-2.5 py-0.5 rounded-full border ${l.badge}`,
            children: r === "outpatient" ? "門診" : "住院",
          }),
          s &&
            a.jsxs("span", {
              className:
                "flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-teal-50 border border-teal-200/60 text-teal-700",
              children: [a.jsx(En, { className: "w-3 h-3" }), "待領取"],
            }),
        ],
      }),
      a.jsxs("div", {
        className: "flex-1 min-w-0 flex flex-col gap-0.5",
        children: [
          a.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              a.jsx(Mc, { className: "w-4 h-4 text-slate-400 flex-shrink-0" }),
              a.jsx("span", {
                className: "text-slate-800 text-base font-bold truncate",
                children: e.patientName,
              }),
              a.jsx("span", {
                className: "text-slate-400 text-base font-mono flex-shrink-0",
                children: e.chartNumber,
              }),
              r === "inpatient" &&
                e.admissionNumber &&
                a.jsxs(a.Fragment, {
                  children: [
                    a.jsx("span", {
                      className: "text-slate-300 text-base",
                      children: "·",
                    }),
                    a.jsx(qa, {
                      className: "w-3.5 h-3.5 text-amber-400 flex-shrink-0",
                    }),
                    a.jsx("span", {
                      className:
                        "text-amber-700 text-base font-mono flex-shrink-0",
                      children: e.admissionNumber,
                    }),
                  ],
                }),
            ],
          }),
          a.jsxs("div", {
            className: "flex items-center gap-1.5",
            children: [
              a.jsx(Ka, {
                className: "w-3.5 h-3.5 text-slate-400 flex-shrink-0",
              }),
              a.jsx("span", {
                className: "text-slate-500 text-base",
                children: e.department,
              }),
              e.diagnosis &&
                a.jsxs(a.Fragment, {
                  children: [
                    a.jsx("span", {
                      className: "text-slate-300 text-base",
                      children: "·",
                    }),
                    a.jsx("span", {
                      className: "text-slate-400 text-base truncate",
                      children: e.diagnosis,
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
      a.jsxs("button", {
        onClick: (g) => {
          (g.stopPropagation(), n(e));
        },
        className: `flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white flex-shrink-0 shadow-md transition-all duration-200 active:scale-95 ${o}`,
        children: [i, a.jsx(jm, { className: "w-4 h-4" })],
      }),
    ],
  });
}
function of({ stat: e, regimens: t }) {
  const [n, r] = M.useState(""),
    [l, s] = M.useState(null),
    [i, o] = M.useState("all"),
    u = e.status === "preparing" || e.status === "dispense",
    d =
      e.status === "completed"
        ? [...t].sort((x, w) => {
            const A = x.status === "readyForPickup" ? 1 : 0,
              m = w.status === "readyForPickup" ? 1 : 0;
            return A - m;
          })
        : t,
    g = i === "all" ? d : d.filter((x) => Bc(x) === i),
    h = t.filter((x) => !x.admissionNumber).length,
    p = t.filter((x) => !!x.admissionNumber).length,
    N = (x) => {
      const w = d.filter((A) => A.id !== x.id && A.status !== "readyForPickup");
      w.length > 0 ? s(w[0]) : s(null);
    };
  return l
    ? a.jsx(Rc, {
        regimen: l,
        status: e.status,
        onBack: () => s(null),
        onConfirm: () => N(l),
      })
    : a.jsxs("div", {
        className: "flex flex-1 flex-col gap-4 px-6 pb-6 min-h-0",
        children: [
          u &&
            a.jsx("div", {
              className: "glass-card p-4 flex-shrink-0",
              children: a.jsxs("div", {
                className: "flex items-center gap-4",
                children: [
                  a.jsxs("div", {
                    className: "flex items-center gap-3 flex-shrink-0",
                    children: [
                      a.jsx("div", {
                        className:
                          "w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center",
                        children: a.jsx(cl, {
                          className: "w-4.5 h-4.5 text-amber-500",
                        }),
                      }),
                      a.jsxs("div", {
                        children: [
                          a.jsx("p", {
                            className: "text-slate-800 font-semibold text-sm",
                            children:
                              e.status === "preparing"
                                ? "備藥通知"
                                : "調劑通知",
                          }),
                          a.jsx("p", {
                            className: "text-slate-500 text-xs",
                            children: "掃描調劑條碼 Scan Dispense Barcode",
                          }),
                        ],
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    className: "flex-1 relative",
                    children: [
                      a.jsx(cl, {
                        className:
                          "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40",
                      }),
                      a.jsx("input", {
                        type: "text",
                        value: n,
                        onChange: (x) => r(x.target.value),
                        placeholder:
                          "掃描或輸入條碼 / Scan or enter barcode...",
                        className: "glass-input w-full pl-10 text-sm",
                      }),
                    ],
                  }),
                  a.jsx("button", {
                    className:
                      "glass-btn-primary px-5 py-2.5 text-sm font-semibold flex-shrink-0",
                    children: "確認",
                  }),
                ],
              }),
            }),
          a.jsxs("div", {
            className: "glass-card-solid flex-1 flex flex-col min-h-0",
            children: [
              a.jsxs("div", {
                className:
                  "flex items-center justify-between px-5 py-3.5 border-b border-slate-200/60 flex-shrink-0",
                children: [
                  a.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      a.jsx("h3", {
                        className: "text-slate-800 font-bold text-base",
                        children: "處方清單",
                      }),
                      a.jsxs("span", {
                        className: "text-slate-400 text-sm font-mono",
                        children: [g.length, " / ", t.length, " 筆"],
                      }),
                    ],
                  }),
                  a.jsxs("select", {
                    value: i,
                    onChange: (x) => o(x.target.value),
                    className:
                      "bg-white/80 border border-slate-200/70 rounded-xl px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300/50 focus:border-sky-300 transition-all cursor-pointer",
                    children: [
                      a.jsxs("option", {
                        value: "all",
                        children: ["全部（", t.length, "）"],
                      }),
                      a.jsxs("option", {
                        value: "outpatient",
                        children: ["門診（", h, "）"],
                      }),
                      a.jsxs("option", {
                        value: "inpatient",
                        children: ["住院（", p, "）"],
                      }),
                    ],
                  }),
                ],
              }),
              a.jsx("div", {
                className:
                  "flex-1 overflow-y-auto scrollbar-thin p-3 flex flex-col gap-2",
                children:
                  g.length === 0
                    ? a.jsx("div", {
                        className:
                          "flex-1 flex items-center justify-center py-12",
                        children: a.jsx("p", {
                          className: "text-slate-400 text-sm",
                          children: "目前無符合條件的處方",
                        }),
                      })
                    : g.map((x) =>
                        a.jsx(
                          af,
                          { rx: x, listStatus: e.status, onSelect: s },
                          x.id,
                        ),
                      ),
              }),
            ],
          }),
        ],
      });
}
const uf = [
  { status: "unexamined", labelZh: "未審核", labelEn: "Unexamined" },
  { status: "preparing", labelZh: "可備藥", labelEn: "Preparing" },
  { status: "dispense", labelZh: "可調劑", labelEn: "Dispense" },
  { status: "completed", labelZh: "已完成", labelEn: "Completed" },
];
function cf() {
  const e = {};
  for (const t of Xa) {
    const n = t.status === "readyForPickup" ? "completed" : t.status;
    e[n] = (e[n] ?? 0) + 1;
  }
  return uf.map((t) => ({ ...t, count: e[t.status] ?? 0 }));
}
const ss = cf();
function df() {
  const [e, t] = M.useState(null),
    n = (i) => {
      t((o) => (o === i ? null : i));
    },
    r = () => t(null),
    l = ss.find((i) => i.status === e),
    s = e
      ? Xa.filter((i) =>
          e === "completed"
            ? i.status === "completed" || i.status === "readyForPickup"
            : i.status === e,
        )
      : [];
  return a.jsxs("div", {
    className: "flex-1 flex flex-col min-h-0",
    children: [
      e
        ? l &&
          a.jsxs(a.Fragment, {
            children: [
              a.jsx("div", {
                className: "px-6 pt-3 mb-3 flex-shrink-0",
                children: a.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    a.jsx("div", {
                      className: "flex gap-2",
                      children: ss.map((i) =>
                        a.jsxs(
                          "button",
                          {
                            onClick: () => t(i.status),
                            className: `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${e === i.status ? "bg-blue-500/12 text-blue-700 border border-blue-300/50 shadow-sm" : "text-slate-500 hover:text-slate-700 hover:bg-white/60 border border-transparent"}`,
                            children: [
                              i.labelZh,
                              a.jsxs("span", {
                                className: "ml-2 text-xs opacity-60",
                                children: ["(", i.count, ")"],
                              }),
                            ],
                          },
                          i.status,
                        ),
                      ),
                    }),
                    a.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        a.jsx("button", {
                          onClick: r,
                          className:
                            "text-slate-700 text-sm font-semibold hover:text-slate-500 transition-colors duration-200 cursor-pointer select-none",
                          children: "功能選單",
                        }),
                        a.jsxs("button", {
                          className:
                            "glass-btn flex items-center gap-2 px-3 py-1.5 text-sm",
                          children: [
                            a.jsx(Ac, { className: "w-3.5 h-3.5" }),
                            a.jsx("span", { children: "重新整理" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              a.jsx(of, { stat: l, regimens: s }, e),
            ],
          })
        : a.jsx(Gm, { stats: ss, activeStatus: e, onSelect: n }),
      !e &&
        a.jsx("div", {
          className: "flex-1 flex items-center justify-center px-6 pb-6",
          children: a.jsxs("div", {
            className: "glass-card px-10 py-8 text-center max-w-md",
            children: [
              a.jsx("p", {
                className: "text-slate-600 text-base font-medium",
                children: "請選擇狀態卡片以查看詳細清單",
              }),
              a.jsx("p", {
                className: "text-slate-400 text-sm mt-1.5",
                children: "Select a status card to view details",
              }),
            ],
          }),
        }),
    ],
  });
}
const mf = {
  unexamined: {
    label: "待審核",
    className: "bg-rose-100 text-rose-700 border border-rose-200",
  },
  preparing: {
    label: "備藥中",
    className: "bg-amber-100 text-amber-700 border border-amber-200",
  },
  dispense: {
    label: "調配中",
    className: "bg-blue-100 text-blue-700 border border-blue-200",
  },
  completed: {
    label: "已完成",
    className: "bg-emerald-100 text-emerald-700 border border-emerald-200",
  },
  readyForPickup: {
    label: "待領取",
    className: "bg-teal-100 text-teal-700 border border-teal-200",
  },
  shipping: {
    label: "運送中",
    className: "bg-cyan-100 text-cyan-700 border border-cyan-200",
  },
  received: {
    label: "已簽收",
    className: "bg-teal-100 text-teal-700 border border-teal-200",
  },
  administered: {
    label: "給藥完成",
    className: "bg-green-100 text-green-700 border border-green-200",
  },
};
function ff({ rx: e, onSelect: t }) {
  const n = mf[e.status],
    r = !!e.admissionNumber;
  return a.jsxs("div", {
    onClick: () => t(e),
    className: "prescription-row group cursor-pointer items-stretch py-2.5",
    children: [
      a.jsx("div", {
        className: `w-1.5 self-stretch rounded-full flex-shrink-0 ${r ? "bg-amber-400/70" : "bg-sky-400/70"} group-hover:opacity-100 opacity-80`,
      }),
      a.jsxs("div", {
        className: "flex-1 flex flex-col gap-1 min-w-0",
        children: [
          a.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              a.jsxs("div", {
                className: "flex items-center gap-1.5 flex-shrink-0",
                children: [
                  a.jsx(Ga, { className: "w-3.5 h-3.5 text-slate-400" }),
                  a.jsx("span", {
                    className:
                      "text-slate-600 text-base font-mono leading-none",
                    children: e.effectiveDateTime.split(" ")[1],
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "flex items-center gap-1.5 w-20 flex-shrink-0",
                children: [
                  a.jsx(Mc, {
                    className: "w-3.5 h-3.5 text-slate-400 flex-shrink-0",
                  }),
                  a.jsx("span", {
                    className: "text-slate-900 text-base font-bold truncate",
                    children: e.patientName,
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "flex items-center gap-1.5 flex-shrink-0",
                children: [
                  a.jsx(Za, { className: "w-3.5 h-3.5 text-slate-400" }),
                  a.jsx("span", {
                    className: "text-slate-500 text-base font-mono",
                    children: e.chartNumber,
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "flex items-center gap-1.5 flex-1 min-w-0",
                children: [
                  a.jsx(ul, {
                    className: "w-3.5 h-3.5 text-slate-400 flex-shrink-0",
                  }),
                  a.jsx("span", {
                    className: "text-slate-600 text-sm truncate",
                    children: e.diagnosis,
                  }),
                ],
              }),
            ],
          }),
          a.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              r
                ? a.jsxs("div", {
                    className: "flex items-center gap-1.5 flex-shrink-0",
                    children: [
                      a.jsx(qa, { className: "w-3.5 h-3.5 text-amber-400" }),
                      a.jsx("span", {
                        className: "text-amber-700 text-base font-mono",
                        children: e.admissionNumber,
                      }),
                    ],
                  })
                : a.jsxs("div", {
                    className: "flex items-center gap-1.5 flex-shrink-0",
                    children: [
                      a.jsx(Ka, { className: "w-3.5 h-3.5 text-slate-400" }),
                      a.jsx("span", {
                        className: "text-slate-600 text-base",
                        children: e.department,
                      }),
                    ],
                  }),
              a.jsx("span", {
                className: "text-slate-400 text-sm flex-shrink-0",
                children: e.prescribingDoctor,
              }),
              e.reviewingPharmacist &&
                e.reviewingPharmacist !== "-" &&
                a.jsxs("span", {
                  className: "text-slate-400 text-sm flex-shrink-0",
                  children: ["/ ", e.reviewingPharmacist],
                }),
              e.status === "administered" &&
                e.departureTime &&
                a.jsxs("div", {
                  className: "flex items-center gap-1.5 ml-auto flex-shrink-0",
                  children: [
                    a.jsx(_c, { className: "w-3.5 h-3.5 text-green-500" }),
                    a.jsx("span", {
                      className: "text-green-700 text-base font-mono",
                      children: e.departureTime.split(" ")[1],
                    }),
                    a.jsx("span", {
                      className: "text-green-600 text-base",
                      children: "離開",
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
      a.jsx("span", {
        className: `inline-flex items-center self-center px-2.5 py-1 rounded-full text-base font-semibold flex-shrink-0 ${n.className}`,
        children: n.label,
      }),
      a.jsx(gm, {
        className:
          "w-4 h-4 text-slate-400 group-hover:text-slate-600 self-center flex-shrink-0 transition-colors",
      }),
    ],
  });
}
const pf = [
  { value: "all", label: "全部" },
  { value: "unexamined", label: "已審核" },
  { value: "preparing", label: "備藥中" },
  { value: "dispense", label: "調配中" },
  { value: "completed", label: "已完成" },
  { value: "shipping", label: "運送中" },
  { value: "received", label: "已簽收" },
  { value: "administered", label: "給藥完成" },
];
function hf({ regimens: e, onSelect: t }) {
  const [n, r] = M.useState("all"),
    [l, s] = M.useState(""),
    i = e.filter((d) => (n === "all" ? !0 : d.status === n)),
    o = i.filter((d) => !d.admissionNumber),
    u = i.filter((d) => !!d.admissionNumber);
  return a.jsxs("div", {
    className: "flex flex-col flex-1 gap-4 min-h-0",
    children: [
      a.jsxs("div", {
        className: "glass-card p-4 flex items-center gap-4 flex-shrink-0",
        children: [
          a.jsxs("div", {
            className: "flex items-center gap-3 flex-shrink-0",
            children: [
              a.jsx("div", {
                className:
                  "w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center",
                children: a.jsx(cl, { className: "w-4.5 h-4.5 text-teal-500" }),
              }),
              a.jsxs("div", {
                children: [
                  a.jsx("p", {
                    className: "text-slate-800 font-semibold text-sm",
                    children: "條碼掃描",
                  }),
                  a.jsx("p", {
                    className: "text-slate-500 text-xs",
                    children: "Scan Barcode",
                  }),
                ],
              }),
            ],
          }),
          a.jsxs("div", {
            className: "flex-1 relative",
            children: [
              a.jsx(cl, {
                className:
                  "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400",
              }),
              a.jsx("input", {
                type: "text",
                value: l,
                onChange: (d) => s(d.target.value),
                placeholder: "掃描或輸入條碼 / Scan or enter barcode...",
                className: "glass-input w-full pl-10 text-sm",
              }),
            ],
          }),
          a.jsx("div", {
            className: "flex-shrink-0",
            children: a.jsx("select", {
              value: n,
              onChange: (d) => r(d.target.value),
              className: "glass-input text-sm pr-9 cursor-pointer",
              children: pf.map((d) =>
                a.jsx("option", { value: d.value, children: d.label }, d.value),
              ),
            }),
          }),
          a.jsx("button", {
            className:
              "glass-btn-primary px-5 py-3 text-sm font-semibold flex-shrink-0",
            children: "確認",
          }),
        ],
      }),
      a.jsxs("div", {
        className: "flex gap-4 flex-1 min-h-0",
        children: [
          a.jsx(xo, {
            title: "門診",
            dotColor: "bg-sky-400",
            countColor: "text-sky-600",
            emptyText: "目前無符合條件的門診處方",
            regimens: o,
            onSelect: t,
          }),
          a.jsx(xo, {
            title: "住院",
            dotColor: "bg-amber-400",
            countColor: "text-amber-600",
            emptyText: "目前無符合條件的住院處方",
            regimens: u,
            onSelect: t,
          }),
        ],
      }),
    ],
  });
}
function xo({
  title: e,
  dotColor: t,
  countColor: n,
  emptyText: r,
  regimens: l,
  onSelect: s,
}) {
  return a.jsxs("div", {
    className: "glass-card-solid flex-1 flex flex-col min-h-0",
    children: [
      a.jsxs("div", {
        className:
          "flex items-center gap-3 px-5 py-4 border-b border-slate-200/60 flex-shrink-0",
        children: [
          a.jsx("div", { className: `w-2 h-2 rounded-full ${t}` }),
          a.jsx("h3", {
            className: "text-slate-800 font-bold text-base",
            children: e,
          }),
          a.jsxs("span", {
            className: `text-sm font-semibold ml-auto ${n}`,
            children: [l.length, " 筆"],
          }),
        ],
      }),
      a.jsx("div", {
        className:
          "flex-1 overflow-y-auto scrollbar-thin p-3 flex flex-col gap-2",
        children:
          l.length === 0
            ? a.jsx("div", {
                className: "flex-1 flex items-center justify-center py-8",
                children: a.jsx("p", {
                  className: "text-slate-400 text-sm",
                  children: r,
                }),
              })
            : l.map((i) => a.jsx(ff, { rx: i, onSelect: s }, i.id)),
      }),
    ],
  });
}
function gf() {
  const [e, t] = M.useState(null),
    n = () => t(null);
  return a.jsxs("div", {
    className: "flex-1 flex flex-col min-h-0",
    children: [
      a.jsxs("div", {
        className:
          "flex items-center justify-between px-6 pt-5 pb-3 flex-shrink-0",
        children: [
          a.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              a.jsx("div", {
                className:
                  "w-10 h-10 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center",
                children: a.jsx(Dm, { className: "w-5 h-5 text-teal-500" }),
              }),
              a.jsxs("div", {
                children: [
                  a.jsx("h1", {
                    className: "text-slate-800 text-lg font-bold leading-tight",
                    children: "審核資訊",
                  }),
                  a.jsx("p", {
                    className: "text-slate-500 text-xs tracking-wider",
                    children: "Information Review",
                  }),
                ],
              }),
            ],
          }),
          a.jsxs("button", {
            className: "glass-btn flex items-center gap-2 px-4 py-2.5 text-sm",
            children: [
              a.jsx(Ac, { className: "w-4 h-4" }),
              a.jsx("span", { children: "重新整理" }),
            ],
          }),
        ],
      }),
      a.jsx("div", {
        className: "flex-1 flex flex-col min-h-0 px-6 pb-6",
        children: e
          ? a.jsx(Rc, { regimen: e, status: e.status, onBack: n })
          : a.jsx(hf, { regimens: Xa, onSelect: t }),
      }),
    ],
  });
}
function xf() {
  return a.jsxs("div", {
    className: "flex-1 flex flex-col p-6 gap-5",
    children: [
      a.jsxs("div", {
        className: "flex items-center gap-4",
        children: [
          a.jsx("div", {
            className:
              "w-12 h-12 rounded-2xl bg-orange-500/20 border border-orange-400/30 flex items-center justify-center",
            children: a.jsx(uo, { className: "w-6 h-6 text-orange-500" }),
          }),
          a.jsxs("div", {
            children: [
              a.jsx("h1", {
                className: "text-slate-800 text-xl font-bold",
                children: "庫存管理",
              }),
              a.jsx("p", {
                className: "text-slate-500 text-sm tracking-wider",
                children: "Inventory Management",
              }),
            ],
          }),
        ],
      }),
      a.jsxs("div", {
        className: "flex-1 grid grid-cols-2 gap-5",
        children: [
          a.jsxs("div", {
            className: "grid grid-rows-2 gap-5",
            children: [
              a.jsxs("div", {
                className: "glass-card p-6 flex flex-col gap-4",
                children: [
                  a.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      a.jsx(uo, { className: "w-5 h-5 text-orange-500" }),
                      a.jsx("h3", {
                        className: "text-slate-800 font-semibold",
                        children: "藥品庫存一覽",
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    className: "flex-1 flex items-center justify-center",
                    children: a.jsx("p", {
                      className: "text-slate-400 text-sm text-center",
                      children: "此區塊待開發",
                    }),
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "glass-card p-6 flex flex-col gap-4",
                children: [
                  a.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      a.jsx(dn, { className: "w-5 h-5 text-amber-500" }),
                      a.jsx("h3", {
                        className: "text-slate-800 font-semibold",
                        children: "低庫存警示",
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    className: "flex-1 flex items-center justify-center",
                    children: a.jsx("p", {
                      className: "text-slate-400 text-sm text-center",
                      children: "此區塊待開發",
                    }),
                  }),
                ],
              }),
            ],
          }),
          a.jsxs("div", {
            className: "grid grid-rows-2 gap-5",
            children: [
              a.jsxs("div", {
                className: "glass-card p-6 flex flex-col gap-4",
                children: [
                  a.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      a.jsx(Rm, { className: "w-5 h-5 text-orange-500" }),
                      a.jsx("h3", {
                        className: "text-slate-800 font-semibold",
                        children: "藥品耗用記錄",
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    className: "flex-1 flex items-center justify-center",
                    children: a.jsx("p", {
                      className: "text-slate-400 text-sm text-center",
                      children: "此區塊待開發",
                    }),
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "glass-card p-6 flex flex-col gap-4",
                children: [
                  a.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      a.jsx(ym, { className: "w-5 h-5 text-orange-500" }),
                      a.jsx("h3", {
                        className: "text-slate-800 font-semibold",
                        children: "庫存統計圖表",
                      }),
                    ],
                  }),
                  a.jsx("div", {
                    className: "flex-1 flex items-center justify-center",
                    children: a.jsx("p", {
                      className: "text-slate-400 text-sm text-center",
                      children: "此區塊待開發",
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      a.jsx("div", {
        className: "glass-card p-5",
        children: a.jsx("p", {
          className: "text-slate-400 text-sm text-center",
          children:
            "庫存管理頁面  ·  功能開發中  ·  Inventory Management Module — Under Development",
        }),
      }),
    ],
  });
}
const vf = [
  {
    icon: Bm,
    label: "人員管理",
    desc: "帳號新增、權限設定",
    color: "text-blue-500",
    bg: "bg-blue-50/60 border-blue-200/50",
  },
  {
    icon: Nm,
    label: "通知設定",
    desc: "警示閾值、通知對象",
    color: "text-amber-500",
    bg: "bg-amber-50/60 border-amber-200/50",
  },
  {
    icon: Pm,
    label: "列印設定",
    desc: "藥袋格式、印表機設定",
    color: "text-cyan-500",
    bg: "bg-cyan-50/60 border-cyan-200/50",
  },
  {
    icon: Mm,
    label: "安全設定",
    desc: "密碼原則、存取記錄",
    color: "text-emerald-500",
    bg: "bg-emerald-50/60 border-emerald-200/50",
  },
];
function yf() {
  return a.jsxs("div", {
    className: "flex-1 flex flex-col p-6 gap-5",
    children: [
      a.jsxs("div", {
        className: "flex items-center gap-4",
        children: [
          a.jsx("div", {
            className:
              "w-12 h-12 rounded-2xl bg-slate-500/20 border border-slate-400/30 flex items-center justify-center",
            children: a.jsx(Am, { className: "w-6 h-6 text-slate-500" }),
          }),
          a.jsxs("div", {
            children: [
              a.jsx("h1", {
                className: "text-slate-800 text-xl font-bold",
                children: "系統設定",
              }),
              a.jsx("p", {
                className: "text-slate-500 text-sm tracking-wider",
                children: "System Settings",
              }),
            ],
          }),
        ],
      }),
      a.jsx("div", {
        className: "grid grid-cols-2 gap-5",
        children: vf.map((e) => {
          const t = e.icon;
          return a.jsxs(
            "div",
            {
              className: `glass-card p-7 flex items-start gap-5 border ${e.bg} opacity-70 cursor-not-allowed`,
              children: [
                a.jsx("div", {
                  className:
                    "w-12 h-12 rounded-xl bg-white/60 border border-white/80 flex items-center justify-center flex-shrink-0 shadow-sm",
                  children: a.jsx(t, { className: `w-6 h-6 ${e.color}` }),
                }),
                a.jsxs("div", {
                  children: [
                    a.jsx("h3", {
                      className: "text-slate-800 font-semibold text-base",
                      children: e.label,
                    }),
                    a.jsx("p", {
                      className: "text-slate-500 text-sm mt-0.5",
                      children: e.desc,
                    }),
                    a.jsx("p", {
                      className: "text-slate-400 text-xs mt-2",
                      children: "功能開發中",
                    }),
                  ],
                }),
              ],
            },
            e.label,
          );
        }),
      }),
      a.jsx("div", {
        className: "glass-card p-5",
        children: a.jsx("p", {
          className: "text-slate-400 text-sm text-center",
          children:
            "系統設定頁面  ·  功能開發中  ·  System Settings Module — Under Development",
        }),
      }),
    ],
  });
}
function Nf({ activeTab: e }) {
  return a.jsxs("main", {
    className: "flex-1 flex flex-col min-h-0 overflow-hidden",
    children: [
      e === "dispense" && a.jsx(df, {}),
      e === "information" && a.jsx(gf, {}),
      e === "inventory" && a.jsx(xf, {}),
      e === "setting" && a.jsx(yf, {}),
    ],
  });
}
function wf({ currentTime: e }) {
  return a.jsxs("footer", {
    className:
      "w-full h-9 bg-white/55 backdrop-blur-xl border-t border-white/70 flex items-center px-6 gap-4 shadow-sm",
    children: [
      a.jsxs("div", {
        className: "flex-1 flex items-center gap-6",
        children: [
          a.jsx("span", {
            className: "text-slate-400 text-xs tracking-wider",
            children:
              "化療藥局資訊管理系統  ·  Chemotherapy Pharmacy Information System",
          }),
          a.jsx("span", {
            className: "text-slate-300 text-xs",
            children: "v1.0.0",
          }),
        ],
      }),
      a.jsxs("div", {
        className: "flex items-center gap-4",
        children: [
          a.jsxs("div", {
            className: "flex items-center gap-1.5",
            children: [
              a.jsx("div", {
                className:
                  "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse",
              }),
              a.jsx("span", {
                className: "text-slate-500 text-xs",
                children: "系統正常",
              }),
            ],
          }),
          a.jsx("span", {
            className: "text-slate-400 text-xs font-mono",
            children: e,
          }),
        ],
      }),
    ],
  });
}
function kf({ currentUser: e, onLogout: t }) {
  const [n, r] = M.useState("dispense"),
    [l, s] = M.useState("");
  return (
    M.useEffect(() => {
      const i = () => {
        s(new Date().toLocaleTimeString("zh-TW", { hour12: !1 }));
      };
      i();
      const o = setInterval(i, 1e3);
      return () => clearInterval(o);
    }, []),
    a.jsxs("div", {
      className: "min-h-screen w-full flex flex-col overflow-hidden relative",
      style: {
        backgroundImage: `url(${Ic})`,
        backgroundSize: "auto 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
      children: [
        a.jsx("div", {
          className: "absolute inset-0 bg-white/20 backdrop-blur-[1px]",
        }),
        a.jsxs("div", {
          className: "relative z-10 flex flex-col h-screen",
          children: [
            a.jsx($m, {
              activeTab: n,
              onTabChange: r,
              currentUser: e,
              onLogout: t,
            }),
            a.jsx(Nf, { activeTab: n }),
            a.jsx(wf, { currentTime: l }),
          ],
        }),
      ],
    })
  );
}
const Ys = "chemo_session_user";
function jf() {
  try {
    const e = localStorage.getItem(Ys);
    return e ? JSON.parse(e) : null;
  } catch {
    return null;
  }
}
function Cf() {
  const [e, t] = M.useState(jf),
    n = (l) => {
      (localStorage.setItem(Ys, JSON.stringify(l)), t(l));
    },
    r = () => {
      (localStorage.removeItem(Ys), t(null));
    };
  return e
    ? a.jsx(kf, { currentUser: e, onLogout: r })
    : a.jsx(Qm, { onLoginSuccess: n });
}
Pc(document.getElementById("root")).render(
  a.jsx(M.StrictMode, { children: a.jsx(Cf, {}) }),
);
