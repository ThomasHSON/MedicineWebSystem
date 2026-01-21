(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList")
        for (const i of s.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = n(o);
    fetch(o.href, s);
  }
})();
var Ma = { exports: {} },
  bo = {},
  La = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nr = Symbol.for("react.element"),
  od = Symbol.for("react.portal"),
  sd = Symbol.for("react.fragment"),
  id = Symbol.for("react.strict_mode"),
  ld = Symbol.for("react.profiler"),
  ad = Symbol.for("react.provider"),
  ud = Symbol.for("react.context"),
  cd = Symbol.for("react.forward_ref"),
  dd = Symbol.for("react.suspense"),
  fd = Symbol.for("react.memo"),
  hd = Symbol.for("react.lazy"),
  wl = Symbol.iterator;
function pd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (wl && e[wl]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ba = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Oa = Object.assign,
  $a = {};
function Ln(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = $a),
    (this.updater = n || ba));
}
Ln.prototype.isReactComponent = {};
Ln.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ln.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Fa() {}
Fa.prototype = Ln.prototype;
function _i(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = $a),
    (this.updater = n || ba));
}
var xi = (_i.prototype = new Fa());
xi.constructor = _i;
Oa(xi, Ln.prototype);
xi.isPureReactComponent = !0;
var _l = Array.isArray,
  za = Object.prototype.hasOwnProperty,
  Si = { current: null },
  Aa = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ua(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      za.call(t, r) && !Aa.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), c = 0; c < l; c++) a[c] = arguments[c + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: Nr,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: Si.current,
  };
}
function md(e, t) {
  return {
    $$typeof: Nr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ki(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Nr;
}
function gd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var xl = /\/+/g;
function Zo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? gd("" + e.key)
    : t.toString(36);
}
function Yr(e, t, n, r, o) {
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
          case Nr:
          case od:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + Zo(i, 0) : r),
      _l(o)
        ? ((n = ""),
          e != null && (n = e.replace(xl, "$&/") + "/"),
          Yr(o, t, n, "", function (c) {
            return c;
          }))
        : o != null &&
          (ki(o) &&
            (o = md(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(xl, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), _l(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = r + Zo(s, l);
      i += Yr(s, t, n, a, o);
    }
  else if (((a = pd(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(s = e.next()).done; )
      ((s = s.value), (a = r + Zo(s, l++)), (i += Yr(s, t, n, a, o)));
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
function Rr(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Yr(e, r, "", "", function (s) {
      return t.call(n, s, o++);
    }),
    r
  );
}
function yd(e) {
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
var Ce = { current: null },
  Jr = { transition: null },
  vd = {
    ReactCurrentDispatcher: Ce,
    ReactCurrentBatchConfig: Jr,
    ReactCurrentOwner: Si,
  };
function Ha() {
  throw Error("act(...) is not supported in production builds of React.");
}
F.Children = {
  map: Rr,
  forEach: function (e, t, n) {
    Rr(
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
      Rr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Rr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ki(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
F.Component = Ln;
F.Fragment = sd;
F.Profiler = ld;
F.PureComponent = _i;
F.StrictMode = id;
F.Suspense = dd;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vd;
F.act = Ha;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Oa({}, e.props),
    o = e.key,
    s = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (i = Si.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      za.call(t, a) &&
        !Aa.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var c = 0; c < a; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  return { $$typeof: Nr, type: e.type, key: o, ref: s, props: r, _owner: i };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: ud,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ad, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = Ua;
F.createFactory = function (e) {
  var t = Ua.bind(null, e);
  return ((t.type = e), t);
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: cd, render: e };
};
F.isValidElement = ki;
F.lazy = function (e) {
  return { $$typeof: hd, _payload: { _status: -1, _result: e }, _init: yd };
};
F.memo = function (e, t) {
  return { $$typeof: fd, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = Jr.transition;
  Jr.transition = {};
  try {
    e();
  } finally {
    Jr.transition = t;
  }
};
F.unstable_act = Ha;
F.useCallback = function (e, t) {
  return Ce.current.useCallback(e, t);
};
F.useContext = function (e) {
  return Ce.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return Ce.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return Ce.current.useEffect(e, t);
};
F.useId = function () {
  return Ce.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return Ce.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return Ce.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return Ce.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return Ce.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return Ce.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return Ce.current.useRef(e);
};
F.useState = function (e) {
  return Ce.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return Ce.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return Ce.current.useTransition();
};
F.version = "18.3.1";
La.exports = F;
var E = La.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wd = E,
  _d = Symbol.for("react.element"),
  xd = Symbol.for("react.fragment"),
  Sd = Object.prototype.hasOwnProperty,
  kd = wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Cd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ba(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  (n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (i = t.ref));
  for (r in t) Sd.call(t, r) && !Cd.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: _d,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: kd.current,
  };
}
bo.Fragment = xd;
bo.jsx = Ba;
bo.jsxs = Ba;
Ma.exports = bo;
var u = Ma.exports,
  Wa = { exports: {} },
  $e = {},
  Va = { exports: {} },
  Qa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(I, M) {
    var O = I.length;
    I.push(M);
    e: for (; 0 < O; ) {
      var G = (O - 1) >>> 1,
        ne = I[G];
      if (0 < o(ne, M)) ((I[G] = M), (I[O] = ne), (O = G));
      else break e;
    }
  }
  function n(I) {
    return I.length === 0 ? null : I[0];
  }
  function r(I) {
    if (I.length === 0) return null;
    var M = I[0],
      O = I.pop();
    if (O !== M) {
      I[0] = O;
      e: for (var G = 0, ne = I.length, ze = ne >>> 1; G < ze; ) {
        var tt = 2 * (G + 1) - 1,
          Fn = I[tt],
          ct = tt + 1,
          sn = I[ct];
        if (0 > o(Fn, O))
          ct < ne && 0 > o(sn, Fn)
            ? ((I[G] = sn), (I[ct] = O), (G = ct))
            : ((I[G] = Fn), (I[tt] = O), (G = tt));
        else if (ct < ne && 0 > o(sn, O)) ((I[G] = sn), (I[ct] = O), (G = ct));
        else break e;
      }
    }
    return M;
  }
  function o(I, M) {
    var O = I.sortIndex - M.sortIndex;
    return O !== 0 ? O : I.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var i = Date,
      l = i.now();
    e.unstable_now = function () {
      return i.now() - l;
    };
  }
  var a = [],
    c = [],
    p = 1,
    g = null,
    m = 3,
    v = !1,
    w = !1,
    x = !1,
    D = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(I) {
    for (var M = n(c); M !== null; ) {
      if (M.callback === null) r(c);
      else if (M.startTime <= I)
        (r(c), (M.sortIndex = M.expirationTime), t(a, M));
      else break;
      M = n(c);
    }
  }
  function _(I) {
    if (((x = !1), h(I), !w))
      if (n(a) !== null) ((w = !0), se(C));
      else {
        var M = n(c);
        M !== null && xt(_, M.startTime - I);
      }
  }
  function C(I, M) {
    ((w = !1), x && ((x = !1), f(N), (N = -1)), (v = !0));
    var O = m;
    try {
      for (
        h(M), g = n(a);
        g !== null && (!(g.expirationTime > M) || (I && !U()));
      ) {
        var G = g.callback;
        if (typeof G == "function") {
          ((g.callback = null), (m = g.priorityLevel));
          var ne = G(g.expirationTime <= M);
          ((M = e.unstable_now()),
            typeof ne == "function" ? (g.callback = ne) : g === n(a) && r(a),
            h(M));
        } else r(a);
        g = n(a);
      }
      if (g !== null) var ze = !0;
      else {
        var tt = n(c);
        (tt !== null && xt(_, tt.startTime - M), (ze = !1));
      }
      return ze;
    } finally {
      ((g = null), (m = O), (v = !1));
    }
  }
  var T = !1,
    k = null,
    N = -1,
    b = 5,
    R = -1;
  function U() {
    return !(e.unstable_now() - R < b);
  }
  function et() {
    if (k !== null) {
      var I = e.unstable_now();
      R = I;
      var M = !0;
      try {
        M = k(!0, I);
      } finally {
        M ? ut() : ((T = !1), (k = null));
      }
    } else T = !1;
  }
  var ut;
  if (typeof d == "function")
    ut = function () {
      d(et);
    };
  else if (typeof MessageChannel < "u") {
    var B = new MessageChannel(),
      ee = B.port2;
    ((B.port1.onmessage = et),
      (ut = function () {
        ee.postMessage(null);
      }));
  } else
    ut = function () {
      D(et, 0);
    };
  function se(I) {
    ((k = I), T || ((T = !0), ut()));
  }
  function xt(I, M) {
    N = D(function () {
      I(e.unstable_now());
    }, M);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (I) {
      I.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || v || ((w = !0), se(C));
    }),
    (e.unstable_forceFrameRate = function (I) {
      0 > I || 125 < I
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (b = 0 < I ? Math.floor(1e3 / I) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (I) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = m;
      }
      var O = m;
      m = M;
      try {
        return I();
      } finally {
        m = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (I, M) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var O = m;
      m = I;
      try {
        return M();
      } finally {
        m = O;
      }
    }),
    (e.unstable_scheduleCallback = function (I, M, O) {
      var G = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? G + O : G))
          : (O = G),
        I)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = O + ne),
        (I = {
          id: p++,
          callback: M,
          priorityLevel: I,
          startTime: O,
          expirationTime: ne,
          sortIndex: -1,
        }),
        O > G
          ? ((I.sortIndex = O),
            t(c, I),
            n(a) === null &&
              I === n(c) &&
              (x ? (f(N), (N = -1)) : (x = !0), xt(_, O - G)))
          : ((I.sortIndex = ne), t(a, I), w || v || ((w = !0), se(C))),
        I
      );
    }),
    (e.unstable_shouldYield = U),
    (e.unstable_wrapCallback = function (I) {
      var M = m;
      return function () {
        var O = m;
        m = M;
        try {
          return I.apply(this, arguments);
        } finally {
          m = O;
        }
      };
    }));
})(Qa);
Va.exports = Qa;
var Ed = Va.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nd = E,
  Oe = Ed;
function S(e) {
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
var Ka = new Set(),
  lr = {};
function rn(e, t) {
  (Nn(e, t), Nn(e + "Capture", t));
}
function Nn(e, t) {
  for (lr[e] = t, e = 0; e < t.length; e++) Ka.add(t[e]);
}
var gt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ts = Object.prototype.hasOwnProperty,
  Td =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Sl = {},
  kl = {};
function Id(e) {
  return Ts.call(kl, e)
    ? !0
    : Ts.call(Sl, e)
      ? !1
      : Td.test(e)
        ? (kl[e] = !0)
        : ((Sl[e] = !0), !1);
}
function jd(e, t, n, r) {
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
function Pd(e, t, n, r) {
  if (t === null || typeof t > "u" || jd(e, t, n, r)) return !0;
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
function Ee(e, t, n, r, o, s, i) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = i));
}
var me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    me[e] = new Ee(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  me[t] = new Ee(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  me[e] = new Ee(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  me[e] = new Ee(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    me[e] = new Ee(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  me[e] = new Ee(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  me[e] = new Ee(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  me[e] = new Ee(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  me[e] = new Ee(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ci = /[\-:]([a-z])/g;
function Ei(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ci, Ei);
    me[t] = new Ee(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ci, Ei);
    me[t] = new Ee(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ci, Ei);
  me[t] = new Ee(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  me[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
me.xlinkHref = new Ee(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  me[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ni(e, t, n, r) {
  var o = me.hasOwnProperty(t) ? me[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Pd(t, n, o, r) && (n = null),
    r || o === null
      ? Id(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var _t = Nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Mr = Symbol.for("react.element"),
  an = Symbol.for("react.portal"),
  un = Symbol.for("react.fragment"),
  Ti = Symbol.for("react.strict_mode"),
  Is = Symbol.for("react.profiler"),
  Ga = Symbol.for("react.provider"),
  qa = Symbol.for("react.context"),
  Ii = Symbol.for("react.forward_ref"),
  js = Symbol.for("react.suspense"),
  Ps = Symbol.for("react.suspense_list"),
  ji = Symbol.for("react.memo"),
  kt = Symbol.for("react.lazy"),
  Xa = Symbol.for("react.offscreen"),
  Cl = Symbol.iterator;
function An(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Cl && e[Cl]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var J = Object.assign,
  es;
function Gn(e) {
  if (es === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      es = (t && t[1]) || "";
    }
  return (
    `
` +
    es +
    e
  );
}
var ts = !1;
function ns(e, t) {
  if (!e || ts) return "";
  ts = !0;
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
        var o = c.stack.split(`
`),
          s = r.stack.split(`
`),
          i = o.length - 1,
          l = s.length - 1;
        1 <= i && 0 <= l && o[i] !== s[l];
      )
        l--;
      for (; 1 <= i && 0 <= l; i--, l--)
        if (o[i] !== s[l]) {
          if (i !== 1 || l !== 1)
            do
              if ((i--, l--, 0 > l || o[i] !== s[l])) {
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
            while (1 <= i && 0 <= l);
          break;
        }
    }
  } finally {
    ((ts = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Gn(e) : "";
}
function Dd(e) {
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
      return ((e = ns(e.type, !1)), e);
    case 11:
      return ((e = ns(e.type.render, !1)), e);
    case 1:
      return ((e = ns(e.type, !0)), e);
    default:
      return "";
  }
}
function Ds(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case un:
      return "Fragment";
    case an:
      return "Portal";
    case Is:
      return "Profiler";
    case Ti:
      return "StrictMode";
    case js:
      return "Suspense";
    case Ps:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case qa:
        return (e.displayName || "Context") + ".Consumer";
      case Ga:
        return (e._context.displayName || "Context") + ".Provider";
      case Ii:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ji:
        return (
          (t = e.displayName || null),
          t !== null ? t : Ds(e.type) || "Memo"
        );
      case kt:
        ((t = e._payload), (e = e._init));
        try {
          return Ds(e(t));
        } catch {}
    }
  return null;
}
function Rd(e) {
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
      return Ds(t);
    case 8:
      return t === Ti ? "StrictMode" : "Mode";
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
function $t(e) {
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
function Ya(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Md(e) {
  var t = Ya(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
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
function Lr(e) {
  e._valueTracker || (e._valueTracker = Md(e));
}
function Ja(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ya(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function uo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Rs(e, t) {
  var n = t.checked;
  return J({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function El(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = $t(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Za(e, t) {
  ((t = t.checked), t != null && Ni(e, "checked", t, !1));
}
function Ms(e, t) {
  Za(e, t);
  var n = $t(t.value),
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
    ? Ls(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ls(e, t.type, $t(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Nl(e, t, n) {
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
function Ls(e, t, n) {
  (t !== "number" || uo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var qn = Array.isArray;
function _n(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      ((o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + $t(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ((e[o].selected = !0), r && (e[o].defaultSelected = !0));
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function bs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return J({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Tl(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92));
      if (qn(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: $t(n) };
}
function eu(e, t) {
  var n = $t(t.value),
    r = $t(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Il(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function tu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Os(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? tu(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var br,
  nu = (function (e) {
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
        br = br || document.createElement("div"),
          br.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = br.firstChild;
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
var Jn = {
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
  Ld = ["Webkit", "ms", "Moz", "O"];
Object.keys(Jn).forEach(function (e) {
  Ld.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Jn[t] = Jn[e]));
  });
});
function ru(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Jn.hasOwnProperty(e) && Jn[e])
      ? ("" + t).trim()
      : t + "px";
}
function ou(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = ru(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o));
    }
}
var bd = J(
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
function $s(e, t) {
  if (t) {
    if (bd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function Fs(e, t) {
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
var zs = null;
function Pi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var As = null,
  xn = null,
  Sn = null;
function jl(e) {
  if ((e = jr(e))) {
    if (typeof As != "function") throw Error(S(280));
    var t = e.stateNode;
    t && ((t = Ao(t)), As(e.stateNode, e.type, t));
  }
}
function su(e) {
  xn ? (Sn ? Sn.push(e) : (Sn = [e])) : (xn = e);
}
function iu() {
  if (xn) {
    var e = xn,
      t = Sn;
    if (((Sn = xn = null), jl(e), t)) for (e = 0; e < t.length; e++) jl(t[e]);
  }
}
function lu(e, t) {
  return e(t);
}
function au() {}
var rs = !1;
function uu(e, t, n) {
  if (rs) return e(t, n);
  rs = !0;
  try {
    return lu(e, t, n);
  } finally {
    ((rs = !1), (xn !== null || Sn !== null) && (au(), iu()));
  }
}
function ur(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ao(n);
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
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var Us = !1;
if (gt)
  try {
    var Un = {};
    (Object.defineProperty(Un, "passive", {
      get: function () {
        Us = !0;
      },
    }),
      window.addEventListener("test", Un, Un),
      window.removeEventListener("test", Un, Un));
  } catch {
    Us = !1;
  }
function Od(e, t, n, r, o, s, i, l, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (p) {
    this.onError(p);
  }
}
var Zn = !1,
  co = null,
  fo = !1,
  Hs = null,
  $d = {
    onError: function (e) {
      ((Zn = !0), (co = e));
    },
  };
function Fd(e, t, n, r, o, s, i, l, a) {
  ((Zn = !1), (co = null), Od.apply($d, arguments));
}
function zd(e, t, n, r, o, s, i, l, a) {
  if ((Fd.apply(this, arguments), Zn)) {
    if (Zn) {
      var c = co;
      ((Zn = !1), (co = null));
    } else throw Error(S(198));
    fo || ((fo = !0), (Hs = c));
  }
}
function on(e) {
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
function cu(e) {
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
function Pl(e) {
  if (on(e) !== e) throw Error(S(188));
}
function Ad(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = on(e)), t === null)) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var s = o.alternate;
    if (s === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === s.child) {
      for (s = o.child; s; ) {
        if (s === n) return (Pl(o), e);
        if (s === r) return (Pl(o), t);
        s = s.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) ((n = o), (r = s));
    else {
      for (var i = !1, l = o.child; l; ) {
        if (l === n) {
          ((i = !0), (n = o), (r = s));
          break;
        }
        if (l === r) {
          ((i = !0), (r = o), (n = s));
          break;
        }
        l = l.sibling;
      }
      if (!i) {
        for (l = s.child; l; ) {
          if (l === n) {
            ((i = !0), (n = s), (r = o));
            break;
          }
          if (l === r) {
            ((i = !0), (r = s), (n = o));
            break;
          }
          l = l.sibling;
        }
        if (!i) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function du(e) {
  return ((e = Ad(e)), e !== null ? fu(e) : null);
}
function fu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = fu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var hu = Oe.unstable_scheduleCallback,
  Dl = Oe.unstable_cancelCallback,
  Ud = Oe.unstable_shouldYield,
  Hd = Oe.unstable_requestPaint,
  te = Oe.unstable_now,
  Bd = Oe.unstable_getCurrentPriorityLevel,
  Di = Oe.unstable_ImmediatePriority,
  pu = Oe.unstable_UserBlockingPriority,
  ho = Oe.unstable_NormalPriority,
  Wd = Oe.unstable_LowPriority,
  mu = Oe.unstable_IdlePriority,
  Oo = null,
  lt = null;
function Vd(e) {
  if (lt && typeof lt.onCommitFiberRoot == "function")
    try {
      lt.onCommitFiberRoot(Oo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ye = Math.clz32 ? Math.clz32 : Gd,
  Qd = Math.log,
  Kd = Math.LN2;
function Gd(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Qd(e) / Kd) | 0)) | 0);
}
var Or = 64,
  $r = 4194304;
function Xn(e) {
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
function po(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    s = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var l = i & ~o;
    l !== 0 ? (r = Xn(l)) : ((s &= i), s !== 0 && (r = Xn(s)));
  } else ((i = n & ~o), i !== 0 ? (r = Xn(i)) : s !== 0 && (r = Xn(s)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (s = t & -t), o >= s || (o === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Ye(t)), (o = 1 << n), (r |= e[n]), (t &= ~o));
  return r;
}
function qd(e, t) {
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
function Xd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;
  ) {
    var i = 31 - Ye(s),
      l = 1 << i,
      a = o[i];
    (a === -1
      ? (!(l & n) || l & r) && (o[i] = qd(l, t))
      : a <= t && (e.expiredLanes |= l),
      (s &= ~l));
  }
}
function Bs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function gu() {
  var e = Or;
  return ((Or <<= 1), !(Or & 4194240) && (Or = 64), e);
}
function os(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Tr(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ye(t)),
    (e[t] = n));
}
function Yd(e, t) {
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
    var o = 31 - Ye(n),
      s = 1 << o;
    ((t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~s));
  }
}
function Ri(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ye(n),
      o = 1 << r;
    ((o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o));
  }
}
var A = 0;
function yu(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var vu,
  Mi,
  wu,
  _u,
  xu,
  Ws = !1,
  Fr = [],
  jt = null,
  Pt = null,
  Dt = null,
  cr = new Map(),
  dr = new Map(),
  Et = [],
  Jd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Rl(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      jt = null;
      break;
    case "dragenter":
    case "dragleave":
      Pt = null;
      break;
    case "mouseover":
    case "mouseout":
      Dt = null;
      break;
    case "pointerover":
    case "pointerout":
      cr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      dr.delete(t.pointerId);
  }
}
function Hn(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o],
      }),
      t !== null && ((t = jr(t)), t !== null && Mi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Zd(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return ((jt = Hn(jt, e, t, n, r, o)), !0);
    case "dragenter":
      return ((Pt = Hn(Pt, e, t, n, r, o)), !0);
    case "mouseover":
      return ((Dt = Hn(Dt, e, t, n, r, o)), !0);
    case "pointerover":
      var s = o.pointerId;
      return (cr.set(s, Hn(cr.get(s) || null, e, t, n, r, o)), !0);
    case "gotpointercapture":
      return (
        (s = o.pointerId),
        dr.set(s, Hn(dr.get(s) || null, e, t, n, r, o)),
        !0
      );
  }
  return !1;
}
function Su(e) {
  var t = Wt(e.target);
  if (t !== null) {
    var n = on(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = cu(n)), t !== null)) {
          ((e.blockedOn = t),
            xu(e.priority, function () {
              wu(n);
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
function Zr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Vs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((zs = r), n.target.dispatchEvent(r), (zs = null));
    } else return ((t = jr(n)), t !== null && Mi(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Ml(e, t, n) {
  Zr(e) && n.delete(t);
}
function ef() {
  ((Ws = !1),
    jt !== null && Zr(jt) && (jt = null),
    Pt !== null && Zr(Pt) && (Pt = null),
    Dt !== null && Zr(Dt) && (Dt = null),
    cr.forEach(Ml),
    dr.forEach(Ml));
}
function Bn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ws ||
      ((Ws = !0),
      Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, ef)));
}
function fr(e) {
  function t(o) {
    return Bn(o, e);
  }
  if (0 < Fr.length) {
    Bn(Fr[0], e);
    for (var n = 1; n < Fr.length; n++) {
      var r = Fr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    jt !== null && Bn(jt, e),
      Pt !== null && Bn(Pt, e),
      Dt !== null && Bn(Dt, e),
      cr.forEach(t),
      dr.forEach(t),
      n = 0;
    n < Et.length;
    n++
  )
    ((r = Et[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Et.length && ((n = Et[0]), n.blockedOn === null); )
    (Su(n), n.blockedOn === null && Et.shift());
}
var kn = _t.ReactCurrentBatchConfig,
  mo = !0;
function tf(e, t, n, r) {
  var o = A,
    s = kn.transition;
  kn.transition = null;
  try {
    ((A = 1), Li(e, t, n, r));
  } finally {
    ((A = o), (kn.transition = s));
  }
}
function nf(e, t, n, r) {
  var o = A,
    s = kn.transition;
  kn.transition = null;
  try {
    ((A = 4), Li(e, t, n, r));
  } finally {
    ((A = o), (kn.transition = s));
  }
}
function Li(e, t, n, r) {
  if (mo) {
    var o = Vs(e, t, n, r);
    if (o === null) (ps(e, t, r, go, n), Rl(e, r));
    else if (Zd(o, e, t, n, r)) r.stopPropagation();
    else if ((Rl(e, r), t & 4 && -1 < Jd.indexOf(e))) {
      for (; o !== null; ) {
        var s = jr(o);
        if (
          (s !== null && vu(s),
          (s = Vs(e, t, n, r)),
          s === null && ps(e, t, r, go, n),
          s === o)
        )
          break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else ps(e, t, r, null, n);
  }
}
var go = null;
function Vs(e, t, n, r) {
  if (((go = null), (e = Pi(r)), (e = Wt(e)), e !== null))
    if (((t = on(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = cu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((go = e), null);
}
function ku(e) {
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
      switch (Bd()) {
        case Di:
          return 1;
        case pu:
          return 4;
        case ho:
        case Wd:
          return 16;
        case mu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Tt = null,
  bi = null,
  eo = null;
function Cu() {
  if (eo) return eo;
  var e,
    t = bi,
    n = t.length,
    r,
    o = "value" in Tt ? Tt.value : Tt.textContent,
    s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++);
  return (eo = o.slice(e, 1 < r ? 1 - r : void 0));
}
function to(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function zr() {
  return !0;
}
function Ll() {
  return !1;
}
function Fe(e) {
  function t(n, r, o, s, i) {
    ((this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = i),
      (this.currentTarget = null));
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? zr
        : Ll),
      (this.isPropagationStopped = Ll),
      this
    );
  }
  return (
    J(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = zr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = zr));
      },
      persist: function () {},
      isPersistent: zr,
    }),
    t
  );
}
var bn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Oi = Fe(bn),
  Ir = J({}, bn, { view: 0, detail: 0 }),
  rf = Fe(Ir),
  ss,
  is,
  Wn,
  $o = J({}, Ir, {
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
    getModifierState: $i,
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
        : (e !== Wn &&
            (Wn && e.type === "mousemove"
              ? ((ss = e.screenX - Wn.screenX), (is = e.screenY - Wn.screenY))
              : (is = ss = 0),
            (Wn = e)),
          ss);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : is;
    },
  }),
  bl = Fe($o),
  of = J({}, $o, { dataTransfer: 0 }),
  sf = Fe(of),
  lf = J({}, Ir, { relatedTarget: 0 }),
  ls = Fe(lf),
  af = J({}, bn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  uf = Fe(af),
  cf = J({}, bn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  df = Fe(cf),
  ff = J({}, bn, { data: 0 }),
  Ol = Fe(ff),
  hf = {
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
  pf = {
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
  mf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function gf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = mf[e]) ? !!t[e] : !1;
}
function $i() {
  return gf;
}
var yf = J({}, Ir, {
    key: function (e) {
      if (e.key) {
        var t = hf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = to(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? pf[e.keyCode] || "Unidentified"
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
    getModifierState: $i,
    charCode: function (e) {
      return e.type === "keypress" ? to(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? to(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  vf = Fe(yf),
  wf = J({}, $o, {
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
  $l = Fe(wf),
  _f = J({}, Ir, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $i,
  }),
  xf = Fe(_f),
  Sf = J({}, bn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  kf = Fe(Sf),
  Cf = J({}, $o, {
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
  Ef = Fe(Cf),
  Nf = [9, 13, 27, 32],
  Fi = gt && "CompositionEvent" in window,
  er = null;
gt && "documentMode" in document && (er = document.documentMode);
var Tf = gt && "TextEvent" in window && !er,
  Eu = gt && (!Fi || (er && 8 < er && 11 >= er)),
  Fl = " ",
  zl = !1;
function Nu(e, t) {
  switch (e) {
    case "keyup":
      return Nf.indexOf(t.keyCode) !== -1;
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
function Tu(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var cn = !1;
function If(e, t) {
  switch (e) {
    case "compositionend":
      return Tu(t);
    case "keypress":
      return t.which !== 32 ? null : ((zl = !0), Fl);
    case "textInput":
      return ((e = t.data), e === Fl && zl ? null : e);
    default:
      return null;
  }
}
function jf(e, t) {
  if (cn)
    return e === "compositionend" || (!Fi && Nu(e, t))
      ? ((e = Cu()), (eo = bi = Tt = null), (cn = !1), e)
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
      return Eu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Pf = {
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
function Al(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Pf[e.type] : t === "textarea";
}
function Iu(e, t, n, r) {
  (su(r),
    (t = yo(t, "onChange")),
    0 < t.length &&
      ((n = new Oi("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var tr = null,
  hr = null;
function Df(e) {
  zu(e, 0);
}
function Fo(e) {
  var t = hn(e);
  if (Ja(t)) return e;
}
function Rf(e, t) {
  if (e === "change") return t;
}
var ju = !1;
if (gt) {
  var as;
  if (gt) {
    var us = "oninput" in document;
    if (!us) {
      var Ul = document.createElement("div");
      (Ul.setAttribute("oninput", "return;"),
        (us = typeof Ul.oninput == "function"));
    }
    as = us;
  } else as = !1;
  ju = as && (!document.documentMode || 9 < document.documentMode);
}
function Hl() {
  tr && (tr.detachEvent("onpropertychange", Pu), (hr = tr = null));
}
function Pu(e) {
  if (e.propertyName === "value" && Fo(hr)) {
    var t = [];
    (Iu(t, hr, e, Pi(e)), uu(Df, t));
  }
}
function Mf(e, t, n) {
  e === "focusin"
    ? (Hl(), (tr = t), (hr = n), tr.attachEvent("onpropertychange", Pu))
    : e === "focusout" && Hl();
}
function Lf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Fo(hr);
}
function bf(e, t) {
  if (e === "click") return Fo(t);
}
function Of(e, t) {
  if (e === "input" || e === "change") return Fo(t);
}
function $f(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ze = typeof Object.is == "function" ? Object.is : $f;
function pr(e, t) {
  if (Ze(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ts.call(t, o) || !Ze(e[o], t[o])) return !1;
  }
  return !0;
}
function Bl(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Wl(e, t) {
  var n = Bl(e);
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
    n = Bl(n);
  }
}
function Du(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Du(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Ru() {
  for (var e = window, t = uo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = uo(e.document);
  }
  return t;
}
function zi(e) {
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
function Ff(e) {
  var t = Ru(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Du(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && zi(n)) {
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
        var o = n.textContent.length,
          s = Math.min(r.start, o);
        ((r = r.end === void 0 ? s : Math.min(r.end, o)),
          !e.extend && s > r && ((o = r), (r = s), (s = o)),
          (o = Wl(n, s)));
        var i = Wl(n, r);
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
var zf = gt && "documentMode" in document && 11 >= document.documentMode,
  dn = null,
  Qs = null,
  nr = null,
  Ks = !1;
function Vl(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ks ||
    dn == null ||
    dn !== uo(r) ||
    ((r = dn),
    "selectionStart" in r && zi(r)
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
    (nr && pr(nr, r)) ||
      ((nr = r),
      (r = yo(Qs, "onSelect")),
      0 < r.length &&
        ((t = new Oi("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = dn))));
}
function Ar(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var fn = {
    animationend: Ar("Animation", "AnimationEnd"),
    animationiteration: Ar("Animation", "AnimationIteration"),
    animationstart: Ar("Animation", "AnimationStart"),
    transitionend: Ar("Transition", "TransitionEnd"),
  },
  cs = {},
  Mu = {};
gt &&
  ((Mu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete fn.animationend.animation,
    delete fn.animationiteration.animation,
    delete fn.animationstart.animation),
  "TransitionEvent" in window || delete fn.transitionend.transition);
function zo(e) {
  if (cs[e]) return cs[e];
  if (!fn[e]) return e;
  var t = fn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Mu) return (cs[e] = t[n]);
  return e;
}
var Lu = zo("animationend"),
  bu = zo("animationiteration"),
  Ou = zo("animationstart"),
  $u = zo("transitionend"),
  Fu = new Map(),
  Ql =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function zt(e, t) {
  (Fu.set(e, t), rn(t, [e]));
}
for (var ds = 0; ds < Ql.length; ds++) {
  var fs = Ql[ds],
    Af = fs.toLowerCase(),
    Uf = fs[0].toUpperCase() + fs.slice(1);
  zt(Af, "on" + Uf);
}
zt(Lu, "onAnimationEnd");
zt(bu, "onAnimationIteration");
zt(Ou, "onAnimationStart");
zt("dblclick", "onDoubleClick");
zt("focusin", "onFocus");
zt("focusout", "onBlur");
zt($u, "onTransitionEnd");
Nn("onMouseEnter", ["mouseout", "mouseover"]);
Nn("onMouseLeave", ["mouseout", "mouseover"]);
Nn("onPointerEnter", ["pointerout", "pointerover"]);
Nn("onPointerLeave", ["pointerout", "pointerover"]);
rn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
rn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
rn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
rn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
rn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Yn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Hf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yn));
function Kl(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), zd(r, t, void 0, e), (e.currentTarget = null));
}
function zu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var l = r[i],
            a = l.instance,
            c = l.currentTarget;
          if (((l = l.listener), a !== s && o.isPropagationStopped())) break e;
          (Kl(o, l, c), (s = a));
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((l = r[i]),
            (a = l.instance),
            (c = l.currentTarget),
            (l = l.listener),
            a !== s && o.isPropagationStopped())
          )
            break e;
          (Kl(o, l, c), (s = a));
        }
    }
  }
  if (fo) throw ((e = Hs), (fo = !1), (Hs = null), e);
}
function W(e, t) {
  var n = t[Js];
  n === void 0 && (n = t[Js] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Au(t, e, 2, !1), n.add(r));
}
function hs(e, t, n) {
  var r = 0;
  (t && (r |= 4), Au(n, e, r, t));
}
var Ur = "_reactListening" + Math.random().toString(36).slice(2);
function mr(e) {
  if (!e[Ur]) {
    ((e[Ur] = !0),
      Ka.forEach(function (n) {
        n !== "selectionchange" && (Hf.has(n) || hs(n, !1, e), hs(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ur] || ((t[Ur] = !0), hs("selectionchange", !1, t));
  }
}
function Au(e, t, n, r) {
  switch (ku(t)) {
    case 1:
      var o = tf;
      break;
    case 4:
      o = nf;
      break;
    default:
      o = Li;
  }
  ((n = o.bind(null, t, n, e)),
    (o = void 0),
    !Us ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1));
}
function ps(e, t, n, r, o) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
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
        for (; l !== null; ) {
          if (((i = Wt(l)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = s = i;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  uu(function () {
    var c = s,
      p = Pi(n),
      g = [];
    e: {
      var m = Fu.get(e);
      if (m !== void 0) {
        var v = Oi,
          w = e;
        switch (e) {
          case "keypress":
            if (to(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = vf;
            break;
          case "focusin":
            ((w = "focus"), (v = ls));
            break;
          case "focusout":
            ((w = "blur"), (v = ls));
            break;
          case "beforeblur":
          case "afterblur":
            v = ls;
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
            v = bl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = sf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = xf;
            break;
          case Lu:
          case bu:
          case Ou:
            v = uf;
            break;
          case $u:
            v = kf;
            break;
          case "scroll":
            v = rf;
            break;
          case "wheel":
            v = Ef;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = df;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = $l;
        }
        var x = (t & 4) !== 0,
          D = !x && e === "scroll",
          f = x ? (m !== null ? m + "Capture" : null) : m;
        x = [];
        for (var d = c, h; d !== null; ) {
          h = d;
          var _ = h.stateNode;
          if (
            (h.tag === 5 &&
              _ !== null &&
              ((h = _),
              f !== null && ((_ = ur(d, f)), _ != null && x.push(gr(d, _, h)))),
            D)
          )
            break;
          d = d.return;
        }
        0 < x.length &&
          ((m = new v(m, w, null, n, p)), g.push({ event: m, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          m &&
            n !== zs &&
            (w = n.relatedTarget || n.fromElement) &&
            (Wt(w) || w[yt]))
        )
          break e;
        if (
          (v || m) &&
          ((m =
            p.window === p
              ? p
              : (m = p.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
          v
            ? ((w = n.relatedTarget || n.toElement),
              (v = c),
              (w = w ? Wt(w) : null),
              w !== null &&
                ((D = on(w)), w !== D || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((v = null), (w = c)),
          v !== w)
        ) {
          if (
            ((x = bl),
            (_ = "onMouseLeave"),
            (f = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = $l),
              (_ = "onPointerLeave"),
              (f = "onPointerEnter"),
              (d = "pointer")),
            (D = v == null ? m : hn(v)),
            (h = w == null ? m : hn(w)),
            (m = new x(_, d + "leave", v, n, p)),
            (m.target = D),
            (m.relatedTarget = h),
            (_ = null),
            Wt(p) === c &&
              ((x = new x(f, d + "enter", w, n, p)),
              (x.target = h),
              (x.relatedTarget = D),
              (_ = x)),
            (D = _),
            v && w)
          )
            t: {
              for (x = v, f = w, d = 0, h = x; h; h = ln(h)) d++;
              for (h = 0, _ = f; _; _ = ln(_)) h++;
              for (; 0 < d - h; ) ((x = ln(x)), d--);
              for (; 0 < h - d; ) ((f = ln(f)), h--);
              for (; d--; ) {
                if (x === f || (f !== null && x === f.alternate)) break t;
                ((x = ln(x)), (f = ln(f)));
              }
              x = null;
            }
          else x = null;
          (v !== null && Gl(g, m, v, x, !1),
            w !== null && D !== null && Gl(g, D, w, x, !0));
        }
      }
      e: {
        if (
          ((m = c ? hn(c) : window),
          (v = m.nodeName && m.nodeName.toLowerCase()),
          v === "select" || (v === "input" && m.type === "file"))
        )
          var C = Rf;
        else if (Al(m))
          if (ju) C = Of;
          else {
            C = Lf;
            var T = Mf;
          }
        else
          (v = m.nodeName) &&
            v.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (C = bf);
        if (C && (C = C(e, c))) {
          Iu(g, C, n, p);
          break e;
        }
        (T && T(e, m, c),
          e === "focusout" &&
            (T = m._wrapperState) &&
            T.controlled &&
            m.type === "number" &&
            Ls(m, "number", m.value));
      }
      switch (((T = c ? hn(c) : window), e)) {
        case "focusin":
          (Al(T) || T.contentEditable === "true") &&
            ((dn = T), (Qs = c), (nr = null));
          break;
        case "focusout":
          nr = Qs = dn = null;
          break;
        case "mousedown":
          Ks = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Ks = !1), Vl(g, n, p));
          break;
        case "selectionchange":
          if (zf) break;
        case "keydown":
        case "keyup":
          Vl(g, n, p);
      }
      var k;
      if (Fi)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        cn
          ? Nu(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      (N &&
        (Eu &&
          n.locale !== "ko" &&
          (cn || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && cn && (k = Cu())
            : ((Tt = p),
              (bi = "value" in Tt ? Tt.value : Tt.textContent),
              (cn = !0))),
        (T = yo(c, N)),
        0 < T.length &&
          ((N = new Ol(N, e, null, n, p)),
          g.push({ event: N, listeners: T }),
          k ? (N.data = k) : ((k = Tu(n)), k !== null && (N.data = k)))),
        (k = Tf ? If(e, n) : jf(e, n)) &&
          ((c = yo(c, "onBeforeInput")),
          0 < c.length &&
            ((p = new Ol("onBeforeInput", "beforeinput", null, n, p)),
            g.push({ event: p, listeners: c }),
            (p.data = k))));
    }
    zu(g, t);
  });
}
function gr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function yo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      s = o.stateNode;
    (o.tag === 5 &&
      s !== null &&
      ((o = s),
      (s = ur(e, n)),
      s != null && r.unshift(gr(e, s, o)),
      (s = ur(e, t)),
      s != null && r.push(gr(e, s, o))),
      (e = e.return));
  }
  return r;
}
function ln(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Gl(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      c = l.stateNode;
    if (a !== null && a === r) break;
    (l.tag === 5 &&
      c !== null &&
      ((l = c),
      o
        ? ((a = ur(n, s)), a != null && i.unshift(gr(n, a, l)))
        : o || ((a = ur(n, s)), a != null && i.push(gr(n, a, l)))),
      (n = n.return));
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Bf = /\r\n?/g,
  Wf = /\u0000|\uFFFD/g;
function ql(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Bf,
      `
`,
    )
    .replace(Wf, "");
}
function Hr(e, t, n) {
  if (((t = ql(t)), ql(e) !== t && n)) throw Error(S(425));
}
function vo() {}
var Gs = null,
  qs = null;
function Xs(e, t) {
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
var Ys = typeof setTimeout == "function" ? setTimeout : void 0,
  Vf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Xl = typeof Promise == "function" ? Promise : void 0,
  Qf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Xl < "u"
        ? function (e) {
            return Xl.resolve(null).then(e).catch(Kf);
          }
        : Ys;
function Kf(e) {
  setTimeout(function () {
    throw e;
  });
}
function ms(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(o), fr(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  fr(t);
}
function Rt(e) {
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
function Yl(e) {
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
var On = Math.random().toString(36).slice(2),
  it = "__reactFiber$" + On,
  yr = "__reactProps$" + On,
  yt = "__reactContainer$" + On,
  Js = "__reactEvents$" + On,
  Gf = "__reactListeners$" + On,
  qf = "__reactHandles$" + On;
function Wt(e) {
  var t = e[it];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[yt] || n[it])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Yl(e); e !== null; ) {
          if ((n = e[it])) return n;
          e = Yl(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function jr(e) {
  return (
    (e = e[it] || e[yt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function hn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function Ao(e) {
  return e[yr] || null;
}
var Zs = [],
  pn = -1;
function At(e) {
  return { current: e };
}
function V(e) {
  0 > pn || ((e.current = Zs[pn]), (Zs[pn] = null), pn--);
}
function H(e, t) {
  (pn++, (Zs[pn] = e.current), (e.current = t));
}
var Ft = {},
  _e = At(Ft),
  je = At(!1),
  Yt = Ft;
function Tn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ft;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    s;
  for (s in n) o[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Pe(e) {
  return ((e = e.childContextTypes), e != null);
}
function wo() {
  (V(je), V(_e));
}
function Jl(e, t, n) {
  if (_e.current !== Ft) throw Error(S(168));
  (H(_e, t), H(je, n));
}
function Uu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(S(108, Rd(e) || "Unknown", o));
  return J({}, n, r);
}
function _o(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ft),
    (Yt = _e.current),
    H(_e, e),
    H(je, je.current),
    !0
  );
}
function Zl(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  (n
    ? ((e = Uu(e, t, Yt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      V(je),
      V(_e),
      H(_e, e))
    : V(je),
    H(je, n));
}
var ft = null,
  Uo = !1,
  gs = !1;
function Hu(e) {
  ft === null ? (ft = [e]) : ft.push(e);
}
function Xf(e) {
  ((Uo = !0), Hu(e));
}
function Ut() {
  if (!gs && ft !== null) {
    gs = !0;
    var e = 0,
      t = A;
    try {
      var n = ft;
      for (A = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((ft = null), (Uo = !1));
    } catch (o) {
      throw (ft !== null && (ft = ft.slice(e + 1)), hu(Di, Ut), o);
    } finally {
      ((A = t), (gs = !1));
    }
  }
  return null;
}
var mn = [],
  gn = 0,
  xo = null,
  So = 0,
  Ae = [],
  Ue = 0,
  Jt = null,
  ht = 1,
  pt = "";
function Ht(e, t) {
  ((mn[gn++] = So), (mn[gn++] = xo), (xo = e), (So = t));
}
function Bu(e, t, n) {
  ((Ae[Ue++] = ht), (Ae[Ue++] = pt), (Ae[Ue++] = Jt), (Jt = e));
  var r = ht;
  e = pt;
  var o = 32 - Ye(r) - 1;
  ((r &= ~(1 << o)), (n += 1));
  var s = 32 - Ye(t) + o;
  if (30 < s) {
    var i = o - (o % 5);
    ((s = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (ht = (1 << (32 - Ye(t) + o)) | (n << o) | r),
      (pt = s + e));
  } else ((ht = (1 << s) | (n << o) | r), (pt = e));
}
function Ai(e) {
  e.return !== null && (Ht(e, 1), Bu(e, 1, 0));
}
function Ui(e) {
  for (; e === xo; )
    ((xo = mn[--gn]), (mn[gn] = null), (So = mn[--gn]), (mn[gn] = null));
  for (; e === Jt; )
    ((Jt = Ae[--Ue]),
      (Ae[Ue] = null),
      (pt = Ae[--Ue]),
      (Ae[Ue] = null),
      (ht = Ae[--Ue]),
      (Ae[Ue] = null));
}
var be = null,
  Me = null,
  K = !1,
  qe = null;
function Wu(e, t) {
  var n = He(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function ea(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (be = e), (Me = Rt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (be = e), (Me = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Jt !== null ? { id: ht, overflow: pt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = He(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (be = e),
            (Me = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ei(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ti(e) {
  if (K) {
    var t = Me;
    if (t) {
      var n = t;
      if (!ea(e, t)) {
        if (ei(e)) throw Error(S(418));
        t = Rt(n.nextSibling);
        var r = be;
        t && ea(e, t)
          ? Wu(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (K = !1), (be = e));
      }
    } else {
      if (ei(e)) throw Error(S(418));
      ((e.flags = (e.flags & -4097) | 2), (K = !1), (be = e));
    }
  }
}
function ta(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  be = e;
}
function Br(e) {
  if (e !== be) return !1;
  if (!K) return (ta(e), (K = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Xs(e.type, e.memoizedProps))),
    t && (t = Me))
  ) {
    if (ei(e)) throw (Vu(), Error(S(418)));
    for (; t; ) (Wu(e, t), (t = Rt(t.nextSibling)));
  }
  if ((ta(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Me = Rt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Me = null;
    }
  } else Me = be ? Rt(e.stateNode.nextSibling) : null;
  return !0;
}
function Vu() {
  for (var e = Me; e; ) e = Rt(e.nextSibling);
}
function In() {
  ((Me = be = null), (K = !1));
}
function Hi(e) {
  qe === null ? (qe = [e]) : qe.push(e);
}
var Yf = _t.ReactCurrentBatchConfig;
function Vn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var o = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (i) {
            var l = o.refs;
            i === null ? delete l[s] : (l[s] = i);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function Wr(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function na(e) {
  var t = e._init;
  return t(e._payload);
}
function Qu(e) {
  function t(f, d) {
    if (e) {
      var h = f.deletions;
      h === null ? ((f.deletions = [d]), (f.flags |= 16)) : h.push(d);
    }
  }
  function n(f, d) {
    if (!e) return null;
    for (; d !== null; ) (t(f, d), (d = d.sibling));
    return null;
  }
  function r(f, d) {
    for (f = new Map(); d !== null; )
      (d.key !== null ? f.set(d.key, d) : f.set(d.index, d), (d = d.sibling));
    return f;
  }
  function o(f, d) {
    return ((f = Ot(f, d)), (f.index = 0), (f.sibling = null), f);
  }
  function s(f, d, h) {
    return (
      (f.index = h),
      e
        ? ((h = f.alternate),
          h !== null
            ? ((h = h.index), h < d ? ((f.flags |= 2), d) : h)
            : ((f.flags |= 2), d))
        : ((f.flags |= 1048576), d)
    );
  }
  function i(f) {
    return (e && f.alternate === null && (f.flags |= 2), f);
  }
  function l(f, d, h, _) {
    return d === null || d.tag !== 6
      ? ((d = ks(h, f.mode, _)), (d.return = f), d)
      : ((d = o(d, h)), (d.return = f), d);
  }
  function a(f, d, h, _) {
    var C = h.type;
    return C === un
      ? p(f, d, h.props.children, _, h.key)
      : d !== null &&
          (d.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === kt &&
              na(C) === d.type))
        ? ((_ = o(d, h.props)), (_.ref = Vn(f, d, h)), (_.return = f), _)
        : ((_ = ao(h.type, h.key, h.props, null, f.mode, _)),
          (_.ref = Vn(f, d, h)),
          (_.return = f),
          _);
  }
  function c(f, d, h, _) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = Cs(h, f.mode, _)), (d.return = f), d)
      : ((d = o(d, h.children || [])), (d.return = f), d);
  }
  function p(f, d, h, _, C) {
    return d === null || d.tag !== 7
      ? ((d = Gt(h, f.mode, _, C)), (d.return = f), d)
      : ((d = o(d, h)), (d.return = f), d);
  }
  function g(f, d, h) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return ((d = ks("" + d, f.mode, h)), (d.return = f), d);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Mr:
          return (
            (h = ao(d.type, d.key, d.props, null, f.mode, h)),
            (h.ref = Vn(f, null, d)),
            (h.return = f),
            h
          );
        case an:
          return ((d = Cs(d, f.mode, h)), (d.return = f), d);
        case kt:
          var _ = d._init;
          return g(f, _(d._payload), h);
      }
      if (qn(d) || An(d))
        return ((d = Gt(d, f.mode, h, null)), (d.return = f), d);
      Wr(f, d);
    }
    return null;
  }
  function m(f, d, h, _) {
    var C = d !== null ? d.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return C !== null ? null : l(f, d, "" + h, _);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Mr:
          return h.key === C ? a(f, d, h, _) : null;
        case an:
          return h.key === C ? c(f, d, h, _) : null;
        case kt:
          return ((C = h._init), m(f, d, C(h._payload), _));
      }
      if (qn(h) || An(h)) return C !== null ? null : p(f, d, h, _, null);
      Wr(f, h);
    }
    return null;
  }
  function v(f, d, h, _, C) {
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return ((f = f.get(h) || null), l(d, f, "" + _, C));
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case Mr:
          return (
            (f = f.get(_.key === null ? h : _.key) || null),
            a(d, f, _, C)
          );
        case an:
          return (
            (f = f.get(_.key === null ? h : _.key) || null),
            c(d, f, _, C)
          );
        case kt:
          var T = _._init;
          return v(f, d, h, T(_._payload), C);
      }
      if (qn(_) || An(_)) return ((f = f.get(h) || null), p(d, f, _, C, null));
      Wr(d, _);
    }
    return null;
  }
  function w(f, d, h, _) {
    for (
      var C = null, T = null, k = d, N = (d = 0), b = null;
      k !== null && N < h.length;
      N++
    ) {
      k.index > N ? ((b = k), (k = null)) : (b = k.sibling);
      var R = m(f, k, h[N], _);
      if (R === null) {
        k === null && (k = b);
        break;
      }
      (e && k && R.alternate === null && t(f, k),
        (d = s(R, d, N)),
        T === null ? (C = R) : (T.sibling = R),
        (T = R),
        (k = b));
    }
    if (N === h.length) return (n(f, k), K && Ht(f, N), C);
    if (k === null) {
      for (; N < h.length; N++)
        ((k = g(f, h[N], _)),
          k !== null &&
            ((d = s(k, d, N)),
            T === null ? (C = k) : (T.sibling = k),
            (T = k)));
      return (K && Ht(f, N), C);
    }
    for (k = r(f, k); N < h.length; N++)
      ((b = v(k, f, N, h[N], _)),
        b !== null &&
          (e && b.alternate !== null && k.delete(b.key === null ? N : b.key),
          (d = s(b, d, N)),
          T === null ? (C = b) : (T.sibling = b),
          (T = b)));
    return (
      e &&
        k.forEach(function (U) {
          return t(f, U);
        }),
      K && Ht(f, N),
      C
    );
  }
  function x(f, d, h, _) {
    var C = An(h);
    if (typeof C != "function") throw Error(S(150));
    if (((h = C.call(h)), h == null)) throw Error(S(151));
    for (
      var T = (C = null), k = d, N = (d = 0), b = null, R = h.next();
      k !== null && !R.done;
      N++, R = h.next()
    ) {
      k.index > N ? ((b = k), (k = null)) : (b = k.sibling);
      var U = m(f, k, R.value, _);
      if (U === null) {
        k === null && (k = b);
        break;
      }
      (e && k && U.alternate === null && t(f, k),
        (d = s(U, d, N)),
        T === null ? (C = U) : (T.sibling = U),
        (T = U),
        (k = b));
    }
    if (R.done) return (n(f, k), K && Ht(f, N), C);
    if (k === null) {
      for (; !R.done; N++, R = h.next())
        ((R = g(f, R.value, _)),
          R !== null &&
            ((d = s(R, d, N)),
            T === null ? (C = R) : (T.sibling = R),
            (T = R)));
      return (K && Ht(f, N), C);
    }
    for (k = r(f, k); !R.done; N++, R = h.next())
      ((R = v(k, f, N, R.value, _)),
        R !== null &&
          (e && R.alternate !== null && k.delete(R.key === null ? N : R.key),
          (d = s(R, d, N)),
          T === null ? (C = R) : (T.sibling = R),
          (T = R)));
    return (
      e &&
        k.forEach(function (et) {
          return t(f, et);
        }),
      K && Ht(f, N),
      C
    );
  }
  function D(f, d, h, _) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === un &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Mr:
          e: {
            for (var C = h.key, T = d; T !== null; ) {
              if (T.key === C) {
                if (((C = h.type), C === un)) {
                  if (T.tag === 7) {
                    (n(f, T.sibling),
                      (d = o(T, h.props.children)),
                      (d.return = f),
                      (f = d));
                    break e;
                  }
                } else if (
                  T.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === kt &&
                    na(C) === T.type)
                ) {
                  (n(f, T.sibling),
                    (d = o(T, h.props)),
                    (d.ref = Vn(f, T, h)),
                    (d.return = f),
                    (f = d));
                  break e;
                }
                n(f, T);
                break;
              } else t(f, T);
              T = T.sibling;
            }
            h.type === un
              ? ((d = Gt(h.props.children, f.mode, _, h.key)),
                (d.return = f),
                (f = d))
              : ((_ = ao(h.type, h.key, h.props, null, f.mode, _)),
                (_.ref = Vn(f, d, h)),
                (_.return = f),
                (f = _));
          }
          return i(f);
        case an:
          e: {
            for (T = h.key; d !== null; ) {
              if (d.key === T)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === h.containerInfo &&
                  d.stateNode.implementation === h.implementation
                ) {
                  (n(f, d.sibling),
                    (d = o(d, h.children || [])),
                    (d.return = f),
                    (f = d));
                  break e;
                } else {
                  n(f, d);
                  break;
                }
              else t(f, d);
              d = d.sibling;
            }
            ((d = Cs(h, f.mode, _)), (d.return = f), (f = d));
          }
          return i(f);
        case kt:
          return ((T = h._init), D(f, d, T(h._payload), _));
      }
      if (qn(h)) return w(f, d, h, _);
      if (An(h)) return x(f, d, h, _);
      Wr(f, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        d !== null && d.tag === 6
          ? (n(f, d.sibling), (d = o(d, h)), (d.return = f), (f = d))
          : (n(f, d), (d = ks(h, f.mode, _)), (d.return = f), (f = d)),
        i(f))
      : n(f, d);
  }
  return D;
}
var jn = Qu(!0),
  Ku = Qu(!1),
  ko = At(null),
  Co = null,
  yn = null,
  Bi = null;
function Wi() {
  Bi = yn = Co = null;
}
function Vi(e) {
  var t = ko.current;
  (V(ko), (e._currentValue = t));
}
function ni(e, t, n) {
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
function Cn(e, t) {
  ((Co = e),
    (Bi = yn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ie = !0), (e.firstContext = null)));
}
function We(e) {
  var t = e._currentValue;
  if (Bi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), yn === null)) {
      if (Co === null) throw Error(S(308));
      ((yn = e), (Co.dependencies = { lanes: 0, firstContext: e }));
    } else yn = yn.next = e;
  return t;
}
var Vt = null;
function Qi(e) {
  Vt === null ? (Vt = [e]) : Vt.push(e);
}
function Gu(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Qi(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    vt(e, r)
  );
}
function vt(e, t) {
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
var Ct = !1;
function Ki(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function qu(e, t) {
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
function mt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Mt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), z & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      vt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Qi(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    vt(e, n)
  );
}
function no(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ri(e, n));
  }
}
function ra(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
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
        (s === null ? (o = s = i) : (s = s.next = i), (n = n.next));
      } while (n !== null);
      s === null ? (o = s = t) : (s = s.next = t);
    } else o = s = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
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
function Eo(e, t, n, r) {
  var o = e.updateQueue;
  Ct = !1;
  var s = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      c = a.next;
    ((a.next = null), i === null ? (s = c) : (i.next = c), (i = a));
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (l = p.lastBaseUpdate),
      l !== i &&
        (l === null ? (p.firstBaseUpdate = c) : (l.next = c),
        (p.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var g = o.baseState;
    ((i = 0), (p = c = a = null), (l = s));
    do {
      var m = l.lane,
        v = l.eventTime;
      if ((r & m) === m) {
        p !== null &&
          (p = p.next =
            {
              eventTime: v,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var w = e,
            x = l;
          switch (((m = t), (v = n), x.tag)) {
            case 1:
              if (((w = x.payload), typeof w == "function")) {
                g = w.call(v, g, m);
                break e;
              }
              g = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = x.payload),
                (m = typeof w == "function" ? w.call(v, g, m) : w),
                m == null)
              )
                break e;
              g = J({}, g, m);
              break e;
            case 2:
              Ct = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (m = o.effects),
          m === null ? (o.effects = [l]) : m.push(l));
      } else
        ((v = {
          eventTime: v,
          lane: m,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          p === null ? ((c = p = v), (a = g)) : (p = p.next = v),
          (i |= m));
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        ((m = l),
          (l = m.next),
          (m.next = null),
          (o.lastBaseUpdate = m),
          (o.shared.pending = null));
      }
    } while (!0);
    if (
      (p === null && (a = g),
      (o.baseState = a),
      (o.firstBaseUpdate = c),
      (o.lastBaseUpdate = p),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do ((i |= o.lane), (o = o.next));
      while (o !== t);
    } else s === null && (o.shared.lanes = 0);
    ((en |= i), (e.lanes = i), (e.memoizedState = g));
  }
}
function oa(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(S(191, o));
        o.call(r);
      }
    }
}
var Pr = {},
  at = At(Pr),
  vr = At(Pr),
  wr = At(Pr);
function Qt(e) {
  if (e === Pr) throw Error(S(174));
  return e;
}
function Gi(e, t) {
  switch ((H(wr, t), H(vr, e), H(at, Pr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Os(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Os(t, e)));
  }
  (V(at), H(at, t));
}
function Pn() {
  (V(at), V(vr), V(wr));
}
function Xu(e) {
  Qt(wr.current);
  var t = Qt(at.current),
    n = Os(t, e.type);
  t !== n && (H(vr, e), H(at, n));
}
function qi(e) {
  vr.current === e && (V(at), V(vr));
}
var q = At(0);
function No(e) {
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
var ys = [];
function Xi() {
  for (var e = 0; e < ys.length; e++)
    ys[e]._workInProgressVersionPrimary = null;
  ys.length = 0;
}
var ro = _t.ReactCurrentDispatcher,
  vs = _t.ReactCurrentBatchConfig,
  Zt = 0,
  Y = null,
  le = null,
  ue = null,
  To = !1,
  rr = !1,
  _r = 0,
  Jf = 0;
function ge() {
  throw Error(S(321));
}
function Yi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ze(e[n], t[n])) return !1;
  return !0;
}
function Ji(e, t, n, r, o, s) {
  if (
    ((Zt = s),
    (Y = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ro.current = e === null || e.memoizedState === null ? nh : rh),
    (e = n(r, o)),
    rr)
  ) {
    s = 0;
    do {
      if (((rr = !1), (_r = 0), 25 <= s)) throw Error(S(301));
      ((s += 1),
        (ue = le = null),
        (t.updateQueue = null),
        (ro.current = oh),
        (e = n(r, o)));
    } while (rr);
  }
  if (
    ((ro.current = Io),
    (t = le !== null && le.next !== null),
    (Zt = 0),
    (ue = le = Y = null),
    (To = !1),
    t)
  )
    throw Error(S(300));
  return e;
}
function Zi() {
  var e = _r !== 0;
  return ((_r = 0), e);
}
function ot() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (ue === null ? (Y.memoizedState = ue = e) : (ue = ue.next = e), ue);
}
function Ve() {
  if (le === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = le.next;
  var t = ue === null ? Y.memoizedState : ue.next;
  if (t !== null) ((ue = t), (le = e));
  else {
    if (e === null) throw Error(S(310));
    ((le = e),
      (e = {
        memoizedState: le.memoizedState,
        baseState: le.baseState,
        baseQueue: le.baseQueue,
        queue: le.queue,
        next: null,
      }),
      ue === null ? (Y.memoizedState = ue = e) : (ue = ue.next = e));
  }
  return ue;
}
function xr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ws(e) {
  var t = Ve(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = le,
    o = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (o !== null) {
      var i = o.next;
      ((o.next = s.next), (s.next = i));
    }
    ((r.baseQueue = o = s), (n.pending = null));
  }
  if (o !== null) {
    ((s = o.next), (r = r.baseState));
    var l = (i = null),
      a = null,
      c = s;
    do {
      var p = c.lane;
      if ((Zt & p) === p)
        (a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action)));
      else {
        var g = {
          lane: p,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        (a === null ? ((l = a = g), (i = r)) : (a = a.next = g),
          (Y.lanes |= p),
          (en |= p));
      }
      c = c.next;
    } while (c !== null && c !== s);
    (a === null ? (i = r) : (a.next = l),
      Ze(r, t.memoizedState) || (Ie = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do ((s = o.lane), (Y.lanes |= s), (en |= s), (o = o.next));
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function _s(e) {
  var t = Ve(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do ((s = e(s, i.action)), (i = i.next));
    while (i !== o);
    (Ze(s, t.memoizedState) || (Ie = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s));
  }
  return [s, r];
}
function Yu() {}
function Ju(e, t) {
  var n = Y,
    r = Ve(),
    o = t(),
    s = !Ze(r.memoizedState, o);
  if (
    (s && ((r.memoizedState = o), (Ie = !0)),
    (r = r.queue),
    el(tc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (ue !== null && ue.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Sr(9, ec.bind(null, n, r, o, t), void 0, null),
      de === null)
    )
      throw Error(S(349));
    Zt & 30 || Zu(n, t, o);
  }
  return o;
}
function Zu(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function ec(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), nc(t) && rc(e));
}
function tc(e, t, n) {
  return n(function () {
    nc(t) && rc(e);
  });
}
function nc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ze(e, n);
  } catch {
    return !0;
  }
}
function rc(e) {
  var t = vt(e, 1);
  t !== null && Je(t, e, 1, -1);
}
function sa(e) {
  var t = ot();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: xr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = th.bind(null, Y, e)),
    [t.memoizedState, e]
  );
}
function Sr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function oc() {
  return Ve().memoizedState;
}
function oo(e, t, n, r) {
  var o = ot();
  ((Y.flags |= e),
    (o.memoizedState = Sr(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Ho(e, t, n, r) {
  var o = Ve();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (le !== null) {
    var i = le.memoizedState;
    if (((s = i.destroy), r !== null && Yi(r, i.deps))) {
      o.memoizedState = Sr(t, n, s, r);
      return;
    }
  }
  ((Y.flags |= e), (o.memoizedState = Sr(1 | t, n, s, r)));
}
function ia(e, t) {
  return oo(8390656, 8, e, t);
}
function el(e, t) {
  return Ho(2048, 8, e, t);
}
function sc(e, t) {
  return Ho(4, 2, e, t);
}
function ic(e, t) {
  return Ho(4, 4, e, t);
}
function lc(e, t) {
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
function ac(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Ho(4, 4, lc.bind(null, t, e), n)
  );
}
function tl() {}
function uc(e, t) {
  var n = Ve();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function cc(e, t) {
  var n = Ve();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function dc(e, t, n) {
  return Zt & 21
    ? (Ze(n, t) || ((n = gu()), (Y.lanes |= n), (en |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ie = !0)), (e.memoizedState = n));
}
function Zf(e, t) {
  var n = A;
  ((A = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = vs.transition;
  vs.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((A = n), (vs.transition = r));
  }
}
function fc() {
  return Ve().memoizedState;
}
function eh(e, t, n) {
  var r = bt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    hc(e))
  )
    pc(t, n);
  else if (((n = Gu(e, t, n, r)), n !== null)) {
    var o = ke();
    (Je(n, e, r, o), mc(n, t, r));
  }
}
function th(e, t, n) {
  var r = bt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (hc(e)) pc(t, o);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var i = t.lastRenderedState,
          l = s(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), Ze(l, i))) {
          var a = t.interleaved;
          (a === null
            ? ((o.next = o), Qi(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o));
          return;
        }
      } catch {
      } finally {
      }
    ((n = Gu(e, t, o, r)),
      n !== null && ((o = ke()), Je(n, e, r, o), mc(n, t, r)));
  }
}
function hc(e) {
  var t = e.alternate;
  return e === Y || (t !== null && t === Y);
}
function pc(e, t) {
  rr = To = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function mc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ri(e, n));
  }
}
var Io = {
    readContext: We,
    useCallback: ge,
    useContext: ge,
    useEffect: ge,
    useImperativeHandle: ge,
    useInsertionEffect: ge,
    useLayoutEffect: ge,
    useMemo: ge,
    useReducer: ge,
    useRef: ge,
    useState: ge,
    useDebugValue: ge,
    useDeferredValue: ge,
    useTransition: ge,
    useMutableSource: ge,
    useSyncExternalStore: ge,
    useId: ge,
    unstable_isNewReconciler: !1,
  },
  nh = {
    readContext: We,
    useCallback: function (e, t) {
      return ((ot().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: We,
    useEffect: ia,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        oo(4194308, 4, lc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return oo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return oo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ot();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = ot();
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
        (e = e.dispatch = eh.bind(null, Y, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ot();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: sa,
    useDebugValue: tl,
    useDeferredValue: function (e) {
      return (ot().memoizedState = e);
    },
    useTransition: function () {
      var e = sa(!1),
        t = e[0];
      return ((e = Zf.bind(null, e[1])), (ot().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Y,
        o = ot();
      if (K) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), de === null)) throw Error(S(349));
        Zt & 30 || Zu(r, t, n);
      }
      o.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (o.queue = s),
        ia(tc.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Sr(9, ec.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ot(),
        t = de.identifierPrefix;
      if (K) {
        var n = pt,
          r = ht;
        ((n = (r & ~(1 << (32 - Ye(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = _r++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = Jf++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  rh = {
    readContext: We,
    useCallback: uc,
    useContext: We,
    useEffect: el,
    useImperativeHandle: ac,
    useInsertionEffect: sc,
    useLayoutEffect: ic,
    useMemo: cc,
    useReducer: ws,
    useRef: oc,
    useState: function () {
      return ws(xr);
    },
    useDebugValue: tl,
    useDeferredValue: function (e) {
      var t = Ve();
      return dc(t, le.memoizedState, e);
    },
    useTransition: function () {
      var e = ws(xr)[0],
        t = Ve().memoizedState;
      return [e, t];
    },
    useMutableSource: Yu,
    useSyncExternalStore: Ju,
    useId: fc,
    unstable_isNewReconciler: !1,
  },
  oh = {
    readContext: We,
    useCallback: uc,
    useContext: We,
    useEffect: el,
    useImperativeHandle: ac,
    useInsertionEffect: sc,
    useLayoutEffect: ic,
    useMemo: cc,
    useReducer: _s,
    useRef: oc,
    useState: function () {
      return _s(xr);
    },
    useDebugValue: tl,
    useDeferredValue: function (e) {
      var t = Ve();
      return le === null ? (t.memoizedState = e) : dc(t, le.memoizedState, e);
    },
    useTransition: function () {
      var e = _s(xr)[0],
        t = Ve().memoizedState;
      return [e, t];
    },
    useMutableSource: Yu,
    useSyncExternalStore: Ju,
    useId: fc,
    unstable_isNewReconciler: !1,
  };
function Ke(e, t) {
  if (e && e.defaultProps) {
    ((t = J({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ri(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : J({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Bo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? on(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      o = bt(e),
      s = mt(r, o);
    ((s.payload = t),
      n != null && (s.callback = n),
      (t = Mt(e, s, o)),
      t !== null && (Je(t, e, o, r), no(t, e, o)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      o = bt(e),
      s = mt(r, o);
    ((s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Mt(e, s, o)),
      t !== null && (Je(t, e, o, r), no(t, e, o)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ke(),
      r = bt(e),
      o = mt(n, r);
    ((o.tag = 2),
      t != null && (o.callback = t),
      (t = Mt(e, o, r)),
      t !== null && (Je(t, e, r, n), no(t, e, r)));
  },
};
function la(e, t, n, r, o, s, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !pr(n, r) || !pr(o, s)
        : !0
  );
}
function gc(e, t, n) {
  var r = !1,
    o = Ft,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = We(s))
      : ((o = Pe(t) ? Yt : _e.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Tn(e, o) : Ft)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Bo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function aa(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Bo.enqueueReplaceState(t, t.state, null));
}
function oi(e, t, n, r) {
  var o = e.stateNode;
  ((o.props = n), (o.state = e.memoizedState), (o.refs = {}), Ki(e));
  var s = t.contextType;
  (typeof s == "object" && s !== null
    ? (o.context = We(s))
    : ((s = Pe(t) ? Yt : _e.current), (o.context = Tn(e, s))),
    (o.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (ri(e, t, s, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Bo.enqueueReplaceState(o, o.state, null),
      Eo(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308));
}
function Dn(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += Dd(r)), (r = r.return));
    while (r);
    var o = n;
  } catch (s) {
    o =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function xs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function si(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var sh = typeof WeakMap == "function" ? WeakMap : Map;
function yc(e, t, n) {
  ((n = mt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (Po || ((Po = !0), (mi = r)), si(e, t));
    }),
    n
  );
}
function vc(e, t, n) {
  ((n = mt(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    ((n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        si(e, t);
      }));
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        (si(e, t),
          typeof r != "function" &&
            (Lt === null ? (Lt = new Set([this])) : Lt.add(this)));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function ua(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new sh();
    var o = new Set();
    r.set(t, o);
  } else ((o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o)));
  o.has(n) || (o.add(n), (e = wh.bind(null, e, t, n)), t.then(e, e));
}
function ca(e) {
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
function da(e, t, n, r, o) {
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
              : ((t = mt(-1, 1)), (t.tag = 2), Mt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ih = _t.ReactCurrentOwner,
  Ie = !1;
function Se(e, t, n, r) {
  t.child = e === null ? Ku(t, null, n, r) : jn(t, e.child, n, r);
}
function fa(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return (
    Cn(t, o),
    (r = Ji(e, t, n, r, s, o)),
    (n = Zi()),
    e !== null && !Ie
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        wt(e, t, o))
      : (K && n && Ai(t), (t.flags |= 1), Se(e, t, r, o), t.child)
  );
}
function ha(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !ul(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), wc(e, t, s, r, o))
      : ((e = ao(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & o))) {
    var i = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : pr), n(i, r) && e.ref === t.ref)
    )
      return wt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Ot(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function wc(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (pr(s, r) && e.ref === t.ref)
      if (((Ie = !1), (t.pendingProps = r = s), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ie = !0);
      else return ((t.lanes = e.lanes), wt(e, t, o));
  }
  return ii(e, t, n, r, o);
}
function _c(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        H(wn, Re),
        (Re |= n));
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
          H(wn, Re),
          (Re |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        H(wn, Re),
        (Re |= r));
    }
  else
    (s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      H(wn, Re),
      (Re |= r));
  return (Se(e, t, o, n), t.child);
}
function xc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ii(e, t, n, r, o) {
  var s = Pe(n) ? Yt : _e.current;
  return (
    (s = Tn(t, s)),
    Cn(t, o),
    (n = Ji(e, t, n, r, s, o)),
    (r = Zi()),
    e !== null && !Ie
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        wt(e, t, o))
      : (K && r && Ai(t), (t.flags |= 1), Se(e, t, n, o), t.child)
  );
}
function pa(e, t, n, r, o) {
  if (Pe(n)) {
    var s = !0;
    _o(t);
  } else s = !1;
  if ((Cn(t, o), t.stateNode === null))
    (so(e, t), gc(t, n, r), oi(t, n, r, o), (r = !0));
  else if (e === null) {
    var i = t.stateNode,
      l = t.memoizedProps;
    i.props = l;
    var a = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = We(c))
      : ((c = Pe(n) ? Yt : _e.current), (c = Tn(t, c)));
    var p = n.getDerivedStateFromProps,
      g =
        typeof p == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    (g ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== r || a !== c) && aa(t, i, r, c)),
      (Ct = !1));
    var m = t.memoizedState;
    ((i.state = m),
      Eo(t, r, i, o),
      (a = t.memoizedState),
      l !== r || m !== a || je.current || Ct
        ? (typeof p == "function" && (ri(t, n, p, r), (a = t.memoizedState)),
          (l = Ct || la(t, n, l, r, m, a, c))
            ? (g ||
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
          (r = l))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((i = t.stateNode),
      qu(e, t),
      (l = t.memoizedProps),
      (c = t.type === t.elementType ? l : Ke(t.type, l)),
      (i.props = c),
      (g = t.pendingProps),
      (m = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = We(a))
        : ((a = Pe(n) ? Yt : _e.current), (a = Tn(t, a))));
    var v = n.getDerivedStateFromProps;
    ((p =
      typeof v == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== g || m !== a) && aa(t, i, r, a)),
      (Ct = !1),
      (m = t.memoizedState),
      (i.state = m),
      Eo(t, r, i, o));
    var w = t.memoizedState;
    l !== g || m !== w || je.current || Ct
      ? (typeof v == "function" && (ri(t, n, v, r), (w = t.memoizedState)),
        (c = Ct || la(t, n, c, r, m, w, a) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (l === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = a),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (l === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return li(e, t, n, r, s, o);
}
function li(e, t, n, r, o, s) {
  xc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return (o && Zl(t, n, !1), wt(e, t, s));
  ((r = t.stateNode), (ih.current = t));
  var l =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = jn(t, e.child, null, s)), (t.child = jn(t, null, l, s)))
      : Se(e, t, l, s),
    (t.memoizedState = r.state),
    o && Zl(t, n, !0),
    t.child
  );
}
function Sc(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Jl(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Jl(e, t.context, !1),
    Gi(e, t.containerInfo));
}
function ma(e, t, n, r, o) {
  return (In(), Hi(o), (t.flags |= 256), Se(e, t, n, r), t.child);
}
var ai = { dehydrated: null, treeContext: null, retryLane: 0 };
function ui(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function kc(e, t, n) {
  var r = t.pendingProps,
    o = q.current,
    s = !1,
    i = (t.flags & 128) !== 0,
    l;
  if (
    ((l = i) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    H(q, o & 1),
    e === null)
  )
    return (
      ti(t),
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
                : (s = Qo(i, r, 0, null)),
              (e = Gt(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = ui(n)),
              (t.memoizedState = ai),
              e)
            : nl(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return lh(e, t, i, r, l, o, n);
  if (s) {
    ((s = r.fallback), (i = t.mode), (o = e.child), (l = o.sibling));
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Ot(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (s = Ot(l, s)) : ((s = Gt(s, i, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? ui(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (s.memoizedState = i),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = ai),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Ot(s, { mode: "visible", children: r.children })),
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
function nl(e, t) {
  return (
    (t = Qo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Vr(e, t, n, r) {
  return (
    r !== null && Hi(r),
    jn(t, e.child, null, n),
    (e = nl(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function lh(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = xs(Error(S(422)))), Vr(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (o = t.mode),
          (r = Qo({ mode: "visible", children: r.children }, o, 0, null)),
          (s = Gt(s, o, i, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && jn(t, e.child, null, i),
          (t.child.memoizedState = ui(i)),
          (t.memoizedState = ai),
          s);
  if (!(t.mode & 1)) return Vr(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (
      (r = l),
      (s = Error(S(419))),
      (r = xs(s, r, void 0)),
      Vr(e, t, i, r)
    );
  }
  if (((l = (i & e.childLanes) !== 0), Ie || l)) {
    if (((r = de), r !== null)) {
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
      ((o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== s.retryLane &&
          ((s.retryLane = o), vt(e, o), Je(r, e, o, -1)));
    }
    return (al(), (r = xs(Error(S(421)))), Vr(e, t, i, r));
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = _h.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Me = Rt(o.nextSibling)),
      (be = t),
      (K = !0),
      (qe = null),
      e !== null &&
        ((Ae[Ue++] = ht),
        (Ae[Ue++] = pt),
        (Ae[Ue++] = Jt),
        (ht = e.id),
        (pt = e.overflow),
        (Jt = t)),
      (t = nl(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ga(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), ni(e.return, t, n));
}
function Ss(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = o));
}
function Cc(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    s = r.tail;
  if ((Se(e, t, r.children, n), (r = q.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ga(e, n, t);
        else if (e.tag === 19) ga(e, n, t);
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
  if ((H(q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          ((e = n.alternate),
            e !== null && No(e) === null && (o = n),
            (n = n.sibling));
        ((n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Ss(t, !1, o, n, s));
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && No(e) === null)) {
            t.child = o;
            break;
          }
          ((e = o.sibling), (o.sibling = n), (n = o), (o = e));
        }
        Ss(t, !0, n, null, s);
        break;
      case "together":
        Ss(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function so(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function wt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (en |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ot(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = Ot(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function ah(e, t, n) {
  switch (t.tag) {
    case 3:
      (Sc(t), In());
      break;
    case 5:
      Xu(t);
      break;
    case 1:
      Pe(t.type) && _o(t);
      break;
    case 4:
      Gi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      (H(ko, r._currentValue), (r._currentValue = o));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (H(q, q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? kc(e, t, n)
            : (H(q, q.current & 1),
              (e = wt(e, t, n)),
              e !== null ? e.sibling : null);
      H(q, q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Cc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        H(q, q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), _c(e, t, n));
  }
  return wt(e, t, n);
}
var Ec, ci, Nc, Tc;
Ec = function (e, t) {
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
ci = function () {};
Nc = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    ((e = t.stateNode), Qt(at.current));
    var s = null;
    switch (n) {
      case "input":
        ((o = Rs(e, o)), (r = Rs(e, r)), (s = []));
        break;
      case "select":
        ((o = J({}, o, { value: void 0 })),
          (r = J({}, r, { value: void 0 })),
          (s = []));
        break;
      case "textarea":
        ((o = bs(e, o)), (r = bs(e, r)), (s = []));
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = vo);
    }
    $s(n, r);
    var i;
    n = null;
    for (c in o)
      if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
        if (c === "style") {
          var l = o[c];
          for (i in l) l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (lr.hasOwnProperty(c)
              ? s || (s = [])
              : (s = s || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (
        ((l = o != null ? o[c] : void 0),
        r.hasOwnProperty(c) && a !== l && (a != null || l != null))
      )
        if (c === "style")
          if (l) {
            for (i in l)
              !l.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                l[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else (n || (s || (s = []), s.push(c, n)), (n = a));
        else
          c === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(c, a))
            : c === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (s = s || []).push(c, "" + a)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (lr.hasOwnProperty(c)
                  ? (a != null && c === "onScroll" && W("scroll", e),
                    s || l === a || (s = []))
                  : (s = s || []).push(c, a));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Tc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Qn(e, t) {
  if (!K)
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
function ye(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling));
  else
    for (o = e.child; o !== null; )
      ((n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function uh(e, t, n) {
  var r = t.pendingProps;
  switch ((Ui(t), t.tag)) {
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
      return (ye(t), null);
    case 1:
      return (Pe(t.type) && wo(), ye(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Pn(),
        V(je),
        V(_e),
        Xi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Br(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), qe !== null && (vi(qe), (qe = null)))),
        ci(e, t),
        ye(t),
        null
      );
    case 5:
      qi(t);
      var o = Qt(wr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Nc(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return (ye(t), null);
        }
        if (((e = Qt(at.current)), Br(t))) {
          ((r = t.stateNode), (n = t.type));
          var s = t.memoizedProps;
          switch (((r[it] = t), (r[yr] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (W("cancel", r), W("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              W("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Yn.length; o++) W(Yn[o], r);
              break;
            case "source":
              W("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (W("error", r), W("load", r));
              break;
            case "details":
              W("toggle", r);
              break;
            case "input":
              (El(r, s), W("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!s.multiple }),
                W("invalid", r));
              break;
            case "textarea":
              (Tl(r, s), W("invalid", r));
          }
          ($s(n, s), (o = null));
          for (var i in s)
            if (s.hasOwnProperty(i)) {
              var l = s[i];
              i === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Hr(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Hr(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : lr.hasOwnProperty(i) &&
                  l != null &&
                  i === "onScroll" &&
                  W("scroll", r);
            }
          switch (n) {
            case "input":
              (Lr(r), Nl(r, s, !0));
              break;
            case "textarea":
              (Lr(r), Il(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = vo);
          }
          ((r = o), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = tu(n)),
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
            (e[it] = t),
            (e[yr] = r),
            Ec(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((i = Fs(n, r)), n)) {
              case "dialog":
                (W("cancel", e), W("close", e), (o = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (W("load", e), (o = r));
                break;
              case "video":
              case "audio":
                for (o = 0; o < Yn.length; o++) W(Yn[o], e);
                o = r;
                break;
              case "source":
                (W("error", e), (o = r));
                break;
              case "img":
              case "image":
              case "link":
                (W("error", e), W("load", e), (o = r));
                break;
              case "details":
                (W("toggle", e), (o = r));
                break;
              case "input":
                (El(e, r), (o = Rs(e, r)), W("invalid", e));
                break;
              case "option":
                o = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = J({}, r, { value: void 0 })),
                  W("invalid", e));
                break;
              case "textarea":
                (Tl(e, r), (o = bs(e, r)), W("invalid", e));
                break;
              default:
                o = r;
            }
            ($s(n, o), (l = o));
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? ou(e, a)
                  : s === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && nu(e, a))
                    : s === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && ar(e, a)
                        : typeof a == "number" && ar(e, "" + a)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (lr.hasOwnProperty(s)
                          ? a != null && s === "onScroll" && W("scroll", e)
                          : a != null && Ni(e, s, a, i));
              }
            switch (n) {
              case "input":
                (Lr(e), Nl(e, r, !1));
                break;
              case "textarea":
                (Lr(e), Il(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + $t(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? _n(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      _n(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = vo);
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
      return (ye(t), null);
    case 6:
      if (e && t.stateNode != null) Tc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (((n = Qt(wr.current)), Qt(at.current), Br(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[it] = t),
            (s = r.nodeValue !== n) && ((e = be), e !== null))
          )
            switch (e.tag) {
              case 3:
                Hr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Hr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[it] = t),
            (t.stateNode = r));
      }
      return (ye(t), null);
    case 13:
      if (
        (V(q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (K && Me !== null && t.mode & 1 && !(t.flags & 128))
          (Vu(), In(), (t.flags |= 98560), (s = !1));
        else if (((s = Br(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(S(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(S(317));
            s[it] = t;
          } else
            (In(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (ye(t), (s = !1));
        } else (qe !== null && (vi(qe), (qe = null)), (s = !0));
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || q.current & 1 ? ae === 0 && (ae = 3) : al())),
          t.updateQueue !== null && (t.flags |= 4),
          ye(t),
          null);
    case 4:
      return (
        Pn(),
        ci(e, t),
        e === null && mr(t.stateNode.containerInfo),
        ye(t),
        null
      );
    case 10:
      return (Vi(t.type._context), ye(t), null);
    case 17:
      return (Pe(t.type) && wo(), ye(t), null);
    case 19:
      if ((V(q), (s = t.memoizedState), s === null)) return (ye(t), null);
      if (((r = (t.flags & 128) !== 0), (i = s.rendering), i === null))
        if (r) Qn(s, !1);
        else {
          if (ae !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = No(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Qn(s, !1),
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
                return (H(q, (q.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          s.tail !== null &&
            te() > Rn &&
            ((t.flags |= 128), (r = !0), Qn(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = No(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Qn(s, !0),
              s.tail === null && s.tailMode === "hidden" && !i.alternate && !K)
            )
              return (ye(t), null);
          } else
            2 * te() - s.renderingStartTime > Rn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Qn(s, !1), (t.lanes = 4194304));
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
          (s.renderingStartTime = te()),
          (t.sibling = null),
          (n = q.current),
          H(q, r ? (n & 1) | 2 : n & 1),
          t)
        : (ye(t), null);
    case 22:
    case 23:
      return (
        ll(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Re & 1073741824 && (ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ye(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function ch(e, t) {
  switch ((Ui(t), t.tag)) {
    case 1:
      return (
        Pe(t.type) && wo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Pn(),
        V(je),
        V(_e),
        Xi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (qi(t), null);
    case 13:
      if ((V(q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        In();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (V(q), null);
    case 4:
      return (Pn(), null);
    case 10:
      return (Vi(t.type._context), null);
    case 22:
    case 23:
      return (ll(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Qr = !1,
  ve = !1,
  dh = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function vn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Z(e, t, r);
      }
    else n.current = null;
}
function di(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var ya = !1;
function fh(e, t) {
  if (((Gs = mo), (e = Ru()), zi(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, s.nodeType);
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            l = -1,
            a = -1,
            c = 0,
            p = 0,
            g = e,
            m = null;
          t: for (;;) {
            for (
              var v;
              g !== n || (o !== 0 && g.nodeType !== 3) || (l = i + o),
                g !== s || (r !== 0 && g.nodeType !== 3) || (a = i + r),
                g.nodeType === 3 && (i += g.nodeValue.length),
                (v = g.firstChild) !== null;
            )
              ((m = g), (g = v));
            for (;;) {
              if (g === e) break t;
              if (
                (m === n && ++c === o && (l = i),
                m === s && ++p === r && (a = i),
                (v = g.nextSibling) !== null)
              )
                break;
              ((g = m), (m = g.parentNode));
            }
            g = v;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (qs = { focusedElem: e, selectionRange: n }, mo = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (j = e));
    else
      for (; j !== null; ) {
        t = j;
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
                    D = w.memoizedState,
                    f = t.stateNode,
                    d = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Ke(t.type, x),
                      D,
                    );
                  f.__reactInternalSnapshotBeforeUpdate = d;
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
                throw Error(S(163));
            }
        } catch (_) {
          Z(t, t.return, _);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (j = e));
          break;
        }
        j = t.return;
      }
  return ((w = ya), (ya = !1), w);
}
function or(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        ((o.destroy = void 0), s !== void 0 && di(t, n, s));
      }
      o = o.next;
    } while (o !== r);
  }
}
function Wo(e, t) {
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
function fi(e) {
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
  (t !== null && ((e.alternate = null), Ic(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[it], delete t[yr], delete t[Js], delete t[Gf], delete t[qf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function jc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function va(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || jc(e.return)) return null;
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
function hi(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = vo)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (hi(e, t, n), e = e.sibling; e !== null; )
      (hi(e, t, n), (e = e.sibling));
}
function pi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (pi(e, t, n), e = e.sibling; e !== null; )
      (pi(e, t, n), (e = e.sibling));
}
var he = null,
  Ge = !1;
function St(e, t, n) {
  for (n = n.child; n !== null; ) (Pc(e, t, n), (n = n.sibling));
}
function Pc(e, t, n) {
  if (lt && typeof lt.onCommitFiberUnmount == "function")
    try {
      lt.onCommitFiberUnmount(Oo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ve || vn(n, t);
    case 6:
      var r = he,
        o = Ge;
      ((he = null),
        St(e, t, n),
        (he = r),
        (Ge = o),
        he !== null &&
          (Ge
            ? ((e = he),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : he.removeChild(n.stateNode)));
      break;
    case 18:
      he !== null &&
        (Ge
          ? ((e = he),
            (n = n.stateNode),
            e.nodeType === 8
              ? ms(e.parentNode, n)
              : e.nodeType === 1 && ms(e, n),
            fr(e))
          : ms(he, n.stateNode));
      break;
    case 4:
      ((r = he),
        (o = Ge),
        (he = n.stateNode.containerInfo),
        (Ge = !0),
        St(e, t, n),
        (he = r),
        (Ge = o));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ve &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var s = o,
            i = s.destroy;
          ((s = s.tag),
            i !== void 0 && (s & 2 || s & 4) && di(n, t, i),
            (o = o.next));
        } while (o !== r);
      }
      St(e, t, n);
      break;
    case 1:
      if (
        !ve &&
        (vn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (l) {
          Z(n, t, l);
        }
      St(e, t, n);
      break;
    case 21:
      St(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ve = (r = ve) || n.memoizedState !== null), St(e, t, n), (ve = r))
        : St(e, t, n);
      break;
    default:
      St(e, t, n);
  }
}
function wa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new dh()),
      t.forEach(function (r) {
        var o = xh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      }));
  }
}
function Qe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var s = e,
          i = t,
          l = i;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              ((he = l.stateNode), (Ge = !1));
              break e;
            case 3:
              ((he = l.stateNode.containerInfo), (Ge = !0));
              break e;
            case 4:
              ((he = l.stateNode.containerInfo), (Ge = !0));
              break e;
          }
          l = l.return;
        }
        if (he === null) throw Error(S(160));
        (Pc(s, i, o), (he = null), (Ge = !1));
        var a = o.alternate;
        (a !== null && (a.return = null), (o.return = null));
      } catch (c) {
        Z(o, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (Dc(t, e), (t = t.sibling));
}
function Dc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Qe(t, e), nt(e), r & 4)) {
        try {
          (or(3, e, e.return), Wo(3, e));
        } catch (x) {
          Z(e, e.return, x);
        }
        try {
          or(5, e, e.return);
        } catch (x) {
          Z(e, e.return, x);
        }
      }
      break;
    case 1:
      (Qe(t, e), nt(e), r & 512 && n !== null && vn(n, n.return));
      break;
    case 5:
      if (
        (Qe(t, e),
        nt(e),
        r & 512 && n !== null && vn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ar(o, "");
        } catch (x) {
          Z(e, e.return, x);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var s = e.memoizedProps,
          i = n !== null ? n.memoizedProps : s,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            (l === "input" && s.type === "radio" && s.name != null && Za(o, s),
              Fs(l, i));
            var c = Fs(l, s);
            for (i = 0; i < a.length; i += 2) {
              var p = a[i],
                g = a[i + 1];
              p === "style"
                ? ou(o, g)
                : p === "dangerouslySetInnerHTML"
                  ? nu(o, g)
                  : p === "children"
                    ? ar(o, g)
                    : Ni(o, p, g, c);
            }
            switch (l) {
              case "input":
                Ms(o, s);
                break;
              case "textarea":
                eu(o, s);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!s.multiple;
                var v = s.value;
                v != null
                  ? _n(o, !!s.multiple, v, !1)
                  : m !== !!s.multiple &&
                    (s.defaultValue != null
                      ? _n(o, !!s.multiple, s.defaultValue, !0)
                      : _n(o, !!s.multiple, s.multiple ? [] : "", !1));
            }
            o[yr] = s;
          } catch (x) {
            Z(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Qe(t, e), nt(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        ((o = e.stateNode), (s = e.memoizedProps));
        try {
          o.nodeValue = s;
        } catch (x) {
          Z(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Qe(t, e), nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          fr(t.containerInfo);
        } catch (x) {
          Z(e, e.return, x);
        }
      break;
    case 4:
      (Qe(t, e), nt(e));
      break;
    case 13:
      (Qe(t, e),
        nt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((s = o.memoizedState !== null),
          (o.stateNode.isHidden = s),
          !s ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (sl = te())),
        r & 4 && wa(e));
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ve = (c = ve) || p), Qe(t, e), (ve = c)) : Qe(t, e),
        nt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !p && e.mode & 1)
        )
          for (j = e, p = e.child; p !== null; ) {
            for (g = j = p; j !== null; ) {
              switch (((m = j), (v = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  or(4, m, m.return);
                  break;
                case 1:
                  vn(m, m.return);
                  var w = m.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    ((r = m), (n = m.return));
                    try {
                      ((t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount());
                    } catch (x) {
                      Z(r, n, x);
                    }
                  }
                  break;
                case 5:
                  vn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    xa(g);
                    continue;
                  }
              }
              v !== null ? ((v.return = m), (j = v)) : xa(g);
            }
            p = p.sibling;
          }
        e: for (p = null, g = e; ; ) {
          if (g.tag === 5) {
            if (p === null) {
              p = g;
              try {
                ((o = g.stateNode),
                  c
                    ? ((s = o.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = g.stateNode),
                      (a = g.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = ru("display", i))));
              } catch (x) {
                Z(e, e.return, x);
              }
            }
          } else if (g.tag === 6) {
            if (p === null)
              try {
                g.stateNode.nodeValue = c ? "" : g.memoizedProps;
              } catch (x) {
                Z(e, e.return, x);
              }
          } else if (
            ((g.tag !== 22 && g.tag !== 23) ||
              g.memoizedState === null ||
              g === e) &&
            g.child !== null
          ) {
            ((g.child.return = g), (g = g.child));
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            (p === g && (p = null), (g = g.return));
          }
          (p === g && (p = null),
            (g.sibling.return = g.return),
            (g = g.sibling));
        }
      }
      break;
    case 19:
      (Qe(t, e), nt(e), r & 4 && wa(e));
      break;
    case 21:
      break;
    default:
      (Qe(t, e), nt(e));
  }
}
function nt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (jc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ar(o, ""), (r.flags &= -33));
          var s = va(e);
          pi(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            l = va(e);
          hi(e, l, i);
          break;
        default:
          throw Error(S(161));
      }
    } catch (a) {
      Z(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function hh(e, t, n) {
  ((j = e), Rc(e));
}
function Rc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var o = j,
      s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Qr;
      if (!i) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || ve;
        l = Qr;
        var c = ve;
        if (((Qr = i), (ve = a) && !c))
          for (j = o; j !== null; )
            ((i = j),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Sa(o)
                : a !== null
                  ? ((a.return = i), (j = a))
                  : Sa(o));
        for (; s !== null; ) ((j = s), Rc(s), (s = s.sibling));
        ((j = o), (Qr = l), (ve = c));
      }
      _a(e);
    } else
      o.subtreeFlags & 8772 && s !== null ? ((s.return = o), (j = s)) : _a(e);
  }
}
function _a(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ve || Wo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ve)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ke(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = t.updateQueue;
              s !== null && oa(t, s, r);
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
                oa(t, i, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
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
                  var p = c.memoizedState;
                  if (p !== null) {
                    var g = p.dehydrated;
                    g !== null && fr(g);
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
              throw Error(S(163));
          }
        ve || (t.flags & 512 && fi(t));
      } catch (m) {
        Z(t, t.return, m);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (j = n));
      break;
    }
    j = t.return;
  }
}
function xa(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (j = n));
      break;
    }
    j = t.return;
  }
}
function Sa(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Wo(4, t);
          } catch (a) {
            Z(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Z(t, o, a);
            }
          }
          var s = t.return;
          try {
            fi(t);
          } catch (a) {
            Z(t, s, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            fi(t);
          } catch (a) {
            Z(t, i, a);
          }
      }
    } catch (a) {
      Z(t, t.return, a);
    }
    if (t === e) {
      j = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      ((l.return = t.return), (j = l));
      break;
    }
    j = t.return;
  }
}
var ph = Math.ceil,
  jo = _t.ReactCurrentDispatcher,
  rl = _t.ReactCurrentOwner,
  Be = _t.ReactCurrentBatchConfig,
  z = 0,
  de = null,
  oe = null,
  pe = 0,
  Re = 0,
  wn = At(0),
  ae = 0,
  kr = null,
  en = 0,
  Vo = 0,
  ol = 0,
  sr = null,
  Te = null,
  sl = 0,
  Rn = 1 / 0,
  dt = null,
  Po = !1,
  mi = null,
  Lt = null,
  Kr = !1,
  It = null,
  Do = 0,
  ir = 0,
  gi = null,
  io = -1,
  lo = 0;
function ke() {
  return z & 6 ? te() : io !== -1 ? io : (io = te());
}
function bt(e) {
  return e.mode & 1
    ? z & 2 && pe !== 0
      ? pe & -pe
      : Yf.transition !== null
        ? (lo === 0 && (lo = gu()), lo)
        : ((e = A),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ku(e.type))),
          e)
    : 1;
}
function Je(e, t, n, r) {
  if (50 < ir) throw ((ir = 0), (gi = null), Error(S(185)));
  (Tr(e, n, r),
    (!(z & 2) || e !== de) &&
      (e === de && (!(z & 2) && (Vo |= n), ae === 4 && Nt(e, pe)),
      De(e, r),
      n === 1 && z === 0 && !(t.mode & 1) && ((Rn = te() + 500), Uo && Ut())));
}
function De(e, t) {
  var n = e.callbackNode;
  Xd(e, t);
  var r = po(e, e === de ? pe : 0);
  if (r === 0)
    (n !== null && Dl(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Dl(n), t === 1))
      (e.tag === 0 ? Xf(ka.bind(null, e)) : Hu(ka.bind(null, e)),
        Qf(function () {
          !(z & 6) && Ut();
        }),
        (n = null));
    else {
      switch (yu(r)) {
        case 1:
          n = Di;
          break;
        case 4:
          n = pu;
          break;
        case 16:
          n = ho;
          break;
        case 536870912:
          n = mu;
          break;
        default:
          n = ho;
      }
      n = Ac(n, Mc.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Mc(e, t) {
  if (((io = -1), (lo = 0), z & 6)) throw Error(S(327));
  var n = e.callbackNode;
  if (En() && e.callbackNode !== n) return null;
  var r = po(e, e === de ? pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ro(e, r);
  else {
    t = r;
    var o = z;
    z |= 2;
    var s = bc();
    (de !== e || pe !== t) && ((dt = null), (Rn = te() + 500), Kt(e, t));
    do
      try {
        yh();
        break;
      } catch (l) {
        Lc(e, l);
      }
    while (!0);
    (Wi(),
      (jo.current = s),
      (z = o),
      oe !== null ? (t = 0) : ((de = null), (pe = 0), (t = ae)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Bs(e)), o !== 0 && ((r = o), (t = yi(e, o)))), t === 1)
    )
      throw ((n = kr), Kt(e, 0), Nt(e, r), De(e, te()), n);
    if (t === 6) Nt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !mh(o) &&
          ((t = Ro(e, r)),
          t === 2 && ((s = Bs(e)), s !== 0 && ((r = s), (t = yi(e, s)))),
          t === 1))
      )
        throw ((n = kr), Kt(e, 0), Nt(e, r), De(e, te()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Bt(e, Te, dt);
          break;
        case 3:
          if (
            (Nt(e, r), (r & 130023424) === r && ((t = sl + 500 - te()), 10 < t))
          ) {
            if (po(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              (ke(), (e.pingedLanes |= e.suspendedLanes & o));
              break;
            }
            e.timeoutHandle = Ys(Bt.bind(null, e, Te, dt), t);
            break;
          }
          Bt(e, Te, dt);
          break;
        case 4:
          if ((Nt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - Ye(r);
            ((s = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~s));
          }
          if (
            ((r = o),
            (r = te() - r),
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
                          : 1960 * ph(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ys(Bt.bind(null, e, Te, dt), r);
            break;
          }
          Bt(e, Te, dt);
          break;
        case 5:
          Bt(e, Te, dt);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return (De(e, te()), e.callbackNode === n ? Mc.bind(null, e) : null);
}
function yi(e, t) {
  var n = sr;
  return (
    e.current.memoizedState.isDehydrated && (Kt(e, t).flags |= 256),
    (e = Ro(e, t)),
    e !== 2 && ((t = Te), (Te = n), t !== null && vi(t)),
    e
  );
}
function vi(e) {
  Te === null ? (Te = e) : Te.push.apply(Te, e);
}
function mh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            s = o.getSnapshot;
          o = o.value;
          try {
            if (!Ze(s(), o)) return !1;
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
function Nt(e, t) {
  for (
    t &= ~ol,
      t &= ~Vo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Ye(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function ka(e) {
  if (z & 6) throw Error(S(327));
  En();
  var t = po(e, 0);
  if (!(t & 1)) return (De(e, te()), null);
  var n = Ro(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Bs(e);
    r !== 0 && ((t = r), (n = yi(e, r)));
  }
  if (n === 1) throw ((n = kr), Kt(e, 0), Nt(e, t), De(e, te()), n);
  if (n === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Bt(e, Te, dt),
    De(e, te()),
    null
  );
}
function il(e, t) {
  var n = z;
  z |= 1;
  try {
    return e(t);
  } finally {
    ((z = n), z === 0 && ((Rn = te() + 500), Uo && Ut()));
  }
}
function tn(e) {
  It !== null && It.tag === 0 && !(z & 6) && En();
  var t = z;
  z |= 1;
  var n = Be.transition,
    r = A;
  try {
    if (((Be.transition = null), (A = 1), e)) return e();
  } finally {
    ((A = r), (Be.transition = n), (z = t), !(z & 6) && Ut());
  }
}
function ll() {
  ((Re = wn.current), V(wn));
}
function Kt(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Vf(n)), oe !== null))
    for (n = oe.return; n !== null; ) {
      var r = n;
      switch ((Ui(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && wo());
          break;
        case 3:
          (Pn(), V(je), V(_e), Xi());
          break;
        case 5:
          qi(r);
          break;
        case 4:
          Pn();
          break;
        case 13:
          V(q);
          break;
        case 19:
          V(q);
          break;
        case 10:
          Vi(r.type._context);
          break;
        case 22:
        case 23:
          ll();
      }
      n = n.return;
    }
  if (
    ((de = e),
    (oe = e = Ot(e.current, null)),
    (pe = Re = t),
    (ae = 0),
    (kr = null),
    (ol = Vo = en = 0),
    (Te = sr = null),
    Vt !== null)
  ) {
    for (t = 0; t < Vt.length; t++)
      if (((n = Vt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          s = n.pending;
        if (s !== null) {
          var i = s.next;
          ((s.next = o), (r.next = i));
        }
        n.pending = r;
      }
    Vt = null;
  }
  return e;
}
function Lc(e, t) {
  do {
    var n = oe;
    try {
      if ((Wi(), (ro.current = Io), To)) {
        for (var r = Y.memoizedState; r !== null; ) {
          var o = r.queue;
          (o !== null && (o.pending = null), (r = r.next));
        }
        To = !1;
      }
      if (
        ((Zt = 0),
        (ue = le = Y = null),
        (rr = !1),
        (_r = 0),
        (rl.current = null),
        n === null || n.return === null)
      ) {
        ((ae = 1), (kr = t), (oe = null));
        break;
      }
      e: {
        var s = e,
          i = n.return,
          l = n,
          a = t;
        if (
          ((t = pe),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var c = a,
            p = l,
            g = p.tag;
          if (!(p.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var m = p.alternate;
            m
              ? ((p.updateQueue = m.updateQueue),
                (p.memoizedState = m.memoizedState),
                (p.lanes = m.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var v = ca(i);
          if (v !== null) {
            ((v.flags &= -257),
              da(v, i, l, s, t),
              v.mode & 1 && ua(s, c, t),
              (t = v),
              (a = c));
            var w = t.updateQueue;
            if (w === null) {
              var x = new Set();
              (x.add(a), (t.updateQueue = x));
            } else w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              (ua(s, c, t), al());
              break e;
            }
            a = Error(S(426));
          }
        } else if (K && l.mode & 1) {
          var D = ca(i);
          if (D !== null) {
            (!(D.flags & 65536) && (D.flags |= 256),
              da(D, i, l, s, t),
              Hi(Dn(a, l)));
            break e;
          }
        }
        ((s = a = Dn(a, l)),
          ae !== 4 && (ae = 2),
          sr === null ? (sr = [s]) : sr.push(s),
          (s = i));
        do {
          switch (s.tag) {
            case 3:
              ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
              var f = yc(s, a, t);
              ra(s, f);
              break e;
            case 1:
              l = a;
              var d = s.type,
                h = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Lt === null || !Lt.has(h))))
              ) {
                ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                var _ = vc(s, l, t);
                ra(s, _);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      $c(n);
    } catch (C) {
      ((t = C), oe === n && n !== null && (oe = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function bc() {
  var e = jo.current;
  return ((jo.current = Io), e === null ? Io : e);
}
function al() {
  ((ae === 0 || ae === 3 || ae === 2) && (ae = 4),
    de === null || (!(en & 268435455) && !(Vo & 268435455)) || Nt(de, pe));
}
function Ro(e, t) {
  var n = z;
  z |= 2;
  var r = bc();
  (de !== e || pe !== t) && ((dt = null), Kt(e, t));
  do
    try {
      gh();
      break;
    } catch (o) {
      Lc(e, o);
    }
  while (!0);
  if ((Wi(), (z = n), (jo.current = r), oe !== null)) throw Error(S(261));
  return ((de = null), (pe = 0), ae);
}
function gh() {
  for (; oe !== null; ) Oc(oe);
}
function yh() {
  for (; oe !== null && !Ud(); ) Oc(oe);
}
function Oc(e) {
  var t = zc(e.alternate, e, Re);
  ((e.memoizedProps = e.pendingProps),
    t === null ? $c(e) : (oe = t),
    (rl.current = null));
}
function $c(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ch(n, t)), n !== null)) {
        ((n.flags &= 32767), (oe = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((ae = 6), (oe = null));
        return;
      }
    } else if (((n = uh(n, t, Re)), n !== null)) {
      oe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      oe = t;
      return;
    }
    oe = t = e;
  } while (t !== null);
  ae === 0 && (ae = 5);
}
function Bt(e, t, n) {
  var r = A,
    o = Be.transition;
  try {
    ((Be.transition = null), (A = 1), vh(e, t, n, r));
  } finally {
    ((Be.transition = o), (A = r));
  }
  return null;
}
function vh(e, t, n, r) {
  do En();
  while (It !== null);
  if (z & 6) throw Error(S(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var s = n.lanes | n.childLanes;
  if (
    (Yd(e, s),
    e === de && ((oe = de = null), (pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Kr ||
      ((Kr = !0),
      Ac(ho, function () {
        return (En(), null);
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    ((s = Be.transition), (Be.transition = null));
    var i = A;
    A = 1;
    var l = z;
    ((z |= 4),
      (rl.current = null),
      fh(e, n),
      Dc(n, e),
      Ff(qs),
      (mo = !!Gs),
      (qs = Gs = null),
      (e.current = n),
      hh(n),
      Hd(),
      (z = l),
      (A = i),
      (Be.transition = s));
  } else e.current = n;
  if (
    (Kr && ((Kr = !1), (It = e), (Do = o)),
    (s = e.pendingLanes),
    s === 0 && (Lt = null),
    Vd(n.stateNode),
    De(e, te()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest }));
  if (Po) throw ((Po = !1), (e = mi), (mi = null), e);
  return (
    Do & 1 && e.tag !== 0 && En(),
    (s = e.pendingLanes),
    s & 1 ? (e === gi ? ir++ : ((ir = 0), (gi = e))) : (ir = 0),
    Ut(),
    null
  );
}
function En() {
  if (It !== null) {
    var e = yu(Do),
      t = Be.transition,
      n = A;
    try {
      if (((Be.transition = null), (A = 16 > e ? 16 : e), It === null))
        var r = !1;
      else {
        if (((e = It), (It = null), (Do = 0), z & 6)) throw Error(S(331));
        var o = z;
        for (z |= 4, j = e.current; j !== null; ) {
          var s = j,
            i = s.child;
          if (j.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var c = l[a];
                for (j = c; j !== null; ) {
                  var p = j;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      or(8, p, s);
                  }
                  var g = p.child;
                  if (g !== null) ((g.return = p), (j = g));
                  else
                    for (; j !== null; ) {
                      p = j;
                      var m = p.sibling,
                        v = p.return;
                      if ((Ic(p), p === c)) {
                        j = null;
                        break;
                      }
                      if (m !== null) {
                        ((m.return = v), (j = m));
                        break;
                      }
                      j = v;
                    }
                }
              }
              var w = s.alternate;
              if (w !== null) {
                var x = w.child;
                if (x !== null) {
                  w.child = null;
                  do {
                    var D = x.sibling;
                    ((x.sibling = null), (x = D));
                  } while (x !== null);
                }
              }
              j = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) ((i.return = s), (j = i));
          else
            e: for (; j !== null; ) {
              if (((s = j), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    or(9, s, s.return);
                }
              var f = s.sibling;
              if (f !== null) {
                ((f.return = s.return), (j = f));
                break e;
              }
              j = s.return;
            }
        }
        var d = e.current;
        for (j = d; j !== null; ) {
          i = j;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null) ((h.return = i), (j = h));
          else
            e: for (i = d; j !== null; ) {
              if (((l = j), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wo(9, l);
                  }
                } catch (C) {
                  Z(l, l.return, C);
                }
              if (l === i) {
                j = null;
                break e;
              }
              var _ = l.sibling;
              if (_ !== null) {
                ((_.return = l.return), (j = _));
                break e;
              }
              j = l.return;
            }
        }
        if (
          ((z = o), Ut(), lt && typeof lt.onPostCommitFiberRoot == "function")
        )
          try {
            lt.onPostCommitFiberRoot(Oo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((A = n), (Be.transition = t));
    }
  }
  return !1;
}
function Ca(e, t, n) {
  ((t = Dn(n, t)),
    (t = yc(e, t, 1)),
    (e = Mt(e, t, 1)),
    (t = ke()),
    e !== null && (Tr(e, 1, t), De(e, t)));
}
function Z(e, t, n) {
  if (e.tag === 3) Ca(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ca(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Lt === null || !Lt.has(r)))
        ) {
          ((e = Dn(n, e)),
            (e = vc(t, e, 1)),
            (t = Mt(t, e, 1)),
            (e = ke()),
            t !== null && (Tr(t, 1, e), De(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function wh(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = ke()),
    (e.pingedLanes |= e.suspendedLanes & n),
    de === e &&
      (pe & n) === n &&
      (ae === 4 || (ae === 3 && (pe & 130023424) === pe && 500 > te() - sl)
        ? Kt(e, 0)
        : (ol |= n)),
    De(e, t));
}
function Fc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = $r), ($r <<= 1), !($r & 130023424) && ($r = 4194304))
      : (t = 1));
  var n = ke();
  ((e = vt(e, t)), e !== null && (Tr(e, t, n), De(e, n)));
}
function _h(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Fc(e, n));
}
function xh(e, t) {
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
      throw Error(S(314));
  }
  (r !== null && r.delete(t), Fc(e, n));
}
var zc;
zc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || je.current) Ie = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Ie = !1), ah(e, t, n));
      Ie = !!(e.flags & 131072);
    }
  else ((Ie = !1), K && t.flags & 1048576 && Bu(t, So, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (so(e, t), (e = t.pendingProps));
      var o = Tn(t, _e.current);
      (Cn(t, n), (o = Ji(null, t, r, e, o, n)));
      var s = Zi();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Pe(r) ? ((s = !0), _o(t)) : (s = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Ki(t),
            (o.updater = Bo),
            (t.stateNode = o),
            (o._reactInternals = t),
            oi(t, r, e, n),
            (t = li(null, t, r, !0, s, n)))
          : ((t.tag = 0), K && s && Ai(t), Se(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (so(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = kh(r)),
          (e = Ke(r, e)),
          o)
        ) {
          case 0:
            t = ii(null, t, r, e, n);
            break e;
          case 1:
            t = pa(null, t, r, e, n);
            break e;
          case 11:
            t = fa(null, t, r, e, n);
            break e;
          case 14:
            t = ha(null, t, r, Ke(r.type, e), n);
            break e;
        }
        throw Error(S(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ke(r, o)),
        ii(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ke(r, o)),
        pa(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Sc(t), e === null)) throw Error(S(387));
        ((r = t.pendingProps),
          (s = t.memoizedState),
          (o = s.element),
          qu(e, t),
          Eo(t, r, null, n));
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
            ((o = Dn(Error(S(423)), t)), (t = ma(e, t, r, n, o)));
            break e;
          } else if (r !== o) {
            ((o = Dn(Error(S(424)), t)), (t = ma(e, t, r, n, o)));
            break e;
          } else
            for (
              Me = Rt(t.stateNode.containerInfo.firstChild),
                be = t,
                K = !0,
                qe = null,
                n = Ku(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((In(), r === o)) {
            t = wt(e, t, n);
            break e;
          }
          Se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Xu(t),
        e === null && ti(t),
        (r = t.type),
        (o = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (i = o.children),
        Xs(r, o) ? (i = null) : s !== null && Xs(r, s) && (t.flags |= 32),
        xc(e, t),
        Se(e, t, i, n),
        t.child
      );
    case 6:
      return (e === null && ti(t), null);
    case 13:
      return kc(e, t, n);
    case 4:
      return (
        Gi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = jn(t, null, r, n)) : Se(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ke(r, o)),
        fa(e, t, r, o, n)
      );
    case 7:
      return (Se(e, t, t.pendingProps, n), t.child);
    case 8:
      return (Se(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (Se(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (s = t.memoizedProps),
          (i = o.value),
          H(ko, r._currentValue),
          (r._currentValue = i),
          s !== null)
        )
          if (Ze(s.value, i)) {
            if (s.children === o.children && !je.current) {
              t = wt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                i = s.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      ((a = mt(-1, n & -n)), (a.tag = 2));
                      var c = s.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var p = c.pending;
                        (p === null
                          ? (a.next = a)
                          : ((a.next = p.next), (p.next = a)),
                          (c.pending = a));
                      }
                    }
                    ((s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      ni(s.return, n, t),
                      (l.lanes |= n));
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((i = s.return), i === null)) throw Error(S(341));
                ((i.lanes |= n),
                  (l = i.alternate),
                  l !== null && (l.lanes |= n),
                  ni(i, n, t),
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
        (Se(e, t, o.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Cn(t, n),
        (o = We(o)),
        (r = r(o)),
        (t.flags |= 1),
        Se(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Ke(r, t.pendingProps)),
        (o = Ke(r.type, o)),
        ha(e, t, r, o, n)
      );
    case 15:
      return wc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ke(r, o)),
        so(e, t),
        (t.tag = 1),
        Pe(r) ? ((e = !0), _o(t)) : (e = !1),
        Cn(t, n),
        gc(t, r, o),
        oi(t, r, o, n),
        li(null, t, r, !0, e, n)
      );
    case 19:
      return Cc(e, t, n);
    case 22:
      return _c(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function Ac(e, t) {
  return hu(e, t);
}
function Sh(e, t, n, r) {
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
function He(e, t, n, r) {
  return new Sh(e, t, n, r);
}
function ul(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function kh(e) {
  if (typeof e == "function") return ul(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ii)) return 11;
    if (e === ji) return 14;
  }
  return 2;
}
function Ot(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = He(e.tag, t, e.key, e.mode)),
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
function ao(e, t, n, r, o, s) {
  var i = 2;
  if (((r = e), typeof e == "function")) ul(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case un:
        return Gt(n.children, o, s, t);
      case Ti:
        ((i = 8), (o |= 8));
        break;
      case Is:
        return (
          (e = He(12, n, t, o | 2)),
          (e.elementType = Is),
          (e.lanes = s),
          e
        );
      case js:
        return ((e = He(13, n, t, o)), (e.elementType = js), (e.lanes = s), e);
      case Ps:
        return ((e = He(19, n, t, o)), (e.elementType = Ps), (e.lanes = s), e);
      case Xa:
        return Qo(n, o, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ga:
              i = 10;
              break e;
            case qa:
              i = 9;
              break e;
            case Ii:
              i = 11;
              break e;
            case ji:
              i = 14;
              break e;
            case kt:
              ((i = 16), (r = null));
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = He(i, n, t, o)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = s),
    t
  );
}
function Gt(e, t, n, r) {
  return ((e = He(7, e, r, t)), (e.lanes = n), e);
}
function Qo(e, t, n, r) {
  return (
    (e = He(22, e, r, t)),
    (e.elementType = Xa),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ks(e, t, n) {
  return ((e = He(6, e, null, t)), (e.lanes = n), e);
}
function Cs(e, t, n) {
  return (
    (t = He(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Ch(e, t, n, r, o) {
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
    (this.eventTimes = os(0)),
    (this.expirationTimes = os(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = os(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null));
}
function cl(e, t, n, r, o, s, i, l, a) {
  return (
    (e = new Ch(e, t, n, l, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = He(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ki(s),
    e
  );
}
function Eh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: an,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Uc(e) {
  if (!e) return Ft;
  e = e._reactInternals;
  e: {
    if (on(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Pe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Pe(n)) return Uu(e, n, t);
  }
  return t;
}
function Hc(e, t, n, r, o, s, i, l, a) {
  return (
    (e = cl(n, r, !0, e, o, s, i, l, a)),
    (e.context = Uc(null)),
    (n = e.current),
    (r = ke()),
    (o = bt(n)),
    (s = mt(r, o)),
    (s.callback = t ?? null),
    Mt(n, s, o),
    (e.current.lanes = o),
    Tr(e, o, r),
    De(e, r),
    e
  );
}
function Ko(e, t, n, r) {
  var o = t.current,
    s = ke(),
    i = bt(o);
  return (
    (n = Uc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = mt(s, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Mt(o, t, i)),
    e !== null && (Je(e, o, i, s), no(e, o, i)),
    i
  );
}
function Mo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ea(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function dl(e, t) {
  (Ea(e, t), (e = e.alternate) && Ea(e, t));
}
function Nh() {
  return null;
}
var Bc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function fl(e) {
  this._internalRoot = e;
}
Go.prototype.render = fl.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Ko(e, t, null, null);
};
Go.prototype.unmount = fl.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (tn(function () {
      Ko(null, e, null, null);
    }),
      (t[yt] = null));
  }
};
function Go(e) {
  this._internalRoot = e;
}
Go.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = _u();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Et.length && t !== 0 && t < Et[n].priority; n++);
    (Et.splice(n, 0, e), n === 0 && Su(e));
  }
};
function hl(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function qo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Na() {}
function Th(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = Mo(i);
        s.call(c);
      };
    }
    var i = Hc(t, r, e, 0, null, !1, !1, "", Na);
    return (
      (e._reactRootContainer = i),
      (e[yt] = i.current),
      mr(e.nodeType === 8 ? e.parentNode : e),
      tn(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var c = Mo(a);
      l.call(c);
    };
  }
  var a = cl(e, 0, !1, null, null, !1, !1, "", Na);
  return (
    (e._reactRootContainer = a),
    (e[yt] = a.current),
    mr(e.nodeType === 8 ? e.parentNode : e),
    tn(function () {
      Ko(t, a, n, r);
    }),
    a
  );
}
function Xo(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = Mo(i);
        l.call(a);
      };
    }
    Ko(t, i, e, o);
  } else i = Th(n, t, e, o, r);
  return Mo(i);
}
vu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Xn(t.pendingLanes);
        n !== 0 &&
          (Ri(t, n | 1), De(t, te()), !(z & 6) && ((Rn = te() + 500), Ut()));
      }
      break;
    case 13:
      (tn(function () {
        var r = vt(e, 1);
        if (r !== null) {
          var o = ke();
          Je(r, e, 1, o);
        }
      }),
        dl(e, 1));
  }
};
Mi = function (e) {
  if (e.tag === 13) {
    var t = vt(e, 134217728);
    if (t !== null) {
      var n = ke();
      Je(t, e, 134217728, n);
    }
    dl(e, 134217728);
  }
};
wu = function (e) {
  if (e.tag === 13) {
    var t = bt(e),
      n = vt(e, t);
    if (n !== null) {
      var r = ke();
      Je(n, e, t, r);
    }
    dl(e, t);
  }
};
_u = function () {
  return A;
};
xu = function (e, t) {
  var n = A;
  try {
    return ((A = e), t());
  } finally {
    A = n;
  }
};
As = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ms(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = Ao(r);
            if (!o) throw Error(S(90));
            (Ja(r), Ms(r, o));
          }
        }
      }
      break;
    case "textarea":
      eu(e, n);
      break;
    case "select":
      ((t = n.value), t != null && _n(e, !!n.multiple, t, !1));
  }
};
lu = il;
au = tn;
var Ih = { usingClientEntryPoint: !1, Events: [jr, hn, Ao, su, iu, il] },
  Kn = {
    findFiberByHostInstance: Wt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  jh = {
    bundleType: Kn.bundleType,
    version: Kn.version,
    rendererPackageName: Kn.rendererPackageName,
    rendererConfig: Kn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: _t.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = du(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Kn.findFiberByHostInstance || Nh,
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
      ((Oo = Gr.inject(jh)), (lt = Gr));
    } catch {}
}
$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ih;
$e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!hl(t)) throw Error(S(200));
  return Eh(e, t, null, n);
};
$e.createRoot = function (e, t) {
  if (!hl(e)) throw Error(S(299));
  var n = !1,
    r = "",
    o = Bc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = cl(e, 1, !1, null, null, n, !1, r, o)),
    (e[yt] = t.current),
    mr(e.nodeType === 8 ? e.parentNode : e),
    new fl(t)
  );
};
$e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(S(188))
      : ((e = Object.keys(e).join(",")), Error(S(268, e)));
  return ((e = du(t)), (e = e === null ? null : e.stateNode), e);
};
$e.flushSync = function (e) {
  return tn(e);
};
$e.hydrate = function (e, t, n) {
  if (!qo(t)) throw Error(S(200));
  return Xo(null, e, t, !0, n);
};
$e.hydrateRoot = function (e, t, n) {
  if (!hl(e)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    s = "",
    i = Bc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Hc(t, null, e, 1, n ?? null, o, !1, s, i)),
    (e[yt] = t.current),
    mr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o));
  return new Go(t);
};
$e.render = function (e, t, n) {
  if (!qo(t)) throw Error(S(200));
  return Xo(null, e, t, !1, n);
};
$e.unmountComponentAtNode = function (e) {
  if (!qo(e)) throw Error(S(40));
  return e._reactRootContainer
    ? (tn(function () {
        Xo(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[yt] = null));
        });
      }),
      !0)
    : !1;
};
$e.unstable_batchedUpdates = il;
$e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!qo(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Xo(e, t, n, !1, r);
};
$e.version = "18.3.1-next-f1338f8080-20240426";
function Wc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wc);
    } catch (e) {
      console.error(e);
    }
}
(Wc(), (Wa.exports = $e));
var Ph = Wa.exports,
  Vc,
  Ta = Ph;
((Vc = Ta.createRoot), Ta.hydrateRoot);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Dh = {
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
 */ const Rh = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  xe = (e, t) => {
    const n = E.forwardRef(
      (
        {
          color: r = "currentColor",
          size: o = 24,
          strokeWidth: s = 2,
          absoluteStrokeWidth: i,
          className: l = "",
          children: a,
          ...c
        },
        p,
      ) =>
        E.createElement(
          "svg",
          {
            ref: p,
            ...Dh,
            width: o,
            height: o,
            stroke: r,
            strokeWidth: i ? (Number(s) * 24) / Number(o) : s,
            className: ["lucide", `lucide-${Rh(e)}`, l].join(" "),
            ...c,
          },
          [
            ...t.map(([g, m]) => E.createElement(g, m)),
            ...(Array.isArray(a) ? a : [a]),
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
 */ const Qc = xe("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mh = xe("Globe", [
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
 */ const Lh = xe("Layers", [
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
 */ const bh = xe("Lock", [
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
 */ const Oh = xe("LogIn", [
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }],
  ["polyline", { points: "10 17 15 12 10 7", key: "1ail0h" }],
  ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $h = xe("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fh = xe("PlusSquare", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zh = xe("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kc = xe("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ah = xe("Trash2", [
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
 */ const Uh = xe("Unlock", [
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
 */ const Gc = xe("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hh = xe("UserPlus", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bh = xe("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wi = xe("Users", [
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
 */ const $n = xe("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Wh = {
    en: {
      inventoryManagement: "Inventory Management",
      management: "Management",
      merge: "Merge",
      review: "Review",
      report: "Report",
      final: "Final",
      logout: "Logout",
      downloadTemplate: "Download Template",
      search: "Search",
      uploadExcel: "Upload Excel",
      createInventory: "Create Inventory",
      cancel: "Cancel",
      save: "Save Changes",
      add: "Add",
      downloadExcel: "Download Excel",
      enterInventory: "Enter Inventory",
      filterBy: "Filter by",
      inventoryForms: "Inventory Forms",
      reviewForms: "Review Forms",
      noItemsFound: "No items found",
      login: "Login",
      userId: "User ID",
      password: "Password",
      loginFailed: "Login failed",
      pleaseLogin: "Please login to continue",
      invalidCredentials: "Invalid credentials",
      creator: "Creator",
      ic_sn: "Inventory no.",
      ic_name: "Inventory name",
      staff: "Staff",
      start: "Start Time",
      end: "End Time",
      status: "Status",
      addMedicine: "Add Medicine",
      editStaff: "Edit Staff",
      onlineUsers: "Online Users",
      createNewInventory: "Create New Inventory",
      inventoryName: "Inventory Name",
      startDate: "Start Date",
      endDate: "End Date",
      notes: "Notes",
      create: "Create",
      medQtyGroup: "Medicine Quantity Group",
      controlLevel: "Control Level",
      medTypeGroup: "Medicine Type Group",
      searchInventory: "Search Inventory",
      inventoryNumber: "Inventory Number",
      searchPeriod: "Search Date",
      searchTerm: "Search Term",
      enterSearchTerm: "Enter search term...",
      enterInventoryNumber: "Enter inventory number...",
      from: "Start date",
      to: "End date",
      uploadExcelFile: "Upload Excel File",
      selectFile: "Select a file",
      dragAndDrop: "or drag and drop",
      excelFilesOnly: "Excel files only (.xls, .xlsx)",
      uploadInventoryName: "Inventory Name",
      uploadInventoryStaff: "Default Staff",
      enterInventoryName: "Enter inventory name",
      enterUploadStaffName: "Enter staff name",
      upload: "Upload",
      fileRequired: "Please select a file",
      invalidFileType: "Only Excel files (.xls, .xlsx) are allowed",
      addMedicineTitle: "Add Medicine",
      medicineCode: "Medicine Code",
      medicineName: "Medicine Name",
      quantity: "Quantity",
      mm_code: "Code: ",
      mm_sdkiacode: "SKDIA Code: ",
      mm_name: "Name: ",
      mm_chtname: "Chinese Name: ",
      mm_notfound: "No results found",
      editStaffTitle: "Edit Staff",
      staffMember: "Staff Member",
      enterStaffName: "Enter staff name",
      invalidStaffName: "Only letters, Chinese characters, and spaces allowed",
      role: "Role",
      counter: "Counter",
      reviewer: "Reviewer",
      manager: "Manager",
    },
    zh: {
      inventoryManagement: "盤點管理",
      management: "管理",
      merge: "合併",
      review: "覆盤",
      report: "報表",
      final: "定盤",
      logout: "登出",
      downloadTemplate: "下載範本",
      search: "搜尋",
      uploadExcel: "上傳",
      createInventory: "建立盤點",
      cancel: "取消",
      save: "儲存變更",
      add: "新增",
      downloadExcel: "下載",
      enterInventory: "進入盤點",
      filterBy: "篩選條件",
      inventoryForms: "盤點單",
      reviewForms: "覆盤單",
      noItemsFound: "查無資料",
      login: "登入",
      userId: "使用者帳號",
      password: "密碼",
      loginFailed: "登入失敗",
      pleaseLogin: "請先登入",
      invalidCredentials: "帳號或密碼錯誤",
      creator: "建立者",
      ic_sn: "單號",
      ic_name: "名稱",
      staff: "盤點人員",
      start: "開始時間",
      end: "結束時間",
      status: "狀態",
      addMedicine: "新增藥品",
      editStaff: "編輯人員",
      onlineUsers: "線上人數",
      createNewInventory: "建立新盤點",
      inventoryName: "盤點名稱",
      startDate: "開始日期",
      endDate: "結束日期",
      notes: "備註",
      create: "建立",
      medQtyGroup: "藥品群組",
      controlLevel: "管制級別",
      medTypeGroup: "藥品種類群組",
      searchInventory: "搜尋盤點單",
      inventoryNumber: "盤點單號",
      searchPeriod: "搜尋日期",
      searchTerm: "搜尋條件",
      enterSearchTerm: "請輸入搜尋條件...",
      enterInventoryNumber: "請輸入盤點單號...",
      from: "起始時間",
      to: "結束時間",
      uploadExcelFile: "上傳 Excel 檔案",
      selectFile: "選擇檔案",
      dragAndDrop: "或拖曳至此",
      excelFilesOnly: "僅限 Excel 檔案 (.xls, .xlsx)",
      uploadInventoryName: "盤點名稱",
      uploadInventoryStaff: "預設盤點人",
      enterInventoryName: "請輸入盤點名稱",
      enterUploadStaffName: "請輸入人員名稱",
      upload: "上傳",
      fileRequired: "請選擇檔案",
      invalidFileType: "僅接受 Excel 檔案 (.xls, .xlsx)",
      addMedicineTitle: "新增藥品",
      medicineCode: "藥品代碼",
      medicineName: "藥品名稱",
      quantity: "數量",
      mm_code: "藥碼: ",
      mm_sdkiacode: "料號: ",
      mm_name: "藥名: ",
      mm_chtname: "中文名: ",
      mm_notfound: "查無藥品",
      editStaffTitle: "編輯人員",
      staffMember: "人員",
      enterStaffName: "請輸入人員名稱",
      invalidStaffName: "僅允許使用中英文字母和空格",
      role: "角色",
      counter: "盤點人員",
      reviewer: "覆核人員",
      manager: "管理人員",
    },
  },
  P = (e, t) => Wh[t][e],
  pl = () => {
    const [e, t] = E.useState(null);
    return (
      E.useEffect(() => {
        fetch("../config.txt")
          .then((n) => n.json())
          .then((n) => t(n))
          .catch((n) => console.error("Error loading config:", n));
      }, []),
      e
    );
  },
  Ne = async () => {
    try {
      return await (await fetch("../config.txt")).json();
    } catch (e) {
      return (console.error("Error loading config:", e), null);
    }
  },
  rt = async (e, t, n, r) => {
    var s;
    let o;
    try {
      o = await r.clone().json();
    } catch (i) {
      (console.warn("Failed to parse response JSON for logging:", i), (o = {}));
    }
    return (
      console.group(`🌐 API Call: ${e}`),
      console.log("📤 Request:", {
        url: `${(s = await Ne()) == null ? void 0 : s.domain}${e}`,
        method: t,
        data: n,
      }),
      console.log("📥 Response:", { status: r.status, data: o }),
      console.groupEnd(),
      o
    );
  },
  ce = {
    async getExcelHeader() {
      const e = await Ne();
      if (!e) throw new Error("Failed to load configuration");
      const t = "/api/inventory/get_excel_header",
        n = {},
        r = await fetch(`${e.domain}${t}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(n),
        });
      if (!r.ok) throw new Error("Failed to download template");
      const o = await r.blob(),
        s = window.URL.createObjectURL(o),
        i = document.createElement("a");
      ((i.href = s),
        (i.download = "盤點範例.xlsx"),
        document.body.appendChild(i),
        i.click(),
        window.URL.revokeObjectURL(s),
        document.body.removeChild(i));
    },
    async downloadExcel(e) {
      const t = await Ne();
      if (!t) throw new Error("Failed to load configuration");
      const n = "/api/inventory/download_excel_by_IC_SN",
        r = {
          Data: {},
          Code: 0,
          Result: "",
          Value: e.IC_SN,
          ServerName: "",
          ServerType: "網頁",
          TableName: "medicine_page_firstclass",
          TimeTaken: "",
        },
        o = await fetch(`${t.domain}${n}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(r),
        });
      if (!o.ok) throw new Error("Failed to download Excel");
      const s = await o.blob(),
        i = window.URL.createObjectURL(s),
        l = document.createElement("a");
      ((l.href = i), console.log(e));
      const c = e.CT_TIME.split(" ")[0].replaceAll("/", "-");
      (console.log(c),
        e.IC_NAME
          ? (l.download = `${c} ${e.IC_NAME}.xlsx`)
          : (l.download = `${c} ${e.IC_SN}.xlsx`),
        document.body.appendChild(l),
        l.click(),
        window.URL.revokeObjectURL(i),
        document.body.removeChild(l));
    },
    async getInventoryList(e, t) {
      const n = await Ne();
      if (!n) throw new Error("Failed to load configuration");
      const r = "/api/inventory/creat_get_by_CT_TIME_ST_END";
      let o, s;
      if (e && t) ((o = e), (s = t));
      else {
        const c = new Date();
        c.setMonth(c.getMonth() - 1);
        const p = new Date();
        (p.setDate(p.getDate() + 2),
          (o = c.toISOString().split("T")[0]),
          (s = p.toISOString().split("T")[0]));
      }
      const i = {
          Data: {},
          Code: 0,
          Result: "",
          Value: `${o},${s}`,
          ServerName: "",
          ServerType: "網頁",
          TableName: "medicine_page_firstclass",
          TimeTaken: "",
        },
        l = await fetch(`${n.domain}${r}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(i),
        });
      if (!l.ok) throw new Error("Failed to fetch inventory list");
      return (await rt(r, "POST", i, l)).Data || [];
    },
    async getOnlineUsers() {
      const e = await Ne();
      if (!e) throw new Error("Failed to load configuration");
      const t = "/api/webTraffic/get_by_page",
        n = { ValueAry: ["盤點操作", "10"] },
        r = await fetch(`${e.domain}${t}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(n),
        });
      if (!r.ok) throw new Error("Failed to fetch online users");
      const o = await rt(t, "POST", n, r);
      return o.Code == -200 ? [] : o.Data || [];
    },
    async deleteInventory(e, t) {
      const n = await Ne();
      if (!n) throw new Error("Failed to load configuration");
      const r = "/api/inventory/creat_delete_by_IC_SN",
        o = {
          Data: {},
          Method: "creat_delete_by_IC_SN",
          Value: e,
          ServerName: "",
          ServerType: "網頁",
          TableName: "medicine_page_firstclass",
        },
        s = await fetch(`${n.domain}${r}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(o),
        });
      if (!s.ok) throw new Error("Failed to delete inventory");
      const i = await rt(r, "POST", o, s);
      try {
        await t(i);
      } catch (l) {
        console.warn("Failed to send real-time update:", l);
      }
      return i;
    },
    async toggleLock(e, t, n) {
      const r = await Ne();
      if (!r) throw new Error("Failed to load configuration");
      const o = t ? "creat_unlock_by_IC_SN" : "creat_lock_by_IC_SN",
        s = `/api/inventory/${o}`,
        i = {
          Data: {},
          Method: o,
          Value: e,
          ServerName: "",
          ServerType: "網頁",
          TableName: "medicine_page_firstclass",
          TimeTaken: "",
        },
        l = await fetch(`${r.domain}${s}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(i),
        });
      if (!l.ok)
        throw new Error(`Failed to ${t ? "unlock" : "lock"} inventory`);
      const a = await rt(s, "POST", i, l);
      try {
        await n(a);
      } catch (c) {
        console.warn("Failed to send real-time update:", c);
      }
      return a;
    },
    async createInventory(e, t) {
      const n = await Ne();
      if (!n) throw new Error("Failed to load configuration");
      const r = `medgroup=${(e.selectedMedQtyGroups || []).join(";")}`,
        o = `control=${(e.selectedControlLevels || []).join(";")}`,
        s = `medType=${(e.selectedMedTypes || []).join(";")}`,
        i = "/api/inventory/creat_auto_add",
        l = {
          Data: {
            GUID: null,
            IC_SN: null,
            CT: e.CT,
            CT_TIME: null,
            START_TIME: null,
            END_TIME: null,
            STATE: null,
            IC_NAME: e.IC_NAME,
            Contents: [],
          },
          Code: 0,
          TableName: "medicine_page_firstclass",
          Result: "",
          Value: "",
          ValueAry: [r, o, s],
          ServerName: "DS01",
          ServerType: "藥庫",
          TimeTaken: "",
        },
        a = await fetch(`${n.domain}${i}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(l),
        });
      (console.log(`${n.domain}${i}`), console.log(l));
      let c = await a.clone().json();
      console.log(c);
      const p = await rt(i, "POST", l, a);
      try {
        await t(p);
      } catch (g) {
        console.warn("Failed to send real-time update:", g);
      }
      return p;
    },
    async uploadExcel(e, t) {
      const n = await Ne();
      if (!n) throw new Error("Failed to load configuration");
      const r = "/api/inventory/excel_upload",
        o = await fetch(`${n.domain}${r}`, { method: "POST", body: e });
      if (!o.ok) throw new Error("Failed to upload Excel file");
      let s = await o.json();
      (console.group(`🌐 API Call: ${r}`),
        console.log("📤 Request:", {
          url: `${n.domain}${r}`,
          method: "POST",
          data: "FormData (file upload)",
        }),
        console.log("📥 Response:", { status: o.status, data: s }),
        console.groupEnd());
      try {
        await t(s);
      } catch (i) {
        console.warn("Failed to send real-time update:", i);
      }
      return s;
    },
    async getMedicineList() {
      const e = await Ne();
      if (!e) throw new Error("Failed to load configuration");
      const t = "/api/MED_page/get_by_apiserver",
        n = {
          Data: {},
          Code: 0,
          Result: "",
          Value: "",
          ServerName: "Main",
          ServerType: "網頁",
          TableName: "medicine_page_cloud",
          DbName: "dbvm",
          TimeTaken: "",
        },
        r = await fetch(`${e.domain}${t}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(n),
        });
      if (!r.ok) throw new Error("Failed to fetch medicine list");
      return (await rt(t, "POST", n, r)).Data || [];
    },
    async addMedicineToInventory(e, t) {
      const n = await Ne();
      if (!n) throw new Error("Failed to load configuration");
      const r = "/api/inventory/content_add_by_IC_SN",
        o = { Data: { Contents: [t] }, Value: e },
        s = await fetch(`${n.domain}${r}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(o),
        });
      if (!s.ok) throw new Error("Failed to add medicine to inventory");
      return rt(r, "POST", o, s);
    },
    async updateInventoryStaff(e, t) {
      const n = await Ne();
      if (!n) throw new Error("Failed to load configuration");
      const r = "/api/inventory/creat_update_default_op_by_IC_SN",
        o = { Data: { DEFAULT_OP: t.join(",") }, Value: e },
        s = await fetch(`${n.domain}${r}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(o),
        });
      if (!s.ok) throw new Error("Failed to update inventory staff");
      return rt(r, "POST", o, s);
    },
    async getMedCloud() {
      const e = await Ne();
      if (!e) throw new Error("Failed to load configuration");
      const t = "/api/MED_page/get_med_cloud",
        n = {},
        r = await fetch(`${e.domain}${t}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(n),
        });
      if (!r.ok) throw new Error("Failed to fetch medicine cloud data");
      return await rt(t, "POST", n, r);
    },
    async getMedQtyGroup() {
      const e = await Ne();
      if (!e) throw new Error("Failed to load configuration");
      const t = "/api/medGroup/get_all_group",
        n = {},
        r = await fetch(`${e.domain}${t}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(n),
        });
      if (!r.ok)
        throw new Error("Failed to fetch medicine quantity group data");
      return await rt(t, "POST", n, r);
    },
  },
  Vh = ({ isOpen: e }) =>
    e
      ? u.jsx("div", {
          className:
            "fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50",
          children: u.jsxs("div", {
            className: "bg-white rounded-lg p-8 flex flex-col items-center",
            children: [
              u.jsx("div", {
                className:
                  "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600",
              }),
              u.jsx("p", {
                className: "mt-4 text-gray-700 text-lg",
                children: "Loading...",
              }),
            ],
          }),
        })
      : null,
  qc = E.createContext(void 0),
  Qh = ({ children: e }) => {
    const [t, n] = E.useState(!1),
      [r, o] = E.useState(0),
      s = E.useCallback(() => {
        (o((l) => l + 1), n(!0));
      }, []),
      i = E.useCallback(() => {
        o((l) => {
          const a = l - 1;
          return a <= 0 ? (n(!1), 0) : a;
        });
      }, []);
    return u.jsxs(qc.Provider, {
      value: { showLoading: s, hideLoading: i },
      children: [e, u.jsx(Vh, { isOpen: t })],
    });
  },
  Dr = () => {
    const e = E.useContext(qc);
    if (!e) throw new Error("useLoading must be used within a LoadingProvider");
    return e;
  };
class qt extends Error {
  constructor(t, n) {
    const r = new.target.prototype;
    (super(`${t}: Status code '${n}'`),
      (this.statusCode = n),
      (this.__proto__ = r));
  }
}
class ml extends Error {
  constructor(t = "A timeout occurred.") {
    const n = new.target.prototype;
    (super(t), (this.__proto__ = n));
  }
}
class Xe extends Error {
  constructor(t = "An abort occurred.") {
    const n = new.target.prototype;
    (super(t), (this.__proto__ = n));
  }
}
class Kh extends Error {
  constructor(t, n) {
    const r = new.target.prototype;
    (super(t),
      (this.transport = n),
      (this.errorType = "UnsupportedTransportError"),
      (this.__proto__ = r));
  }
}
class Gh extends Error {
  constructor(t, n) {
    const r = new.target.prototype;
    (super(t),
      (this.transport = n),
      (this.errorType = "DisabledTransportError"),
      (this.__proto__ = r));
  }
}
class qh extends Error {
  constructor(t, n) {
    const r = new.target.prototype;
    (super(t),
      (this.transport = n),
      (this.errorType = "FailedToStartTransportError"),
      (this.__proto__ = r));
  }
}
class Ia extends Error {
  constructor(t) {
    const n = new.target.prototype;
    (super(t),
      (this.errorType = "FailedToNegotiateWithServerError"),
      (this.__proto__ = n));
  }
}
class Xh extends Error {
  constructor(t, n) {
    const r = new.target.prototype;
    (super(t), (this.innerErrors = n), (this.__proto__ = r));
  }
}
class Xc {
  constructor(t, n, r) {
    ((this.statusCode = t), (this.statusText = n), (this.content = r));
  }
}
class Yo {
  get(t, n) {
    return this.send({ ...n, method: "GET", url: t });
  }
  post(t, n) {
    return this.send({ ...n, method: "POST", url: t });
  }
  delete(t, n) {
    return this.send({ ...n, method: "DELETE", url: t });
  }
  getCookieString(t) {
    return "";
  }
}
var y;
(function (e) {
  ((e[(e.Trace = 0)] = "Trace"),
    (e[(e.Debug = 1)] = "Debug"),
    (e[(e.Information = 2)] = "Information"),
    (e[(e.Warning = 3)] = "Warning"),
    (e[(e.Error = 4)] = "Error"),
    (e[(e.Critical = 5)] = "Critical"),
    (e[(e.None = 6)] = "None"));
})(y || (y = {}));
class Cr {
  constructor() {}
  log(t, n) {}
}
Cr.instance = new Cr();
const Yh = "8.0.7";
class re {
  static isRequired(t, n) {
    if (t == null) throw new Error(`The '${n}' argument is required.`);
  }
  static isNotEmpty(t, n) {
    if (!t || t.match(/^\s*$/))
      throw new Error(`The '${n}' argument should not be empty.`);
  }
  static isIn(t, n, r) {
    if (!(t in n)) throw new Error(`Unknown ${r} value: ${t}.`);
  }
}
class X {
  static get isBrowser() {
    return (
      !X.isNode &&
      typeof window == "object" &&
      typeof window.document == "object"
    );
  }
  static get isWebWorker() {
    return !X.isNode && typeof self == "object" && "importScripts" in self;
  }
  static get isReactNative() {
    return (
      !X.isNode && typeof window == "object" && typeof window.document > "u"
    );
  }
  static get isNode() {
    return (
      typeof process < "u" && process.release && process.release.name === "node"
    );
  }
}
function Er(e, t) {
  let n = "";
  return (
    nn(e)
      ? ((n = `Binary data of length ${e.byteLength}`),
        t && (n += `. Content: '${Jh(e)}'`))
      : typeof e == "string" &&
        ((n = `String data of length ${e.length}`),
        t && (n += `. Content: '${e}'`)),
    n
  );
}
function Jh(e) {
  const t = new Uint8Array(e);
  let n = "";
  return (
    t.forEach((r) => {
      const o = r < 16 ? "0" : "";
      n += `0x${o}${r.toString(16)} `;
    }),
    n.substr(0, n.length - 1)
  );
}
function nn(e) {
  return (
    e &&
    typeof ArrayBuffer < "u" &&
    (e instanceof ArrayBuffer ||
      (e.constructor && e.constructor.name === "ArrayBuffer"))
  );
}
async function Yc(e, t, n, r, o, s) {
  const i = {},
    [l, a] = Mn();
  ((i[l] = a),
    e.log(
      y.Trace,
      `(${t} transport) sending data. ${Er(o, s.logMessageContent)}.`,
    ));
  const c = nn(o) ? "arraybuffer" : "text",
    p = await n.post(r, {
      content: o,
      headers: { ...i, ...s.headers },
      responseType: c,
      timeout: s.timeout,
      withCredentials: s.withCredentials,
    });
  e.log(
    y.Trace,
    `(${t} transport) request complete. Response status: ${p.statusCode}.`,
  );
}
function Zh(e) {
  return e === void 0
    ? new Lo(y.Information)
    : e === null
      ? Cr.instance
      : e.log !== void 0
        ? e
        : new Lo(e);
}
class ep {
  constructor(t, n) {
    ((this._subject = t), (this._observer = n));
  }
  dispose() {
    const t = this._subject.observers.indexOf(this._observer);
    (t > -1 && this._subject.observers.splice(t, 1),
      this._subject.observers.length === 0 &&
        this._subject.cancelCallback &&
        this._subject.cancelCallback().catch((n) => {}));
  }
}
class Lo {
  constructor(t) {
    ((this._minLevel = t), (this.out = console));
  }
  log(t, n) {
    if (t >= this._minLevel) {
      const r = `[${new Date().toISOString()}] ${y[t]}: ${n}`;
      switch (t) {
        case y.Critical:
        case y.Error:
          this.out.error(r);
          break;
        case y.Warning:
          this.out.warn(r);
          break;
        case y.Information:
          this.out.info(r);
          break;
        default:
          this.out.log(r);
          break;
      }
    }
  }
}
function Mn() {
  let e = "X-SignalR-User-Agent";
  return (X.isNode && (e = "User-Agent"), [e, tp(Yh, np(), op(), rp())]);
}
function tp(e, t, n, r) {
  let o = "Microsoft SignalR/";
  const s = e.split(".");
  return (
    (o += `${s[0]}.${s[1]}`),
    (o += ` (${e}; `),
    t && t !== "" ? (o += `${t}; `) : (o += "Unknown OS; "),
    (o += `${n}`),
    r ? (o += `; ${r}`) : (o += "; Unknown Runtime Version"),
    (o += ")"),
    o
  );
}
function np() {
  if (X.isNode)
    switch (process.platform) {
      case "win32":
        return "Windows NT";
      case "darwin":
        return "macOS";
      case "linux":
        return "Linux";
      default:
        return process.platform;
    }
  else return "";
}
function rp() {
  if (X.isNode) return process.versions.node;
}
function op() {
  return X.isNode ? "NodeJS" : "Browser";
}
function Es(e) {
  return e.stack ? e.stack : e.message ? e.message : `${e}`;
}
function sp() {
  if (typeof globalThis < "u") return globalThis;
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("could not find global");
}
class ip extends Yo {
  constructor(t) {
    if ((super(), (this._logger = t), typeof fetch > "u" || X.isNode)) {
      const n =
        typeof __webpack_require__ == "function"
          ? __non_webpack_require__
          : require;
      ((this._jar = new (n("tough-cookie").CookieJar)()),
        typeof fetch > "u"
          ? (this._fetchType = n("node-fetch"))
          : (this._fetchType = fetch),
        (this._fetchType = n("fetch-cookie")(this._fetchType, this._jar)));
    } else this._fetchType = fetch.bind(sp());
    if (typeof AbortController > "u") {
      const n =
        typeof __webpack_require__ == "function"
          ? __non_webpack_require__
          : require;
      this._abortControllerType = n("abort-controller");
    } else this._abortControllerType = AbortController;
  }
  async send(t) {
    if (t.abortSignal && t.abortSignal.aborted) throw new Xe();
    if (!t.method) throw new Error("No method defined.");
    if (!t.url) throw new Error("No url defined.");
    const n = new this._abortControllerType();
    let r;
    t.abortSignal &&
      (t.abortSignal.onabort = () => {
        (n.abort(), (r = new Xe()));
      });
    let o = null;
    if (t.timeout) {
      const a = t.timeout;
      o = setTimeout(() => {
        (n.abort(),
          this._logger.log(y.Warning, "Timeout from HTTP request."),
          (r = new ml()));
      }, a);
    }
    (t.content === "" && (t.content = void 0),
      t.content &&
        ((t.headers = t.headers || {}),
        nn(t.content)
          ? (t.headers["Content-Type"] = "application/octet-stream")
          : (t.headers["Content-Type"] = "text/plain;charset=UTF-8")));
    let s;
    try {
      s = await this._fetchType(t.url, {
        body: t.content,
        cache: "no-cache",
        credentials: t.withCredentials === !0 ? "include" : "same-origin",
        headers: { "X-Requested-With": "XMLHttpRequest", ...t.headers },
        method: t.method,
        mode: "cors",
        redirect: "follow",
        signal: n.signal,
      });
    } catch (a) {
      throw (
        r || (this._logger.log(y.Warning, `Error from HTTP request. ${a}.`), a)
      );
    } finally {
      (o && clearTimeout(o), t.abortSignal && (t.abortSignal.onabort = null));
    }
    if (!s.ok) {
      const a = await ja(s, "text");
      throw new qt(a || s.statusText, s.status);
    }
    const l = await ja(s, t.responseType);
    return new Xc(s.status, s.statusText, l);
  }
  getCookieString(t) {
    let n = "";
    return (
      X.isNode &&
        this._jar &&
        this._jar.getCookies(t, (r, o) => (n = o.join("; "))),
      n
    );
  }
}
function ja(e, t) {
  let n;
  switch (t) {
    case "arraybuffer":
      n = e.arrayBuffer();
      break;
    case "text":
      n = e.text();
      break;
    case "blob":
    case "document":
    case "json":
      throw new Error(`${t} is not supported.`);
    default:
      n = e.text();
      break;
  }
  return n;
}
class lp extends Yo {
  constructor(t) {
    (super(), (this._logger = t));
  }
  send(t) {
    return t.abortSignal && t.abortSignal.aborted
      ? Promise.reject(new Xe())
      : t.method
        ? t.url
          ? new Promise((n, r) => {
              const o = new XMLHttpRequest();
              (o.open(t.method, t.url, !0),
                (o.withCredentials =
                  t.withCredentials === void 0 ? !0 : t.withCredentials),
                o.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                t.content === "" && (t.content = void 0),
                t.content &&
                  (nn(t.content)
                    ? o.setRequestHeader(
                        "Content-Type",
                        "application/octet-stream",
                      )
                    : o.setRequestHeader(
                        "Content-Type",
                        "text/plain;charset=UTF-8",
                      )));
              const s = t.headers;
              (s &&
                Object.keys(s).forEach((i) => {
                  o.setRequestHeader(i, s[i]);
                }),
                t.responseType && (o.responseType = t.responseType),
                t.abortSignal &&
                  (t.abortSignal.onabort = () => {
                    (o.abort(), r(new Xe()));
                  }),
                t.timeout && (o.timeout = t.timeout),
                (o.onload = () => {
                  (t.abortSignal && (t.abortSignal.onabort = null),
                    o.status >= 200 && o.status < 300
                      ? n(
                          new Xc(
                            o.status,
                            o.statusText,
                            o.response || o.responseText,
                          ),
                        )
                      : r(
                          new qt(
                            o.response || o.responseText || o.statusText,
                            o.status,
                          ),
                        ));
                }),
                (o.onerror = () => {
                  (this._logger.log(
                    y.Warning,
                    `Error from HTTP request. ${o.status}: ${o.statusText}.`,
                  ),
                    r(new qt(o.statusText, o.status)));
                }),
                (o.ontimeout = () => {
                  (this._logger.log(y.Warning, "Timeout from HTTP request."),
                    r(new ml()));
                }),
                o.send(t.content));
            })
          : Promise.reject(new Error("No url defined."))
        : Promise.reject(new Error("No method defined."));
  }
}
class ap extends Yo {
  constructor(t) {
    if ((super(), typeof fetch < "u" || X.isNode)) this._httpClient = new ip(t);
    else if (typeof XMLHttpRequest < "u") this._httpClient = new lp(t);
    else throw new Error("No usable HttpClient found.");
  }
  send(t) {
    return t.abortSignal && t.abortSignal.aborted
      ? Promise.reject(new Xe())
      : t.method
        ? t.url
          ? this._httpClient.send(t)
          : Promise.reject(new Error("No url defined."))
        : Promise.reject(new Error("No method defined."));
  }
  getCookieString(t) {
    return this._httpClient.getCookieString(t);
  }
}
class Le {
  static write(t) {
    return `${t}${Le.RecordSeparator}`;
  }
  static parse(t) {
    if (t[t.length - 1] !== Le.RecordSeparator)
      throw new Error("Message is incomplete.");
    const n = t.split(Le.RecordSeparator);
    return (n.pop(), n);
  }
}
Le.RecordSeparatorCode = 30;
Le.RecordSeparator = String.fromCharCode(Le.RecordSeparatorCode);
class up {
  writeHandshakeRequest(t) {
    return Le.write(JSON.stringify(t));
  }
  parseHandshakeResponse(t) {
    let n, r;
    if (nn(t)) {
      const l = new Uint8Array(t),
        a = l.indexOf(Le.RecordSeparatorCode);
      if (a === -1) throw new Error("Message is incomplete.");
      const c = a + 1;
      ((n = String.fromCharCode.apply(
        null,
        Array.prototype.slice.call(l.slice(0, c)),
      )),
        (r = l.byteLength > c ? l.slice(c).buffer : null));
    } else {
      const l = t,
        a = l.indexOf(Le.RecordSeparator);
      if (a === -1) throw new Error("Message is incomplete.");
      const c = a + 1;
      ((n = l.substring(0, c)), (r = l.length > c ? l.substring(c) : null));
    }
    const o = Le.parse(n),
      s = JSON.parse(o[0]);
    if (s.type)
      throw new Error("Expected a handshake response from the server.");
    return [r, s];
  }
}
var L;
(function (e) {
  ((e[(e.Invocation = 1)] = "Invocation"),
    (e[(e.StreamItem = 2)] = "StreamItem"),
    (e[(e.Completion = 3)] = "Completion"),
    (e[(e.StreamInvocation = 4)] = "StreamInvocation"),
    (e[(e.CancelInvocation = 5)] = "CancelInvocation"),
    (e[(e.Ping = 6)] = "Ping"),
    (e[(e.Close = 7)] = "Close"),
    (e[(e.Ack = 8)] = "Ack"),
    (e[(e.Sequence = 9)] = "Sequence"));
})(L || (L = {}));
class cp {
  constructor() {
    this.observers = [];
  }
  next(t) {
    for (const n of this.observers) n.next(t);
  }
  error(t) {
    for (const n of this.observers) n.error && n.error(t);
  }
  complete() {
    for (const t of this.observers) t.complete && t.complete();
  }
  subscribe(t) {
    return (this.observers.push(t), new ep(this, t));
  }
}
class dp {
  constructor(t, n, r) {
    ((this._bufferSize = 1e5),
      (this._messages = []),
      (this._totalMessageCount = 0),
      (this._waitForSequenceMessage = !1),
      (this._nextReceivingSequenceId = 1),
      (this._latestReceivedSequenceId = 0),
      (this._bufferedByteCount = 0),
      (this._reconnectInProgress = !1),
      (this._protocol = t),
      (this._connection = n),
      (this._bufferSize = r));
  }
  async _send(t) {
    const n = this._protocol.writeMessage(t);
    let r = Promise.resolve();
    if (this._isInvocationMessage(t)) {
      this._totalMessageCount++;
      let o = () => {},
        s = () => {};
      (nn(n)
        ? (this._bufferedByteCount += n.byteLength)
        : (this._bufferedByteCount += n.length),
        this._bufferedByteCount >= this._bufferSize &&
          (r = new Promise((i, l) => {
            ((o = i), (s = l));
          })),
        this._messages.push(new fp(n, this._totalMessageCount, o, s)));
    }
    try {
      this._reconnectInProgress || (await this._connection.send(n));
    } catch {
      this._disconnected();
    }
    await r;
  }
  _ack(t) {
    let n = -1;
    for (let r = 0; r < this._messages.length; r++) {
      const o = this._messages[r];
      if (o._id <= t.sequenceId)
        ((n = r),
          nn(o._message)
            ? (this._bufferedByteCount -= o._message.byteLength)
            : (this._bufferedByteCount -= o._message.length),
          o._resolver());
      else if (this._bufferedByteCount < this._bufferSize) o._resolver();
      else break;
    }
    n !== -1 && (this._messages = this._messages.slice(n + 1));
  }
  _shouldProcessMessage(t) {
    if (this._waitForSequenceMessage)
      return t.type !== L.Sequence
        ? !1
        : ((this._waitForSequenceMessage = !1), !0);
    if (!this._isInvocationMessage(t)) return !0;
    const n = this._nextReceivingSequenceId;
    return (
      this._nextReceivingSequenceId++,
      n <= this._latestReceivedSequenceId
        ? (n === this._latestReceivedSequenceId && this._ackTimer(), !1)
        : ((this._latestReceivedSequenceId = n), this._ackTimer(), !0)
    );
  }
  _resetSequence(t) {
    if (t.sequenceId > this._nextReceivingSequenceId) {
      this._connection.stop(
        new Error(
          "Sequence ID greater than amount of messages we've received.",
        ),
      );
      return;
    }
    this._nextReceivingSequenceId = t.sequenceId;
  }
  _disconnected() {
    ((this._reconnectInProgress = !0), (this._waitForSequenceMessage = !0));
  }
  async _resend() {
    const t =
      this._messages.length !== 0
        ? this._messages[0]._id
        : this._totalMessageCount + 1;
    await this._connection.send(
      this._protocol.writeMessage({ type: L.Sequence, sequenceId: t }),
    );
    const n = this._messages;
    for (const r of n) await this._connection.send(r._message);
    this._reconnectInProgress = !1;
  }
  _dispose(t) {
    t ?? (t = new Error("Unable to reconnect to server."));
    for (const n of this._messages) n._rejector(t);
  }
  _isInvocationMessage(t) {
    switch (t.type) {
      case L.Invocation:
      case L.StreamItem:
      case L.Completion:
      case L.StreamInvocation:
      case L.CancelInvocation:
        return !0;
      case L.Close:
      case L.Sequence:
      case L.Ping:
      case L.Ack:
        return !1;
    }
  }
  _ackTimer() {
    this._ackTimerHandle === void 0 &&
      (this._ackTimerHandle = setTimeout(async () => {
        try {
          this._reconnectInProgress ||
            (await this._connection.send(
              this._protocol.writeMessage({
                type: L.Ack,
                sequenceId: this._latestReceivedSequenceId,
              }),
            ));
        } catch {}
        (clearTimeout(this._ackTimerHandle), (this._ackTimerHandle = void 0));
      }, 1e3));
  }
}
class fp {
  constructor(t, n, r, o) {
    ((this._message = t),
      (this._id = n),
      (this._resolver = r),
      (this._rejector = o));
  }
}
const hp = 30 * 1e3,
  pp = 15 * 1e3,
  mp = 1e5;
var Q;
(function (e) {
  ((e.Disconnected = "Disconnected"),
    (e.Connecting = "Connecting"),
    (e.Connected = "Connected"),
    (e.Disconnecting = "Disconnecting"),
    (e.Reconnecting = "Reconnecting"));
})(Q || (Q = {}));
class gl {
  static create(t, n, r, o, s, i, l) {
    return new gl(t, n, r, o, s, i, l);
  }
  constructor(t, n, r, o, s, i, l) {
    ((this._nextKeepAlive = 0),
      (this._freezeEventListener = () => {
        this._logger.log(
          y.Warning,
          "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://learn.microsoft.com/aspnet/core/signalr/javascript-client#bsleep",
        );
      }),
      re.isRequired(t, "connection"),
      re.isRequired(n, "logger"),
      re.isRequired(r, "protocol"),
      (this.serverTimeoutInMilliseconds = s ?? hp),
      (this.keepAliveIntervalInMilliseconds = i ?? pp),
      (this._statefulReconnectBufferSize = l ?? mp),
      (this._logger = n),
      (this._protocol = r),
      (this.connection = t),
      (this._reconnectPolicy = o),
      (this._handshakeProtocol = new up()),
      (this.connection.onreceive = (a) => this._processIncomingData(a)),
      (this.connection.onclose = (a) => this._connectionClosed(a)),
      (this._callbacks = {}),
      (this._methods = {}),
      (this._closedCallbacks = []),
      (this._reconnectingCallbacks = []),
      (this._reconnectedCallbacks = []),
      (this._invocationId = 0),
      (this._receivedHandshakeResponse = !1),
      (this._connectionState = Q.Disconnected),
      (this._connectionStarted = !1),
      (this._cachedPingMessage = this._protocol.writeMessage({
        type: L.Ping,
      })));
  }
  get state() {
    return this._connectionState;
  }
  get connectionId() {
    return (this.connection && this.connection.connectionId) || null;
  }
  get baseUrl() {
    return this.connection.baseUrl || "";
  }
  set baseUrl(t) {
    if (
      this._connectionState !== Q.Disconnected &&
      this._connectionState !== Q.Reconnecting
    )
      throw new Error(
        "The HubConnection must be in the Disconnected or Reconnecting state to change the url.",
      );
    if (!t) throw new Error("The HubConnection url must be a valid url.");
    this.connection.baseUrl = t;
  }
  start() {
    return (
      (this._startPromise = this._startWithStateTransitions()),
      this._startPromise
    );
  }
  async _startWithStateTransitions() {
    if (this._connectionState !== Q.Disconnected)
      return Promise.reject(
        new Error(
          "Cannot start a HubConnection that is not in the 'Disconnected' state.",
        ),
      );
    ((this._connectionState = Q.Connecting),
      this._logger.log(y.Debug, "Starting HubConnection."));
    try {
      (await this._startInternal(),
        X.isBrowser &&
          window.document.addEventListener("freeze", this._freezeEventListener),
        (this._connectionState = Q.Connected),
        (this._connectionStarted = !0),
        this._logger.log(y.Debug, "HubConnection connected successfully."));
    } catch (t) {
      return (
        (this._connectionState = Q.Disconnected),
        this._logger.log(
          y.Debug,
          `HubConnection failed to start successfully because of error '${t}'.`,
        ),
        Promise.reject(t)
      );
    }
  }
  async _startInternal() {
    ((this._stopDuringStartError = void 0),
      (this._receivedHandshakeResponse = !1));
    const t = new Promise((n, r) => {
      ((this._handshakeResolver = n), (this._handshakeRejecter = r));
    });
    await this.connection.start(this._protocol.transferFormat);
    try {
      let n = this._protocol.version;
      this.connection.features.reconnect || (n = 1);
      const r = { protocol: this._protocol.name, version: n };
      if (
        (this._logger.log(y.Debug, "Sending handshake request."),
        await this._sendMessage(
          this._handshakeProtocol.writeHandshakeRequest(r),
        ),
        this._logger.log(
          y.Information,
          `Using HubProtocol '${this._protocol.name}'.`,
        ),
        this._cleanupTimeout(),
        this._resetTimeoutPeriod(),
        this._resetKeepAliveInterval(),
        await t,
        this._stopDuringStartError)
      )
        throw this._stopDuringStartError;
      ((this.connection.features.reconnect || !1) &&
        ((this._messageBuffer = new dp(
          this._protocol,
          this.connection,
          this._statefulReconnectBufferSize,
        )),
        (this.connection.features.disconnected =
          this._messageBuffer._disconnected.bind(this._messageBuffer)),
        (this.connection.features.resend = () => {
          if (this._messageBuffer) return this._messageBuffer._resend();
        })),
        this.connection.features.inherentKeepAlive ||
          (await this._sendMessage(this._cachedPingMessage)));
    } catch (n) {
      throw (
        this._logger.log(
          y.Debug,
          `Hub handshake failed with error '${n}' during start(). Stopping HubConnection.`,
        ),
        this._cleanupTimeout(),
        this._cleanupPingTimer(),
        await this.connection.stop(n),
        n
      );
    }
  }
  async stop() {
    const t = this._startPromise;
    ((this.connection.features.reconnect = !1),
      (this._stopPromise = this._stopInternal()),
      await this._stopPromise);
    try {
      await t;
    } catch {}
  }
  _stopInternal(t) {
    if (this._connectionState === Q.Disconnected)
      return (
        this._logger.log(
          y.Debug,
          `Call to HubConnection.stop(${t}) ignored because it is already in the disconnected state.`,
        ),
        Promise.resolve()
      );
    if (this._connectionState === Q.Disconnecting)
      return (
        this._logger.log(
          y.Debug,
          `Call to HttpConnection.stop(${t}) ignored because the connection is already in the disconnecting state.`,
        ),
        this._stopPromise
      );
    const n = this._connectionState;
    return (
      (this._connectionState = Q.Disconnecting),
      this._logger.log(y.Debug, "Stopping HubConnection."),
      this._reconnectDelayHandle
        ? (this._logger.log(
            y.Debug,
            "Connection stopped during reconnect delay. Done reconnecting.",
          ),
          clearTimeout(this._reconnectDelayHandle),
          (this._reconnectDelayHandle = void 0),
          this._completeClose(),
          Promise.resolve())
        : (n === Q.Connected && this._sendCloseMessage(),
          this._cleanupTimeout(),
          this._cleanupPingTimer(),
          (this._stopDuringStartError =
            t ||
            new Xe(
              "The connection was stopped before the hub handshake could complete.",
            )),
          this.connection.stop(t))
    );
  }
  async _sendCloseMessage() {
    try {
      await this._sendWithProtocol(this._createCloseMessage());
    } catch {}
  }
  stream(t, ...n) {
    const [r, o] = this._replaceStreamingParams(n),
      s = this._createStreamInvocation(t, n, o);
    let i;
    const l = new cp();
    return (
      (l.cancelCallback = () => {
        const a = this._createCancelInvocation(s.invocationId);
        return (
          delete this._callbacks[s.invocationId],
          i.then(() => this._sendWithProtocol(a))
        );
      }),
      (this._callbacks[s.invocationId] = (a, c) => {
        if (c) {
          l.error(c);
          return;
        } else
          a &&
            (a.type === L.Completion
              ? a.error
                ? l.error(new Error(a.error))
                : l.complete()
              : l.next(a.item));
      }),
      (i = this._sendWithProtocol(s).catch((a) => {
        (l.error(a), delete this._callbacks[s.invocationId]);
      })),
      this._launchStreams(r, i),
      l
    );
  }
  _sendMessage(t) {
    return (this._resetKeepAliveInterval(), this.connection.send(t));
  }
  _sendWithProtocol(t) {
    return this._messageBuffer
      ? this._messageBuffer._send(t)
      : this._sendMessage(this._protocol.writeMessage(t));
  }
  send(t, ...n) {
    const [r, o] = this._replaceStreamingParams(n),
      s = this._sendWithProtocol(this._createInvocation(t, n, !0, o));
    return (this._launchStreams(r, s), s);
  }
  invoke(t, ...n) {
    const [r, o] = this._replaceStreamingParams(n),
      s = this._createInvocation(t, n, !1, o);
    return new Promise((l, a) => {
      this._callbacks[s.invocationId] = (p, g) => {
        if (g) {
          a(g);
          return;
        } else
          p &&
            (p.type === L.Completion
              ? p.error
                ? a(new Error(p.error))
                : l(p.result)
              : a(new Error(`Unexpected message type: ${p.type}`)));
      };
      const c = this._sendWithProtocol(s).catch((p) => {
        (a(p), delete this._callbacks[s.invocationId]);
      });
      this._launchStreams(r, c);
    });
  }
  on(t, n) {
    !t ||
      !n ||
      ((t = t.toLowerCase()),
      this._methods[t] || (this._methods[t] = []),
      this._methods[t].indexOf(n) === -1 && this._methods[t].push(n));
  }
  off(t, n) {
    if (!t) return;
    t = t.toLowerCase();
    const r = this._methods[t];
    if (r)
      if (n) {
        const o = r.indexOf(n);
        o !== -1 && (r.splice(o, 1), r.length === 0 && delete this._methods[t]);
      } else delete this._methods[t];
  }
  onclose(t) {
    t && this._closedCallbacks.push(t);
  }
  onreconnecting(t) {
    t && this._reconnectingCallbacks.push(t);
  }
  onreconnected(t) {
    t && this._reconnectedCallbacks.push(t);
  }
  _processIncomingData(t) {
    if (
      (this._cleanupTimeout(),
      this._receivedHandshakeResponse ||
        ((t = this._processHandshakeResponse(t)),
        (this._receivedHandshakeResponse = !0)),
      t)
    ) {
      const n = this._protocol.parseMessages(t, this._logger);
      for (const r of n)
        if (
          !(
            this._messageBuffer && !this._messageBuffer._shouldProcessMessage(r)
          )
        )
          switch (r.type) {
            case L.Invocation:
              this._invokeClientMethod(r).catch((o) => {
                this._logger.log(
                  y.Error,
                  `Invoke client method threw error: ${Es(o)}`,
                );
              });
              break;
            case L.StreamItem:
            case L.Completion: {
              const o = this._callbacks[r.invocationId];
              if (o) {
                r.type === L.Completion &&
                  delete this._callbacks[r.invocationId];
                try {
                  o(r);
                } catch (s) {
                  this._logger.log(
                    y.Error,
                    `Stream callback threw error: ${Es(s)}`,
                  );
                }
              }
              break;
            }
            case L.Ping:
              break;
            case L.Close: {
              this._logger.log(
                y.Information,
                "Close message received from server.",
              );
              const o = r.error
                ? new Error("Server returned an error on close: " + r.error)
                : void 0;
              r.allowReconnect === !0
                ? this.connection.stop(o)
                : (this._stopPromise = this._stopInternal(o));
              break;
            }
            case L.Ack:
              this._messageBuffer && this._messageBuffer._ack(r);
              break;
            case L.Sequence:
              this._messageBuffer && this._messageBuffer._resetSequence(r);
              break;
            default:
              this._logger.log(y.Warning, `Invalid message type: ${r.type}.`);
              break;
          }
    }
    this._resetTimeoutPeriod();
  }
  _processHandshakeResponse(t) {
    let n, r;
    try {
      [r, n] = this._handshakeProtocol.parseHandshakeResponse(t);
    } catch (o) {
      const s = "Error parsing handshake response: " + o;
      this._logger.log(y.Error, s);
      const i = new Error(s);
      throw (this._handshakeRejecter(i), i);
    }
    if (n.error) {
      const o = "Server returned handshake error: " + n.error;
      this._logger.log(y.Error, o);
      const s = new Error(o);
      throw (this._handshakeRejecter(s), s);
    } else this._logger.log(y.Debug, "Server handshake complete.");
    return (this._handshakeResolver(), r);
  }
  _resetKeepAliveInterval() {
    this.connection.features.inherentKeepAlive ||
      ((this._nextKeepAlive =
        new Date().getTime() + this.keepAliveIntervalInMilliseconds),
      this._cleanupPingTimer());
  }
  _resetTimeoutPeriod() {
    if (
      (!this.connection.features ||
        !this.connection.features.inherentKeepAlive) &&
      ((this._timeoutHandle = setTimeout(
        () => this.serverTimeout(),
        this.serverTimeoutInMilliseconds,
      )),
      this._pingServerHandle === void 0)
    ) {
      let t = this._nextKeepAlive - new Date().getTime();
      (t < 0 && (t = 0),
        (this._pingServerHandle = setTimeout(async () => {
          if (this._connectionState === Q.Connected)
            try {
              await this._sendMessage(this._cachedPingMessage);
            } catch {
              this._cleanupPingTimer();
            }
        }, t)));
    }
  }
  serverTimeout() {
    this.connection.stop(
      new Error(
        "Server timeout elapsed without receiving a message from the server.",
      ),
    );
  }
  async _invokeClientMethod(t) {
    const n = t.target.toLowerCase(),
      r = this._methods[n];
    if (!r) {
      (this._logger.log(
        y.Warning,
        `No client method with the name '${n}' found.`,
      ),
        t.invocationId &&
          (this._logger.log(
            y.Warning,
            `No result given for '${n}' method and invocation ID '${t.invocationId}'.`,
          ),
          await this._sendWithProtocol(
            this._createCompletionMessage(
              t.invocationId,
              "Client didn't provide a result.",
              null,
            ),
          )));
      return;
    }
    const o = r.slice(),
      s = !!t.invocationId;
    let i, l, a;
    for (const c of o)
      try {
        const p = i;
        ((i = await c.apply(this, t.arguments)),
          s &&
            i &&
            p &&
            (this._logger.log(
              y.Error,
              `Multiple results provided for '${n}'. Sending error to server.`,
            ),
            (a = this._createCompletionMessage(
              t.invocationId,
              "Client provided multiple results.",
              null,
            ))),
          (l = void 0));
      } catch (p) {
        ((l = p),
          this._logger.log(
            y.Error,
            `A callback for the method '${n}' threw error '${p}'.`,
          ));
      }
    a
      ? await this._sendWithProtocol(a)
      : s
        ? (l
            ? (a = this._createCompletionMessage(t.invocationId, `${l}`, null))
            : i !== void 0
              ? (a = this._createCompletionMessage(t.invocationId, null, i))
              : (this._logger.log(
                  y.Warning,
                  `No result given for '${n}' method and invocation ID '${t.invocationId}'.`,
                ),
                (a = this._createCompletionMessage(
                  t.invocationId,
                  "Client didn't provide a result.",
                  null,
                ))),
          await this._sendWithProtocol(a))
        : i &&
          this._logger.log(
            y.Error,
            `Result given for '${n}' method but server is not expecting a result.`,
          );
  }
  _connectionClosed(t) {
    (this._logger.log(
      y.Debug,
      `HubConnection.connectionClosed(${t}) called while in state ${this._connectionState}.`,
    ),
      (this._stopDuringStartError =
        this._stopDuringStartError ||
        t ||
        new Xe(
          "The underlying connection was closed before the hub handshake could complete.",
        )),
      this._handshakeResolver && this._handshakeResolver(),
      this._cancelCallbacksWithError(
        t ||
          new Error(
            "Invocation canceled due to the underlying connection being closed.",
          ),
      ),
      this._cleanupTimeout(),
      this._cleanupPingTimer(),
      this._connectionState === Q.Disconnecting
        ? this._completeClose(t)
        : this._connectionState === Q.Connected && this._reconnectPolicy
          ? this._reconnect(t)
          : this._connectionState === Q.Connected && this._completeClose(t));
  }
  _completeClose(t) {
    if (this._connectionStarted) {
      ((this._connectionState = Q.Disconnected),
        (this._connectionStarted = !1),
        this._messageBuffer &&
          (this._messageBuffer._dispose(t ?? new Error("Connection closed.")),
          (this._messageBuffer = void 0)),
        X.isBrowser &&
          window.document.removeEventListener(
            "freeze",
            this._freezeEventListener,
          ));
      try {
        this._closedCallbacks.forEach((n) => n.apply(this, [t]));
      } catch (n) {
        this._logger.log(
          y.Error,
          `An onclose callback called with error '${t}' threw error '${n}'.`,
        );
      }
    }
  }
  async _reconnect(t) {
    const n = Date.now();
    let r = 0,
      o =
        t !== void 0
          ? t
          : new Error("Attempting to reconnect due to a unknown error."),
      s = this._getNextRetryDelay(r++, 0, o);
    if (s === null) {
      (this._logger.log(
        y.Debug,
        "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt.",
      ),
        this._completeClose(t));
      return;
    }
    if (
      ((this._connectionState = Q.Reconnecting),
      t
        ? this._logger.log(
            y.Information,
            `Connection reconnecting because of error '${t}'.`,
          )
        : this._logger.log(y.Information, "Connection reconnecting."),
      this._reconnectingCallbacks.length !== 0)
    ) {
      try {
        this._reconnectingCallbacks.forEach((i) => i.apply(this, [t]));
      } catch (i) {
        this._logger.log(
          y.Error,
          `An onreconnecting callback called with error '${t}' threw error '${i}'.`,
        );
      }
      if (this._connectionState !== Q.Reconnecting) {
        this._logger.log(
          y.Debug,
          "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.",
        );
        return;
      }
    }
    for (; s !== null; ) {
      if (
        (this._logger.log(
          y.Information,
          `Reconnect attempt number ${r} will start in ${s} ms.`,
        ),
        await new Promise((i) => {
          this._reconnectDelayHandle = setTimeout(i, s);
        }),
        (this._reconnectDelayHandle = void 0),
        this._connectionState !== Q.Reconnecting)
      ) {
        this._logger.log(
          y.Debug,
          "Connection left the reconnecting state during reconnect delay. Done reconnecting.",
        );
        return;
      }
      try {
        if (
          (await this._startInternal(),
          (this._connectionState = Q.Connected),
          this._logger.log(
            y.Information,
            "HubConnection reconnected successfully.",
          ),
          this._reconnectedCallbacks.length !== 0)
        )
          try {
            this._reconnectedCallbacks.forEach((i) =>
              i.apply(this, [this.connection.connectionId]),
            );
          } catch (i) {
            this._logger.log(
              y.Error,
              `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${i}'.`,
            );
          }
        return;
      } catch (i) {
        if (
          (this._logger.log(
            y.Information,
            `Reconnect attempt failed because of error '${i}'.`,
          ),
          this._connectionState !== Q.Reconnecting)
        ) {
          (this._logger.log(
            y.Debug,
            `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`,
          ),
            this._connectionState === Q.Disconnecting && this._completeClose());
          return;
        }
        ((o = i instanceof Error ? i : new Error(i.toString())),
          (s = this._getNextRetryDelay(r++, Date.now() - n, o)));
      }
    }
    (this._logger.log(
      y.Information,
      `Reconnect retries have been exhausted after ${Date.now() - n} ms and ${r} failed attempts. Connection disconnecting.`,
    ),
      this._completeClose());
  }
  _getNextRetryDelay(t, n, r) {
    try {
      return this._reconnectPolicy.nextRetryDelayInMilliseconds({
        elapsedMilliseconds: n,
        previousRetryCount: t,
        retryReason: r,
      });
    } catch (o) {
      return (
        this._logger.log(
          y.Error,
          `IRetryPolicy.nextRetryDelayInMilliseconds(${t}, ${n}) threw error '${o}'.`,
        ),
        null
      );
    }
  }
  _cancelCallbacksWithError(t) {
    const n = this._callbacks;
    ((this._callbacks = {}),
      Object.keys(n).forEach((r) => {
        const o = n[r];
        try {
          o(null, t);
        } catch (s) {
          this._logger.log(
            y.Error,
            `Stream 'error' callback called with '${t}' threw error: ${Es(s)}`,
          );
        }
      }));
  }
  _cleanupPingTimer() {
    this._pingServerHandle &&
      (clearTimeout(this._pingServerHandle), (this._pingServerHandle = void 0));
  }
  _cleanupTimeout() {
    this._timeoutHandle && clearTimeout(this._timeoutHandle);
  }
  _createInvocation(t, n, r, o) {
    if (r)
      return o.length !== 0
        ? { arguments: n, streamIds: o, target: t, type: L.Invocation }
        : { arguments: n, target: t, type: L.Invocation };
    {
      const s = this._invocationId;
      return (
        this._invocationId++,
        o.length !== 0
          ? {
              arguments: n,
              invocationId: s.toString(),
              streamIds: o,
              target: t,
              type: L.Invocation,
            }
          : {
              arguments: n,
              invocationId: s.toString(),
              target: t,
              type: L.Invocation,
            }
      );
    }
  }
  _launchStreams(t, n) {
    if (t.length !== 0) {
      n || (n = Promise.resolve());
      for (const r in t)
        t[r].subscribe({
          complete: () => {
            n = n.then(() =>
              this._sendWithProtocol(this._createCompletionMessage(r)),
            );
          },
          error: (o) => {
            let s;
            (o instanceof Error
              ? (s = o.message)
              : o && o.toString
                ? (s = o.toString())
                : (s = "Unknown error"),
              (n = n.then(() =>
                this._sendWithProtocol(this._createCompletionMessage(r, s)),
              )));
          },
          next: (o) => {
            n = n.then(() =>
              this._sendWithProtocol(this._createStreamItemMessage(r, o)),
            );
          },
        });
    }
  }
  _replaceStreamingParams(t) {
    const n = [],
      r = [];
    for (let o = 0; o < t.length; o++) {
      const s = t[o];
      if (this._isObservable(s)) {
        const i = this._invocationId;
        (this._invocationId++,
          (n[i] = s),
          r.push(i.toString()),
          t.splice(o, 1));
      }
    }
    return [n, r];
  }
  _isObservable(t) {
    return t && t.subscribe && typeof t.subscribe == "function";
  }
  _createStreamInvocation(t, n, r) {
    const o = this._invocationId;
    return (
      this._invocationId++,
      r.length !== 0
        ? {
            arguments: n,
            invocationId: o.toString(),
            streamIds: r,
            target: t,
            type: L.StreamInvocation,
          }
        : {
            arguments: n,
            invocationId: o.toString(),
            target: t,
            type: L.StreamInvocation,
          }
    );
  }
  _createCancelInvocation(t) {
    return { invocationId: t, type: L.CancelInvocation };
  }
  _createStreamItemMessage(t, n) {
    return { invocationId: t, item: n, type: L.StreamItem };
  }
  _createCompletionMessage(t, n, r) {
    return n
      ? { error: n, invocationId: t, type: L.Completion }
      : { invocationId: t, result: r, type: L.Completion };
  }
  _createCloseMessage() {
    return { type: L.Close };
  }
}
const gp = [0, 2e3, 1e4, 3e4, null];
class Pa {
  constructor(t) {
    this._retryDelays = t !== void 0 ? [...t, null] : gp;
  }
  nextRetryDelayInMilliseconds(t) {
    return this._retryDelays[t.previousRetryCount];
  }
}
class Xt {}
Xt.Authorization = "Authorization";
Xt.Cookie = "Cookie";
class yp extends Yo {
  constructor(t, n) {
    (super(), (this._innerClient = t), (this._accessTokenFactory = n));
  }
  async send(t) {
    let n = !0;
    (this._accessTokenFactory &&
      (!this._accessToken || (t.url && t.url.indexOf("/negotiate?") > 0)) &&
      ((n = !1), (this._accessToken = await this._accessTokenFactory())),
      this._setAuthorizationHeader(t));
    const r = await this._innerClient.send(t);
    return n && r.statusCode === 401 && this._accessTokenFactory
      ? ((this._accessToken = await this._accessTokenFactory()),
        this._setAuthorizationHeader(t),
        await this._innerClient.send(t))
      : r;
  }
  _setAuthorizationHeader(t) {
    (t.headers || (t.headers = {}),
      this._accessToken
        ? (t.headers[Xt.Authorization] = `Bearer ${this._accessToken}`)
        : this._accessTokenFactory &&
          t.headers[Xt.Authorization] &&
          delete t.headers[Xt.Authorization]);
  }
  getCookieString(t) {
    return this._innerClient.getCookieString(t);
  }
}
var ie;
(function (e) {
  ((e[(e.None = 0)] = "None"),
    (e[(e.WebSockets = 1)] = "WebSockets"),
    (e[(e.ServerSentEvents = 2)] = "ServerSentEvents"),
    (e[(e.LongPolling = 4)] = "LongPolling"));
})(ie || (ie = {}));
var we;
(function (e) {
  ((e[(e.Text = 1)] = "Text"), (e[(e.Binary = 2)] = "Binary"));
})(we || (we = {}));
let vp = class {
  constructor() {
    ((this._isAborted = !1), (this.onabort = null));
  }
  abort() {
    this._isAborted || ((this._isAborted = !0), this.onabort && this.onabort());
  }
  get signal() {
    return this;
  }
  get aborted() {
    return this._isAborted;
  }
};
class Da {
  get pollAborted() {
    return this._pollAbort.aborted;
  }
  constructor(t, n, r) {
    ((this._httpClient = t),
      (this._logger = n),
      (this._pollAbort = new vp()),
      (this._options = r),
      (this._running = !1),
      (this.onreceive = null),
      (this.onclose = null));
  }
  async connect(t, n) {
    if (
      (re.isRequired(t, "url"),
      re.isRequired(n, "transferFormat"),
      re.isIn(n, we, "transferFormat"),
      (this._url = t),
      this._logger.log(y.Trace, "(LongPolling transport) Connecting."),
      n === we.Binary &&
        typeof XMLHttpRequest < "u" &&
        typeof new XMLHttpRequest().responseType != "string")
    )
      throw new Error(
        "Binary protocols over XmlHttpRequest not implementing advanced features are not supported.",
      );
    const [r, o] = Mn(),
      s = { [r]: o, ...this._options.headers },
      i = {
        abortSignal: this._pollAbort.signal,
        headers: s,
        timeout: 1e5,
        withCredentials: this._options.withCredentials,
      };
    n === we.Binary && (i.responseType = "arraybuffer");
    const l = `${t}&_=${Date.now()}`;
    this._logger.log(y.Trace, `(LongPolling transport) polling: ${l}.`);
    const a = await this._httpClient.get(l, i);
    (a.statusCode !== 200
      ? (this._logger.log(
          y.Error,
          `(LongPolling transport) Unexpected response code: ${a.statusCode}.`,
        ),
        (this._closeError = new qt(a.statusText || "", a.statusCode)),
        (this._running = !1))
      : (this._running = !0),
      (this._receiving = this._poll(this._url, i)));
  }
  async _poll(t, n) {
    try {
      for (; this._running; )
        try {
          const r = `${t}&_=${Date.now()}`;
          this._logger.log(y.Trace, `(LongPolling transport) polling: ${r}.`);
          const o = await this._httpClient.get(r, n);
          o.statusCode === 204
            ? (this._logger.log(
                y.Information,
                "(LongPolling transport) Poll terminated by server.",
              ),
              (this._running = !1))
            : o.statusCode !== 200
              ? (this._logger.log(
                  y.Error,
                  `(LongPolling transport) Unexpected response code: ${o.statusCode}.`,
                ),
                (this._closeError = new qt(o.statusText || "", o.statusCode)),
                (this._running = !1))
              : o.content
                ? (this._logger.log(
                    y.Trace,
                    `(LongPolling transport) data received. ${Er(o.content, this._options.logMessageContent)}.`,
                  ),
                  this.onreceive && this.onreceive(o.content))
                : this._logger.log(
                    y.Trace,
                    "(LongPolling transport) Poll timed out, reissuing.",
                  );
        } catch (r) {
          this._running
            ? r instanceof ml
              ? this._logger.log(
                  y.Trace,
                  "(LongPolling transport) Poll timed out, reissuing.",
                )
              : ((this._closeError = r), (this._running = !1))
            : this._logger.log(
                y.Trace,
                `(LongPolling transport) Poll errored after shutdown: ${r.message}`,
              );
        }
    } finally {
      (this._logger.log(y.Trace, "(LongPolling transport) Polling complete."),
        this.pollAborted || this._raiseOnClose());
    }
  }
  async send(t) {
    return this._running
      ? Yc(
          this._logger,
          "LongPolling",
          this._httpClient,
          this._url,
          t,
          this._options,
        )
      : Promise.reject(
          new Error("Cannot send until the transport is connected"),
        );
  }
  async stop() {
    (this._logger.log(y.Trace, "(LongPolling transport) Stopping polling."),
      (this._running = !1),
      this._pollAbort.abort());
    try {
      (await this._receiving,
        this._logger.log(
          y.Trace,
          `(LongPolling transport) sending DELETE request to ${this._url}.`,
        ));
      const t = {},
        [n, r] = Mn();
      t[n] = r;
      const o = {
        headers: { ...t, ...this._options.headers },
        timeout: this._options.timeout,
        withCredentials: this._options.withCredentials,
      };
      let s;
      try {
        await this._httpClient.delete(this._url, o);
      } catch (i) {
        s = i;
      }
      s
        ? s instanceof qt &&
          (s.statusCode === 404
            ? this._logger.log(
                y.Trace,
                "(LongPolling transport) A 404 response was returned from sending a DELETE request.",
              )
            : this._logger.log(
                y.Trace,
                `(LongPolling transport) Error sending a DELETE request: ${s}`,
              ))
        : this._logger.log(
            y.Trace,
            "(LongPolling transport) DELETE request accepted.",
          );
    } finally {
      (this._logger.log(y.Trace, "(LongPolling transport) Stop finished."),
        this._raiseOnClose());
    }
  }
  _raiseOnClose() {
    if (this.onclose) {
      let t = "(LongPolling transport) Firing onclose event.";
      (this._closeError && (t += " Error: " + this._closeError),
        this._logger.log(y.Trace, t),
        this.onclose(this._closeError));
    }
  }
}
class wp {
  constructor(t, n, r, o) {
    ((this._httpClient = t),
      (this._accessToken = n),
      (this._logger = r),
      (this._options = o),
      (this.onreceive = null),
      (this.onclose = null));
  }
  async connect(t, n) {
    return (
      re.isRequired(t, "url"),
      re.isRequired(n, "transferFormat"),
      re.isIn(n, we, "transferFormat"),
      this._logger.log(y.Trace, "(SSE transport) Connecting."),
      (this._url = t),
      this._accessToken &&
        (t +=
          (t.indexOf("?") < 0 ? "?" : "&") +
          `access_token=${encodeURIComponent(this._accessToken)}`),
      new Promise((r, o) => {
        let s = !1;
        if (n !== we.Text) {
          o(
            new Error(
              "The Server-Sent Events transport only supports the 'Text' transfer format",
            ),
          );
          return;
        }
        let i;
        if (X.isBrowser || X.isWebWorker)
          i = new this._options.EventSource(t, {
            withCredentials: this._options.withCredentials,
          });
        else {
          const l = this._httpClient.getCookieString(t),
            a = {};
          a.Cookie = l;
          const [c, p] = Mn();
          ((a[c] = p),
            (i = new this._options.EventSource(t, {
              withCredentials: this._options.withCredentials,
              headers: { ...a, ...this._options.headers },
            })));
        }
        try {
          ((i.onmessage = (l) => {
            if (this.onreceive)
              try {
                (this._logger.log(
                  y.Trace,
                  `(SSE transport) data received. ${Er(l.data, this._options.logMessageContent)}.`,
                ),
                  this.onreceive(l.data));
              } catch (a) {
                this._close(a);
                return;
              }
          }),
            (i.onerror = (l) => {
              s
                ? this._close()
                : o(
                    new Error(
                      "EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled.",
                    ),
                  );
            }),
            (i.onopen = () => {
              (this._logger.log(y.Information, `SSE connected to ${this._url}`),
                (this._eventSource = i),
                (s = !0),
                r());
            }));
        } catch (l) {
          o(l);
          return;
        }
      })
    );
  }
  async send(t) {
    return this._eventSource
      ? Yc(this._logger, "SSE", this._httpClient, this._url, t, this._options)
      : Promise.reject(
          new Error("Cannot send until the transport is connected"),
        );
  }
  stop() {
    return (this._close(), Promise.resolve());
  }
  _close(t) {
    this._eventSource &&
      (this._eventSource.close(),
      (this._eventSource = void 0),
      this.onclose && this.onclose(t));
  }
}
class _p {
  constructor(t, n, r, o, s, i) {
    ((this._logger = r),
      (this._accessTokenFactory = n),
      (this._logMessageContent = o),
      (this._webSocketConstructor = s),
      (this._httpClient = t),
      (this.onreceive = null),
      (this.onclose = null),
      (this._headers = i));
  }
  async connect(t, n) {
    (re.isRequired(t, "url"),
      re.isRequired(n, "transferFormat"),
      re.isIn(n, we, "transferFormat"),
      this._logger.log(y.Trace, "(WebSockets transport) Connecting."));
    let r;
    return (
      this._accessTokenFactory && (r = await this._accessTokenFactory()),
      new Promise((o, s) => {
        t = t.replace(/^http/, "ws");
        let i;
        const l = this._httpClient.getCookieString(t);
        let a = !1;
        if (X.isNode || X.isReactNative) {
          const c = {},
            [p, g] = Mn();
          ((c[p] = g),
            r && (c[Xt.Authorization] = `Bearer ${r}`),
            l && (c[Xt.Cookie] = l),
            (i = new this._webSocketConstructor(t, void 0, {
              headers: { ...c, ...this._headers },
            })));
        } else
          r &&
            (t +=
              (t.indexOf("?") < 0 ? "?" : "&") +
              `access_token=${encodeURIComponent(r)}`);
        (i || (i = new this._webSocketConstructor(t)),
          n === we.Binary && (i.binaryType = "arraybuffer"),
          (i.onopen = (c) => {
            (this._logger.log(y.Information, `WebSocket connected to ${t}.`),
              (this._webSocket = i),
              (a = !0),
              o());
          }),
          (i.onerror = (c) => {
            let p = null;
            (typeof ErrorEvent < "u" && c instanceof ErrorEvent
              ? (p = c.error)
              : (p = "There was an error with the transport"),
              this._logger.log(y.Information, `(WebSockets transport) ${p}.`));
          }),
          (i.onmessage = (c) => {
            if (
              (this._logger.log(
                y.Trace,
                `(WebSockets transport) data received. ${Er(c.data, this._logMessageContent)}.`,
              ),
              this.onreceive)
            )
              try {
                this.onreceive(c.data);
              } catch (p) {
                this._close(p);
                return;
              }
          }),
          (i.onclose = (c) => {
            if (a) this._close(c);
            else {
              let p = null;
              (typeof ErrorEvent < "u" && c instanceof ErrorEvent
                ? (p = c.error)
                : (p =
                    "WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled."),
                s(new Error(p)));
            }
          }));
      })
    );
  }
  send(t) {
    return this._webSocket &&
      this._webSocket.readyState === this._webSocketConstructor.OPEN
      ? (this._logger.log(
          y.Trace,
          `(WebSockets transport) sending data. ${Er(t, this._logMessageContent)}.`,
        ),
        this._webSocket.send(t),
        Promise.resolve())
      : Promise.reject("WebSocket is not in the OPEN state");
  }
  stop() {
    return (this._webSocket && this._close(void 0), Promise.resolve());
  }
  _close(t) {
    (this._webSocket &&
      ((this._webSocket.onclose = () => {}),
      (this._webSocket.onmessage = () => {}),
      (this._webSocket.onerror = () => {}),
      this._webSocket.close(),
      (this._webSocket = void 0)),
      this._logger.log(y.Trace, "(WebSockets transport) socket closed."),
      this.onclose &&
        (this._isCloseEvent(t) && (t.wasClean === !1 || t.code !== 1e3)
          ? this.onclose(
              new Error(
                `WebSocket closed with status code: ${t.code} (${t.reason || "no reason given"}).`,
              ),
            )
          : t instanceof Error
            ? this.onclose(t)
            : this.onclose()));
  }
  _isCloseEvent(t) {
    return t && typeof t.wasClean == "boolean" && typeof t.code == "number";
  }
}
const Ra = 100;
class xp {
  constructor(t, n = {}) {
    if (
      ((this._stopPromiseResolver = () => {}),
      (this.features = {}),
      (this._negotiateVersion = 1),
      re.isRequired(t, "url"),
      (this._logger = Zh(n.logger)),
      (this.baseUrl = this._resolveUrl(t)),
      (n = n || {}),
      (n.logMessageContent =
        n.logMessageContent === void 0 ? !1 : n.logMessageContent),
      typeof n.withCredentials == "boolean" || n.withCredentials === void 0)
    )
      n.withCredentials = n.withCredentials === void 0 ? !0 : n.withCredentials;
    else
      throw new Error(
        "withCredentials option was not a 'boolean' or 'undefined' value",
      );
    n.timeout = n.timeout === void 0 ? 100 * 1e3 : n.timeout;
    let r = null,
      o = null;
    if (X.isNode && typeof require < "u") {
      const s =
        typeof __webpack_require__ == "function"
          ? __non_webpack_require__
          : require;
      ((r = s("ws")), (o = s("eventsource")));
    }
    (!X.isNode && typeof WebSocket < "u" && !n.WebSocket
      ? (n.WebSocket = WebSocket)
      : X.isNode && !n.WebSocket && r && (n.WebSocket = r),
      !X.isNode && typeof EventSource < "u" && !n.EventSource
        ? (n.EventSource = EventSource)
        : X.isNode && !n.EventSource && typeof o < "u" && (n.EventSource = o),
      (this._httpClient = new yp(
        n.httpClient || new ap(this._logger),
        n.accessTokenFactory,
      )),
      (this._connectionState = "Disconnected"),
      (this._connectionStarted = !1),
      (this._options = n),
      (this.onreceive = null),
      (this.onclose = null));
  }
  async start(t) {
    if (
      ((t = t || we.Binary),
      re.isIn(t, we, "transferFormat"),
      this._logger.log(
        y.Debug,
        `Starting connection with transfer format '${we[t]}'.`,
      ),
      this._connectionState !== "Disconnected")
    )
      return Promise.reject(
        new Error(
          "Cannot start an HttpConnection that is not in the 'Disconnected' state.",
        ),
      );
    if (
      ((this._connectionState = "Connecting"),
      (this._startInternalPromise = this._startInternal(t)),
      await this._startInternalPromise,
      this._connectionState === "Disconnecting")
    ) {
      const n = "Failed to start the HttpConnection before stop() was called.";
      return (
        this._logger.log(y.Error, n),
        await this._stopPromise,
        Promise.reject(new Xe(n))
      );
    } else if (this._connectionState !== "Connected") {
      const n =
        "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
      return (this._logger.log(y.Error, n), Promise.reject(new Xe(n)));
    }
    this._connectionStarted = !0;
  }
  send(t) {
    return this._connectionState !== "Connected"
      ? Promise.reject(
          new Error(
            "Cannot send data if the connection is not in the 'Connected' State.",
          ),
        )
      : (this._sendQueue || (this._sendQueue = new yl(this.transport)),
        this._sendQueue.send(t));
  }
  async stop(t) {
    if (this._connectionState === "Disconnected")
      return (
        this._logger.log(
          y.Debug,
          `Call to HttpConnection.stop(${t}) ignored because the connection is already in the disconnected state.`,
        ),
        Promise.resolve()
      );
    if (this._connectionState === "Disconnecting")
      return (
        this._logger.log(
          y.Debug,
          `Call to HttpConnection.stop(${t}) ignored because the connection is already in the disconnecting state.`,
        ),
        this._stopPromise
      );
    ((this._connectionState = "Disconnecting"),
      (this._stopPromise = new Promise((n) => {
        this._stopPromiseResolver = n;
      })),
      await this._stopInternal(t),
      await this._stopPromise);
  }
  async _stopInternal(t) {
    this._stopError = t;
    try {
      await this._startInternalPromise;
    } catch {}
    if (this.transport) {
      try {
        await this.transport.stop();
      } catch (n) {
        (this._logger.log(
          y.Error,
          `HttpConnection.transport.stop() threw error '${n}'.`,
        ),
          this._stopConnection());
      }
      this.transport = void 0;
    } else
      this._logger.log(
        y.Debug,
        "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.",
      );
  }
  async _startInternal(t) {
    let n = this.baseUrl;
    ((this._accessTokenFactory = this._options.accessTokenFactory),
      (this._httpClient._accessTokenFactory = this._accessTokenFactory));
    try {
      if (this._options.skipNegotiation)
        if (this._options.transport === ie.WebSockets)
          ((this.transport = this._constructTransport(ie.WebSockets)),
            await this._startTransport(n, t));
        else
          throw new Error(
            "Negotiation can only be skipped when using the WebSocket transport directly.",
          );
      else {
        let r = null,
          o = 0;
        do {
          if (
            ((r = await this._getNegotiationResponse(n)),
            this._connectionState === "Disconnecting" ||
              this._connectionState === "Disconnected")
          )
            throw new Xe("The connection was stopped during negotiation.");
          if (r.error) throw new Error(r.error);
          if (r.ProtocolVersion)
            throw new Error(
              "Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.",
            );
          if ((r.url && (n = r.url), r.accessToken)) {
            const s = r.accessToken;
            ((this._accessTokenFactory = () => s),
              (this._httpClient._accessToken = s),
              (this._httpClient._accessTokenFactory = void 0));
          }
          o++;
        } while (r.url && o < Ra);
        if (o === Ra && r.url)
          throw new Error("Negotiate redirection limit exceeded.");
        await this._createTransport(n, this._options.transport, r, t);
      }
      (this.transport instanceof Da && (this.features.inherentKeepAlive = !0),
        this._connectionState === "Connecting" &&
          (this._logger.log(
            y.Debug,
            "The HttpConnection connected successfully.",
          ),
          (this._connectionState = "Connected")));
    } catch (r) {
      return (
        this._logger.log(y.Error, "Failed to start the connection: " + r),
        (this._connectionState = "Disconnected"),
        (this.transport = void 0),
        this._stopPromiseResolver(),
        Promise.reject(r)
      );
    }
  }
  async _getNegotiationResponse(t) {
    const n = {},
      [r, o] = Mn();
    n[r] = o;
    const s = this._resolveNegotiateUrl(t);
    this._logger.log(y.Debug, `Sending negotiation request: ${s}.`);
    try {
      const i = await this._httpClient.post(s, {
        content: "",
        headers: { ...n, ...this._options.headers },
        timeout: this._options.timeout,
        withCredentials: this._options.withCredentials,
      });
      if (i.statusCode !== 200)
        return Promise.reject(
          new Error(
            `Unexpected status code returned from negotiate '${i.statusCode}'`,
          ),
        );
      const l = JSON.parse(i.content);
      return (
        (!l.negotiateVersion || l.negotiateVersion < 1) &&
          (l.connectionToken = l.connectionId),
        l.useStatefulReconnect && this._options._useStatefulReconnect !== !0
          ? Promise.reject(
              new Ia(
                "Client didn't negotiate Stateful Reconnect but the server did.",
              ),
            )
          : l
      );
    } catch (i) {
      let l = "Failed to complete negotiation with the server: " + i;
      return (
        i instanceof qt &&
          i.statusCode === 404 &&
          (l =
            l +
            " Either this is not a SignalR endpoint or there is a proxy blocking the connection."),
        this._logger.log(y.Error, l),
        Promise.reject(new Ia(l))
      );
    }
  }
  _createConnectUrl(t, n) {
    return n ? t + (t.indexOf("?") === -1 ? "?" : "&") + `id=${n}` : t;
  }
  async _createTransport(t, n, r, o) {
    let s = this._createConnectUrl(t, r.connectionToken);
    if (this._isITransport(n)) {
      (this._logger.log(
        y.Debug,
        "Connection was provided an instance of ITransport, using that directly.",
      ),
        (this.transport = n),
        await this._startTransport(s, o),
        (this.connectionId = r.connectionId));
      return;
    }
    const i = [],
      l = r.availableTransports || [];
    let a = r;
    for (const c of l) {
      const p = this._resolveTransportOrError(
        c,
        n,
        o,
        (a == null ? void 0 : a.useStatefulReconnect) === !0,
      );
      if (p instanceof Error) (i.push(`${c.transport} failed:`), i.push(p));
      else if (this._isITransport(p)) {
        if (((this.transport = p), !a)) {
          try {
            a = await this._getNegotiationResponse(t);
          } catch (g) {
            return Promise.reject(g);
          }
          s = this._createConnectUrl(t, a.connectionToken);
        }
        try {
          (await this._startTransport(s, o),
            (this.connectionId = a.connectionId));
          return;
        } catch (g) {
          if (
            (this._logger.log(
              y.Error,
              `Failed to start the transport '${c.transport}': ${g}`,
            ),
            (a = void 0),
            i.push(new qh(`${c.transport} failed: ${g}`, ie[c.transport])),
            this._connectionState !== "Connecting")
          ) {
            const m = "Failed to select transport before stop() was called.";
            return (this._logger.log(y.Debug, m), Promise.reject(new Xe(m)));
          }
        }
      }
    }
    return i.length > 0
      ? Promise.reject(
          new Xh(
            `Unable to connect to the server with any of the available transports. ${i.join(" ")}`,
            i,
          ),
        )
      : Promise.reject(
          new Error(
            "None of the transports supported by the client are supported by the server.",
          ),
        );
  }
  _constructTransport(t) {
    switch (t) {
      case ie.WebSockets:
        if (!this._options.WebSocket)
          throw new Error("'WebSocket' is not supported in your environment.");
        return new _p(
          this._httpClient,
          this._accessTokenFactory,
          this._logger,
          this._options.logMessageContent,
          this._options.WebSocket,
          this._options.headers || {},
        );
      case ie.ServerSentEvents:
        if (!this._options.EventSource)
          throw new Error(
            "'EventSource' is not supported in your environment.",
          );
        return new wp(
          this._httpClient,
          this._httpClient._accessToken,
          this._logger,
          this._options,
        );
      case ie.LongPolling:
        return new Da(this._httpClient, this._logger, this._options);
      default:
        throw new Error(`Unknown transport: ${t}.`);
    }
  }
  _startTransport(t, n) {
    return (
      (this.transport.onreceive = this.onreceive),
      this.features.reconnect
        ? (this.transport.onclose = async (r) => {
            let o = !1;
            if (this.features.reconnect)
              try {
                (this.features.disconnected(),
                  await this.transport.connect(t, n),
                  await this.features.resend());
              } catch {
                o = !0;
              }
            else {
              this._stopConnection(r);
              return;
            }
            o && this._stopConnection(r);
          })
        : (this.transport.onclose = (r) => this._stopConnection(r)),
      this.transport.connect(t, n)
    );
  }
  _resolveTransportOrError(t, n, r, o) {
    const s = ie[t.transport];
    if (s == null)
      return (
        this._logger.log(
          y.Debug,
          `Skipping transport '${t.transport}' because it is not supported by this client.`,
        ),
        new Error(
          `Skipping transport '${t.transport}' because it is not supported by this client.`,
        )
      );
    if (Sp(n, s))
      if (t.transferFormats.map((l) => we[l]).indexOf(r) >= 0) {
        if (
          (s === ie.WebSockets && !this._options.WebSocket) ||
          (s === ie.ServerSentEvents && !this._options.EventSource)
        )
          return (
            this._logger.log(
              y.Debug,
              `Skipping transport '${ie[s]}' because it is not supported in your environment.'`,
            ),
            new Kh(`'${ie[s]}' is not supported in your environment.`, s)
          );
        this._logger.log(y.Debug, `Selecting transport '${ie[s]}'.`);
        try {
          return (
            (this.features.reconnect = s === ie.WebSockets ? o : void 0),
            this._constructTransport(s)
          );
        } catch (l) {
          return l;
        }
      } else
        return (
          this._logger.log(
            y.Debug,
            `Skipping transport '${ie[s]}' because it does not support the requested transfer format '${we[r]}'.`,
          ),
          new Error(`'${ie[s]}' does not support ${we[r]}.`)
        );
    else
      return (
        this._logger.log(
          y.Debug,
          `Skipping transport '${ie[s]}' because it was disabled by the client.`,
        ),
        new Gh(`'${ie[s]}' is disabled by the client.`, s)
      );
  }
  _isITransport(t) {
    return t && typeof t == "object" && "connect" in t;
  }
  _stopConnection(t) {
    if (
      (this._logger.log(
        y.Debug,
        `HttpConnection.stopConnection(${t}) called while in state ${this._connectionState}.`,
      ),
      (this.transport = void 0),
      (t = this._stopError || t),
      (this._stopError = void 0),
      this._connectionState === "Disconnected")
    ) {
      this._logger.log(
        y.Debug,
        `Call to HttpConnection.stopConnection(${t}) was ignored because the connection is already in the disconnected state.`,
      );
      return;
    }
    if (this._connectionState === "Connecting")
      throw (
        this._logger.log(
          y.Warning,
          `Call to HttpConnection.stopConnection(${t}) was ignored because the connection is still in the connecting state.`,
        ),
        new Error(
          `HttpConnection.stopConnection(${t}) was called while the connection is still in the connecting state.`,
        )
      );
    if (
      (this._connectionState === "Disconnecting" && this._stopPromiseResolver(),
      t
        ? this._logger.log(
            y.Error,
            `Connection disconnected with error '${t}'.`,
          )
        : this._logger.log(y.Information, "Connection disconnected."),
      this._sendQueue &&
        (this._sendQueue.stop().catch((n) => {
          this._logger.log(
            y.Error,
            `TransportSendQueue.stop() threw error '${n}'.`,
          );
        }),
        (this._sendQueue = void 0)),
      (this.connectionId = void 0),
      (this._connectionState = "Disconnected"),
      this._connectionStarted)
    ) {
      this._connectionStarted = !1;
      try {
        this.onclose && this.onclose(t);
      } catch (n) {
        this._logger.log(
          y.Error,
          `HttpConnection.onclose(${t}) threw error '${n}'.`,
        );
      }
    }
  }
  _resolveUrl(t) {
    if (t.lastIndexOf("https://", 0) === 0 || t.lastIndexOf("http://", 0) === 0)
      return t;
    if (!X.isBrowser) throw new Error(`Cannot resolve '${t}'.`);
    const n = window.document.createElement("a");
    return (
      (n.href = t),
      this._logger.log(y.Information, `Normalizing '${t}' to '${n.href}'.`),
      n.href
    );
  }
  _resolveNegotiateUrl(t) {
    const n = new URL(t);
    n.pathname.endsWith("/")
      ? (n.pathname += "negotiate")
      : (n.pathname += "/negotiate");
    const r = new URLSearchParams(n.searchParams);
    return (
      r.has("negotiateVersion") ||
        r.append("negotiateVersion", this._negotiateVersion.toString()),
      r.has("useStatefulReconnect")
        ? r.get("useStatefulReconnect") === "true" &&
          (this._options._useStatefulReconnect = !0)
        : this._options._useStatefulReconnect === !0 &&
          r.append("useStatefulReconnect", "true"),
      (n.search = r.toString()),
      n.toString()
    );
  }
}
function Sp(e, t) {
  return !e || (t & e) !== 0;
}
class yl {
  constructor(t) {
    ((this._transport = t),
      (this._buffer = []),
      (this._executing = !0),
      (this._sendBufferedData = new qr()),
      (this._transportResult = new qr()),
      (this._sendLoopPromise = this._sendLoop()));
  }
  send(t) {
    return (
      this._bufferData(t),
      this._transportResult || (this._transportResult = new qr()),
      this._transportResult.promise
    );
  }
  stop() {
    return (
      (this._executing = !1),
      this._sendBufferedData.resolve(),
      this._sendLoopPromise
    );
  }
  _bufferData(t) {
    if (this._buffer.length && typeof this._buffer[0] != typeof t)
      throw new Error(
        `Expected data to be of type ${typeof this._buffer} but was of type ${typeof t}`,
      );
    (this._buffer.push(t), this._sendBufferedData.resolve());
  }
  async _sendLoop() {
    for (;;) {
      if ((await this._sendBufferedData.promise, !this._executing)) {
        this._transportResult &&
          this._transportResult.reject("Connection stopped.");
        break;
      }
      this._sendBufferedData = new qr();
      const t = this._transportResult;
      this._transportResult = void 0;
      const n =
        typeof this._buffer[0] == "string"
          ? this._buffer.join("")
          : yl._concatBuffers(this._buffer);
      this._buffer.length = 0;
      try {
        (await this._transport.send(n), t.resolve());
      } catch (r) {
        t.reject(r);
      }
    }
  }
  static _concatBuffers(t) {
    const n = t.map((s) => s.byteLength).reduce((s, i) => s + i),
      r = new Uint8Array(n);
    let o = 0;
    for (const s of t) (r.set(new Uint8Array(s), o), (o += s.byteLength));
    return r.buffer;
  }
}
class qr {
  constructor() {
    this.promise = new Promise(
      (t, n) => ([this._resolver, this._rejecter] = [t, n]),
    );
  }
  resolve() {
    this._resolver();
  }
  reject(t) {
    this._rejecter(t);
  }
}
const kp = "json";
class Cp {
  constructor() {
    ((this.name = kp), (this.version = 2), (this.transferFormat = we.Text));
  }
  parseMessages(t, n) {
    if (typeof t != "string")
      throw new Error(
        "Invalid input for JSON hub protocol. Expected a string.",
      );
    if (!t) return [];
    n === null && (n = Cr.instance);
    const r = Le.parse(t),
      o = [];
    for (const s of r) {
      const i = JSON.parse(s);
      if (typeof i.type != "number") throw new Error("Invalid payload.");
      switch (i.type) {
        case L.Invocation:
          this._isInvocationMessage(i);
          break;
        case L.StreamItem:
          this._isStreamItemMessage(i);
          break;
        case L.Completion:
          this._isCompletionMessage(i);
          break;
        case L.Ping:
          break;
        case L.Close:
          break;
        case L.Ack:
          this._isAckMessage(i);
          break;
        case L.Sequence:
          this._isSequenceMessage(i);
          break;
        default:
          n.log(
            y.Information,
            "Unknown message type '" + i.type + "' ignored.",
          );
          continue;
      }
      o.push(i);
    }
    return o;
  }
  writeMessage(t) {
    return Le.write(JSON.stringify(t));
  }
  _isInvocationMessage(t) {
    (this._assertNotEmptyString(
      t.target,
      "Invalid payload for Invocation message.",
    ),
      t.invocationId !== void 0 &&
        this._assertNotEmptyString(
          t.invocationId,
          "Invalid payload for Invocation message.",
        ));
  }
  _isStreamItemMessage(t) {
    if (
      (this._assertNotEmptyString(
        t.invocationId,
        "Invalid payload for StreamItem message.",
      ),
      t.item === void 0)
    )
      throw new Error("Invalid payload for StreamItem message.");
  }
  _isCompletionMessage(t) {
    if (t.result && t.error)
      throw new Error("Invalid payload for Completion message.");
    (!t.result &&
      t.error &&
      this._assertNotEmptyString(
        t.error,
        "Invalid payload for Completion message.",
      ),
      this._assertNotEmptyString(
        t.invocationId,
        "Invalid payload for Completion message.",
      ));
  }
  _isAckMessage(t) {
    if (typeof t.sequenceId != "number")
      throw new Error("Invalid SequenceId for Ack message.");
  }
  _isSequenceMessage(t) {
    if (typeof t.sequenceId != "number")
      throw new Error("Invalid SequenceId for Sequence message.");
  }
  _assertNotEmptyString(t, n) {
    if (typeof t != "string" || t === "") throw new Error(n);
  }
}
const Ep = {
  trace: y.Trace,
  debug: y.Debug,
  info: y.Information,
  information: y.Information,
  warn: y.Warning,
  warning: y.Warning,
  error: y.Error,
  critical: y.Critical,
  none: y.None,
};
function Np(e) {
  const t = Ep[e.toLowerCase()];
  if (typeof t < "u") return t;
  throw new Error(`Unknown log level: ${e}`);
}
class Tp {
  configureLogging(t) {
    if ((re.isRequired(t, "logging"), Ip(t))) this.logger = t;
    else if (typeof t == "string") {
      const n = Np(t);
      this.logger = new Lo(n);
    } else this.logger = new Lo(t);
    return this;
  }
  withUrl(t, n) {
    return (
      re.isRequired(t, "url"),
      re.isNotEmpty(t, "url"),
      (this.url = t),
      typeof n == "object"
        ? (this.httpConnectionOptions = { ...this.httpConnectionOptions, ...n })
        : (this.httpConnectionOptions = {
            ...this.httpConnectionOptions,
            transport: n,
          }),
      this
    );
  }
  withHubProtocol(t) {
    return (re.isRequired(t, "protocol"), (this.protocol = t), this);
  }
  withAutomaticReconnect(t) {
    if (this.reconnectPolicy)
      throw new Error("A reconnectPolicy has already been set.");
    return (
      t
        ? Array.isArray(t)
          ? (this.reconnectPolicy = new Pa(t))
          : (this.reconnectPolicy = t)
        : (this.reconnectPolicy = new Pa()),
      this
    );
  }
  withServerTimeout(t) {
    return (
      re.isRequired(t, "milliseconds"),
      (this._serverTimeoutInMilliseconds = t),
      this
    );
  }
  withKeepAliveInterval(t) {
    return (
      re.isRequired(t, "milliseconds"),
      (this._keepAliveIntervalInMilliseconds = t),
      this
    );
  }
  withStatefulReconnect(t) {
    return (
      this.httpConnectionOptions === void 0 &&
        (this.httpConnectionOptions = {}),
      (this.httpConnectionOptions._useStatefulReconnect = !0),
      (this._statefulReconnectBufferSize = t == null ? void 0 : t.bufferSize),
      this
    );
  }
  build() {
    const t = this.httpConnectionOptions || {};
    if ((t.logger === void 0 && (t.logger = this.logger), !this.url))
      throw new Error(
        "The 'HubConnectionBuilder.withUrl' method must be called before building the connection.",
      );
    const n = new xp(this.url, t);
    return gl.create(
      n,
      this.logger || Cr.instance,
      this.protocol || new Cp(),
      this.reconnectPolicy,
      this._serverTimeoutInMilliseconds,
      this._keepAliveIntervalInMilliseconds,
      this._statefulReconnectBufferSize,
    );
  }
}
function Ip(e) {
  return e.log !== void 0;
}
const Jc = E.createContext(void 0),
  jp = ({ children: e }) => {
    const t = pl(),
      n = E.useRef(null),
      r = async () => {
        try {
          const i = [...(await ce.getInventoryList())].sort((a, c) => {
              const p = { 等待盤點: 0, 盤點中: 1, 鎖定: 2 };
              return (p[a.STATE] ?? 999) - (p[c.STATE] ?? 999);
            }),
            l = new CustomEvent("inventoryUpdated", { detail: { items: i } });
          return (document.dispatchEvent(l), i);
        } catch (s) {
          return (console.error("Failed to fetch inventory items:", s), []);
        }
      };
    E.useEffect(() => {
      if (t != null && t.domain) {
        const s = new Tp()
            .withUrl(`${t.domain}/chatHub`)
            .withAutomaticReconnect()
            .configureLogging(y.Warning)
            .build(),
          i = (a, c) => {
            const p = new CustomEvent("ReceivedEvent", {
              detail: { message: c },
            });
            (typeof window.ChathubReceivedEvent == "function" &&
              window.ChathubReceivedEvent(c),
              document.dispatchEvent(p));
          };
        s.on("ReceiveMessage", i);
        const l = async (a) => {
          const c = JSON.parse(a.detail.message);
          (console.log("message received", c),
            c &&
              [
                "creat_lock_by_IC_SN",
                "creat_unlock_by_IC_SN",
                "creat_delete_by_IC_SN",
                "creat_add",
                "excel_upload",
              ].includes(c.Method) &&
              (await r(), console.log("Inventory list updated")));
        };
        return (
          document.addEventListener("ReceivedEvent", l),
          s
            .start()
            .then(() => {
              (console.log("SignalR Connected"), (n.current = s), r());
            })
            .catch((a) => {
              (console.warn("SignalR Connection Error:", a), r());
            }),
          () => {
            (document.removeEventListener("ReceivedEvent", l),
              n.current && n.current.stop());
          }
        );
      }
    }, [t]);
    const o = async (s) => {
      if (!(t != null && t.domain)) {
        console.warn("Configuration not loaded, skipping SignalR message");
        return;
      }
      if (!s.Method) {
        console.warn("Method is required for SignalR message");
        return;
      }
      try {
        const i = {
          ...s,
          ServerName: s.ServerName || "",
          ServerType: s.ServerType || "網頁",
          TableName: s.TableName || "medicine_page_firstclass",
          TimeTaken: s.TimeTaken || "",
        };
        console.log("Sending message:", i);
        const l = await fetch(`${t.domain}/api/Message`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(i),
        });
        if (!l.ok) throw new Error(`HTTP error! status: ${l.status}`);
      } catch (i) {
        throw (console.error("Failed to send message:", i), i);
      }
    };
    return u.jsx(Jc.Provider, {
      value: { connection: n.current, sendMessage: o, fetchInventoryItems: r },
      children: e,
    });
  },
  Pp = () => {
    const e = E.useContext(Jc);
    if (!e) throw new Error("useSignalR must be used within a SignalRProvider");
    return e;
  },
  Dp = ({ language: e, onLanguageChange: t }) => {
    const [n, r] = E.useState(null);
    E.useEffect(() => {
      const s = sessionStorage.getItem("user_session");
      if (s) {
        const i = JSON.parse(s);
        r({ Name: i.Name || "", Employer: i.Employer || "" });
      }
    }, []);
    const o = () => {
      (sessionStorage.clear(), window.location.reload());
    };
    return u.jsx("nav", {
      className: "bg-transparent py-4 md:py-6 lg:py-8",
      children: u.jsx("div", {
        className: "mx-auto px-4 sm:px-6 lg:px-8",
        children: u.jsxs("div", {
          className: "flex justify-between items-center h-16",
          children: [
            u.jsxs("div", {
              className: "flex items-center space-x-4",
              children: [
                u.jsxs("a", {
                  href: "../frontpage",
                  className:
                    "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors",
                  children: [
                    u.jsx("span", { className: "sr-only", children: "Home" }),
                    u.jsx(Lh, { className: "w-7 h-7" }),
                  ],
                }),
                u.jsxs("div", {
                  children: [
                    u.jsx("h1", {
                      className:
                        "text-2xl md:text-3xl font-semibold text-gray-800 mb-2",
                      children: P("inventoryManagement", e),
                    }),
                    n &&
                      u.jsxs("p", {
                        className: "text-base text-gray-600",
                        children: [n.Name, " - ", n.Employer],
                      }),
                  ],
                }),
              ],
            }),
            u.jsxs("div", {
              className: "flex items-center space-x-4",
              children: [
                u.jsxs("button", {
                  onClick: t,
                  className:
                    "inline-flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md text-base text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
                  children: [
                    u.jsx(Mh, { className: "h-5 w-5" }),
                    u.jsx("span", {
                      className: "ml-2 hidden sm:inline",
                      children: e === "en" ? "English" : "繁體中文",
                    }),
                  ],
                }),
                u.jsxs("button", {
                  onClick: o,
                  className:
                    "inline-flex items-center justify-center px-3 py-2 border border-gray-300 rounded-md text-base text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
                  children: [
                    u.jsx($h, { className: "h-5 w-5" }),
                    u.jsx("span", {
                      className: "ml-2 hidden sm:inline",
                      children: P("logout", e),
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
  Rp = ({ tabs: e, activeTab: t, language: n, onTabChange: r }) =>
    u.jsx("div", {
      className: "h-[40px] mb-2",
      children: u.jsx("div", {
        className: "mx-auto px-4 sm:px-6 lg:px-8",
        children: u.jsx("div", {
          className: "flex space-x-8 border-b border-gray-200",
          children: e.map((o) =>
            u.jsx(
              "a",
              {
                href: o.href,
                className: `
                px-4 py-2 text-base font-medium border-b-2 
                ${t === o.id ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}
              `,
                onClick: (s) => {
                  o.href || (s.preventDefault(), r(o.id));
                },
                children: P(o.name, n),
              },
              o.id,
            ),
          ),
        }),
      }),
    }),
  st = ({
    variant: e = "primary",
    icon: t,
    children: n,
    className: r = "",
    ...o
  }) => {
    const s =
        "inline-flex items-center px-4 py-2 border text-base font-medium rounded-md shadow-sm",
      i = {
        primary: "border-transparent text-white bg-blue-600 hover:bg-blue-700",
        secondary: "border-gray-300 text-gray-700 bg-white hover:bg-gray-50",
        danger: "border-red-300 text-white bg-red-600 hover:bg-red-700",
        pass: "border-green-300 text-white bg-green-600 hover:bg-green-700",
      };
    return u.jsxs("button", {
      className: `${s} ${i[e]} ${r}`,
      ...o,
      children: [t && u.jsx(t, { className: "w-4 h-4 mr-2" }), n],
    });
  },
  Mp = ({ isOpen: e, onClose: t, inventoryId: n, language: r }) => {
    const [o, s] = E.useState([]),
      [i, l] = E.useState(!1),
      [a, c] = E.useState("");
    E.useEffect(() => {
      e && n && g();
    }, [e, n]);
    const p = (m, v) => {
        if (!m || !v) return [];
        const w = m.split(",").filter((d) => d.trim()),
          x = v.split(",").filter((d) => d.trim()),
          D = [],
          f = Math.max(w.length, x.length);
        for (let d = 0; d < f; d++)
          D.push({
            userId: w[d] || `User ${d + 1}`,
            userName: x[d] || "Unknown User",
          });
        return D;
      },
      g = async () => {
        try {
          (l(!0), c(""));
          const v = (await ce.getOnlineUsers()).find((w) => w.parameter === n);
          if (v && v.user_id && v.user_name) {
            const w = p(v.user_id, v.user_name);
            s(w);
          } else s([]);
        } catch (m) {
          (console.error("Failed to fetch online users:", m),
            c(
              r === "en"
                ? "Failed to load user information"
                : "無法載入使用者資訊",
            ));
        } finally {
          l(!1);
        }
      };
    return e
      ? u.jsx("div", {
          className: "fixed inset-0 z-50 overflow-y-auto",
          children: u.jsxs("div", {
            className:
              "flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0",
            children: [
              u.jsx("div", {
                className:
                  "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                onClick: t,
              }),
              u.jsxs("div", {
                className:
                  "inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle",
                children: [
                  u.jsx("div", {
                    className: "absolute right-0 top-0 pr-4 pt-4",
                    children: u.jsx("button", {
                      onClick: t,
                      className: "text-gray-400 hover:text-gray-500",
                      children: u.jsx($n, { className: "h-6 w-6" }),
                    }),
                  }),
                  u.jsx("div", {
                    className: "sm:flex sm:items-start",
                    children: u.jsxs("div", {
                      className: "mt-3 w-full text-center sm:mt-0 sm:text-left",
                      children: [
                        u.jsxs("div", {
                          className: "flex items-center gap-3 mb-4",
                          children: [
                            u.jsx(wi, { className: "w-6 h-6 text-blue-600" }),
                            u.jsx("h3", {
                              className:
                                "text-lg font-medium leading-6 text-gray-900",
                              children:
                                r === "en" ? "Online Users" : "線上使用者",
                            }),
                          ],
                        }),
                        u.jsx("div", {
                          className: "mb-4",
                          children: u.jsxs("p", {
                            className: "text-sm text-gray-600",
                            children: [
                              r === "en" ? "Inventory ID:" : "盤點單號:",
                              " ",
                              u.jsx("span", {
                                className: "font-medium",
                                children: n,
                              }),
                            ],
                          }),
                        }),
                        i
                          ? u.jsx("div", {
                              className:
                                "flex justify-center items-center py-8",
                              children: u.jsx("div", {
                                className:
                                  "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600",
                              }),
                            })
                          : a
                            ? u.jsx("div", {
                                className: "text-center py-8",
                                children: u.jsx("p", {
                                  className: "text-red-600",
                                  children: a,
                                }),
                              })
                            : o.length > 0
                              ? u.jsx("div", {
                                  className:
                                    "space-y-3 max-h-64 overflow-y-auto",
                                  children: o.map((m, v) =>
                                    u.jsxs(
                                      "div",
                                      {
                                        className:
                                          "flex items-center gap-3 p-2 bg-gray-50 rounded-lg border",
                                        children: [
                                          u.jsx(Bh, {
                                            className:
                                              "w-5 h-5 text-gray-600 flex-shrink-0",
                                          }),
                                          u.jsxs("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                              u.jsx("p", {
                                                className:
                                                  "text-base font-medium text-gray-900 truncate",
                                                children: m.userName,
                                              }),
                                              u.jsxs("p", {
                                                className:
                                                  "text-base text-gray-500 truncate",
                                                children: [
                                                  r === "en" ? "ID:" : "帳號:",
                                                  " ",
                                                  m.userId,
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      v,
                                    ),
                                  ),
                                })
                              : u.jsxs("div", {
                                  className: "text-center py-8",
                                  children: [
                                    u.jsx(wi, {
                                      className:
                                        "w-12 h-12 text-gray-300 mx-auto mb-3",
                                    }),
                                    u.jsx("p", {
                                      className: "text-gray-500",
                                      children:
                                        r === "en"
                                          ? "No users currently online"
                                          : "目前無使用者線上",
                                    }),
                                  ],
                                }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
  },
  Lp = (e) => {
    switch (e) {
      case "等待盤點":
        return "bg-yellow-50";
      case "盤點中":
        return "bg-blue-50";
      case "鎖定":
        return "bg-red-50";
      default:
        return "bg-white";
    }
  },
  bp = ({
    item: e,
    language: t,
    onlineUserCount: n,
    onDelete: r,
    onLock: o,
    onAddMedicine: s,
    onEditStaff: i,
  }) => {
    const { showLoading: l, hideLoading: a } = Dr(),
      c = e.STATE === "鎖定",
      [p, g] = E.useState(!1),
      m = async () => {
        try {
          (l(), await ce.downloadExcel(e));
        } catch (D) {
          console.error("Failed to download Excel:", D);
        } finally {
          a();
        }
      },
      v = () => {
        (sessionStorage.setItem("IC_SN", e.IC_SN),
          (location.href = "../inventory/index.html?administrator"));
      },
      w = async () => {
        const D =
          t === "en"
            ? `Are you sure you want to delete inventory ${e.IC_SN}?`
            : `確定要刪除盤點單 ${e.IC_SN} 嗎？`;
        if (window.confirm(D))
          try {
            (l(), await r(e.IC_SN));
          } finally {
            a();
          }
      },
      x = async () => {
        const D =
          t === "en"
            ? `Are you sure you want to ${c ? "unlock" : "lock"} inventory ${e.IC_SN}?`
            : `確定要${c ? "解鎖" : "鎖定"}盤點單 ${e.IC_SN} 嗎？`;
        if (window.confirm(D))
          try {
            (l(), await o(e.IC_SN));
          } finally {
            a();
          }
      };
    return u.jsxs("div", {
      className: `rounded-lg shadow-lg p-6 ${Lp(e.STATE)}`,
      children: [
        u.jsx("div", {
          className: "flex justify-between items-start mb-4",
          children: u.jsxs("div", {
            className: "flex-1",
            children: [
              u.jsxs("div", {
                className: "flex items-center gap-4 mb-2",
                children: [
                  u.jsxs("h3", {
                    className: "text-lg font-semibold text-gray-900",
                    children: [P("ic_sn", t), ": ", e.IC_SN],
                  }),
                  !c &&
                    u.jsxs("div", {
                      className:
                        "flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full cursor-pointer hover:bg-green-200 transition-colors",
                      onClick: () => g(!0),
                      title:
                        t === "en"
                          ? "Click to view online users"
                          : "點擊查看線上使用者",
                      children: [
                        u.jsx(wi, { className: "w-5 h-5 text-green-600" }),
                        u.jsxs("span", {
                          className: "text-lg font-medium text-green-700",
                          children: [n, " ", t === "en" ? "online" : "線上"],
                        }),
                      ],
                    }),
                ],
              }),
              u.jsx("p", {
                className: "text-lg font-semibold text-gray-900 underline",
                children: e.IC_NAME,
              }),
            ],
          }),
        }),
        u.jsxs("div", {
          className: "space-y-2 mb-6",
          children: [
            u.jsxs("p", {
              className: "text-base",
              children: [
                u.jsxs("span", {
                  className: "font-medium",
                  children: [P("creator", t), ": "],
                }),
                e.CT,
              ],
            }),
            u.jsxs("p", {
              className: "text-base",
              children: [
                u.jsxs("span", {
                  className: "font-medium",
                  children: [P("staff", t), ": "],
                }),
                e.DEFAULT_OP || "-",
              ],
            }),
            u.jsxs("p", {
              className: "text-base",
              children: [
                u.jsxs("span", {
                  className: "font-medium",
                  children: [P("start", t), ": "],
                }),
                new Date(e.START_TIME).toLocaleString(),
              ],
            }),
            u.jsxs("p", {
              className: "text-base",
              children: [
                u.jsxs("span", {
                  className: "font-medium",
                  children: [P("end", t), ": "],
                }),
                new Date(e.END_TIME).toLocaleString(),
              ],
            }),
            u.jsxs("p", {
              className: "text-base",
              children: [
                u.jsxs("span", {
                  className: "font-medium",
                  children: [P("status", t), ": "],
                }),
                e.STATE,
              ],
            }),
          ],
        }),
        u.jsxs("div", {
          className: "flex flex-wrap gap-2",
          children: [
            u.jsx(st, {
              variant: "secondary",
              icon: Fh,
              onClick: () => s(e.IC_SN),
              children: P("addMedicine", t),
            }),
            u.jsx(st, {
              variant: "secondary",
              icon: Hh,
              onClick: () => i(e.IC_SN),
              children: P("editStaff", t),
            }),
            u.jsx(st, {
              variant: "secondary",
              icon: Qc,
              onClick: m,
              children: P("downloadExcel", t),
            }),
            u.jsx(st, {
              variant: "pass",
              icon: c ? bh : Uh,
              className: `inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-base font-medium text-white ${c ? "bg-green-600 hover:bg-green-700 focus:ring-green-500" : "border-yellow-600 bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500"} focus:outline-none focus:ring-2 focus:ring-offset-2`,
              onClick: x,
              children: c
                ? t === "en"
                  ? "Unlock"
                  : "鎖定中"
                : t === "en"
                  ? "Lock"
                  : "開放中",
            }),
            u.jsx(st, {
              variant: "danger",
              icon: Ah,
              className:
                "inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
              onClick: w,
              children: t === "en" ? "Delete" : "刪除",
            }),
            !c &&
              u.jsx(st, {
                variant: "pass",
                icon: Oh,
                onClick: v,
                children: P("enterInventory", t),
              }),
          ],
        }),
        u.jsx(Mp, {
          isOpen: p,
          onClose: () => g(!1),
          inventoryId: e.IC_SN,
          language: t,
        }),
      ],
    });
  },
  Op = ({
    isOpen: e,
    onClose: t,
    language: n,
    onSearch: r,
    setInventoryItems: o,
  }) => {
    const [s, i] = E.useState(""),
      [l, a] = E.useState(""),
      [c, p] = E.useState(""),
      g = () => {
        (i(""), a(""), p(""));
      },
      m = () => {
        (g(), t());
      },
      v = async (w) => {
        w.preventDefault();
        try {
          let x;
          (l && c
            ? (x = await ce.getInventoryList(l, c))
            : (x = await ce.getInventoryList()),
            console.log("API Results:", x));
          let D = x;
          if (s) {
            const f = s.toLowerCase();
            D = x.filter((d) => d.IC_SN.toLowerCase().includes(f));
          }
          (r(D), m());
        } catch (x) {
          console.error("Search failed:", x);
        }
      };
    return e
      ? u.jsx("div", {
          className: "fixed inset-0 z-50 overflow-y-auto",
          children: u.jsxs("div", {
            className:
              "flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0",
            children: [
              u.jsx("div", {
                className:
                  "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                onClick: m,
              }),
              u.jsxs("div", {
                className:
                  "inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle",
                children: [
                  u.jsx("div", {
                    className: "absolute right-0 top-0 pr-4 pt-4",
                    children: u.jsx("button", {
                      onClick: m,
                      className: "text-gray-400 hover:text-gray-500",
                      children: u.jsx($n, { className: "h-6 w-6" }),
                    }),
                  }),
                  u.jsx("div", {
                    className: "sm:flex sm:items-start",
                    children: u.jsxs("div", {
                      className: "mt-3 w-full text-center sm:mt-0 sm:text-left",
                      children: [
                        u.jsx("h3", {
                          className:
                            "text-xl font-medium leading-6 text-gray-900",
                          children: P("searchInventory", n),
                        }),
                        u.jsxs("form", {
                          onSubmit: v,
                          className: "mt-4 space-y-4",
                          children: [
                            u.jsx("div", {
                              children: u.jsxs("div", {
                                className: "mt-1 grid grid-cols-2 gap-4",
                                children: [
                                  u.jsxs("div", {
                                    children: [
                                      u.jsx("label", {
                                        htmlFor: "startDate",
                                        className:
                                          "block text-base text-gray-500",
                                        children: P("from", n),
                                      }),
                                      u.jsx("input", {
                                        type: "date",
                                        id: "startDate",
                                        className:
                                          "block w-full px-2 py-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base",
                                        value: l,
                                        onChange: (w) => a(w.target.value),
                                      }),
                                    ],
                                  }),
                                  u.jsxs("div", {
                                    children: [
                                      u.jsx("label", {
                                        htmlFor: "endDate",
                                        className:
                                          "block text-base text-gray-500",
                                        children: P("to", n),
                                      }),
                                      u.jsx("input", {
                                        type: "date",
                                        id: "endDate",
                                        className:
                                          "block w-full px-2 py-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base",
                                        value: c,
                                        onChange: (w) => p(w.target.value),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            u.jsxs("div", {
                              children: [
                                u.jsx("label", {
                                  htmlFor: "inventoryNumber",
                                  className:
                                    "block text-base font-medium text-gray-700",
                                  children: P("inventoryNumber", n),
                                }),
                                u.jsx("div", {
                                  className: "mt-1",
                                  children: u.jsx("input", {
                                    type: "text",
                                    id: "inventoryNumber",
                                    className:
                                      "block w-full rounded-md px-2 py-1 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base",
                                    placeholder: P("enterInventoryNumber", n),
                                    value: s,
                                    onChange: (w) => i(w.target.value),
                                  }),
                                }),
                              ],
                            }),
                            u.jsxs("div", {
                              className:
                                "mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3",
                              children: [
                                u.jsx("button", {
                                  type: "submit",
                                  className:
                                    "inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:col-start-2",
                                  children: P("search", n),
                                }),
                                u.jsx("button", {
                                  type: "button",
                                  onClick: m,
                                  className:
                                    "mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0",
                                  children: P("cancel", n),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
  },
  $p = ({
    isOpen: e,
    onClose: t,
    language: n,
    onUploadSuccess: r,
    sendMessage: o,
  }) => {
    const { showLoading: s, hideLoading: i } = Dr(),
      [l, a] = E.useState(""),
      [c, p] = E.useState(""),
      [g, m] = E.useState(null),
      [v, w] = E.useState(""),
      x = E.useRef(null),
      D = () => {
        (a(""), p(""), m(null), w(""), x.current && (x.current.value = ""));
      },
      f = () => {
        (D(), t());
      },
      d = (k) => {
        const N = [
            "application/vnd.ms-excel",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          ],
          b = [".xls", ".xlsx"],
          R = k.name.toLowerCase().slice(k.name.lastIndexOf("."));
        return !b.includes(R) || !N.includes(k.type)
          ? (w(P("invalidFileType", n)), !1)
          : (w(""), !0);
      },
      h = (k) => {
        var b;
        const N = (b = k.target.files) == null ? void 0 : b[0];
        N && (d(N) ? m(N) : m(null));
      },
      _ = (k) => {
        k.preventDefault();
        const N = k.dataTransfer.files[0];
        N && d(N) && m(N);
      },
      C = (k) => {
        k.preventDefault();
      },
      T = async (k) => {
        if ((k.preventDefault(), !l || !g)) {
          w(P("fileRequired", n));
          return;
        }
        const N = sessionStorage.getItem("user_session");
        let b = "";
        try {
          N && (b = JSON.parse(N).Name || "");
        } catch (U) {
          console.error("Error parsing user session:", U);
        }
        const R = new FormData();
        (R.append("file", g),
          R.append("IC_NAME", l),
          R.append("CT", b),
          R.append("DEFAULT_OP", c));
        try {
          s();
          const U = await ce.uploadExcel(R, o);
          U.Code == 200 ? (await r(), f()) : w(U.Result || "Upload failed");
        } catch (U) {
          (console.error("Upload failed:", U),
            w(U instanceof Error ? U.message : "Upload failed"));
        } finally {
          i();
        }
      };
    return e
      ? u.jsx("div", {
          className: "fixed inset-0 z-50 overflow-y-auto",
          children: u.jsxs("div", {
            className:
              "flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0",
            children: [
              u.jsx("div", {
                className:
                  "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                onClick: f,
              }),
              u.jsxs("div", {
                className:
                  "inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle",
                children: [
                  u.jsx("div", {
                    className: "absolute right-0 top-0 pr-4 pt-4",
                    children: u.jsx("button", {
                      onClick: f,
                      className: "text-gray-400 hover:text-gray-500",
                      children: u.jsx($n, { className: "h-6 w-6" }),
                    }),
                  }),
                  u.jsx("div", {
                    className: "sm:flex sm:items-start",
                    children: u.jsxs("div", {
                      className: "mt-3 w-full text-center sm:mt-0 sm:text-left",
                      children: [
                        u.jsx("h3", {
                          className:
                            "text-lg font-medium leading-6 text-gray-900",
                          children: P("uploadExcelFile", n),
                        }),
                        u.jsxs("form", {
                          onSubmit: T,
                          className: "mt-4 space-y-4",
                          children: [
                            u.jsxs("div", {
                              children: [
                                u.jsx("label", {
                                  htmlFor: "inventoryName",
                                  className:
                                    "block text-base font-medium text-gray-700",
                                  children: P("uploadInventoryName", n),
                                }),
                                u.jsx("input", {
                                  type: "text",
                                  id: "inventoryName",
                                  value: l,
                                  onChange: (k) => a(k.target.value),
                                  className:
                                    "px-2 py-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base",
                                  placeholder: P("enterInventoryName", n),
                                  required: !0,
                                }),
                              ],
                            }),
                            u.jsxs("div", {
                              children: [
                                u.jsx("label", {
                                  htmlFor: "defaultStaff",
                                  className:
                                    "block text-base font-medium text-gray-700",
                                  children: P("uploadInventoryStaff", n),
                                }),
                                u.jsx("input", {
                                  type: "text",
                                  id: "defaultStaff",
                                  value: c,
                                  onChange: (k) => p(k.target.value),
                                  className:
                                    "px-2 py-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-base",
                                  placeholder: P("enterUploadStaffName", n),
                                }),
                              ],
                            }),
                            u.jsx("div", {
                              className:
                                "mt-4 flex justify-center rounded-lg border-2 border-dashed border-gray-300 px-6 py-8",
                              onDrop: _,
                              onDragOver: C,
                              children: u.jsxs("div", {
                                className: "text-center",
                                children: [
                                  u.jsx(Gc, {
                                    className:
                                      "mx-auto h-12 w-12 text-gray-400",
                                  }),
                                  u.jsxs("div", {
                                    className:
                                      "mt-4 flex text-base leading-6 text-gray-600",
                                    children: [
                                      u.jsxs("label", {
                                        htmlFor: "file-upload",
                                        className:
                                          "relative cursor-pointer rounded-md bg-white font-semibold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500",
                                        children: [
                                          u.jsx("span", {
                                            children: P("selectFile", n),
                                          }),
                                          u.jsx("input", {
                                            id: "file-upload",
                                            name: "file-upload",
                                            type: "file",
                                            ref: x,
                                            className: "sr-only",
                                            accept: ".xls,.xlsx",
                                            onChange: h,
                                          }),
                                        ],
                                      }),
                                      u.jsx("p", {
                                        className: "pl-1",
                                        children: P("dragAndDrop", n),
                                      }),
                                    ],
                                  }),
                                  u.jsx("p", {
                                    className: "text-sm text-gray-500 mt-2",
                                    children: P("excelFilesOnly", n),
                                  }),
                                  g &&
                                    u.jsx("p", {
                                      className: "text-sm text-green-600 mt-2",
                                      children: g.name,
                                    }),
                                  v &&
                                    u.jsx("p", {
                                      className: "text-sm text-red-600 mt-2",
                                      children: v,
                                    }),
                                ],
                              }),
                            }),
                            u.jsxs("div", {
                              className:
                                "mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3",
                              children: [
                                u.jsx("button", {
                                  type: "submit",
                                  className:
                                    "inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:col-start-2",
                                  children: P("upload", n),
                                }),
                                u.jsx("button", {
                                  type: "button",
                                  onClick: f,
                                  className:
                                    "mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0",
                                  children: P("cancel", n),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
  },
  Ns = ({ label: e, options: t, selectedOptions: n, onToggle: r }) =>
    u.jsxs("div", {
      className: "mb-4",
      children: [
        u.jsx("label", {
          className: "block text-base font-medium text-gray-700 mb-2",
          children: e,
        }),
        u.jsx("div", {
          className: "flex flex-wrap gap-2",
          children: t.map((o) =>
            u.jsx(
              "button",
              {
                type: "button",
                onClick: () => r(o),
                className: `px-4 py-2 rounded-md text-sm font-medium transition-colors ${n.includes(o) ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                children: o,
              },
              o,
            ),
          ),
        }),
      ],
    }),
  Fp = ({
    isOpen: e,
    onClose: t,
    language: n,
    onCreateSuccess: r,
    sendMessage: o,
    medCloudData: s,
    medQtyGroupData: i,
  }) => {
    const { showLoading: l, hideLoading: a } = Dr(),
      [c, p] = E.useState(""),
      [g, m] = E.useState(""),
      [v, w] = E.useState([]),
      [x, D] = E.useState([]),
      [f, d] = E.useState([]),
      [h, _] = E.useState([]),
      [C, T] = E.useState([]),
      k = ["N", "1", "2", "3", "4"];
    (E.useEffect(() => {
      if (i && i.length > 0) {
        const B = i.map((ee) => ee.NAME).filter(Boolean);
        _(B);
      }
    }, [i]),
      E.useEffect(() => {
        if (s && s.length > 0) {
          const B = [...new Set(s.map((ee) => ee.TYPE).filter(Boolean))];
          T(B);
        }
      }, [s]));
    const N = () => {
        (p(""), m(""), w([]), D([]), d([]));
      },
      b = () => {
        (N(), t());
      },
      R = (B) => {
        w((ee) => (ee.includes(B) ? ee.filter((se) => se !== B) : [...ee, B]));
      },
      U = (B) => {
        D((ee) => (ee.includes(B) ? ee.filter((se) => se !== B) : [...ee, B]));
      },
      et = (B) => {
        d((ee) => (ee.includes(B) ? ee.filter((se) => se !== B) : [...ee, B]));
      },
      ut = async (B) => {
        if ((B.preventDefault(), !c.trim())) {
          m(P("enterInventoryName", n));
          return;
        }
        const ee =
          n === "en"
            ? `Are you sure you want to create inventory "${c}"?`
            : `確定要建立盤點單 "${c}" 嗎？`;
        if (window.confirm(ee))
          try {
            l();
            const se = sessionStorage.getItem("user_session");
            let xt = "";
            (se && (xt = JSON.parse(se).Name || ""),
              console.log("Selected filters:", {
                medQtyGroups: v,
                controlLevels: x,
                medTypes: f,
              }));
            const I = await ce.createInventory(
              {
                IC_NAME: c,
                CT: xt,
                selectedMedQtyGroups: v,
                selectedControlLevels: x,
                selectedMedTypes: f,
              },
              o,
            );
            I.Code === 200
              ? (r && (await r()), b())
              : m(I.Result || "Failed to create inventory");
          } catch (se) {
            (console.error("Failed to create inventory:", se),
              m(
                se instanceof Error ? se.message : "Failed to create inventory",
              ));
          } finally {
            a();
          }
      };
    return e
      ? u.jsx("div", {
          className: "fixed inset-0 z-50 overflow-y-auto",
          children: u.jsxs("div", {
            className:
              "flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0",
            children: [
              u.jsx("div", {
                className:
                  "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                onClick: b,
              }),
              u.jsxs("div", {
                className:
                  "inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6 sm:align-middle",
                children: [
                  u.jsx("div", {
                    className: "absolute right-0 top-0 pr-4 pt-4",
                    children: u.jsx("button", {
                      onClick: b,
                      className: "text-gray-400 hover:text-gray-500",
                      children: u.jsx($n, { className: "h-6 w-6" }),
                    }),
                  }),
                  u.jsx("div", {
                    className: "sm:flex sm:items-start",
                    children: u.jsxs("div", {
                      className: "mt-3 w-full text-center sm:mt-0 sm:text-left",
                      children: [
                        u.jsx("h3", {
                          className:
                            "text-lg font-medium leading-6 text-gray-900 mb-4",
                          children: P("createNewInventory", n),
                        }),
                        u.jsxs("form", {
                          onSubmit: ut,
                          className: "mt-4 space-y-4",
                          children: [
                            u.jsxs("div", {
                              children: [
                                u.jsx("label", {
                                  htmlFor: "inventoryName",
                                  className:
                                    "block text-base font-medium text-gray-700",
                                  children: P("inventoryName", n),
                                }),
                                u.jsx("input", {
                                  type: "text",
                                  id: "inventoryName",
                                  value: c,
                                  onChange: (B) => p(B.target.value),
                                  className:
                                    "px-2 py-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-base",
                                  placeholder: P("enterInventoryName", n),
                                  required: !0,
                                }),
                              ],
                            }),
                            u.jsx(Ns, {
                              label: P("medQtyGroup", n),
                              options: h,
                              selectedOptions: v,
                              onToggle: R,
                            }),
                            u.jsx(Ns, {
                              label: P("controlLevel", n),
                              options: k,
                              selectedOptions: x,
                              onToggle: U,
                            }),
                            u.jsx(Ns, {
                              label: P("medTypeGroup", n),
                              options: C,
                              selectedOptions: f,
                              onToggle: et,
                            }),
                            g &&
                              u.jsx("p", {
                                className: "mt-2 text-sm text-red-600",
                                children: g,
                              }),
                            u.jsxs("div", {
                              className:
                                "mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3",
                              children: [
                                u.jsx("button", {
                                  type: "submit",
                                  className:
                                    "inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:col-start-2 sm:text-base",
                                  children: P("create", n),
                                }),
                                u.jsx("button", {
                                  type: "button",
                                  onClick: b,
                                  className:
                                    "mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-base",
                                  children: P("cancel", n),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
  },
  zp = ({ isOpen: e, onClose: t, inventoryId: n, language: r }) => {
    const [o, s] = E.useState(""),
      [i, l] = E.useState([]),
      [a, c] = E.useState([]),
      [p, g] = E.useState(!1),
      [m, v] = E.useState("");
    E.useEffect(() => {
      e && w();
    }, [e]);
    const w = async () => {
        try {
          (g(!0), v(""));
          const f = await ce.getMedicineList();
          l(f);
        } catch (f) {
          (v(f instanceof Error ? f.message : "Failed to fetch medicines"),
            console.error("Error fetching medicines:", f));
        } finally {
          g(!1);
        }
      },
      x = () => {
        if (!o.trim()) {
          c([]);
          return;
        }
        const f = o.toLowerCase(),
          d = i.filter((h) => {
            var _, C, T, k;
            return (
              ((_ = h.CODE) == null ? void 0 : _.toLowerCase().includes(f)) ||
              ((C = h.NAME) == null ? void 0 : C.toLowerCase().includes(f)) ||
              ((T = h.CHT_NAME) == null
                ? void 0
                : T.toLowerCase().includes(f)) ||
              ((k = h.BARCODE) == null
                ? void 0
                : k.some((N) => N.toLowerCase().includes(f)))
            );
          });
        c(d);
      },
      D = async (f) => {
        try {
          (await ce.addMedicineToInventory(n, { ...f, QUANTITY: 1 }), t());
        } catch (d) {
          v(d instanceof Error ? d.message : "Failed to add medicine");
        }
      };
    return e
      ? u.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
          children: u.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden",
            children: [
              u.jsxs("div", {
                className: "flex justify-between items-center p-6 border-b",
                children: [
                  u.jsx("h2", {
                    className: "text-xl font-semibold text-gray-900",
                    children: P("addMedicineTitle", r),
                  }),
                  u.jsx("button", {
                    onClick: t,
                    className: "text-gray-400 hover:text-gray-500",
                    children: u.jsx($n, { className: "w-6 h-6" }),
                  }),
                ],
              }),
              u.jsx("div", {
                className: "p-6 border-b",
                children: u.jsxs("div", {
                  className: "flex gap-4",
                  children: [
                    u.jsx("div", {
                      className: "flex-1",
                      children: u.jsx("input", {
                        type: "text",
                        value: o,
                        onChange: (f) => s(f.target.value),
                        onKeyPress: (f) => f.key === "Enter" && x(),
                        placeholder: P("enterSearchTerm", r),
                        className:
                          "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500",
                      }),
                    }),
                    u.jsxs("button", {
                      onClick: x,
                      className:
                        "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2",
                      children: [
                        u.jsx(Kc, { className: "w-5 h-5" }),
                        P("search", r),
                      ],
                    }),
                  ],
                }),
              }),
              u.jsx("div", {
                className: "p-6 overflow-y-auto",
                style: { maxHeight: "calc(90vh - 200px)" },
                children: p
                  ? u.jsx("div", {
                      className: "text-center text-gray-600",
                      children: "Loading...",
                    })
                  : m
                    ? u.jsx("div", {
                        className: "text-center text-red-600",
                        children: m,
                      })
                    : a.length > 0
                      ? u.jsx("div", {
                          className: "grid grid-cols-1 gap-4",
                          children: a.map((f) =>
                            u.jsx(
                              "div",
                              {
                                className:
                                  "border rounded-lg p-4 hover:bg-gray-50 transition-colors",
                                children: u.jsxs("div", {
                                  className: "flex justify-between items-start",
                                  children: [
                                    u.jsxs("div", {
                                      className: "space-y-2",
                                      children: [
                                        u.jsxs("div", {
                                          children: [
                                            u.jsx("span", {
                                              className: "font-medium",
                                              children: P("mm_code", r),
                                            }),
                                            u.jsx("span", { children: f.CODE }),
                                          ],
                                        }),
                                        f.SKDIACODE &&
                                          u.jsxs("div", {
                                            children: [
                                              u.jsx("span", {
                                                className: "font-medium",
                                                children: P("mm_sdkiacode", r),
                                              }),
                                              u.jsx("span", {
                                                children: f.SKDIACODE,
                                              }),
                                            ],
                                          }),
                                        u.jsxs("div", {
                                          children: [
                                            u.jsx("span", {
                                              className: "font-medium",
                                              children: P("mm_name", r),
                                            }),
                                            u.jsx("span", { children: f.NAME }),
                                          ],
                                        }),
                                        u.jsxs("div", {
                                          children: [
                                            u.jsx("span", {
                                              className: "font-medium",
                                              children: P("mm_chtname", r),
                                            }),
                                            u.jsx("span", {
                                              children: f.CHT_NAME,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    u.jsx("button", {
                                      onClick: () => D(f),
                                      className:
                                        "px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700",
                                      children: P("add", r),
                                    }),
                                  ],
                                }),
                              },
                              f.GUID,
                            ),
                          ),
                        })
                      : o
                        ? u.jsx("div", {
                            className: "text-center text-gray-600",
                            children: P("mm_notfound", r),
                          })
                        : null,
              }),
            ],
          }),
        })
      : null;
  },
  Ap = ({
    isOpen: e,
    onClose: t,
    inventoryId: n,
    language: r,
    onUpdateSuccess: o,
  }) => {
    const [s, i] = E.useState(Array(10).fill("")),
      [l, a] = E.useState(Array(10).fill("")),
      [c, p] = E.useState(!1),
      [g, m] = E.useState(!1);
    E.useEffect(() => {
      e
        ? (async () => {
            if (!(!e || !n)) {
              m(!0);
              try {
                const d = (await ce.getInventoryList()).find(
                  (h) => h.IC_SN === n,
                );
                if (d && d.DEFAULT_OP) {
                  const h = d.DEFAULT_OP.split(","),
                    _ = Array(10).fill("");
                  (h.forEach((C, T) => {
                    T < 10 && (_[T] = C.trim());
                  }),
                    i(_),
                    a(Array(10).fill("")));
                }
              } catch (f) {
                console.error("Failed to fetch inventory staff:", f);
              } finally {
                m(!1);
              }
            }
          })()
        : (i(Array(10).fill("")), a(Array(10).fill("")), p(!1));
    }, [e, n]);
    const v = (D) =>
        D.trim() === "" ? !0 : /^[a-zA-Z\u4e00-\u9fa5\s]*$/.test(D),
      w = (D, f) => {
        const d = [...s];
        ((d[D] = f), i(d));
        const h = [...l];
        ((h[D] = v(f) ? "" : P("invalidStaffName", r)), a(h));
      },
      x = async (D) => {
        (D.preventDefault(), p(!0));
        try {
          let f = [...s];
          for (; f.length > 0 && f[f.length - 1].trim() === ""; ) f.pop();
          const d = await ce.updateInventoryStaff(n, f);
          d && d.Code === 200 && (o && (await o()), t());
        } catch (f) {
          console.error("Failed to update staff:", f);
        } finally {
          p(!1);
        }
      };
    return e
      ? u.jsx("div", {
          className: "fixed inset-0 z-50 overflow-y-auto",
          children: u.jsxs("div", {
            className:
              "flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0",
            children: [
              u.jsx("div", {
                className:
                  "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                onClick: t,
              }),
              u.jsxs("div", {
                className:
                  "inline-block transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle",
                children: [
                  u.jsx("div", {
                    className: "absolute right-0 top-0 pr-4 pt-4",
                    children: u.jsx("button", {
                      onClick: t,
                      className: "text-gray-400 hover:text-gray-500",
                      children: u.jsx($n, { className: "h-6 w-6" }),
                    }),
                  }),
                  u.jsx("div", {
                    className: "sm:flex sm:items-start",
                    children: u.jsxs("div", {
                      className: "mt-3 w-full text-center sm:mt-0 sm:text-left",
                      children: [
                        u.jsx("h3", {
                          className:
                            "text-lg font-medium leading-6 text-gray-900",
                          children: P("editStaffTitle", r),
                        }),
                        g
                          ? u.jsx("div", {
                              className:
                                "flex justify-center items-center h-32",
                              children: u.jsx("div", {
                                className:
                                  "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600",
                              }),
                            })
                          : u.jsxs("form", {
                              onSubmit: x,
                              className: "mt-4",
                              children: [
                                u.jsx("div", {
                                  className:
                                    "gap-4 grid grid-cols-2 max-h-[60vh] overflow-y-auto",
                                  children: s.map((D, f) =>
                                    u.jsxs(
                                      "div",
                                      {
                                        children: [
                                          u.jsxs("label", {
                                            className:
                                              "block text-sm font-medium text-gray-700",
                                            children: [
                                              P("staffMember", r),
                                              " ",
                                              f + 1,
                                            ],
                                          }),
                                          u.jsx("input", {
                                            type: "text",
                                            value: D,
                                            onChange: (d) =>
                                              w(f, d.target.value),
                                            className: `mt-1 block w-full rounded-md px-2 py-1 text-base
                            ${l[f] ? "border-2 border-red-500 focus:border-red-500 focus:ring-red-500" : "border-2 border-gray-400 hover:border-gray-500 focus:border-blue-500 focus:ring-blue-500"}
                            shadow-sm transition-colors duration-200`,
                                            placeholder: P("enterStaffName", r),
                                          }),
                                          l[f] &&
                                            u.jsx("p", {
                                              className:
                                                "mt-1 text-sm text-red-600",
                                              children: l[f],
                                            }),
                                        ],
                                      },
                                      f,
                                    ),
                                  ),
                                }),
                                u.jsxs("div", {
                                  className:
                                    "mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3",
                                  children: [
                                    u.jsx("button", {
                                      type: "submit",
                                      disabled: c || l.some((D) => D !== ""),
                                      className:
                                        "inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-300 disabled:cursor-not-allowed sm:col-start-2",
                                      children: P("save", r),
                                    }),
                                    u.jsx("button", {
                                      type: "button",
                                      onClick: t,
                                      className:
                                        "mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0",
                                      children: P("cancel", r),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
  },
  Up = ({ isOpen: e, onClose: t, language: n }) => {
    const r = pl(),
      { showLoading: o, hideLoading: s } = Dr(),
      [i, l] = E.useState(""),
      [a, c] = E.useState(""),
      [p, g] = E.useState(""),
      m = async (v) => {
        if ((v.preventDefault(), g(""), !i || !a)) {
          g(n === "en" ? "Please fill in all fields" : "請填寫所有欄位");
          return;
        }
        if (!(r != null && r.domain)) {
          g(n === "en" ? "System configuration error" : "系統配置錯誤");
          return;
        }
        try {
          o();
          const x = await (
            await fetch(`${r.domain}/api/session/login`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ Data: { ID: i, Password: a } }),
            })
          ).json();
          (console.log("Login response:", x),
            x.Code === 200
              ? (sessionStorage.setItem("user_session", JSON.stringify(x.Data)),
                t(),
                window.location.reload())
              : g(x.Result || (n === "en" ? "Login failed" : "登入失敗")));
        } catch (w) {
          (console.error("Login error:", w),
            g(
              n === "en"
                ? "Network error, please try again"
                : "網路錯誤，請重試",
            ));
        } finally {
          s();
        }
      };
    return e
      ? u.jsx("div", {
          className:
            "fixed inset-0 z-[9999] bg-[#F8F9FF] flex items-center justify-center",
          children: u.jsxs("div", {
            className: "w-full max-w-md p-8",
            children: [
              u.jsx("div", {
                className: "text-center mb-12",
                children: u.jsx("h1", {
                  className: "text-3xl font-bold mb-2 text-gray-900",
                  children: n === "zh" ? "盤點管理" : "Inventory Management",
                }),
              }),
              u.jsxs("form", {
                onSubmit: m,
                className: "space-y-6 bg-white rounded-2xl p-8 shadow-sm",
                children: [
                  u.jsxs("div", {
                    children: [
                      u.jsx("label", {
                        htmlFor: "userId",
                        className:
                          "block text-sm font-medium text-gray-700 mb-1",
                        children: n === "zh" ? "帳號" : "Account",
                      }),
                      u.jsx("input", {
                        type: "text",
                        id: "userId",
                        value: i,
                        onChange: (v) => l(v.target.value),
                        className:
                          "block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out",
                        autoComplete: "username",
                        placeholder:
                          n === "zh" ? "請輸入帳號" : "Enter account",
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    children: [
                      u.jsx("label", {
                        htmlFor: "password",
                        className:
                          "block text-sm font-medium text-gray-700 mb-1",
                        children: n === "zh" ? "密碼" : "Password",
                      }),
                      u.jsx("input", {
                        type: "password",
                        id: "password",
                        value: a,
                        onChange: (v) => c(v.target.value),
                        className:
                          "block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out",
                        autoComplete: "current-password",
                        placeholder:
                          n === "zh" ? "請輸入密碼" : "Enter password",
                      }),
                    ],
                  }),
                  p &&
                    u.jsx("div", {
                      className: "text-red-600 text-sm text-center",
                      children: p,
                    }),
                  u.jsx("button", {
                    type: "submit",
                    className:
                      "w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out font-medium text-lg",
                    children: n === "zh" ? "登入" : "Login",
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
  },
  Hp = [
    { id: "management", name: "management", href: "#" },
    { id: "merge", name: "merge", href: "../inventory_merge" },
    { id: "review", name: "review", href: "../inventory_review" },
  ],
  Xr = { 等待盤點: 0, 盤點中: 1, 鎖定: 2 },
  Bp = () => {
    const e = pl(),
      { showLoading: t, hideLoading: n } = Dr(),
      { sendMessage: r, fetchInventoryItems: o } = Pp(),
      [s, i] = E.useState("management"),
      [l, a] = E.useState("zh"),
      [c, p] = E.useState(!1),
      [g, m] = E.useState(!1),
      [v, w] = E.useState(!1),
      [x, D] = E.useState(!1),
      [f, d] = E.useState(!1),
      [h, _] = E.useState(!1),
      [C, T] = E.useState(""),
      [k, N] = E.useState("inventory"),
      [b, R] = E.useState([]),
      [U, et] = E.useState([]),
      [ut, B] = E.useState([]),
      [ee, se] = E.useState([]),
      [xt, I] = E.useState([]);
    (E.useEffect(() => {
      M();
    }, []),
      E.useEffect(() => {
        if (e) {
          (O(), G(), ze(), tt());
          const $ = setInterval(tt, 6e3);
          return () => clearInterval($);
        }
      }, [e]),
      E.useEffect(() => {
        ne();
      }, [b, k]));
    const M = () => {
        sessionStorage.getItem("user_session") || _(!0);
      },
      O = async () => {
        try {
          const $ = await ce.getMedCloud();
          (console.log("Medicine cloud data loaded:", $), se($.Data || []));
        } catch ($) {
          (console.error("Failed to fetch medicine cloud data:", $), se([]));
        }
      },
      G = async () => {
        try {
          const $ = await ce.getMedQtyGroup();
          (console.log("Medicine quantity group data loaded:", $),
            I($.Data || []));
        } catch ($) {
          (console.error("Failed to fetch medicine quantity group data:", $),
            I([]));
        }
      },
      ne = () => {
        if (!b.length) {
          et([]);
          return;
        }
        const $ = b.filter((fe) =>
          k === "review" ? fe.IC_SN.includes("REV") : !fe.IC_SN.includes("REV"),
        );
        et($);
      },
      ze = async () => {
        try {
          const fe = [...(await ce.getInventoryList())].sort(
            (zn, Jo) => (Xr[zn.STATE] ?? 999) - (Xr[Jo.STATE] ?? 999),
          );
          R(fe);
        } catch ($) {
          (console.error("Failed to fetch inventory items:", $), R([]));
        }
      },
      tt = async () => {
        try {
          const $ = await ce.getOnlineUsers();
          B($);
        } catch ($) {
          (console.error("Failed to fetch online users:", $), B([]));
        }
      },
      Fn = ($) => {
        const fe = ut.find((zn) => zn.parameter === $);
        return fe ? fe.count : 0;
      },
      ct = ($) => {
        const fe = [...$].sort(
          (zn, Jo) => (Xr[zn.STATE] ?? 999) - (Xr[Jo.STATE] ?? 999),
        );
        R(fe);
      },
      sn = async () => {
        await ze();
      },
      Zc = async () => {
        await ze();
      },
      ed = async () => {
        try {
          (t(), await ce.getExcelHeader());
        } catch ($) {
          console.error("Failed to download template:", $);
        } finally {
          n();
        }
      },
      td = async ($) => {
        (await ce.deleteInventory($, r), await ze());
      },
      nd = async ($, fe) => {
        (await ce.toggleLock($, fe, r), await ze());
      },
      rd = () => {
        a(($) => ($ === "en" ? "zh" : "en"));
      },
      vl = ($) => {
        N($);
      };
    return u.jsxs("div", {
      className: "min-h-screen bg-white",
      children: [
        u.jsx(Dp, { language: l, onLanguageChange: rd }),
        u.jsx(Rp, { tabs: Hp, activeTab: s, language: l, onTabChange: i }),
        u.jsxs("main", {
          className: "mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-8",
          children: [
            u.jsxs("div", {
              className:
                "flex justify-between flex-col sm:flex-row lg:flex-row",
              children: [
                u.jsxs("div", {
                  className: "flex space-x-4 mb-6",
                  children: [
                    u.jsx(st, {
                      onClick: ed,
                      icon: Qc,
                      children: P("downloadTemplate", l),
                    }),
                    u.jsx(st, {
                      onClick: () => p(!0),
                      icon: Kc,
                      children: P("search", l),
                    }),
                    u.jsx(st, {
                      onClick: () => m(!0),
                      icon: Gc,
                      children: P("uploadExcel", l),
                    }),
                    u.jsx(st, {
                      onClick: () => w(!0),
                      icon: zh,
                      children: P("createInventory", l),
                    }),
                  ],
                }),
                u.jsx("div", {
                  className: "mb-6",
                  children: u.jsx("div", {
                    className: "flex items-center space-x-4",
                    children: u.jsxs("div", {
                      className:
                        "relative inline-flex bg-blue-100 rounded-lg p-1 shadow-inner",
                      children: [
                        u.jsx("div", {
                          className: `absolute z-10 top-1 bottom-1 bg-blue-600 rounded-md shadow-sm transition-all duration-300 ease-in-out ${k === "inventory" ? "left-1 right-1/2" : "left-1/2 right-1"}`,
                        }),
                        u.jsx("button", {
                          onClick: () => vl("inventory"),
                          className: `relative z-20 px-2 py-2 text-base font-medium rounded-md transition-all duration-300 ease-in-out min-w-[80px] ${k === "inventory" ? "text-white" : "text-gray-500 hover:text-gray-800"}`,
                          children: P("inventoryForms", l),
                        }),
                        u.jsx("button", {
                          onClick: () => vl("review"),
                          className: `relative z-20 px-2 py-2 text-base font-medium rounded-md transition-all duration-300 ease-in-out min-w-[80px] ${k === "review" ? "text-white" : "text-gray-500 hover:text-gray-800"}`,
                          children: P("reviewForms", l),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
            u.jsx("div", {
              className: "grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1",
              children: U.map(($) =>
                u.jsx(
                  bp,
                  {
                    item: $,
                    language: l,
                    onlineUserCount: Fn($.IC_SN),
                    onDelete: td,
                    onLock: (fe) => nd(fe, $.STATE === "鎖定"),
                    onAddMedicine: (fe) => {
                      (T(fe), D(!0));
                    },
                    onEditStaff: (fe) => {
                      (T(fe), d(!0));
                    },
                  },
                  $.GUID,
                ),
              ),
            }),
            U.length === 0 &&
              b.length > 0 &&
              u.jsx("div", {
                className: "text-center py-12",
                children: u.jsx("p", {
                  className: "text-gray-500 text-lg",
                  children:
                    k === "review"
                      ? l === "en"
                        ? "No review forms found"
                        : "查無覆盤單"
                      : l === "en"
                        ? "No inventory forms found"
                        : "查無盤點單",
                }),
              }),
            b.length === 0 &&
              u.jsx("div", {
                className: "text-center py-12",
                children: u.jsx("p", {
                  className: "text-gray-500 text-lg",
                  children: P("noItemsFound", l),
                }),
              }),
          ],
        }),
        u.jsx("footer", {
          className:
            "w-full fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-1 px-6 text-center text-gray-600 text-sm z-10",
          children: u.jsx("div", {
            className: "mx-auto py-1 px-4 sm:px-6 lg:px-8",
            children: u.jsx("p", {
              className: "text-center text-base text-gray-500",
              children: "Copyright ©2025 鴻森智能科技",
            }),
          }),
        }),
        u.jsx(Op, {
          isOpen: c,
          onClose: () => p(!1),
          language: l,
          onSearch: ct,
          setInventoryItems: R,
        }),
        u.jsx($p, {
          isOpen: g,
          onClose: () => m(!1),
          language: l,
          onUploadSuccess: sn,
          sendMessage: r,
        }),
        u.jsx(Fp, {
          isOpen: v,
          onClose: () => w(!1),
          language: l,
          onCreateSuccess: Zc,
          sendMessage: r,
          medCloudData: ee,
          medQtyGroupData: xt,
        }),
        u.jsx(zp, {
          isOpen: x,
          onClose: () => D(!1),
          inventoryId: C,
          language: l,
          onUpdateSuccess: ze,
        }),
        u.jsx(Ap, {
          isOpen: f,
          onClose: () => d(!1),
          inventoryId: C,
          language: l,
          onUpdateSuccess: ze,
        }),
        u.jsx(Up, { isOpen: h, onClose: () => _(!1), language: l }),
      ],
    });
  };
function Wp() {
  return u.jsx(jp, { children: u.jsx(Qh, { children: u.jsx(Bp, {}) }) });
}
Vc(document.getElementById("root")).render(
  u.jsx(E.StrictMode, { children: u.jsx(Wp, {}) }),
);
