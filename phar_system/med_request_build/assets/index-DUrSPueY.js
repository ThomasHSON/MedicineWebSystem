function Ff(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const s = Object.getOwnPropertyDescriptor(r, l);
          s &&
            Object.defineProperty(
              e,
              l,
              s.get ? s : { enumerable: !0, get: () => r[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
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
function $f(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var qu = { exports: {} },
  xs = {},
  Bu = { exports: {} },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var el = Symbol.for("react.element"),
  Rf = Symbol.for("react.portal"),
  zf = Symbol.for("react.fragment"),
  If = Symbol.for("react.strict_mode"),
  Af = Symbol.for("react.profiler"),
  Uf = Symbol.for("react.provider"),
  Hf = Symbol.for("react.context"),
  Wf = Symbol.for("react.forward_ref"),
  qf = Symbol.for("react.suspense"),
  Bf = Symbol.for("react.memo"),
  Vf = Symbol.for("react.lazy"),
  Sa = Symbol.iterator;
function Qf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Sa && e[Sa]) || e["@@iterator"]),
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
  Qu = Object.assign,
  Yu = {};
function rr(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Yu),
    (this.updater = n || Vu));
}
rr.prototype.isReactComponent = {};
rr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
rr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Gu() {}
Gu.prototype = rr.prototype;
function So(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Yu),
    (this.updater = n || Vu));
}
var ko = (So.prototype = new Gu());
ko.constructor = So;
Qu(ko, rr.prototype);
ko.isPureReactComponent = !0;
var ka = Array.isArray,
  Ku = Object.prototype.hasOwnProperty,
  jo = { current: null },
  Xu = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ju(e, t, n) {
  var r,
    l = {},
    s = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Ku.call(t, r) && !Xu.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), c = 0; c < a; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: el,
    type: e,
    key: s,
    ref: i,
    props: l,
    _owner: jo.current,
  };
}
function Yf(e, t) {
  return {
    $$typeof: el,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function bo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === el;
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
var ja = /\/+/g;
function Hs(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Gf("" + e.key)
    : t.toString(36);
}
function Pl(e, t, n, r, l) {
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
          case el:
          case Rf:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Hs(i, 0) : r),
      ka(l)
        ? ((n = ""),
          e != null && (n = e.replace(ja, "$&/") + "/"),
          Pl(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (bo(l) &&
            (l = Yf(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(ja, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), ka(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var u = r + Hs(s, a);
      i += Pl(s, t, n, u, l);
    }
  else if (((u = Qf(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(s = e.next()).done; )
      ((s = s.value), (u = r + Hs(s, a++)), (i += Pl(s, t, n, u, l)));
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
function ul(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Pl(e, r, "", "", function (s) {
      return t.call(n, s, l++);
    }),
    r
  );
}
function Kf(e) {
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
var _e = { current: null },
  Tl = { transition: null },
  Xf = {
    ReactCurrentDispatcher: _e,
    ReactCurrentBatchConfig: Tl,
    ReactCurrentOwner: jo,
  };
function Zu() {
  throw Error("act(...) is not supported in production builds of React.");
}
B.Children = {
  map: ul,
  forEach: function (e, t, n) {
    ul(
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
      ul(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ul(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!bo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
B.Component = rr;
B.Fragment = zf;
B.Profiler = Af;
B.PureComponent = So;
B.StrictMode = If;
B.Suspense = qf;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xf;
B.act = Zu;
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Qu({}, e.props),
    l = e.key,
    s = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (i = jo.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      Ku.call(t, u) &&
        !Xu.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var c = 0; c < u; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: el, type: e.type, key: l, ref: s, props: r, _owner: i };
};
B.createContext = function (e) {
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
B.createElement = Ju;
B.createFactory = function (e) {
  var t = Ju.bind(null, e);
  return ((t.type = e), t);
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (e) {
  return { $$typeof: Wf, render: e };
};
B.isValidElement = bo;
B.lazy = function (e) {
  return { $$typeof: Vf, _payload: { _status: -1, _result: e }, _init: Kf };
};
B.memo = function (e, t) {
  return { $$typeof: Bf, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
  var t = Tl.transition;
  Tl.transition = {};
  try {
    e();
  } finally {
    Tl.transition = t;
  }
};
B.unstable_act = Zu;
B.useCallback = function (e, t) {
  return _e.current.useCallback(e, t);
};
B.useContext = function (e) {
  return _e.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return _e.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return _e.current.useEffect(e, t);
};
B.useId = function () {
  return _e.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return _e.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return _e.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return _e.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return _e.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return _e.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return _e.current.useRef(e);
};
B.useState = function (e) {
  return _e.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return _e.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return _e.current.useTransition();
};
B.version = "18.3.1";
Bu.exports = B;
var p = Bu.exports;
const A = $f(p),
  Lr = Ff({ __proto__: null, default: A }, [p]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jf = p,
  Zf = Symbol.for("react.element"),
  ep = Symbol.for("react.fragment"),
  tp = Object.prototype.hasOwnProperty,
  np = Jf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  rp = { key: !0, ref: !0, __self: !0, __source: !0 };
function ec(e, t, n) {
  var r,
    l = {},
    s = null,
    i = null;
  (n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (i = t.ref));
  for (r in t) tp.call(t, r) && !rp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Zf,
    type: e,
    key: s,
    ref: i,
    props: l,
    _owner: np.current,
  };
}
xs.Fragment = ep;
xs.jsx = ec;
xs.jsxs = ec;
qu.exports = xs;
var o = qu.exports,
  tc = { exports: {} },
  Ve = {},
  nc = { exports: {} },
  rc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, F) {
    var R = O.length;
    O.push(F);
    e: for (; 0 < R; ) {
      var U = (R - 1) >>> 1,
        W = O[U];
      if (0 < l(W, F)) ((O[U] = F), (O[R] = W), (R = U));
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var F = O[0],
      R = O.pop();
    if (R !== F) {
      O[0] = R;
      e: for (var U = 0, W = O.length, we = W >>> 1; U < we; ) {
        var J = 2 * (U + 1) - 1,
          Ge = O[J],
          b = J + 1,
          q = O[b];
        if (0 > l(Ge, R))
          b < W && 0 > l(q, Ge)
            ? ((O[U] = q), (O[b] = R), (U = b))
            : ((O[U] = Ge), (O[J] = R), (U = J));
        else if (b < W && 0 > l(q, R)) ((O[U] = q), (O[b] = R), (U = b));
        else break e;
      }
    }
    return F;
  }
  function l(O, F) {
    var R = O.sortIndex - F.sortIndex;
    return R !== 0 ? R : O.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var u = [],
    c = [],
    m = 1,
    f = null,
    y = 3,
    v = !1,
    N = !1,
    w = !1,
    j = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(O) {
    for (var F = n(c); F !== null; ) {
      if (F.callback === null) r(c);
      else if (F.startTime <= O)
        (r(c), (F.sortIndex = F.expirationTime), t(u, F));
      else break;
      F = n(c);
    }
  }
  function S(O) {
    if (((w = !1), h(O), !N))
      if (n(u) !== null) ((N = !0), ye(x));
      else {
        var F = n(c);
        F !== null && G(S, F.startTime - O);
      }
  }
  function x(O, F) {
    ((N = !1), w && ((w = !1), g(D), (D = -1)), (v = !0));
    var R = y;
    try {
      for (
        h(F), f = n(u);
        f !== null && (!(f.expirationTime > F) || (O && !Z()));
      ) {
        var U = f.callback;
        if (typeof U == "function") {
          ((f.callback = null), (y = f.priorityLevel));
          var W = U(f.expirationTime <= F);
          ((F = e.unstable_now()),
            typeof W == "function" ? (f.callback = W) : f === n(u) && r(u),
            h(F));
        } else r(u);
        f = n(u);
      }
      if (f !== null) var we = !0;
      else {
        var J = n(c);
        (J !== null && G(S, J.startTime - F), (we = !1));
      }
      return we;
    } finally {
      ((f = null), (y = R), (v = !1));
    }
  }
  var k = !1,
    C = null,
    D = -1,
    z = 5,
    $ = -1;
  function Z() {
    return !(e.unstable_now() - $ < z);
  }
  function H() {
    if (C !== null) {
      var O = e.unstable_now();
      $ = O;
      var F = !0;
      try {
        F = C(!0, O);
      } finally {
        F ? ee() : ((k = !1), (C = null));
      }
    } else k = !1;
  }
  var ee;
  if (typeof d == "function")
    ee = function () {
      d(H);
    };
  else if (typeof MessageChannel < "u") {
    var le = new MessageChannel(),
      oe = le.port2;
    ((le.port1.onmessage = H),
      (ee = function () {
        oe.postMessage(null);
      }));
  } else
    ee = function () {
      j(H, 0);
    };
  function ye(O) {
    ((C = O), k || ((k = !0), ee()));
  }
  function G(O, F) {
    D = j(function () {
      O(e.unstable_now());
    }, F);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      N || v || ((N = !0), ye(x));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (z = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return y;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (O) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = y;
      }
      var R = y;
      y = F;
      try {
        return O();
      } finally {
        y = R;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, F) {
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
      var R = y;
      y = O;
      try {
        return F();
      } finally {
        y = R;
      }
    }),
    (e.unstable_scheduleCallback = function (O, F, R) {
      var U = e.unstable_now();
      switch (
        (typeof R == "object" && R !== null
          ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? U + R : U))
          : (R = U),
        O)
      ) {
        case 1:
          var W = -1;
          break;
        case 2:
          W = 250;
          break;
        case 5:
          W = 1073741823;
          break;
        case 4:
          W = 1e4;
          break;
        default:
          W = 5e3;
      }
      return (
        (W = R + W),
        (O = {
          id: m++,
          callback: F,
          priorityLevel: O,
          startTime: R,
          expirationTime: W,
          sortIndex: -1,
        }),
        R > U
          ? ((O.sortIndex = R),
            t(c, O),
            n(u) === null &&
              O === n(c) &&
              (w ? (g(D), (D = -1)) : (w = !0), G(S, R - U)))
          : ((O.sortIndex = W), t(u, O), N || v || ((N = !0), ye(x))),
        O
      );
    }),
    (e.unstable_shouldYield = Z),
    (e.unstable_wrapCallback = function (O) {
      var F = y;
      return function () {
        var R = y;
        y = F;
        try {
          return O.apply(this, arguments);
        } finally {
          y = R;
        }
      };
    }));
})(rc);
nc.exports = rc;
var lp = nc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sp = p,
  Be = lp;
function T(e) {
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
var lc = new Set(),
  Fr = {};
function En(e, t) {
  (Kn(e, t), Kn(e + "Capture", t));
}
function Kn(e, t) {
  for (Fr[e] = t, e = 0; e < t.length; e++) lc.add(t[e]);
}
var Mt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ni = Object.prototype.hasOwnProperty,
  ip =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ba = {},
  Ea = {};
function op(e) {
  return Ni.call(Ea, e)
    ? !0
    : Ni.call(ba, e)
      ? !1
      : ip.test(e)
        ? (Ea[e] = !0)
        : ((ba[e] = !0), !1);
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
function Le(e, t, n, r, l, s, i) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = i));
}
var ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ke[e] = new Le(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ke[t] = new Le(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ke[e] = new Le(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ke[e] = new Le(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ke[e] = new Le(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ke[e] = new Le(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ke[e] = new Le(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ke[e] = new Le(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ke[e] = new Le(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Eo = /[\-:]([a-z])/g;
function Co(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Eo, Co);
    ke[t] = new Le(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Eo, Co);
    ke[t] = new Le(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Eo, Co);
  ke[t] = new Le(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ke[e] = new Le(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ke.xlinkHref = new Le(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ke[e] = new Le(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Po(e, t, n, r) {
  var l = ke.hasOwnProperty(t) ? ke[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (up(t, n, l, r) && (n = null),
    r || l === null
      ? op(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var $t = sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  cl = Symbol.for("react.element"),
  On = Symbol.for("react.portal"),
  Mn = Symbol.for("react.fragment"),
  To = Symbol.for("react.strict_mode"),
  Si = Symbol.for("react.profiler"),
  sc = Symbol.for("react.provider"),
  ic = Symbol.for("react.context"),
  Do = Symbol.for("react.forward_ref"),
  ki = Symbol.for("react.suspense"),
  ji = Symbol.for("react.suspense_list"),
  Oo = Symbol.for("react.memo"),
  At = Symbol.for("react.lazy"),
  oc = Symbol.for("react.offscreen"),
  Ca = Symbol.iterator;
function ar(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ca && e[Ca]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ce = Object.assign,
  Ws;
function wr(e) {
  if (Ws === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ws = (t && t[1]) || "";
    }
  return (
    `
` +
    Ws +
    e
  );
}
var qs = !1;
function Bs(e, t) {
  if (!e || qs) return "";
  qs = !0;
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
          s = r.stack.split(`
`),
          i = l.length - 1,
          a = s.length - 1;
        1 <= i && 0 <= a && l[i] !== s[a];
      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (l[i] !== s[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || l[i] !== s[a])) {
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
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    ((qs = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? wr(e) : "";
}
function cp(e) {
  switch (e.tag) {
    case 5:
      return wr(e.type);
    case 16:
      return wr("Lazy");
    case 13:
      return wr("Suspense");
    case 19:
      return wr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Bs(e.type, !1)), e);
    case 11:
      return ((e = Bs(e.type.render, !1)), e);
    case 1:
      return ((e = Bs(e.type, !0)), e);
    default:
      return "";
  }
}
function bi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Mn:
      return "Fragment";
    case On:
      return "Portal";
    case Si:
      return "Profiler";
    case To:
      return "StrictMode";
    case ki:
      return "Suspense";
    case ji:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ic:
        return (e.displayName || "Context") + ".Consumer";
      case sc:
        return (e._context.displayName || "Context") + ".Provider";
      case Do:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Oo:
        return (
          (t = e.displayName || null),
          t !== null ? t : bi(e.type) || "Memo"
        );
      case At:
        ((t = e._payload), (e = e._init));
        try {
          return bi(e(t));
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
      return bi(t);
    case 8:
      return t === To ? "StrictMode" : "Mode";
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
function ac(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function fp(e) {
  var t = ac(e) ? "checked" : "value",
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
function dl(e) {
  e._valueTracker || (e._valueTracker = fp(e));
}
function uc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ac(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ul(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ei(e, t) {
  var n = t.checked;
  return ce({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Pa(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = nn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function cc(e, t) {
  ((t = t.checked), t != null && Po(e, "checked", t, !1));
}
function Ci(e, t) {
  cc(e, t);
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
  (t.hasOwnProperty("value")
    ? Pi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Pi(e, t.type, nn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Ta(e, t, n) {
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
function Pi(e, t, n) {
  (t !== "number" || Ul(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Nr = Array.isArray;
function Wn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      ((l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + nn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ti(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
  return ce({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Da(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(T(92));
      if (Nr(n)) {
        if (1 < n.length) throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: nn(n) };
}
function dc(e, t) {
  var n = nn(t.value),
    r = nn(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Oa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function fc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Di(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? fc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var fl,
  pc = (function (e) {
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
        fl = fl || document.createElement("div"),
          fl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = fl.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function $r(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var br = {
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
Object.keys(br).forEach(function (e) {
  pp.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (br[t] = br[e]));
  });
});
function mc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (br.hasOwnProperty(e) && br[e])
      ? ("" + t).trim()
      : t + "px";
}
function hc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = mc(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
    }
}
var mp = ce(
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
function Oi(e, t) {
  if (t) {
    if (mp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(T(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(T(62));
  }
}
function Mi(e, t) {
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
var _i = null;
function Mo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Li = null,
  qn = null,
  Bn = null;
function Ma(e) {
  if ((e = rl(e))) {
    if (typeof Li != "function") throw Error(T(280));
    var t = e.stateNode;
    t && ((t = js(t)), Li(e.stateNode, e.type, t));
  }
}
function gc(e) {
  qn ? (Bn ? Bn.push(e) : (Bn = [e])) : (qn = e);
}
function yc() {
  if (qn) {
    var e = qn,
      t = Bn;
    if (((Bn = qn = null), Ma(e), t)) for (e = 0; e < t.length; e++) Ma(t[e]);
  }
}
function vc(e, t) {
  return e(t);
}
function xc() {}
var Vs = !1;
function wc(e, t, n) {
  if (Vs) return e(t, n);
  Vs = !0;
  try {
    return vc(e, t, n);
  } finally {
    ((Vs = !1), (qn !== null || Bn !== null) && (xc(), yc()));
  }
}
function Rr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = js(n);
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
  if (n && typeof n != "function") throw Error(T(231, t, typeof n));
  return n;
}
var Fi = !1;
if (Mt)
  try {
    var ur = {};
    (Object.defineProperty(ur, "passive", {
      get: function () {
        Fi = !0;
      },
    }),
      window.addEventListener("test", ur, ur),
      window.removeEventListener("test", ur, ur));
  } catch {
    Fi = !1;
  }
function hp(e, t, n, r, l, s, i, a, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var Er = !1,
  Hl = null,
  Wl = !1,
  $i = null,
  gp = {
    onError: function (e) {
      ((Er = !0), (Hl = e));
    },
  };
function yp(e, t, n, r, l, s, i, a, u) {
  ((Er = !1), (Hl = null), hp.apply(gp, arguments));
}
function vp(e, t, n, r, l, s, i, a, u) {
  if ((yp.apply(this, arguments), Er)) {
    if (Er) {
      var c = Hl;
      ((Er = !1), (Hl = null));
    } else throw Error(T(198));
    Wl || ((Wl = !0), ($i = c));
  }
}
function Cn(e) {
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
function Nc(e) {
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
function _a(e) {
  if (Cn(e) !== e) throw Error(T(188));
}
function xp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Cn(e)), t === null)) throw Error(T(188));
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
        if (s === n) return (_a(l), e);
        if (s === r) return (_a(l), t);
        s = s.sibling;
      }
      throw Error(T(188));
    }
    if (n.return !== r.return) ((n = l), (r = s));
    else {
      for (var i = !1, a = l.child; a; ) {
        if (a === n) {
          ((i = !0), (n = l), (r = s));
          break;
        }
        if (a === r) {
          ((i = !0), (r = l), (n = s));
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = s.child; a; ) {
          if (a === n) {
            ((i = !0), (n = s), (r = l));
            break;
          }
          if (a === r) {
            ((i = !0), (r = s), (n = l));
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(T(189));
      }
    }
    if (n.alternate !== r) throw Error(T(190));
  }
  if (n.tag !== 3) throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function Sc(e) {
  return ((e = xp(e)), e !== null ? kc(e) : null);
}
function kc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = kc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var jc = Be.unstable_scheduleCallback,
  La = Be.unstable_cancelCallback,
  wp = Be.unstable_shouldYield,
  Np = Be.unstable_requestPaint,
  fe = Be.unstable_now,
  Sp = Be.unstable_getCurrentPriorityLevel,
  _o = Be.unstable_ImmediatePriority,
  bc = Be.unstable_UserBlockingPriority,
  ql = Be.unstable_NormalPriority,
  kp = Be.unstable_LowPriority,
  Ec = Be.unstable_IdlePriority,
  ws = null,
  Nt = null;
function jp(e) {
  if (Nt && typeof Nt.onCommitFiberRoot == "function")
    try {
      Nt.onCommitFiberRoot(ws, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var pt = Math.clz32 ? Math.clz32 : Cp,
  bp = Math.log,
  Ep = Math.LN2;
function Cp(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((bp(e) / Ep) | 0)) | 0);
}
var pl = 64,
  ml = 4194304;
function Sr(e) {
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
function Bl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    s = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~l;
    a !== 0 ? (r = Sr(a)) : ((s &= i), s !== 0 && (r = Sr(s)));
  } else ((i = n & ~l), i !== 0 ? (r = Sr(i)) : s !== 0 && (r = Sr(s)));
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
      ((n = 31 - pt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
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
      s = e.pendingLanes;
    0 < s;
  ) {
    var i = 31 - pt(s),
      a = 1 << i,
      u = l[i];
    (u === -1
      ? (!(a & n) || a & r) && (l[i] = Pp(a, t))
      : u <= t && (e.expiredLanes |= a),
      (s &= ~a));
  }
}
function Ri(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Cc() {
  var e = pl;
  return ((pl <<= 1), !(pl & 4194240) && (pl = 64), e);
}
function Qs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function tl(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - pt(t)),
    (e[t] = n));
}
function Dp(e, t) {
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
    var l = 31 - pt(n),
      s = 1 << l;
    ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~s));
  }
}
function Lo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - pt(n),
      l = 1 << r;
    ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
  }
}
var X = 0;
function Pc(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Tc,
  Fo,
  Dc,
  Oc,
  Mc,
  zi = !1,
  hl = [],
  Yt = null,
  Gt = null,
  Kt = null,
  zr = new Map(),
  Ir = new Map(),
  Ht = [],
  Op =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Fa(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Yt = null;
      break;
    case "dragenter":
    case "dragleave":
      Gt = null;
      break;
    case "mouseover":
    case "mouseout":
      Kt = null;
      break;
    case "pointerover":
    case "pointerout":
      zr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ir.delete(t.pointerId);
  }
}
function cr(e, t, n, r, l, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [l],
      }),
      t !== null && ((t = rl(t)), t !== null && Fo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Mp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ((Yt = cr(Yt, e, t, n, r, l)), !0);
    case "dragenter":
      return ((Gt = cr(Gt, e, t, n, r, l)), !0);
    case "mouseover":
      return ((Kt = cr(Kt, e, t, n, r, l)), !0);
    case "pointerover":
      var s = l.pointerId;
      return (zr.set(s, cr(zr.get(s) || null, e, t, n, r, l)), !0);
    case "gotpointercapture":
      return (
        (s = l.pointerId),
        Ir.set(s, cr(Ir.get(s) || null, e, t, n, r, l)),
        !0
      );
  }
  return !1;
}
function _c(e) {
  var t = fn(e.target);
  if (t !== null) {
    var n = Cn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Nc(n)), t !== null)) {
          ((e.blockedOn = t),
            Mc(e.priority, function () {
              Dc(n);
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
function Dl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ii(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((_i = r), n.target.dispatchEvent(r), (_i = null));
    } else return ((t = rl(n)), t !== null && Fo(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function $a(e, t, n) {
  Dl(e) && n.delete(t);
}
function _p() {
  ((zi = !1),
    Yt !== null && Dl(Yt) && (Yt = null),
    Gt !== null && Dl(Gt) && (Gt = null),
    Kt !== null && Dl(Kt) && (Kt = null),
    zr.forEach($a),
    Ir.forEach($a));
}
function dr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    zi ||
      ((zi = !0),
      Be.unstable_scheduleCallback(Be.unstable_NormalPriority, _p)));
}
function Ar(e) {
  function t(l) {
    return dr(l, e);
  }
  if (0 < hl.length) {
    dr(hl[0], e);
    for (var n = 1; n < hl.length; n++) {
      var r = hl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Yt !== null && dr(Yt, e),
      Gt !== null && dr(Gt, e),
      Kt !== null && dr(Kt, e),
      zr.forEach(t),
      Ir.forEach(t),
      n = 0;
    n < Ht.length;
    n++
  )
    ((r = Ht[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Ht.length && ((n = Ht[0]), n.blockedOn === null); )
    (_c(n), n.blockedOn === null && Ht.shift());
}
var Vn = $t.ReactCurrentBatchConfig,
  Vl = !0;
function Lp(e, t, n, r) {
  var l = X,
    s = Vn.transition;
  Vn.transition = null;
  try {
    ((X = 1), $o(e, t, n, r));
  } finally {
    ((X = l), (Vn.transition = s));
  }
}
function Fp(e, t, n, r) {
  var l = X,
    s = Vn.transition;
  Vn.transition = null;
  try {
    ((X = 4), $o(e, t, n, r));
  } finally {
    ((X = l), (Vn.transition = s));
  }
}
function $o(e, t, n, r) {
  if (Vl) {
    var l = Ii(e, t, n, r);
    if (l === null) (ri(e, t, r, Ql, n), Fa(e, r));
    else if (Mp(l, e, t, n, r)) r.stopPropagation();
    else if ((Fa(e, r), t & 4 && -1 < Op.indexOf(e))) {
      for (; l !== null; ) {
        var s = rl(l);
        if (
          (s !== null && Tc(s),
          (s = Ii(e, t, n, r)),
          s === null && ri(e, t, r, Ql, n),
          s === l)
        )
          break;
        l = s;
      }
      l !== null && r.stopPropagation();
    } else ri(e, t, r, null, n);
  }
}
var Ql = null;
function Ii(e, t, n, r) {
  if (((Ql = null), (e = Mo(r)), (e = fn(e)), e !== null))
    if (((t = Cn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Nc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((Ql = e), null);
}
function Lc(e) {
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
      switch (Sp()) {
        case _o:
          return 1;
        case bc:
          return 4;
        case ql:
        case kp:
          return 16;
        case Ec:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Bt = null,
  Ro = null,
  Ol = null;
function Fc() {
  if (Ol) return Ol;
  var e,
    t = Ro,
    n = t.length,
    r,
    l = "value" in Bt ? Bt.value : Bt.textContent,
    s = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[s - r]; r++);
  return (Ol = l.slice(e, 1 < r ? 1 - r : void 0));
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
function gl() {
  return !0;
}
function Ra() {
  return !1;
}
function Qe(e) {
  function t(n, r, l, s, i) {
    ((this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = i),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? gl
        : Ra),
      (this.isPropagationStopped = Ra),
      this
    );
  }
  return (
    ce(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = gl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = gl));
      },
      persist: function () {},
      isPersistent: gl,
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
  zo = Qe(lr),
  nl = ce({}, lr, { view: 0, detail: 0 }),
  $p = Qe(nl),
  Ys,
  Gs,
  fr,
  Ns = ce({}, nl, {
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
    getModifierState: Io,
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
        : (e !== fr &&
            (fr && e.type === "mousemove"
              ? ((Ys = e.screenX - fr.screenX), (Gs = e.screenY - fr.screenY))
              : (Gs = Ys = 0),
            (fr = e)),
          Ys);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Gs;
    },
  }),
  za = Qe(Ns),
  Rp = ce({}, Ns, { dataTransfer: 0 }),
  zp = Qe(Rp),
  Ip = ce({}, nl, { relatedTarget: 0 }),
  Ks = Qe(Ip),
  Ap = ce({}, lr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Up = Qe(Ap),
  Hp = ce({}, lr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Wp = Qe(Hp),
  qp = ce({}, lr, { data: 0 }),
  Ia = Qe(qp),
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
  Vp = {
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
  Qp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Yp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Qp[e]) ? !!t[e] : !1;
}
function Io() {
  return Yp;
}
var Gp = ce({}, nl, {
    key: function (e) {
      if (e.key) {
        var t = Bp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ml(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Vp[e.keyCode] || "Unidentified"
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
    getModifierState: Io,
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
  Kp = Qe(Gp),
  Xp = ce({}, Ns, {
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
  Aa = Qe(Xp),
  Jp = ce({}, nl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Io,
  }),
  Zp = Qe(Jp),
  em = ce({}, lr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  tm = Qe(em),
  nm = ce({}, Ns, {
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
  rm = Qe(nm),
  lm = [9, 13, 27, 32],
  Ao = Mt && "CompositionEvent" in window,
  Cr = null;
Mt && "documentMode" in document && (Cr = document.documentMode);
var sm = Mt && "TextEvent" in window && !Cr,
  $c = Mt && (!Ao || (Cr && 8 < Cr && 11 >= Cr)),
  Ua = " ",
  Ha = !1;
function Rc(e, t) {
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
function zc(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var _n = !1;
function im(e, t) {
  switch (e) {
    case "compositionend":
      return zc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ha = !0), Ua);
    case "textInput":
      return ((e = t.data), e === Ua && Ha ? null : e);
    default:
      return null;
  }
}
function om(e, t) {
  if (_n)
    return e === "compositionend" || (!Ao && Rc(e, t))
      ? ((e = Fc()), (Ol = Ro = Bt = null), (_n = !1), e)
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
      return $c && t.locale !== "ko" ? null : t.data;
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
function Wa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!am[e.type] : t === "textarea";
}
function Ic(e, t, n, r) {
  (gc(r),
    (t = Yl(t, "onChange")),
    0 < t.length &&
      ((n = new zo("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Pr = null,
  Ur = null;
function um(e) {
  Kc(e, 0);
}
function Ss(e) {
  var t = $n(e);
  if (uc(t)) return e;
}
function cm(e, t) {
  if (e === "change") return t;
}
var Ac = !1;
if (Mt) {
  var Xs;
  if (Mt) {
    var Js = "oninput" in document;
    if (!Js) {
      var qa = document.createElement("div");
      (qa.setAttribute("oninput", "return;"),
        (Js = typeof qa.oninput == "function"));
    }
    Xs = Js;
  } else Xs = !1;
  Ac = Xs && (!document.documentMode || 9 < document.documentMode);
}
function Ba() {
  Pr && (Pr.detachEvent("onpropertychange", Uc), (Ur = Pr = null));
}
function Uc(e) {
  if (e.propertyName === "value" && Ss(Ur)) {
    var t = [];
    (Ic(t, Ur, e, Mo(e)), wc(um, t));
  }
}
function dm(e, t, n) {
  e === "focusin"
    ? (Ba(), (Pr = t), (Ur = n), Pr.attachEvent("onpropertychange", Uc))
    : e === "focusout" && Ba();
}
function fm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ss(Ur);
}
function pm(e, t) {
  if (e === "click") return Ss(t);
}
function mm(e, t) {
  if (e === "input" || e === "change") return Ss(t);
}
function hm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ht = typeof Object.is == "function" ? Object.is : hm;
function Hr(e, t) {
  if (ht(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Ni.call(t, l) || !ht(e[l], t[l])) return !1;
  }
  return !0;
}
function Va(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Qa(e, t) {
  var n = Va(e);
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
    n = Va(n);
  }
}
function Hc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Hc(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Wc() {
  for (var e = window, t = Ul(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ul(e.document);
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
function gm(e) {
  var t = Wc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Hc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Uo(n)) {
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
          (l = Qa(n, s)));
        var i = Qa(n, r);
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
var ym = Mt && "documentMode" in document && 11 >= document.documentMode,
  Ln = null,
  Ai = null,
  Tr = null,
  Ui = !1;
function Ya(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ui ||
    Ln == null ||
    Ln !== Ul(r) ||
    ((r = Ln),
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
    (Tr && Hr(Tr, r)) ||
      ((Tr = r),
      (r = Yl(Ai, "onSelect")),
      0 < r.length &&
        ((t = new zo("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ln))));
}
function yl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Fn = {
    animationend: yl("Animation", "AnimationEnd"),
    animationiteration: yl("Animation", "AnimationIteration"),
    animationstart: yl("Animation", "AnimationStart"),
    transitionend: yl("Transition", "TransitionEnd"),
  },
  Zs = {},
  qc = {};
Mt &&
  ((qc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Fn.animationend.animation,
    delete Fn.animationiteration.animation,
    delete Fn.animationstart.animation),
  "TransitionEvent" in window || delete Fn.transitionend.transition);
function ks(e) {
  if (Zs[e]) return Zs[e];
  if (!Fn[e]) return e;
  var t = Fn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in qc) return (Zs[e] = t[n]);
  return e;
}
var Bc = ks("animationend"),
  Vc = ks("animationiteration"),
  Qc = ks("animationstart"),
  Yc = ks("transitionend"),
  Gc = new Map(),
  Ga =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function ln(e, t) {
  (Gc.set(e, t), En(t, [e]));
}
for (var ei = 0; ei < Ga.length; ei++) {
  var ti = Ga[ei],
    vm = ti.toLowerCase(),
    xm = ti[0].toUpperCase() + ti.slice(1);
  ln(vm, "on" + xm);
}
ln(Bc, "onAnimationEnd");
ln(Vc, "onAnimationIteration");
ln(Qc, "onAnimationStart");
ln("dblclick", "onDoubleClick");
ln("focusin", "onFocus");
ln("focusout", "onBlur");
ln(Yc, "onTransitionEnd");
Kn("onMouseEnter", ["mouseout", "mouseover"]);
Kn("onMouseLeave", ["mouseout", "mouseover"]);
Kn("onPointerEnter", ["pointerout", "pointerover"]);
Kn("onPointerLeave", ["pointerout", "pointerover"]);
En(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
En(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
En("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
En(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
En(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
En(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var kr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  wm = new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));
function Ka(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), vp(r, t, void 0, e), (e.currentTarget = null));
}
function Kc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            u = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), u !== s && l.isPropagationStopped())) break e;
          (Ka(l, a, c), (s = u));
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (u = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            u !== s && l.isPropagationStopped())
          )
            break e;
          (Ka(l, a, c), (s = u));
        }
    }
  }
  if (Wl) throw ((e = $i), (Wl = !1), ($i = null), e);
}
function ne(e, t) {
  var n = t[Vi];
  n === void 0 && (n = t[Vi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Xc(t, e, 2, !1), n.add(r));
}
function ni(e, t, n) {
  var r = 0;
  (t && (r |= 4), Xc(n, e, r, t));
}
var vl = "_reactListening" + Math.random().toString(36).slice(2);
function Wr(e) {
  if (!e[vl]) {
    ((e[vl] = !0),
      lc.forEach(function (n) {
        n !== "selectionchange" && (wm.has(n) || ni(n, !1, e), ni(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[vl] || ((t[vl] = !0), ni("selectionchange", !1, t));
  }
}
function Xc(e, t, n, r) {
  switch (Lc(t)) {
    case 1:
      var l = Lp;
      break;
    case 4:
      l = Fp;
      break;
    default:
      l = $o;
  }
  ((n = l.bind(null, t, n, e)),
    (l = void 0),
    !Fi ||
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
function ri(e, t, n, r, l) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
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
        for (; a !== null; ) {
          if (((i = fn(a)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = s = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  wc(function () {
    var c = s,
      m = Mo(n),
      f = [];
    e: {
      var y = Gc.get(e);
      if (y !== void 0) {
        var v = zo,
          N = e;
        switch (e) {
          case "keypress":
            if (Ml(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Kp;
            break;
          case "focusin":
            ((N = "focus"), (v = Ks));
            break;
          case "focusout":
            ((N = "blur"), (v = Ks));
            break;
          case "beforeblur":
          case "afterblur":
            v = Ks;
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
            v = za;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = zp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Zp;
            break;
          case Bc:
          case Vc:
          case Qc:
            v = Up;
            break;
          case Yc:
            v = tm;
            break;
          case "scroll":
            v = $p;
            break;
          case "wheel":
            v = rm;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Wp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Aa;
        }
        var w = (t & 4) !== 0,
          j = !w && e === "scroll",
          g = w ? (y !== null ? y + "Capture" : null) : y;
        w = [];
        for (var d = c, h; d !== null; ) {
          h = d;
          var S = h.stateNode;
          if (
            (h.tag === 5 &&
              S !== null &&
              ((h = S),
              g !== null && ((S = Rr(d, g)), S != null && w.push(qr(d, S, h)))),
            j)
          )
            break;
          d = d.return;
        }
        0 < w.length &&
          ((y = new v(y, N, null, n, m)), f.push({ event: y, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((y = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          y &&
            n !== _i &&
            (N = n.relatedTarget || n.fromElement) &&
            (fn(N) || N[_t]))
        )
          break e;
        if (
          (v || y) &&
          ((y =
            m.window === m
              ? m
              : (y = m.ownerDocument)
                ? y.defaultView || y.parentWindow
                : window),
          v
            ? ((N = n.relatedTarget || n.toElement),
              (v = c),
              (N = N ? fn(N) : null),
              N !== null &&
                ((j = Cn(N)), N !== j || (N.tag !== 5 && N.tag !== 6)) &&
                (N = null))
            : ((v = null), (N = c)),
          v !== N)
        ) {
          if (
            ((w = za),
            (S = "onMouseLeave"),
            (g = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Aa),
              (S = "onPointerLeave"),
              (g = "onPointerEnter"),
              (d = "pointer")),
            (j = v == null ? y : $n(v)),
            (h = N == null ? y : $n(N)),
            (y = new w(S, d + "leave", v, n, m)),
            (y.target = j),
            (y.relatedTarget = h),
            (S = null),
            fn(m) === c &&
              ((w = new w(g, d + "enter", N, n, m)),
              (w.target = h),
              (w.relatedTarget = j),
              (S = w)),
            (j = S),
            v && N)
          )
            t: {
              for (w = v, g = N, d = 0, h = w; h; h = Tn(h)) d++;
              for (h = 0, S = g; S; S = Tn(S)) h++;
              for (; 0 < d - h; ) ((w = Tn(w)), d--);
              for (; 0 < h - d; ) ((g = Tn(g)), h--);
              for (; d--; ) {
                if (w === g || (g !== null && w === g.alternate)) break t;
                ((w = Tn(w)), (g = Tn(g)));
              }
              w = null;
            }
          else w = null;
          (v !== null && Xa(f, y, v, w, !1),
            N !== null && j !== null && Xa(f, j, N, w, !0));
        }
      }
      e: {
        if (
          ((y = c ? $n(c) : window),
          (v = y.nodeName && y.nodeName.toLowerCase()),
          v === "select" || (v === "input" && y.type === "file"))
        )
          var x = cm;
        else if (Wa(y))
          if (Ac) x = mm;
          else {
            x = fm;
            var k = dm;
          }
        else
          (v = y.nodeName) &&
            v.toLowerCase() === "input" &&
            (y.type === "checkbox" || y.type === "radio") &&
            (x = pm);
        if (x && (x = x(e, c))) {
          Ic(f, x, n, m);
          break e;
        }
        (k && k(e, y, c),
          e === "focusout" &&
            (k = y._wrapperState) &&
            k.controlled &&
            y.type === "number" &&
            Pi(y, "number", y.value));
      }
      switch (((k = c ? $n(c) : window), e)) {
        case "focusin":
          (Wa(k) || k.contentEditable === "true") &&
            ((Ln = k), (Ai = c), (Tr = null));
          break;
        case "focusout":
          Tr = Ai = Ln = null;
          break;
        case "mousedown":
          Ui = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Ui = !1), Ya(f, n, m));
          break;
        case "selectionchange":
          if (ym) break;
        case "keydown":
        case "keyup":
          Ya(f, n, m);
      }
      var C;
      if (Ao)
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
        _n
          ? Rc(e, n) && (D = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (D = "onCompositionStart");
      (D &&
        ($c &&
          n.locale !== "ko" &&
          (_n || D !== "onCompositionStart"
            ? D === "onCompositionEnd" && _n && (C = Fc())
            : ((Bt = m),
              (Ro = "value" in Bt ? Bt.value : Bt.textContent),
              (_n = !0))),
        (k = Yl(c, D)),
        0 < k.length &&
          ((D = new Ia(D, e, null, n, m)),
          f.push({ event: D, listeners: k }),
          C ? (D.data = C) : ((C = zc(n)), C !== null && (D.data = C)))),
        (C = sm ? im(e, n) : om(e, n)) &&
          ((c = Yl(c, "onBeforeInput")),
          0 < c.length &&
            ((m = new Ia("onBeforeInput", "beforeinput", null, n, m)),
            f.push({ event: m, listeners: c }),
            (m.data = C))));
    }
    Kc(f, t);
  });
}
function qr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Yl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      s = l.stateNode;
    (l.tag === 5 &&
      s !== null &&
      ((l = s),
      (s = Rr(e, n)),
      s != null && r.unshift(qr(e, s, l)),
      (s = Rr(e, t)),
      s != null && r.push(qr(e, s, l))),
      (e = e.return));
  }
  return r;
}
function Tn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Xa(e, t, n, r, l) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      c = a.stateNode;
    if (u !== null && u === r) break;
    (a.tag === 5 &&
      c !== null &&
      ((a = c),
      l
        ? ((u = Rr(n, s)), u != null && i.unshift(qr(n, u, a)))
        : l || ((u = Rr(n, s)), u != null && i.push(qr(n, u, a)))),
      (n = n.return));
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Nm = /\r\n?/g,
  Sm = /\u0000|\uFFFD/g;
function Ja(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Nm,
      `
`,
    )
    .replace(Sm, "");
}
function xl(e, t, n) {
  if (((t = Ja(t)), Ja(e) !== t && n)) throw Error(T(425));
}
function Gl() {}
var Hi = null,
  Wi = null;
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
var Bi = typeof setTimeout == "function" ? setTimeout : void 0,
  km = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Za = typeof Promise == "function" ? Promise : void 0,
  jm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Za < "u"
        ? function (e) {
            return Za.resolve(null).then(e).catch(bm);
          }
        : Bi;
function bm(e) {
  setTimeout(function () {
    throw e;
  });
}
function li(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(l), Ar(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Ar(t);
}
function Xt(e) {
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
function eu(e) {
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
var sr = Math.random().toString(36).slice(2),
  wt = "__reactFiber$" + sr,
  Br = "__reactProps$" + sr,
  _t = "__reactContainer$" + sr,
  Vi = "__reactEvents$" + sr,
  Em = "__reactListeners$" + sr,
  Cm = "__reactHandles$" + sr;
function fn(e) {
  var t = e[wt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[_t] || n[wt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = eu(e); e !== null; ) {
          if ((n = e[wt])) return n;
          e = eu(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function rl(e) {
  return (
    (e = e[wt] || e[_t]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function $n(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(T(33));
}
function js(e) {
  return e[Br] || null;
}
var Qi = [],
  Rn = -1;
function sn(e) {
  return { current: e };
}
function re(e) {
  0 > Rn || ((e.current = Qi[Rn]), (Qi[Rn] = null), Rn--);
}
function te(e, t) {
  (Rn++, (Qi[Rn] = e.current), (e.current = t));
}
var rn = {},
  Pe = sn(rn),
  Re = sn(!1),
  wn = rn;
function Xn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return rn;
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
function ze(e) {
  return ((e = e.childContextTypes), e != null);
}
function Kl() {
  (re(Re), re(Pe));
}
function tu(e, t, n) {
  if (Pe.current !== rn) throw Error(T(168));
  (te(Pe, t), te(Re, n));
}
function Jc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(T(108, dp(e) || "Unknown", l));
  return ce({}, n, r);
}
function Xl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || rn),
    (wn = Pe.current),
    te(Pe, e),
    te(Re, Re.current),
    !0
  );
}
function nu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(T(169));
  (n
    ? ((e = Jc(e, t, wn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      re(Re),
      re(Pe),
      te(Pe, e))
    : re(Re),
    te(Re, n));
}
var Et = null,
  bs = !1,
  si = !1;
function Zc(e) {
  Et === null ? (Et = [e]) : Et.push(e);
}
function Pm(e) {
  ((bs = !0), Zc(e));
}
function on() {
  if (!si && Et !== null) {
    si = !0;
    var e = 0,
      t = X;
    try {
      var n = Et;
      for (X = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Et = null), (bs = !1));
    } catch (l) {
      throw (Et !== null && (Et = Et.slice(e + 1)), jc(_o, on), l);
    } finally {
      ((X = t), (si = !1));
    }
  }
  return null;
}
var zn = [],
  In = 0,
  Jl = null,
  Zl = 0,
  Je = [],
  Ze = 0,
  Nn = null,
  Ct = 1,
  Pt = "";
function an(e, t) {
  ((zn[In++] = Zl), (zn[In++] = Jl), (Jl = e), (Zl = t));
}
function ed(e, t, n) {
  ((Je[Ze++] = Ct), (Je[Ze++] = Pt), (Je[Ze++] = Nn), (Nn = e));
  var r = Ct;
  e = Pt;
  var l = 32 - pt(r) - 1;
  ((r &= ~(1 << l)), (n += 1));
  var s = 32 - pt(t) + l;
  if (30 < s) {
    var i = l - (l % 5);
    ((s = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Ct = (1 << (32 - pt(t) + l)) | (n << l) | r),
      (Pt = s + e));
  } else ((Ct = (1 << s) | (n << l) | r), (Pt = e));
}
function Ho(e) {
  e.return !== null && (an(e, 1), ed(e, 1, 0));
}
function Wo(e) {
  for (; e === Jl; )
    ((Jl = zn[--In]), (zn[In] = null), (Zl = zn[--In]), (zn[In] = null));
  for (; e === Nn; )
    ((Nn = Je[--Ze]),
      (Je[Ze] = null),
      (Pt = Je[--Ze]),
      (Je[Ze] = null),
      (Ct = Je[--Ze]),
      (Je[Ze] = null));
}
var qe = null,
  We = null,
  se = !1,
  ft = null;
function td(e, t) {
  var n = tt(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function ru(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (qe = e), (We = Xt(t.firstChild)), !0)
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
          ? ((n = Nn !== null ? { id: Ct, overflow: Pt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = tt(18, null, null, 0)),
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
function Yi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Gi(e) {
  if (se) {
    var t = We;
    if (t) {
      var n = t;
      if (!ru(e, t)) {
        if (Yi(e)) throw Error(T(418));
        t = Xt(n.nextSibling);
        var r = qe;
        t && ru(e, t)
          ? td(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (se = !1), (qe = e));
      }
    } else {
      if (Yi(e)) throw Error(T(418));
      ((e.flags = (e.flags & -4097) | 2), (se = !1), (qe = e));
    }
  }
}
function lu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  qe = e;
}
function wl(e) {
  if (e !== qe) return !1;
  if (!se) return (lu(e), (se = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !qi(e.type, e.memoizedProps))),
    t && (t = We))
  ) {
    if (Yi(e)) throw (nd(), Error(T(418)));
    for (; t; ) (td(e, t), (t = Xt(t.nextSibling)));
  }
  if ((lu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              We = Xt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      We = null;
    }
  } else We = qe ? Xt(e.stateNode.nextSibling) : null;
  return !0;
}
function nd() {
  for (var e = We; e; ) e = Xt(e.nextSibling);
}
function Jn() {
  ((We = qe = null), (se = !1));
}
function qo(e) {
  ft === null ? (ft = [e]) : ft.push(e);
}
var Tm = $t.ReactCurrentBatchConfig;
function pr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(T(147, e));
      var l = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (i) {
            var a = l.refs;
            i === null ? delete a[s] : (a[s] = i);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(T(284));
    if (!n._owner) throw Error(T(290, e));
  }
  return e;
}
function Nl(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      T(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function su(e) {
  var t = e._init;
  return t(e._payload);
}
function rd(e) {
  function t(g, d) {
    if (e) {
      var h = g.deletions;
      h === null ? ((g.deletions = [d]), (g.flags |= 16)) : h.push(d);
    }
  }
  function n(g, d) {
    if (!e) return null;
    for (; d !== null; ) (t(g, d), (d = d.sibling));
    return null;
  }
  function r(g, d) {
    for (g = new Map(); d !== null; )
      (d.key !== null ? g.set(d.key, d) : g.set(d.index, d), (d = d.sibling));
    return g;
  }
  function l(g, d) {
    return ((g = tn(g, d)), (g.index = 0), (g.sibling = null), g);
  }
  function s(g, d, h) {
    return (
      (g.index = h),
      e
        ? ((h = g.alternate),
          h !== null
            ? ((h = h.index), h < d ? ((g.flags |= 2), d) : h)
            : ((g.flags |= 2), d))
        : ((g.flags |= 1048576), d)
    );
  }
  function i(g) {
    return (e && g.alternate === null && (g.flags |= 2), g);
  }
  function a(g, d, h, S) {
    return d === null || d.tag !== 6
      ? ((d = fi(h, g.mode, S)), (d.return = g), d)
      : ((d = l(d, h)), (d.return = g), d);
  }
  function u(g, d, h, S) {
    var x = h.type;
    return x === Mn
      ? m(g, d, h.props.children, S, h.key)
      : d !== null &&
          (d.elementType === x ||
            (typeof x == "object" &&
              x !== null &&
              x.$$typeof === At &&
              su(x) === d.type))
        ? ((S = l(d, h.props)), (S.ref = pr(g, d, h)), (S.return = g), S)
        : ((S = Il(h.type, h.key, h.props, null, g.mode, S)),
          (S.ref = pr(g, d, h)),
          (S.return = g),
          S);
  }
  function c(g, d, h, S) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = pi(h, g.mode, S)), (d.return = g), d)
      : ((d = l(d, h.children || [])), (d.return = g), d);
  }
  function m(g, d, h, S, x) {
    return d === null || d.tag !== 7
      ? ((d = vn(h, g.mode, S, x)), (d.return = g), d)
      : ((d = l(d, h)), (d.return = g), d);
  }
  function f(g, d, h) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return ((d = fi("" + d, g.mode, h)), (d.return = g), d);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case cl:
          return (
            (h = Il(d.type, d.key, d.props, null, g.mode, h)),
            (h.ref = pr(g, null, d)),
            (h.return = g),
            h
          );
        case On:
          return ((d = pi(d, g.mode, h)), (d.return = g), d);
        case At:
          var S = d._init;
          return f(g, S(d._payload), h);
      }
      if (Nr(d) || ar(d))
        return ((d = vn(d, g.mode, h, null)), (d.return = g), d);
      Nl(g, d);
    }
    return null;
  }
  function y(g, d, h, S) {
    var x = d !== null ? d.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return x !== null ? null : a(g, d, "" + h, S);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case cl:
          return h.key === x ? u(g, d, h, S) : null;
        case On:
          return h.key === x ? c(g, d, h, S) : null;
        case At:
          return ((x = h._init), y(g, d, x(h._payload), S));
      }
      if (Nr(h) || ar(h)) return x !== null ? null : m(g, d, h, S, null);
      Nl(g, h);
    }
    return null;
  }
  function v(g, d, h, S, x) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return ((g = g.get(h) || null), a(d, g, "" + S, x));
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case cl:
          return (
            (g = g.get(S.key === null ? h : S.key) || null),
            u(d, g, S, x)
          );
        case On:
          return (
            (g = g.get(S.key === null ? h : S.key) || null),
            c(d, g, S, x)
          );
        case At:
          var k = S._init;
          return v(g, d, h, k(S._payload), x);
      }
      if (Nr(S) || ar(S)) return ((g = g.get(h) || null), m(d, g, S, x, null));
      Nl(d, S);
    }
    return null;
  }
  function N(g, d, h, S) {
    for (
      var x = null, k = null, C = d, D = (d = 0), z = null;
      C !== null && D < h.length;
      D++
    ) {
      C.index > D ? ((z = C), (C = null)) : (z = C.sibling);
      var $ = y(g, C, h[D], S);
      if ($ === null) {
        C === null && (C = z);
        break;
      }
      (e && C && $.alternate === null && t(g, C),
        (d = s($, d, D)),
        k === null ? (x = $) : (k.sibling = $),
        (k = $),
        (C = z));
    }
    if (D === h.length) return (n(g, C), se && an(g, D), x);
    if (C === null) {
      for (; D < h.length; D++)
        ((C = f(g, h[D], S)),
          C !== null &&
            ((d = s(C, d, D)),
            k === null ? (x = C) : (k.sibling = C),
            (k = C)));
      return (se && an(g, D), x);
    }
    for (C = r(g, C); D < h.length; D++)
      ((z = v(C, g, D, h[D], S)),
        z !== null &&
          (e && z.alternate !== null && C.delete(z.key === null ? D : z.key),
          (d = s(z, d, D)),
          k === null ? (x = z) : (k.sibling = z),
          (k = z)));
    return (
      e &&
        C.forEach(function (Z) {
          return t(g, Z);
        }),
      se && an(g, D),
      x
    );
  }
  function w(g, d, h, S) {
    var x = ar(h);
    if (typeof x != "function") throw Error(T(150));
    if (((h = x.call(h)), h == null)) throw Error(T(151));
    for (
      var k = (x = null), C = d, D = (d = 0), z = null, $ = h.next();
      C !== null && !$.done;
      D++, $ = h.next()
    ) {
      C.index > D ? ((z = C), (C = null)) : (z = C.sibling);
      var Z = y(g, C, $.value, S);
      if (Z === null) {
        C === null && (C = z);
        break;
      }
      (e && C && Z.alternate === null && t(g, C),
        (d = s(Z, d, D)),
        k === null ? (x = Z) : (k.sibling = Z),
        (k = Z),
        (C = z));
    }
    if ($.done) return (n(g, C), se && an(g, D), x);
    if (C === null) {
      for (; !$.done; D++, $ = h.next())
        (($ = f(g, $.value, S)),
          $ !== null &&
            ((d = s($, d, D)),
            k === null ? (x = $) : (k.sibling = $),
            (k = $)));
      return (se && an(g, D), x);
    }
    for (C = r(g, C); !$.done; D++, $ = h.next())
      (($ = v(C, g, D, $.value, S)),
        $ !== null &&
          (e && $.alternate !== null && C.delete($.key === null ? D : $.key),
          (d = s($, d, D)),
          k === null ? (x = $) : (k.sibling = $),
          (k = $)));
    return (
      e &&
        C.forEach(function (H) {
          return t(g, H);
        }),
      se && an(g, D),
      x
    );
  }
  function j(g, d, h, S) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Mn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case cl:
          e: {
            for (var x = h.key, k = d; k !== null; ) {
              if (k.key === x) {
                if (((x = h.type), x === Mn)) {
                  if (k.tag === 7) {
                    (n(g, k.sibling),
                      (d = l(k, h.props.children)),
                      (d.return = g),
                      (g = d));
                    break e;
                  }
                } else if (
                  k.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === At &&
                    su(x) === k.type)
                ) {
                  (n(g, k.sibling),
                    (d = l(k, h.props)),
                    (d.ref = pr(g, k, h)),
                    (d.return = g),
                    (g = d));
                  break e;
                }
                n(g, k);
                break;
              } else t(g, k);
              k = k.sibling;
            }
            h.type === Mn
              ? ((d = vn(h.props.children, g.mode, S, h.key)),
                (d.return = g),
                (g = d))
              : ((S = Il(h.type, h.key, h.props, null, g.mode, S)),
                (S.ref = pr(g, d, h)),
                (S.return = g),
                (g = S));
          }
          return i(g);
        case On:
          e: {
            for (k = h.key; d !== null; ) {
              if (d.key === k)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === h.containerInfo &&
                  d.stateNode.implementation === h.implementation
                ) {
                  (n(g, d.sibling),
                    (d = l(d, h.children || [])),
                    (d.return = g),
                    (g = d));
                  break e;
                } else {
                  n(g, d);
                  break;
                }
              else t(g, d);
              d = d.sibling;
            }
            ((d = pi(h, g.mode, S)), (d.return = g), (g = d));
          }
          return i(g);
        case At:
          return ((k = h._init), j(g, d, k(h._payload), S));
      }
      if (Nr(h)) return N(g, d, h, S);
      if (ar(h)) return w(g, d, h, S);
      Nl(g, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        d !== null && d.tag === 6
          ? (n(g, d.sibling), (d = l(d, h)), (d.return = g), (g = d))
          : (n(g, d), (d = fi(h, g.mode, S)), (d.return = g), (g = d)),
        i(g))
      : n(g, d);
  }
  return j;
}
var Zn = rd(!0),
  ld = rd(!1),
  es = sn(null),
  ts = null,
  An = null,
  Bo = null;
function Vo() {
  Bo = An = ts = null;
}
function Qo(e) {
  var t = es.current;
  (re(es), (e._currentValue = t));
}
function Ki(e, t, n) {
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
function Qn(e, t) {
  ((ts = e),
    (Bo = An = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && ($e = !0), (e.firstContext = null)));
}
function rt(e) {
  var t = e._currentValue;
  if (Bo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), An === null)) {
      if (ts === null) throw Error(T(308));
      ((An = e), (ts.dependencies = { lanes: 0, firstContext: e }));
    } else An = An.next = e;
  return t;
}
var pn = null;
function Yo(e) {
  pn === null ? (pn = [e]) : pn.push(e);
}
function sd(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Yo(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Lt(e, r)
  );
}
function Lt(e, t) {
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
var Ut = !1;
function Go(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function id(e, t) {
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
function Tt(e, t) {
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
  if (((r = r.shared), Q & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Lt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Yo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Lt(e, n)
  );
}
function _l(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Lo(e, n));
  }
}
function iu(e, t) {
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
function ns(e, t, n, r) {
  var l = e.updateQueue;
  Ut = !1;
  var s = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      c = u.next;
    ((u.next = null), i === null ? (s = c) : (i.next = c), (i = u));
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (a = m.lastBaseUpdate),
      a !== i &&
        (a === null ? (m.firstBaseUpdate = c) : (a.next = c),
        (m.lastBaseUpdate = u)));
  }
  if (s !== null) {
    var f = l.baseState;
    ((i = 0), (m = c = u = null), (a = s));
    do {
      var y = a.lane,
        v = a.eventTime;
      if ((r & y) === y) {
        m !== null &&
          (m = m.next =
            {
              eventTime: v,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var N = e,
            w = a;
          switch (((y = t), (v = n), w.tag)) {
            case 1:
              if (((N = w.payload), typeof N == "function")) {
                f = N.call(v, f, y);
                break e;
              }
              f = N;
              break e;
            case 3:
              N.flags = (N.flags & -65537) | 128;
            case 0:
              if (
                ((N = w.payload),
                (y = typeof N == "function" ? N.call(v, f, y) : N),
                y == null)
              )
                break e;
              f = ce({}, f, y);
              break e;
            case 2:
              Ut = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (y = l.effects),
          y === null ? (l.effects = [a]) : y.push(a));
      } else
        ((v = {
          eventTime: v,
          lane: y,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          m === null ? ((c = m = v), (u = f)) : (m = m.next = v),
          (i |= y));
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        ((y = a),
          (a = y.next),
          (y.next = null),
          (l.lastBaseUpdate = y),
          (l.shared.pending = null));
      }
    } while (!0);
    if (
      (m === null && (u = f),
      (l.baseState = u),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = m),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do ((i |= l.lane), (l = l.next));
      while (l !== t);
    } else s === null && (l.shared.lanes = 0);
    ((kn |= i), (e.lanes = i), (e.memoizedState = f));
  }
}
function ou(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(T(191, l));
        l.call(r);
      }
    }
}
var ll = {},
  St = sn(ll),
  Vr = sn(ll),
  Qr = sn(ll);
function mn(e) {
  if (e === ll) throw Error(T(174));
  return e;
}
function Ko(e, t) {
  switch ((te(Qr, t), te(Vr, e), te(St, ll), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Di(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Di(t, e)));
  }
  (re(St), te(St, t));
}
function er() {
  (re(St), re(Vr), re(Qr));
}
function od(e) {
  mn(Qr.current);
  var t = mn(St.current),
    n = Di(t, e.type);
  t !== n && (te(Vr, e), te(St, n));
}
function Xo(e) {
  Vr.current === e && (re(St), re(Vr));
}
var ae = sn(0);
function rs(e) {
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
var ii = [];
function Jo() {
  for (var e = 0; e < ii.length; e++)
    ii[e]._workInProgressVersionPrimary = null;
  ii.length = 0;
}
var Ll = $t.ReactCurrentDispatcher,
  oi = $t.ReactCurrentBatchConfig,
  Sn = 0,
  ue = null,
  he = null,
  ve = null,
  ls = !1,
  Dr = !1,
  Yr = 0,
  Dm = 0;
function je() {
  throw Error(T(321));
}
function Zo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ht(e[n], t[n])) return !1;
  return !0;
}
function ea(e, t, n, r, l, s) {
  if (
    ((Sn = s),
    (ue = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ll.current = e === null || e.memoizedState === null ? Lm : Fm),
    (e = n(r, l)),
    Dr)
  ) {
    s = 0;
    do {
      if (((Dr = !1), (Yr = 0), 25 <= s)) throw Error(T(301));
      ((s += 1),
        (ve = he = null),
        (t.updateQueue = null),
        (Ll.current = $m),
        (e = n(r, l)));
    } while (Dr);
  }
  if (
    ((Ll.current = ss),
    (t = he !== null && he.next !== null),
    (Sn = 0),
    (ve = he = ue = null),
    (ls = !1),
    t)
  )
    throw Error(T(300));
  return e;
}
function ta() {
  var e = Yr !== 0;
  return ((Yr = 0), e);
}
function xt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (ve === null ? (ue.memoizedState = ve = e) : (ve = ve.next = e), ve);
}
function lt() {
  if (he === null) {
    var e = ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = he.next;
  var t = ve === null ? ue.memoizedState : ve.next;
  if (t !== null) ((ve = t), (he = e));
  else {
    if (e === null) throw Error(T(310));
    ((he = e),
      (e = {
        memoizedState: he.memoizedState,
        baseState: he.baseState,
        baseQueue: he.baseQueue,
        queue: he.queue,
        next: null,
      }),
      ve === null ? (ue.memoizedState = ve = e) : (ve = ve.next = e));
  }
  return ve;
}
function Gr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ai(e) {
  var t = lt(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = he,
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
    var a = (i = null),
      u = null,
      c = s;
    do {
      var m = c.lane;
      if ((Sn & m) === m)
        (u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action)));
      else {
        var f = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        (u === null ? ((a = u = f), (i = r)) : (u = u.next = f),
          (ue.lanes |= m),
          (kn |= m));
      }
      c = c.next;
    } while (c !== null && c !== s);
    (u === null ? (i = r) : (u.next = a),
      ht(r, t.memoizedState) || ($e = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do ((s = l.lane), (ue.lanes |= s), (kn |= s), (l = l.next));
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ui(e) {
  var t = lt(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    s = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do ((s = e(s, i.action)), (i = i.next));
    while (i !== l);
    (ht(s, t.memoizedState) || ($e = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s));
  }
  return [s, r];
}
function ad() {}
function ud(e, t) {
  var n = ue,
    r = lt(),
    l = t(),
    s = !ht(r.memoizedState, l);
  if (
    (s && ((r.memoizedState = l), ($e = !0)),
    (r = r.queue),
    na(fd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (ve !== null && ve.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Kr(9, dd.bind(null, n, r, l, t), void 0, null),
      xe === null)
    )
      throw Error(T(349));
    Sn & 30 || cd(n, t, l);
  }
  return l;
}
function cd(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function dd(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), pd(t) && md(e));
}
function fd(e, t, n) {
  return n(function () {
    pd(t) && md(e);
  });
}
function pd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ht(e, n);
  } catch {
    return !0;
  }
}
function md(e) {
  var t = Lt(e, 1);
  t !== null && mt(t, e, 1, -1);
}
function au(e) {
  var t = xt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = _m.bind(null, ue, e)),
    [t.memoizedState, e]
  );
}
function Kr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function hd() {
  return lt().memoizedState;
}
function Fl(e, t, n, r) {
  var l = xt();
  ((ue.flags |= e),
    (l.memoizedState = Kr(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Es(e, t, n, r) {
  var l = lt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (he !== null) {
    var i = he.memoizedState;
    if (((s = i.destroy), r !== null && Zo(r, i.deps))) {
      l.memoizedState = Kr(t, n, s, r);
      return;
    }
  }
  ((ue.flags |= e), (l.memoizedState = Kr(1 | t, n, s, r)));
}
function uu(e, t) {
  return Fl(8390656, 8, e, t);
}
function na(e, t) {
  return Es(2048, 8, e, t);
}
function gd(e, t) {
  return Es(4, 2, e, t);
}
function yd(e, t) {
  return Es(4, 4, e, t);
}
function vd(e, t) {
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
function xd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Es(4, 4, vd.bind(null, t, e), n)
  );
}
function ra() {}
function wd(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Nd(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Sd(e, t, n) {
  return Sn & 21
    ? (ht(n, t) || ((n = Cc()), (ue.lanes |= n), (kn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), ($e = !0)), (e.memoizedState = n));
}
function Om(e, t) {
  var n = X;
  ((X = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = oi.transition;
  oi.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((X = n), (oi.transition = r));
  }
}
function kd() {
  return lt().memoizedState;
}
function Mm(e, t, n) {
  var r = en(e);
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
    bd(t, n);
  else if (((n = sd(e, t, n, r)), n !== null)) {
    var l = Me();
    (mt(n, e, r, l), Ed(n, t, r));
  }
}
function _m(e, t, n) {
  var r = en(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (jd(e)) bd(t, l);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = s(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), ht(a, i))) {
          var u = t.interleaved;
          (u === null
            ? ((l.next = l), Yo(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l));
          return;
        }
      } catch {
      } finally {
      }
    ((n = sd(e, t, l, r)),
      n !== null && ((l = Me()), mt(n, e, r, l), Ed(n, t, r)));
  }
}
function jd(e) {
  var t = e.alternate;
  return e === ue || (t !== null && t === ue);
}
function bd(e, t) {
  Dr = ls = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Ed(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Lo(e, n));
  }
}
var ss = {
    readContext: rt,
    useCallback: je,
    useContext: je,
    useEffect: je,
    useImperativeHandle: je,
    useInsertionEffect: je,
    useLayoutEffect: je,
    useMemo: je,
    useReducer: je,
    useRef: je,
    useState: je,
    useDebugValue: je,
    useDeferredValue: je,
    useTransition: je,
    useMutableSource: je,
    useSyncExternalStore: je,
    useId: je,
    unstable_isNewReconciler: !1,
  },
  Lm = {
    readContext: rt,
    useCallback: function (e, t) {
      return ((xt().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: rt,
    useEffect: uu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Fl(4194308, 4, vd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Fl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Fl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = xt();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
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
        (e = e.dispatch = Mm.bind(null, ue, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = xt();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: au,
    useDebugValue: ra,
    useDeferredValue: function (e) {
      return (xt().memoizedState = e);
    },
    useTransition: function () {
      var e = au(!1),
        t = e[0];
      return ((e = Om.bind(null, e[1])), (xt().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ue,
        l = xt();
      if (se) {
        if (n === void 0) throw Error(T(407));
        n = n();
      } else {
        if (((n = t()), xe === null)) throw Error(T(349));
        Sn & 30 || cd(r, t, n);
      }
      l.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (l.queue = s),
        uu(fd.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Kr(9, dd.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = xt(),
        t = xe.identifierPrefix;
      if (se) {
        var n = Pt,
          r = Ct;
        ((n = (r & ~(1 << (32 - pt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Yr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = Dm++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Fm = {
    readContext: rt,
    useCallback: wd,
    useContext: rt,
    useEffect: na,
    useImperativeHandle: xd,
    useInsertionEffect: gd,
    useLayoutEffect: yd,
    useMemo: Nd,
    useReducer: ai,
    useRef: hd,
    useState: function () {
      return ai(Gr);
    },
    useDebugValue: ra,
    useDeferredValue: function (e) {
      var t = lt();
      return Sd(t, he.memoizedState, e);
    },
    useTransition: function () {
      var e = ai(Gr)[0],
        t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: ad,
    useSyncExternalStore: ud,
    useId: kd,
    unstable_isNewReconciler: !1,
  },
  $m = {
    readContext: rt,
    useCallback: wd,
    useContext: rt,
    useEffect: na,
    useImperativeHandle: xd,
    useInsertionEffect: gd,
    useLayoutEffect: yd,
    useMemo: Nd,
    useReducer: ui,
    useRef: hd,
    useState: function () {
      return ui(Gr);
    },
    useDebugValue: ra,
    useDeferredValue: function (e) {
      var t = lt();
      return he === null ? (t.memoizedState = e) : Sd(t, he.memoizedState, e);
    },
    useTransition: function () {
      var e = ui(Gr)[0],
        t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: ad,
    useSyncExternalStore: ud,
    useId: kd,
    unstable_isNewReconciler: !1,
  };
function ct(e, t) {
  if (e && e.defaultProps) {
    ((t = ce({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Xi(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ce({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Cs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Cn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Me(),
      l = en(e),
      s = Tt(r, l);
    ((s.payload = t),
      n != null && (s.callback = n),
      (t = Jt(e, s, l)),
      t !== null && (mt(t, e, l, r), _l(t, e, l)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Me(),
      l = en(e),
      s = Tt(r, l);
    ((s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Jt(e, s, l)),
      t !== null && (mt(t, e, l, r), _l(t, e, l)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Me(),
      r = en(e),
      l = Tt(n, r);
    ((l.tag = 2),
      t != null && (l.callback = t),
      (t = Jt(e, l, r)),
      t !== null && (mt(t, e, r, n), _l(t, e, r)));
  },
};
function cu(e, t, n, r, l, s, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Hr(n, r) || !Hr(l, s)
        : !0
  );
}
function Cd(e, t, n) {
  var r = !1,
    l = rn,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = rt(s))
      : ((l = ze(t) ? wn : Pe.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Xn(e, l) : rn)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Cs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function du(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Cs.enqueueReplaceState(t, t.state, null));
}
function Ji(e, t, n, r) {
  var l = e.stateNode;
  ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Go(e));
  var s = t.contextType;
  (typeof s == "object" && s !== null
    ? (l.context = rt(s))
    : ((s = ze(t) ? wn : Pe.current), (l.context = Xn(e, s))),
    (l.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Xi(e, t, s, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Cs.enqueueReplaceState(l, l.state, null),
      ns(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308));
}
function tr(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += cp(r)), (r = r.return));
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
function ci(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Zi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Rm = typeof WeakMap == "function" ? WeakMap : Map;
function Pd(e, t, n) {
  ((n = Tt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (os || ((os = !0), (uo = r)), Zi(e, t));
    }),
    n
  );
}
function Td(e, t, n) {
  ((n = Tt(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    ((n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Zi(e, t);
      }));
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        (Zi(e, t),
          typeof r != "function" &&
            (Zt === null ? (Zt = new Set([this])) : Zt.add(this)));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function fu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Rm();
    var l = new Set();
    r.set(t, l);
  } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
  l.has(n) || (l.add(n), (e = Xm.bind(null, e, t, n)), t.then(e, e));
}
function pu(e) {
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
function mu(e, t, n, r, l) {
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
              : ((t = Tt(-1, 1)), (t.tag = 2), Jt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var zm = $t.ReactCurrentOwner,
  $e = !1;
function De(e, t, n, r) {
  t.child = e === null ? ld(t, null, n, r) : Zn(t, e.child, n, r);
}
function hu(e, t, n, r, l) {
  n = n.render;
  var s = t.ref;
  return (
    Qn(t, l),
    (r = ea(e, t, n, r, s, l)),
    (n = ta()),
    e !== null && !$e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ft(e, t, l))
      : (se && n && Ho(t), (t.flags |= 1), De(e, t, r, l), t.child)
  );
}
function gu(e, t, n, r, l) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !da(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Dd(e, t, s, r, l))
      : ((e = Il(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & l))) {
    var i = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Hr), n(i, r) && e.ref === t.ref)
    )
      return Ft(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = tn(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Dd(e, t, n, r, l) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Hr(s, r) && e.ref === t.ref)
      if ((($e = !1), (t.pendingProps = r = s), (e.lanes & l) !== 0))
        e.flags & 131072 && ($e = !0);
      else return ((t.lanes = e.lanes), Ft(e, t, l));
  }
  return eo(e, t, n, r, l);
}
function Od(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        te(Hn, Ue),
        (Ue |= n));
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
          te(Hn, Ue),
          (Ue |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        te(Hn, Ue),
        (Ue |= r));
    }
  else
    (s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      te(Hn, Ue),
      (Ue |= r));
  return (De(e, t, l, n), t.child);
}
function Md(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function eo(e, t, n, r, l) {
  var s = ze(n) ? wn : Pe.current;
  return (
    (s = Xn(t, s)),
    Qn(t, l),
    (n = ea(e, t, n, r, s, l)),
    (r = ta()),
    e !== null && !$e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ft(e, t, l))
      : (se && r && Ho(t), (t.flags |= 1), De(e, t, n, l), t.child)
  );
}
function yu(e, t, n, r, l) {
  if (ze(n)) {
    var s = !0;
    Xl(t);
  } else s = !1;
  if ((Qn(t, l), t.stateNode === null))
    ($l(e, t), Cd(t, n, r), Ji(t, n, r, l), (r = !0));
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var u = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = rt(c))
      : ((c = ze(n) ? wn : Pe.current), (c = Xn(t, c)));
    var m = n.getDerivedStateFromProps,
      f =
        typeof m == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    (f ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || u !== c) && du(t, i, r, c)),
      (Ut = !1));
    var y = t.memoizedState;
    ((i.state = y),
      ns(t, r, i, l),
      (u = t.memoizedState),
      a !== r || y !== u || Re.current || Ut
        ? (typeof m == "function" && (Xi(t, n, m, r), (u = t.memoizedState)),
          (a = Ut || cu(t, n, a, r, y, u, c))
            ? (f ||
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
          (i.context = c),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((i = t.stateNode),
      id(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : ct(t.type, a)),
      (i.props = c),
      (f = t.pendingProps),
      (y = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = rt(u))
        : ((u = ze(n) ? wn : Pe.current), (u = Xn(t, u))));
    var v = n.getDerivedStateFromProps;
    ((m =
      typeof v == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== f || y !== u) && du(t, i, r, u)),
      (Ut = !1),
      (y = t.memoizedState),
      (i.state = y),
      ns(t, r, i, l));
    var N = t.memoizedState;
    a !== f || y !== N || Re.current || Ut
      ? (typeof v == "function" && (Xi(t, n, v, r), (N = t.memoizedState)),
        (c = Ut || cu(t, n, c, r, y, N, u) || !1)
          ? (m ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, N, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, N, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = N)),
        (i.props = r),
        (i.state = N),
        (i.context = u),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return to(e, t, n, r, s, l);
}
function to(e, t, n, r, l, s) {
  Md(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return (l && nu(t, n, !1), Ft(e, t, s));
  ((r = t.stateNode), (zm.current = t));
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Zn(t, e.child, null, s)), (t.child = Zn(t, null, a, s)))
      : De(e, t, a, s),
    (t.memoizedState = r.state),
    l && nu(t, n, !0),
    t.child
  );
}
function _d(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? tu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && tu(e, t.context, !1),
    Ko(e, t.containerInfo));
}
function vu(e, t, n, r, l) {
  return (Jn(), qo(l), (t.flags |= 256), De(e, t, n, r), t.child);
}
var no = { dehydrated: null, treeContext: null, retryLane: 0 };
function ro(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ld(e, t, n) {
  var r = t.pendingProps,
    l = ae.current,
    s = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    te(ae, l & 1),
    e === null)
  )
    return (
      Gi(t),
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
                : (s = Ds(i, r, 0, null)),
              (e = vn(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = ro(n)),
              (t.memoizedState = no),
              e)
            : la(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return Im(e, t, i, r, a, l, n);
  if (s) {
    ((s = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling));
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = tn(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (s = tn(a, s)) : ((s = vn(s, i, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? ro(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (s.memoizedState = i),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = no),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = tn(s, { mode: "visible", children: r.children })),
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
function la(e, t) {
  return (
    (t = Ds({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Sl(e, t, n, r) {
  return (
    r !== null && qo(r),
    Zn(t, e.child, null, n),
    (e = la(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Im(e, t, n, r, l, s, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ci(Error(T(422)))), Sl(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (l = t.mode),
          (r = Ds({ mode: "visible", children: r.children }, l, 0, null)),
          (s = vn(s, l, i, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && Zn(t, e.child, null, i),
          (t.child.memoizedState = ro(i)),
          (t.memoizedState = no),
          s);
  if (!(t.mode & 1)) return Sl(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (s = Error(T(419))),
      (r = ci(s, r, void 0)),
      Sl(e, t, i, r)
    );
  }
  if (((a = (i & e.childLanes) !== 0), $e || a)) {
    if (((r = xe), r !== null)) {
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
          ((s.retryLane = l), Lt(e, l), mt(r, e, l, -1)));
    }
    return (ca(), (r = ci(Error(T(421)))), Sl(e, t, i, r));
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Jm.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (We = Xt(l.nextSibling)),
      (qe = t),
      (se = !0),
      (ft = null),
      e !== null &&
        ((Je[Ze++] = Ct),
        (Je[Ze++] = Pt),
        (Je[Ze++] = Nn),
        (Ct = e.id),
        (Pt = e.overflow),
        (Nn = t)),
      (t = la(t, r.children)),
      (t.flags |= 4096),
      t);
}
function xu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Ki(e.return, t, n));
}
function di(e, t, n, r, l) {
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
function Fd(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    s = r.tail;
  if ((De(e, t, r.children, n), (r = ae.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xu(e, n, t);
        else if (e.tag === 19) xu(e, n, t);
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
  if ((te(ae, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          ((e = n.alternate),
            e !== null && rs(e) === null && (l = n),
            (n = n.sibling));
        ((n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          di(t, !1, l, n, s));
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && rs(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
        }
        di(t, !0, n, null, s);
        break;
      case "together":
        di(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function $l(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ft(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (kn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(T(153));
  if (t.child !== null) {
    for (
      e = t.child, n = tn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = tn(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function Am(e, t, n) {
  switch (t.tag) {
    case 3:
      (_d(t), Jn());
      break;
    case 5:
      od(t);
      break;
    case 1:
      ze(t.type) && Xl(t);
      break;
    case 4:
      Ko(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      (te(es, r._currentValue), (r._currentValue = l));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (te(ae, ae.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Ld(e, t, n)
            : (te(ae, ae.current & 1),
              (e = Ft(e, t, n)),
              e !== null ? e.sibling : null);
      te(ae, ae.current & 1);
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
        te(ae, ae.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Od(e, t, n));
  }
  return Ft(e, t, n);
}
var $d, lo, Rd, zd;
$d = function (e, t) {
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
lo = function () {};
Rd = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    ((e = t.stateNode), mn(St.current));
    var s = null;
    switch (n) {
      case "input":
        ((l = Ei(e, l)), (r = Ei(e, r)), (s = []));
        break;
      case "select":
        ((l = ce({}, l, { value: void 0 })),
          (r = ce({}, r, { value: void 0 })),
          (s = []));
        break;
      case "textarea":
        ((l = Ti(e, l)), (r = Ti(e, r)), (s = []));
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Gl);
    }
    Oi(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var a = l[c];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Fr.hasOwnProperty(c)
              ? s || (s = [])
              : (s = s || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((a = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && u !== a && (u != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                a[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else (n || (s || (s = []), s.push(c, n)), (n = u));
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (s = s || []).push(c, u))
            : c === "children"
              ? (typeof u != "string" && typeof u != "number") ||
                (s = s || []).push(c, "" + u)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (Fr.hasOwnProperty(c)
                  ? (u != null && c === "onScroll" && ne("scroll", e),
                    s || a === u || (s = []))
                  : (s = s || []).push(c, u));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
zd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function mr(e, t) {
  if (!se)
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
function be(e) {
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
function Um(e, t, n) {
  var r = t.pendingProps;
  switch ((Wo(t), t.tag)) {
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
      return (be(t), null);
    case 1:
      return (ze(t.type) && Kl(), be(t), null);
    case 3:
      return (
        (r = t.stateNode),
        er(),
        re(Re),
        re(Pe),
        Jo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (wl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ft !== null && (po(ft), (ft = null)))),
        lo(e, t),
        be(t),
        null
      );
    case 5:
      Xo(t);
      var l = mn(Qr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Rd(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166));
          return (be(t), null);
        }
        if (((e = mn(St.current)), wl(t))) {
          ((r = t.stateNode), (n = t.type));
          var s = t.memoizedProps;
          switch (((r[wt] = t), (r[Br] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (ne("cancel", r), ne("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              ne("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < kr.length; l++) ne(kr[l], r);
              break;
            case "source":
              ne("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (ne("error", r), ne("load", r));
              break;
            case "details":
              ne("toggle", r);
              break;
            case "input":
              (Pa(r, s), ne("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!s.multiple }),
                ne("invalid", r));
              break;
            case "textarea":
              (Da(r, s), ne("invalid", r));
          }
          (Oi(n, s), (l = null));
          for (var i in s)
            if (s.hasOwnProperty(i)) {
              var a = s[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      xl(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      xl(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : Fr.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  ne("scroll", r);
            }
          switch (n) {
            case "input":
              (dl(r), Ta(r, s, !0));
              break;
            case "textarea":
              (dl(r), Oa(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Gl);
          }
          ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = fc(n)),
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
            (e[wt] = t),
            (e[Br] = r),
            $d(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((i = Mi(n, r)), n)) {
              case "dialog":
                (ne("cancel", e), ne("close", e), (l = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (ne("load", e), (l = r));
                break;
              case "video":
              case "audio":
                for (l = 0; l < kr.length; l++) ne(kr[l], e);
                l = r;
                break;
              case "source":
                (ne("error", e), (l = r));
                break;
              case "img":
              case "image":
              case "link":
                (ne("error", e), ne("load", e), (l = r));
                break;
              case "details":
                (ne("toggle", e), (l = r));
                break;
              case "input":
                (Pa(e, r), (l = Ei(e, r)), ne("invalid", e));
                break;
              case "option":
                l = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = ce({}, r, { value: void 0 })),
                  ne("invalid", e));
                break;
              case "textarea":
                (Da(e, r), (l = Ti(e, r)), ne("invalid", e));
                break;
              default:
                l = r;
            }
            (Oi(n, l), (a = l));
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var u = a[s];
                s === "style"
                  ? hc(e, u)
                  : s === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && pc(e, u))
                    : s === "children"
                      ? typeof u == "string"
                        ? (n !== "textarea" || u !== "") && $r(e, u)
                        : typeof u == "number" && $r(e, "" + u)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (Fr.hasOwnProperty(s)
                          ? u != null && s === "onScroll" && ne("scroll", e)
                          : u != null && Po(e, s, u, i));
              }
            switch (n) {
              case "input":
                (dl(e), Ta(e, r, !1));
                break;
              case "textarea":
                (dl(e), Oa(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + nn(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Wn(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Wn(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Gl);
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
      return (be(t), null);
    case 6:
      if (e && t.stateNode != null) zd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
        if (((n = mn(Qr.current)), mn(St.current), wl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[wt] = t),
            (s = r.nodeValue !== n) && ((e = qe), e !== null))
          )
            switch (e.tag) {
              case 3:
                xl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  xl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[wt] = t),
            (t.stateNode = r));
      }
      return (be(t), null);
    case 13:
      if (
        (re(ae),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (se && We !== null && t.mode & 1 && !(t.flags & 128))
          (nd(), Jn(), (t.flags |= 98560), (s = !1));
        else if (((s = wl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(T(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(T(317));
            s[wt] = t;
          } else
            (Jn(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (be(t), (s = !1));
        } else (ft !== null && (po(ft), (ft = null)), (s = !0));
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ae.current & 1 ? ge === 0 && (ge = 3) : ca())),
          t.updateQueue !== null && (t.flags |= 4),
          be(t),
          null);
    case 4:
      return (
        er(),
        lo(e, t),
        e === null && Wr(t.stateNode.containerInfo),
        be(t),
        null
      );
    case 10:
      return (Qo(t.type._context), be(t), null);
    case 17:
      return (ze(t.type) && Kl(), be(t), null);
    case 19:
      if ((re(ae), (s = t.memoizedState), s === null)) return (be(t), null);
      if (((r = (t.flags & 128) !== 0), (i = s.rendering), i === null))
        if (r) mr(s, !1);
        else {
          if (ge !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = rs(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    mr(s, !1),
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
                return (te(ae, (ae.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          s.tail !== null &&
            fe() > nr &&
            ((t.flags |= 128), (r = !0), mr(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = rs(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              mr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !i.alternate && !se)
            )
              return (be(t), null);
          } else
            2 * fe() - s.renderingStartTime > nr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), mr(s, !1), (t.lanes = 4194304));
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
          (s.renderingStartTime = fe()),
          (t.sibling = null),
          (n = ae.current),
          te(ae, r ? (n & 1) | 2 : n & 1),
          t)
        : (be(t), null);
    case 22:
    case 23:
      return (
        ua(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ue & 1073741824 && (be(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : be(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function Hm(e, t) {
  switch ((Wo(t), t.tag)) {
    case 1:
      return (
        ze(t.type) && Kl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        er(),
        re(Re),
        re(Pe),
        Jo(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Xo(t), null);
    case 13:
      if (
        (re(ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(T(340));
        Jn();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (re(ae), null);
    case 4:
      return (er(), null);
    case 10:
      return (Qo(t.type._context), null);
    case 22:
    case 23:
      return (ua(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var kl = !1,
  Ee = !1,
  Wm = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function Un(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        de(e, t, r);
      }
    else n.current = null;
}
function so(e, t, n) {
  try {
    n();
  } catch (r) {
    de(e, t, r);
  }
}
var wu = !1;
function qm(e, t) {
  if (((Hi = Vl), (e = Wc()), Uo(e))) {
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
            a = -1,
            u = -1,
            c = 0,
            m = 0,
            f = e,
            y = null;
          t: for (;;) {
            for (
              var v;
              f !== n || (l !== 0 && f.nodeType !== 3) || (a = i + l),
                f !== s || (r !== 0 && f.nodeType !== 3) || (u = i + r),
                f.nodeType === 3 && (i += f.nodeValue.length),
                (v = f.firstChild) !== null;
            )
              ((y = f), (f = v));
            for (;;) {
              if (f === e) break t;
              if (
                (y === n && ++c === l && (a = i),
                y === s && ++m === r && (u = i),
                (v = f.nextSibling) !== null)
              )
                break;
              ((f = y), (y = f.parentNode));
            }
            f = v;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Wi = { focusedElem: e, selectionRange: n }, Vl = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (L = e));
    else
      for (; L !== null; ) {
        t = L;
        try {
          var N = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (N !== null) {
                  var w = N.memoizedProps,
                    j = N.memoizedState,
                    g = t.stateNode,
                    d = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : ct(t.type, w),
                      j,
                    );
                  g.__reactInternalSnapshotBeforeUpdate = d;
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
                throw Error(T(163));
            }
        } catch (S) {
          de(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (L = e));
          break;
        }
        L = t.return;
      }
  return ((N = wu), (wu = !1), N);
}
function Or(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var s = l.destroy;
        ((l.destroy = void 0), s !== void 0 && so(t, n, s));
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ps(e, t) {
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
function Id(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Id(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[wt], delete t[Br], delete t[Vi], delete t[Em], delete t[Cm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Ad(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Nu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ad(e.return)) return null;
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
function oo(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Gl)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (oo(e, t, n), e = e.sibling; e !== null; )
      (oo(e, t, n), (e = e.sibling));
}
function ao(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ao(e, t, n), e = e.sibling; e !== null; )
      (ao(e, t, n), (e = e.sibling));
}
var Ne = null,
  dt = !1;
function Rt(e, t, n) {
  for (n = n.child; n !== null; ) (Ud(e, t, n), (n = n.sibling));
}
function Ud(e, t, n) {
  if (Nt && typeof Nt.onCommitFiberUnmount == "function")
    try {
      Nt.onCommitFiberUnmount(ws, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ee || Un(n, t);
    case 6:
      var r = Ne,
        l = dt;
      ((Ne = null),
        Rt(e, t, n),
        (Ne = r),
        (dt = l),
        Ne !== null &&
          (dt
            ? ((e = Ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ne.removeChild(n.stateNode)));
      break;
    case 18:
      Ne !== null &&
        (dt
          ? ((e = Ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? li(e.parentNode, n)
              : e.nodeType === 1 && li(e, n),
            Ar(e))
          : li(Ne, n.stateNode));
      break;
    case 4:
      ((r = Ne),
        (l = dt),
        (Ne = n.stateNode.containerInfo),
        (dt = !0),
        Rt(e, t, n),
        (Ne = r),
        (dt = l));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ee &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var s = l,
            i = s.destroy;
          ((s = s.tag),
            i !== void 0 && (s & 2 || s & 4) && so(n, t, i),
            (l = l.next));
        } while (l !== r);
      }
      Rt(e, t, n);
      break;
    case 1:
      if (
        !Ee &&
        (Un(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          de(n, t, a);
        }
      Rt(e, t, n);
      break;
    case 21:
      Rt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ee = (r = Ee) || n.memoizedState !== null), Rt(e, t, n), (Ee = r))
        : Rt(e, t, n);
      break;
    default:
      Rt(e, t, n);
  }
}
function Su(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new Wm()),
      t.forEach(function (r) {
        var l = Zm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      }));
  }
}
function ut(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var s = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((Ne = a.stateNode), (dt = !1));
              break e;
            case 3:
              ((Ne = a.stateNode.containerInfo), (dt = !0));
              break e;
            case 4:
              ((Ne = a.stateNode.containerInfo), (dt = !0));
              break e;
          }
          a = a.return;
        }
        if (Ne === null) throw Error(T(160));
        (Ud(s, i, l), (Ne = null), (dt = !1));
        var u = l.alternate;
        (u !== null && (u.return = null), (l.return = null));
      } catch (c) {
        de(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Hd(t, e), (t = t.sibling));
}
function Hd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ut(t, e), vt(e), r & 4)) {
        try {
          (Or(3, e, e.return), Ps(3, e));
        } catch (w) {
          de(e, e.return, w);
        }
        try {
          Or(5, e, e.return);
        } catch (w) {
          de(e, e.return, w);
        }
      }
      break;
    case 1:
      (ut(t, e), vt(e), r & 512 && n !== null && Un(n, n.return));
      break;
    case 5:
      if (
        (ut(t, e),
        vt(e),
        r & 512 && n !== null && Un(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          $r(l, "");
        } catch (w) {
          de(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var s = e.memoizedProps,
          i = n !== null ? n.memoizedProps : s,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            (a === "input" && s.type === "radio" && s.name != null && cc(l, s),
              Mi(a, i));
            var c = Mi(a, s);
            for (i = 0; i < u.length; i += 2) {
              var m = u[i],
                f = u[i + 1];
              m === "style"
                ? hc(l, f)
                : m === "dangerouslySetInnerHTML"
                  ? pc(l, f)
                  : m === "children"
                    ? $r(l, f)
                    : Po(l, m, f, c);
            }
            switch (a) {
              case "input":
                Ci(l, s);
                break;
              case "textarea":
                dc(l, s);
                break;
              case "select":
                var y = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!s.multiple;
                var v = s.value;
                v != null
                  ? Wn(l, !!s.multiple, v, !1)
                  : y !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Wn(l, !!s.multiple, s.defaultValue, !0)
                      : Wn(l, !!s.multiple, s.multiple ? [] : "", !1));
            }
            l[Br] = s;
          } catch (w) {
            de(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((ut(t, e), vt(e), r & 4)) {
        if (e.stateNode === null) throw Error(T(162));
        ((l = e.stateNode), (s = e.memoizedProps));
        try {
          l.nodeValue = s;
        } catch (w) {
          de(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (ut(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ar(t.containerInfo);
        } catch (w) {
          de(e, e.return, w);
        }
      break;
    case 4:
      (ut(t, e), vt(e));
      break;
    case 13:
      (ut(t, e),
        vt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((s = l.memoizedState !== null),
          (l.stateNode.isHidden = s),
          !s ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (oa = fe())),
        r & 4 && Su(e));
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ee = (c = Ee) || m), ut(t, e), (Ee = c)) : ut(t, e),
        vt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !m && e.mode & 1)
        )
          for (L = e, m = e.child; m !== null; ) {
            for (f = L = m; L !== null; ) {
              switch (((y = L), (v = y.child), y.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Or(4, y, y.return);
                  break;
                case 1:
                  Un(y, y.return);
                  var N = y.stateNode;
                  if (typeof N.componentWillUnmount == "function") {
                    ((r = y), (n = y.return));
                    try {
                      ((t = r),
                        (N.props = t.memoizedProps),
                        (N.state = t.memoizedState),
                        N.componentWillUnmount());
                    } catch (w) {
                      de(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Un(y, y.return);
                  break;
                case 22:
                  if (y.memoizedState !== null) {
                    ju(f);
                    continue;
                  }
              }
              v !== null ? ((v.return = y), (L = v)) : ju(f);
            }
            m = m.sibling;
          }
        e: for (m = null, f = e; ; ) {
          if (f.tag === 5) {
            if (m === null) {
              m = f;
              try {
                ((l = f.stateNode),
                  c
                    ? ((s = l.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = f.stateNode),
                      (u = f.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = mc("display", i))));
              } catch (w) {
                de(e, e.return, w);
              }
            }
          } else if (f.tag === 6) {
            if (m === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (w) {
                de(e, e.return, w);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ((f.child.return = f), (f = f.child));
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            (m === f && (m = null), (f = f.return));
          }
          (m === f && (m = null),
            (f.sibling.return = f.return),
            (f = f.sibling));
        }
      }
      break;
    case 19:
      (ut(t, e), vt(e), r & 4 && Su(e));
      break;
    case 21:
      break;
    default:
      (ut(t, e), vt(e));
  }
}
function vt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ad(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(T(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && ($r(l, ""), (r.flags &= -33));
          var s = Nu(e);
          ao(e, s, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = Nu(e);
          oo(e, a, i);
          break;
        default:
          throw Error(T(161));
      }
    } catch (u) {
      de(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Bm(e, t, n) {
  ((L = e), Wd(e));
}
function Wd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var l = L,
      s = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || kl;
      if (!i) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || Ee;
        a = kl;
        var c = Ee;
        if (((kl = i), (Ee = u) && !c))
          for (L = l; L !== null; )
            ((i = L),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? bu(l)
                : u !== null
                  ? ((u.return = i), (L = u))
                  : bu(l));
        for (; s !== null; ) ((L = s), Wd(s), (s = s.sibling));
        ((L = l), (kl = a), (Ee = c));
      }
      ku(e);
    } else
      l.subtreeFlags & 8772 && s !== null ? ((s.return = l), (L = s)) : ku(e);
  }
}
function ku(e) {
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
              Ee || Ps(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ee)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ct(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = t.updateQueue;
              s !== null && ou(t, s, r);
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
                ou(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
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
                  var m = c.memoizedState;
                  if (m !== null) {
                    var f = m.dehydrated;
                    f !== null && Ar(f);
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
              throw Error(T(163));
          }
        Ee || (t.flags & 512 && io(t));
      } catch (y) {
        de(t, t.return, y);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (L = n));
      break;
    }
    L = t.return;
  }
}
function ju(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (L = n));
      break;
    }
    L = t.return;
  }
}
function bu(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ps(4, t);
          } catch (u) {
            de(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              de(t, l, u);
            }
          }
          var s = t.return;
          try {
            io(t);
          } catch (u) {
            de(t, s, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            io(t);
          } catch (u) {
            de(t, i, u);
          }
      }
    } catch (u) {
      de(t, t.return, u);
    }
    if (t === e) {
      L = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (L = a));
      break;
    }
    L = t.return;
  }
}
var Vm = Math.ceil,
  is = $t.ReactCurrentDispatcher,
  sa = $t.ReactCurrentOwner,
  nt = $t.ReactCurrentBatchConfig,
  Q = 0,
  xe = null,
  pe = null,
  Se = 0,
  Ue = 0,
  Hn = sn(0),
  ge = 0,
  Xr = null,
  kn = 0,
  Ts = 0,
  ia = 0,
  Mr = null,
  Fe = null,
  oa = 0,
  nr = 1 / 0,
  bt = null,
  os = !1,
  uo = null,
  Zt = null,
  jl = !1,
  Vt = null,
  as = 0,
  _r = 0,
  co = null,
  Rl = -1,
  zl = 0;
function Me() {
  return Q & 6 ? fe() : Rl !== -1 ? Rl : (Rl = fe());
}
function en(e) {
  return e.mode & 1
    ? Q & 2 && Se !== 0
      ? Se & -Se
      : Tm.transition !== null
        ? (zl === 0 && (zl = Cc()), zl)
        : ((e = X),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Lc(e.type))),
          e)
    : 1;
}
function mt(e, t, n, r) {
  if (50 < _r) throw ((_r = 0), (co = null), Error(T(185)));
  (tl(e, n, r),
    (!(Q & 2) || e !== xe) &&
      (e === xe && (!(Q & 2) && (Ts |= n), ge === 4 && Wt(e, Se)),
      Ie(e, r),
      n === 1 && Q === 0 && !(t.mode & 1) && ((nr = fe() + 500), bs && on())));
}
function Ie(e, t) {
  var n = e.callbackNode;
  Tp(e, t);
  var r = Bl(e, e === xe ? Se : 0);
  if (r === 0)
    (n !== null && La(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && La(n), t === 1))
      (e.tag === 0 ? Pm(Eu.bind(null, e)) : Zc(Eu.bind(null, e)),
        jm(function () {
          !(Q & 6) && on();
        }),
        (n = null));
    else {
      switch (Pc(r)) {
        case 1:
          n = _o;
          break;
        case 4:
          n = bc;
          break;
        case 16:
          n = ql;
          break;
        case 536870912:
          n = Ec;
          break;
        default:
          n = ql;
      }
      n = Xd(n, qd.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function qd(e, t) {
  if (((Rl = -1), (zl = 0), Q & 6)) throw Error(T(327));
  var n = e.callbackNode;
  if (Yn() && e.callbackNode !== n) return null;
  var r = Bl(e, e === xe ? Se : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = us(e, r);
  else {
    t = r;
    var l = Q;
    Q |= 2;
    var s = Vd();
    (xe !== e || Se !== t) && ((bt = null), (nr = fe() + 500), yn(e, t));
    do
      try {
        Gm();
        break;
      } catch (a) {
        Bd(e, a);
      }
    while (!0);
    (Vo(),
      (is.current = s),
      (Q = l),
      pe !== null ? (t = 0) : ((xe = null), (Se = 0), (t = ge)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ri(e)), l !== 0 && ((r = l), (t = fo(e, l)))), t === 1)
    )
      throw ((n = Xr), yn(e, 0), Wt(e, r), Ie(e, fe()), n);
    if (t === 6) Wt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Qm(l) &&
          ((t = us(e, r)),
          t === 2 && ((s = Ri(e)), s !== 0 && ((r = s), (t = fo(e, s)))),
          t === 1))
      )
        throw ((n = Xr), yn(e, 0), Wt(e, r), Ie(e, fe()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          un(e, Fe, bt);
          break;
        case 3:
          if (
            (Wt(e, r), (r & 130023424) === r && ((t = oa + 500 - fe()), 10 < t))
          ) {
            if (Bl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              (Me(), (e.pingedLanes |= e.suspendedLanes & l));
              break;
            }
            e.timeoutHandle = Bi(un.bind(null, e, Fe, bt), t);
            break;
          }
          un(e, Fe, bt);
          break;
        case 4:
          if ((Wt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - pt(r);
            ((s = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~s));
          }
          if (
            ((r = l),
            (r = fe() - r),
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
                          : 1960 * Vm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Bi(un.bind(null, e, Fe, bt), r);
            break;
          }
          un(e, Fe, bt);
          break;
        case 5:
          un(e, Fe, bt);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return (Ie(e, fe()), e.callbackNode === n ? qd.bind(null, e) : null);
}
function fo(e, t) {
  var n = Mr;
  return (
    e.current.memoizedState.isDehydrated && (yn(e, t).flags |= 256),
    (e = us(e, t)),
    e !== 2 && ((t = Fe), (Fe = n), t !== null && po(t)),
    e
  );
}
function po(e) {
  Fe === null ? (Fe = e) : Fe.push.apply(Fe, e);
}
function Qm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            s = l.getSnapshot;
          l = l.value;
          try {
            if (!ht(s(), l)) return !1;
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
function Wt(e, t) {
  for (
    t &= ~ia,
      t &= ~Ts,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - pt(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Eu(e) {
  if (Q & 6) throw Error(T(327));
  Yn();
  var t = Bl(e, 0);
  if (!(t & 1)) return (Ie(e, fe()), null);
  var n = us(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ri(e);
    r !== 0 && ((t = r), (n = fo(e, r)));
  }
  if (n === 1) throw ((n = Xr), yn(e, 0), Wt(e, t), Ie(e, fe()), n);
  if (n === 6) throw Error(T(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    un(e, Fe, bt),
    Ie(e, fe()),
    null
  );
}
function aa(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    ((Q = n), Q === 0 && ((nr = fe() + 500), bs && on()));
  }
}
function jn(e) {
  Vt !== null && Vt.tag === 0 && !(Q & 6) && Yn();
  var t = Q;
  Q |= 1;
  var n = nt.transition,
    r = X;
  try {
    if (((nt.transition = null), (X = 1), e)) return e();
  } finally {
    ((X = r), (nt.transition = n), (Q = t), !(Q & 6) && on());
  }
}
function ua() {
  ((Ue = Hn.current), re(Hn));
}
function yn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), km(n)), pe !== null))
    for (n = pe.return; n !== null; ) {
      var r = n;
      switch ((Wo(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && Kl());
          break;
        case 3:
          (er(), re(Re), re(Pe), Jo());
          break;
        case 5:
          Xo(r);
          break;
        case 4:
          er();
          break;
        case 13:
          re(ae);
          break;
        case 19:
          re(ae);
          break;
        case 10:
          Qo(r.type._context);
          break;
        case 22:
        case 23:
          ua();
      }
      n = n.return;
    }
  if (
    ((xe = e),
    (pe = e = tn(e.current, null)),
    (Se = Ue = t),
    (ge = 0),
    (Xr = null),
    (ia = Ts = kn = 0),
    (Fe = Mr = null),
    pn !== null)
  ) {
    for (t = 0; t < pn.length; t++)
      if (((n = pn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          s = n.pending;
        if (s !== null) {
          var i = s.next;
          ((s.next = l), (r.next = i));
        }
        n.pending = r;
      }
    pn = null;
  }
  return e;
}
function Bd(e, t) {
  do {
    var n = pe;
    try {
      if ((Vo(), (Ll.current = ss), ls)) {
        for (var r = ue.memoizedState; r !== null; ) {
          var l = r.queue;
          (l !== null && (l.pending = null), (r = r.next));
        }
        ls = !1;
      }
      if (
        ((Sn = 0),
        (ve = he = ue = null),
        (Dr = !1),
        (Yr = 0),
        (sa.current = null),
        n === null || n.return === null)
      ) {
        ((ge = 1), (Xr = t), (pe = null));
        break;
      }
      e: {
        var s = e,
          i = n.return,
          a = n,
          u = t;
        if (
          ((t = Se),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            m = a,
            f = m.tag;
          if (!(m.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var y = m.alternate;
            y
              ? ((m.updateQueue = y.updateQueue),
                (m.memoizedState = y.memoizedState),
                (m.lanes = y.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var v = pu(i);
          if (v !== null) {
            ((v.flags &= -257),
              mu(v, i, a, s, t),
              v.mode & 1 && fu(s, c, t),
              (t = v),
              (u = c));
            var N = t.updateQueue;
            if (N === null) {
              var w = new Set();
              (w.add(u), (t.updateQueue = w));
            } else N.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              (fu(s, c, t), ca());
              break e;
            }
            u = Error(T(426));
          }
        } else if (se && a.mode & 1) {
          var j = pu(i);
          if (j !== null) {
            (!(j.flags & 65536) && (j.flags |= 256),
              mu(j, i, a, s, t),
              qo(tr(u, a)));
            break e;
          }
        }
        ((s = u = tr(u, a)),
          ge !== 4 && (ge = 2),
          Mr === null ? (Mr = [s]) : Mr.push(s),
          (s = i));
        do {
          switch (s.tag) {
            case 3:
              ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
              var g = Pd(s, u, t);
              iu(s, g);
              break e;
            case 1:
              a = u;
              var d = s.type,
                h = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Zt === null || !Zt.has(h))))
              ) {
                ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                var S = Td(s, a, t);
                iu(s, S);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Yd(n);
    } catch (x) {
      ((t = x), pe === n && n !== null && (pe = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Vd() {
  var e = is.current;
  return ((is.current = ss), e === null ? ss : e);
}
function ca() {
  ((ge === 0 || ge === 3 || ge === 2) && (ge = 4),
    xe === null || (!(kn & 268435455) && !(Ts & 268435455)) || Wt(xe, Se));
}
function us(e, t) {
  var n = Q;
  Q |= 2;
  var r = Vd();
  (xe !== e || Se !== t) && ((bt = null), yn(e, t));
  do
    try {
      Ym();
      break;
    } catch (l) {
      Bd(e, l);
    }
  while (!0);
  if ((Vo(), (Q = n), (is.current = r), pe !== null)) throw Error(T(261));
  return ((xe = null), (Se = 0), ge);
}
function Ym() {
  for (; pe !== null; ) Qd(pe);
}
function Gm() {
  for (; pe !== null && !wp(); ) Qd(pe);
}
function Qd(e) {
  var t = Kd(e.alternate, e, Ue);
  ((e.memoizedProps = e.pendingProps),
    t === null ? Yd(e) : (pe = t),
    (sa.current = null));
}
function Yd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Hm(n, t)), n !== null)) {
        ((n.flags &= 32767), (pe = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((ge = 6), (pe = null));
        return;
      }
    } else if (((n = Um(n, t, Ue)), n !== null)) {
      pe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      pe = t;
      return;
    }
    pe = t = e;
  } while (t !== null);
  ge === 0 && (ge = 5);
}
function un(e, t, n) {
  var r = X,
    l = nt.transition;
  try {
    ((nt.transition = null), (X = 1), Km(e, t, n, r));
  } finally {
    ((nt.transition = l), (X = r));
  }
  return null;
}
function Km(e, t, n, r) {
  do Yn();
  while (Vt !== null);
  if (Q & 6) throw Error(T(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(T(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var s = n.lanes | n.childLanes;
  if (
    (Dp(e, s),
    e === xe && ((pe = xe = null), (Se = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      jl ||
      ((jl = !0),
      Xd(ql, function () {
        return (Yn(), null);
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    ((s = nt.transition), (nt.transition = null));
    var i = X;
    X = 1;
    var a = Q;
    ((Q |= 4),
      (sa.current = null),
      qm(e, n),
      Hd(n, e),
      gm(Wi),
      (Vl = !!Hi),
      (Wi = Hi = null),
      (e.current = n),
      Bm(n),
      Np(),
      (Q = a),
      (X = i),
      (nt.transition = s));
  } else e.current = n;
  if (
    (jl && ((jl = !1), (Vt = e), (as = l)),
    (s = e.pendingLanes),
    s === 0 && (Zt = null),
    jp(n.stateNode),
    Ie(e, fe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
  if (os) throw ((os = !1), (e = uo), (uo = null), e);
  return (
    as & 1 && e.tag !== 0 && Yn(),
    (s = e.pendingLanes),
    s & 1 ? (e === co ? _r++ : ((_r = 0), (co = e))) : (_r = 0),
    on(),
    null
  );
}
function Yn() {
  if (Vt !== null) {
    var e = Pc(as),
      t = nt.transition,
      n = X;
    try {
      if (((nt.transition = null), (X = 16 > e ? 16 : e), Vt === null))
        var r = !1;
      else {
        if (((e = Vt), (Vt = null), (as = 0), Q & 6)) throw Error(T(331));
        var l = Q;
        for (Q |= 4, L = e.current; L !== null; ) {
          var s = L,
            i = s.child;
          if (L.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var c = a[u];
                for (L = c; L !== null; ) {
                  var m = L;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Or(8, m, s);
                  }
                  var f = m.child;
                  if (f !== null) ((f.return = m), (L = f));
                  else
                    for (; L !== null; ) {
                      m = L;
                      var y = m.sibling,
                        v = m.return;
                      if ((Id(m), m === c)) {
                        L = null;
                        break;
                      }
                      if (y !== null) {
                        ((y.return = v), (L = y));
                        break;
                      }
                      L = v;
                    }
                }
              }
              var N = s.alternate;
              if (N !== null) {
                var w = N.child;
                if (w !== null) {
                  N.child = null;
                  do {
                    var j = w.sibling;
                    ((w.sibling = null), (w = j));
                  } while (w !== null);
                }
              }
              L = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) ((i.return = s), (L = i));
          else
            e: for (; L !== null; ) {
              if (((s = L), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Or(9, s, s.return);
                }
              var g = s.sibling;
              if (g !== null) {
                ((g.return = s.return), (L = g));
                break e;
              }
              L = s.return;
            }
        }
        var d = e.current;
        for (L = d; L !== null; ) {
          i = L;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null) ((h.return = i), (L = h));
          else
            e: for (i = d; L !== null; ) {
              if (((a = L), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ps(9, a);
                  }
                } catch (x) {
                  de(a, a.return, x);
                }
              if (a === i) {
                L = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                ((S.return = a.return), (L = S));
                break e;
              }
              L = a.return;
            }
        }
        if (
          ((Q = l), on(), Nt && typeof Nt.onPostCommitFiberRoot == "function")
        )
          try {
            Nt.onPostCommitFiberRoot(ws, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((X = n), (nt.transition = t));
    }
  }
  return !1;
}
function Cu(e, t, n) {
  ((t = tr(n, t)),
    (t = Pd(e, t, 1)),
    (e = Jt(e, t, 1)),
    (t = Me()),
    e !== null && (tl(e, 1, t), Ie(e, t)));
}
function de(e, t, n) {
  if (e.tag === 3) Cu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Cu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Zt === null || !Zt.has(r)))
        ) {
          ((e = tr(n, e)),
            (e = Td(t, e, 1)),
            (t = Jt(t, e, 1)),
            (e = Me()),
            t !== null && (tl(t, 1, e), Ie(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function Xm(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    xe === e &&
      (Se & n) === n &&
      (ge === 4 || (ge === 3 && (Se & 130023424) === Se && 500 > fe() - oa)
        ? yn(e, 0)
        : (ia |= n)),
    Ie(e, t));
}
function Gd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ml), (ml <<= 1), !(ml & 130023424) && (ml = 4194304))
      : (t = 1));
  var n = Me();
  ((e = Lt(e, t)), e !== null && (tl(e, t, n), Ie(e, n)));
}
function Jm(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Gd(e, n));
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
      throw Error(T(314));
  }
  (r !== null && r.delete(t), Gd(e, n));
}
var Kd;
Kd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Re.current) $e = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (($e = !1), Am(e, t, n));
      $e = !!(e.flags & 131072);
    }
  else (($e = !1), se && t.flags & 1048576 && ed(t, Zl, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ($l(e, t), (e = t.pendingProps));
      var l = Xn(t, Pe.current);
      (Qn(t, n), (l = ea(null, t, r, e, l, n)));
      var s = ta();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ze(r) ? ((s = !0), Xl(t)) : (s = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Go(t),
            (l.updater = Cs),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ji(t, r, e, n),
            (t = to(null, t, r, !0, s, n)))
          : ((t.tag = 0), se && s && Ho(t), De(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          ($l(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = th(r)),
          (e = ct(r, e)),
          l)
        ) {
          case 0:
            t = eo(null, t, r, e, n);
            break e;
          case 1:
            t = yu(null, t, r, e, n);
            break e;
          case 11:
            t = hu(null, t, r, e, n);
            break e;
          case 14:
            t = gu(null, t, r, ct(r.type, e), n);
            break e;
        }
        throw Error(T(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        eo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        yu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((_d(t), e === null)) throw Error(T(387));
        ((r = t.pendingProps),
          (s = t.memoizedState),
          (l = s.element),
          id(e, t),
          ns(t, r, null, n));
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
            ((l = tr(Error(T(423)), t)), (t = vu(e, t, r, n, l)));
            break e;
          } else if (r !== l) {
            ((l = tr(Error(T(424)), t)), (t = vu(e, t, r, n, l)));
            break e;
          } else
            for (
              We = Xt(t.stateNode.containerInfo.firstChild),
                qe = t,
                se = !0,
                ft = null,
                n = ld(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Jn(), r === l)) {
            t = Ft(e, t, n);
            break e;
          }
          De(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        od(t),
        e === null && Gi(t),
        (r = t.type),
        (l = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (i = l.children),
        qi(r, l) ? (i = null) : s !== null && qi(r, s) && (t.flags |= 32),
        Md(e, t),
        De(e, t, i, n),
        t.child
      );
    case 6:
      return (e === null && Gi(t), null);
    case 13:
      return Ld(e, t, n);
    case 4:
      return (
        Ko(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Zn(t, null, r, n)) : De(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        hu(e, t, r, l, n)
      );
    case 7:
      return (De(e, t, t.pendingProps, n), t.child);
    case 8:
      return (De(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (De(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (s = t.memoizedProps),
          (i = l.value),
          te(es, r._currentValue),
          (r._currentValue = i),
          s !== null)
        )
          if (ht(s.value, i)) {
            if (s.children === l.children && !Re.current) {
              t = Ft(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                i = s.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (s.tag === 1) {
                      ((u = Tt(-1, n & -n)), (u.tag = 2));
                      var c = s.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var m = c.pending;
                        (m === null
                          ? (u.next = u)
                          : ((u.next = m.next), (m.next = u)),
                          (c.pending = u));
                      }
                    }
                    ((s.lanes |= n),
                      (u = s.alternate),
                      u !== null && (u.lanes |= n),
                      Ki(s.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  u = u.next;
                }
              } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((i = s.return), i === null)) throw Error(T(341));
                ((i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  Ki(i, n, t),
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
        (De(e, t, l.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Qn(t, n),
        (l = rt(l)),
        (r = r(l)),
        (t.flags |= 1),
        De(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ct(r, t.pendingProps)),
        (l = ct(r.type, l)),
        gu(e, t, r, l, n)
      );
    case 15:
      return Dd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ct(r, l)),
        $l(e, t),
        (t.tag = 1),
        ze(r) ? ((e = !0), Xl(t)) : (e = !1),
        Qn(t, n),
        Cd(t, r, l),
        Ji(t, r, l, n),
        to(null, t, r, !0, e, n)
      );
    case 19:
      return Fd(e, t, n);
    case 22:
      return Od(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function Xd(e, t) {
  return jc(e, t);
}
function eh(e, t, n, r) {
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
function tt(e, t, n, r) {
  return new eh(e, t, n, r);
}
function da(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function th(e) {
  if (typeof e == "function") return da(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Do)) return 11;
    if (e === Oo) return 14;
  }
  return 2;
}
function tn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = tt(e.tag, t, e.key, e.mode)),
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
function Il(e, t, n, r, l, s) {
  var i = 2;
  if (((r = e), typeof e == "function")) da(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Mn:
        return vn(n.children, l, s, t);
      case To:
        ((i = 8), (l |= 8));
        break;
      case Si:
        return (
          (e = tt(12, n, t, l | 2)),
          (e.elementType = Si),
          (e.lanes = s),
          e
        );
      case ki:
        return ((e = tt(13, n, t, l)), (e.elementType = ki), (e.lanes = s), e);
      case ji:
        return ((e = tt(19, n, t, l)), (e.elementType = ji), (e.lanes = s), e);
      case oc:
        return Ds(n, l, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case sc:
              i = 10;
              break e;
            case ic:
              i = 9;
              break e;
            case Do:
              i = 11;
              break e;
            case Oo:
              i = 14;
              break e;
            case At:
              ((i = 16), (r = null));
              break e;
          }
        throw Error(T(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = tt(i, n, t, l)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = s),
    t
  );
}
function vn(e, t, n, r) {
  return ((e = tt(7, e, r, t)), (e.lanes = n), e);
}
function Ds(e, t, n, r) {
  return (
    (e = tt(22, e, r, t)),
    (e.elementType = oc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function fi(e, t, n) {
  return ((e = tt(6, e, null, t)), (e.lanes = n), e);
}
function pi(e, t, n) {
  return (
    (t = tt(4, e.children !== null ? e.children : [], e.key, t)),
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
    (this.eventTimes = Qs(0)),
    (this.expirationTimes = Qs(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Qs(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null));
}
function fa(e, t, n, r, l, s, i, a, u) {
  return (
    (e = new nh(e, t, n, a, u)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = tt(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Go(s),
    e
  );
}
function rh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: On,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Jd(e) {
  if (!e) return rn;
  e = e._reactInternals;
  e: {
    if (Cn(e) !== e || e.tag !== 1) throw Error(T(170));
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
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ze(n)) return Jc(e, n, t);
  }
  return t;
}
function Zd(e, t, n, r, l, s, i, a, u) {
  return (
    (e = fa(n, r, !0, e, l, s, i, a, u)),
    (e.context = Jd(null)),
    (n = e.current),
    (r = Me()),
    (l = en(n)),
    (s = Tt(r, l)),
    (s.callback = t ?? null),
    Jt(n, s, l),
    (e.current.lanes = l),
    tl(e, l, r),
    Ie(e, r),
    e
  );
}
function Os(e, t, n, r) {
  var l = t.current,
    s = Me(),
    i = en(l);
  return (
    (n = Jd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Tt(s, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Jt(l, t, i)),
    e !== null && (mt(e, l, i, s), _l(e, l, i)),
    i
  );
}
function cs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Pu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function pa(e, t) {
  (Pu(e, t), (e = e.alternate) && Pu(e, t));
}
function lh() {
  return null;
}
var ef =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ma(e) {
  this._internalRoot = e;
}
Ms.prototype.render = ma.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(T(409));
  Os(e, t, null, null);
};
Ms.prototype.unmount = ma.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (jn(function () {
      Os(null, e, null, null);
    }),
      (t[_t] = null));
  }
};
function Ms(e) {
  this._internalRoot = e;
}
Ms.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Oc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ht.length && t !== 0 && t < Ht[n].priority; n++);
    (Ht.splice(n, 0, e), n === 0 && _c(e));
  }
};
function ha(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function _s(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Tu() {}
function sh(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = cs(i);
        s.call(c);
      };
    }
    var i = Zd(t, r, e, 0, null, !1, !1, "", Tu);
    return (
      (e._reactRootContainer = i),
      (e[_t] = i.current),
      Wr(e.nodeType === 8 ? e.parentNode : e),
      jn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = cs(u);
      a.call(c);
    };
  }
  var u = fa(e, 0, !1, null, null, !1, !1, "", Tu);
  return (
    (e._reactRootContainer = u),
    (e[_t] = u.current),
    Wr(e.nodeType === 8 ? e.parentNode : e),
    jn(function () {
      Os(t, u, n, r);
    }),
    u
  );
}
function Ls(e, t, n, r, l) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var u = cs(i);
        a.call(u);
      };
    }
    Os(t, i, e, l);
  } else i = sh(n, t, e, l, r);
  return cs(i);
}
Tc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Sr(t.pendingLanes);
        n !== 0 &&
          (Lo(t, n | 1), Ie(t, fe()), !(Q & 6) && ((nr = fe() + 500), on()));
      }
      break;
    case 13:
      (jn(function () {
        var r = Lt(e, 1);
        if (r !== null) {
          var l = Me();
          mt(r, e, 1, l);
        }
      }),
        pa(e, 1));
  }
};
Fo = function (e) {
  if (e.tag === 13) {
    var t = Lt(e, 134217728);
    if (t !== null) {
      var n = Me();
      mt(t, e, 134217728, n);
    }
    pa(e, 134217728);
  }
};
Dc = function (e) {
  if (e.tag === 13) {
    var t = en(e),
      n = Lt(e, t);
    if (n !== null) {
      var r = Me();
      mt(n, e, t, r);
    }
    pa(e, t);
  }
};
Oc = function () {
  return X;
};
Mc = function (e, t) {
  var n = X;
  try {
    return ((X = e), t());
  } finally {
    X = n;
  }
};
Li = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ci(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = js(r);
            if (!l) throw Error(T(90));
            (uc(r), Ci(r, l));
          }
        }
      }
      break;
    case "textarea":
      dc(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Wn(e, !!n.multiple, t, !1));
  }
};
vc = aa;
xc = jn;
var ih = { usingClientEntryPoint: !1, Events: [rl, $n, js, gc, yc, aa] },
  hr = {
    findFiberByHostInstance: fn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  oh = {
    bundleType: hr.bundleType,
    version: hr.version,
    rendererPackageName: hr.rendererPackageName,
    rendererConfig: hr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: $t.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Sc(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: hr.findFiberByHostInstance || lh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var bl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!bl.isDisabled && bl.supportsFiber)
    try {
      ((ws = bl.inject(oh)), (Nt = bl));
    } catch {}
}
Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ih;
Ve.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ha(t)) throw Error(T(200));
  return rh(e, t, null, n);
};
Ve.createRoot = function (e, t) {
  if (!ha(e)) throw Error(T(299));
  var n = !1,
    r = "",
    l = ef;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = fa(e, 1, !1, null, null, n, !1, r, l)),
    (e[_t] = t.current),
    Wr(e.nodeType === 8 ? e.parentNode : e),
    new ma(t)
  );
};
Ve.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(T(188))
      : ((e = Object.keys(e).join(",")), Error(T(268, e)));
  return ((e = Sc(t)), (e = e === null ? null : e.stateNode), e);
};
Ve.flushSync = function (e) {
  return jn(e);
};
Ve.hydrate = function (e, t, n) {
  if (!_s(t)) throw Error(T(200));
  return Ls(null, e, t, !0, n);
};
Ve.hydrateRoot = function (e, t, n) {
  if (!ha(e)) throw Error(T(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    s = "",
    i = ef;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Zd(t, null, e, 1, n ?? null, l, !1, s, i)),
    (e[_t] = t.current),
    Wr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l));
  return new Ms(t);
};
Ve.render = function (e, t, n) {
  if (!_s(t)) throw Error(T(200));
  return Ls(null, e, t, !1, n);
};
Ve.unmountComponentAtNode = function (e) {
  if (!_s(e)) throw Error(T(40));
  return e._reactRootContainer
    ? (jn(function () {
        Ls(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[_t] = null));
        });
      }),
      !0)
    : !1;
};
Ve.unstable_batchedUpdates = aa;
Ve.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!_s(n)) throw Error(T(200));
  if (e == null || e._reactInternals === void 0) throw Error(T(38));
  return Ls(e, t, n, !1, r);
};
Ve.version = "18.3.1-next-f1338f8080-20240426";
function tf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tf);
    } catch (e) {
      console.error(e);
    }
}
(tf(), (tc.exports = Ve));
var Fs = tc.exports,
  nf,
  Du = Fs;
((nf = Du.createRoot), Du.hydrateRoot);
function gt(e) {
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
function bn(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const rf = 6048e5,
  ah = 864e5;
let uh = {};
function $s() {
  return uh;
}
function Jr(e, t) {
  var a, u, c, m;
  const n = $s(),
    r =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((u = (a = t == null ? void 0 : t.locale) == null ? void 0 : a.options) ==
      null
        ? void 0
        : u.weekStartsOn) ??
      n.weekStartsOn ??
      ((m = (c = n.locale) == null ? void 0 : c.options) == null
        ? void 0
        : m.weekStartsOn) ??
      0,
    l = gt(e),
    s = l.getDay(),
    i = (s < r ? 7 : 0) + s - r;
  return (l.setDate(l.getDate() - i), l.setHours(0, 0, 0, 0), l);
}
function ds(e) {
  return Jr(e, { weekStartsOn: 1 });
}
function lf(e) {
  const t = gt(e),
    n = t.getFullYear(),
    r = bn(e, 0);
  (r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0));
  const l = ds(r),
    s = bn(e, 0);
  (s.setFullYear(n, 0, 4), s.setHours(0, 0, 0, 0));
  const i = ds(s);
  return t.getTime() >= l.getTime()
    ? n + 1
    : t.getTime() >= i.getTime()
      ? n
      : n - 1;
}
function Ou(e) {
  const t = gt(e);
  return (t.setHours(0, 0, 0, 0), t);
}
function Mu(e) {
  const t = gt(e),
    n = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds(),
      ),
    );
  return (n.setUTCFullYear(t.getFullYear()), +e - +n);
}
function ch(e, t) {
  const n = Ou(e),
    r = Ou(t),
    l = +n - Mu(n),
    s = +r - Mu(r);
  return Math.round((l - s) / ah);
}
function dh(e) {
  const t = lf(e),
    n = bn(e, 0);
  return (n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), ds(n));
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
  const t = gt(e);
  return !isNaN(Number(t));
}
function mh(e) {
  const t = gt(e),
    n = bn(e, 0);
  return (n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n);
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
function mi(e) {
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
    date: mi({ formats: yh, defaultWidth: "full" }),
    time: mi({ formats: vh, defaultWidth: "full" }),
    dateTime: mi({ formats: xh, defaultWidth: "full" }),
  },
  Nh = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  Sh = (e, t, n, r) => Nh[e];
function gr(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let l;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth,
        a = n != null && n.width ? String(n.width) : i;
      l = e.formattingValues[a] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth,
        a = n != null && n.width ? String(n.width) : e.defaultWidth;
      l = e.values[a] || e.values[i];
    }
    const s = e.argumentCallback ? e.argumentCallback(t) : t;
    return l[s];
  };
}
const kh = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  jh = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  bh = {
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
  Eh = {
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
  Ch = {
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
  Dh = {
    ordinalNumber: Th,
    era: gr({ values: kh, defaultWidth: "wide" }),
    quarter: gr({
      values: jh,
      defaultWidth: "wide",
      argumentCallback: (e) => e - 1,
    }),
    month: gr({ values: bh, defaultWidth: "wide" }),
    day: gr({ values: Eh, defaultWidth: "wide" }),
    dayPeriod: gr({
      values: Ch,
      defaultWidth: "wide",
      formattingValues: Ph,
      defaultFormattingWidth: "wide",
    }),
  };
function yr(e) {
  return (t, n = {}) => {
    const r = n.width,
      l = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      s = t.match(l);
    if (!s) return null;
    const i = s[0],
      a = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      u = Array.isArray(a) ? Mh(a, (f) => f.test(i)) : Oh(a, (f) => f.test(i));
    let c;
    ((c = e.valueCallback ? e.valueCallback(u) : u),
      (c = n.valueCallback ? n.valueCallback(c) : c));
    const m = t.slice(i.length);
    return { value: c, rest: m };
  };
}
function Oh(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function Mh(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function _h(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const l = r[0],
      s = t.match(e.parsePattern);
    if (!s) return null;
    let i = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const a = t.slice(l.length);
    return { value: i, rest: a };
  };
}
const Lh = /^(\d+)(th|st|nd|rd)?/i,
  Fh = /\d+/i,
  $h = {
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
  Vh = {
    ordinalNumber: _h({
      matchPattern: Lh,
      parsePattern: Fh,
      valueCallback: (e) => parseInt(e, 10),
    }),
    era: yr({
      matchPatterns: $h,
      defaultMatchWidth: "wide",
      parsePatterns: Rh,
      defaultParseWidth: "any",
    }),
    quarter: yr({
      matchPatterns: zh,
      defaultMatchWidth: "wide",
      parsePatterns: Ih,
      defaultParseWidth: "any",
      valueCallback: (e) => e + 1,
    }),
    month: yr({
      matchPatterns: Ah,
      defaultMatchWidth: "wide",
      parsePatterns: Uh,
      defaultParseWidth: "any",
    }),
    day: yr({
      matchPatterns: Hh,
      defaultMatchWidth: "wide",
      parsePatterns: Wh,
      defaultParseWidth: "any",
    }),
    dayPeriod: yr({
      matchPatterns: qh,
      defaultMatchWidth: "any",
      parsePatterns: Bh,
      defaultParseWidth: "any",
    }),
  },
  Qh = {
    code: "en-US",
    formatDistance: gh,
    formatLong: wh,
    formatRelative: Sh,
    localize: Dh,
    match: Vh,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function Yh(e) {
  const t = gt(e);
  return ch(t, mh(t)) + 1;
}
function Gh(e) {
  const t = gt(e),
    n = +ds(t) - +dh(t);
  return Math.round(n / rf) + 1;
}
function sf(e, t) {
  var m, f, y, v;
  const n = gt(e),
    r = n.getFullYear(),
    l = $s(),
    s =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((f = (m = t == null ? void 0 : t.locale) == null ? void 0 : m.options) ==
      null
        ? void 0
        : f.firstWeekContainsDate) ??
      l.firstWeekContainsDate ??
      ((v = (y = l.locale) == null ? void 0 : y.options) == null
        ? void 0
        : v.firstWeekContainsDate) ??
      1,
    i = bn(e, 0);
  (i.setFullYear(r + 1, 0, s), i.setHours(0, 0, 0, 0));
  const a = Jr(i, t),
    u = bn(e, 0);
  (u.setFullYear(r, 0, s), u.setHours(0, 0, 0, 0));
  const c = Jr(u, t);
  return n.getTime() >= a.getTime()
    ? r + 1
    : n.getTime() >= c.getTime()
      ? r
      : r - 1;
}
function Kh(e, t) {
  var a, u, c, m;
  const n = $s(),
    r =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((u = (a = t == null ? void 0 : t.locale) == null ? void 0 : a.options) ==
      null
        ? void 0
        : u.firstWeekContainsDate) ??
      n.firstWeekContainsDate ??
      ((m = (c = n.locale) == null ? void 0 : c.options) == null
        ? void 0
        : m.firstWeekContainsDate) ??
      1,
    l = sf(e, t),
    s = bn(e, 0);
  return (s.setFullYear(l, 0, r), s.setHours(0, 0, 0, 0), Jr(s, t));
}
function Xh(e, t) {
  const n = gt(e),
    r = +Jr(n, t) - +Kh(n, t);
  return Math.round(r / rf) + 1;
}
function K(e, t) {
  const n = e < 0 ? "-" : "",
    r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const zt = {
    y(e, t) {
      const n = e.getFullYear(),
        r = n > 0 ? n : 1 - n;
      return K(t === "yy" ? r % 100 : r, t.length);
    },
    M(e, t) {
      const n = e.getMonth();
      return t === "M" ? String(n + 1) : K(n + 1, 2);
    },
    d(e, t) {
      return K(e.getDate(), t.length);
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
      return K(e.getHours() % 12 || 12, t.length);
    },
    H(e, t) {
      return K(e.getHours(), t.length);
    },
    m(e, t) {
      return K(e.getMinutes(), t.length);
    },
    s(e, t) {
      return K(e.getSeconds(), t.length);
    },
    S(e, t) {
      const n = t.length,
        r = e.getMilliseconds(),
        l = Math.trunc(r * Math.pow(10, n - 3));
      return K(l, t.length);
    },
  },
  Dn = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  _u = {
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
      return zt.y(e, t);
    },
    Y: function (e, t, n, r) {
      const l = sf(e, r),
        s = l > 0 ? l : 1 - l;
      if (t === "YY") {
        const i = s % 100;
        return K(i, 2);
      }
      return t === "Yo" ? n.ordinalNumber(s, { unit: "year" }) : K(s, t.length);
    },
    R: function (e, t) {
      const n = lf(e);
      return K(n, t.length);
    },
    u: function (e, t) {
      const n = e.getFullYear();
      return K(n, t.length);
    },
    Q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case "Q":
          return String(r);
        case "QQ":
          return K(r, 2);
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
          return K(r, 2);
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
          return zt.M(e, t);
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
          return K(r + 1, 2);
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
      return t === "wo" ? n.ordinalNumber(l, { unit: "week" }) : K(l, t.length);
    },
    I: function (e, t, n) {
      const r = Gh(e);
      return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : K(r, t.length);
    },
    d: function (e, t, n) {
      return t === "do"
        ? n.ordinalNumber(e.getDate(), { unit: "date" })
        : zt.d(e, t);
    },
    D: function (e, t, n) {
      const r = Yh(e);
      return t === "Do"
        ? n.ordinalNumber(r, { unit: "dayOfYear" })
        : K(r, t.length);
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
        s = (l - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "e":
          return String(s);
        case "ee":
          return K(s, 2);
        case "eo":
          return n.ordinalNumber(s, { unit: "day" });
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
        s = (l - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "c":
          return String(s);
        case "cc":
          return K(s, t.length);
        case "co":
          return n.ordinalNumber(s, { unit: "day" });
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
          return K(l, t.length);
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
          ? (l = Dn.noon)
          : r === 0
            ? (l = Dn.midnight)
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
          ? (l = Dn.evening)
          : r >= 12
            ? (l = Dn.afternoon)
            : r >= 4
              ? (l = Dn.morning)
              : (l = Dn.night),
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
        return (r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" }));
      }
      return zt.h(e, t);
    },
    H: function (e, t, n) {
      return t === "Ho"
        ? n.ordinalNumber(e.getHours(), { unit: "hour" })
        : zt.H(e, t);
    },
    K: function (e, t, n) {
      const r = e.getHours() % 12;
      return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : K(r, t.length);
    },
    k: function (e, t, n) {
      let r = e.getHours();
      return (
        r === 0 && (r = 24),
        t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : K(r, t.length)
      );
    },
    m: function (e, t, n) {
      return t === "mo"
        ? n.ordinalNumber(e.getMinutes(), { unit: "minute" })
        : zt.m(e, t);
    },
    s: function (e, t, n) {
      return t === "so"
        ? n.ordinalNumber(e.getSeconds(), { unit: "second" })
        : zt.s(e, t);
    },
    S: function (e, t) {
      return zt.S(e, t);
    },
    X: function (e, t, n) {
      const r = e.getTimezoneOffset();
      if (r === 0) return "Z";
      switch (t) {
        case "X":
          return Fu(r);
        case "XXXX":
        case "XX":
          return cn(r);
        case "XXXXX":
        case "XXX":
        default:
          return cn(r, ":");
      }
    },
    x: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "x":
          return Fu(r);
        case "xxxx":
        case "xx":
          return cn(r);
        case "xxxxx":
        case "xxx":
        default:
          return cn(r, ":");
      }
    },
    O: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + Lu(r, ":");
        case "OOOO":
        default:
          return "GMT" + cn(r, ":");
      }
    },
    z: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + Lu(r, ":");
        case "zzzz":
        default:
          return "GMT" + cn(r, ":");
      }
    },
    t: function (e, t, n) {
      const r = Math.trunc(e.getTime() / 1e3);
      return K(r, t.length);
    },
    T: function (e, t, n) {
      const r = e.getTime();
      return K(r, t.length);
    },
  };
function Lu(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    l = Math.trunc(r / 60),
    s = r % 60;
  return s === 0 ? n + String(l) : n + String(l) + t + K(s, 2);
}
function Fu(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + K(Math.abs(e) / 60, 2) : cn(e, t);
}
function cn(e, t = "") {
  const n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    l = K(Math.trunc(r / 60), 2),
    s = K(r % 60, 2);
  return n + l + t + s;
}
const $u = (e, t) => {
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
  of = (e, t) => {
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
    if (!l) return $u(e, t);
    let s;
    switch (r) {
      case "P":
        s = t.dateTime({ width: "short" });
        break;
      case "PP":
        s = t.dateTime({ width: "medium" });
        break;
      case "PPP":
        s = t.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        s = t.dateTime({ width: "full" });
        break;
    }
    return s.replace("{{date}}", $u(r, t)).replace("{{time}}", of(l, t));
  },
  Zh = { p: of, P: Jh },
  e0 = /^D+$/,
  t0 = /^Y+$/,
  n0 = ["D", "DD", "YY", "YYYY"];
function r0(e) {
  return e0.test(e);
}
function l0(e) {
  return t0.test(e);
}
function s0(e, t, n) {
  const r = i0(e, t, n);
  if ((console.warn(r), n0.includes(e))) throw new RangeError(r);
}
function i0(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const o0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  a0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  u0 = /^'([^]*?)'?$/,
  c0 = /''/g,
  d0 = /[a-zA-Z]/;
function me(e, t, n) {
  var m, f, y, v;
  const r = $s(),
    l = r.locale ?? Qh,
    s =
      r.firstWeekContainsDate ??
      ((f = (m = r.locale) == null ? void 0 : m.options) == null
        ? void 0
        : f.firstWeekContainsDate) ??
      1,
    i =
      r.weekStartsOn ??
      ((v = (y = r.locale) == null ? void 0 : y.options) == null
        ? void 0
        : v.weekStartsOn) ??
      0,
    a = gt(e);
  if (!ph(a)) throw new RangeError("Invalid time value");
  let u = t
    .match(a0)
    .map((N) => {
      const w = N[0];
      if (w === "p" || w === "P") {
        const j = Zh[w];
        return j(N, l.formatLong);
      }
      return N;
    })
    .join("")
    .match(o0)
    .map((N) => {
      if (N === "''") return { isToken: !1, value: "'" };
      const w = N[0];
      if (w === "'") return { isToken: !1, value: f0(N) };
      if (_u[w]) return { isToken: !0, value: N };
      if (w.match(d0))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            w +
            "`",
        );
      return { isToken: !1, value: N };
    });
  l.localize.preprocessor && (u = l.localize.preprocessor(a, u));
  const c = { firstWeekContainsDate: s, weekStartsOn: i, locale: l };
  return u
    .map((N) => {
      if (!N.isToken) return N.value;
      const w = N.value;
      (l0(w) || r0(w)) && s0(w, t, String(e));
      const j = _u[w[0]];
      return j(a, w, l.localize, c);
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
  Te = (e, t) => {
    const n = p.forwardRef(
      (
        {
          color: r = "currentColor",
          size: l = 24,
          strokeWidth: s = 2,
          absoluteStrokeWidth: i,
          className: a = "",
          children: u,
          ...c
        },
        m,
      ) =>
        p.createElement(
          "svg",
          {
            ref: m,
            ...p0,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: i ? (Number(s) * 24) / Number(l) : s,
            className: ["lucide", `lucide-${m0(e)}`, a].join(" "),
            ...c,
          },
          [
            ...t.map(([f, y]) => p.createElement(f, y)),
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
 */ const Gn = Te("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const h0 = Te("AlertTriangle", [
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
 */ const fs = Te("Calendar", [
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
 */ const mo = Te("Camera", [
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
 */ const g0 = Te("CheckCircle2", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ru = Te("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zu = Te("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const y0 = Te("Globe", [
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
 */ const ps = Te("Hash", [
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
 */ const v0 = Te("Layers", [
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
 */ const x0 = Te("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const et = Te("Package", [
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
 */ const af = Te("Scan", [
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
 */ const uf = Te("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Iu = Te("Trash2", [
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
 */ const Zr = Te("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
var w0 = Object.defineProperty,
  N0 = (e, t, n) =>
    t in e
      ? w0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  hi = (e, t, n) => (N0(e, typeof t != "symbol" ? t + "" : t, n), n);
let S0 = class {
    constructor() {
      (hi(this, "current", this.detect()),
        hi(this, "handoffState", "pending"),
        hi(this, "currentId", 0));
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
  Dt = new S0(),
  st = (e, t) => {
    Dt.isServer ? p.useEffect(e, t) : p.useLayoutEffect(e, t);
  };
function Ot(e) {
  let t = p.useRef(e);
  return (
    st(() => {
      t.current = e;
    }, [e]),
    t
  );
}
let ie = function (e) {
  let t = Ot(e);
  return A.useCallback((...n) => t.current(...n), [t]);
};
function Rs(e) {
  typeof queueMicrotask == "function"
    ? queueMicrotask(e)
    : Promise.resolve()
        .then(e)
        .catch((t) =>
          setTimeout(() => {
            throw t;
          }),
        );
}
function Pn() {
  let e = [],
    t = {
      addEventListener(n, r, l, s) {
        return (
          n.addEventListener(r, l, s),
          t.add(() => n.removeEventListener(r, l, s))
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
          Rs(() => {
            r.current && n[0]();
          }),
          t.add(() => {
            r.current = !1;
          })
        );
      },
      style(n, r, l) {
        let s = n.style.getPropertyValue(r);
        return (
          Object.assign(n.style, { [r]: l }),
          this.add(() => {
            Object.assign(n.style, { [r]: s });
          })
        );
      },
      group(n) {
        let r = Pn();
        return (n(r), this.add(() => r.dispose()));
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
function ga() {
  let [e] = p.useState(Pn);
  return (p.useEffect(() => () => e.dispose(), [e]), e);
}
function k0() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in Lr
    ? ((t) => t.useSyncExternalStore)(Lr)(
        () => () => {},
        () => !1,
        () => !e,
      )
    : !1;
}
function ir() {
  let e = k0(),
    [t, n] = p.useState(Dt.isHandoffComplete);
  return (
    t && Dt.isHandoffComplete === !1 && n(!1),
    p.useEffect(() => {
      t !== !0 && n(!0);
    }, [t]),
    p.useEffect(() => Dt.handoff(), []),
    e ? !1 : t
  );
}
var Au;
let or =
  (Au = A.useId) != null
    ? Au
    : function () {
        let e = ir(),
          [t, n] = A.useState(e ? () => Dt.nextId() : null);
        return (
          st(() => {
            t === null && n(Dt.nextId());
          }, [t]),
          t != null ? "" + t : void 0
        );
      };
function Ce(e, t, ...n) {
  if (e in t) {
    let l = t[e];
    return typeof l == "function" ? l(...n) : l;
  }
  let r = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t,
    )
      .map((l) => `"${l}"`)
      .join(", ")}.`,
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(r, Ce), r);
}
function cf(e) {
  return Dt.isServer
    ? null
    : e instanceof Node
      ? e.ownerDocument
      : e != null && e.hasOwnProperty("current") && e.current instanceof Node
        ? e.current.ownerDocument
        : document;
}
let ho = [
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
var dn = ((e) => (
    (e[(e.First = 1)] = "First"),
    (e[(e.Previous = 2)] = "Previous"),
    (e[(e.Next = 4)] = "Next"),
    (e[(e.Last = 8)] = "Last"),
    (e[(e.WrapAround = 16)] = "WrapAround"),
    (e[(e.NoScroll = 32)] = "NoScroll"),
    e
  ))(dn || {}),
  df = ((e) => (
    (e[(e.Error = 0)] = "Error"),
    (e[(e.Overflow = 1)] = "Overflow"),
    (e[(e.Success = 2)] = "Success"),
    (e[(e.Underflow = 3)] = "Underflow"),
    e
  ))(df || {}),
  j0 = ((e) => (
    (e[(e.Previous = -1)] = "Previous"),
    (e[(e.Next = 1)] = "Next"),
    e
  ))(j0 || {});
function b0(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(ho)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER),
        ),
      );
}
var ff = ((e) => (
  (e[(e.Strict = 0)] = "Strict"),
  (e[(e.Loose = 1)] = "Loose"),
  e
))(ff || {});
function E0(e, t = 0) {
  var n;
  return e === ((n = cf(e)) == null ? void 0 : n.body)
    ? !1
    : Ce(t, {
        0() {
          return e.matches(ho);
        },
        1() {
          let r = e;
          for (; r !== null; ) {
            if (r.matches(ho)) return !0;
            r = r.parentElement;
          }
          return !1;
        },
      });
}
var C0 = ((e) => (
  (e[(e.Keyboard = 0)] = "Keyboard"),
  (e[(e.Mouse = 1)] = "Mouse"),
  e
))(C0 || {});
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
    !0,
  ),
  document.addEventListener(
    "click",
    (e) => {
      e.detail === 1
        ? delete document.documentElement.dataset.headlessuiFocusVisible
        : e.detail === 0 &&
          (document.documentElement.dataset.headlessuiFocusVisible = "");
    },
    !0,
  ));
function xn(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let P0 = ["textarea", "input"].join(",");
function T0(e) {
  var t, n;
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, P0)) !=
    null
    ? n
    : !1;
}
function D0(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let l = t(n),
      s = t(r);
    if (l === null || s === null) return 0;
    let i = l.compareDocumentPosition(s);
    return i & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : i & Node.DOCUMENT_POSITION_PRECEDING
        ? 1
        : 0;
  });
}
function Al(
  e,
  t,
  { sorted: n = !0, relativeTo: r = null, skipElements: l = [] } = {},
) {
  let s = Array.isArray(e)
      ? e.length > 0
        ? e[0].ownerDocument
        : document
      : e.ownerDocument,
    i = Array.isArray(e) ? (n ? D0(e) : e) : b0(e);
  (l.length > 0 && i.length > 1 && (i = i.filter((v) => !l.includes(v))),
    (r = r ?? s.activeElement));
  let a = (() => {
      if (t & 5) return 1;
      if (t & 10) return -1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
      );
    })(),
    u = (() => {
      if (t & 1) return 0;
      if (t & 2) return Math.max(0, i.indexOf(r)) - 1;
      if (t & 4) return Math.max(0, i.indexOf(r)) + 1;
      if (t & 8) return i.length - 1;
      throw new Error(
        "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
      );
    })(),
    c = t & 32 ? { preventScroll: !0 } : {},
    m = 0,
    f = i.length,
    y;
  do {
    if (m >= f || m + f <= 0) return 0;
    let v = u + m;
    if (t & 16) v = (v + f) % f;
    else {
      if (v < 0) return 3;
      if (v >= f) return 1;
    }
    ((y = i[v]), y == null || y.focus(c), (m += a));
  } while (y !== s.activeElement);
  return (t & 6 && T0(y) && y.select(), 2);
}
function pf() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  );
}
function O0() {
  return /Android/gi.test(window.navigator.userAgent);
}
function M0() {
  return pf() || O0();
}
function El(e, t, n) {
  let r = Ot(t);
  p.useEffect(() => {
    function l(s) {
      r.current(s);
    }
    return (
      document.addEventListener(e, l, n),
      () => document.removeEventListener(e, l, n)
    );
  }, [e, n]);
}
function mf(e, t, n) {
  let r = Ot(t);
  p.useEffect(() => {
    function l(s) {
      r.current(s);
    }
    return (
      window.addEventListener(e, l, n),
      () => window.removeEventListener(e, l, n)
    );
  }, [e, n]);
}
function _0(e, t, n = !0) {
  let r = p.useRef(!1);
  p.useEffect(() => {
    requestAnimationFrame(() => {
      r.current = n;
    });
  }, [n]);
  function l(i, a) {
    if (!r.current || i.defaultPrevented) return;
    let u = a(i);
    if (u === null || !u.getRootNode().contains(u) || !u.isConnected) return;
    let c = (function m(f) {
      return typeof f == "function"
        ? m(f())
        : Array.isArray(f) || f instanceof Set
          ? f
          : [f];
    })(e);
    for (let m of c) {
      if (m === null) continue;
      let f = m instanceof HTMLElement ? m : m.current;
      if (
        (f != null && f.contains(u)) ||
        (i.composed && i.composedPath().includes(f))
      )
        return;
    }
    return (
      !E0(u, ff.Loose) && u.tabIndex !== -1 && i.preventDefault(),
      t(i, u)
    );
  }
  let s = p.useRef(null);
  (El(
    "pointerdown",
    (i) => {
      var a, u;
      r.current &&
        (s.current =
          ((u = (a = i.composedPath) == null ? void 0 : a.call(i)) == null
            ? void 0
            : u[0]) || i.target);
    },
    !0,
  ),
    El(
      "mousedown",
      (i) => {
        var a, u;
        r.current &&
          (s.current =
            ((u = (a = i.composedPath) == null ? void 0 : a.call(i)) == null
              ? void 0
              : u[0]) || i.target);
      },
      !0,
    ),
    El(
      "click",
      (i) => {
        M0() || (s.current && (l(i, () => s.current), (s.current = null)));
      },
      !0,
    ),
    El(
      "touchend",
      (i) => l(i, () => (i.target instanceof HTMLElement ? i.target : null)),
      !0,
    ),
    mf(
      "blur",
      (i) =>
        l(i, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null,
        ),
      !0,
    ));
}
function sl(...e) {
  return p.useMemo(() => cf(...e), [...e]);
}
let hf = Symbol();
function L0(e, t = !0) {
  return Object.assign(e, { [hf]: t });
}
function yt(...e) {
  let t = p.useRef(e);
  p.useEffect(() => {
    t.current = e;
  }, [e]);
  let n = ie((r) => {
    for (let l of t.current)
      l != null && (typeof l == "function" ? l(r) : (l.current = r));
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[hf])) ? void 0 : n;
}
function ya(e, t) {
  let n = p.useRef([]),
    r = ie(e);
  p.useEffect(() => {
    let l = [...n.current];
    for (let [s, i] of t.entries())
      if (n.current[s] !== i) {
        let a = r(t, l);
        return ((n.current = t), a);
      }
  }, [r, ...t]);
}
function ms(...e) {
  return Array.from(
    new Set(e.flatMap((t) => (typeof t == "string" ? t.split(" ") : []))),
  )
    .filter(Boolean)
    .join(" ");
}
var hs = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.RenderStrategy = 1)] = "RenderStrategy"),
    (e[(e.Static = 2)] = "Static"),
    e
  ))(hs || {}),
  Qt = ((e) => (
    (e[(e.Unmount = 0)] = "Unmount"),
    (e[(e.Hidden = 1)] = "Hidden"),
    e
  ))(Qt || {});
function it({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: l,
  visible: s = !0,
  name: i,
  mergeRefs: a,
}) {
  a = a ?? F0;
  let u = gf(t, e);
  if (s) return Cl(u, n, r, i, a);
  let c = l ?? 0;
  if (c & 2) {
    let { static: m = !1, ...f } = u;
    if (m) return Cl(f, n, r, i, a);
  }
  if (c & 1) {
    let { unmount: m = !0, ...f } = u;
    return Ce(m ? 0 : 1, {
      0() {
        return null;
      },
      1() {
        return Cl({ ...f, hidden: !0, style: { display: "none" } }, n, r, i, a);
      },
    });
  }
  return Cl(u, n, r, i, a);
}
function Cl(e, t = {}, n, r, l) {
  let {
      as: s = n,
      children: i,
      refName: a = "ref",
      ...u
    } = gi(e, ["unmount", "static"]),
    c = e.ref !== void 0 ? { [a]: e.ref } : {},
    m = typeof i == "function" ? i(t) : i;
  "className" in u &&
    u.className &&
    typeof u.className == "function" &&
    (u.className = u.className(t));
  let f = {};
  if (t) {
    let y = !1,
      v = [];
    for (let [N, w] of Object.entries(t))
      (typeof w == "boolean" && (y = !0), w === !0 && v.push(N));
    y && (f["data-headlessui-state"] = v.join(" "));
  }
  if (s === p.Fragment && Object.keys(Uu(u)).length > 0) {
    if (!p.isValidElement(m) || (Array.isArray(m) && m.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          "",
          `The current component <${r} /> is rendering a "Fragment".`,
          "However we need to passthrough the following props:",
          Object.keys(u).map((w) => `  - ${w}`).join(`
`),
          "",
          "You can apply a few solutions:",
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            "Render a single element as the child so that we can forward the props onto that element.",
          ].map((w) => `  - ${w}`).join(`
`),
        ].join(`
`),
      );
    let y = m.props,
      v =
        typeof (y == null ? void 0 : y.className) == "function"
          ? (...w) => ms(y == null ? void 0 : y.className(...w), u.className)
          : ms(y == null ? void 0 : y.className, u.className),
      N = v ? { className: v } : {};
    return p.cloneElement(
      m,
      Object.assign(
        {},
        gf(m.props, Uu(gi(u, ["ref"]))),
        f,
        c,
        { ref: l(m.ref, c.ref) },
        N,
      ),
    );
  }
  return p.createElement(
    s,
    Object.assign(
      {},
      gi(u, ["ref"]),
      s !== p.Fragment && c,
      s !== p.Fragment && f,
    ),
    m,
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
function gf(...e) {
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
      Object.fromEntries(Object.keys(n).map((r) => [r, void 0])),
    );
  for (let r in n)
    Object.assign(t, {
      [r](l, ...s) {
        let i = n[r];
        for (let a of i) {
          if (
            (l instanceof Event ||
              (l == null ? void 0 : l.nativeEvent) instanceof Event) &&
            l.defaultPrevented
          )
            return;
          a(l, ...s);
        }
      },
    });
  return t;
}
function Ye(e) {
  var t;
  return Object.assign(p.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name,
  });
}
function Uu(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function gi(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
let $0 = "div";
var gs = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.Focusable = 2)] = "Focusable"),
  (e[(e.Hidden = 4)] = "Hidden"),
  e
))(gs || {});
function R0(e, t) {
  var n;
  let { features: r = 1, ...l } = e,
    s = {
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
  return it({
    ourProps: s,
    theirProps: l,
    slot: {},
    defaultTag: $0,
    name: "Hidden",
  });
}
let go = Ye(R0),
  va = p.createContext(null);
va.displayName = "OpenClosedContext";
var He = ((e) => (
  (e[(e.Open = 1)] = "Open"),
  (e[(e.Closed = 2)] = "Closed"),
  (e[(e.Closing = 4)] = "Closing"),
  (e[(e.Opening = 8)] = "Opening"),
  e
))(He || {});
function xa() {
  return p.useContext(va);
}
function z0({ value: e, children: t }) {
  return A.createElement(va.Provider, { value: e }, t);
}
function I0(e) {
  function t() {
    document.readyState !== "loading" &&
      (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window < "u" &&
    typeof document < "u" &&
    (document.addEventListener("DOMContentLoaded", t), t());
}
let qt = [];
I0(() => {
  function e(t) {
    t.target instanceof HTMLElement &&
      t.target !== document.body &&
      qt[0] !== t.target &&
      (qt.unshift(t.target),
      (qt = qt.filter((n) => n != null && n.isConnected)),
      qt.splice(10));
  }
  (window.addEventListener("click", e, { capture: !0 }),
    window.addEventListener("mousedown", e, { capture: !0 }),
    window.addEventListener("focus", e, { capture: !0 }),
    document.body.addEventListener("click", e, { capture: !0 }),
    document.body.addEventListener("mousedown", e, { capture: !0 }),
    document.body.addEventListener("focus", e, { capture: !0 }));
});
function A0(e) {
  let t = e.parentElement,
    n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    (t instanceof HTMLLegendElement && (n = t), (t = t.parentElement));
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && U0(n) ? !1 : r;
}
function U0(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
var yf = ((e) => (
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
))(yf || {});
function vf(e, t, n, r) {
  let l = Ot(n);
  p.useEffect(() => {
    e = e ?? window;
    function s(i) {
      l.current(i);
    }
    return (e.addEventListener(t, s, r), () => e.removeEventListener(t, s, r));
  }, [e, t, r]);
}
function il() {
  let e = p.useRef(!1);
  return (
    st(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      [],
    ),
    e
  );
}
function xf(e) {
  let t = ie(e),
    n = p.useRef(!1);
  p.useEffect(
    () => (
      (n.current = !1),
      () => {
        ((n.current = !0),
          Rs(() => {
            n.current && t();
          }));
      }
    ),
    [t],
  );
}
var jr = ((e) => (
  (e[(e.Forwards = 0)] = "Forwards"),
  (e[(e.Backwards = 1)] = "Backwards"),
  e
))(jr || {});
function H0() {
  let e = p.useRef(0);
  return (
    mf(
      "keydown",
      (t) => {
        t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
      },
      !0,
    ),
    e
  );
}
function wf(e) {
  if (!e) return new Set();
  if (typeof e == "function") return new Set(e());
  let t = new Set();
  for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
  return t;
}
let W0 = "div";
var Nf = ((e) => (
  (e[(e.None = 1)] = "None"),
  (e[(e.InitialFocus = 2)] = "InitialFocus"),
  (e[(e.TabLock = 4)] = "TabLock"),
  (e[(e.FocusLock = 8)] = "FocusLock"),
  (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
  (e[(e.All = 30)] = "All"),
  e
))(Nf || {});
function q0(e, t) {
  let n = p.useRef(null),
    r = yt(n, t),
    { initialFocus: l, containers: s, features: i = 30, ...a } = e;
  ir() || (i = 1);
  let u = sl(n);
  Q0({ ownerDocument: u }, !!(i & 16));
  let c = Y0({ ownerDocument: u, container: n, initialFocus: l }, !!(i & 2));
  G0(
    { ownerDocument: u, container: n, containers: s, previousActiveElement: c },
    !!(i & 8),
  );
  let m = H0(),
    f = ie((w) => {
      let j = n.current;
      j &&
        ((g) => g())(() => {
          Ce(m.current, {
            [jr.Forwards]: () => {
              Al(j, dn.First, { skipElements: [w.relatedTarget] });
            },
            [jr.Backwards]: () => {
              Al(j, dn.Last, { skipElements: [w.relatedTarget] });
            },
          });
        });
    }),
    y = ga(),
    v = p.useRef(!1),
    N = {
      ref: r,
      onKeyDown(w) {
        w.key == "Tab" &&
          ((v.current = !0),
          y.requestAnimationFrame(() => {
            v.current = !1;
          }));
      },
      onBlur(w) {
        let j = wf(s);
        n.current instanceof HTMLElement && j.add(n.current);
        let g = w.relatedTarget;
        g instanceof HTMLElement &&
          g.dataset.headlessuiFocusGuard !== "true" &&
          (Sf(j, g) ||
            (v.current
              ? Al(
                  n.current,
                  Ce(m.current, {
                    [jr.Forwards]: () => dn.Next,
                    [jr.Backwards]: () => dn.Previous,
                  }) | dn.WrapAround,
                  { relativeTo: w.target },
                )
              : w.target instanceof HTMLElement && xn(w.target)));
      },
    };
  return A.createElement(
    A.Fragment,
    null,
    !!(i & 4) &&
      A.createElement(go, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: f,
        features: gs.Focusable,
      }),
    it({ ourProps: N, theirProps: a, defaultTag: W0, name: "FocusTrap" }),
    !!(i & 4) &&
      A.createElement(go, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: f,
        features: gs.Focusable,
      }),
  );
}
let B0 = Ye(q0),
  vr = Object.assign(B0, { features: Nf });
function V0(e = !0) {
  let t = p.useRef(qt.slice());
  return (
    ya(
      ([n], [r]) => {
        (r === !0 &&
          n === !1 &&
          Rs(() => {
            t.current.splice(0);
          }),
          r === !1 && n === !0 && (t.current = qt.slice()));
      },
      [e, qt, t],
    ),
    ie(() => {
      var n;
      return (n = t.current.find((r) => r != null && r.isConnected)) != null
        ? n
        : null;
    })
  );
}
function Q0({ ownerDocument: e }, t) {
  let n = V0(t);
  (ya(() => {
    t ||
      ((e == null ? void 0 : e.activeElement) ===
        (e == null ? void 0 : e.body) &&
        xn(n()));
  }, [t]),
    xf(() => {
      t && xn(n());
    }));
}
function Y0({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let l = p.useRef(null),
    s = il();
  return (
    ya(() => {
      if (!r) return;
      let i = t.current;
      i &&
        Rs(() => {
          if (!s.current) return;
          let a = e == null ? void 0 : e.activeElement;
          if (n != null && n.current) {
            if ((n == null ? void 0 : n.current) === a) {
              l.current = a;
              return;
            }
          } else if (i.contains(a)) {
            l.current = a;
            return;
          }
          (n != null && n.current
            ? xn(n.current)
            : Al(i, dn.First) === df.Error &&
              console.warn(
                "There are no focusable elements inside the <FocusTrap />",
              ),
            (l.current = e == null ? void 0 : e.activeElement));
        });
    }, [r]),
    l
  );
}
function G0(
  { ownerDocument: e, container: t, containers: n, previousActiveElement: r },
  l,
) {
  let s = il();
  vf(
    e == null ? void 0 : e.defaultView,
    "focus",
    (i) => {
      if (!l || !s.current) return;
      let a = wf(n);
      t.current instanceof HTMLElement && a.add(t.current);
      let u = r.current;
      if (!u) return;
      let c = i.target;
      c && c instanceof HTMLElement
        ? Sf(a, c)
          ? ((r.current = c), xn(c))
          : (i.preventDefault(), i.stopPropagation(), xn(u))
        : xn(r.current);
    },
    !0,
  );
}
function Sf(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
let kf = p.createContext(!1);
function K0() {
  return p.useContext(kf);
}
function yo(e) {
  return A.createElement(kf.Provider, { value: e.force }, e.children);
}
function X0(e) {
  let t = K0(),
    n = p.useContext(jf),
    r = sl(e),
    [l, s] = p.useState(() => {
      if ((!t && n !== null) || Dt.isServer) return null;
      let i = r == null ? void 0 : r.getElementById("headlessui-portal-root");
      if (i) return i;
      if (r === null) return null;
      let a = r.createElement("div");
      return (
        a.setAttribute("id", "headlessui-portal-root"),
        r.body.appendChild(a)
      );
    });
  return (
    p.useEffect(() => {
      l !== null &&
        ((r != null && r.body.contains(l)) ||
          r == null ||
          r.body.appendChild(l));
    }, [l, r]),
    p.useEffect(() => {
      t || (n !== null && s(n.current));
    }, [n, s, t]),
    l
  );
}
let J0 = p.Fragment;
function Z0(e, t) {
  let n = e,
    r = p.useRef(null),
    l = yt(
      L0((m) => {
        r.current = m;
      }),
      t,
    ),
    s = sl(r),
    i = X0(r),
    [a] = p.useState(() => {
      var m;
      return Dt.isServer
        ? null
        : (m = s == null ? void 0 : s.createElement("div")) != null
          ? m
          : null;
    }),
    u = p.useContext(vo),
    c = ir();
  return (
    st(() => {
      !i ||
        !a ||
        i.contains(a) ||
        (a.setAttribute("data-headlessui-portal", ""), i.appendChild(a));
    }, [i, a]),
    st(() => {
      if (a && u) return u.register(a);
    }, [u, a]),
    xf(() => {
      var m;
      !i ||
        !a ||
        (a instanceof Node && i.contains(a) && i.removeChild(a),
        i.childNodes.length <= 0 &&
          ((m = i.parentElement) == null || m.removeChild(i)));
    }),
    c
      ? !i || !a
        ? null
        : Fs.createPortal(
            it({
              ourProps: { ref: l },
              theirProps: n,
              defaultTag: J0,
              name: "Portal",
            }),
            a,
          )
      : null
  );
}
let eg = p.Fragment,
  jf = p.createContext(null);
function tg(e, t) {
  let { target: n, ...r } = e,
    l = { ref: yt(t) };
  return A.createElement(
    jf.Provider,
    { value: n },
    it({ ourProps: l, theirProps: r, defaultTag: eg, name: "Popover.Group" }),
  );
}
let vo = p.createContext(null);
function ng() {
  let e = p.useContext(vo),
    t = p.useRef([]),
    n = ie((s) => (t.current.push(s), e && e.register(s), () => r(s))),
    r = ie((s) => {
      let i = t.current.indexOf(s);
      (i !== -1 && t.current.splice(i, 1), e && e.unregister(s));
    }),
    l = p.useMemo(
      () => ({ register: n, unregister: r, portals: t }),
      [n, r, t],
    );
  return [
    t,
    p.useMemo(
      () =>
        function ({ children: s }) {
          return A.createElement(vo.Provider, { value: l }, s);
        },
      [l],
    ),
  ];
}
let rg = Ye(Z0),
  lg = Ye(tg),
  xo = Object.assign(rg, { Group: lg });
function sg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const ig = typeof Object.is == "function" ? Object.is : sg,
  { useState: og, useEffect: ag, useLayoutEffect: ug, useDebugValue: cg } = Lr;
function dg(e, t, n) {
  const r = t(),
    [{ inst: l }, s] = og({ inst: { value: r, getSnapshot: t } });
  return (
    ug(() => {
      ((l.value = r), (l.getSnapshot = t), yi(l) && s({ inst: l }));
    }, [e, r, t]),
    ag(
      () => (
        yi(l) && s({ inst: l }),
        e(() => {
          yi(l) && s({ inst: l });
        })
      ),
      [e],
    ),
    cg(r),
    r
  );
}
function yi(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !ig(n, r);
  } catch {
    return !0;
  }
}
function fg(e, t, n) {
  return t();
}
const pg =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  mg = !pg,
  hg = mg ? fg : dg,
  gg = "useSyncExternalStore" in Lr ? ((e) => e.useSyncExternalStore)(Lr) : hg;
function yg(e) {
  return gg(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function vg(e, t) {
  let n = e(),
    r = new Set();
  return {
    getSnapshot() {
      return n;
    },
    subscribe(l) {
      return (r.add(l), () => r.delete(l));
    },
    dispatch(l, ...s) {
      let i = t[l].call(n, ...s);
      i && ((n = i), r.forEach((a) => a()));
    },
  };
}
function xg() {
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
        s = e - l;
      n.style(r, "paddingRight", `${s}px`);
    },
  };
}
function wg() {
  return pf()
    ? {
        before({ doc: e, d: t, meta: n }) {
          function r(l) {
            return n.containers.flatMap((s) => s()).some((s) => s.contains(l));
          }
          t.microTask(() => {
            var l;
            if (
              window.getComputedStyle(e.documentElement).scrollBehavior !==
              "auto"
            ) {
              let a = Pn();
              (a.style(e.documentElement, "scrollBehavior", "auto"),
                t.add(() => t.microTask(() => a.dispose())));
            }
            let s = (l = window.scrollY) != null ? l : window.pageYOffset,
              i = null;
            (t.addEventListener(
              e,
              "click",
              (a) => {
                if (a.target instanceof HTMLElement)
                  try {
                    let u = a.target.closest("a");
                    if (!u) return;
                    let { hash: c } = new URL(u.href),
                      m = e.querySelector(c);
                    m && !r(m) && (i = m);
                  } catch {}
              },
              !0,
            ),
              t.addEventListener(e, "touchstart", (a) => {
                if (a.target instanceof HTMLElement)
                  if (r(a.target)) {
                    let u = a.target;
                    for (; u.parentElement && r(u.parentElement); )
                      u = u.parentElement;
                    t.style(u, "overscrollBehavior", "contain");
                  } else t.style(a.target, "touchAction", "none");
              }),
              t.addEventListener(
                e,
                "touchmove",
                (a) => {
                  if (a.target instanceof HTMLElement)
                    if (r(a.target)) {
                      let u = a.target;
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
                      u.dataset.headlessuiPortal === "" && a.preventDefault();
                    } else a.preventDefault();
                },
                { passive: !1 },
              ),
              t.add(() => {
                var a;
                let u = (a = window.scrollY) != null ? a : window.pageYOffset;
                (s !== u && window.scrollTo(0, s),
                  i &&
                    i.isConnected &&
                    (i.scrollIntoView({ block: "nearest" }), (i = null)));
              }));
          });
        },
      }
    : {};
}
function Ng() {
  return {
    before({ doc: e, d: t }) {
      t.style(e.documentElement, "overflow", "hidden");
    },
  };
}
function Sg(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let hn = vg(() => new Map(), {
  PUSH(e, t) {
    var n;
    let r =
      (n = this.get(e)) != null
        ? n
        : { doc: e, count: 0, d: Pn(), meta: new Set() };
    return (r.count++, r.meta.add(t), this.set(e, r), this);
  },
  POP(e, t) {
    let n = this.get(e);
    return (n && (n.count--, n.meta.delete(t)), this);
  },
  SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
    let r = { doc: e, d: t, meta: Sg(n) },
      l = [wg(), xg(), Ng()];
    (l.forEach(({ before: s }) => (s == null ? void 0 : s(r))),
      l.forEach(({ after: s }) => (s == null ? void 0 : s(r))));
  },
  SCROLL_ALLOW({ d: e }) {
    e.dispose();
  },
  TEARDOWN({ doc: e }) {
    this.delete(e);
  },
});
hn.subscribe(() => {
  let e = hn.getSnapshot(),
    t = new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden",
      l = n.count !== 0;
    (((l && !r) || (!l && r)) &&
      hn.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
      n.count === 0 && hn.dispatch("TEARDOWN", n));
  }
});
function kg(e, t, n) {
  let r = yg(hn),
    l = e ? r.get(e) : void 0,
    s = l ? l.count > 0 : !1;
  return (
    st(() => {
      if (!(!e || !t))
        return (hn.dispatch("PUSH", e, n), () => hn.dispatch("POP", e, n));
    }, [t, e]),
    s
  );
}
let vi = new Map(),
  xr = new Map();
function Hu(e, t = !0) {
  st(() => {
    var n;
    if (!t) return;
    let r = typeof e == "function" ? e() : e.current;
    if (!r) return;
    function l() {
      var i;
      if (!r) return;
      let a = (i = xr.get(r)) != null ? i : 1;
      if ((a === 1 ? xr.delete(r) : xr.set(r, a - 1), a !== 1)) return;
      let u = vi.get(r);
      u &&
        (u["aria-hidden"] === null
          ? r.removeAttribute("aria-hidden")
          : r.setAttribute("aria-hidden", u["aria-hidden"]),
        (r.inert = u.inert),
        vi.delete(r));
    }
    let s = (n = xr.get(r)) != null ? n : 0;
    return (
      xr.set(r, s + 1),
      s !== 0 ||
        (vi.set(r, {
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
  let l = p.useRef((r = n == null ? void 0 : n.current) != null ? r : null),
    s = sl(l),
    i = ie(() => {
      var a, u, c;
      let m = [];
      for (let f of e)
        f !== null &&
          (f instanceof HTMLElement
            ? m.push(f)
            : "current" in f &&
              f.current instanceof HTMLElement &&
              m.push(f.current));
      if (t != null && t.current) for (let f of t.current) m.push(f);
      for (let f of (a =
        s == null ? void 0 : s.querySelectorAll("html > *, body > *")) != null
        ? a
        : [])
        f !== document.body &&
          f !== document.head &&
          f instanceof HTMLElement &&
          f.id !== "headlessui-portal-root" &&
          (f.contains(l.current) ||
            f.contains(
              (c = (u = l.current) == null ? void 0 : u.getRootNode()) == null
                ? void 0
                : c.host,
            ) ||
            m.some((y) => f.contains(y)) ||
            m.push(f));
      return m;
    });
  return {
    resolveContainers: i,
    contains: ie((a) => i().some((u) => u.contains(a))),
    mainTreeNodeRef: l,
    MainTreeNode: p.useMemo(
      () =>
        function () {
          return n != null
            ? null
            : A.createElement(go, { features: gs.Hidden, ref: l });
        },
      [l, n],
    ),
  };
}
let wa = p.createContext(() => {});
wa.displayName = "StackContext";
var wo = ((e) => ((e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e))(
  wo || {},
);
function bg() {
  return p.useContext(wa);
}
function Eg({ children: e, onUpdate: t, type: n, element: r, enabled: l }) {
  let s = bg(),
    i = ie((...a) => {
      (t == null || t(...a), s(...a));
    });
  return (
    st(() => {
      let a = l === void 0 || l === !0;
      return (
        a && i(0, n, r),
        () => {
          a && i(1, n, r);
        }
      );
    }, [i, n, r, l]),
    A.createElement(wa.Provider, { value: i }, e)
  );
}
let bf = p.createContext(null);
function Ef() {
  let e = p.useContext(bf);
  if (e === null) {
    let t = new Error(
      "You used a <Description /> component, but it is not inside a relevant parent.",
    );
    throw (Error.captureStackTrace && Error.captureStackTrace(t, Ef), t);
  }
  return e;
}
function Cg() {
  let [e, t] = p.useState([]);
  return [
    e.length > 0 ? e.join(" ") : void 0,
    p.useMemo(
      () =>
        function (n) {
          let r = ie(
              (s) => (
                t((i) => [...i, s]),
                () =>
                  t((i) => {
                    let a = i.slice(),
                      u = a.indexOf(s);
                    return (u !== -1 && a.splice(u, 1), a);
                  })
              ),
            ),
            l = p.useMemo(
              () => ({
                register: r,
                slot: n.slot,
                name: n.name,
                props: n.props,
              }),
              [r, n.slot, n.name, n.props],
            );
          return A.createElement(bf.Provider, { value: l }, n.children);
        },
      [t],
    ),
  ];
}
let Pg = "p";
function Tg(e, t) {
  let n = or(),
    { id: r = `headlessui-description-${n}`, ...l } = e,
    s = Ef(),
    i = yt(t);
  st(() => s.register(r), [r, s.register]);
  let a = { ref: i, ...s.props, id: r };
  return it({
    ourProps: a,
    theirProps: l,
    slot: s.slot || {},
    defaultTag: Pg,
    name: s.name || "Description",
  });
}
let Dg = Ye(Tg),
  Og = Object.assign(Dg, {});
var Mg = ((e) => (
    (e[(e.Open = 0)] = "Open"),
    (e[(e.Closed = 1)] = "Closed"),
    e
  ))(Mg || {}),
  _g = ((e) => ((e[(e.SetTitleId = 0)] = "SetTitleId"), e))(_g || {});
let Lg = {
    0(e, t) {
      return e.titleId === t.id ? e : { ...e, titleId: t.id };
    },
  },
  ys = p.createContext(null);
ys.displayName = "DialogContext";
function ol(e) {
  let t = p.useContext(ys);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, ol), n);
  }
  return t;
}
function Fg(e, t, n = () => [document.body]) {
  kg(e, t, (r) => {
    var l;
    return { containers: [...((l = r.containers) != null ? l : []), n] };
  });
}
function $g(e, t) {
  return Ce(t.type, Lg, e, t);
}
let Rg = "div",
  zg = hs.RenderStrategy | hs.Static;
function Ig(e, t) {
  let n = or(),
    {
      id: r = `headlessui-dialog-${n}`,
      open: l,
      onClose: s,
      initialFocus: i,
      role: a = "dialog",
      __demoMode: u = !1,
      ...c
    } = e,
    [m, f] = p.useState(0),
    y = p.useRef(!1);
  a = (function () {
    return a === "dialog" || a === "alertdialog"
      ? a
      : (y.current ||
          ((y.current = !0),
          console.warn(
            `Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`,
          )),
        "dialog");
  })();
  let v = xa();
  l === void 0 && v !== null && (l = (v & He.Open) === He.Open);
  let N = p.useRef(null),
    w = yt(N, t),
    j = sl(N),
    g = e.hasOwnProperty("open") || v !== null,
    d = e.hasOwnProperty("onClose");
  if (!g && !d)
    throw new Error(
      "You have to provide an `open` and an `onClose` prop to the `Dialog` component.",
    );
  if (!g)
    throw new Error(
      "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.",
    );
  if (!d)
    throw new Error(
      "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.",
    );
  if (typeof l != "boolean")
    throw new Error(
      `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${l}`,
    );
  if (typeof s != "function")
    throw new Error(
      `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${s}`,
    );
  let h = l ? 0 : 1,
    [S, x] = p.useReducer($g, {
      titleId: null,
      descriptionId: null,
      panelRef: p.createRef(),
    }),
    k = ie(() => s(!1)),
    C = ie((P) => x({ type: 0, id: P })),
    D = ir() ? (u ? !1 : h === 0) : !1,
    z = m > 1,
    $ = p.useContext(ys) !== null,
    [Z, H] = ng(),
    ee = {
      get current() {
        var P;
        return (P = S.panelRef.current) != null ? P : N.current;
      },
    },
    {
      resolveContainers: le,
      mainTreeNodeRef: oe,
      MainTreeNode: ye,
    } = jg({ portals: Z, defaultContainers: [ee] }),
    G = z ? "parent" : "leaf",
    O = v !== null ? (v & He.Closing) === He.Closing : !1,
    F = $ || O ? !1 : D,
    R = p.useCallback(() => {
      var P, E;
      return (E = Array.from(
        (P = j == null ? void 0 : j.querySelectorAll("body > *")) != null
          ? P
          : [],
      ).find((M) =>
        M.id === "headlessui-portal-root"
          ? !1
          : M.contains(oe.current) && M instanceof HTMLElement,
      )) != null
        ? E
        : null;
    }, [oe]);
  Hu(R, F);
  let U = z ? !0 : D,
    W = p.useCallback(() => {
      var P, E;
      return (E = Array.from(
        (P =
          j == null
            ? void 0
            : j.querySelectorAll("[data-headlessui-portal]")) != null
          ? P
          : [],
      ).find((M) => M.contains(oe.current) && M instanceof HTMLElement)) != null
        ? E
        : null;
    }, [oe]);
  (Hu(W, U),
    _0(
      le,
      (P) => {
        (P.preventDefault(), k());
      },
      !(!D || z),
    ));
  let J = !(z || h !== 0);
  (vf(j == null ? void 0 : j.defaultView, "keydown", (P) => {
    J &&
      (P.defaultPrevented ||
        (P.key === yf.Escape &&
          (P.preventDefault(), P.stopPropagation(), k())));
  }),
    Fg(j, !(O || h !== 0 || $), le),
    p.useEffect(() => {
      if (h !== 0 || !N.current) return;
      let P = new ResizeObserver((E) => {
        for (let M of E) {
          let I = M.target.getBoundingClientRect();
          I.x === 0 && I.y === 0 && I.width === 0 && I.height === 0 && k();
        }
      });
      return (P.observe(N.current), () => P.disconnect());
    }, [h, N, k]));
  let [b, q] = Cg(),
    Y = p.useMemo(
      () => [{ dialogState: h, close: k, setTitleId: C }, S],
      [h, S, k, C],
    ),
    ot = p.useMemo(() => ({ open: h === 0 }), [h]),
    _ = {
      ref: w,
      id: r,
      role: a,
      "aria-modal": h === 0 ? !0 : void 0,
      "aria-labelledby": S.titleId,
      "aria-describedby": b,
    };
  return A.createElement(
    Eg,
    {
      type: "Dialog",
      enabled: h === 0,
      element: N,
      onUpdate: ie((P, E) => {
        E === "Dialog" &&
          Ce(P, {
            [wo.Add]: () => f((M) => M + 1),
            [wo.Remove]: () => f((M) => M - 1),
          });
      }),
    },
    A.createElement(
      yo,
      { force: !0 },
      A.createElement(
        xo,
        null,
        A.createElement(
          ys.Provider,
          { value: Y },
          A.createElement(
            xo.Group,
            { target: N },
            A.createElement(
              yo,
              { force: !1 },
              A.createElement(
                q,
                { slot: ot, name: "Dialog.Description" },
                A.createElement(
                  vr,
                  {
                    initialFocus: i,
                    containers: le,
                    features: D
                      ? Ce(G, {
                          parent: vr.features.RestoreFocus,
                          leaf: vr.features.All & ~vr.features.FocusLock,
                        })
                      : vr.features.None,
                  },
                  A.createElement(
                    H,
                    null,
                    it({
                      ourProps: _,
                      theirProps: c,
                      slot: ot,
                      defaultTag: Rg,
                      features: zg,
                      visible: h === 0,
                      name: "Dialog",
                    }),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    A.createElement(ye, null),
  );
}
let Ag = "div";
function Ug(e, t) {
  let n = or(),
    { id: r = `headlessui-dialog-overlay-${n}`, ...l } = e,
    [{ dialogState: s, close: i }] = ol("Dialog.Overlay"),
    a = yt(t),
    u = ie((m) => {
      if (m.target === m.currentTarget) {
        if (A0(m.currentTarget)) return m.preventDefault();
        (m.preventDefault(), m.stopPropagation(), i());
      }
    }),
    c = p.useMemo(() => ({ open: s === 0 }), [s]);
  return it({
    ourProps: { ref: a, id: r, "aria-hidden": !0, onClick: u },
    theirProps: l,
    slot: c,
    defaultTag: Ag,
    name: "Dialog.Overlay",
  });
}
let Hg = "div";
function Wg(e, t) {
  let n = or(),
    { id: r = `headlessui-dialog-backdrop-${n}`, ...l } = e,
    [{ dialogState: s }, i] = ol("Dialog.Backdrop"),
    a = yt(t);
  p.useEffect(() => {
    if (i.panelRef.current === null)
      throw new Error(
        "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.",
      );
  }, [i.panelRef]);
  let u = p.useMemo(() => ({ open: s === 0 }), [s]);
  return A.createElement(
    yo,
    { force: !0 },
    A.createElement(
      xo,
      null,
      it({
        ourProps: { ref: a, id: r, "aria-hidden": !0 },
        theirProps: l,
        slot: u,
        defaultTag: Hg,
        name: "Dialog.Backdrop",
      }),
    ),
  );
}
let qg = "div";
function Bg(e, t) {
  let n = or(),
    { id: r = `headlessui-dialog-panel-${n}`, ...l } = e,
    [{ dialogState: s }, i] = ol("Dialog.Panel"),
    a = yt(t, i.panelRef),
    u = p.useMemo(() => ({ open: s === 0 }), [s]),
    c = ie((m) => {
      m.stopPropagation();
    });
  return it({
    ourProps: { ref: a, id: r, onClick: c },
    theirProps: l,
    slot: u,
    defaultTag: qg,
    name: "Dialog.Panel",
  });
}
let Vg = "h2";
function Qg(e, t) {
  let n = or(),
    { id: r = `headlessui-dialog-title-${n}`, ...l } = e,
    [{ dialogState: s, setTitleId: i }] = ol("Dialog.Title"),
    a = yt(t);
  p.useEffect(() => (i(r), () => i(null)), [r, i]);
  let u = p.useMemo(() => ({ open: s === 0 }), [s]);
  return it({
    ourProps: { ref: a, id: r },
    theirProps: l,
    slot: u,
    defaultTag: Vg,
    name: "Dialog.Title",
  });
}
let Yg = Ye(Ig),
  Gg = Ye(Wg),
  Kg = Ye(Bg),
  Xg = Ye(Ug),
  Jg = Ye(Qg),
  Ke = Object.assign(Yg, {
    Backdrop: Gg,
    Panel: Kg,
    Overlay: Xg,
    Title: Jg,
    Description: Og,
  });
function Zg(e = 0) {
  let [t, n] = p.useState(e),
    r = il(),
    l = p.useCallback(
      (u) => {
        r.current && n((c) => c | u);
      },
      [t, r],
    ),
    s = p.useCallback((u) => !!(t & u), [t]),
    i = p.useCallback(
      (u) => {
        r.current && n((c) => c & ~u);
      },
      [n, r],
    ),
    a = p.useCallback(
      (u) => {
        r.current && n((c) => c ^ u);
      },
      [n],
    );
  return { flags: t, addFlag: l, hasFlag: s, removeFlag: i, toggleFlag: a };
}
function ey(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return ((t.called = !0), e(...n));
  };
}
function xi(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function wi(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function ty(e, t) {
  let n = Pn();
  if (!e) return n.dispose;
  let { transitionDuration: r, transitionDelay: l } = getComputedStyle(e),
    [s, i] = [r, l].map((u) => {
      let [c = 0] = u
        .split(",")
        .filter(Boolean)
        .map((m) => (m.includes("ms") ? parseFloat(m) : parseFloat(m) * 1e3))
        .sort((m, f) => f - m);
      return c;
    }),
    a = s + i;
  if (a !== 0) {
    n.group((c) => {
      (c.setTimeout(() => {
        (t(), c.dispose());
      }, a),
        c.addEventListener(e, "transitionrun", (m) => {
          m.target === m.currentTarget && c.dispose();
        }));
    });
    let u = n.addEventListener(e, "transitionend", (c) => {
      c.target === c.currentTarget && (t(), u());
    });
  } else t();
  return (n.add(() => t()), n.dispose);
}
function ny(e, t, n, r) {
  let l = n ? "enter" : "leave",
    s = Pn(),
    i = r !== void 0 ? ey(r) : () => {};
  l === "enter" && (e.removeAttribute("hidden"), (e.style.display = ""));
  let a = Ce(l, { enter: () => t.enter, leave: () => t.leave }),
    u = Ce(l, { enter: () => t.enterTo, leave: () => t.leaveTo }),
    c = Ce(l, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return (
    wi(
      e,
      ...t.base,
      ...t.enter,
      ...t.enterTo,
      ...t.enterFrom,
      ...t.leave,
      ...t.leaveFrom,
      ...t.leaveTo,
      ...t.entered,
    ),
    xi(e, ...t.base, ...a, ...c),
    s.nextFrame(() => {
      (wi(e, ...t.base, ...a, ...c),
        xi(e, ...t.base, ...a, ...u),
        ty(
          e,
          () => (wi(e, ...t.base, ...a), xi(e, ...t.base, ...t.entered), i()),
        ));
    }),
    s.dispose
  );
}
function ry({
  immediate: e,
  container: t,
  direction: n,
  classes: r,
  onStart: l,
  onStop: s,
}) {
  let i = il(),
    a = ga(),
    u = Ot(n);
  (st(() => {
    e && (u.current = "enter");
  }, [e]),
    st(() => {
      let c = Pn();
      a.add(c.dispose);
      let m = t.current;
      if (m && u.current !== "idle" && i.current)
        return (
          c.dispose(),
          l.current(u.current),
          c.add(
            ny(m, r.current, u.current === "enter", () => {
              (c.dispose(), s.current(u.current));
            }),
          ),
          c.dispose
        );
    }, [n]));
}
function It(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let zs = p.createContext(null);
zs.displayName = "TransitionContext";
var ly = ((e) => ((e.Visible = "visible"), (e.Hidden = "hidden"), e))(ly || {});
function sy() {
  let e = p.useContext(zs);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.",
    );
  return e;
}
function iy() {
  let e = p.useContext(Is);
  if (e === null)
    throw new Error(
      "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.",
    );
  return e;
}
let Is = p.createContext(null);
Is.displayName = "NestingContext";
function As(e) {
  return "children" in e
    ? As(e.children)
    : e.current
        .filter(({ el: t }) => t.current !== null)
        .filter(({ state: t }) => t === "visible").length > 0;
}
function Cf(e, t) {
  let n = Ot(e),
    r = p.useRef([]),
    l = il(),
    s = ga(),
    i = ie((v, N = Qt.Hidden) => {
      let w = r.current.findIndex(({ el: j }) => j === v);
      w !== -1 &&
        (Ce(N, {
          [Qt.Unmount]() {
            r.current.splice(w, 1);
          },
          [Qt.Hidden]() {
            r.current[w].state = "hidden";
          },
        }),
        s.microTask(() => {
          var j;
          !As(r) && l.current && ((j = n.current) == null || j.call(n));
        }));
    }),
    a = ie((v) => {
      let N = r.current.find(({ el: w }) => w === v);
      return (
        N
          ? N.state !== "visible" && (N.state = "visible")
          : r.current.push({ el: v, state: "visible" }),
        () => i(v, Qt.Unmount)
      );
    }),
    u = p.useRef([]),
    c = p.useRef(Promise.resolve()),
    m = p.useRef({ enter: [], leave: [], idle: [] }),
    f = ie((v, N, w) => {
      (u.current.splice(0),
        t &&
          (t.chains.current[N] = t.chains.current[N].filter(([j]) => j !== v)),
        t == null ||
          t.chains.current[N].push([
            v,
            new Promise((j) => {
              u.current.push(j);
            }),
          ]),
        t == null ||
          t.chains.current[N].push([
            v,
            new Promise((j) => {
              Promise.all(m.current[N].map(([g, d]) => d)).then(() => j());
            }),
          ]),
        N === "enter"
          ? (c.current = c.current
              .then(() => (t == null ? void 0 : t.wait.current))
              .then(() => w(N)))
          : w(N));
    }),
    y = ie((v, N, w) => {
      Promise.all(m.current[N].splice(0).map(([j, g]) => g))
        .then(() => {
          var j;
          (j = u.current.shift()) == null || j();
        })
        .then(() => w(N));
    });
  return p.useMemo(
    () => ({
      children: r,
      register: a,
      unregister: i,
      onStart: f,
      onStop: y,
      wait: c,
      chains: m,
    }),
    [a, i, r, f, y, m, c],
  );
}
function oy() {}
let ay = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function Wu(e) {
  var t;
  let n = {};
  for (let r of ay) n[r] = (t = e[r]) != null ? t : oy;
  return n;
}
function uy(e) {
  let t = p.useRef(Wu(e));
  return (
    p.useEffect(() => {
      t.current = Wu(e);
    }, [e]),
    t
  );
}
let cy = "div",
  Pf = hs.RenderStrategy;
function dy(e, t) {
  var n, r;
  let {
      beforeEnter: l,
      afterEnter: s,
      beforeLeave: i,
      afterLeave: a,
      enter: u,
      enterFrom: c,
      enterTo: m,
      entered: f,
      leave: y,
      leaveFrom: v,
      leaveTo: N,
      ...w
    } = e,
    j = p.useRef(null),
    g = yt(j, t),
    d = (n = w.unmount) == null || n ? Qt.Unmount : Qt.Hidden,
    { show: h, appear: S, initial: x } = sy(),
    [k, C] = p.useState(h ? "visible" : "hidden"),
    D = iy(),
    { register: z, unregister: $ } = D;
  (p.useEffect(() => z(j), [z, j]),
    p.useEffect(() => {
      if (d === Qt.Hidden && j.current) {
        if (h && k !== "visible") {
          C("visible");
          return;
        }
        return Ce(k, { hidden: () => $(j), visible: () => z(j) });
      }
    }, [k, j, z, $, h, d]));
  let Z = Ot({
      base: It(w.className),
      enter: It(u),
      enterFrom: It(c),
      enterTo: It(m),
      entered: It(f),
      leave: It(y),
      leaveFrom: It(v),
      leaveTo: It(N),
    }),
    H = uy({ beforeEnter: l, afterEnter: s, beforeLeave: i, afterLeave: a }),
    ee = ir();
  p.useEffect(() => {
    if (ee && k === "visible" && j.current === null)
      throw new Error(
        "Did you forget to passthrough the `ref` to the actual DOM node?",
      );
  }, [j, k, ee]);
  let le = x && !S,
    oe = S && h && x,
    ye = !ee || le ? "idle" : h ? "enter" : "leave",
    G = Zg(0),
    O = ie((J) =>
      Ce(J, {
        enter: () => {
          (G.addFlag(He.Opening), H.current.beforeEnter());
        },
        leave: () => {
          (G.addFlag(He.Closing), H.current.beforeLeave());
        },
        idle: () => {},
      }),
    ),
    F = ie((J) =>
      Ce(J, {
        enter: () => {
          (G.removeFlag(He.Opening), H.current.afterEnter());
        },
        leave: () => {
          (G.removeFlag(He.Closing), H.current.afterLeave());
        },
        idle: () => {},
      }),
    ),
    R = Cf(() => {
      (C("hidden"), $(j));
    }, D),
    U = p.useRef(!1);
  ry({
    immediate: oe,
    container: j,
    classes: Z,
    direction: ye,
    onStart: Ot((J) => {
      ((U.current = !0), R.onStart(j, J, O));
    }),
    onStop: Ot((J) => {
      ((U.current = !1),
        R.onStop(j, J, F),
        J === "leave" && !As(R) && (C("hidden"), $(j)));
    }),
  });
  let W = w,
    we = { ref: g };
  return (
    oe
      ? (W = {
          ...W,
          className: ms(
            w.className,
            ...Z.current.enter,
            ...Z.current.enterFrom,
          ),
        })
      : U.current &&
        ((W.className = ms(
          w.className,
          (r = j.current) == null ? void 0 : r.className,
        )),
        W.className === "" && delete W.className),
    A.createElement(
      Is.Provider,
      { value: R },
      A.createElement(
        z0,
        { value: Ce(k, { visible: He.Open, hidden: He.Closed }) | G.flags },
        it({
          ourProps: we,
          theirProps: W,
          defaultTag: cy,
          features: Pf,
          visible: k === "visible",
          name: "Transition.Child",
        }),
      ),
    )
  );
}
function fy(e, t) {
  let { show: n, appear: r = !1, unmount: l = !0, ...s } = e,
    i = p.useRef(null),
    a = yt(i, t);
  ir();
  let u = xa();
  if (
    (n === void 0 && u !== null && (n = (u & He.Open) === He.Open),
    ![!0, !1].includes(n))
  )
    throw new Error(
      "A <Transition /> is used but it is missing a `show={true | false}` prop.",
    );
  let [c, m] = p.useState(n ? "visible" : "hidden"),
    f = Cf(() => {
      m("hidden");
    }),
    [y, v] = p.useState(!0),
    N = p.useRef([n]);
  st(() => {
    y !== !1 &&
      N.current[N.current.length - 1] !== n &&
      (N.current.push(n), v(!1));
  }, [N, n]);
  let w = p.useMemo(() => ({ show: n, appear: r, initial: y }), [n, r, y]);
  p.useEffect(() => {
    if (n) m("visible");
    else if (!As(f)) m("hidden");
    else {
      let h = i.current;
      if (!h) return;
      let S = h.getBoundingClientRect();
      S.x === 0 && S.y === 0 && S.width === 0 && S.height === 0 && m("hidden");
    }
  }, [n, f]);
  let j = { unmount: l },
    g = ie(() => {
      var h;
      (y && v(!1), (h = e.beforeEnter) == null || h.call(e));
    }),
    d = ie(() => {
      var h;
      (y && v(!1), (h = e.beforeLeave) == null || h.call(e));
    });
  return A.createElement(
    Is.Provider,
    { value: f },
    A.createElement(
      zs.Provider,
      { value: w },
      it({
        ourProps: {
          ...j,
          as: p.Fragment,
          children: A.createElement(Tf, {
            ref: a,
            ...j,
            ...s,
            beforeEnter: g,
            beforeLeave: d,
          }),
        },
        theirProps: {},
        defaultTag: p.Fragment,
        features: Pf,
        visible: c === "visible",
        name: "Transition",
      }),
    ),
  );
}
function py(e, t) {
  let n = p.useContext(zs) !== null,
    r = xa() !== null;
  return A.createElement(
    A.Fragment,
    null,
    !n && r
      ? A.createElement(No, { ref: t, ...e })
      : A.createElement(Tf, { ref: t, ...e }),
  );
}
let No = Ye(fy),
  Tf = Ye(dy),
  my = Ye(py),
  Xe = Object.assign(No, { Child: my, Root: No }),
  gn = null;
const hy = async () => {
    if (gn) return gn;
    try {
      const e = await fetch("../config.txt");
      if (!e.ok) throw new Error("Failed to load configuration");
      return ((gn = await e.json()), gn);
    } catch (e) {
      throw (console.error("Error loading config:", e), e);
    }
  },
  gy = (e) => {
    if (!gn) throw new Error("Configuration not loaded");
    return `${gn.domain}${e}`;
  },
  yy = () => gn,
  Oe = async (e, t = {}) => {
    const n = gy(e),
      r = t.method || "GET";
    (console.group(`🌐 API Request: ${e}`),
      console.log(`URL: ${n}`),
      console.log(`Method: ${r}`),
      t.body && console.log("Request Payload:", t.body));
    try {
      const l = await fetch(n, {
          method: r,
          headers: { "Content-Type": "application/json" },
          body: t.body ? JSON.stringify(t.body) : void 0,
        }),
        s = await l.text();
      let i;
      try {
        i = JSON.parse(s);
      } catch (a) {
        throw (
          console.error("Failed to parse response as JSON:", a),
          new Error("Invalid JSON response")
        );
      }
      if ((console.log("Response:", i), console.groupEnd(), !l.ok))
        throw new Error(`HTTP error! status: ${l.status}`);
      return i;
    } catch (l) {
      throw (console.error("API Error:", l), console.groupEnd(), l);
    }
  },
  Na = ({ value: e, onChange: t, onClose: n, title: r }) => {
    const [l, s] = A.useState(e),
      [i, a] = A.useState(null),
      [u, c] = A.useState(null),
      [m, f] = A.useState(!1),
      [y, v] = A.useState(!0),
      N = A.useRef(null);
    (p.useEffect(() => {
      const x =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        );
      N.current && !x && N.current.focus();
    }, []),
      p.useEffect(() => {
        const x = (k) => {
          const C = k.key;
          C >= "0" && C <= "9"
            ? (k.preventDefault(), w(C))
            : C === "+" || C === "-"
              ? (k.preventDefault(), j(C))
              : C === "*"
                ? (k.preventDefault(), j("×"))
                : C === "/"
                  ? (k.preventDefault(), j("÷"))
                  : C === "Enter"
                    ? (k.preventDefault(), h())
                    : C === "Escape"
                      ? (k.preventDefault(), n())
                      : C === "Backspace" &&
                        (k.preventDefault(), s(l.slice(0, -1) || "0"));
        };
        return (
          window.addEventListener("keydown", x),
          () => window.removeEventListener("keydown", x)
        );
      }, [n, l, u, i]));
    const w = (x) => {
        y
          ? (s(x), v(!1))
          : m
            ? (s(x), f(!1))
            : i && !u
              ? (c(l), s(x))
              : s(l === "0" ? x : l + x);
      },
      j = (x) => {
        (u && g(), a(x), f(!1), v(!1));
      },
      g = () => {
        if (!u || !i) return;
        const x = parseFloat(u),
          k = parseFloat(l);
        let C = 0;
        switch (i) {
          case "+":
            C = x + k;
            break;
          case "-":
            C = x - k;
            break;
          case "×":
            C = x * k;
            break;
          case "÷":
            if (k === 0) {
              alert("不能除以零");
              return;
            }
            C = x / k;
            break;
        }
        (s(Math.round(C).toString()), c(null), a(null), f(!0), v(!1));
      },
      d = () => {
        (s("0"), c(null), a(null), f(!1), v(!0));
      },
      h = () => {
        let x = l;
        if (u && i) {
          const k = parseFloat(u),
            C = parseFloat(l);
          let D = 0;
          switch (i) {
            case "+":
              D = k + C;
              break;
            case "-":
              D = k - C;
              break;
            case "×":
              D = k * C;
              break;
            case "÷":
              if (C === 0) {
                alert("不能除以零");
                return;
              }
              D = k / C;
              break;
          }
          x = Math.round(D).toString();
        }
        (t(x),
          setTimeout(() => {
            n();
          }, 0));
      },
      S = o.jsx("div", {
        className:
          "fixed inset-0 flex items-center justify-center bg-black/25 backdrop-blur-sm",
        style: { zIndex: 999999 },
        onClick: n,
        children: o.jsxs("div", {
          className:
            "w-[90vw] max-w-md bg-white rounded-lg shadow-xl p-4 md:p-6",
          style: { zIndex: 1e6 },
          onClick: (x) => x.stopPropagation(),
          children: [
            o.jsxs("div", {
              className: "flex justify-between items-center mb-4",
              children: [
                o.jsx("div", {
                  className: "text-base font-medium text-gray-900",
                  children: r || "",
                }),
                o.jsx("button", {
                  onClick: n,
                  className:
                    "p-1.5 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-colors duration-150",
                  children: o.jsx(Zr, { size: 20 }),
                }),
              ],
            }),
            o.jsx("div", {
              className: "mb-6",
              children: o.jsx("input", {
                ref: N,
                type: "text",
                value: l,
                readOnly: !0,
                className:
                  "w-full px-3 py-2 text-xl font-medium tracking-wider border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-gray-900",
              }),
            }),
            o.jsxs("div", {
              className: "grid grid-cols-4 gap-2",
              children: [
                ["7", "8", "9", "÷"].map((x) =>
                  o.jsx(
                    "button",
                    {
                      onClick: (k) => {
                        (k.stopPropagation(), x === "÷" ? j(x) : w(x));
                      },
                      className: `py-4 text-sm font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${x === "÷" ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700" : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"}`,
                      children: x,
                    },
                    x,
                  ),
                ),
                ["4", "5", "6", "×"].map((x) =>
                  o.jsx(
                    "button",
                    {
                      onClick: (k) => {
                        (k.stopPropagation(), x === "×" ? j(x) : w(x));
                      },
                      className: `py-4 text-sm font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${x === "×" ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700" : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"}`,
                      children: x,
                    },
                    x,
                  ),
                ),
                ["1", "2", "3", "-"].map((x) =>
                  o.jsx(
                    "button",
                    {
                      onClick: (k) => {
                        (k.stopPropagation(), x === "-" ? j(x) : w(x));
                      },
                      className: `py-4 text-sm font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${x === "-" ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700" : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"}`,
                      children: x,
                    },
                    x,
                  ),
                ),
                ["0", ".", "=", "+"].map((x) =>
                  o.jsx(
                    "button",
                    {
                      onClick: (k) => {
                        (k.stopPropagation(),
                          x === "=" ? g() : x === "+" ? j(x) : w(x));
                      },
                      className: `py-4 text-sm font-medium rounded-lg transition-all duration-150 shadow-sm active:scale-95 ${x === "=" ? "bg-green-500 hover:bg-green-600 text-white" : x === "+" ? "bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-700" : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900"}`,
                      children: x,
                    },
                    x,
                  ),
                ),
              ],
            }),
            o.jsxs("div", {
              className: "mt-4 flex justify-between gap-3",
              children: [
                o.jsx("button", {
                  onClick: (x) => {
                    (x.stopPropagation(), d());
                  },
                  className:
                    "flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-150 shadow-sm active:scale-95 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50",
                  children: "清除",
                }),
                o.jsx("button", {
                  onClick: (x) => {
                    (x.stopPropagation(), h());
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
    return Fs.createPortal(S, document.body);
  },
  vy = {
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
  Df = p.createContext(void 0),
  xy = ({ children: e }) => {
    const [t, n] = p.useState("zh"),
      r = () => {
        n((s) => (s === "zh" ? "en" : "zh"));
      },
      l = (s) => vy[t][s] || s;
    return o.jsx(Df.Provider, {
      value: { language: t, toggleLanguage: r, t: l },
      children: e,
    });
  },
  kt = () => {
    const e = p.useContext(Df);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  },
  wy = ({ startDate: e, endDate: t, onDateChange: n }) => {
    const { t: r } = kt(),
      l = (s, i, a, u) => {
        const c = new Date(`${s}T${i}`),
          m = new Date(`${a}T${u}`);
        n(c, m);
      };
    return o.jsxs("div", {
      className: "space-y-6 lg:space-y-0 lg:flex lg:items-start lg:gap-6",
      children: [
        o.jsxs("div", {
          className: "lg:w-[200px]",
          children: [
            o.jsx("label", {
              className: "block text-base font-medium text-gray-700 mb-2",
              children: r("time.type"),
            }),
            o.jsx("select", {
              defaultValue: "操作時間",
              className:
                "w-full border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
              children: o.jsx("option", {
                value: "操作時間",
                children: r("time.operation"),
              }),
            }),
          ],
        }),
        o.jsxs("div", {
          className: "flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6",
          children: [
            o.jsxs("div", {
              className: "space-y-2",
              children: [
                o.jsx("label", {
                  className: "block text-base font-medium text-gray-700",
                  children: r("time.start"),
                }),
                o.jsxs("div", {
                  className: "flex flex-col sm:flex-row gap-3",
                  children: [
                    o.jsx("input", {
                      type: "date",
                      value: me(e, "yyyy-MM-dd"),
                      onChange: (s) =>
                        l(
                          s.target.value,
                          me(e, "HH:mm:ss"),
                          me(t, "yyyy-MM-dd"),
                          me(t, "HH:mm:ss"),
                        ),
                      className:
                        "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                    }),
                    o.jsx("input", {
                      type: "time",
                      value: me(e, "HH:mm:ss"),
                      onChange: (s) =>
                        l(
                          me(e, "yyyy-MM-dd"),
                          s.target.value,
                          me(t, "yyyy-MM-dd"),
                          me(t, "HH:mm:ss"),
                        ),
                      className:
                        "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                      step: "1",
                    }),
                  ],
                }),
              ],
            }),
            o.jsxs("div", {
              className: "space-y-2",
              children: [
                o.jsx("label", {
                  className: "block text-base font-medium text-gray-700",
                  children: r("time.end"),
                }),
                o.jsxs("div", {
                  className: "flex flex-col sm:flex-row gap-3",
                  children: [
                    o.jsx("input", {
                      type: "date",
                      value: me(t, "yyyy-MM-dd"),
                      onChange: (s) =>
                        l(
                          me(e, "yyyy-MM-dd"),
                          me(e, "HH:mm:ss"),
                          s.target.value,
                          me(t, "HH:mm:ss"),
                        ),
                      className:
                        "w-full sm:w-[180px] border rounded-lg px-3 py-2 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                    }),
                    o.jsx("input", {
                      type: "time",
                      value: me(t, "HH:mm:ss"),
                      onChange: (s) =>
                        l(
                          me(e, "yyyy-MM-dd"),
                          me(e, "HH:mm:ss"),
                          me(t, "yyyy-MM-dd"),
                          s.target.value,
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
  Ny = ({
    orders: e,
    startDate: t,
    endDate: n,
    onDateChange: r,
    isLoading: l,
  }) => {
    const { t: s } = kt(),
      [i, a] = p.useState(null),
      [u, c] = p.useState(!1),
      [m, f] = p.useState(!1),
      [y, v] = p.useState(!1),
      [N, w] = p.useState(!1),
      [j, g] = p.useState(""),
      [d, h] = p.useState(null),
      [S, x] = p.useState(!1),
      [k, C] = p.useState("name"),
      [D, z] = p.useState(""),
      [$, Z] = p.useState("all"),
      [H, ee] = p.useState(new Set()),
      le = (b) => {
        if (!b || b === "0001-01-01T00:00:00" || b === "1/01/01 00:00:00")
          return "-";
        try {
          let q;
          if (b.includes("/")) {
            const [Y, ot] = b.split(" "),
              [_, P, E] = Y.split("/");
            q = new Date(
              `${_}-${P.padStart(2, "0")}-${E.padStart(2, "0")}T${ot}`,
            );
          } else q = new Date(b);
          return me(q, "yyyy-MM-dd HH:mm:ss");
        } catch {
          return b;
        }
      },
      oe = [
        { value: "name", label: s("app.filter.name") },
        { value: "code", label: s("app.filter.code") },
        { value: "requestingUnit", label: s("app.requestingUnit") },
      ],
      ye = [
        { value: "all", label: s("app.requisitionType.all") },
        { value: "一般申領", label: s("app.requisitionType.general") },
        { value: "緊急申領", label: s("app.requisitionType.urgent") },
      ],
      G = e.filter((b) => {
        if (D) {
          const q = D.toLowerCase();
          let Y = !1;
          switch (k) {
            case "name":
              Y = b.name.toLowerCase().includes(q);
              break;
            case "code":
              Y = b.code.toLowerCase().includes(q);
              break;
            case "requestingUnit":
              Y = b.requestingUnit.toLowerCase().includes(q);
              break;
            default:
              Y = !0;
          }
          if (!Y) return !1;
        }
        return $ !== "all" ? b.actionType === $ : !0;
      }),
      O = async () => {
        if (i) {
          (x(!0), h(null));
          try {
            const b = await Oe("/api/materialRequisition/delete_by_guid", {
              method: "POST",
              body: { ValueAry: [i.GUID] },
            });
            if (b.Code === 200) (f(!1), c(!1), r(t, n));
            else throw new Error(b.Result || "刪除失敗");
          } catch (b) {
            h(b instanceof Error ? b.message : "系統錯誤，請稍後再試");
          } finally {
            x(!1);
          }
        }
      },
      F = async () => {
        if (H.size !== 0) {
          (x(!0), h(null));
          try {
            const b = Array.from(H).join(";"),
              q = await Oe("/api/materialRequisition/delete_by_guid", {
                method: "POST",
                body: { ValueAry: [b] },
              });
            if (q.Code === 200) (v(!1), ee(new Set()), r(t, n));
            else throw new Error(q.Result || "批次刪除失敗");
          } catch (b) {
            h(b instanceof Error ? b.message : "系統錯誤，請稍後再試");
          } finally {
            x(!1);
          }
        }
      },
      R = (b, q) => {
        q.stopPropagation();
        const Y = new Set(H);
        (Y.has(b) ? Y.delete(b) : Y.add(b), ee(Y));
      },
      U = () => {
        const b = G.filter((q) => q.state === "等待過帳");
        if (H.size === b.length) ee(new Set());
        else {
          const q = b.map((Y) => Y.GUID);
          ee(new Set(q));
        }
      },
      W = async () => {
        if (i) {
          if (!j || isNaN(Number(j)) || Number(j) <= 0) {
            h("請輸入有效的數量");
            return;
          }
          (x(!0), h(null));
          try {
            const b = await Oe("/api/materialRequisition/update_qty", {
              method: "POST",
              body: { Data: { GUID: i.GUID, requestedQuantity: j } },
            });
            if (b.Code === 200) (c(!1), r(t, n));
            else throw new Error(b.Result || "更新失敗");
          } catch (b) {
            h(b instanceof Error ? b.message : "系統錯誤，請稍後再試");
          } finally {
            x(!1);
          }
        }
      },
      we = (b) => {
        b.state === "等待過帳" &&
          (a(b), g(b.requestedQuantity), h(null), c(!0));
      },
      J = (b) => {
        b.preventDefault();
      },
      Ge = (b) => {
        const q = b.state === "等待過帳";
        return o.jsxs(
          "div",
          {
            onClick: () => we(b),
            className: `
          p-4 rounded-lg border mb-4 transition-colors duration-150
          ${q ? "bg-yellow-50 hover:bg-yellow-100 cursor-pointer border-yellow-200" : "bg-white border-gray-200"}
        `,
            children: [
              o.jsxs("div", {
                className: "flex justify-between items-start mb-3",
                children: [
                  o.jsxs("div", {
                    className: "flex items-start gap-3 flex-1",
                    children: [
                      q &&
                        o.jsx("input", {
                          type: "checkbox",
                          checked: H.has(b.GUID),
                          onChange: (Y) => R(b.GUID, Y),
                          onClick: (Y) => Y.stopPropagation(),
                          className:
                            "mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",
                        }),
                      o.jsxs("div", {
                        className: "space-y-1",
                        children: [
                          o.jsx("div", {
                            className: "font-medium text-gray-900",
                            children: b.name,
                          }),
                          o.jsx("div", {
                            className: "font-mono text-sm text-gray-600",
                            children: b.code,
                          }),
                        ],
                      }),
                    ],
                  }),
                  o.jsx("span", {
                    className: `px-2 py-1 rounded-full text-xs font-medium ${b.state === "等待過帳" ? "bg-yellow-100 text-yellow-800" : b.state === "已過帳" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`,
                    children: b.state,
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "grid grid-cols-2 gap-x-4 gap-y-3",
                children: [
                  o.jsxs("div", {
                    children: [
                      o.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: s("app.requestingUnit"),
                      }),
                      o.jsx("div", {
                        className: "font-medium",
                        children: b.requestingUnit,
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    children: [
                      o.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: s("app.requisitionType"),
                      }),
                      o.jsx("div", {
                        className: "font-medium",
                        children: b.actionType,
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    children: [
                      o.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: s("table.requestedQuantity"),
                      }),
                      o.jsx("div", {
                        className: "font-medium",
                        children: b.requestedQuantity,
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    children: [
                      o.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: s("table.actualQuantity"),
                      }),
                      o.jsx("div", {
                        className: "font-medium",
                        children: b.actualQuantity || "-",
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    children: [
                      o.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: s("table.requestingPerson"),
                      }),
                      o.jsx("div", {
                        className: "font-medium",
                        children: b.requestingPerson || "-",
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    children: [
                      o.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: s("table.issuingPerson"),
                      }),
                      o.jsx("div", {
                        className: "font-medium",
                        children: b.issuingPerson || "-",
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    children: [
                      o.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: s("table.issuingUnit"),
                      }),
                      o.jsx("div", {
                        className: "font-medium",
                        children: b.issuingUnit || "-",
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    children: [
                      o.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: s("table.requestTime"),
                      }),
                      o.jsx("div", {
                        className: "font-medium",
                        children: le(b.requestTime),
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    children: [
                      o.jsx("div", {
                        className: "text-gray-500 mb-1",
                        children: s("table.issueTime"),
                      }),
                      o.jsx("div", {
                        className: "font-medium",
                        children: le(b.issueTime),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          },
          b.GUID,
        );
      };
    return o.jsxs("div", {
      children: [
        o.jsx("h2", {
          className: "text-xl font-bold text-gray-900 mb-6",
          children: s("app.orders.title"),
        }),
        o.jsx("div", {
          className: "mb-6",
          children: o.jsx(wy, { startDate: t, endDate: n, onDateChange: r }),
        }),
        H.size > 0 &&
          o.jsxs("div", {
            className:
              "mb-4 flex items-center justify-between bg-blue-50 p-4 rounded-lg",
            children: [
              o.jsxs("span", {
                className: "text-base font-medium text-blue-900",
                children: ["已選擇 ", H.size, " 筆申領單"],
              }),
              o.jsxs("button", {
                onClick: () => v(!0),
                className:
                  "px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2",
                children: [o.jsx(Iu, { size: 18 }), "批次刪除"],
              }),
            ],
          }),
        o.jsx("div", {
          className: "mb-6",
          children: o.jsxs("form", {
            onSubmit: J,
            className: "flex flex-wrap items-center gap-4",
            children: [
              o.jsxs("div", {
                className: "flex gap-3",
                children: [
                  o.jsx("select", {
                    value: k,
                    onChange: (b) => C(b.target.value),
                    className:
                      "w-32 px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                    children: oe.map((b) =>
                      o.jsx(
                        "option",
                        { value: b.value, children: b.label },
                        b.value,
                      ),
                    ),
                  }),
                  o.jsxs("div", {
                    className: "relative w-64",
                    children: [
                      o.jsx("input", {
                        type: "text",
                        value: D,
                        onChange: (b) => z(b.target.value),
                        placeholder: s("app.filter.placeholder"),
                        className:
                          "w-full pl-10 pr-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base",
                      }),
                      o.jsx(uf, {
                        className: "absolute left-3 top-2.5 text-gray-400",
                        size: 20,
                      }),
                    ],
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "flex items-center gap-4 ml-auto",
                children: [
                  o.jsxs("span", {
                    className:
                      "text-base font-medium text-gray-700 whitespace-nowrap",
                    children: [s("app.requisitionType"), ":"],
                  }),
                  o.jsx("div", {
                    className: "flex gap-4",
                    children: ye.map((b) =>
                      o.jsxs(
                        "label",
                        {
                          className:
                            "flex items-center gap-2 cursor-pointer whitespace-nowrap",
                          children: [
                            o.jsx("input", {
                              type: "radio",
                              name: "requisitionType",
                              value: b.value,
                              checked: $ === b.value,
                              onChange: (q) => Z(q.target.value),
                              className:
                                "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300",
                            }),
                            o.jsx("span", {
                              className: "text-base text-gray-700",
                              children: b.label,
                            }),
                          ],
                        },
                        b.value,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
        }),
        d &&
          o.jsxs("div", {
            className:
              "mb-6 p-4 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
            children: [
              o.jsx(Gn, { size: 20 }),
              o.jsx("span", { className: "text-base", children: d }),
            ],
          }),
        l
          ? o.jsxs("div", {
              className: "text-center py-8",
              children: [
                o.jsx("div", {
                  className:
                    "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto",
                }),
                o.jsx("p", {
                  className: "mt-2 text-base text-gray-600",
                  children: s("app.orders.loading"),
                }),
              ],
            })
          : G.length === 0
            ? o.jsx("div", {
                className: "text-center py-8 text-base text-gray-500",
                children: s("app.orders.empty"),
              })
            : o.jsxs(o.Fragment, {
                children: [
                  o.jsx("div", {
                    className: "sm:hidden space-y-4",
                    children: G.map(Ge),
                  }),
                  o.jsx("div", {
                    className:
                      "hidden sm:block overflow-x-auto border border-gray-200 rounded-lg",
                    children: o.jsxs("table", {
                      className: "min-w-full",
                      children: [
                        o.jsx("thead", {
                          className: "bg-gray-50",
                          children: o.jsxs("tr", {
                            children: [
                              o.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: o.jsx("input", {
                                  type: "checkbox",
                                  checked:
                                    H.size ===
                                      G.filter((b) => b.state === "等待過帳")
                                        .length &&
                                    G.filter((b) => b.state === "等待過帳")
                                      .length > 0,
                                  onChange: U,
                                  className:
                                    "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",
                                }),
                              }),
                              o.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: s("app.requestingUnit"),
                              }),
                              o.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: s("app.requisitionType"),
                              }),
                              o.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: s("table.drugCode"),
                              }),
                              o.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: s("table.drugName"),
                              }),
                              o.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: s("table.requestedQuantity"),
                              }),
                              o.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: s("table.actualQuantity"),
                              }),
                              o.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: s("table.requestTime"),
                              }),
                              o.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: s("table.requestingPerson"),
                              }),
                              o.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: s("table.status"),
                              }),
                              o.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: s("table.issueTime"),
                              }),
                              o.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: s("table.issuingPerson"),
                              }),
                              o.jsx("th", {
                                className:
                                  "px-6 py-3 text-left text-base font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap",
                                children: s("table.issuingUnit"),
                              }),
                            ],
                          }),
                        }),
                        o.jsx("tbody", {
                          className: "bg-white divide-y divide-gray-200",
                          children: G.map((b) => {
                            const q = b.state === "等待過帳";
                            return o.jsxs(
                              "tr",
                              {
                                onClick: () => we(b),
                                className: `
                        transition-colors duration-150
                        ${q ? "bg-yellow-50 hover:bg-yellow-100 cursor-pointer" : "hover:bg-gray-50"}
                      `,
                                children: [
                                  o.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                    children:
                                      q &&
                                      o.jsx("input", {
                                        type: "checkbox",
                                        checked: H.has(b.GUID),
                                        onChange: (Y) => R(b.GUID, Y),
                                        onClick: (Y) => Y.stopPropagation(),
                                        className:
                                          "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",
                                      }),
                                  }),
                                  o.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                    children: b.requestingUnit,
                                  }),
                                  o.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                    children: b.actionType,
                                  }),
                                  o.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap font-mono text-base text-gray-900",
                                    children: b.code,
                                  }),
                                  o.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                    children: b.name,
                                  }),
                                  o.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base font-medium text-gray-900",
                                    children: b.requestedQuantity,
                                  }),
                                  o.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base font-medium text-gray-900",
                                    children: b.actualQuantity || "-",
                                  }),
                                  o.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base text-gray-500",
                                    children: le(b.requestTime),
                                  }),
                                  o.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                    children: b.requestingPerson || "-",
                                  }),
                                  o.jsx("td", {
                                    className: "px-6 py-3 whitespace-nowrap",
                                    children: o.jsx("span", {
                                      className: `px-2 py-1 rounded-full text-xs font-medium ${b.state === "等待過帳" ? "bg-yellow-100 text-yellow-800" : b.state === "已過帳" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`,
                                      children: b.state,
                                    }),
                                  }),
                                  o.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base text-gray-500",
                                    children: le(b.issueTime),
                                  }),
                                  o.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                    children: b.issuingPerson || "-",
                                  }),
                                  o.jsx("td", {
                                    className:
                                      "px-6 py-3 whitespace-nowrap text-base text-gray-900",
                                    children: b.issuingUnit || "-",
                                  }),
                                ],
                              },
                              b.GUID,
                            );
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
        o.jsx(Xe, {
          appear: !0,
          show: u,
          as: p.Fragment,
          children: o.jsxs(Ke, {
            as: "div",
            className: "relative z-50",
            onClose: () => !S && c(!1),
            children: [
              o.jsx(Xe.Child, {
                as: p.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: o.jsx("div", {
                  className: "fixed inset-0 bg-black bg-opacity-25",
                }),
              }),
              o.jsx("div", {
                className: "fixed inset-0 overflow-y-auto",
                children: o.jsx("div", {
                  className:
                    "flex min-h-full items-center justify-center p-4 text-center",
                  children: o.jsx(Xe.Child, {
                    as: p.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: o.jsxs(Ke.Panel, {
                      className:
                        "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                      children: [
                        o.jsx(Ke.Title, {
                          as: "h3",
                          className: "text-xl font-bold text-gray-900 mb-6",
                          children: "編輯申領單",
                        }),
                        i &&
                          o.jsxs("div", {
                            className: "space-y-6",
                            children: [
                              o.jsxs("div", {
                                className: "grid grid-cols-2 gap-x-4 gap-y-4",
                                children: [
                                  o.jsxs("div", {
                                    children: [
                                      o.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: s("app.requestingUnit"),
                                      }),
                                      o.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: i.requestingUnit,
                                      }),
                                    ],
                                  }),
                                  o.jsxs("div", {
                                    children: [
                                      o.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: s("app.requisitionType"),
                                      }),
                                      o.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: i.actionType,
                                      }),
                                    ],
                                  }),
                                  o.jsxs("div", {
                                    children: [
                                      o.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: s("table.requestedQuantity"),
                                      }),
                                      o.jsx("div", {
                                        className: "flex gap-2 items-center",
                                        children: o.jsx("input", {
                                          type: "text",
                                          value: j,
                                          onClick: () => w(!0),
                                          readOnly: !0,
                                          className:
                                            "w-32 p-2 border rounded text-base cursor-pointer",
                                          placeholder: s(
                                            "app.quantity.placeholder",
                                          ),
                                        }),
                                      }),
                                    ],
                                  }),
                                  o.jsxs("div", {
                                    children: [
                                      o.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: s("table.actualQuantity"),
                                      }),
                                      o.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: i.actualQuantity || "-",
                                      }),
                                    ],
                                  }),
                                  o.jsxs("div", {
                                    children: [
                                      o.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: s("table.requestingPerson"),
                                      }),
                                      o.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: i.requestingPerson || "-",
                                      }),
                                    ],
                                  }),
                                  o.jsxs("div", {
                                    children: [
                                      o.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: s("table.issuingPerson"),
                                      }),
                                      o.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: i.issuingPerson || "-",
                                      }),
                                    ],
                                  }),
                                  o.jsxs("div", {
                                    children: [
                                      o.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: s("table.issuingUnit"),
                                      }),
                                      o.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: i.issuingUnit || "-",
                                      }),
                                    ],
                                  }),
                                  o.jsxs("div", {
                                    children: [
                                      o.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: s("table.requestTime"),
                                      }),
                                      o.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: le(i.requestTime),
                                      }),
                                    ],
                                  }),
                                  o.jsxs("div", {
                                    children: [
                                      o.jsx("label", {
                                        className:
                                          "block text-base font-medium text-gray-700 mb-1",
                                        children: s("table.issueTime"),
                                      }),
                                      o.jsx("div", {
                                        className: "text-base text-gray-900",
                                        children: le(i.issueTime),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              d &&
                                o.jsxs("div", {
                                  className:
                                    "p-4 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
                                  children: [
                                    o.jsx(Gn, { size: 20 }),
                                    o.jsx("span", {
                                      className: "text-base",
                                      children: d,
                                    }),
                                  ],
                                }),
                              o.jsxs("div", {
                                className: "mt-6 flex justify-between gap-4",
                                children: [
                                  o.jsxs("button", {
                                    type: "button",
                                    onClick: () => f(!0),
                                    disabled: S,
                                    className:
                                      "inline-flex justify-center items-center gap-2 rounded-md border border-transparent bg-red-100 px-4 py-2 text-base font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: [o.jsx(Iu, { size: 16 }), "刪除"],
                                  }),
                                  o.jsxs("div", {
                                    className: "flex gap-2",
                                    children: [
                                      o.jsx("button", {
                                        type: "button",
                                        onClick: () => !S && c(!1),
                                        disabled: S,
                                        className:
                                          "inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: "取消",
                                      }),
                                      o.jsx("button", {
                                        type: "button",
                                        onClick: W,
                                        disabled: S,
                                        className:
                                          "inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-base font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: S ? "處理中..." : "儲存",
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
        o.jsx(Xe, {
          appear: !0,
          show: m,
          as: p.Fragment,
          children: o.jsxs(Ke, {
            as: "div",
            className: "relative z-[60]",
            onClose: () => !S && f(!1),
            children: [
              o.jsx(Xe.Child, {
                as: p.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: o.jsx("div", {
                  className: "fixed inset-0 bg-black bg-opacity-25",
                }),
              }),
              o.jsx("div", {
                className: "fixed inset-0 overflow-y-auto",
                children: o.jsx("div", {
                  className:
                    "flex min-h-full items-center justify-center p-4 text-center",
                  children: o.jsx(Xe.Child, {
                    as: p.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: o.jsxs(Ke.Panel, {
                      className:
                        "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                      children: [
                        o.jsx(Ke.Title, {
                          as: "h3",
                          className: "text-xl font-bold text-gray-900 mb-6",
                          children: "確認刪除申領單",
                        }),
                        o.jsx("div", {
                          className: "mt-2",
                          children: o.jsx("p", {
                            className: "text-base text-gray-500",
                            children: "確定要刪除此筆申領資料嗎？",
                          }),
                        }),
                        o.jsxs("div", {
                          className: "mt-6 flex justify-end gap-3",
                          children: [
                            o.jsx("button", {
                              type: "button",
                              onClick: () => !S && f(!1),
                              disabled: S,
                              className:
                                "inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                              children: "取消",
                            }),
                            o.jsx("button", {
                              type: "button",
                              onClick: O,
                              disabled: S,
                              className:
                                "inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                              children: S ? "處理中..." : "確認刪除",
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
        o.jsx(Xe, {
          appear: !0,
          show: y,
          as: p.Fragment,
          children: o.jsxs(Ke, {
            as: "div",
            className: "relative z-50",
            onClose: () => !S && v(!1),
            children: [
              o.jsx(Xe.Child, {
                as: p.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: o.jsx("div", {
                  className: "fixed inset-0 bg-black bg-opacity-25",
                }),
              }),
              o.jsx("div", {
                className: "fixed inset-0 overflow-y-auto",
                children: o.jsx("div", {
                  className:
                    "flex min-h-full items-center justify-center p-4 text-center",
                  children: o.jsx(Xe.Child, {
                    as: p.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: o.jsxs(Ke.Panel, {
                      className:
                        "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                      children: [
                        o.jsx(Ke.Title, {
                          as: "h3",
                          className: "text-xl font-bold text-gray-900 mb-6",
                          children: "確認批次刪除申領單",
                        }),
                        o.jsx("div", {
                          className: "mt-2",
                          children: o.jsxs("p", {
                            className: "text-base text-gray-500",
                            children: [
                              "確定要刪除已選擇的 ",
                              o.jsx("span", {
                                className: "font-bold text-gray-900",
                                children: H.size,
                              }),
                              " 筆申領資料嗎？",
                            ],
                          }),
                        }),
                        d &&
                          o.jsxs("div", {
                            className:
                              "mt-4 p-4 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
                            children: [
                              o.jsx(Gn, { size: 20 }),
                              o.jsx("span", {
                                className: "text-base",
                                children: d,
                              }),
                            ],
                          }),
                        o.jsxs("div", {
                          className: "mt-6 flex justify-end gap-3",
                          children: [
                            o.jsx("button", {
                              type: "button",
                              onClick: () => !S && v(!1),
                              disabled: S,
                              className:
                                "inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                              children: "取消",
                            }),
                            o.jsx("button", {
                              type: "button",
                              onClick: F,
                              disabled: S,
                              className:
                                "inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
                              children: S ? "處理中..." : "確認刪除",
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
        N && o.jsx(Na, { value: j, onChange: g, onClose: () => w(!1) }),
      ],
    });
  },
  Of = (e) => {
    const t = e.find((n) => n.name === "申領建單");
    return (t == null ? void 0 : t.state) === !0;
  },
  Sy = (e) =>
    Of(e.Permissions)
      ? (sessionStorage.setItem("user_session", JSON.stringify(e)), !0)
      : !1,
  Us = () => {
    const e = sessionStorage.getItem("user_session");
    if (!e) return null;
    try {
      const t = JSON.parse(e);
      return !t.GUID || !t.ID || !t.Name || !Of(t.Permissions)
        ? (vs(), null)
        : t;
    } catch {
      return (vs(), null);
    }
  },
  vs = () => {
    sessionStorage.removeItem("user_session");
  },
  ky = () => {
    const e = Us();
    if (!e) return !1;
    const t = new Date(e.loginTime).getTime();
    return (new Date().getTime() - t) / (1e3 * 60 * 60) > 24 ? (vs(), !1) : !0;
  },
  Mf = () => {
    const e = Us();
    return (e == null ? void 0 : e.Name) || "";
  },
  _f = () => {
    const e = Us();
    return (e == null ? void 0 : e.ID) || "";
  },
  jy = ({
    onLogin: e,
    className: t = "",
    title: n = "申領建單系統",
    logo: r,
  }) => {
    const [l, s] = p.useState(""),
      [i, a] = p.useState(""),
      [u, c] = p.useState(null),
      [m, f] = p.useState(!1),
      y = async (v) => {
        (v.preventDefault(), c(null), f(!0));
        try {
          const N = await Oe("/api/session/login", {
            method: "POST",
            body: { Data: { ID: l, Password: i } },
          });
          if (N.Code === 200) {
            if (!Sy(N.Data)) {
              c("無申領建單權限，無法登入");
              return;
            }
            e();
          } else c(N.Result || "登入失敗，請檢查帳號密碼是否正確");
        } catch (N) {
          (console.error("Login error:", N),
            c(N instanceof Error ? N.message : "系統錯誤，請稍後再試"));
        } finally {
          f(!1);
        }
      };
    return o.jsx("div", {
      className: `min-h-screen bg-gray-100 flex items-center justify-center p-4 ${t}`,
      children: o.jsxs("div", {
        className: "bg-white rounded-lg shadow-md p-8 w-full max-w-md",
        children: [
          r &&
            o.jsx("div", {
              className: "mb-6 flex justify-center",
              children: r,
            }),
          o.jsx("h1", {
            className: "text-2xl font-bold text-center mb-8",
            children: n,
          }),
          u &&
            o.jsxs("div", {
              className:
                "mb-6 p-4 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
              children: [
                o.jsx(Gn, { size: 20 }),
                o.jsx("span", { children: u }),
              ],
            }),
          o.jsxs("form", {
            onSubmit: y,
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
                    value: l,
                    onChange: (v) => s(v.target.value),
                    className:
                      "w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                    required: !0,
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
                    value: i,
                    onChange: (v) => a(v.target.value),
                    className:
                      "w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                    required: !0,
                  }),
                ],
              }),
              o.jsx("button", {
                type: "submit",
                disabled: m,
                className: `w-full py-2 px-4 rounded font-medium transition-colors duration-200 ${m ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"}`,
                children: m ? "登入中..." : "登入",
              }),
            ],
          }),
        ],
      }),
    });
  },
  by = () => {
    const { language: e, toggleLanguage: t } = kt();
    return o.jsxs("button", {
      onClick: t,
      className:
        "inline-flex items-center px-2 sm:px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      title: e === "zh" ? "繁體中文" : "English",
      children: [
        o.jsx(y0, { className: "h-4 w-4" }),
        o.jsx("span", {
          className: "ml-2 hidden sm:inline",
          children: e === "zh" ? "繁體中文" : "English",
        }),
      ],
    });
  },
  Ey = ({ title: e }) =>
    o.jsx("h1", {
      className: "text-2xl md:text-3xl font-semibold text-gray-800",
      children: e,
    }),
  Cy = () => {
    const e = Us();
    return e
      ? o.jsxs("p", {
          className: "text-sm text-gray-600",
          children: [e.Name, " - ", e.Employer],
        })
      : null;
  },
  Py = ({ onLogout: e }) => {
    const { t } = kt();
    return o.jsxs("button", {
      onClick: e,
      className:
        "inline-flex items-center px-2 sm:px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      title: t("button.logout"),
      children: [
        o.jsx(x0, { className: "h-4 w-4" }),
        o.jsx("span", {
          className: "ml-2 hidden sm:inline",
          children: t("button.logout"),
        }),
      ],
    });
  },
  Ty = () => {
    const { t: e } = kt(),
      t = () => {
        const n = yy();
        n != null &&
          n.homepage &&
          (window.location.href = `${n.homepage}/phar_system/frontpage/`);
      };
    return o.jsxs("button", {
      onClick: t,
      className:
        "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors group relative",
      title: e("platform.title"),
      children: [
        o.jsx(v0, { size: 24 }),
        o.jsx("span", {
          className:
            "absolute left-1/2 -translate-x-1/2 -bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
          children: e("platform.title"),
        }),
      ],
    });
  },
  Dy = ({ onLogout: e }) => {
    const { t } = kt();
    return o.jsx("header", {
      className: "bg-white",
      children: o.jsx("div", {
        className: "w-full mx-auto p-4",
        children: o.jsxs("div", {
          className: "flex justify-between items-center",
          children: [
            o.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                o.jsx(Ty, {}),
                o.jsxs("div", {
                  className: "flex flex-col",
                  children: [
                    o.jsx(Ey, { title: t("app.title") }),
                    o.jsx(Cy, {}),
                  ],
                }),
              ],
            }),
            o.jsxs("div", {
              className: "flex items-center gap-4",
              children: [o.jsx(by, {}), o.jsx(Py, { onLogout: e })],
            }),
          ],
        }),
      }),
    });
  },
  Lf = ({ message: e, onClose: t, duration: n = 3e3, type: r = "success" }) => {
    const [l, s] = p.useState(!1);
    p.useEffect(() => {
      const c = setTimeout(() => {
        (s(!0),
          setTimeout(() => {
            t();
          }, 300));
      }, n);
      return () => clearTimeout(c);
    }, [n, t]);
    const i = () => {
        (s(!0),
          setTimeout(() => {
            t();
          }, 300));
      },
      a =
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
      u = o.jsxs("div", {
        className: `fixed top-4 right-4 min-w-[200px] max-w-[400px] flex items-center gap-2 ${a.bg} ${a.text} px-4 py-3 rounded-lg shadow-xl border ${a.border} ${l ? "animate-slide-out" : "animate-slide-in"}`,
        style: { zIndex: 1e6 },
        children: [
          r === "success"
            ? o.jsx(g0, { size: 20, className: a.icon })
            : o.jsx(Gn, { size: 20, className: a.icon }),
          o.jsx("span", { className: "text-sm font-medium", children: e }),
          o.jsx("button", {
            onClick: i,
            className: `ml-2 ${a.button} transition-colors duration-150`,
            children: o.jsx(Zr, { size: 16 }),
          }),
        ],
      });
    return Fs.createPortal(u, document.body);
  },
  Oy = ({
    drugs: e,
    warehouses: t,
    onSubmit: n,
    isSubmitting: r,
    resetTrigger: l = 0,
    onOpenBarcodeDialog: s,
  }) => {
    var ot;
    const { t: i } = kt(),
      [a, u] = p.useState(""),
      [c, m] = p.useState([]),
      [f, y] = p.useState(null),
      [v, N] = p.useState(""),
      [w, j] = p.useState(""),
      [g, d] = p.useState(!1),
      [h, S] = p.useState(null),
      [x, k] = p.useState(null),
      [C, D] = p.useState(null),
      [z, $] = p.useState(!1),
      [Z, H] = p.useState(!1),
      [ee, le] = p.useState(!1),
      [oe, ye] = p.useState(""),
      G = t.filter((_) => _.displayName !== "藥庫" && _.type !== "藥庫"),
      O = t.filter((_) => _.type === "藥庫"),
      F = O[0];
    (p.useEffect(() => {
      O.length > 0 && !oe && ye(O[0].name);
    }, [t]),
      p.useEffect(() => {
        l > 0 &&
          (u(""), m([]), y(null), j(""), S(null), k(null), D(null), le(!1));
      }, [l]));
    const R = (_) => {
        const P = _.target.value;
        if ((u(P), !P.trim())) {
          m([]);
          return;
        }
        const E = P.toLowerCase(),
          M = e
            .filter((I) => {
              var V;
              return (
                I.NAME.toLowerCase().includes(E) ||
                I.CODE.toLowerCase().includes(E) ||
                I.CHT_NAME.toLowerCase().includes(E) ||
                ((V = I.SKDIACODE) == null
                  ? void 0
                  : V.toLowerCase().includes(E))
              );
            })
            .slice(0, 10);
        m(M);
      },
      U = (_) => {
        (y(_),
          u(""),
          m([]),
          S(null),
          (!w || w === "" || w === "0") &&
            setTimeout(() => {
              d(!0);
            }, 300));
      },
      W = async (_, P) => {
        $(!0);
        try {
          const E = t.find((Ae) => Ae.displayName === P || Ae.name === P),
            M = (E == null ? void 0 : E.type) || "藥庫",
            V = (
              await Oe("/api/stock/get_stock_by_code", {
                method: "POST",
                body: { ServerName: P, ServerType: M, ValueAry: [_] },
              })
            ).Data[0];
          (S(V), D(null));
        } catch (E) {
          (console.error("Error fetching stock:", E),
            D({ message: "無法取得庫存資料，請稍後再試", type: "error" }),
            S(null));
        } finally {
          $(!1);
        }
      },
      we = async (_, P) => {
        H(!0);
        try {
          const M = (
            await Oe("/api/stock/get_stock_by_code", {
              method: "POST",
              body: { ServerName: P, ServerType: "藥庫", ValueAry: [_] },
            })
          ).Data[0];
          k(M);
        } catch (E) {
          (console.error("Error fetching pharmacy stock:", E), k(null));
        } finally {
          H(!1);
        }
      };
    (p.useEffect(() => {
      f && v ? W(f.CODE, v) : S(null);
    }, [f, v]),
      p.useEffect(() => {
        f && F ? we(f.CODE, F.name) : k(null);
      }, [f, F]));
    const J = (_) => {
        const P = _.target.value;
        (N(P), D(null));
      },
      Ge = (_) => {
        const P = _.target.value;
        (P === "" || /^\d+$/.test(P)) && j(P);
      },
      b = async (_) => {
        if ((_ && _.preventDefault(), !f)) {
          D({ message: "請選擇藥品", type: "error" });
          return;
        }
        if (!v) {
          D({ message: "請選擇申領單位", type: "error" });
          return;
        }
        if (!w) {
          D({ message: "請輸入申領數量", type: "error" });
          return;
        }
        const P =
            h != null && h.qty
              ? h.qty.reduce((M, I) => M + parseInt(I || "0"), 0).toString()
              : "0",
          E =
            x != null && x.qty
              ? x.qty.reduce((M, I) => M + parseInt(I || "0"), 0).toString()
              : "0";
        await n({
          drug: f,
          sourceWarehouse: v,
          destinationWarehouse: "",
          quantity: w,
          stockInfo: h,
          isUrgent: ee,
          issuingUnit: oe,
          requestStoreInventory: P,
          actualStoreInventory: E,
        });
      },
      q = (_) => {
        _.key === "Enter" && a && c.length > 0 && U(c[0]);
      },
      Y = (_) => (!_ || _ === "2050/01/01" ? "無期限" : _);
    return o.jsxs(o.Fragment, {
      children: [
        C &&
          o.jsx(Lf, {
            message: C.message,
            type: C.type,
            onClose: () => D(null),
          }),
        o.jsxs("form", {
          onSubmit: b,
          className:
            "bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6 space-y-6",
          children: [
            o.jsxs("div", {
              children: [
                o.jsxs("div", {
                  className: "flex gap-2",
                  children: [
                    o.jsxs("div", {
                      className: "relative flex-1",
                      children: [
                        o.jsx("input", {
                          type: "text",
                          value: a,
                          onChange: R,
                          onKeyPress: q,
                          placeholder: i("app.search.placeholder"),
                          className:
                            "w-full px-3 py-2 pl-8 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900",
                        }),
                        o.jsx(uf, {
                          size: 18,
                          className: "absolute left-2 top-2.5 text-gray-400",
                        }),
                      ],
                    }),
                    s &&
                      o.jsxs("button", {
                        type: "button",
                        onClick: s,
                        className:
                          "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2",
                        children: [
                          o.jsx(af, { size: 18 }),
                          o.jsx("span", { children: "掃碼建單" }),
                        ],
                      }),
                  ],
                }),
                c.length > 0 &&
                  o.jsx("div", {
                    className:
                      "mt-2 max-h-60 overflow-y-auto border rounded-lg shadow-sm",
                    children: c.map((_) =>
                      o.jsxs(
                        "div",
                        {
                          onClick: () => U(_),
                          className:
                            "p-4 hover:bg-gray-50 cursor-pointer border-b transition-colors duration-150",
                          children: [
                            o.jsx("div", {
                              className: "text-base font-medium text-gray-900",
                              children: _.NAME,
                            }),
                            o.jsxs("div", {
                              className: "text-base text-gray-600",
                              children: ["藥碼: ", _.CODE],
                            }),
                            _.SKDIACODE &&
                              o.jsxs("div", {
                                className: "text-base text-gray-600",
                                children: ["料號: ", _.SKDIACODE],
                              }),
                            _.CHT_NAME &&
                              o.jsx("div", {
                                className: "text-base text-gray-600",
                                children: _.CHT_NAME,
                              }),
                          ],
                        },
                        _.GUID,
                      ),
                    ),
                  }),
              ],
            }),
            o.jsxs("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
              children: [
                o.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    o.jsx("label", {
                      className: "block text-base font-medium text-gray-700",
                      children: i("app.drug.name"),
                    }),
                    o.jsx("div", {
                      className: "bg-gray-50 rounded-lg border border-gray-200",
                      children: f
                        ? o.jsxs("div", {
                            className: "p-4",
                            children: [
                              o.jsx("div", {
                                className:
                                  "text-base font-medium text-gray-900",
                                children: f.NAME,
                              }),
                              f.SKDIACODE &&
                                o.jsxs("div", {
                                  className: "text-base text-gray-600 mt-1",
                                  children: ["料號: ", f.SKDIACODE],
                                }),
                              f.CHT_NAME &&
                                o.jsx("div", {
                                  className: "text-base text-gray-600 mt-1",
                                  children: f.CHT_NAME,
                                }),
                            ],
                          })
                        : o.jsx("div", {
                            className: "p-4",
                            children: o.jsx("div", {
                              className: "text-base text-gray-600",
                              children: i("app.drug.notSelected"),
                            }),
                          }),
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    o.jsx("label", {
                      className: "block text-base font-medium text-gray-700",
                      children: i("app.drug.code"),
                    }),
                    o.jsx("div", {
                      className: "bg-gray-50 rounded-lg border border-gray-200",
                      children: f
                        ? o.jsx("div", {
                            className: "p-4",
                            children: o.jsx("div", {
                              className: "text-base font-medium text-gray-900",
                              children: f.CODE,
                            }),
                          })
                        : o.jsx("div", {
                            className: "p-4",
                            children: o.jsx("div", {
                              className: "text-base text-gray-600",
                              children: i("app.drug.notSelected"),
                            }),
                          }),
                    }),
                  ],
                }),
              ],
            }),
            o.jsxs("div", {
              className: "grid grid-cols-1 sm:grid-cols-3 gap-6",
              children: [
                o.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    o.jsx("label", {
                      className: "block text-base font-medium text-gray-700",
                      children: i("app.requestingUnit"),
                    }),
                    o.jsxs("select", {
                      value: v,
                      onChange: J,
                      className:
                        "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900",
                      children: [
                        o.jsx("option", {
                          value: "",
                          children: i("app.requestingUnit.placeholder"),
                        }),
                        G.map((_) =>
                          o.jsx(
                            "option",
                            { value: _.displayName, children: _.displayName },
                            _.GUID,
                          ),
                        ),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    o.jsx("label", {
                      className: "block text-base font-medium text-gray-700",
                      children: "核撥單位",
                    }),
                    o.jsx("select", {
                      value: oe,
                      onChange: (_) => ye(_.target.value),
                      className:
                        "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900",
                      children: O.map((_) =>
                        o.jsx(
                          "option",
                          { value: _.name, children: _.name },
                          _.GUID,
                        ),
                      ),
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    o.jsx("label", {
                      className: "block text-base font-medium text-gray-700",
                      children: i("app.requisitionType"),
                    }),
                    o.jsxs("div", {
                      className: "flex items-center space-x-3 pt-2",
                      children: [
                        o.jsx("input", {
                          type: "checkbox",
                          id: "urgentRequisition",
                          checked: ee,
                          onChange: (_) => le(_.target.checked),
                          className:
                            "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded",
                        }),
                        o.jsx("label", {
                          htmlFor: "urgentRequisition",
                          className: "text-base text-gray-700",
                          children: i("app.urgentRequisition"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            f &&
              v &&
              o.jsxs("div", {
                className: "space-y-4",
                children: [
                  o.jsx("label", {
                    className: "block text-base font-medium text-gray-700",
                    children: "申領單位庫存資訊",
                  }),
                  o.jsx("div", {
                    className:
                      "bg-blue-50 rounded-lg border border-blue-200 p-4",
                    children: z
                      ? o.jsxs("div", {
                          className: "flex items-center justify-center py-4",
                          children: [
                            o.jsx("div", {
                              className:
                                "animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600",
                            }),
                            o.jsx("span", {
                              className: "ml-2 text-base text-gray-600",
                              children: "載入庫存資訊中...",
                            }),
                          ],
                        })
                      : h
                        ? o.jsxs("div", {
                            className: "space-y-3",
                            children: [
                              o.jsxs("div", {
                                className:
                                  "flex items-center gap-4 text-base font-medium text-gray-900",
                                children: [
                                  o.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      o.jsx(et, {
                                        size: 18,
                                        className: "text-blue-600",
                                      }),
                                      o.jsx("span", {
                                        className: "text-gray-700",
                                        children: "申領單位:",
                                      }),
                                      o.jsx("span", {
                                        className: "font-semibold",
                                        children:
                                          ((ot = t.find(
                                            (_) =>
                                              _.displayName === v ||
                                              _.name === v,
                                          )) == null
                                            ? void 0
                                            : ot.displayName) || v,
                                      }),
                                    ],
                                  }),
                                  o.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      o.jsx(et, {
                                        size: 18,
                                        className: "text-green-600",
                                      }),
                                      o.jsx("span", {
                                        className: "text-gray-700",
                                        children: "總庫存:",
                                      }),
                                      o.jsx("span", {
                                        className:
                                          "font-semibold text-green-700",
                                        children: h.qty
                                          ? h.qty.reduce(
                                              (_, P) => _ + parseInt(P || "0"),
                                              0,
                                            )
                                          : 0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              h.lot &&
                                h.lot.length > 0 &&
                                o.jsxs("div", {
                                  className: "mt-3 space-y-2",
                                  children: [
                                    o.jsx("div", {
                                      className:
                                        "text-sm font-medium text-gray-700",
                                      children: "批號明細：",
                                    }),
                                    o.jsx("div", {
                                      className: "space-y-2",
                                      children: h.lot.map((_, P) => {
                                        var I, V;
                                        const E =
                                            ((I = h.expiry_date) == null
                                              ? void 0
                                              : I[P]) || "",
                                          M =
                                            ((V = h.qty) == null
                                              ? void 0
                                              : V[P]) || "0";
                                        return parseInt(M) <= 0
                                          ? null
                                          : o.jsx(
                                              "div",
                                              {
                                                className:
                                                  "bg-white rounded-lg border border-blue-200 p-3",
                                                children: o.jsxs("div", {
                                                  className:
                                                    "grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm",
                                                  children: [
                                                    o.jsxs("div", {
                                                      className:
                                                        "flex items-center gap-2",
                                                      children: [
                                                        o.jsx(ps, {
                                                          size: 16,
                                                          className:
                                                            "text-purple-600",
                                                        }),
                                                        o.jsx("span", {
                                                          className:
                                                            "text-gray-600",
                                                          children: "批號:",
                                                        }),
                                                        o.jsx("span", {
                                                          className:
                                                            "font-medium",
                                                          children: _ || "無",
                                                        }),
                                                      ],
                                                    }),
                                                    o.jsxs("div", {
                                                      className:
                                                        "flex items-center gap-2",
                                                      children: [
                                                        o.jsx(fs, {
                                                          size: 16,
                                                          className:
                                                            "text-green-600",
                                                        }),
                                                        o.jsx("span", {
                                                          className:
                                                            "text-gray-600",
                                                          children: "效期:",
                                                        }),
                                                        o.jsx("span", {
                                                          className:
                                                            "font-medium",
                                                          children: Y(E),
                                                        }),
                                                      ],
                                                    }),
                                                    o.jsxs("div", {
                                                      className:
                                                        "flex items-center gap-2",
                                                      children: [
                                                        o.jsx(et, {
                                                          size: 16,
                                                          className:
                                                            "text-blue-600",
                                                        }),
                                                        o.jsx("span", {
                                                          className:
                                                            "text-gray-600",
                                                          children: "數量:",
                                                        }),
                                                        o.jsx("span", {
                                                          className:
                                                            "font-medium",
                                                          children: M,
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              },
                                              P,
                                            );
                                      }),
                                    }),
                                  ],
                                }),
                            ],
                          })
                        : o.jsx("div", {
                            className: "text-base text-gray-600",
                            children: "申領單位無此藥品庫存資訊",
                          }),
                  }),
                ],
              }),
            f &&
              F &&
              o.jsxs("div", {
                className: "space-y-4",
                children: [
                  o.jsx("label", {
                    className: "block text-base font-medium text-gray-700",
                    children: "撥補單位庫存資訊",
                  }),
                  o.jsx("div", {
                    className:
                      "bg-blue-50 rounded-lg border border-blue-200 p-4",
                    children: Z
                      ? o.jsxs("div", {
                          className: "flex items-center justify-center py-4",
                          children: [
                            o.jsx("div", {
                              className:
                                "animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600",
                            }),
                            o.jsx("span", {
                              className: "ml-2 text-base text-gray-600",
                              children: "載入撥補單位庫存資訊中...",
                            }),
                          ],
                        })
                      : x
                        ? o.jsxs("div", {
                            className: "space-y-3",
                            children: [
                              o.jsxs("div", {
                                className:
                                  "flex items-center gap-4 text-base font-medium text-gray-900",
                                children: [
                                  o.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      o.jsx(et, {
                                        size: 18,
                                        className: "text-blue-600",
                                      }),
                                      o.jsx("span", {
                                        className: "text-gray-700",
                                        children: "撥補單位:",
                                      }),
                                      o.jsx("span", {
                                        className: "font-semibold",
                                        children: F.displayName || F.name,
                                      }),
                                    ],
                                  }),
                                  o.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      o.jsx(et, {
                                        size: 18,
                                        className: "text-green-600",
                                      }),
                                      o.jsx("span", {
                                        className: "text-gray-700",
                                        children: "總庫存:",
                                      }),
                                      o.jsx("span", {
                                        className:
                                          "font-semibold text-green-700",
                                        children: x.qty
                                          ? x.qty.reduce(
                                              (_, P) => _ + parseInt(P || "0"),
                                              0,
                                            )
                                          : 0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              x.lot &&
                                x.lot.length > 0 &&
                                o.jsxs("div", {
                                  className: "mt-3 space-y-2",
                                  children: [
                                    o.jsx("div", {
                                      className:
                                        "text-sm font-medium text-gray-700",
                                      children: "批號明細：",
                                    }),
                                    o.jsx("div", {
                                      className: "space-y-2",
                                      children: x.lot.map((_, P) => {
                                        var I, V;
                                        const E =
                                            ((I = x.expiry_date) == null
                                              ? void 0
                                              : I[P]) || "",
                                          M =
                                            ((V = x.qty) == null
                                              ? void 0
                                              : V[P]) || "0";
                                        return parseInt(M) <= 0
                                          ? null
                                          : o.jsx(
                                              "div",
                                              {
                                                className:
                                                  "bg-white rounded-lg border border-blue-200 p-3",
                                                children: o.jsxs("div", {
                                                  className:
                                                    "grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm",
                                                  children: [
                                                    o.jsxs("div", {
                                                      className:
                                                        "flex items-center gap-2",
                                                      children: [
                                                        o.jsx(ps, {
                                                          size: 16,
                                                          className:
                                                            "text-purple-600",
                                                        }),
                                                        o.jsx("span", {
                                                          className:
                                                            "text-gray-600",
                                                          children: "批號:",
                                                        }),
                                                        o.jsx("span", {
                                                          className:
                                                            "font-medium",
                                                          children: _ || "無",
                                                        }),
                                                      ],
                                                    }),
                                                    o.jsxs("div", {
                                                      className:
                                                        "flex items-center gap-2",
                                                      children: [
                                                        o.jsx(fs, {
                                                          size: 16,
                                                          className:
                                                            "text-green-600",
                                                        }),
                                                        o.jsx("span", {
                                                          className:
                                                            "text-gray-600",
                                                          children: "效期:",
                                                        }),
                                                        o.jsx("span", {
                                                          className:
                                                            "font-medium",
                                                          children: Y(E),
                                                        }),
                                                      ],
                                                    }),
                                                    o.jsxs("div", {
                                                      className:
                                                        "flex items-center gap-2",
                                                      children: [
                                                        o.jsx(et, {
                                                          size: 16,
                                                          className:
                                                            "text-blue-600",
                                                        }),
                                                        o.jsx("span", {
                                                          className:
                                                            "text-gray-600",
                                                          children: "數量:",
                                                        }),
                                                        o.jsx("span", {
                                                          className:
                                                            "font-medium",
                                                          children: M,
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              },
                                              P,
                                            );
                                      }),
                                    }),
                                  ],
                                }),
                            ],
                          })
                        : o.jsx("div", {
                            className: "text-base text-gray-600",
                            children: "撥補單位無此藥品庫存資訊",
                          }),
                  }),
                ],
              }),
            o.jsxs("div", {
              className: "space-y-4",
              children: [
                o.jsx("label", {
                  className: "block text-base font-medium text-gray-700",
                  children: i("app.quantity"),
                }),
                o.jsx("div", {
                  className: "flex gap-4 items-center",
                  children: o.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      o.jsx("input", {
                        type: "text",
                        value: w,
                        onChange: Ge,
                        onClick: () => d(!0),
                        placeholder: i("app.quantity.placeholder"),
                        className:
                          "w-40 px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900 cursor-pointer",
                      }),
                      (f == null ? void 0 : f.MIN_PAKAGE) &&
                        o.jsx("span", {
                          className: "text-base font-medium text-gray-700",
                          children: f.MIN_PAKAGE,
                        }),
                    ],
                  }),
                }),
              ],
            }),
            g &&
              o.jsx(Na, {
                value: w,
                onChange: j,
                onClose: () => d(!1),
                title: "請輸入申領量",
              }),
            o.jsx("button", {
              type: "submit",
              disabled: r,
              className: `w-full px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-opacity-50 ${r ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500"}`,
              children: i(r ? "app.button.processing" : "app.button.create"),
            }),
          ],
        }),
      ],
    });
  },
  My = ({
    isOpen: e,
    note: t,
    drugName: n,
    onConfirm: r,
    onCancel: l,
    isProcessing: s = !1,
  }) =>
    o.jsx(Xe, {
      appear: !0,
      show: e,
      as: p.Fragment,
      children: o.jsxs(Ke, {
        as: "div",
        className: "relative z-[60]",
        onClose: () => !s && l(),
        children: [
          o.jsx(Xe.Child, {
            as: p.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: o.jsx("div", {
              className: "fixed inset-0 bg-black bg-opacity-25",
            }),
          }),
          o.jsx("div", {
            className: "fixed inset-0 overflow-y-auto",
            children: o.jsx("div", {
              className:
                "flex min-h-full items-center justify-center p-4 text-center",
              children: o.jsx(Xe.Child, {
                as: p.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0 scale-95",
                enterTo: "opacity-100 scale-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100 scale-100",
                leaveTo: "opacity-0 scale-95",
                children: o.jsx(Ke.Panel, {
                  className:
                    "w-[90vw] max-w-md transform overflow-hidden rounded-lg bg-white p-4 md:p-6 text-left align-middle shadow-xl transition-all",
                  children: o.jsxs("div", {
                    className: "flex items-start gap-3",
                    children: [
                      o.jsx("div", {
                        className: "flex-shrink-0",
                        children: o.jsx(h0, {
                          className: "h-6 w-6 text-yellow-600",
                        }),
                      }),
                      o.jsxs("div", {
                        className: "flex-1",
                        children: [
                          o.jsx(Ke.Title, {
                            as: "h3",
                            className: "text-lg font-medium text-gray-900",
                            children: "藥品通知",
                          }),
                          o.jsxs("div", {
                            className: "mt-3 space-y-3",
                            children: [
                              o.jsxs("div", {
                                children: [
                                  o.jsx("p", {
                                    className:
                                      "text-base font-medium text-gray-700",
                                    children: "藥品名稱：",
                                  }),
                                  o.jsx("p", {
                                    className: "text-base text-gray-900 mt-1",
                                    children: n,
                                  }),
                                ],
                              }),
                              o.jsxs("div", {
                                children: [
                                  o.jsx("p", {
                                    className:
                                      "text-base font-medium text-gray-700",
                                    children: "通知內容：",
                                  }),
                                  o.jsx("div", {
                                    className:
                                      "mt-1 bg-yellow-50 border border-yellow-200 rounded-lg p-3",
                                    children: o.jsx("p", {
                                      className:
                                        "text-base text-gray-900 whitespace-pre-wrap",
                                      children: t,
                                    }),
                                  }),
                                ],
                              }),
                              o.jsx("p", {
                                className: "text-base text-gray-600",
                                children:
                                  "此藥品有特殊通知，是否要繼續建立申領單？",
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            className: "mt-6 flex justify-end gap-3",
                            children: [
                              o.jsx("button", {
                                type: "button",
                                onClick: () => !s && l(),
                                disabled: s,
                                className:
                                  "inline-flex justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                children: "取消",
                              }),
                              o.jsx("button", {
                                type: "button",
                                onClick: r,
                                disabled: s,
                                className:
                                  "inline-flex justify-center rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                                children: s ? "處理中..." : "繼續建單",
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
    });
async function _y() {
  try {
    const e = await fetch("../config.txt");
    if (!e.ok) throw new Error("Failed to load configuration");
    return (await e.json()).ai;
  } catch (e) {
    throw (console.error("載入設定檔錯誤:", e), e);
  }
}
async function Ly(e) {
  var t, n, r;
  try {
    const s = `${await _y()}/barcode`,
      i = new FormData();
    i.append("file", e);
    const a = await fetch(s, { method: "POST", body: i });
    if (!a.ok) throw new Error("API request failed");
    const u = await a.json();
    return (
      ((r =
        (n = (t = u == null ? void 0 : u.results) == null ? void 0 : t[0]) ==
        null
          ? void 0
          : n.code) == null
        ? void 0
        : r.trim()) || null
    );
  } catch (l) {
    return (console.error("條碼掃描 API 錯誤:", l), null);
  }
}
const Fy = ({ isOpen: e, onClose: t, onBarcodeDetected: n }) => {
    const r = p.useRef(null),
      l = p.useRef(null),
      s = p.useRef(null),
      i = p.useRef(null),
      [a, u] = p.useState(null),
      [c, m] = p.useState(!1),
      [f, y] = p.useState(window.innerWidth < 768),
      [v, N] = p.useState(null);
    p.useEffect(() => {
      const j = () => y(window.innerWidth < 768);
      return (
        window.addEventListener("resize", j),
        () => window.removeEventListener("resize", j)
      );
    }, []);
    const w = async (j) => {
      if (!r.current || !i.current) return;
      const g = j.currentTarget.getBoundingClientRect(),
        d = (j.clientX - g.left) / g.width,
        h = (j.clientY - g.top) / g.height;
      (N({ x: j.clientX - g.left, y: j.clientY - g.top }),
        setTimeout(() => N(null), 1e3));
      try {
        const S = i.current.getVideoTracks()[0],
          x = S.getCapabilities();
        if ("focusMode" in x) {
          const k = { advanced: [{ focusMode: "single-shot" }] };
          await S.applyConstraints(k);
        }
        if ("pointsOfInterest" in x) {
          const k = { advanced: [{ pointsOfInterest: [{ x: d, y: h }] }] };
          await S.applyConstraints(k);
        }
      } catch (S) {
        console.log("對焦功能不支援或失敗:", S);
      }
    };
    return (
      p.useEffect(() => {
        let j = null,
          g = null;
        const d = () => {
            (g && clearInterval(g),
              j &&
                (j.getTracks().forEach((x) => x.stop()), (i.current = null)));
          },
          h = async () => {
            if (!r.current || !l.current) return;
            const x = r.current,
              k = l.current,
              C = k.getContext("2d");
            if (!C || x.readyState < 2) return;
            ((k.width = x.videoWidth),
              (k.height = x.videoHeight),
              C.drawImage(x, 0, 0, k.width, k.height));
            const D = await new Promise(($) => k.toBlob($, "image/jpeg", 0.8));
            if (!D) return;
            const z = await Ly(D);
            z && (d(), n(z), t());
          };
        return (
          e
            ? (async () => {
                try {
                  ((j = await navigator.mediaDevices.getUserMedia({
                    video: {
                      facingMode: "environment",
                      width: { ideal: 1920 },
                      height: { ideal: 1080 },
                    },
                  })),
                    (i.current = j),
                    r.current && (r.current.srcObject = j),
                    m(!0),
                    (g = setInterval(h, 600)));
                } catch (x) {
                  (console.error("無法開啟相機:", x),
                    u("無法開啟相機，請確認已授權使用相機"));
                }
              })()
            : d(),
          () => d()
        );
      }, [e, n, t]),
      e
        ? f
          ? o.jsxs("div", {
              className: "fixed inset-0 bg-black text-white flex flex-col z-50",
              children: [
                o.jsxs("div", {
                  className: "absolute inset-0 w-full h-full",
                  onClick: w,
                  children: [
                    o.jsx("video", {
                      ref: r,
                      autoPlay: !0,
                      playsInline: !0,
                      muted: !0,
                      className: "w-full h-full object-cover",
                    }),
                    o.jsx("div", {
                      className:
                        "absolute inset-0 flex items-center justify-center pointer-events-none",
                      children: o.jsxs("div", {
                        className:
                          "relative w-64 h-48 border-2 border-blue-400 rounded-lg",
                        children: [
                          o.jsx("div", {
                            className:
                              "absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-blue-400 -mt-1 -ml-1",
                          }),
                          o.jsx("div", {
                            className:
                              "absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-blue-400 -mt-1 -mr-1",
                          }),
                          o.jsx("div", {
                            className:
                              "absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-blue-400 -mb-1 -ml-1",
                          }),
                          o.jsx("div", {
                            className:
                              "absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-blue-400 -mb-1 -mr-1",
                          }),
                        ],
                      }),
                    }),
                    v &&
                      o.jsx("div", {
                        className:
                          "absolute w-20 h-20 border-2 border-green-400 rounded-full pointer-events-none",
                        style: {
                          left: v.x - 40,
                          top: v.y - 40,
                          animation: "ping 0.5s ease-out",
                        },
                      }),
                  ],
                }),
                o.jsxs("div", {
                  className:
                    "relative z-10 p-4 flex justify-between items-center bg-black bg-opacity-40 backdrop-blur-sm",
                  children: [
                    o.jsxs("div", {
                      className: "flex items-center",
                      children: [
                        o.jsx(mo, { className: "w-5 h-5 text-blue-400 mr-2" }),
                        o.jsx("h2", {
                          className: "text-lg font-semibold",
                          children: "條碼掃描",
                        }),
                      ],
                    }),
                    o.jsx("button", {
                      onClick: t,
                      children: o.jsx(Zr, {
                        className: "w-6 h-6 text-gray-300",
                      }),
                    }),
                  ],
                }),
                o.jsx("div", {
                  className:
                    "flex-1 flex items-center justify-center pointer-events-none",
                  children:
                    a &&
                    o.jsx("div", {
                      className:
                        "bg-red-600 bg-opacity-60 text-sm px-4 py-2 rounded-lg",
                      children: a,
                    }),
                }),
                o.jsxs("div", {
                  className:
                    "relative z-10 bg-black bg-opacity-60 text-center py-3 pb-[env(safe-area-inset-bottom)]",
                  children: [
                    !a &&
                      o.jsxs(o.Fragment, {
                        children: [
                          o.jsx("p", {
                            className: "text-sm",
                            children: "請將條碼對準掃描框",
                          }),
                          o.jsx("p", {
                            className: "text-xs text-gray-400",
                            children: "點擊畫面可對焦 | 支援一維與二維條碼",
                          }),
                        ],
                      }),
                    o.jsx("button", {
                      onClick: t,
                      className:
                        "mt-3 px-4 py-2 border border-gray-400 rounded-lg text-gray-300 hover:bg-gray-700",
                      children: "取消",
                    }),
                  ],
                }),
                o.jsx("canvas", { ref: l, className: "hidden" }),
              ],
            })
          : o.jsx("div", {
              className:
                "fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50",
              children: o.jsxs("div", {
                className: "bg-white rounded-lg shadow-xl max-w-2xl w-full",
                children: [
                  o.jsxs("div", {
                    className: "flex items-center justify-between p-4 border-b",
                    children: [
                      o.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          o.jsx(mo, {
                            className: "w-6 h-6 text-blue-600 mr-2",
                          }),
                          o.jsx("h3", {
                            className: "text-lg font-semibold text-gray-900",
                            children: "條碼掃描",
                          }),
                        ],
                      }),
                      o.jsx("button", {
                        onClick: t,
                        className: "text-gray-400 hover:text-gray-600",
                        children: o.jsx(Zr, { className: "w-6 h-6" }),
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    className: "p-4",
                    children: [
                      a &&
                        o.jsx("div", {
                          className:
                            "mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm",
                          children: a,
                        }),
                      o.jsxs("div", {
                        ref: s,
                        className:
                          "relative bg-black rounded-lg overflow-hidden cursor-pointer",
                        style: { aspectRatio: "16/9" },
                        onClick: w,
                        children: [
                          o.jsx("video", {
                            ref: r,
                            autoPlay: !0,
                            playsInline: !0,
                            muted: !0,
                            className: "w-full h-full object-cover",
                          }),
                          o.jsx("div", {
                            className:
                              "absolute inset-0 flex items-center justify-center pointer-events-none",
                            children: o.jsxs("div", {
                              className:
                                "relative w-64 h-48 border-2 border-blue-500 rounded-lg",
                              children: [
                                o.jsx("div", {
                                  className:
                                    "absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-blue-500 -mt-1 -ml-1",
                                }),
                                o.jsx("div", {
                                  className:
                                    "absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-blue-500 -mt-1 -mr-1",
                                }),
                                o.jsx("div", {
                                  className:
                                    "absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-blue-500 -mb-1 -ml-1",
                                }),
                                o.jsx("div", {
                                  className:
                                    "absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-blue-500 -mb-1 -mr-1",
                                }),
                              ],
                            }),
                          }),
                          v &&
                            o.jsx("div", {
                              className:
                                "absolute w-16 h-16 border-2 border-green-400 rounded-full pointer-events-none animate-ping",
                              style: {
                                left: v.x - 32,
                                top: v.y - 32,
                                animation: "ping 0.5s ease-out",
                              },
                            }),
                        ],
                      }),
                      o.jsx("canvas", { ref: l, className: "hidden" }),
                      o.jsxs("div", {
                        className: "mt-4 text-center text-sm text-gray-600",
                        children: [
                          o.jsx("p", { children: "請將條碼對準掃描框中央" }),
                          o.jsx("p", {
                            className: "text-xs text-gray-500 mt-1",
                            children:
                              "點擊畫面可對焦 | 支援一維條碼與二維條碼（QR Code）",
                          }),
                        ],
                      }),
                      o.jsx("div", {
                        className: "mt-4 flex justify-end",
                        children: o.jsx("button", {
                          onClick: t,
                          className:
                            "px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50",
                          children: "取消",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            })
        : null
    );
  },
  $y = (e) => {
    const [t, n] = p.useState(!1);
    return {
      openScanner: () => n(!0),
      closeScanner: () => n(!1),
      ScannerModal: o.jsx(Fy, {
        isOpen: t,
        onClose: () => n(!1),
        onBarcodeDetected: e,
      }),
    };
  },
  Ry = ({
    isOpen: e,
    onClose: t,
    drugs: n,
    warehouses: r,
    onOrderCreated: l,
  }) => {
    var P;
    kt();
    const [s, i] = p.useState(""),
      [a, u] = p.useState(null),
      [c, m] = p.useState(""),
      [f, y] = p.useState(""),
      [v, N] = p.useState(""),
      [w, j] = p.useState(null),
      [g, d] = p.useState(null),
      [h, S] = p.useState(!1),
      [x, k] = p.useState(!1),
      [C, D] = p.useState(!1),
      [z, $] = p.useState(!1),
      [Z, H] = p.useState(null),
      [ee, le] = p.useState(!1),
      [oe, ye] = p.useState(!1),
      G = p.useRef(null),
      O = p.useRef(null),
      F = r.filter((E) => E.displayName !== "藥庫" && E.type !== "藥庫"),
      R = r.filter((E) => E.type === "藥庫"),
      U = R[0],
      W = $y((E) => {
        E.trim() && (we(E.trim()), i(""));
      });
    (p.useEffect(() => {
      e && G.current && G.current.focus();
    }, [e]),
      p.useEffect(() => {
        e && (i(""), u(null), N(""), j(null), d(null), H(null));
      }, [e]),
      p.useEffect(() => {
        if (e && !c) {
          const E = localStorage.getItem("barcodeDialog_sourceWarehouse");
          E && r.some((M) => M.displayName === E) && m(E);
        }
      }, [e, r, c]),
      p.useEffect(() => {
        const E = r.find((M) => M.type === "藥庫");
        E && !f && y(E.name);
      }, [r, f]),
      p.useEffect(() => {
        a &&
          O.current &&
          setTimeout(() => {
            var E;
            (E = O.current) == null ||
              E.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
      }, [a]));
    const we = async (E) => {
        try {
          const M = await Oe("/api/materialRequisition/barcode", {
            method: "POST",
            body: { ValueAry: [E] },
          });
          if (M.Code === 200 && M.Data) {
            const I = n.find((V) => V.CODE === M.Data.code);
            if (I) {
              u(I);
              const V = M.Data.requestedQuantity;
              (N(V),
                (!V || V === "" || V === "0") &&
                  setTimeout(() => {
                    D(!0);
                  }, 300));
            } else H("找不到對應的藥品");
          } else throw new Error(M.Result || "條碼掃描失敗");
        } catch (M) {
          (console.error("Error scanning barcode:", M),
            H("條碼掃描失敗，請稍後再試"));
        }
      },
      J = (E) => {
        (E.preventDefault(), s.trim() && (we(s.trim()), i("")));
      },
      Ge = async (E, M) => {
        S(!0);
        try {
          const I = r.find((at) => at.displayName === M || at.name === M),
            V = (I == null ? void 0 : I.type) || "藥庫",
            jt = (
              await Oe("/api/stock/get_stock_by_code", {
                method: "POST",
                body: { ServerName: M, ServerType: V, ValueAry: [E] },
              })
            ).Data[0];
          j(jt);
        } catch (I) {
          (console.error("Error fetching stock:", I), j(null));
        } finally {
          S(!1);
        }
      },
      b = async (E, M) => {
        k(!0);
        try {
          const V = (
            await Oe("/api/stock/get_stock_by_code", {
              method: "POST",
              body: { ServerName: M, ServerType: "藥庫", ValueAry: [E] },
            })
          ).Data[0];
          d(V);
        } catch (I) {
          (console.error("Error fetching pharmacy stock:", I), d(null));
        } finally {
          k(!1);
        }
      };
    (p.useEffect(() => {
      a && c ? Ge(a.CODE, c) : j(null);
    }, [a, c]),
      p.useEffect(() => {
        a && U ? b(a.CODE, U.name) : d(null);
      }, [a, U]));
    const q = () => {
        (i(""), u(null), N(""), j(null), d(null), H(null));
      },
      Y = async (E) => {
        if (!a) {
          H("請選擇藥品");
          return;
        }
        if (!c) {
          H("請選擇申領單位");
          return;
        }
        if (!v) {
          H("請輸入申領數量");
          return;
        }
        ($(!0), H(null));
        const M = Mf(),
          I = _f(),
          V =
            w != null && w.qty
              ? w.qty.reduce((at, al) => at + parseInt(al || "0"), 0).toString()
              : "0",
          Ae =
            g != null && g.qty
              ? g.qty.reduce((at, al) => at + parseInt(al || "0"), 0).toString()
              : "0",
          jt = {
            actionType: E ? "緊急申領" : "一般申領",
            code: a.CODE,
            name: a.NAME,
            packageUnit: a.MIN_PAKAGE || "",
            requestedQuantity: v,
            requestingUnit: c,
            requestingPerson: M || "",
            requestingPersonID: I || "",
            issuingUnit: f || "",
            state: "等待過帳",
            requestStoreInventory: V,
            actualStoreInventory: Ae,
          };
        try {
          const at = await Oe("/api/materialRequisition/add", {
            method: "POST",
            body: { Data: [jt] },
          });
          if (at.Code === 200)
            (l(`${E ? "緊急" : "一般"}申領單建立成功`),
              q(),
              G.current && G.current.focus());
          else throw new Error(at.Result || "建立申領單失敗");
        } catch (at) {
          (console.error("Error creating order:", at),
            H("建立申領單失敗，請稍後再試"));
        } finally {
          $(!1);
        }
      },
      ot = () => {
        (i(""), u(null), N(""), j(null), d(null), H(null), t());
      },
      _ = (E) => (!E || E === "2050/01/01" ? "無期限" : E);
    return e
      ? o.jsxs("div", {
          className:
            "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4",
          children: [
            o.jsxs("div", {
              className:
                "bg-white rounded-lg shadow-xl overflow-hidden flex flex-col",
              style: { width: "min(90vw, 90vh)", height: "90vh" },
              children: [
                o.jsxs("div", {
                  className:
                    "flex items-center justify-between p-4 border-b flex-shrink-0",
                  children: [
                    o.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        o.jsx(af, { className: "text-blue-600", size: 24 }),
                        o.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: "掃碼建單",
                        }),
                      ],
                    }),
                    o.jsx("button", {
                      onClick: ot,
                      className:
                        "p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors",
                      children: o.jsx(Zr, { size: 24 }),
                    }),
                  ],
                }),
                o.jsx("div", {
                  className: "flex-1 overflow-y-auto p-6",
                  children: o.jsxs("form", {
                    onSubmit: J,
                    className: "space-y-6",
                    children: [
                      Z &&
                        o.jsxs("div", {
                          className:
                            "flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg",
                          children: [
                            o.jsx(Gn, { size: 20 }),
                            o.jsx("span", { children: Z }),
                          ],
                        }),
                      o.jsxs("div", {
                        children: [
                          o.jsx("label", {
                            htmlFor: "barcode",
                            className:
                              "block text-base font-medium text-gray-700 mb-2",
                            children: "請掃描條碼或手動輸入",
                          }),
                          o.jsxs("div", {
                            className: "relative",
                            children: [
                              o.jsx("input", {
                                ref: G,
                                id: "barcode",
                                type: "text",
                                value: s,
                                onChange: (E) => i(E.target.value),
                                placeholder: "請使用掃碼槍掃描條碼",
                                className:
                                  "w-full px-4 py-3 pr-24 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900",
                              }),
                              o.jsxs("div", {
                                className:
                                  "absolute right-2 top-1/2 -translate-y-1/2 flex gap-2",
                                children: [
                                  o.jsx("button", {
                                    type: "button",
                                    onClick: W.openScanner,
                                    className:
                                      "p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded transition-colors",
                                    title: "開啟相機掃描",
                                    children: o.jsx(mo, { size: 20 }),
                                  }),
                                  o.jsx("button", {
                                    type: "submit",
                                    disabled: !s.trim(),
                                    className: `px-3 py-1 rounded transition-colors text-sm ${s.trim() ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-300 cursor-not-allowed text-gray-500"}`,
                                    children: "確認",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      o.jsxs("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [
                          o.jsxs("div", {
                            children: [
                              o.jsx("label", {
                                className:
                                  "block text-base font-medium text-gray-700 mb-2",
                                children: "申領單位",
                              }),
                              o.jsxs("select", {
                                value: c,
                                onChange: (E) => {
                                  const M = E.target.value;
                                  (m(M),
                                    M &&
                                      localStorage.setItem(
                                        "barcodeDialog_sourceWarehouse",
                                        M,
                                      ));
                                },
                                className:
                                  "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900",
                                children: [
                                  o.jsx("option", {
                                    value: "",
                                    children: "請選擇申領單位",
                                  }),
                                  F.map((E) =>
                                    o.jsx(
                                      "option",
                                      {
                                        value: E.displayName,
                                        children: E.displayName,
                                      },
                                      E.GUID,
                                    ),
                                  ),
                                ],
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            children: [
                              o.jsx("label", {
                                className:
                                  "block text-base font-medium text-gray-700 mb-2",
                                children: "核撥單位",
                              }),
                              o.jsx("select", {
                                value: f,
                                onChange: (E) => y(E.target.value),
                                className:
                                  "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900",
                                children: R.map((E) =>
                                  o.jsx(
                                    "option",
                                    { value: E.name, children: E.name },
                                    E.GUID,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      a &&
                        o.jsxs(o.Fragment, {
                          children: [
                            o.jsxs("div", {
                              ref: O,
                              className:
                                "bg-gray-50 rounded-lg border border-gray-200 p-4 scroll-mt-4",
                              children: [
                                o.jsx("div", {
                                  className:
                                    "text-base font-medium text-gray-900",
                                  children: a.NAME,
                                }),
                                a.CHT_NAME &&
                                  o.jsx("div", {
                                    className: "text-sm text-gray-600 mt-1",
                                    children: a.CHT_NAME,
                                  }),
                                o.jsxs("div", {
                                  className:
                                    "flex gap-4 text-sm text-gray-600 mt-1",
                                  children: [
                                    o.jsxs("div", {
                                      children: ["藥碼: ", a.CODE],
                                    }),
                                    a.SKDIACODE &&
                                      o.jsxs("div", {
                                        children: ["料號: ", a.SKDIACODE],
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            a &&
                              c &&
                              o.jsxs("div", {
                                children: [
                                  o.jsx("label", {
                                    className:
                                      "block text-base font-medium text-gray-700 mb-2",
                                    children: "申領單位庫存資訊",
                                  }),
                                  o.jsx("div", {
                                    className:
                                      "bg-blue-50 rounded-lg border border-blue-200 p-4",
                                    children: h
                                      ? o.jsxs("div", {
                                          className:
                                            "flex items-center justify-center py-4",
                                          children: [
                                            o.jsx("div", {
                                              className:
                                                "animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600",
                                            }),
                                            o.jsx("span", {
                                              className:
                                                "ml-2 text-sm text-gray-600",
                                              children: "載入中...",
                                            }),
                                          ],
                                        })
                                      : w
                                        ? o.jsxs("div", {
                                            className: "space-y-2",
                                            children: [
                                              o.jsxs("div", {
                                                className:
                                                  "flex items-center gap-4 text-sm font-medium text-gray-900",
                                                children: [
                                                  o.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2",
                                                    children: [
                                                      o.jsx(et, {
                                                        size: 16,
                                                        className:
                                                          "text-blue-600",
                                                      }),
                                                      o.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: "申領單位:",
                                                      }),
                                                      o.jsx("span", {
                                                        className:
                                                          "font-semibold",
                                                        children:
                                                          ((P = r.find(
                                                            (E) =>
                                                              E.displayName ===
                                                                c ||
                                                              E.name === c,
                                                          )) == null
                                                            ? void 0
                                                            : P.displayName) ||
                                                          c,
                                                      }),
                                                    ],
                                                  }),
                                                  o.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2",
                                                    children: [
                                                      o.jsx(et, {
                                                        size: 16,
                                                        className:
                                                          "text-green-600",
                                                      }),
                                                      o.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: "總庫存:",
                                                      }),
                                                      o.jsx("span", {
                                                        className:
                                                          "font-semibold text-green-700",
                                                        children: w.qty
                                                          ? w.qty.reduce(
                                                              (E, M) =>
                                                                E +
                                                                parseInt(
                                                                  M || "0",
                                                                ),
                                                              0,
                                                            )
                                                          : 0,
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              w.lot &&
                                                w.lot.length > 0 &&
                                                o.jsxs("div", {
                                                  className: "mt-2 space-y-2",
                                                  children: [
                                                    o.jsxs("button", {
                                                      onClick: () => le(!ee),
                                                      className:
                                                        "flex items-center gap-2 text-xs font-medium text-gray-700 hover:text-blue-600 transition-colors",
                                                      children: [
                                                        o.jsx("span", {
                                                          children: "批號明細",
                                                        }),
                                                        ee
                                                          ? o.jsx(zu, {
                                                              size: 16,
                                                            })
                                                          : o.jsx(Ru, {
                                                              size: 16,
                                                            }),
                                                      ],
                                                    }),
                                                    ee &&
                                                      o.jsx("div", {
                                                        className: "space-y-2",
                                                        children: w.lot.map(
                                                          (E, M) => {
                                                            var Ae, jt;
                                                            const I =
                                                                ((Ae =
                                                                  w.expiry_date) ==
                                                                null
                                                                  ? void 0
                                                                  : Ae[M]) ||
                                                                "",
                                                              V =
                                                                ((jt = w.qty) ==
                                                                null
                                                                  ? void 0
                                                                  : jt[M]) ||
                                                                "0";
                                                            return parseInt(
                                                              V,
                                                            ) <= 0
                                                              ? null
                                                              : o.jsx(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "bg-white rounded-lg border border-blue-200 p-2",
                                                                    children:
                                                                      o.jsxs(
                                                                        "div",
                                                                        {
                                                                          className:
                                                                            "grid grid-cols-3 gap-2 text-xs",
                                                                          children:
                                                                            [
                                                                              o.jsxs(
                                                                                "div",
                                                                                {
                                                                                  className:
                                                                                    "flex items-center gap-1",
                                                                                  children:
                                                                                    [
                                                                                      o.jsx(
                                                                                        ps,
                                                                                        {
                                                                                          size: 14,
                                                                                          className:
                                                                                            "text-purple-600",
                                                                                        },
                                                                                      ),
                                                                                      o.jsx(
                                                                                        "span",
                                                                                        {
                                                                                          className:
                                                                                            "text-gray-600",
                                                                                          children:
                                                                                            "批號:",
                                                                                        },
                                                                                      ),
                                                                                      o.jsx(
                                                                                        "span",
                                                                                        {
                                                                                          className:
                                                                                            "font-medium",
                                                                                          children:
                                                                                            E ||
                                                                                            "無",
                                                                                        },
                                                                                      ),
                                                                                    ],
                                                                                },
                                                                              ),
                                                                              o.jsxs(
                                                                                "div",
                                                                                {
                                                                                  className:
                                                                                    "flex items-center gap-1",
                                                                                  children:
                                                                                    [
                                                                                      o.jsx(
                                                                                        fs,
                                                                                        {
                                                                                          size: 14,
                                                                                          className:
                                                                                            "text-green-600",
                                                                                        },
                                                                                      ),
                                                                                      o.jsx(
                                                                                        "span",
                                                                                        {
                                                                                          className:
                                                                                            "text-gray-600",
                                                                                          children:
                                                                                            "效期:",
                                                                                        },
                                                                                      ),
                                                                                      o.jsx(
                                                                                        "span",
                                                                                        {
                                                                                          className:
                                                                                            "font-medium",
                                                                                          children:
                                                                                            _(
                                                                                              I,
                                                                                            ),
                                                                                        },
                                                                                      ),
                                                                                    ],
                                                                                },
                                                                              ),
                                                                              o.jsxs(
                                                                                "div",
                                                                                {
                                                                                  className:
                                                                                    "flex items-center gap-1",
                                                                                  children:
                                                                                    [
                                                                                      o.jsx(
                                                                                        et,
                                                                                        {
                                                                                          size: 14,
                                                                                          className:
                                                                                            "text-blue-600",
                                                                                        },
                                                                                      ),
                                                                                      o.jsx(
                                                                                        "span",
                                                                                        {
                                                                                          className:
                                                                                            "text-gray-600",
                                                                                          children:
                                                                                            "數量:",
                                                                                        },
                                                                                      ),
                                                                                      o.jsx(
                                                                                        "span",
                                                                                        {
                                                                                          className:
                                                                                            "font-medium",
                                                                                          children:
                                                                                            V,
                                                                                        },
                                                                                      ),
                                                                                    ],
                                                                                },
                                                                              ),
                                                                            ],
                                                                        },
                                                                      ),
                                                                  },
                                                                  M,
                                                                );
                                                          },
                                                        ),
                                                      }),
                                                  ],
                                                }),
                                            ],
                                          })
                                        : o.jsx("div", {
                                            className: "text-sm text-gray-600",
                                            children:
                                              "申領單位無此藥品庫存資訊",
                                          }),
                                  }),
                                ],
                              }),
                            a &&
                              U &&
                              o.jsxs("div", {
                                children: [
                                  o.jsx("label", {
                                    className:
                                      "block text-base font-medium text-gray-700 mb-2",
                                    children: "撥補單位庫存資訊",
                                  }),
                                  o.jsx("div", {
                                    className:
                                      "bg-blue-50 rounded-lg border border-blue-200 p-4",
                                    children: x
                                      ? o.jsxs("div", {
                                          className:
                                            "flex items-center justify-center py-4",
                                          children: [
                                            o.jsx("div", {
                                              className:
                                                "animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600",
                                            }),
                                            o.jsx("span", {
                                              className:
                                                "ml-2 text-sm text-gray-600",
                                              children: "載入中...",
                                            }),
                                          ],
                                        })
                                      : g
                                        ? o.jsxs("div", {
                                            className: "space-y-2",
                                            children: [
                                              o.jsxs("div", {
                                                className:
                                                  "flex items-center gap-4 text-sm font-medium text-gray-900",
                                                children: [
                                                  o.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2",
                                                    children: [
                                                      o.jsx(et, {
                                                        size: 16,
                                                        className:
                                                          "text-blue-600",
                                                      }),
                                                      o.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: "撥補單位:",
                                                      }),
                                                      o.jsx("span", {
                                                        className:
                                                          "font-semibold",
                                                        children:
                                                          U.displayName ||
                                                          U.name,
                                                      }),
                                                    ],
                                                  }),
                                                  o.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2",
                                                    children: [
                                                      o.jsx(et, {
                                                        size: 16,
                                                        className:
                                                          "text-green-600",
                                                      }),
                                                      o.jsx("span", {
                                                        className:
                                                          "text-gray-700",
                                                        children: "總庫存:",
                                                      }),
                                                      o.jsx("span", {
                                                        className:
                                                          "font-semibold text-green-700",
                                                        children: g.qty
                                                          ? g.qty.reduce(
                                                              (E, M) =>
                                                                E +
                                                                parseInt(
                                                                  M || "0",
                                                                ),
                                                              0,
                                                            )
                                                          : 0,
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              g.lot &&
                                                g.lot.length > 0 &&
                                                o.jsxs("div", {
                                                  className: "mt-2 space-y-2",
                                                  children: [
                                                    o.jsxs("button", {
                                                      onClick: () => ye(!oe),
                                                      className:
                                                        "flex items-center gap-2 text-xs font-medium text-gray-700 hover:text-blue-600 transition-colors",
                                                      children: [
                                                        o.jsx("span", {
                                                          children: "批號明細",
                                                        }),
                                                        oe
                                                          ? o.jsx(zu, {
                                                              size: 16,
                                                            })
                                                          : o.jsx(Ru, {
                                                              size: 16,
                                                            }),
                                                      ],
                                                    }),
                                                    oe &&
                                                      o.jsx("div", {
                                                        className: "space-y-2",
                                                        children: g.lot.map(
                                                          (E, M) => {
                                                            var Ae, jt;
                                                            const I =
                                                                ((Ae =
                                                                  g.expiry_date) ==
                                                                null
                                                                  ? void 0
                                                                  : Ae[M]) ||
                                                                "",
                                                              V =
                                                                ((jt = g.qty) ==
                                                                null
                                                                  ? void 0
                                                                  : jt[M]) ||
                                                                "0";
                                                            return parseInt(
                                                              V,
                                                            ) <= 0
                                                              ? null
                                                              : o.jsx(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "bg-white rounded-lg border border-blue-200 p-2",
                                                                    children:
                                                                      o.jsxs(
                                                                        "div",
                                                                        {
                                                                          className:
                                                                            "grid grid-cols-3 gap-2 text-xs",
                                                                          children:
                                                                            [
                                                                              o.jsxs(
                                                                                "div",
                                                                                {
                                                                                  className:
                                                                                    "flex items-center gap-1",
                                                                                  children:
                                                                                    [
                                                                                      o.jsx(
                                                                                        ps,
                                                                                        {
                                                                                          size: 14,
                                                                                          className:
                                                                                            "text-purple-600",
                                                                                        },
                                                                                      ),
                                                                                      o.jsx(
                                                                                        "span",
                                                                                        {
                                                                                          className:
                                                                                            "text-gray-600",
                                                                                          children:
                                                                                            "批號:",
                                                                                        },
                                                                                      ),
                                                                                      o.jsx(
                                                                                        "span",
                                                                                        {
                                                                                          className:
                                                                                            "font-medium",
                                                                                          children:
                                                                                            E ||
                                                                                            "無",
                                                                                        },
                                                                                      ),
                                                                                    ],
                                                                                },
                                                                              ),
                                                                              o.jsxs(
                                                                                "div",
                                                                                {
                                                                                  className:
                                                                                    "flex items-center gap-1",
                                                                                  children:
                                                                                    [
                                                                                      o.jsx(
                                                                                        fs,
                                                                                        {
                                                                                          size: 14,
                                                                                          className:
                                                                                            "text-green-600",
                                                                                        },
                                                                                      ),
                                                                                      o.jsx(
                                                                                        "span",
                                                                                        {
                                                                                          className:
                                                                                            "text-gray-600",
                                                                                          children:
                                                                                            "效期:",
                                                                                        },
                                                                                      ),
                                                                                      o.jsx(
                                                                                        "span",
                                                                                        {
                                                                                          className:
                                                                                            "font-medium",
                                                                                          children:
                                                                                            _(
                                                                                              I,
                                                                                            ),
                                                                                        },
                                                                                      ),
                                                                                    ],
                                                                                },
                                                                              ),
                                                                              o.jsxs(
                                                                                "div",
                                                                                {
                                                                                  className:
                                                                                    "flex items-center gap-1",
                                                                                  children:
                                                                                    [
                                                                                      o.jsx(
                                                                                        et,
                                                                                        {
                                                                                          size: 14,
                                                                                          className:
                                                                                            "text-blue-600",
                                                                                        },
                                                                                      ),
                                                                                      o.jsx(
                                                                                        "span",
                                                                                        {
                                                                                          className:
                                                                                            "text-gray-600",
                                                                                          children:
                                                                                            "數量:",
                                                                                        },
                                                                                      ),
                                                                                      o.jsx(
                                                                                        "span",
                                                                                        {
                                                                                          className:
                                                                                            "font-medium",
                                                                                          children:
                                                                                            V,
                                                                                        },
                                                                                      ),
                                                                                    ],
                                                                                },
                                                                              ),
                                                                            ],
                                                                        },
                                                                      ),
                                                                  },
                                                                  M,
                                                                );
                                                          },
                                                        ),
                                                      }),
                                                  ],
                                                }),
                                            ],
                                          })
                                        : o.jsx("div", {
                                            className: "text-sm text-gray-600",
                                            children:
                                              "撥補單位無此藥品庫存資訊",
                                          }),
                                  }),
                                ],
                              }),
                            o.jsxs("div", {
                              children: [
                                o.jsx("label", {
                                  className:
                                    "block text-base font-medium text-gray-700 mb-2",
                                  children: "申領數量",
                                }),
                                o.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    o.jsx("input", {
                                      type: "text",
                                      value: v,
                                      onChange: (E) => {
                                        const M = E.target.value;
                                        (M === "" || /^\d+$/.test(M)) && N(M);
                                      },
                                      onClick: () => D(!0),
                                      placeholder: "請輸入數量",
                                      className:
                                        "w-32 px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-colors text-base text-gray-900 cursor-pointer",
                                    }),
                                    a.MIN_PAKAGE &&
                                      o.jsx("span", {
                                        className:
                                          "text-base font-medium text-gray-700",
                                        children: a.MIN_PAKAGE,
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
                o.jsx("div", {
                  className: "border-t p-4 flex-shrink-0 bg-gray-50",
                  children: o.jsxs("div", {
                    className: "flex gap-3",
                    children: [
                      o.jsx("button", {
                        type: "button",
                        onClick: q,
                        disabled: z,
                        className:
                          "flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed",
                        children: "清除",
                      }),
                      a &&
                        o.jsxs(o.Fragment, {
                          children: [
                            o.jsx("button", {
                              type: "button",
                              onClick: () => Y(!1),
                              disabled: z || !v,
                              className: `flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${z || !v ? "bg-gray-300 cursor-not-allowed text-gray-500" : "bg-blue-600 hover:bg-blue-700 text-white"}`,
                              children: z ? "處理中..." : "一般建單",
                            }),
                            o.jsx("button", {
                              type: "button",
                              onClick: () => Y(!0),
                              disabled: z || !v,
                              className: `flex-1 px-4 py-3 rounded-lg font-medium transition-colors ${z || !v ? "bg-gray-300 cursor-not-allowed text-gray-500" : "bg-red-600 hover:bg-red-700 text-white"}`,
                              children: z ? "處理中..." : "緊急建單",
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
              ],
            }),
            C &&
              o.jsx(Na, {
                value: v,
                onChange: N,
                onClose: () => D(!1),
                title: "請輸入申領量",
              }),
            W.ScannerModal,
          ],
        })
      : null;
  },
  zy = ({ className: e = "" }) => {
    const { t } = kt();
    return o.jsx("footer", {
      className: `fixed bottom-0 left-0 w-full bg-white py-2 shadow-inner border-t border-gray-200 z-50 ${e}`,
      children: o.jsx("div", {
        className: "max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8",
        children: o.jsx("p", {
          className: "text-center text-sm text-gray-600",
          children: t("footer.copyright"),
        }),
      }),
    });
  };
function Iy() {
  kt();
  const [e, t] = p.useState(!1),
    [n, r] = p.useState(!0),
    [l, s] = p.useState([]),
    [i, a] = p.useState([]),
    [u, c] = p.useState(null),
    [m, f] = p.useState(!1),
    [y, v] = p.useState(!1),
    [N, w] = p.useState(!1),
    [j, g] = p.useState(""),
    [d, h] = p.useState([]),
    [S, x] = p.useState(() => {
      const P = new Date();
      return (P.setHours(0, 0, 0, 0), P);
    }),
    [k, C] = p.useState(() => {
      const P = new Date();
      return (P.setHours(23, 59, 59, 999), P);
    }),
    [D, z] = p.useState(!1),
    [$, Z] = p.useState(0),
    [H, ee] = p.useState(!1),
    [le, oe] = p.useState(!1),
    [ye, G] = p.useState(null),
    [O, F] = p.useState(null);
  (p.useEffect(() => {
    (async () => {
      try {
        (await hy(), v(!0));
        const E = ky();
        t(E);
      } catch (E) {
        (console.error("Error during initialization:", E),
          c("系統初始化失敗，請重新整理頁面"));
      } finally {
        r(!1);
      }
    })();
  }, []),
    p.useEffect(() => {
      e && y && (U(), R(), W());
    }, [e, y]));
  const R = async () => {
      try {
        const E = (
          await Oe("/api/med_page/get_med_cloud", { method: "POST", body: {} })
        ).Data.filter((M) => M.FILE_STATUS !== "關檔中");
        (s(E), c(null));
      } catch (P) {
        (console.error("Error fetching drugs:", P),
          c("無法取得藥品資料，請稍後再試"),
          s([]));
      }
    },
    U = async () => {
      try {
        const P = await Oe("/api/ServerSetting/get_name", {
          method: "POST",
          body: {},
        });
        if (!P || !P.Data) throw new Error("Invalid response format");
        const E = P.Data.map((M) => ({
          ...M,
          displayName: M.name === "DS01" ? "藥庫" : M.name,
        }));
        (a(E), c(null));
      } catch (P) {
        (console.error("Error fetching warehouses:", P),
          c("無法取得庫別資料，請稍後再試"),
          a([]));
      }
    },
    W = async () => {
      z(!0);
      try {
        const P = await Oe("/api/materialRequisition/get_by_requestTime", {
          method: "POST",
          body: {
            ValueAry: [
              me(S, "yyyy-MM-dd HH:mm:ss"),
              me(k, "yyyy-MM-dd HH:mm:ss"),
            ],
          },
        });
        (h(P.Data), c(null));
      } catch (P) {
        (console.error("Error fetching orders:", P),
          c("無法取得申領單資料，請稍後再試"),
          h([]));
      } finally {
        z(!1);
      }
    },
    we = (P, E) => {
      (x(P), C(E), W());
    },
    J = async (P) => {
      const E = Mf(),
        M = _f(),
        I = {
          actionType: P.isUrgent ? "緊急申領" : "一般申領",
          code: P.drug.CODE,
          name: P.drug.NAME,
          packageUnit: P.drug.MIN_PAKAGE || "",
          requestedQuantity: P.quantity,
          requestingUnit: P.sourceWarehouse,
          requestingPerson: E || "",
          requestingPersonID: M || "",
          issuingUnit: P.issuingUnit || "",
          state: "等待過帳",
          requestStoreInventory: P.requestStoreInventory || "0",
          actualStoreInventory: P.actualStoreInventory || "0",
        };
      try {
        const V = await Oe("/api/materialRequisition/add", {
          method: "POST",
          body: { Data: [I] },
        });
        if (V.Code === 200)
          (g(V.Result || "申領單建立成功"),
            w(!0),
            c(null),
            W(),
            Z((Ae) => Ae + 1));
        else throw new Error(V.Result || "建立申領單失敗");
      } catch (V) {
        (console.error("Error creating order:", V),
          c("建立申領單失敗，請稍後再試"));
      } finally {
        f(!1);
      }
    },
    Ge = async (P) => {
      try {
        const E = await Oe("/api/controlpanel/get_by_startendtime_MedNotice", {
          method: "POST",
          body: {},
        });
        if (E.Data && Array.isArray(E.Data)) {
          const M = E.Data.find((I) => I.code === P);
          if (M && M.note) return M.note;
        }
        return null;
      } catch (E) {
        return (console.error("Error checking med notice:", E), null);
      }
    },
    b = async (P) => {
      try {
        (f(!0), c(null));
        const E = await Ge(P.drug.CODE);
        E
          ? (F(P), G({ note: E, drugName: P.drug.NAME }), oe(!0), f(!1))
          : await J(P);
      } catch (E) {
        (console.error("Error in handleCreateOrder:", E),
          c("建立申領單失敗，請稍後再試"));
      } finally {
        le || f(!1);
      }
    },
    q = async () => {
      if (O)
        try {
          (f(!0), oe(!1), await J(O));
        } catch (P) {
          (console.error("Error in handleConfirmWithNotice:", P),
            c("建立申領單失敗，請稍後再試"));
        } finally {
          (f(!1), F(null), G(null));
        }
    },
    Y = () => {
      (oe(!1), f(!1), F(null), G(null));
    },
    ot = () => {
      (vs(), t(!1));
    },
    _ = (P) => {
      (g(P), w(!0), W());
    };
  return n
    ? o.jsx("div", {
        className: "min-h-screen bg-white flex items-center justify-center",
        children: o.jsxs("div", {
          className: "text-center",
          children: [
            o.jsx("div", {
              className:
                "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto",
            }),
            o.jsx("p", {
              className: "mt-2 text-base text-gray-600",
              children: "載入中...",
            }),
          ],
        }),
      })
    : e
      ? o.jsxs("div", {
          className: "min-h-screen flex flex-col",
          children: [
            o.jsx(Dy, { onLogout: ot }),
            N && o.jsx(Lf, { message: j, onClose: () => w(!1), duration: 3e3 }),
            le &&
              ye &&
              o.jsx(My, {
                isOpen: le,
                note: ye.note,
                drugName: ye.drugName,
                onConfirm: q,
                onCancel: Y,
                isProcessing: m,
              }),
            o.jsx(Ry, {
              isOpen: H,
              onClose: () => ee(!1),
              drugs: l,
              warehouses: i,
              onOrderCreated: _,
            }),
            o.jsx("main", {
              className: "flex-grow flex flex-col bg-white",
              children: o.jsxs("div", {
                className: "w-full mx-auto p-4 pb-24",
                children: [
                  o.jsx(Oy, {
                    drugs: l,
                    warehouses: i,
                    onSubmit: b,
                    isSubmitting: m,
                    resetTrigger: $,
                    onOpenBarcodeDialog: () => ee(!0),
                  }),
                  o.jsx("div", {
                    className: "mt-8",
                    children: o.jsx(Ny, {
                      orders: d,
                      startDate: S,
                      endDate: k,
                      onDateChange: we,
                      isLoading: D,
                    }),
                  }),
                ],
              }),
            }),
            o.jsx(zy, {}),
          ],
        })
      : o.jsx(jy, { onLogin: () => t(!0) });
}
nf(document.getElementById("root")).render(
  o.jsx(p.StrictMode, { children: o.jsx(xy, { children: o.jsx(Iy, {}) }) }),
);
