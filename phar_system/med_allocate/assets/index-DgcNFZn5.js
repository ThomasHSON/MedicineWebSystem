function Gf(e, t) {
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
function Kf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Xu = { exports: {} },
  Eo = {},
  qu = { exports: {} },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tl = Symbol.for("react.element"),
  Xf = Symbol.for("react.portal"),
  qf = Symbol.for("react.fragment"),
  Jf = Symbol.for("react.strict_mode"),
  Zf = Symbol.for("react.profiler"),
  ep = Symbol.for("react.provider"),
  tp = Symbol.for("react.context"),
  np = Symbol.for("react.forward_ref"),
  rp = Symbol.for("react.suspense"),
  lp = Symbol.for("react.memo"),
  op = Symbol.for("react.lazy"),
  La = Symbol.iterator;
function ip(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (La && e[La]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ju = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Zu = Object.assign,
  ec = {};
function rr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ec),
    (this.updater = n || Ju);
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
function tc() {}
tc.prototype = rr.prototype;
function Ts(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ec),
    (this.updater = n || Ju);
}
var Os = (Ts.prototype = new tc());
Os.constructor = Ts;
Zu(Os, rr.prototype);
Os.isPureReactComponent = !0;
var Ma = Array.isArray,
  nc = Object.prototype.hasOwnProperty,
  _s = { current: null },
  rc = { key: !0, ref: !0, __self: !0, __source: !0 };
function lc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      nc.call(t, r) && !rc.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r]);
  return {
    $$typeof: tl,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: _s.current,
  };
}
function sp(e, t) {
  return {
    $$typeof: tl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ls(e) {
  return typeof e == "object" && e !== null && e.$$typeof === tl;
}
function ap(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ba = /\/+/g;
function Yo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ap("" + e.key)
    : t.toString(36);
}
function Ml(e, t, n, r, l) {
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
          case tl:
          case Xf:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Yo(i, 0) : r),
      Ma(l)
        ? ((n = ""),
          e != null && (n = e.replace(ba, "$&/") + "/"),
          Ml(l, t, n, "", function (u) {
            return u;
          }))
        : l != null &&
          (Ls(l) &&
            (l = sp(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(ba, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Ma(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var a = r + Yo(o, s);
      i += Ml(o, t, n, a, l);
    }
  else if (((a = ip(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Yo(o, s++)), (i += Ml(o, t, n, a, l));
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
function fl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Ml(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function up(e) {
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
  bl = { transition: null },
  cp = {
    ReactCurrentDispatcher: Te,
    ReactCurrentBatchConfig: bl,
    ReactCurrentOwner: _s,
  };
function oc() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = {
  map: fl,
  forEach: function (e, t, n) {
    fl(
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
      fl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      fl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ls(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
z.Component = rr;
z.Fragment = qf;
z.Profiler = Zf;
z.PureComponent = Ts;
z.StrictMode = Jf;
z.Suspense = rp;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cp;
z.act = oc;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Zu({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = _s.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      nc.call(t, a) &&
        !rc.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: tl, type: e.type, key: l, ref: o, props: r, _owner: i };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: tp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ep, _context: e }),
    (e.Consumer = e)
  );
};
z.createElement = lc;
z.createFactory = function (e) {
  var t = lc.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return { current: null };
};
z.forwardRef = function (e) {
  return { $$typeof: np, render: e };
};
z.isValidElement = Ls;
z.lazy = function (e) {
  return { $$typeof: op, _payload: { _status: -1, _result: e }, _init: up };
};
z.memo = function (e, t) {
  return { $$typeof: lp, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
  var t = bl.transition;
  bl.transition = {};
  try {
    e();
  } finally {
    bl.transition = t;
  }
};
z.unstable_act = oc;
z.useCallback = function (e, t) {
  return Te.current.useCallback(e, t);
};
z.useContext = function (e) {
  return Te.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return Te.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return Te.current.useEffect(e, t);
};
z.useId = function () {
  return Te.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return Te.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return Te.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return Te.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return Te.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return Te.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return Te.current.useRef(e);
};
z.useState = function (e) {
  return Te.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return Te.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return Te.current.useTransition();
};
z.version = "18.3.1";
qu.exports = z;
var y = qu.exports;
const I = Kf(y),
  Fr = Gf({ __proto__: null, default: I }, [y]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dp = y,
  fp = Symbol.for("react.element"),
  pp = Symbol.for("react.fragment"),
  mp = Object.prototype.hasOwnProperty,
  hp = dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  gp = { key: !0, ref: !0, __self: !0, __source: !0 };
function ic(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) mp.call(t, r) && !gp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: fp,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: hp.current,
  };
}
Eo.Fragment = pp;
Eo.jsx = ic;
Eo.jsxs = ic;
Xu.exports = Eo;
var c = Xu.exports,
  sc = { exports: {} },
  We = {},
  ac = { exports: {} },
  uc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, M) {
    var b = T.length;
    T.push(M);
    e: for (; 0 < b; ) {
      var W = (b - 1) >>> 1,
        A = T[W];
      if (0 < l(A, M)) (T[W] = M), (T[b] = A), (b = W);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var M = T[0],
      b = T.pop();
    if (b !== M) {
      T[0] = b;
      e: for (var W = 0, A = T.length, xt = A >>> 1; W < xt; ) {
        var ne = 2 * (W + 1) - 1,
          Dt = T[ne],
          nt = ne + 1,
          $t = T[nt];
        if (0 > l(Dt, b))
          nt < A && 0 > l($t, Dt)
            ? ((T[W] = $t), (T[nt] = b), (W = nt))
            : ((T[W] = Dt), (T[ne] = b), (W = ne));
        else if (nt < A && 0 > l($t, b)) (T[W] = $t), (T[nt] = b), (W = nt);
        else break e;
      }
    }
    return M;
  }
  function l(T, M) {
    var b = T.sortIndex - M.sortIndex;
    return b !== 0 ? b : T.id - M.id;
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
    u = [],
    d = 1,
    p = null,
    g = 3,
    v = !1,
    w = !1,
    x = !1,
    N = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(T) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null) r(u);
      else if (M.startTime <= T)
        r(u), (M.sortIndex = M.expirationTime), t(a, M);
      else break;
      M = n(u);
    }
  }
  function k(T) {
    if (((x = !1), m(T), !w))
      if (n(a) !== null) (w = !0), tt(P);
      else {
        var M = n(u);
        M !== null && Fe(k, M.startTime - T);
      }
  }
  function P(T, M) {
    (w = !1), x && ((x = !1), h(L), (L = -1)), (v = !0);
    var b = g;
    try {
      for (
        m(M), p = n(a);
        p !== null && (!(p.expirationTime > M) || (T && !ie()));

      ) {
        var W = p.callback;
        if (typeof W == "function") {
          (p.callback = null), (g = p.priorityLevel);
          var A = W(p.expirationTime <= M);
          (M = e.unstable_now()),
            typeof A == "function" ? (p.callback = A) : p === n(a) && r(a),
            m(M);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var xt = !0;
      else {
        var ne = n(u);
        ne !== null && Fe(k, ne.startTime - M), (xt = !1);
      }
      return xt;
    } finally {
      (p = null), (g = b), (v = !1);
    }
  }
  var C = !1,
    O = null,
    L = -1,
    F = 5,
    D = -1;
  function ie() {
    return !(e.unstable_now() - D < F);
  }
  function Ee() {
    if (O !== null) {
      var T = e.unstable_now();
      D = T;
      var M = !0;
      try {
        M = O(!0, T);
      } finally {
        M ? _e() : ((C = !1), (O = null));
      }
    } else C = !1;
  }
  var _e;
  if (typeof f == "function")
    _e = function () {
      f(Ee);
    };
  else if (typeof MessageChannel < "u") {
    var Ze = new MessageChannel(),
      et = Ze.port2;
    (Ze.port1.onmessage = Ee),
      (_e = function () {
        et.postMessage(null);
      });
  } else
    _e = function () {
      N(Ee, 0);
    };
  function tt(T) {
    (O = T), C || ((C = !0), _e());
  }
  function Fe(T, M) {
    L = N(function () {
      T(e.unstable_now());
    }, M);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || v || ((w = !0), tt(P));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (F = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (T) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = g;
      }
      var b = g;
      g = M;
      try {
        return T();
      } finally {
        g = b;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, M) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var b = g;
      g = T;
      try {
        return M();
      } finally {
        g = b;
      }
    }),
    (e.unstable_scheduleCallback = function (T, M, b) {
      var W = e.unstable_now();
      switch (
        (typeof b == "object" && b !== null
          ? ((b = b.delay), (b = typeof b == "number" && 0 < b ? W + b : W))
          : (b = W),
        T)
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
        (A = b + A),
        (T = {
          id: d++,
          callback: M,
          priorityLevel: T,
          startTime: b,
          expirationTime: A,
          sortIndex: -1,
        }),
        b > W
          ? ((T.sortIndex = b),
            t(u, T),
            n(a) === null &&
              T === n(u) &&
              (x ? (h(L), (L = -1)) : (x = !0), Fe(k, b - W)))
          : ((T.sortIndex = A), t(a, T), w || v || ((w = !0), tt(P))),
        T
      );
    }),
    (e.unstable_shouldYield = ie),
    (e.unstable_wrapCallback = function (T) {
      var M = g;
      return function () {
        var b = g;
        g = M;
        try {
          return T.apply(this, arguments);
        } finally {
          g = b;
        }
      };
    });
})(uc);
ac.exports = uc;
var yp = ac.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vp = y,
  He = yp;
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
var cc = new Set(),
  Rr = {};
function jn(e, t) {
  Xn(e, t), Xn(e + "Capture", t);
}
function Xn(e, t) {
  for (Rr[e] = t, e = 0; e < t.length; e++) cc.add(t[e]);
}
var Ot = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ti = Object.prototype.hasOwnProperty,
  wp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Da = {},
  $a = {};
function xp(e) {
  return Ti.call($a, e)
    ? !0
    : Ti.call(Da, e)
    ? !1
    : wp.test(e)
    ? ($a[e] = !0)
    : ((Da[e] = !0), !1);
}
function Sp(e, t, n, r) {
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
function kp(e, t, n, r) {
  if (t === null || typeof t > "u" || Sp(e, t, n, r)) return !0;
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
function Oe(e, t, n, r, l, o, i) {
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
    he[e] = new Oe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  he[t] = new Oe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  he[e] = new Oe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  he[e] = new Oe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    he[e] = new Oe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  he[e] = new Oe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  he[e] = new Oe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  he[e] = new Oe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  he[e] = new Oe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ms = /[\-:]([a-z])/g;
function bs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ms, bs);
    he[t] = new Oe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ms, bs);
    he[t] = new Oe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ms, bs);
  he[t] = new Oe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  he[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
he.xlinkHref = new Oe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  he[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ds(e, t, n, r) {
  var l = he.hasOwnProperty(t) ? he[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (kp(t, n, l, r) && (n = null),
    r || l === null
      ? xp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var bt = vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  pl = Symbol.for("react.element"),
  Mn = Symbol.for("react.portal"),
  bn = Symbol.for("react.fragment"),
  $s = Symbol.for("react.strict_mode"),
  Oi = Symbol.for("react.profiler"),
  dc = Symbol.for("react.provider"),
  fc = Symbol.for("react.context"),
  Fs = Symbol.for("react.forward_ref"),
  _i = Symbol.for("react.suspense"),
  Li = Symbol.for("react.suspense_list"),
  Rs = Symbol.for("react.memo"),
  It = Symbol.for("react.lazy"),
  pc = Symbol.for("react.offscreen"),
  Fa = Symbol.iterator;
function cr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Fa && e[Fa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var te = Object.assign,
  Go;
function kr(e) {
  if (Go === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Go = (t && t[1]) || "";
    }
  return (
    `
` +
    Go +
    e
  );
}
var Ko = !1;
function Xo(e, t) {
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
        var l = u.stack.split(`
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
    (Ko = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? kr(e) : "";
}
function Ep(e) {
  switch (e.tag) {
    case 5:
      return kr(e.type);
    case 16:
      return kr("Lazy");
    case 13:
      return kr("Suspense");
    case 19:
      return kr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Xo(e.type, !1)), e;
    case 11:
      return (e = Xo(e.type.render, !1)), e;
    case 1:
      return (e = Xo(e.type, !0)), e;
    default:
      return "";
  }
}
function Mi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case bn:
      return "Fragment";
    case Mn:
      return "Portal";
    case Oi:
      return "Profiler";
    case $s:
      return "StrictMode";
    case _i:
      return "Suspense";
    case Li:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case fc:
        return (e.displayName || "Context") + ".Consumer";
      case dc:
        return (e._context.displayName || "Context") + ".Provider";
      case Fs:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Rs:
        return (
          (t = e.displayName || null), t !== null ? t : Mi(e.type) || "Memo"
        );
      case It:
        (t = e._payload), (e = e._init);
        try {
          return Mi(e(t));
        } catch {}
    }
  return null;
}
function Np(e) {
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
      return Mi(t);
    case 8:
      return t === $s ? "StrictMode" : "Mode";
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
function nn(e) {
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
function mc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Cp(e) {
  var t = mc(e) ? "checked" : "value",
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
function ml(e) {
  e._valueTracker || (e._valueTracker = Cp(e));
}
function hc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = mc(e) ? (e.checked ? "true" : "false") : e.value),
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
function bi(e, t) {
  var n = t.checked;
  return te({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ra(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = nn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function gc(e, t) {
  (t = t.checked), t != null && Ds(e, "checked", t, !1);
}
function Di(e, t) {
  gc(e, t);
  var n = nn(t.value),
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
    ? $i(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && $i(e, t.type, nn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function za(e, t, n) {
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
function $i(e, t, n) {
  (t !== "number" || Ql(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Er = Array.isArray;
function Bn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + nn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Fi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return te({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ia(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (Er(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: nn(n) };
}
function yc(e, t) {
  var n = nn(t.value),
    r = nn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Aa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function vc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ri(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? vc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var hl,
  wc = (function (e) {
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
        hl = hl || document.createElement("div"),
          hl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = hl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function zr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var jr = {
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
  Pp = ["Webkit", "ms", "Moz", "O"];
Object.keys(jr).forEach(function (e) {
  Pp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (jr[t] = jr[e]);
  });
});
function xc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (jr.hasOwnProperty(e) && jr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Sc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = xc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var jp = te(
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
function zi(e, t) {
  if (t) {
    if (jp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Ii(e, t) {
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
var Ai = null;
function zs(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Hi = null,
  Qn = null,
  Vn = null;
function Ha(e) {
  if ((e = ll(e))) {
    if (typeof Hi != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = To(t)), Hi(e.stateNode, e.type, t));
  }
}
function kc(e) {
  Qn ? (Vn ? Vn.push(e) : (Vn = [e])) : (Qn = e);
}
function Ec() {
  if (Qn) {
    var e = Qn,
      t = Vn;
    if (((Vn = Qn = null), Ha(e), t)) for (e = 0; e < t.length; e++) Ha(t[e]);
  }
}
function Nc(e, t) {
  return e(t);
}
function Cc() {}
var qo = !1;
function Pc(e, t, n) {
  if (qo) return e(t, n);
  qo = !0;
  try {
    return Nc(e, t, n);
  } finally {
    (qo = !1), (Qn !== null || Vn !== null) && (Cc(), Ec());
  }
}
function Ir(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = To(n);
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
var Wi = !1;
if (Ot)
  try {
    var dr = {};
    Object.defineProperty(dr, "passive", {
      get: function () {
        Wi = !0;
      },
    }),
      window.addEventListener("test", dr, dr),
      window.removeEventListener("test", dr, dr);
  } catch {
    Wi = !1;
  }
function Tp(e, t, n, r, l, o, i, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Tr = !1,
  Vl = null,
  Yl = !1,
  Ui = null,
  Op = {
    onError: function (e) {
      (Tr = !0), (Vl = e);
    },
  };
function _p(e, t, n, r, l, o, i, s, a) {
  (Tr = !1), (Vl = null), Tp.apply(Op, arguments);
}
function Lp(e, t, n, r, l, o, i, s, a) {
  if ((_p.apply(this, arguments), Tr)) {
    if (Tr) {
      var u = Vl;
      (Tr = !1), (Vl = null);
    } else throw Error(E(198));
    Yl || ((Yl = !0), (Ui = u));
  }
}
function Tn(e) {
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
function jc(e) {
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
function Wa(e) {
  if (Tn(e) !== e) throw Error(E(188));
}
function Mp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Tn(e)), t === null)) throw Error(E(188));
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
        if (o === n) return Wa(l), e;
        if (o === r) return Wa(l), t;
        o = o.sibling;
      }
      throw Error(E(188));
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
        if (!i) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function Tc(e) {
  return (e = Mp(e)), e !== null ? Oc(e) : null;
}
function Oc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Oc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var _c = He.unstable_scheduleCallback,
  Ua = He.unstable_cancelCallback,
  bp = He.unstable_shouldYield,
  Dp = He.unstable_requestPaint,
  oe = He.unstable_now,
  $p = He.unstable_getCurrentPriorityLevel,
  Is = He.unstable_ImmediatePriority,
  Lc = He.unstable_UserBlockingPriority,
  Gl = He.unstable_NormalPriority,
  Fp = He.unstable_LowPriority,
  Mc = He.unstable_IdlePriority,
  No = null,
  gt = null;
function Rp(e) {
  if (gt && typeof gt.onCommitFiberRoot == "function")
    try {
      gt.onCommitFiberRoot(No, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var at = Math.clz32 ? Math.clz32 : Ap,
  zp = Math.log,
  Ip = Math.LN2;
function Ap(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((zp(e) / Ip) | 0)) | 0;
}
var gl = 64,
  yl = 4194304;
function Nr(e) {
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
function Kl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~l;
    s !== 0 ? (r = Nr(s)) : ((o &= i), o !== 0 && (r = Nr(o)));
  } else (i = n & ~l), i !== 0 ? (r = Nr(i)) : o !== 0 && (r = Nr(o));
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
      (n = 31 - at(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Hp(e, t) {
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
function Wp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - at(o),
      s = 1 << i,
      a = l[i];
    a === -1
      ? (!(s & n) || s & r) && (l[i] = Hp(s, t))
      : a <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function Bi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function bc() {
  var e = gl;
  return (gl <<= 1), !(gl & 4194240) && (gl = 64), e;
}
function Jo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function nl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - at(t)),
    (e[t] = n);
}
function Up(e, t) {
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
    var l = 31 - at(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function As(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - at(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var B = 0;
function Dc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var $c,
  Hs,
  Fc,
  Rc,
  zc,
  Qi = !1,
  vl = [],
  Gt = null,
  Kt = null,
  Xt = null,
  Ar = new Map(),
  Hr = new Map(),
  Wt = [],
  Bp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ba(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Gt = null;
      break;
    case "dragenter":
    case "dragleave":
      Kt = null;
      break;
    case "mouseover":
    case "mouseout":
      Xt = null;
      break;
    case "pointerover":
    case "pointerout":
      Ar.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Hr.delete(t.pointerId);
  }
}
function fr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = ll(t)), t !== null && Hs(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Qp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Gt = fr(Gt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Kt = fr(Kt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Xt = fr(Xt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Ar.set(o, fr(Ar.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Hr.set(o, fr(Hr.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Ic(e) {
  var t = pn(e.target);
  if (t !== null) {
    var n = Tn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = jc(n)), t !== null)) {
          (e.blockedOn = t),
            zc(e.priority, function () {
              Fc(n);
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
    var n = Vi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ai = r), n.target.dispatchEvent(r), (Ai = null);
    } else return (t = ll(n)), t !== null && Hs(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Qa(e, t, n) {
  Dl(e) && n.delete(t);
}
function Vp() {
  (Qi = !1),
    Gt !== null && Dl(Gt) && (Gt = null),
    Kt !== null && Dl(Kt) && (Kt = null),
    Xt !== null && Dl(Xt) && (Xt = null),
    Ar.forEach(Qa),
    Hr.forEach(Qa);
}
function pr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Qi ||
      ((Qi = !0),
      He.unstable_scheduleCallback(He.unstable_NormalPriority, Vp)));
}
function Wr(e) {
  function t(l) {
    return pr(l, e);
  }
  if (0 < vl.length) {
    pr(vl[0], e);
    for (var n = 1; n < vl.length; n++) {
      var r = vl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Gt !== null && pr(Gt, e),
      Kt !== null && pr(Kt, e),
      Xt !== null && pr(Xt, e),
      Ar.forEach(t),
      Hr.forEach(t),
      n = 0;
    n < Wt.length;
    n++
  )
    (r = Wt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Wt.length && ((n = Wt[0]), n.blockedOn === null); )
    Ic(n), n.blockedOn === null && Wt.shift();
}
var Yn = bt.ReactCurrentBatchConfig,
  Xl = !0;
function Yp(e, t, n, r) {
  var l = B,
    o = Yn.transition;
  Yn.transition = null;
  try {
    (B = 1), Ws(e, t, n, r);
  } finally {
    (B = l), (Yn.transition = o);
  }
}
function Gp(e, t, n, r) {
  var l = B,
    o = Yn.transition;
  Yn.transition = null;
  try {
    (B = 4), Ws(e, t, n, r);
  } finally {
    (B = l), (Yn.transition = o);
  }
}
function Ws(e, t, n, r) {
  if (Xl) {
    var l = Vi(e, t, n, r);
    if (l === null) ai(e, t, r, ql, n), Ba(e, r);
    else if (Qp(l, e, t, n, r)) r.stopPropagation();
    else if ((Ba(e, r), t & 4 && -1 < Bp.indexOf(e))) {
      for (; l !== null; ) {
        var o = ll(l);
        if (
          (o !== null && $c(o),
          (o = Vi(e, t, n, r)),
          o === null && ai(e, t, r, ql, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else ai(e, t, r, null, n);
  }
}
var ql = null;
function Vi(e, t, n, r) {
  if (((ql = null), (e = zs(r)), (e = pn(e)), e !== null))
    if (((t = Tn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = jc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ql = e), null;
}
function Ac(e) {
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
      switch ($p()) {
        case Is:
          return 1;
        case Lc:
          return 4;
        case Gl:
        case Fp:
          return 16;
        case Mc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Qt = null,
  Us = null,
  $l = null;
function Hc() {
  if ($l) return $l;
  var e,
    t = Us,
    n = t.length,
    r,
    l = "value" in Qt ? Qt.value : Qt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return ($l = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Fl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function wl() {
  return !0;
}
function Va() {
  return !1;
}
function Ue(e) {
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
        ? wl
        : Va),
      (this.isPropagationStopped = Va),
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
          (this.isDefaultPrevented = wl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = wl));
      },
      persist: function () {},
      isPersistent: wl,
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
  Bs = Ue(lr),
  rl = te({}, lr, { view: 0, detail: 0 }),
  Kp = Ue(rl),
  Zo,
  ei,
  mr,
  Co = te({}, rl, {
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
    getModifierState: Qs,
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
        : (e !== mr &&
            (mr && e.type === "mousemove"
              ? ((Zo = e.screenX - mr.screenX), (ei = e.screenY - mr.screenY))
              : (ei = Zo = 0),
            (mr = e)),
          Zo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ei;
    },
  }),
  Ya = Ue(Co),
  Xp = te({}, Co, { dataTransfer: 0 }),
  qp = Ue(Xp),
  Jp = te({}, rl, { relatedTarget: 0 }),
  ti = Ue(Jp),
  Zp = te({}, lr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  em = Ue(Zp),
  tm = te({}, lr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  nm = Ue(tm),
  rm = te({}, lr, { data: 0 }),
  Ga = Ue(rm),
  lm = {
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
  om = {
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
  im = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function sm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = im[e]) ? !!t[e] : !1;
}
function Qs() {
  return sm;
}
var am = te({}, rl, {
    key: function (e) {
      if (e.key) {
        var t = lm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Fl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? om[e.keyCode] || "Unidentified"
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
    getModifierState: Qs,
    charCode: function (e) {
      return e.type === "keypress" ? Fl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Fl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  um = Ue(am),
  cm = te({}, Co, {
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
  Ka = Ue(cm),
  dm = te({}, rl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Qs,
  }),
  fm = Ue(dm),
  pm = te({}, lr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  mm = Ue(pm),
  hm = te({}, Co, {
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
  gm = Ue(hm),
  ym = [9, 13, 27, 32],
  Vs = Ot && "CompositionEvent" in window,
  Or = null;
Ot && "documentMode" in document && (Or = document.documentMode);
var vm = Ot && "TextEvent" in window && !Or,
  Wc = Ot && (!Vs || (Or && 8 < Or && 11 >= Or)),
  Xa = " ",
  qa = !1;
function Uc(e, t) {
  switch (e) {
    case "keyup":
      return ym.indexOf(t.keyCode) !== -1;
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
function Bc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Dn = !1;
function wm(e, t) {
  switch (e) {
    case "compositionend":
      return Bc(t);
    case "keypress":
      return t.which !== 32 ? null : ((qa = !0), Xa);
    case "textInput":
      return (e = t.data), e === Xa && qa ? null : e;
    default:
      return null;
  }
}
function xm(e, t) {
  if (Dn)
    return e === "compositionend" || (!Vs && Uc(e, t))
      ? ((e = Hc()), ($l = Us = Qt = null), (Dn = !1), e)
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
      return Wc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Sm = {
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
function Ja(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Sm[e.type] : t === "textarea";
}
function Qc(e, t, n, r) {
  kc(r),
    (t = Jl(t, "onChange")),
    0 < t.length &&
      ((n = new Bs("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var _r = null,
  Ur = null;
function km(e) {
  nd(e, 0);
}
function Po(e) {
  var t = Rn(e);
  if (hc(t)) return e;
}
function Em(e, t) {
  if (e === "change") return t;
}
var Vc = !1;
if (Ot) {
  var ni;
  if (Ot) {
    var ri = "oninput" in document;
    if (!ri) {
      var Za = document.createElement("div");
      Za.setAttribute("oninput", "return;"),
        (ri = typeof Za.oninput == "function");
    }
    ni = ri;
  } else ni = !1;
  Vc = ni && (!document.documentMode || 9 < document.documentMode);
}
function eu() {
  _r && (_r.detachEvent("onpropertychange", Yc), (Ur = _r = null));
}
function Yc(e) {
  if (e.propertyName === "value" && Po(Ur)) {
    var t = [];
    Qc(t, Ur, e, zs(e)), Pc(km, t);
  }
}
function Nm(e, t, n) {
  e === "focusin"
    ? (eu(), (_r = t), (Ur = n), _r.attachEvent("onpropertychange", Yc))
    : e === "focusout" && eu();
}
function Cm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Po(Ur);
}
function Pm(e, t) {
  if (e === "click") return Po(t);
}
function jm(e, t) {
  if (e === "input" || e === "change") return Po(t);
}
function Tm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ct = typeof Object.is == "function" ? Object.is : Tm;
function Br(e, t) {
  if (ct(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Ti.call(t, l) || !ct(e[l], t[l])) return !1;
  }
  return !0;
}
function tu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function nu(e, t) {
  var n = tu(e);
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
    n = tu(n);
  }
}
function Gc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Gc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Kc() {
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
function Ys(e) {
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
function Om(e) {
  var t = Kc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Gc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ys(n)) {
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
          (l = nu(n, o));
        var i = nu(n, r);
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
var _m = Ot && "documentMode" in document && 11 >= document.documentMode,
  $n = null,
  Yi = null,
  Lr = null,
  Gi = !1;
function ru(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Gi ||
    $n == null ||
    $n !== Ql(r) ||
    ((r = $n),
    "selectionStart" in r && Ys(r)
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
    (Lr && Br(Lr, r)) ||
      ((Lr = r),
      (r = Jl(Yi, "onSelect")),
      0 < r.length &&
        ((t = new Bs("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = $n))));
}
function xl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Fn = {
    animationend: xl("Animation", "AnimationEnd"),
    animationiteration: xl("Animation", "AnimationIteration"),
    animationstart: xl("Animation", "AnimationStart"),
    transitionend: xl("Transition", "TransitionEnd"),
  },
  li = {},
  Xc = {};
Ot &&
  ((Xc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Fn.animationend.animation,
    delete Fn.animationiteration.animation,
    delete Fn.animationstart.animation),
  "TransitionEvent" in window || delete Fn.transitionend.transition);
function jo(e) {
  if (li[e]) return li[e];
  if (!Fn[e]) return e;
  var t = Fn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Xc) return (li[e] = t[n]);
  return e;
}
var qc = jo("animationend"),
  Jc = jo("animationiteration"),
  Zc = jo("animationstart"),
  ed = jo("transitionend"),
  td = new Map(),
  lu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function ln(e, t) {
  td.set(e, t), jn(t, [e]);
}
for (var oi = 0; oi < lu.length; oi++) {
  var ii = lu[oi],
    Lm = ii.toLowerCase(),
    Mm = ii[0].toUpperCase() + ii.slice(1);
  ln(Lm, "on" + Mm);
}
ln(qc, "onAnimationEnd");
ln(Jc, "onAnimationIteration");
ln(Zc, "onAnimationStart");
ln("dblclick", "onDoubleClick");
ln("focusin", "onFocus");
ln("focusout", "onBlur");
ln(ed, "onTransitionEnd");
Xn("onMouseEnter", ["mouseout", "mouseover"]);
Xn("onMouseLeave", ["mouseout", "mouseover"]);
Xn("onPointerEnter", ["pointerout", "pointerover"]);
Xn("onPointerLeave", ["pointerout", "pointerover"]);
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
  bm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));
function ou(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Lp(r, t, void 0, e), (e.currentTarget = null);
}
function nd(e, t) {
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
            u = s.currentTarget;
          if (((s = s.listener), a !== o && l.isPropagationStopped())) break e;
          ou(l, s, u), (o = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== o && l.isPropagationStopped())
          )
            break e;
          ou(l, s, u), (o = a);
        }
    }
  }
  if (Yl) throw ((e = Ui), (Yl = !1), (Ui = null), e);
}
function Y(e, t) {
  var n = t[Zi];
  n === void 0 && (n = t[Zi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (rd(t, e, 2, !1), n.add(r));
}
function si(e, t, n) {
  var r = 0;
  t && (r |= 4), rd(n, e, r, t);
}
var Sl = "_reactListening" + Math.random().toString(36).slice(2);
function Qr(e) {
  if (!e[Sl]) {
    (e[Sl] = !0),
      cc.forEach(function (n) {
        n !== "selectionchange" && (bm.has(n) || si(n, !1, e), si(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Sl] || ((t[Sl] = !0), si("selectionchange", !1, t));
  }
}
function rd(e, t, n, r) {
  switch (Ac(t)) {
    case 1:
      var l = Yp;
      break;
    case 4:
      l = Gp;
      break;
    default:
      l = Ws;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Wi ||
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
function ai(e, t, n, r, l) {
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
          if (((i = pn(s)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = o = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Pc(function () {
    var u = o,
      d = zs(n),
      p = [];
    e: {
      var g = td.get(e);
      if (g !== void 0) {
        var v = Bs,
          w = e;
        switch (e) {
          case "keypress":
            if (Fl(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = um;
            break;
          case "focusin":
            (w = "focus"), (v = ti);
            break;
          case "focusout":
            (w = "blur"), (v = ti);
            break;
          case "beforeblur":
          case "afterblur":
            v = ti;
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
            v = Ya;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = qp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = fm;
            break;
          case qc:
          case Jc:
          case Zc:
            v = em;
            break;
          case ed:
            v = mm;
            break;
          case "scroll":
            v = Kp;
            break;
          case "wheel":
            v = gm;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = nm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Ka;
        }
        var x = (t & 4) !== 0,
          N = !x && e === "scroll",
          h = x ? (g !== null ? g + "Capture" : null) : g;
        x = [];
        for (var f = u, m; f !== null; ) {
          m = f;
          var k = m.stateNode;
          if (
            (m.tag === 5 &&
              k !== null &&
              ((m = k),
              h !== null && ((k = Ir(f, h)), k != null && x.push(Vr(f, k, m)))),
            N)
          )
            break;
          f = f.return;
        }
        0 < x.length &&
          ((g = new v(g, w, null, n, d)), p.push({ event: g, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          g &&
            n !== Ai &&
            (w = n.relatedTarget || n.fromElement) &&
            (pn(w) || w[_t]))
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
              (w = w ? pn(w) : null),
              w !== null &&
                ((N = Tn(w)), w !== N || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((v = null), (w = u)),
          v !== w)
        ) {
          if (
            ((x = Ya),
            (k = "onMouseLeave"),
            (h = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Ka),
              (k = "onPointerLeave"),
              (h = "onPointerEnter"),
              (f = "pointer")),
            (N = v == null ? g : Rn(v)),
            (m = w == null ? g : Rn(w)),
            (g = new x(k, f + "leave", v, n, d)),
            (g.target = N),
            (g.relatedTarget = m),
            (k = null),
            pn(d) === u &&
              ((x = new x(h, f + "enter", w, n, d)),
              (x.target = m),
              (x.relatedTarget = N),
              (k = x)),
            (N = k),
            v && w)
          )
            t: {
              for (x = v, h = w, f = 0, m = x; m; m = _n(m)) f++;
              for (m = 0, k = h; k; k = _n(k)) m++;
              for (; 0 < f - m; ) (x = _n(x)), f--;
              for (; 0 < m - f; ) (h = _n(h)), m--;
              for (; f--; ) {
                if (x === h || (h !== null && x === h.alternate)) break t;
                (x = _n(x)), (h = _n(h));
              }
              x = null;
            }
          else x = null;
          v !== null && iu(p, g, v, x, !1),
            w !== null && N !== null && iu(p, N, w, x, !0);
        }
      }
      e: {
        if (
          ((g = u ? Rn(u) : window),
          (v = g.nodeName && g.nodeName.toLowerCase()),
          v === "select" || (v === "input" && g.type === "file"))
        )
          var P = Em;
        else if (Ja(g))
          if (Vc) P = jm;
          else {
            P = Cm;
            var C = Nm;
          }
        else
          (v = g.nodeName) &&
            v.toLowerCase() === "input" &&
            (g.type === "checkbox" || g.type === "radio") &&
            (P = Pm);
        if (P && (P = P(e, u))) {
          Qc(p, P, n, d);
          break e;
        }
        C && C(e, g, u),
          e === "focusout" &&
            (C = g._wrapperState) &&
            C.controlled &&
            g.type === "number" &&
            $i(g, "number", g.value);
      }
      switch (((C = u ? Rn(u) : window), e)) {
        case "focusin":
          (Ja(C) || C.contentEditable === "true") &&
            (($n = C), (Yi = u), (Lr = null));
          break;
        case "focusout":
          Lr = Yi = $n = null;
          break;
        case "mousedown":
          Gi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Gi = !1), ru(p, n, d);
          break;
        case "selectionchange":
          if (_m) break;
        case "keydown":
        case "keyup":
          ru(p, n, d);
      }
      var O;
      if (Vs)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        Dn
          ? Uc(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L &&
        (Wc &&
          n.locale !== "ko" &&
          (Dn || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && Dn && (O = Hc())
            : ((Qt = d),
              (Us = "value" in Qt ? Qt.value : Qt.textContent),
              (Dn = !0))),
        (C = Jl(u, L)),
        0 < C.length &&
          ((L = new Ga(L, e, null, n, d)),
          p.push({ event: L, listeners: C }),
          O ? (L.data = O) : ((O = Bc(n)), O !== null && (L.data = O)))),
        (O = vm ? wm(e, n) : xm(e, n)) &&
          ((u = Jl(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Ga("onBeforeInput", "beforeinput", null, n, d)),
            p.push({ event: d, listeners: u }),
            (d.data = O)));
    }
    nd(p, t);
  });
}
function Vr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Jl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Ir(e, n)),
      o != null && r.unshift(Vr(e, o, l)),
      (o = Ir(e, t)),
      o != null && r.push(Vr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function _n(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function iu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      l
        ? ((a = Ir(n, o)), a != null && i.unshift(Vr(n, a, s)))
        : l || ((a = Ir(n, o)), a != null && i.push(Vr(n, a, s)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Dm = /\r\n?/g,
  $m = /\u0000|\uFFFD/g;
function su(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Dm,
      `
`
    )
    .replace($m, "");
}
function kl(e, t, n) {
  if (((t = su(t)), su(e) !== t && n)) throw Error(E(425));
}
function Zl() {}
var Ki = null,
  Xi = null;
function qi(e, t) {
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
var Ji = typeof setTimeout == "function" ? setTimeout : void 0,
  Fm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  au = typeof Promise == "function" ? Promise : void 0,
  Rm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof au < "u"
      ? function (e) {
          return au.resolve(null).then(e).catch(zm);
        }
      : Ji;
function zm(e) {
  setTimeout(function () {
    throw e;
  });
}
function ui(e, t) {
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
function qt(e) {
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
function uu(e) {
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
var or = Math.random().toString(36).slice(2),
  ht = "__reactFiber$" + or,
  Yr = "__reactProps$" + or,
  _t = "__reactContainer$" + or,
  Zi = "__reactEvents$" + or,
  Im = "__reactListeners$" + or,
  Am = "__reactHandles$" + or;
function pn(e) {
  var t = e[ht];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[_t] || n[ht])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = uu(e); e !== null; ) {
          if ((n = e[ht])) return n;
          e = uu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ll(e) {
  return (
    (e = e[ht] || e[_t]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Rn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function To(e) {
  return e[Yr] || null;
}
var es = [],
  zn = -1;
function on(e) {
  return { current: e };
}
function G(e) {
  0 > zn || ((e.current = es[zn]), (es[zn] = null), zn--);
}
function V(e, t) {
  zn++, (es[zn] = e.current), (e.current = t);
}
var rn = {},
  ke = on(rn),
  be = on(!1),
  Sn = rn;
function qn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return rn;
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
function De(e) {
  return (e = e.childContextTypes), e != null;
}
function eo() {
  G(be), G(ke);
}
function cu(e, t, n) {
  if (ke.current !== rn) throw Error(E(168));
  V(ke, t), V(be, n);
}
function ld(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(E(108, Np(e) || "Unknown", l));
  return te({}, n, r);
}
function to(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || rn),
    (Sn = ke.current),
    V(ke, e),
    V(be, be.current),
    !0
  );
}
function du(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n
    ? ((e = ld(e, t, Sn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      G(be),
      G(ke),
      V(ke, e))
    : G(be),
    V(be, n);
}
var Et = null,
  Oo = !1,
  ci = !1;
function od(e) {
  Et === null ? (Et = [e]) : Et.push(e);
}
function Hm(e) {
  (Oo = !0), od(e);
}
function sn() {
  if (!ci && Et !== null) {
    ci = !0;
    var e = 0,
      t = B;
    try {
      var n = Et;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Et = null), (Oo = !1);
    } catch (l) {
      throw (Et !== null && (Et = Et.slice(e + 1)), _c(Is, sn), l);
    } finally {
      (B = t), (ci = !1);
    }
  }
  return null;
}
var In = [],
  An = 0,
  no = null,
  ro = 0,
  Qe = [],
  Ve = 0,
  kn = null,
  Nt = 1,
  Ct = "";
function un(e, t) {
  (In[An++] = ro), (In[An++] = no), (no = e), (ro = t);
}
function id(e, t, n) {
  (Qe[Ve++] = Nt), (Qe[Ve++] = Ct), (Qe[Ve++] = kn), (kn = e);
  var r = Nt;
  e = Ct;
  var l = 32 - at(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - at(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Nt = (1 << (32 - at(t) + l)) | (n << l) | r),
      (Ct = o + e);
  } else (Nt = (1 << o) | (n << l) | r), (Ct = e);
}
function Gs(e) {
  e.return !== null && (un(e, 1), id(e, 1, 0));
}
function Ks(e) {
  for (; e === no; )
    (no = In[--An]), (In[An] = null), (ro = In[--An]), (In[An] = null);
  for (; e === kn; )
    (kn = Qe[--Ve]),
      (Qe[Ve] = null),
      (Ct = Qe[--Ve]),
      (Qe[Ve] = null),
      (Nt = Qe[--Ve]),
      (Qe[Ve] = null);
}
var Ae = null,
  Ie = null,
  X = !1,
  st = null;
function sd(e, t) {
  var n = Ye(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function fu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ae = e), (Ie = qt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ae = e), (Ie = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = kn !== null ? { id: Nt, overflow: Ct } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ye(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ae = e),
            (Ie = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ts(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ns(e) {
  if (X) {
    var t = Ie;
    if (t) {
      var n = t;
      if (!fu(e, t)) {
        if (ts(e)) throw Error(E(418));
        t = qt(n.nextSibling);
        var r = Ae;
        t && fu(e, t)
          ? sd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (X = !1), (Ae = e));
      }
    } else {
      if (ts(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (X = !1), (Ae = e);
    }
  }
}
function pu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ae = e;
}
function El(e) {
  if (e !== Ae) return !1;
  if (!X) return pu(e), (X = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !qi(e.type, e.memoizedProps))),
    t && (t = Ie))
  ) {
    if (ts(e)) throw (ad(), Error(E(418)));
    for (; t; ) sd(e, t), (t = qt(t.nextSibling));
  }
  if ((pu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ie = qt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ie = null;
    }
  } else Ie = Ae ? qt(e.stateNode.nextSibling) : null;
  return !0;
}
function ad() {
  for (var e = Ie; e; ) e = qt(e.nextSibling);
}
function Jn() {
  (Ie = Ae = null), (X = !1);
}
function Xs(e) {
  st === null ? (st = [e]) : st.push(e);
}
var Wm = bt.ReactCurrentBatchConfig;
function hr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
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
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function Nl(e, t) {
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
function mu(e) {
  var t = e._init;
  return t(e._payload);
}
function ud(e) {
  function t(h, f) {
    if (e) {
      var m = h.deletions;
      m === null ? ((h.deletions = [f]), (h.flags |= 16)) : m.push(f);
    }
  }
  function n(h, f) {
    if (!e) return null;
    for (; f !== null; ) t(h, f), (f = f.sibling);
    return null;
  }
  function r(h, f) {
    for (h = new Map(); f !== null; )
      f.key !== null ? h.set(f.key, f) : h.set(f.index, f), (f = f.sibling);
    return h;
  }
  function l(h, f) {
    return (h = tn(h, f)), (h.index = 0), (h.sibling = null), h;
  }
  function o(h, f, m) {
    return (
      (h.index = m),
      e
        ? ((m = h.alternate),
          m !== null
            ? ((m = m.index), m < f ? ((h.flags |= 2), f) : m)
            : ((h.flags |= 2), f))
        : ((h.flags |= 1048576), f)
    );
  }
  function i(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, f, m, k) {
    return f === null || f.tag !== 6
      ? ((f = yi(m, h.mode, k)), (f.return = h), f)
      : ((f = l(f, m)), (f.return = h), f);
  }
  function a(h, f, m, k) {
    var P = m.type;
    return P === bn
      ? d(h, f, m.props.children, k, m.key)
      : f !== null &&
        (f.elementType === P ||
          (typeof P == "object" &&
            P !== null &&
            P.$$typeof === It &&
            mu(P) === f.type))
      ? ((k = l(f, m.props)), (k.ref = hr(h, f, m)), (k.return = h), k)
      : ((k = Ul(m.type, m.key, m.props, null, h.mode, k)),
        (k.ref = hr(h, f, m)),
        (k.return = h),
        k);
  }
  function u(h, f, m, k) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== m.containerInfo ||
      f.stateNode.implementation !== m.implementation
      ? ((f = vi(m, h.mode, k)), (f.return = h), f)
      : ((f = l(f, m.children || [])), (f.return = h), f);
  }
  function d(h, f, m, k, P) {
    return f === null || f.tag !== 7
      ? ((f = wn(m, h.mode, k, P)), (f.return = h), f)
      : ((f = l(f, m)), (f.return = h), f);
  }
  function p(h, f, m) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = yi("" + f, h.mode, m)), (f.return = h), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case pl:
          return (
            (m = Ul(f.type, f.key, f.props, null, h.mode, m)),
            (m.ref = hr(h, null, f)),
            (m.return = h),
            m
          );
        case Mn:
          return (f = vi(f, h.mode, m)), (f.return = h), f;
        case It:
          var k = f._init;
          return p(h, k(f._payload), m);
      }
      if (Er(f) || cr(f))
        return (f = wn(f, h.mode, m, null)), (f.return = h), f;
      Nl(h, f);
    }
    return null;
  }
  function g(h, f, m, k) {
    var P = f !== null ? f.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return P !== null ? null : s(h, f, "" + m, k);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case pl:
          return m.key === P ? a(h, f, m, k) : null;
        case Mn:
          return m.key === P ? u(h, f, m, k) : null;
        case It:
          return (P = m._init), g(h, f, P(m._payload), k);
      }
      if (Er(m) || cr(m)) return P !== null ? null : d(h, f, m, k, null);
      Nl(h, m);
    }
    return null;
  }
  function v(h, f, m, k, P) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (h = h.get(m) || null), s(f, h, "" + k, P);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case pl:
          return (h = h.get(k.key === null ? m : k.key) || null), a(f, h, k, P);
        case Mn:
          return (h = h.get(k.key === null ? m : k.key) || null), u(f, h, k, P);
        case It:
          var C = k._init;
          return v(h, f, m, C(k._payload), P);
      }
      if (Er(k) || cr(k)) return (h = h.get(m) || null), d(f, h, k, P, null);
      Nl(f, k);
    }
    return null;
  }
  function w(h, f, m, k) {
    for (
      var P = null, C = null, O = f, L = (f = 0), F = null;
      O !== null && L < m.length;
      L++
    ) {
      O.index > L ? ((F = O), (O = null)) : (F = O.sibling);
      var D = g(h, O, m[L], k);
      if (D === null) {
        O === null && (O = F);
        break;
      }
      e && O && D.alternate === null && t(h, O),
        (f = o(D, f, L)),
        C === null ? (P = D) : (C.sibling = D),
        (C = D),
        (O = F);
    }
    if (L === m.length) return n(h, O), X && un(h, L), P;
    if (O === null) {
      for (; L < m.length; L++)
        (O = p(h, m[L], k)),
          O !== null &&
            ((f = o(O, f, L)), C === null ? (P = O) : (C.sibling = O), (C = O));
      return X && un(h, L), P;
    }
    for (O = r(h, O); L < m.length; L++)
      (F = v(O, h, L, m[L], k)),
        F !== null &&
          (e && F.alternate !== null && O.delete(F.key === null ? L : F.key),
          (f = o(F, f, L)),
          C === null ? (P = F) : (C.sibling = F),
          (C = F));
    return (
      e &&
        O.forEach(function (ie) {
          return t(h, ie);
        }),
      X && un(h, L),
      P
    );
  }
  function x(h, f, m, k) {
    var P = cr(m);
    if (typeof P != "function") throw Error(E(150));
    if (((m = P.call(m)), m == null)) throw Error(E(151));
    for (
      var C = (P = null), O = f, L = (f = 0), F = null, D = m.next();
      O !== null && !D.done;
      L++, D = m.next()
    ) {
      O.index > L ? ((F = O), (O = null)) : (F = O.sibling);
      var ie = g(h, O, D.value, k);
      if (ie === null) {
        O === null && (O = F);
        break;
      }
      e && O && ie.alternate === null && t(h, O),
        (f = o(ie, f, L)),
        C === null ? (P = ie) : (C.sibling = ie),
        (C = ie),
        (O = F);
    }
    if (D.done) return n(h, O), X && un(h, L), P;
    if (O === null) {
      for (; !D.done; L++, D = m.next())
        (D = p(h, D.value, k)),
          D !== null &&
            ((f = o(D, f, L)), C === null ? (P = D) : (C.sibling = D), (C = D));
      return X && un(h, L), P;
    }
    for (O = r(h, O); !D.done; L++, D = m.next())
      (D = v(O, h, L, D.value, k)),
        D !== null &&
          (e && D.alternate !== null && O.delete(D.key === null ? L : D.key),
          (f = o(D, f, L)),
          C === null ? (P = D) : (C.sibling = D),
          (C = D));
    return (
      e &&
        O.forEach(function (Ee) {
          return t(h, Ee);
        }),
      X && un(h, L),
      P
    );
  }
  function N(h, f, m, k) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === bn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case pl:
          e: {
            for (var P = m.key, C = f; C !== null; ) {
              if (C.key === P) {
                if (((P = m.type), P === bn)) {
                  if (C.tag === 7) {
                    n(h, C.sibling),
                      (f = l(C, m.props.children)),
                      (f.return = h),
                      (h = f);
                    break e;
                  }
                } else if (
                  C.elementType === P ||
                  (typeof P == "object" &&
                    P !== null &&
                    P.$$typeof === It &&
                    mu(P) === C.type)
                ) {
                  n(h, C.sibling),
                    (f = l(C, m.props)),
                    (f.ref = hr(h, C, m)),
                    (f.return = h),
                    (h = f);
                  break e;
                }
                n(h, C);
                break;
              } else t(h, C);
              C = C.sibling;
            }
            m.type === bn
              ? ((f = wn(m.props.children, h.mode, k, m.key)),
                (f.return = h),
                (h = f))
              : ((k = Ul(m.type, m.key, m.props, null, h.mode, k)),
                (k.ref = hr(h, f, m)),
                (k.return = h),
                (h = k));
          }
          return i(h);
        case Mn:
          e: {
            for (C = m.key; f !== null; ) {
              if (f.key === C)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === m.containerInfo &&
                  f.stateNode.implementation === m.implementation
                ) {
                  n(h, f.sibling),
                    (f = l(f, m.children || [])),
                    (f.return = h),
                    (h = f);
                  break e;
                } else {
                  n(h, f);
                  break;
                }
              else t(h, f);
              f = f.sibling;
            }
            (f = vi(m, h.mode, k)), (f.return = h), (h = f);
          }
          return i(h);
        case It:
          return (C = m._init), N(h, f, C(m._payload), k);
      }
      if (Er(m)) return w(h, f, m, k);
      if (cr(m)) return x(h, f, m, k);
      Nl(h, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        f !== null && f.tag === 6
          ? (n(h, f.sibling), (f = l(f, m)), (f.return = h), (h = f))
          : (n(h, f), (f = yi(m, h.mode, k)), (f.return = h), (h = f)),
        i(h))
      : n(h, f);
  }
  return N;
}
var Zn = ud(!0),
  cd = ud(!1),
  lo = on(null),
  oo = null,
  Hn = null,
  qs = null;
function Js() {
  qs = Hn = oo = null;
}
function Zs(e) {
  var t = lo.current;
  G(lo), (e._currentValue = t);
}
function rs(e, t, n) {
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
function Gn(e, t) {
  (oo = e),
    (qs = Hn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Me = !0), (e.firstContext = null));
}
function Ke(e) {
  var t = e._currentValue;
  if (qs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Hn === null)) {
      if (oo === null) throw Error(E(308));
      (Hn = e), (oo.dependencies = { lanes: 0, firstContext: e });
    } else Hn = Hn.next = e;
  return t;
}
var mn = null;
function ea(e) {
  mn === null ? (mn = [e]) : mn.push(e);
}
function dd(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), ea(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Lt(e, r)
  );
}
function Lt(e, t) {
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
function ta(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function fd(e, t) {
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
function Pt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Jt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), H & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Lt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), ea(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Lt(e, n)
  );
}
function Rl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), As(e, n);
  }
}
function hu(e, t) {
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
function io(e, t, n, r) {
  var l = e.updateQueue;
  At = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), i === null ? (o = u) : (i.next = u), (i = a);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (s = d.lastBaseUpdate),
      s !== i &&
        (s === null ? (d.firstBaseUpdate = u) : (s.next = u),
        (d.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var p = l.baseState;
    (i = 0), (d = u = a = null), (s = o);
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
                p = w.call(v, p, g);
                break e;
              }
              p = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = x.payload),
                (g = typeof w == "function" ? w.call(v, p, g) : w),
                g == null)
              )
                break e;
              p = te({}, p, g);
              break e;
            case 2:
              At = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (g = l.effects),
          g === null ? (l.effects = [s]) : g.push(s));
      } else
        (v = {
          eventTime: v,
          lane: g,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          d === null ? ((u = d = v), (a = p)) : (d = d.next = v),
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
      (l.firstBaseUpdate = u),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Nn |= i), (e.lanes = i), (e.memoizedState = p);
  }
}
function gu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(E(191, l));
        l.call(r);
      }
    }
}
var ol = {},
  yt = on(ol),
  Gr = on(ol),
  Kr = on(ol);
function hn(e) {
  if (e === ol) throw Error(E(174));
  return e;
}
function na(e, t) {
  switch ((V(Kr, t), V(Gr, e), V(yt, ol), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ri(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ri(t, e));
  }
  G(yt), V(yt, t);
}
function er() {
  G(yt), G(Gr), G(Kr);
}
function pd(e) {
  hn(Kr.current);
  var t = hn(yt.current),
    n = Ri(t, e.type);
  t !== n && (V(Gr, e), V(yt, n));
}
function ra(e) {
  Gr.current === e && (G(yt), G(Gr));
}
var Z = on(0);
function so(e) {
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
var di = [];
function la() {
  for (var e = 0; e < di.length; e++)
    di[e]._workInProgressVersionPrimary = null;
  di.length = 0;
}
var zl = bt.ReactCurrentDispatcher,
  fi = bt.ReactCurrentBatchConfig,
  En = 0,
  ee = null,
  ue = null,
  de = null,
  ao = !1,
  Mr = !1,
  Xr = 0,
  Um = 0;
function ve() {
  throw Error(E(321));
}
function oa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ct(e[n], t[n])) return !1;
  return !0;
}
function ia(e, t, n, r, l, o) {
  if (
    ((En = o),
    (ee = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (zl.current = e === null || e.memoizedState === null ? Ym : Gm),
    (e = n(r, l)),
    Mr)
  ) {
    o = 0;
    do {
      if (((Mr = !1), (Xr = 0), 25 <= o)) throw Error(E(301));
      (o += 1),
        (de = ue = null),
        (t.updateQueue = null),
        (zl.current = Km),
        (e = n(r, l));
    } while (Mr);
  }
  if (
    ((zl.current = uo),
    (t = ue !== null && ue.next !== null),
    (En = 0),
    (de = ue = ee = null),
    (ao = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function sa() {
  var e = Xr !== 0;
  return (Xr = 0), e;
}
function mt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return de === null ? (ee.memoizedState = de = e) : (de = de.next = e), de;
}
function Xe() {
  if (ue === null) {
    var e = ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ue.next;
  var t = de === null ? ee.memoizedState : de.next;
  if (t !== null) (de = t), (ue = e);
  else {
    if (e === null) throw Error(E(310));
    (ue = e),
      (e = {
        memoizedState: ue.memoizedState,
        baseState: ue.baseState,
        baseQueue: ue.baseQueue,
        queue: ue.queue,
        next: null,
      }),
      de === null ? (ee.memoizedState = de = e) : (de = de.next = e);
  }
  return de;
}
function qr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function pi(e) {
  var t = Xe(),
    n = t.queue;
  if (n === null) throw Error(E(311));
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
      u = o;
    do {
      var d = u.lane;
      if ((En & d) === d)
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
          (ee.lanes |= d),
          (Nn |= d);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (i = r) : (a.next = s),
      ct(r, t.memoizedState) || (Me = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (ee.lanes |= o), (Nn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function mi(e) {
  var t = Xe(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    ct(o, t.memoizedState) || (Me = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function md() {}
function hd(e, t) {
  var n = ee,
    r = Xe(),
    l = t(),
    o = !ct(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Me = !0)),
    (r = r.queue),
    aa(vd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (de !== null && de.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Jr(9, yd.bind(null, n, r, l, t), void 0, null),
      fe === null)
    )
      throw Error(E(349));
    En & 30 || gd(n, t, l);
  }
  return l;
}
function gd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function yd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), wd(t) && xd(e);
}
function vd(e, t, n) {
  return n(function () {
    wd(t) && xd(e);
  });
}
function wd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ct(e, n);
  } catch {
    return !0;
  }
}
function xd(e) {
  var t = Lt(e, 1);
  t !== null && ut(t, e, 1, -1);
}
function yu(e) {
  var t = mt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Vm.bind(null, ee, e)),
    [t.memoizedState, e]
  );
}
function Jr(e, t, n, r) {
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
function Sd() {
  return Xe().memoizedState;
}
function Il(e, t, n, r) {
  var l = mt();
  (ee.flags |= e),
    (l.memoizedState = Jr(1 | t, n, void 0, r === void 0 ? null : r));
}
function _o(e, t, n, r) {
  var l = Xe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ue !== null) {
    var i = ue.memoizedState;
    if (((o = i.destroy), r !== null && oa(r, i.deps))) {
      l.memoizedState = Jr(t, n, o, r);
      return;
    }
  }
  (ee.flags |= e), (l.memoizedState = Jr(1 | t, n, o, r));
}
function vu(e, t) {
  return Il(8390656, 8, e, t);
}
function aa(e, t) {
  return _o(2048, 8, e, t);
}
function kd(e, t) {
  return _o(4, 2, e, t);
}
function Ed(e, t) {
  return _o(4, 4, e, t);
}
function Nd(e, t) {
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
function Cd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), _o(4, 4, Nd.bind(null, t, e), n)
  );
}
function ua() {}
function Pd(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && oa(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function jd(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && oa(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Td(e, t, n) {
  return En & 21
    ? (ct(n, t) || ((n = bc()), (ee.lanes |= n), (Nn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Me = !0)), (e.memoizedState = n));
}
function Bm(e, t) {
  var n = B;
  (B = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = fi.transition;
  fi.transition = {};
  try {
    e(!1), t();
  } finally {
    (B = n), (fi.transition = r);
  }
}
function Od() {
  return Xe().memoizedState;
}
function Qm(e, t, n) {
  var r = en(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    _d(e))
  )
    Ld(t, n);
  else if (((n = dd(e, t, n, r)), n !== null)) {
    var l = je();
    ut(n, e, r, l), Md(n, t, r);
  }
}
function Vm(e, t, n) {
  var r = en(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (_d(e)) Ld(t, l);
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
        if (((l.hasEagerState = !0), (l.eagerState = s), ct(s, i))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), ea(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = dd(e, t, l, r)),
      n !== null && ((l = je()), ut(n, e, r, l), Md(n, t, r));
  }
}
function _d(e) {
  var t = e.alternate;
  return e === ee || (t !== null && t === ee);
}
function Ld(e, t) {
  Mr = ao = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Md(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), As(e, n);
  }
}
var uo = {
    readContext: Ke,
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
  Ym = {
    readContext: Ke,
    useCallback: function (e, t) {
      return (mt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ke,
    useEffect: vu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Il(4194308, 4, Nd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Il(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Il(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = mt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = mt();
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
        (e = e.dispatch = Qm.bind(null, ee, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = mt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: yu,
    useDebugValue: ua,
    useDeferredValue: function (e) {
      return (mt().memoizedState = e);
    },
    useTransition: function () {
      var e = yu(!1),
        t = e[0];
      return (e = Bm.bind(null, e[1])), (mt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ee,
        l = mt();
      if (X) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), fe === null)) throw Error(E(349));
        En & 30 || gd(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        vu(vd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Jr(9, yd.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = mt(),
        t = fe.identifierPrefix;
      if (X) {
        var n = Ct,
          r = Nt;
        (n = (r & ~(1 << (32 - at(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Xr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Um++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Gm = {
    readContext: Ke,
    useCallback: Pd,
    useContext: Ke,
    useEffect: aa,
    useImperativeHandle: Cd,
    useInsertionEffect: kd,
    useLayoutEffect: Ed,
    useMemo: jd,
    useReducer: pi,
    useRef: Sd,
    useState: function () {
      return pi(qr);
    },
    useDebugValue: ua,
    useDeferredValue: function (e) {
      var t = Xe();
      return Td(t, ue.memoizedState, e);
    },
    useTransition: function () {
      var e = pi(qr)[0],
        t = Xe().memoizedState;
      return [e, t];
    },
    useMutableSource: md,
    useSyncExternalStore: hd,
    useId: Od,
    unstable_isNewReconciler: !1,
  },
  Km = {
    readContext: Ke,
    useCallback: Pd,
    useContext: Ke,
    useEffect: aa,
    useImperativeHandle: Cd,
    useInsertionEffect: kd,
    useLayoutEffect: Ed,
    useMemo: jd,
    useReducer: mi,
    useRef: Sd,
    useState: function () {
      return mi(qr);
    },
    useDebugValue: ua,
    useDeferredValue: function (e) {
      var t = Xe();
      return ue === null ? (t.memoizedState = e) : Td(t, ue.memoizedState, e);
    },
    useTransition: function () {
      var e = mi(qr)[0],
        t = Xe().memoizedState;
      return [e, t];
    },
    useMutableSource: md,
    useSyncExternalStore: hd,
    useId: Od,
    unstable_isNewReconciler: !1,
  };
function ot(e, t) {
  if (e && e.defaultProps) {
    (t = te({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ls(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : te({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Lo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Tn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = je(),
      l = en(e),
      o = Pt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Jt(e, o, l)),
      t !== null && (ut(t, e, l, r), Rl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = je(),
      l = en(e),
      o = Pt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Jt(e, o, l)),
      t !== null && (ut(t, e, l, r), Rl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = je(),
      r = en(e),
      l = Pt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Jt(e, l, r)),
      t !== null && (ut(t, e, r, n), Rl(t, e, r));
  },
};
function wu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Br(n, r) || !Br(l, o)
      : !0
  );
}
function bd(e, t, n) {
  var r = !1,
    l = rn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ke(o))
      : ((l = De(t) ? Sn : ke.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? qn(e, l) : rn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Lo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function xu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Lo.enqueueReplaceState(t, t.state, null);
}
function os(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), ta(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Ke(o))
    : ((o = De(t) ? Sn : ke.current), (l.context = qn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (ls(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Lo.enqueueReplaceState(l, l.state, null),
      io(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function tr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Ep(r)), (r = r.return);
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
function hi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function is(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Xm = typeof WeakMap == "function" ? WeakMap : Map;
function Dd(e, t, n) {
  (n = Pt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      fo || ((fo = !0), (gs = r)), is(e, t);
    }),
    n
  );
}
function $d(e, t, n) {
  (n = Pt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        is(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        is(e, t),
          typeof r != "function" &&
            (Zt === null ? (Zt = new Set([this])) : Zt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Su(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Xm();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = ch.bind(null, e, t, n)), t.then(e, e));
}
function ku(e) {
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
function Eu(e, t, n, r, l) {
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
              : ((t = Pt(-1, 1)), (t.tag = 2), Jt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var qm = bt.ReactCurrentOwner,
  Me = !1;
function Pe(e, t, n, r) {
  t.child = e === null ? cd(t, null, n, r) : Zn(t, e.child, n, r);
}
function Nu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Gn(t, l),
    (r = ia(e, t, n, r, o, l)),
    (n = sa()),
    e !== null && !Me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Mt(e, t, l))
      : (X && n && Gs(t), (t.flags |= 1), Pe(e, t, r, l), t.child)
  );
}
function Cu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !ya(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Fd(e, t, o, r, l))
      : ((e = Ul(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Br), n(i, r) && e.ref === t.ref)
    )
      return Mt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = tn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Fd(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Br(o, r) && e.ref === t.ref)
      if (((Me = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Me = !0);
      else return (t.lanes = e.lanes), Mt(e, t, l);
  }
  return ss(e, t, n, r, l);
}
function Rd(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        V(Un, Re),
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
          V(Un, Re),
          (Re |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        V(Un, Re),
        (Re |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      V(Un, Re),
      (Re |= r);
  return Pe(e, t, l, n), t.child;
}
function zd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ss(e, t, n, r, l) {
  var o = De(n) ? Sn : ke.current;
  return (
    (o = qn(t, o)),
    Gn(t, l),
    (n = ia(e, t, n, r, o, l)),
    (r = sa()),
    e !== null && !Me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Mt(e, t, l))
      : (X && r && Gs(t), (t.flags |= 1), Pe(e, t, n, l), t.child)
  );
}
function Pu(e, t, n, r, l) {
  if (De(n)) {
    var o = !0;
    to(t);
  } else o = !1;
  if ((Gn(t, l), t.stateNode === null))
    Al(e, t), bd(t, n, r), os(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var a = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ke(u))
      : ((u = De(n) ? Sn : ke.current), (u = qn(t, u)));
    var d = n.getDerivedStateFromProps,
      p =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && xu(t, i, r, u)),
      (At = !1);
    var g = t.memoizedState;
    (i.state = g),
      io(t, r, i, l),
      (a = t.memoizedState),
      s !== r || g !== a || be.current || At
        ? (typeof d == "function" && (ls(t, n, d, r), (a = t.memoizedState)),
          (s = At || wu(t, n, s, r, g, a, u))
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
      fd(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : ot(t.type, s)),
      (i.props = u),
      (p = t.pendingProps),
      (g = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ke(a))
        : ((a = De(n) ? Sn : ke.current), (a = qn(t, a)));
    var v = n.getDerivedStateFromProps;
    (d =
      typeof v == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== p || g !== a) && xu(t, i, r, a)),
      (At = !1),
      (g = t.memoizedState),
      (i.state = g),
      io(t, r, i, l);
    var w = t.memoizedState;
    s !== p || g !== w || be.current || At
      ? (typeof v == "function" && (ls(t, n, v, r), (w = t.memoizedState)),
        (u = At || wu(t, n, u, r, g, w, a) || !1)
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
  return as(e, t, n, r, o, l);
}
function as(e, t, n, r, l, o) {
  zd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && du(t, n, !1), Mt(e, t, o);
  (r = t.stateNode), (qm.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Zn(t, e.child, null, o)), (t.child = Zn(t, null, s, o)))
      : Pe(e, t, s, o),
    (t.memoizedState = r.state),
    l && du(t, n, !0),
    t.child
  );
}
function Id(e) {
  var t = e.stateNode;
  t.pendingContext
    ? cu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && cu(e, t.context, !1),
    na(e, t.containerInfo);
}
function ju(e, t, n, r, l) {
  return Jn(), Xs(l), (t.flags |= 256), Pe(e, t, n, r), t.child;
}
var us = { dehydrated: null, treeContext: null, retryLane: 0 };
function cs(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ad(e, t, n) {
  var r = t.pendingProps,
    l = Z.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    V(Z, l & 1),
    e === null)
  )
    return (
      ns(t),
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
                : (o = Do(i, r, 0, null)),
              (e = wn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = cs(n)),
              (t.memoizedState = us),
              e)
            : ca(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return Jm(e, t, i, r, s, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (s = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = tn(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (o = tn(s, o)) : ((o = wn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? cs(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = us),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = tn(o, { mode: "visible", children: r.children })),
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
function ca(e, t) {
  return (
    (t = Do({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Cl(e, t, n, r) {
  return (
    r !== null && Xs(r),
    Zn(t, e.child, null, n),
    (e = ca(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Jm(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = hi(Error(E(422)))), Cl(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Do({ mode: "visible", children: r.children }, l, 0, null)),
        (o = wn(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Zn(t, e.child, null, i),
        (t.child.memoizedState = cs(i)),
        (t.memoizedState = us),
        o);
  if (!(t.mode & 1)) return Cl(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(E(419))), (r = hi(o, r, void 0)), Cl(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), Me || s)) {
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
          ((o.retryLane = l), Lt(e, l), ut(r, e, l, -1));
    }
    return ga(), (r = hi(Error(E(421)))), Cl(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = dh.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ie = qt(l.nextSibling)),
      (Ae = t),
      (X = !0),
      (st = null),
      e !== null &&
        ((Qe[Ve++] = Nt),
        (Qe[Ve++] = Ct),
        (Qe[Ve++] = kn),
        (Nt = e.id),
        (Ct = e.overflow),
        (kn = t)),
      (t = ca(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Tu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), rs(e.return, t, n);
}
function gi(e, t, n, r, l) {
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
function Hd(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((Pe(e, t, r.children, n), (r = Z.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Tu(e, n, t);
        else if (e.tag === 19) Tu(e, n, t);
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
  if ((V(Z, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && so(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          gi(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && so(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        gi(t, !0, n, null, o);
        break;
      case "together":
        gi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Al(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Mt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Nn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (
      e = t.child, n = tn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = tn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Zm(e, t, n) {
  switch (t.tag) {
    case 3:
      Id(t), Jn();
      break;
    case 5:
      pd(t);
      break;
    case 1:
      De(t.type) && to(t);
      break;
    case 4:
      na(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      V(lo, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (V(Z, Z.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ad(e, t, n)
          : (V(Z, Z.current & 1),
            (e = Mt(e, t, n)),
            e !== null ? e.sibling : null);
      V(Z, Z.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Hd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        V(Z, Z.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Rd(e, t, n);
  }
  return Mt(e, t, n);
}
var Wd, ds, Ud, Bd;
Wd = function (e, t) {
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
ds = function () {};
Ud = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), hn(yt.current);
    var o = null;
    switch (n) {
      case "input":
        (l = bi(e, l)), (r = bi(e, r)), (o = []);
        break;
      case "select":
        (l = te({}, l, { value: void 0 })),
          (r = te({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Fi(e, l)), (r = Fi(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Zl);
    }
    zi(n, r);
    var i;
    n = null;
    for (u in l)
      if (!r.hasOwnProperty(u) && l.hasOwnProperty(u) && l[u] != null)
        if (u === "style") {
          var s = l[u];
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Rr.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((s = l != null ? l[u] : void 0),
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
              (Rr.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && Y("scroll", e),
                  o || s === a || (o = []))
                : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Bd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function gr(e, t) {
  if (!X)
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
function we(e) {
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
function eh(e, t, n) {
  var r = t.pendingProps;
  switch ((Ks(t), t.tag)) {
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
      return we(t), null;
    case 1:
      return De(t.type) && eo(), we(t), null;
    case 3:
      return (
        (r = t.stateNode),
        er(),
        G(be),
        G(ke),
        la(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (El(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), st !== null && (ws(st), (st = null)))),
        ds(e, t),
        we(t),
        null
      );
    case 5:
      ra(t);
      var l = hn(Kr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ud(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return we(t), null;
        }
        if (((e = hn(yt.current)), El(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[ht] = t), (r[Yr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Y("cancel", r), Y("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Y("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Cr.length; l++) Y(Cr[l], r);
              break;
            case "source":
              Y("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Y("error", r), Y("load", r);
              break;
            case "details":
              Y("toggle", r);
              break;
            case "input":
              Ra(r, o), Y("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                Y("invalid", r);
              break;
            case "textarea":
              Ia(r, o), Y("invalid", r);
          }
          zi(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var s = o[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      kl(r.textContent, s, e),
                    (l = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      kl(r.textContent, s, e),
                    (l = ["children", "" + s]))
                : Rr.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  Y("scroll", r);
            }
          switch (n) {
            case "input":
              ml(r), za(r, o, !0);
              break;
            case "textarea":
              ml(r), Aa(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Zl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = vc(n)),
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
            (e[ht] = t),
            (e[Yr] = r),
            Wd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Ii(n, r)), n)) {
              case "dialog":
                Y("cancel", e), Y("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Y("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Cr.length; l++) Y(Cr[l], e);
                l = r;
                break;
              case "source":
                Y("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                Y("error", e), Y("load", e), (l = r);
                break;
              case "details":
                Y("toggle", e), (l = r);
                break;
              case "input":
                Ra(e, r), (l = bi(e, r)), Y("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = te({}, r, { value: void 0 })),
                  Y("invalid", e);
                break;
              case "textarea":
                Ia(e, r), (l = Fi(e, r)), Y("invalid", e);
                break;
              default:
                l = r;
            }
            zi(n, l), (s = l);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var a = s[o];
                o === "style"
                  ? Sc(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && wc(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && zr(e, a)
                    : typeof a == "number" && zr(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Rr.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && Y("scroll", e)
                      : a != null && Ds(e, o, a, i));
              }
            switch (n) {
              case "input":
                ml(e), za(e, r, !1);
                break;
              case "textarea":
                ml(e), Aa(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + nn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Bn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Bn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Zl);
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
      return we(t), null;
    case 6:
      if (e && t.stateNode != null) Bd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (((n = hn(Kr.current)), hn(yt.current), El(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ht] = t),
            (o = r.nodeValue !== n) && ((e = Ae), e !== null))
          )
            switch (e.tag) {
              case 3:
                kl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  kl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ht] = t),
            (t.stateNode = r);
      }
      return we(t), null;
    case 13:
      if (
        (G(Z),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (X && Ie !== null && t.mode & 1 && !(t.flags & 128))
          ad(), Jn(), (t.flags |= 98560), (o = !1);
        else if (((o = El(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(E(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(E(317));
            o[ht] = t;
          } else
            Jn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          we(t), (o = !1);
        } else st !== null && (ws(st), (st = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Z.current & 1 ? ce === 0 && (ce = 3) : ga())),
          t.updateQueue !== null && (t.flags |= 4),
          we(t),
          null);
    case 4:
      return (
        er(), ds(e, t), e === null && Qr(t.stateNode.containerInfo), we(t), null
      );
    case 10:
      return Zs(t.type._context), we(t), null;
    case 17:
      return De(t.type) && eo(), we(t), null;
    case 19:
      if ((G(Z), (o = t.memoizedState), o === null)) return we(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) gr(o, !1);
        else {
          if (ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = so(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    gr(o, !1),
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
                return V(Z, (Z.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            oe() > nr &&
            ((t.flags |= 128), (r = !0), gr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = so(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              gr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !X)
            )
              return we(t), null;
          } else
            2 * oe() - o.renderingStartTime > nr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), gr(o, !1), (t.lanes = 4194304));
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
          (o.renderingStartTime = oe()),
          (t.sibling = null),
          (n = Z.current),
          V(Z, r ? (n & 1) | 2 : n & 1),
          t)
        : (we(t), null);
    case 22:
    case 23:
      return (
        ha(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Re & 1073741824 && (we(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : we(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function th(e, t) {
  switch ((Ks(t), t.tag)) {
    case 1:
      return (
        De(t.type) && eo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        er(),
        G(be),
        G(ke),
        la(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ra(t), null;
    case 13:
      if ((G(Z), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        Jn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return G(Z), null;
    case 4:
      return er(), null;
    case 10:
      return Zs(t.type._context), null;
    case 22:
    case 23:
      return ha(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Pl = !1,
  xe = !1,
  nh = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function Wn(e, t) {
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
function fs(e, t, n) {
  try {
    n();
  } catch (r) {
    le(e, t, r);
  }
}
var Ou = !1;
function rh(e, t) {
  if (((Ki = Xl), (e = Kc()), Ys(e))) {
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
            u = 0,
            d = 0,
            p = e,
            g = null;
          t: for (;;) {
            for (
              var v;
              p !== n || (l !== 0 && p.nodeType !== 3) || (s = i + l),
                p !== o || (r !== 0 && p.nodeType !== 3) || (a = i + r),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (v = p.firstChild) !== null;

            )
              (g = p), (p = v);
            for (;;) {
              if (p === e) break t;
              if (
                (g === n && ++u === l && (s = i),
                g === o && ++d === r && (a = i),
                (v = p.nextSibling) !== null)
              )
                break;
              (p = g), (g = p.parentNode);
            }
            p = v;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Xi = { focusedElem: e, selectionRange: n }, Xl = !1, _ = t; _ !== null; )
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
                  var x = w.memoizedProps,
                    N = w.memoizedState,
                    h = t.stateNode,
                    f = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : ot(t.type, x),
                      N
                    );
                  h.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
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
          le(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (w = Ou), (Ou = !1), w;
}
function br(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && fs(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Mo(e, t) {
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
function ps(e) {
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
function Qd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Qd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ht], delete t[Yr], delete t[Zi], delete t[Im], delete t[Am])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Vd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function _u(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Vd(e.return)) return null;
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
function ms(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Zl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ms(e, t, n), e = e.sibling; e !== null; ) ms(e, t, n), (e = e.sibling);
}
function hs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (hs(e, t, n), e = e.sibling; e !== null; ) hs(e, t, n), (e = e.sibling);
}
var pe = null,
  it = !1;
function Ft(e, t, n) {
  for (n = n.child; n !== null; ) Yd(e, t, n), (n = n.sibling);
}
function Yd(e, t, n) {
  if (gt && typeof gt.onCommitFiberUnmount == "function")
    try {
      gt.onCommitFiberUnmount(No, n);
    } catch {}
  switch (n.tag) {
    case 5:
      xe || Wn(n, t);
    case 6:
      var r = pe,
        l = it;
      (pe = null),
        Ft(e, t, n),
        (pe = r),
        (it = l),
        pe !== null &&
          (it
            ? ((e = pe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : pe.removeChild(n.stateNode));
      break;
    case 18:
      pe !== null &&
        (it
          ? ((e = pe),
            (n = n.stateNode),
            e.nodeType === 8
              ? ui(e.parentNode, n)
              : e.nodeType === 1 && ui(e, n),
            Wr(e))
          : ui(pe, n.stateNode));
      break;
    case 4:
      (r = pe),
        (l = it),
        (pe = n.stateNode.containerInfo),
        (it = !0),
        Ft(e, t, n),
        (pe = r),
        (it = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !xe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && fs(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Ft(e, t, n);
      break;
    case 1:
      if (
        !xe &&
        (Wn(n, t),
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
      Ft(e, t, n);
      break;
    case 21:
      Ft(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((xe = (r = xe) || n.memoizedState !== null), Ft(e, t, n), (xe = r))
        : Ft(e, t, n);
      break;
    default:
      Ft(e, t, n);
  }
}
function Lu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new nh()),
      t.forEach(function (r) {
        var l = fh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function lt(e, t) {
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
              (pe = s.stateNode), (it = !1);
              break e;
            case 3:
              (pe = s.stateNode.containerInfo), (it = !0);
              break e;
            case 4:
              (pe = s.stateNode.containerInfo), (it = !0);
              break e;
          }
          s = s.return;
        }
        if (pe === null) throw Error(E(160));
        Yd(o, i, l), (pe = null), (it = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (u) {
        le(l, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Gd(t, e), (t = t.sibling);
}
function Gd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((lt(t, e), pt(e), r & 4)) {
        try {
          br(3, e, e.return), Mo(3, e);
        } catch (x) {
          le(e, e.return, x);
        }
        try {
          br(5, e, e.return);
        } catch (x) {
          le(e, e.return, x);
        }
      }
      break;
    case 1:
      lt(t, e), pt(e), r & 512 && n !== null && Wn(n, n.return);
      break;
    case 5:
      if (
        (lt(t, e),
        pt(e),
        r & 512 && n !== null && Wn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          zr(l, "");
        } catch (x) {
          le(e, e.return, x);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && gc(l, o),
              Ii(s, i);
            var u = Ii(s, o);
            for (i = 0; i < a.length; i += 2) {
              var d = a[i],
                p = a[i + 1];
              d === "style"
                ? Sc(l, p)
                : d === "dangerouslySetInnerHTML"
                ? wc(l, p)
                : d === "children"
                ? zr(l, p)
                : Ds(l, d, p, u);
            }
            switch (s) {
              case "input":
                Di(l, o);
                break;
              case "textarea":
                yc(l, o);
                break;
              case "select":
                var g = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? Bn(l, !!o.multiple, v, !1)
                  : g !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Bn(l, !!o.multiple, o.defaultValue, !0)
                      : Bn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Yr] = o;
          } catch (x) {
            le(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((lt(t, e), pt(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (x) {
          le(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (lt(t, e), pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Wr(t.containerInfo);
        } catch (x) {
          le(e, e.return, x);
        }
      break;
    case 4:
      lt(t, e), pt(e);
      break;
    case 13:
      lt(t, e),
        pt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (pa = oe())),
        r & 4 && Lu(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((xe = (u = xe) || d), lt(t, e), (xe = u)) : lt(t, e),
        pt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (_ = e, d = e.child; d !== null; ) {
            for (p = _ = d; _ !== null; ) {
              switch (((g = _), (v = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  br(4, g, g.return);
                  break;
                case 1:
                  Wn(g, g.return);
                  var w = g.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = g), (n = g.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (x) {
                      le(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Wn(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    bu(p);
                    continue;
                  }
              }
              v !== null ? ((v.return = g), (_ = v)) : bu(p);
            }
            d = d.sibling;
          }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                (l = p.stateNode),
                  u
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
                      (s.style.display = xc("display", i)));
              } catch (x) {
                le(e, e.return, x);
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (x) {
                le(e, e.return, x);
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
      lt(t, e), pt(e), r & 4 && Lu(e);
      break;
    case 21:
      break;
    default:
      lt(t, e), pt(e);
  }
}
function pt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Vd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (zr(l, ""), (r.flags &= -33));
          var o = _u(e);
          hs(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = _u(e);
          ms(e, s, i);
          break;
        default:
          throw Error(E(161));
      }
    } catch (a) {
      le(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function lh(e, t, n) {
  (_ = e), Kd(e);
}
function Kd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Pl;
      if (!i) {
        var s = l.alternate,
          a = (s !== null && s.memoizedState !== null) || xe;
        s = Pl;
        var u = xe;
        if (((Pl = i), (xe = a) && !u))
          for (_ = l; _ !== null; )
            (i = _),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Du(l)
                : a !== null
                ? ((a.return = i), (_ = a))
                : Du(l);
        for (; o !== null; ) (_ = o), Kd(o), (o = o.sibling);
        (_ = l), (Pl = s), (xe = u);
      }
      Mu(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (_ = o)) : Mu(e);
  }
}
function Mu(e) {
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
              xe || Mo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !xe)
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
              var o = t.updateQueue;
              o !== null && gu(t, o, r);
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
                gu(t, i, n);
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
              throw Error(E(163));
          }
        xe || (t.flags & 512 && ps(t));
      } catch (g) {
        le(t, t.return, g);
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
function bu(e) {
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
function Du(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Mo(4, t);
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
            ps(t);
          } catch (a) {
            le(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ps(t);
          } catch (a) {
            le(t, i, a);
          }
      }
    } catch (a) {
      le(t, t.return, a);
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
var oh = Math.ceil,
  co = bt.ReactCurrentDispatcher,
  da = bt.ReactCurrentOwner,
  Ge = bt.ReactCurrentBatchConfig,
  H = 0,
  fe = null,
  ae = null,
  me = 0,
  Re = 0,
  Un = on(0),
  ce = 0,
  Zr = null,
  Nn = 0,
  bo = 0,
  fa = 0,
  Dr = null,
  Le = null,
  pa = 0,
  nr = 1 / 0,
  kt = null,
  fo = !1,
  gs = null,
  Zt = null,
  jl = !1,
  Vt = null,
  po = 0,
  $r = 0,
  ys = null,
  Hl = -1,
  Wl = 0;
function je() {
  return H & 6 ? oe() : Hl !== -1 ? Hl : (Hl = oe());
}
function en(e) {
  return e.mode & 1
    ? H & 2 && me !== 0
      ? me & -me
      : Wm.transition !== null
      ? (Wl === 0 && (Wl = bc()), Wl)
      : ((e = B),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ac(e.type))),
        e)
    : 1;
}
function ut(e, t, n, r) {
  if (50 < $r) throw (($r = 0), (ys = null), Error(E(185)));
  nl(e, n, r),
    (!(H & 2) || e !== fe) &&
      (e === fe && (!(H & 2) && (bo |= n), ce === 4 && Ut(e, me)),
      $e(e, r),
      n === 1 && H === 0 && !(t.mode & 1) && ((nr = oe() + 500), Oo && sn()));
}
function $e(e, t) {
  var n = e.callbackNode;
  Wp(e, t);
  var r = Kl(e, e === fe ? me : 0);
  if (r === 0)
    n !== null && Ua(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ua(n), t === 1))
      e.tag === 0 ? Hm($u.bind(null, e)) : od($u.bind(null, e)),
        Rm(function () {
          !(H & 6) && sn();
        }),
        (n = null);
    else {
      switch (Dc(r)) {
        case 1:
          n = Is;
          break;
        case 4:
          n = Lc;
          break;
        case 16:
          n = Gl;
          break;
        case 536870912:
          n = Mc;
          break;
        default:
          n = Gl;
      }
      n = rf(n, Xd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Xd(e, t) {
  if (((Hl = -1), (Wl = 0), H & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (Kn() && e.callbackNode !== n) return null;
  var r = Kl(e, e === fe ? me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = mo(e, r);
  else {
    t = r;
    var l = H;
    H |= 2;
    var o = Jd();
    (fe !== e || me !== t) && ((kt = null), (nr = oe() + 500), vn(e, t));
    do
      try {
        ah();
        break;
      } catch (s) {
        qd(e, s);
      }
    while (!0);
    Js(),
      (co.current = o),
      (H = l),
      ae !== null ? (t = 0) : ((fe = null), (me = 0), (t = ce));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Bi(e)), l !== 0 && ((r = l), (t = vs(e, l)))), t === 1)
    )
      throw ((n = Zr), vn(e, 0), Ut(e, r), $e(e, oe()), n);
    if (t === 6) Ut(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !ih(l) &&
          ((t = mo(e, r)),
          t === 2 && ((o = Bi(e)), o !== 0 && ((r = o), (t = vs(e, o)))),
          t === 1))
      )
        throw ((n = Zr), vn(e, 0), Ut(e, r), $e(e, oe()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          cn(e, Le, kt);
          break;
        case 3:
          if (
            (Ut(e, r), (r & 130023424) === r && ((t = pa + 500 - oe()), 10 < t))
          ) {
            if (Kl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              je(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ji(cn.bind(null, e, Le, kt), t);
            break;
          }
          cn(e, Le, kt);
          break;
        case 4:
          if ((Ut(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - at(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = oe() - r),
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
                : 1960 * oh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ji(cn.bind(null, e, Le, kt), r);
            break;
          }
          cn(e, Le, kt);
          break;
        case 5:
          cn(e, Le, kt);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return $e(e, oe()), e.callbackNode === n ? Xd.bind(null, e) : null;
}
function vs(e, t) {
  var n = Dr;
  return (
    e.current.memoizedState.isDehydrated && (vn(e, t).flags |= 256),
    (e = mo(e, t)),
    e !== 2 && ((t = Le), (Le = n), t !== null && ws(t)),
    e
  );
}
function ws(e) {
  Le === null ? (Le = e) : Le.push.apply(Le, e);
}
function ih(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!ct(o(), l)) return !1;
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
function Ut(e, t) {
  for (
    t &= ~fa,
      t &= ~bo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - at(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function $u(e) {
  if (H & 6) throw Error(E(327));
  Kn();
  var t = Kl(e, 0);
  if (!(t & 1)) return $e(e, oe()), null;
  var n = mo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Bi(e);
    r !== 0 && ((t = r), (n = vs(e, r)));
  }
  if (n === 1) throw ((n = Zr), vn(e, 0), Ut(e, t), $e(e, oe()), n);
  if (n === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    cn(e, Le, kt),
    $e(e, oe()),
    null
  );
}
function ma(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    (H = n), H === 0 && ((nr = oe() + 500), Oo && sn());
  }
}
function Cn(e) {
  Vt !== null && Vt.tag === 0 && !(H & 6) && Kn();
  var t = H;
  H |= 1;
  var n = Ge.transition,
    r = B;
  try {
    if (((Ge.transition = null), (B = 1), e)) return e();
  } finally {
    (B = r), (Ge.transition = n), (H = t), !(H & 6) && sn();
  }
}
function ha() {
  (Re = Un.current), G(Un);
}
function vn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Fm(n)), ae !== null))
    for (n = ae.return; n !== null; ) {
      var r = n;
      switch ((Ks(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && eo();
          break;
        case 3:
          er(), G(be), G(ke), la();
          break;
        case 5:
          ra(r);
          break;
        case 4:
          er();
          break;
        case 13:
          G(Z);
          break;
        case 19:
          G(Z);
          break;
        case 10:
          Zs(r.type._context);
          break;
        case 22:
        case 23:
          ha();
      }
      n = n.return;
    }
  if (
    ((fe = e),
    (ae = e = tn(e.current, null)),
    (me = Re = t),
    (ce = 0),
    (Zr = null),
    (fa = bo = Nn = 0),
    (Le = Dr = null),
    mn !== null)
  ) {
    for (t = 0; t < mn.length; t++)
      if (((n = mn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    mn = null;
  }
  return e;
}
function qd(e, t) {
  do {
    var n = ae;
    try {
      if ((Js(), (zl.current = uo), ao)) {
        for (var r = ee.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        ao = !1;
      }
      if (
        ((En = 0),
        (de = ue = ee = null),
        (Mr = !1),
        (Xr = 0),
        (da.current = null),
        n === null || n.return === null)
      ) {
        (ce = 1), (Zr = t), (ae = null);
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
          var v = ku(i);
          if (v !== null) {
            (v.flags &= -257),
              Eu(v, i, s, o, t),
              v.mode & 1 && Su(o, u, t),
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
              Su(o, u, t), ga();
              break e;
            }
            a = Error(E(426));
          }
        } else if (X && s.mode & 1) {
          var N = ku(i);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256),
              Eu(N, i, s, o, t),
              Xs(tr(a, s));
            break e;
          }
        }
        (o = a = tr(a, s)),
          ce !== 4 && (ce = 2),
          Dr === null ? (Dr = [o]) : Dr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var h = Dd(o, a, t);
              hu(o, h);
              break e;
            case 1:
              s = a;
              var f = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Zt === null || !Zt.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var k = $d(o, s, t);
                hu(o, k);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      ef(n);
    } catch (P) {
      (t = P), ae === n && n !== null && (ae = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Jd() {
  var e = co.current;
  return (co.current = uo), e === null ? uo : e;
}
function ga() {
  (ce === 0 || ce === 3 || ce === 2) && (ce = 4),
    fe === null || (!(Nn & 268435455) && !(bo & 268435455)) || Ut(fe, me);
}
function mo(e, t) {
  var n = H;
  H |= 2;
  var r = Jd();
  (fe !== e || me !== t) && ((kt = null), vn(e, t));
  do
    try {
      sh();
      break;
    } catch (l) {
      qd(e, l);
    }
  while (!0);
  if ((Js(), (H = n), (co.current = r), ae !== null)) throw Error(E(261));
  return (fe = null), (me = 0), ce;
}
function sh() {
  for (; ae !== null; ) Zd(ae);
}
function ah() {
  for (; ae !== null && !bp(); ) Zd(ae);
}
function Zd(e) {
  var t = nf(e.alternate, e, Re);
  (e.memoizedProps = e.pendingProps),
    t === null ? ef(e) : (ae = t),
    (da.current = null);
}
function ef(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = th(n, t)), n !== null)) {
        (n.flags &= 32767), (ae = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ce = 6), (ae = null);
        return;
      }
    } else if (((n = eh(n, t, Re)), n !== null)) {
      ae = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ae = t;
      return;
    }
    ae = t = e;
  } while (t !== null);
  ce === 0 && (ce = 5);
}
function cn(e, t, n) {
  var r = B,
    l = Ge.transition;
  try {
    (Ge.transition = null), (B = 1), uh(e, t, n, r);
  } finally {
    (Ge.transition = l), (B = r);
  }
  return null;
}
function uh(e, t, n, r) {
  do Kn();
  while (Vt !== null);
  if (H & 6) throw Error(E(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Up(e, o),
    e === fe && ((ae = fe = null), (me = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      jl ||
      ((jl = !0),
      rf(Gl, function () {
        return Kn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ge.transition), (Ge.transition = null);
    var i = B;
    B = 1;
    var s = H;
    (H |= 4),
      (da.current = null),
      rh(e, n),
      Gd(n, e),
      Om(Xi),
      (Xl = !!Ki),
      (Xi = Ki = null),
      (e.current = n),
      lh(n),
      Dp(),
      (H = s),
      (B = i),
      (Ge.transition = o);
  } else e.current = n;
  if (
    (jl && ((jl = !1), (Vt = e), (po = l)),
    (o = e.pendingLanes),
    o === 0 && (Zt = null),
    Rp(n.stateNode),
    $e(e, oe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (fo) throw ((fo = !1), (e = gs), (gs = null), e);
  return (
    po & 1 && e.tag !== 0 && Kn(),
    (o = e.pendingLanes),
    o & 1 ? (e === ys ? $r++ : (($r = 0), (ys = e))) : ($r = 0),
    sn(),
    null
  );
}
function Kn() {
  if (Vt !== null) {
    var e = Dc(po),
      t = Ge.transition,
      n = B;
    try {
      if (((Ge.transition = null), (B = 16 > e ? 16 : e), Vt === null))
        var r = !1;
      else {
        if (((e = Vt), (Vt = null), (po = 0), H & 6)) throw Error(E(331));
        var l = H;
        for (H |= 4, _ = e.current; _ !== null; ) {
          var o = _,
            i = o.child;
          if (_.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (_ = u; _ !== null; ) {
                  var d = _;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      br(8, d, o);
                  }
                  var p = d.child;
                  if (p !== null) (p.return = d), (_ = p);
                  else
                    for (; _ !== null; ) {
                      d = _;
                      var g = d.sibling,
                        v = d.return;
                      if ((Qd(d), d === u)) {
                        _ = null;
                        break;
                      }
                      if (g !== null) {
                        (g.return = v), (_ = g);
                        break;
                      }
                      _ = v;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var x = w.child;
                if (x !== null) {
                  w.child = null;
                  do {
                    var N = x.sibling;
                    (x.sibling = null), (x = N);
                  } while (x !== null);
                }
              }
              _ = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (_ = i);
          else
            e: for (; _ !== null; ) {
              if (((o = _), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    br(9, o, o.return);
                }
              var h = o.sibling;
              if (h !== null) {
                (h.return = o.return), (_ = h);
                break e;
              }
              _ = o.return;
            }
        }
        var f = e.current;
        for (_ = f; _ !== null; ) {
          i = _;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null) (m.return = i), (_ = m);
          else
            e: for (i = f; _ !== null; ) {
              if (((s = _), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mo(9, s);
                  }
                } catch (P) {
                  le(s, s.return, P);
                }
              if (s === i) {
                _ = null;
                break e;
              }
              var k = s.sibling;
              if (k !== null) {
                (k.return = s.return), (_ = k);
                break e;
              }
              _ = s.return;
            }
        }
        if (
          ((H = l), sn(), gt && typeof gt.onPostCommitFiberRoot == "function")
        )
          try {
            gt.onPostCommitFiberRoot(No, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (B = n), (Ge.transition = t);
    }
  }
  return !1;
}
function Fu(e, t, n) {
  (t = tr(n, t)),
    (t = Dd(e, t, 1)),
    (e = Jt(e, t, 1)),
    (t = je()),
    e !== null && (nl(e, 1, t), $e(e, t));
}
function le(e, t, n) {
  if (e.tag === 3) Fu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Fu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Zt === null || !Zt.has(r)))
        ) {
          (e = tr(n, e)),
            (e = $d(t, e, 1)),
            (t = Jt(t, e, 1)),
            (e = je()),
            t !== null && (nl(t, 1, e), $e(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ch(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = je()),
    (e.pingedLanes |= e.suspendedLanes & n),
    fe === e &&
      (me & n) === n &&
      (ce === 4 || (ce === 3 && (me & 130023424) === me && 500 > oe() - pa)
        ? vn(e, 0)
        : (fa |= n)),
    $e(e, t);
}
function tf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = yl), (yl <<= 1), !(yl & 130023424) && (yl = 4194304))
      : (t = 1));
  var n = je();
  (e = Lt(e, t)), e !== null && (nl(e, t, n), $e(e, n));
}
function dh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), tf(e, n);
}
function fh(e, t) {
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
      throw Error(E(314));
  }
  r !== null && r.delete(t), tf(e, n);
}
var nf;
nf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || be.current) Me = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Me = !1), Zm(e, t, n);
      Me = !!(e.flags & 131072);
    }
  else (Me = !1), X && t.flags & 1048576 && id(t, ro, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Al(e, t), (e = t.pendingProps);
      var l = qn(t, ke.current);
      Gn(t, n), (l = ia(null, t, r, e, l, n));
      var o = sa();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            De(r) ? ((o = !0), to(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            ta(t),
            (l.updater = Lo),
            (t.stateNode = l),
            (l._reactInternals = t),
            os(t, r, e, n),
            (t = as(null, t, r, !0, o, n)))
          : ((t.tag = 0), X && o && Gs(t), Pe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Al(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = mh(r)),
          (e = ot(r, e)),
          l)
        ) {
          case 0:
            t = ss(null, t, r, e, n);
            break e;
          case 1:
            t = Pu(null, t, r, e, n);
            break e;
          case 11:
            t = Nu(null, t, r, e, n);
            break e;
          case 14:
            t = Cu(null, t, r, ot(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ot(r, l)),
        ss(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ot(r, l)),
        Pu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Id(t), e === null)) throw Error(E(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          fd(e, t),
          io(t, r, null, n);
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
            (l = tr(Error(E(423)), t)), (t = ju(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = tr(Error(E(424)), t)), (t = ju(e, t, r, n, l));
            break e;
          } else
            for (
              Ie = qt(t.stateNode.containerInfo.firstChild),
                Ae = t,
                X = !0,
                st = null,
                n = cd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Jn(), r === l)) {
            t = Mt(e, t, n);
            break e;
          }
          Pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        pd(t),
        e === null && ns(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        qi(r, l) ? (i = null) : o !== null && qi(r, o) && (t.flags |= 32),
        zd(e, t),
        Pe(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && ns(t), null;
    case 13:
      return Ad(e, t, n);
    case 4:
      return (
        na(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Zn(t, null, r, n)) : Pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ot(r, l)),
        Nu(e, t, r, l, n)
      );
    case 7:
      return Pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          V(lo, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (ct(o.value, i)) {
            if (o.children === l.children && !be.current) {
              t = Mt(e, t, n);
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
                      (a = Pt(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (u.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      rs(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(E(341));
                (i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  rs(i, n, t),
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
        Pe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Gn(t, n),
        (l = Ke(l)),
        (r = r(l)),
        (t.flags |= 1),
        Pe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ot(r, t.pendingProps)),
        (l = ot(r.type, l)),
        Cu(e, t, r, l, n)
      );
    case 15:
      return Fd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ot(r, l)),
        Al(e, t),
        (t.tag = 1),
        De(r) ? ((e = !0), to(t)) : (e = !1),
        Gn(t, n),
        bd(t, r, l),
        os(t, r, l, n),
        as(null, t, r, !0, e, n)
      );
    case 19:
      return Hd(e, t, n);
    case 22:
      return Rd(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function rf(e, t) {
  return _c(e, t);
}
function ph(e, t, n, r) {
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
  return new ph(e, t, n, r);
}
function ya(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function mh(e) {
  if (typeof e == "function") return ya(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Fs)) return 11;
    if (e === Rs) return 14;
  }
  return 2;
}
function tn(e, t) {
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
function Ul(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) ya(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case bn:
        return wn(n.children, l, o, t);
      case $s:
        (i = 8), (l |= 8);
        break;
      case Oi:
        return (
          (e = Ye(12, n, t, l | 2)), (e.elementType = Oi), (e.lanes = o), e
        );
      case _i:
        return (e = Ye(13, n, t, l)), (e.elementType = _i), (e.lanes = o), e;
      case Li:
        return (e = Ye(19, n, t, l)), (e.elementType = Li), (e.lanes = o), e;
      case pc:
        return Do(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case dc:
              i = 10;
              break e;
            case fc:
              i = 9;
              break e;
            case Fs:
              i = 11;
              break e;
            case Rs:
              i = 14;
              break e;
            case It:
              (i = 16), (r = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ye(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function wn(e, t, n, r) {
  return (e = Ye(7, e, r, t)), (e.lanes = n), e;
}
function Do(e, t, n, r) {
  return (
    (e = Ye(22, e, r, t)),
    (e.elementType = pc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function yi(e, t, n) {
  return (e = Ye(6, e, null, t)), (e.lanes = n), e;
}
function vi(e, t, n) {
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
function hh(e, t, n, r, l) {
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
    (this.eventTimes = Jo(0)),
    (this.expirationTimes = Jo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Jo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function va(e, t, n, r, l, o, i, s, a) {
  return (
    (e = new hh(e, t, n, s, a)),
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
    ta(o),
    e
  );
}
function gh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Mn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function lf(e) {
  if (!e) return rn;
  e = e._reactInternals;
  e: {
    if (Tn(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (De(t.type)) {
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
    if (De(n)) return ld(e, n, t);
  }
  return t;
}
function of(e, t, n, r, l, o, i, s, a) {
  return (
    (e = va(n, r, !0, e, l, o, i, s, a)),
    (e.context = lf(null)),
    (n = e.current),
    (r = je()),
    (l = en(n)),
    (o = Pt(r, l)),
    (o.callback = t ?? null),
    Jt(n, o, l),
    (e.current.lanes = l),
    nl(e, l, r),
    $e(e, r),
    e
  );
}
function $o(e, t, n, r) {
  var l = t.current,
    o = je(),
    i = en(l);
  return (
    (n = lf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Pt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Jt(l, t, i)),
    e !== null && (ut(e, l, i, o), Rl(e, l, i)),
    i
  );
}
function ho(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ru(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function wa(e, t) {
  Ru(e, t), (e = e.alternate) && Ru(e, t);
}
function yh() {
  return null;
}
var sf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function xa(e) {
  this._internalRoot = e;
}
Fo.prototype.render = xa.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  $o(e, t, null, null);
};
Fo.prototype.unmount = xa.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Cn(function () {
      $o(null, e, null, null);
    }),
      (t[_t] = null);
  }
};
function Fo(e) {
  this._internalRoot = e;
}
Fo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Rc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Wt.length && t !== 0 && t < Wt[n].priority; n++);
    Wt.splice(n, 0, e), n === 0 && Ic(e);
  }
};
function Sa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ro(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function zu() {}
function vh(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = ho(i);
        o.call(u);
      };
    }
    var i = of(t, r, e, 0, null, !1, !1, "", zu);
    return (
      (e._reactRootContainer = i),
      (e[_t] = i.current),
      Qr(e.nodeType === 8 ? e.parentNode : e),
      Cn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = ho(a);
      s.call(u);
    };
  }
  var a = va(e, 0, !1, null, null, !1, !1, "", zu);
  return (
    (e._reactRootContainer = a),
    (e[_t] = a.current),
    Qr(e.nodeType === 8 ? e.parentNode : e),
    Cn(function () {
      $o(t, a, n, r);
    }),
    a
  );
}
function zo(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var s = l;
      l = function () {
        var a = ho(i);
        s.call(a);
      };
    }
    $o(t, i, e, l);
  } else i = vh(n, t, e, l, r);
  return ho(i);
}
$c = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Nr(t.pendingLanes);
        n !== 0 &&
          (As(t, n | 1), $e(t, oe()), !(H & 6) && ((nr = oe() + 500), sn()));
      }
      break;
    case 13:
      Cn(function () {
        var r = Lt(e, 1);
        if (r !== null) {
          var l = je();
          ut(r, e, 1, l);
        }
      }),
        wa(e, 1);
  }
};
Hs = function (e) {
  if (e.tag === 13) {
    var t = Lt(e, 134217728);
    if (t !== null) {
      var n = je();
      ut(t, e, 134217728, n);
    }
    wa(e, 134217728);
  }
};
Fc = function (e) {
  if (e.tag === 13) {
    var t = en(e),
      n = Lt(e, t);
    if (n !== null) {
      var r = je();
      ut(n, e, t, r);
    }
    wa(e, t);
  }
};
Rc = function () {
  return B;
};
zc = function (e, t) {
  var n = B;
  try {
    return (B = e), t();
  } finally {
    B = n;
  }
};
Hi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Di(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = To(r);
            if (!l) throw Error(E(90));
            hc(r), Di(r, l);
          }
        }
      }
      break;
    case "textarea":
      yc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Bn(e, !!n.multiple, t, !1);
  }
};
Nc = ma;
Cc = Cn;
var wh = { usingClientEntryPoint: !1, Events: [ll, Rn, To, kc, Ec, ma] },
  yr = {
    findFiberByHostInstance: pn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  xh = {
    bundleType: yr.bundleType,
    version: yr.version,
    rendererPackageName: yr.rendererPackageName,
    rendererConfig: yr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: bt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Tc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: yr.findFiberByHostInstance || yh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Tl.isDisabled && Tl.supportsFiber)
    try {
      (No = Tl.inject(xh)), (gt = Tl);
    } catch {}
}
We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wh;
We.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Sa(t)) throw Error(E(200));
  return gh(e, t, null, n);
};
We.createRoot = function (e, t) {
  if (!Sa(e)) throw Error(E(299));
  var n = !1,
    r = "",
    l = sf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = va(e, 1, !1, null, null, n, !1, r, l)),
    (e[_t] = t.current),
    Qr(e.nodeType === 8 ? e.parentNode : e),
    new xa(t)
  );
};
We.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(E(188))
      : ((e = Object.keys(e).join(",")), Error(E(268, e)));
  return (e = Tc(t)), (e = e === null ? null : e.stateNode), e;
};
We.flushSync = function (e) {
  return Cn(e);
};
We.hydrate = function (e, t, n) {
  if (!Ro(t)) throw Error(E(200));
  return zo(null, e, t, !0, n);
};
We.hydrateRoot = function (e, t, n) {
  if (!Sa(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = sf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = of(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[_t] = t.current),
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
  return new Fo(t);
};
We.render = function (e, t, n) {
  if (!Ro(t)) throw Error(E(200));
  return zo(null, e, t, !1, n);
};
We.unmountComponentAtNode = function (e) {
  if (!Ro(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (Cn(function () {
        zo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[_t] = null);
        });
      }),
      !0)
    : !1;
};
We.unstable_batchedUpdates = ma;
We.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ro(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return zo(e, t, n, !1, r);
};
We.version = "18.3.1-next-f1338f8080-20240426";
function af() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(af);
    } catch (e) {
      console.error(e);
    }
}
af(), (sc.exports = We);
var uf = sc.exports,
  cf,
  Iu = uf;
(cf = Iu.createRoot), Iu.hydrateRoot;
function dt(e) {
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
const df = 6048e5,
  Sh = 864e5;
let kh = {};
function Io() {
  return kh;
}
function el(e, t) {
  var s, a, u, d;
  const n = Io(),
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
    l = dt(e),
    o = l.getDay(),
    i = (o < r ? 7 : 0) + o - r;
  return l.setDate(l.getDate() - i), l.setHours(0, 0, 0, 0), l;
}
function go(e) {
  return el(e, { weekStartsOn: 1 });
}
function ff(e) {
  const t = dt(e),
    n = t.getFullYear(),
    r = Pn(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const l = go(r),
    o = Pn(e, 0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  const i = go(o);
  return t.getTime() >= l.getTime()
    ? n + 1
    : t.getTime() >= i.getTime()
    ? n
    : n - 1;
}
function Au(e) {
  const t = dt(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Hu(e) {
  const t = dt(e),
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
function Eh(e, t) {
  const n = Au(e),
    r = Au(t),
    l = +n - Hu(n),
    o = +r - Hu(r);
  return Math.round((l - o) / Sh);
}
function Nh(e) {
  const t = ff(e),
    n = Pn(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), go(n);
}
function Ch(e) {
  return (
    e instanceof Date ||
    (typeof e == "object" &&
      Object.prototype.toString.call(e) === "[object Date]")
  );
}
function Ph(e) {
  if (!Ch(e) && typeof e != "number") return !1;
  const t = dt(e);
  return !isNaN(Number(t));
}
function jh(e) {
  const t = dt(e),
    n = Pn(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const Th = {
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
  Oh = (e, t, n) => {
    let r;
    const l = Th[e];
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
function wi(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const _h = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  Lh = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  Mh = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  bh = {
    date: wi({ formats: _h, defaultWidth: "full" }),
    time: wi({ formats: Lh, defaultWidth: "full" }),
    dateTime: wi({ formats: Mh, defaultWidth: "full" }),
  },
  Dh = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  $h = (e, t, n, r) => Dh[e];
function vr(e) {
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
const Fh = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  Rh = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  zh = {
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
  Ih = {
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
  Ah = {
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
  Hh = {
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
  Wh = (e, t) => {
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
  Uh = {
    ordinalNumber: Wh,
    era: vr({ values: Fh, defaultWidth: "wide" }),
    quarter: vr({
      values: Rh,
      defaultWidth: "wide",
      argumentCallback: (e) => e - 1,
    }),
    month: vr({ values: zh, defaultWidth: "wide" }),
    day: vr({ values: Ih, defaultWidth: "wide" }),
    dayPeriod: vr({
      values: Ah,
      defaultWidth: "wide",
      formattingValues: Hh,
      defaultFormattingWidth: "wide",
    }),
  };
function wr(e) {
  return (t, n = {}) => {
    const r = n.width,
      l = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      o = t.match(l);
    if (!o) return null;
    const i = o[0],
      s = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      a = Array.isArray(s) ? Qh(s, (p) => p.test(i)) : Bh(s, (p) => p.test(i));
    let u;
    (u = e.valueCallback ? e.valueCallback(a) : a),
      (u = n.valueCallback ? n.valueCallback(u) : u);
    const d = t.slice(i.length);
    return { value: u, rest: d };
  };
}
function Bh(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function Qh(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function Vh(e) {
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
const Yh = /^(\d+)(th|st|nd|rd)?/i,
  Gh = /\d+/i,
  Kh = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  Xh = { any: [/^b/i, /^(a|c)/i] },
  qh = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  Jh = { any: [/1/i, /2/i, /3/i, /4/i] },
  Zh = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  e0 = {
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
  t0 = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  n0 = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  r0 = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  l0 = {
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
  o0 = {
    ordinalNumber: Vh({
      matchPattern: Yh,
      parsePattern: Gh,
      valueCallback: (e) => parseInt(e, 10),
    }),
    era: wr({
      matchPatterns: Kh,
      defaultMatchWidth: "wide",
      parsePatterns: Xh,
      defaultParseWidth: "any",
    }),
    quarter: wr({
      matchPatterns: qh,
      defaultMatchWidth: "wide",
      parsePatterns: Jh,
      defaultParseWidth: "any",
      valueCallback: (e) => e + 1,
    }),
    month: wr({
      matchPatterns: Zh,
      defaultMatchWidth: "wide",
      parsePatterns: e0,
      defaultParseWidth: "any",
    }),
    day: wr({
      matchPatterns: t0,
      defaultMatchWidth: "wide",
      parsePatterns: n0,
      defaultParseWidth: "any",
    }),
    dayPeriod: wr({
      matchPatterns: r0,
      defaultMatchWidth: "any",
      parsePatterns: l0,
      defaultParseWidth: "any",
    }),
  },
  i0 = {
    code: "en-US",
    formatDistance: Oh,
    formatLong: bh,
    formatRelative: $h,
    localize: Uh,
    match: o0,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function s0(e) {
  const t = dt(e);
  return Eh(t, jh(t)) + 1;
}
function a0(e) {
  const t = dt(e),
    n = +go(t) - +Nh(t);
  return Math.round(n / df) + 1;
}
function pf(e, t) {
  var d, p, g, v;
  const n = dt(e),
    r = n.getFullYear(),
    l = Io(),
    o =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((p = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) ==
      null
        ? void 0
        : p.firstWeekContainsDate) ??
      l.firstWeekContainsDate ??
      ((v = (g = l.locale) == null ? void 0 : g.options) == null
        ? void 0
        : v.firstWeekContainsDate) ??
      1,
    i = Pn(e, 0);
  i.setFullYear(r + 1, 0, o), i.setHours(0, 0, 0, 0);
  const s = el(i, t),
    a = Pn(e, 0);
  a.setFullYear(r, 0, o), a.setHours(0, 0, 0, 0);
  const u = el(a, t);
  return n.getTime() >= s.getTime()
    ? r + 1
    : n.getTime() >= u.getTime()
    ? r
    : r - 1;
}
function u0(e, t) {
  var s, a, u, d;
  const n = Io(),
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
    l = pf(e, t),
    o = Pn(e, 0);
  return o.setFullYear(l, 0, r), o.setHours(0, 0, 0, 0), el(o, t);
}
function c0(e, t) {
  const n = dt(e),
    r = +el(n, t) - +u0(n, t);
  return Math.round(r / df) + 1;
}
function U(e, t) {
  const n = e < 0 ? "-" : "",
    r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Rt = {
    y(e, t) {
      const n = e.getFullYear(),
        r = n > 0 ? n : 1 - n;
      return U(t === "yy" ? r % 100 : r, t.length);
    },
    M(e, t) {
      const n = e.getMonth();
      return t === "M" ? String(n + 1) : U(n + 1, 2);
    },
    d(e, t) {
      return U(e.getDate(), t.length);
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
      return U(e.getHours() % 12 || 12, t.length);
    },
    H(e, t) {
      return U(e.getHours(), t.length);
    },
    m(e, t) {
      return U(e.getMinutes(), t.length);
    },
    s(e, t) {
      return U(e.getSeconds(), t.length);
    },
    S(e, t) {
      const n = t.length,
        r = e.getMilliseconds(),
        l = Math.trunc(r * Math.pow(10, n - 3));
      return U(l, t.length);
    },
  },
  Ln = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  Wu = {
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
      const l = pf(e, r),
        o = l > 0 ? l : 1 - l;
      if (t === "YY") {
        const i = o % 100;
        return U(i, 2);
      }
      return t === "Yo" ? n.ordinalNumber(o, { unit: "year" }) : U(o, t.length);
    },
    R: function (e, t) {
      const n = ff(e);
      return U(n, t.length);
    },
    u: function (e, t) {
      const n = e.getFullYear();
      return U(n, t.length);
    },
    Q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "Q":
          return String(r);
        case "QQ":
          return U(r, 2);
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
          return U(r, 2);
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
          return U(r + 1, 2);
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
      const l = c0(e, r);
      return t === "wo" ? n.ordinalNumber(l, { unit: "week" }) : U(l, t.length);
    },
    I: function (e, t, n) {
      const r = a0(e);
      return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : U(r, t.length);
    },
    d: function (e, t, n) {
      return t === "do"
        ? n.ordinalNumber(e.getDate(), { unit: "date" })
        : Rt.d(e, t);
    },
    D: function (e, t, n) {
      const r = s0(e);
      return t === "Do"
        ? n.ordinalNumber(r, { unit: "dayOfYear" })
        : U(r, t.length);
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
          return U(o, 2);
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
          return U(o, t.length);
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
          return U(l, t.length);
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
          ? (l = Ln.noon)
          : r === 0
          ? (l = Ln.midnight)
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
          ? (l = Ln.evening)
          : r >= 12
          ? (l = Ln.afternoon)
          : r >= 4
          ? (l = Ln.morning)
          : (l = Ln.night),
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
      return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : U(r, t.length);
    },
    k: function (e, t, n) {
      let r = e.getHours();
      return (
        r === 0 && (r = 24),
        t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : U(r, t.length)
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
          return Bu(r);
        case "XXXX":
        case "XX":
          return dn(r);
        case "XXXXX":
        case "XXX":
        default:
          return dn(r, ":");
      }
    },
    x: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "x":
          return Bu(r);
        case "xxxx":
        case "xx":
          return dn(r);
        case "xxxxx":
        case "xxx":
        default:
          return dn(r, ":");
      }
    },
    O: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + Uu(r, ":");
        case "OOOO":
        default:
          return "GMT" + dn(r, ":");
      }
    },
    z: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + Uu(r, ":");
        case "zzzz":
        default:
          return "GMT" + dn(r, ":");
      }
    },
    t: function (e, t, n) {
      const r = Math.trunc(e.getTime() / 1e3);
      return U(r, t.length);
    },
    T: function (e, t, n) {
      const r = e.getTime();
      return U(r, t.length);
    },
  };
function Uu(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    l = Math.trunc(r / 60),
    o = r % 60;
  return o === 0 ? n + String(l) : n + String(l) + t + U(o, 2);
}
function Bu(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + U(Math.abs(e) / 60, 2) : dn(e, t);
}
function dn(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    l = U(Math.trunc(r / 60), 2),
    o = U(r % 60, 2);
  return n + l + t + o;
}
const Qu = (e, t) => {
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
  mf = (e, t) => {
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
  d0 = (e, t) => {
    const n = e.match(/(P+)(p+)?/) || [],
      r = n[1],
      l = n[2];
    if (!l) return Qu(e, t);
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
    return o.replace("{{date}}", Qu(r, t)).replace("{{time}}", mf(l, t));
  },
  f0 = { p: mf, P: d0 },
  p0 = /^D+$/,
  m0 = /^Y+$/,
  h0 = ["D", "DD", "YY", "YYYY"];
function g0(e) {
  return p0.test(e);
}
function y0(e) {
  return m0.test(e);
}
function v0(e, t, n) {
  const r = w0(e, t, n);
  if ((console.warn(r), h0.includes(e))) throw new RangeError(r);
}
function w0(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const x0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  S0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  k0 = /^'([^]*?)'?$/,
  E0 = /''/g,
  N0 = /[a-zA-Z]/;
function Q(e, t, n) {
  var d, p, g, v;
  const r = Io(),
    l = r.locale ?? i0,
    o =
      r.firstWeekContainsDate ??
      ((p = (d = r.locale) == null ? void 0 : d.options) == null
        ? void 0
        : p.firstWeekContainsDate) ??
      1,
    i =
      r.weekStartsOn ??
      ((v = (g = r.locale) == null ? void 0 : g.options) == null
        ? void 0
        : v.weekStartsOn) ??
      0,
    s = dt(e);
  if (!Ph(s)) throw new RangeError("Invalid time value");
  let a = t
    .match(S0)
    .map((w) => {
      const x = w[0];
      if (x === "p" || x === "P") {
        const N = f0[x];
        return N(w, l.formatLong);
      }
      return w;
    })
    .join("")
    .match(x0)
    .map((w) => {
      if (w === "''") return { isToken: !1, value: "'" };
      const x = w[0];
      if (x === "'") return { isToken: !1, value: C0(w) };
      if (Wu[x]) return { isToken: !0, value: w };
      if (x.match(N0))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            x +
            "`"
        );
      return { isToken: !1, value: w };
    });
  l.localize.preprocessor && (a = l.localize.preprocessor(s, a));
  const u = { firstWeekContainsDate: o, weekStartsOn: i, locale: l };
  return a
    .map((w) => {
      if (!w.isToken) return w.value;
      const x = w.value;
      (y0(x) || g0(x)) && v0(x, t, String(e));
      const N = Wu[x[0]];
      return N(s, x, l.localize, u);
    })
    .join("");
}
function C0(e) {
  const t = e.match(k0);
  return t ? t[1].replace(E0, "'") : e;
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var P0 = {
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
 */ const j0 = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  vt = (e, t) => {
    const n = y.forwardRef(
      (
        {
          color: r = "currentColor",
          size: l = 24,
          strokeWidth: o = 2,
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
            ...P0,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: i ? (Number(o) * 24) / Number(l) : o,
            className: ["lucide", `lucide-${j0(e)}`, s].join(" "),
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
 */ const xs = vt("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const T0 = vt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const O0 = vt("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _0 = vt("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const L0 = vt("Globe", [
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
 */ const M0 = vt("Layers", [
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
 */ const b0 = vt("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const D0 = vt("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $0 = vt("Settings", [
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
 */ const F0 = vt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
var R0 = Object.defineProperty,
  z0 = (e, t, n) =>
    t in e
      ? R0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  xi = (e, t, n) => (z0(e, typeof t != "symbol" ? t + "" : t, n), n);
let I0 = class {
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
  jt = new I0(),
  qe = (e, t) => {
    jt.isServer ? y.useEffect(e, t) : y.useLayoutEffect(e, t);
  };
function Tt(e) {
  let t = y.useRef(e);
  return (
    qe(() => {
      t.current = e;
    }, [e]),
    t
  );
}
let q = function (e) {
  let t = Tt(e);
  return I.useCallback((...n) => t.current(...n), [t]);
};
function Ao(e) {
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
          Ao(() => {
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
function ka() {
  let [e] = y.useState(On);
  return y.useEffect(() => () => e.dispose(), [e]), e;
}
function A0() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in Fr
    ? ((t) => t.useSyncExternalStore)(Fr)(
        () => () => {},
        () => !1,
        () => !e
      )
    : !1;
}
function ir() {
  let e = A0(),
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
var Vu;
let sr =
  (Vu = I.useId) != null
    ? Vu
    : function () {
        let e = ir(),
          [t, n] = I.useState(e ? () => jt.nextId() : null);
        return (
          qe(() => {
            t === null && n(jt.nextId());
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
function hf(e) {
  return jt.isServer
    ? null
    : e instanceof Node
    ? e.ownerDocument
    : e != null && e.hasOwnProperty("current") && e.current instanceof Node
    ? e.current.ownerDocument
    : document;
}
let Ss = [
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
var fn = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(fn || {}),
  gf = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(gf || {}),
  H0 = ((e) => (
    (e[(e.Previous = -1)] = "Previous"), (e[(e.Next = 1)] = "Next"), e
  ))(H0 || {});
function W0(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(Ss)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER)
        )
      );
}
var yf = ((e) => (
  (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
))(yf || {});
function U0(e, t = 0) {
  var n;
  return e === ((n = hf(e)) == null ? void 0 : n.body)
    ? !1
    : Se(t, {
        0() {
          return e.matches(Ss);
        },
        1() {
          let r = e;
          for (; r !== null; ) {
            if (r.matches(Ss)) return !0;
            r = r.parentElement;
          }
          return !1;
        },
      });
}
var B0 = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"), (e[(e.Mouse = 1)] = "Mouse"), e
))(B0 || {});
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
function xn(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Q0 = ["textarea", "input"].join(",");
function V0(e) {
  var t, n;
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Q0)) !=
    null
    ? n
    : !1;
}
function Y0(e, t = (n) => n) {
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
function Bl(
  e,
  t,
  { sorted: n = !0, relativeTo: r = null, skipElements: l = [] } = {}
) {
  let o = Array.isArray(e)
      ? e.length > 0
        ? e[0].ownerDocument
        : document
      : e.ownerDocument,
    i = Array.isArray(e) ? (n ? Y0(e) : e) : W0(e);
  l.length > 0 && i.length > 1 && (i = i.filter((v) => !l.includes(v))),
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
    u = t & 32 ? { preventScroll: !0 } : {},
    d = 0,
    p = i.length,
    g;
  do {
    if (d >= p || d + p <= 0) return 0;
    let v = a + d;
    if (t & 16) v = (v + p) % p;
    else {
      if (v < 0) return 3;
      if (v >= p) return 1;
    }
    (g = i[v]), g == null || g.focus(u), (d += s);
  } while (g !== o.activeElement);
  return t & 6 && V0(g) && g.select(), 2;
}
function vf() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  );
}
function G0() {
  return /Android/gi.test(window.navigator.userAgent);
}
function K0() {
  return vf() || G0();
}
function Ol(e, t, n) {
  let r = Tt(t);
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
function wf(e, t, n) {
  let r = Tt(t);
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
function X0(e, t, n = !0) {
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
    return !U0(a, yf.Loose) && a.tabIndex !== -1 && i.preventDefault(), t(i, a);
  }
  let o = y.useRef(null);
  Ol(
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
    Ol(
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
    Ol(
      "click",
      (i) => {
        K0() || (o.current && (l(i, () => o.current), (o.current = null)));
      },
      !0
    ),
    Ol(
      "touchend",
      (i) => l(i, () => (i.target instanceof HTMLElement ? i.target : null)),
      !0
    ),
    wf(
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
function il(...e) {
  return y.useMemo(() => hf(...e), [...e]);
}
let xf = Symbol();
function q0(e, t = !0) {
  return Object.assign(e, { [xf]: t });
}
function ft(...e) {
  let t = y.useRef(e);
  y.useEffect(() => {
    t.current = e;
  }, [e]);
  let n = q((r) => {
    for (let l of t.current)
      l != null && (typeof l == "function" ? l(r) : (l.current = r));
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[xf])) ? void 0 : n;
}
function Ea(e, t) {
  let n = y.useRef([]),
    r = q(e);
  y.useEffect(() => {
    let l = [...n.current];
    for (let [o, i] of t.entries())
      if (n.current[o] !== i) {
        let s = r(t, l);
        return (n.current = t), s;
      }
  }, [r, ...t]);
}
function yo(...e) {
  return Array.from(
    new Set(e.flatMap((t) => (typeof t == "string" ? t.split(" ") : [])))
  )
    .filter(Boolean)
    .join(" ");
}
var vo = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(vo || {}),
  Yt = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
  ))(Yt || {});
function Je({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: l,
  visible: o = !0,
  name: i,
  mergeRefs: s,
}) {
  s = s ?? J0;
  let a = Sf(t, e);
  if (o) return _l(a, n, r, i, s);
  let u = l ?? 0;
  if (u & 2) {
    let { static: d = !1, ...p } = a;
    if (d) return _l(p, n, r, i, s);
  }
  if (u & 1) {
    let { unmount: d = !0, ...p } = a;
    return Se(d ? 0 : 1, {
      0() {
        return null;
      },
      1() {
        return _l({ ...p, hidden: !0, style: { display: "none" } }, n, r, i, s);
      },
    });
  }
  return _l(a, n, r, i, s);
}
function _l(e, t = {}, n, r, l) {
  let {
      as: o = n,
      children: i,
      refName: s = "ref",
      ...a
    } = Si(e, ["unmount", "static"]),
    u = e.ref !== void 0 ? { [s]: e.ref } : {},
    d = typeof i == "function" ? i(t) : i;
  "className" in a &&
    a.className &&
    typeof a.className == "function" &&
    (a.className = a.className(t));
  let p = {};
  if (t) {
    let g = !1,
      v = [];
    for (let [w, x] of Object.entries(t))
      typeof x == "boolean" && (g = !0), x === !0 && v.push(w);
    g && (p["data-headlessui-state"] = v.join(" "));
  }
  if (o === y.Fragment && Object.keys(Yu(a)).length > 0) {
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
          ? (...x) => yo(g == null ? void 0 : g.className(...x), a.className)
          : yo(g == null ? void 0 : g.className, a.className),
      w = v ? { className: v } : {};
    return y.cloneElement(
      d,
      Object.assign(
        {},
        Sf(d.props, Yu(Si(a, ["ref"]))),
        p,
        u,
        { ref: l(d.ref, u.ref) },
        w
      )
    );
  }
  return y.createElement(
    o,
    Object.assign(
      {},
      Si(a, ["ref"]),
      o !== y.Fragment && u,
      o !== y.Fragment && p
    ),
    d
  );
}
function J0(...e) {
  return e.every((t) => t == null)
    ? void 0
    : (t) => {
        for (let n of e)
          n != null && (typeof n == "function" ? n(t) : (n.current = t));
      };
}
function Sf(...e) {
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
function Be(e) {
  var t;
  return Object.assign(y.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name,
  });
}
function Yu(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function Si(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
let Z0 = "div";
var wo = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(wo || {});
function eg(e, t) {
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
  return Je({
    ourProps: o,
    theirProps: l,
    slot: {},
    defaultTag: Z0,
    name: "Hidden",
  });
}
let ks = Be(eg),
  Na = y.createContext(null);
Na.displayName = "OpenClosedContext";
var ze = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(ze || {});
function Ca() {
  return y.useContext(Na);
}
function tg({ value: e, children: t }) {
  return I.createElement(Na.Provider, { value: e }, t);
}
function ng(e) {
  function t() {
    document.readyState !== "loading" &&
      (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" &&
    typeof document < "u" &&
    (document.addEventListener("DOMContentLoaded", t), t());
}
let Bt = [];
ng(() => {
  function e(t) {
    t.target instanceof HTMLElement &&
      t.target !== document.body &&
      Bt[0] !== t.target &&
      (Bt.unshift(t.target),
      (Bt = Bt.filter((n) => n != null && n.isConnected)),
      Bt.splice(10));
  }
  window.addEventListener("click", e, { capture: !0 }),
    window.addEventListener("mousedown", e, { capture: !0 }),
    window.addEventListener("focus", e, { capture: !0 }),
    document.body.addEventListener("click", e, { capture: !0 }),
    document.body.addEventListener("mousedown", e, { capture: !0 }),
    document.body.addEventListener("focus", e, { capture: !0 });
});
function rg(e) {
  let t = e.parentElement,
    n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && lg(n) ? !1 : r;
}
function lg(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
var kf = ((e) => (
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
))(kf || {});
function Ef(e, t, n, r) {
  let l = Tt(n);
  y.useEffect(() => {
    e = e ?? window;
    function o(i) {
      l.current(i);
    }
    return e.addEventListener(t, o, r), () => e.removeEventListener(t, o, r);
  }, [e, t, r]);
}
function sl() {
  let e = y.useRef(!1);
  return (
    qe(
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
function Nf(e) {
  let t = q(e),
    n = y.useRef(!1);
  y.useEffect(
    () => (
      (n.current = !1),
      () => {
        (n.current = !0),
          Ao(() => {
            n.current && t();
          });
      }
    ),
    [t]
  );
}
var Pr = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"), (e[(e.Backwards = 1)] = "Backwards"), e
))(Pr || {});
function og() {
  let e = y.useRef(0);
  return (
    wf(
      "keydown",
      (t) => {
        t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
      },
      !0
    ),
    e
  );
}
function Cf(e) {
  if (!e) return new Set();
  if (typeof e == "function") return new Set(e());
  let t = new Set();
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let ig = "div";
var Pf = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.InitialFocus = 2)] = "InitialFocus"),
  (e[(e.TabLock = 4)] = "TabLock"),
  (e[(e.FocusLock = 8)] = "FocusLock"),
  (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
  (e[(e.All = 30)] = "All"),
  e
))(Pf || {});
function sg(e, t) {
  let n = y.useRef(null),
    r = ft(n, t),
    { initialFocus: l, containers: o, features: i = 30, ...s } = e;
  ir() || (i = 1);
  let a = il(n);
  cg({ ownerDocument: a }, !!(i & 16));
  let u = dg({ ownerDocument: a, container: n, initialFocus: l }, !!(i & 2));
  fg(
    { ownerDocument: a, container: n, containers: o, previousActiveElement: u },
    !!(i & 8)
  );
  let d = og(),
    p = q((x) => {
      let N = n.current;
      N &&
        ((h) => h())(() => {
          Se(d.current, {
            [Pr.Forwards]: () => {
              Bl(N, fn.First, { skipElements: [x.relatedTarget] });
            },
            [Pr.Backwards]: () => {
              Bl(N, fn.Last, { skipElements: [x.relatedTarget] });
            },
          });
        });
    }),
    g = ka(),
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
        let N = Cf(o);
        n.current instanceof HTMLElement && N.add(n.current);
        let h = x.relatedTarget;
        h instanceof HTMLElement &&
          h.dataset.headlessuiFocusGuard !== "true" &&
          (jf(N, h) ||
            (v.current
              ? Bl(
                  n.current,
                  Se(d.current, {
                    [Pr.Forwards]: () => fn.Next,
                    [Pr.Backwards]: () => fn.Previous,
                  }) | fn.WrapAround,
                  { relativeTo: x.target }
                )
              : x.target instanceof HTMLElement && xn(x.target)));
      },
    };
  return I.createElement(
    I.Fragment,
    null,
    !!(i & 4) &&
      I.createElement(ks, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: p,
        features: wo.Focusable,
      }),
    Je({ ourProps: w, theirProps: s, defaultTag: ig, name: "FocusTrap" }),
    !!(i & 4) &&
      I.createElement(ks, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: p,
        features: wo.Focusable,
      })
  );
}
let ag = Be(sg),
  xr = Object.assign(ag, { features: Pf });
function ug(e = !0) {
  let t = y.useRef(Bt.slice());
  return (
    Ea(
      ([n], [r]) => {
        r === !0 &&
          n === !1 &&
          Ao(() => {
            t.current.splice(0);
          }),
          r === !1 && n === !0 && (t.current = Bt.slice());
      },
      [e, Bt, t]
    ),
    q(() => {
      var n;
      return (n = t.current.find((r) => r != null && r.isConnected)) != null
        ? n
        : null;
    })
  );
}
function cg({ ownerDocument: e }, t) {
  let n = ug(t);
  Ea(() => {
    t ||
      ((e == null ? void 0 : e.activeElement) ===
        (e == null ? void 0 : e.body) &&
        xn(n()));
  }, [t]),
    Nf(() => {
      t && xn(n());
    });
}
function dg({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let l = y.useRef(null),
    o = sl();
  return (
    Ea(() => {
      if (!r) return;
      let i = t.current;
      i &&
        Ao(() => {
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
            ? xn(n.current)
            : Bl(i, fn.First) === gf.Error &&
              console.warn(
                "There are no focusable elements inside the <FocusTrap />"
              ),
            (l.current = e == null ? void 0 : e.activeElement);
        });
    }, [r]),
    l
  );
}
function fg(
  { ownerDocument: e, container: t, containers: n, previousActiveElement: r },
  l
) {
  let o = sl();
  Ef(
    e == null ? void 0 : e.defaultView,
    "focus",
    (i) => {
      if (!l || !o.current) return;
      let s = Cf(n);
      t.current instanceof HTMLElement && s.add(t.current);
      let a = r.current;
      if (!a) return;
      let u = i.target;
      u && u instanceof HTMLElement
        ? jf(s, u)
          ? ((r.current = u), xn(u))
          : (i.preventDefault(), i.stopPropagation(), xn(a))
        : xn(r.current);
    },
    !0
  );
}
function jf(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
let Tf = y.createContext(!1);
function pg() {
  return y.useContext(Tf);
}
function Es(e) {
  return I.createElement(Tf.Provider, { value: e.force }, e.children);
}
function mg(e) {
  let t = pg(),
    n = y.useContext(Of),
    r = il(e),
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
let hg = y.Fragment;
function gg(e, t) {
  let n = e,
    r = y.useRef(null),
    l = ft(
      q0((d) => {
        r.current = d;
      }),
      t
    ),
    o = il(r),
    i = mg(r),
    [s] = y.useState(() => {
      var d;
      return jt.isServer
        ? null
        : (d = o == null ? void 0 : o.createElement("div")) != null
        ? d
        : null;
    }),
    a = y.useContext(Ns),
    u = ir();
  return (
    qe(() => {
      !i ||
        !s ||
        i.contains(s) ||
        (s.setAttribute("data-headlessui-portal", ""), i.appendChild(s));
    }, [i, s]),
    qe(() => {
      if (s && a) return a.register(s);
    }, [a, s]),
    Nf(() => {
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
        : uf.createPortal(
            Je({
              ourProps: { ref: l },
              theirProps: n,
              defaultTag: hg,
              name: "Portal",
            }),
            s
          )
      : null
  );
}
let yg = y.Fragment,
  Of = y.createContext(null);
function vg(e, t) {
  let { target: n, ...r } = e,
    l = { ref: ft(t) };
  return I.createElement(
    Of.Provider,
    { value: n },
    Je({ ourProps: l, theirProps: r, defaultTag: yg, name: "Popover.Group" })
  );
}
let Ns = y.createContext(null);
function wg() {
  let e = y.useContext(Ns),
    t = y.useRef([]),
    n = q((o) => (t.current.push(o), e && e.register(o), () => r(o))),
    r = q((o) => {
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
          return I.createElement(Ns.Provider, { value: l }, o);
        },
      [l]
    ),
  ];
}
let xg = Be(gg),
  Sg = Be(vg),
  Cs = Object.assign(xg, { Group: Sg });
function kg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const Eg = typeof Object.is == "function" ? Object.is : kg,
  { useState: Ng, useEffect: Cg, useLayoutEffect: Pg, useDebugValue: jg } = Fr;
function Tg(e, t, n) {
  const r = t(),
    [{ inst: l }, o] = Ng({ inst: { value: r, getSnapshot: t } });
  return (
    Pg(() => {
      (l.value = r), (l.getSnapshot = t), ki(l) && o({ inst: l });
    }, [e, r, t]),
    Cg(
      () => (
        ki(l) && o({ inst: l }),
        e(() => {
          ki(l) && o({ inst: l });
        })
      ),
      [e]
    ),
    jg(r),
    r
  );
}
function ki(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !Eg(n, r);
  } catch {
    return !0;
  }
}
function Og(e, t, n) {
  return t();
}
const _g =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Lg = !_g,
  Mg = Lg ? Og : Tg,
  bg = "useSyncExternalStore" in Fr ? ((e) => e.useSyncExternalStore)(Fr) : Mg;
function Dg(e) {
  return bg(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function $g(e, t) {
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
function Fg() {
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
function Rg() {
  return vf()
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
              let s = On();
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
function zg() {
  return {
    before({ doc: e, d: t }) {
      t.style(e.documentElement, "overflow", "hidden");
    },
  };
}
function Ig(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let gn = $g(() => new Map(), {
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
    let r = { doc: e, d: t, meta: Ig(n) },
      l = [Rg(), Fg(), zg()];
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
gn.subscribe(() => {
  let e = gn.getSnapshot(),
    t = new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden",
      l = n.count !== 0;
    ((l && !r) || (!l && r)) &&
      gn.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
      n.count === 0 && gn.dispatch("TEARDOWN", n);
  }
});
function Ag(e, t, n) {
  let r = Dg(gn),
    l = e ? r.get(e) : void 0,
    o = l ? l.count > 0 : !1;
  return (
    qe(() => {
      if (!(!e || !t))
        return gn.dispatch("PUSH", e, n), () => gn.dispatch("POP", e, n);
    }, [t, e]),
    o
  );
}
let Ei = new Map(),
  Sr = new Map();
function Gu(e, t = !0) {
  qe(() => {
    var n;
    if (!t) return;
    let r = typeof e == "function" ? e() : e.current;
    if (!r) return;
    function l() {
      var i;
      if (!r) return;
      let s = (i = Sr.get(r)) != null ? i : 1;
      if ((s === 1 ? Sr.delete(r) : Sr.set(r, s - 1), s !== 1)) return;
      let a = Ei.get(r);
      a &&
        (a["aria-hidden"] === null
          ? r.removeAttribute("aria-hidden")
          : r.setAttribute("aria-hidden", a["aria-hidden"]),
        (r.inert = a.inert),
        Ei.delete(r));
    }
    let o = (n = Sr.get(r)) != null ? n : 0;
    return (
      Sr.set(r, o + 1),
      o !== 0 ||
        (Ei.set(r, {
          "aria-hidden": r.getAttribute("aria-hidden"),
          inert: r.inert,
        }),
        r.setAttribute("aria-hidden", "true"),
        (r.inert = !0)),
      l
    );
  }, [e, t]);
}
function Hg({
  defaultContainers: e = [],
  portals: t,
  mainTreeNodeRef: n,
} = {}) {
  var r;
  let l = y.useRef((r = n == null ? void 0 : n.current) != null ? r : null),
    o = il(l),
    i = q(() => {
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
        o == null ? void 0 : o.querySelectorAll("html > *, body > *")) != null
        ? s
        : [])
        p !== document.body &&
          p !== document.head &&
          p instanceof HTMLElement &&
          p.id !== "headlessui-portal-root" &&
          (p.contains(l.current) ||
            p.contains(
              (u = (a = l.current) == null ? void 0 : a.getRootNode()) == null
                ? void 0
                : u.host
            ) ||
            d.some((g) => p.contains(g)) ||
            d.push(p));
      return d;
    });
  return {
    resolveContainers: i,
    contains: q((s) => i().some((a) => a.contains(s))),
    mainTreeNodeRef: l,
    MainTreeNode: y.useMemo(
      () =>
        function () {
          return n != null
            ? null
            : I.createElement(ks, { features: wo.Hidden, ref: l });
        },
      [l, n]
    ),
  };
}
let Pa = y.createContext(() => {});
Pa.displayName = "StackContext";
var Ps = ((e) => ((e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e))(
  Ps || {}
);
function Wg() {
  return y.useContext(Pa);
}
function Ug({ children: e, onUpdate: t, type: n, element: r, enabled: l }) {
  let o = Wg(),
    i = q((...s) => {
      t == null || t(...s), o(...s);
    });
  return (
    qe(() => {
      let s = l === void 0 || l === !0;
      return (
        s && i(0, n, r),
        () => {
          s && i(1, n, r);
        }
      );
    }, [i, n, r, l]),
    I.createElement(Pa.Provider, { value: i }, e)
  );
}
let _f = y.createContext(null);
function Lf() {
  let e = y.useContext(_f);
  if (e === null) {
    let t = new Error(
      "You used a <Description /> component, but it is not inside a relevant parent."
    );
    throw (Error.captureStackTrace && Error.captureStackTrace(t, Lf), t);
  }
  return e;
}
function Bg() {
  let [e, t] = y.useState([]);
  return [
    e.length > 0 ? e.join(" ") : void 0,
    y.useMemo(
      () =>
        function (n) {
          let r = q(
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
          return I.createElement(_f.Provider, { value: l }, n.children);
        },
      [t]
    ),
  ];
}
let Qg = "p";
function Vg(e, t) {
  let n = sr(),
    { id: r = `headlessui-description-${n}`, ...l } = e,
    o = Lf(),
    i = ft(t);
  qe(() => o.register(r), [r, o.register]);
  let s = { ref: i, ...o.props, id: r };
  return Je({
    ourProps: s,
    theirProps: l,
    slot: o.slot || {},
    defaultTag: Qg,
    name: o.name || "Description",
  });
}
let Yg = Be(Vg),
  Gg = Object.assign(Yg, {});
var Kg = ((e) => (
    (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
  ))(Kg || {}),
  Xg = ((e) => ((e[(e.SetTitleId = 0)] = "SetTitleId"), e))(Xg || {});
let qg = {
    0(e, t) {
      return e.titleId === t.id ? e : { ...e, titleId: t.id };
    },
  },
  xo = y.createContext(null);
xo.displayName = "DialogContext";
function al(e) {
  let t = y.useContext(xo);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, al), n);
  }
  return t;
}
function Jg(e, t, n = () => [document.body]) {
  Ag(e, t, (r) => {
    var l;
    return { containers: [...((l = r.containers) != null ? l : []), n] };
  });
}
function Zg(e, t) {
  return Se(t.type, qg, e, t);
}
let ey = "div",
  ty = vo.RenderStrategy | vo.Static;
function ny(e, t) {
  let n = sr(),
    {
      id: r = `headlessui-dialog-${n}`,
      open: l,
      onClose: o,
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
  let v = Ca();
  l === void 0 && v !== null && (l = (v & ze.Open) === ze.Open);
  let w = y.useRef(null),
    x = ft(w, t),
    N = il(w),
    h = e.hasOwnProperty("open") || v !== null,
    f = e.hasOwnProperty("onClose");
  if (!h && !f)
    throw new Error(
      "You have to provide an `open` and an `onClose` prop to the `Dialog` component."
    );
  if (!h)
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
  let m = l ? 0 : 1,
    [k, P] = y.useReducer(Zg, {
      titleId: null,
      descriptionId: null,
      panelRef: y.createRef(),
    }),
    C = q(() => o(!1)),
    O = q((K) => P({ type: 0, id: K })),
    L = ir() ? (a ? !1 : m === 0) : !1,
    F = d > 1,
    D = y.useContext(xo) !== null,
    [ie, Ee] = wg(),
    _e = {
      get current() {
        var K;
        return (K = k.panelRef.current) != null ? K : w.current;
      },
    },
    {
      resolveContainers: Ze,
      mainTreeNodeRef: et,
      MainTreeNode: tt,
    } = Hg({ portals: ie, defaultContainers: [_e] }),
    Fe = F ? "parent" : "leaf",
    T = v !== null ? (v & ze.Closing) === ze.Closing : !1,
    M = D || T ? !1 : L,
    b = y.useCallback(() => {
      var K, rt;
      return (rt = Array.from(
        (K = N == null ? void 0 : N.querySelectorAll("body > *")) != null
          ? K
          : []
      ).find((Ne) =>
        Ne.id === "headlessui-portal-root"
          ? !1
          : Ne.contains(et.current) && Ne instanceof HTMLElement
      )) != null
        ? rt
        : null;
    }, [et]);
  Gu(b, M);
  let W = F ? !0 : L,
    A = y.useCallback(() => {
      var K, rt;
      return (rt = Array.from(
        (K =
          N == null
            ? void 0
            : N.querySelectorAll("[data-headlessui-portal]")) != null
          ? K
          : []
      ).find((Ne) => Ne.contains(et.current) && Ne instanceof HTMLElement)) !=
        null
        ? rt
        : null;
    }, [et]);
  Gu(A, W),
    X0(
      Ze,
      (K) => {
        K.preventDefault(), C();
      },
      !(!L || F)
    );
  let ne = !(F || m !== 0);
  Ef(N == null ? void 0 : N.defaultView, "keydown", (K) => {
    ne &&
      (K.defaultPrevented ||
        (K.key === kf.Escape &&
          (K.preventDefault(), K.stopPropagation(), C())));
  }),
    Jg(N, !(T || m !== 0 || D), Ze),
    y.useEffect(() => {
      if (m !== 0 || !w.current) return;
      let K = new ResizeObserver((rt) => {
        for (let Ne of rt) {
          let St = Ne.target.getBoundingClientRect();
          St.x === 0 && St.y === 0 && St.width === 0 && St.height === 0 && C();
        }
      });
      return K.observe(w.current), () => K.disconnect();
    }, [m, w, C]);
  let [nt, $t] = Bg(),
    Bo = y.useMemo(
      () => [{ dialogState: m, close: C, setTitleId: O }, k],
      [m, k, C, O]
    ),
    ul = y.useMemo(() => ({ open: m === 0 }), [m]),
    Qo = {
      ref: x,
      id: r,
      role: s,
      "aria-modal": m === 0 ? !0 : void 0,
      "aria-labelledby": k.titleId,
      "aria-describedby": nt,
    };
  return I.createElement(
    Ug,
    {
      type: "Dialog",
      enabled: m === 0,
      element: w,
      onUpdate: q((K, rt) => {
        rt === "Dialog" &&
          Se(K, {
            [Ps.Add]: () => p((Ne) => Ne + 1),
            [Ps.Remove]: () => p((Ne) => Ne - 1),
          });
      }),
    },
    I.createElement(
      Es,
      { force: !0 },
      I.createElement(
        Cs,
        null,
        I.createElement(
          xo.Provider,
          { value: Bo },
          I.createElement(
            Cs.Group,
            { target: w },
            I.createElement(
              Es,
              { force: !1 },
              I.createElement(
                $t,
                { slot: ul, name: "Dialog.Description" },
                I.createElement(
                  xr,
                  {
                    initialFocus: i,
                    containers: Ze,
                    features: L
                      ? Se(Fe, {
                          parent: xr.features.RestoreFocus,
                          leaf: xr.features.All & ~xr.features.FocusLock,
                        })
                      : xr.features.None,
                  },
                  I.createElement(
                    Ee,
                    null,
                    Je({
                      ourProps: Qo,
                      theirProps: u,
                      slot: ul,
                      defaultTag: ey,
                      features: ty,
                      visible: m === 0,
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
    I.createElement(tt, null)
  );
}
let ry = "div";
function ly(e, t) {
  let n = sr(),
    { id: r = `headlessui-dialog-overlay-${n}`, ...l } = e,
    [{ dialogState: o, close: i }] = al("Dialog.Overlay"),
    s = ft(t),
    a = q((d) => {
      if (d.target === d.currentTarget) {
        if (rg(d.currentTarget)) return d.preventDefault();
        d.preventDefault(), d.stopPropagation(), i();
      }
    }),
    u = y.useMemo(() => ({ open: o === 0 }), [o]);
  return Je({
    ourProps: { ref: s, id: r, "aria-hidden": !0, onClick: a },
    theirProps: l,
    slot: u,
    defaultTag: ry,
    name: "Dialog.Overlay",
  });
}
let oy = "div";
function iy(e, t) {
  let n = sr(),
    { id: r = `headlessui-dialog-backdrop-${n}`, ...l } = e,
    [{ dialogState: o }, i] = al("Dialog.Backdrop"),
    s = ft(t);
  y.useEffect(() => {
    if (i.panelRef.current === null)
      throw new Error(
        "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing."
      );
  }, [i.panelRef]);
  let a = y.useMemo(() => ({ open: o === 0 }), [o]);
  return I.createElement(
    Es,
    { force: !0 },
    I.createElement(
      Cs,
      null,
      Je({
        ourProps: { ref: s, id: r, "aria-hidden": !0 },
        theirProps: l,
        slot: a,
        defaultTag: oy,
        name: "Dialog.Backdrop",
      })
    )
  );
}
let sy = "div";
function ay(e, t) {
  let n = sr(),
    { id: r = `headlessui-dialog-panel-${n}`, ...l } = e,
    [{ dialogState: o }, i] = al("Dialog.Panel"),
    s = ft(t, i.panelRef),
    a = y.useMemo(() => ({ open: o === 0 }), [o]),
    u = q((d) => {
      d.stopPropagation();
    });
  return Je({
    ourProps: { ref: s, id: r, onClick: u },
    theirProps: l,
    slot: a,
    defaultTag: sy,
    name: "Dialog.Panel",
  });
}
let uy = "h2";
function cy(e, t) {
  let n = sr(),
    { id: r = `headlessui-dialog-title-${n}`, ...l } = e,
    [{ dialogState: o, setTitleId: i }] = al("Dialog.Title"),
    s = ft(t);
  y.useEffect(() => (i(r), () => i(null)), [r, i]);
  let a = y.useMemo(() => ({ open: o === 0 }), [o]);
  return Je({
    ourProps: { ref: s, id: r },
    theirProps: l,
    slot: a,
    defaultTag: uy,
    name: "Dialog.Title",
  });
}
let dy = Be(ny),
  fy = Be(iy),
  py = Be(ay),
  my = Be(ly),
  hy = Be(cy),
  Ni = Object.assign(dy, {
    Backdrop: fy,
    Panel: py,
    Overlay: my,
    Title: hy,
    Description: Gg,
  });
function gy(e = 0) {
  let [t, n] = y.useState(e),
    r = sl(),
    l = y.useCallback(
      (a) => {
        r.current && n((u) => u | a);
      },
      [t, r]
    ),
    o = y.useCallback((a) => !!(t & a), [t]),
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
  return { flags: t, addFlag: l, hasFlag: o, removeFlag: i, toggleFlag: s };
}
function yy(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return (t.called = !0), e(...n);
  };
}
function Ci(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Pi(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function vy(e, t) {
  let n = On();
  if (!e) return n.dispose;
  let { transitionDuration: r, transitionDelay: l } = getComputedStyle(e),
    [o, i] = [r, l].map((a) => {
      let [u = 0] = a
        .split(",")
        .filter(Boolean)
        .map((d) => (d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3))
        .sort((d, p) => p - d);
      return u;
    }),
    s = o + i;
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
function wy(e, t, n, r) {
  let l = n ? "enter" : "leave",
    o = On(),
    i = r !== void 0 ? yy(r) : () => {};
  l === "enter" && (e.removeAttribute("hidden"), (e.style.display = ""));
  let s = Se(l, { enter: () => t.enter, leave: () => t.leave }),
    a = Se(l, { enter: () => t.enterTo, leave: () => t.leaveTo }),
    u = Se(l, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return (
    Pi(
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
    Ci(e, ...t.base, ...s, ...u),
    o.nextFrame(() => {
      Pi(e, ...t.base, ...s, ...u),
        Ci(e, ...t.base, ...s, ...a),
        vy(
          e,
          () => (Pi(e, ...t.base, ...s), Ci(e, ...t.base, ...t.entered), i())
        );
    }),
    o.dispose
  );
}
function xy({
  immediate: e,
  container: t,
  direction: n,
  classes: r,
  onStart: l,
  onStop: o,
}) {
  let i = sl(),
    s = ka(),
    a = Tt(n);
  qe(() => {
    e && (a.current = "enter");
  }, [e]),
    qe(() => {
      let u = On();
      s.add(u.dispose);
      let d = t.current;
      if (d && a.current !== "idle" && i.current)
        return (
          u.dispose(),
          l.current(a.current),
          u.add(
            wy(d, r.current, a.current === "enter", () => {
              u.dispose(), o.current(a.current);
            })
          ),
          u.dispose
        );
    }, [n]);
}
function zt(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let Ho = y.createContext(null);
Ho.displayName = "TransitionContext";
var Sy = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(Sy || {});
function ky() {
  let e = y.useContext(Ho);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
function Ey() {
  let e = y.useContext(Wo);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
    );
  return e;
}
let Wo = y.createContext(null);
Wo.displayName = "NestingContext";
function Uo(e) {
  return "children" in e
    ? Uo(e.children)
    : e.current
        .filter(({ el: t }) => t.current !== null)
        .filter(({ state: t }) => t === "visible").length > 0;
}
function Mf(e, t) {
  let n = Tt(e),
    r = y.useRef([]),
    l = sl(),
    o = ka(),
    i = q((v, w = Yt.Hidden) => {
      let x = r.current.findIndex(({ el: N }) => N === v);
      x !== -1 &&
        (Se(w, {
          [Yt.Unmount]() {
            r.current.splice(x, 1);
          },
          [Yt.Hidden]() {
            r.current[x].state = "hidden";
          },
        }),
        o.microTask(() => {
          var N;
          !Uo(r) && l.current && ((N = n.current) == null || N.call(n));
        }));
    }),
    s = q((v) => {
      let w = r.current.find(({ el: x }) => x === v);
      return (
        w
          ? w.state !== "visible" && (w.state = "visible")
          : r.current.push({ el: v, state: "visible" }),
        () => i(v, Yt.Unmount)
      );
    }),
    a = y.useRef([]),
    u = y.useRef(Promise.resolve()),
    d = y.useRef({ enter: [], leave: [], idle: [] }),
    p = q((v, w, x) => {
      a.current.splice(0),
        t &&
          (t.chains.current[w] = t.chains.current[w].filter(([N]) => N !== v)),
        t == null ||
          t.chains.current[w].push([
            v,
            new Promise((N) => {
              a.current.push(N);
            }),
          ]),
        t == null ||
          t.chains.current[w].push([
            v,
            new Promise((N) => {
              Promise.all(d.current[w].map(([h, f]) => f)).then(() => N());
            }),
          ]),
        w === "enter"
          ? (u.current = u.current
              .then(() => (t == null ? void 0 : t.wait.current))
              .then(() => x(w)))
          : x(w);
    }),
    g = q((v, w, x) => {
      Promise.all(d.current[w].splice(0).map(([N, h]) => h))
        .then(() => {
          var N;
          (N = a.current.shift()) == null || N();
        })
        .then(() => x(w));
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
function Ny() {}
let Cy = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function Ku(e) {
  var t;
  let n = {};
  for (let r of Cy) n[r] = (t = e[r]) != null ? t : Ny;
  return n;
}
function Py(e) {
  let t = y.useRef(Ku(e));
  return (
    y.useEffect(() => {
      t.current = Ku(e);
    }, [e]),
    t
  );
}
let jy = "div",
  bf = vo.RenderStrategy;
function Ty(e, t) {
  var n, r;
  let {
      beforeEnter: l,
      afterEnter: o,
      beforeLeave: i,
      afterLeave: s,
      enter: a,
      enterFrom: u,
      enterTo: d,
      entered: p,
      leave: g,
      leaveFrom: v,
      leaveTo: w,
      ...x
    } = e,
    N = y.useRef(null),
    h = ft(N, t),
    f = (n = x.unmount) == null || n ? Yt.Unmount : Yt.Hidden,
    { show: m, appear: k, initial: P } = ky(),
    [C, O] = y.useState(m ? "visible" : "hidden"),
    L = Ey(),
    { register: F, unregister: D } = L;
  y.useEffect(() => F(N), [F, N]),
    y.useEffect(() => {
      if (f === Yt.Hidden && N.current) {
        if (m && C !== "visible") {
          O("visible");
          return;
        }
        return Se(C, { hidden: () => D(N), visible: () => F(N) });
      }
    }, [C, N, F, D, m, f]);
  let ie = Tt({
      base: zt(x.className),
      enter: zt(a),
      enterFrom: zt(u),
      enterTo: zt(d),
      entered: zt(p),
      leave: zt(g),
      leaveFrom: zt(v),
      leaveTo: zt(w),
    }),
    Ee = Py({ beforeEnter: l, afterEnter: o, beforeLeave: i, afterLeave: s }),
    _e = ir();
  y.useEffect(() => {
    if (_e && C === "visible" && N.current === null)
      throw new Error(
        "Did you forget to passthrough the `ref` to the actual DOM node?"
      );
  }, [N, C, _e]);
  let Ze = P && !k,
    et = k && m && P,
    tt = !_e || Ze ? "idle" : m ? "enter" : "leave",
    Fe = gy(0),
    T = q((ne) =>
      Se(ne, {
        enter: () => {
          Fe.addFlag(ze.Opening), Ee.current.beforeEnter();
        },
        leave: () => {
          Fe.addFlag(ze.Closing), Ee.current.beforeLeave();
        },
        idle: () => {},
      })
    ),
    M = q((ne) =>
      Se(ne, {
        enter: () => {
          Fe.removeFlag(ze.Opening), Ee.current.afterEnter();
        },
        leave: () => {
          Fe.removeFlag(ze.Closing), Ee.current.afterLeave();
        },
        idle: () => {},
      })
    ),
    b = Mf(() => {
      O("hidden"), D(N);
    }, L),
    W = y.useRef(!1);
  xy({
    immediate: et,
    container: N,
    classes: ie,
    direction: tt,
    onStart: Tt((ne) => {
      (W.current = !0), b.onStart(N, ne, T);
    }),
    onStop: Tt((ne) => {
      (W.current = !1),
        b.onStop(N, ne, M),
        ne === "leave" && !Uo(b) && (O("hidden"), D(N));
    }),
  });
  let A = x,
    xt = { ref: h };
  return (
    et
      ? (A = {
          ...A,
          className: yo(
            x.className,
            ...ie.current.enter,
            ...ie.current.enterFrom
          ),
        })
      : W.current &&
        ((A.className = yo(
          x.className,
          (r = N.current) == null ? void 0 : r.className
        )),
        A.className === "" && delete A.className),
    I.createElement(
      Wo.Provider,
      { value: b },
      I.createElement(
        tg,
        { value: Se(C, { visible: ze.Open, hidden: ze.Closed }) | Fe.flags },
        Je({
          ourProps: xt,
          theirProps: A,
          defaultTag: jy,
          features: bf,
          visible: C === "visible",
          name: "Transition.Child",
        })
      )
    )
  );
}
function Oy(e, t) {
  let { show: n, appear: r = !1, unmount: l = !0, ...o } = e,
    i = y.useRef(null),
    s = ft(i, t);
  ir();
  let a = Ca();
  if (
    (n === void 0 && a !== null && (n = (a & ze.Open) === ze.Open),
    ![!0, !1].includes(n))
  )
    throw new Error(
      "A <Transition /> is used but it is missing a `show={true | false}` prop."
    );
  let [u, d] = y.useState(n ? "visible" : "hidden"),
    p = Mf(() => {
      d("hidden");
    }),
    [g, v] = y.useState(!0),
    w = y.useRef([n]);
  qe(() => {
    g !== !1 &&
      w.current[w.current.length - 1] !== n &&
      (w.current.push(n), v(!1));
  }, [w, n]);
  let x = y.useMemo(() => ({ show: n, appear: r, initial: g }), [n, r, g]);
  y.useEffect(() => {
    if (n) d("visible");
    else if (!Uo(p)) d("hidden");
    else {
      let m = i.current;
      if (!m) return;
      let k = m.getBoundingClientRect();
      k.x === 0 && k.y === 0 && k.width === 0 && k.height === 0 && d("hidden");
    }
  }, [n, p]);
  let N = { unmount: l },
    h = q(() => {
      var m;
      g && v(!1), (m = e.beforeEnter) == null || m.call(e);
    }),
    f = q(() => {
      var m;
      g && v(!1), (m = e.beforeLeave) == null || m.call(e);
    });
  return I.createElement(
    Wo.Provider,
    { value: p },
    I.createElement(
      Ho.Provider,
      { value: x },
      Je({
        ourProps: {
          ...N,
          as: y.Fragment,
          children: I.createElement(Df, {
            ref: s,
            ...N,
            ...o,
            beforeEnter: h,
            beforeLeave: f,
          }),
        },
        theirProps: {},
        defaultTag: y.Fragment,
        features: bf,
        visible: u === "visible",
        name: "Transition",
      })
    )
  );
}
function _y(e, t) {
  let n = y.useContext(Ho) !== null,
    r = Ca() !== null;
  return I.createElement(
    I.Fragment,
    null,
    !n && r
      ? I.createElement(js, { ref: t, ...e })
      : I.createElement(Df, { ref: t, ...e })
  );
}
let js = Be(Oy),
  Df = Be(Ty),
  Ly = Be(_y),
  ji = Object.assign(js, { Child: Ly, Root: js }),
  yn = null;
const My = async () => {
    if (yn) return yn;
    try {
      const e = await fetch("../config.txt");
      if (!e.ok) throw new Error("Failed to load configuration");
      return (yn = await e.json()), yn;
    } catch (e) {
      throw (console.error("Error loading config:", e), e);
    }
  },
  $f = (e) => {
    if (!yn) throw new Error("Configuration not loaded");
    return `${yn.domain}${e}`;
  },
  by = () => yn,
  Ht = async (e, t = {}) => {
    const n = $f(e),
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
  Dy = {
    zh: {
      "app.title": "撥補核撥",
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
      "app.button.lightOn": "亮燈",
      "app.orders.title": "歷史清單",
      "app.orders.empty": "無撥補單資料",
      "app.orders.loading": "載入中...",
      "app.toast.success": "撥補單建立成功",
      "filter.status": "顯示狀態",
      "filter.status.pending": "未核撥",
      "filter.status.completed": "已核撥",
      "filter.status.all": "全部",
      "table.source": "來源庫別",
      "table.destination": "目的庫別",
      "table.drugCode": "藥碼",
      "table.drugName": "藥名",
      "table.issuedQty": "撥發量",
      "table.actualQty": "實撥量",
      "table.re": "修改實撥量",
      "table.createdTime": "操作時間",
      "table.operator": "操作者",
      "table.status": "狀態",
      "table.creator": "建表人員",
      "table.issuer": "撥發人員",
      "table.batchNumber": "批號",
      "table.expiryDate": "效期",
      "table.createTime": "建立時間",
      "table.issueTime": "撥發時間",
      "table.getTime": "簽收時間",
      "table.getStaff": "簽收人員",
      "time.type": "時間類型",
      "time.operation": "操作時間",
      "time.start": "開始時間",
      "time.end": "結束時間",
      "login.title": "撥補核撥系統",
      "login.username": "帳號",
      "login.password": "密碼",
      "login.button": "登入",
      "login.processing": "登入中...",
      "button.logout": "登出",
      "button.home": "回到首頁",
      "button.export": "匯出",
      "button.bulkApprove": "全部核撥",
      "button.approve": "核撥",
      "button.confirm": "確認",
      "button.cancel": "取消",
      "button.clear": "清除",
      "button.processing": "處理中...",
      "button.lightOn": "亮燈",
      "button.notify": "通知",
      "button.cancelNotify": "取消通知",
      "modal.actualQuantity": "輸入實際撥發量",
      "modal.drugName": "藥品名稱",
      "modal.drugCode": "藥碼",
      "modal.issuedQuantity": "撥發量",
      "modal.actualIssuedQuantity": "實際撥發量",
      "search.field.name": "藥名",
      "search.field.code": "藥碼",
      "search.field.source": "來源",
      "search.field.destination": "目的",
      "search.placeholder": "請輸入搜尋關鍵字",
      "status.pending": "等待過帳",
      "status.completed": "已過帳",
      "card.needsQuantity": "請輸入實撥量",
      "footer.copyright": "Copyright ©2025 鴻森智能科技",
      "platform.title": "智慧醫療管理系統",
    },
    en: {
      "app.title": "Distribution Approval",
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
      "table.source": "Source Storage",
      "table.destination": "Destination",
      "table.drugCode": "Drug Code",
      "table.drugName": "Drug Name",
      "table.issuedQty": "Issued Qty",
      "table.actualQty": "Actual Qty",
      "table.re": "Change Actual Qty",
      "table.createdTime": "Created Time",
      "table.getTime": "Receipt Time",
      "table.getStaff": "Receipt Staff",
      "table.operator": "Operator",
      "table.status": "Status",
      "table.creator": "Creator",
      "table.issuer": "Issuer",
      "table.batchNumber": "Batch No.",
      "table.expiryDate": "Expiry Date",
      "table.createTime": "Create Time",
      "table.issueTime": "Issue Time",
      "time.type": "Time Type",
      "time.operation": "Operation Time",
      "time.start": "Start Date Time",
      "time.end": "End Date Time",
      "login.title": "Distribution Approval System",
      "login.username": "Username",
      "login.password": "Password",
      "login.button": "Login",
      "login.processing": "Logging in...",
      "button.logout": "Logout",
      "button.home": "Home",
      "button.export": "Export",
      "button.bulkApprove": "Bulk Approve",
      "button.approve": "Approve",
      "button.confirm": "Confirm",
      "button.cancel": "Cancel",
      "button.clear": "Clear",
      "button.processing": "Processing...",
      "button.lightOn": "Light On",
      "button.notify": "Notify",
      "button.cancelNotify": "Cancel Notify",
      "modal.actualQuantity": "Enter Actual Issued Quantity",
      "modal.drugName": "Drug Name",
      "modal.drugCode": "Drug Code",
      "modal.issuedQuantity": "Issued Quantity",
      "modal.actualIssuedQuantity": "Actual Issued Quantity",
      "search.field.name": "Name",
      "search.field.code": "Code",
      "search.field.source": "Source",
      "search.field.destination": "Destination",
      "search.placeholder": "Enter search keywords",
      "status.pending": "Pending",
      "status.completed": "Completed",
      "card.needsQuantity": "Please enter actual quantity",
      "footer.copyright": "Copyright ©2025 Hongsen Smart Technology",
      "platform.title": "Intelligent medical management system",
    },
  },
  Ff = y.createContext(void 0),
  $y = ({ children: e }) => {
    const [t, n] = y.useState("zh"),
      r = () => {
        n((o) => (o === "zh" ? "en" : "zh"));
      },
      l = (o) => Dy[t][o] || o;
    return c.jsx(Ff.Provider, {
      value: { language: t, toggleLanguage: r, t: l },
      children: e,
    });
  },
  wt = () => {
    const e = y.useContext(Ff);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  },
  Fy = ({ startDate: e, endDate: t, onDateChange: n }) => {
    const { t: r } = wt(),
      [l, o] = y.useState(!1),
      i = (s, a, u, d) => {
        const p = new Date(`${s}T${a}`),
          g = new Date(`${u}T${d}`);
        n(p, g);
      };
    return c.jsxs("div", {
      className: "bg-white rounded-lg border border-gray-200 shadow-sm",
      children: [
        c.jsxs("button", {
          onClick: () => o(!l),
          className:
            "w-full flex items-center justify-between px-4 py-2 hover:bg-gray-50 transition-colors duration-200 rounded-lg",
          children: [
            c.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                c.jsx(O0, { size: 20, className: "text-gray-500" }),
                c.jsx("h3", {
                  className: "text-lg font-medium text-gray-900",
                  children: "時間區間 / Time Range",
                }),
              ],
            }),
            c.jsx(T0, {
              size: 20,
              className: `text-gray-500 transition-transform duration-200 ${
                l ? "rotate-180" : "rotate-0"
              }`,
            }),
          ],
        }),
        c.jsx("div", {
          className: `overflow-hidden transition-all duration-300 ease-in-out ${
            l ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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
                              value: Q(e, "yyyy-MM-dd"),
                              onChange: (s) =>
                                i(
                                  s.target.value,
                                  Q(e, "HH:mm:ss"),
                                  Q(t, "yyyy-MM-dd"),
                                  Q(t, "HH:mm:ss")
                                ),
                              className:
                                "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                            }),
                            c.jsx("input", {
                              type: "time",
                              value: Q(e, "HH:mm:ss"),
                              onChange: (s) =>
                                i(
                                  Q(e, "yyyy-MM-dd"),
                                  s.target.value,
                                  Q(t, "yyyy-MM-dd"),
                                  Q(t, "HH:mm:ss")
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
                              value: Q(t, "yyyy-MM-dd"),
                              onChange: (s) =>
                                i(
                                  Q(e, "yyyy-MM-dd"),
                                  Q(e, "HH:mm:ss"),
                                  s.target.value,
                                  Q(t, "HH:mm:ss")
                                ),
                              className:
                                "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                            }),
                            c.jsx("input", {
                              type: "time",
                              value: Q(t, "HH:mm:ss"),
                              onChange: (s) =>
                                i(
                                  Q(e, "yyyy-MM-dd"),
                                  Q(e, "HH:mm:ss"),
                                  Q(t, "yyyy-MM-dd"),
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
            }),
          }),
        }),
      ],
    });
  },
  Ry = ({ value: e, onChange: t }) => {
    const { t: n } = wt();
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
                  value: "已核撥",
                  checked: e === "已核撥",
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
  ja = "user_session",
  Rf = (e) => {
    const t = e.find((n) => n.name === "撥補核撥");
    return (t == null ? void 0 : t.state) === !0;
  },
  zy = (e) =>
    Rf(e.Permissions)
      ? (sessionStorage.setItem(ja, JSON.stringify(e)), !0)
      : !1,
  So = () => {
    const e = sessionStorage.getItem(ja);
    if (!e) return null;
    try {
      const t = JSON.parse(e);
      return !t.GUID || !t.ID || !t.Name || !Rf(t.Permissions)
        ? (ko(), null)
        : t;
    } catch {
      return ko(), null;
    }
  },
  ko = () => {
    sessionStorage.removeItem(ja);
  },
  Iy = () => {
    const e = So();
    if (!e) return !1;
    const t = new Date(e.loginTime).getTime();
    return (new Date().getTime() - t) / (1e3 * 60 * 60) > 24 ? (ko(), !1) : !0;
  },
  Ay = ({ size: e = "medium", className: t = "" }) => {
    const n = { small: "h-4 w-4", medium: "h-6 w-6", large: "h-8 w-8" };
    return c.jsx("div", {
      className: `animate-spin rounded-full border-2 border-white border-t-transparent ${n[e]} ${t}`,
    });
  },
  Hy = ({
    onClick: e,
    isLoading: t = !1,
    disabled: n = !1,
    className: r = "",
  }) => {
    const { t: l } = wt();
    return c.jsxs("button", {
      onClick: e,
      disabled: t || n,
      className: `px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50 transition-colors flex items-center justify-center ${r}`,
      children: [
        t
          ? c.jsx(Ay, { size: "small\\", className: "mr-2" })
          : c.jsx(_0, { size: 18, className: "mr-2" }),
        l("button.export"),
      ],
    });
  },
  Ll = { duration: 180, brightness: 0.9, color: "255,0,0" },
  zf = "light_settings",
  Wy = [
    { name: "red", value: "255,0,0", label: "紅色" },
    { name: "green", value: "0,255,0", label: "綠色" },
    { name: "blue", value: "0,0,255", label: "藍色" },
    { name: "yellow", value: "255,255,0", label: "黃色" },
  ],
  If = () => {
    try {
      const e = localStorage.getItem(zf);
      if (e) {
        const t = JSON.parse(e);
        return {
          duration: Math.max(5, Math.min(180, t.duration || Ll.duration)),
          brightness: Math.max(0, Math.min(0.9, t.brightness || Ll.brightness)),
          color: t.color || Ll.color,
        };
      }
    } catch (e) {
      console.error("Error loading light settings:", e);
    }
    return Ll;
  },
  Uy = (e) => {
    try {
      localStorage.setItem(zf, JSON.stringify(e));
    } catch (t) {
      console.error("Error saving light settings:", t);
    }
  },
  By = (e) => {
    if (e < 60) return `${e}秒`;
    const t = Math.floor(e / 60),
      n = e % 60;
    return n === 0 ? `${t}分鐘` : `${t}分${n}秒`;
  },
  Qy = ({
    orders: e,
    startDate: t,
    endDate: n,
    onDateChange: r,
    isLoading: l,
  }) => {
    const { t: o } = wt(),
      [i, s] = y.useState(null),
      [a, u] = y.useState(!1),
      [d, p] = y.useState(""),
      [g, v] = y.useState(null),
      [w, x] = y.useState(!1),
      [N, h] = y.useState(null),
      [f, m] = y.useState(null),
      [k, P] = y.useState(!1),
      [C, O] = y.useState("等待過帳"),
      [L, F] = y.useState(!0),
      [D, ie] = y.useState(!1),
      [Ee, _e] = y.useState(!1),
      [Ze, et] = y.useState("name"),
      [tt, Fe] = y.useState(""),
      [T, M] = y.useState(!1),
      [b, W] = y.useState({}),
      A = y.useRef({});
    y.useEffect(
      () => () => {
        Object.values(A.current).forEach((S) => clearTimeout(S));
      },
      []
    );
    const xt = [
        { value: "name", label: o("search.field.name") },
        { value: "code", label: o("search.field.code") },
        { value: "source", label: o("search.field.source") },
        { value: "destination", label: o("search.field.destination") },
      ],
      ne = (S) => S.LOT || S.lotNumber || S.lot_number || S.batch_number || "-",
      Dt = (S) => {
        const j = S.VAL || S.expiryDate || S.validity_period || S.expiry;
        if (!j || j === "-") return "-";
        if (j.match(/^\d{4}\/\d{2}\/\d{2}$/)) return j;
        try {
          const $ = new Date(j);
          if (!isNaN($.getTime())) return Q($, "yyyy/MM/dd");
        } catch {}
        return j;
      },
      nt = (S) => {
        const j = S.addedTime || S.reportGenerationTime;
        if (!j || j === "-" || j === "0001-01-01T00:00:00") return "-";
        if (j.match(/^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/)) return j;
        try {
          const $ = new Date(j);
          if (!isNaN($.getTime())) return Q($, "yyyy/MM/dd HH:mm:ss");
        } catch {}
        return j;
      },
      $t = (S) => {
        const j = S.issuanceTime;
        if (!j || j === "-" || j === "0001-01-01T00:00:00") return "-";
        if (j.match(/^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/)) return j;
        try {
          const $ = new Date(j);
          if (!isNaN($.getTime())) return Q($, "yyyy/MM/dd HH:mm:ss");
        } catch {}
        return j;
      },
      Bo = (S) => {
        const j = S.signedTime;
        if (!j || j === "-" || j === "0001-01-01T00:00:00") return "-";
        if (j.match(/^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/)) return j;
        try {
          const $ = new Date(j);
          if (!isNaN($.getTime())) return Q($, "yyyy/MM/dd HH:mm:ss");
        } catch {}
        return j;
      },
      ul = (S) => {
        O(S), r(t, n);
      },
      Qo = (S) => {
        S.preventDefault();
      },
      K = (S) => {
        S.key === "Enter" && S.preventDefault();
      },
      rt = async () => {
        M(!0);
        try {
          const S = await fetch(
            $f("/api/drugStotreDistribution/download_excel_by_addedTime"),
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ValueAry: [
                  Q(t, "yyyy-MM-dd HH:mm:ss"),
                  Q(n, "yyyy-MM-dd HH:mm:ss"),
                ],
              }),
            }
          );
          if (!S.ok) throw new Error("Export failed");
          const j = await S.blob(),
            $ = window.URL.createObjectURL(j),
            J = document.createElement("a");
          (J.href = $),
            (J.download = `Distribution_${Q(t, "yyyyMMdd")}_to_${Q(
              n,
              "yyyyMMdd"
            )}.xlsx`),
            document.body.appendChild(J),
            J.click(),
            window.URL.revokeObjectURL($),
            document.body.removeChild(J);
        } catch (S) {
          console.error("Export error:", S), v("匯出失敗，請稍後再試");
        } finally {
          M(!1);
        }
      },
      Ne = e.filter((S) => {
        let j;
        if (
          (C === "全部"
            ? (j = !0)
            : C === "已核撥"
            ? (j = S.state === "已過帳" || S.state === "已簽收")
            : (j = S.state === C),
          !tt)
        )
          return j;
        const $ = tt.toLowerCase();
        switch (Ze) {
          case "name":
            return j && S.name.toLowerCase().includes($);
          case "code":
            return j && S.code.toLowerCase().includes($);
          case "source":
            return j && S.sourceStoreType.toLowerCase().includes($);
          case "destination":
            return j && S.destinationStoreType.toLowerCase().includes($);
          default:
            return j;
        }
      }),
      St = Ne.reduce((S, j) => {
        const $ = j.code;
        return (
          S[$] || (S[$] = { orders: [], drugName: j.name, drugCode: j.code }),
          S[$].orders.push(j),
          S
        );
      }, {}),
      Ta = (S) => {
        const j = S.filter(
          (J) => J.state === "等待過帳" && J.actualIssuedQuantity
        );
        if (j.length === 0) return "";
        const $ = j.reduce((J, ge) => {
          const se = ge.code;
          return (
            J[se] || (J[se] = { name: ge.name, total: 0 }),
            (J[se].total += parseInt(ge.actualIssuedQuantity) || 0),
            J
          );
        }, {});
        return Object.values($).map((J) => `${J.name} - ${J.total}`).join(`
`);
      },
      Af = async () => {
        if (i) {
          if (!d || isNaN(Number(d)) || Number(d) < 0) {
            v("請輸入有效的數量");
            return;
          }
          x(!0), v(null);
          try {
            const S = await Ht(
              "/api/drugStotreDistribution/update_actqty_by_guid",
              { method: "POST", body: { ValueAry: [i.GUID, d] } }
            );
            if (S.Code === 200) u(!1), r(t, n, !0);
            else throw new Error(S.Result || "更新失敗");
          } catch (S) {
            v(S instanceof Error ? S.message : "系統錯誤，請稍後再試");
          } finally {
            x(!1);
          }
        }
      },
      Hf = async () => {
        const S = So();
        if (!S) {
          v("無法取得使用者資訊");
          return;
        }
        const j = Ne.filter(
          (ge) => ge.state === "等待過帳" && ge.actualIssuedQuantity
        );
        if (j.length === 0) {
          v("沒有可核撥的訂單");
          return;
        }
        const J = `確認要核撥以下項目嗎？

${Ta(j)}`;
        if (confirm(J)) {
          _e(!0), v(null);
          try {
            const se = new Date().toISOString(),
              re = {
                Data: j.map((ye) => ({
                  ...ye,
                  issuer: S.Name,
                  issuanceTime: se,
                  state: "已過帳",
                  LOT: ne(ye),
                  VAL: Dt(ye),
                  notice: "False",
                })),
              },
              R = await Ht("/api/drugStotreDistribution/update_by_guid", {
                method: "POST",
                body: re,
              });
            if (R.Code === 200) r(t, n, !0);
            else throw new Error(R.Result || "批次核撥失敗");
          } catch (ge) {
            v(ge instanceof Error ? ge.message : "系統錯誤，請稍後再試");
          } finally {
            _e(!1);
          }
        }
      },
      Wf = async (S) => {
        const j = So();
        if (!j) {
          v("無法取得使用者資訊");
          return;
        }
        const $ = St[S].orders.filter(
          (se) => se.state === "等待過帳" && se.actualIssuedQuantity
        );
        if ($.length === 0) {
          v("該藥品沒有可核撥的訂單");
          return;
        }
        const ge = `確認要核撥以下項目嗎？

${Ta($)}`;
        if (confirm(ge)) {
          ie(!0), v(null);
          try {
            const re = new Date().toISOString(),
              R = {
                Data: $.map((ar) => ({
                  ...ar,
                  issuer: j.Name,
                  issuanceTime: re,
                  state: "已過帳",
                  LOT: ne(ar),
                  VAL: Dt(ar),
                  notice: "False",
                })),
              },
              ye = await Ht("/api/drugStotreDistribution/update_by_guid", {
                method: "POST",
                body: R,
              });
            if (ye.Code === 200) r(t, n, !0);
            else throw new Error(ye.Result || "核撥失敗");
          } catch (se) {
            v(se instanceof Error ? se.message : "系統錯誤，請稍後再試");
          } finally {
            ie(!1);
          }
        }
      },
      Uf = async (S) => {
        const j = St[S].orders,
          $ = j.filter((re) => re.state === "等待過帳"),
          J = j,
          se = J.some((re) => !re.notice || re.notice !== "True");
        W((re) => ({ ...re, [S]: !0 })),
          A.current[S] && (clearTimeout(A.current[S]), delete A.current[S]);
        try {
          const re = If(),
            R = se ? re.color : "0,0,0",
            ye = se ? re.brightness.toString() : "0";
          Ht("/api/medmap/light_by_code_name_type", {
            method: "POST",
            body: {
              ValueAry: [
                "ServerName=DS01",
                "ServerType=藥庫",
                `code=${S}`,
                `color=${R}`,
                `lightness=${ye}`,
              ],
            },
          })
            .then((Ce) => {
              const an = Array.isArray(Ce) ? Ce : [Ce];
              if (an.some((ur) => ur.Code !== 200)) {
                const ur = an
                  .filter((Vo) => Vo.Code !== 200)
                  .map((Vo) => Vo.Result)
                  .filter(Boolean);
                console.log("Light API error:", ur.join(", "));
              } else
                console.log(
                  "Light API success:",
                  an.map((ur) => ur.Result).join(", ")
                );
            })
            .catch((Ce) => {
              console.log("Light API error:", Ce);
            }),
            se &&
              (A.current[S] = setTimeout(() => {
                Ht("/api/medmap/light_by_code_name_type", {
                  method: "POST",
                  body: {
                    ValueAry: [
                      "ServerName=DS01",
                      "ServerType=藥庫",
                      `code=${S}`,
                      "color=0,0,0",
                      "lightness=0",
                    ],
                  },
                })
                  .then((Ce) => {
                    console.log("Auto turn off light:", Ce);
                  })
                  .catch((Ce) => {
                    console.log("Auto turn off light error:", Ce);
                  }),
                  delete A.current[S];
              }, re.duration * 1e3));
          const ar = se ? $ : J,
            Vf = se ? "True" : "False",
            Yf = ar.map((Ce) =>
              Ht("/api/drugStotreDistribution/update_notice", {
                method: "POST",
                body: { ValueAry: [Ce.GUID, Vf] },
              })
            ),
            _a = await Promise.all(Yf);
          if (_a.some((Ce) => Ce.Code !== 200)) {
            const Ce = _a
              .filter((an) => an.Code !== 200)
              .map((an) => an.Result)
              .filter(Boolean);
            throw new Error(Ce.join(", ") || "更新通知狀態失敗");
          }
          r(t, n, !0);
        } catch (re) {
          console.error("Notification toggle error:", re),
            v(
              re instanceof Error ? re.message : "更新通知狀態失敗，請稍後再試"
            );
        } finally {
          W((re) => ({ ...re, [S]: !1 }));
        }
      },
      Bf = (S) => {
        S.state === "等待過帳" &&
          (s(S),
          p(S.actualIssuedQuantity || S.issuedQuantity),
          v(null),
          u(!0),
          F(!0));
      },
      cl = (S) => {
        L
          ? (p(S), F(!1))
          : k
          ? (p(S), P(!1))
          : N && !f
          ? (m(d), p(S))
          : p(d === "0" ? S : d + S);
      },
      dl = (S) => {
        F(!1), f && Oa(), h(S), P(!1);
      },
      Oa = () => {
        if (!f || !N) return;
        const S = parseFloat(f),
          j = parseFloat(d);
        let $ = 0;
        switch (N) {
          case "+":
            $ = S + j;
            break;
          case "-":
            $ = S - j;
            break;
          case "×":
            $ = S * j;
            break;
          case "÷":
            if (j === 0) {
              v("不能除以零");
              return;
            }
            $ = S / j;
            break;
        }
        p(Math.round($).toString()), m(null), h(null), P(!0), F(!1);
      },
      Qf = () => {
        p("0"), m(null), h(null), P(!1), F(!0);
      };
    return c.jsxs("div", {
      className: "space-y-6 px-4 md:px-6 lg:px-8",
      children: [
        c.jsxs("div", {
          className: "space-y-6",
          children: [
            c.jsx(Fy, { startDate: t, endDate: n, onDateChange: r }),
            c.jsxs("div", {
              className:
                "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6",
              children: [
                c.jsxs("div", {
                  className: "flex flex-col lg:flex-row lg:items-end gap-6",
                  children: [
                    c.jsx(Ry, { value: C, onChange: ul }),
                    c.jsxs("form", {
                      onSubmit: Qo,
                      className: "flex flex-col sm:flex-row gap-2",
                      children: [
                        c.jsx("select", {
                          value: Ze,
                          onChange: (S) => et(S.target.value),
                          className:
                            "w-full sm:w-32 px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                          children: xt.map((S) =>
                            c.jsx(
                              "option",
                              { value: S.value, children: S.label },
                              S.value
                            )
                          ),
                        }),
                        c.jsxs("div", {
                          className: "relative",
                          children: [
                            c.jsx("input", {
                              type: "text",
                              value: tt,
                              onChange: (S) => Fe(S.target.value),
                              onKeyDown: K,
                              placeholder: o("search.placeholder"),
                              className:
                                "w-full sm:w-64 pl-10 pr-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                            }),
                            c.jsx(D0, {
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
                  className: "flex justify-extends gap-3",
                  children: [
                    c.jsx(Hy, { onClick: rt, isLoading: T, disabled: l }),
                    C !== "已過帳" &&
                      c.jsx("button", {
                        onClick: Hf,
                        disabled: Ee || l,
                        className:
                          "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
                        children: o(
                          Ee ? "button.processing" : "button.bulkApprove"
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
              c.jsx(xs, { size: 20 }),
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
                  children: o("app.orders.loading"),
                }),
              ],
            })
          : Object.keys(St).length === 0
          ? c.jsx("div", {
              className: "text-center py-8 text-base text-gray-500",
              children: o("app.orders.empty"),
            })
          : c.jsx("div", {
              className: "space-y-8",
              children: Object.entries(St).map(([S, j]) => {
                const $ = j.orders.some(
                    (R) => R.state === "等待過帳" && R.actualIssuedQuantity
                  ),
                  ge = j.orders.some((R) => !R.notice || R.notice !== "True"),
                  se = o(ge ? "button.notify" : "button.cancelNotify"),
                  re = ge
                    ? "bg-green-600 text-white hover:bg-green-700 focus:ring-2 focus:ring-green-500"
                    : "bg-orange-500 text-white hover:bg-orange-600 focus:ring-2 focus:ring-orange-500";
                return c.jsxs(
                  "div",
                  {
                    className:
                      "w-full rounded-lg border border-gray-200 px-4 py-3 md:p-3 bg-gray-50",
                    children: [
                      c.jsxs("div", {
                        className:
                          "flex lg:justify-between lg:items-center gap-2 mb-2",
                        children: [
                          c.jsxs("div", {
                            className: "flex-1",
                            children: [
                              c.jsx("div", {
                                className:
                                  "text-xl md:text-2xl font-semibold break-words",
                                children: j.drugName,
                              }),
                              c.jsx("div", {
                                className: "text-base text-gray-900 break-all",
                                children: j.drugCode,
                              }),
                            ],
                          }),
                          c.jsxs("div", {
                            className:
                              "flex items-start lg:items-end gap-3 lg:flex-shrink-0",
                            children: [
                              c.jsx("button", {
                                onClick: (R) => {
                                  R.stopPropagation(), Uf(S);
                                },
                                disabled: b[S],
                                className: `px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 ${re} focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed`,
                                children: se,
                              }),
                              c.jsx("button", {
                                onClick: (R) => {
                                  R.stopPropagation(), Wf(S);
                                },
                                disabled: D || !$,
                                className: `px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center ${
                                  $
                                    ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                } disabled:opacity-50 disabled:cursor-not-allowed`,
                                children: o(
                                  D ? "button.processing" : "button.approve"
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      c.jsx("div", {
                        className: "space-y-2",
                        children: j.orders.map((R) => {
                          const ye = R.state === "等待過帳";
                          return c.jsx(
                            "div",
                            {
                              className: `py-2 px-4 rounded-lg ${
                                ye
                                  ? "bg-yellow-50 border border-yellow-200"
                                  : "bg-gray-200 border border-gray-300"
                              }`,
                              children: c.jsx("div", {
                                className:
                                  "flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4",
                                children: c.jsxs("div", {
                                  className: "flex-1 space-y-2 lg:space-y-1",
                                  children: [
                                    c.jsxs("div", {
                                      className:
                                        "grid grid-cols-2 sm:grid-cols-2 gap-3 lg:gap-x-16",
                                      children: [
                                        c.jsx("div", {
                                          className: "text-base text-gray-900",
                                          children: c.jsxs("div", {
                                            className: "flex sm:flex-row",
                                            children: [
                                              c.jsxs("span", {
                                                className:
                                                  "font-medium text-gray-700 min-w-[80px] sm:min-w-[100px]",
                                                children: [
                                                  o("table.source"),
                                                  ":",
                                                ],
                                              }),
                                              c.jsx("span", {
                                                className:
                                                  "break-words text-gray-900",
                                                children: R.sourceStoreType,
                                              }),
                                            ],
                                          }),
                                        }),
                                        c.jsx("div", {
                                          className: "text-base text-gray-900",
                                          children: c.jsxs("div", {
                                            className: "flex sm:flex-row",
                                            children: [
                                              c.jsxs("span", {
                                                className:
                                                  "font-medium text-gray-700 min-w-[80px] sm:min-w-[100px]",
                                                children: [
                                                  o("table.destination"),
                                                  ":",
                                                ],
                                              }),
                                              c.jsx("span", {
                                                className:
                                                  "break-words text-gray-900",
                                                children:
                                                  R.destinationStoreType,
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    c.jsxs("div", {
                                      className:
                                        "grid grid-cols-2 sm:grid-cols-2 gap-3 lg:gap-x-16",
                                      children: [
                                        c.jsx("div", {
                                          className: "text-base text-gray-900",
                                          children: c.jsxs("div", {
                                            className: "flex sm:flex-row",
                                            children: [
                                              c.jsxs("span", {
                                                className:
                                                  "font-medium text-gray-700 min-w-[80px] sm:min-w-[100px]",
                                                children: [
                                                  o("table.creator"),
                                                  ":",
                                                ],
                                              }),
                                              c.jsx("span", {
                                                className:
                                                  "break-words text-gray-900",
                                                children: R.reportName,
                                              }),
                                            ],
                                          }),
                                        }),
                                        c.jsx("div", {
                                          className: "text-base text-gray-900",
                                          children: c.jsxs("div", {
                                            className: "flex sm:flex-row",
                                            children: [
                                              c.jsxs("span", {
                                                className:
                                                  "font-medium text-gray-700 min-w-[80px] sm:min-w-[100px]",
                                                children: [
                                                  o("table.issuer"),
                                                  ":",
                                                ],
                                              }),
                                              c.jsx("span", {
                                                className:
                                                  "break-words text-gray-900",
                                                children: R.issuer || "-",
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    c.jsxs("div", {
                                      className:
                                        "grid grid-cols-2 sm:grid-cols-2 gap-3 lg:gap-x-16",
                                      children: [
                                        c.jsx("div", {
                                          className: "text-base text-gray-900",
                                          children: c.jsxs("div", {
                                            className: "flex sm:flex-row",
                                            children: [
                                              c.jsxs("span", {
                                                className:
                                                  "font-medium text-gray-700 min-w-[80px] sm:min-w-[100px]",
                                                children: [
                                                  o("table.batchNumber"),
                                                  ":",
                                                ],
                                              }),
                                              c.jsx("span", {
                                                className:
                                                  "break-words text-gray-900",
                                                children: ne(R),
                                              }),
                                            ],
                                          }),
                                        }),
                                        c.jsx("div", {
                                          className: "text-base text-gray-900",
                                          children: c.jsxs("div", {
                                            className: "flex sm:flex-row",
                                            children: [
                                              c.jsxs("span", {
                                                className:
                                                  "font-medium text-gray-700 min-w-[80px] sm:min-w-[100px]",
                                                children: [
                                                  o("table.expiryDate"),
                                                  ":",
                                                ],
                                              }),
                                              c.jsx("span", {
                                                className:
                                                  "break-words text-gray-900",
                                                children: Dt(R),
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    c.jsxs("div", {
                                      className:
                                        "grid grid-cols-2 sm:grid-cols-2 gap-3 lg:gap-x-16",
                                      children: [
                                        c.jsx("div", {
                                          className: "text-base text-gray-900",
                                          children: c.jsxs("div", {
                                            className:
                                              "flex flex-col sm:flex-row",
                                            children: [
                                              c.jsxs("span", {
                                                className:
                                                  "font-medium text-gray-700 min-w-[80px] sm:min-w-[100px]",
                                                children: [
                                                  o("table.createTime"),
                                                  ":",
                                                ],
                                              }),
                                              c.jsx("span", {
                                                className:
                                                  "break-words text-gray-900",
                                                children: nt(R),
                                              }),
                                            ],
                                          }),
                                        }),
                                        c.jsx("div", {
                                          className: `text-base text-gray-900 ${
                                            ye ? "hidden" : ""
                                          }`,
                                          children: c.jsxs("div", {
                                            className:
                                              "flex flex-col sm:flex-row",
                                            children: [
                                              c.jsxs("span", {
                                                className:
                                                  "font-medium text-gray-700 min-w-[80px] sm:min-w-[100px]",
                                                children: [
                                                  o("table.issueTime"),
                                                  ":",
                                                ],
                                              }),
                                              c.jsx("span", {
                                                className:
                                                  "break-words text-gray-900",
                                                children: $t(R),
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    c.jsxs("div", {
                                      className: `grid grid-cols-2 sm:grid-cols-2 gap-3 lg:gap-x-16 ${
                                        ye ? "hidden" : ""
                                      }`,
                                      children: [
                                        c.jsx("div", {
                                          className: "text-base text-gray-900",
                                          children: c.jsxs("div", {
                                            className: "flex sm:flex-row",
                                            children: [
                                              c.jsxs("span", {
                                                className:
                                                  "font-medium text-gray-700 min-w-[80px] sm:min-w-[100px]",
                                                children: [
                                                  o("table.getTime"),
                                                  ":",
                                                ],
                                              }),
                                              c.jsx("span", {
                                                className:
                                                  "break-words text-gray-900",
                                                children: Bo(R),
                                              }),
                                            ],
                                          }),
                                        }),
                                        c.jsx("div", {
                                          className: "text-base text-gray-900",
                                          children: c.jsxs("div", {
                                            className:
                                              "flex flex-col sm:flex-row",
                                            children: [
                                              c.jsxs("span", {
                                                className:
                                                  "font-medium text-gray-700 min-w-[80px] sm:min-w-[100px]",
                                                children: [
                                                  o("table.getStaff"),
                                                  ":",
                                                ],
                                              }),
                                              c.jsx("span", {
                                                className:
                                                  "break-words text-gray-900",
                                                children: R.signedPerson || "-",
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    c.jsx("div", {
                                      className:
                                        "grid grid-cols-1 sm:grid-cols-1 gap-3 lg:gap-x-16",
                                      children: c.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: c.jsxs("div", {
                                          className:
                                            "flex flex-col sm:flex-row justify-between items-end",
                                          children: [
                                            R.state === "等待過帳" &&
                                            !R.actualIssuedQuantity
                                              ? c.jsx("span", {
                                                  className:
                                                    "mb-1 sm:mb-0 whitespace-nowrap text-lg flex-1 lg:text-xl font-bold text-gray-400",
                                                  children:
                                                    o("card.needsQuantity"),
                                                })
                                              : c.jsx("span", {
                                                  className:
                                                    "mb-1 sm:mb-0 sm:text-left text-lg flex-1 lg:text-xl font-semibold text-gray-400",
                                                }),
                                            c.jsxs("div", {
                                              className: "flex gap-4",
                                              children: [
                                                R.state === "等待過帳" &&
                                                  c.jsx(
                                                    "span",
                                                    {
                                                      className: `px-3 py-1.5 rounded-full text-base font-medium ${
                                                        R.state === "等待過帳"
                                                          ? "bg-yellow-100 text-yellow-800 border border-yellow-200"
                                                          : R.state === "已過帳"
                                                          ? "bg-green-100 text-green-800 border border-green-200"
                                                          : "bg-gray-100 text-gray-800 border border-gray-200"
                                                      }`,
                                                      children:
                                                        R.state === "等待過帳"
                                                          ? o("status.pending")
                                                          : R.state === "已過帳"
                                                          ? o(
                                                              "status.completed"
                                                            )
                                                          : R.state,
                                                    },
                                                    R.state
                                                  ),
                                                c.jsxs("button", {
                                                  className: ye
                                                    ? "w-[240px] text-lg px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-200 flex justify-between items-center"
                                                    : "",
                                                  onClick: () => ye && Bf(R),
                                                  style: {
                                                    cursor: ye
                                                      ? "pointer"
                                                      : "default",
                                                  },
                                                  children: [
                                                    ye ? o("table.re") : "",
                                                    c.jsxs("span", {
                                                      className:
                                                        "ml-2 text-xl font-bold",
                                                      children: [
                                                        R.actualIssuedQuantity ||
                                                          "-",
                                                        " / ",
                                                        R.issuedQuantity,
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
                                }),
                              }),
                            },
                            R.GUID
                          );
                        }),
                      }),
                    ],
                  },
                  S
                );
              }),
            }),
        c.jsx(ji, {
          appear: !0,
          show: a,
          as: y.Fragment,
          children: c.jsxs(Ni, {
            as: "div",
            className: "relative z-50",
            onClose: () => !w && u(!1),
            children: [
              c.jsx(ji.Child, {
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
                  children: c.jsx(ji.Child, {
                    as: y.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: c.jsxs(Ni.Panel, {
                      className:
                        "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                      children: [
                        c.jsx(Ni.Title, {
                          as: "h3",
                          className: "text-xl font-bold text-gray-900 mb-6",
                          children: o("modal.actualQuantity"),
                        }),
                        i &&
                          c.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              c.jsxs("div", {
                                children: [
                                  c.jsx("label", {
                                    className:
                                      "block text-base font-medium text-gray-700",
                                    children: o("modal.drugName"),
                                  }),
                                  c.jsx("div", {
                                    className: "mt-1",
                                    children: c.jsx("div", {
                                      className:
                                        "text-base text-gray-900 break-words",
                                      children: i.name,
                                    }),
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                children: [
                                  c.jsx("label", {
                                    className:
                                      "block text-base font-medium text-gray-700",
                                    children: o("modal.drugCode"),
                                  }),
                                  c.jsx("div", {
                                    className: "mt-1",
                                    children: c.jsx("div", {
                                      className:
                                        "text-base font-mono text-gray-900 break-all",
                                      children: i.code,
                                    }),
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                children: [
                                  c.jsx("label", {
                                    className:
                                      "block text-base font-medium text-gray-700",
                                    children: o("modal.issuedQuantity"),
                                  }),
                                  c.jsx("div", {
                                    className: "mt-1",
                                    children: c.jsx("div", {
                                      className: "text-base text-gray-900",
                                      children: i.issuedQuantity,
                                    }),
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                children: [
                                  c.jsx("label", {
                                    className:
                                      "block text-base font-medium text-gray-700",
                                    children: o("modal.actualIssuedQuantity"),
                                  }),
                                  c.jsx("input", {
                                    type: "text",
                                    value: d,
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
                                          S === "÷" ? dl(S) : cl(S),
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
                                          S === "×" ? dl(S) : cl(S),
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
                                          S === "-" ? dl(S) : cl(S),
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
                                            ? Oa()
                                            : S === "+"
                                            ? dl(S)
                                            : cl(S);
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
                              g &&
                                c.jsxs("div", {
                                  className:
                                    "p-4 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
                                  children: [
                                    c.jsx(xs, { size: 20 }),
                                    c.jsx("span", {
                                      className: "text-base",
                                      children: g,
                                    }),
                                  ],
                                }),
                              c.jsxs("div", {
                                className:
                                  "mt-6 flex flex-col sm:flex-row justify-end gap-3",
                                children: [
                                  c.jsx("button", {
                                    type: "button",
                                    onClick: Qf,
                                    disabled: w,
                                    className:
                                      "w-full sm:w-auto inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: o("button.clear"),
                                  }),
                                  c.jsx("button", {
                                    type: "button",
                                    onClick: () => !w && u(!1),
                                    disabled: w,
                                    className:
                                      "w-full sm:w-auto inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: o("button.cancel"),
                                  }),
                                  c.jsx("button", {
                                    type: "button",
                                    onClick: Af,
                                    disabled: w,
                                    className:
                                      "w-full sm:w-auto inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: o(
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
  Vy = ({
    onLogin: e,
    className: t = "",
    title: n = "撥補核撥系統",
    logo: r,
  }) => {
    const [l, o] = y.useState(""),
      [i, s] = y.useState(""),
      [a, u] = y.useState(null),
      [d, p] = y.useState(!1),
      g = async (v) => {
        v.preventDefault(), u(null), p(!0);
        try {
          const w = await Ht("/api/session/login", {
            method: "POST",
            body: { Data: { ID: l, Password: i } },
          });
          if (w.Code === 200) {
            if (!zy(w.Data)) {
              u("無撥補建單權限，無法登入");
              return;
            }
            e();
          } else u(w.Result || "登入失敗，請檢查帳號密碼是否正確");
        } catch (w) {
          console.error("Login error:", w),
            u(w instanceof Error ? w.message : "系統錯誤，請稍後再試");
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
                c.jsx(xs, { size: 20 }),
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
                    value: l,
                    onChange: (v) => o(v.target.value),
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
  Yy = () => {
    const { language: e, toggleLanguage: t } = wt();
    return c.jsxs("button", {
      onClick: t,
      className:
        "inline-flex items-center px-2 sm:px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      title: e === "zh" ? "繁體中文" : "English",
      children: [
        c.jsx(L0, { className: "h-4 w-4" }),
        c.jsx("span", {
          className: "ml-2 hidden sm:inline",
          children: e === "zh" ? "繁體中文" : "English",
        }),
      ],
    });
  },
  Gy = ({ title: e }) =>
    c.jsx("h1", {
      className: "text-2xl md:text-3xl font-semibold text-gray-800",
      children: e,
    }),
  Ky = () => {
    const e = So();
    return e
      ? c.jsxs("p", {
          className: "text-sm text-gray-600",
          children: [e.Name, " - ", e.Employer],
        })
      : null;
  },
  Xy = ({ onLogout: e }) => {
    const { t } = wt();
    return c.jsxs("button", {
      onClick: e,
      className:
        "inline-flex items-center px-2 sm:px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      title: t("button.logout"),
      children: [
        c.jsx(b0, { className: "h-4 w-4" }),
        c.jsx("span", {
          className: "ml-2 hidden sm:inline",
          children: t("button.logout"),
        }),
      ],
    });
  },
  qy = () => {
    const { t: e } = wt(),
      t = () => {
        const n = by();
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
        c.jsx(M0, { size: 24 }),
        c.jsx("span", {
          className:
            "absolute left-1/2 -translate-x-1/2 -bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
          children: e("platform.title"),
        }),
      ],
    });
  },
  Jy = ({ isOpen: e, onClose: t, settings: n, onSave: r }) => {
    const [l, o] = y.useState(n.duration),
      [i, s] = y.useState(n.brightness),
      [a, u] = y.useState(n.color);
    if (!e) return null;
    const d = () => {
      r({ duration: l, brightness: i, color: a }), t();
    };
    return c.jsx("div", {
      className:
        "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
      children: c.jsxs("div", {
        className: "bg-white rounded-lg shadow-xl max-w-md w-full",
        children: [
          c.jsxs("div", {
            className: "flex items-center justify-between p-6 border-b",
            children: [
              c.jsx("h2", {
                className: "text-xl font-semibold text-gray-900",
                children: "亮燈設定",
              }),
              c.jsx("button", {
                onClick: t,
                className:
                  "text-gray-400 hover:text-gray-600 transition-colors",
                children: c.jsx(F0, { className: "w-5 h-5" }),
              }),
            ],
          }),
          c.jsxs("div", {
            className: "p-6 space-y-6",
            children: [
              c.jsxs("div", {
                children: [
                  c.jsxs("label", {
                    className: "block text-sm font-medium text-gray-700 mb-2",
                    children: ["亮燈時間: ", By(l)],
                  }),
                  c.jsx("input", {
                    type: "range",
                    min: "5",
                    max: "180",
                    step: "5",
                    value: l,
                    onChange: (p) => o(Number(p.target.value)),
                    className:
                      "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600",
                  }),
                  c.jsxs("div", {
                    className:
                      "flex justify-between text-xs text-gray-500 mt-1",
                    children: [
                      c.jsx("span", { children: "5秒" }),
                      c.jsx("span", { children: "3分鐘" }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                children: [
                  c.jsxs("label", {
                    className: "block text-sm font-medium text-gray-700 mb-2",
                    children: ["亮度: ", (i * 100).toFixed(0), "%"],
                  }),
                  c.jsx("input", {
                    type: "range",
                    min: "0",
                    max: "0.9",
                    step: "0.1",
                    value: i,
                    onChange: (p) => s(Number(p.target.value)),
                    className:
                      "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600",
                  }),
                  c.jsxs("div", {
                    className:
                      "flex justify-between text-xs text-gray-500 mt-1",
                    children: [
                      c.jsx("span", { children: "0%" }),
                      c.jsx("span", { children: "90%" }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                children: [
                  c.jsx("label", {
                    className: "block text-sm font-medium text-gray-700 mb-3",
                    children: "顏色",
                  }),
                  c.jsx("div", {
                    className: "grid grid-cols-2 gap-3",
                    children: Wy.map((p) =>
                      c.jsxs(
                        "button",
                        {
                          onClick: () => u(p.value),
                          className: `
                    flex items-center justify-between p-3 rounded-lg border-2 transition-all
                    ${
                      a === p.value
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }
                  `,
                          children: [
                            c.jsx("span", {
                              className: "text-sm font-medium text-gray-700",
                              children: p.label,
                            }),
                            c.jsx("div", {
                              className:
                                "w-6 h-6 rounded-full border border-gray-300",
                              style: { backgroundColor: `rgb(${p.value})` },
                            }),
                          ],
                        },
                        p.name
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
          c.jsxs("div", {
            className: "flex gap-3 p-6 border-t bg-gray-50 rounded-b-lg",
            children: [
              c.jsx("button", {
                onClick: t,
                className:
                  "flex-1 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",
                children: "取消",
              }),
              c.jsx("button", {
                onClick: d,
                className:
                  "flex-1 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors",
                children: "儲存",
              }),
            ],
          }),
        ],
      }),
    });
  },
  Zy = () => {
    const [e, t] = y.useState(!1),
      [n, r] = y.useState(If()),
      l = (o) => {
        Uy(o), r(o);
      };
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx("button", {
          onClick: () => t(!0),
          className:
            "p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors",
          title: "亮燈設定",
          children: c.jsx($0, { className: "w-5 h-5" }),
        }),
        c.jsx(Jy, { isOpen: e, onClose: () => t(!1), settings: n, onSave: l }),
      ],
    });
  },
  ev = ({ onLogout: e }) => {
    const { t } = wt();
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
                c.jsx(qy, {}),
                c.jsxs("div", {
                  className: "flex flex-col",
                  children: [
                    c.jsx(Gy, { title: t("app.title") }),
                    c.jsx(Ky, {}),
                  ],
                }),
              ],
            }),
            c.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                c.jsx(Zy, {}),
                c.jsx(Yy, {}),
                c.jsx(Xy, { onLogout: e }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  tv = ({ className: e = "" }) => {
    const { t } = wt();
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
function nv() {
  wt();
  const [e, t] = y.useState(!1),
    [n, r] = y.useState(!0),
    [l, o] = y.useState(null),
    [i, s] = y.useState(!1),
    [a, u] = y.useState([]),
    [d, p] = y.useState(() => {
      const m = new Date();
      return m.setHours(0, 0, 0, 0), m;
    }),
    [g, v] = y.useState(() => {
      const m = new Date();
      return m.setHours(23, 59, 59, 999), m;
    }),
    [w, x] = y.useState(!1);
  y.useEffect(() => {
    (async () => {
      try {
        await My(), s(!0);
        const k = Iy();
        t(k);
      } catch (k) {
        console.error("Error during initialization:", k),
          o("系統初始化失敗，請重新整理頁面");
      } finally {
        r(!1);
      }
    })();
  }, []),
    y.useEffect(() => {
      e && i && N();
    }, [e, i]);
  const N = async (m, k, P = !1) => {
      const C = m || d,
        O = k || g,
        L = P ? window.scrollY : 0;
      x(!0);
      try {
        const F = await Ht("/api/drugStotreDistribution/get_by_addedTime", {
          method: "POST",
          body: {
            ValueAry: [
              Q(C, "yyyy-MM-dd HH:mm:ss"),
              Q(O, "yyyy-MM-dd HH:mm:ss"),
            ],
          },
        });
        u(F.Data),
          o(null),
          P &&
            setTimeout(() => {
              window.scrollTo(0, L);
            }, 0);
      } catch (F) {
        console.error("Error fetching orders:", F),
          o("無法取得撥補單資料，請稍後再試"),
          u([]);
      } finally {
        x(!1);
      }
    },
    h = (m, k, P = !1) => {
      p(m), v(k), N(m, k, P);
    },
    f = () => {
      ko(), t(!1);
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
        className: "min-h-screen flex flex-col pr-1",
        children: [
          c.jsx(ev, { onLogout: f }),
          c.jsx("main", {
            className: "flex-grow flex flex-col bg-white pb-24",
            children: c.jsx("div", {
              className: "w-full max-w-screen-xl mx-auto",
              children: c.jsx(Qy, {
                orders: a,
                startDate: d,
                endDate: g,
                onDateChange: h,
                isLoading: w,
              }),
            }),
          }),
          c.jsx(tv, {}),
        ],
      })
    : c.jsx(Vy, { onLogin: () => t(!0) });
}
cf(document.getElementById("root")).render(
  c.jsx(y.StrictMode, { children: c.jsx($y, { children: c.jsx(nv, {}) }) })
);
