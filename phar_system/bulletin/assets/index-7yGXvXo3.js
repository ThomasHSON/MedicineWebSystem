(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) s(l);
  new MutationObserver((l) => {
    for (const a of l)
      if (a.type === "childList")
        for (const i of a.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(l) {
    const a = {};
    return (
      l.integrity && (a.integrity = l.integrity),
      l.referrerPolicy && (a.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (a.credentials = "omit")
        : (a.credentials = "same-origin"),
      a
    );
  }
  function s(l) {
    if (l.ep) return;
    l.ep = !0;
    const a = r(l);
    fetch(l.href, a);
  }
})();
function sd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var _o = { exports: {} },
  Ms = {},
  Io = { exports: {} },
  q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _n = Symbol.for("react.element"),
  ld = Symbol.for("react.portal"),
  ad = Symbol.for("react.fragment"),
  id = Symbol.for("react.strict_mode"),
  od = Symbol.for("react.profiler"),
  cd = Symbol.for("react.provider"),
  ud = Symbol.for("react.context"),
  dd = Symbol.for("react.forward_ref"),
  fd = Symbol.for("react.suspense"),
  md = Symbol.for("react.memo"),
  hd = Symbol.for("react.lazy"),
  xi = Symbol.iterator;
function pd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xi && e[xi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var zo = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  To = Object.assign,
  Po = {};
function Mr(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Po),
    (this.updater = r || zo);
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
function Ro() {}
Ro.prototype = Mr.prototype;
function Na(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Po),
    (this.updater = r || zo);
}
var ba = (Na.prototype = new Ro());
ba.constructor = Na;
To(ba, Mr.prototype);
ba.isPureReactComponent = !0;
var yi = Array.isArray,
  Mo = Object.prototype.hasOwnProperty,
  Sa = { current: null },
  Oo = { key: !0, ref: !0, __self: !0, __source: !0 };
function Lo(e, t, r) {
  var s,
    l = {},
    a = null,
    i = null;
  if (t != null)
    for (s in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (a = "" + t.key),
    t))
      Mo.call(t, s) && !Oo.hasOwnProperty(s) && (l[s] = t[s]);
  var o = arguments.length - 2;
  if (o === 1) l.children = r;
  else if (1 < o) {
    for (var c = Array(o), u = 0; u < o; u++) c[u] = arguments[u + 2];
    l.children = c;
  }
  if (e && e.defaultProps)
    for (s in ((o = e.defaultProps), o)) l[s] === void 0 && (l[s] = o[s]);
  return {
    $$typeof: _n,
    type: e,
    key: a,
    ref: i,
    props: l,
    _owner: Sa.current,
  };
}
function gd(e, t) {
  return {
    $$typeof: _n,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ka(e) {
  return typeof e == "object" && e !== null && e.$$typeof === _n;
}
function xd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var vi = /\/+/g;
function el(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? xd("" + e.key)
    : t.toString(36);
}
function Jn(e, t, r, s, l) {
  var a = typeof e;
  (a === "undefined" || a === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (a) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case _n:
          case ld:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = s === "" ? "." + el(i, 0) : s),
      yi(l)
        ? ((r = ""),
          e != null && (r = e.replace(vi, "$&/") + "/"),
          Jn(l, t, r, "", function (u) {
            return u;
          }))
        : l != null &&
          (ka(l) &&
            (l = gd(
              l,
              r +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(vi, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (s = s === "" ? "." : s + ":"), yi(e)))
    for (var o = 0; o < e.length; o++) {
      a = e[o];
      var c = s + el(a, o);
      i += Jn(a, t, r, c, l);
    }
  else if (((c = pd(e)), typeof c == "function"))
    for (e = c.call(e), o = 0; !(a = e.next()).done; )
      (a = a.value), (c = s + el(a, o++)), (i += Jn(a, t, r, c, l));
  else if (a === "object")
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
function Mn(e, t, r) {
  if (e == null) return e;
  var s = [],
    l = 0;
  return (
    Jn(e, s, "", "", function (a) {
      return t.call(r, a, l++);
    }),
    s
  );
}
function yd(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var be = { current: null },
  Zn = { transition: null },
  vd = {
    ReactCurrentDispatcher: be,
    ReactCurrentBatchConfig: Zn,
    ReactCurrentOwner: Sa,
  };
function Ao() {
  throw Error("act(...) is not supported in production builds of React.");
}
q.Children = {
  map: Mn,
  forEach: function (e, t, r) {
    Mn(
      e,
      function () {
        t.apply(this, arguments);
      },
      r
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Mn(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Mn(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ka(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
q.Component = Mr;
q.Fragment = ad;
q.Profiler = od;
q.PureComponent = Na;
q.StrictMode = id;
q.Suspense = fd;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vd;
q.act = Ao;
q.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var s = To({}, e.props),
    l = e.key,
    a = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (i = Sa.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (c in t)
      Mo.call(t, c) &&
        !Oo.hasOwnProperty(c) &&
        (s[c] = t[c] === void 0 && o !== void 0 ? o[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) s.children = r;
  else if (1 < c) {
    o = Array(c);
    for (var u = 0; u < c; u++) o[u] = arguments[u + 2];
    s.children = o;
  }
  return { $$typeof: _n, type: e.type, key: l, ref: a, props: s, _owner: i };
};
q.createContext = function (e) {
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
    (e.Provider = { $$typeof: cd, _context: e }),
    (e.Consumer = e)
  );
};
q.createElement = Lo;
q.createFactory = function (e) {
  var t = Lo.bind(null, e);
  return (t.type = e), t;
};
q.createRef = function () {
  return { current: null };
};
q.forwardRef = function (e) {
  return { $$typeof: dd, render: e };
};
q.isValidElement = ka;
q.lazy = function (e) {
  return { $$typeof: hd, _payload: { _status: -1, _result: e }, _init: yd };
};
q.memo = function (e, t) {
  return { $$typeof: md, type: e, compare: t === void 0 ? null : t };
};
q.startTransition = function (e) {
  var t = Zn.transition;
  Zn.transition = {};
  try {
    e();
  } finally {
    Zn.transition = t;
  }
};
q.unstable_act = Ao;
q.useCallback = function (e, t) {
  return be.current.useCallback(e, t);
};
q.useContext = function (e) {
  return be.current.useContext(e);
};
q.useDebugValue = function () {};
q.useDeferredValue = function (e) {
  return be.current.useDeferredValue(e);
};
q.useEffect = function (e, t) {
  return be.current.useEffect(e, t);
};
q.useId = function () {
  return be.current.useId();
};
q.useImperativeHandle = function (e, t, r) {
  return be.current.useImperativeHandle(e, t, r);
};
q.useInsertionEffect = function (e, t) {
  return be.current.useInsertionEffect(e, t);
};
q.useLayoutEffect = function (e, t) {
  return be.current.useLayoutEffect(e, t);
};
q.useMemo = function (e, t) {
  return be.current.useMemo(e, t);
};
q.useReducer = function (e, t, r) {
  return be.current.useReducer(e, t, r);
};
q.useRef = function (e) {
  return be.current.useRef(e);
};
q.useState = function (e) {
  return be.current.useState(e);
};
q.useSyncExternalStore = function (e, t, r) {
  return be.current.useSyncExternalStore(e, t, r);
};
q.useTransition = function () {
  return be.current.useTransition();
};
q.version = "18.3.1";
Io.exports = q;
var j = Io.exports;
const Pe = sd(j);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jd = j,
  wd = Symbol.for("react.element"),
  Nd = Symbol.for("react.fragment"),
  bd = Object.prototype.hasOwnProperty,
  Sd = jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  kd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fo(e, t, r) {
  var s,
    l = {},
    a = null,
    i = null;
  r !== void 0 && (a = "" + r),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (s in t) bd.call(t, s) && !kd.hasOwnProperty(s) && (l[s] = t[s]);
  if (e && e.defaultProps)
    for (s in ((t = e.defaultProps), t)) l[s] === void 0 && (l[s] = t[s]);
  return {
    $$typeof: wd,
    type: e,
    key: a,
    ref: i,
    props: l,
    _owner: Sd.current,
  };
}
Ms.Fragment = Nd;
Ms.jsx = Fo;
Ms.jsxs = Fo;
_o.exports = Ms;
var n = _o.exports,
  $o = { exports: {} },
  Fe = {},
  Uo = { exports: {} },
  qo = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, F) {
    var E = P.length;
    P.push(F);
    e: for (; 0 < E; ) {
      var S = (E - 1) >>> 1,
        b = P[S];
      if (0 < l(b, F)) (P[S] = F), (P[E] = b), (E = S);
      else break e;
    }
  }
  function r(P) {
    return P.length === 0 ? null : P[0];
  }
  function s(P) {
    if (P.length === 0) return null;
    var F = P[0],
      E = P.pop();
    if (E !== F) {
      P[0] = E;
      e: for (var S = 0, b = P.length, R = b >>> 1; S < R; ) {
        var A = 2 * (S + 1) - 1,
          U = P[A],
          je = A + 1,
          $r = P[je];
        if (0 > l(U, E))
          je < b && 0 > l($r, U)
            ? ((P[S] = $r), (P[je] = E), (S = je))
            : ((P[S] = U), (P[A] = E), (S = A));
        else if (je < b && 0 > l($r, E)) (P[S] = $r), (P[je] = E), (S = je);
        else break e;
      }
    }
    return F;
  }
  function l(P, F) {
    var E = P.sortIndex - F.sortIndex;
    return E !== 0 ? E : P.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var i = Date,
      o = i.now();
    e.unstable_now = function () {
      return i.now() - o;
    };
  }
  var c = [],
    u = [],
    d = 1,
    m = null,
    p = 3,
    x = !1,
    y = !1,
    N = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(P) {
    for (var F = r(u); F !== null; ) {
      if (F.callback === null) s(u);
      else if (F.startTime <= P)
        s(u), (F.sortIndex = F.expirationTime), t(c, F);
      else break;
      F = r(u);
    }
  }
  function w(P) {
    if (((N = !1), f(P), !y))
      if (r(c) !== null) (y = !0), M(C);
      else {
        var F = r(u);
        F !== null && X(w, F.startTime - P);
      }
  }
  function C(P, F) {
    (y = !1), N && ((N = !1), g(I), (I = -1)), (x = !0);
    var E = p;
    try {
      for (
        f(F), m = r(c);
        m !== null && (!(m.expirationTime > F) || (P && !L()));

      ) {
        var S = m.callback;
        if (typeof S == "function") {
          (m.callback = null), (p = m.priorityLevel);
          var b = S(m.expirationTime <= F);
          (F = e.unstable_now()),
            typeof b == "function" ? (m.callback = b) : m === r(c) && s(c),
            f(F);
        } else s(c);
        m = r(c);
      }
      if (m !== null) var R = !0;
      else {
        var A = r(u);
        A !== null && X(w, A.startTime - F), (R = !1);
      }
      return R;
    } finally {
      (m = null), (p = E), (x = !1);
    }
  }
  var z = !1,
    _ = null,
    I = -1,
    v = 5,
    D = -1;
  function L() {
    return !(e.unstable_now() - D < v);
  }
  function $() {
    if (_ !== null) {
      var P = e.unstable_now();
      D = P;
      var F = !0;
      try {
        F = _(!0, P);
      } finally {
        F ? B() : ((z = !1), (_ = null));
      }
    } else z = !1;
  }
  var B;
  if (typeof h == "function")
    B = function () {
      h($);
    };
  else if (typeof MessageChannel < "u") {
    var se = new MessageChannel(),
      ae = se.port2;
    (se.port1.onmessage = $),
      (B = function () {
        ae.postMessage(null);
      });
  } else
    B = function () {
      k($, 0);
    };
  function M(P) {
    (_ = P), z || ((z = !0), B());
  }
  function X(P, F) {
    I = k(function () {
      P(e.unstable_now());
    }, F);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || x || ((y = !0), M(C));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (v = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(c);
    }),
    (e.unstable_next = function (P) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = p;
      }
      var E = p;
      p = F;
      try {
        return P();
      } finally {
        p = E;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, F) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var E = p;
      p = P;
      try {
        return F();
      } finally {
        p = E;
      }
    }),
    (e.unstable_scheduleCallback = function (P, F, E) {
      var S = e.unstable_now();
      switch (
        (typeof E == "object" && E !== null
          ? ((E = E.delay), (E = typeof E == "number" && 0 < E ? S + E : S))
          : (E = S),
        P)
      ) {
        case 1:
          var b = -1;
          break;
        case 2:
          b = 250;
          break;
        case 5:
          b = 1073741823;
          break;
        case 4:
          b = 1e4;
          break;
        default:
          b = 5e3;
      }
      return (
        (b = E + b),
        (P = {
          id: d++,
          callback: F,
          priorityLevel: P,
          startTime: E,
          expirationTime: b,
          sortIndex: -1,
        }),
        E > S
          ? ((P.sortIndex = E),
            t(u, P),
            r(c) === null &&
              P === r(u) &&
              (N ? (g(I), (I = -1)) : (N = !0), X(w, E - S)))
          : ((P.sortIndex = b), t(c, P), y || x || ((y = !0), M(C))),
        P
      );
    }),
    (e.unstable_shouldYield = L),
    (e.unstable_wrapCallback = function (P) {
      var F = p;
      return function () {
        var E = p;
        p = F;
        try {
          return P.apply(this, arguments);
        } finally {
          p = E;
        }
      };
    });
})(qo);
Uo.exports = qo;
var Cd = Uo.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ed = j,
  Oe = Cd;
function T(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Vo = new Set(),
  un = {};
function sr(e, t) {
  Er(e, t), Er(e + "Capture", t);
}
function Er(e, t) {
  for (un[e] = t, e = 0; e < t.length; e++) Vo.add(t[e]);
}
var dt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Il = Object.prototype.hasOwnProperty,
  Dd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ji = {},
  wi = {};
function _d(e) {
  return Il.call(wi, e)
    ? !0
    : Il.call(ji, e)
    ? !1
    : Dd.test(e)
    ? (wi[e] = !0)
    : ((ji[e] = !0), !1);
}
function Id(e, t, r, s) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return s
        ? !1
        : r !== null
        ? !r.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function zd(e, t, r, s) {
  if (t === null || typeof t > "u" || Id(e, t, r, s)) return !0;
  if (s) return !1;
  if (r !== null)
    switch (r.type) {
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
function Se(e, t, r, s, l, a, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = s),
    (this.attributeNamespace = l),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = i);
}
var pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    pe[e] = new Se(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  pe[t] = new Se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  pe[e] = new Se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  pe[e] = new Se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    pe[e] = new Se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  pe[e] = new Se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  pe[e] = new Se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  pe[e] = new Se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  pe[e] = new Se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ca = /[\-:]([a-z])/g;
function Ea(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ca, Ea);
    pe[t] = new Se(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ca, Ea);
    pe[t] = new Se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ca, Ea);
  pe[t] = new Se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  pe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
pe.xlinkHref = new Se(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  pe[e] = new Se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Da(e, t, r, s) {
  var l = pe.hasOwnProperty(t) ? pe[t] : null;
  (l !== null
    ? l.type !== 0
    : s ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (zd(t, r, l, s) && (r = null),
    s || l === null
      ? _d(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
      : l.mustUseProperty
      ? (e[l.propertyName] = r === null ? (l.type === 3 ? !1 : "") : r)
      : ((t = l.attributeName),
        (s = l.attributeNamespace),
        r === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (r = l === 3 || (l === 4 && r === !0) ? "" : "" + r),
            s ? e.setAttributeNS(s, t, r) : e.setAttribute(t, r))));
}
var xt = Ed.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  On = Symbol.for("react.element"),
  or = Symbol.for("react.portal"),
  cr = Symbol.for("react.fragment"),
  _a = Symbol.for("react.strict_mode"),
  zl = Symbol.for("react.profiler"),
  Ho = Symbol.for("react.provider"),
  Bo = Symbol.for("react.context"),
  Ia = Symbol.for("react.forward_ref"),
  Tl = Symbol.for("react.suspense"),
  Pl = Symbol.for("react.suspense_list"),
  za = Symbol.for("react.memo"),
  jt = Symbol.for("react.lazy"),
  Qo = Symbol.for("react.offscreen"),
  Ni = Symbol.iterator;
function Ur(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ni && e[Ni]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var te = Object.assign,
  tl;
function Kr(e) {
  if (tl === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      tl = (t && t[1]) || "";
    }
  return (
    `
` +
    tl +
    e
  );
}
var rl = !1;
function nl(e, t) {
  if (!e || rl) return "";
  rl = !0;
  var r = Error.prepareStackTrace;
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
          var s = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          s = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        s = u;
      }
      e();
    }
  } catch (u) {
    if (u && s && typeof u.stack == "string") {
      for (
        var l = u.stack.split(`
`),
          a = s.stack.split(`
`),
          i = l.length - 1,
          o = a.length - 1;
        1 <= i && 0 <= o && l[i] !== a[o];

      )
        o--;
      for (; 1 <= i && 0 <= o; i--, o--)
        if (l[i] !== a[o]) {
          if (i !== 1 || o !== 1)
            do
              if ((i--, o--, 0 > o || l[i] !== a[o])) {
                var c =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= i && 0 <= o);
          break;
        }
    }
  } finally {
    (rl = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? Kr(e) : "";
}
function Td(e) {
  switch (e.tag) {
    case 5:
      return Kr(e.type);
    case 16:
      return Kr("Lazy");
    case 13:
      return Kr("Suspense");
    case 19:
      return Kr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = nl(e.type, !1)), e;
    case 11:
      return (e = nl(e.type.render, !1)), e;
    case 1:
      return (e = nl(e.type, !0)), e;
    default:
      return "";
  }
}
function Rl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case cr:
      return "Fragment";
    case or:
      return "Portal";
    case zl:
      return "Profiler";
    case _a:
      return "StrictMode";
    case Tl:
      return "Suspense";
    case Pl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Bo:
        return (e.displayName || "Context") + ".Consumer";
      case Ho:
        return (e._context.displayName || "Context") + ".Provider";
      case Ia:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case za:
        return (
          (t = e.displayName || null), t !== null ? t : Rl(e.type) || "Memo"
        );
      case jt:
        (t = e._payload), (e = e._init);
        try {
          return Rl(e(t));
        } catch {}
    }
  return null;
}
function Pd(e) {
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
      return Rl(t);
    case 8:
      return t === _a ? "StrictMode" : "Mode";
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
function Rt(e) {
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
function Wo(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Rd(e) {
  var t = Wo(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    s = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var l = r.get,
      a = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (s = "" + i), a.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return s;
        },
        setValue: function (i) {
          s = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ln(e) {
  e._valueTracker || (e._valueTracker = Rd(e));
}
function Go(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    s = "";
  return (
    e && (s = Wo(e) ? (e.checked ? "true" : "false") : e.value),
    (e = s),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function us(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ml(e, t) {
  var r = t.checked;
  return te({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function bi(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    s = t.checked != null ? t.checked : t.defaultChecked;
  (r = Rt(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: s,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ko(e, t) {
  (t = t.checked), t != null && Da(e, "checked", t, !1);
}
function Ol(e, t) {
  Ko(e, t);
  var r = Rt(t.value),
    s = t.type;
  if (r != null)
    s === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (s === "submit" || s === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ll(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && Ll(e, t.type, Rt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Si(e, t, r) {
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
      r || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r);
}
function Ll(e, t, r) {
  (t !== "number" || us(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var Yr = Array.isArray;
function jr(e, t, r, s) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < r.length; l++) t["$" + r[l]] = !0;
    for (r = 0; r < e.length; r++)
      (l = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== l && (e[r].selected = l),
        l && s && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + Rt(r), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === r) {
        (e[l].selected = !0), s && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Al(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
  return te({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ki(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(T(92));
      if (Yr(r)) {
        if (1 < r.length) throw Error(T(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: Rt(r) };
}
function Yo(e, t) {
  var r = Rt(t.value),
    s = Rt(t.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    s != null && (e.defaultValue = "" + s);
}
function Ci(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Xo(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Fl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Xo(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var An,
  Jo = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, r, s, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, s, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        An = An || document.createElement("div"),
          An.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = An.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function dn(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Zr = {
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
  Md = ["Webkit", "ms", "Moz", "O"];
Object.keys(Zr).forEach(function (e) {
  Md.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Zr[t] = Zr[e]);
  });
});
function Zo(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (Zr.hasOwnProperty(e) && Zr[e])
    ? ("" + t).trim()
    : t + "px";
}
function ec(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var s = r.indexOf("--") === 0,
        l = Zo(r, t[r], s);
      r === "float" && (r = "cssFloat"), s ? e.setProperty(r, l) : (e[r] = l);
    }
}
var Od = te(
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
function $l(e, t) {
  if (t) {
    if (Od[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Ul(e, t) {
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
var ql = null;
function Ta(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Vl = null,
  wr = null,
  Nr = null;
function Ei(e) {
  if ((e = Tn(e))) {
    if (typeof Vl != "function") throw Error(T(280));
    var t = e.stateNode;
    t && ((t = $s(t)), Vl(e.stateNode, e.type, t));
  }
}
function tc(e) {
  wr ? (Nr ? Nr.push(e) : (Nr = [e])) : (wr = e);
}
function rc() {
  if (wr) {
    var e = wr,
      t = Nr;
    if (((Nr = wr = null), Ei(e), t)) for (e = 0; e < t.length; e++) Ei(t[e]);
  }
}
function nc(e, t) {
  return e(t);
}
function sc() {}
var sl = !1;
function lc(e, t, r) {
  if (sl) return e(t, r);
  sl = !0;
  try {
    return nc(e, t, r);
  } finally {
    (sl = !1), (wr !== null || Nr !== null) && (sc(), rc());
  }
}
function fn(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var s = $s(r);
  if (s === null) return null;
  r = s[t];
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
  if (r && typeof r != "function") throw Error(T(231, t, typeof r));
  return r;
}
var Hl = !1;
if (dt)
  try {
    var qr = {};
    Object.defineProperty(qr, "passive", {
      get: function () {
        Hl = !0;
      },
    }),
      window.addEventListener("test", qr, qr),
      window.removeEventListener("test", qr, qr);
  } catch {
    Hl = !1;
  }
function Ld(e, t, r, s, l, a, i, o, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (d) {
    this.onError(d);
  }
}
var en = !1,
  ds = null,
  fs = !1,
  Bl = null,
  Ad = {
    onError: function (e) {
      (en = !0), (ds = e);
    },
  };
function Fd(e, t, r, s, l, a, i, o, c) {
  (en = !1), (ds = null), Ld.apply(Ad, arguments);
}
function $d(e, t, r, s, l, a, i, o, c) {
  if ((Fd.apply(this, arguments), en)) {
    if (en) {
      var u = ds;
      (en = !1), (ds = null);
    } else throw Error(T(198));
    fs || ((fs = !0), (Bl = u));
  }
}
function lr(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function ac(e) {
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
function Di(e) {
  if (lr(e) !== e) throw Error(T(188));
}
function Ud(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = lr(e)), t === null)) throw Error(T(188));
    return t !== e ? null : e;
  }
  for (var r = e, s = t; ; ) {
    var l = r.return;
    if (l === null) break;
    var a = l.alternate;
    if (a === null) {
      if (((s = l.return), s !== null)) {
        r = s;
        continue;
      }
      break;
    }
    if (l.child === a.child) {
      for (a = l.child; a; ) {
        if (a === r) return Di(l), e;
        if (a === s) return Di(l), t;
        a = a.sibling;
      }
      throw Error(T(188));
    }
    if (r.return !== s.return) (r = l), (s = a);
    else {
      for (var i = !1, o = l.child; o; ) {
        if (o === r) {
          (i = !0), (r = l), (s = a);
          break;
        }
        if (o === s) {
          (i = !0), (s = l), (r = a);
          break;
        }
        o = o.sibling;
      }
      if (!i) {
        for (o = a.child; o; ) {
          if (o === r) {
            (i = !0), (r = a), (s = l);
            break;
          }
          if (o === s) {
            (i = !0), (s = a), (r = l);
            break;
          }
          o = o.sibling;
        }
        if (!i) throw Error(T(189));
      }
    }
    if (r.alternate !== s) throw Error(T(190));
  }
  if (r.tag !== 3) throw Error(T(188));
  return r.stateNode.current === r ? e : t;
}
function ic(e) {
  return (e = Ud(e)), e !== null ? oc(e) : null;
}
function oc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = oc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var cc = Oe.unstable_scheduleCallback,
  _i = Oe.unstable_cancelCallback,
  qd = Oe.unstable_shouldYield,
  Vd = Oe.unstable_requestPaint,
  le = Oe.unstable_now,
  Hd = Oe.unstable_getCurrentPriorityLevel,
  Pa = Oe.unstable_ImmediatePriority,
  uc = Oe.unstable_UserBlockingPriority,
  ms = Oe.unstable_NormalPriority,
  Bd = Oe.unstable_LowPriority,
  dc = Oe.unstable_IdlePriority,
  Os = null,
  nt = null;
function Qd(e) {
  if (nt && typeof nt.onCommitFiberRoot == "function")
    try {
      nt.onCommitFiberRoot(Os, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Xe = Math.clz32 ? Math.clz32 : Kd,
  Wd = Math.log,
  Gd = Math.LN2;
function Kd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Wd(e) / Gd) | 0)) | 0;
}
var Fn = 64,
  $n = 4194304;
function Xr(e) {
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
function hs(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var s = 0,
    l = e.suspendedLanes,
    a = e.pingedLanes,
    i = r & 268435455;
  if (i !== 0) {
    var o = i & ~l;
    o !== 0 ? (s = Xr(o)) : ((a &= i), a !== 0 && (s = Xr(a)));
  } else (i = r & ~l), i !== 0 ? (s = Xr(i)) : a !== 0 && (s = Xr(a));
  if (s === 0) return 0;
  if (
    t !== 0 &&
    t !== s &&
    !(t & l) &&
    ((l = s & -s), (a = t & -t), l >= a || (l === 16 && (a & 4194240) !== 0))
  )
    return t;
  if ((s & 4 && (s |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= s; 0 < t; )
      (r = 31 - Xe(t)), (l = 1 << r), (s |= e[r]), (t &= ~l);
  return s;
}
function Yd(e, t) {
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
    var r = e.suspendedLanes,
      s = e.pingedLanes,
      l = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var i = 31 - Xe(a),
      o = 1 << i,
      c = l[i];
    c === -1
      ? (!(o & r) || o & s) && (l[i] = Yd(o, t))
      : c <= t && (e.expiredLanes |= o),
      (a &= ~o);
  }
}
function Ql(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function fc() {
  var e = Fn;
  return (Fn <<= 1), !(Fn & 4194240) && (Fn = 64), e;
}
function ll(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function In(e, t, r) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Xe(t)),
    (e[t] = r);
}
function Jd(e, t) {
  var r = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var s = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var l = 31 - Xe(r),
      a = 1 << l;
    (t[l] = 0), (s[l] = -1), (e[l] = -1), (r &= ~a);
  }
}
function Ra(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var s = 31 - Xe(r),
      l = 1 << s;
    (l & t) | (e[s] & t) && (e[s] |= t), (r &= ~l);
  }
}
var Q = 0;
function mc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var hc,
  Ma,
  pc,
  gc,
  xc,
  Wl = !1,
  Un = [],
  Ct = null,
  Et = null,
  Dt = null,
  mn = new Map(),
  hn = new Map(),
  Nt = [],
  Zd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ii(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ct = null;
      break;
    case "dragenter":
    case "dragleave":
      Et = null;
      break;
    case "mouseover":
    case "mouseout":
      Dt = null;
      break;
    case "pointerover":
    case "pointerout":
      mn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      hn.delete(t.pointerId);
  }
}
function Vr(e, t, r, s, l, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: s,
        nativeEvent: a,
        targetContainers: [l],
      }),
      t !== null && ((t = Tn(t)), t !== null && Ma(t)),
      e)
    : ((e.eventSystemFlags |= s),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function ef(e, t, r, s, l) {
  switch (t) {
    case "focusin":
      return (Ct = Vr(Ct, e, t, r, s, l)), !0;
    case "dragenter":
      return (Et = Vr(Et, e, t, r, s, l)), !0;
    case "mouseover":
      return (Dt = Vr(Dt, e, t, r, s, l)), !0;
    case "pointerover":
      var a = l.pointerId;
      return mn.set(a, Vr(mn.get(a) || null, e, t, r, s, l)), !0;
    case "gotpointercapture":
      return (
        (a = l.pointerId), hn.set(a, Vr(hn.get(a) || null, e, t, r, s, l)), !0
      );
  }
  return !1;
}
function yc(e) {
  var t = Ht(e.target);
  if (t !== null) {
    var r = lr(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = ac(r)), t !== null)) {
          (e.blockedOn = t),
            xc(e.priority, function () {
              pc(r);
            });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function es(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Gl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var s = new r.constructor(r.type, r);
      (ql = s), r.target.dispatchEvent(s), (ql = null);
    } else return (t = Tn(r)), t !== null && Ma(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function zi(e, t, r) {
  es(e) && r.delete(t);
}
function tf() {
  (Wl = !1),
    Ct !== null && es(Ct) && (Ct = null),
    Et !== null && es(Et) && (Et = null),
    Dt !== null && es(Dt) && (Dt = null),
    mn.forEach(zi),
    hn.forEach(zi);
}
function Hr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Wl ||
      ((Wl = !0),
      Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, tf)));
}
function pn(e) {
  function t(l) {
    return Hr(l, e);
  }
  if (0 < Un.length) {
    Hr(Un[0], e);
    for (var r = 1; r < Un.length; r++) {
      var s = Un[r];
      s.blockedOn === e && (s.blockedOn = null);
    }
  }
  for (
    Ct !== null && Hr(Ct, e),
      Et !== null && Hr(Et, e),
      Dt !== null && Hr(Dt, e),
      mn.forEach(t),
      hn.forEach(t),
      r = 0;
    r < Nt.length;
    r++
  )
    (s = Nt[r]), s.blockedOn === e && (s.blockedOn = null);
  for (; 0 < Nt.length && ((r = Nt[0]), r.blockedOn === null); )
    yc(r), r.blockedOn === null && Nt.shift();
}
var br = xt.ReactCurrentBatchConfig,
  ps = !0;
function rf(e, t, r, s) {
  var l = Q,
    a = br.transition;
  br.transition = null;
  try {
    (Q = 1), Oa(e, t, r, s);
  } finally {
    (Q = l), (br.transition = a);
  }
}
function nf(e, t, r, s) {
  var l = Q,
    a = br.transition;
  br.transition = null;
  try {
    (Q = 4), Oa(e, t, r, s);
  } finally {
    (Q = l), (br.transition = a);
  }
}
function Oa(e, t, r, s) {
  if (ps) {
    var l = Gl(e, t, r, s);
    if (l === null) pl(e, t, s, gs, r), Ii(e, s);
    else if (ef(l, e, t, r, s)) s.stopPropagation();
    else if ((Ii(e, s), t & 4 && -1 < Zd.indexOf(e))) {
      for (; l !== null; ) {
        var a = Tn(l);
        if (
          (a !== null && hc(a),
          (a = Gl(e, t, r, s)),
          a === null && pl(e, t, s, gs, r),
          a === l)
        )
          break;
        l = a;
      }
      l !== null && s.stopPropagation();
    } else pl(e, t, s, null, r);
  }
}
var gs = null;
function Gl(e, t, r, s) {
  if (((gs = null), (e = Ta(s)), (e = Ht(e)), e !== null))
    if (((t = lr(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = ac(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (gs = e), null;
}
function vc(e) {
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
      switch (Hd()) {
        case Pa:
          return 1;
        case uc:
          return 4;
        case ms:
        case Bd:
          return 16;
        case dc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var St = null,
  La = null,
  ts = null;
function jc() {
  if (ts) return ts;
  var e,
    t = La,
    r = t.length,
    s,
    l = "value" in St ? St.value : St.textContent,
    a = l.length;
  for (e = 0; e < r && t[e] === l[e]; e++);
  var i = r - e;
  for (s = 1; s <= i && t[r - s] === l[a - s]; s++);
  return (ts = l.slice(e, 1 < s ? 1 - s : void 0));
}
function rs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function qn() {
  return !0;
}
function Ti() {
  return !1;
}
function $e(e) {
  function t(r, s, l, a, i) {
    (this._reactName = r),
      (this._targetInst = l),
      (this.type = s),
      (this.nativeEvent = a),
      (this.target = i),
      (this.currentTarget = null);
    for (var o in e)
      e.hasOwnProperty(o) && ((r = e[o]), (this[o] = r ? r(a) : a[o]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? qn
        : Ti),
      (this.isPropagationStopped = Ti),
      this
    );
  }
  return (
    te(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = qn));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = qn));
      },
      persist: function () {},
      isPersistent: qn,
    }),
    t
  );
}
var Or = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Aa = $e(Or),
  zn = te({}, Or, { view: 0, detail: 0 }),
  sf = $e(zn),
  al,
  il,
  Br,
  Ls = te({}, zn, {
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
    getModifierState: Fa,
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
        : (e !== Br &&
            (Br && e.type === "mousemove"
              ? ((al = e.screenX - Br.screenX), (il = e.screenY - Br.screenY))
              : (il = al = 0),
            (Br = e)),
          al);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : il;
    },
  }),
  Pi = $e(Ls),
  lf = te({}, Ls, { dataTransfer: 0 }),
  af = $e(lf),
  of = te({}, zn, { relatedTarget: 0 }),
  ol = $e(of),
  cf = te({}, Or, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  uf = $e(cf),
  df = te({}, Or, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ff = $e(df),
  mf = te({}, Or, { data: 0 }),
  Ri = $e(mf),
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
  gf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function xf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = gf[e]) ? !!t[e] : !1;
}
function Fa() {
  return xf;
}
var yf = te({}, zn, {
    key: function (e) {
      if (e.key) {
        var t = hf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = rs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
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
    getModifierState: Fa,
    charCode: function (e) {
      return e.type === "keypress" ? rs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? rs(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  vf = $e(yf),
  jf = te({}, Ls, {
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
  Mi = $e(jf),
  wf = te({}, zn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fa,
  }),
  Nf = $e(wf),
  bf = te({}, Or, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sf = $e(bf),
  kf = te({}, Ls, {
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
  Cf = $e(kf),
  Ef = [9, 13, 27, 32],
  $a = dt && "CompositionEvent" in window,
  tn = null;
dt && "documentMode" in document && (tn = document.documentMode);
var Df = dt && "TextEvent" in window && !tn,
  wc = dt && (!$a || (tn && 8 < tn && 11 >= tn)),
  Oi = " ",
  Li = !1;
function Nc(e, t) {
  switch (e) {
    case "keyup":
      return Ef.indexOf(t.keyCode) !== -1;
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
function bc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ur = !1;
function _f(e, t) {
  switch (e) {
    case "compositionend":
      return bc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Li = !0), Oi);
    case "textInput":
      return (e = t.data), e === Oi && Li ? null : e;
    default:
      return null;
  }
}
function If(e, t) {
  if (ur)
    return e === "compositionend" || (!$a && Nc(e, t))
      ? ((e = jc()), (ts = La = St = null), (ur = !1), e)
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
      return wc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var zf = {
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
function Ai(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!zf[e.type] : t === "textarea";
}
function Sc(e, t, r, s) {
  tc(s),
    (t = xs(t, "onChange")),
    0 < t.length &&
      ((r = new Aa("onChange", "change", null, r, s)),
      e.push({ event: r, listeners: t }));
}
var rn = null,
  gn = null;
function Tf(e) {
  Mc(e, 0);
}
function As(e) {
  var t = mr(e);
  if (Go(t)) return e;
}
function Pf(e, t) {
  if (e === "change") return t;
}
var kc = !1;
if (dt) {
  var cl;
  if (dt) {
    var ul = "oninput" in document;
    if (!ul) {
      var Fi = document.createElement("div");
      Fi.setAttribute("oninput", "return;"),
        (ul = typeof Fi.oninput == "function");
    }
    cl = ul;
  } else cl = !1;
  kc = cl && (!document.documentMode || 9 < document.documentMode);
}
function $i() {
  rn && (rn.detachEvent("onpropertychange", Cc), (gn = rn = null));
}
function Cc(e) {
  if (e.propertyName === "value" && As(gn)) {
    var t = [];
    Sc(t, gn, e, Ta(e)), lc(Tf, t);
  }
}
function Rf(e, t, r) {
  e === "focusin"
    ? ($i(), (rn = t), (gn = r), rn.attachEvent("onpropertychange", Cc))
    : e === "focusout" && $i();
}
function Mf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return As(gn);
}
function Of(e, t) {
  if (e === "click") return As(t);
}
function Lf(e, t) {
  if (e === "input" || e === "change") return As(t);
}
function Af(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ze = typeof Object.is == "function" ? Object.is : Af;
function xn(e, t) {
  if (Ze(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    s = Object.keys(t);
  if (r.length !== s.length) return !1;
  for (s = 0; s < r.length; s++) {
    var l = r[s];
    if (!Il.call(t, l) || !Ze(e[l], t[l])) return !1;
  }
  return !0;
}
function Ui(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function qi(e, t) {
  var r = Ui(e);
  e = 0;
  for (var s; r; ) {
    if (r.nodeType === 3) {
      if (((s = e + r.textContent.length), e <= t && s >= t))
        return { node: r, offset: t - e };
      e = s;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = Ui(r);
  }
}
function Ec(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ec(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Dc() {
  for (var e = window, t = us(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = us(e.document);
  }
  return t;
}
function Ua(e) {
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
  var t = Dc(),
    r = e.focusedElem,
    s = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    Ec(r.ownerDocument.documentElement, r)
  ) {
    if (s !== null && Ua(r)) {
      if (
        ((t = s.start),
        (e = s.end),
        e === void 0 && (e = t),
        "selectionStart" in r)
      )
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = r.textContent.length,
          a = Math.min(s.start, l);
        (s = s.end === void 0 ? a : Math.min(s.end, l)),
          !e.extend && a > s && ((l = s), (s = a), (a = l)),
          (l = qi(r, a));
        var i = qi(r, s);
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
          a > s
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var $f = dt && "documentMode" in document && 11 >= document.documentMode,
  dr = null,
  Kl = null,
  nn = null,
  Yl = !1;
function Vi(e, t, r) {
  var s = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Yl ||
    dr == null ||
    dr !== us(s) ||
    ((s = dr),
    "selectionStart" in s && Ua(s)
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
    (nn && xn(nn, s)) ||
      ((nn = s),
      (s = xs(Kl, "onSelect")),
      0 < s.length &&
        ((t = new Aa("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: s }),
        (t.target = dr))));
}
function Vn(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var fr = {
    animationend: Vn("Animation", "AnimationEnd"),
    animationiteration: Vn("Animation", "AnimationIteration"),
    animationstart: Vn("Animation", "AnimationStart"),
    transitionend: Vn("Transition", "TransitionEnd"),
  },
  dl = {},
  _c = {};
dt &&
  ((_c = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete fr.animationend.animation,
    delete fr.animationiteration.animation,
    delete fr.animationstart.animation),
  "TransitionEvent" in window || delete fr.transitionend.transition);
function Fs(e) {
  if (dl[e]) return dl[e];
  if (!fr[e]) return e;
  var t = fr[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in _c) return (dl[e] = t[r]);
  return e;
}
var Ic = Fs("animationend"),
  zc = Fs("animationiteration"),
  Tc = Fs("animationstart"),
  Pc = Fs("transitionend"),
  Rc = new Map(),
  Hi =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Lt(e, t) {
  Rc.set(e, t), sr(t, [e]);
}
for (var fl = 0; fl < Hi.length; fl++) {
  var ml = Hi[fl],
    Uf = ml.toLowerCase(),
    qf = ml[0].toUpperCase() + ml.slice(1);
  Lt(Uf, "on" + qf);
}
Lt(Ic, "onAnimationEnd");
Lt(zc, "onAnimationIteration");
Lt(Tc, "onAnimationStart");
Lt("dblclick", "onDoubleClick");
Lt("focusin", "onFocus");
Lt("focusout", "onBlur");
Lt(Pc, "onTransitionEnd");
Er("onMouseEnter", ["mouseout", "mouseover"]);
Er("onMouseLeave", ["mouseout", "mouseover"]);
Er("onPointerEnter", ["pointerout", "pointerover"]);
Er("onPointerLeave", ["pointerout", "pointerover"]);
sr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
sr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
sr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
sr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
sr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
sr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Jr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Vf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Jr));
function Bi(e, t, r) {
  var s = e.type || "unknown-event";
  (e.currentTarget = r), $d(s, t, void 0, e), (e.currentTarget = null);
}
function Mc(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var s = e[r],
      l = s.event;
    s = s.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var i = s.length - 1; 0 <= i; i--) {
          var o = s[i],
            c = o.instance,
            u = o.currentTarget;
          if (((o = o.listener), c !== a && l.isPropagationStopped())) break e;
          Bi(l, o, u), (a = c);
        }
      else
        for (i = 0; i < s.length; i++) {
          if (
            ((o = s[i]),
            (c = o.instance),
            (u = o.currentTarget),
            (o = o.listener),
            c !== a && l.isPropagationStopped())
          )
            break e;
          Bi(l, o, u), (a = c);
        }
    }
  }
  if (fs) throw ((e = Bl), (fs = !1), (Bl = null), e);
}
function G(e, t) {
  var r = t[ta];
  r === void 0 && (r = t[ta] = new Set());
  var s = e + "__bubble";
  r.has(s) || (Oc(t, e, 2, !1), r.add(s));
}
function hl(e, t, r) {
  var s = 0;
  t && (s |= 4), Oc(r, e, s, t);
}
var Hn = "_reactListening" + Math.random().toString(36).slice(2);
function yn(e) {
  if (!e[Hn]) {
    (e[Hn] = !0),
      Vo.forEach(function (r) {
        r !== "selectionchange" && (Vf.has(r) || hl(r, !1, e), hl(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Hn] || ((t[Hn] = !0), hl("selectionchange", !1, t));
  }
}
function Oc(e, t, r, s) {
  switch (vc(t)) {
    case 1:
      var l = rf;
      break;
    case 4:
      l = nf;
      break;
    default:
      l = Oa;
  }
  (r = l.bind(null, t, r, e)),
    (l = void 0),
    !Hl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    s
      ? l !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: l })
        : e.addEventListener(t, r, !0)
      : l !== void 0
      ? e.addEventListener(t, r, { passive: l })
      : e.addEventListener(t, r, !1);
}
function pl(e, t, r, s, l) {
  var a = s;
  if (!(t & 1) && !(t & 2) && s !== null)
    e: for (;;) {
      if (s === null) return;
      var i = s.tag;
      if (i === 3 || i === 4) {
        var o = s.stateNode.containerInfo;
        if (o === l || (o.nodeType === 8 && o.parentNode === l)) break;
        if (i === 4)
          for (i = s.return; i !== null; ) {
            var c = i.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = i.stateNode.containerInfo),
              c === l || (c.nodeType === 8 && c.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; o !== null; ) {
          if (((i = Ht(o)), i === null)) return;
          if (((c = i.tag), c === 5 || c === 6)) {
            s = a = i;
            continue e;
          }
          o = o.parentNode;
        }
      }
      s = s.return;
    }
  lc(function () {
    var u = a,
      d = Ta(r),
      m = [];
    e: {
      var p = Rc.get(e);
      if (p !== void 0) {
        var x = Aa,
          y = e;
        switch (e) {
          case "keypress":
            if (rs(r) === 0) break e;
          case "keydown":
          case "keyup":
            x = vf;
            break;
          case "focusin":
            (y = "focus"), (x = ol);
            break;
          case "focusout":
            (y = "blur"), (x = ol);
            break;
          case "beforeblur":
          case "afterblur":
            x = ol;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = Pi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = af;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Nf;
            break;
          case Ic:
          case zc:
          case Tc:
            x = uf;
            break;
          case Pc:
            x = Sf;
            break;
          case "scroll":
            x = sf;
            break;
          case "wheel":
            x = Cf;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = ff;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Mi;
        }
        var N = (t & 4) !== 0,
          k = !N && e === "scroll",
          g = N ? (p !== null ? p + "Capture" : null) : p;
        N = [];
        for (var h = u, f; h !== null; ) {
          f = h;
          var w = f.stateNode;
          if (
            (f.tag === 5 &&
              w !== null &&
              ((f = w),
              g !== null && ((w = fn(h, g)), w != null && N.push(vn(h, w, f)))),
            k)
          )
            break;
          h = h.return;
        }
        0 < N.length &&
          ((p = new x(p, y, null, r, d)), m.push({ event: p, listeners: N }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          p &&
            r !== ql &&
            (y = r.relatedTarget || r.fromElement) &&
            (Ht(y) || y[ft]))
        )
          break e;
        if (
          (x || p) &&
          ((p =
            d.window === d
              ? d
              : (p = d.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          x
            ? ((y = r.relatedTarget || r.toElement),
              (x = u),
              (y = y ? Ht(y) : null),
              y !== null &&
                ((k = lr(y)), y !== k || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((x = null), (y = u)),
          x !== y)
        ) {
          if (
            ((N = Pi),
            (w = "onMouseLeave"),
            (g = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((N = Mi),
              (w = "onPointerLeave"),
              (g = "onPointerEnter"),
              (h = "pointer")),
            (k = x == null ? p : mr(x)),
            (f = y == null ? p : mr(y)),
            (p = new N(w, h + "leave", x, r, d)),
            (p.target = k),
            (p.relatedTarget = f),
            (w = null),
            Ht(d) === u &&
              ((N = new N(g, h + "enter", y, r, d)),
              (N.target = f),
              (N.relatedTarget = k),
              (w = N)),
            (k = w),
            x && y)
          )
            t: {
              for (N = x, g = y, h = 0, f = N; f; f = ar(f)) h++;
              for (f = 0, w = g; w; w = ar(w)) f++;
              for (; 0 < h - f; ) (N = ar(N)), h--;
              for (; 0 < f - h; ) (g = ar(g)), f--;
              for (; h--; ) {
                if (N === g || (g !== null && N === g.alternate)) break t;
                (N = ar(N)), (g = ar(g));
              }
              N = null;
            }
          else N = null;
          x !== null && Qi(m, p, x, N, !1),
            y !== null && k !== null && Qi(m, k, y, N, !0);
        }
      }
      e: {
        if (
          ((p = u ? mr(u) : window),
          (x = p.nodeName && p.nodeName.toLowerCase()),
          x === "select" || (x === "input" && p.type === "file"))
        )
          var C = Pf;
        else if (Ai(p))
          if (kc) C = Lf;
          else {
            C = Mf;
            var z = Rf;
          }
        else
          (x = p.nodeName) &&
            x.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (C = Of);
        if (C && (C = C(e, u))) {
          Sc(m, C, r, d);
          break e;
        }
        z && z(e, p, u),
          e === "focusout" &&
            (z = p._wrapperState) &&
            z.controlled &&
            p.type === "number" &&
            Ll(p, "number", p.value);
      }
      switch (((z = u ? mr(u) : window), e)) {
        case "focusin":
          (Ai(z) || z.contentEditable === "true") &&
            ((dr = z), (Kl = u), (nn = null));
          break;
        case "focusout":
          nn = Kl = dr = null;
          break;
        case "mousedown":
          Yl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Yl = !1), Vi(m, r, d);
          break;
        case "selectionchange":
          if ($f) break;
        case "keydown":
        case "keyup":
          Vi(m, r, d);
      }
      var _;
      if ($a)
        e: {
          switch (e) {
            case "compositionstart":
              var I = "onCompositionStart";
              break e;
            case "compositionend":
              I = "onCompositionEnd";
              break e;
            case "compositionupdate":
              I = "onCompositionUpdate";
              break e;
          }
          I = void 0;
        }
      else
        ur
          ? Nc(e, r) && (I = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (I = "onCompositionStart");
      I &&
        (wc &&
          r.locale !== "ko" &&
          (ur || I !== "onCompositionStart"
            ? I === "onCompositionEnd" && ur && (_ = jc())
            : ((St = d),
              (La = "value" in St ? St.value : St.textContent),
              (ur = !0))),
        (z = xs(u, I)),
        0 < z.length &&
          ((I = new Ri(I, e, null, r, d)),
          m.push({ event: I, listeners: z }),
          _ ? (I.data = _) : ((_ = bc(r)), _ !== null && (I.data = _)))),
        (_ = Df ? _f(e, r) : If(e, r)) &&
          ((u = xs(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Ri("onBeforeInput", "beforeinput", null, r, d)),
            m.push({ event: d, listeners: u }),
            (d.data = _)));
    }
    Mc(m, t);
  });
}
function vn(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function xs(e, t) {
  for (var r = t + "Capture", s = []; e !== null; ) {
    var l = e,
      a = l.stateNode;
    l.tag === 5 &&
      a !== null &&
      ((l = a),
      (a = fn(e, r)),
      a != null && s.unshift(vn(e, a, l)),
      (a = fn(e, t)),
      a != null && s.push(vn(e, a, l))),
      (e = e.return);
  }
  return s;
}
function ar(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Qi(e, t, r, s, l) {
  for (var a = t._reactName, i = []; r !== null && r !== s; ) {
    var o = r,
      c = o.alternate,
      u = o.stateNode;
    if (c !== null && c === s) break;
    o.tag === 5 &&
      u !== null &&
      ((o = u),
      l
        ? ((c = fn(r, a)), c != null && i.unshift(vn(r, c, o)))
        : l || ((c = fn(r, a)), c != null && i.push(vn(r, c, o)))),
      (r = r.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Hf = /\r\n?/g,
  Bf = /\u0000|\uFFFD/g;
function Wi(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Hf,
      `
`
    )
    .replace(Bf, "");
}
function Bn(e, t, r) {
  if (((t = Wi(t)), Wi(e) !== t && r)) throw Error(T(425));
}
function ys() {}
var Xl = null,
  Jl = null;
function Zl(e, t) {
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
var ea = typeof setTimeout == "function" ? setTimeout : void 0,
  Qf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Gi = typeof Promise == "function" ? Promise : void 0,
  Wf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Gi < "u"
      ? function (e) {
          return Gi.resolve(null).then(e).catch(Gf);
        }
      : ea;
function Gf(e) {
  setTimeout(function () {
    throw e;
  });
}
function gl(e, t) {
  var r = t,
    s = 0;
  do {
    var l = r.nextSibling;
    if ((e.removeChild(r), l && l.nodeType === 8))
      if (((r = l.data), r === "/$")) {
        if (s === 0) {
          e.removeChild(l), pn(t);
          return;
        }
        s--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || s++;
    r = l;
  } while (r);
  pn(t);
}
function _t(e) {
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
function Ki(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Lr = Math.random().toString(36).slice(2),
  rt = "__reactFiber$" + Lr,
  jn = "__reactProps$" + Lr,
  ft = "__reactContainer$" + Lr,
  ta = "__reactEvents$" + Lr,
  Kf = "__reactListeners$" + Lr,
  Yf = "__reactHandles$" + Lr;
function Ht(e) {
  var t = e[rt];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[ft] || r[rt])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = Ki(e); e !== null; ) {
          if ((r = e[rt])) return r;
          e = Ki(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function Tn(e) {
  return (
    (e = e[rt] || e[ft]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function mr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(T(33));
}
function $s(e) {
  return e[jn] || null;
}
var ra = [],
  hr = -1;
function At(e) {
  return { current: e };
}
function K(e) {
  0 > hr || ((e.current = ra[hr]), (ra[hr] = null), hr--);
}
function W(e, t) {
  hr++, (ra[hr] = e.current), (e.current = t);
}
var Mt = {},
  ve = At(Mt),
  Ee = At(!1),
  Jt = Mt;
function Dr(e, t) {
  var r = e.type.contextTypes;
  if (!r) return Mt;
  var s = e.stateNode;
  if (s && s.__reactInternalMemoizedUnmaskedChildContext === t)
    return s.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    a;
  for (a in r) l[a] = t[a];
  return (
    s &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function De(e) {
  return (e = e.childContextTypes), e != null;
}
function vs() {
  K(Ee), K(ve);
}
function Yi(e, t, r) {
  if (ve.current !== Mt) throw Error(T(168));
  W(ve, t), W(Ee, r);
}
function Lc(e, t, r) {
  var s = e.stateNode;
  if (((t = t.childContextTypes), typeof s.getChildContext != "function"))
    return r;
  s = s.getChildContext();
  for (var l in s) if (!(l in t)) throw Error(T(108, Pd(e) || "Unknown", l));
  return te({}, r, s);
}
function js(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Mt),
    (Jt = ve.current),
    W(ve, e),
    W(Ee, Ee.current),
    !0
  );
}
function Xi(e, t, r) {
  var s = e.stateNode;
  if (!s) throw Error(T(169));
  r
    ? ((e = Lc(e, t, Jt)),
      (s.__reactInternalMemoizedMergedChildContext = e),
      K(Ee),
      K(ve),
      W(ve, e))
    : K(Ee),
    W(Ee, r);
}
var at = null,
  Us = !1,
  xl = !1;
function Ac(e) {
  at === null ? (at = [e]) : at.push(e);
}
function Xf(e) {
  (Us = !0), Ac(e);
}
function Ft() {
  if (!xl && at !== null) {
    xl = !0;
    var e = 0,
      t = Q;
    try {
      var r = at;
      for (Q = 1; e < r.length; e++) {
        var s = r[e];
        do s = s(!0);
        while (s !== null);
      }
      (at = null), (Us = !1);
    } catch (l) {
      throw (at !== null && (at = at.slice(e + 1)), cc(Pa, Ft), l);
    } finally {
      (Q = t), (xl = !1);
    }
  }
  return null;
}
var pr = [],
  gr = 0,
  ws = null,
  Ns = 0,
  Ue = [],
  qe = 0,
  Zt = null,
  it = 1,
  ot = "";
function qt(e, t) {
  (pr[gr++] = Ns), (pr[gr++] = ws), (ws = e), (Ns = t);
}
function Fc(e, t, r) {
  (Ue[qe++] = it), (Ue[qe++] = ot), (Ue[qe++] = Zt), (Zt = e);
  var s = it;
  e = ot;
  var l = 32 - Xe(s) - 1;
  (s &= ~(1 << l)), (r += 1);
  var a = 32 - Xe(t) + l;
  if (30 < a) {
    var i = l - (l % 5);
    (a = (s & ((1 << i) - 1)).toString(32)),
      (s >>= i),
      (l -= i),
      (it = (1 << (32 - Xe(t) + l)) | (r << l) | s),
      (ot = a + e);
  } else (it = (1 << a) | (r << l) | s), (ot = e);
}
function qa(e) {
  e.return !== null && (qt(e, 1), Fc(e, 1, 0));
}
function Va(e) {
  for (; e === ws; )
    (ws = pr[--gr]), (pr[gr] = null), (Ns = pr[--gr]), (pr[gr] = null);
  for (; e === Zt; )
    (Zt = Ue[--qe]),
      (Ue[qe] = null),
      (ot = Ue[--qe]),
      (Ue[qe] = null),
      (it = Ue[--qe]),
      (Ue[qe] = null);
}
var Me = null,
  Re = null,
  Y = !1,
  Ye = null;
function $c(e, t) {
  var r = Ve(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function Ji(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Me = e), (Re = _t(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Me = e), (Re = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = Zt !== null ? { id: it, overflow: ot } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = Ve(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (Me = e),
            (Re = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function na(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function sa(e) {
  if (Y) {
    var t = Re;
    if (t) {
      var r = t;
      if (!Ji(e, t)) {
        if (na(e)) throw Error(T(418));
        t = _t(r.nextSibling);
        var s = Me;
        t && Ji(e, t)
          ? $c(s, r)
          : ((e.flags = (e.flags & -4097) | 2), (Y = !1), (Me = e));
      }
    } else {
      if (na(e)) throw Error(T(418));
      (e.flags = (e.flags & -4097) | 2), (Y = !1), (Me = e);
    }
  }
}
function Zi(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Me = e;
}
function Qn(e) {
  if (e !== Me) return !1;
  if (!Y) return Zi(e), (Y = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Zl(e.type, e.memoizedProps))),
    t && (t = Re))
  ) {
    if (na(e)) throw (Uc(), Error(T(418)));
    for (; t; ) $c(e, t), (t = _t(t.nextSibling));
  }
  if ((Zi(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              Re = _t(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Re = null;
    }
  } else Re = Me ? _t(e.stateNode.nextSibling) : null;
  return !0;
}
function Uc() {
  for (var e = Re; e; ) e = _t(e.nextSibling);
}
function _r() {
  (Re = Me = null), (Y = !1);
}
function Ha(e) {
  Ye === null ? (Ye = [e]) : Ye.push(e);
}
var Jf = xt.ReactCurrentBatchConfig;
function Qr(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(T(309));
        var s = r.stateNode;
      }
      if (!s) throw Error(T(147, e));
      var l = s,
        a = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === a
        ? t.ref
        : ((t = function (i) {
            var o = l.refs;
            i === null ? delete o[a] : (o[a] = i);
          }),
          (t._stringRef = a),
          t);
    }
    if (typeof e != "string") throw Error(T(284));
    if (!r._owner) throw Error(T(290, e));
  }
  return e;
}
function Wn(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      T(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function eo(e) {
  var t = e._init;
  return t(e._payload);
}
function qc(e) {
  function t(g, h) {
    if (e) {
      var f = g.deletions;
      f === null ? ((g.deletions = [h]), (g.flags |= 16)) : f.push(h);
    }
  }
  function r(g, h) {
    if (!e) return null;
    for (; h !== null; ) t(g, h), (h = h.sibling);
    return null;
  }
  function s(g, h) {
    for (g = new Map(); h !== null; )
      h.key !== null ? g.set(h.key, h) : g.set(h.index, h), (h = h.sibling);
    return g;
  }
  function l(g, h) {
    return (g = Pt(g, h)), (g.index = 0), (g.sibling = null), g;
  }
  function a(g, h, f) {
    return (
      (g.index = f),
      e
        ? ((f = g.alternate),
          f !== null
            ? ((f = f.index), f < h ? ((g.flags |= 2), h) : f)
            : ((g.flags |= 2), h))
        : ((g.flags |= 1048576), h)
    );
  }
  function i(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function o(g, h, f, w) {
    return h === null || h.tag !== 6
      ? ((h = Sl(f, g.mode, w)), (h.return = g), h)
      : ((h = l(h, f)), (h.return = g), h);
  }
  function c(g, h, f, w) {
    var C = f.type;
    return C === cr
      ? d(g, h, f.props.children, w, f.key)
      : h !== null &&
        (h.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === jt &&
            eo(C) === h.type))
      ? ((w = l(h, f.props)), (w.ref = Qr(g, h, f)), (w.return = g), w)
      : ((w = cs(f.type, f.key, f.props, null, g.mode, w)),
        (w.ref = Qr(g, h, f)),
        (w.return = g),
        w);
  }
  function u(g, h, f, w) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== f.containerInfo ||
      h.stateNode.implementation !== f.implementation
      ? ((h = kl(f, g.mode, w)), (h.return = g), h)
      : ((h = l(h, f.children || [])), (h.return = g), h);
  }
  function d(g, h, f, w, C) {
    return h === null || h.tag !== 7
      ? ((h = Kt(f, g.mode, w, C)), (h.return = g), h)
      : ((h = l(h, f)), (h.return = g), h);
  }
  function m(g, h, f) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = Sl("" + h, g.mode, f)), (h.return = g), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case On:
          return (
            (f = cs(h.type, h.key, h.props, null, g.mode, f)),
            (f.ref = Qr(g, null, h)),
            (f.return = g),
            f
          );
        case or:
          return (h = kl(h, g.mode, f)), (h.return = g), h;
        case jt:
          var w = h._init;
          return m(g, w(h._payload), f);
      }
      if (Yr(h) || Ur(h))
        return (h = Kt(h, g.mode, f, null)), (h.return = g), h;
      Wn(g, h);
    }
    return null;
  }
  function p(g, h, f, w) {
    var C = h !== null ? h.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return C !== null ? null : o(g, h, "" + f, w);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case On:
          return f.key === C ? c(g, h, f, w) : null;
        case or:
          return f.key === C ? u(g, h, f, w) : null;
        case jt:
          return (C = f._init), p(g, h, C(f._payload), w);
      }
      if (Yr(f) || Ur(f)) return C !== null ? null : d(g, h, f, w, null);
      Wn(g, f);
    }
    return null;
  }
  function x(g, h, f, w, C) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (g = g.get(f) || null), o(h, g, "" + w, C);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case On:
          return (g = g.get(w.key === null ? f : w.key) || null), c(h, g, w, C);
        case or:
          return (g = g.get(w.key === null ? f : w.key) || null), u(h, g, w, C);
        case jt:
          var z = w._init;
          return x(g, h, f, z(w._payload), C);
      }
      if (Yr(w) || Ur(w)) return (g = g.get(f) || null), d(h, g, w, C, null);
      Wn(h, w);
    }
    return null;
  }
  function y(g, h, f, w) {
    for (
      var C = null, z = null, _ = h, I = (h = 0), v = null;
      _ !== null && I < f.length;
      I++
    ) {
      _.index > I ? ((v = _), (_ = null)) : (v = _.sibling);
      var D = p(g, _, f[I], w);
      if (D === null) {
        _ === null && (_ = v);
        break;
      }
      e && _ && D.alternate === null && t(g, _),
        (h = a(D, h, I)),
        z === null ? (C = D) : (z.sibling = D),
        (z = D),
        (_ = v);
    }
    if (I === f.length) return r(g, _), Y && qt(g, I), C;
    if (_ === null) {
      for (; I < f.length; I++)
        (_ = m(g, f[I], w)),
          _ !== null &&
            ((h = a(_, h, I)), z === null ? (C = _) : (z.sibling = _), (z = _));
      return Y && qt(g, I), C;
    }
    for (_ = s(g, _); I < f.length; I++)
      (v = x(_, g, I, f[I], w)),
        v !== null &&
          (e && v.alternate !== null && _.delete(v.key === null ? I : v.key),
          (h = a(v, h, I)),
          z === null ? (C = v) : (z.sibling = v),
          (z = v));
    return (
      e &&
        _.forEach(function (L) {
          return t(g, L);
        }),
      Y && qt(g, I),
      C
    );
  }
  function N(g, h, f, w) {
    var C = Ur(f);
    if (typeof C != "function") throw Error(T(150));
    if (((f = C.call(f)), f == null)) throw Error(T(151));
    for (
      var z = (C = null), _ = h, I = (h = 0), v = null, D = f.next();
      _ !== null && !D.done;
      I++, D = f.next()
    ) {
      _.index > I ? ((v = _), (_ = null)) : (v = _.sibling);
      var L = p(g, _, D.value, w);
      if (L === null) {
        _ === null && (_ = v);
        break;
      }
      e && _ && L.alternate === null && t(g, _),
        (h = a(L, h, I)),
        z === null ? (C = L) : (z.sibling = L),
        (z = L),
        (_ = v);
    }
    if (D.done) return r(g, _), Y && qt(g, I), C;
    if (_ === null) {
      for (; !D.done; I++, D = f.next())
        (D = m(g, D.value, w)),
          D !== null &&
            ((h = a(D, h, I)), z === null ? (C = D) : (z.sibling = D), (z = D));
      return Y && qt(g, I), C;
    }
    for (_ = s(g, _); !D.done; I++, D = f.next())
      (D = x(_, g, I, D.value, w)),
        D !== null &&
          (e && D.alternate !== null && _.delete(D.key === null ? I : D.key),
          (h = a(D, h, I)),
          z === null ? (C = D) : (z.sibling = D),
          (z = D));
    return (
      e &&
        _.forEach(function ($) {
          return t(g, $);
        }),
      Y && qt(g, I),
      C
    );
  }
  function k(g, h, f, w) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === cr &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case On:
          e: {
            for (var C = f.key, z = h; z !== null; ) {
              if (z.key === C) {
                if (((C = f.type), C === cr)) {
                  if (z.tag === 7) {
                    r(g, z.sibling),
                      (h = l(z, f.props.children)),
                      (h.return = g),
                      (g = h);
                    break e;
                  }
                } else if (
                  z.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === jt &&
                    eo(C) === z.type)
                ) {
                  r(g, z.sibling),
                    (h = l(z, f.props)),
                    (h.ref = Qr(g, z, f)),
                    (h.return = g),
                    (g = h);
                  break e;
                }
                r(g, z);
                break;
              } else t(g, z);
              z = z.sibling;
            }
            f.type === cr
              ? ((h = Kt(f.props.children, g.mode, w, f.key)),
                (h.return = g),
                (g = h))
              : ((w = cs(f.type, f.key, f.props, null, g.mode, w)),
                (w.ref = Qr(g, h, f)),
                (w.return = g),
                (g = w));
          }
          return i(g);
        case or:
          e: {
            for (z = f.key; h !== null; ) {
              if (h.key === z)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === f.containerInfo &&
                  h.stateNode.implementation === f.implementation
                ) {
                  r(g, h.sibling),
                    (h = l(h, f.children || [])),
                    (h.return = g),
                    (g = h);
                  break e;
                } else {
                  r(g, h);
                  break;
                }
              else t(g, h);
              h = h.sibling;
            }
            (h = kl(f, g.mode, w)), (h.return = g), (g = h);
          }
          return i(g);
        case jt:
          return (z = f._init), k(g, h, z(f._payload), w);
      }
      if (Yr(f)) return y(g, h, f, w);
      if (Ur(f)) return N(g, h, f, w);
      Wn(g, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        h !== null && h.tag === 6
          ? (r(g, h.sibling), (h = l(h, f)), (h.return = g), (g = h))
          : (r(g, h), (h = Sl(f, g.mode, w)), (h.return = g), (g = h)),
        i(g))
      : r(g, h);
  }
  return k;
}
var Ir = qc(!0),
  Vc = qc(!1),
  bs = At(null),
  Ss = null,
  xr = null,
  Ba = null;
function Qa() {
  Ba = xr = Ss = null;
}
function Wa(e) {
  var t = bs.current;
  K(bs), (e._currentValue = t);
}
function la(e, t, r) {
  for (; e !== null; ) {
    var s = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), s !== null && (s.childLanes |= t))
        : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}
function Sr(e, t) {
  (Ss = e),
    (Ba = xr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ce = !0), (e.firstContext = null));
}
function Be(e) {
  var t = e._currentValue;
  if (Ba !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), xr === null)) {
      if (Ss === null) throw Error(T(308));
      (xr = e), (Ss.dependencies = { lanes: 0, firstContext: e });
    } else xr = xr.next = e;
  return t;
}
var Bt = null;
function Ga(e) {
  Bt === null ? (Bt = [e]) : Bt.push(e);
}
function Hc(e, t, r, s) {
  var l = t.interleaved;
  return (
    l === null ? ((r.next = r), Ga(t)) : ((r.next = l.next), (l.next = r)),
    (t.interleaved = r),
    mt(e, s)
  );
}
function mt(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
var wt = !1;
function Ka(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Bc(e, t) {
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
function ct(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function It(e, t, r) {
  var s = e.updateQueue;
  if (s === null) return null;
  if (((s = s.shared), V & 2)) {
    var l = s.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (s.pending = t),
      mt(e, r)
    );
  }
  return (
    (l = s.interleaved),
    l === null ? ((t.next = t), Ga(s)) : ((t.next = l.next), (l.next = t)),
    (s.interleaved = t),
    mt(e, r)
  );
}
function ns(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var s = t.lanes;
    (s &= e.pendingLanes), (r |= s), (t.lanes = r), Ra(e, r);
  }
}
function to(e, t) {
  var r = e.updateQueue,
    s = e.alternate;
  if (s !== null && ((s = s.updateQueue), r === s)) {
    var l = null,
      a = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var i = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        a === null ? (l = a = i) : (a = a.next = i), (r = r.next);
      } while (r !== null);
      a === null ? (l = a = t) : (a = a.next = t);
    } else l = a = t;
    (r = {
      baseState: s.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: a,
      shared: s.shared,
      effects: s.effects,
    }),
      (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t);
}
function ks(e, t, r, s) {
  var l = e.updateQueue;
  wt = !1;
  var a = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var c = o,
      u = c.next;
    (c.next = null), i === null ? (a = u) : (i.next = u), (i = c);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (o = d.lastBaseUpdate),
      o !== i &&
        (o === null ? (d.firstBaseUpdate = u) : (o.next = u),
        (d.lastBaseUpdate = c)));
  }
  if (a !== null) {
    var m = l.baseState;
    (i = 0), (d = u = c = null), (o = a);
    do {
      var p = o.lane,
        x = o.eventTime;
      if ((s & p) === p) {
        d !== null &&
          (d = d.next =
            {
              eventTime: x,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var y = e,
            N = o;
          switch (((p = t), (x = r), N.tag)) {
            case 1:
              if (((y = N.payload), typeof y == "function")) {
                m = y.call(x, m, p);
                break e;
              }
              m = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = N.payload),
                (p = typeof y == "function" ? y.call(x, m, p) : y),
                p == null)
              )
                break e;
              m = te({}, m, p);
              break e;
            case 2:
              wt = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [o]) : p.push(o));
      } else
        (x = {
          eventTime: x,
          lane: p,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          d === null ? ((u = d = x), (c = m)) : (d = d.next = x),
          (i |= p);
      if (((o = o.next), o === null)) {
        if (((o = l.shared.pending), o === null)) break;
        (p = o),
          (o = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (c = m),
      (l.baseState = c),
      (l.firstBaseUpdate = u),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else a === null && (l.shared.lanes = 0);
    (tr |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function ro(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var s = e[t],
        l = s.callback;
      if (l !== null) {
        if (((s.callback = null), (s = r), typeof l != "function"))
          throw Error(T(191, l));
        l.call(s);
      }
    }
}
var Pn = {},
  st = At(Pn),
  wn = At(Pn),
  Nn = At(Pn);
function Qt(e) {
  if (e === Pn) throw Error(T(174));
  return e;
}
function Ya(e, t) {
  switch ((W(Nn, t), W(wn, e), W(st, Pn), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Fl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Fl(t, e));
  }
  K(st), W(st, t);
}
function zr() {
  K(st), K(wn), K(Nn);
}
function Qc(e) {
  Qt(Nn.current);
  var t = Qt(st.current),
    r = Fl(t, e.type);
  t !== r && (W(wn, e), W(st, r));
}
function Xa(e) {
  wn.current === e && (K(st), K(wn));
}
var J = At(0);
function Cs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
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
var yl = [];
function Ja() {
  for (var e = 0; e < yl.length; e++)
    yl[e]._workInProgressVersionPrimary = null;
  yl.length = 0;
}
var ss = xt.ReactCurrentDispatcher,
  vl = xt.ReactCurrentBatchConfig,
  er = 0,
  ee = null,
  oe = null,
  ue = null,
  Es = !1,
  sn = !1,
  bn = 0,
  Zf = 0;
function ge() {
  throw Error(T(321));
}
function Za(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!Ze(e[r], t[r])) return !1;
  return !0;
}
function ei(e, t, r, s, l, a) {
  if (
    ((er = a),
    (ee = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ss.current = e === null || e.memoizedState === null ? nm : sm),
    (e = r(s, l)),
    sn)
  ) {
    a = 0;
    do {
      if (((sn = !1), (bn = 0), 25 <= a)) throw Error(T(301));
      (a += 1),
        (ue = oe = null),
        (t.updateQueue = null),
        (ss.current = lm),
        (e = r(s, l));
    } while (sn);
  }
  if (
    ((ss.current = Ds),
    (t = oe !== null && oe.next !== null),
    (er = 0),
    (ue = oe = ee = null),
    (Es = !1),
    t)
  )
    throw Error(T(300));
  return e;
}
function ti() {
  var e = bn !== 0;
  return (bn = 0), e;
}
function tt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ue === null ? (ee.memoizedState = ue = e) : (ue = ue.next = e), ue;
}
function Qe() {
  if (oe === null) {
    var e = ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = oe.next;
  var t = ue === null ? ee.memoizedState : ue.next;
  if (t !== null) (ue = t), (oe = e);
  else {
    if (e === null) throw Error(T(310));
    (oe = e),
      (e = {
        memoizedState: oe.memoizedState,
        baseState: oe.baseState,
        baseQueue: oe.baseQueue,
        queue: oe.queue,
        next: null,
      }),
      ue === null ? (ee.memoizedState = ue = e) : (ue = ue.next = e);
  }
  return ue;
}
function Sn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function jl(e) {
  var t = Qe(),
    r = t.queue;
  if (r === null) throw Error(T(311));
  r.lastRenderedReducer = e;
  var s = oe,
    l = s.baseQueue,
    a = r.pending;
  if (a !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = a.next), (a.next = i);
    }
    (s.baseQueue = l = a), (r.pending = null);
  }
  if (l !== null) {
    (a = l.next), (s = s.baseState);
    var o = (i = null),
      c = null,
      u = a;
    do {
      var d = u.lane;
      if ((er & d) === d)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (s = u.hasEagerState ? u.eagerState : e(s, u.action));
      else {
        var m = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        c === null ? ((o = c = m), (i = s)) : (c = c.next = m),
          (ee.lanes |= d),
          (tr |= d);
      }
      u = u.next;
    } while (u !== null && u !== a);
    c === null ? (i = s) : (c.next = o),
      Ze(s, t.memoizedState) || (Ce = !0),
      (t.memoizedState = s),
      (t.baseState = i),
      (t.baseQueue = c),
      (r.lastRenderedState = s);
  }
  if (((e = r.interleaved), e !== null)) {
    l = e;
    do (a = l.lane), (ee.lanes |= a), (tr |= a), (l = l.next);
    while (l !== e);
  } else l === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function wl(e) {
  var t = Qe(),
    r = t.queue;
  if (r === null) throw Error(T(311));
  r.lastRenderedReducer = e;
  var s = r.dispatch,
    l = r.pending,
    a = t.memoizedState;
  if (l !== null) {
    r.pending = null;
    var i = (l = l.next);
    do (a = e(a, i.action)), (i = i.next);
    while (i !== l);
    Ze(a, t.memoizedState) || (Ce = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (r.lastRenderedState = a);
  }
  return [a, s];
}
function Wc() {}
function Gc(e, t) {
  var r = ee,
    s = Qe(),
    l = t(),
    a = !Ze(s.memoizedState, l);
  if (
    (a && ((s.memoizedState = l), (Ce = !0)),
    (s = s.queue),
    ri(Xc.bind(null, r, s, e), [e]),
    s.getSnapshot !== t || a || (ue !== null && ue.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      kn(9, Yc.bind(null, r, s, l, t), void 0, null),
      de === null)
    )
      throw Error(T(349));
    er & 30 || Kc(r, t, l);
  }
  return l;
}
function Kc(e, t, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function Yc(e, t, r, s) {
  (t.value = r), (t.getSnapshot = s), Jc(t) && Zc(e);
}
function Xc(e, t, r) {
  return r(function () {
    Jc(t) && Zc(e);
  });
}
function Jc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !Ze(e, r);
  } catch {
    return !0;
  }
}
function Zc(e) {
  var t = mt(e, 1);
  t !== null && Je(t, e, 1, -1);
}
function no(e) {
  var t = tt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Sn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = rm.bind(null, ee, e)),
    [t.memoizedState, e]
  );
}
function kn(e, t, r, s) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: s, next: null }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((s = r.next), (r.next = e), (e.next = s), (t.lastEffect = e))),
    e
  );
}
function eu() {
  return Qe().memoizedState;
}
function ls(e, t, r, s) {
  var l = tt();
  (ee.flags |= e),
    (l.memoizedState = kn(1 | t, r, void 0, s === void 0 ? null : s));
}
function qs(e, t, r, s) {
  var l = Qe();
  s = s === void 0 ? null : s;
  var a = void 0;
  if (oe !== null) {
    var i = oe.memoizedState;
    if (((a = i.destroy), s !== null && Za(s, i.deps))) {
      l.memoizedState = kn(t, r, a, s);
      return;
    }
  }
  (ee.flags |= e), (l.memoizedState = kn(1 | t, r, a, s));
}
function so(e, t) {
  return ls(8390656, 8, e, t);
}
function ri(e, t) {
  return qs(2048, 8, e, t);
}
function tu(e, t) {
  return qs(4, 2, e, t);
}
function ru(e, t) {
  return qs(4, 4, e, t);
}
function nu(e, t) {
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
function su(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), qs(4, 4, nu.bind(null, t, e), r)
  );
}
function ni() {}
function lu(e, t) {
  var r = Qe();
  t = t === void 0 ? null : t;
  var s = r.memoizedState;
  return s !== null && t !== null && Za(t, s[1])
    ? s[0]
    : ((r.memoizedState = [e, t]), e);
}
function au(e, t) {
  var r = Qe();
  t = t === void 0 ? null : t;
  var s = r.memoizedState;
  return s !== null && t !== null && Za(t, s[1])
    ? s[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function iu(e, t, r) {
  return er & 21
    ? (Ze(r, t) || ((r = fc()), (ee.lanes |= r), (tr |= r), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ce = !0)), (e.memoizedState = r));
}
function em(e, t) {
  var r = Q;
  (Q = r !== 0 && 4 > r ? r : 4), e(!0);
  var s = vl.transition;
  vl.transition = {};
  try {
    e(!1), t();
  } finally {
    (Q = r), (vl.transition = s);
  }
}
function ou() {
  return Qe().memoizedState;
}
function tm(e, t, r) {
  var s = Tt(e);
  if (
    ((r = {
      lane: s,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    cu(e))
  )
    uu(t, r);
  else if (((r = Hc(e, t, r, s)), r !== null)) {
    var l = Ne();
    Je(r, e, s, l), du(r, t, s);
  }
}
function rm(e, t, r) {
  var s = Tt(e),
    l = { lane: s, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (cu(e)) uu(t, l);
  else {
    var a = e.alternate;
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var i = t.lastRenderedState,
          o = a(i, r);
        if (((l.hasEagerState = !0), (l.eagerState = o), Ze(o, i))) {
          var c = t.interleaved;
          c === null
            ? ((l.next = l), Ga(t))
            : ((l.next = c.next), (c.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (r = Hc(e, t, l, s)),
      r !== null && ((l = Ne()), Je(r, e, s, l), du(r, t, s));
  }
}
function cu(e) {
  var t = e.alternate;
  return e === ee || (t !== null && t === ee);
}
function uu(e, t) {
  sn = Es = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t);
}
function du(e, t, r) {
  if (r & 4194240) {
    var s = t.lanes;
    (s &= e.pendingLanes), (r |= s), (t.lanes = r), Ra(e, r);
  }
}
var Ds = {
    readContext: Be,
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
  nm = {
    readContext: Be,
    useCallback: function (e, t) {
      return (tt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Be,
    useEffect: so,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        ls(4194308, 4, nu.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return ls(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ls(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = tt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var s = tt();
      return (
        (t = r !== void 0 ? r(t) : t),
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
        (e = e.dispatch = tm.bind(null, ee, e)),
        [s.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = tt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: no,
    useDebugValue: ni,
    useDeferredValue: function (e) {
      return (tt().memoizedState = e);
    },
    useTransition: function () {
      var e = no(!1),
        t = e[0];
      return (e = em.bind(null, e[1])), (tt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var s = ee,
        l = tt();
      if (Y) {
        if (r === void 0) throw Error(T(407));
        r = r();
      } else {
        if (((r = t()), de === null)) throw Error(T(349));
        er & 30 || Kc(s, t, r);
      }
      l.memoizedState = r;
      var a = { value: r, getSnapshot: t };
      return (
        (l.queue = a),
        so(Xc.bind(null, s, a, e), [e]),
        (s.flags |= 2048),
        kn(9, Yc.bind(null, s, a, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = tt(),
        t = de.identifierPrefix;
      if (Y) {
        var r = ot,
          s = it;
        (r = (s & ~(1 << (32 - Xe(s) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = bn++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":");
      } else (r = Zf++), (t = ":" + t + "r" + r.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  sm = {
    readContext: Be,
    useCallback: lu,
    useContext: Be,
    useEffect: ri,
    useImperativeHandle: su,
    useInsertionEffect: tu,
    useLayoutEffect: ru,
    useMemo: au,
    useReducer: jl,
    useRef: eu,
    useState: function () {
      return jl(Sn);
    },
    useDebugValue: ni,
    useDeferredValue: function (e) {
      var t = Qe();
      return iu(t, oe.memoizedState, e);
    },
    useTransition: function () {
      var e = jl(Sn)[0],
        t = Qe().memoizedState;
      return [e, t];
    },
    useMutableSource: Wc,
    useSyncExternalStore: Gc,
    useId: ou,
    unstable_isNewReconciler: !1,
  },
  lm = {
    readContext: Be,
    useCallback: lu,
    useContext: Be,
    useEffect: ri,
    useImperativeHandle: su,
    useInsertionEffect: tu,
    useLayoutEffect: ru,
    useMemo: au,
    useReducer: wl,
    useRef: eu,
    useState: function () {
      return wl(Sn);
    },
    useDebugValue: ni,
    useDeferredValue: function (e) {
      var t = Qe();
      return oe === null ? (t.memoizedState = e) : iu(t, oe.memoizedState, e);
    },
    useTransition: function () {
      var e = wl(Sn)[0],
        t = Qe().memoizedState;
      return [e, t];
    },
    useMutableSource: Wc,
    useSyncExternalStore: Gc,
    useId: ou,
    unstable_isNewReconciler: !1,
  };
function Ge(e, t) {
  if (e && e.defaultProps) {
    (t = te({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function aa(e, t, r, s) {
  (t = e.memoizedState),
    (r = r(s, t)),
    (r = r == null ? t : te({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var Vs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? lr(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var s = Ne(),
      l = Tt(e),
      a = ct(s, l);
    (a.payload = t),
      r != null && (a.callback = r),
      (t = It(e, a, l)),
      t !== null && (Je(t, e, l, s), ns(t, e, l));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var s = Ne(),
      l = Tt(e),
      a = ct(s, l);
    (a.tag = 1),
      (a.payload = t),
      r != null && (a.callback = r),
      (t = It(e, a, l)),
      t !== null && (Je(t, e, l, s), ns(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = Ne(),
      s = Tt(e),
      l = ct(r, s);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = It(e, l, s)),
      t !== null && (Je(t, e, s, r), ns(t, e, s));
  },
};
function lo(e, t, r, s, l, a, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(s, a, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !xn(r, s) || !xn(l, a)
      : !0
  );
}
function fu(e, t, r) {
  var s = !1,
    l = Mt,
    a = t.contextType;
  return (
    typeof a == "object" && a !== null
      ? (a = Be(a))
      : ((l = De(t) ? Jt : ve.current),
        (s = t.contextTypes),
        (a = (s = s != null) ? Dr(e, l) : Mt)),
    (t = new t(r, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Vs),
    (e.stateNode = t),
    (t._reactInternals = e),
    s &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function ao(e, t, r, s) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, s),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, s),
    t.state !== e && Vs.enqueueReplaceState(t, t.state, null);
}
function ia(e, t, r, s) {
  var l = e.stateNode;
  (l.props = r), (l.state = e.memoizedState), (l.refs = {}), Ka(e);
  var a = t.contextType;
  typeof a == "object" && a !== null
    ? (l.context = Be(a))
    : ((a = De(t) ? Jt : ve.current), (l.context = Dr(e, a))),
    (l.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == "function" && (aa(e, t, a, r), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Vs.enqueueReplaceState(l, l.state, null),
      ks(e, r, l, s),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Tr(e, t) {
  try {
    var r = "",
      s = t;
    do (r += Td(s)), (s = s.return);
    while (s);
    var l = r;
  } catch (a) {
    l =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Nl(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function oa(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var am = typeof WeakMap == "function" ? WeakMap : Map;
function mu(e, t, r) {
  (r = ct(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var s = t.value;
  return (
    (r.callback = function () {
      Is || ((Is = !0), (ya = s)), oa(e, t);
    }),
    r
  );
}
function hu(e, t, r) {
  (r = ct(-1, r)), (r.tag = 3);
  var s = e.type.getDerivedStateFromError;
  if (typeof s == "function") {
    var l = t.value;
    (r.payload = function () {
      return s(l);
    }),
      (r.callback = function () {
        oa(e, t);
      });
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == "function" &&
      (r.callback = function () {
        oa(e, t),
          typeof s != "function" &&
            (zt === null ? (zt = new Set([this])) : zt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    r
  );
}
function io(e, t, r) {
  var s = e.pingCache;
  if (s === null) {
    s = e.pingCache = new am();
    var l = new Set();
    s.set(t, l);
  } else (l = s.get(t)), l === void 0 && ((l = new Set()), s.set(t, l));
  l.has(r) || (l.add(r), (e = jm.bind(null, e, t, r)), t.then(e, e));
}
function oo(e) {
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
function co(e, t, r, s, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = ct(-1, 1)), (t.tag = 2), It(r, t, 1))),
          (r.lanes |= 1)),
      e);
}
var im = xt.ReactCurrentOwner,
  Ce = !1;
function we(e, t, r, s) {
  t.child = e === null ? Vc(t, null, r, s) : Ir(t, e.child, r, s);
}
function uo(e, t, r, s, l) {
  r = r.render;
  var a = t.ref;
  return (
    Sr(t, l),
    (s = ei(e, t, r, s, a, l)),
    (r = ti()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ht(e, t, l))
      : (Y && r && qa(t), (t.flags |= 1), we(e, t, s, l), t.child)
  );
}
function fo(e, t, r, s, l) {
  if (e === null) {
    var a = r.type;
    return typeof a == "function" &&
      !di(a) &&
      a.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), pu(e, t, a, s, l))
      : ((e = cs(r.type, null, s, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((a = e.child), !(e.lanes & l))) {
    var i = a.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : xn), r(i, s) && e.ref === t.ref)
    )
      return ht(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Pt(a, s)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function pu(e, t, r, s, l) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (xn(a, s) && e.ref === t.ref)
      if (((Ce = !1), (t.pendingProps = s = a), (e.lanes & l) !== 0))
        e.flags & 131072 && (Ce = !0);
      else return (t.lanes = e.lanes), ht(e, t, l);
  }
  return ca(e, t, r, s, l);
}
function gu(e, t, r) {
  var s = t.pendingProps,
    l = s.children,
    a = e !== null ? e.memoizedState : null;
  if (s.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        W(vr, Te),
        (Te |= r);
    else {
      if (!(r & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          W(vr, Te),
          (Te |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (s = a !== null ? a.baseLanes : r),
        W(vr, Te),
        (Te |= s);
    }
  else
    a !== null ? ((s = a.baseLanes | r), (t.memoizedState = null)) : (s = r),
      W(vr, Te),
      (Te |= s);
  return we(e, t, l, r), t.child;
}
function xu(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ca(e, t, r, s, l) {
  var a = De(r) ? Jt : ve.current;
  return (
    (a = Dr(t, a)),
    Sr(t, l),
    (r = ei(e, t, r, s, a, l)),
    (s = ti()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ht(e, t, l))
      : (Y && s && qa(t), (t.flags |= 1), we(e, t, r, l), t.child)
  );
}
function mo(e, t, r, s, l) {
  if (De(r)) {
    var a = !0;
    js(t);
  } else a = !1;
  if ((Sr(t, l), t.stateNode === null))
    as(e, t), fu(t, r, s), ia(t, r, s, l), (s = !0);
  else if (e === null) {
    var i = t.stateNode,
      o = t.memoizedProps;
    i.props = o;
    var c = i.context,
      u = r.contextType;
    typeof u == "object" && u !== null
      ? (u = Be(u))
      : ((u = De(r) ? Jt : ve.current), (u = Dr(t, u)));
    var d = r.getDerivedStateFromProps,
      m =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((o !== s || c !== u) && ao(t, i, s, u)),
      (wt = !1);
    var p = t.memoizedState;
    (i.state = p),
      ks(t, s, i, l),
      (c = t.memoizedState),
      o !== s || p !== c || Ee.current || wt
        ? (typeof d == "function" && (aa(t, r, d, s), (c = t.memoizedState)),
          (o = wt || lo(t, r, o, s, p, c, u))
            ? (m ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = s),
              (t.memoizedState = c)),
          (i.props = s),
          (i.state = c),
          (i.context = u),
          (s = o))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (s = !1));
  } else {
    (i = t.stateNode),
      Bc(e, t),
      (o = t.memoizedProps),
      (u = t.type === t.elementType ? o : Ge(t.type, o)),
      (i.props = u),
      (m = t.pendingProps),
      (p = i.context),
      (c = r.contextType),
      typeof c == "object" && c !== null
        ? (c = Be(c))
        : ((c = De(r) ? Jt : ve.current), (c = Dr(t, c)));
    var x = r.getDerivedStateFromProps;
    (d =
      typeof x == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((o !== m || p !== c) && ao(t, i, s, c)),
      (wt = !1),
      (p = t.memoizedState),
      (i.state = p),
      ks(t, s, i, l);
    var y = t.memoizedState;
    o !== m || p !== y || Ee.current || wt
      ? (typeof x == "function" && (aa(t, r, x, s), (y = t.memoizedState)),
        (u = wt || lo(t, r, u, s, p, y, c) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(s, y, c),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(s, y, c)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (o === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = s),
            (t.memoizedState = y)),
        (i.props = s),
        (i.state = y),
        (i.context = c),
        (s = u))
      : (typeof i.componentDidUpdate != "function" ||
          (o === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (s = !1));
  }
  return ua(e, t, r, s, a, l);
}
function ua(e, t, r, s, l, a) {
  xu(e, t);
  var i = (t.flags & 128) !== 0;
  if (!s && !i) return l && Xi(t, r, !1), ht(e, t, a);
  (s = t.stateNode), (im.current = t);
  var o =
    i && typeof r.getDerivedStateFromError != "function" ? null : s.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Ir(t, e.child, null, a)), (t.child = Ir(t, null, o, a)))
      : we(e, t, o, a),
    (t.memoizedState = s.state),
    l && Xi(t, r, !0),
    t.child
  );
}
function yu(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Yi(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Yi(e, t.context, !1),
    Ya(e, t.containerInfo);
}
function ho(e, t, r, s, l) {
  return _r(), Ha(l), (t.flags |= 256), we(e, t, r, s), t.child;
}
var da = { dehydrated: null, treeContext: null, retryLane: 0 };
function fa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function vu(e, t, r) {
  var s = t.pendingProps,
    l = J.current,
    a = !1,
    i = (t.flags & 128) !== 0,
    o;
  if (
    ((o = i) ||
      (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    o
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    W(J, l & 1),
    e === null)
  )
    return (
      sa(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = s.children),
          (e = s.fallback),
          a
            ? ((s = t.mode),
              (a = t.child),
              (i = { mode: "hidden", children: i }),
              !(s & 1) && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = i))
                : (a = Qs(i, s, 0, null)),
              (e = Kt(e, s, r, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = fa(r)),
              (t.memoizedState = da),
              e)
            : si(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
    return om(e, t, i, s, o, l, r);
  if (a) {
    (a = s.fallback), (i = t.mode), (l = e.child), (o = l.sibling);
    var c = { mode: "hidden", children: s.children };
    return (
      !(i & 1) && t.child !== l
        ? ((s = t.child),
          (s.childLanes = 0),
          (s.pendingProps = c),
          (t.deletions = null))
        : ((s = Pt(l, c)), (s.subtreeFlags = l.subtreeFlags & 14680064)),
      o !== null ? (a = Pt(o, a)) : ((a = Kt(a, i, r, null)), (a.flags |= 2)),
      (a.return = t),
      (s.return = t),
      (s.sibling = a),
      (t.child = s),
      (s = a),
      (a = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? fa(r)
          : {
              baseLanes: i.baseLanes | r,
              cachePool: null,
              transitions: i.transitions,
            }),
      (a.memoizedState = i),
      (a.childLanes = e.childLanes & ~r),
      (t.memoizedState = da),
      s
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (s = Pt(a, { mode: "visible", children: s.children })),
    !(t.mode & 1) && (s.lanes = r),
    (s.return = t),
    (s.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = s),
    (t.memoizedState = null),
    s
  );
}
function si(e, t) {
  return (
    (t = Qs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Gn(e, t, r, s) {
  return (
    s !== null && Ha(s),
    Ir(t, e.child, null, r),
    (e = si(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function om(e, t, r, s, l, a, i) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (s = Nl(Error(T(422)))), Gn(e, t, i, s))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((a = s.fallback),
        (l = t.mode),
        (s = Qs({ mode: "visible", children: s.children }, l, 0, null)),
        (a = Kt(a, l, i, null)),
        (a.flags |= 2),
        (s.return = t),
        (a.return = t),
        (s.sibling = a),
        (t.child = s),
        t.mode & 1 && Ir(t, e.child, null, i),
        (t.child.memoizedState = fa(i)),
        (t.memoizedState = da),
        a);
  if (!(t.mode & 1)) return Gn(e, t, i, null);
  if (l.data === "$!") {
    if (((s = l.nextSibling && l.nextSibling.dataset), s)) var o = s.dgst;
    return (s = o), (a = Error(T(419))), (s = Nl(a, s, void 0)), Gn(e, t, i, s);
  }
  if (((o = (i & e.childLanes) !== 0), Ce || o)) {
    if (((s = de), s !== null)) {
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
      (l = l & (s.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== a.retryLane &&
          ((a.retryLane = l), mt(e, l), Je(s, e, l, -1));
    }
    return ui(), (s = Nl(Error(T(421)))), Gn(e, t, i, s);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = wm.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (Re = _t(l.nextSibling)),
      (Me = t),
      (Y = !0),
      (Ye = null),
      e !== null &&
        ((Ue[qe++] = it),
        (Ue[qe++] = ot),
        (Ue[qe++] = Zt),
        (it = e.id),
        (ot = e.overflow),
        (Zt = t)),
      (t = si(t, s.children)),
      (t.flags |= 4096),
      t);
}
function po(e, t, r) {
  e.lanes |= t;
  var s = e.alternate;
  s !== null && (s.lanes |= t), la(e.return, t, r);
}
function bl(e, t, r, s, l) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: s,
        tail: r,
        tailMode: l,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = s),
      (a.tail = r),
      (a.tailMode = l));
}
function ju(e, t, r) {
  var s = t.pendingProps,
    l = s.revealOrder,
    a = s.tail;
  if ((we(e, t, s.children, r), (s = J.current), s & 2))
    (s = (s & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && po(e, r, t);
        else if (e.tag === 19) po(e, r, t);
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
  if ((W(J, s), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (r = t.child, l = null; r !== null; )
          (e = r.alternate),
            e !== null && Cs(e) === null && (l = r),
            (r = r.sibling);
        (r = l),
          r === null
            ? ((l = t.child), (t.child = null))
            : ((l = r.sibling), (r.sibling = null)),
          bl(t, !1, l, r, a);
        break;
      case "backwards":
        for (r = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Cs(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = r), (r = l), (l = e);
        }
        bl(t, !0, r, null, a);
        break;
      case "together":
        bl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function as(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ht(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (tr |= t.lanes),
    !(r & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(T(153));
  if (t.child !== null) {
    for (
      e = t.child, r = Pt(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = Pt(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function cm(e, t, r) {
  switch (t.tag) {
    case 3:
      yu(t), _r();
      break;
    case 5:
      Qc(t);
      break;
    case 1:
      De(t.type) && js(t);
      break;
    case 4:
      Ya(t, t.stateNode.containerInfo);
      break;
    case 10:
      var s = t.type._context,
        l = t.memoizedProps.value;
      W(bs, s._currentValue), (s._currentValue = l);
      break;
    case 13:
      if (((s = t.memoizedState), s !== null))
        return s.dehydrated !== null
          ? (W(J, J.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
          ? vu(e, t, r)
          : (W(J, J.current & 1),
            (e = ht(e, t, r)),
            e !== null ? e.sibling : null);
      W(J, J.current & 1);
      break;
    case 19:
      if (((s = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (s) return ju(e, t, r);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        W(J, J.current),
        s)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), gu(e, t, r);
  }
  return ht(e, t, r);
}
var wu, ma, Nu, bu;
wu = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
ma = function () {};
Nu = function (e, t, r, s) {
  var l = e.memoizedProps;
  if (l !== s) {
    (e = t.stateNode), Qt(st.current);
    var a = null;
    switch (r) {
      case "input":
        (l = Ml(e, l)), (s = Ml(e, s)), (a = []);
        break;
      case "select":
        (l = te({}, l, { value: void 0 })),
          (s = te({}, s, { value: void 0 })),
          (a = []);
        break;
      case "textarea":
        (l = Al(e, l)), (s = Al(e, s)), (a = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof s.onClick == "function" &&
          (e.onclick = ys);
    }
    $l(r, s);
    var i;
    r = null;
    for (u in l)
      if (!s.hasOwnProperty(u) && l.hasOwnProperty(u) && l[u] != null)
        if (u === "style") {
          var o = l[u];
          for (i in o) o.hasOwnProperty(i) && (r || (r = {}), (r[i] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (un.hasOwnProperty(u)
              ? a || (a = [])
              : (a = a || []).push(u, null));
    for (u in s) {
      var c = s[u];
      if (
        ((o = l != null ? l[u] : void 0),
        s.hasOwnProperty(u) && c !== o && (c != null || o != null))
      )
        if (u === "style")
          if (o) {
            for (i in o)
              !o.hasOwnProperty(i) ||
                (c && c.hasOwnProperty(i)) ||
                (r || (r = {}), (r[i] = ""));
            for (i in c)
              c.hasOwnProperty(i) &&
                o[i] !== c[i] &&
                (r || (r = {}), (r[i] = c[i]));
          } else r || (a || (a = []), a.push(u, r)), (r = c);
        else
          u === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (o = o ? o.__html : void 0),
              c != null && o !== c && (a = a || []).push(u, c))
            : u === "children"
            ? (typeof c != "string" && typeof c != "number") ||
              (a = a || []).push(u, "" + c)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (un.hasOwnProperty(u)
                ? (c != null && u === "onScroll" && G("scroll", e),
                  a || o === c || (a = []))
                : (a = a || []).push(u, c));
    }
    r && (a = a || []).push("style", r);
    var u = a;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
bu = function (e, t, r, s) {
  r !== s && (t.flags |= 4);
};
function Wr(e, t) {
  if (!Y)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var s = null; r !== null; )
          r.alternate !== null && (s = r), (r = r.sibling);
        s === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (s.sibling = null);
    }
}
function xe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    s = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (r |= l.lanes | l.childLanes),
        (s |= l.subtreeFlags & 14680064),
        (s |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (r |= l.lanes | l.childLanes),
        (s |= l.subtreeFlags),
        (s |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= s), (e.childLanes = r), t;
}
function um(e, t, r) {
  var s = t.pendingProps;
  switch ((Va(t), t.tag)) {
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
      return xe(t), null;
    case 1:
      return De(t.type) && vs(), xe(t), null;
    case 3:
      return (
        (s = t.stateNode),
        zr(),
        K(Ee),
        K(ve),
        Ja(),
        s.pendingContext &&
          ((s.context = s.pendingContext), (s.pendingContext = null)),
        (e === null || e.child === null) &&
          (Qn(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ye !== null && (wa(Ye), (Ye = null)))),
        ma(e, t),
        xe(t),
        null
      );
    case 5:
      Xa(t);
      var l = Qt(Nn.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        Nu(e, t, r, s, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!s) {
          if (t.stateNode === null) throw Error(T(166));
          return xe(t), null;
        }
        if (((e = Qt(st.current)), Qn(t))) {
          (s = t.stateNode), (r = t.type);
          var a = t.memoizedProps;
          switch (((s[rt] = t), (s[jn] = a), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              G("cancel", s), G("close", s);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", s);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Jr.length; l++) G(Jr[l], s);
              break;
            case "source":
              G("error", s);
              break;
            case "img":
            case "image":
            case "link":
              G("error", s), G("load", s);
              break;
            case "details":
              G("toggle", s);
              break;
            case "input":
              bi(s, a), G("invalid", s);
              break;
            case "select":
              (s._wrapperState = { wasMultiple: !!a.multiple }),
                G("invalid", s);
              break;
            case "textarea":
              ki(s, a), G("invalid", s);
          }
          $l(r, a), (l = null);
          for (var i in a)
            if (a.hasOwnProperty(i)) {
              var o = a[i];
              i === "children"
                ? typeof o == "string"
                  ? s.textContent !== o &&
                    (a.suppressHydrationWarning !== !0 &&
                      Bn(s.textContent, o, e),
                    (l = ["children", o]))
                  : typeof o == "number" &&
                    s.textContent !== "" + o &&
                    (a.suppressHydrationWarning !== !0 &&
                      Bn(s.textContent, o, e),
                    (l = ["children", "" + o]))
                : un.hasOwnProperty(i) &&
                  o != null &&
                  i === "onScroll" &&
                  G("scroll", s);
            }
          switch (r) {
            case "input":
              Ln(s), Si(s, a, !0);
              break;
            case "textarea":
              Ln(s), Ci(s);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (s.onclick = ys);
          }
          (s = l), (t.updateQueue = s), s !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Xo(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof s.is == "string"
                ? (e = i.createElement(r, { is: s.is }))
                : ((e = i.createElement(r)),
                  r === "select" &&
                    ((i = e),
                    s.multiple
                      ? (i.multiple = !0)
                      : s.size && (i.size = s.size)))
              : (e = i.createElementNS(e, r)),
            (e[rt] = t),
            (e[jn] = s),
            wu(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Ul(r, s)), r)) {
              case "dialog":
                G("cancel", e), G("close", e), (l = s);
                break;
              case "iframe":
              case "object":
              case "embed":
                G("load", e), (l = s);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Jr.length; l++) G(Jr[l], e);
                l = s;
                break;
              case "source":
                G("error", e), (l = s);
                break;
              case "img":
              case "image":
              case "link":
                G("error", e), G("load", e), (l = s);
                break;
              case "details":
                G("toggle", e), (l = s);
                break;
              case "input":
                bi(e, s), (l = Ml(e, s)), G("invalid", e);
                break;
              case "option":
                l = s;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!s.multiple }),
                  (l = te({}, s, { value: void 0 })),
                  G("invalid", e);
                break;
              case "textarea":
                ki(e, s), (l = Al(e, s)), G("invalid", e);
                break;
              default:
                l = s;
            }
            $l(r, l), (o = l);
            for (a in o)
              if (o.hasOwnProperty(a)) {
                var c = o[a];
                a === "style"
                  ? ec(e, c)
                  : a === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && Jo(e, c))
                  : a === "children"
                  ? typeof c == "string"
                    ? (r !== "textarea" || c !== "") && dn(e, c)
                    : typeof c == "number" && dn(e, "" + c)
                  : a !== "suppressContentEditableWarning" &&
                    a !== "suppressHydrationWarning" &&
                    a !== "autoFocus" &&
                    (un.hasOwnProperty(a)
                      ? c != null && a === "onScroll" && G("scroll", e)
                      : c != null && Da(e, a, c, i));
              }
            switch (r) {
              case "input":
                Ln(e), Si(e, s, !1);
                break;
              case "textarea":
                Ln(e), Ci(e);
                break;
              case "option":
                s.value != null && e.setAttribute("value", "" + Rt(s.value));
                break;
              case "select":
                (e.multiple = !!s.multiple),
                  (a = s.value),
                  a != null
                    ? jr(e, !!s.multiple, a, !1)
                    : s.defaultValue != null &&
                      jr(e, !!s.multiple, s.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ys);
            }
            switch (r) {
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
      return xe(t), null;
    case 6:
      if (e && t.stateNode != null) bu(e, t, e.memoizedProps, s);
      else {
        if (typeof s != "string" && t.stateNode === null) throw Error(T(166));
        if (((r = Qt(Nn.current)), Qt(st.current), Qn(t))) {
          if (
            ((s = t.stateNode),
            (r = t.memoizedProps),
            (s[rt] = t),
            (a = s.nodeValue !== r) && ((e = Me), e !== null))
          )
            switch (e.tag) {
              case 3:
                Bn(s.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Bn(s.nodeValue, r, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else
          (s = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(s)),
            (s[rt] = t),
            (t.stateNode = s);
      }
      return xe(t), null;
    case 13:
      if (
        (K(J),
        (s = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Y && Re !== null && t.mode & 1 && !(t.flags & 128))
          Uc(), _r(), (t.flags |= 98560), (a = !1);
        else if (((a = Qn(t)), s !== null && s.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(T(318));
            if (
              ((a = t.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(T(317));
            a[rt] = t;
          } else
            _r(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          xe(t), (a = !1);
        } else Ye !== null && (wa(Ye), (Ye = null)), (a = !0);
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((s = s !== null),
          s !== (e !== null && e.memoizedState !== null) &&
            s &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || J.current & 1 ? ce === 0 && (ce = 3) : ui())),
          t.updateQueue !== null && (t.flags |= 4),
          xe(t),
          null);
    case 4:
      return (
        zr(), ma(e, t), e === null && yn(t.stateNode.containerInfo), xe(t), null
      );
    case 10:
      return Wa(t.type._context), xe(t), null;
    case 17:
      return De(t.type) && vs(), xe(t), null;
    case 19:
      if ((K(J), (a = t.memoizedState), a === null)) return xe(t), null;
      if (((s = (t.flags & 128) !== 0), (i = a.rendering), i === null))
        if (s) Wr(a, !1);
        else {
          if (ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Cs(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Wr(a, !1),
                    s = i.updateQueue,
                    s !== null && ((t.updateQueue = s), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    s = r,
                    r = t.child;
                  r !== null;

                )
                  (a = r),
                    (e = s),
                    (a.flags &= 14680066),
                    (i = a.alternate),
                    i === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = i.childLanes),
                        (a.lanes = i.lanes),
                        (a.child = i.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = i.memoizedProps),
                        (a.memoizedState = i.memoizedState),
                        (a.updateQueue = i.updateQueue),
                        (a.type = i.type),
                        (e = i.dependencies),
                        (a.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return W(J, (J.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          a.tail !== null &&
            le() > Pr &&
            ((t.flags |= 128), (s = !0), Wr(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!s)
          if (((e = Cs(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (s = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              Wr(a, !0),
              a.tail === null && a.tailMode === "hidden" && !i.alternate && !Y)
            )
              return xe(t), null;
          } else
            2 * le() - a.renderingStartTime > Pr &&
              r !== 1073741824 &&
              ((t.flags |= 128), (s = !0), Wr(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((r = a.last),
            r !== null ? (r.sibling = i) : (t.child = i),
            (a.last = i));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = le()),
          (t.sibling = null),
          (r = J.current),
          W(J, s ? (r & 1) | 2 : r & 1),
          t)
        : (xe(t), null);
    case 22:
    case 23:
      return (
        ci(),
        (s = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== s && (t.flags |= 8192),
        s && t.mode & 1
          ? Te & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : xe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function dm(e, t) {
  switch ((Va(t), t.tag)) {
    case 1:
      return (
        De(t.type) && vs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        zr(),
        K(Ee),
        K(ve),
        Ja(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Xa(t), null;
    case 13:
      if ((K(J), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(T(340));
        _r();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return K(J), null;
    case 4:
      return zr(), null;
    case 10:
      return Wa(t.type._context), null;
    case 22:
    case 23:
      return ci(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kn = !1,
  ye = !1,
  fm = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function yr(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (s) {
        re(e, t, s);
      }
    else r.current = null;
}
function ha(e, t, r) {
  try {
    r();
  } catch (s) {
    re(e, t, s);
  }
}
var go = !1;
function mm(e, t) {
  if (((Xl = ps), (e = Dc()), Ua(e))) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var s = r.getSelection && r.getSelection();
        if (s && s.rangeCount !== 0) {
          r = s.anchorNode;
          var l = s.anchorOffset,
            a = s.focusNode;
          s = s.focusOffset;
          try {
            r.nodeType, a.nodeType;
          } catch {
            r = null;
            break e;
          }
          var i = 0,
            o = -1,
            c = -1,
            u = 0,
            d = 0,
            m = e,
            p = null;
          t: for (;;) {
            for (
              var x;
              m !== r || (l !== 0 && m.nodeType !== 3) || (o = i + l),
                m !== a || (s !== 0 && m.nodeType !== 3) || (c = i + s),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (x = m.firstChild) !== null;

            )
              (p = m), (m = x);
            for (;;) {
              if (m === e) break t;
              if (
                (p === r && ++u === l && (o = i),
                p === a && ++d === s && (c = i),
                (x = m.nextSibling) !== null)
              )
                break;
              (m = p), (p = m.parentNode);
            }
            m = x;
          }
          r = o === -1 || c === -1 ? null : { start: o, end: c };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (Jl = { focusedElem: e, selectionRange: r }, ps = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (O = e);
    else
      for (; O !== null; ) {
        t = O;
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
                  var N = y.memoizedProps,
                    k = y.memoizedState,
                    g = t.stateNode,
                    h = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? N : Ge(t.type, N),
                      k
                    );
                  g.__reactInternalSnapshotBeforeUpdate = h;
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
                throw Error(T(163));
            }
        } catch (w) {
          re(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (O = e);
          break;
        }
        O = t.return;
      }
  return (y = go), (go = !1), y;
}
function ln(e, t, r) {
  var s = t.updateQueue;
  if (((s = s !== null ? s.lastEffect : null), s !== null)) {
    var l = (s = s.next);
    do {
      if ((l.tag & e) === e) {
        var a = l.destroy;
        (l.destroy = void 0), a !== void 0 && ha(t, r, a);
      }
      l = l.next;
    } while (l !== s);
  }
}
function Hs(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var s = r.create;
        r.destroy = s();
      }
      r = r.next;
    } while (r !== t);
  }
}
function pa(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Su(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Su(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[rt], delete t[jn], delete t[ta], delete t[Kf], delete t[Yf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function ku(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function xo(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || ku(e.return)) return null;
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
function ga(e, t, r) {
  var s = e.tag;
  if (s === 5 || s === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = ys));
  else if (s !== 4 && ((e = e.child), e !== null))
    for (ga(e, t, r), e = e.sibling; e !== null; ) ga(e, t, r), (e = e.sibling);
}
function xa(e, t, r) {
  var s = e.tag;
  if (s === 5 || s === 6)
    (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (s !== 4 && ((e = e.child), e !== null))
    for (xa(e, t, r), e = e.sibling; e !== null; ) xa(e, t, r), (e = e.sibling);
}
var fe = null,
  Ke = !1;
function yt(e, t, r) {
  for (r = r.child; r !== null; ) Cu(e, t, r), (r = r.sibling);
}
function Cu(e, t, r) {
  if (nt && typeof nt.onCommitFiberUnmount == "function")
    try {
      nt.onCommitFiberUnmount(Os, r);
    } catch {}
  switch (r.tag) {
    case 5:
      ye || yr(r, t);
    case 6:
      var s = fe,
        l = Ke;
      (fe = null),
        yt(e, t, r),
        (fe = s),
        (Ke = l),
        fe !== null &&
          (Ke
            ? ((e = fe),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : fe.removeChild(r.stateNode));
      break;
    case 18:
      fe !== null &&
        (Ke
          ? ((e = fe),
            (r = r.stateNode),
            e.nodeType === 8
              ? gl(e.parentNode, r)
              : e.nodeType === 1 && gl(e, r),
            pn(e))
          : gl(fe, r.stateNode));
      break;
    case 4:
      (s = fe),
        (l = Ke),
        (fe = r.stateNode.containerInfo),
        (Ke = !0),
        yt(e, t, r),
        (fe = s),
        (Ke = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ye &&
        ((s = r.updateQueue), s !== null && ((s = s.lastEffect), s !== null))
      ) {
        l = s = s.next;
        do {
          var a = l,
            i = a.destroy;
          (a = a.tag),
            i !== void 0 && (a & 2 || a & 4) && ha(r, t, i),
            (l = l.next);
        } while (l !== s);
      }
      yt(e, t, r);
      break;
    case 1:
      if (
        !ye &&
        (yr(r, t),
        (s = r.stateNode),
        typeof s.componentWillUnmount == "function")
      )
        try {
          (s.props = r.memoizedProps),
            (s.state = r.memoizedState),
            s.componentWillUnmount();
        } catch (o) {
          re(r, t, o);
        }
      yt(e, t, r);
      break;
    case 21:
      yt(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((ye = (s = ye) || r.memoizedState !== null), yt(e, t, r), (ye = s))
        : yt(e, t, r);
      break;
    default:
      yt(e, t, r);
  }
}
function yo(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new fm()),
      t.forEach(function (s) {
        var l = Nm.bind(null, e, s);
        r.has(s) || (r.add(s), s.then(l, l));
      });
  }
}
function We(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var s = 0; s < r.length; s++) {
      var l = r[s];
      try {
        var a = e,
          i = t,
          o = i;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              (fe = o.stateNode), (Ke = !1);
              break e;
            case 3:
              (fe = o.stateNode.containerInfo), (Ke = !0);
              break e;
            case 4:
              (fe = o.stateNode.containerInfo), (Ke = !0);
              break e;
          }
          o = o.return;
        }
        if (fe === null) throw Error(T(160));
        Cu(a, i, l), (fe = null), (Ke = !1);
        var c = l.alternate;
        c !== null && (c.return = null), (l.return = null);
      } catch (u) {
        re(l, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Eu(t, e), (t = t.sibling);
}
function Eu(e, t) {
  var r = e.alternate,
    s = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((We(t, e), et(e), s & 4)) {
        try {
          ln(3, e, e.return), Hs(3, e);
        } catch (N) {
          re(e, e.return, N);
        }
        try {
          ln(5, e, e.return);
        } catch (N) {
          re(e, e.return, N);
        }
      }
      break;
    case 1:
      We(t, e), et(e), s & 512 && r !== null && yr(r, r.return);
      break;
    case 5:
      if (
        (We(t, e),
        et(e),
        s & 512 && r !== null && yr(r, r.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          dn(l, "");
        } catch (N) {
          re(e, e.return, N);
        }
      }
      if (s & 4 && ((l = e.stateNode), l != null)) {
        var a = e.memoizedProps,
          i = r !== null ? r.memoizedProps : a,
          o = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            o === "input" && a.type === "radio" && a.name != null && Ko(l, a),
              Ul(o, i);
            var u = Ul(o, a);
            for (i = 0; i < c.length; i += 2) {
              var d = c[i],
                m = c[i + 1];
              d === "style"
                ? ec(l, m)
                : d === "dangerouslySetInnerHTML"
                ? Jo(l, m)
                : d === "children"
                ? dn(l, m)
                : Da(l, d, m, u);
            }
            switch (o) {
              case "input":
                Ol(l, a);
                break;
              case "textarea":
                Yo(l, a);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!a.multiple;
                var x = a.value;
                x != null
                  ? jr(l, !!a.multiple, x, !1)
                  : p !== !!a.multiple &&
                    (a.defaultValue != null
                      ? jr(l, !!a.multiple, a.defaultValue, !0)
                      : jr(l, !!a.multiple, a.multiple ? [] : "", !1));
            }
            l[jn] = a;
          } catch (N) {
            re(e, e.return, N);
          }
      }
      break;
    case 6:
      if ((We(t, e), et(e), s & 4)) {
        if (e.stateNode === null) throw Error(T(162));
        (l = e.stateNode), (a = e.memoizedProps);
        try {
          l.nodeValue = a;
        } catch (N) {
          re(e, e.return, N);
        }
      }
      break;
    case 3:
      if (
        (We(t, e), et(e), s & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          pn(t.containerInfo);
        } catch (N) {
          re(e, e.return, N);
        }
      break;
    case 4:
      We(t, e), et(e);
      break;
    case 13:
      We(t, e),
        et(e),
        (l = e.child),
        l.flags & 8192 &&
          ((a = l.memoizedState !== null),
          (l.stateNode.isHidden = a),
          !a ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (ii = le())),
        s & 4 && yo(e);
      break;
    case 22:
      if (
        ((d = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((ye = (u = ye) || d), We(t, e), (ye = u)) : We(t, e),
        et(e),
        s & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (O = e, d = e.child; d !== null; ) {
            for (m = O = d; O !== null; ) {
              switch (((p = O), (x = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ln(4, p, p.return);
                  break;
                case 1:
                  yr(p, p.return);
                  var y = p.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (s = p), (r = p.return);
                    try {
                      (t = s),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (N) {
                      re(s, r, N);
                    }
                  }
                  break;
                case 5:
                  yr(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    jo(m);
                    continue;
                  }
              }
              x !== null ? ((x.return = p), (O = x)) : jo(m);
            }
            d = d.sibling;
          }
        e: for (d = null, m = e; ; ) {
          if (m.tag === 5) {
            if (d === null) {
              d = m;
              try {
                (l = m.stateNode),
                  u
                    ? ((a = l.style),
                      typeof a.setProperty == "function"
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none"))
                    : ((o = m.stateNode),
                      (c = m.memoizedProps.style),
                      (i =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (o.style.display = Zo("display", i)));
              } catch (N) {
                re(e, e.return, N);
              }
            }
          } else if (m.tag === 6) {
            if (d === null)
              try {
                m.stateNode.nodeValue = u ? "" : m.memoizedProps;
              } catch (N) {
                re(e, e.return, N);
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
      We(t, e), et(e), s & 4 && yo(e);
      break;
    case 21:
      break;
    default:
      We(t, e), et(e);
  }
}
function et(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (ku(r)) {
            var s = r;
            break e;
          }
          r = r.return;
        }
        throw Error(T(160));
      }
      switch (s.tag) {
        case 5:
          var l = s.stateNode;
          s.flags & 32 && (dn(l, ""), (s.flags &= -33));
          var a = xo(e);
          xa(e, a, l);
          break;
        case 3:
        case 4:
          var i = s.stateNode.containerInfo,
            o = xo(e);
          ga(e, o, i);
          break;
        default:
          throw Error(T(161));
      }
    } catch (c) {
      re(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function hm(e, t, r) {
  (O = e), Du(e);
}
function Du(e, t, r) {
  for (var s = (e.mode & 1) !== 0; O !== null; ) {
    var l = O,
      a = l.child;
    if (l.tag === 22 && s) {
      var i = l.memoizedState !== null || Kn;
      if (!i) {
        var o = l.alternate,
          c = (o !== null && o.memoizedState !== null) || ye;
        o = Kn;
        var u = ye;
        if (((Kn = i), (ye = c) && !u))
          for (O = l; O !== null; )
            (i = O),
              (c = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? wo(l)
                : c !== null
                ? ((c.return = i), (O = c))
                : wo(l);
        for (; a !== null; ) (O = a), Du(a), (a = a.sibling);
        (O = l), (Kn = o), (ye = u);
      }
      vo(e);
    } else
      l.subtreeFlags & 8772 && a !== null ? ((a.return = l), (O = a)) : vo(e);
  }
}
function vo(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ye || Hs(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !ye)
                if (r === null) s.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : Ge(t.type, r.memoizedProps);
                  s.componentDidUpdate(
                    l,
                    r.memoizedState,
                    s.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var a = t.updateQueue;
              a !== null && ro(t, a, s);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                ro(t, i, r);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (r === null && t.flags & 4) {
                r = o;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && r.focus();
                    break;
                  case "img":
                    c.src && (r.src = c.src);
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
                    m !== null && pn(m);
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
        ye || (t.flags & 512 && pa(t));
      } catch (p) {
        re(t, t.return, p);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), (O = r);
      break;
    }
    O = t.return;
  }
}
function jo(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), (O = r);
      break;
    }
    O = t.return;
  }
}
function wo(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            Hs(4, t);
          } catch (c) {
            re(t, r, c);
          }
          break;
        case 1:
          var s = t.stateNode;
          if (typeof s.componentDidMount == "function") {
            var l = t.return;
            try {
              s.componentDidMount();
            } catch (c) {
              re(t, l, c);
            }
          }
          var a = t.return;
          try {
            pa(t);
          } catch (c) {
            re(t, a, c);
          }
          break;
        case 5:
          var i = t.return;
          try {
            pa(t);
          } catch (c) {
            re(t, i, c);
          }
      }
    } catch (c) {
      re(t, t.return, c);
    }
    if (t === e) {
      O = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      (o.return = t.return), (O = o);
      break;
    }
    O = t.return;
  }
}
var pm = Math.ceil,
  _s = xt.ReactCurrentDispatcher,
  li = xt.ReactCurrentOwner,
  He = xt.ReactCurrentBatchConfig,
  V = 0,
  de = null,
  ie = null,
  he = 0,
  Te = 0,
  vr = At(0),
  ce = 0,
  Cn = null,
  tr = 0,
  Bs = 0,
  ai = 0,
  an = null,
  ke = null,
  ii = 0,
  Pr = 1 / 0,
  lt = null,
  Is = !1,
  ya = null,
  zt = null,
  Yn = !1,
  kt = null,
  zs = 0,
  on = 0,
  va = null,
  is = -1,
  os = 0;
function Ne() {
  return V & 6 ? le() : is !== -1 ? is : (is = le());
}
function Tt(e) {
  return e.mode & 1
    ? V & 2 && he !== 0
      ? he & -he
      : Jf.transition !== null
      ? (os === 0 && (os = fc()), os)
      : ((e = Q),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : vc(e.type))),
        e)
    : 1;
}
function Je(e, t, r, s) {
  if (50 < on) throw ((on = 0), (va = null), Error(T(185)));
  In(e, r, s),
    (!(V & 2) || e !== de) &&
      (e === de && (!(V & 2) && (Bs |= r), ce === 4 && bt(e, he)),
      _e(e, s),
      r === 1 && V === 0 && !(t.mode & 1) && ((Pr = le() + 500), Us && Ft()));
}
function _e(e, t) {
  var r = e.callbackNode;
  Xd(e, t);
  var s = hs(e, e === de ? he : 0);
  if (s === 0)
    r !== null && _i(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = s & -s), e.callbackPriority !== t)) {
    if ((r != null && _i(r), t === 1))
      e.tag === 0 ? Xf(No.bind(null, e)) : Ac(No.bind(null, e)),
        Wf(function () {
          !(V & 6) && Ft();
        }),
        (r = null);
    else {
      switch (mc(s)) {
        case 1:
          r = Pa;
          break;
        case 4:
          r = uc;
          break;
        case 16:
          r = ms;
          break;
        case 536870912:
          r = dc;
          break;
        default:
          r = ms;
      }
      r = Ou(r, _u.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function _u(e, t) {
  if (((is = -1), (os = 0), V & 6)) throw Error(T(327));
  var r = e.callbackNode;
  if (kr() && e.callbackNode !== r) return null;
  var s = hs(e, e === de ? he : 0);
  if (s === 0) return null;
  if (s & 30 || s & e.expiredLanes || t) t = Ts(e, s);
  else {
    t = s;
    var l = V;
    V |= 2;
    var a = zu();
    (de !== e || he !== t) && ((lt = null), (Pr = le() + 500), Gt(e, t));
    do
      try {
        ym();
        break;
      } catch (o) {
        Iu(e, o);
      }
    while (!0);
    Qa(),
      (_s.current = a),
      (V = l),
      ie !== null ? (t = 0) : ((de = null), (he = 0), (t = ce));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ql(e)), l !== 0 && ((s = l), (t = ja(e, l)))), t === 1)
    )
      throw ((r = Cn), Gt(e, 0), bt(e, s), _e(e, le()), r);
    if (t === 6) bt(e, s);
    else {
      if (
        ((l = e.current.alternate),
        !(s & 30) &&
          !gm(l) &&
          ((t = Ts(e, s)),
          t === 2 && ((a = Ql(e)), a !== 0 && ((s = a), (t = ja(e, a)))),
          t === 1))
      )
        throw ((r = Cn), Gt(e, 0), bt(e, s), _e(e, le()), r);
      switch (((e.finishedWork = l), (e.finishedLanes = s), t)) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          Vt(e, ke, lt);
          break;
        case 3:
          if (
            (bt(e, s), (s & 130023424) === s && ((t = ii + 500 - le()), 10 < t))
          ) {
            if (hs(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & s) !== s)) {
              Ne(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = ea(Vt.bind(null, e, ke, lt), t);
            break;
          }
          Vt(e, ke, lt);
          break;
        case 4:
          if ((bt(e, s), (s & 4194240) === s)) break;
          for (t = e.eventTimes, l = -1; 0 < s; ) {
            var i = 31 - Xe(s);
            (a = 1 << i), (i = t[i]), i > l && (l = i), (s &= ~a);
          }
          if (
            ((s = l),
            (s = le() - s),
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
                : 1960 * pm(s / 1960)) - s),
            10 < s)
          ) {
            e.timeoutHandle = ea(Vt.bind(null, e, ke, lt), s);
            break;
          }
          Vt(e, ke, lt);
          break;
        case 5:
          Vt(e, ke, lt);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return _e(e, le()), e.callbackNode === r ? _u.bind(null, e) : null;
}
function ja(e, t) {
  var r = an;
  return (
    e.current.memoizedState.isDehydrated && (Gt(e, t).flags |= 256),
    (e = Ts(e, t)),
    e !== 2 && ((t = ke), (ke = r), t !== null && wa(t)),
    e
  );
}
function wa(e) {
  ke === null ? (ke = e) : ke.push.apply(ke, e);
}
function gm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var s = 0; s < r.length; s++) {
          var l = r[s],
            a = l.getSnapshot;
          l = l.value;
          try {
            if (!Ze(a(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      (r.return = t), (t = r);
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
function bt(e, t) {
  for (
    t &= ~ai,
      t &= ~Bs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - Xe(t),
      s = 1 << r;
    (e[r] = -1), (t &= ~s);
  }
}
function No(e) {
  if (V & 6) throw Error(T(327));
  kr();
  var t = hs(e, 0);
  if (!(t & 1)) return _e(e, le()), null;
  var r = Ts(e, t);
  if (e.tag !== 0 && r === 2) {
    var s = Ql(e);
    s !== 0 && ((t = s), (r = ja(e, s)));
  }
  if (r === 1) throw ((r = Cn), Gt(e, 0), bt(e, t), _e(e, le()), r);
  if (r === 6) throw Error(T(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Vt(e, ke, lt),
    _e(e, le()),
    null
  );
}
function oi(e, t) {
  var r = V;
  V |= 1;
  try {
    return e(t);
  } finally {
    (V = r), V === 0 && ((Pr = le() + 500), Us && Ft());
  }
}
function rr(e) {
  kt !== null && kt.tag === 0 && !(V & 6) && kr();
  var t = V;
  V |= 1;
  var r = He.transition,
    s = Q;
  try {
    if (((He.transition = null), (Q = 1), e)) return e();
  } finally {
    (Q = s), (He.transition = r), (V = t), !(V & 6) && Ft();
  }
}
function ci() {
  (Te = vr.current), K(vr);
}
function Gt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), Qf(r)), ie !== null))
    for (r = ie.return; r !== null; ) {
      var s = r;
      switch ((Va(s), s.tag)) {
        case 1:
          (s = s.type.childContextTypes), s != null && vs();
          break;
        case 3:
          zr(), K(Ee), K(ve), Ja();
          break;
        case 5:
          Xa(s);
          break;
        case 4:
          zr();
          break;
        case 13:
          K(J);
          break;
        case 19:
          K(J);
          break;
        case 10:
          Wa(s.type._context);
          break;
        case 22:
        case 23:
          ci();
      }
      r = r.return;
    }
  if (
    ((de = e),
    (ie = e = Pt(e.current, null)),
    (he = Te = t),
    (ce = 0),
    (Cn = null),
    (ai = Bs = tr = 0),
    (ke = an = null),
    Bt !== null)
  ) {
    for (t = 0; t < Bt.length; t++)
      if (((r = Bt[t]), (s = r.interleaved), s !== null)) {
        r.interleaved = null;
        var l = s.next,
          a = r.pending;
        if (a !== null) {
          var i = a.next;
          (a.next = l), (s.next = i);
        }
        r.pending = s;
      }
    Bt = null;
  }
  return e;
}
function Iu(e, t) {
  do {
    var r = ie;
    try {
      if ((Qa(), (ss.current = Ds), Es)) {
        for (var s = ee.memoizedState; s !== null; ) {
          var l = s.queue;
          l !== null && (l.pending = null), (s = s.next);
        }
        Es = !1;
      }
      if (
        ((er = 0),
        (ue = oe = ee = null),
        (sn = !1),
        (bn = 0),
        (li.current = null),
        r === null || r.return === null)
      ) {
        (ce = 1), (Cn = t), (ie = null);
        break;
      }
      e: {
        var a = e,
          i = r.return,
          o = r,
          c = t;
        if (
          ((t = he),
          (o.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var u = c,
            d = o,
            m = d.tag;
          if (!(d.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = d.alternate;
            p
              ? ((d.updateQueue = p.updateQueue),
                (d.memoizedState = p.memoizedState),
                (d.lanes = p.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var x = oo(i);
          if (x !== null) {
            (x.flags &= -257),
              co(x, i, o, a, t),
              x.mode & 1 && io(a, u, t),
              (t = x),
              (c = u);
            var y = t.updateQueue;
            if (y === null) {
              var N = new Set();
              N.add(c), (t.updateQueue = N);
            } else y.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              io(a, u, t), ui();
              break e;
            }
            c = Error(T(426));
          }
        } else if (Y && o.mode & 1) {
          var k = oo(i);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              co(k, i, o, a, t),
              Ha(Tr(c, o));
            break e;
          }
        }
        (a = c = Tr(c, o)),
          ce !== 4 && (ce = 2),
          an === null ? (an = [a]) : an.push(a),
          (a = i);
        do {
          switch (a.tag) {
            case 3:
              (a.flags |= 65536), (t &= -t), (a.lanes |= t);
              var g = mu(a, c, t);
              to(a, g);
              break e;
            case 1:
              o = c;
              var h = a.type,
                f = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (zt === null || !zt.has(f))))
              ) {
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var w = hu(a, o, t);
                to(a, w);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      Pu(r);
    } catch (C) {
      (t = C), ie === r && r !== null && (ie = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function zu() {
  var e = _s.current;
  return (_s.current = Ds), e === null ? Ds : e;
}
function ui() {
  (ce === 0 || ce === 3 || ce === 2) && (ce = 4),
    de === null || (!(tr & 268435455) && !(Bs & 268435455)) || bt(de, he);
}
function Ts(e, t) {
  var r = V;
  V |= 2;
  var s = zu();
  (de !== e || he !== t) && ((lt = null), Gt(e, t));
  do
    try {
      xm();
      break;
    } catch (l) {
      Iu(e, l);
    }
  while (!0);
  if ((Qa(), (V = r), (_s.current = s), ie !== null)) throw Error(T(261));
  return (de = null), (he = 0), ce;
}
function xm() {
  for (; ie !== null; ) Tu(ie);
}
function ym() {
  for (; ie !== null && !qd(); ) Tu(ie);
}
function Tu(e) {
  var t = Mu(e.alternate, e, Te);
  (e.memoizedProps = e.pendingProps),
    t === null ? Pu(e) : (ie = t),
    (li.current = null);
}
function Pu(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = dm(r, t)), r !== null)) {
        (r.flags &= 32767), (ie = r);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ce = 6), (ie = null);
        return;
      }
    } else if (((r = um(r, t, Te)), r !== null)) {
      ie = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ie = t;
      return;
    }
    ie = t = e;
  } while (t !== null);
  ce === 0 && (ce = 5);
}
function Vt(e, t, r) {
  var s = Q,
    l = He.transition;
  try {
    (He.transition = null), (Q = 1), vm(e, t, r, s);
  } finally {
    (He.transition = l), (Q = s);
  }
  return null;
}
function vm(e, t, r, s) {
  do kr();
  while (kt !== null);
  if (V & 6) throw Error(T(327));
  r = e.finishedWork;
  var l = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(T(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var a = r.lanes | r.childLanes;
  if (
    (Jd(e, a),
    e === de && ((ie = de = null), (he = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      Yn ||
      ((Yn = !0),
      Ou(ms, function () {
        return kr(), null;
      })),
    (a = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || a)
  ) {
    (a = He.transition), (He.transition = null);
    var i = Q;
    Q = 1;
    var o = V;
    (V |= 4),
      (li.current = null),
      mm(e, r),
      Eu(r, e),
      Ff(Jl),
      (ps = !!Xl),
      (Jl = Xl = null),
      (e.current = r),
      hm(r),
      Vd(),
      (V = o),
      (Q = i),
      (He.transition = a);
  } else e.current = r;
  if (
    (Yn && ((Yn = !1), (kt = e), (zs = l)),
    (a = e.pendingLanes),
    a === 0 && (zt = null),
    Qd(r.stateNode),
    _e(e, le()),
    t !== null)
  )
    for (s = e.onRecoverableError, r = 0; r < t.length; r++)
      (l = t[r]), s(l.value, { componentStack: l.stack, digest: l.digest });
  if (Is) throw ((Is = !1), (e = ya), (ya = null), e);
  return (
    zs & 1 && e.tag !== 0 && kr(),
    (a = e.pendingLanes),
    a & 1 ? (e === va ? on++ : ((on = 0), (va = e))) : (on = 0),
    Ft(),
    null
  );
}
function kr() {
  if (kt !== null) {
    var e = mc(zs),
      t = He.transition,
      r = Q;
    try {
      if (((He.transition = null), (Q = 16 > e ? 16 : e), kt === null))
        var s = !1;
      else {
        if (((e = kt), (kt = null), (zs = 0), V & 6)) throw Error(T(331));
        var l = V;
        for (V |= 4, O = e.current; O !== null; ) {
          var a = O,
            i = a.child;
          if (O.flags & 16) {
            var o = a.deletions;
            if (o !== null) {
              for (var c = 0; c < o.length; c++) {
                var u = o[c];
                for (O = u; O !== null; ) {
                  var d = O;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ln(8, d, a);
                  }
                  var m = d.child;
                  if (m !== null) (m.return = d), (O = m);
                  else
                    for (; O !== null; ) {
                      d = O;
                      var p = d.sibling,
                        x = d.return;
                      if ((Su(d), d === u)) {
                        O = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = x), (O = p);
                        break;
                      }
                      O = x;
                    }
                }
              }
              var y = a.alternate;
              if (y !== null) {
                var N = y.child;
                if (N !== null) {
                  y.child = null;
                  do {
                    var k = N.sibling;
                    (N.sibling = null), (N = k);
                  } while (N !== null);
                }
              }
              O = a;
            }
          }
          if (a.subtreeFlags & 2064 && i !== null) (i.return = a), (O = i);
          else
            e: for (; O !== null; ) {
              if (((a = O), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ln(9, a, a.return);
                }
              var g = a.sibling;
              if (g !== null) {
                (g.return = a.return), (O = g);
                break e;
              }
              O = a.return;
            }
        }
        var h = e.current;
        for (O = h; O !== null; ) {
          i = O;
          var f = i.child;
          if (i.subtreeFlags & 2064 && f !== null) (f.return = i), (O = f);
          else
            e: for (i = h; O !== null; ) {
              if (((o = O), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hs(9, o);
                  }
                } catch (C) {
                  re(o, o.return, C);
                }
              if (o === i) {
                O = null;
                break e;
              }
              var w = o.sibling;
              if (w !== null) {
                (w.return = o.return), (O = w);
                break e;
              }
              O = o.return;
            }
        }
        if (
          ((V = l), Ft(), nt && typeof nt.onPostCommitFiberRoot == "function")
        )
          try {
            nt.onPostCommitFiberRoot(Os, e);
          } catch {}
        s = !0;
      }
      return s;
    } finally {
      (Q = r), (He.transition = t);
    }
  }
  return !1;
}
function bo(e, t, r) {
  (t = Tr(r, t)),
    (t = mu(e, t, 1)),
    (e = It(e, t, 1)),
    (t = Ne()),
    e !== null && (In(e, 1, t), _e(e, t));
}
function re(e, t, r) {
  if (e.tag === 3) bo(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        bo(t, e, r);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof s.componentDidCatch == "function" &&
            (zt === null || !zt.has(s)))
        ) {
          (e = Tr(r, e)),
            (e = hu(t, e, 1)),
            (t = It(t, e, 1)),
            (e = Ne()),
            t !== null && (In(t, 1, e), _e(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function jm(e, t, r) {
  var s = e.pingCache;
  s !== null && s.delete(t),
    (t = Ne()),
    (e.pingedLanes |= e.suspendedLanes & r),
    de === e &&
      (he & r) === r &&
      (ce === 4 || (ce === 3 && (he & 130023424) === he && 500 > le() - ii)
        ? Gt(e, 0)
        : (ai |= r)),
    _e(e, t);
}
function Ru(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = $n), ($n <<= 1), !($n & 130023424) && ($n = 4194304))
      : (t = 1));
  var r = Ne();
  (e = mt(e, t)), e !== null && (In(e, t, r), _e(e, r));
}
function wm(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), Ru(e, r);
}
function Nm(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var s = e.stateNode,
        l = e.memoizedState;
      l !== null && (r = l.retryLane);
      break;
    case 19:
      s = e.stateNode;
      break;
    default:
      throw Error(T(314));
  }
  s !== null && s.delete(t), Ru(e, r);
}
var Mu;
Mu = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ee.current) Ce = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (Ce = !1), cm(e, t, r);
      Ce = !!(e.flags & 131072);
    }
  else (Ce = !1), Y && t.flags & 1048576 && Fc(t, Ns, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var s = t.type;
      as(e, t), (e = t.pendingProps);
      var l = Dr(t, ve.current);
      Sr(t, r), (l = ei(null, t, s, e, l, r));
      var a = ti();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            De(s) ? ((a = !0), js(t)) : (a = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ka(t),
            (l.updater = Vs),
            (t.stateNode = l),
            (l._reactInternals = t),
            ia(t, s, e, r),
            (t = ua(null, t, s, !0, a, r)))
          : ((t.tag = 0), Y && a && qa(t), we(null, t, l, r), (t = t.child)),
        t
      );
    case 16:
      s = t.elementType;
      e: {
        switch (
          (as(e, t),
          (e = t.pendingProps),
          (l = s._init),
          (s = l(s._payload)),
          (t.type = s),
          (l = t.tag = Sm(s)),
          (e = Ge(s, e)),
          l)
        ) {
          case 0:
            t = ca(null, t, s, e, r);
            break e;
          case 1:
            t = mo(null, t, s, e, r);
            break e;
          case 11:
            t = uo(null, t, s, e, r);
            break e;
          case 14:
            t = fo(null, t, s, Ge(s.type, e), r);
            break e;
        }
        throw Error(T(306, s, ""));
      }
      return t;
    case 0:
      return (
        (s = t.type),
        (l = t.pendingProps),
        (l = t.elementType === s ? l : Ge(s, l)),
        ca(e, t, s, l, r)
      );
    case 1:
      return (
        (s = t.type),
        (l = t.pendingProps),
        (l = t.elementType === s ? l : Ge(s, l)),
        mo(e, t, s, l, r)
      );
    case 3:
      e: {
        if ((yu(t), e === null)) throw Error(T(387));
        (s = t.pendingProps),
          (a = t.memoizedState),
          (l = a.element),
          Bc(e, t),
          ks(t, s, null, r);
        var i = t.memoizedState;
        if (((s = i.element), a.isDehydrated))
          if (
            ((a = {
              element: s,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            (l = Tr(Error(T(423)), t)), (t = ho(e, t, s, r, l));
            break e;
          } else if (s !== l) {
            (l = Tr(Error(T(424)), t)), (t = ho(e, t, s, r, l));
            break e;
          } else
            for (
              Re = _t(t.stateNode.containerInfo.firstChild),
                Me = t,
                Y = !0,
                Ye = null,
                r = Vc(t, null, s, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((_r(), s === l)) {
            t = ht(e, t, r);
            break e;
          }
          we(e, t, s, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Qc(t),
        e === null && sa(t),
        (s = t.type),
        (l = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Zl(s, l) ? (i = null) : a !== null && Zl(s, a) && (t.flags |= 32),
        xu(e, t),
        we(e, t, i, r),
        t.child
      );
    case 6:
      return e === null && sa(t), null;
    case 13:
      return vu(e, t, r);
    case 4:
      return (
        Ya(t, t.stateNode.containerInfo),
        (s = t.pendingProps),
        e === null ? (t.child = Ir(t, null, s, r)) : we(e, t, s, r),
        t.child
      );
    case 11:
      return (
        (s = t.type),
        (l = t.pendingProps),
        (l = t.elementType === s ? l : Ge(s, l)),
        uo(e, t, s, l, r)
      );
    case 7:
      return we(e, t, t.pendingProps, r), t.child;
    case 8:
      return we(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return we(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (
          ((s = t.type._context),
          (l = t.pendingProps),
          (a = t.memoizedProps),
          (i = l.value),
          W(bs, s._currentValue),
          (s._currentValue = i),
          a !== null)
        )
          if (Ze(a.value, i)) {
            if (a.children === l.children && !Ee.current) {
              t = ht(e, t, r);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var o = a.dependencies;
              if (o !== null) {
                i = a.child;
                for (var c = o.firstContext; c !== null; ) {
                  if (c.context === s) {
                    if (a.tag === 1) {
                      (c = ct(-1, r & -r)), (c.tag = 2);
                      var u = a.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (c.next = c)
                          : ((c.next = d.next), (d.next = c)),
                          (u.pending = c);
                      }
                    }
                    (a.lanes |= r),
                      (c = a.alternate),
                      c !== null && (c.lanes |= r),
                      la(a.return, r, t),
                      (o.lanes |= r);
                    break;
                  }
                  c = c.next;
                }
              } else if (a.tag === 10) i = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((i = a.return), i === null)) throw Error(T(341));
                (i.lanes |= r),
                  (o = i.alternate),
                  o !== null && (o.lanes |= r),
                  la(i, r, t),
                  (i = a.sibling);
              } else i = a.child;
              if (i !== null) i.return = a;
              else
                for (i = a; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((a = i.sibling), a !== null)) {
                    (a.return = i.return), (i = a);
                    break;
                  }
                  i = i.return;
                }
              a = i;
            }
        we(e, t, l.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (s = t.pendingProps.children),
        Sr(t, r),
        (l = Be(l)),
        (s = s(l)),
        (t.flags |= 1),
        we(e, t, s, r),
        t.child
      );
    case 14:
      return (
        (s = t.type),
        (l = Ge(s, t.pendingProps)),
        (l = Ge(s.type, l)),
        fo(e, t, s, l, r)
      );
    case 15:
      return pu(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (s = t.type),
        (l = t.pendingProps),
        (l = t.elementType === s ? l : Ge(s, l)),
        as(e, t),
        (t.tag = 1),
        De(s) ? ((e = !0), js(t)) : (e = !1),
        Sr(t, r),
        fu(t, s, l),
        ia(t, s, l, r),
        ua(null, t, s, !0, e, r)
      );
    case 19:
      return ju(e, t, r);
    case 22:
      return gu(e, t, r);
  }
  throw Error(T(156, t.tag));
};
function Ou(e, t) {
  return cc(e, t);
}
function bm(e, t, r, s) {
  (this.tag = e),
    (this.key = r),
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
function Ve(e, t, r, s) {
  return new bm(e, t, r, s);
}
function di(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Sm(e) {
  if (typeof e == "function") return di(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ia)) return 11;
    if (e === za) return 14;
  }
  return 2;
}
function Pt(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = Ve(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function cs(e, t, r, s, l, a) {
  var i = 2;
  if (((s = e), typeof e == "function")) di(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case cr:
        return Kt(r.children, l, a, t);
      case _a:
        (i = 8), (l |= 8);
        break;
      case zl:
        return (
          (e = Ve(12, r, t, l | 2)), (e.elementType = zl), (e.lanes = a), e
        );
      case Tl:
        return (e = Ve(13, r, t, l)), (e.elementType = Tl), (e.lanes = a), e;
      case Pl:
        return (e = Ve(19, r, t, l)), (e.elementType = Pl), (e.lanes = a), e;
      case Qo:
        return Qs(r, l, a, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ho:
              i = 10;
              break e;
            case Bo:
              i = 9;
              break e;
            case Ia:
              i = 11;
              break e;
            case za:
              i = 14;
              break e;
            case jt:
              (i = 16), (s = null);
              break e;
          }
        throw Error(T(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ve(i, r, t, l)), (t.elementType = e), (t.type = s), (t.lanes = a), t
  );
}
function Kt(e, t, r, s) {
  return (e = Ve(7, e, s, t)), (e.lanes = r), e;
}
function Qs(e, t, r, s) {
  return (
    (e = Ve(22, e, s, t)),
    (e.elementType = Qo),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Sl(e, t, r) {
  return (e = Ve(6, e, null, t)), (e.lanes = r), e;
}
function kl(e, t, r) {
  return (
    (t = Ve(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function km(e, t, r, s, l) {
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
    (this.eventTimes = ll(0)),
    (this.expirationTimes = ll(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ll(0)),
    (this.identifierPrefix = s),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function fi(e, t, r, s, l, a, i, o, c) {
  return (
    (e = new km(e, t, r, o, c)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = Ve(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: s,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ka(a),
    e
  );
}
function Cm(e, t, r) {
  var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: or,
    key: s == null ? null : "" + s,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function Lu(e) {
  if (!e) return Mt;
  e = e._reactInternals;
  e: {
    if (lr(e) !== e || e.tag !== 1) throw Error(T(170));
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
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (De(r)) return Lc(e, r, t);
  }
  return t;
}
function Au(e, t, r, s, l, a, i, o, c) {
  return (
    (e = fi(r, s, !0, e, l, a, i, o, c)),
    (e.context = Lu(null)),
    (r = e.current),
    (s = Ne()),
    (l = Tt(r)),
    (a = ct(s, l)),
    (a.callback = t ?? null),
    It(r, a, l),
    (e.current.lanes = l),
    In(e, l, s),
    _e(e, s),
    e
  );
}
function Ws(e, t, r, s) {
  var l = t.current,
    a = Ne(),
    i = Tt(l);
  return (
    (r = Lu(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = ct(a, i)),
    (t.payload = { element: e }),
    (s = s === void 0 ? null : s),
    s !== null && (t.callback = s),
    (e = It(l, t, i)),
    e !== null && (Je(e, l, i, a), ns(e, l, i)),
    i
  );
}
function Ps(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function So(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function mi(e, t) {
  So(e, t), (e = e.alternate) && So(e, t);
}
function Em() {
  return null;
}
var Fu =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function hi(e) {
  this._internalRoot = e;
}
Gs.prototype.render = hi.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(T(409));
  Ws(e, t, null, null);
};
Gs.prototype.unmount = hi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    rr(function () {
      Ws(null, e, null, null);
    }),
      (t[ft] = null);
  }
};
function Gs(e) {
  this._internalRoot = e;
}
Gs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = gc();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < Nt.length && t !== 0 && t < Nt[r].priority; r++);
    Nt.splice(r, 0, e), r === 0 && yc(e);
  }
};
function pi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ks(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ko() {}
function Dm(e, t, r, s, l) {
  if (l) {
    if (typeof s == "function") {
      var a = s;
      s = function () {
        var u = Ps(i);
        a.call(u);
      };
    }
    var i = Au(t, s, e, 0, null, !1, !1, "", ko);
    return (
      (e._reactRootContainer = i),
      (e[ft] = i.current),
      yn(e.nodeType === 8 ? e.parentNode : e),
      rr(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof s == "function") {
    var o = s;
    s = function () {
      var u = Ps(c);
      o.call(u);
    };
  }
  var c = fi(e, 0, !1, null, null, !1, !1, "", ko);
  return (
    (e._reactRootContainer = c),
    (e[ft] = c.current),
    yn(e.nodeType === 8 ? e.parentNode : e),
    rr(function () {
      Ws(t, c, r, s);
    }),
    c
  );
}
function Ys(e, t, r, s, l) {
  var a = r._reactRootContainer;
  if (a) {
    var i = a;
    if (typeof l == "function") {
      var o = l;
      l = function () {
        var c = Ps(i);
        o.call(c);
      };
    }
    Ws(t, i, e, l);
  } else i = Dm(r, t, e, l, s);
  return Ps(i);
}
hc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = Xr(t.pendingLanes);
        r !== 0 &&
          (Ra(t, r | 1), _e(t, le()), !(V & 6) && ((Pr = le() + 500), Ft()));
      }
      break;
    case 13:
      rr(function () {
        var s = mt(e, 1);
        if (s !== null) {
          var l = Ne();
          Je(s, e, 1, l);
        }
      }),
        mi(e, 1);
  }
};
Ma = function (e) {
  if (e.tag === 13) {
    var t = mt(e, 134217728);
    if (t !== null) {
      var r = Ne();
      Je(t, e, 134217728, r);
    }
    mi(e, 134217728);
  }
};
pc = function (e) {
  if (e.tag === 13) {
    var t = Tt(e),
      r = mt(e, t);
    if (r !== null) {
      var s = Ne();
      Je(r, e, t, s);
    }
    mi(e, t);
  }
};
gc = function () {
  return Q;
};
xc = function (e, t) {
  var r = Q;
  try {
    return (Q = e), t();
  } finally {
    Q = r;
  }
};
Vl = function (e, t, r) {
  switch (t) {
    case "input":
      if ((Ol(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var s = r[t];
          if (s !== e && s.form === e.form) {
            var l = $s(s);
            if (!l) throw Error(T(90));
            Go(s), Ol(s, l);
          }
        }
      }
      break;
    case "textarea":
      Yo(e, r);
      break;
    case "select":
      (t = r.value), t != null && jr(e, !!r.multiple, t, !1);
  }
};
nc = oi;
sc = rr;
var _m = { usingClientEntryPoint: !1, Events: [Tn, mr, $s, tc, rc, oi] },
  Gr = {
    findFiberByHostInstance: Ht,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Im = {
    bundleType: Gr.bundleType,
    version: Gr.version,
    rendererPackageName: Gr.rendererPackageName,
    rendererConfig: Gr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: xt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ic(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Gr.findFiberByHostInstance || Em,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Xn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Xn.isDisabled && Xn.supportsFiber)
    try {
      (Os = Xn.inject(Im)), (nt = Xn);
    } catch {}
}
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _m;
Fe.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!pi(t)) throw Error(T(200));
  return Cm(e, t, null, r);
};
Fe.createRoot = function (e, t) {
  if (!pi(e)) throw Error(T(299));
  var r = !1,
    s = "",
    l = Fu;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = fi(e, 1, !1, null, null, r, !1, s, l)),
    (e[ft] = t.current),
    yn(e.nodeType === 8 ? e.parentNode : e),
    new hi(t)
  );
};
Fe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(T(188))
      : ((e = Object.keys(e).join(",")), Error(T(268, e)));
  return (e = ic(t)), (e = e === null ? null : e.stateNode), e;
};
Fe.flushSync = function (e) {
  return rr(e);
};
Fe.hydrate = function (e, t, r) {
  if (!Ks(t)) throw Error(T(200));
  return Ys(null, e, t, !0, r);
};
Fe.hydrateRoot = function (e, t, r) {
  if (!pi(e)) throw Error(T(405));
  var s = (r != null && r.hydratedSources) || null,
    l = !1,
    a = "",
    i = Fu;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (l = !0),
      r.identifierPrefix !== void 0 && (a = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (i = r.onRecoverableError)),
    (t = Au(t, null, e, 1, r ?? null, l, !1, a, i)),
    (e[ft] = t.current),
    yn(e),
    s)
  )
    for (e = 0; e < s.length; e++)
      (r = s[e]),
        (l = r._getVersion),
        (l = l(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, l])
          : t.mutableSourceEagerHydrationData.push(r, l);
  return new Gs(t);
};
Fe.render = function (e, t, r) {
  if (!Ks(t)) throw Error(T(200));
  return Ys(null, e, t, !1, r);
};
Fe.unmountComponentAtNode = function (e) {
  if (!Ks(e)) throw Error(T(40));
  return e._reactRootContainer
    ? (rr(function () {
        Ys(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ft] = null);
        });
      }),
      !0)
    : !1;
};
Fe.unstable_batchedUpdates = oi;
Fe.unstable_renderSubtreeIntoContainer = function (e, t, r, s) {
  if (!Ks(r)) throw Error(T(200));
  if (e == null || e._reactInternals === void 0) throw Error(T(38));
  return Ys(e, t, r, !1, s);
};
Fe.version = "18.3.1-next-f1338f8080-20240426";
function $u() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($u);
    } catch (e) {
      console.error(e);
    }
}
$u(), ($o.exports = Fe);
var zm = $o.exports,
  Uu,
  Co = zm;
(Uu = Co.createRoot), Co.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Tm = {
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
 */ const Pm = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  H = (e, t) => {
    const r = j.forwardRef(
      (
        {
          color: s = "currentColor",
          size: l = 24,
          strokeWidth: a = 2,
          absoluteStrokeWidth: i,
          className: o = "",
          children: c,
          ...u
        },
        d
      ) =>
        j.createElement(
          "svg",
          {
            ref: d,
            ...Tm,
            width: l,
            height: l,
            stroke: s,
            strokeWidth: i ? (Number(a) * 24) / Number(l) : a,
            className: ["lucide", `lucide-${Pm(e)}`, o].join(" "),
            ...u,
          },
          [
            ...t.map(([m, p]) => j.createElement(m, p)),
            ...(Array.isArray(c) ? c : [c]),
          ]
        )
    );
    return (r.displayName = `${e}`), r;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Le = H("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rs = H("AlertTriangle", [
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
 */ const qu = H("Archive", [
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
 */ const Vu = H("BellOff", [
  ["path", { d: "M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5", key: "o7mx20" }],
  ["path", { d: "M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7", key: "16f1lm" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hu = H("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bu = H("Building2", [
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
 */ const Qu = H("Building", [
  [
    "rect",
    {
      width: "16",
      height: "20",
      x: "4",
      y: "2",
      rx: "2",
      ry: "2",
      key: "76otgf",
    },
  ],
  ["path", { d: "M9 22v-4h6v4", key: "r93iot" }],
  ["path", { d: "M8 6h.01", key: "1dz90k" }],
  ["path", { d: "M16 6h.01", key: "1x0f13" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xs = H("Calendar", [
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
 */ const ir = H("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const En = H("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ar = H("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yt = H("FileText", [
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
 */ const Rm = H("Globe", [
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
 */ const pt = H("History", [
  [
    "path",
    { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" },
  ],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cl = H("Layers", [
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
 */ const Mm = H("LayoutList", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  [
    "rect",
    { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" },
  ],
  ["path", { d: "M14 4h7", key: "3xa0d5" }],
  ["path", { d: "M14 9h7", key: "1icrd9" }],
  ["path", { d: "M14 15h7", key: "1mj8o2" }],
  ["path", { d: "M14 20h7", key: "11slyb" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Om = H("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wu = H("Maximize2", [
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lm = H("Maximize", [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
  ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
  ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cn = H("Megaphone", [
  ["path", { d: "m3 11 18-5v12L3 14v-3z", key: "n962bs" }],
  ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Am = H("Move", [
  ["polyline", { points: "5 9 2 12 5 15", key: "1r5uj5" }],
  ["polyline", { points: "9 5 12 2 15 5", key: "5v383o" }],
  ["polyline", { points: "15 19 12 22 9 19", key: "g7qi8m" }],
  ["polyline", { points: "19 9 22 12 19 15", key: "tpp73q" }],
  ["line", { x1: "2", x2: "22", y1: "12", y2: "12", key: "1dnqot" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ie = H("Package", [
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
 */ const gt = H("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cr = H("RefreshCw", [
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
 */ const Dn = H("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nr = H("Settings", [
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
 */ const Fm = H("SplitSquareHorizontal", [
  ["path", { d: "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3", key: "lubmu8" }],
  ["path", { d: "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3", key: "1ag34g" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rr = H("SquarePen", [
  [
    "path",
    {
      d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
      key: "1m0v6g",
    },
  ],
  [
    "path",
    { d: "M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z", key: "1lpok0" },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ut = H("Trash2", [
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
 */ const Xt = H("Truck", [
  [
    "path",
    {
      d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
      key: "wrbu53",
    },
  ],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      key: "lysw3i",
    },
  ],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Js = H("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Eo = H("Volume2", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
  ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07", key: "ltjumu" }],
  ["path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14", key: "1kegas" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ae = H("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  $m = {
    zh: {
      "app.title": "藥庫監控系統",
      "app.subtitle": "查詢處方疑義紀錄，並檢視相關資訊",
      "search.button": "搜尋",
      "search.field.patientCode": "病歷號",
      "search.field.department": "科別",
      "search.field.operator": "操作者",
      "search.field.reporter": "提報人員",
      "search.placeholder.patientCode": "搜尋病歷號",
      "search.placeholder.department": "搜尋科別",
      "search.placeholder.operator": "搜尋操作者",
      "search.placeholder.reporter": "搜尋提報人員",
      "export.button": "匯出",
      "filter.placeholder": "搜尋病歷號",
      "date.startLabel": "開始日期時間",
      "date.endLabel": "結束日期時間",
      "date.timeType": "時間類型",
      "date.timeType.create": "建立時間",
      "date.timeType.prescription": "開方時間",
      "date.timeType.order": "開方時間",
      "date.timeType.report": "提報時間",
      "date.timeType.handle": "處理時間",
      "table.patientCode": "病歷號",
      "table.doctor": "醫師姓名",
      "table.department": "科別",
      "table.prescriptionBagType": "藥袋類型",
      "table.orderTime": "開方時間",
      "table.createTime": "建立時間",
      "table.errorType": "錯誤類別",
      "table.status": "狀態",
      "table.operator": "操作者",
      "table.diagnosis": "診斷內容",
      "table.details": "事件詳細描述",
      "table.reportTime": "提報時間",
      "table.reporter": "提報人員",
      "table.handleTime": "處理時間",
      "table.notification": "通報",
      "table.remarks": "備註",
      "table.showAll": "顯示所有詳細資料",
      "table.recordCount": "顯示 {showing} 筆資料（共 {total} 筆）",
      "table.noRecords": "沒有符合條件的處方疑義紀錄",
      "table.records": "筆",
      "status.processed": "已處理",
      "status.processing": "處理中",
      "status.unchanged": "未更改",
      "tab.records": "歷史紀錄",
      "tab.rules": "環境監控",
      "rules.description": "規則說明",
      "rules.environment": "執行環境",
      "rules.importance": "重要程度",
      "error.loading": "載入資料時發生錯誤",
      "error.api": "系統錯誤，請稍後再試",
      loading: "正在載入資料...",
      download: "下載紀錄",
      logout: "登出",
      "platform.title": "次世代整合平台",
      copyright: "Copyright ©2025 鴻森智能科技",
      "realtime.overview": "即時概況",
      "inpatient.pharmacy": "住院藥局",
      "drug.storage": "藥庫",
      "outpatient.pharmacy": "門急診藥局",
      temperature: "溫度",
      humidity: "濕度",
      "last.updated": "最後更新",
      "temp.humidity.trend.chart": "溫濕度趨勢圖表",
      "temp.humidity.trend": "溫濕度趨勢",
      "records.count": "筆數據",
      "displaying.last.8hours": "預設顯示最近8小時",
      "latest.time": "最新時間",
      "showing.records": "顯示",
    },
    en: {
      "app.title": "Pharmacy Control Panel",
      "app.subtitle": "Query and review prescription records",
      "search.button": "Search",
      "search.field.patientCode": "Patient Code",
      "search.field.department": "Department",
      "search.field.operator": "Operator",
      "search.field.reporter": "Reporter",
      "search.placeholder.patientCode": "Search patient code...",
      "search.placeholder.department": "Search department...",
      "search.placeholder.operator": "Search operator...",
      "search.placeholder.reporter": "Search reporter...",
      "export.button": "Export",
      "filter.placeholder": "Search patient ID...",
      "date.startLabel": "Start Date & Time",
      "date.endLabel": "End Date & Time",
      "date.timeType": "Time Type",
      "date.timeType.create": "Create Time",
      "date.timeType.prescription": "Prescription Time",
      "date.timeType.order": "Order Time",
      "date.timeType.report": "Report Time",
      "date.timeType.handle": "Handle Time",
      "table.patientCode": "Patient ID",
      "table.doctor": "Doctor",
      "table.department": "Department",
      "table.prescriptionBagType": "Prescription Bag Type",
      "table.orderTime": "Order Time",
      "table.createTime": "Create Time",
      "table.errorType": "Error Type",
      "table.status": "Status",
      "table.operator": "Operator",
      "table.diagnosis": "Diagnosis",
      "table.details": "Event Details",
      "table.reportTime": "Report Time",
      "table.reporter": "Reporter",
      "table.handleTime": "Handle Time",
      "table.notification": "Notification",
      "table.remarks": "Remarks",
      "table.showAll": "Show All Details",
      "table.recordCount": "Showing {showing} records (Total {total})",
      "table.noRecords": "No prescription records found",
      "table.records": "records",
      "status.processed": "Processed",
      "status.processing": "Processing",
      "status.unchanged": "Unchanged",
      "tab.records": "Historical Records",
      "tab.rules": "Environment Monitoring",
      "rules.description": "Rule Description",
      "rules.environment": "Environment",
      "rules.importance": "Importance Level",
      "error.loading": "Error loading data",
      "error.api": "System error, please try again later",
      loading: "Loading data...",
      download: "Download Record",
      logout: "Logout",
      "platform.title": "Next Generation Platform",
      copyright: "Copyright ©2025 Hongsen Technology",
      "realtime.overview": "Real-Time Overview",
      "inpatient.pharmacy": "Inpatient Pharmacy",
      "drug.storage": "Drug Storage",
      "outpatient.pharmacy": "Outpatient Pharmacy",
      temperature: "Temperature",
      humidity: "Humidity",
      "last.updated": "Last Updated",
      "temp.humidity.trend.chart": "Temperature & Humidity Trend Chart",
      "temp.humidity.trend": "Temp & Humidity Trend",
      "records.count": "Records",
      "displaying.last.8hours": "Displaying Last 8 Hours (default)",
      "latest.time": "Latest Time",
      "showing.records": "Showing",
    },
  },
  Gu = j.createContext(void 0),
  Um = ({ children: e }) => {
    const [t, r] = j.useState("zh"),
      s = () => {
        r((a) => (a === "zh" ? "en" : "zh"));
      },
      l = (a, i) => {
        let o = $m[t][a] || a;
        return (
          i &&
            Object.entries(i).forEach(([c, u]) => {
              o = o.replace(`{${c}}`, u.toString());
            }),
          o
        );
      };
    return n.jsx(Gu.Provider, {
      value: { language: t, toggleLanguage: s, t: l },
      children: e,
    });
  },
  Fr = () => {
    const e = j.useContext(Gu);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  };
let Wt = null;
const Ku = async () => {
    if (Wt) return Wt;
    try {
      const e = await fetch("../config.txt");
      if (!e.ok) throw new Error("Failed to load configuration");
      return (Wt = await e.json()), Wt;
    } catch (e) {
      throw (console.error("Error loading config:", e), e);
    }
  },
  qm = (e) => {
    if (!Wt) throw new Error("Configuration not loaded");
    return `${Wt.domain}${e}`;
  },
  El = () => Wt,
  ne = async (e, t = {}) => {
    let r;
    try {
      r = qm(e);
    } catch {
      throw new Error(
        "API configuration not loaded. Please refresh the page and try again."
      );
    }
    const s = t.method || "GET";
    console.group(`🌐 API Request: ${e}`),
      console.log(`URL: ${r}`),
      console.log(`Method: ${s}`),
      t.body && console.log("Request Payload:", t.body);
    try {
      const l = await fetch(r, {
          method: s,
          headers: { "Content-Type": "application/json" },
          body: t.body ? JSON.stringify(t.body) : void 0,
        }),
        a = await l.text();
      let i;
      try {
        i = JSON.parse(a);
      } catch (o) {
        throw (
          (console.error("Failed to parse response as JSON:", o),
          new Error("伺服器回應格式錯誤，請稍後再試"))
        );
      }
      if ((console.log("Response:", i), console.groupEnd(), !l.ok))
        throw new Error(`伺服器錯誤 (${l.status})`);
      return i;
    } catch (l) {
      throw (
        (console.error("API Error:", l),
        console.groupEnd(),
        l instanceof TypeError && l.message.includes("Failed to fetch")
          ? new Error("無法連接到伺服器，請檢查網路連線或稍後再試")
          : l instanceof Error
          ? l
          : new Error("發生未知錯誤，請稍後再試"))
      );
    }
  },
  Vm = async (e) =>
    await ne("/api/session/login", { method: "POST", body: { Data: e } }),
  Hm = (e) => (
    localStorage.setItem("user_session", JSON.stringify(e)),
    localStorage.setItem("loggedGUID", e.GUID || ""),
    localStorage.setItem("loggedEmployer", e.Employer || ""),
    localStorage.setItem("loggedID", e.ID || ""),
    localStorage.setItem("loggedName", e.Name || ""),
    localStorage.setItem("loggedTime", e.loginTime || ""),
    localStorage.setItem("loggedLevel", e.level || ""),
    e
  ),
  Bm = () => {
    localStorage.removeItem("user_session"),
      localStorage.removeItem("loggedGUID"),
      localStorage.removeItem("loggedEmployer"),
      localStorage.removeItem("loggedID"),
      localStorage.removeItem("loggedName"),
      localStorage.removeItem("loggedPassword"),
      localStorage.removeItem("loggedTime"),
      localStorage.removeItem("loggedLevel"),
      window.location.reload();
  },
  Rn = () => {
    const e = localStorage.getItem("user_session");
    if (!e) return null;
    try {
      const t = JSON.parse(e);
      return !t.GUID || !t.ID || !t.Name ? null : t;
    } catch (t) {
      return console.error("Failed to parse user session:", t), null;
    }
  },
  Qm = () => !!Rn(),
  Dl = () => {
    const { t: e } = Fr();
    return n.jsxs("button", {
      onClick: Bm,
      className:
        "inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      children: [n.jsx(Om, { className: "h-4 w-4 mr-2" }), e("logout")],
    });
  },
  _l = () => {
    const { language: e, toggleLanguage: t } = Fr();
    return n.jsxs("button", {
      onClick: t,
      className:
        "inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      children: [
        n.jsx(Rm, { className: "h-4 w-4 mr-2" }),
        e === "zh" ? "繁體中文" : "English",
      ],
    });
  },
  Wm = async () =>
    await ne("/api/controlpanel/get_by_startendtime_bbs", {
      method: "POST",
      body: {},
    }),
  Gm = (e) =>
    e.map((t, r) => ({
      id: t.GUID || `bulletin-${r}`,
      title: t.title || "無標題",
      content: t.content || "無內容",
      priority: e0(t.priority || "medium"),
      publishDate: Zm(t.created_time) || new Date().toISOString(),
      author:
        `${t.creator_dept || ""} ${t.creator_name || ""}`.trim() ||
        "系統管理員",
    })),
  Km = async (e) => {
    await ne("/api/controlpanel/add", { method: "POST", body: { Data: e } });
  },
  Ym = async () =>
    await ne("/api/controlpanel/get_bbs", { method: "POST", body: {} }),
  Xm = async (e) => {
    await ne("/api/controlpanel/update", { method: "POST", body: { Data: e } });
  },
  Jm = async (e) => {
    await ne("/api/controlpanel/delete", {
      method: "POST",
      body: { Data: { GUID: e } },
    });
  },
  Zm = (e) => {
    if (!e) return null;
    try {
      const t = e.replace(/\//g, "-"),
        r = new Date(t);
      return isNaN(r.getTime())
        ? (console.warn("Invalid date format from API:", e), null)
        : r.toISOString();
    } catch (t) {
      return console.error("Error parsing API date:", e, t), null;
    }
  },
  e0 = (e) =>
    e
      ? e === "Critical"
        ? "high"
        : e === "Important"
        ? "medium"
        : e === "Normal"
        ? "low"
        : "medium"
      : "medium",
  Zs = async () =>
    await ne("/api/med_page/get_med_cloud", { method: "POST", body: {} }),
  Ot = (e) => {
    const t = e.getFullYear(),
      r = String(e.getMonth() + 1).padStart(2, "0"),
      s = String(e.getDate()).padStart(2, "0"),
      l = String(e.getHours()).padStart(2, "0"),
      a = String(e.getMinutes()).padStart(2, "0"),
      i = String(e.getSeconds()).padStart(2, "0");
    return `${t}-${r}-${s} ${l}:${a}:${i}`;
  },
  t0 = async () => {
    const e = new Date(),
      t = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0),
      r = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59);
    return await ne("/api/drugStotreDistribution/get_by_addedTime", {
      method: "POST",
      body: { ValueAry: [Ot(t), Ot(r)] },
    });
  },
  r0 = async () => {
    const e = new Date(),
      t = new Date(e.getFullYear(), e.getMonth() - 1, e.getDate(), 0, 0, 0),
      r = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59);
    return await ne("/api/inspection/content_get_by_addTime", {
      method: "POST",
      body: { ValueAry: [Ot(t), Ot(r)] },
    });
  },
  n0 = async () => {
    const e = new Date(),
      t = new Date(e.getFullYear(), e.getMonth() - 1, e.getDate(), 0, 0, 0),
      r = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59);
    return await ne("/api/inspection/content_get_by_addTime", {
      method: "POST",
      body: { ValueAry: [Ot(t), Ot(r)] },
    });
  },
  s0 = async () =>
    await ne("/api/controlpanel/get_by_startendtime_MedNotice", {
      method: "POST",
      body: {},
    }),
  l0 = async () =>
    await ne("/api/controlpanel/get_MedNotice", { method: "POST", body: {} }),
  a0 = async (e) =>
    await ne("/api/controlpanel/add", { method: "POST", body: { Data: e } }),
  i0 = async (e) =>
    await ne("/api/controlpanel/update", { method: "POST", body: { Data: e } }),
  o0 = async (e) =>
    await ne("/api/controlpanel/delete", {
      method: "POST",
      body: { Data: { GUID: e } },
    }),
  c0 = async () =>
    await ne("/api/controlpanel/get_by_startendtime_out_of_stock", {
      method: "POST",
      body: {},
    }),
  u0 = async () =>
    await ne("/api/controlpanel/get_out_of_stock", {
      method: "POST",
      body: {},
    }),
  d0 = async (e) =>
    await ne("/api/controlpanel/add", { method: "POST", body: { Data: e } }),
  f0 = async (e) =>
    await ne("/api/controlpanel/update", { method: "POST", body: { Data: e } }),
  m0 = async (e) =>
    await ne("/api/controlpanel/delete", {
      method: "POST",
      body: { Data: { GUID: e } },
    }),
  h0 = (e) =>
    e.map((t) => ({
      id: t.GUID || "",
      code: t.code || "",
      name: t.name || "",
      issuedQuantity: t.issuedQuantity || "0",
      actualIssuedQuantity: t.actualIssuedQuantity || "",
      destinationStoreType: t.destinationStoreType || "",
      state: t.state || "等待過帳",
      sourceStoreType: t.sourceStoreType,
      LOT: t.LOT,
      VAL: t.VAL,
      addedTime: t.addedTime,
      priority:
        t.state === "等待過帳"
          ? "high"
          : t.state === "已過帳"
          ? "medium"
          : "low",
    })),
  p0 = (e) =>
    e
      .map((t) => {
        const s = (t.Sub_content || [])
          .filter((l) => l.STATE != "已鎖定")
          .reduce((l, a) => {
            const i = parseFloat(a.END_QTY) || 0;
            return l + i;
          }, 0);
        return {
          id: t.GUID || "",
          code: t.CODE || "",
          name: t.NAME || "",
          quantity: s,
          supplier: t.BRD || "",
          priority: s > 0 ? "high" : "low",
        };
      })
      .filter((t) => t.quantity > 0),
  g0 = (e) => {
    const t = new Date(),
      r = new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0),
      s = new Date(t.getFullYear(), t.getMonth(), t.getDate(), 23, 59, 59);
    return e
      .map((l) => {
        const i = (l.Sub_content || [])
          .filter((o) => {
            if (o.STATE !== "已鎖定") return !1;
            try {
              const c = new Date(o.OP_TIME.replace(/\//g, "-"));
              return c >= r && c <= s;
            } catch {
              return !1;
            }
          })
          .reduce((o, c) => {
            const u = parseFloat(c.END_QTY) || 0;
            return +o + +u;
          }, 0);
        return {
          id: l.GUID || "",
          code: l.CODE || "",
          name: l.NAME || "",
          quantity: i,
          supplier: l.BRD || "",
          priority: i > 0 ? "medium" : "low",
        };
      })
      .filter((l) => l.quantity > 0);
  },
  x0 = (e) =>
    e
      .filter((t) => (t.Sub_content || []).length === 0)
      .map((t) => {
        const r = t.DELIVERY_TIME || "",
          s = new Date();
        let l = !1;
        if (r)
          try {
            l = new Date(r.replace(/\//g, "-")) < s;
          } catch {
            l = !1;
          }
        return {
          id: t.GUID || "",
          drugName: t.NAME || "",
          expectedArrivalDate: r,
          quantityOrdered: parseFloat(t.START_QTY) || 0,
          supplier: t.BRD || "",
          orderNumber: t.PON || "",
          status: l ? "delayed" : "ordered",
        };
      }),
  y0 = async () =>
    await ne("/api/stock/get_stock_all_server", { method: "POST", body: {} }),
  v0 = (e) => {
    const t = new Map();
    e.forEach((s) => {
      const l = s.code || "";
      t.has(l) || t.set(l, []), t.get(l).push(s);
    });
    const r = [];
    return (
      t.forEach((s, l) => {
        const a = s[0],
          i = [],
          o = [],
          c = [],
          u = new Map();
        s.forEach((p) => {
          const x = p.serverName || "未知伺服器",
            y = p.qty || [],
            N = p.lot || [],
            k = p.expiry_date || [];
          i.push(...N), o.push(...k), c.push(...y);
          const g = y.reduce((f, w) => f + (Number(w) || 0), 0),
            h = u.get(x) || 0;
          u.set(x, h + g);
        });
        const d = c.reduce((p, x) => p + (Number(x) || 0), 0),
          m = Array.from(u.entries()).map(([p, x]) => ({
            serverName: p,
            qty: x,
          }));
        r.push({
          id: a.GUID || "",
          code: l,
          name: a.name || "",
          qty: c,
          lot: i,
          expiry_date: o,
          totalQuantity: d,
          batchCount: i.length,
          serverData: m,
        });
      }),
      r
    );
  },
  j0 = async () => {
    const e = new Date(),
      t = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0),
      r = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59);
    return await ne("/api/materialRequisition/get_by_requestTime", {
      method: "POST",
      body: { ValueAry: [Ot(t), Ot(r)] },
    });
  },
  w0 = (e) =>
    e
      .filter((t) => t.state === "等待過帳")
      .map((t) => ({
        id: t.GUID || "",
        code: t.code || "",
        name: t.name || "",
        requestedQuantity: t.requestedQuantity || "0",
        requestingUnit: t.requestingUnit || "",
        requestingPerson: t.requestingPerson || "",
        requestTime: t.requestTime || "",
        actionType: t.actionType || "",
        state: t.state,
        remarks: t.remarks || void 0,
      })),
  N0 = (e) =>
    e.map((t, r) => {
      var o, c;
      const s = (t.content || "").split(";"),
        l = ((o = s[0]) == null ? void 0 : o.trim()) || "未知原藥品",
        a = ((c = s[1]) == null ? void 0 : c.trim()) || "未知替換藥品";
      let i;
      try {
        const u = t.created_time.replace(/\//g, "-");
        i = new Date(u).toISOString();
      } catch (u) {
        console.error("Error parsing created_time:", t.created_time, u),
          (i = new Date().toISOString());
      }
      return {
        id: t.GUID || `drug-replacement-${r}`,
        originalDrug: l,
        replacementDrug: a,
        reason: t.note || "無原因說明",
        effectiveDate: i,
        affectedDepartments: [],
        instructions: "",
        priority: "medium",
      };
    }),
  b0 = (e) =>
    e.map((t, r) => {
      let s;
      try {
        const d = t.created_time.replace(/\//g, "-");
        (s = new Date(d)),
          isNaN(s.getTime()) &&
            (console.warn("Invalid date format:", t.created_time),
            (s = new Date()));
      } catch (d) {
        console.error("Error parsing created_time:", t.created_time, d),
          (s = new Date());
      }
      const l = new Date(),
        a = new Date(s.getFullYear(), s.getMonth(), s.getDate()),
        i = new Date(l.getFullYear(), l.getMonth(), l.getDate()),
        o = i.getTime() - a.getTime(),
        c = Math.floor(o / (1e3 * 60 * 60 * 24));
      console.log("Out of stock calculation:", {
        originalTime: t.created_time,
        parsedDate: s,
        createdDateOnly: a,
        nowDateOnly: i,
        diffDays: c,
      });
      let u = "procurement_in_progress";
      return (
        t.priority === "Critical"
          ? (u = "urgent_order")
          : t.priority === "Important"
          ? (u = "procurement_in_progress")
          : (u = "supplier_contacted"),
        {
          id: t.GUID || `out-of-stock-${r}`,
          drugName: t.content || "未知藥品",
          departmentAffected: [],
          status: u,
          lastStockDate: s.toISOString(),
          estimatedRestockDate: void 0,
        }
      );
    }),
  S0 = async () => {
    await new Promise((d) => setTimeout(d, 500));
    const e = {};
    let t = [];
    try {
      const d = await Wm();
      if (d.Code === 200 && d.Data)
        (t = Gm(d.Data)),
          console.log(
            "[Dashboard] Bulletins loaded successfully:",
            t.length,
            "items"
          );
      else throw new Error(`API returned code ${d.Code}`);
    } catch (d) {
      console.error("[Dashboard] Error fetching bulletin data:", d),
        (e.bulletins = { hasError: !0, message: "公告欄資料載入失敗" }),
        (t = []);
    }
    let r = [];
    try {
      const d = await s0();
      if (d.Code === 200 && d.Data)
        (r = N0(d.Data)),
          console.log(
            "[Dashboard] Drug replacements loaded successfully:",
            r.length,
            "items"
          );
      else throw new Error(`API returned code ${d.Code}`);
    } catch (d) {
      console.error("[Dashboard] Error fetching drug replacement data:", d),
        (e.drugReplacements = {
          hasError: !0,
          message: "藥品替換資料載入失敗",
        }),
        (r = []);
    }
    let s = [];
    try {
      const d = await c0();
      if (d.Code === 200 && d.Data)
        (s = b0(d.Data)),
          console.log(
            "[Dashboard] Out of stock items loaded successfully:",
            s.length,
            "items"
          );
      else throw new Error(`API returned code ${d.Code}`);
    } catch (d) {
      console.error("[Dashboard] Error fetching out of stock data:", d),
        (e.outOfStock = { hasError: !0, message: "缺貨清單資料載入失敗" }),
        (s = []);
    }
    let l = [];
    try {
      const d = await t0();
      if (d.Code === 200 && d.Data)
        (l = h0(d.Data)),
          console.log(
            "[Dashboard] Restock tasks loaded successfully:",
            l.length,
            "items"
          );
      else throw new Error(`API returned code ${d.Code}`);
    } catch (d) {
      console.error("[Dashboard] Error fetching restock tasks data:", d),
        e.tasks || (e.tasks = { hasError: !0, message: "" }),
        (e.tasks.message =
          (e.tasks.message ? e.tasks.message + "、" : "") + "撥補任務載入失敗"),
        (e.tasks.hasError = !0),
        (l = []);
    }
    let a = [],
      i = [];
    try {
      const d = await n0();
      if (d.Code === 200 && d.Data)
        (a = p0(d.Data)),
          (i = g0(d.Data)),
          console.log(
            "[Dashboard] Receiving tasks loaded successfully:",
            a.length,
            "items"
          ),
          console.log(
            "[Dashboard] Put away tasks loaded successfully:",
            i.length,
            "items"
          );
      else throw new Error(`API returned code ${d.Code}`);
    } catch (d) {
      console.error(
        "[Dashboard] Error fetching receiving and putaway tasks data:",
        d
      ),
        e.tasks || (e.tasks = { hasError: !0, message: "" }),
        (e.tasks.message =
          (e.tasks.message ? e.tasks.message + "、" : "") +
          "驗收與歸貨任務載入失敗"),
        (e.tasks.hasError = !0),
        (a = []),
        (i = []);
    }
    let o = [];
    try {
      const d = await j0();
      if (d.Code === 200 && d.Data)
        (o = w0(d.Data)),
          console.log(
            "[Dashboard] Internal requests loaded successfully:",
            o.length,
            "items"
          );
      else throw new Error(`API returned code ${d.Code}`);
    } catch (d) {
      console.error("[Dashboard] Error fetching internal requests data:", d),
        (e.internalRequests = {
          hasError: !0,
          message: "內部申請資料載入失敗",
        }),
        (o = []);
    }
    let c = [];
    try {
      const d = await r0();
      if (d.Code === 200 && d.Data)
        (c = x0(d.Data)),
          console.log(
            "[Dashboard] Incoming drugs loaded successfully:",
            c.length,
            "items"
          );
      else throw new Error(`API returned code ${d.Code}`);
    } catch (d) {
      console.error("[Dashboard] Error fetching incoming drugs data:", d),
        (e.incomingDrugs = { hasError: !0, message: "未到貨監控資料載入失敗" }),
        (c = []);
    }
    let u = [];
    try {
      const d = await y0();
      if (d.Code === 200 && d.Data)
        (u = v0(d.Data)),
          console.log(
            "[Dashboard] Inventory highlights loaded successfully:",
            u.length,
            "items"
          );
      else throw new Error(`API returned code ${d.Code}`);
    } catch (d) {
      console.error("[Dashboard] Error fetching stock all server data:", d),
        (e.inventory = { hasError: !0, message: "庫存重點資料載入失敗" }),
        (u = []);
    }
    return {
      bulletins: t,
      restockTasks: l,
      receivingTasks: a,
      putAwayTasks: i,
      incomingDrugs: c,
      outOfStockItems: s,
      drugReplacements: r,
      inventoryHighlights: u,
      internalRequests: o,
      lastUpdated: new Date().toISOString(),
      errors: Object.keys(e).length > 0 ? e : void 0,
    };
  },
  vt = {
    title: "text-[32px] fhd:text-[32px] qhd:text-[48px] uhd:text-[64px]",
    subTitle: "text-[20px] fhd:text-[20px] qhd:text-[32px] uhd:text-[48px]",
    content: "text-[16px] fhd:text-[16px] qhd:text-[24px] uhd:text-[32px]",
    smallLabel: "text-[14px] fhd:text-[14px] qhd:text-[20px] uhd:text-[24px]",
  },
  Do = {
    small: "uhd:w-5 uhd:h-5 qhd:w-4 qhd:h-4",
    medium: "uhd:w-6 uhd:h-6 qhd:w-5 qhd:h-5",
    large: "uhd:w-8 uhd:h-8 qhd:w-6 qhd:h-6",
    xlarge: "uhd:w-10 uhd:h-10 qhd:w-8 qhd:h-8",
  },
  k0 = () => ({
    bulletins: { position: { master_row: 0, master_col: 0 }, row: 2, col: 3 },
    tasks: { position: { master_row: 0, master_col: 3 }, row: 2, col: 3 },
    incomingDrugs: {
      position: { master_row: 0, master_col: 6 },
      row: 2,
      col: 2,
    },
    outOfStock: { position: { master_row: 2, master_col: 0 }, row: 2, col: 3 },
    drugReplacements: {
      position: { master_row: 2, master_col: 3 },
      row: 2,
      col: 3,
    },
    inventory: { position: { master_row: 2, master_col: 6 }, row: 2, col: 2 },
    internalRequests: {
      position: { master_row: 4, master_col: 0 },
      row: 2,
      col: 8,
    },
  }),
  C0 = () => ({
    bulletins: !0,
    tasks: !0,
    incomingDrugs: !0,
    outOfStock: !0,
    drugReplacements: !0,
    inventory: !0,
    internalRequests: !0,
  }),
  E0 = () => {
    try {
      const e = localStorage.getItem("section_grid_position");
      if (e) {
        const t = JSON.parse(e);
        if (z0(t)) return t;
      }
    } catch (e) {
      console.error("Error loading grid config:", e);
    }
    return k0();
  },
  D0 = () => {
    try {
      const e = localStorage.getItem("section_visibility");
      if (e) {
        const t = JSON.parse(e);
        if (T0(t)) return t;
      }
    } catch (e) {
      console.error("Error loading section visibility:", e);
    }
    return C0();
  },
  _0 = (e) => {
    try {
      localStorage.setItem("section_grid_position", JSON.stringify(e));
    } catch (t) {
      console.error("Error saving grid config:", t);
    }
  },
  I0 = (e) => {
    try {
      localStorage.setItem("section_visibility", JSON.stringify(e));
    } catch (t) {
      console.error("Error saving section visibility:", t);
    }
  },
  z0 = (e) => {
    const t = [
      "bulletins",
      "tasks",
      "incomingDrugs",
      "outOfStock",
      "drugReplacements",
      "inventory",
      "internalRequests",
    ];
    if (!e || typeof e != "object") return !1;
    for (const r of t) {
      const s = e[r];
      if (
        !s ||
        !s.position ||
        typeof s.position.master_row != "number" ||
        typeof s.position.master_col != "number" ||
        typeof s.row != "number" ||
        typeof s.col != "number"
      )
        return !1;
    }
    return !0;
  },
  T0 = (e) => {
    const t = [
      "bulletins",
      "tasks",
      "incomingDrugs",
      "outOfStock",
      "drugReplacements",
      "inventory",
      "internalRequests",
    ];
    if (!e || typeof e != "object") return !1;
    for (const r of t) if (typeof e[r] != "boolean") return !1;
    return !0;
  },
  $t = (e, t) => {
    const r = e.master_row + 1,
      s = e.master_col + 1,
      l = r + t.row,
      a = s + t.col;
    return `${r} / ${s} / ${l} / ${a}`;
  },
  Ut = ({
    children: e,
    sectionKey: t,
    gridData: r,
    onPositionChange: s,
    onSizeChange: l,
    gridArea: a,
  }) => {
    const [i, o] = j.useState(!1),
      [c, u] = j.useState(!1),
      [d, m] = j.useState(null),
      [p, x] = j.useState(null),
      y = j.useRef(null),
      N = j.useCallback(
        (f) => {
          f.preventDefault(),
            f.stopPropagation(),
            o(!0),
            m({
              x: f.clientX,
              y: f.clientY,
              startRow: r.position.master_row,
              startCol: r.position.master_col,
            });
        },
        [r.position]
      ),
      k = j.useCallback(
        (f) => {
          f.preventDefault(),
            f.stopPropagation(),
            u(!0),
            x({ x: f.clientX, y: f.clientY, startRow: r.row, startCol: r.col });
        },
        [r.row, r.col]
      ),
      g = j.useCallback(
        (f) => {
          if (i && d && y.current) {
            const w = f.clientX - d.x,
              C = f.clientY - d.y,
              z = y.current.parentElement;
            if (z) {
              const _ = z.getBoundingClientRect(),
                I = (_.width - 7 * 16) / 8,
                v = (_.height - 5 * 16) / 6,
                D = Math.round(w / (I + 16)),
                L = Math.round(C / (v + 16)),
                $ = Math.max(0, Math.min(8 - r.col, d.startCol + D)),
                B = Math.max(0, Math.min(6 - r.row, d.startRow + L));
              (B !== r.position.master_row || $ !== r.position.master_col) &&
                s(t, { master_row: B, master_col: $ });
            }
          }
          if (c && p && y.current) {
            const w = f.clientX - p.x,
              C = f.clientY - p.y,
              z = y.current.parentElement;
            if (z) {
              const _ = z.getBoundingClientRect(),
                I = (_.width - 7 * 16) / 8,
                v = (_.height - 5 * 16) / 6,
                D = Math.round(w / (I + 16)),
                L = Math.round(C / (v + 16)),
                $ = Math.max(
                  1,
                  Math.min(8 - r.position.master_col, p.startCol + D)
                ),
                B = Math.max(
                  1,
                  Math.min(6 - r.position.master_row, p.startRow + L)
                );
              (B !== r.row || $ !== r.col) && l(t, { row: B, col: $ });
            }
          }
        },
        [i, c, d, p, r, s, l, t]
      ),
      h = j.useCallback(() => {
        o(!1), u(!1), m(null), x(null);
      }, []);
    return (
      Pe.useEffect(() => {
        if (i || c)
          return (
            document.addEventListener("mousemove", g),
            document.addEventListener("mouseup", h),
            (document.body.style.cursor = i ? "grabbing" : "nw-resize"),
            (document.body.style.userSelect = "none"),
            (document.body.style.pointerEvents = "none"),
            y.current && (y.current.style.pointerEvents = "auto"),
            () => {
              document.removeEventListener("mousemove", g),
                document.removeEventListener("mouseup", h),
                (document.body.style.cursor = "auto"),
                (document.body.style.userSelect = "auto"),
                (document.body.style.pointerEvents = "auto");
            }
          );
      }, [i, c, g, h]),
      n.jsxs("div", {
        ref: y,
        className: `relative bg-white rounded-xl shadow-lg border border-gray-200 h-full flex flex-col min-h-0 max-h-full overflow-hidden transition-all duration-200 ${
          i || c ? "z-50 shadow-2xl scale-105" : "z-10"
        }`,
        style: { gridArea: a },
        children: [
          n.jsxs("div", {
            className: `absolute top-0 left-0 right-0 h-12 cursor-move z-20 flex items-center justify-center transition-opacity bg-blue-500 bg-opacity-20 rounded-t-xl ${
              i ? "opacity-100" : "opacity-0 hover:opacity-100"
            }`,
            onMouseDown: N,
            children: [
              n.jsx(Am, { size: 20, className: "text-blue-600" }),
              n.jsx("span", {
                className: `ml-2 text-blue-600 font-medium ${vt.smallLabel}`,
                children: "拖拽移動",
              }),
            ],
          }),
          n.jsx("div", {
            className: `absolute bottom-2 right-2 w-6 h-6 cursor-nw-resize z-20 flex items-center justify-center transition-opacity bg-gray-500 bg-opacity-20 rounded ${
              c ? "opacity-100" : "opacity-0 hover:opacity-100"
            }`,
            onMouseDown: k,
            children: n.jsx(Wu, { size: 16, className: "text-gray-600" }),
          }),
          n.jsx("div", { className: "flex-1 min-h-0 relative", children: e }),
          (i || c) &&
            n.jsxs("div", {
              className:
                "absolute top-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs font-mono z-30",
              children: [
                "(",
                r.position.master_row,
                ",",
                r.position.master_col,
                ") ",
                r.row,
                "×",
                r.col,
              ],
            }),
        ],
      })
    );
  },
  Z = ({ size: e = "medium", className: t = "" }) => {
    const r = {
      small: "w-4 h-4 border-[2px]",
      medium: "w-8 h-8 border-[3px]",
      large: "w-12 h-12 border-[4px]",
    };
    return n.jsx("div", {
      className: `${r[e]} ${t} rounded-full border-blue-300 border-t-blue-600 animate-spin`,
    });
  },
  P0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
    Fr();
    const [s, l] = j.useState({
        title: "",
        content: "",
        priority: "Normal",
        start_time: "",
        end_time: "",
      }),
      [a, i] = j.useState(!1),
      [o, c] = j.useState(null);
    Pe.useEffect(() => {
      if (e) {
        const x = new Date(),
          y = x.toISOString().slice(0, 16),
          N = new Date(x);
        N.setMonth(N.getMonth() + 1);
        const k = N.toISOString().slice(0, 16);
        l({
          title: "",
          content: "",
          priority: "Normal",
          start_time: y,
          end_time: k,
        }),
          c(null);
      }
    }, [e]);
    const u = (x, y) => {
        l((N) => ({ ...N, [x]: y }));
      },
      d = () => {
        if (!s.title.trim()) return "請輸入主旨";
        if (!s.content.trim()) return "請輸入內容";
        if (!s.start_time) return "請選擇開始時間";
        if (!s.end_time) return "請選擇結束時間";
        const x = new Date(s.start_time);
        return new Date(s.end_time) <= x ? "結束時間必須晚於開始時間" : null;
      },
      m = async () => {
        c(null);
        const x = d();
        if (x) {
          c(x);
          return;
        }
        const y = Rn();
        if (!y) {
          c("無法獲取使用者資訊，請重新登入");
          return;
        }
        i(!0);
        try {
          const N = (g) => g.replace("T", " ") + ":00",
            k = {
              title: s.title.trim(),
              content: s.content.trim(),
              priority: s.priority,
              creator_dept: y.Employer || "",
              creator_name: y.Name || "",
              start_time: N(s.start_time),
              end_time: N(s.end_time),
            };
          await Km(k), r(), t();
        } catch (N) {
          c(N instanceof Error ? N.message : "新增公告失敗，請稍後再試");
        } finally {
          i(!1);
        }
      },
      p = () => {
        a || t();
      };
    return e
      ? n.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
          children: n.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
            children: [
              n.jsxs("div", {
                className:
                  "flex items-center justify-between p-6 border-b border-gray-200",
                children: [
                  n.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      n.jsx(gt, { size: 24, className: "text-blue-600 mr-3" }),
                      n.jsx("h2", {
                        className: "text-xl font-semibold text-gray-800",
                        children: "新增公告",
                      }),
                    ],
                  }),
                  n.jsx("button", {
                    onClick: p,
                    disabled: a,
                    className:
                      "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                    children: n.jsx(Ae, { size: 20 }),
                  }),
                ],
              }),
              n.jsxs("div", {
                className: "p-6 space-y-6",
                children: [
                  o &&
                    n.jsxs("div", {
                      className:
                        "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center",
                      children: [
                        n.jsx(Le, {
                          size: 20,
                          className: "mr-2 flex-shrink-0",
                        }),
                        o,
                      ],
                    }),
                  n.jsxs("div", {
                    children: [
                      n.jsxs("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: [
                          "主旨 ",
                          n.jsx("span", {
                            className: "text-red-500",
                            children: "*",
                          }),
                        ],
                      }),
                      n.jsx("input", {
                        type: "text",
                        value: s.title,
                        onChange: (x) => u("title", x.target.value),
                        disabled: a,
                        className:
                          "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                        placeholder: "請輸入公告主旨",
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    children: [
                      n.jsxs("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: [
                          "內容 ",
                          n.jsx("span", {
                            className: "text-red-500",
                            children: "*",
                          }),
                        ],
                      }),
                      n.jsx("textarea", {
                        value: s.content,
                        onChange: (x) => u("content", x.target.value),
                        disabled: a,
                        rows: 6,
                        className:
                          "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical disabled:opacity-50 disabled:bg-gray-100",
                        placeholder: "請輸入公告內容",
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    children: [
                      n.jsxs("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: [
                          "重要程度 ",
                          n.jsx("span", {
                            className: "text-red-500",
                            children: "*",
                          }),
                        ],
                      }),
                      n.jsxs("select", {
                        value: s.priority,
                        onChange: (x) => u("priority", x.target.value),
                        disabled: a,
                        className:
                          "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                        children: [
                          n.jsx("option", {
                            value: "Normal",
                            children: "一般",
                          }),
                          n.jsx("option", {
                            value: "Important",
                            children: "重要",
                          }),
                          n.jsx("option", {
                            value: "Critical",
                            children: "緊急",
                          }),
                        ],
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: [
                      n.jsxs("div", {
                        children: [
                          n.jsxs("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: [
                              "開始時間 ",
                              n.jsx("span", {
                                className: "text-red-500",
                                children: "*",
                              }),
                            ],
                          }),
                          n.jsx("input", {
                            type: "datetime-local",
                            value: s.start_time,
                            onChange: (x) => u("start_time", x.target.value),
                            disabled: a,
                            className:
                              "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsxs("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: [
                              "結束時間 ",
                              n.jsx("span", {
                                className: "text-red-500",
                                children: "*",
                              }),
                            ],
                          }),
                          n.jsx("input", {
                            type: "datetime-local",
                            value: s.end_time,
                            onChange: (x) => u("end_time", x.target.value),
                            disabled: a,
                            className:
                              "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              n.jsxs("div", {
                className:
                  "flex items-center justify-end space-x-4 p-6 border-t border-gray-200 bg-gray-50",
                children: [
                  n.jsx("button", {
                    onClick: p,
                    disabled: a,
                    className:
                      "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                    children: "取消",
                  }),
                  n.jsx("button", {
                    onClick: m,
                    disabled: a || !s.title.trim() || !s.content.trim(),
                    className:
                      "flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                    children: a
                      ? n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(Z, { size: "small", className: "mr-2" }),
                            "新增中...",
                          ],
                        })
                      : n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(gt, { size: 16, className: "mr-2" }),
                            "新增公告",
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
  R0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
    Fr();
    const [s, l] = j.useState([]),
      [a, i] = j.useState(!1),
      [o, c] = j.useState(null),
      [u, d] = j.useState(null),
      [m, p] = j.useState(!1),
      [x, y] = j.useState(!1),
      [N, k] = j.useState(!1);
    j.useEffect(() => {
      e && g();
    }, [e]);
    const g = async () => {
        i(!0), c(null);
        try {
          const v = await Ym();
          if (v.Code === 200) l(v.Data || []);
          else throw new Error(v.Result || "載入歷史公告失敗");
        } catch (v) {
          c(v instanceof Error ? v.message : "載入歷史公告時發生錯誤");
        } finally {
          i(!1);
        }
      },
      h = (v) => {
        const D = (L) => {
          if (!L) return "";
          try {
            const $ = L.replace(/\//g, "-");
            return new Date($).toISOString().slice(0, 16);
          } catch ($) {
            return console.error("Error formatting date for input:", L, $), "";
          }
        };
        d({
          GUID: v.GUID,
          title: v.title || "",
          content: v.content || "",
          priority: v.priority || "Normal",
          creator_dept: v.creator_dept || "",
          creator_name: v.creator_name || "",
          start_time: D(v.start_time),
          end_time: D(v.end_time),
          created_time: v.created_time || "",
        });
      },
      f = async () => {
        if (u) {
          p(!0), c(null);
          try {
            const v = (L) =>
                L ? L.replace("T", " ").replace(/-/g, "/") + ":00" : "",
              D = {
                GUID: u.GUID,
                title: u.title.trim(),
                content: u.content.trim(),
                priority: u.priority,
                creator_dept: u.creator_dept,
                creator_name: u.creator_name,
                start_time: v(u.start_time),
                end_time: v(u.end_time),
              };
            await Xm(D), await g(), d(null), r && r();
          } catch (v) {
            c(v instanceof Error ? v.message : "更新公告失敗，請稍後再試");
          } finally {
            p(!1);
          }
        }
      },
      w = async () => {
        if (u) {
          k(!0), c(null), y(!1);
          try {
            await Jm(u.GUID), await g(), d(null), r && r();
          } catch (v) {
            c(v instanceof Error ? v.message : "刪除公告失敗，請稍後再試");
          } finally {
            k(!1);
          }
        }
      },
      C = (v) => {
        if (!v) return "-";
        try {
          const D = v.replace(/\//g, "-");
          return new Date(D).toLocaleString("zh-TW", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: !1,
          });
        } catch {
          return v;
        }
      },
      z = (v) => {
        switch (v) {
          case "Critical":
            return "緊急";
          case "Important":
            return "重要";
          case "Normal":
            return "一般";
          default:
            return v || "一般";
        }
      },
      _ = (v) => {
        switch (v) {
          case "Critical":
            return "bg-red-100 text-red-800";
          case "Important":
            return "bg-yellow-100 text-yellow-800";
          case "Normal":
            return "bg-green-100 text-green-800";
          default:
            return "bg-gray-100 text-gray-800";
        }
      },
      I = () => {
        !a && !m && !N && (d(null), y(!1), t());
      };
    return e
      ? n.jsxs("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
          children: [
            n.jsxs("div", {
              className:
                "bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto",
              children: [
                n.jsxs("div", {
                  className:
                    "flex items-center justify-between p-6 border-b border-gray-200",
                  children: [
                    n.jsxs("div", {
                      className: "flex items-center",
                      children: [
                        n.jsx(pt, {
                          size: 24,
                          className: "text-blue-600 mr-3",
                        }),
                        n.jsx("h2", {
                          className: "text-xl font-semibold text-gray-800",
                          children: "歷史公告",
                        }),
                      ],
                    }),
                    n.jsx("button", {
                      onClick: I,
                      disabled: a || m,
                      className:
                        "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                      children: n.jsx(Ae, { size: 20 }),
                    }),
                  ],
                }),
                n.jsxs("div", {
                  className: "p-6",
                  children: [
                    o &&
                      n.jsxs("div", {
                        className:
                          "mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center",
                        children: [
                          n.jsx(Le, {
                            size: 20,
                            className: "mr-2 flex-shrink-0",
                          }),
                          o,
                        ],
                      }),
                    a
                      ? n.jsxs("div", {
                          className: "flex items-center justify-center py-12",
                          children: [
                            n.jsx(Z, { size: "large" }),
                            n.jsx("span", {
                              className: "ml-3 text-gray-500",
                              children: "載入歷史公告中...",
                            }),
                          ],
                        })
                      : s.length === 0
                      ? n.jsxs("div", {
                          className: "text-center text-gray-500 py-12",
                          children: [
                            n.jsx(pt, {
                              size: 48,
                              className: "mx-auto text-gray-300 mb-2",
                            }),
                            n.jsx("p", { children: "暫無歷史公告" }),
                          ],
                        })
                      : n.jsx("div", {
                          className: "overflow-x-auto",
                          children: n.jsx("div", {
                            className: "max-h-96 overflow-y-auto",
                            children: n.jsxs("table", {
                              className: "min-w-full divide-y divide-gray-200",
                              children: [
                                n.jsx("thead", {
                                  className: "bg-gray-50 sticky top-0 z-10",
                                  children: n.jsxs("tr", {
                                    children: [
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "建立時間",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "主旨",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "內容",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "重要程度",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "發布人員",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "開始時間",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "結束時間",
                                      }),
                                    ],
                                  }),
                                }),
                                n.jsx("tbody", {
                                  className:
                                    "bg-white divide-y divide-gray-200",
                                  children: s.map((v) =>
                                    n.jsxs(
                                      "tr",
                                      {
                                        className:
                                          "hover:bg-blue-50 cursor-pointer transition-colors",
                                        onClick: () => h(v),
                                        title: "點擊編輯此公告",
                                        children: [
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: C(v.created_time),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 text-sm text-gray-900 max-w-xs",
                                            children: n.jsx("div", {
                                              className: "truncate",
                                              title: v.title,
                                              children: v.title || "-",
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 text-sm text-gray-900 max-w-md",
                                            children: n.jsx("div", {
                                              className: "truncate",
                                              title: v.content,
                                              children: v.content || "-",
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap",
                                            children: n.jsx("span", {
                                              className: `px-2 py-1 rounded-full text-xs font-medium ${_(
                                                v.priority
                                              )}`,
                                              children: z(v.priority),
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children:
                                              `${v.creator_dept || ""} ${
                                                v.creator_name || ""
                                              }`.trim() || "-",
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: C(v.start_time),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: C(v.end_time),
                                          }),
                                        ],
                                      },
                                      v.GUID
                                    )
                                  ),
                                }),
                              ],
                            }),
                          }),
                        }),
                  ],
                }),
              ],
            }),
            u &&
              n.jsx("div", {
                className:
                  "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4",
                children: n.jsxs("div", {
                  className:
                    "bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
                  children: [
                    n.jsxs("div", {
                      className:
                        "flex items-center justify-between p-6 border-b border-gray-200",
                      children: [
                        n.jsxs("div", {
                          className: "flex items-center",
                          children: [
                            n.jsx(Rr, {
                              size: 24,
                              className: "text-green-600 mr-3",
                            }),
                            n.jsx("h2", {
                              className: "text-xl font-semibold text-gray-800",
                              children: "編輯公告",
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            n.jsxs("button", {
                              onClick: () => y(!0),
                              disabled: m || N,
                              className:
                                "flex items-center px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                              title: "刪除公告",
                              children: [
                                n.jsx(ut, { size: 16, className: "mr-2" }),
                                "刪除",
                              ],
                            }),
                            n.jsx("button", {
                              onClick: () => d(null),
                              disabled: m || N,
                              className:
                                "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                              children: n.jsx(Ae, { size: 20 }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      className: "p-6 space-y-6",
                      children: [
                        n.jsxs("div", {
                          children: [
                            n.jsxs("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: [
                                "主旨 ",
                                n.jsx("span", {
                                  className: "text-red-500",
                                  children: "*",
                                }),
                              ],
                            }),
                            n.jsx("input", {
                              type: "text",
                              value: u.title,
                              onChange: (v) =>
                                d({ ...u, title: v.target.value }),
                              disabled: m,
                              className:
                                "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          children: [
                            n.jsxs("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: [
                                "內容 ",
                                n.jsx("span", {
                                  className: "text-red-500",
                                  children: "*",
                                }),
                              ],
                            }),
                            n.jsx("textarea", {
                              value: u.content,
                              onChange: (v) =>
                                d({ ...u, content: v.target.value }),
                              disabled: m,
                              rows: 6,
                              className:
                                "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical disabled:opacity-50 disabled:bg-gray-100",
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          children: [
                            n.jsxs("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: [
                                "重要程度 ",
                                n.jsx("span", {
                                  className: "text-red-500",
                                  children: "*",
                                }),
                              ],
                            }),
                            n.jsxs("select", {
                              value: u.priority,
                              onChange: (v) =>
                                d({ ...u, priority: v.target.value }),
                              disabled: m,
                              className:
                                "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                              children: [
                                n.jsx("option", {
                                  value: "Normal",
                                  children: "一般",
                                }),
                                n.jsx("option", {
                                  value: "Important",
                                  children: "重要",
                                }),
                                n.jsx("option", {
                                  value: "Critical",
                                  children: "緊急",
                                }),
                              ],
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                          children: [
                            n.jsxs("div", {
                              children: [
                                n.jsxs("label", {
                                  className:
                                    "block text-sm font-medium text-gray-700 mb-2",
                                  children: [
                                    "開始時間 ",
                                    n.jsx("span", {
                                      className: "text-red-500",
                                      children: "*",
                                    }),
                                  ],
                                }),
                                n.jsx("input", {
                                  type: "datetime-local",
                                  value: u.start_time,
                                  onChange: (v) =>
                                    d({ ...u, start_time: v.target.value }),
                                  disabled: m,
                                  className:
                                    "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              children: [
                                n.jsxs("label", {
                                  className:
                                    "block text-sm font-medium text-gray-700 mb-2",
                                  children: [
                                    "結束時間 ",
                                    n.jsx("span", {
                                      className: "text-red-500",
                                      children: "*",
                                    }),
                                  ],
                                }),
                                n.jsx("input", {
                                  type: "datetime-local",
                                  value: u.end_time,
                                  onChange: (v) =>
                                    d({ ...u, end_time: v.target.value }),
                                  disabled: m,
                                  className:
                                    "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      className:
                        "flex items-center justify-end space-x-4 p-6 border-t border-gray-200 bg-gray-50",
                      children: [
                        n.jsx("button", {
                          onClick: () => d(null),
                          disabled: m || N,
                          className:
                            "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        n.jsx("button", {
                          onClick: f,
                          disabled:
                            m || N || !u.title.trim() || !u.content.trim(),
                          className:
                            "flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                          children:
                            m || N
                              ? n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Z, {
                                      size: "small",
                                      className: "mr-2",
                                    }),
                                    m ? "更新中..." : "處理中...",
                                  ],
                                })
                              : n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Rr, { size: 16, className: "mr-2" }),
                                    "更新公告",
                                  ],
                                }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            x &&
              u &&
              n.jsx("div", {
                className:
                  "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[110] p-4",
                children: n.jsx("div", {
                  className: "bg-white rounded-lg shadow-xl max-w-md w-full",
                  children: n.jsxs("div", {
                    className: "p-6",
                    children: [
                      n.jsxs("div", {
                        className: "flex items-center mb-4",
                        children: [
                          n.jsx(ut, {
                            size: 24,
                            className: "text-red-600 mr-3",
                          }),
                          n.jsx("h3", {
                            className: "text-lg font-semibold text-gray-800",
                            children: "確認刪除公告",
                          }),
                        ],
                      }),
                      n.jsxs("p", {
                        className: "text-gray-600 mb-2",
                        children: ["您確定要刪除公告「", u.title, "」嗎？"],
                      }),
                      n.jsx("p", {
                        className: "text-sm text-red-600 mb-6",
                        children: "此操作無法復原，請謹慎操作。",
                      }),
                      n.jsxs("div", {
                        className: "flex items-center justify-end space-x-4",
                        children: [
                          n.jsx("button", {
                            onClick: () => y(!1),
                            disabled: N,
                            className:
                              "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                            children: "取消",
                          }),
                          n.jsx("button", {
                            onClick: w,
                            disabled: N,
                            className:
                              "flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                            children: N
                              ? n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Z, {
                                      size: "small",
                                      className: "mr-2",
                                    }),
                                    "刪除中...",
                                  ],
                                })
                              : n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(ut, { size: 16, className: "mr-2" }),
                                    "確認刪除",
                                  ],
                                }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
          ],
        })
      : null;
  },
  M0 = ({
    bulletins: e,
    onBulletinAdded: t,
    showInFocus: r = !0,
    onFocusToggle: s,
  }) => {
    const [l, a] = Pe.useState(!1),
      [i, o] = Pe.useState(!1),
      c = (x) => {
        switch (x) {
          case "high":
            return "border-l-red-500 bg-red-50";
          case "medium":
            return "border-l-yellow-500 bg-yellow-50";
          case "low":
            return "border-l-green-500 bg-green-50";
          default:
            return "border-l-gray-500 bg-gray-50";
        }
      },
      u = (x) => {
        switch (x) {
          case "high":
            return "bg-red-100 text-red-800";
          case "medium":
            return "bg-yellow-100 text-yellow-800";
          case "low":
            return "bg-green-100 text-green-800";
          default:
            return "bg-gray-100 text-gray-800";
        }
      },
      d = (x) =>
        new Date(x).toLocaleString("zh-TW", {
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }),
      m = () => {
        t && t();
      },
      p = () => {
        t && t();
      };
    return n.jsxs(n.Fragment, {
      children: [
        n.jsxs("div", {
          className:
            "bg-white rounded-lg shadow-sm border border-gray-200 h-full flex flex-col",
          children: [
            n.jsx("div", {
              className: "p-4 border-b border-gray-200",
              children: n.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  n.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      n.jsx(cn, { size: 20, className: "text-blue-600 mr-2" }),
                      n.jsx("h3", {
                        className: "text-lg font-semibold text-gray-800",
                        children: "公告欄",
                      }),
                      s &&
                        n.jsxs("div", {
                          className: "ml-4 flex items-center",
                          children: [
                            n.jsxs("label", {
                              className:
                                "relative inline-flex items-center cursor-pointer",
                              children: [
                                n.jsx("input", {
                                  type: "checkbox",
                                  className: "sr-only peer",
                                  checked: r,
                                  onChange: (x) => s(x.target.checked),
                                }),
                                n.jsx("div", {
                                  className:
                                    "w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600",
                                }),
                              ],
                            }),
                            n.jsx("span", {
                              className: "ml-2 text-xs text-gray-500",
                              children: "專注顯示",
                            }),
                          ],
                        }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [
                      n.jsxs("button", {
                        onClick: () => o(!0),
                        className:
                          "flex items-center px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors text-sm",
                        children: [
                          n.jsx(pt, { size: 16, className: "mr-2" }),
                          "查看歷史",
                        ],
                      }),
                      n.jsxs("button", {
                        onClick: () => a(!0),
                        className:
                          "flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors text-sm",
                        children: [
                          n.jsx(gt, { size: 16, className: "mr-2" }),
                          "新增項目",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            n.jsx("div", {
              className: "p-4 space-y-3 max-h-[400px] overflow-y-auto flex-1",
              children:
                e.length === 0
                  ? n.jsxs("div", {
                      className: "text-center text-gray-500 py-8",
                      children: [
                        n.jsx(cn, {
                          size: 48,
                          className: "mx-auto text-gray-300 mb-2",
                        }),
                        n.jsx("p", { children: "暫無公告" }),
                      ],
                    })
                  : e.map((x) =>
                      n.jsxs(
                        "div",
                        {
                          className: `p-3 rounded-lg ${c(x.priority)}`,
                          children: [
                            n.jsxs("div", {
                              className:
                                "flex items-start justify-between mb-2",
                              children: [
                                n.jsx("h4", {
                                  className: "font-medium text-gray-800 flex-1",
                                  children: x.title,
                                }),
                                n.jsx("span", {
                                  className: `px-2 py-1 rounded-full text-xs font-medium ${u(
                                    x.priority
                                  )}`,
                                  children:
                                    x.priority === "high"
                                      ? "緊急"
                                      : x.priority === "medium"
                                      ? "重要"
                                      : "一般",
                                }),
                              ],
                            }),
                            n.jsx("p", {
                              className:
                                "text-gray-700 text-sm mb-3 leading-relaxed whitespace-pre-line",
                              children: x.content,
                            }),
                            n.jsxs("div", {
                              className:
                                "flex items-center justify-between text-xs text-gray-500",
                              children: [
                                n.jsxs("div", {
                                  className: "flex items-center",
                                  children: [
                                    n.jsx(Js, { size: 12, className: "mr-1" }),
                                    n.jsx("span", { children: x.author }),
                                  ],
                                }),
                                n.jsxs("div", {
                                  className: "flex items-center",
                                  children: [
                                    n.jsx(Ar, { size: 12, className: "mr-1" }),
                                    n.jsx("span", {
                                      children: d(x.publishDate),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        x.id
                      )
                    ),
            }),
          ],
        }),
        n.jsx(P0, { isOpen: l, onClose: () => a(!1), onSuccess: m }),
        n.jsx(R0, { isOpen: i, onClose: () => o(!1), onSuccess: p }),
      ],
    });
  },
  O0 = ({ bulletins: e }) => {
    const [t, r] = j.useState(0);
    j.useEffect(() => {
      if (e.length <= 1) return;
      const c = setInterval(() => {
        r((u) => (u + 1) % e.length);
      }, 8e3);
      return () => clearInterval(c);
    }, [e.length]);
    const s = (c) => {
        switch (c) {
          case "high":
            return "bg-red-50";
          case "medium":
            return "bg-yellow-50";
          case "low":
            return "bg-green-50";
          default:
            return "bg-gray-50";
        }
      },
      l = (c) => {
        switch (c) {
          case "high":
            return "bg-red-100 text-red-800";
          case "medium":
            return "bg-yellow-100 text-yellow-800";
          case "low":
            return "bg-green-100 text-green-800";
          default:
            return "bg-gray-100 text-gray-800";
        }
      },
      a = (c) => {
        switch (c) {
          case "high":
            return "緊急";
          case "medium":
            return "重要";
          case "low":
            return "一般";
          default:
            return "一般";
        }
      },
      i = (c) => {
        try {
          const u = c.replace(/\//g, "-"),
            d = new Date(u);
          return isNaN(d.getTime())
            ? c
            : d.toLocaleString("zh-TW", {
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              });
        } catch {
          return c;
        }
      };
    if (e.length === 0)
      return n.jsxs("div", {
        className:
          "bg-white rounded-lg shadow-sm border border-gray-200 h-full flex flex-col",
        children: [
          n.jsx("div", {
            className: "p-2 border-b border-gray-200 bg-blue-50",
            children: n.jsxs("div", {
              className: "flex items-center",
              children: [
                n.jsx(cn, { size: 20, className: "text-blue-600 mr-2" }),
                n.jsx("h3", {
                  className: "text-xl font-semibold text-gray-800",
                  children: "公告欄",
                }),
              ],
            }),
          }),
          n.jsx("div", {
            className: "flex-1 flex items-center justify-center",
            children: n.jsxs("div", {
              className: "text-center text-gray-500",
              children: [
                n.jsx(cn, {
                  size: 32,
                  className: "mx-auto text-gray-300 mb-2",
                }),
                n.jsx("p", { className: "text-sm", children: "暫無公告" }),
              ],
            }),
          }),
        ],
      });
    const o = e[t];
    return n.jsxs("div", {
      className:
        "bg-white rounded-xl shadow-lg border border-gray-200 h-full flex flex-col",
      children: [
        n.jsx("div", {
          className: "p-2 border-b border-gray-200 bg-blue-50",
          children: n.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              n.jsxs("div", {
                className: "flex items-center",
                children: [
                  n.jsx(cn, { size: 20, className: "text-blue-600 mr-2" }),
                  n.jsx("h3", {
                    className: "text-xl font-semibold text-gray-800",
                    children: "公告欄",
                  }),
                ],
              }),
              n.jsxs("span", {
                className: "text-sm text-gray-500 font-medium",
                children: [t + 1, "/", e.length],
              }),
            ],
          }),
        }),
        n.jsx("div", {
          className: "flex-1 p-3",
          children: n.jsxs("div", {
            className: `h-full px-4 py-2 border flex flex-col rounded-xl transition-colors ${s(
              o.priority
            )} border-gray-200`,
            children: [
              n.jsxs("div", {
                className: "flex items-center justify-between mb-2 w-full",
                children: [
                  n.jsx("h4", {
                    className:
                      "font-bold text-lg text-gray-800 flex-1 leading-tight",
                    children: o.title,
                  }),
                  n.jsx("span", {
                    className: `px-3 py-1 rounded-full text-base font-bold ${l(
                      o.priority
                    )} ml-2`,
                    children: a(o.priority),
                  }),
                ],
              }),
              n.jsx("p", {
                className:
                  "text-gray-700 text-base mb-2 leading-relaxed whitespace-pre-line flex-1",
                children: o.content,
              }),
              n.jsxs("div", {
                className:
                  "flex items-center justify-between text-base text-gray-500 mt-auto",
                children: [
                  n.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      n.jsx(Js, { size: 16, className: "mr-2" }),
                      n.jsx("span", { children: o.author }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      n.jsx(Ar, { size: 16, className: "mr-2" }),
                      n.jsx("span", { children: i(o.publishDate) }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  ze = ({ message: e }) =>
    n.jsx("div", {
      className:
        "flex items-center justify-center p-8 bg-red-50 border border-red-200 rounded-lg",
      children: n.jsxs("div", {
        className: "text-center",
        children: [
          n.jsx(Rs, { className: "mx-auto mb-3 text-red-500", size: 48 }),
          n.jsx("h3", {
            className: "text-lg font-semibold text-red-800 mb-2",
            children: "載入錯誤",
          }),
          n.jsx("p", { className: "text-red-600", children: e }),
          n.jsx("p", {
            className: "text-sm text-red-500 mt-2",
            children: "系統將在下次刷新時重試",
          }),
        ],
      }),
    }),
  Yu = ({
    bulletins: e,
    isFullscreen: t = !1,
    onBulletinAdded: r,
    showInFocus: s,
    onFocusToggle: l,
    error: a,
  }) =>
    a != null && a.hasError
      ? t
        ? n.jsx("div", {
            className: "bg-gray-800 rounded-lg p-6 h-full",
            children: n.jsx(ze, { message: a.message || "資料載入失敗" }),
          })
        : n.jsx(ze, { message: a.message || "資料載入失敗" })
      : t
      ? n.jsx(O0, { bulletins: e })
      : n.jsx(M0, {
          bulletins: e,
          onBulletinAdded: r,
          showInFocus: s,
          onFocusToggle: l,
        }),
  gi = ({ isOpen: e, onClose: t, sectionKey: r, sectionTitle: s }) => {
    const [l, a] = j.useState(5);
    j.useEffect(() => {
      if (e) {
        const o = localStorage.getItem(`focusTable_${r}_itemsPerPage`);
        o && a(parseInt(o, 10));
      }
    }, [e, r]);
    const i = () => {
      localStorage.setItem(`focusTable_${r}_itemsPerPage`, l.toString()),
        t(),
        window.location.reload();
    };
    return e
      ? n.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
          children: n.jsxs("div", {
            className: "bg-white rounded-lg shadow-xl max-w-md w-full mx-4",
            children: [
              n.jsxs("div", {
                className:
                  "flex items-center justify-between p-6 border-b border-gray-200",
                children: [
                  n.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      n.jsx(nr, { size: 24, className: "text-blue-600 mr-3" }),
                      n.jsxs("h2", {
                        className: "text-xl font-semibold text-gray-800",
                        children: [s, " - 專注模式設定"],
                      }),
                    ],
                  }),
                  n.jsx("button", {
                    onClick: t,
                    className:
                      "text-gray-400 hover:text-gray-600 transition-colors",
                    children: n.jsx(Ae, { size: 24 }),
                  }),
                ],
              }),
              n.jsx("div", {
                className: "p-6",
                children: n.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    n.jsxs("div", {
                      children: [
                        n.jsx("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-2",
                          children: "每頁顯示項目數",
                        }),
                        n.jsx("input", {
                          type: "number",
                          min: "1",
                          max: "20",
                          value: l,
                          onChange: (o) =>
                            a(
                              Math.max(
                                1,
                                Math.min(20, parseInt(o.target.value) || 1)
                              )
                            ),
                          className:
                            "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                        }),
                        n.jsx("p", {
                          className: "mt-2 text-sm text-gray-500",
                          children:
                            "設定在專注顯示模式下，此區塊的表格每頁要顯示多少個項目（建議：1-20）",
                        }),
                      ],
                    }),
                    n.jsx("div", {
                      className:
                        "bg-blue-50 border border-blue-200 rounded-lg p-4",
                      children: n.jsxs("div", {
                        className: "flex items-start",
                        children: [
                          n.jsx("div", {
                            className: "flex-shrink-0",
                            children: n.jsx(nr, {
                              size: 20,
                              className: "text-blue-600 mt-0.5",
                            }),
                          }),
                          n.jsx("div", {
                            className: "ml-3",
                            children: n.jsxs("p", {
                              className: "text-sm text-blue-800",
                              children: [
                                n.jsx("strong", { children: "提示：" }),
                                "設定較少的項目數可以讓每個項目顯示更清楚，設定較多的項目數可以一次看到更多資訊。",
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              n.jsxs("div", {
                className:
                  "flex items-center justify-end space-x-3 p-6 border-t border-gray-200",
                children: [
                  n.jsx("button", {
                    onClick: t,
                    className:
                      "px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors",
                    children: "取消",
                  }),
                  n.jsx("button", {
                    onClick: i,
                    className:
                      "px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors",
                    children: "儲存設定",
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
  },
  L0 = ({
    restockTasks: e,
    receivingTasks: t,
    putAwayTasks: r,
    showInFocus: s = !0,
    onFocusToggle: l,
  }) => {
    var x;
    const [a, i] = j.useState("restock"),
      [o, c] = j.useState(!1),
      u = (y) => {
        switch (y) {
          case "等待過帳":
            return "bg-white border-gray-200";
          case "已過帳":
            return "bg-yellow-50 border-yellow-200";
          case "已簽收":
            return "bg-green-50 border-green-200";
          default:
            return "bg-white border-gray-200";
        }
      },
      d = ({ task: y, taskType: N }) =>
        N === "restock" && "code" in y
          ? n.jsx("div", {
              className: `p-3 border rounded-lg transition-all duration-200 ${u(
                y.state
              )} hover:border-gray-300`,
              children: n.jsx("div", {
                className: "flex items-start space-x-3",
                children: n.jsx("div", {
                  className: "flex-1 min-w-0",
                  children: n.jsxs("div", {
                    className: "grid grid-cols-2 gap-1 text-sm",
                    children: [
                      n.jsxs("div", {
                        children: [
                          n.jsx("span", {
                            className: "text-gray-500",
                            children: "藥碼:",
                          }),
                          n.jsx("span", {
                            className: "ml-2 font-medium text-gray-800",
                            children: y.code,
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsx("span", {
                            className: "text-gray-500",
                            children: "藥名:",
                          }),
                          n.jsx("span", {
                            className: "ml-2 font-medium text-gray-800",
                            children: y.name,
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsx("span", {
                            className: "text-gray-500",
                            children: "數量:",
                          }),
                          n.jsx("span", {
                            className: "ml-2 font-medium text-gray-800",
                            children: y.issuedQuantity,
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsx("span", {
                            className: "text-gray-500",
                            children: "部門:",
                          }),
                          n.jsx("span", {
                            className: "ml-2 font-medium text-gray-800",
                            children: y.destinationStoreType,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            })
          : (N === "receiving" || N === "putaway") && "code" in y
          ? n.jsx("div", {
              className:
                "p-3 border rounded-lg transition-all duration-200 bg-white border-gray-200 hover:border-gray-300",
              children: n.jsx("div", {
                className: "flex items-start space-x-3",
                children: n.jsx("div", {
                  className: "flex-1 min-w-0",
                  children: n.jsxs("div", {
                    className: "grid grid-cols-2 gap-2 text-sm",
                    children: [
                      n.jsxs("div", {
                        children: [
                          n.jsx("span", {
                            className: "text-gray-500",
                            children: "藥碼:",
                          }),
                          n.jsx("span", {
                            className: "ml-2 font-medium text-gray-800",
                            children: y.code,
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsx("span", {
                            className: "text-gray-500",
                            children: "數量:",
                          }),
                          n.jsx("span", {
                            className: "ml-2 font-medium text-gray-800",
                            children: y.quantity,
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsx("span", {
                            className: "text-gray-500",
                            children: "藥名:",
                          }),
                          n.jsx("span", {
                            className: "ml-2 font-medium text-gray-800",
                            children: y.name,
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsx("span", {
                            className: "text-gray-500",
                            children: "廠商:",
                          }),
                          n.jsx("span", {
                            className: "ml-2 font-medium text-gray-800",
                            children: y.supplier,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            })
          : null,
      m = [
        { key: "restock", label: "撥補", icon: Ie, tasks: e },
        { key: "receiving", label: "驗收", icon: Xt, tasks: t },
        { key: "putaway", label: "歸貨", icon: qu, tasks: r },
      ],
      p = ((x = m.find((y) => y.key === a)) == null ? void 0 : x.tasks) || [];
    return (
      p.filter((y) =>
        "state" in y ? y.state === "等待過帳" : y.quantity && y.quantity > 0
      ).length,
      p.filter((y) => ("state" in y ? y.state === "已簽收" : !1)).length,
      n.jsxs("div", {
        className:
          "bg-white rounded-lg shadow-sm border border-gray-200 h-full",
        children: [
          n.jsxs("div", {
            className: "p-4 border-b border-gray-200",
            children: [
              n.jsxs("div", {
                className: "flex items-center justify-between mb-3",
                children: [
                  n.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      n.jsxs("h3", {
                        className: "flex items-end gap-2",
                        children: [
                          n.jsx("span", {
                            className: "text-lg font-semibold text-gray-800",
                            children: "任務清單",
                          }),
                          n.jsxs("span", {
                            className: "text-gray-500 text-sm",
                            children: ["總計: ", p.length],
                          }),
                        ],
                      }),
                      l &&
                        n.jsxs("div", {
                          className: "ml-4 flex items-center",
                          children: [
                            n.jsxs("label", {
                              className:
                                "relative inline-flex items-center cursor-pointer",
                              children: [
                                n.jsx("input", {
                                  type: "checkbox",
                                  className: "sr-only peer",
                                  checked: s,
                                  onChange: (y) => l(y.target.checked),
                                }),
                                n.jsx("div", {
                                  className:
                                    "w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600",
                                }),
                              ],
                            }),
                            n.jsx("span", {
                              className: "ml-2 text-xs text-gray-500",
                              children: "專注顯示",
                            }),
                          ],
                        }),
                    ],
                  }),
                  n.jsx("button", {
                    onClick: () => c(!0),
                    className:
                      "p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                    title: "專注模式設定",
                    children: n.jsx(nr, { size: 18 }),
                  }),
                ],
              }),
              n.jsx("div", {
                className: "flex space-x-1 bg-gray-100 rounded-lg p-1",
                children: m.map((y) => {
                  const N = y.icon,
                    k = a === y.key,
                    g = y.tasks.filter((h) =>
                      "state" in h
                        ? h.state === "等待過帳"
                        : h.quantity && h.quantity > 0
                    ).length;
                  return n.jsxs(
                    "button",
                    {
                      onClick: () => i(y.key),
                      className: `flex-1 flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        k
                          ? "bg-white text-blue-600 shadow-sm"
                          : "text-gray-600 hover:text-gray-800"
                      }`,
                      children: [
                        n.jsx(N, { size: 16, className: "mr-2" }),
                        y.label,
                        g > 0 &&
                          n.jsx("span", {
                            className: `ml-2 px-2 py-0.5 rounded-full text-xs ${
                              k
                                ? "bg-blue-100 text-blue-600"
                                : "bg-gray-200 text-gray-600"
                            }`,
                            children: g,
                          }),
                      ],
                    },
                    y.key
                  );
                }),
              }),
            ],
          }),
          n.jsx("div", {
            className: "p-4",
            children: n.jsx("div", {
              className: "space-y-3 max-h-64 overflow-y-auto",
              children:
                p.length === 0
                  ? n.jsxs("div", {
                      className: "text-center text-gray-500 py-8",
                      children: [
                        n.jsx(Ie, {
                          size: 48,
                          className: "mx-auto text-gray-300 mb-2",
                        }),
                        n.jsx("p", { children: "暫無任務" }),
                      ],
                    })
                  : p
                      .filter((y) =>
                        a === "restock" && "state" in y
                          ? y.state === "等待過帳"
                          : !0
                      )
                      .map((y) => n.jsx(d, { task: y, taskType: a }, y.id)),
            }),
          }),
          n.jsx(gi, {
            isOpen: o,
            onClose: () => c(!1),
            sectionKey: "tasks",
            sectionTitle: "任務清單",
          }),
        ],
      })
    );
  },
  A0 = ({ restockTasks: e, receivingTasks: t, putAwayTasks: r }) => {
    var N;
    const [s, l] = j.useState("restock"),
      [a, i] = j.useState(0),
      c = (() => {
        const k = localStorage.getItem("focusTable_tasks_itemsPerPage");
        return k ? parseInt(k, 10) : 5;
      })(),
      u = e.filter((k) => k.state === "等待過帳"),
      d = [
        { key: "restock", label: "撥補", icon: Ie, tasks: u },
        { key: "receiving", label: "驗收", icon: Xt, tasks: t },
        { key: "putaway", label: "歸貨", icon: qu, tasks: r },
      ],
      m = ((N = d.find((k) => k.key === s)) == null ? void 0 : N.tasks) || [];
    j.useEffect(() => {
      const k = setInterval(() => {
        l((g) => {
          const f = (d.findIndex((w) => w.key === g) + 1) % d.length;
          return d[f].key;
        }),
          i(0);
      }, 12e3);
      return () => clearInterval(k);
    }, []),
      j.useEffect(() => {
        if (m.length <= c) return;
        const k = setInterval(() => {
          i((g) => {
            const h = g + c;
            return h >= m.length ? 0 : h;
          });
        }, 8e3);
        return () => clearInterval(k);
      }, [m.length, s]),
      m.filter((k) =>
        "state" in k
          ? k.state === "等待過帳"
          : "quantity" in k && k.quantity > 0
      ).length,
      m.filter((k) => ("state" in k ? k.state === "已簽收" : !1)).length;
    const p = m.slice(a, a + c),
      x = Math.ceil(m.length / c),
      y = Math.floor(a / c) + 1;
    return n.jsxs("div", {
      className:
        "bg-white rounded-xl shadow-lg border border-gray-200 h-full flex flex-col min-h-0 max-h-full",
      children: [
        n.jsxs("div", {
          className: "p-2 border-b border-gray-200 bg-green-50 flex-shrink-0",
          children: [
            n.jsxs("div", {
              className: "flex items-center justify-between mb-2",
              children: [
                n.jsxs("h3", {
                  className:
                    "text-xl font-semibold text-gray-800 flex gap-2 items-end",
                  children: [
                    "任務清單",
                    n.jsxs("span", {
                      className: "text-gray-500 text-sm",
                      children: ["總計: ", m.length],
                    }),
                  ],
                }),
                n.jsx("div", {
                  className: "flex space-x-1 bg-gray-100 rounded-lg p-1",
                  children: d.map((k) => {
                    const g = k.icon,
                      h = s === k.key,
                      f = k.tasks.filter((w) =>
                        "state" in w
                          ? w.state === "等待過帳"
                          : "quantity" in w && w.quantity > 0
                      ).length;
                    return n.jsxs(
                      "div",
                      {
                        className: `flex items-center justify-center px-2 py-1 rounded-md text-xs font-medium transition-colors ${
                          h
                            ? "bg-white text-blue-600 shadow-sm"
                            : "text-gray-600"
                        }`,
                        children: [
                          n.jsx(g, { size: 14, className: "mr-1" }),
                          k.label,
                          f > 0 &&
                            n.jsx("span", {
                              className: `ml-1 px-1 py-0.5 rounded-full text-xs ${
                                h
                                  ? "bg-blue-100 text-blue-600"
                                  : "bg-gray-200 text-gray-600"
                              }`,
                              children: f,
                            }),
                        ],
                      },
                      k.key
                    );
                  }),
                }),
              ],
            }),
            m.length > c &&
              n.jsxs("div", {
                className:
                  "flex items-center justify-between text-base text-gray-600 mt-2",
                children: [
                  n.jsxs("span", { children: ["第 ", y, " / ", x, " 頁"] }),
                  n.jsx("div", {
                    className: "flex space-x-1",
                    children: Array.from({ length: x }, (k, g) =>
                      n.jsx(
                        "div",
                        {
                          className: `w-2 h-2 rounded-full ${
                            g === y - 1 ? "bg-green-500" : "bg-gray-300"
                          }`,
                        },
                        g
                      )
                    ),
                  }),
                ],
              }),
          ],
        }),
        n.jsx("div", {
          className: "flex-1 min-h-0 overflow-hidden",
          children:
            m.length === 0
              ? n.jsx("div", {
                  className:
                    "flex items-center justify-center h-full text-gray-500",
                  children: n.jsxs("div", {
                    className: "text-center",
                    children: [
                      n.jsx(Ie, {
                        size: 32,
                        className: "mx-auto mb-2 text-gray-400",
                      }),
                      n.jsx("p", {
                        className: "text-sm",
                        children: "暫無任務",
                      }),
                    ],
                  }),
                })
              : n.jsx("div", {
                  className: "h-full overflow-auto",
                  children: n.jsxs("table", {
                    className: "w-full border-collapse",
                    children: [
                      n.jsx("thead", {
                        className:
                          "sticky top-0 bg-gray-50 border-b-2 border-gray-200",
                        children: n.jsxs("tr", {
                          children: [
                            n.jsx("th", {
                              className:
                                "text-base font-semibold text-left p-2 text-gray-700",
                              children: "藥碼",
                            }),
                            n.jsx("th", {
                              className:
                                "text-base font-semibold text-left p-2 text-gray-700",
                              children: "藥名",
                            }),
                            n.jsx("th", {
                              className:
                                "text-base font-semibold text-center p-2 text-gray-700",
                              children: "數量",
                            }),
                            n.jsxs("th", {
                              className:
                                "text-base font-semibold text-center p-2 text-gray-700",
                              children: [
                                s === "restock" && "部門",
                                s === "receiving" && "廠商",
                                s === "putaway" && "廠商",
                              ],
                            }),
                          ],
                        }),
                      }),
                      n.jsx("tbody", {
                        children: p.map((k, g) => {
                          if (s === "restock" && "code" in k && "state" in k) {
                            const h = (w) => {
                                switch (w) {
                                  case "等待過帳":
                                    return "bg-white hover:bg-gray-50";
                                  case "已過帳":
                                    return "bg-yellow-50 hover:bg-yellow-100";
                                  case "已簽收":
                                    return "bg-green-50 hover:bg-green-100";
                                  default:
                                    return "bg-white hover:bg-gray-50";
                                }
                              },
                              f =
                                (k.state === "已過帳" ||
                                  k.state === "已簽收") &&
                                k.actualIssuedQuantity
                                  ? k.actualIssuedQuantity
                                  : k.issuedQuantity;
                            return n.jsxs(
                              "tr",
                              {
                                className: `border-b border-gray-200 transition-colors ${h(
                                  k.state
                                )}`,
                                children: [
                                  n.jsx("td", {
                                    className:
                                      "text-base p-2 text-gray-800 font-medium",
                                    children: k.code,
                                  }),
                                  n.jsx("td", {
                                    className:
                                      "text-base p-2 text-gray-800 font-medium",
                                    children: k.name,
                                  }),
                                  n.jsx("td", {
                                    className:
                                      "text-base p-2 text-center text-gray-700",
                                    children: f,
                                  }),
                                  n.jsx("td", {
                                    className:
                                      "text-base p-2 text-center text-gray-700",
                                    children: k.destinationStoreType,
                                  }),
                                ],
                              },
                              `${a}-${g}`
                            );
                          }
                          return (s === "receiving" || s === "putaway") &&
                            "code" in k
                            ? n.jsxs(
                                "tr",
                                {
                                  className:
                                    "border-b border-gray-200 transition-colors bg-white hover:bg-gray-50",
                                  children: [
                                    n.jsx("td", {
                                      className:
                                        "text-base p-2 text-gray-800 font-medium",
                                      children: k.code,
                                    }),
                                    n.jsx("td", {
                                      className:
                                        "text-base p-2 text-gray-800 font-medium",
                                      children: k.name,
                                    }),
                                    n.jsx("td", {
                                      className:
                                        "text-base p-2 text-center text-gray-700",
                                      children: k.quantity,
                                    }),
                                    n.jsx("td", {
                                      className:
                                        "text-base p-2 text-center text-gray-700",
                                      children: k.supplier,
                                    }),
                                  ],
                                },
                                `${a}-${g}`
                              )
                            : null;
                        }),
                      }),
                    ],
                  }),
                }),
        }),
      ],
    });
  },
  Xu = ({
    restockTasks: e,
    receivingTasks: t,
    putAwayTasks: r,
    isFullscreen: s = !1,
    showInFocus: l,
    onFocusToggle: a,
    error: i,
  }) =>
    i != null && i.hasError
      ? s
        ? n.jsx("div", {
            className: "bg-gray-800 rounded-lg p-6 h-full",
            children: n.jsx(ze, { message: i.message || "資料載入失敗" }),
          })
        : n.jsx(ze, { message: i.message || "資料載入失敗" })
      : s
      ? n.jsx(A0, { restockTasks: e, receivingTasks: t, putAwayTasks: r })
      : n.jsx(L0, {
          restockTasks: e,
          receivingTasks: t,
          putAwayTasks: r,
          showInFocus: l,
          onFocusToggle: a,
        }),
  F0 = ({ incomingDrugs: e, showInFocus: t = !0, onFocusToggle: r }) => {
    const s = (o) => {
        switch (o) {
          case "shipped":
            return "bg-blue-100 text-blue-800";
          case "ordered":
            return "bg-yellow-100 text-yellow-800";
          case "delayed":
            return "bg-red-100 text-red-800";
          default:
            return "bg-gray-100 text-gray-800";
        }
      },
      l = (o) => {
        switch (o) {
          case "shipped":
            return "已出貨";
          case "ordered":
            return "已訂購";
          case "delayed":
            return "延遲";
          default:
            return o;
        }
      },
      a = (o) => {
        if (!o) return "未設定";
        try {
          const c = new Date(o.replace(/\//g, "-")),
            u = new Date(),
            d = c.getTime() - u.getTime(),
            m = Math.ceil(d / (1e3 * 60 * 60 * 24)),
            p = c.toLocaleDateString("zh-TW", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            });
          return m < 0
            ? `${p} (逾期 ${Math.abs(m)} 天)`
            : m === 0
            ? `${p} (今天)`
            : m === 1
            ? `${p} (明天)`
            : `${p} (${m} 天後)`;
        } catch {
          return o;
        }
      },
      i = (o) => {
        if (!o) return !1;
        try {
          return new Date(o.replace(/\//g, "-")) < new Date();
        } catch {
          return !1;
        }
      };
    return n.jsxs("div", {
      className: "bg-white rounded-lg shadow-sm border border-gray-200",
      children: [
        n.jsx("div", {
          className: "p-4 border-b border-gray-200",
          children: n.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              n.jsxs("div", {
                className: "flex items-center",
                children: [
                  n.jsx(Xt, { size: 20, className: "text-green-600 mr-2" }),
                  n.jsx("h3", {
                    className: "text-lg font-semibold text-gray-800",
                    children: "未到貨監控",
                  }),
                  r &&
                    n.jsxs("div", {
                      className: "ml-4 flex items-center",
                      children: [
                        n.jsxs("label", {
                          className:
                            "relative inline-flex items-center cursor-pointer",
                          children: [
                            n.jsx("input", {
                              type: "checkbox",
                              className: "sr-only peer",
                              checked: t,
                              onChange: (o) => r(o.target.checked),
                            }),
                            n.jsx("div", {
                              className:
                                "w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600",
                            }),
                          ],
                        }),
                        n.jsx("span", {
                          className: "ml-2 text-xs text-gray-500",
                          children: "專注顯示",
                        }),
                      ],
                    }),
                ],
              }),
              n.jsxs("span", {
                className: "text-sm text-gray-500",
                children: [e.length, " 項待到貨"],
              }),
            ],
          }),
        }),
        n.jsx("div", {
          className: "p-4",
          children: n.jsx("div", {
            className: "space-y-3 max-h-60 overflow-y-auto",
            children:
              e.length === 0
                ? n.jsxs("div", {
                    className: "text-center text-gray-500 py-4",
                    children: [
                      n.jsx(Xt, {
                        size: 48,
                        className: "mx-auto text-gray-300 mb-2",
                      }),
                      n.jsx("p", { children: "暫無待到貨品項" }),
                    ],
                  })
                : e.map((o) =>
                    n.jsxs(
                      "div",
                      {
                        className: `p-3 border rounded-lg transition-colors ${
                          i(o.expectedArrivalDate)
                            ? "border-red-200 bg-red-50"
                            : o.status === "delayed"
                            ? "border-yellow-200 bg-yellow-50"
                            : "border-gray-200 bg-white hover:border-gray-300"
                        }`,
                        children: [
                          n.jsxs("div", {
                            className: "flex items-start justify-between mb-2",
                            children: [
                              n.jsx("h4", {
                                className: "font-medium text-gray-800 flex-1",
                                children: o.drugName,
                              }),
                              n.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                  i(o.expectedArrivalDate) &&
                                    n.jsx(Le, {
                                      size: 16,
                                      className: "text-red-500",
                                    }),
                                  n.jsx("span", {
                                    className: `px-2 py-1 rounded-full text-xs font-medium ${s(
                                      o.status
                                    )}`,
                                    children: l(o.status),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          n.jsxs("div", {
                            className: "space-y-1 text-sm text-gray-600",
                            children: [
                              n.jsxs("div", {
                                className: "flex items-center",
                                children: [
                                  n.jsx(Xs, {
                                    size: 14,
                                    className: `mr-2 ${
                                      i(o.expectedArrivalDate)
                                        ? "text-red-500"
                                        : "text-gray-400"
                                    }`,
                                  }),
                                  n.jsxs("span", {
                                    className: i(o.expectedArrivalDate)
                                      ? "text-red-600 font-medium"
                                      : "",
                                    children: [
                                      "預計到貨: ",
                                      a(o.expectedArrivalDate),
                                    ],
                                  }),
                                ],
                              }),
                              n.jsxs("div", {
                                className: "flex items-center",
                                children: [
                                  n.jsx(Ie, {
                                    size: 14,
                                    className: "mr-2 text-gray-400",
                                  }),
                                  n.jsxs("span", {
                                    children: ["數量: ", o.quantityOrdered],
                                  }),
                                ],
                              }),
                              n.jsxs("div", {
                                className: "flex items-center",
                                children: [
                                  n.jsx(Qu, {
                                    size: 14,
                                    className: "mr-2 text-gray-400",
                                  }),
                                  n.jsxs("span", {
                                    children: ["供應商: ", o.supplier],
                                  }),
                                ],
                              }),
                              n.jsxs("div", {
                                className: "text-sm text-gray-500 mt-1",
                                children: ["訂單號: ", o.orderNumber],
                              }),
                            ],
                          }),
                        ],
                      },
                      o.id
                    )
                  ),
          }),
        }),
      ],
    });
  },
  $0 = ({ incomingDrugs: e }) => {
    const [t, r] = j.useState(0);
    j.useEffect(() => {
      if (e.length <= 1) return;
      const c = setInterval(() => {
        r((u) => (u + 1) % e.length);
      }, 6e3);
      return () => clearInterval(c);
    }, [e.length]);
    const s = (c) => {
        switch (c) {
          case "shipped":
            return "bg-blue-100 text-blue-800";
          case "ordered":
            return "bg-yellow-100 text-yellow-800";
          case "delayed":
            return "bg-red-100 text-red-800";
          default:
            return "bg-gray-100 text-gray-800";
        }
      },
      l = (c) => {
        switch (c) {
          case "shipped":
            return "已出貨";
          case "ordered":
            return "已訂購";
          case "delayed":
            return "延遲";
          default:
            return c;
        }
      },
      a = (c) => {
        if (!c) return "未設定";
        try {
          const u = new Date(c.replace(/\//g, "-")),
            d = new Date(),
            m = u.getTime() - d.getTime(),
            p = Math.ceil(m / (1e3 * 60 * 60 * 24)),
            x = u.toLocaleDateString("zh-TW", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            });
          return p < 0
            ? `${x} (逾期 ${Math.abs(p)} 天)`
            : p === 0
            ? `${x} (今天)`
            : p === 1
            ? `${x} (明天)`
            : `${x} (${p} 天後)`;
        } catch {
          return c;
        }
      },
      i = (c) => {
        if (!c) return !1;
        try {
          return new Date(c.replace(/\//g, "-")) < new Date();
        } catch {
          return !1;
        }
      };
    if (e.length === 0)
      return n.jsxs("div", {
        className:
          "bg-white rounded-lg shadow-sm border border-gray-200 h-full flex flex-col",
        children: [
          n.jsx("div", {
            className: "p-2 border-b border-gray-200 bg-green-50",
            children: n.jsxs("div", {
              className: "flex items-center",
              children: [
                n.jsx(Xt, { size: 20, className: "text-green-600 mr-2" }),
                n.jsx("h3", {
                  className: "text-xl font-semibold text-gray-800",
                  children: "未到貨監控",
                }),
              ],
            }),
          }),
          n.jsx("div", {
            className: "flex-1 flex items-center justify-center",
            children: n.jsxs("div", {
              className: "text-center text-gray-500",
              children: [
                n.jsx(Xt, {
                  size: 32,
                  className: "mx-auto text-gray-300 mb-2",
                }),
                n.jsx("p", {
                  className: "text-sm",
                  children: "暫無待到貨品項",
                }),
              ],
            }),
          }),
        ],
      });
    const o = e[t];
    return n.jsxs("div", {
      className:
        "bg-white rounded-xl shadow-lg border border-gray-200 h-full flex flex-col",
      children: [
        n.jsx("div", {
          className: "p-2 border-b border-gray-200 bg-green-50",
          children: n.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              n.jsxs("div", {
                className: "flex items-center",
                children: [
                  n.jsx(Xt, { size: 20, className: "text-green-600 mr-2" }),
                  n.jsx("h3", {
                    className: "text-xl font-semibold text-gray-800",
                    children: "未到貨監控",
                  }),
                ],
              }),
              n.jsxs("span", {
                className: "text-sm text-gray-500 font-medium",
                children: [t + 1, "/", e.length],
              }),
            ],
          }),
        }),
        n.jsx("div", {
          className: "flex-1 p-2",
          children: n.jsxs("div", {
            className: `h-full p-2 border rounded-xl transition-colors ${
              i(o.expectedArrivalDate)
                ? "border-red-200 bg-red-50"
                : o.status === "delayed"
                ? "border-yellow-200 bg-yellow-50"
                : "border-gray-200 bg-white"
            }`,
            children: [
              n.jsxs("div", {
                className: "flex items-start justify-between mb-1",
                children: [
                  n.jsx("h4", {
                    className:
                      "font-bold text-lg text-gray-800 flex-1 leading-tight",
                    children: o.drugName,
                  }),
                  n.jsxs("div", {
                    className: "flex items-center space-x-1 ml-2",
                    children: [
                      i(o.expectedArrivalDate) &&
                        n.jsx(Le, { size: 18, className: "text-red-500" }),
                      n.jsx("span", {
                        className: `px-3 py-1 rounded-full text-base font-bold ${s(
                          o.status
                        )}`,
                        children: l(o.status),
                      }),
                    ],
                  }),
                ],
              }),
              n.jsxs("div", {
                className: "space-y-1 text-base text-gray-600",
                children: [
                  n.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      n.jsx(Xs, {
                        size: 20,
                        className: `mr-3 ${
                          i(o.expectedArrivalDate)
                            ? "text-red-500"
                            : "text-gray-400"
                        }`,
                      }),
                      n.jsxs("span", {
                        className: i(o.expectedArrivalDate)
                          ? "text-red-600 font-medium"
                          : "",
                        children: ["預計到貨: ", a(o.expectedArrivalDate)],
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: "flex justify-between",
                    children: [
                      n.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          n.jsx(Ie, {
                            size: 20,
                            className: "mr-3 text-gray-400",
                          }),
                          n.jsxs("span", {
                            children: ["數量: ", o.quantityOrdered],
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          n.jsx(Qu, {
                            size: 18,
                            className: "mr-3 text-gray-400",
                          }),
                          n.jsxs("span", {
                            children: ["供應商: ", o.supplier],
                          }),
                        ],
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: "text-base text-gray-500 mt-3 pt-3 border-t",
                    children: ["訂單號: ", o.orderNumber],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  Ju = ({
    incomingDrugs: e,
    isFullscreen: t = !1,
    showInFocus: r,
    onFocusToggle: s,
    error: l,
  }) =>
    l != null && l.hasError
      ? t
        ? n.jsx("div", {
            className: "bg-gray-800 rounded-lg p-6 h-full",
            children: n.jsx(ze, { message: l.message || "資料載入失敗" }),
          })
        : n.jsx(ze, { message: l.message || "資料載入失敗" })
      : t
      ? n.jsx($0, { incomingDrugs: e })
      : n.jsx(F0, { incomingDrugs: e, showInFocus: r, onFocusToggle: s }),
  U0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
    const [s, l] = j.useState({ drugName: "", start_time: "", end_time: "" }),
      [a, i] = j.useState([]),
      [o, c] = j.useState([]),
      [u, d] = j.useState(!1),
      [m, p] = j.useState(!1),
      [x, y] = j.useState(!1),
      [N, k] = j.useState(null);
    Pe.useEffect(() => {
      if (e) {
        const I = new Date(),
          v = I.toISOString().slice(0, 16),
          D = new Date(I);
        D.setMonth(D.getMonth() + 1);
        const L = D.toISOString().slice(0, 16);
        l({ drugName: "", start_time: v, end_time: L }),
          c([]),
          d(!1),
          k(null),
          g();
      }
    }, [e]);
    const g = async () => {
        p(!0);
        try {
          const I = await Zs();
          I.Code === 200 && I.Data
            ? i(I.Data)
            : console.warn("Failed to load medicine data:", I);
        } catch (I) {
          console.error("Error loading medicine data:", I);
        } finally {
          p(!1);
        }
      },
      h = (I, v) => {
        l((D) => ({ ...D, [I]: v })), I === "drugName" && f(v);
      },
      f = (I) => {
        if (!I.trim()) {
          c([]), d(!1);
          return;
        }
        const v = a.filter((D) =>
          D.NAME.toLowerCase().includes(I.toLowerCase())
        );
        c(v.slice(0, 10)), d(v.length > 0);
      },
      w = (I) => {
        l((v) => ({ ...v, drugName: I })), d(!1), c([]);
      },
      C = () => {
        if (!s.drugName.trim()) return "請輸入藥品名稱";
        if (!s.start_time) return "請選擇開始時間";
        if (!s.end_time) return "請選擇結束時間";
        const I = new Date(s.start_time);
        return new Date(s.end_time) <= I ? "結束時間必須晚於開始時間" : null;
      },
      z = async () => {
        k(null);
        const I = C();
        if (I) {
          k(I);
          return;
        }
        const v = Rn();
        if (!v) {
          k("無法獲取使用者資訊，請重新登入");
          return;
        }
        y(!0);
        try {
          const D = ($) => $.replace("T", " ") + ":00",
            L = {
              title: "缺貨通知",
              content: s.drugName.trim(),
              priority: "Critical",
              creator_dept: v.Employer || "",
              creator_name: v.Name || "",
              start_time: D(s.start_time),
              end_time: D(s.end_time),
            };
          await d0(L), r(), t();
        } catch (D) {
          k(D instanceof Error ? D.message : "新增缺貨項目失敗，請稍後再試");
        } finally {
          y(!1);
        }
      },
      _ = () => {
        x || t();
      };
    return e
      ? n.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
          children: n.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
            children: [
              n.jsxs("div", {
                className:
                  "flex items-center justify-between p-6 border-b border-gray-200",
                children: [
                  n.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      n.jsx(gt, { size: 24, className: "text-blue-600 mr-3" }),
                      n.jsx("h2", {
                        className: "text-xl font-semibold text-gray-800",
                        children: "新增缺貨項目",
                      }),
                    ],
                  }),
                  n.jsx("button", {
                    onClick: _,
                    disabled: x,
                    className:
                      "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                    children: n.jsx(Ae, { size: 20 }),
                  }),
                ],
              }),
              n.jsxs("div", {
                className: "p-6 space-y-6",
                children: [
                  N &&
                    n.jsxs("div", {
                      className:
                        "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center",
                      children: [
                        n.jsx(Le, {
                          size: 20,
                          className: "mr-2 flex-shrink-0",
                        }),
                        N,
                      ],
                    }),
                  n.jsxs("div", {
                    className: "relative",
                    children: [
                      n.jsxs("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: [
                          "藥品名稱 ",
                          n.jsx("span", {
                            className: "text-red-500",
                            children: "*",
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "relative",
                        children: [
                          n.jsx("div", {
                            className:
                              "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
                            children: n.jsx(Dn, {
                              size: 16,
                              className: "text-gray-400",
                            }),
                          }),
                          n.jsx("input", {
                            type: "text",
                            value: s.drugName,
                            onChange: (I) => h("drugName", I.target.value),
                            onFocus: () => {
                              o.length > 0 && d(!0);
                            },
                            disabled: x || m,
                            className:
                              "w-full pl-10 pr-10 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                            placeholder: "請輸入藥品名稱進行搜尋",
                            autoComplete: "off",
                          }),
                          m &&
                            n.jsx("div", {
                              className:
                                "absolute inset-y-0 right-0 flex items-center pr-3",
                              children: n.jsx(Z, { size: "small" }),
                            }),
                          u &&
                            n.jsx("div", {
                              className:
                                "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",
                              children: n.jsx(En, {
                                size: 16,
                                className: "text-gray-400",
                              }),
                            }),
                        ],
                      }),
                      u &&
                        o.length > 0 &&
                        n.jsx("div", {
                          className:
                            "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                          children: o.map((I, v) =>
                            n.jsx(
                              "button",
                              {
                                type: "button",
                                onClick: () => w(I.NAME),
                                className:
                                  "w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0",
                                children: n.jsx("div", {
                                  className: "font-medium text-gray-900",
                                  children: I.NAME,
                                }),
                              },
                              v
                            )
                          ),
                        }),
                      m &&
                        n.jsxs("div", {
                          className:
                            "mt-2 text-sm text-gray-500 flex items-center",
                          children: [
                            n.jsx(Z, { size: "small", className: "mr-2" }),
                            "載入藥品資料中...",
                          ],
                        }),
                    ],
                  }),
                  u &&
                    n.jsx("div", {
                      className: "fixed inset-0 z-40",
                      onClick: () => d(!1),
                    }),
                  n.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: [
                      n.jsxs("div", {
                        children: [
                          n.jsxs("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: [
                              "開始時間 ",
                              n.jsx("span", {
                                className: "text-red-500",
                                children: "*",
                              }),
                            ],
                          }),
                          n.jsx("input", {
                            type: "datetime-local",
                            value: s.start_time,
                            onChange: (I) => h("start_time", I.target.value),
                            disabled: x,
                            className:
                              "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsxs("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: [
                              "結束時間 ",
                              n.jsx("span", {
                                className: "text-red-500",
                                children: "*",
                              }),
                            ],
                          }),
                          n.jsx("input", {
                            type: "datetime-local",
                            value: s.end_time,
                            onChange: (I) => h("end_time", I.target.value),
                            disabled: x,
                            className:
                              "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              n.jsxs("div", {
                className:
                  "flex items-center justify-end space-x-4 p-6 border-t border-gray-200 bg-gray-50",
                children: [
                  n.jsx("button", {
                    onClick: _,
                    disabled: x,
                    className:
                      "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                    children: "取消",
                  }),
                  n.jsx("button", {
                    onClick: z,
                    disabled: x || !s.drugName.trim(),
                    className:
                      "flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                    children: x
                      ? n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(Z, { size: "small", className: "mr-2" }),
                            "新增中...",
                          ],
                        })
                      : n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(gt, { size: 16, className: "mr-2" }),
                            "新增項目",
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
  q0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
    const [s, l] = j.useState([]),
      [a, i] = j.useState(!1),
      [o, c] = j.useState(null),
      [u, d] = j.useState(null),
      [m, p] = j.useState(!1),
      [x, y] = j.useState(!1),
      [N, k] = j.useState(!1),
      [g, h] = j.useState([]),
      [f, w] = j.useState([]),
      [C, z] = j.useState(!1),
      [_, I] = j.useState(!1);
    j.useEffect(() => {
      e && v();
    }, [e]);
    const v = async () => {
        i(!0), c(null);
        try {
          const E = await u0();
          if (E.Code === 200) l(E.Data || []);
          else throw new Error(E.Result || "載入歷史缺貨項目失敗");
        } catch (E) {
          c(E instanceof Error ? E.message : "載入歷史缺貨項目時發生錯誤");
        } finally {
          i(!1);
        }
      },
      D = async () => {
        I(!0);
        try {
          const E = await Zs();
          E.Code === 200 && E.Data
            ? h(E.Data)
            : console.warn("Failed to load medicine data:", E);
        } catch (E) {
          console.error("Error loading medicine data:", E);
        } finally {
          I(!1);
        }
      },
      L = (E) => {
        const S = (b) => {
          if (!b) return "";
          try {
            const R = b.replace(/\//g, "-");
            return new Date(R).toISOString().slice(0, 16);
          } catch (R) {
            return console.error("Error formatting date for input:", b, R), "";
          }
        };
        d({
          GUID: E.GUID,
          title: E.title || "",
          content: E.content || "",
          priority: E.priority || "Normal",
          creator_dept: E.creator_dept || "",
          creator_name: E.creator_name || "",
          start_time: S(E.start_time),
          end_time: S(E.end_time),
          created_time: E.created_time || "",
        }),
          g.length === 0 && D();
      },
      $ = (E) => {
        if (!E.trim()) {
          w([]), z(!1);
          return;
        }
        const S = g.filter((b) =>
          b.NAME.toLowerCase().includes(E.toLowerCase())
        );
        w(S.slice(0, 10)), z(S.length > 0);
      },
      B = (E) => {
        u && d({ ...u, content: E }), z(!1), w([]);
      },
      se = async () => {
        if (u) {
          p(!0), c(null);
          try {
            const E = (b) =>
                b ? b.replace("T", " ").replace(/-/g, "/") + ":00" : "",
              S = {
                GUID: u.GUID,
                title: u.title.trim(),
                content: u.content.trim(),
                priority: u.priority,
                creator_dept: u.creator_dept,
                creator_name: u.creator_name,
                start_time: E(u.start_time),
                end_time: E(u.end_time),
              };
            await f0(S), await v(), d(null), r && r();
          } catch (E) {
            c(E instanceof Error ? E.message : "更新缺貨項目失敗，請稍後再試");
          } finally {
            p(!1);
          }
        }
      },
      ae = async () => {
        if (u) {
          k(!0), c(null), y(!1);
          try {
            await m0(u.GUID), await v(), d(null), r && r();
          } catch (E) {
            c(E instanceof Error ? E.message : "刪除缺貨項目失敗，請稍後再試");
          } finally {
            k(!1);
          }
        }
      },
      M = (E) => {
        if (!E) return "-";
        try {
          const S = E.replace(/\//g, "-");
          return new Date(S).toLocaleString("zh-TW", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: !1,
          });
        } catch {
          return E;
        }
      },
      X = (E) => {
        switch (E) {
          case "Critical":
            return "緊急";
          case "Important":
            return "重要";
          case "Normal":
            return "一般";
          default:
            return E || "一般";
        }
      },
      P = (E) => {
        switch (E) {
          case "Critical":
            return "bg-red-100 text-red-800";
          case "Important":
            return "bg-yellow-100 text-yellow-800";
          case "Normal":
            return "bg-green-100 text-green-800";
          default:
            return "bg-gray-100 text-gray-800";
        }
      },
      F = () => {
        !a && !m && !N && (d(null), y(!1), t());
      };
    return e
      ? n.jsxs("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
          children: [
            n.jsxs("div", {
              className:
                "bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto",
              children: [
                n.jsxs("div", {
                  className:
                    "flex items-center justify-between p-6 border-b border-gray-200",
                  children: [
                    n.jsxs("div", {
                      className: "flex items-center",
                      children: [
                        n.jsx(pt, {
                          size: 24,
                          className: "text-blue-600 mr-3",
                        }),
                        n.jsx("h2", {
                          className: "text-xl font-semibold text-gray-800",
                          children: "歷史缺貨項目",
                        }),
                      ],
                    }),
                    n.jsx("button", {
                      onClick: F,
                      disabled: a || m,
                      className:
                        "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                      children: n.jsx(Ae, { size: 20 }),
                    }),
                  ],
                }),
                n.jsxs("div", {
                  className: "p-6",
                  children: [
                    o &&
                      n.jsxs("div", {
                        className:
                          "mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center",
                        children: [
                          n.jsx(Le, {
                            size: 20,
                            className: "mr-2 flex-shrink-0",
                          }),
                          o,
                        ],
                      }),
                    a
                      ? n.jsxs("div", {
                          className: "flex items-center justify-center py-12",
                          children: [
                            n.jsx(Z, { size: "large" }),
                            n.jsx("span", {
                              className: "ml-3 text-gray-500",
                              children: "載入歷史缺貨項目中...",
                            }),
                          ],
                        })
                      : s.length === 0
                      ? n.jsxs("div", {
                          className: "text-center text-gray-500 py-12",
                          children: [
                            n.jsx(pt, {
                              size: 48,
                              className: "mx-auto text-gray-300 mb-2",
                            }),
                            n.jsx("p", { children: "暫無歷史缺貨項目" }),
                          ],
                        })
                      : n.jsx("div", {
                          className: "overflow-x-auto",
                          children: n.jsx("div", {
                            className: "max-h-96 overflow-y-auto",
                            children: n.jsxs("table", {
                              className: "min-w-full divide-y divide-gray-200",
                              children: [
                                n.jsx("thead", {
                                  className: "bg-gray-50 sticky top-0 z-10",
                                  children: n.jsxs("tr", {
                                    children: [
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "建立時間",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "藥品名稱",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "重要程度",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "建立人員",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "開始時間",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "結束時間",
                                      }),
                                    ],
                                  }),
                                }),
                                n.jsx("tbody", {
                                  className:
                                    "bg-white divide-y divide-gray-200",
                                  children: s.map((E) =>
                                    n.jsxs(
                                      "tr",
                                      {
                                        className:
                                          "hover:bg-blue-50 cursor-pointer transition-colors",
                                        onClick: () => L(E),
                                        title: "點擊編輯此缺貨項目",
                                        children: [
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: M(E.created_time),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 text-sm text-gray-900 max-w-xs",
                                            children: n.jsx("div", {
                                              className: "truncate",
                                              title: E.content,
                                              children: E.content || "-",
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap",
                                            children: n.jsx("span", {
                                              className: `px-2 py-1 rounded-full text-xs font-medium ${P(
                                                E.priority
                                              )}`,
                                              children: X(E.priority),
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children:
                                              `${E.creator_dept || ""} ${
                                                E.creator_name || ""
                                              }`.trim() || "-",
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: M(E.start_time),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: M(E.end_time),
                                          }),
                                        ],
                                      },
                                      E.GUID
                                    )
                                  ),
                                }),
                              ],
                            }),
                          }),
                        }),
                  ],
                }),
              ],
            }),
            u &&
              n.jsx("div", {
                className:
                  "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4",
                children: n.jsxs("div", {
                  className:
                    "bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
                  children: [
                    n.jsxs("div", {
                      className:
                        "flex items-center justify-between p-6 border-b border-gray-200",
                      children: [
                        n.jsxs("div", {
                          className: "flex items-center",
                          children: [
                            n.jsx(Rr, {
                              size: 24,
                              className: "text-green-600 mr-3",
                            }),
                            n.jsx("h2", {
                              className: "text-xl font-semibold text-gray-800",
                              children: "編輯缺貨項目",
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            n.jsxs("button", {
                              onClick: () => y(!0),
                              disabled: m || N,
                              className:
                                "flex items-center px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                              title: "刪除缺貨項目",
                              children: [
                                n.jsx(ut, { size: 16, className: "mr-2" }),
                                "刪除",
                              ],
                            }),
                            n.jsx("button", {
                              onClick: () => d(null),
                              disabled: m || N,
                              className:
                                "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                              children: n.jsx(Ae, { size: 20 }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      className: "p-6 space-y-6",
                      children: [
                        n.jsxs("div", {
                          className: "relative",
                          children: [
                            n.jsxs("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: [
                                "藥品名稱 ",
                                n.jsx("span", {
                                  className: "text-red-500",
                                  children: "*",
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              className: "relative",
                              children: [
                                n.jsx("div", {
                                  className:
                                    "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
                                  children: n.jsx(Dn, {
                                    size: 16,
                                    className: "text-gray-400",
                                  }),
                                }),
                                n.jsx("input", {
                                  type: "text",
                                  value: u.content,
                                  onChange: (E) => {
                                    d({ ...u, content: E.target.value }),
                                      $(E.target.value);
                                  },
                                  onFocus: () => {
                                    f.length > 0 && z(!0);
                                  },
                                  disabled: m || _,
                                  className:
                                    "w-full pl-10 pr-10 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                  placeholder: "請輸入藥品名稱進行搜尋",
                                  autoComplete: "off",
                                }),
                                _ &&
                                  n.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center pr-3",
                                    children: n.jsx(Z, { size: "small" }),
                                  }),
                                C &&
                                  n.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",
                                    children: n.jsx(En, {
                                      size: 16,
                                      className: "text-gray-400",
                                    }),
                                  }),
                              ],
                            }),
                            C &&
                              f.length > 0 &&
                              n.jsx("div", {
                                className:
                                  "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                                children: f.map((E, S) =>
                                  n.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      onClick: () => B(E.NAME),
                                      className:
                                        "w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0",
                                      children: n.jsx("div", {
                                        className: "font-medium text-gray-900",
                                        children: E.NAME,
                                      }),
                                    },
                                    S
                                  )
                                ),
                              }),
                            _ &&
                              n.jsxs("div", {
                                className:
                                  "mt-2 text-sm text-gray-500 flex items-center",
                                children: [
                                  n.jsx(Z, {
                                    size: "small",
                                    className: "mr-2",
                                  }),
                                  "載入藥品資料中...",
                                ],
                              }),
                          ],
                        }),
                        C &&
                          n.jsx("div", {
                            className: "fixed inset-0 z-40",
                            onClick: () => z(!1),
                          }),
                        n.jsxs("div", {
                          children: [
                            n.jsxs("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: [
                                "重要程度 ",
                                n.jsx("span", {
                                  className: "text-red-500",
                                  children: "*",
                                }),
                              ],
                            }),
                            n.jsxs("select", {
                              value: u.priority,
                              onChange: (E) =>
                                d({ ...u, priority: E.target.value }),
                              disabled: m,
                              className:
                                "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                              children: [
                                n.jsx("option", {
                                  value: "Normal",
                                  children: "一般",
                                }),
                                n.jsx("option", {
                                  value: "Important",
                                  children: "重要",
                                }),
                                n.jsx("option", {
                                  value: "Critical",
                                  children: "緊急",
                                }),
                              ],
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                          children: [
                            n.jsxs("div", {
                              children: [
                                n.jsxs("label", {
                                  className:
                                    "block text-sm font-medium text-gray-700 mb-2",
                                  children: [
                                    "開始時間 ",
                                    n.jsx("span", {
                                      className: "text-red-500",
                                      children: "*",
                                    }),
                                  ],
                                }),
                                n.jsx("input", {
                                  type: "datetime-local",
                                  value: u.start_time,
                                  onChange: (E) =>
                                    d({ ...u, start_time: E.target.value }),
                                  disabled: m,
                                  className:
                                    "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              children: [
                                n.jsxs("label", {
                                  className:
                                    "block text-sm font-medium text-gray-700 mb-2",
                                  children: [
                                    "結束時間 ",
                                    n.jsx("span", {
                                      className: "text-red-500",
                                      children: "*",
                                    }),
                                  ],
                                }),
                                n.jsx("input", {
                                  type: "datetime-local",
                                  value: u.end_time,
                                  onChange: (E) =>
                                    d({ ...u, end_time: E.target.value }),
                                  disabled: m,
                                  className:
                                    "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      className:
                        "flex items-center justify-end space-x-4 p-6 border-t border-gray-200 bg-gray-50",
                      children: [
                        n.jsx("button", {
                          onClick: () => d(null),
                          disabled: m || N,
                          className:
                            "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        n.jsx("button", {
                          onClick: se,
                          disabled: m || N || !u.content.trim(),
                          className:
                            "flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                          children:
                            m || N
                              ? n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Z, {
                                      size: "small",
                                      className: "mr-2",
                                    }),
                                    m ? "更新中..." : "處理中...",
                                  ],
                                })
                              : n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Rr, { size: 16, className: "mr-2" }),
                                    "更新項目",
                                  ],
                                }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            x &&
              u &&
              n.jsx("div", {
                className:
                  "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[110] p-4",
                children: n.jsx("div", {
                  className: "bg-white rounded-lg shadow-xl max-w-md w-full",
                  children: n.jsxs("div", {
                    className: "p-6",
                    children: [
                      n.jsxs("div", {
                        className: "flex items-center mb-4",
                        children: [
                          n.jsx(ut, {
                            size: 24,
                            className: "text-red-600 mr-3",
                          }),
                          n.jsx("h3", {
                            className: "text-lg font-semibold text-gray-800",
                            children: "確認刪除缺貨項目",
                          }),
                        ],
                      }),
                      n.jsxs("p", {
                        className: "text-gray-600 mb-2",
                        children: [
                          "您確定要刪除缺貨項目「",
                          u.content,
                          "」嗎？",
                        ],
                      }),
                      n.jsx("p", {
                        className: "text-sm text-red-600 mb-6",
                        children: "此操作無法復原，請謹慎操作。",
                      }),
                      n.jsxs("div", {
                        className: "flex items-center justify-end space-x-4",
                        children: [
                          n.jsx("button", {
                            onClick: () => y(!1),
                            disabled: N,
                            className:
                              "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                            children: "取消",
                          }),
                          n.jsx("button", {
                            onClick: ae,
                            disabled: N,
                            className:
                              "flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                            children: N
                              ? n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Z, {
                                      size: "small",
                                      className: "mr-2",
                                    }),
                                    "刪除中...",
                                  ],
                                })
                              : n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(ut, { size: 16, className: "mr-2" }),
                                    "確認刪除",
                                  ],
                                }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
          ],
        })
      : null;
  },
  V0 = ({
    outOfStockItems: e,
    onItemAdded: t,
    showInFocus: r = !0,
    onFocusToggle: s,
  }) => {
    const [l, a] = Pe.useState(!1),
      [i, o] = Pe.useState(!1),
      [c, u] = Pe.useState(!1),
      [d, m] = Pe.useState(!1),
      p = (g) =>
        new Date(g).toLocaleDateString("zh-TW", {
          month: "2-digit",
          day: "2-digit",
        }),
      x = (g) => {
        const h = new Date(g);
        if (isNaN(h.getTime()))
          return console.warn("Invalid lastStockDate:", g), 0;
        const f = new Date(),
          w = new Date(h.getFullYear(), h.getMonth(), h.getDate()),
          C = new Date(f.getFullYear(), f.getMonth(), f.getDate()),
          z = C.getTime() - w.getTime(),
          _ = Math.floor(z / (1e3 * 60 * 60 * 24));
        return (
          console.log("Days calculation in OutOfStockList:", {
            lastStockDate: g,
            lastStock: h,
            lastStockDateOnly: w,
            nowDateOnly: C,
            diffDays: _,
          }),
          _
        );
      },
      y = () => {
        t && t();
      },
      N = async () => {
        u(!0);
        try {
          await new Promise((g) => setTimeout(g, 100)), a(!0);
        } catch (g) {
          console.error("Failed to prepare add modal:", g), a(!0);
        } finally {
          u(!1);
        }
      },
      k = () => {
        t && t();
      };
    return n.jsxs(n.Fragment, {
      children: [
        n.jsxs("div", {
          className: "bg-white rounded-lg shadow-sm border border-gray-200",
          children: [
            n.jsxs("div", {
              className: "p-4 border-b border-gray-200",
              children: [
                n.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    n.jsxs("div", {
                      className: "flex items-center",
                      children: [
                        n.jsx(Rs, { size: 20, className: "text-red-600 mr-2" }),
                        n.jsx("h3", {
                          className: "text-lg font-semibold text-gray-800",
                          children: "缺貨清單",
                        }),
                        s &&
                          n.jsxs("div", {
                            className: "ml-4 flex items-center",
                            children: [
                              n.jsxs("label", {
                                className:
                                  "relative inline-flex items-center cursor-pointer",
                                children: [
                                  n.jsx("input", {
                                    type: "checkbox",
                                    className: "sr-only peer",
                                    checked: r,
                                    onChange: (g) => s(g.target.checked),
                                  }),
                                  n.jsx("div", {
                                    className:
                                      "w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600",
                                  }),
                                ],
                              }),
                              n.jsx("span", {
                                className: "ml-2 text-xs text-gray-500",
                                children: "專注顯示",
                              }),
                            ],
                          }),
                      ],
                    }),
                    n.jsxs("div", {
                      className: "flex items-center space-x-2",
                      children: [
                        n.jsx("button", {
                          onClick: () => m(!0),
                          className:
                            "p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                          title: "專注模式設定",
                          children: n.jsx(nr, { size: 18 }),
                        }),
                        n.jsxs("button", {
                          onClick: () => o(!0),
                          className:
                            "flex items-center px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors text-sm",
                          children: [
                            n.jsx(pt, { size: 16, className: "mr-2" }),
                            "查看歷史",
                          ],
                        }),
                        n.jsx("button", {
                          onClick: N,
                          disabled: c,
                          className:
                            "flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed",
                          children: c
                            ? n.jsxs(n.Fragment, {
                                children: [
                                  n.jsx("div", {
                                    className:
                                      "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2",
                                  }),
                                  "載入中...",
                                ],
                              })
                            : n.jsxs(n.Fragment, {
                                children: [
                                  n.jsx(gt, { size: 16, className: "mr-2" }),
                                  "新增項目",
                                ],
                              }),
                        }),
                      ],
                    }),
                  ],
                }),
                n.jsxs("span", {
                  className: "text-sm text-gray-500",
                  children: [e.length, " 項缺貨"],
                }),
              ],
            }),
            n.jsx("div", {
              className: "p-4",
              children: n.jsx("div", {
                className: "space-y-2 max-h-52 overflow-y-auto",
                children:
                  e.length === 0
                    ? n.jsxs("div", {
                        className: "text-center text-gray-500 py-4",
                        children: [
                          n.jsx(Rs, {
                            size: 48,
                            className: "mx-auto text-gray-300 mb-2",
                          }),
                          n.jsx("p", { children: "目前無缺貨品項" }),
                        ],
                      })
                    : e.map((g) => {
                        const h = x(g.lastStockDate),
                          f = h > 3 || g.status === "urgent_order";
                        return n.jsxs(
                          "div",
                          {
                            className: `p-3 border rounded-lg transition-colors ${
                              f
                                ? "border-red-200 bg-red-50"
                                : "border-gray-200 bg-white hover:border-gray-300"
                            }`,
                            children: [
                              n.jsx("div", {
                                className:
                                  "flex items-start justify-between mb-2",
                                children: n.jsx("h4", {
                                  className: "font-medium text-gray-800 flex-1",
                                  children: g.drugName,
                                }),
                              }),
                              n.jsx("div", {
                                className: "space-y-1 text-sm text-gray-600",
                                children: n.jsxs("div", {
                                  className: "flex items-center",
                                  children: [
                                    n.jsx(Ar, {
                                      size: 14,
                                      className: "mr-2 text-gray-400",
                                    }),
                                    n.jsxs("span", {
                                      className:
                                        h > 3 ? "text-red-600 font-medium" : "",
                                      children: [
                                        "缺貨 ",
                                        h,
                                        " 天 (自 ",
                                        p(g.lastStockDate),
                                        ")",
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          },
                          g.id
                        );
                      }),
              }),
            }),
          ],
        }),
        n.jsx(U0, { isOpen: l, onClose: () => a(!1), onSuccess: y }),
        n.jsx(q0, { isOpen: i, onClose: () => o(!1), onSuccess: k }),
        n.jsx(gi, {
          isOpen: d,
          onClose: () => m(!1),
          sectionKey: "outOfStock",
          sectionTitle: "缺貨通知",
        }),
      ],
    });
  },
  H0 = ({ outOfStockItems: e }) => {
    const [t, r] = j.useState(0),
      l = (() => {
        const u = localStorage.getItem("focusTable_outOfStock_itemsPerPage");
        return u ? parseInt(u, 10) : 5;
      })();
    j.useEffect(() => {
      if (e.length <= l) return;
      const u = setInterval(() => {
        r((d) => {
          const m = d + l;
          return m >= e.length ? 0 : m;
        });
      }, 8e3);
      return () => clearInterval(u);
    }, [e.length, l]);
    const a = (u) => {
        if (!u) return 0;
        try {
          const d = new Date(u),
            m = new Date(),
            p = new Date(d.getFullYear(), d.getMonth(), d.getDate()),
            y =
              new Date(m.getFullYear(), m.getMonth(), m.getDate()).getTime() -
              p.getTime(),
            N = Math.floor(y / (1e3 * 60 * 60 * 24));
          return Math.max(0, N);
        } catch (d) {
          return console.error("日期解析錯誤:", d, "原始日期:", u), 0;
        }
      },
      i = e.slice(t, t + l),
      o = Math.ceil(e.length / l),
      c = Math.floor(t / l) + 1;
    return n.jsxs("div", {
      className:
        "bg-white rounded-xl shadow-lg border border-gray-200 h-full flex flex-col min-h-0 max-h-full",
      children: [
        n.jsxs("div", {
          className: "p-2 border-b border-gray-200 bg-red-50 flex-shrink-0",
          children: [
            n.jsxs("div", {
              className: "flex items-center justify-between mb-2",
              children: [
                n.jsxs("h3", {
                  className:
                    "text-xl font-semibold text-gray-800 flex items-center",
                  children: [
                    n.jsx(Rs, { size: 20, className: "mr-2 text-red-500" }),
                    "缺貨通知",
                  ],
                }),
                n.jsxs("div", {
                  className: "text-sm text-gray-600",
                  children: ["總計: ", e.length, " 項"],
                }),
              ],
            }),
            e.length > l &&
              n.jsxs("div", {
                className:
                  "flex items-center justify-between text-sm text-gray-600",
                children: [
                  n.jsxs("span", { children: ["第 ", c, " / ", o, " 頁"] }),
                  n.jsx("div", {
                    className: "flex space-x-1",
                    children: Array.from({ length: o }, (u, d) =>
                      n.jsx(
                        "div",
                        {
                          className: `w-2 h-2 rounded-full ${
                            d === c - 1 ? "bg-red-500" : "bg-gray-300"
                          }`,
                        },
                        d
                      )
                    ),
                  }),
                ],
              }),
          ],
        }),
        n.jsx("div", {
          className: "flex-1 min-h-0 overflow-hidden",
          children:
            e.length === 0
              ? n.jsx("div", {
                  className:
                    "flex items-center justify-center h-full text-gray-500",
                  children: n.jsxs("div", {
                    className: "text-center",
                    children: [
                      n.jsx(Ie, {
                        size: 32,
                        className: "mx-auto mb-2 text-gray-400",
                      }),
                      n.jsx("p", {
                        className: "text-sm",
                        children: "暫無缺貨項目",
                      }),
                    ],
                  }),
                })
              : n.jsx("div", {
                  className: "h-full overflow-auto",
                  children: n.jsxs("table", {
                    className: "w-full border-collapse",
                    children: [
                      n.jsx("thead", {
                        className:
                          "sticky top-0 bg-gray-50 border-b-2 border-gray-200",
                        children: n.jsxs("tr", {
                          children: [
                            n.jsx("th", {
                              className:
                                "text-base font-semibold text-left p-2 text-gray-700",
                              children: "藥品名稱",
                            }),
                            n.jsx("th", {
                              className:
                                "text-base font-semibold text-center p-2 text-gray-700",
                              children: "缺貨天數",
                            }),
                            n.jsx("th", {
                              className:
                                "text-base font-semibold text-center p-2 text-gray-700",
                              children: "庫存/最低",
                            }),
                          ],
                        }),
                      }),
                      n.jsx("tbody", {
                        children: i.map((u, d) => {
                          const m = a(u.lastStockDate),
                            p = m > 3 || u.status === "urgent_order";
                          return n.jsxs(
                            "tr",
                            {
                              className: `border-b border-gray-200 transition-colors ${
                                p ? "bg-red-50" : "bg-white hover:bg-gray-50"
                              }`,
                              children: [
                                n.jsx("td", {
                                  className: "text-base p-2 text-gray-800",
                                  children: n.jsx("div", {
                                    className: "font-semibold",
                                    children: u.drugName,
                                  }),
                                }),
                                n.jsx("td", {
                                  className: "text-base p-2 text-center",
                                  children: n.jsxs("span", {
                                    className: `font-semibold ${
                                      m > 3 ? "text-red-600" : "text-gray-700"
                                    }`,
                                    children: [m, " 天"],
                                  }),
                                }),
                                n.jsx("td", {
                                  className:
                                    "text-base p-2 text-center text-gray-700",
                                  children:
                                    u.currentStock !== void 0 &&
                                    u.minimumStock !== void 0
                                      ? `${u.currentStock} / ${u.minimumStock}`
                                      : "-",
                                }),
                              ],
                            },
                            `${t}-${d}`
                          );
                        }),
                      }),
                    ],
                  }),
                }),
        }),
      ],
    });
  },
  Zu = ({
    outOfStockItems: e,
    isFullscreen: t = !1,
    onItemAdded: r,
    showInFocus: s,
    onFocusToggle: l,
    error: a,
  }) =>
    a != null && a.hasError
      ? t
        ? n.jsx("div", {
            className: "bg-gray-800 rounded-lg p-6 h-full",
            children: n.jsx(ze, { message: a.message || "資料載入失敗" }),
          })
        : n.jsx(ze, { message: a.message || "資料載入失敗" })
      : t
      ? n.jsx(H0, { outOfStockItems: e })
      : n.jsx(V0, {
          outOfStockItems: e,
          onItemAdded: r,
          showInFocus: s,
          onFocusToggle: l,
        }),
  B0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
    const [s, l] = j.useState({
        originalDrug: null,
        reason: "",
        start_time: "",
        end_time: "",
      }),
      [a, i] = j.useState([]),
      [o, c] = j.useState([]),
      [u, d] = j.useState(""),
      [m, p] = j.useState(!1),
      [x, y] = j.useState(!1),
      [N, k] = j.useState(!1),
      [g, h] = j.useState(null);
    Pe.useEffect(() => {
      if (e) {
        const D = new Date(),
          L = D.toISOString().slice(0, 16),
          $ = new Date(D);
        $.setMonth($.getMonth() + 1);
        const B = $.toISOString().slice(0, 16);
        l({ originalDrug: null, reason: "", start_time: L, end_time: B }),
          d(""),
          c([]),
          p(!1),
          h(null),
          f();
      }
    }, [e]);
    const f = async () => {
        y(!0);
        try {
          const D = await Zs();
          D.Code === 200 && D.Data
            ? i(D.Data)
            : console.warn("Failed to load medicine data:", D);
        } catch (D) {
          console.error("Error loading medicine data:", D);
        } finally {
          y(!1);
        }
      },
      w = (D, L) => {
        l(($) => ({ ...$, [D]: L }));
      },
      C = (D) => {
        if ((d(D), !D.trim())) {
          c([]), p(!1);
          return;
        }
        const L = D.toLowerCase(),
          $ = a.filter((B) => {
            const se = (B.NAME || "").toLowerCase(),
              ae = (B.CODE || "").toLowerCase(),
              M = (B.SKDIACODE || "").toLowerCase(),
              X = (B.CHT_NAME || "").toLowerCase();
            return (
              se.includes(L) || ae.includes(L) || M.includes(L) || X.includes(L)
            );
          });
        c($.slice(0, 10)), p($.length > 0);
      },
      z = (D) => {
        l((L) => ({ ...L, originalDrug: D })), d(D.NAME), p(!1), c([]);
      },
      _ = () => {
        if (!s.originalDrug) return "請選擇藥品";
        if (!s.reason.trim()) return "請輸入替換原因";
        if (!s.start_time) return "請選擇開始時間";
        if (!s.end_time) return "請選擇結束時間";
        const D = new Date(s.start_time);
        return new Date(s.end_time) <= D ? "結束時間必須晚於開始時間" : null;
      },
      I = async () => {
        h(null);
        const D = _();
        if (D) {
          h(D);
          return;
        }
        const L = Rn();
        if (!L) {
          h("無法獲取使用者資訊，請重新登入");
          return;
        }
        k(!0);
        try {
          const $ = (se) => se.replace("T", " ") + ":00",
            B = {
              title: "藥品通知",
              content: `${s.originalDrug.NAME.trim()};${s.originalDrug.CODE.trim()}`,
              note: s.reason.trim(),
              priority: "Important",
              creator_dept: L.Employer || "",
              creator_name: L.Name || "",
              start_time: $(s.start_time),
              end_time: $(s.end_time),
            };
          await a0(B), t(), r();
        } catch ($) {
          h(
            $ instanceof Error ? $.message : "新增藥品通知項目失敗，請稍後再試"
          );
        } finally {
          k(!1);
        }
      },
      v = () => {
        N || t();
      };
    return e
      ? n.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
          children: n.jsxs("div", {
            className:
              "bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
            children: [
              n.jsxs("div", {
                className:
                  "flex items-center justify-between p-6 border-b border-gray-200",
                children: [
                  n.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      n.jsx(gt, { size: 24, className: "text-blue-600 mr-3" }),
                      n.jsx("h2", {
                        className: "text-xl font-semibold text-gray-800",
                        children: "新增藥品通知",
                      }),
                    ],
                  }),
                  n.jsx("button", {
                    onClick: v,
                    disabled: N,
                    className:
                      "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                    children: n.jsx(Ae, { size: 20 }),
                  }),
                ],
              }),
              n.jsxs("div", {
                className: "p-6 space-y-6",
                children: [
                  g &&
                    n.jsxs("div", {
                      className:
                        "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center",
                      children: [
                        n.jsx(Le, {
                          size: 20,
                          className: "mr-2 flex-shrink-0",
                        }),
                        g,
                      ],
                    }),
                  n.jsxs("div", {
                    className: "relative",
                    children: [
                      n.jsxs("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: [
                          "藥品名稱 ",
                          n.jsx("span", {
                            className: "text-red-500",
                            children: "*",
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "relative",
                        children: [
                          n.jsx("div", {
                            className:
                              "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
                            children: n.jsx(Dn, {
                              size: 16,
                              className: "text-gray-400",
                            }),
                          }),
                          n.jsx("input", {
                            type: "text",
                            value: u,
                            onChange: (D) => C(D.target.value),
                            onFocus: () => {
                              o.length > 0 && p(!0);
                            },
                            disabled: N || x,
                            className:
                              "w-full pl-10 pr-10 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                            placeholder: "請輸入藥品名稱進行搜尋",
                            autoComplete: "off",
                          }),
                          x &&
                            n.jsx("div", {
                              className:
                                "absolute inset-y-0 right-0 flex items-center pr-3",
                              children: n.jsx(Z, { size: "small" }),
                            }),
                          m &&
                            n.jsx("div", {
                              className:
                                "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",
                              children: n.jsx(En, {
                                size: 16,
                                className: "text-gray-400",
                              }),
                            }),
                        ],
                      }),
                      m &&
                        o.length > 0 &&
                        n.jsx("div", {
                          className:
                            "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                          children: o.map((D, L) =>
                            n.jsxs(
                              "button",
                              {
                                type: "button",
                                onClick: () => z(D),
                                className:
                                  "w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0",
                                children: [
                                  n.jsx("div", {
                                    className: "font-medium text-gray-900",
                                    children: D.NAME,
                                  }),
                                  n.jsxs("div", {
                                    className:
                                      "text-sm text-gray-500 space-y-0.5",
                                    children: [
                                      n.jsxs("div", {
                                        children: ["藥碼: ", D.CODE],
                                      }),
                                      D.SKDIACODE &&
                                        n.jsxs("div", {
                                          children: ["料號: ", D.SKDIACODE],
                                        }),
                                      D.CHT_NAME &&
                                        n.jsxs("div", {
                                          children: ["中文名: ", D.CHT_NAME],
                                        }),
                                    ],
                                  }),
                                ],
                              },
                              L
                            )
                          ),
                        }),
                    ],
                  }),
                  m &&
                    n.jsx("div", {
                      className: "fixed inset-0 z-40",
                      onClick: () => p(!1),
                    }),
                  n.jsxs("div", {
                    children: [
                      n.jsxs("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: [
                          "替換原因 ",
                          n.jsx("span", {
                            className: "text-red-500",
                            children: "*",
                          }),
                        ],
                      }),
                      n.jsx("textarea", {
                        value: s.reason,
                        onChange: (D) => w("reason", D.target.value),
                        disabled: N,
                        rows: 4,
                        className:
                          "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical disabled:opacity-50 disabled:bg-gray-100",
                        placeholder: "請輸入替換原因",
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: [
                      n.jsxs("div", {
                        children: [
                          n.jsxs("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: [
                              "開始時間 ",
                              n.jsx("span", {
                                className: "text-red-500",
                                children: "*",
                              }),
                            ],
                          }),
                          n.jsx("input", {
                            type: "datetime-local",
                            value: s.start_time,
                            onChange: (D) => w("start_time", D.target.value),
                            disabled: N,
                            className:
                              "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsxs("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-2",
                            children: [
                              "結束時間 ",
                              n.jsx("span", {
                                className: "text-red-500",
                                children: "*",
                              }),
                            ],
                          }),
                          n.jsx("input", {
                            type: "datetime-local",
                            value: s.end_time,
                            onChange: (D) => w("end_time", D.target.value),
                            disabled: N,
                            className:
                              "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                          }),
                        ],
                      }),
                    ],
                  }),
                  x &&
                    n.jsxs("div", {
                      className: "text-sm text-gray-500 flex items-center",
                      children: [
                        n.jsx(Z, { size: "small", className: "mr-2" }),
                        "載入藥品資料中...",
                      ],
                    }),
                ],
              }),
              n.jsxs("div", {
                className:
                  "flex items-center justify-end space-x-4 p-6 border-t border-gray-200 bg-gray-50",
                children: [
                  n.jsx("button", {
                    onClick: v,
                    disabled: N,
                    className:
                      "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                    children: "取消",
                  }),
                  n.jsx("button", {
                    onClick: I,
                    disabled: N || !s.originalDrug || !s.reason.trim(),
                    className:
                      "flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                    children: N
                      ? n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(Z, { size: "small", className: "mr-2" }),
                            "新增中...",
                          ],
                        })
                      : n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(gt, { size: 16, className: "mr-2" }),
                            "新增項目",
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
  Q0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
    const [s, l] = j.useState([]),
      [a, i] = j.useState(!1),
      [o, c] = j.useState(null),
      [u, d] = j.useState(null),
      [m, p] = j.useState(!1),
      [x, y] = j.useState(!1),
      [N, k] = j.useState(!1),
      [g, h] = j.useState([]),
      [f, w] = j.useState([]),
      [C, z] = j.useState(null),
      [_, I] = j.useState(!1);
    j.useEffect(() => {
      e && v();
    }, [e]);
    const v = async () => {
        i(!0), c(null);
        try {
          const b = await l0();
          if (b.Code === 200) l(b.Data || []);
          else throw new Error(b.Result || "載入歷史藥品通知項目失敗");
        } catch (b) {
          c(b instanceof Error ? b.message : "載入歷史藥品通知項目時發生錯誤");
        } finally {
          i(!1);
        }
      },
      D = async () => {
        I(!0);
        try {
          const b = await Zs();
          b.Code === 200 && b.Data
            ? h(b.Data)
            : console.warn("Failed to load medicine data:", b);
        } catch (b) {
          console.error("Error loading medicine data:", b);
        } finally {
          I(!1);
        }
      },
      L = (b) => {
        const R = (A) => {
          if (!A) return "";
          try {
            const U = A.replace(/\//g, "-");
            return new Date(U).toISOString().slice(0, 16);
          } catch (U) {
            return console.error("Error formatting date for input:", A, U), "";
          }
        };
        d({
          GUID: b.GUID,
          title: b.title || "",
          content: b.content || "",
          note: b.note || "",
          priority: b.priority || "Normal",
          creator_dept: b.creator_dept || "",
          creator_name: b.creator_name || "",
          start_time: R(b.start_time),
          end_time: R(b.end_time),
          created_time: b.created_time || "",
        }),
          g.length === 0 && D();
      },
      $ = (b, R) => {
        if (!b.trim()) {
          w([]), z(null);
          return;
        }
        const A = g.filter((U) =>
          U.NAME.toLowerCase().includes(b.toLowerCase())
        );
        w(A.slice(0, 10)), z(A.length > 0 ? R : null);
      },
      B = (b, R) => {
        if (u) {
          const A = u.content.split(";");
          let U = "";
          R === "original"
            ? (U = `${b};${A[1] || ""}`)
            : (U = `${A[0] || ""};${b}`),
            d({ ...u, content: U });
        }
        z(null), w([]);
      },
      se = (b) => {
        var R;
        return ((R = b.split(";")[0]) == null ? void 0 : R.trim()) || "";
      },
      ae = (b) => {
        var R;
        return ((R = b.split(";")[1]) == null ? void 0 : R.trim()) || "";
      },
      M = async () => {
        if (u) {
          p(!0), c(null);
          try {
            const b = (A) =>
                A ? A.replace("T", " ").replace(/-/g, "/") + ":00" : "",
              R = {
                GUID: u.GUID,
                title: u.title.trim(),
                content: u.content.trim(),
                note: u.note.trim(),
                priority: u.priority,
                creator_dept: u.creator_dept,
                creator_name: u.creator_name,
                start_time: b(u.start_time),
                end_time: b(u.end_time),
              };
            await i0(R), await v(), d(null), r && r();
          } catch (b) {
            c(
              b instanceof Error
                ? b.message
                : "更新藥品通知項目失敗，請稍後再試"
            );
          } finally {
            p(!1);
          }
        }
      },
      X = async () => {
        if (u) {
          k(!0), c(null), y(!1);
          try {
            await o0(u.GUID), await v(), d(null), r && r();
          } catch (b) {
            c(
              b instanceof Error
                ? b.message
                : "刪除藥品通知項目失敗，請稍後再試"
            );
          } finally {
            k(!1);
          }
        }
      },
      P = (b) => {
        if (!b) return "-";
        try {
          const R = b.replace(/\//g, "-");
          return new Date(R).toLocaleString("zh-TW", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: !1,
          });
        } catch {
          return b;
        }
      },
      F = (b) => {
        switch (b) {
          case "Critical":
            return "緊急";
          case "Important":
            return "重要";
          case "Normal":
            return "一般";
          default:
            return b || "一般";
        }
      },
      E = (b) => {
        switch (b) {
          case "Critical":
            return "bg-red-100 text-red-800";
          case "Important":
            return "bg-yellow-100 text-yellow-800";
          case "Normal":
            return "bg-green-100 text-green-800";
          default:
            return "bg-gray-100 text-gray-800";
        }
      },
      S = () => {
        !a && !m && !N && (d(null), y(!1), t());
      };
    return e
      ? n.jsxs("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
          children: [
            n.jsxs("div", {
              className:
                "bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto",
              children: [
                n.jsxs("div", {
                  className:
                    "flex items-center justify-between p-6 border-b border-gray-200",
                  children: [
                    n.jsxs("div", {
                      className: "flex items-center",
                      children: [
                        n.jsx(pt, {
                          size: 24,
                          className: "text-blue-600 mr-3",
                        }),
                        n.jsx("h2", {
                          className: "text-xl font-semibold text-gray-800",
                          children: "歷史藥品通知",
                        }),
                      ],
                    }),
                    n.jsx("button", {
                      onClick: S,
                      disabled: a || m,
                      className:
                        "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                      children: n.jsx(Ae, { size: 20 }),
                    }),
                  ],
                }),
                n.jsxs("div", {
                  className: "p-6",
                  children: [
                    o &&
                      n.jsxs("div", {
                        className:
                          "mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center",
                        children: [
                          n.jsx(Le, {
                            size: 20,
                            className: "mr-2 flex-shrink-0",
                          }),
                          o,
                        ],
                      }),
                    a
                      ? n.jsxs("div", {
                          className: "flex items-center justify-center py-12",
                          children: [
                            n.jsx(Z, { size: "large" }),
                            n.jsx("span", {
                              className: "ml-3 text-gray-500",
                              children: "載入歷史藥品通知中...",
                            }),
                          ],
                        })
                      : s.length === 0
                      ? n.jsxs("div", {
                          className: "text-center text-gray-500 py-12",
                          children: [
                            n.jsx(pt, {
                              size: 48,
                              className: "mx-auto text-gray-300 mb-2",
                            }),
                            n.jsx("p", { children: "暫無歷史藥品通知項目" }),
                          ],
                        })
                      : n.jsx("div", {
                          className: "overflow-x-auto",
                          children: n.jsx("div", {
                            className: "max-h-96 overflow-y-auto",
                            children: n.jsxs("table", {
                              className: "min-w-full divide-y divide-gray-200",
                              children: [
                                n.jsx("thead", {
                                  className: "bg-gray-50 sticky top-0 z-10",
                                  children: n.jsxs("tr", {
                                    children: [
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "建立時間",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "藥名",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "藥碼",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "替換原因",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "重要程度",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "建立人員",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "開始時間",
                                      }),
                                      n.jsx("th", {
                                        className:
                                          "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "結束時間",
                                      }),
                                    ],
                                  }),
                                }),
                                n.jsx("tbody", {
                                  className:
                                    "bg-white divide-y divide-gray-200",
                                  children: s.map((b) =>
                                    n.jsxs(
                                      "tr",
                                      {
                                        className:
                                          "hover:bg-blue-50 cursor-pointer transition-colors",
                                        onClick: () => L(b),
                                        title: "點擊編輯此藥品通知項目",
                                        children: [
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: P(b.created_time),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 text-sm text-gray-900 max-w-xs",
                                            children: n.jsx("div", {
                                              className: "truncate",
                                              title: se(b.content),
                                              children: se(b.content) || "-",
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 text-sm text-gray-900 max-w-xs",
                                            children: n.jsx("div", {
                                              className: "truncate",
                                              title: ae(b.content),
                                              children: ae(b.content) || "-",
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 text-sm text-gray-900 max-w-md",
                                            children: n.jsx("div", {
                                              className: "truncate",
                                              title: b.note,
                                              children: b.note || "-",
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap",
                                            children: n.jsx("span", {
                                              className: `px-2 py-1 rounded-full text-xs font-medium ${E(
                                                b.priority
                                              )}`,
                                              children: F(b.priority),
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children:
                                              `${b.creator_dept || ""} ${
                                                b.creator_name || ""
                                              }`.trim() || "-",
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: P(b.start_time),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: P(b.end_time),
                                          }),
                                        ],
                                      },
                                      b.GUID
                                    )
                                  ),
                                }),
                              ],
                            }),
                          }),
                        }),
                  ],
                }),
              ],
            }),
            u &&
              n.jsx("div", {
                className:
                  "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100] p-4",
                children: n.jsxs("div", {
                  className:
                    "bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
                  children: [
                    n.jsxs("div", {
                      className:
                        "flex items-center justify-between p-6 border-b border-gray-200",
                      children: [
                        n.jsxs("div", {
                          className: "flex items-center",
                          children: [
                            n.jsx(Rr, {
                              size: 24,
                              className: "text-green-600 mr-3",
                            }),
                            n.jsx("h2", {
                              className: "text-xl font-semibold text-gray-800",
                              children: "編輯藥品通知",
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            n.jsxs("button", {
                              onClick: () => y(!0),
                              disabled: m || N,
                              className:
                                "flex items-center px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                              title: "刪除藥品通知項目",
                              children: [
                                n.jsx(ut, { size: 16, className: "mr-2" }),
                                "刪除",
                              ],
                            }),
                            n.jsx("button", {
                              onClick: () => d(null),
                              disabled: m || N,
                              className:
                                "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                              children: n.jsx(Ae, { size: 20 }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      className: "p-6 space-y-6",
                      children: [
                        n.jsxs("div", {
                          className: "relative",
                          children: [
                            n.jsxs("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: [
                                "原藥品名稱 ",
                                n.jsx("span", {
                                  className: "text-red-500",
                                  children: "*",
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              className: "relative",
                              children: [
                                n.jsx("div", {
                                  className:
                                    "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
                                  children: n.jsx(Dn, {
                                    size: 16,
                                    className: "text-gray-400",
                                  }),
                                }),
                                n.jsx("input", {
                                  type: "text",
                                  value: se(u.content),
                                  onChange: (b) => {
                                    const R = `${b.target.value};${ae(
                                      u.content
                                    )}`;
                                    d({ ...u, content: R }),
                                      $(b.target.value, "original");
                                  },
                                  onFocus: () => {
                                    f.length > 0 && z("original");
                                  },
                                  disabled: m || _,
                                  className:
                                    "w-full pl-10 pr-10 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                  placeholder: "請輸入原藥品名稱進行搜尋",
                                  autoComplete: "off",
                                }),
                                _ &&
                                  n.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center pr-3",
                                    children: n.jsx(Z, { size: "small" }),
                                  }),
                                C === "original" &&
                                  n.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",
                                    children: n.jsx(En, {
                                      size: 16,
                                      className: "text-gray-400",
                                    }),
                                  }),
                              ],
                            }),
                            C === "original" &&
                              f.length > 0 &&
                              n.jsx("div", {
                                className:
                                  "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                                children: f.map((b, R) =>
                                  n.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      onClick: () => B(b.NAME, "original"),
                                      className:
                                        "w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0",
                                      children: n.jsx("div", {
                                        className: "font-medium text-gray-900",
                                        children: b.NAME,
                                      }),
                                    },
                                    R
                                  )
                                ),
                              }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "relative",
                          children: [
                            n.jsxs("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: [
                                "替換藥品名稱 ",
                                n.jsx("span", {
                                  className: "text-red-500",
                                  children: "*",
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              className: "relative",
                              children: [
                                n.jsx("div", {
                                  className:
                                    "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
                                  children: n.jsx(Dn, {
                                    size: 16,
                                    className: "text-gray-400",
                                  }),
                                }),
                                n.jsx("input", {
                                  type: "text",
                                  value: ae(u.content),
                                  onChange: (b) => {
                                    const R = `${se(u.content)};${
                                      b.target.value
                                    }`;
                                    d({ ...u, content: R }),
                                      $(b.target.value, "replacement");
                                  },
                                  onFocus: () => {
                                    f.length > 0 && z("replacement");
                                  },
                                  disabled: m || _,
                                  className:
                                    "w-full pl-10 pr-10 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                  placeholder: "請輸入替換藥品名稱進行搜尋",
                                  autoComplete: "off",
                                }),
                                _ &&
                                  n.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center pr-3",
                                    children: n.jsx(Z, { size: "small" }),
                                  }),
                                C === "replacement" &&
                                  n.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",
                                    children: n.jsx(En, {
                                      size: 16,
                                      className: "text-gray-400",
                                    }),
                                  }),
                              ],
                            }),
                            C === "replacement" &&
                              f.length > 0 &&
                              n.jsx("div", {
                                className:
                                  "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                                children: f.map((b, R) =>
                                  n.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      onClick: () => B(b.NAME, "replacement"),
                                      className:
                                        "w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0",
                                      children: n.jsx("div", {
                                        className: "font-medium text-gray-900",
                                        children: b.NAME,
                                      }),
                                    },
                                    R
                                  )
                                ),
                              }),
                          ],
                        }),
                        C &&
                          n.jsx("div", {
                            className: "fixed inset-0 z-40",
                            onClick: () => z(null),
                          }),
                        n.jsxs("div", {
                          children: [
                            n.jsxs("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: [
                                "替換原因 ",
                                n.jsx("span", {
                                  className: "text-red-500",
                                  children: "*",
                                }),
                              ],
                            }),
                            n.jsx("textarea", {
                              value: u.note,
                              onChange: (b) =>
                                d({ ...u, note: b.target.value }),
                              disabled: m,
                              rows: 4,
                              className:
                                "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical disabled:opacity-50 disabled:bg-gray-100",
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          children: [
                            n.jsxs("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: [
                                "重要程度 ",
                                n.jsx("span", {
                                  className: "text-red-500",
                                  children: "*",
                                }),
                              ],
                            }),
                            n.jsxs("select", {
                              value: u.priority,
                              onChange: (b) =>
                                d({ ...u, priority: b.target.value }),
                              disabled: m,
                              className:
                                "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                              children: [
                                n.jsx("option", {
                                  value: "Normal",
                                  children: "一般",
                                }),
                                n.jsx("option", {
                                  value: "Important",
                                  children: "重要",
                                }),
                                n.jsx("option", {
                                  value: "Critical",
                                  children: "緊急",
                                }),
                              ],
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                          children: [
                            n.jsxs("div", {
                              children: [
                                n.jsxs("label", {
                                  className:
                                    "block text-sm font-medium text-gray-700 mb-2",
                                  children: [
                                    "開始時間 ",
                                    n.jsx("span", {
                                      className: "text-red-500",
                                      children: "*",
                                    }),
                                  ],
                                }),
                                n.jsx("input", {
                                  type: "datetime-local",
                                  value: u.start_time,
                                  onChange: (b) =>
                                    d({ ...u, start_time: b.target.value }),
                                  disabled: m,
                                  className:
                                    "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              children: [
                                n.jsxs("label", {
                                  className:
                                    "block text-sm font-medium text-gray-700 mb-2",
                                  children: [
                                    "結束時間 ",
                                    n.jsx("span", {
                                      className: "text-red-500",
                                      children: "*",
                                    }),
                                  ],
                                }),
                                n.jsx("input", {
                                  type: "datetime-local",
                                  value: u.end_time,
                                  onChange: (b) =>
                                    d({ ...u, end_time: b.target.value }),
                                  disabled: m,
                                  className:
                                    "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                }),
                              ],
                            }),
                          ],
                        }),
                        _ &&
                          n.jsxs("div", {
                            className:
                              "text-sm text-gray-500 flex items-center",
                            children: [
                              n.jsx(Z, { size: "small", className: "mr-2" }),
                              "載入藥品資料中...",
                            ],
                          }),
                      ],
                    }),
                    n.jsxs("div", {
                      className:
                        "flex items-center justify-end space-x-4 p-6 border-t border-gray-200 bg-gray-50",
                      children: [
                        n.jsx("button", {
                          onClick: () => d(null),
                          disabled: m || N,
                          className:
                            "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        n.jsx("button", {
                          onClick: M,
                          disabled:
                            m || N || !u.content.trim() || !u.note.trim(),
                          className:
                            "flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                          children:
                            m || N
                              ? n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Z, {
                                      size: "small",
                                      className: "mr-2",
                                    }),
                                    m ? "更新中..." : "處理中...",
                                  ],
                                })
                              : n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Rr, { size: 16, className: "mr-2" }),
                                    "更新項目",
                                  ],
                                }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            x &&
              u &&
              n.jsx("div", {
                className:
                  "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[110] p-4",
                children: n.jsx("div", {
                  className: "bg-white rounded-lg shadow-xl max-w-md w-full",
                  children: n.jsxs("div", {
                    className: "p-6",
                    children: [
                      n.jsxs("div", {
                        className: "flex items-center mb-4",
                        children: [
                          n.jsx(ut, {
                            size: 24,
                            className: "text-red-600 mr-3",
                          }),
                          n.jsx("h3", {
                            className: "text-lg font-semibold text-gray-800",
                            children: "確認刪除藥品通知項目",
                          }),
                        ],
                      }),
                      n.jsxs("p", {
                        className: "text-gray-600 mb-2",
                        children: [
                          "您確定要刪除藥品通知項目「",
                          se(u.content),
                          " → ",
                          ae(u.content),
                          "」嗎？",
                        ],
                      }),
                      n.jsx("p", {
                        className: "text-sm text-red-600 mb-6",
                        children: "此操作無法復原，請謹慎操作。",
                      }),
                      n.jsxs("div", {
                        className: "flex items-center justify-end space-x-4",
                        children: [
                          n.jsx("button", {
                            onClick: () => y(!1),
                            disabled: N,
                            className:
                              "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                            children: "取消",
                          }),
                          n.jsx("button", {
                            onClick: X,
                            disabled: N,
                            className:
                              "flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                            children: N
                              ? n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Z, {
                                      size: "small",
                                      className: "mr-2",
                                    }),
                                    "刪除中...",
                                  ],
                                })
                              : n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(ut, { size: 16, className: "mr-2" }),
                                    "確認刪除",
                                  ],
                                }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
          ],
        })
      : null;
  },
  W0 = ({
    drugReplacements: e,
    onItemAdded: t,
    showInFocus: r = !0,
    onFocusToggle: s,
  }) => {
    const [l, a] = Pe.useState(!1),
      [i, o] = Pe.useState(!1),
      c = (p) => {
        switch (p) {
          case "high":
            return "border-red-200 bg-red-50";
          case "medium":
            return "border-yellow-200 bg-yellow-50";
          case "low":
            return "border-green-200 bg-green-50";
          default:
            return "border-gray-200 bg-white";
        }
      },
      u = (p) => {
        const x = new Date(p),
          y = new Date();
        return (
          x.getTime() - y.getTime(),
          x.toLocaleDateString("zh-TW", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
        );
      },
      d = () => {
        t && t();
      },
      m = () => {
        t && t();
      };
    return n.jsxs(n.Fragment, {
      children: [
        n.jsxs("div", {
          className: "bg-white rounded-lg shadow-sm border border-gray-200",
          children: [
            n.jsxs("div", {
              className: "p-4 border-b border-gray-200",
              children: [
                n.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    n.jsxs("div", {
                      className: "flex items-center",
                      children: [
                        n.jsx(Cr, {
                          size: 20,
                          className: "text-purple-600 mr-2",
                        }),
                        n.jsx("h3", {
                          className: "text-lg font-semibold text-gray-800",
                          children: "藥品通知",
                        }),
                        s &&
                          n.jsxs("div", {
                            className: "ml-4 flex items-center",
                            children: [
                              n.jsxs("label", {
                                className:
                                  "relative inline-flex items-center cursor-pointer",
                                children: [
                                  n.jsx("input", {
                                    type: "checkbox",
                                    className: "sr-only peer",
                                    checked: r,
                                    onChange: (p) => s(p.target.checked),
                                  }),
                                  n.jsx("div", {
                                    className:
                                      "w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600",
                                  }),
                                ],
                              }),
                              n.jsx("span", {
                                className: "ml-2 text-xs text-gray-500",
                                children: "專注顯示",
                              }),
                            ],
                          }),
                      ],
                    }),
                    n.jsxs("div", {
                      className: "flex items-center space-x-2",
                      children: [
                        n.jsxs("button", {
                          onClick: () => o(!0),
                          className:
                            "flex items-center px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors text-sm",
                          children: [
                            n.jsx(pt, { size: 16, className: "mr-2" }),
                            "查看歷史",
                          ],
                        }),
                        n.jsxs("button", {
                          onClick: () => a(!0),
                          className:
                            "flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors text-sm",
                          children: [
                            n.jsx(gt, { size: 16, className: "mr-2" }),
                            "新增項目",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                n.jsxs("span", {
                  className: "text-sm text-gray-500",
                  children: [e.length, " 項通知"],
                }),
              ],
            }),
            n.jsx("div", {
              className: "p-4",
              children: n.jsx("div", {
                className: "space-y-3 max-h-60 overflow-y-auto",
                children:
                  e.length === 0
                    ? n.jsxs("div", {
                        className: "text-center text-gray-500 py-4",
                        children: [
                          n.jsx(Cr, {
                            size: 48,
                            className: "mx-auto text-gray-300 mb-2",
                          }),
                          n.jsx("p", { children: "暫無藥品通知" }),
                        ],
                      })
                    : e.map((p) => {
                        const [x, y] = [p.originalDrug, p.replacementDrug];
                        return n.jsxs(
                          "div",
                          {
                            className: `p-3 rounded-lg border ${c(p.priority)}`,
                            children: [
                              n.jsx("div", {
                                className: "space-y-2 text-sm",
                                children: n.jsx("div", {
                                  className:
                                    "bg-white rounded p-2 border border-gray-100",
                                  children: n.jsxs("div", {
                                    className: "flex flex-col gap-2",
                                    children: [
                                      n.jsx("div", {
                                        className: "font-medium text-gray-900",
                                        children: x,
                                      }),
                                      n.jsx("div", {
                                        className:
                                          "pl-2 font-medium text-gray-600",
                                        children: y,
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                              n.jsxs("div", {
                                className:
                                  "mt-3 space-y-2 text-sm text-gray-600",
                                children: [
                                  n.jsxs("div", {
                                    className: "flex items-center",
                                    children: [
                                      n.jsx(Yt, {
                                        size: 14,
                                        className: "mr-2 text-gray-400",
                                      }),
                                      n.jsxs("span", {
                                        children: ["原因: ", p.reason],
                                      }),
                                    ],
                                  }),
                                  n.jsxs("div", {
                                    className: "flex items-center",
                                    children: [
                                      n.jsx(Xs, {
                                        size: 14,
                                        className: "mr-2 text-gray-400",
                                      }),
                                      n.jsxs("span", {
                                        children: [
                                          "生效日期: ",
                                          u(p.effectiveDate),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          p.id || `${p.originalDrug}`
                        );
                      }),
              }),
            }),
          ],
        }),
        n.jsx(B0, { isOpen: l, onClose: () => a(!1), onSuccess: d }),
        n.jsx(Q0, { isOpen: i, onClose: () => o(!1), onSuccess: m }),
      ],
    });
  },
  G0 = ({ drugReplacements: e }) => {
    const [t, r] = j.useState(0),
      s = (c) => {
        switch (c) {
          case "high":
            return "border-red-200 bg-red-50";
          case "medium":
            return "border-yellow-200 bg-yellow-50";
          case "low":
            return "border-green-200 bg-green-50";
          default:
            return "border-gray-200 bg-white";
        }
      };
    j.useEffect(() => {
      if (e.length <= 1) return;
      const c = setInterval(() => {
        r((u) => (u + 1) % e.length);
      }, 8e3);
      return () => clearInterval(c);
    }, [e.length]);
    const l = (c) => {
      const u = new Date(c),
        d = new Date();
      return (
        u.getTime() - d.getTime(),
        u.toLocaleDateString("zh-TW", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
      );
    };
    if (e.length === 0)
      return n.jsxs("div", {
        className:
          "bg-white rounded-lg shadow-sm border border-gray-200 h-full flex flex-col",
        children: [
          n.jsx("div", {
            className: "p-2 border-b border-gray-200 bg-purple-50",
            children: n.jsxs("div", {
              className: "flex items-center",
              children: [
                n.jsx(Cr, { size: 20, className: "text-purple-600 mr-2" }),
                n.jsx("h3", {
                  className: "text-xl font-semibold text-gray-800",
                  children: "藥品通知",
                }),
              ],
            }),
          }),
          n.jsx("div", {
            className: "flex-1 flex items-center justify-center",
            children: n.jsxs("div", {
              className: "text-center text-gray-500",
              children: [
                n.jsx(Cr, {
                  size: 32,
                  className: "mx-auto text-gray-300 mb-2",
                }),
                n.jsx("p", { className: "text-sm", children: "暫無藥品通知" }),
              ],
            }),
          }),
        ],
      });
    const a = e[t],
      [i, o] = [a.originalDrug, a.replacementDrug];
    return n.jsxs("div", {
      className:
        "bg-white rounded-xl shadow-lg border border-gray-200 h-full flex flex-col",
      children: [
        n.jsx("div", {
          className: "p-2 border-b border-gray-200 bg-purple-50",
          children: n.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              n.jsxs("div", {
                className: "flex items-center",
                children: [
                  n.jsx(Cr, { size: 20, className: "text-purple-600 mr-2" }),
                  n.jsx("h3", {
                    className: "text-xl font-semibold text-gray-800",
                    children: "藥品通知",
                  }),
                ],
              }),
              n.jsxs("span", {
                className: "text-sm text-gray-500 font-medium",
                children: [t + 1, "/", e.length],
              }),
            ],
          }),
        }),
        n.jsx("div", {
          className: "flex-1 p-3",
          children: n.jsxs("div", {
            className: `h-full p-4 border rounded-xl transition-colors ${s(
              a.priority
            )}`,
            children: [
              n.jsx("div", {
                className: "space-y-2 text-sm",
                children: n.jsx("div", {
                  className: "bg-white rounded p-3 border border-gray-100",
                  children: n.jsxs("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      n.jsx("div", {
                        className: "font-medium text-gray-900 text-base",
                        children: i,
                      }),
                      n.jsx("div", {
                        className: "pl-2 font-medium text-gray-600 text-base",
                        children: o,
                      }),
                    ],
                  }),
                }),
              }),
              n.jsxs("div", {
                className: "mt-4 space-y-2 text-base text-gray-600",
                children: [
                  n.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      n.jsx(Yt, { size: 16, className: "mr-2 text-gray-400" }),
                      n.jsxs("span", { children: ["原因: ", a.reason] }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      n.jsx(Xs, { size: 16, className: "mr-2 text-gray-400" }),
                      n.jsxs("span", {
                        children: ["生效: ", l(a.effectiveDate)],
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
  },
  ed = ({
    drugReplacements: e,
    isFullscreen: t = !1,
    onItemAdded: r,
    showInFocus: s,
    onFocusToggle: l,
    error: a,
  }) =>
    a != null && a.hasError
      ? t
        ? n.jsx("div", {
            className: "bg-gray-800 rounded-lg p-6 h-full",
            children: n.jsx(ze, { message: a.message || "資料載入失敗" }),
          })
        : n.jsx(ze, { message: a.message || "資料載入失敗" })
      : t
      ? n.jsx(G0, { drugReplacements: e })
      : n.jsx(W0, {
          drugReplacements: e,
          onItemAdded: r,
          showInFocus: s,
          onFocusToggle: l,
        }),
  K0 = ({ inventoryHighlights: e, showInFocus: t = !0, onFocusToggle: r }) => {
    const [s, l] = Pe.useState(!1);
    return n.jsxs("div", {
      className: "bg-white rounded-lg shadow-sm border border-gray-200 h-full",
      children: [
        n.jsx("div", {
          className: "p-4 border-b border-gray-200",
          children: n.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              n.jsxs("div", {
                className: "flex items-center",
                children: [
                  n.jsx(Ie, { size: 20, className: "text-blue-600 mr-2" }),
                  n.jsx("h3", {
                    className: "text-lg font-semibold text-gray-800",
                    children: "即時庫存重點",
                  }),
                  r &&
                    n.jsxs("div", {
                      className: "ml-4 flex items-center",
                      children: [
                        n.jsxs("label", {
                          className:
                            "relative inline-flex items-center cursor-pointer",
                          children: [
                            n.jsx("input", {
                              type: "checkbox",
                              className: "sr-only peer",
                              checked: t,
                              onChange: (a) => r(a.target.checked),
                            }),
                            n.jsx("div", {
                              className:
                                "w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600",
                            }),
                          ],
                        }),
                        n.jsx("span", {
                          className: "ml-2 text-xs text-gray-500",
                          children: "專注顯示",
                        }),
                      ],
                    }),
                ],
              }),
              n.jsxs("div", {
                className: "flex items-center space-x-2",
                children: [
                  n.jsx("button", {
                    onClick: () => l(!0),
                    className:
                      "p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                    title: "專注模式設定",
                    children: n.jsx(nr, { size: 18 }),
                  }),
                  n.jsxs("span", {
                    className: "text-sm text-gray-500",
                    children: [e.length, " 項監控中"],
                  }),
                ],
              }),
            ],
          }),
        }),
        n.jsx("div", {
          className: "p-4",
          children: n.jsx("div", {
            className: "space-y-3 max-h-80 overflow-y-auto",
            children:
              e.length === 0
                ? n.jsxs("div", {
                    className: "text-center text-gray-500 py-8",
                    children: [
                      n.jsx(Ie, {
                        size: 48,
                        className: "mx-auto text-gray-300 mb-2",
                      }),
                      n.jsx("p", { children: "暫無庫存監控項目" }),
                    ],
                  })
                : e.map((a) =>
                    n.jsxs(
                      "div",
                      {
                        className:
                          "p-3 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-colors",
                        children: [
                          n.jsx("div", {
                            className: "flex items-start justify-between mb-2",
                            children: n.jsxs("div", {
                              className: "flex-1",
                              children: [
                                n.jsx("h4", {
                                  className: "font-medium text-gray-800",
                                  children: a.name,
                                }),
                                n.jsxs("p", {
                                  className: "text-sm text-gray-500",
                                  children: ["藥碼: ", a.code],
                                }),
                              ],
                            }),
                          }),
                          n.jsxs("div", {
                            className: "grid grid-cols-2 gap-2 mt-2",
                            children: [
                              n.jsxs("div", {
                                className: "text-sm",
                                children: [
                                  n.jsx("span", {
                                    className: "text-gray-600",
                                    children: "總庫存:",
                                  }),
                                  n.jsx("span", {
                                    className:
                                      "ml-2 font-semibold text-gray-800",
                                    children: a.totalQuantity,
                                  }),
                                ],
                              }),
                              n.jsxs("div", {
                                className: "text-sm",
                                children: [
                                  n.jsx("span", {
                                    className: "text-gray-600",
                                    children: "批號數量:",
                                  }),
                                  n.jsx("span", {
                                    className:
                                      "ml-2 font-semibold text-gray-800",
                                    children: a.batchCount,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          a.serverData &&
                            a.serverData.length > 0 &&
                            n.jsxs("div", {
                              className: "mt-3 pt-3 border-t border-gray-100",
                              children: [
                                n.jsx("div", {
                                  className: "text-xs text-gray-500 mb-1",
                                  children: "各伺服器庫存:",
                                }),
                                n.jsx("div", {
                                  className: "grid grid-cols-2 gap-2",
                                  children: a.serverData.map((i) =>
                                    n.jsxs(
                                      "div",
                                      {
                                        className: "text-sm",
                                        children: [
                                          n.jsxs("span", {
                                            className: "text-gray-600",
                                            children: [i.serverName, ":"],
                                          }),
                                          n.jsx("span", {
                                            className:
                                              "ml-1 font-semibold text-gray-800",
                                            children: i.qty,
                                          }),
                                        ],
                                      },
                                      i.serverName
                                    )
                                  ),
                                }),
                              ],
                            }),
                        ],
                      },
                      a.id
                    )
                  ),
          }),
        }),
        n.jsx(gi, {
          isOpen: s,
          onClose: () => l(!1),
          sectionKey: "inventory",
          sectionTitle: "即時庫存重點",
        }),
      ],
    });
  },
  Y0 = ({ inventoryHighlights: e }) => {
    const [t, r] = j.useState(0),
      l = (() => {
        const m = localStorage.getItem("focusTable_inventory_itemsPerPage");
        return m ? parseInt(m, 10) : 5;
      })();
    j.useEffect(() => {
      if (e.length <= l) return;
      const m = setInterval(() => {
        r((p) => {
          const x = p + l;
          return x >= e.length ? 0 : x;
        });
      }, 8e3);
      return () => clearInterval(m);
    }, [e.length, l]);
    const a = e.slice(t, t + l),
      i = Math.ceil(e.length / l),
      o = Math.floor(t / l) + 1,
      c = Array.from(
        new Set(e.flatMap((m) => (m.serverData || []).map((p) => p.serverName)))
      ).sort(),
      u = 40,
      d = c.length > 0 ? 60 / c.length : 20;
    return n.jsxs("div", {
      className:
        "bg-white rounded-xl shadow-lg border border-gray-200 h-full flex flex-col min-h-0 max-h-full",
      children: [
        n.jsxs("div", {
          className: "p-2 border-b border-gray-200 bg-blue-50 flex-shrink-0",
          children: [
            n.jsxs("div", {
              className: "flex items-center justify-between mb-2",
              children: [
                n.jsxs("h3", {
                  className:
                    "text-xl font-semibold text-gray-800 flex items-center",
                  children: [
                    n.jsx(Ie, { size: 20, className: "mr-2 text-blue-600" }),
                    "即時庫存重點",
                  ],
                }),
                n.jsxs("div", {
                  className: "text-sm text-gray-600",
                  children: ["總計: ", e.length, " 項"],
                }),
              ],
            }),
            e.length > l &&
              n.jsx("div", {
                className:
                  "flex items-center justify-between text-sm text-gray-600",
                children: n.jsxs("span", {
                  children: ["第 ", o, " / ", i, " 頁"],
                }),
              }),
          ],
        }),
        n.jsx("div", {
          className: "flex-1 min-h-0 overflow-hidden",
          children:
            e.length === 0
              ? n.jsx("div", {
                  className:
                    "flex items-center justify-center h-full text-gray-500",
                  children: n.jsxs("div", {
                    className: "text-center",
                    children: [
                      n.jsx(Ie, {
                        size: 32,
                        className: "mx-auto mb-2 text-gray-400",
                      }),
                      n.jsx("p", {
                        className: "text-sm",
                        children: "暫無庫存監控項目",
                      }),
                    ],
                  }),
                })
              : n.jsx("div", {
                  className: "h-full overflow-auto",
                  children: n.jsxs("table", {
                    className: "w-full border-collapse",
                    children: [
                      n.jsxs("colgroup", {
                        children: [
                          n.jsx("col", { style: { width: `${u}%` } }),
                          c.map((m) =>
                            n.jsx("col", { style: { width: `${d}%` } }, m)
                          ),
                        ],
                      }),
                      n.jsx("thead", {
                        className:
                          "sticky top-0 bg-gray-50 border-b-2 border-gray-200",
                        children: n.jsxs("tr", {
                          children: [
                            n.jsx("th", {
                              className:
                                "text-base font-semibold text-left p-2 text-gray-700 truncate whitespace-nowrap",
                              children: "藥品名稱 (藥碼)",
                            }),
                            c.map((m) =>
                              n.jsx(
                                "th",
                                {
                                  className:
                                    "text-base font-semibold text-center py-1 px-3 whitespace-nowrap truncate text-gray-700",
                                  children: m,
                                },
                                m
                              )
                            ),
                          ],
                        }),
                      }),
                      n.jsx("tbody", {
                        children: a.map((m, p) =>
                          n.jsxs(
                            "tr",
                            {
                              className: `border-b border-gray-200 transition-colors ${
                                p % 2 === 0
                                  ? "bg-white hover:bg-gray-300"
                                  : "bg-gray-200 hover:bg-gray-300"
                              }`,
                              children: [
                                n.jsxs("td", {
                                  className: "text-base p-1 text-gray-800",
                                  children: [
                                    n.jsx("div", {
                                      className:
                                        "font-semibold truncate whitespace-nowrap",
                                      children: m.name,
                                    }),
                                    n.jsx("div", {
                                      className:
                                        "text-sm text-gray-500 truncate whitespace-nowrap",
                                      children: m.code,
                                    }),
                                  ],
                                }),
                                c.map((x) => {
                                  const y = (m.serverData || []).find(
                                      (k) => k.serverName === x
                                    ),
                                    N = y ? y.qty : 0;
                                  return n.jsx(
                                    "td",
                                    {
                                      className:
                                        "text-base py-1 px-3 whitespace-nowrap truncate text-center",
                                      children: n.jsx("div", {
                                        className:
                                          "font-semibold text-gray-700",
                                        children: N,
                                      }),
                                    },
                                    x
                                  );
                                }),
                              ],
                            },
                            `${t}-${p}`
                          )
                        ),
                      }),
                    ],
                  }),
                }),
        }),
      ],
    });
  },
  td = ({
    inventoryHighlights: e,
    isFullscreen: t = !1,
    showInFocus: r,
    onFocusToggle: s,
    error: l,
  }) =>
    l != null && l.hasError
      ? t
        ? n.jsx("div", {
            className: "bg-gray-800 rounded-lg p-6 h-full",
            children: n.jsx(ze, { message: l.message || "資料載入失敗" }),
          })
        : n.jsx(ze, { message: l.message || "資料載入失敗" })
      : t
      ? n.jsx(Y0, { inventoryHighlights: e })
      : n.jsx(K0, { inventoryHighlights: e, showInFocus: r, onFocusToggle: s });
class X0 {
  constructor() {
    (this.audioContext = null),
      (this.isEnabled = !0),
      (this.selectedSound = "ding"),
      (this.activeNodes = new Set()),
      (this.repeatCount = 1),
      (this.repeatInterval = 0.5),
      (this.volume = 0.5),
      this.initializeAudioContext(),
      this.loadSettings(),
      this.setupVisibilityHandler();
  }
  setupVisibilityHandler() {
    document.addEventListener("visibilitychange", () => {
      !document.hidden &&
        this.audioContext &&
        (console.log(
          "[NotificationSound] Page became visible, checking AudioContext state:",
          this.audioContext.state
        ),
        this.audioContext.state === "suspended" &&
          console.log(
            "[NotificationSound] AudioContext suspended, will resume on next play"
          ));
    });
  }
  initializeAudioContext() {
    try {
      (this.audioContext = new (window.AudioContext ||
        window.webkitAudioContext)()),
        console.log(
          "[NotificationSound] AudioContext initialized, state:",
          this.audioContext.state
        );
    } catch (t) {
      console.error("[NotificationSound] Audio context not supported:", t);
    }
  }
  async ensureAudioContext() {
    var r;
    if (
      (console.log("[NotificationSound] ensureAudioContext - Current state:", {
        exists: !!this.audioContext,
        state: (r = this.audioContext) == null ? void 0 : r.state,
        isEnabled: this.isEnabled,
        selectedSound: this.selectedSound,
      }),
      !this.audioContext &&
        (console.warn(
          "[NotificationSound] AudioContext is null, initializing..."
        ),
        this.initializeAudioContext(),
        !this.audioContext))
    )
      return (
        console.error("[NotificationSound] Failed to initialize AudioContext"),
        !1
      );
    if (
      this.audioContext.state === "closed" &&
      (console.warn(
        "[NotificationSound] AudioContext is closed, recreating..."
      ),
      this.initializeAudioContext(),
      !this.audioContext)
    )
      return (
        console.error("[NotificationSound] Failed to recreate AudioContext"), !1
      );
    if (this.audioContext.state === "suspended") {
      console.log(
        "[NotificationSound] AudioContext is suspended, attempting to resume..."
      );
      try {
        if (
          (await this.audioContext.resume(),
          console.log(
            "[NotificationSound] AudioContext resumed successfully, new state:",
            this.audioContext.state
          ),
          this.audioContext.state !== "running")
        )
          return (
            console.error(
              "[NotificationSound] AudioContext failed to resume, state:",
              this.audioContext.state
            ),
            !1
          );
      } catch (s) {
        return (
          console.error(
            "[NotificationSound] Failed to resume AudioContext:",
            s
          ),
          !1
        );
      }
    }
    const t = this.audioContext.state === "running";
    return (
      console.log(
        "[NotificationSound] AudioContext ready:",
        t,
        "state:",
        this.audioContext.state
      ),
      t
    );
  }
  cleanupNode(t, r = 0) {
    setTimeout(() => {
      try {
        t.disconnect(),
          this.activeNodes.delete(t),
          console.log(
            "[NotificationSound] Node cleaned up, active nodes:",
            this.activeNodes.size
          );
      } catch (s) {
        console.warn("[NotificationSound] Error cleaning up node:", s);
      }
    }, r);
  }
  createDingSound() {
    if (!this.audioContext) {
      console.error(
        "[NotificationSound] Cannot create ding sound: audioContext is null"
      );
      return;
    }
    const t = this.audioContext.createOscillator(),
      r = this.audioContext.createGain();
    this.activeNodes.add(t),
      this.activeNodes.add(r),
      t.connect(r),
      r.connect(this.audioContext.destination),
      t.frequency.setValueAtTime(800, this.audioContext.currentTime),
      (t.type = "sine"),
      r.gain.setValueAtTime(this.volume, this.audioContext.currentTime),
      r.gain.exponentialRampToValueAtTime(
        0.01,
        this.audioContext.currentTime + 0.3
      ),
      t.start(this.audioContext.currentTime),
      t.stop(this.audioContext.currentTime + 0.3),
      this.cleanupNode(t, 350),
      this.cleanupNode(r, 350),
      console.log(
        "[NotificationSound] Ding sound created, volume:",
        this.volume,
        "active nodes:",
        this.activeNodes.size
      );
  }
  createChimeSound() {
    if (!this.audioContext) {
      console.error(
        "[NotificationSound] Cannot create chime sound: audioContext is null"
      );
      return;
    }
    const t = this.audioContext.currentTime;
    [1e3, 1200].forEach((r, s) => {
      const l = this.audioContext.createOscillator(),
        a = this.audioContext.createGain();
      this.activeNodes.add(l),
        this.activeNodes.add(a),
        l.connect(a),
        a.connect(this.audioContext.destination),
        l.frequency.setValueAtTime(r, t),
        (l.type = "sine");
      const i = t + s * 0.15;
      a.gain.setValueAtTime(0, i),
        a.gain.linearRampToValueAtTime(0.4 * this.volume, i + 0.02),
        a.gain.exponentialRampToValueAtTime(0.01, i + 0.4),
        l.start(i),
        l.stop(i + 0.4),
        this.cleanupNode(l, (i - t + 0.45) * 1e3),
        this.cleanupNode(a, (i - t + 0.45) * 1e3);
    }),
      console.log(
        "[NotificationSound] Chime sound created, volume:",
        this.volume,
        "active nodes:",
        this.activeNodes.size
      );
  }
  createBellSound() {
    if (!this.audioContext) {
      console.error(
        "[NotificationSound] Cannot create bell sound: audioContext is null"
      );
      return;
    }
    const t = this.audioContext.currentTime;
    [600, 800, 1e3].forEach((r, s) => {
      const l = this.audioContext.createOscillator(),
        a = this.audioContext.createGain();
      this.activeNodes.add(l),
        this.activeNodes.add(a),
        l.connect(a),
        a.connect(this.audioContext.destination),
        l.frequency.setValueAtTime(r, t),
        (l.type = "triangle");
      const i = t + s * 0.1;
      a.gain.setValueAtTime(0, i),
        a.gain.linearRampToValueAtTime(0.3 * this.volume, i + 0.02),
        a.gain.exponentialRampToValueAtTime(0.01, i + 0.5),
        l.start(i),
        l.stop(i + 0.5),
        this.cleanupNode(l, (i - t + 0.55) * 1e3),
        this.cleanupNode(a, (i - t + 0.55) * 1e3);
    }),
      console.log(
        "[NotificationSound] Bell sound created, volume:",
        this.volume,
        "active nodes:",
        this.activeNodes.size
      );
  }
  playSound(t) {
    switch ((console.log("[NotificationSound] Playing sound:", t), t)) {
      case "ding":
        this.createDingSound();
        break;
      case "chime":
        this.createChimeSound();
        break;
      case "bell":
        this.createBellSound();
        break;
      default:
        console.error("[NotificationSound] Unknown sound type:", t);
    }
  }
  async playNotification() {
    if (
      (console.log(
        "[NotificationSound] playNotification called, isEnabled:",
        this.isEnabled
      ),
      !this.isEnabled)
    ) {
      console.log(
        "[NotificationSound] Notification is disabled, skipping sound"
      );
      return;
    }
    try {
      if (!(await this.ensureAudioContext()))
        throw (
          (console.error(
            "[NotificationSound] AudioContext is not ready, cannot play sound"
          ),
          new Error("AudioContext is not ready"))
        );
      console.log("[NotificationSound] ===== 開始播放音效 ====="),
        console.log("[NotificationSound] 音效類型:", this.selectedSound),
        console.log("[NotificationSound] 音量:", this.volume),
        console.log("[NotificationSound] 重複次數:", this.repeatCount),
        console.log("[NotificationSound] 間隔秒數:", this.repeatInterval),
        await this.playRepeatedSound(
          this.selectedSound,
          this.repeatCount,
          this.repeatInterval
        ),
        console.log(
          "[NotificationSound] Notification sound played successfully"
        );
    } catch (t) {
      console.error(
        "[NotificationSound] Failed to play notification sound:",
        t
      ),
        (this.audioContext = null),
        this.initializeAudioContext();
    }
  }
  async playRepeatedSound(t, r, s) {
    for (let l = 0; l < r; l++)
      console.log(`[NotificationSound] 播放第 ${l + 1} / ${r} 次`),
        this.playSound(t),
        l < r - 1 && (await new Promise((a) => setTimeout(a, s * 1e3)));
  }
  async playPreview(t) {
    console.log("[NotificationSound] playPreview called, soundType:", t);
    try {
      if (!(await this.ensureAudioContext()))
        throw (
          (console.error(
            "[NotificationSound] AudioContext is not ready, cannot play preview"
          ),
          new Error("AudioContext is not ready"))
        );
      console.log(
        "[NotificationSound] 預覽音效 - 重複次數:",
        this.repeatCount,
        "間隔:",
        this.repeatInterval
      ),
        await this.playRepeatedSound(t, this.repeatCount, this.repeatInterval),
        console.log("[NotificationSound] Preview sound played successfully");
    } catch (r) {
      console.error("[NotificationSound] Failed to play preview sound:", r),
        (this.audioContext = null),
        this.initializeAudioContext();
    }
  }
  enable() {
    console.log("[NotificationSound] Enabling notifications"),
      (this.isEnabled = !0),
      this.saveSettings();
  }
  disable() {
    console.log("[NotificationSound] Disabling notifications"),
      (this.isEnabled = !1),
      this.saveSettings();
  }
  toggle() {
    return (
      (this.isEnabled = !this.isEnabled),
      console.log(
        "[NotificationSound] Toggled notifications, new state:",
        this.isEnabled
      ),
      this.saveSettings(),
      this.isEnabled
    );
  }
  getStatus() {
    return this.isEnabled;
  }
  getSelectedSound() {
    return this.selectedSound;
  }
  setSelectedSound(t) {
    console.log("[NotificationSound] Setting sound type:", t),
      (this.selectedSound = t),
      this.saveSettings();
  }
  getRepeatCount() {
    return this.repeatCount;
  }
  setRepeatCount(t) {
    (this.repeatCount = Math.max(1, Math.min(5, t))),
      console.log(
        "[NotificationSound] Setting repeat count:",
        this.repeatCount
      ),
      this.saveSettings();
  }
  getRepeatInterval() {
    return this.repeatInterval;
  }
  setRepeatInterval(t) {
    (this.repeatInterval = Math.max(0.5, Math.min(2, t))),
      console.log(
        "[NotificationSound] Setting repeat interval:",
        this.repeatInterval
      ),
      this.saveSettings();
  }
  getVolume() {
    return this.volume;
  }
  setVolume(t) {
    (this.volume = Math.max(0, Math.min(1, t))),
      console.log("[NotificationSound] Setting volume:", this.volume),
      this.saveSettings();
  }
  saveSettings() {
    try {
      localStorage.setItem(
        "internalRequestNotificationEnabled",
        JSON.stringify(this.isEnabled)
      ),
        localStorage.setItem(
          "internalRequestNotificationSound",
          this.selectedSound
        ),
        localStorage.setItem(
          "internalRequestNotificationRepeatCount",
          JSON.stringify(this.repeatCount)
        ),
        localStorage.setItem(
          "internalRequestNotificationRepeatInterval",
          JSON.stringify(this.repeatInterval)
        ),
        localStorage.setItem(
          "internalRequestNotificationVolume",
          JSON.stringify(this.volume)
        ),
        console.log("[NotificationSound] Settings saved:", {
          isEnabled: this.isEnabled,
          selectedSound: this.selectedSound,
          repeatCount: this.repeatCount,
          repeatInterval: this.repeatInterval,
          volume: this.volume,
        });
    } catch (t) {
      console.error(
        "[NotificationSound] Failed to save notification settings:",
        t
      );
    }
  }
  loadSettings() {
    try {
      const t = localStorage.getItem("internalRequestNotificationEnabled");
      t !== null && (this.isEnabled = JSON.parse(t));
      const r = localStorage.getItem("internalRequestNotificationSound");
      r &&
        (r === "ding" || r === "chime" || r === "bell") &&
        (this.selectedSound = r);
      const s = localStorage.getItem("internalRequestNotificationRepeatCount");
      if (s !== null) {
        const i = JSON.parse(s);
        this.repeatCount = Math.max(1, Math.min(5, i));
      }
      const l = localStorage.getItem(
        "internalRequestNotificationRepeatInterval"
      );
      if (l !== null) {
        const i = JSON.parse(l);
        this.repeatInterval = Math.max(0.5, Math.min(2, i));
      }
      const a = localStorage.getItem("internalRequestNotificationVolume");
      if (a !== null) {
        const i = JSON.parse(a);
        this.volume = Math.max(0, Math.min(1, i));
      }
      console.log("[NotificationSound] Settings loaded:", {
        isEnabled: this.isEnabled,
        selectedSound: this.selectedSound,
        repeatCount: this.repeatCount,
        repeatInterval: this.repeatInterval,
        volume: this.volume,
      });
    } catch (t) {
      console.error(
        "[NotificationSound] Failed to load notification settings:",
        t
      );
    }
  }
  diagnose() {
    var t;
    console.log("[NotificationSound] === DIAGNOSTIC INFO ==="),
      console.log("AudioContext exists:", !!this.audioContext),
      console.log(
        "AudioContext state:",
        (t = this.audioContext) == null ? void 0 : t.state
      ),
      console.log("Is enabled:", this.isEnabled),
      console.log("Selected sound:", this.selectedSound),
      console.log("Volume:", this.volume),
      console.log("Repeat count:", this.repeatCount),
      console.log("Repeat interval:", this.repeatInterval),
      console.log("Active nodes count:", this.activeNodes.size),
      console.log("=====================================");
  }
}
const me = new X0(),
  J0 = ({ isOpen: e, onClose: t }) => {
    const [r, s] = j.useState(me.getSelectedSound()),
      [l, a] = j.useState(me.getRepeatCount()),
      [i, o] = j.useState(me.getRepeatInterval()),
      [c, u] = j.useState(me.getVolume()),
      [d, m] = j.useState(() => {
        const v = localStorage.getItem("internalRequests_displayMode");
        return v || "all";
      }),
      [p, x] = j.useState(() => {
        const v = localStorage.getItem("internalRequests_notifyMode");
        return v || "urgentOnly";
      }),
      [y, N] = j.useState(() => {
        const v = localStorage.getItem("internalRequests_reminderInterval");
        return v ? parseInt(v, 10) : 5;
      }),
      k = [
        { type: "ding", name: "叮咚聲", description: "單音清脆提示音" },
        { type: "chime", name: "鐘鈴聲", description: "雙音和諧提示音" },
        { type: "bell", name: "鈴聲", description: "三音漸進提示音" },
      ],
      g = (v) => {
        me.playPreview(v);
      },
      h = (v) => {
        s(v), me.setSelectedSound(v);
      },
      f = (v) => {
        a(v), me.setRepeatCount(v);
      },
      w = (v) => {
        o(v), me.setRepeatInterval(v);
      },
      C = (v) => {
        u(v), me.setVolume(v);
      },
      z = (v) => {
        m(v),
          localStorage.setItem("internalRequests_displayMode", v),
          window.dispatchEvent(
            new CustomEvent("internalRequestsSettingChanged", {
              detail: { displayMode: v },
            })
          );
      },
      _ = (v) => {
        x(v),
          localStorage.setItem("internalRequests_notifyMode", v),
          window.dispatchEvent(
            new CustomEvent("internalRequestsSettingChanged", {
              detail: { notifyMode: v },
            })
          );
      },
      I = (v) => {
        N(v),
          localStorage.setItem(
            "internalRequests_reminderInterval",
            v.toString()
          ),
          window.dispatchEvent(
            new CustomEvent("internalRequestsSettingChanged", {
              detail: { reminderInterval: v },
            })
          );
      };
    return e
      ? n.jsx("div", {
          className:
            "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
          children: n.jsxs("div", {
            className: "bg-white rounded-lg shadow-xl w-full max-w-md",
            children: [
              n.jsxs("div", {
                className:
                  "flex items-center justify-between p-4 border-b border-gray-200",
                children: [
                  n.jsx("h3", {
                    className: "text-xl font-semibold text-gray-800",
                    children: "申領通知設定",
                  }),
                  n.jsx("button", {
                    onClick: t,
                    className:
                      "text-gray-400 hover:text-gray-600 transition-colors",
                    children: n.jsx(Ae, { size: 24 }),
                  }),
                ],
              }),
              n.jsxs("div", {
                className: "p-6 space-y-6 max-h-[70vh] overflow-y-auto",
                children: [
                  n.jsxs("div", {
                    children: [
                      n.jsx("h4", {
                        className: "text-base font-semibold text-gray-700 mb-3",
                        children: "音效設定",
                      }),
                      n.jsx("div", {
                        className: "space-y-3",
                        children: k.map((v) =>
                          n.jsx(
                            "div",
                            {
                              className: `border-2 rounded-lg p-4 transition-all cursor-pointer ${
                                r === v.type
                                  ? "border-teal-500 bg-teal-50"
                                  : "border-gray-200 hover:border-gray-300"
                              }`,
                              onClick: () => h(v.type),
                              children: n.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [
                                  n.jsxs("div", {
                                    className: "flex-1",
                                    children: [
                                      n.jsxs("div", {
                                        className:
                                          "flex items-center space-x-2 mb-1",
                                        children: [
                                          n.jsx("h4", {
                                            className:
                                              "text-lg font-semibold text-gray-800",
                                            children: v.name,
                                          }),
                                          r === v.type &&
                                            n.jsx(ir, {
                                              size: 20,
                                              className: "text-teal-600",
                                            }),
                                        ],
                                      }),
                                      n.jsx("p", {
                                        className: "text-sm text-gray-600",
                                        children: v.description,
                                      }),
                                    ],
                                  }),
                                  n.jsx("button", {
                                    onClick: (D) => {
                                      D.stopPropagation(), g(v.type);
                                    },
                                    className:
                                      "ml-4 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors",
                                    title: "試聽音效",
                                    children: n.jsx(Eo, {
                                      size: 20,
                                      className: "text-gray-700",
                                    }),
                                  }),
                                ],
                              }),
                            },
                            v.type
                          )
                        ),
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    children: [
                      n.jsx("h4", {
                        className: "text-base font-semibold text-gray-700 mb-3",
                        children: "音效重複設定",
                      }),
                      n.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          n.jsxs("div", {
                            children: [
                              n.jsxs("div", {
                                className:
                                  "flex items-center justify-between mb-2",
                                children: [
                                  n.jsx("label", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: "音量",
                                  }),
                                  n.jsxs("span", {
                                    className:
                                      "text-lg font-semibold text-teal-600",
                                    children: [Math.round(c * 100), "%"],
                                  }),
                                ],
                              }),
                              n.jsx("input", {
                                type: "range",
                                min: "0",
                                max: "1",
                                step: "0.01",
                                value: c,
                                onChange: (v) => C(parseFloat(v.target.value)),
                                className:
                                  "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600",
                              }),
                              n.jsxs("div", {
                                className:
                                  "flex justify-between text-xs text-gray-500 mt-1",
                                children: [
                                  n.jsx("span", { children: "0%" }),
                                  n.jsx("span", { children: "100%" }),
                                ],
                              }),
                            ],
                          }),
                          n.jsxs("div", {
                            children: [
                              n.jsxs("div", {
                                className:
                                  "flex items-center justify-between mb-2",
                                children: [
                                  n.jsx("label", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: "重複次數",
                                  }),
                                  n.jsxs("span", {
                                    className:
                                      "text-lg font-semibold text-teal-600",
                                    children: [l, " 次"],
                                  }),
                                ],
                              }),
                              n.jsx("input", {
                                type: "range",
                                min: "1",
                                max: "5",
                                step: "1",
                                value: l,
                                onChange: (v) => f(parseInt(v.target.value)),
                                className:
                                  "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600",
                              }),
                              n.jsxs("div", {
                                className:
                                  "flex justify-between text-xs text-gray-500 mt-1",
                                children: [
                                  n.jsx("span", { children: "1 次" }),
                                  n.jsx("span", { children: "5 次" }),
                                ],
                              }),
                            ],
                          }),
                          l > 1 &&
                            n.jsxs("div", {
                              children: [
                                n.jsxs("div", {
                                  className:
                                    "flex items-center justify-between mb-2",
                                  children: [
                                    n.jsx("label", {
                                      className:
                                        "text-sm font-medium text-gray-700",
                                      children: "間隔秒數",
                                    }),
                                    n.jsxs("span", {
                                      className:
                                        "text-lg font-semibold text-teal-600",
                                      children: [i.toFixed(1), " 秒"],
                                    }),
                                  ],
                                }),
                                n.jsx("input", {
                                  type: "range",
                                  min: "0.5",
                                  max: "2",
                                  step: "0.1",
                                  value: i,
                                  onChange: (v) =>
                                    w(parseFloat(v.target.value)),
                                  className:
                                    "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600",
                                }),
                                n.jsxs("div", {
                                  className:
                                    "flex justify-between text-xs text-gray-500 mt-1",
                                  children: [
                                    n.jsx("span", { children: "0.5 秒" }),
                                    n.jsx("span", { children: "2.0 秒" }),
                                  ],
                                }),
                              ],
                            }),
                          n.jsxs("div", {
                            className:
                              "text-sm text-gray-600 bg-blue-50 border border-blue-200 rounded-lg p-3",
                            children: [
                              n.jsx("p", {
                                className: "font-medium text-blue-900 mb-1",
                                children: "說明：",
                              }),
                              n.jsxs("ul", {
                                className:
                                  "list-disc list-inside space-y-1 text-blue-800",
                                children: [
                                  n.jsx("li", {
                                    children:
                                      "音量：控制音效播放的音量大小（0-100%）",
                                  }),
                                  n.jsx("li", {
                                    children:
                                      "重複次數：音效連續播放的次數（1-5 次）",
                                  }),
                                  l > 1 &&
                                    n.jsx("li", {
                                      children:
                                        "間隔秒數：每次播放之間的等待時間（0.5-2.0 秒）",
                                    }),
                                  n.jsx("li", {
                                    children: "測試音效按鈕會按照目前設定播放",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    children: [
                      n.jsx("h4", {
                        className: "text-base font-semibold text-gray-700 mb-3",
                        children: "定期提醒設定",
                      }),
                      n.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          n.jsxs("div", {
                            children: [
                              n.jsxs("div", {
                                className:
                                  "flex items-center justify-between mb-2",
                                children: [
                                  n.jsx("label", {
                                    className:
                                      "text-sm font-medium text-gray-700",
                                    children: "提醒間隔",
                                  }),
                                  n.jsxs("span", {
                                    className:
                                      "text-lg font-semibold text-teal-600",
                                    children: [y, " 分鐘"],
                                  }),
                                ],
                              }),
                              n.jsx("input", {
                                type: "range",
                                min: "2",
                                max: "8",
                                step: "1",
                                value: y,
                                onChange: (v) => I(parseInt(v.target.value)),
                                className:
                                  "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600",
                              }),
                              n.jsxs("div", {
                                className:
                                  "flex justify-between text-xs text-gray-500 mt-1",
                                children: [
                                  n.jsx("span", { children: "2 分鐘" }),
                                  n.jsx("span", { children: "8 分鐘" }),
                                ],
                              }),
                            ],
                          }),
                          n.jsxs("div", {
                            className:
                              "text-sm text-gray-600 bg-blue-50 border border-blue-200 rounded-lg p-3",
                            children: [
                              n.jsx("p", {
                                className: "font-medium text-blue-900 mb-1",
                                children: "說明：",
                              }),
                              n.jsxs("ul", {
                                className:
                                  "list-disc list-inside space-y-1 text-blue-800",
                                children: [
                                  n.jsx("li", {
                                    children:
                                      "系統會每隔指定時間檢查是否有未處理的緊急申領",
                                  }),
                                  n.jsx("li", {
                                    children:
                                      "只要有緊急申領未處理，就會播放提醒音效",
                                  }),
                                  n.jsx("li", {
                                    children:
                                      "此功能獨立於新申領通知，用於提醒尚未處理的緊急申領",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    children: [
                      n.jsx("h4", {
                        className: "text-base font-semibold text-gray-700 mb-3",
                        children: "通知觸發條件",
                      }),
                      n.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          n.jsx("div", {
                            className: `border-2 rounded-lg p-4 transition-all cursor-pointer ${
                              p === "urgentOnly"
                                ? "border-teal-500 bg-teal-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`,
                            onClick: () => _("urgentOnly"),
                            children: n.jsx("div", {
                              className: "flex items-center justify-between",
                              children: n.jsxs("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                  n.jsx(Le, {
                                    size: 24,
                                    className: "text-red-600",
                                  }),
                                  n.jsxs("div", {
                                    className: "flex-1",
                                    children: [
                                      n.jsxs("div", {
                                        className:
                                          "flex items-center space-x-2 mb-1",
                                        children: [
                                          n.jsx("h5", {
                                            className:
                                              "text-base font-semibold text-gray-800",
                                            children: "僅通知緊急申領",
                                          }),
                                          p === "urgentOnly" &&
                                            n.jsx(ir, {
                                              size: 18,
                                              className: "text-teal-600",
                                            }),
                                        ],
                                      }),
                                      n.jsx("p", {
                                        className: "text-sm text-gray-600",
                                        children: "只有新的緊急申領才播放音效",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                          n.jsx("div", {
                            className: `border-2 rounded-lg p-4 transition-all cursor-pointer ${
                              p === "all"
                                ? "border-teal-500 bg-teal-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`,
                            onClick: () => _("all"),
                            children: n.jsx("div", {
                              className: "flex items-center justify-between",
                              children: n.jsxs("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                  n.jsx(Eo, {
                                    size: 24,
                                    className: "text-teal-600",
                                  }),
                                  n.jsxs("div", {
                                    className: "flex-1",
                                    children: [
                                      n.jsxs("div", {
                                        className:
                                          "flex items-center space-x-2 mb-1",
                                        children: [
                                          n.jsx("h5", {
                                            className:
                                              "text-base font-semibold text-gray-800",
                                            children: "通知所有新申領",
                                          }),
                                          p === "all" &&
                                            n.jsx(ir, {
                                              size: 18,
                                              className: "text-teal-600",
                                            }),
                                        ],
                                      }),
                                      n.jsx("p", {
                                        className: "text-sm text-gray-600",
                                        children:
                                          "不論緊急或一般申領，只要有新資料就播放音效",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    children: [
                      n.jsx("h4", {
                        className: "text-base font-semibold text-gray-700 mb-3",
                        children: "顯示設定",
                      }),
                      n.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          n.jsx("div", {
                            className: `border-2 rounded-lg p-4 transition-all cursor-pointer ${
                              d === "all"
                                ? "border-teal-500 bg-teal-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`,
                            onClick: () => z("all"),
                            children: n.jsx("div", {
                              className: "flex items-center justify-between",
                              children: n.jsxs("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                  n.jsx(Mm, {
                                    size: 24,
                                    className: "text-gray-700",
                                  }),
                                  n.jsxs("div", {
                                    className: "flex-1",
                                    children: [
                                      n.jsxs("div", {
                                        className:
                                          "flex items-center space-x-2 mb-1",
                                        children: [
                                          n.jsx("h5", {
                                            className:
                                              "text-base font-semibold text-gray-800",
                                            children: "不分類顯示",
                                          }),
                                          d === "all" &&
                                            n.jsx(ir, {
                                              size: 18,
                                              className: "text-teal-600",
                                            }),
                                        ],
                                      }),
                                      n.jsx("p", {
                                        className: "text-sm text-gray-600",
                                        children: "所有申領依序顯示",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                          n.jsx("div", {
                            className: `border-2 rounded-lg p-4 transition-all cursor-pointer ${
                              d === "separate"
                                ? "border-teal-500 bg-teal-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`,
                            onClick: () => z("separate"),
                            children: n.jsx("div", {
                              className: "flex items-center justify-between",
                              children: n.jsxs("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                  n.jsx(Fm, {
                                    size: 24,
                                    className: "text-gray-700",
                                  }),
                                  n.jsxs("div", {
                                    className: "flex-1",
                                    children: [
                                      n.jsxs("div", {
                                        className:
                                          "flex items-center space-x-2 mb-1",
                                        children: [
                                          n.jsx("h5", {
                                            className:
                                              "text-base font-semibold text-gray-800",
                                            children: "區分緊急申領",
                                          }),
                                          d === "separate" &&
                                            n.jsx(ir, {
                                              size: 18,
                                              className: "text-teal-600",
                                            }),
                                        ],
                                      }),
                                      n.jsx("p", {
                                        className: "text-sm text-gray-600",
                                        children: "左側緊急申領，右側一般申領",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                          n.jsx("div", {
                            className: `border-2 rounded-lg p-4 transition-all cursor-pointer ${
                              d === "urgentOnly"
                                ? "border-teal-500 bg-teal-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`,
                            onClick: () => z("urgentOnly"),
                            children: n.jsx("div", {
                              className: "flex items-center justify-between",
                              children: n.jsxs("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                  n.jsx(Le, {
                                    size: 24,
                                    className: "text-gray-700",
                                  }),
                                  n.jsxs("div", {
                                    className: "flex-1",
                                    children: [
                                      n.jsxs("div", {
                                        className:
                                          "flex items-center space-x-2 mb-1",
                                        children: [
                                          n.jsx("h5", {
                                            className:
                                              "text-base font-semibold text-gray-800",
                                            children: "僅顯示緊急申領",
                                          }),
                                          d === "urgentOnly" &&
                                            n.jsx(ir, {
                                              size: 18,
                                              className: "text-teal-600",
                                            }),
                                        ],
                                      }),
                                      n.jsx("p", {
                                        className: "text-sm text-gray-600",
                                        children: "僅顯示緊急申領",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              n.jsx("div", {
                className: "flex justify-end p-4 border-t border-gray-200",
                children: n.jsx("button", {
                  onClick: t,
                  className:
                    "px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium",
                  children: "確定",
                }),
              }),
            ],
          }),
        })
      : null;
  },
  Z0 = ({ internalRequests: e, showInFocus: t = !0, onFocusToggle: r }) => {
    const [s, l] = j.useState(me.getStatus()),
      [a, i] = j.useState(!1),
      o = j.useRef(new Set()),
      c = j.useRef(new Set()),
      u = j.useRef(!0),
      [d, m] = j.useState(() => {
        const f = localStorage.getItem("internalRequests_notifyMode");
        return f || "urgentOnly";
      }),
      [p, x] = j.useState(() => {
        const f = localStorage.getItem("internalRequests_reminderInterval");
        return f ? parseInt(f, 10) : 5;
      }),
      y = j.useRef(e);
    j.useEffect(() => {
      y.current = e;
    }, [e]),
      j.useEffect(() => {
        const f = (w) => {
          var z, _;
          const C = w;
          ((z = C.detail) == null ? void 0 : z.notifyMode) !== void 0 &&
            m(C.detail.notifyMode),
            ((_ = C.detail) == null ? void 0 : _.reminderInterval) !== void 0 &&
              x(C.detail.reminderInterval);
        };
        return (
          window.addEventListener("internalRequestsSettingChanged", f),
          () => window.removeEventListener("internalRequestsSettingChanged", f)
        );
      }, []),
      j.useEffect(() => {
        console.log("======= 設置定期提醒計時器 ======="),
          console.log("提醒間隔:", p, "分鐘");
        const f = setInterval(() => {
          const w = y.current.filter(
            (C) => C.state === "等待過帳" && C.actionType === "緊急申領"
          );
          w.length > 0
            ? (console.log("======= 定期提醒：檢測到未處理的緊急申領 ======="),
              console.log("緊急申領數量:", w.length),
              console.log(
                "緊急申領 IDs:",
                w.map((C) => C.id)
              ),
              (async () => {
                try {
                  await me.playNotification(),
                    console.log("======= 定期提醒音效播放完成 =======");
                } catch (C) {
                  console.error("======= 定期提醒音效播放失敗 =======", C);
                }
              })())
            : console.log("======= 定期提醒：無未處理的緊急申領 =======");
        }, p * 60 * 1e3);
        return () => {
          console.log("======= 清除定期提醒計時器 ======="), clearInterval(f);
        };
      }, [p]),
      j.useEffect(() => {
        u.current &&
          e.length > 0 &&
          (console.log("======= 初始載入完成，開始監控申領通知 ======="),
          console.log("通知模式:", d),
          (u.current = !1));
        const f = new Set(),
          w = new Set();
        e.forEach((z) => {
          z.state === "等待過帳" &&
            (w.add(z.id), z.actionType === "緊急申領" && f.add(z.id));
        });
        let C = !1;
        d === "urgentOnly"
          ? Array.from(f).some((_) => !o.current.has(_)) &&
            !u.current &&
            (console.log("======= 檢測到新的緊急申領，準備播放音效 ======="),
            console.log("當前緊急申領 IDs:", Array.from(f)),
            console.log("之前緊急申領 IDs:", Array.from(o.current)),
            (C = !0))
          : d === "all" &&
            Array.from(w).some((_) => !c.current.has(_)) &&
            !u.current &&
            (console.log(
              "======= 檢測到新的申領（所有類型），準備播放音效 ======="
            ),
            console.log("當前待處理申領 IDs:", Array.from(w)),
            console.log("之前待處理申領 IDs:", Array.from(c.current)),
            (C = !0)),
          C &&
            (async () => {
              try {
                await me.playNotification(),
                  console.log("======= 音效播放完成 =======");
              } catch (z) {
                console.error("======= 音效播放失敗 =======", z);
              }
            })(),
          (o.current = f),
          (c.current = w);
      }, [e, d]);
    const N = () => {
        const f = me.toggle();
        l(f);
      },
      k = (f, w) => {
        if (f === "等待過帳" && w === "緊急申領")
          return "border-red-500 bg-red-50";
        switch (f) {
          case "等待過帳":
            return "border-yellow-200 bg-yellow-50";
          case "已過帳":
            return "border-gray-200 bg-white";
          case "已簽收":
            return "border-green-200 bg-green-50";
          default:
            return "border-gray-200 bg-white";
        }
      },
      g = (f) => {
        try {
          return new Date(f.replace(/\//g, "-")).toLocaleString("zh-TW", {
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          });
        } catch {
          return f;
        }
      },
      h = [...e].sort((f, w) => {
        if (f.state === "等待過帳" && f.actionType === "緊急申領") return -1;
        if (w.state === "等待過帳" && w.actionType === "緊急申領") return 1;
        const C = { 等待過帳: 0, 已過帳: 1, 已簽收: 2 },
          z = C[f.state],
          _ = C[w.state];
        if (z !== _) return z - _;
        try {
          const I = new Date(f.requestTime.replace(/\//g, "-")).getTime();
          return new Date(w.requestTime.replace(/\//g, "-")).getTime() - I;
        } catch {
          return 0;
        }
      });
    return n.jsxs("div", {
      className: "bg-white rounded-lg shadow-sm border border-gray-200 h-full",
      children: [
        n.jsx("div", {
          className: "p-4 border-b border-gray-200",
          children: n.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              n.jsxs("div", {
                className: "flex items-center",
                children: [
                  n.jsx(Yt, { size: 20, className: "text-teal-600 mr-2" }),
                  n.jsx("h3", {
                    className: "text-lg font-semibold text-gray-800",
                    children: "藥品申領通知",
                  }),
                  n.jsx("button", {
                    onClick: () => i(!0),
                    className:
                      "ml-3 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors",
                    title: "音效設定",
                    children: n.jsx(nr, { size: 18 }),
                  }),
                  n.jsx("button", {
                    onClick: N,
                    className: `ml-2 p-2 rounded-lg transition-colors ${
                      s
                        ? "bg-green-100 text-green-600 hover:bg-green-200"
                        : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                    }`,
                    title: s ? "通知已啟用" : "通知已關閉",
                    children: s
                      ? n.jsx(Hu, { size: 18, className: "fill-current" })
                      : n.jsx(Vu, { size: 18 }),
                  }),
                  r &&
                    n.jsxs("div", {
                      className: "ml-4 flex items-center",
                      children: [
                        n.jsxs("label", {
                          className:
                            "relative inline-flex items-center cursor-pointer",
                          children: [
                            n.jsx("input", {
                              type: "checkbox",
                              className: "sr-only peer",
                              checked: t,
                              onChange: (f) => r(f.target.checked),
                            }),
                            n.jsx("div", {
                              className:
                                "w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600",
                            }),
                          ],
                        }),
                        n.jsx("span", {
                          className: "ml-2 text-xs text-gray-500",
                          children: "專注顯示",
                        }),
                      ],
                    }),
                ],
              }),
              n.jsxs("span", {
                className: "text-sm text-gray-500",
                children: [
                  e.filter((f) => f.state === "等待過帳").length,
                  " 項待處理",
                ],
              }),
            ],
          }),
        }),
        n.jsx("div", {
          className: "p-4",
          children: n.jsx("div", {
            className: "space-y-3 max-h-80 overflow-y-auto",
            children:
              h.length === 0
                ? n.jsxs("div", {
                    className: "text-center text-gray-500 py-8",
                    children: [
                      n.jsx(Yt, {
                        size: 48,
                        className: "mx-auto text-gray-300 mb-2",
                      }),
                      n.jsx("p", { children: "暫無藥品申領" }),
                    ],
                  })
                : h.map(
                    (f) => (
                      f.state === "等待過帳" && f.actionType,
                      n.jsxs(
                        "div",
                        {
                          className: `p-3 border-2 rounded-lg transition-colors ${k(
                            f.state,
                            f.actionType
                          )}`,
                          children: [
                            n.jsxs("div", {
                              className:
                                "flex items-start justify-between mb-2",
                              children: [
                                n.jsxs("div", {
                                  className: "flex-1",
                                  children: [
                                    n.jsxs("div", {
                                      className: "flex items-center gap-2 mb-1",
                                      children: [
                                        n.jsx("span", {
                                          className:
                                            "text-sm font-semibold text-gray-700",
                                          children: f.code,
                                        }),
                                        f.actionType === "緊急申領" &&
                                          n.jsxs("span", {
                                            className:
                                              "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-red-600 text-white",
                                            children: [
                                              n.jsx(Le, {
                                                size: 10,
                                                className: "mr-1",
                                              }),
                                              "緊急申領",
                                            ],
                                          }),
                                      ],
                                    }),
                                    n.jsx("h4", {
                                      className: "font-medium text-gray-800",
                                      children: f.name,
                                    }),
                                  ],
                                }),
                                n.jsx("span", {
                                  className:
                                    "px-2 py-1 rounded-lg text-xs font-medium bg-gray-100 text-gray-700",
                                  children: f.state,
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              className: "space-y-2 text-sm text-gray-600",
                              children: [
                                n.jsxs("div", {
                                  className:
                                    "flex items-center justify-between",
                                  children: [
                                    n.jsxs("div", {
                                      className: "flex items-center",
                                      children: [
                                        n.jsx(Bu, {
                                          size: 14,
                                          className: "mr-2 text-gray-400",
                                        }),
                                        n.jsx("span", {
                                          children: f.requestingUnit,
                                        }),
                                      ],
                                    }),
                                    n.jsxs("div", {
                                      className: "flex items-center",
                                      children: [
                                        n.jsx(Ie, {
                                          size: 14,
                                          className: "mr-2 text-gray-400",
                                        }),
                                        n.jsxs("span", {
                                          className: "font-medium",
                                          children: [
                                            "數量: ",
                                            f.requestedQuantity,
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                n.jsxs("div", {
                                  className: "flex items-center",
                                  children: [
                                    n.jsx(Js, {
                                      size: 14,
                                      className: "mr-2 text-gray-400",
                                    }),
                                    n.jsxs("span", {
                                      children: [
                                        "申請人: ",
                                        f.requestingPerson,
                                      ],
                                    }),
                                  ],
                                }),
                                n.jsxs("div", {
                                  className: "flex items-center",
                                  children: [
                                    n.jsx(Ar, {
                                      size: 14,
                                      className: "mr-2 text-gray-400",
                                    }),
                                    n.jsxs("span", {
                                      children: [
                                        "申請時間: ",
                                        g(f.requestTime),
                                      ],
                                    }),
                                  ],
                                }),
                                f.remarks &&
                                  n.jsxs("div", {
                                    className:
                                      "mt-2 p-2 bg-gray-50 border border-gray-200 rounded text-xs",
                                    children: [
                                      n.jsx("span", {
                                        className: "text-gray-500",
                                        children: "備註: ",
                                      }),
                                      n.jsx("span", {
                                        className: "text-gray-700",
                                        children: f.remarks,
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        },
                        f.id
                      )
                    )
                  ),
          }),
        }),
        n.jsx(J0, { isOpen: a, onClose: () => i(!1) }),
      ],
    });
  },
  eh = ({ internalRequests: e, gridHeight: t = 2 }) => {
    const [r, s] = j.useState(0),
      [l, a] = j.useState(0),
      [i, o] = j.useState(0),
      c = Math.min(5, Math.max(1, t - 1)),
      [u, d] = j.useState(me.getStatus()),
      [m, p] = j.useState(() => {
        const S = localStorage.getItem("internalRequests_displayMode");
        return S || "all";
      }),
      [x, y] = j.useState(() => {
        const S = localStorage.getItem("internalRequests_notifyMode");
        return S || "urgentOnly";
      }),
      [N, k] = j.useState(() => {
        const S = localStorage.getItem("internalRequests_reminderInterval");
        return S ? parseInt(S, 10) : 5;
      }),
      g = j.useRef(new Set()),
      h = j.useRef(new Set()),
      f = j.useRef(!0),
      w = j.useRef(e),
      [C, z] = j.useState(Date.now());
    j.useEffect(() => {
      w.current = e;
    }, [e]),
      j.useEffect(() => {
        try {
          if (
            (console.log(
              "[InternalRequestsCarousel] Checking for new urgent requests, total requests:",
              e.length
            ),
            !Array.isArray(e))
          ) {
            console.error(
              "[InternalRequestsCarousel] internalRequests is not an array:",
              typeof e
            );
            return;
          }
          f.current &&
            e.length > 0 &&
            (console.log(
              "======= [InternalRequestsCarousel] 初始載入完成，開始監控申領通知 ======="
            ),
            console.log("[InternalRequestsCarousel] 通知模式:", x),
            (f.current = !1));
          const S = new Set(),
            b = new Set();
          e.forEach((U) => {
            if (!U || typeof U != "object") {
              console.warn(
                "[InternalRequestsCarousel] Invalid request object:",
                U
              );
              return;
            }
            U.state === "等待過帳" &&
              (U.id
                ? (b.add(U.id),
                  U.actionType === "緊急申領" &&
                    (S.add(U.id),
                    console.log(
                      "[InternalRequestsCarousel] Found urgent request:",
                      { id: U.id, name: U.name }
                    )))
                : console.warn(
                    "[InternalRequestsCarousel] Request missing ID:",
                    U
                  ));
          }),
            console.log(
              "[InternalRequestsCarousel] Current urgent requests:",
              S.size
            ),
            console.log(
              "[InternalRequestsCarousel] Previous urgent requests:",
              g.current.size
            ),
            console.log(
              "[InternalRequestsCarousel] Current all requests:",
              b.size
            ),
            console.log(
              "[InternalRequestsCarousel] Previous all requests:",
              h.current.size
            );
          let R = !1,
            A = [];
          if (
            (x === "urgentOnly"
              ? ((A = Array.from(S).filter((U) => !g.current.has(U))),
                A.length > 0 &&
                  !f.current &&
                  (console.log(
                    "======= [InternalRequestsCarousel] 檢測到新的緊急申領，準備播放音效 ======="
                  ),
                  console.log(
                    "[InternalRequestsCarousel] 當前緊急申領 IDs:",
                    Array.from(S)
                  ),
                  console.log(
                    "[InternalRequestsCarousel] 之前緊急申領 IDs:",
                    Array.from(g.current)
                  ),
                  console.log(
                    "[InternalRequestsCarousel] 新增的緊急申領 IDs:",
                    A
                  ),
                  (R = !0)))
              : x === "all" &&
                ((A = Array.from(b).filter((U) => !h.current.has(U))),
                A.length > 0 &&
                  !f.current &&
                  (console.log(
                    "======= [InternalRequestsCarousel] 檢測到新的申領（所有類型），準備播放音效 ======="
                  ),
                  console.log(
                    "[InternalRequestsCarousel] 當前待處理申領 IDs:",
                    Array.from(b)
                  ),
                  console.log(
                    "[InternalRequestsCarousel] 之前待處理申領 IDs:",
                    Array.from(h.current)
                  ),
                  console.log("[InternalRequestsCarousel] 新增的申領 IDs:", A),
                  (R = !0))),
            console.log(
              "[InternalRequestsCarousel] New requests:",
              A.length,
              A
            ),
            console.log(
              "[InternalRequestsCarousel] Should play notification:",
              R
            ),
            console.log(
              "[InternalRequestsCarousel] Is initial load:",
              f.current
            ),
            R)
          ) {
            console.log("[InternalRequestsCarousel] 當前顯示模式:", m),
              m === "all"
                ? (console.log(
                    "[InternalRequestsCarousel] 重置輪播到第一頁 (all 模式)"
                  ),
                  s(0))
                : m === "separate"
                ? (console.log(
                    "[InternalRequestsCarousel] 重置緊急申領輪播到第一頁 (separate 模式)"
                  ),
                  a(0))
                : m === "urgentOnly" &&
                  (console.log(
                    "[InternalRequestsCarousel] 重置緊急申領輪播到第一頁 (urgentOnly 模式)"
                  ),
                  a(0));
            const U = Date.now();
            console.log(
              "[InternalRequestsCarousel] 重置輪播計時器，時間戳:",
              U
            ),
              z(U),
              (async () => {
                try {
                  await me.playNotification(),
                    console.log(
                      "======= [InternalRequestsCarousel] 音效播放完成 ======="
                    );
                } catch (je) {
                  console.error(
                    "======= [InternalRequestsCarousel] 音效播放失敗 =======",
                    je
                  );
                }
              })();
          } else
            f.current
              ? console.log(
                  "[InternalRequestsCarousel] 初始載入中，跳過音效通知"
                )
              : A.length === 0 &&
                console.log(
                  "[InternalRequestsCarousel] 無新的申領，跳過音效通知"
                );
          (g.current = new Set(S)), (h.current = new Set(b));
        } catch (S) {
          console.error(
            "[InternalRequestsCarousel] Error in urgent request detection:",
            S
          );
        }
      }, [e, m, x]),
      j.useEffect(() => {
        const S = (b) => {
          var A, U, je;
          const R = b;
          ((A = R.detail) == null ? void 0 : A.displayMode) !== void 0 &&
            p(R.detail.displayMode),
            ((U = R.detail) == null ? void 0 : U.notifyMode) !== void 0 &&
              y(R.detail.notifyMode),
            ((je = R.detail) == null ? void 0 : je.reminderInterval) !==
              void 0 && k(R.detail.reminderInterval);
        };
        return (
          window.addEventListener("internalRequestsSettingChanged", S),
          () => window.removeEventListener("internalRequestsSettingChanged", S)
        );
      }, []),
      j.useEffect(() => {
        console.log(
          "======= [InternalRequestsCarousel] 設置定期提醒計時器 ======="
        ),
          console.log("[InternalRequestsCarousel] 提醒間隔:", N, "分鐘");
        const S = setInterval(() => {
          const b = w.current.filter(
            (R) => R.state === "等待過帳" && R.actionType === "緊急申領"
          );
          b.length > 0
            ? (console.log(
                "======= [InternalRequestsCarousel] 定期提醒：檢測到未處理的緊急申領 ======="
              ),
              console.log("[InternalRequestsCarousel] 緊急申領數量:", b.length),
              console.log(
                "[InternalRequestsCarousel] 緊急申領 IDs:",
                b.map((R) => R.id)
              ),
              (async () => {
                try {
                  await me.playNotification(),
                    console.log(
                      "======= [InternalRequestsCarousel] 定期提醒音效播放完成 ======="
                    );
                } catch (R) {
                  console.error(
                    "======= [InternalRequestsCarousel] 定期提醒音效播放失敗 =======",
                    R
                  );
                }
              })())
            : console.log(
                "======= [InternalRequestsCarousel] 定期提醒：無未處理的緊急申領 ======="
              );
        }, N * 60 * 1e3);
        return () => {
          console.log(
            "======= [InternalRequestsCarousel] 清除定期提醒計時器 ======="
          ),
            clearInterval(S);
        };
      }, [N]);
    const _ = e.filter((S) => S.actionType === "緊急申領").length,
      I = e.filter((S) => S.actionType !== "緊急申領").length,
      v = e.length;
    j.useEffect(() => {
      if (m === "separate") {
        const S = [];
        if (_ > c) {
          const b = setInterval(() => {
            a((R) => {
              const A = R + c;
              return A >= _ ? 0 : A;
            });
          }, 8e3);
          S.push(b);
        }
        if (I > c) {
          const b = setInterval(() => {
            o((R) => {
              const A = R + c;
              return A >= I ? 0 : A;
            });
          }, 8e3);
          S.push(b);
        }
        return () => S.forEach((b) => clearInterval(b));
      } else {
        const S = m === "urgentOnly" ? _ : v;
        if (S > c) {
          const b = setInterval(() => {
            s((R) => {
              const A = R + c;
              return A >= S ? 0 : A;
            });
          }, 8e3);
          return () => clearInterval(b);
        }
      }
    }, [_, I, v, m, c, C]);
    const D = () => {
        const S = me.toggle();
        d(S);
      },
      L = (S, b) => {
        if (S === "等待過帳" && b === "緊急申領")
          return "bg-red-100 border-red-300";
        switch (S) {
          case "等待過帳":
            return "bg-yellow-100 border-yellow-200";
          case "已過帳":
            return "bg-white border-gray-200";
          case "已簽收":
            return "bg-green-100 border-green-200";
          default:
            return "bg-gray-100 border-gray-200";
        }
      },
      $ = (S, b) => {
        if (S === "等待過帳" && b === "緊急申領") return "text-gray-800";
        switch (S) {
          case "等待過帳":
            return "text-yellow-800";
          case "已過帳":
            return "text-gray-800";
          case "已簽收":
            return "text-green-800";
          default:
            return "text-gray-800";
        }
      },
      B = (S) => {
        try {
          return new Date(S.replace(/\//g, "-")).toLocaleString("zh-TW", {
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          });
        } catch {
          return S;
        }
      },
      se = (S, b) => {
        const R = S.state === "等待過帳" && S.actionType === "緊急申領";
        return n.jsx("div", {
          className: "h-full flex flex-col",
          children: n.jsxs("div", {
            className: `flex-1 p-3 border-2 rounded-lg transition-all flex flex-col ${L(
              S.state,
              S.actionType
            )}`,
            children: [
              n.jsxs("div", {
                className: "flex items-start justify-between mb-1 gap-1",
                children: [
                  n.jsxs("div", {
                    className: "flex-1 min-w-0",
                    children: [
                      n.jsx("h4", {
                        className: `font-semibold text-lg ${$(
                          S.state,
                          S.actionType
                        )} leading-tight truncate mb-1`,
                        title: S.name,
                        children: S.name,
                      }),
                      n.jsx("div", {
                        className: `text-sm ${$(S.state, S.actionType)}`,
                        children: S.code,
                      }),
                    ],
                  }),
                  S.actionType === "緊急申領" &&
                    n.jsxs("div", {
                      className:
                        "inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-red-600 text-white flex-shrink-0",
                      children: [
                        n.jsx(Le, { size: 12, className: "mr-1" }),
                        "緊急申領",
                      ],
                    }),
                ],
              }),
              n.jsxs("div", {
                className: `grid grid-cols-2 gap-1 text-base ${$(
                  S.state,
                  S.actionType
                )} flex-1 min-h-0`,
                children: [
                  n.jsxs("div", {
                    className: "space-y-1",
                    children: [
                      n.jsxs("div", {
                        className: "flex items-center min-w-0",
                        children: [
                          n.jsx(Bu, {
                            size: 20,
                            className: `mr-2 flex-shrink-0 ${
                              R ? "text-gray-800" : "text-gray-400"
                            }`,
                          }),
                          n.jsx("span", {
                            className: "truncate",
                            children: n.jsx("strong", {
                              children: S.requestingUnit,
                            }),
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "flex items-center min-w-0",
                        children: [
                          n.jsx(Js, {
                            size: 20,
                            className: `mr-2 flex-shrink-0 ${
                              R ? "text-gray-800" : "text-gray-400"
                            }`,
                          }),
                          n.jsx("span", {
                            className: "truncate",
                            children: n.jsx("strong", {
                              children: S.requestingPerson,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: "space-y-1",
                    children: [
                      n.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          n.jsx(Ie, {
                            size: 20,
                            className: `mr-2 ${
                              R ? "text-gray-800" : "text-gray-400"
                            }`,
                          }),
                          n.jsx("span", {
                            children: n.jsx("strong", {
                              children: S.requestedQuantity,
                            }),
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          n.jsx(Ar, {
                            size: 20,
                            className: `mr-2 ${
                              R ? "text-gray-800" : "text-gray-400"
                            }`,
                          }),
                          n.jsx("span", {
                            children: n.jsx("strong", {
                              children: B(S.requestTime),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              S.remarks &&
                n.jsxs("div", {
                  className: `mt-3 p-2 border rounded-lg text-base flex-shrink-0 ${
                    R
                      ? "bg-red-600 border-red-700 text-white"
                      : "bg-gray-50 border-gray-200 text-gray-700"
                  }`,
                  children: [
                    n.jsx("span", {
                      className: "font-medium",
                      children: "備註: ",
                    }),
                    n.jsx("span", { children: S.remarks }),
                  ],
                }),
            ],
          }),
        });
      },
      ae = e.filter((S) => S.actionType === "緊急申領"),
      M = e.filter((S) => S.actionType !== "緊急申領");
    if (m === "urgentOnly" ? ae.length === 0 : e.length === 0)
      return n.jsxs("div", {
        className:
          "bg-white rounded-lg shadow-sm border border-gray-200 h-full flex flex-col",
        children: [
          n.jsx("div", {
            className: "p-2 border-b border-gray-200 bg-teal-50",
            children: n.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                n.jsxs("div", {
                  className: "flex items-center",
                  children: [
                    n.jsx(Yt, { size: 20, className: "text-teal-600 mr-2" }),
                    n.jsx("h3", {
                      className: "text-xl font-semibold text-gray-800",
                      children: "藥品申領通知",
                    }),
                  ],
                }),
                n.jsx("button", {
                  onClick: D,
                  className: `p-2 rounded-lg transition-colors ${
                    u
                      ? "bg-green-100 text-green-600 hover:bg-green-200"
                      : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                  }`,
                  title: u ? "通知已啟用" : "通知已關閉",
                  children: u
                    ? n.jsx(Hu, { size: 18, className: "fill-current" })
                    : n.jsx(Vu, { size: 18 }),
                }),
              ],
            }),
          }),
          n.jsx("div", {
            className: "flex-1 flex items-center justify-center",
            children: n.jsxs("div", {
              className: "text-center text-gray-500",
              children: [
                n.jsx(Ie, {
                  size: 48,
                  className: "mx-auto text-gray-300 mb-2",
                }),
                n.jsx("p", {
                  children:
                    m === "urgentOnly" ? "暫無緊急申領" : "暫無藥品申領",
                }),
              ],
            }),
          }),
        ],
      });
    const P = [...e].sort((S, b) => {
      if (S.state === "等待過帳" && S.actionType === "緊急申領") return -1;
      if (b.state === "等待過帳" && b.actionType === "緊急申領") return 1;
      const R = { 等待過帳: 0, 已過帳: 1, 已簽收: 2 },
        A = R[S.state],
        U = R[b.state];
      if (A !== U) return A - U;
      try {
        const je = new Date(S.requestTime.replace(/\//g, "-")).getTime();
        return new Date(b.requestTime.replace(/\//g, "-")).getTime() - je;
      } catch {
        return 0;
      }
    });
    if (m === "separate") {
      const S = ae.slice(l, l + c),
        b = M.slice(i, i + c);
      return n.jsxs("div", {
        className:
          "bg-white rounded-lg shadow-sm border border-gray-200 h-full flex flex-col min-h-0 max-h-full",
        children: [
          n.jsx("div", {
            className: "p-2 border-b border-gray-200 bg-teal-50 flex-shrink-0",
            children: n.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                n.jsxs("div", {
                  className: "flex items-center",
                  children: [
                    n.jsx(Yt, { size: 20, className: "text-teal-600 mr-2" }),
                    n.jsx("h3", {
                      className: "text-xl font-semibold text-gray-800",
                      children: "藥品申領通知",
                    }),
                  ],
                }),
                n.jsx("div", {
                  className: "flex items-center space-x-4",
                  children: n.jsxs("span", {
                    className: "text-sm text-gray-500 font-medium",
                    children: [
                      e.filter((R) => R.state === "等待過帳").length,
                      " 項待處理",
                    ],
                  }),
                }),
              ],
            }),
          }),
          n.jsxs("div", {
            className:
              "flex-1 grid grid-cols-2 gap-2 p-2 min-h-0 overflow-hidden",
            children: [
              n.jsxs("div", {
                className: "flex flex-col min-h-0",
                children: [
                  n.jsxs("div", {
                    className:
                      "flex justify-center text-center text-sm font-semibold text-red-600 mb-1 bg-red-50 py-1 rounded",
                    children: [
                      n.jsxs("div", {
                        className: "mr-4",
                        children: ["緊急申領 (", ae.length, ")"],
                      }),
                      n.jsxs("div", {
                        children: [
                          "第 ",
                          Math.floor(l / c) + 1,
                          " / ",
                          Math.ceil(ae.length / c),
                          " 頁",
                        ],
                      }),
                    ],
                  }),
                  n.jsx("div", {
                    className:
                      "flex-1 min-h-0 overflow-hidden flex flex-col gap-2",
                    children:
                      ae.length === 0
                        ? n.jsx("div", {
                            className:
                              "h-full flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg",
                            children: n.jsx("p", {
                              className: "text-sm text-gray-400",
                              children: "暫無緊急申領",
                            }),
                          })
                        : S.map((R, A) =>
                            n.jsx(
                              "div",
                              { className: "flex-1 min-h-0", children: se(R) },
                              R.id
                            )
                          ),
                  }),
                ],
              }),
              n.jsxs("div", {
                className: "flex flex-col min-h-0",
                children: [
                  n.jsxs("div", {
                    className:
                      "flex justify-center text-center text-sm font-semibold text-teal-600 mb-1 bg-teal-50 py-1 rounded",
                    children: [
                      n.jsxs("div", {
                        className: "mr-4",
                        children: ["一般申領 (", M.length, ")"],
                      }),
                      n.jsxs("div", {
                        children: [
                          "第 ",
                          Math.floor(i / c) + 1,
                          " / ",
                          Math.ceil(M.length / c),
                          " 頁",
                        ],
                      }),
                    ],
                  }),
                  n.jsx("div", {
                    className:
                      "flex-1 min-h-0 overflow-hidden flex flex-col gap-2",
                    children:
                      M.length === 0
                        ? n.jsx("div", {
                            className:
                              "h-full flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg",
                            children: n.jsx("p", {
                              className: "text-sm text-gray-400",
                              children: "暫無一般申領",
                            }),
                          })
                        : b.map((R, A) =>
                            n.jsx(
                              "div",
                              { className: "flex-1 min-h-0", children: se(R) },
                              R.id
                            )
                          ),
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    const F =
        m === "urgentOnly" ? P.filter((S) => S.actionType === "緊急申領") : P,
      E = F.slice(r, r + c);
    return n.jsxs("div", {
      className:
        "bg-white rounded-lg shadow-sm border border-gray-200 h-full flex flex-col min-h-0 max-h-full",
      children: [
        n.jsx("div", {
          className: "p-2 border-b border-gray-200 bg-teal-50 flex-shrink-0",
          children: n.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              n.jsxs("div", {
                className: "flex items-center",
                children: [
                  n.jsx(Yt, { size: 20, className: "text-teal-600 mr-2" }),
                  n.jsx("h3", {
                    className: "text-xl font-semibold text-gray-800",
                    children: "藥品申領通知",
                  }),
                ],
              }),
              n.jsxs("div", {
                className: "flex items-center space-x-4",
                children: [
                  m === "urgentOnly" &&
                    n.jsx("span", {
                      className: "text-sm text-red-600 font-semibold",
                      children: "僅顯示緊急申領",
                    }),
                  n.jsxs("span", {
                    className: "text-sm text-gray-500 font-medium",
                    children: [
                      m === "urgentOnly"
                        ? e.filter(
                            (S) =>
                              S.state === "等待過帳" &&
                              S.actionType === "緊急申領"
                          ).length
                        : e.filter((S) => S.state === "等待過帳").length,
                      " 項待處理",
                    ],
                  }),
                  n.jsxs("span", {
                    className: "text-sm text-gray-500 font-medium",
                    children: [
                      "第 ",
                      Math.floor(r / c) + 1,
                      " / ",
                      Math.ceil(F.length / c),
                      " 頁",
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        n.jsx("div", {
          className: "flex-1 p-1 min-h-0 overflow-hidden flex flex-col gap-2",
          children: E.map((S) =>
            n.jsx("div", { className: "flex-1 min-h-0", children: se(S) }, S.id)
          ),
        }),
      ],
    });
  },
  rd = ({
    internalRequests: e,
    isFullscreen: t = !1,
    showInFocus: r,
    onFocusToggle: s,
    gridHeight: l = 2,
    error: a,
  }) =>
    a != null && a.hasError
      ? t
        ? n.jsx("div", {
            className: "bg-gray-800 rounded-lg p-6 h-full",
            children: n.jsx(ze, { message: a.message || "資料載入失敗" }),
          })
        : n.jsx(ze, { message: a.message || "資料載入失敗" })
      : t
      ? n.jsx(eh, { internalRequests: e, gridHeight: l })
      : n.jsx(Z0, { internalRequests: e, showInFocus: r, onFocusToggle: s }),
  th = ({
    isOpen: e,
    onClose: t,
    dashboardData: r,
    lastRefresh: s,
    sectionVisibility: l,
  }) => {
    const [a, i] = j.useState(new Date()),
      [o, c] = j.useState(E0());
    j.useEffect(() => {
      if (!e) return;
      const m = setInterval(() => {
        i(new Date());
      }, 1e3);
      return () => clearInterval(m);
    }, [e]),
      j.useEffect(() => {
        _0(o);
      }, [o]),
      j.useEffect(() => {
        const m = (p) => {
          p.key === "Escape" && t();
        };
        return (
          e &&
            (document.addEventListener("keydown", m),
            (document.body.style.overflow = "hidden")),
          () => {
            document.removeEventListener("keydown", m),
              (document.body.style.overflow = "unset");
          }
        );
      }, [e, t]);
    const u = (m, p) => {
        c((x) => ({ ...x, [m]: { ...x[m], position: p } }));
      },
      d = (m, p) => {
        c((x) => ({ ...x, [m]: { ...x[m], ...p } }));
      };
    return e
      ? n.jsxs("div", {
          className: "fixed inset-0 bg-gray-900 z-50 flex flex-col",
          children: [
            n.jsxs("div", {
              className:
                "bg-gray-800 text-white px-6 py-3 flex items-center justify-between border-b border-gray-700",
              children: [
                n.jsxs("div", {
                  className: "flex items-center space-x-6",
                  children: [
                    n.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        n.jsx(Wu, {
                          size: 24,
                          className: `text-blue-400 ${Do.xlarge}`,
                        }),
                        n.jsx("h1", {
                          className: `${vt.subTitle} font-bold`,
                          children: "藥庫監控系統",
                        }),
                      ],
                    }),
                    n.jsx("div", {
                      className: `${vt.subTitle} font-mono`,
                      children: a.toLocaleString("zh-TW", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: !1,
                      }),
                    }),
                  ],
                }),
                n.jsxs("div", {
                  className: "flex items-center space-x-4",
                  children: [
                    s &&
                      n.jsxs("span", {
                        className: `text-gray-300 ${vt.content}`,
                        children: ["最後更新: ", s.toLocaleTimeString("zh-TW")],
                      }),
                    n.jsx("button", {
                      onClick: t,
                      className:
                        "p-2 hover:bg-gray-700 rounded-lg transition-colors",
                      title: "退出專注模式 (ESC)",
                      children: n.jsx(Ae, { size: 24, className: Do.xlarge }),
                    }),
                  ],
                }),
              ],
            }),
            n.jsx("div", {
              className: "flex-1 p-3 overflow-hidden",
              children: n.jsx("div", {
                className: "h-full grid grid-cols-8 grid-rows-6 gap-4",
                children: Object.entries(l).some(([m, p]) => p)
                  ? n.jsxs(n.Fragment, {
                      children: [
                        l.bulletins &&
                          n.jsx(Ut, {
                            sectionKey: "bulletins",
                            gridData: o.bulletins,
                            onPositionChange: u,
                            onSizeChange: d,
                            gridArea: $t(o.bulletins.position, {
                              row: o.bulletins.row,
                              col: o.bulletins.col,
                            }),
                            children: n.jsx(Yu, {
                              bulletins: r.bulletins,
                              isFullscreen: !0,
                            }),
                          }),
                        l.tasks &&
                          n.jsx(Ut, {
                            sectionKey: "tasks",
                            gridData: o.tasks,
                            onPositionChange: u,
                            onSizeChange: d,
                            gridArea: $t(o.tasks.position, {
                              row: o.tasks.row,
                              col: o.tasks.col,
                            }),
                            children: n.jsx(Xu, {
                              restockTasks: r.restockTasks,
                              receivingTasks: r.receivingTasks,
                              putAwayTasks: r.putAwayTasks,
                              isFullscreen: !0,
                            }),
                          }),
                        l.incomingDrugs &&
                          n.jsx(Ut, {
                            sectionKey: "incomingDrugs",
                            gridData: o.incomingDrugs,
                            onPositionChange: u,
                            onSizeChange: d,
                            gridArea: $t(o.incomingDrugs.position, {
                              row: o.incomingDrugs.row,
                              col: o.incomingDrugs.col,
                            }),
                            children: n.jsx(Ju, {
                              incomingDrugs: r.incomingDrugs,
                              isFullscreen: !0,
                            }),
                          }),
                        l.outOfStock &&
                          n.jsx(Ut, {
                            sectionKey: "outOfStock",
                            gridData: o.outOfStock,
                            onPositionChange: u,
                            onSizeChange: d,
                            gridArea: $t(o.outOfStock.position, {
                              row: o.outOfStock.row,
                              col: o.outOfStock.col,
                            }),
                            children: n.jsx(Zu, {
                              outOfStockItems: r.outOfStockItems,
                              isFullscreen: !0,
                            }),
                          }),
                        l.drugReplacements &&
                          n.jsx(Ut, {
                            sectionKey: "drugReplacements",
                            gridData: o.drugReplacements,
                            onPositionChange: u,
                            onSizeChange: d,
                            gridArea: $t(o.drugReplacements.position, {
                              row: o.drugReplacements.row,
                              col: o.drugReplacements.col,
                            }),
                            children: n.jsx(ed, {
                              drugReplacements: r.drugReplacements,
                              isFullscreen: !0,
                            }),
                          }),
                        l.inventory &&
                          n.jsx(Ut, {
                            sectionKey: "inventory",
                            gridData: o.inventory,
                            onPositionChange: u,
                            onSizeChange: d,
                            gridArea: $t(o.inventory.position, {
                              row: o.inventory.row,
                              col: o.inventory.col,
                            }),
                            children: n.jsx(td, {
                              inventoryHighlights: r.inventoryHighlights,
                              isFullscreen: !0,
                            }),
                          }),
                        l.internalRequests &&
                          n.jsx(Ut, {
                            sectionKey: "internalRequests",
                            gridData: o.internalRequests,
                            onPositionChange: u,
                            onSizeChange: d,
                            gridArea: $t(o.internalRequests.position, {
                              row: o.internalRequests.row,
                              col: o.internalRequests.col,
                            }),
                            children: n.jsx(rd, {
                              internalRequests: r.internalRequests,
                              isFullscreen: !0,
                              gridHeight: o.internalRequests.row,
                            }),
                          }),
                      ],
                    })
                  : n.jsx("div", {
                      className:
                        "col-span-8 row-span-6 flex items-center justify-center",
                      children: n.jsxs("div", {
                        className: "text-center text-gray-400",
                        children: [
                          n.jsx("div", {
                            className: `${vt.title} mb-4`,
                            children: "👁️",
                          }),
                          n.jsx("p", {
                            className: vt.subTitle,
                            children: "所有區塊都已隱藏",
                          }),
                          n.jsx("p", {
                            className: `${vt.content} mt-2`,
                            children: "請在一般模式下開啟需要顯示的區塊",
                          }),
                        ],
                      }),
                    }),
              }),
            }),
            n.jsx("div", {
              className: `bg-gray-800 text-gray-300 text-center py-1 ${vt.smallLabel} border-t border-gray-700`,
              children:
                "按 ESC 鍵退出專注顯示模式 | 拖拽標題移動位置 | 拖拽右下角調整大小 | 內容每 8 秒自動輪播",
            }),
          ],
        })
      : null;
  },
  nd = () => {
    const [e, t] = j.useState(!document.hidden);
    return (
      j.useEffect(() => {
        const r = () => {
          const s = !document.hidden;
          t(s),
            console.log("[usePageVisibility] Page visibility changed:", {
              visible: s,
              visibilityState: document.visibilityState,
              timestamp: new Date().toISOString(),
            });
        };
        return (
          document.addEventListener("visibilitychange", r),
          () => {
            document.removeEventListener("visibilitychange", r);
          }
        );
      }, []),
      e
    );
  },
  rh = ({
    intervalMs: e,
    onPoll: t,
    enabled: r = !0,
    maxRetryDelay: s = 6e4,
  }) => {
    const l = nd(),
      a = j.useRef(Date.now() + e),
      i = j.useRef(!1),
      o = j.useRef(null),
      c = j.useRef(e),
      u = j.useCallback(async () => {
        if (i.current || !r) return;
        i.current = !0;
        const m = Date.now();
        try {
          console.log(
            "[useRobustPolling] Executing poll at",
            new Date().toISOString(),
            "with interval",
            e,
            "ms"
          ),
            await t(),
            (c.current = e);
          const p = Date.now() - m,
            x = Math.max(0, e - p);
          console.log(
            "[useRobustPolling] Poll completed successfully, next poll in",
            x,
            "ms"
          ),
            o.current && clearTimeout(o.current),
            (a.current = Date.now() + x),
            (o.current = setTimeout(() => {
              l && r && !i.current && u();
            }, x));
        } catch (p) {
          console.error("[useRobustPolling] Poll failed:", p),
            (c.current = Math.min(c.current * 1.5, s)),
            console.log("[useRobustPolling] Retrying in", c.current, "ms"),
            o.current && clearTimeout(o.current),
            (a.current = Date.now() + c.current),
            (o.current = setTimeout(() => {
              l && r && !i.current && u();
            }, c.current));
        } finally {
          i.current = !1;
        }
      }, [r, t, e, s, l]);
    return (
      j.useEffect(() => {
        if (!r) {
          console.log("[useRobustPolling] Polling disabled, clearing timers"),
            o.current && (clearTimeout(o.current), (o.current = null));
          return;
        }
        return (
          l
            ? (console.log(
                "[useRobustPolling] Effect triggered - interval changed to:",
                e,
                "ms"
              ),
              o.current && (clearTimeout(o.current), (o.current = null)),
              console.log(
                "[useRobustPolling] Starting new polling cycle with interval:",
                e,
                "ms"
              ),
              u())
            : (console.log("[useRobustPolling] Page hidden, pausing polling"),
              o.current && (clearTimeout(o.current), (o.current = null))),
          () => {
            o.current && (clearTimeout(o.current), (o.current = null));
          }
        );
      }, [l, r, u, e]),
      {
        triggerImmediatePoll: j.useCallback(() => {
          console.log("[useRobustPolling] Immediate poll triggered"),
            o.current && (clearTimeout(o.current), (o.current = null)),
            u();
        }, [u]),
      }
    );
  },
  nh = ({ isOpen: e, onClose: t, onSave: r, currentInterval: s }) => {
    const [l, a] = j.useState(s);
    if (
      (j.useEffect(() => {
        a(s);
      }, [s]),
      !e)
    )
      return null;
    const i = () => {
      if (l < 2) {
        alert("刷新間隔不能小於 2 秒");
        return;
      }
      if (l > 300) {
        alert("刷新間隔不能大於 300 秒（5 分鐘）");
        return;
      }
      r(l), t();
    };
    return n.jsx("div", {
      className:
        "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
      children: n.jsxs("div", {
        className: "bg-white rounded-xl shadow-2xl max-w-md w-full mx-4",
        children: [
          n.jsxs("div", {
            className:
              "flex items-center justify-between p-6 border-b border-gray-200",
            children: [
              n.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  n.jsx(Ar, { size: 24, className: "text-blue-600" }),
                  n.jsx("h2", {
                    className: "text-xl font-semibold text-gray-800",
                    children: "刷新間隔設定",
                  }),
                ],
              }),
              n.jsx("button", {
                onClick: t,
                className: "p-1 hover:bg-gray-100 rounded-lg transition-colors",
                children: n.jsx(Ae, { size: 20 }),
              }),
            ],
          }),
          n.jsxs("div", {
            className: "p-6 space-y-6",
            children: [
              n.jsxs("div", {
                children: [
                  n.jsx("label", {
                    className: "block text-sm font-medium text-gray-700 mb-2",
                    children: "自動刷新間隔（秒）",
                  }),
                  n.jsx("input", {
                    type: "number",
                    min: "2",
                    max: "300",
                    value: l,
                    onChange: (o) => a(Number(o.target.value)),
                    className:
                      "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                  }),
                  n.jsx("p", {
                    className: "mt-2 text-sm text-gray-500",
                    children: "建議範圍：2 ~ 300 秒（預設：20 秒）",
                  }),
                ],
              }),
              n.jsx("div", {
                className: "bg-blue-50 border border-blue-200 rounded-lg p-4",
                children: n.jsxs("p", {
                  className: "text-sm text-blue-800",
                  children: [
                    n.jsx("strong", { children: "提示：" }),
                    "較短的刷新間隔可以更即時地顯示資料變化，但會增加伺服器負擔。建議根據實際需求調整。",
                  ],
                }),
              }),
            ],
          }),
          n.jsxs("div", {
            className:
              "flex items-center justify-end gap-3 p-6 border-t border-gray-200 bg-gray-50 rounded-b-xl",
            children: [
              n.jsx("button", {
                onClick: t,
                className:
                  "px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors",
                children: "取消",
              }),
              n.jsx("button", {
                onClick: i,
                className:
                  "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
                children: "儲存設定",
              }),
            ],
          }),
        ],
      }),
    });
  },
  sh = () => {
    const e = j.useRef(null);
    j.useRef(null);
    const t = j.useRef(null);
    return (
      j.useEffect(() => {
        let r = null,
          s = null;
        const l = async () => {
            if ("wakeLock" in navigator)
              try {
                (e.current = await navigator.wakeLock.request("screen")),
                  console.log("[KeepAwake] Wake Lock acquired"),
                  e.current.addEventListener("release", () => {
                    console.log("[KeepAwake] Wake Lock released");
                  });
              } catch (o) {
                console.error("[KeepAwake] Wake Lock failed:", o);
              }
            else console.warn("[KeepAwake] Wake Lock API not supported");
          },
          a = () => {
            try {
              (t.current = new (window.AudioContext ||
                window.webkitAudioContext)()),
                (r = t.current.createOscillator()),
                (s = t.current.createGain()),
                r.connect(s),
                s.connect(t.current.destination),
                (s.gain.value = 0.001),
                (r.frequency.value = 20),
                (r.type = "sine"),
                r.start(),
                console.log("[KeepAwake] Silent audio started");
            } catch (o) {
              console.error("[KeepAwake] Silent audio failed:", o);
            }
          },
          i = async () => {
            document.visibilityState === "visible" &&
              (console.log(
                "[KeepAwake] Page became visible, re-acquiring wake lock"
              ),
              await l(),
              t.current &&
                t.current.state === "suspended" &&
                (await t.current.resume(),
                console.log("[KeepAwake] AudioContext resumed")));
          };
        return (
          l(),
          a(),
          document.addEventListener("visibilitychange", i),
          () => {
            if (
              (console.log("[KeepAwake] Cleaning up keep-awake mechanisms"),
              e.current && (e.current.release(), (e.current = null)),
              r)
            )
              try {
                r.stop(), r.disconnect();
              } catch (o) {
                console.warn("[KeepAwake] Error stopping oscillator:", o);
              }
            s && s.disconnect(),
              t.current && t.current.state !== "closed" && t.current.close(),
              document.removeEventListener("visibilitychange", i);
          }
        );
      }, []),
      null
    );
  },
  lh = () => {
    var v, D, L, $, B, se, ae;
    const { t: e } = Fr();
    sh();
    const t = nd(),
      [r, s] = j.useState(null),
      [l, a] = j.useState(!0),
      [i, o] = j.useState(null),
      [c, u] = j.useState(null),
      [d, m] = j.useState(!0),
      [p, x] = j.useState(!1),
      [y, N] = j.useState(() => {
        const M = localStorage.getItem("dashboard_refresh_interval");
        return M ? parseInt(M, 10) : 20;
      }),
      [k, g] = j.useState({
        bulletins: !0,
        tasks: !0,
        incomingDrugs: !0,
        outOfStock: !0,
        drugReplacements: !0,
        inventory: !0,
        internalRequests: !0,
      }),
      h = Rn(),
      f = h ? `${h.Name} - ${h.Employer}` : "鴻森智能科技 - 臨床藥事科",
      w = j.useCallback(async () => {
        try {
          console.log("[PrescriptionQueryPage] Loading dashboard data..."),
            o(null);
          const M = await S0();
          if (!M || typeof M != "object")
            throw new Error("Invalid data format received from API");
          Array.isArray(M.bulletins) ||
            (console.warn(
              "[PrescriptionQueryPage] Invalid bulletins data, using empty array"
            ),
            (M.bulletins = [])),
            Array.isArray(M.internalRequests) ||
              (console.warn(
                "[PrescriptionQueryPage] Invalid internalRequests data, using empty array"
              ),
              (M.internalRequests = [])),
            console.log("[PrescriptionQueryPage] Dashboard data loaded:", {
              bulletins: M.bulletins.length,
              internalRequests: M.internalRequests.length,
              urgentRequests: M.internalRequests.filter(
                (X) => X.state === "等待過帳" && X.actionType === "緊急申領"
              ).length,
            }),
            s(M),
            u(new Date());
        } catch (M) {
          const X = M instanceof Error ? M.message : "載入資料失敗，請稍後再試";
          throw (
            (o(X),
            console.error(
              "[PrescriptionQueryPage] Failed to load dashboard data:",
              M
            ),
            M)
          );
        } finally {
          a(!1);
        }
      }, []);
    rh({ intervalMs: y * 1e3, onPoll: w, enabled: !0 }),
      j.useEffect(() => {
        console.log(
          "[PrescriptionQueryPage] Setting up page auto-reload every 15 minutes"
        );
        const X = setTimeout(() => {
          console.log(
            "[PrescriptionQueryPage] Auto-reloading page after 15 minutes"
          ),
            window.location.reload();
        }, 9e5);
        return () => {
          console.log(
            "[PrescriptionQueryPage] Clearing page auto-reload timer"
          ),
            clearTimeout(X);
        };
      }, []),
      j.useEffect(() => {
        t &&
          (console.log(
            "[PrescriptionQueryPage] Page became visible, forcing data refresh"
          ),
          w());
      }, [t, w]),
      j.useEffect(() => {
        (async () => {
          try {
            const X = D0();
            g(X), await Ku(), await w();
          } catch (X) {
            console.error("Failed to initialize:", X),
              o("初始化失敗，請重新整理頁面");
          }
        })();
      }, [w]);
    const C = () => {
        a(!0), w();
      },
      z = () => {
        w();
      },
      _ = (M, X) => {
        const P = { ...k, [M]: X };
        g(P), I0(P);
      },
      I = (M) => {
        N(M),
          localStorage.setItem("dashboard_refresh_interval", M.toString()),
          console.log(
            "[PrescriptionQueryPage] Refresh interval updated to",
            M,
            "seconds"
          );
      };
    return l && !r
      ? n.jsxs("div", {
          className: "min-h-screen flex flex-col bg-white",
          children: [
            n.jsx("main", {
              className: "flex-1 p-4 md:p-6 lg:p-8 pb-8",
              children: n.jsxs("div", {
                className: "max-w-screen-xl mx-auto",
                children: [
                  n.jsx("header", {
                    className: "h-[80px] mb-2",
                    children: n.jsxs("div", {
                      className: "flex items-start justify-between",
                      children: [
                        n.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            n.jsxs("button", {
                              onClick: () => {
                                const M = El();
                                M != null &&
                                  M.homepage &&
                                  (window.location.href = `${M.homepage}/phar_system/frontpage/`);
                              },
                              className:
                                "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors group relative",
                              title: e("platform.title"),
                              children: [
                                n.jsx(Cl, { size: 24 }),
                                n.jsx("span", {
                                  className:
                                    "absolute left-1/2 -translate-x-1/2 -bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
                                  children: e("platform.title"),
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              children: [
                                n.jsx("h1", {
                                  className:
                                    "text-2xl md:text-3xl font-semibold text-gray-800",
                                  children: e("app.title"),
                                }),
                                n.jsx("p", {
                                  className: "text-gray-600 text-sm",
                                  children: f,
                                }),
                              ],
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-center space-x-4",
                          children: [n.jsx(_l, {}), n.jsx(Dl, {})],
                        }),
                      ],
                    }),
                  }),
                  n.jsx("div", {
                    className: "flex items-center justify-center min-h-[400px]",
                    children: n.jsxs("div", {
                      className: "text-center",
                      children: [
                        n.jsx(Z, { size: "large" }),
                        n.jsx("p", {
                          className: "mt-4 text-gray-600",
                          children: "載入藥庫監控系統資料中...",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            n.jsx("footer", {
              className:
                "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-6 text-center text-gray-600 text-sm z-10",
              children: e("copyright"),
            }),
          ],
        })
      : i && !r
      ? n.jsxs("div", {
          className: "min-h-screen flex flex-col bg-white",
          children: [
            n.jsx("main", {
              className: "flex-1 p-4 md:p-6 lg:p-8 pb-8",
              children: n.jsxs("div", {
                className: "max-w-screen-xl mx-auto",
                children: [
                  n.jsx("header", {
                    className: "h-[80px] mb-2",
                    children: n.jsxs("div", {
                      className: "flex items-start justify-between",
                      children: [
                        n.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            n.jsxs("button", {
                              onClick: () => {
                                const M = El();
                                M != null &&
                                  M.homepage &&
                                  (window.location.href = `${M.homepage}/phar_system/frontpage/`);
                              },
                              className:
                                "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors group relative",
                              title: e("platform.title"),
                              children: [
                                n.jsx(Cl, { size: 24 }),
                                n.jsx("span", {
                                  className:
                                    "absolute left-1/2 -translate-x-1/2 -bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
                                  children: e("platform.title"),
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              children: [
                                n.jsx("h1", {
                                  className:
                                    "text-2xl md:text-3xl font-semibold text-gray-800",
                                  children: e("app.title"),
                                }),
                                n.jsx("p", {
                                  className: "text-gray-600 text-sm",
                                  children: f,
                                }),
                              ],
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-center space-x-4",
                          children: [n.jsx(_l, {}), n.jsx(Dl, {})],
                        }),
                      ],
                    }),
                  }),
                  n.jsx("div", {
                    className: "flex items-center justify-center min-h-[400px]",
                    children: n.jsxs("div", {
                      className: "text-center",
                      children: [
                        n.jsx("div", {
                          className: "text-6xl mb-4",
                          children: "⚠️",
                        }),
                        n.jsx("h2", {
                          className: "text-xl font-semibold mb-2 text-red-600",
                          children: "載入失敗",
                        }),
                        n.jsx("p", {
                          className: "text-gray-600 mb-4",
                          children: i,
                        }),
                        n.jsx("button", {
                          onClick: C,
                          className:
                            "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
                          children: "重新載入",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            n.jsx("footer", {
              className:
                "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-6 text-center text-gray-600 text-sm z-10",
              children: e("copyright"),
            }),
          ],
        })
      : r
      ? n.jsxs("div", {
          className: "min-h-screen flex flex-col bg-gray-50",
          children: [
            n.jsx("main", {
              className: "flex-1 p-4 md:p-6 lg:p-8 pb-8",
              children: n.jsxs("div", {
                className: "max-w-screen-2xl mx-auto",
                children: [
                  n.jsx("header", {
                    className: "h-[80px] mb-6",
                    children: n.jsxs("div", {
                      className: "flex items-start justify-between",
                      children: [
                        n.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            n.jsxs("button", {
                              onClick: () => {
                                const M = El();
                                M != null &&
                                  M.homepage &&
                                  (window.location.href = `${M.homepage}/phar_system/frontpage/`);
                              },
                              className:
                                "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors group relative",
                              title: e("platform.title"),
                              children: [
                                n.jsx(Cl, { size: 24 }),
                                n.jsx("span", {
                                  className:
                                    "absolute left-1/2 -translate-x-1/2 -bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
                                  children: e("platform.title"),
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              children: [
                                n.jsx("h1", {
                                  className:
                                    "text-2xl md:text-3xl font-semibold text-gray-800",
                                  children: e("app.title"),
                                }),
                                n.jsx("p", {
                                  className: "text-gray-600 text-sm",
                                  children: f,
                                }),
                              ],
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-center space-x-4",
                          children: [
                            n.jsxs("div", {
                              className:
                                "flex items-center space-x-2 text-sm text-gray-500",
                              children: [
                                c &&
                                  n.jsxs("span", {
                                    children: [
                                      "最後更新: ",
                                      c.toLocaleTimeString("zh-TW"),
                                    ],
                                  }),
                                n.jsx("button", {
                                  onClick: C,
                                  disabled: l,
                                  className:
                                    "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                                  title: "重新整理",
                                  children: n.jsx(Cr, {
                                    size: 16,
                                    className: l ? "animate-spin" : "",
                                  }),
                                }),
                              ],
                            }),
                            n.jsxs("button", {
                              onClick: () => m(!0),
                              className:
                                "flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors",
                              title: "專注顯示模式",
                              children: [
                                n.jsx(Lm, { size: 16, className: "mr-2" }),
                                "專注顯示",
                              ],
                            }),
                            n.jsx("button", {
                              onClick: () => x(!0),
                              className:
                                "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors",
                              title: "刷新間隔設定",
                              children: n.jsx(nr, { size: 20 }),
                            }),
                            n.jsx(_l, {}),
                            n.jsx(Dl, {}),
                          ],
                        }),
                      ],
                    }),
                  }),
                  n.jsxs("div", {
                    className: "grid grid-cols-2 gap-4 mb-4",
                    children: [
                      n.jsx("div", {
                        className: "lg:col-span-2 xl:col-span-2",
                        children: n.jsx(Yu, {
                          bulletins: r.bulletins,
                          onBulletinAdded: z,
                          showInFocus: k.bulletins,
                          onFocusToggle: (M) => _("bulletins", M),
                          error: (v = r.errors) == null ? void 0 : v.bulletins,
                        }),
                      }),
                      n.jsx("div", {
                        className: "lg:col-span-2 xl:col-span-1",
                        children: n.jsx(Xu, {
                          restockTasks: r.restockTasks,
                          receivingTasks: r.receivingTasks,
                          putAwayTasks: r.putAwayTasks,
                          showInFocus: k.tasks,
                          onFocusToggle: (M) => _("tasks", M),
                          error: (D = r.errors) == null ? void 0 : D.tasks,
                        }),
                      }),
                      n.jsx("div", {
                        children: n.jsx(Ju, {
                          incomingDrugs: r.incomingDrugs,
                          showInFocus: k.incomingDrugs,
                          onFocusToggle: (M) => _("incomingDrugs", M),
                          error:
                            (L = r.errors) == null ? void 0 : L.incomingDrugs,
                        }),
                      }),
                      n.jsx("div", {
                        children: n.jsx(Zu, {
                          outOfStockItems: r.outOfStockItems,
                          onItemAdded: z,
                          showInFocus: k.outOfStock,
                          onFocusToggle: (M) => _("outOfStock", M),
                          error: ($ = r.errors) == null ? void 0 : $.outOfStock,
                        }),
                      }),
                      n.jsx("div", {
                        children: n.jsx(ed, {
                          drugReplacements: r.drugReplacements,
                          showInFocus: k.drugReplacements,
                          onFocusToggle: (M) => _("drugReplacements", M),
                          error:
                            (B = r.errors) == null
                              ? void 0
                              : B.drugReplacements,
                        }),
                      }),
                      n.jsx("div", {
                        children: n.jsx(td, {
                          inventoryHighlights: r.inventoryHighlights,
                          showInFocus: k.inventory,
                          onFocusToggle: (M) => _("inventory", M),
                          error:
                            (se = r.errors) == null ? void 0 : se.inventory,
                        }),
                      }),
                      n.jsx("div", {
                        className: "lg:col-span-2",
                        children: n.jsx(rd, {
                          internalRequests: r.internalRequests,
                          showInFocus: k.internalRequests,
                          onFocusToggle: (M) => _("internalRequests", M),
                          error:
                            (ae = r.errors) == null
                              ? void 0
                              : ae.internalRequests,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            n.jsx(th, {
              isOpen: d,
              onClose: () => m(!1),
              dashboardData: r,
              lastRefresh: c,
              sectionVisibility: k,
            }),
            n.jsx(nh, {
              isOpen: p,
              onClose: () => x(!1),
              onSave: I,
              currentInterval: y,
            }),
            n.jsx("footer", {
              className:
                "bg-white border-t border-gray-200 py-2 px-6 text-center text-gray-600 text-sm",
              children: e("copyright"),
            }),
          ],
        })
      : null;
  },
  ah = ({ onLogin: e }) => {
    const { t } = Fr(),
      [r, s] = j.useState(""),
      [l, a] = j.useState(""),
      [i, o] = j.useState(null),
      [c, u] = j.useState(!1),
      d = async (m) => {
        m.preventDefault(), o(null), u(!0);
        try {
          const p = await Vm({ ID: r, Password: l });
          p.Code === 200
            ? (Hm(p.Data), e())
            : p.Code === -1 || p.Code === -2
            ? o(p.Result)
            : o(t("error.api"));
        } catch (p) {
          console.error("Login error:", p),
            o(p instanceof Error ? p.message : t("error.api"));
        } finally {
          u(!1);
        }
      };
    return n.jsx("div", {
      className:
        "min-h-screen bg-gray-100 flex items-center justify-center p-4",
      children: n.jsxs("div", {
        className: "bg-white rounded-lg shadow-lg p-8 w-full max-w-md",
        children: [
          n.jsx("h1", {
            className: "text-2xl font-bold text-center text-gray-800 mb-8",
            children: t("app.title"),
          }),
          i &&
            n.jsxs("div", {
              className:
                "mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center gap-2",
              children: [
                n.jsx(Le, { size: 20 }),
                n.jsx("span", { children: i }),
              ],
            }),
          n.jsxs("form", {
            onSubmit: d,
            className: "space-y-6",
            children: [
              n.jsxs("div", {
                children: [
                  n.jsx("label", {
                    htmlFor: "id",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "帳號",
                  }),
                  n.jsx("input", {
                    type: "text",
                    id: "id",
                    value: r,
                    onChange: (m) => s(m.target.value),
                    className:
                      "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                    required: !0,
                    autoComplete: "username",
                  }),
                ],
              }),
              n.jsxs("div", {
                children: [
                  n.jsx("label", {
                    htmlFor: "password",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "密碼",
                  }),
                  n.jsx("input", {
                    type: "password",
                    id: "password",
                    value: l,
                    onChange: (m) => a(m.target.value),
                    className:
                      "w-full px-3 py-2 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                    required: !0,
                    autoComplete: "current-password",
                  }),
                ],
              }),
              n.jsx("button", {
                type: "submit",
                disabled: c,
                className: `w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center ${
                  c
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`,
                children: c
                  ? n.jsxs(n.Fragment, {
                      children: [
                        n.jsx(Z, { size: "small\\", className: "mr-2" }),
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
  };
function ih() {
  const [e, t] = j.useState(!1),
    [r, s] = j.useState(!1),
    [l, a] = j.useState(!0);
  j.useEffect(() => {
    (async () => {
      try {
        await Ku(), t(!0);
        const c = Qm();
        s(c),
          console.log("Authentication check:", {
            authenticated: c,
            userSession: localStorage.getItem("user_session")
              ? "exists"
              : "missing",
          });
      } catch (c) {
        console.error("Failed to load configuration:", c);
      } finally {
        a(!1);
      }
    })();
  }, []);
  const i = () => {
    s(!0);
  };
  return !e || l
    ? n.jsx("div", {
        className: "min-h-screen flex items-center justify-center",
        children: n.jsx("div", {
          className: "text-gray-600",
          children: "Loading...",
        }),
      })
    : n.jsx(Um, { children: r ? n.jsx(lh, {}) : n.jsx(ah, { onLogin: i }) });
}
Uu(document.getElementById("root")).render(
  n.jsx(j.StrictMode, { children: n.jsx(ih, {}) })
);
