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
function nd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var _o = { exports: {} },
  Ms = {},
  zo = { exports: {} },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kn = Symbol.for("react.element"),
  sd = Symbol.for("react.portal"),
  ld = Symbol.for("react.fragment"),
  ad = Symbol.for("react.strict_mode"),
  id = Symbol.for("react.profiler"),
  od = Symbol.for("react.provider"),
  cd = Symbol.for("react.context"),
  ud = Symbol.for("react.forward_ref"),
  dd = Symbol.for("react.suspense"),
  fd = Symbol.for("react.memo"),
  md = Symbol.for("react.lazy"),
  gi = Symbol.iterator;
function pd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (gi && e[gi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var To = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Io = Object.assign,
  Mo = {};
function Mr(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Mo),
    (this.updater = r || To);
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
function Po() {}
Po.prototype = Mr.prototype;
function ja(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = Mo),
    (this.updater = r || To);
}
var Na = (ja.prototype = new Po());
Na.constructor = ja;
Io(Na, Mr.prototype);
Na.isPureReactComponent = !0;
var xi = Array.isArray,
  Ro = Object.prototype.hasOwnProperty,
  ba = { current: null },
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
      Ro.call(t, s) && !Oo.hasOwnProperty(s) && (l[s] = t[s]);
  var o = arguments.length - 2;
  if (o === 1) l.children = r;
  else if (1 < o) {
    for (var u = Array(o), c = 0; c < o; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (s in ((o = e.defaultProps), o)) l[s] === void 0 && (l[s] = o[s]);
  return {
    $$typeof: kn,
    type: e,
    key: a,
    ref: i,
    props: l,
    _owner: ba.current,
  };
}
function hd(e, t) {
  return {
    $$typeof: kn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Sa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === kn;
}
function gd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var yi = /\/+/g;
function Js(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? gd("" + e.key)
    : t.toString(36);
}
function Xn(e, t, r, s, l) {
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
          case kn:
          case sd:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = s === "" ? "." + Js(i, 0) : s),
      xi(l)
        ? ((r = ""),
          e != null && (r = e.replace(yi, "$&/") + "/"),
          Xn(l, t, r, "", function (c) {
            return c;
          }))
        : l != null &&
          (Sa(l) &&
            (l = hd(
              l,
              r +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(yi, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (s = s === "" ? "." : s + ":"), xi(e)))
    for (var o = 0; o < e.length; o++) {
      a = e[o];
      var u = s + Js(a, o);
      i += Xn(a, t, r, u, l);
    }
  else if (((u = pd(e)), typeof u == "function"))
    for (e = u.call(e), o = 0; !(a = e.next()).done; )
      (a = a.value), (u = s + Js(a, o++)), (i += Xn(a, t, r, u, l));
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
    Xn(e, s, "", "", function (a) {
      return t.call(r, a, l++);
    }),
    s
  );
}
function xd(e) {
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
var ye = { current: null },
  Jn = { transition: null },
  yd = {
    ReactCurrentDispatcher: ye,
    ReactCurrentBatchConfig: Jn,
    ReactCurrentOwner: ba,
  };
function Fo() {
  throw Error("act(...) is not supported in production builds of React.");
}
L.Children = {
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
    if (!Sa(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
L.Component = Mr;
L.Fragment = ld;
L.Profiler = id;
L.PureComponent = ja;
L.StrictMode = ad;
L.Suspense = dd;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yd;
L.act = Fo;
L.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var s = Io({}, e.props),
    l = e.key,
    a = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (i = ba.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (u in t)
      Ro.call(t, u) &&
        !Oo.hasOwnProperty(u) &&
        (s[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) s.children = r;
  else if (1 < u) {
    o = Array(u);
    for (var c = 0; c < u; c++) o[c] = arguments[c + 2];
    s.children = o;
  }
  return { $$typeof: kn, type: e.type, key: l, ref: a, props: s, _owner: i };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: cd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: od, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = Lo;
L.createFactory = function (e) {
  var t = Lo.bind(null, e);
  return (t.type = e), t;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: ud, render: e };
};
L.isValidElement = Sa;
L.lazy = function (e) {
  return { $$typeof: md, _payload: { _status: -1, _result: e }, _init: xd };
};
L.memo = function (e, t) {
  return { $$typeof: fd, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
  var t = Jn.transition;
  Jn.transition = {};
  try {
    e();
  } finally {
    Jn.transition = t;
  }
};
L.unstable_act = Fo;
L.useCallback = function (e, t) {
  return ye.current.useCallback(e, t);
};
L.useContext = function (e) {
  return ye.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return ye.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
  return ye.current.useEffect(e, t);
};
L.useId = function () {
  return ye.current.useId();
};
L.useImperativeHandle = function (e, t, r) {
  return ye.current.useImperativeHandle(e, t, r);
};
L.useInsertionEffect = function (e, t) {
  return ye.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
  return ye.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
  return ye.current.useMemo(e, t);
};
L.useReducer = function (e, t, r) {
  return ye.current.useReducer(e, t, r);
};
L.useRef = function (e) {
  return ye.current.useRef(e);
};
L.useState = function (e) {
  return ye.current.useState(e);
};
L.useSyncExternalStore = function (e, t, r) {
  return ye.current.useSyncExternalStore(e, t, r);
};
L.useTransition = function () {
  return ye.current.useTransition();
};
L.version = "18.3.1";
zo.exports = L;
var b = zo.exports;
const Ee = nd(b);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vd = b,
  wd = Symbol.for("react.element"),
  jd = Symbol.for("react.fragment"),
  Nd = Object.prototype.hasOwnProperty,
  bd = vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Sd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ao(e, t, r) {
  var s,
    l = {},
    a = null,
    i = null;
  r !== void 0 && (a = "" + r),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (s in t) Nd.call(t, s) && !Sd.hasOwnProperty(s) && (l[s] = t[s]);
  if (e && e.defaultProps)
    for (s in ((t = e.defaultProps), t)) l[s] === void 0 && (l[s] = t[s]);
  return {
    $$typeof: wd,
    type: e,
    key: a,
    ref: i,
    props: l,
    _owner: bd.current,
  };
}
Ms.Fragment = jd;
Ms.jsx = Ao;
Ms.jsxs = Ao;
_o.exports = Ms;
var n = _o.exports,
  $o = { exports: {} },
  Ie = {},
  Uo = { exports: {} },
  Vo = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, O) {
    var k = M.length;
    M.push(O);
    e: for (; 0 < k; ) {
      var F = (k - 1) >>> 1,
        S = M[F];
      if (0 < l(S, O)) (M[F] = O), (M[k] = S), (k = F);
      else break e;
    }
  }
  function r(M) {
    return M.length === 0 ? null : M[0];
  }
  function s(M) {
    if (M.length === 0) return null;
    var O = M[0],
      k = M.pop();
    if (k !== O) {
      M[0] = k;
      e: for (var F = 0, S = M.length, $ = S >>> 1; F < $; ) {
        var J = 2 * (F + 1) - 1,
          Ce = M[J],
          gt = J + 1,
          In = M[gt];
        if (0 > l(Ce, k))
          gt < S && 0 > l(In, Ce)
            ? ((M[F] = In), (M[gt] = k), (F = gt))
            : ((M[F] = Ce), (M[J] = k), (F = J));
        else if (gt < S && 0 > l(In, k)) (M[F] = In), (M[gt] = k), (F = gt);
        else break e;
      }
    }
    return O;
  }
  function l(M, O) {
    var k = M.sortIndex - O.sortIndex;
    return k !== 0 ? k : M.id - O.id;
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
  var u = [],
    c = [],
    h = 1,
    m = null,
    f = 3,
    x = !1,
    v = !1,
    y = !1,
    I = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(M) {
    for (var O = r(c); O !== null; ) {
      if (O.callback === null) s(c);
      else if (O.startTime <= M)
        s(c), (O.sortIndex = O.expirationTime), t(u, O);
      else break;
      O = r(c);
    }
  }
  function j(M) {
    if (((y = !1), d(M), !v))
      if (r(u) !== null) (v = !0), Be(D);
      else {
        var O = r(c);
        O !== null && rt(j, O.startTime - M);
      }
  }
  function D(M, O) {
    (v = !1), y && ((y = !1), g(C), (C = -1)), (x = !0);
    var k = f;
    try {
      for (
        d(O), m = r(u);
        m !== null && (!(m.expirationTime > O) || (M && !T()));

      ) {
        var F = m.callback;
        if (typeof F == "function") {
          (m.callback = null), (f = m.priorityLevel);
          var S = F(m.expirationTime <= O);
          (O = e.unstable_now()),
            typeof S == "function" ? (m.callback = S) : m === r(u) && s(u),
            d(O);
        } else s(u);
        m = r(u);
      }
      if (m !== null) var $ = !0;
      else {
        var J = r(c);
        J !== null && rt(j, J.startTime - O), ($ = !1);
      }
      return $;
    } finally {
      (m = null), (f = k), (x = !1);
    }
  }
  var _ = !1,
    z = null,
    C = -1,
    w = 5,
    N = -1;
  function T() {
    return !(e.unstable_now() - N < w);
  }
  function R() {
    if (z !== null) {
      var M = e.unstable_now();
      N = M;
      var O = !0;
      try {
        O = z(!0, M);
      } finally {
        O ? A() : ((_ = !1), (z = null));
      }
    } else _ = !1;
  }
  var A;
  if (typeof p == "function")
    A = function () {
      p(R);
    };
  else if (typeof MessageChannel < "u") {
    var ue = new MessageChannel(),
      Pe = ue.port2;
    (ue.port1.onmessage = R),
      (A = function () {
        Pe.postMessage(null);
      });
  } else
    A = function () {
      I(R, 0);
    };
  function Be(M) {
    (z = M), _ || ((_ = !0), A());
  }
  function rt(M, O) {
    C = I(function () {
      M(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || x || ((v = !0), Be(D));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (w = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(u);
    }),
    (e.unstable_next = function (M) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = f;
      }
      var k = f;
      f = O;
      try {
        return M();
      } finally {
        f = k;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, O) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var k = f;
      f = M;
      try {
        return O();
      } finally {
        f = k;
      }
    }),
    (e.unstable_scheduleCallback = function (M, O, k) {
      var F = e.unstable_now();
      switch (
        (typeof k == "object" && k !== null
          ? ((k = k.delay), (k = typeof k == "number" && 0 < k ? F + k : F))
          : (k = F),
        M)
      ) {
        case 1:
          var S = -1;
          break;
        case 2:
          S = 250;
          break;
        case 5:
          S = 1073741823;
          break;
        case 4:
          S = 1e4;
          break;
        default:
          S = 5e3;
      }
      return (
        (S = k + S),
        (M = {
          id: h++,
          callback: O,
          priorityLevel: M,
          startTime: k,
          expirationTime: S,
          sortIndex: -1,
        }),
        k > F
          ? ((M.sortIndex = k),
            t(c, M),
            r(u) === null &&
              M === r(c) &&
              (y ? (g(C), (C = -1)) : (y = !0), rt(j, k - F)))
          : ((M.sortIndex = S), t(u, M), v || x || ((v = !0), Be(D))),
        M
      );
    }),
    (e.unstable_shouldYield = T),
    (e.unstable_wrapCallback = function (M) {
      var O = f;
      return function () {
        var k = f;
        f = O;
        try {
          return M.apply(this, arguments);
        } finally {
          f = k;
        }
      };
    });
})(Vo);
Uo.exports = Vo;
var kd = Uo.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cd = b,
  Te = kd;
function E(e) {
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
var Bo = new Set(),
  ln = {};
function rr(e, t) {
  Sr(e, t), Sr(e + "Capture", t);
}
function Sr(e, t) {
  for (ln[e] = t, e = 0; e < t.length; e++) Bo.add(t[e]);
}
var ct = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  El = Object.prototype.hasOwnProperty,
  Dd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  vi = {},
  wi = {};
function Ed(e) {
  return El.call(wi, e)
    ? !0
    : El.call(vi, e)
    ? !1
    : Dd.test(e)
    ? (wi[e] = !0)
    : ((vi[e] = !0), !1);
}
function _d(e, t, r, s) {
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
  if (t === null || typeof t > "u" || _d(e, t, r, s)) return !0;
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
function ve(e, t, r, s, l, a, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = s),
    (this.attributeNamespace = l),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = i);
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ce[e] = new ve(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ce[t] = new ve(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ce[e] = new ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ce[e] = new ve(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ce[e] = new ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ce[e] = new ve(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ce[e] = new ve(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ce[e] = new ve(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ce[e] = new ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ka = /[\-:]([a-z])/g;
function Ca(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ka, Ca);
    ce[t] = new ve(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ka, Ca);
    ce[t] = new ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ka, Ca);
  ce[t] = new ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ce[e] = new ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new ve(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ce[e] = new ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Da(e, t, r, s) {
  var l = ce.hasOwnProperty(t) ? ce[t] : null;
  (l !== null
    ? l.type !== 0
    : s ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (zd(t, r, l, s) && (r = null),
    s || l === null
      ? Ed(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
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
var ht = Cd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Pn = Symbol.for("react.element"),
  lr = Symbol.for("react.portal"),
  ar = Symbol.for("react.fragment"),
  Ea = Symbol.for("react.strict_mode"),
  _l = Symbol.for("react.profiler"),
  Ho = Symbol.for("react.provider"),
  qo = Symbol.for("react.context"),
  _a = Symbol.for("react.forward_ref"),
  zl = Symbol.for("react.suspense"),
  Tl = Symbol.for("react.suspense_list"),
  za = Symbol.for("react.memo"),
  vt = Symbol.for("react.lazy"),
  Qo = Symbol.for("react.offscreen"),
  ji = Symbol.iterator;
function Lr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ji && e[ji]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var X = Object.assign,
  Zs;
function qr(e) {
  if (Zs === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      Zs = (t && t[1]) || "";
    }
  return (
    `
` +
    Zs +
    e
  );
}
var el = !1;
function tl(e, t) {
  if (!e || el) return "";
  el = !0;
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
        } catch (c) {
          var s = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          s = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        s = c;
      }
      e();
    }
  } catch (c) {
    if (c && s && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
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
    (el = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? qr(e) : "";
}
function Td(e) {
  switch (e.tag) {
    case 5:
      return qr(e.type);
    case 16:
      return qr("Lazy");
    case 13:
      return qr("Suspense");
    case 19:
      return qr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = tl(e.type, !1)), e;
    case 11:
      return (e = tl(e.type.render, !1)), e;
    case 1:
      return (e = tl(e.type, !0)), e;
    default:
      return "";
  }
}
function Il(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ar:
      return "Fragment";
    case lr:
      return "Portal";
    case _l:
      return "Profiler";
    case Ea:
      return "StrictMode";
    case zl:
      return "Suspense";
    case Tl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case qo:
        return (e.displayName || "Context") + ".Consumer";
      case Ho:
        return (e._context.displayName || "Context") + ".Provider";
      case _a:
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
          (t = e.displayName || null), t !== null ? t : Il(e.type) || "Memo"
        );
      case vt:
        (t = e._payload), (e = e._init);
        try {
          return Il(e(t));
        } catch {}
    }
  return null;
}
function Id(e) {
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
      return Il(t);
    case 8:
      return t === Ea ? "StrictMode" : "Mode";
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
function Mt(e) {
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
function Md(e) {
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
function Rn(e) {
  e._valueTracker || (e._valueTracker = Md(e));
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
function cs(e) {
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
  return X({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function Ni(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    s = t.checked != null ? t.checked : t.defaultChecked;
  (r = Mt(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: s,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Yo(e, t) {
  (t = t.checked), t != null && Da(e, "checked", t, !1);
}
function Pl(e, t) {
  Yo(e, t);
  var r = Mt(t.value),
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
    ? Rl(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && Rl(e, t.type, Mt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function bi(e, t, r) {
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
function Rl(e, t, r) {
  (t !== "number" || cs(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var Qr = Array.isArray;
function xr(e, t, r, s) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < r.length; l++) t["$" + r[l]] = !0;
    for (r = 0; r < e.length; r++)
      (l = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== l && (e[r].selected = l),
        l && s && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + Mt(r), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === r) {
        (e[l].selected = !0), s && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ol(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return X({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Si(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(E(92));
      if (Qr(r)) {
        if (1 < r.length) throw Error(E(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: Mt(r) };
}
function Ko(e, t) {
  var r = Mt(t.value),
    s = Mt(t.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    s != null && (e.defaultValue = "" + s);
}
function ki(e) {
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
function Ll(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Xo(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var On,
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
        On = On || document.createElement("div"),
          On.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = On.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function an(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Yr = {
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
  Pd = ["Webkit", "ms", "Moz", "O"];
Object.keys(Yr).forEach(function (e) {
  Pd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Yr[t] = Yr[e]);
  });
});
function Zo(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || (Yr.hasOwnProperty(e) && Yr[e])
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
var Rd = X(
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
function Fl(e, t) {
  if (t) {
    if (Rd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Al(e, t) {
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
var $l = null;
function Ta(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ul = null,
  yr = null,
  vr = null;
function Ci(e) {
  if ((e = En(e))) {
    if (typeof Ul != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = Fs(t)), Ul(e.stateNode, e.type, t));
  }
}
function tc(e) {
  yr ? (vr ? vr.push(e) : (vr = [e])) : (yr = e);
}
function rc() {
  if (yr) {
    var e = yr,
      t = vr;
    if (((vr = yr = null), Ci(e), t)) for (e = 0; e < t.length; e++) Ci(t[e]);
  }
}
function nc(e, t) {
  return e(t);
}
function sc() {}
var rl = !1;
function lc(e, t, r) {
  if (rl) return e(t, r);
  rl = !0;
  try {
    return nc(e, t, r);
  } finally {
    (rl = !1), (yr !== null || vr !== null) && (sc(), rc());
  }
}
function on(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var s = Fs(r);
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
  if (r && typeof r != "function") throw Error(E(231, t, typeof r));
  return r;
}
var Vl = !1;
if (ct)
  try {
    var Fr = {};
    Object.defineProperty(Fr, "passive", {
      get: function () {
        Vl = !0;
      },
    }),
      window.addEventListener("test", Fr, Fr),
      window.removeEventListener("test", Fr, Fr);
  } catch {
    Vl = !1;
  }
function Od(e, t, r, s, l, a, i, o, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, c);
  } catch (h) {
    this.onError(h);
  }
}
var Kr = !1,
  us = null,
  ds = !1,
  Bl = null,
  Ld = {
    onError: function (e) {
      (Kr = !0), (us = e);
    },
  };
function Fd(e, t, r, s, l, a, i, o, u) {
  (Kr = !1), (us = null), Od.apply(Ld, arguments);
}
function Ad(e, t, r, s, l, a, i, o, u) {
  if ((Fd.apply(this, arguments), Kr)) {
    if (Kr) {
      var c = us;
      (Kr = !1), (us = null);
    } else throw Error(E(198));
    ds || ((ds = !0), (Bl = c));
  }
}
function nr(e) {
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
  if (nr(e) !== e) throw Error(E(188));
}
function $d(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = nr(e)), t === null)) throw Error(E(188));
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
      throw Error(E(188));
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
        if (!i) throw Error(E(189));
      }
    }
    if (r.alternate !== s) throw Error(E(190));
  }
  if (r.tag !== 3) throw Error(E(188));
  return r.stateNode.current === r ? e : t;
}
function ic(e) {
  return (e = $d(e)), e !== null ? oc(e) : null;
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
var cc = Te.unstable_scheduleCallback,
  Ei = Te.unstable_cancelCallback,
  Ud = Te.unstable_shouldYield,
  Vd = Te.unstable_requestPaint,
  te = Te.unstable_now,
  Bd = Te.unstable_getCurrentPriorityLevel,
  Ia = Te.unstable_ImmediatePriority,
  uc = Te.unstable_UserBlockingPriority,
  fs = Te.unstable_NormalPriority,
  Hd = Te.unstable_LowPriority,
  dc = Te.unstable_IdlePriority,
  Ps = null,
  et = null;
function qd(e) {
  if (et && typeof et.onCommitFiberRoot == "function")
    try {
      et.onCommitFiberRoot(Ps, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ge = Math.clz32 ? Math.clz32 : Gd,
  Qd = Math.log,
  Wd = Math.LN2;
function Gd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Qd(e) / Wd) | 0)) | 0;
}
var Ln = 64,
  Fn = 4194304;
function Wr(e) {
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
function ms(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var s = 0,
    l = e.suspendedLanes,
    a = e.pingedLanes,
    i = r & 268435455;
  if (i !== 0) {
    var o = i & ~l;
    o !== 0 ? (s = Wr(o)) : ((a &= i), a !== 0 && (s = Wr(a)));
  } else (i = r & ~l), i !== 0 ? (s = Wr(i)) : a !== 0 && (s = Wr(a));
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
      (r = 31 - Ge(t)), (l = 1 << r), (s |= e[r]), (t &= ~l);
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
function Kd(e, t) {
  for (
    var r = e.suspendedLanes,
      s = e.pingedLanes,
      l = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var i = 31 - Ge(a),
      o = 1 << i,
      u = l[i];
    u === -1
      ? (!(o & r) || o & s) && (l[i] = Yd(o, t))
      : u <= t && (e.expiredLanes |= o),
      (a &= ~o);
  }
}
function Hl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function fc() {
  var e = Ln;
  return (Ln <<= 1), !(Ln & 4194240) && (Ln = 64), e;
}
function nl(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function Cn(e, t, r) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ge(t)),
    (e[t] = r);
}
function Xd(e, t) {
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
    var l = 31 - Ge(r),
      a = 1 << l;
    (t[l] = 0), (s[l] = -1), (e[l] = -1), (r &= ~a);
  }
}
function Ma(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var s = 31 - Ge(r),
      l = 1 << s;
    (l & t) | (e[s] & t) && (e[s] |= t), (r &= ~l);
  }
}
var B = 0;
function mc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var pc,
  Pa,
  hc,
  gc,
  xc,
  ql = !1,
  An = [],
  kt = null,
  Ct = null,
  Dt = null,
  cn = new Map(),
  un = new Map(),
  jt = [],
  Jd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function _i(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      kt = null;
      break;
    case "dragenter":
    case "dragleave":
      Ct = null;
      break;
    case "mouseover":
    case "mouseout":
      Dt = null;
      break;
    case "pointerover":
    case "pointerout":
      cn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      un.delete(t.pointerId);
  }
}
function Ar(e, t, r, s, l, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: s,
        nativeEvent: a,
        targetContainers: [l],
      }),
      t !== null && ((t = En(t)), t !== null && Pa(t)),
      e)
    : ((e.eventSystemFlags |= s),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Zd(e, t, r, s, l) {
  switch (t) {
    case "focusin":
      return (kt = Ar(kt, e, t, r, s, l)), !0;
    case "dragenter":
      return (Ct = Ar(Ct, e, t, r, s, l)), !0;
    case "mouseover":
      return (Dt = Ar(Dt, e, t, r, s, l)), !0;
    case "pointerover":
      var a = l.pointerId;
      return cn.set(a, Ar(cn.get(a) || null, e, t, r, s, l)), !0;
    case "gotpointercapture":
      return (
        (a = l.pointerId), un.set(a, Ar(un.get(a) || null, e, t, r, s, l)), !0
      );
  }
  return !1;
}
function yc(e) {
  var t = Bt(e.target);
  if (t !== null) {
    var r = nr(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = ac(r)), t !== null)) {
          (e.blockedOn = t),
            xc(e.priority, function () {
              hc(r);
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
function Zn(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Ql(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var s = new r.constructor(r.type, r);
      ($l = s), r.target.dispatchEvent(s), ($l = null);
    } else return (t = En(r)), t !== null && Pa(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function zi(e, t, r) {
  Zn(e) && r.delete(t);
}
function ef() {
  (ql = !1),
    kt !== null && Zn(kt) && (kt = null),
    Ct !== null && Zn(Ct) && (Ct = null),
    Dt !== null && Zn(Dt) && (Dt = null),
    cn.forEach(zi),
    un.forEach(zi);
}
function $r(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ql ||
      ((ql = !0),
      Te.unstable_scheduleCallback(Te.unstable_NormalPriority, ef)));
}
function dn(e) {
  function t(l) {
    return $r(l, e);
  }
  if (0 < An.length) {
    $r(An[0], e);
    for (var r = 1; r < An.length; r++) {
      var s = An[r];
      s.blockedOn === e && (s.blockedOn = null);
    }
  }
  for (
    kt !== null && $r(kt, e),
      Ct !== null && $r(Ct, e),
      Dt !== null && $r(Dt, e),
      cn.forEach(t),
      un.forEach(t),
      r = 0;
    r < jt.length;
    r++
  )
    (s = jt[r]), s.blockedOn === e && (s.blockedOn = null);
  for (; 0 < jt.length && ((r = jt[0]), r.blockedOn === null); )
    yc(r), r.blockedOn === null && jt.shift();
}
var wr = ht.ReactCurrentBatchConfig,
  ps = !0;
function tf(e, t, r, s) {
  var l = B,
    a = wr.transition;
  wr.transition = null;
  try {
    (B = 1), Ra(e, t, r, s);
  } finally {
    (B = l), (wr.transition = a);
  }
}
function rf(e, t, r, s) {
  var l = B,
    a = wr.transition;
  wr.transition = null;
  try {
    (B = 4), Ra(e, t, r, s);
  } finally {
    (B = l), (wr.transition = a);
  }
}
function Ra(e, t, r, s) {
  if (ps) {
    var l = Ql(e, t, r, s);
    if (l === null) ml(e, t, s, hs, r), _i(e, s);
    else if (Zd(l, e, t, r, s)) s.stopPropagation();
    else if ((_i(e, s), t & 4 && -1 < Jd.indexOf(e))) {
      for (; l !== null; ) {
        var a = En(l);
        if (
          (a !== null && pc(a),
          (a = Ql(e, t, r, s)),
          a === null && ml(e, t, s, hs, r),
          a === l)
        )
          break;
        l = a;
      }
      l !== null && s.stopPropagation();
    } else ml(e, t, s, null, r);
  }
}
var hs = null;
function Ql(e, t, r, s) {
  if (((hs = null), (e = Ta(s)), (e = Bt(e)), e !== null))
    if (((t = nr(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = ac(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (hs = e), null;
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
      switch (Bd()) {
        case Ia:
          return 1;
        case uc:
          return 4;
        case fs:
        case Hd:
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
var bt = null,
  Oa = null,
  es = null;
function wc() {
  if (es) return es;
  var e,
    t = Oa,
    r = t.length,
    s,
    l = "value" in bt ? bt.value : bt.textContent,
    a = l.length;
  for (e = 0; e < r && t[e] === l[e]; e++);
  var i = r - e;
  for (s = 1; s <= i && t[r - s] === l[a - s]; s++);
  return (es = l.slice(e, 1 < s ? 1 - s : void 0));
}
function ts(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function $n() {
  return !0;
}
function Ti() {
  return !1;
}
function Me(e) {
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
        ? $n
        : Ti),
      (this.isPropagationStopped = Ti),
      this
    );
  }
  return (
    X(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = $n));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = $n));
      },
      persist: function () {},
      isPersistent: $n,
    }),
    t
  );
}
var Pr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  La = Me(Pr),
  Dn = X({}, Pr, { view: 0, detail: 0 }),
  nf = Me(Dn),
  sl,
  ll,
  Ur,
  Rs = X({}, Dn, {
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
        : (e !== Ur &&
            (Ur && e.type === "mousemove"
              ? ((sl = e.screenX - Ur.screenX), (ll = e.screenY - Ur.screenY))
              : (ll = sl = 0),
            (Ur = e)),
          sl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ll;
    },
  }),
  Ii = Me(Rs),
  sf = X({}, Rs, { dataTransfer: 0 }),
  lf = Me(sf),
  af = X({}, Dn, { relatedTarget: 0 }),
  al = Me(af),
  of = X({}, Pr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  cf = Me(of),
  uf = X({}, Pr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  df = Me(uf),
  ff = X({}, Pr, { data: 0 }),
  Mi = Me(ff),
  mf = {
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
  hf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function gf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = hf[e]) ? !!t[e] : !1;
}
function Fa() {
  return gf;
}
var xf = X({}, Dn, {
    key: function (e) {
      if (e.key) {
        var t = mf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ts(e)), e === 13 ? "Enter" : String.fromCharCode(e))
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
      return e.type === "keypress" ? ts(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ts(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  yf = Me(xf),
  vf = X({}, Rs, {
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
  Pi = Me(vf),
  wf = X({}, Dn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fa,
  }),
  jf = Me(wf),
  Nf = X({}, Pr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bf = Me(Nf),
  Sf = X({}, Rs, {
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
  kf = Me(Sf),
  Cf = [9, 13, 27, 32],
  Aa = ct && "CompositionEvent" in window,
  Xr = null;
ct && "documentMode" in document && (Xr = document.documentMode);
var Df = ct && "TextEvent" in window && !Xr,
  jc = ct && (!Aa || (Xr && 8 < Xr && 11 >= Xr)),
  Ri = " ",
  Oi = !1;
function Nc(e, t) {
  switch (e) {
    case "keyup":
      return Cf.indexOf(t.keyCode) !== -1;
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
var ir = !1;
function Ef(e, t) {
  switch (e) {
    case "compositionend":
      return bc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Oi = !0), Ri);
    case "textInput":
      return (e = t.data), e === Ri && Oi ? null : e;
    default:
      return null;
  }
}
function _f(e, t) {
  if (ir)
    return e === "compositionend" || (!Aa && Nc(e, t))
      ? ((e = wc()), (es = Oa = bt = null), (ir = !1), e)
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
      return jc && t.locale !== "ko" ? null : t.data;
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
function Li(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!zf[e.type] : t === "textarea";
}
function Sc(e, t, r, s) {
  tc(s),
    (t = gs(t, "onChange")),
    0 < t.length &&
      ((r = new La("onChange", "change", null, r, s)),
      e.push({ event: r, listeners: t }));
}
var Jr = null,
  fn = null;
function Tf(e) {
  Rc(e, 0);
}
function Os(e) {
  var t = ur(e);
  if (Go(t)) return e;
}
function If(e, t) {
  if (e === "change") return t;
}
var kc = !1;
if (ct) {
  var il;
  if (ct) {
    var ol = "oninput" in document;
    if (!ol) {
      var Fi = document.createElement("div");
      Fi.setAttribute("oninput", "return;"),
        (ol = typeof Fi.oninput == "function");
    }
    il = ol;
  } else il = !1;
  kc = il && (!document.documentMode || 9 < document.documentMode);
}
function Ai() {
  Jr && (Jr.detachEvent("onpropertychange", Cc), (fn = Jr = null));
}
function Cc(e) {
  if (e.propertyName === "value" && Os(fn)) {
    var t = [];
    Sc(t, fn, e, Ta(e)), lc(Tf, t);
  }
}
function Mf(e, t, r) {
  e === "focusin"
    ? (Ai(), (Jr = t), (fn = r), Jr.attachEvent("onpropertychange", Cc))
    : e === "focusout" && Ai();
}
function Pf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Os(fn);
}
function Rf(e, t) {
  if (e === "click") return Os(t);
}
function Of(e, t) {
  if (e === "input" || e === "change") return Os(t);
}
function Lf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ke = typeof Object.is == "function" ? Object.is : Lf;
function mn(e, t) {
  if (Ke(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    s = Object.keys(t);
  if (r.length !== s.length) return !1;
  for (s = 0; s < r.length; s++) {
    var l = r[s];
    if (!El.call(t, l) || !Ke(e[l], t[l])) return !1;
  }
  return !0;
}
function $i(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ui(e, t) {
  var r = $i(e);
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
    r = $i(r);
  }
}
function Dc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Dc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ec() {
  for (var e = window, t = cs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = cs(e.document);
  }
  return t;
}
function $a(e) {
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
  var t = Ec(),
    r = e.focusedElem,
    s = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    Dc(r.ownerDocument.documentElement, r)
  ) {
    if (s !== null && $a(r)) {
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
          (l = Ui(r, a));
        var i = Ui(r, s);
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
var Af = ct && "documentMode" in document && 11 >= document.documentMode,
  or = null,
  Wl = null,
  Zr = null,
  Gl = !1;
function Vi(e, t, r) {
  var s = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Gl ||
    or == null ||
    or !== cs(s) ||
    ((s = or),
    "selectionStart" in s && $a(s)
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
    (Zr && mn(Zr, s)) ||
      ((Zr = s),
      (s = gs(Wl, "onSelect")),
      0 < s.length &&
        ((t = new La("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: s }),
        (t.target = or))));
}
function Un(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var cr = {
    animationend: Un("Animation", "AnimationEnd"),
    animationiteration: Un("Animation", "AnimationIteration"),
    animationstart: Un("Animation", "AnimationStart"),
    transitionend: Un("Transition", "TransitionEnd"),
  },
  cl = {},
  _c = {};
ct &&
  ((_c = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete cr.animationend.animation,
    delete cr.animationiteration.animation,
    delete cr.animationstart.animation),
  "TransitionEvent" in window || delete cr.transitionend.transition);
function Ls(e) {
  if (cl[e]) return cl[e];
  if (!cr[e]) return e;
  var t = cr[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in _c) return (cl[e] = t[r]);
  return e;
}
var zc = Ls("animationend"),
  Tc = Ls("animationiteration"),
  Ic = Ls("animationstart"),
  Mc = Ls("transitionend"),
  Pc = new Map(),
  Bi =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Ot(e, t) {
  Pc.set(e, t), rr(t, [e]);
}
for (var ul = 0; ul < Bi.length; ul++) {
  var dl = Bi[ul],
    $f = dl.toLowerCase(),
    Uf = dl[0].toUpperCase() + dl.slice(1);
  Ot($f, "on" + Uf);
}
Ot(zc, "onAnimationEnd");
Ot(Tc, "onAnimationIteration");
Ot(Ic, "onAnimationStart");
Ot("dblclick", "onDoubleClick");
Ot("focusin", "onFocus");
Ot("focusout", "onBlur");
Ot(Mc, "onTransitionEnd");
Sr("onMouseEnter", ["mouseout", "mouseover"]);
Sr("onMouseLeave", ["mouseout", "mouseover"]);
Sr("onPointerEnter", ["pointerout", "pointerover"]);
Sr("onPointerLeave", ["pointerout", "pointerover"]);
rr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
rr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
rr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
rr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
rr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
rr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Gr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Vf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Gr));
function Hi(e, t, r) {
  var s = e.type || "unknown-event";
  (e.currentTarget = r), Ad(s, t, void 0, e), (e.currentTarget = null);
}
function Rc(e, t) {
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
            u = o.instance,
            c = o.currentTarget;
          if (((o = o.listener), u !== a && l.isPropagationStopped())) break e;
          Hi(l, o, c), (a = u);
        }
      else
        for (i = 0; i < s.length; i++) {
          if (
            ((o = s[i]),
            (u = o.instance),
            (c = o.currentTarget),
            (o = o.listener),
            u !== a && l.isPropagationStopped())
          )
            break e;
          Hi(l, o, c), (a = u);
        }
    }
  }
  if (ds) throw ((e = Bl), (ds = !1), (Bl = null), e);
}
function q(e, t) {
  var r = t[Zl];
  r === void 0 && (r = t[Zl] = new Set());
  var s = e + "__bubble";
  r.has(s) || (Oc(t, e, 2, !1), r.add(s));
}
function fl(e, t, r) {
  var s = 0;
  t && (s |= 4), Oc(r, e, s, t);
}
var Vn = "_reactListening" + Math.random().toString(36).slice(2);
function pn(e) {
  if (!e[Vn]) {
    (e[Vn] = !0),
      Bo.forEach(function (r) {
        r !== "selectionchange" && (Vf.has(r) || fl(r, !1, e), fl(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Vn] || ((t[Vn] = !0), fl("selectionchange", !1, t));
  }
}
function Oc(e, t, r, s) {
  switch (vc(t)) {
    case 1:
      var l = tf;
      break;
    case 4:
      l = rf;
      break;
    default:
      l = Ra;
  }
  (r = l.bind(null, t, r, e)),
    (l = void 0),
    !Vl ||
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
function ml(e, t, r, s, l) {
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
          if (((i = Bt(o)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            s = a = i;
            continue e;
          }
          o = o.parentNode;
        }
      }
      s = s.return;
    }
  lc(function () {
    var c = a,
      h = Ta(r),
      m = [];
    e: {
      var f = Pc.get(e);
      if (f !== void 0) {
        var x = La,
          v = e;
        switch (e) {
          case "keypress":
            if (ts(r) === 0) break e;
          case "keydown":
          case "keyup":
            x = yf;
            break;
          case "focusin":
            (v = "focus"), (x = al);
            break;
          case "focusout":
            (v = "blur"), (x = al);
            break;
          case "beforeblur":
          case "afterblur":
            x = al;
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
            x = Ii;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = lf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = jf;
            break;
          case zc:
          case Tc:
          case Ic:
            x = cf;
            break;
          case Mc:
            x = bf;
            break;
          case "scroll":
            x = nf;
            break;
          case "wheel":
            x = kf;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = df;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Pi;
        }
        var y = (t & 4) !== 0,
          I = !y && e === "scroll",
          g = y ? (f !== null ? f + "Capture" : null) : f;
        y = [];
        for (var p = c, d; p !== null; ) {
          d = p;
          var j = d.stateNode;
          if (
            (d.tag === 5 &&
              j !== null &&
              ((d = j),
              g !== null && ((j = on(p, g)), j != null && y.push(hn(p, j, d)))),
            I)
          )
            break;
          p = p.return;
        }
        0 < y.length &&
          ((f = new x(f, v, null, r, h)), m.push({ event: f, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          f &&
            r !== $l &&
            (v = r.relatedTarget || r.fromElement) &&
            (Bt(v) || v[ut]))
        )
          break e;
        if (
          (x || f) &&
          ((f =
            h.window === h
              ? h
              : (f = h.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          x
            ? ((v = r.relatedTarget || r.toElement),
              (x = c),
              (v = v ? Bt(v) : null),
              v !== null &&
                ((I = nr(v)), v !== I || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((x = null), (v = c)),
          x !== v)
        ) {
          if (
            ((y = Ii),
            (j = "onMouseLeave"),
            (g = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Pi),
              (j = "onPointerLeave"),
              (g = "onPointerEnter"),
              (p = "pointer")),
            (I = x == null ? f : ur(x)),
            (d = v == null ? f : ur(v)),
            (f = new y(j, p + "leave", x, r, h)),
            (f.target = I),
            (f.relatedTarget = d),
            (j = null),
            Bt(h) === c &&
              ((y = new y(g, p + "enter", v, r, h)),
              (y.target = d),
              (y.relatedTarget = I),
              (j = y)),
            (I = j),
            x && v)
          )
            t: {
              for (y = x, g = v, p = 0, d = y; d; d = sr(d)) p++;
              for (d = 0, j = g; j; j = sr(j)) d++;
              for (; 0 < p - d; ) (y = sr(y)), p--;
              for (; 0 < d - p; ) (g = sr(g)), d--;
              for (; p--; ) {
                if (y === g || (g !== null && y === g.alternate)) break t;
                (y = sr(y)), (g = sr(g));
              }
              y = null;
            }
          else y = null;
          x !== null && qi(m, f, x, y, !1),
            v !== null && I !== null && qi(m, I, v, y, !0);
        }
      }
      e: {
        if (
          ((f = c ? ur(c) : window),
          (x = f.nodeName && f.nodeName.toLowerCase()),
          x === "select" || (x === "input" && f.type === "file"))
        )
          var D = If;
        else if (Li(f))
          if (kc) D = Of;
          else {
            D = Pf;
            var _ = Mf;
          }
        else
          (x = f.nodeName) &&
            x.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (D = Rf);
        if (D && (D = D(e, c))) {
          Sc(m, D, r, h);
          break e;
        }
        _ && _(e, f, c),
          e === "focusout" &&
            (_ = f._wrapperState) &&
            _.controlled &&
            f.type === "number" &&
            Rl(f, "number", f.value);
      }
      switch (((_ = c ? ur(c) : window), e)) {
        case "focusin":
          (Li(_) || _.contentEditable === "true") &&
            ((or = _), (Wl = c), (Zr = null));
          break;
        case "focusout":
          Zr = Wl = or = null;
          break;
        case "mousedown":
          Gl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Gl = !1), Vi(m, r, h);
          break;
        case "selectionchange":
          if (Af) break;
        case "keydown":
        case "keyup":
          Vi(m, r, h);
      }
      var z;
      if (Aa)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        ir
          ? Nc(e, r) && (C = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (jc &&
          r.locale !== "ko" &&
          (ir || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && ir && (z = wc())
            : ((bt = h),
              (Oa = "value" in bt ? bt.value : bt.textContent),
              (ir = !0))),
        (_ = gs(c, C)),
        0 < _.length &&
          ((C = new Mi(C, e, null, r, h)),
          m.push({ event: C, listeners: _ }),
          z ? (C.data = z) : ((z = bc(r)), z !== null && (C.data = z)))),
        (z = Df ? Ef(e, r) : _f(e, r)) &&
          ((c = gs(c, "onBeforeInput")),
          0 < c.length &&
            ((h = new Mi("onBeforeInput", "beforeinput", null, r, h)),
            m.push({ event: h, listeners: c }),
            (h.data = z)));
    }
    Rc(m, t);
  });
}
function hn(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function gs(e, t) {
  for (var r = t + "Capture", s = []; e !== null; ) {
    var l = e,
      a = l.stateNode;
    l.tag === 5 &&
      a !== null &&
      ((l = a),
      (a = on(e, r)),
      a != null && s.unshift(hn(e, a, l)),
      (a = on(e, t)),
      a != null && s.push(hn(e, a, l))),
      (e = e.return);
  }
  return s;
}
function sr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function qi(e, t, r, s, l) {
  for (var a = t._reactName, i = []; r !== null && r !== s; ) {
    var o = r,
      u = o.alternate,
      c = o.stateNode;
    if (u !== null && u === s) break;
    o.tag === 5 &&
      c !== null &&
      ((o = c),
      l
        ? ((u = on(r, a)), u != null && i.unshift(hn(r, u, o)))
        : l || ((u = on(r, a)), u != null && i.push(hn(r, u, o)))),
      (r = r.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Bf = /\r\n?/g,
  Hf = /\u0000|\uFFFD/g;
function Qi(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Bf,
      `
`
    )
    .replace(Hf, "");
}
function Bn(e, t, r) {
  if (((t = Qi(t)), Qi(e) !== t && r)) throw Error(E(425));
}
function xs() {}
var Yl = null,
  Kl = null;
function Xl(e, t) {
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
var Jl = typeof setTimeout == "function" ? setTimeout : void 0,
  qf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Wi = typeof Promise == "function" ? Promise : void 0,
  Qf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Wi < "u"
      ? function (e) {
          return Wi.resolve(null).then(e).catch(Wf);
        }
      : Jl;
function Wf(e) {
  setTimeout(function () {
    throw e;
  });
}
function pl(e, t) {
  var r = t,
    s = 0;
  do {
    var l = r.nextSibling;
    if ((e.removeChild(r), l && l.nodeType === 8))
      if (((r = l.data), r === "/$")) {
        if (s === 0) {
          e.removeChild(l), dn(t);
          return;
        }
        s--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || s++;
    r = l;
  } while (r);
  dn(t);
}
function Et(e) {
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
function Gi(e) {
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
var Rr = Math.random().toString(36).slice(2),
  Ze = "__reactFiber$" + Rr,
  gn = "__reactProps$" + Rr,
  ut = "__reactContainer$" + Rr,
  Zl = "__reactEvents$" + Rr,
  Gf = "__reactListeners$" + Rr,
  Yf = "__reactHandles$" + Rr;
function Bt(e) {
  var t = e[Ze];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[ut] || r[Ze])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = Gi(e); e !== null; ) {
          if ((r = e[Ze])) return r;
          e = Gi(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function En(e) {
  return (
    (e = e[Ze] || e[ut]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ur(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function Fs(e) {
  return e[gn] || null;
}
var ea = [],
  dr = -1;
function Lt(e) {
  return { current: e };
}
function Q(e) {
  0 > dr || ((e.current = ea[dr]), (ea[dr] = null), dr--);
}
function H(e, t) {
  dr++, (ea[dr] = e.current), (e.current = t);
}
var Pt = {},
  pe = Lt(Pt),
  Ne = Lt(!1),
  Xt = Pt;
function kr(e, t) {
  var r = e.type.contextTypes;
  if (!r) return Pt;
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
function be(e) {
  return (e = e.childContextTypes), e != null;
}
function ys() {
  Q(Ne), Q(pe);
}
function Yi(e, t, r) {
  if (pe.current !== Pt) throw Error(E(168));
  H(pe, t), H(Ne, r);
}
function Lc(e, t, r) {
  var s = e.stateNode;
  if (((t = t.childContextTypes), typeof s.getChildContext != "function"))
    return r;
  s = s.getChildContext();
  for (var l in s) if (!(l in t)) throw Error(E(108, Id(e) || "Unknown", l));
  return X({}, r, s);
}
function vs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Pt),
    (Xt = pe.current),
    H(pe, e),
    H(Ne, Ne.current),
    !0
  );
}
function Ki(e, t, r) {
  var s = e.stateNode;
  if (!s) throw Error(E(169));
  r
    ? ((e = Lc(e, t, Xt)),
      (s.__reactInternalMemoizedMergedChildContext = e),
      Q(Ne),
      Q(pe),
      H(pe, e))
    : Q(Ne),
    H(Ne, r);
}
var st = null,
  As = !1,
  hl = !1;
function Fc(e) {
  st === null ? (st = [e]) : st.push(e);
}
function Kf(e) {
  (As = !0), Fc(e);
}
function Ft() {
  if (!hl && st !== null) {
    hl = !0;
    var e = 0,
      t = B;
    try {
      var r = st;
      for (B = 1; e < r.length; e++) {
        var s = r[e];
        do s = s(!0);
        while (s !== null);
      }
      (st = null), (As = !1);
    } catch (l) {
      throw (st !== null && (st = st.slice(e + 1)), cc(Ia, Ft), l);
    } finally {
      (B = t), (hl = !1);
    }
  }
  return null;
}
var fr = [],
  mr = 0,
  ws = null,
  js = 0,
  Re = [],
  Oe = 0,
  Jt = null,
  lt = 1,
  at = "";
function Ut(e, t) {
  (fr[mr++] = js), (fr[mr++] = ws), (ws = e), (js = t);
}
function Ac(e, t, r) {
  (Re[Oe++] = lt), (Re[Oe++] = at), (Re[Oe++] = Jt), (Jt = e);
  var s = lt;
  e = at;
  var l = 32 - Ge(s) - 1;
  (s &= ~(1 << l)), (r += 1);
  var a = 32 - Ge(t) + l;
  if (30 < a) {
    var i = l - (l % 5);
    (a = (s & ((1 << i) - 1)).toString(32)),
      (s >>= i),
      (l -= i),
      (lt = (1 << (32 - Ge(t) + l)) | (r << l) | s),
      (at = a + e);
  } else (lt = (1 << a) | (r << l) | s), (at = e);
}
function Ua(e) {
  e.return !== null && (Ut(e, 1), Ac(e, 1, 0));
}
function Va(e) {
  for (; e === ws; )
    (ws = fr[--mr]), (fr[mr] = null), (js = fr[--mr]), (fr[mr] = null);
  for (; e === Jt; )
    (Jt = Re[--Oe]),
      (Re[Oe] = null),
      (at = Re[--Oe]),
      (Re[Oe] = null),
      (lt = Re[--Oe]),
      (Re[Oe] = null);
}
var ze = null,
  _e = null,
  W = !1,
  We = null;
function $c(e, t) {
  var r = Le(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function Xi(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ze = e), (_e = Et(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ze = e), (_e = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = Jt !== null ? { id: lt, overflow: at } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = Le(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (ze = e),
            (_e = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ta(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ra(e) {
  if (W) {
    var t = _e;
    if (t) {
      var r = t;
      if (!Xi(e, t)) {
        if (ta(e)) throw Error(E(418));
        t = Et(r.nextSibling);
        var s = ze;
        t && Xi(e, t)
          ? $c(s, r)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (ze = e));
      }
    } else {
      if (ta(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (W = !1), (ze = e);
    }
  }
}
function Ji(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ze = e;
}
function Hn(e) {
  if (e !== ze) return !1;
  if (!W) return Ji(e), (W = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Xl(e.type, e.memoizedProps))),
    t && (t = _e))
  ) {
    if (ta(e)) throw (Uc(), Error(E(418)));
    for (; t; ) $c(e, t), (t = Et(t.nextSibling));
  }
  if ((Ji(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              _e = Et(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      _e = null;
    }
  } else _e = ze ? Et(e.stateNode.nextSibling) : null;
  return !0;
}
function Uc() {
  for (var e = _e; e; ) e = Et(e.nextSibling);
}
function Cr() {
  (_e = ze = null), (W = !1);
}
function Ba(e) {
  We === null ? (We = [e]) : We.push(e);
}
var Xf = ht.ReactCurrentBatchConfig;
function Vr(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(E(309));
        var s = r.stateNode;
      }
      if (!s) throw Error(E(147, e));
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
    if (typeof e != "string") throw Error(E(284));
    if (!r._owner) throw Error(E(290, e));
  }
  return e;
}
function qn(e, t) {
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
function Zi(e) {
  var t = e._init;
  return t(e._payload);
}
function Vc(e) {
  function t(g, p) {
    if (e) {
      var d = g.deletions;
      d === null ? ((g.deletions = [p]), (g.flags |= 16)) : d.push(p);
    }
  }
  function r(g, p) {
    if (!e) return null;
    for (; p !== null; ) t(g, p), (p = p.sibling);
    return null;
  }
  function s(g, p) {
    for (g = new Map(); p !== null; )
      p.key !== null ? g.set(p.key, p) : g.set(p.index, p), (p = p.sibling);
    return g;
  }
  function l(g, p) {
    return (g = It(g, p)), (g.index = 0), (g.sibling = null), g;
  }
  function a(g, p, d) {
    return (
      (g.index = d),
      e
        ? ((d = g.alternate),
          d !== null
            ? ((d = d.index), d < p ? ((g.flags |= 2), p) : d)
            : ((g.flags |= 2), p))
        : ((g.flags |= 1048576), p)
    );
  }
  function i(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function o(g, p, d, j) {
    return p === null || p.tag !== 6
      ? ((p = Nl(d, g.mode, j)), (p.return = g), p)
      : ((p = l(p, d)), (p.return = g), p);
  }
  function u(g, p, d, j) {
    var D = d.type;
    return D === ar
      ? h(g, p, d.props.children, j, d.key)
      : p !== null &&
        (p.elementType === D ||
          (typeof D == "object" &&
            D !== null &&
            D.$$typeof === vt &&
            Zi(D) === p.type))
      ? ((j = l(p, d.props)), (j.ref = Vr(g, p, d)), (j.return = g), j)
      : ((j = os(d.type, d.key, d.props, null, g.mode, j)),
        (j.ref = Vr(g, p, d)),
        (j.return = g),
        j);
  }
  function c(g, p, d, j) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== d.containerInfo ||
      p.stateNode.implementation !== d.implementation
      ? ((p = bl(d, g.mode, j)), (p.return = g), p)
      : ((p = l(p, d.children || [])), (p.return = g), p);
  }
  function h(g, p, d, j, D) {
    return p === null || p.tag !== 7
      ? ((p = Gt(d, g.mode, j, D)), (p.return = g), p)
      : ((p = l(p, d)), (p.return = g), p);
  }
  function m(g, p, d) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Nl("" + p, g.mode, d)), (p.return = g), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Pn:
          return (
            (d = os(p.type, p.key, p.props, null, g.mode, d)),
            (d.ref = Vr(g, null, p)),
            (d.return = g),
            d
          );
        case lr:
          return (p = bl(p, g.mode, d)), (p.return = g), p;
        case vt:
          var j = p._init;
          return m(g, j(p._payload), d);
      }
      if (Qr(p) || Lr(p))
        return (p = Gt(p, g.mode, d, null)), (p.return = g), p;
      qn(g, p);
    }
    return null;
  }
  function f(g, p, d, j) {
    var D = p !== null ? p.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return D !== null ? null : o(g, p, "" + d, j);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Pn:
          return d.key === D ? u(g, p, d, j) : null;
        case lr:
          return d.key === D ? c(g, p, d, j) : null;
        case vt:
          return (D = d._init), f(g, p, D(d._payload), j);
      }
      if (Qr(d) || Lr(d)) return D !== null ? null : h(g, p, d, j, null);
      qn(g, d);
    }
    return null;
  }
  function x(g, p, d, j, D) {
    if ((typeof j == "string" && j !== "") || typeof j == "number")
      return (g = g.get(d) || null), o(p, g, "" + j, D);
    if (typeof j == "object" && j !== null) {
      switch (j.$$typeof) {
        case Pn:
          return (g = g.get(j.key === null ? d : j.key) || null), u(p, g, j, D);
        case lr:
          return (g = g.get(j.key === null ? d : j.key) || null), c(p, g, j, D);
        case vt:
          var _ = j._init;
          return x(g, p, d, _(j._payload), D);
      }
      if (Qr(j) || Lr(j)) return (g = g.get(d) || null), h(p, g, j, D, null);
      qn(p, j);
    }
    return null;
  }
  function v(g, p, d, j) {
    for (
      var D = null, _ = null, z = p, C = (p = 0), w = null;
      z !== null && C < d.length;
      C++
    ) {
      z.index > C ? ((w = z), (z = null)) : (w = z.sibling);
      var N = f(g, z, d[C], j);
      if (N === null) {
        z === null && (z = w);
        break;
      }
      e && z && N.alternate === null && t(g, z),
        (p = a(N, p, C)),
        _ === null ? (D = N) : (_.sibling = N),
        (_ = N),
        (z = w);
    }
    if (C === d.length) return r(g, z), W && Ut(g, C), D;
    if (z === null) {
      for (; C < d.length; C++)
        (z = m(g, d[C], j)),
          z !== null &&
            ((p = a(z, p, C)), _ === null ? (D = z) : (_.sibling = z), (_ = z));
      return W && Ut(g, C), D;
    }
    for (z = s(g, z); C < d.length; C++)
      (w = x(z, g, C, d[C], j)),
        w !== null &&
          (e && w.alternate !== null && z.delete(w.key === null ? C : w.key),
          (p = a(w, p, C)),
          _ === null ? (D = w) : (_.sibling = w),
          (_ = w));
    return (
      e &&
        z.forEach(function (T) {
          return t(g, T);
        }),
      W && Ut(g, C),
      D
    );
  }
  function y(g, p, d, j) {
    var D = Lr(d);
    if (typeof D != "function") throw Error(E(150));
    if (((d = D.call(d)), d == null)) throw Error(E(151));
    for (
      var _ = (D = null), z = p, C = (p = 0), w = null, N = d.next();
      z !== null && !N.done;
      C++, N = d.next()
    ) {
      z.index > C ? ((w = z), (z = null)) : (w = z.sibling);
      var T = f(g, z, N.value, j);
      if (T === null) {
        z === null && (z = w);
        break;
      }
      e && z && T.alternate === null && t(g, z),
        (p = a(T, p, C)),
        _ === null ? (D = T) : (_.sibling = T),
        (_ = T),
        (z = w);
    }
    if (N.done) return r(g, z), W && Ut(g, C), D;
    if (z === null) {
      for (; !N.done; C++, N = d.next())
        (N = m(g, N.value, j)),
          N !== null &&
            ((p = a(N, p, C)), _ === null ? (D = N) : (_.sibling = N), (_ = N));
      return W && Ut(g, C), D;
    }
    for (z = s(g, z); !N.done; C++, N = d.next())
      (N = x(z, g, C, N.value, j)),
        N !== null &&
          (e && N.alternate !== null && z.delete(N.key === null ? C : N.key),
          (p = a(N, p, C)),
          _ === null ? (D = N) : (_.sibling = N),
          (_ = N));
    return (
      e &&
        z.forEach(function (R) {
          return t(g, R);
        }),
      W && Ut(g, C),
      D
    );
  }
  function I(g, p, d, j) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === ar &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case Pn:
          e: {
            for (var D = d.key, _ = p; _ !== null; ) {
              if (_.key === D) {
                if (((D = d.type), D === ar)) {
                  if (_.tag === 7) {
                    r(g, _.sibling),
                      (p = l(_, d.props.children)),
                      (p.return = g),
                      (g = p);
                    break e;
                  }
                } else if (
                  _.elementType === D ||
                  (typeof D == "object" &&
                    D !== null &&
                    D.$$typeof === vt &&
                    Zi(D) === _.type)
                ) {
                  r(g, _.sibling),
                    (p = l(_, d.props)),
                    (p.ref = Vr(g, _, d)),
                    (p.return = g),
                    (g = p);
                  break e;
                }
                r(g, _);
                break;
              } else t(g, _);
              _ = _.sibling;
            }
            d.type === ar
              ? ((p = Gt(d.props.children, g.mode, j, d.key)),
                (p.return = g),
                (g = p))
              : ((j = os(d.type, d.key, d.props, null, g.mode, j)),
                (j.ref = Vr(g, p, d)),
                (j.return = g),
                (g = j));
          }
          return i(g);
        case lr:
          e: {
            for (_ = d.key; p !== null; ) {
              if (p.key === _)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === d.containerInfo &&
                  p.stateNode.implementation === d.implementation
                ) {
                  r(g, p.sibling),
                    (p = l(p, d.children || [])),
                    (p.return = g),
                    (g = p);
                  break e;
                } else {
                  r(g, p);
                  break;
                }
              else t(g, p);
              p = p.sibling;
            }
            (p = bl(d, g.mode, j)), (p.return = g), (g = p);
          }
          return i(g);
        case vt:
          return (_ = d._init), I(g, p, _(d._payload), j);
      }
      if (Qr(d)) return v(g, p, d, j);
      if (Lr(d)) return y(g, p, d, j);
      qn(g, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        p !== null && p.tag === 6
          ? (r(g, p.sibling), (p = l(p, d)), (p.return = g), (g = p))
          : (r(g, p), (p = Nl(d, g.mode, j)), (p.return = g), (g = p)),
        i(g))
      : r(g, p);
  }
  return I;
}
var Dr = Vc(!0),
  Bc = Vc(!1),
  Ns = Lt(null),
  bs = null,
  pr = null,
  Ha = null;
function qa() {
  Ha = pr = bs = null;
}
function Qa(e) {
  var t = Ns.current;
  Q(Ns), (e._currentValue = t);
}
function na(e, t, r) {
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
function jr(e, t) {
  (bs = e),
    (Ha = pr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (je = !0), (e.firstContext = null));
}
function Ae(e) {
  var t = e._currentValue;
  if (Ha !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), pr === null)) {
      if (bs === null) throw Error(E(308));
      (pr = e), (bs.dependencies = { lanes: 0, firstContext: e });
    } else pr = pr.next = e;
  return t;
}
var Ht = null;
function Wa(e) {
  Ht === null ? (Ht = [e]) : Ht.push(e);
}
function Hc(e, t, r, s) {
  var l = t.interleaved;
  return (
    l === null ? ((r.next = r), Wa(t)) : ((r.next = l.next), (l.next = r)),
    (t.interleaved = r),
    dt(e, s)
  );
}
function dt(e, t) {
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
function Ga(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function qc(e, t) {
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
function it(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function _t(e, t, r) {
  var s = e.updateQueue;
  if (s === null) return null;
  if (((s = s.shared), U & 2)) {
    var l = s.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (s.pending = t),
      dt(e, r)
    );
  }
  return (
    (l = s.interleaved),
    l === null ? ((t.next = t), Wa(s)) : ((t.next = l.next), (l.next = t)),
    (s.interleaved = t),
    dt(e, r)
  );
}
function rs(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var s = t.lanes;
    (s &= e.pendingLanes), (r |= s), (t.lanes = r), Ma(e, r);
  }
}
function eo(e, t) {
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
function Ss(e, t, r, s) {
  var l = e.updateQueue;
  wt = !1;
  var a = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var u = o,
      c = u.next;
    (u.next = null), i === null ? (a = c) : (i.next = c), (i = u);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (o = h.lastBaseUpdate),
      o !== i &&
        (o === null ? (h.firstBaseUpdate = c) : (o.next = c),
        (h.lastBaseUpdate = u)));
  }
  if (a !== null) {
    var m = l.baseState;
    (i = 0), (h = c = u = null), (o = a);
    do {
      var f = o.lane,
        x = o.eventTime;
      if ((s & f) === f) {
        h !== null &&
          (h = h.next =
            {
              eventTime: x,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var v = e,
            y = o;
          switch (((f = t), (x = r), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == "function")) {
                m = v.call(x, m, f);
                break e;
              }
              m = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = y.payload),
                (f = typeof v == "function" ? v.call(x, m, f) : v),
                f == null)
              )
                break e;
              m = X({}, m, f);
              break e;
            case 2:
              wt = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (f = l.effects),
          f === null ? (l.effects = [o]) : f.push(o));
      } else
        (x = {
          eventTime: x,
          lane: f,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          h === null ? ((c = h = x), (u = m)) : (h = h.next = x),
          (i |= f);
      if (((o = o.next), o === null)) {
        if (((o = l.shared.pending), o === null)) break;
        (f = o),
          (o = f.next),
          (f.next = null),
          (l.lastBaseUpdate = f),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (u = m),
      (l.baseState = u),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else a === null && (l.shared.lanes = 0);
    (er |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function to(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var s = e[t],
        l = s.callback;
      if (l !== null) {
        if (((s.callback = null), (s = r), typeof l != "function"))
          throw Error(E(191, l));
        l.call(s);
      }
    }
}
var _n = {},
  tt = Lt(_n),
  xn = Lt(_n),
  yn = Lt(_n);
function qt(e) {
  if (e === _n) throw Error(E(174));
  return e;
}
function Ya(e, t) {
  switch ((H(yn, t), H(xn, e), H(tt, _n), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ll(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ll(t, e));
  }
  Q(tt), H(tt, t);
}
function Er() {
  Q(tt), Q(xn), Q(yn);
}
function Qc(e) {
  qt(yn.current);
  var t = qt(tt.current),
    r = Ll(t, e.type);
  t !== r && (H(xn, e), H(tt, r));
}
function Ka(e) {
  xn.current === e && (Q(tt), Q(xn));
}
var G = Lt(0);
function ks(e) {
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
var gl = [];
function Xa() {
  for (var e = 0; e < gl.length; e++)
    gl[e]._workInProgressVersionPrimary = null;
  gl.length = 0;
}
var ns = ht.ReactCurrentDispatcher,
  xl = ht.ReactCurrentBatchConfig,
  Zt = 0,
  K = null,
  ne = null,
  le = null,
  Cs = !1,
  en = !1,
  vn = 0,
  Jf = 0;
function de() {
  throw Error(E(321));
}
function Ja(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!Ke(e[r], t[r])) return !1;
  return !0;
}
function Za(e, t, r, s, l, a) {
  if (
    ((Zt = a),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ns.current = e === null || e.memoizedState === null ? rm : nm),
    (e = r(s, l)),
    en)
  ) {
    a = 0;
    do {
      if (((en = !1), (vn = 0), 25 <= a)) throw Error(E(301));
      (a += 1),
        (le = ne = null),
        (t.updateQueue = null),
        (ns.current = sm),
        (e = r(s, l));
    } while (en);
  }
  if (
    ((ns.current = Ds),
    (t = ne !== null && ne.next !== null),
    (Zt = 0),
    (le = ne = K = null),
    (Cs = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function ei() {
  var e = vn !== 0;
  return (vn = 0), e;
}
function Je() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return le === null ? (K.memoizedState = le = e) : (le = le.next = e), le;
}
function $e() {
  if (ne === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ne.next;
  var t = le === null ? K.memoizedState : le.next;
  if (t !== null) (le = t), (ne = e);
  else {
    if (e === null) throw Error(E(310));
    (ne = e),
      (e = {
        memoizedState: ne.memoizedState,
        baseState: ne.baseState,
        baseQueue: ne.baseQueue,
        queue: ne.queue,
        next: null,
      }),
      le === null ? (K.memoizedState = le = e) : (le = le.next = e);
  }
  return le;
}
function wn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function yl(e) {
  var t = $e(),
    r = t.queue;
  if (r === null) throw Error(E(311));
  r.lastRenderedReducer = e;
  var s = ne,
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
      u = null,
      c = a;
    do {
      var h = c.lane;
      if ((Zt & h) === h)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (s = c.hasEagerState ? c.eagerState : e(s, c.action));
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((o = u = m), (i = s)) : (u = u.next = m),
          (K.lanes |= h),
          (er |= h);
      }
      c = c.next;
    } while (c !== null && c !== a);
    u === null ? (i = s) : (u.next = o),
      Ke(s, t.memoizedState) || (je = !0),
      (t.memoizedState = s),
      (t.baseState = i),
      (t.baseQueue = u),
      (r.lastRenderedState = s);
  }
  if (((e = r.interleaved), e !== null)) {
    l = e;
    do (a = l.lane), (K.lanes |= a), (er |= a), (l = l.next);
    while (l !== e);
  } else l === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function vl(e) {
  var t = $e(),
    r = t.queue;
  if (r === null) throw Error(E(311));
  r.lastRenderedReducer = e;
  var s = r.dispatch,
    l = r.pending,
    a = t.memoizedState;
  if (l !== null) {
    r.pending = null;
    var i = (l = l.next);
    do (a = e(a, i.action)), (i = i.next);
    while (i !== l);
    Ke(a, t.memoizedState) || (je = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (r.lastRenderedState = a);
  }
  return [a, s];
}
function Wc() {}
function Gc(e, t) {
  var r = K,
    s = $e(),
    l = t(),
    a = !Ke(s.memoizedState, l);
  if (
    (a && ((s.memoizedState = l), (je = !0)),
    (s = s.queue),
    ti(Xc.bind(null, r, s, e), [e]),
    s.getSnapshot !== t || a || (le !== null && le.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      jn(9, Kc.bind(null, r, s, l, t), void 0, null),
      ae === null)
    )
      throw Error(E(349));
    Zt & 30 || Yc(r, t, l);
  }
  return l;
}
function Yc(e, t, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function Kc(e, t, r, s) {
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
    return !Ke(e, r);
  } catch {
    return !0;
  }
}
function Zc(e) {
  var t = dt(e, 1);
  t !== null && Ye(t, e, 1, -1);
}
function ro(e) {
  var t = Je();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: wn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = tm.bind(null, K, e)),
    [t.memoizedState, e]
  );
}
function jn(e, t, r, s) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: s, next: null }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((s = r.next), (r.next = e), (e.next = s), (t.lastEffect = e))),
    e
  );
}
function eu() {
  return $e().memoizedState;
}
function ss(e, t, r, s) {
  var l = Je();
  (K.flags |= e),
    (l.memoizedState = jn(1 | t, r, void 0, s === void 0 ? null : s));
}
function $s(e, t, r, s) {
  var l = $e();
  s = s === void 0 ? null : s;
  var a = void 0;
  if (ne !== null) {
    var i = ne.memoizedState;
    if (((a = i.destroy), s !== null && Ja(s, i.deps))) {
      l.memoizedState = jn(t, r, a, s);
      return;
    }
  }
  (K.flags |= e), (l.memoizedState = jn(1 | t, r, a, s));
}
function no(e, t) {
  return ss(8390656, 8, e, t);
}
function ti(e, t) {
  return $s(2048, 8, e, t);
}
function tu(e, t) {
  return $s(4, 2, e, t);
}
function ru(e, t) {
  return $s(4, 4, e, t);
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
    (r = r != null ? r.concat([e]) : null), $s(4, 4, nu.bind(null, t, e), r)
  );
}
function ri() {}
function lu(e, t) {
  var r = $e();
  t = t === void 0 ? null : t;
  var s = r.memoizedState;
  return s !== null && t !== null && Ja(t, s[1])
    ? s[0]
    : ((r.memoizedState = [e, t]), e);
}
function au(e, t) {
  var r = $e();
  t = t === void 0 ? null : t;
  var s = r.memoizedState;
  return s !== null && t !== null && Ja(t, s[1])
    ? s[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function iu(e, t, r) {
  return Zt & 21
    ? (Ke(r, t) || ((r = fc()), (K.lanes |= r), (er |= r), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (je = !0)), (e.memoizedState = r));
}
function Zf(e, t) {
  var r = B;
  (B = r !== 0 && 4 > r ? r : 4), e(!0);
  var s = xl.transition;
  xl.transition = {};
  try {
    e(!1), t();
  } finally {
    (B = r), (xl.transition = s);
  }
}
function ou() {
  return $e().memoizedState;
}
function em(e, t, r) {
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
    var l = xe();
    Ye(r, e, s, l), du(r, t, s);
  }
}
function tm(e, t, r) {
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
        if (((l.hasEagerState = !0), (l.eagerState = o), Ke(o, i))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), Wa(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (r = Hc(e, t, l, s)),
      r !== null && ((l = xe()), Ye(r, e, s, l), du(r, t, s));
  }
}
function cu(e) {
  var t = e.alternate;
  return e === K || (t !== null && t === K);
}
function uu(e, t) {
  en = Cs = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t);
}
function du(e, t, r) {
  if (r & 4194240) {
    var s = t.lanes;
    (s &= e.pendingLanes), (r |= s), (t.lanes = r), Ma(e, r);
  }
}
var Ds = {
    readContext: Ae,
    useCallback: de,
    useContext: de,
    useEffect: de,
    useImperativeHandle: de,
    useInsertionEffect: de,
    useLayoutEffect: de,
    useMemo: de,
    useReducer: de,
    useRef: de,
    useState: de,
    useDebugValue: de,
    useDeferredValue: de,
    useTransition: de,
    useMutableSource: de,
    useSyncExternalStore: de,
    useId: de,
    unstable_isNewReconciler: !1,
  },
  rm = {
    readContext: Ae,
    useCallback: function (e, t) {
      return (Je().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ae,
    useEffect: no,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        ss(4194308, 4, nu.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return ss(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ss(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = Je();
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var s = Je();
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
        (e = e.dispatch = em.bind(null, K, e)),
        [s.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Je();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ro,
    useDebugValue: ri,
    useDeferredValue: function (e) {
      return (Je().memoizedState = e);
    },
    useTransition: function () {
      var e = ro(!1),
        t = e[0];
      return (e = Zf.bind(null, e[1])), (Je().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var s = K,
        l = Je();
      if (W) {
        if (r === void 0) throw Error(E(407));
        r = r();
      } else {
        if (((r = t()), ae === null)) throw Error(E(349));
        Zt & 30 || Yc(s, t, r);
      }
      l.memoizedState = r;
      var a = { value: r, getSnapshot: t };
      return (
        (l.queue = a),
        no(Xc.bind(null, s, a, e), [e]),
        (s.flags |= 2048),
        jn(9, Kc.bind(null, s, a, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = Je(),
        t = ae.identifierPrefix;
      if (W) {
        var r = at,
          s = lt;
        (r = (s & ~(1 << (32 - Ge(s) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = vn++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":");
      } else (r = Jf++), (t = ":" + t + "r" + r.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  nm = {
    readContext: Ae,
    useCallback: lu,
    useContext: Ae,
    useEffect: ti,
    useImperativeHandle: su,
    useInsertionEffect: tu,
    useLayoutEffect: ru,
    useMemo: au,
    useReducer: yl,
    useRef: eu,
    useState: function () {
      return yl(wn);
    },
    useDebugValue: ri,
    useDeferredValue: function (e) {
      var t = $e();
      return iu(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = yl(wn)[0],
        t = $e().memoizedState;
      return [e, t];
    },
    useMutableSource: Wc,
    useSyncExternalStore: Gc,
    useId: ou,
    unstable_isNewReconciler: !1,
  },
  sm = {
    readContext: Ae,
    useCallback: lu,
    useContext: Ae,
    useEffect: ti,
    useImperativeHandle: su,
    useInsertionEffect: tu,
    useLayoutEffect: ru,
    useMemo: au,
    useReducer: vl,
    useRef: eu,
    useState: function () {
      return vl(wn);
    },
    useDebugValue: ri,
    useDeferredValue: function (e) {
      var t = $e();
      return ne === null ? (t.memoizedState = e) : iu(t, ne.memoizedState, e);
    },
    useTransition: function () {
      var e = vl(wn)[0],
        t = $e().memoizedState;
      return [e, t];
    },
    useMutableSource: Wc,
    useSyncExternalStore: Gc,
    useId: ou,
    unstable_isNewReconciler: !1,
  };
function qe(e, t) {
  if (e && e.defaultProps) {
    (t = X({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
function sa(e, t, r, s) {
  (t = e.memoizedState),
    (r = r(s, t)),
    (r = r == null ? t : X({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var Us = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? nr(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var s = xe(),
      l = Tt(e),
      a = it(s, l);
    (a.payload = t),
      r != null && (a.callback = r),
      (t = _t(e, a, l)),
      t !== null && (Ye(t, e, l, s), rs(t, e, l));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var s = xe(),
      l = Tt(e),
      a = it(s, l);
    (a.tag = 1),
      (a.payload = t),
      r != null && (a.callback = r),
      (t = _t(e, a, l)),
      t !== null && (Ye(t, e, l, s), rs(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = xe(),
      s = Tt(e),
      l = it(r, s);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = _t(e, l, s)),
      t !== null && (Ye(t, e, s, r), rs(t, e, s));
  },
};
function so(e, t, r, s, l, a, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(s, a, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !mn(r, s) || !mn(l, a)
      : !0
  );
}
function fu(e, t, r) {
  var s = !1,
    l = Pt,
    a = t.contextType;
  return (
    typeof a == "object" && a !== null
      ? (a = Ae(a))
      : ((l = be(t) ? Xt : pe.current),
        (s = t.contextTypes),
        (a = (s = s != null) ? kr(e, l) : Pt)),
    (t = new t(r, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Us),
    (e.stateNode = t),
    (t._reactInternals = e),
    s &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function lo(e, t, r, s) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, s),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, s),
    t.state !== e && Us.enqueueReplaceState(t, t.state, null);
}
function la(e, t, r, s) {
  var l = e.stateNode;
  (l.props = r), (l.state = e.memoizedState), (l.refs = {}), Ga(e);
  var a = t.contextType;
  typeof a == "object" && a !== null
    ? (l.context = Ae(a))
    : ((a = be(t) ? Xt : pe.current), (l.context = kr(e, a))),
    (l.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == "function" && (sa(e, t, a, r), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Us.enqueueReplaceState(l, l.state, null),
      Ss(e, r, l, s),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function _r(e, t) {
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
function wl(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function aa(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var lm = typeof WeakMap == "function" ? WeakMap : Map;
function mu(e, t, r) {
  (r = it(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var s = t.value;
  return (
    (r.callback = function () {
      _s || ((_s = !0), (ga = s)), aa(e, t);
    }),
    r
  );
}
function pu(e, t, r) {
  (r = it(-1, r)), (r.tag = 3);
  var s = e.type.getDerivedStateFromError;
  if (typeof s == "function") {
    var l = t.value;
    (r.payload = function () {
      return s(l);
    }),
      (r.callback = function () {
        aa(e, t);
      });
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == "function" &&
      (r.callback = function () {
        aa(e, t),
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
function ao(e, t, r) {
  var s = e.pingCache;
  if (s === null) {
    s = e.pingCache = new lm();
    var l = new Set();
    s.set(t, l);
  } else (l = s.get(t)), l === void 0 && ((l = new Set()), s.set(t, l));
  l.has(r) || (l.add(r), (e = vm.bind(null, e, t, r)), t.then(e, e));
}
function io(e) {
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
function oo(e, t, r, s, l) {
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
              : ((t = it(-1, 1)), (t.tag = 2), _t(r, t, 1))),
          (r.lanes |= 1)),
      e);
}
var am = ht.ReactCurrentOwner,
  je = !1;
function he(e, t, r, s) {
  t.child = e === null ? Bc(t, null, r, s) : Dr(t, e.child, r, s);
}
function co(e, t, r, s, l) {
  r = r.render;
  var a = t.ref;
  return (
    jr(t, l),
    (s = Za(e, t, r, s, a, l)),
    (r = ei()),
    e !== null && !je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ft(e, t, l))
      : (W && r && Ua(t), (t.flags |= 1), he(e, t, s, l), t.child)
  );
}
function uo(e, t, r, s, l) {
  if (e === null) {
    var a = r.type;
    return typeof a == "function" &&
      !ui(a) &&
      a.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), hu(e, t, a, s, l))
      : ((e = os(r.type, null, s, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((a = e.child), !(e.lanes & l))) {
    var i = a.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : mn), r(i, s) && e.ref === t.ref)
    )
      return ft(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = It(a, s)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function hu(e, t, r, s, l) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (mn(a, s) && e.ref === t.ref)
      if (((je = !1), (t.pendingProps = s = a), (e.lanes & l) !== 0))
        e.flags & 131072 && (je = !0);
      else return (t.lanes = e.lanes), ft(e, t, l);
  }
  return ia(e, t, r, s, l);
}
function gu(e, t, r) {
  var s = t.pendingProps,
    l = s.children,
    a = e !== null ? e.memoizedState : null;
  if (s.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        H(gr, De),
        (De |= r);
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
          H(gr, De),
          (De |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (s = a !== null ? a.baseLanes : r),
        H(gr, De),
        (De |= s);
    }
  else
    a !== null ? ((s = a.baseLanes | r), (t.memoizedState = null)) : (s = r),
      H(gr, De),
      (De |= s);
  return he(e, t, l, r), t.child;
}
function xu(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ia(e, t, r, s, l) {
  var a = be(r) ? Xt : pe.current;
  return (
    (a = kr(t, a)),
    jr(t, l),
    (r = Za(e, t, r, s, a, l)),
    (s = ei()),
    e !== null && !je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        ft(e, t, l))
      : (W && s && Ua(t), (t.flags |= 1), he(e, t, r, l), t.child)
  );
}
function fo(e, t, r, s, l) {
  if (be(r)) {
    var a = !0;
    vs(t);
  } else a = !1;
  if ((jr(t, l), t.stateNode === null))
    ls(e, t), fu(t, r, s), la(t, r, s, l), (s = !0);
  else if (e === null) {
    var i = t.stateNode,
      o = t.memoizedProps;
    i.props = o;
    var u = i.context,
      c = r.contextType;
    typeof c == "object" && c !== null
      ? (c = Ae(c))
      : ((c = be(r) ? Xt : pe.current), (c = kr(t, c)));
    var h = r.getDerivedStateFromProps,
      m =
        typeof h == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((o !== s || u !== c) && lo(t, i, s, c)),
      (wt = !1);
    var f = t.memoizedState;
    (i.state = f),
      Ss(t, s, i, l),
      (u = t.memoizedState),
      o !== s || f !== u || Ne.current || wt
        ? (typeof h == "function" && (sa(t, r, h, s), (u = t.memoizedState)),
          (o = wt || so(t, r, o, s, f, u, c))
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
              (t.memoizedState = u)),
          (i.props = s),
          (i.state = u),
          (i.context = c),
          (s = o))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (s = !1));
  } else {
    (i = t.stateNode),
      qc(e, t),
      (o = t.memoizedProps),
      (c = t.type === t.elementType ? o : qe(t.type, o)),
      (i.props = c),
      (m = t.pendingProps),
      (f = i.context),
      (u = r.contextType),
      typeof u == "object" && u !== null
        ? (u = Ae(u))
        : ((u = be(r) ? Xt : pe.current), (u = kr(t, u)));
    var x = r.getDerivedStateFromProps;
    (h =
      typeof x == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((o !== m || f !== u) && lo(t, i, s, u)),
      (wt = !1),
      (f = t.memoizedState),
      (i.state = f),
      Ss(t, s, i, l);
    var v = t.memoizedState;
    o !== m || f !== v || Ne.current || wt
      ? (typeof x == "function" && (sa(t, r, x, s), (v = t.memoizedState)),
        (c = wt || so(t, r, c, s, f, v, u) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(s, v, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(s, v, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = s),
            (t.memoizedState = v)),
        (i.props = s),
        (i.state = v),
        (i.context = u),
        (s = c))
      : (typeof i.componentDidUpdate != "function" ||
          (o === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (s = !1));
  }
  return oa(e, t, r, s, a, l);
}
function oa(e, t, r, s, l, a) {
  xu(e, t);
  var i = (t.flags & 128) !== 0;
  if (!s && !i) return l && Ki(t, r, !1), ft(e, t, a);
  (s = t.stateNode), (am.current = t);
  var o =
    i && typeof r.getDerivedStateFromError != "function" ? null : s.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Dr(t, e.child, null, a)), (t.child = Dr(t, null, o, a)))
      : he(e, t, o, a),
    (t.memoizedState = s.state),
    l && Ki(t, r, !0),
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
function mo(e, t, r, s, l) {
  return Cr(), Ba(l), (t.flags |= 256), he(e, t, r, s), t.child;
}
var ca = { dehydrated: null, treeContext: null, retryLane: 0 };
function ua(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function vu(e, t, r) {
  var s = t.pendingProps,
    l = G.current,
    a = !1,
    i = (t.flags & 128) !== 0,
    o;
  if (
    ((o = i) ||
      (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    o
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    H(G, l & 1),
    e === null)
  )
    return (
      ra(t),
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
                : (a = Hs(i, s, 0, null)),
              (e = Gt(e, s, r, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = ua(r)),
              (t.memoizedState = ca),
              e)
            : ni(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
    return im(e, t, i, s, o, l, r);
  if (a) {
    (a = s.fallback), (i = t.mode), (l = e.child), (o = l.sibling);
    var u = { mode: "hidden", children: s.children };
    return (
      !(i & 1) && t.child !== l
        ? ((s = t.child),
          (s.childLanes = 0),
          (s.pendingProps = u),
          (t.deletions = null))
        : ((s = It(l, u)), (s.subtreeFlags = l.subtreeFlags & 14680064)),
      o !== null ? (a = It(o, a)) : ((a = Gt(a, i, r, null)), (a.flags |= 2)),
      (a.return = t),
      (s.return = t),
      (s.sibling = a),
      (t.child = s),
      (s = a),
      (a = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? ua(r)
          : {
              baseLanes: i.baseLanes | r,
              cachePool: null,
              transitions: i.transitions,
            }),
      (a.memoizedState = i),
      (a.childLanes = e.childLanes & ~r),
      (t.memoizedState = ca),
      s
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (s = It(a, { mode: "visible", children: s.children })),
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
function ni(e, t) {
  return (
    (t = Hs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Qn(e, t, r, s) {
  return (
    s !== null && Ba(s),
    Dr(t, e.child, null, r),
    (e = ni(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function im(e, t, r, s, l, a, i) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (s = wl(Error(E(422)))), Qn(e, t, i, s))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((a = s.fallback),
        (l = t.mode),
        (s = Hs({ mode: "visible", children: s.children }, l, 0, null)),
        (a = Gt(a, l, i, null)),
        (a.flags |= 2),
        (s.return = t),
        (a.return = t),
        (s.sibling = a),
        (t.child = s),
        t.mode & 1 && Dr(t, e.child, null, i),
        (t.child.memoizedState = ua(i)),
        (t.memoizedState = ca),
        a);
  if (!(t.mode & 1)) return Qn(e, t, i, null);
  if (l.data === "$!") {
    if (((s = l.nextSibling && l.nextSibling.dataset), s)) var o = s.dgst;
    return (s = o), (a = Error(E(419))), (s = wl(a, s, void 0)), Qn(e, t, i, s);
  }
  if (((o = (i & e.childLanes) !== 0), je || o)) {
    if (((s = ae), s !== null)) {
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
          ((a.retryLane = l), dt(e, l), Ye(s, e, l, -1));
    }
    return ci(), (s = wl(Error(E(421)))), Qn(e, t, i, s);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = wm.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (_e = Et(l.nextSibling)),
      (ze = t),
      (W = !0),
      (We = null),
      e !== null &&
        ((Re[Oe++] = lt),
        (Re[Oe++] = at),
        (Re[Oe++] = Jt),
        (lt = e.id),
        (at = e.overflow),
        (Jt = t)),
      (t = ni(t, s.children)),
      (t.flags |= 4096),
      t);
}
function po(e, t, r) {
  e.lanes |= t;
  var s = e.alternate;
  s !== null && (s.lanes |= t), na(e.return, t, r);
}
function jl(e, t, r, s, l) {
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
function wu(e, t, r) {
  var s = t.pendingProps,
    l = s.revealOrder,
    a = s.tail;
  if ((he(e, t, s.children, r), (s = G.current), s & 2))
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
  if ((H(G, s), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (r = t.child, l = null; r !== null; )
          (e = r.alternate),
            e !== null && ks(e) === null && (l = r),
            (r = r.sibling);
        (r = l),
          r === null
            ? ((l = t.child), (t.child = null))
            : ((l = r.sibling), (r.sibling = null)),
          jl(t, !1, l, r, a);
        break;
      case "backwards":
        for (r = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ks(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = r), (r = l), (l = e);
        }
        jl(t, !0, r, null, a);
        break;
      case "together":
        jl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ls(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ft(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (er |= t.lanes),
    !(r & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (
      e = t.child, r = It(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = It(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function om(e, t, r) {
  switch (t.tag) {
    case 3:
      yu(t), Cr();
      break;
    case 5:
      Qc(t);
      break;
    case 1:
      be(t.type) && vs(t);
      break;
    case 4:
      Ya(t, t.stateNode.containerInfo);
      break;
    case 10:
      var s = t.type._context,
        l = t.memoizedProps.value;
      H(Ns, s._currentValue), (s._currentValue = l);
      break;
    case 13:
      if (((s = t.memoizedState), s !== null))
        return s.dehydrated !== null
          ? (H(G, G.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
          ? vu(e, t, r)
          : (H(G, G.current & 1),
            (e = ft(e, t, r)),
            e !== null ? e.sibling : null);
      H(G, G.current & 1);
      break;
    case 19:
      if (((s = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (s) return wu(e, t, r);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        H(G, G.current),
        s)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), gu(e, t, r);
  }
  return ft(e, t, r);
}
var ju, da, Nu, bu;
ju = function (e, t) {
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
da = function () {};
Nu = function (e, t, r, s) {
  var l = e.memoizedProps;
  if (l !== s) {
    (e = t.stateNode), qt(tt.current);
    var a = null;
    switch (r) {
      case "input":
        (l = Ml(e, l)), (s = Ml(e, s)), (a = []);
        break;
      case "select":
        (l = X({}, l, { value: void 0 })),
          (s = X({}, s, { value: void 0 })),
          (a = []);
        break;
      case "textarea":
        (l = Ol(e, l)), (s = Ol(e, s)), (a = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof s.onClick == "function" &&
          (e.onclick = xs);
    }
    Fl(r, s);
    var i;
    r = null;
    for (c in l)
      if (!s.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var o = l[c];
          for (i in o) o.hasOwnProperty(i) && (r || (r = {}), (r[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (ln.hasOwnProperty(c)
              ? a || (a = [])
              : (a = a || []).push(c, null));
    for (c in s) {
      var u = s[c];
      if (
        ((o = l != null ? l[c] : void 0),
        s.hasOwnProperty(c) && u !== o && (u != null || o != null))
      )
        if (c === "style")
          if (o) {
            for (i in o)
              !o.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (r || (r = {}), (r[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                o[i] !== u[i] &&
                (r || (r = {}), (r[i] = u[i]));
          } else r || (a || (a = []), a.push(c, r)), (r = u);
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (o = o ? o.__html : void 0),
              u != null && o !== u && (a = a || []).push(c, u))
            : c === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (a = a || []).push(c, "" + u)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (ln.hasOwnProperty(c)
                ? (u != null && c === "onScroll" && q("scroll", e),
                  a || o === u || (a = []))
                : (a = a || []).push(c, u));
    }
    r && (a = a || []).push("style", r);
    var c = a;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
bu = function (e, t, r, s) {
  r !== s && (t.flags |= 4);
};
function Br(e, t) {
  if (!W)
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
function fe(e) {
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
function cm(e, t, r) {
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
      return fe(t), null;
    case 1:
      return be(t.type) && ys(), fe(t), null;
    case 3:
      return (
        (s = t.stateNode),
        Er(),
        Q(Ne),
        Q(pe),
        Xa(),
        s.pendingContext &&
          ((s.context = s.pendingContext), (s.pendingContext = null)),
        (e === null || e.child === null) &&
          (Hn(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), We !== null && (va(We), (We = null)))),
        da(e, t),
        fe(t),
        null
      );
    case 5:
      Ka(t);
      var l = qt(yn.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        Nu(e, t, r, s, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!s) {
          if (t.stateNode === null) throw Error(E(166));
          return fe(t), null;
        }
        if (((e = qt(tt.current)), Hn(t))) {
          (s = t.stateNode), (r = t.type);
          var a = t.memoizedProps;
          switch (((s[Ze] = t), (s[gn] = a), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              q("cancel", s), q("close", s);
              break;
            case "iframe":
            case "object":
            case "embed":
              q("load", s);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Gr.length; l++) q(Gr[l], s);
              break;
            case "source":
              q("error", s);
              break;
            case "img":
            case "image":
            case "link":
              q("error", s), q("load", s);
              break;
            case "details":
              q("toggle", s);
              break;
            case "input":
              Ni(s, a), q("invalid", s);
              break;
            case "select":
              (s._wrapperState = { wasMultiple: !!a.multiple }),
                q("invalid", s);
              break;
            case "textarea":
              Si(s, a), q("invalid", s);
          }
          Fl(r, a), (l = null);
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
                : ln.hasOwnProperty(i) &&
                  o != null &&
                  i === "onScroll" &&
                  q("scroll", s);
            }
          switch (r) {
            case "input":
              Rn(s), bi(s, a, !0);
              break;
            case "textarea":
              Rn(s), ki(s);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (s.onclick = xs);
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
            (e[Ze] = t),
            (e[gn] = s),
            ju(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Al(r, s)), r)) {
              case "dialog":
                q("cancel", e), q("close", e), (l = s);
                break;
              case "iframe":
              case "object":
              case "embed":
                q("load", e), (l = s);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Gr.length; l++) q(Gr[l], e);
                l = s;
                break;
              case "source":
                q("error", e), (l = s);
                break;
              case "img":
              case "image":
              case "link":
                q("error", e), q("load", e), (l = s);
                break;
              case "details":
                q("toggle", e), (l = s);
                break;
              case "input":
                Ni(e, s), (l = Ml(e, s)), q("invalid", e);
                break;
              case "option":
                l = s;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!s.multiple }),
                  (l = X({}, s, { value: void 0 })),
                  q("invalid", e);
                break;
              case "textarea":
                Si(e, s), (l = Ol(e, s)), q("invalid", e);
                break;
              default:
                l = s;
            }
            Fl(r, l), (o = l);
            for (a in o)
              if (o.hasOwnProperty(a)) {
                var u = o[a];
                a === "style"
                  ? ec(e, u)
                  : a === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Jo(e, u))
                  : a === "children"
                  ? typeof u == "string"
                    ? (r !== "textarea" || u !== "") && an(e, u)
                    : typeof u == "number" && an(e, "" + u)
                  : a !== "suppressContentEditableWarning" &&
                    a !== "suppressHydrationWarning" &&
                    a !== "autoFocus" &&
                    (ln.hasOwnProperty(a)
                      ? u != null && a === "onScroll" && q("scroll", e)
                      : u != null && Da(e, a, u, i));
              }
            switch (r) {
              case "input":
                Rn(e), bi(e, s, !1);
                break;
              case "textarea":
                Rn(e), ki(e);
                break;
              case "option":
                s.value != null && e.setAttribute("value", "" + Mt(s.value));
                break;
              case "select":
                (e.multiple = !!s.multiple),
                  (a = s.value),
                  a != null
                    ? xr(e, !!s.multiple, a, !1)
                    : s.defaultValue != null &&
                      xr(e, !!s.multiple, s.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = xs);
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
      return fe(t), null;
    case 6:
      if (e && t.stateNode != null) bu(e, t, e.memoizedProps, s);
      else {
        if (typeof s != "string" && t.stateNode === null) throw Error(E(166));
        if (((r = qt(yn.current)), qt(tt.current), Hn(t))) {
          if (
            ((s = t.stateNode),
            (r = t.memoizedProps),
            (s[Ze] = t),
            (a = s.nodeValue !== r) && ((e = ze), e !== null))
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
            (s[Ze] = t),
            (t.stateNode = s);
      }
      return fe(t), null;
    case 13:
      if (
        (Q(G),
        (s = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (W && _e !== null && t.mode & 1 && !(t.flags & 128))
          Uc(), Cr(), (t.flags |= 98560), (a = !1);
        else if (((a = Hn(t)), s !== null && s.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(E(318));
            if (
              ((a = t.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(E(317));
            a[Ze] = t;
          } else
            Cr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          fe(t), (a = !1);
        } else We !== null && (va(We), (We = null)), (a = !0);
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((s = s !== null),
          s !== (e !== null && e.memoizedState !== null) &&
            s &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || G.current & 1 ? se === 0 && (se = 3) : ci())),
          t.updateQueue !== null && (t.flags |= 4),
          fe(t),
          null);
    case 4:
      return (
        Er(), da(e, t), e === null && pn(t.stateNode.containerInfo), fe(t), null
      );
    case 10:
      return Qa(t.type._context), fe(t), null;
    case 17:
      return be(t.type) && ys(), fe(t), null;
    case 19:
      if ((Q(G), (a = t.memoizedState), a === null)) return fe(t), null;
      if (((s = (t.flags & 128) !== 0), (i = a.rendering), i === null))
        if (s) Br(a, !1);
        else {
          if (se !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = ks(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Br(a, !1),
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
                return H(G, (G.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          a.tail !== null &&
            te() > zr &&
            ((t.flags |= 128), (s = !0), Br(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!s)
          if (((e = ks(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (s = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              Br(a, !0),
              a.tail === null && a.tailMode === "hidden" && !i.alternate && !W)
            )
              return fe(t), null;
          } else
            2 * te() - a.renderingStartTime > zr &&
              r !== 1073741824 &&
              ((t.flags |= 128), (s = !0), Br(a, !1), (t.lanes = 4194304));
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
          (a.renderingStartTime = te()),
          (t.sibling = null),
          (r = G.current),
          H(G, s ? (r & 1) | 2 : r & 1),
          t)
        : (fe(t), null);
    case 22:
    case 23:
      return (
        oi(),
        (s = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== s && (t.flags |= 8192),
        s && t.mode & 1
          ? De & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : fe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function um(e, t) {
  switch ((Va(t), t.tag)) {
    case 1:
      return (
        be(t.type) && ys(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Er(),
        Q(Ne),
        Q(pe),
        Xa(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ka(t), null;
    case 13:
      if ((Q(G), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        Cr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Q(G), null;
    case 4:
      return Er(), null;
    case 10:
      return Qa(t.type._context), null;
    case 22:
    case 23:
      return oi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Wn = !1,
  me = !1,
  dm = typeof WeakSet == "function" ? WeakSet : Set,
  P = null;
function hr(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (s) {
        Z(e, t, s);
      }
    else r.current = null;
}
function fa(e, t, r) {
  try {
    r();
  } catch (s) {
    Z(e, t, s);
  }
}
var ho = !1;
function fm(e, t) {
  if (((Yl = ps), (e = Ec()), $a(e))) {
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
            u = -1,
            c = 0,
            h = 0,
            m = e,
            f = null;
          t: for (;;) {
            for (
              var x;
              m !== r || (l !== 0 && m.nodeType !== 3) || (o = i + l),
                m !== a || (s !== 0 && m.nodeType !== 3) || (u = i + s),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (x = m.firstChild) !== null;

            )
              (f = m), (m = x);
            for (;;) {
              if (m === e) break t;
              if (
                (f === r && ++c === l && (o = i),
                f === a && ++h === s && (u = i),
                (x = m.nextSibling) !== null)
              )
                break;
              (m = f), (f = m.parentNode);
            }
            m = x;
          }
          r = o === -1 || u === -1 ? null : { start: o, end: u };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (Kl = { focusedElem: e, selectionRange: r }, ps = !1, P = t; P !== null; )
    if (((t = P), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (P = e);
    else
      for (; P !== null; ) {
        t = P;
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
                  var y = v.memoizedProps,
                    I = v.memoizedState,
                    g = t.stateNode,
                    p = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : qe(t.type, y),
                      I
                    );
                  g.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (j) {
          Z(t, t.return, j);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (P = e);
          break;
        }
        P = t.return;
      }
  return (v = ho), (ho = !1), v;
}
function tn(e, t, r) {
  var s = t.updateQueue;
  if (((s = s !== null ? s.lastEffect : null), s !== null)) {
    var l = (s = s.next);
    do {
      if ((l.tag & e) === e) {
        var a = l.destroy;
        (l.destroy = void 0), a !== void 0 && fa(t, r, a);
      }
      l = l.next;
    } while (l !== s);
  }
}
function Vs(e, t) {
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
function ma(e) {
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
        (delete t[Ze], delete t[gn], delete t[Zl], delete t[Gf], delete t[Yf])),
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
function go(e) {
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
function pa(e, t, r) {
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
          r != null || t.onclick !== null || (t.onclick = xs));
  else if (s !== 4 && ((e = e.child), e !== null))
    for (pa(e, t, r), e = e.sibling; e !== null; ) pa(e, t, r), (e = e.sibling);
}
function ha(e, t, r) {
  var s = e.tag;
  if (s === 5 || s === 6)
    (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (s !== 4 && ((e = e.child), e !== null))
    for (ha(e, t, r), e = e.sibling; e !== null; ) ha(e, t, r), (e = e.sibling);
}
var ie = null,
  Qe = !1;
function xt(e, t, r) {
  for (r = r.child; r !== null; ) Cu(e, t, r), (r = r.sibling);
}
function Cu(e, t, r) {
  if (et && typeof et.onCommitFiberUnmount == "function")
    try {
      et.onCommitFiberUnmount(Ps, r);
    } catch {}
  switch (r.tag) {
    case 5:
      me || hr(r, t);
    case 6:
      var s = ie,
        l = Qe;
      (ie = null),
        xt(e, t, r),
        (ie = s),
        (Qe = l),
        ie !== null &&
          (Qe
            ? ((e = ie),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : ie.removeChild(r.stateNode));
      break;
    case 18:
      ie !== null &&
        (Qe
          ? ((e = ie),
            (r = r.stateNode),
            e.nodeType === 8
              ? pl(e.parentNode, r)
              : e.nodeType === 1 && pl(e, r),
            dn(e))
          : pl(ie, r.stateNode));
      break;
    case 4:
      (s = ie),
        (l = Qe),
        (ie = r.stateNode.containerInfo),
        (Qe = !0),
        xt(e, t, r),
        (ie = s),
        (Qe = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !me &&
        ((s = r.updateQueue), s !== null && ((s = s.lastEffect), s !== null))
      ) {
        l = s = s.next;
        do {
          var a = l,
            i = a.destroy;
          (a = a.tag),
            i !== void 0 && (a & 2 || a & 4) && fa(r, t, i),
            (l = l.next);
        } while (l !== s);
      }
      xt(e, t, r);
      break;
    case 1:
      if (
        !me &&
        (hr(r, t),
        (s = r.stateNode),
        typeof s.componentWillUnmount == "function")
      )
        try {
          (s.props = r.memoizedProps),
            (s.state = r.memoizedState),
            s.componentWillUnmount();
        } catch (o) {
          Z(r, t, o);
        }
      xt(e, t, r);
      break;
    case 21:
      xt(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((me = (s = me) || r.memoizedState !== null), xt(e, t, r), (me = s))
        : xt(e, t, r);
      break;
    default:
      xt(e, t, r);
  }
}
function xo(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new dm()),
      t.forEach(function (s) {
        var l = jm.bind(null, e, s);
        r.has(s) || (r.add(s), s.then(l, l));
      });
  }
}
function He(e, t) {
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
              (ie = o.stateNode), (Qe = !1);
              break e;
            case 3:
              (ie = o.stateNode.containerInfo), (Qe = !0);
              break e;
            case 4:
              (ie = o.stateNode.containerInfo), (Qe = !0);
              break e;
          }
          o = o.return;
        }
        if (ie === null) throw Error(E(160));
        Cu(a, i, l), (ie = null), (Qe = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (c) {
        Z(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Du(t, e), (t = t.sibling);
}
function Du(e, t) {
  var r = e.alternate,
    s = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((He(t, e), Xe(e), s & 4)) {
        try {
          tn(3, e, e.return), Vs(3, e);
        } catch (y) {
          Z(e, e.return, y);
        }
        try {
          tn(5, e, e.return);
        } catch (y) {
          Z(e, e.return, y);
        }
      }
      break;
    case 1:
      He(t, e), Xe(e), s & 512 && r !== null && hr(r, r.return);
      break;
    case 5:
      if (
        (He(t, e),
        Xe(e),
        s & 512 && r !== null && hr(r, r.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          an(l, "");
        } catch (y) {
          Z(e, e.return, y);
        }
      }
      if (s & 4 && ((l = e.stateNode), l != null)) {
        var a = e.memoizedProps,
          i = r !== null ? r.memoizedProps : a,
          o = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            o === "input" && a.type === "radio" && a.name != null && Yo(l, a),
              Al(o, i);
            var c = Al(o, a);
            for (i = 0; i < u.length; i += 2) {
              var h = u[i],
                m = u[i + 1];
              h === "style"
                ? ec(l, m)
                : h === "dangerouslySetInnerHTML"
                ? Jo(l, m)
                : h === "children"
                ? an(l, m)
                : Da(l, h, m, c);
            }
            switch (o) {
              case "input":
                Pl(l, a);
                break;
              case "textarea":
                Ko(l, a);
                break;
              case "select":
                var f = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!a.multiple;
                var x = a.value;
                x != null
                  ? xr(l, !!a.multiple, x, !1)
                  : f !== !!a.multiple &&
                    (a.defaultValue != null
                      ? xr(l, !!a.multiple, a.defaultValue, !0)
                      : xr(l, !!a.multiple, a.multiple ? [] : "", !1));
            }
            l[gn] = a;
          } catch (y) {
            Z(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((He(t, e), Xe(e), s & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (l = e.stateNode), (a = e.memoizedProps);
        try {
          l.nodeValue = a;
        } catch (y) {
          Z(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (He(t, e), Xe(e), s & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          dn(t.containerInfo);
        } catch (y) {
          Z(e, e.return, y);
        }
      break;
    case 4:
      He(t, e), Xe(e);
      break;
    case 13:
      He(t, e),
        Xe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((a = l.memoizedState !== null),
          (l.stateNode.isHidden = a),
          !a ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (ai = te())),
        s & 4 && xo(e);
      break;
    case 22:
      if (
        ((h = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((me = (c = me) || h), He(t, e), (me = c)) : He(t, e),
        Xe(e),
        s & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !h && e.mode & 1)
        )
          for (P = e, h = e.child; h !== null; ) {
            for (m = P = h; P !== null; ) {
              switch (((f = P), (x = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  tn(4, f, f.return);
                  break;
                case 1:
                  hr(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (s = f), (r = f.return);
                    try {
                      (t = s),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (y) {
                      Z(s, r, y);
                    }
                  }
                  break;
                case 5:
                  hr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    vo(m);
                    continue;
                  }
              }
              x !== null ? ((x.return = f), (P = x)) : vo(m);
            }
            h = h.sibling;
          }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                (l = m.stateNode),
                  c
                    ? ((a = l.style),
                      typeof a.setProperty == "function"
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none"))
                    : ((o = m.stateNode),
                      (u = m.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (o.style.display = Zo("display", i)));
              } catch (y) {
                Z(e, e.return, y);
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (y) {
                Z(e, e.return, y);
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
            h === m && (h = null), (m = m.return);
          }
          h === m && (h = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      He(t, e), Xe(e), s & 4 && xo(e);
      break;
    case 21:
      break;
    default:
      He(t, e), Xe(e);
  }
}
function Xe(e) {
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
        throw Error(E(160));
      }
      switch (s.tag) {
        case 5:
          var l = s.stateNode;
          s.flags & 32 && (an(l, ""), (s.flags &= -33));
          var a = go(e);
          ha(e, a, l);
          break;
        case 3:
        case 4:
          var i = s.stateNode.containerInfo,
            o = go(e);
          pa(e, o, i);
          break;
        default:
          throw Error(E(161));
      }
    } catch (u) {
      Z(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function mm(e, t, r) {
  (P = e), Eu(e);
}
function Eu(e, t, r) {
  for (var s = (e.mode & 1) !== 0; P !== null; ) {
    var l = P,
      a = l.child;
    if (l.tag === 22 && s) {
      var i = l.memoizedState !== null || Wn;
      if (!i) {
        var o = l.alternate,
          u = (o !== null && o.memoizedState !== null) || me;
        o = Wn;
        var c = me;
        if (((Wn = i), (me = u) && !c))
          for (P = l; P !== null; )
            (i = P),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? wo(l)
                : u !== null
                ? ((u.return = i), (P = u))
                : wo(l);
        for (; a !== null; ) (P = a), Eu(a), (a = a.sibling);
        (P = l), (Wn = o), (me = c);
      }
      yo(e);
    } else
      l.subtreeFlags & 8772 && a !== null ? ((a.return = l), (P = a)) : yo(e);
  }
}
function yo(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              me || Vs(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !me)
                if (r === null) s.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : qe(t.type, r.memoizedProps);
                  s.componentDidUpdate(
                    l,
                    r.memoizedState,
                    s.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var a = t.updateQueue;
              a !== null && to(t, a, s);
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
                to(t, i, r);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (r === null && t.flags & 4) {
                r = o;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && r.focus();
                    break;
                  case "img":
                    u.src && (r.src = u.src);
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
                  var h = c.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && dn(m);
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
        me || (t.flags & 512 && ma(t));
      } catch (f) {
        Z(t, t.return, f);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), (P = r);
      break;
    }
    P = t.return;
  }
}
function vo(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), (P = r);
      break;
    }
    P = t.return;
  }
}
function wo(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            Vs(4, t);
          } catch (u) {
            Z(t, r, u);
          }
          break;
        case 1:
          var s = t.stateNode;
          if (typeof s.componentDidMount == "function") {
            var l = t.return;
            try {
              s.componentDidMount();
            } catch (u) {
              Z(t, l, u);
            }
          }
          var a = t.return;
          try {
            ma(t);
          } catch (u) {
            Z(t, a, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ma(t);
          } catch (u) {
            Z(t, i, u);
          }
      }
    } catch (u) {
      Z(t, t.return, u);
    }
    if (t === e) {
      P = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      (o.return = t.return), (P = o);
      break;
    }
    P = t.return;
  }
}
var pm = Math.ceil,
  Es = ht.ReactCurrentDispatcher,
  si = ht.ReactCurrentOwner,
  Fe = ht.ReactCurrentBatchConfig,
  U = 0,
  ae = null,
  re = null,
  oe = 0,
  De = 0,
  gr = Lt(0),
  se = 0,
  Nn = null,
  er = 0,
  Bs = 0,
  li = 0,
  rn = null,
  we = null,
  ai = 0,
  zr = 1 / 0,
  nt = null,
  _s = !1,
  ga = null,
  zt = null,
  Gn = !1,
  St = null,
  zs = 0,
  nn = 0,
  xa = null,
  as = -1,
  is = 0;
function xe() {
  return U & 6 ? te() : as !== -1 ? as : (as = te());
}
function Tt(e) {
  return e.mode & 1
    ? U & 2 && oe !== 0
      ? oe & -oe
      : Xf.transition !== null
      ? (is === 0 && (is = fc()), is)
      : ((e = B),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : vc(e.type))),
        e)
    : 1;
}
function Ye(e, t, r, s) {
  if (50 < nn) throw ((nn = 0), (xa = null), Error(E(185)));
  Cn(e, r, s),
    (!(U & 2) || e !== ae) &&
      (e === ae && (!(U & 2) && (Bs |= r), se === 4 && Nt(e, oe)),
      Se(e, s),
      r === 1 && U === 0 && !(t.mode & 1) && ((zr = te() + 500), As && Ft()));
}
function Se(e, t) {
  var r = e.callbackNode;
  Kd(e, t);
  var s = ms(e, e === ae ? oe : 0);
  if (s === 0)
    r !== null && Ei(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = s & -s), e.callbackPriority !== t)) {
    if ((r != null && Ei(r), t === 1))
      e.tag === 0 ? Kf(jo.bind(null, e)) : Fc(jo.bind(null, e)),
        Qf(function () {
          !(U & 6) && Ft();
        }),
        (r = null);
    else {
      switch (mc(s)) {
        case 1:
          r = Ia;
          break;
        case 4:
          r = uc;
          break;
        case 16:
          r = fs;
          break;
        case 536870912:
          r = dc;
          break;
        default:
          r = fs;
      }
      r = Ou(r, _u.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function _u(e, t) {
  if (((as = -1), (is = 0), U & 6)) throw Error(E(327));
  var r = e.callbackNode;
  if (Nr() && e.callbackNode !== r) return null;
  var s = ms(e, e === ae ? oe : 0);
  if (s === 0) return null;
  if (s & 30 || s & e.expiredLanes || t) t = Ts(e, s);
  else {
    t = s;
    var l = U;
    U |= 2;
    var a = Tu();
    (ae !== e || oe !== t) && ((nt = null), (zr = te() + 500), Wt(e, t));
    do
      try {
        xm();
        break;
      } catch (o) {
        zu(e, o);
      }
    while (!0);
    qa(),
      (Es.current = a),
      (U = l),
      re !== null ? (t = 0) : ((ae = null), (oe = 0), (t = se));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Hl(e)), l !== 0 && ((s = l), (t = ya(e, l)))), t === 1)
    )
      throw ((r = Nn), Wt(e, 0), Nt(e, s), Se(e, te()), r);
    if (t === 6) Nt(e, s);
    else {
      if (
        ((l = e.current.alternate),
        !(s & 30) &&
          !hm(l) &&
          ((t = Ts(e, s)),
          t === 2 && ((a = Hl(e)), a !== 0 && ((s = a), (t = ya(e, a)))),
          t === 1))
      )
        throw ((r = Nn), Wt(e, 0), Nt(e, s), Se(e, te()), r);
      switch (((e.finishedWork = l), (e.finishedLanes = s), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Vt(e, we, nt);
          break;
        case 3:
          if (
            (Nt(e, s), (s & 130023424) === s && ((t = ai + 500 - te()), 10 < t))
          ) {
            if (ms(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & s) !== s)) {
              xe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Jl(Vt.bind(null, e, we, nt), t);
            break;
          }
          Vt(e, we, nt);
          break;
        case 4:
          if ((Nt(e, s), (s & 4194240) === s)) break;
          for (t = e.eventTimes, l = -1; 0 < s; ) {
            var i = 31 - Ge(s);
            (a = 1 << i), (i = t[i]), i > l && (l = i), (s &= ~a);
          }
          if (
            ((s = l),
            (s = te() - s),
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
            e.timeoutHandle = Jl(Vt.bind(null, e, we, nt), s);
            break;
          }
          Vt(e, we, nt);
          break;
        case 5:
          Vt(e, we, nt);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Se(e, te()), e.callbackNode === r ? _u.bind(null, e) : null;
}
function ya(e, t) {
  var r = rn;
  return (
    e.current.memoizedState.isDehydrated && (Wt(e, t).flags |= 256),
    (e = Ts(e, t)),
    e !== 2 && ((t = we), (we = r), t !== null && va(t)),
    e
  );
}
function va(e) {
  we === null ? (we = e) : we.push.apply(we, e);
}
function hm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var s = 0; s < r.length; s++) {
          var l = r[s],
            a = l.getSnapshot;
          l = l.value;
          try {
            if (!Ke(a(), l)) return !1;
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
function Nt(e, t) {
  for (
    t &= ~li,
      t &= ~Bs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - Ge(t),
      s = 1 << r;
    (e[r] = -1), (t &= ~s);
  }
}
function jo(e) {
  if (U & 6) throw Error(E(327));
  Nr();
  var t = ms(e, 0);
  if (!(t & 1)) return Se(e, te()), null;
  var r = Ts(e, t);
  if (e.tag !== 0 && r === 2) {
    var s = Hl(e);
    s !== 0 && ((t = s), (r = ya(e, s)));
  }
  if (r === 1) throw ((r = Nn), Wt(e, 0), Nt(e, t), Se(e, te()), r);
  if (r === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Vt(e, we, nt),
    Se(e, te()),
    null
  );
}
function ii(e, t) {
  var r = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    (U = r), U === 0 && ((zr = te() + 500), As && Ft());
  }
}
function tr(e) {
  St !== null && St.tag === 0 && !(U & 6) && Nr();
  var t = U;
  U |= 1;
  var r = Fe.transition,
    s = B;
  try {
    if (((Fe.transition = null), (B = 1), e)) return e();
  } finally {
    (B = s), (Fe.transition = r), (U = t), !(U & 6) && Ft();
  }
}
function oi() {
  (De = gr.current), Q(gr);
}
function Wt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), qf(r)), re !== null))
    for (r = re.return; r !== null; ) {
      var s = r;
      switch ((Va(s), s.tag)) {
        case 1:
          (s = s.type.childContextTypes), s != null && ys();
          break;
        case 3:
          Er(), Q(Ne), Q(pe), Xa();
          break;
        case 5:
          Ka(s);
          break;
        case 4:
          Er();
          break;
        case 13:
          Q(G);
          break;
        case 19:
          Q(G);
          break;
        case 10:
          Qa(s.type._context);
          break;
        case 22:
        case 23:
          oi();
      }
      r = r.return;
    }
  if (
    ((ae = e),
    (re = e = It(e.current, null)),
    (oe = De = t),
    (se = 0),
    (Nn = null),
    (li = Bs = er = 0),
    (we = rn = null),
    Ht !== null)
  ) {
    for (t = 0; t < Ht.length; t++)
      if (((r = Ht[t]), (s = r.interleaved), s !== null)) {
        r.interleaved = null;
        var l = s.next,
          a = r.pending;
        if (a !== null) {
          var i = a.next;
          (a.next = l), (s.next = i);
        }
        r.pending = s;
      }
    Ht = null;
  }
  return e;
}
function zu(e, t) {
  do {
    var r = re;
    try {
      if ((qa(), (ns.current = Ds), Cs)) {
        for (var s = K.memoizedState; s !== null; ) {
          var l = s.queue;
          l !== null && (l.pending = null), (s = s.next);
        }
        Cs = !1;
      }
      if (
        ((Zt = 0),
        (le = ne = K = null),
        (en = !1),
        (vn = 0),
        (si.current = null),
        r === null || r.return === null)
      ) {
        (se = 1), (Nn = t), (re = null);
        break;
      }
      e: {
        var a = e,
          i = r.return,
          o = r,
          u = t;
        if (
          ((t = oe),
          (o.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            h = o,
            m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var f = h.alternate;
            f
              ? ((h.updateQueue = f.updateQueue),
                (h.memoizedState = f.memoizedState),
                (h.lanes = f.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var x = io(i);
          if (x !== null) {
            (x.flags &= -257),
              oo(x, i, o, a, t),
              x.mode & 1 && ao(a, c, t),
              (t = x),
              (u = c);
            var v = t.updateQueue;
            if (v === null) {
              var y = new Set();
              y.add(u), (t.updateQueue = y);
            } else v.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              ao(a, c, t), ci();
              break e;
            }
            u = Error(E(426));
          }
        } else if (W && o.mode & 1) {
          var I = io(i);
          if (I !== null) {
            !(I.flags & 65536) && (I.flags |= 256),
              oo(I, i, o, a, t),
              Ba(_r(u, o));
            break e;
          }
        }
        (a = u = _r(u, o)),
          se !== 4 && (se = 2),
          rn === null ? (rn = [a]) : rn.push(a),
          (a = i);
        do {
          switch (a.tag) {
            case 3:
              (a.flags |= 65536), (t &= -t), (a.lanes |= t);
              var g = mu(a, u, t);
              eo(a, g);
              break e;
            case 1:
              o = u;
              var p = a.type,
                d = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (zt === null || !zt.has(d))))
              ) {
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var j = pu(a, o, t);
                eo(a, j);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      Mu(r);
    } catch (D) {
      (t = D), re === r && r !== null && (re = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function Tu() {
  var e = Es.current;
  return (Es.current = Ds), e === null ? Ds : e;
}
function ci() {
  (se === 0 || se === 3 || se === 2) && (se = 4),
    ae === null || (!(er & 268435455) && !(Bs & 268435455)) || Nt(ae, oe);
}
function Ts(e, t) {
  var r = U;
  U |= 2;
  var s = Tu();
  (ae !== e || oe !== t) && ((nt = null), Wt(e, t));
  do
    try {
      gm();
      break;
    } catch (l) {
      zu(e, l);
    }
  while (!0);
  if ((qa(), (U = r), (Es.current = s), re !== null)) throw Error(E(261));
  return (ae = null), (oe = 0), se;
}
function gm() {
  for (; re !== null; ) Iu(re);
}
function xm() {
  for (; re !== null && !Ud(); ) Iu(re);
}
function Iu(e) {
  var t = Ru(e.alternate, e, De);
  (e.memoizedProps = e.pendingProps),
    t === null ? Mu(e) : (re = t),
    (si.current = null);
}
function Mu(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = um(r, t)), r !== null)) {
        (r.flags &= 32767), (re = r);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (se = 6), (re = null);
        return;
      }
    } else if (((r = cm(r, t, De)), r !== null)) {
      re = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      re = t;
      return;
    }
    re = t = e;
  } while (t !== null);
  se === 0 && (se = 5);
}
function Vt(e, t, r) {
  var s = B,
    l = Fe.transition;
  try {
    (Fe.transition = null), (B = 1), ym(e, t, r, s);
  } finally {
    (Fe.transition = l), (B = s);
  }
  return null;
}
function ym(e, t, r, s) {
  do Nr();
  while (St !== null);
  if (U & 6) throw Error(E(327));
  r = e.finishedWork;
  var l = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var a = r.lanes | r.childLanes;
  if (
    (Xd(e, a),
    e === ae && ((re = ae = null), (oe = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      Gn ||
      ((Gn = !0),
      Ou(fs, function () {
        return Nr(), null;
      })),
    (a = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || a)
  ) {
    (a = Fe.transition), (Fe.transition = null);
    var i = B;
    B = 1;
    var o = U;
    (U |= 4),
      (si.current = null),
      fm(e, r),
      Du(r, e),
      Ff(Kl),
      (ps = !!Yl),
      (Kl = Yl = null),
      (e.current = r),
      mm(r),
      Vd(),
      (U = o),
      (B = i),
      (Fe.transition = a);
  } else e.current = r;
  if (
    (Gn && ((Gn = !1), (St = e), (zs = l)),
    (a = e.pendingLanes),
    a === 0 && (zt = null),
    qd(r.stateNode),
    Se(e, te()),
    t !== null)
  )
    for (s = e.onRecoverableError, r = 0; r < t.length; r++)
      (l = t[r]), s(l.value, { componentStack: l.stack, digest: l.digest });
  if (_s) throw ((_s = !1), (e = ga), (ga = null), e);
  return (
    zs & 1 && e.tag !== 0 && Nr(),
    (a = e.pendingLanes),
    a & 1 ? (e === xa ? nn++ : ((nn = 0), (xa = e))) : (nn = 0),
    Ft(),
    null
  );
}
function Nr() {
  if (St !== null) {
    var e = mc(zs),
      t = Fe.transition,
      r = B;
    try {
      if (((Fe.transition = null), (B = 16 > e ? 16 : e), St === null))
        var s = !1;
      else {
        if (((e = St), (St = null), (zs = 0), U & 6)) throw Error(E(331));
        var l = U;
        for (U |= 4, P = e.current; P !== null; ) {
          var a = P,
            i = a.child;
          if (P.flags & 16) {
            var o = a.deletions;
            if (o !== null) {
              for (var u = 0; u < o.length; u++) {
                var c = o[u];
                for (P = c; P !== null; ) {
                  var h = P;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      tn(8, h, a);
                  }
                  var m = h.child;
                  if (m !== null) (m.return = h), (P = m);
                  else
                    for (; P !== null; ) {
                      h = P;
                      var f = h.sibling,
                        x = h.return;
                      if ((Su(h), h === c)) {
                        P = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = x), (P = f);
                        break;
                      }
                      P = x;
                    }
                }
              }
              var v = a.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var I = y.sibling;
                    (y.sibling = null), (y = I);
                  } while (y !== null);
                }
              }
              P = a;
            }
          }
          if (a.subtreeFlags & 2064 && i !== null) (i.return = a), (P = i);
          else
            e: for (; P !== null; ) {
              if (((a = P), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    tn(9, a, a.return);
                }
              var g = a.sibling;
              if (g !== null) {
                (g.return = a.return), (P = g);
                break e;
              }
              P = a.return;
            }
        }
        var p = e.current;
        for (P = p; P !== null; ) {
          i = P;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (P = d);
          else
            e: for (i = p; P !== null; ) {
              if (((o = P), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vs(9, o);
                  }
                } catch (D) {
                  Z(o, o.return, D);
                }
              if (o === i) {
                P = null;
                break e;
              }
              var j = o.sibling;
              if (j !== null) {
                (j.return = o.return), (P = j);
                break e;
              }
              P = o.return;
            }
        }
        if (
          ((U = l), Ft(), et && typeof et.onPostCommitFiberRoot == "function")
        )
          try {
            et.onPostCommitFiberRoot(Ps, e);
          } catch {}
        s = !0;
      }
      return s;
    } finally {
      (B = r), (Fe.transition = t);
    }
  }
  return !1;
}
function No(e, t, r) {
  (t = _r(r, t)),
    (t = mu(e, t, 1)),
    (e = _t(e, t, 1)),
    (t = xe()),
    e !== null && (Cn(e, 1, t), Se(e, t));
}
function Z(e, t, r) {
  if (e.tag === 3) No(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        No(t, e, r);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof s.componentDidCatch == "function" &&
            (zt === null || !zt.has(s)))
        ) {
          (e = _r(r, e)),
            (e = pu(t, e, 1)),
            (t = _t(t, e, 1)),
            (e = xe()),
            t !== null && (Cn(t, 1, e), Se(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function vm(e, t, r) {
  var s = e.pingCache;
  s !== null && s.delete(t),
    (t = xe()),
    (e.pingedLanes |= e.suspendedLanes & r),
    ae === e &&
      (oe & r) === r &&
      (se === 4 || (se === 3 && (oe & 130023424) === oe && 500 > te() - ai)
        ? Wt(e, 0)
        : (li |= r)),
    Se(e, t);
}
function Pu(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Fn), (Fn <<= 1), !(Fn & 130023424) && (Fn = 4194304))
      : (t = 1));
  var r = xe();
  (e = dt(e, t)), e !== null && (Cn(e, t, r), Se(e, r));
}
function wm(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), Pu(e, r);
}
function jm(e, t) {
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
      throw Error(E(314));
  }
  s !== null && s.delete(t), Pu(e, r);
}
var Ru;
Ru = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ne.current) je = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (je = !1), om(e, t, r);
      je = !!(e.flags & 131072);
    }
  else (je = !1), W && t.flags & 1048576 && Ac(t, js, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var s = t.type;
      ls(e, t), (e = t.pendingProps);
      var l = kr(t, pe.current);
      jr(t, r), (l = Za(null, t, s, e, l, r));
      var a = ei();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            be(s) ? ((a = !0), vs(t)) : (a = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ga(t),
            (l.updater = Us),
            (t.stateNode = l),
            (l._reactInternals = t),
            la(t, s, e, r),
            (t = oa(null, t, s, !0, a, r)))
          : ((t.tag = 0), W && a && Ua(t), he(null, t, l, r), (t = t.child)),
        t
      );
    case 16:
      s = t.elementType;
      e: {
        switch (
          (ls(e, t),
          (e = t.pendingProps),
          (l = s._init),
          (s = l(s._payload)),
          (t.type = s),
          (l = t.tag = bm(s)),
          (e = qe(s, e)),
          l)
        ) {
          case 0:
            t = ia(null, t, s, e, r);
            break e;
          case 1:
            t = fo(null, t, s, e, r);
            break e;
          case 11:
            t = co(null, t, s, e, r);
            break e;
          case 14:
            t = uo(null, t, s, qe(s.type, e), r);
            break e;
        }
        throw Error(E(306, s, ""));
      }
      return t;
    case 0:
      return (
        (s = t.type),
        (l = t.pendingProps),
        (l = t.elementType === s ? l : qe(s, l)),
        ia(e, t, s, l, r)
      );
    case 1:
      return (
        (s = t.type),
        (l = t.pendingProps),
        (l = t.elementType === s ? l : qe(s, l)),
        fo(e, t, s, l, r)
      );
    case 3:
      e: {
        if ((yu(t), e === null)) throw Error(E(387));
        (s = t.pendingProps),
          (a = t.memoizedState),
          (l = a.element),
          qc(e, t),
          Ss(t, s, null, r);
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
            (l = _r(Error(E(423)), t)), (t = mo(e, t, s, r, l));
            break e;
          } else if (s !== l) {
            (l = _r(Error(E(424)), t)), (t = mo(e, t, s, r, l));
            break e;
          } else
            for (
              _e = Et(t.stateNode.containerInfo.firstChild),
                ze = t,
                W = !0,
                We = null,
                r = Bc(t, null, s, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((Cr(), s === l)) {
            t = ft(e, t, r);
            break e;
          }
          he(e, t, s, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Qc(t),
        e === null && ra(t),
        (s = t.type),
        (l = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Xl(s, l) ? (i = null) : a !== null && Xl(s, a) && (t.flags |= 32),
        xu(e, t),
        he(e, t, i, r),
        t.child
      );
    case 6:
      return e === null && ra(t), null;
    case 13:
      return vu(e, t, r);
    case 4:
      return (
        Ya(t, t.stateNode.containerInfo),
        (s = t.pendingProps),
        e === null ? (t.child = Dr(t, null, s, r)) : he(e, t, s, r),
        t.child
      );
    case 11:
      return (
        (s = t.type),
        (l = t.pendingProps),
        (l = t.elementType === s ? l : qe(s, l)),
        co(e, t, s, l, r)
      );
    case 7:
      return he(e, t, t.pendingProps, r), t.child;
    case 8:
      return he(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return he(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (
          ((s = t.type._context),
          (l = t.pendingProps),
          (a = t.memoizedProps),
          (i = l.value),
          H(Ns, s._currentValue),
          (s._currentValue = i),
          a !== null)
        )
          if (Ke(a.value, i)) {
            if (a.children === l.children && !Ne.current) {
              t = ft(e, t, r);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var o = a.dependencies;
              if (o !== null) {
                i = a.child;
                for (var u = o.firstContext; u !== null; ) {
                  if (u.context === s) {
                    if (a.tag === 1) {
                      (u = it(-1, r & -r)), (u.tag = 2);
                      var c = a.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null
                          ? (u.next = u)
                          : ((u.next = h.next), (h.next = u)),
                          (c.pending = u);
                      }
                    }
                    (a.lanes |= r),
                      (u = a.alternate),
                      u !== null && (u.lanes |= r),
                      na(a.return, r, t),
                      (o.lanes |= r);
                    break;
                  }
                  u = u.next;
                }
              } else if (a.tag === 10) i = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((i = a.return), i === null)) throw Error(E(341));
                (i.lanes |= r),
                  (o = i.alternate),
                  o !== null && (o.lanes |= r),
                  na(i, r, t),
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
        he(e, t, l.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (s = t.pendingProps.children),
        jr(t, r),
        (l = Ae(l)),
        (s = s(l)),
        (t.flags |= 1),
        he(e, t, s, r),
        t.child
      );
    case 14:
      return (
        (s = t.type),
        (l = qe(s, t.pendingProps)),
        (l = qe(s.type, l)),
        uo(e, t, s, l, r)
      );
    case 15:
      return hu(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (s = t.type),
        (l = t.pendingProps),
        (l = t.elementType === s ? l : qe(s, l)),
        ls(e, t),
        (t.tag = 1),
        be(s) ? ((e = !0), vs(t)) : (e = !1),
        jr(t, r),
        fu(t, s, l),
        la(t, s, l, r),
        oa(null, t, s, !0, e, r)
      );
    case 19:
      return wu(e, t, r);
    case 22:
      return gu(e, t, r);
  }
  throw Error(E(156, t.tag));
};
function Ou(e, t) {
  return cc(e, t);
}
function Nm(e, t, r, s) {
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
function Le(e, t, r, s) {
  return new Nm(e, t, r, s);
}
function ui(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function bm(e) {
  if (typeof e == "function") return ui(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === _a)) return 11;
    if (e === za) return 14;
  }
  return 2;
}
function It(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = Le(e.tag, t, e.key, e.mode)),
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
function os(e, t, r, s, l, a) {
  var i = 2;
  if (((s = e), typeof e == "function")) ui(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case ar:
        return Gt(r.children, l, a, t);
      case Ea:
        (i = 8), (l |= 8);
        break;
      case _l:
        return (
          (e = Le(12, r, t, l | 2)), (e.elementType = _l), (e.lanes = a), e
        );
      case zl:
        return (e = Le(13, r, t, l)), (e.elementType = zl), (e.lanes = a), e;
      case Tl:
        return (e = Le(19, r, t, l)), (e.elementType = Tl), (e.lanes = a), e;
      case Qo:
        return Hs(r, l, a, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ho:
              i = 10;
              break e;
            case qo:
              i = 9;
              break e;
            case _a:
              i = 11;
              break e;
            case za:
              i = 14;
              break e;
            case vt:
              (i = 16), (s = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Le(i, r, t, l)), (t.elementType = e), (t.type = s), (t.lanes = a), t
  );
}
function Gt(e, t, r, s) {
  return (e = Le(7, e, s, t)), (e.lanes = r), e;
}
function Hs(e, t, r, s) {
  return (
    (e = Le(22, e, s, t)),
    (e.elementType = Qo),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Nl(e, t, r) {
  return (e = Le(6, e, null, t)), (e.lanes = r), e;
}
function bl(e, t, r) {
  return (
    (t = Le(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Sm(e, t, r, s, l) {
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
    (this.eventTimes = nl(0)),
    (this.expirationTimes = nl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = nl(0)),
    (this.identifierPrefix = s),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function di(e, t, r, s, l, a, i, o, u) {
  return (
    (e = new Sm(e, t, r, o, u)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = Le(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: s,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ga(a),
    e
  );
}
function km(e, t, r) {
  var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: lr,
    key: s == null ? null : "" + s,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function Lu(e) {
  if (!e) return Pt;
  e = e._reactInternals;
  e: {
    if (nr(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (be(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (be(r)) return Lc(e, r, t);
  }
  return t;
}
function Fu(e, t, r, s, l, a, i, o, u) {
  return (
    (e = di(r, s, !0, e, l, a, i, o, u)),
    (e.context = Lu(null)),
    (r = e.current),
    (s = xe()),
    (l = Tt(r)),
    (a = it(s, l)),
    (a.callback = t ?? null),
    _t(r, a, l),
    (e.current.lanes = l),
    Cn(e, l, s),
    Se(e, s),
    e
  );
}
function qs(e, t, r, s) {
  var l = t.current,
    a = xe(),
    i = Tt(l);
  return (
    (r = Lu(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = it(a, i)),
    (t.payload = { element: e }),
    (s = s === void 0 ? null : s),
    s !== null && (t.callback = s),
    (e = _t(l, t, i)),
    e !== null && (Ye(e, l, i, a), rs(e, l, i)),
    i
  );
}
function Is(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function bo(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function fi(e, t) {
  bo(e, t), (e = e.alternate) && bo(e, t);
}
function Cm() {
  return null;
}
var Au =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function mi(e) {
  this._internalRoot = e;
}
Qs.prototype.render = mi.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  qs(e, t, null, null);
};
Qs.prototype.unmount = mi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    tr(function () {
      qs(null, e, null, null);
    }),
      (t[ut] = null);
  }
};
function Qs(e) {
  this._internalRoot = e;
}
Qs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = gc();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < jt.length && t !== 0 && t < jt[r].priority; r++);
    jt.splice(r, 0, e), r === 0 && yc(e);
  }
};
function pi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ws(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function So() {}
function Dm(e, t, r, s, l) {
  if (l) {
    if (typeof s == "function") {
      var a = s;
      s = function () {
        var c = Is(i);
        a.call(c);
      };
    }
    var i = Fu(t, s, e, 0, null, !1, !1, "", So);
    return (
      (e._reactRootContainer = i),
      (e[ut] = i.current),
      pn(e.nodeType === 8 ? e.parentNode : e),
      tr(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof s == "function") {
    var o = s;
    s = function () {
      var c = Is(u);
      o.call(c);
    };
  }
  var u = di(e, 0, !1, null, null, !1, !1, "", So);
  return (
    (e._reactRootContainer = u),
    (e[ut] = u.current),
    pn(e.nodeType === 8 ? e.parentNode : e),
    tr(function () {
      qs(t, u, r, s);
    }),
    u
  );
}
function Gs(e, t, r, s, l) {
  var a = r._reactRootContainer;
  if (a) {
    var i = a;
    if (typeof l == "function") {
      var o = l;
      l = function () {
        var u = Is(i);
        o.call(u);
      };
    }
    qs(t, i, e, l);
  } else i = Dm(r, t, e, l, s);
  return Is(i);
}
pc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = Wr(t.pendingLanes);
        r !== 0 &&
          (Ma(t, r | 1), Se(t, te()), !(U & 6) && ((zr = te() + 500), Ft()));
      }
      break;
    case 13:
      tr(function () {
        var s = dt(e, 1);
        if (s !== null) {
          var l = xe();
          Ye(s, e, 1, l);
        }
      }),
        fi(e, 1);
  }
};
Pa = function (e) {
  if (e.tag === 13) {
    var t = dt(e, 134217728);
    if (t !== null) {
      var r = xe();
      Ye(t, e, 134217728, r);
    }
    fi(e, 134217728);
  }
};
hc = function (e) {
  if (e.tag === 13) {
    var t = Tt(e),
      r = dt(e, t);
    if (r !== null) {
      var s = xe();
      Ye(r, e, t, s);
    }
    fi(e, t);
  }
};
gc = function () {
  return B;
};
xc = function (e, t) {
  var r = B;
  try {
    return (B = e), t();
  } finally {
    B = r;
  }
};
Ul = function (e, t, r) {
  switch (t) {
    case "input":
      if ((Pl(e, r), (t = r.name), r.type === "radio" && t != null)) {
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
            var l = Fs(s);
            if (!l) throw Error(E(90));
            Go(s), Pl(s, l);
          }
        }
      }
      break;
    case "textarea":
      Ko(e, r);
      break;
    case "select":
      (t = r.value), t != null && xr(e, !!r.multiple, t, !1);
  }
};
nc = ii;
sc = tr;
var Em = { usingClientEntryPoint: !1, Events: [En, ur, Fs, tc, rc, ii] },
  Hr = {
    findFiberByHostInstance: Bt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  _m = {
    bundleType: Hr.bundleType,
    version: Hr.version,
    rendererPackageName: Hr.rendererPackageName,
    rendererConfig: Hr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ht.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ic(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Hr.findFiberByHostInstance || Cm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Yn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Yn.isDisabled && Yn.supportsFiber)
    try {
      (Ps = Yn.inject(_m)), (et = Yn);
    } catch {}
}
Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Em;
Ie.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!pi(t)) throw Error(E(200));
  return km(e, t, null, r);
};
Ie.createRoot = function (e, t) {
  if (!pi(e)) throw Error(E(299));
  var r = !1,
    s = "",
    l = Au;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = di(e, 1, !1, null, null, r, !1, s, l)),
    (e[ut] = t.current),
    pn(e.nodeType === 8 ? e.parentNode : e),
    new mi(t)
  );
};
Ie.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(E(188))
      : ((e = Object.keys(e).join(",")), Error(E(268, e)));
  return (e = ic(t)), (e = e === null ? null : e.stateNode), e;
};
Ie.flushSync = function (e) {
  return tr(e);
};
Ie.hydrate = function (e, t, r) {
  if (!Ws(t)) throw Error(E(200));
  return Gs(null, e, t, !0, r);
};
Ie.hydrateRoot = function (e, t, r) {
  if (!pi(e)) throw Error(E(405));
  var s = (r != null && r.hydratedSources) || null,
    l = !1,
    a = "",
    i = Au;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (l = !0),
      r.identifierPrefix !== void 0 && (a = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (i = r.onRecoverableError)),
    (t = Fu(t, null, e, 1, r ?? null, l, !1, a, i)),
    (e[ut] = t.current),
    pn(e),
    s)
  )
    for (e = 0; e < s.length; e++)
      (r = s[e]),
        (l = r._getVersion),
        (l = l(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, l])
          : t.mutableSourceEagerHydrationData.push(r, l);
  return new Qs(t);
};
Ie.render = function (e, t, r) {
  if (!Ws(t)) throw Error(E(200));
  return Gs(null, e, t, !1, r);
};
Ie.unmountComponentAtNode = function (e) {
  if (!Ws(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (tr(function () {
        Gs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ut] = null);
        });
      }),
      !0)
    : !1;
};
Ie.unstable_batchedUpdates = ii;
Ie.unstable_renderSubtreeIntoContainer = function (e, t, r, s) {
  if (!Ws(r)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return Gs(e, t, r, !1, s);
};
Ie.version = "18.3.1-next-f1338f8080-20240426";
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
$u(), ($o.exports = Ie);
var zm = $o.exports,
  Uu,
  ko = zm;
(Uu = ko.createRoot), ko.hydrateRoot;
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
 */ const Im = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  V = (e, t) => {
    const r = b.forwardRef(
      (
        {
          color: s = "currentColor",
          size: l = 24,
          strokeWidth: a = 2,
          absoluteStrokeWidth: i,
          className: o = "",
          children: u,
          ...c
        },
        h
      ) =>
        b.createElement(
          "svg",
          {
            ref: h,
            ...Tm,
            width: l,
            height: l,
            stroke: s,
            strokeWidth: i ? (Number(a) * 24) / Number(l) : a,
            className: ["lucide", `lucide-${Im(e)}`, o].join(" "),
            ...c,
          },
          [
            ...t.map(([m, f]) => b.createElement(m, f)),
            ...(Array.isArray(u) ? u : [u]),
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
 */ const Ve = V("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wa = V("AlertTriangle", [
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
 */ const Vu = V("Archive", [
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
 */ const Bu = V("BellOff", [
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
 */ const Hu = V("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qu = V("Building2", [
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
 */ const Qu = V("Building", [
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
 */ const Ys = V("Calendar", [
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
 */ const Kn = V("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bn = V("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zn = V("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yt = V("FileText", [
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
 */ const Mm = V("Globe", [
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
 */ const mt = V("History", [
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
 */ const Sl = V("Layers", [
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
 */ const Pm = V("LayoutList", [
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
 */ const Rm = V("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wu = V("Maximize2", [
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
 */ const Om = V("Maximize", [
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
 */ const sn = V("Megaphone", [
  ["path", { d: "m3 11 18-5v12L3 14v-3z", key: "n962bs" }],
  ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lm = V("Move", [
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
 */ const ke = V("Package", [
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
 */ const pt = V("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const br = V("RefreshCw", [
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
 */ const Sn = V("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tr = V("Settings", [
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
 */ const Fm = V("SplitSquareHorizontal", [
  ["path", { d: "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3", key: "lubmu8" }],
  ["path", { d: "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3", key: "1ag34g" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ir = V("SquarePen", [
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
 */ const ot = V("Trash2", [
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
 */ const Kt = V("Truck", [
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
 */ const Ks = V("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Am = V("Volume2", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
  ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07", key: "ltjumu" }],
  ["path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14", key: "1kegas" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ue = V("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  $m = {
    zh: {
      "app.title": "戰情白板",
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
  Gu = b.createContext(void 0),
  Um = ({ children: e }) => {
    const [t, r] = b.useState("zh"),
      s = () => {
        r((a) => (a === "zh" ? "en" : "zh"));
      },
      l = (a, i) => {
        let o = $m[t][a] || a;
        return (
          i &&
            Object.entries(i).forEach(([u, c]) => {
              o = o.replace(`{${u}}`, c.toString());
            }),
          o
        );
      };
    return n.jsx(Gu.Provider, {
      value: { language: t, toggleLanguage: s, t: l },
      children: e,
    });
  },
  Or = () => {
    const e = b.useContext(Gu);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  };
let Qt = null;
const Yu = async () => {
    if (Qt) return Qt;
    try {
      const e = await fetch("../config.txt");
      if (!e.ok) throw new Error("Failed to load configuration");
      return (Qt = await e.json()), Qt;
    } catch (e) {
      throw (console.error("Error loading config:", e), e);
    }
  },
  Vm = (e) => {
    if (!Qt) throw new Error("Configuration not loaded");
    return `${Qt.domain}${e}`;
  },
  kl = () => Qt,
  ee = async (e, t = {}) => {
    let r;
    try {
      r = Vm(e);
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
  Bm = async (e) =>
    await ee("/api/session/login", { method: "POST", body: { Data: e } }),
  Hm = (e) => (
    sessionStorage.setItem("user_session", JSON.stringify(e)),
    sessionStorage.setItem("loggedGUID", e.GUID || ""),
    sessionStorage.setItem("loggedEmployer", e.Employer || ""),
    sessionStorage.setItem("loggedID", e.ID || ""),
    sessionStorage.setItem("loggedName", e.Name || ""),
    sessionStorage.setItem("loggedTime", e.loginTime || ""),
    sessionStorage.setItem("loggedLevel", e.level || ""),
    e
  ),
  qm = () => {
    sessionStorage.removeItem("user_session"),
      sessionStorage.removeItem("loggedGUID"),
      sessionStorage.removeItem("loggedEmployer"),
      sessionStorage.removeItem("loggedID"),
      sessionStorage.removeItem("loggedName"),
      sessionStorage.removeItem("loggedPassword"),
      sessionStorage.removeItem("loggedTime"),
      sessionStorage.removeItem("loggedLevel"),
      window.location.reload();
  },
  Tn = () => {
    const e = sessionStorage.getItem("user_session");
    if (!e) return null;
    try {
      const t = JSON.parse(e);
      if (!t.GUID || !t.ID || !t.Name) return null;
      if (t.loginTime)
        try {
          const r = new Date(t.loginTime).getTime();
          if ((new Date().getTime() - r) / (1e3 * 60 * 60) > 24) return null;
        } catch {
          console.warn("Invalid login time format:", t.loginTime);
        }
      return t;
    } catch (t) {
      return console.error("Failed to parse user session:", t), null;
    }
  },
  Qm = () => !!Tn(),
  Cl = () => {
    const { t: e } = Or();
    return n.jsxs("button", {
      onClick: qm,
      className:
        "inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      children: [n.jsx(Rm, { className: "h-4 w-4 mr-2" }), e("logout")],
    });
  },
  Dl = () => {
    const { language: e, toggleLanguage: t } = Or();
    return n.jsxs("button", {
      onClick: t,
      className:
        "inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      children: [
        n.jsx(Mm, { className: "h-4 w-4 mr-2" }),
        e === "zh" ? "繁體中文" : "English",
      ],
    });
  },
  Wm = async () =>
    await ee("/api/controlpanel/get_by_startendtime_bbs", {
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
  Ym = async (e) => {
    await ee("/api/controlpanel/add", { method: "POST", body: { Data: e } });
  },
  Km = async () =>
    await ee("/api/controlpanel/get_bbs", { method: "POST", body: {} }),
  Xm = async (e) => {
    await ee("/api/controlpanel/update", { method: "POST", body: { Data: e } });
  },
  Jm = async (e) => {
    await ee("/api/controlpanel/delete", {
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
  Xs = async () =>
    await ee("/api/med_page/get_med_cloud", { method: "POST", body: {} }),
  Rt = (e) => {
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
    return await ee("/api/drugStotreDistribution/get_by_addedTime", {
      method: "POST",
      body: { ValueAry: [Rt(t), Rt(r)] },
    });
  },
  r0 = async () => {
    const e = new Date(),
      t = new Date(e.getFullYear(), e.getMonth() - 1, e.getDate(), 0, 0, 0),
      r = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59);
    return await ee("/api/inspection/content_get_by_addTime", {
      method: "POST",
      body: { ValueAry: [Rt(t), Rt(r)] },
    });
  },
  n0 = async () => {
    const e = new Date(),
      t = new Date(e.getFullYear(), e.getMonth() - 1, e.getDate(), 0, 0, 0),
      r = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59);
    return await ee("/api/inspection/content_get_by_addTime", {
      method: "POST",
      body: { ValueAry: [Rt(t), Rt(r)] },
    });
  },
  s0 = async () =>
    await ee("/api/controlpanel/get_by_startendtime_MedNotice", {
      method: "POST",
      body: {},
    }),
  l0 = async () =>
    await ee("/api/controlpanel/get_MedNotice", { method: "POST", body: {} }),
  a0 = async (e) =>
    await ee("/api/controlpanel/add", { method: "POST", body: { Data: e } }),
  i0 = async (e) =>
    await ee("/api/controlpanel/update", { method: "POST", body: { Data: e } }),
  o0 = async (e) =>
    await ee("/api/controlpanel/delete", {
      method: "POST",
      body: { Data: { GUID: e } },
    }),
  c0 = async () =>
    await ee("/api/controlpanel/get_by_startendtime_out_of_stock", {
      method: "POST",
      body: {},
    }),
  u0 = async () =>
    await ee("/api/controlpanel/get_out_of_stock", {
      method: "POST",
      body: {},
    }),
  d0 = async (e) =>
    await ee("/api/controlpanel/add", { method: "POST", body: { Data: e } }),
  f0 = async (e) =>
    await ee("/api/controlpanel/update", { method: "POST", body: { Data: e } }),
  m0 = async (e) =>
    await ee("/api/controlpanel/delete", {
      method: "POST",
      body: { Data: { GUID: e } },
    }),
  p0 = (e) =>
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
  h0 = (e) =>
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
              const u = new Date(o.OP_TIME.replace(/\//g, "-"));
              return u >= r && u <= s;
            } catch {
              return !1;
            }
          })
          .reduce((o, u) => {
            const c = parseFloat(u.END_QTY) || 0;
            return +o + +c;
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
    await ee("/api/stock/get_stock_all_server", { method: "POST", body: {} }),
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
          u = [],
          c = new Map();
        s.forEach((f) => {
          const x = f.serverName || "未知伺服器",
            v = f.qty || [],
            y = f.lot || [],
            I = f.expiry_date || [];
          i.push(...y), o.push(...I), u.push(...v);
          const g = v.reduce((d, j) => d + (Number(j) || 0), 0),
            p = c.get(x) || 0;
          c.set(x, p + g);
        });
        const h = u.reduce((f, x) => f + (Number(x) || 0), 0),
          m = Array.from(c.entries()).map(([f, x]) => ({
            serverName: f,
            qty: x,
          }));
        r.push({
          id: a.GUID || "",
          code: l,
          name: a.name || "",
          qty: u,
          lot: i,
          expiry_date: o,
          totalQuantity: h,
          batchCount: i.length,
          serverData: m,
        });
      }),
      r
    );
  },
  w0 = async () => {
    const e = new Date(),
      t = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0),
      r = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59);
    return await ee("/api/materialRequisition/get_by_requestTime", {
      method: "POST",
      body: { ValueAry: [Rt(t), Rt(r)] },
    });
  },
  j0 = (e) =>
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
      var o, u;
      const s = (t.content || "").split(";"),
        l = ((o = s[0]) == null ? void 0 : o.trim()) || "未知原藥品",
        a = ((u = s[1]) == null ? void 0 : u.trim()) || "未知替換藥品";
      let i;
      try {
        const c = t.created_time.replace(/\//g, "-");
        i = new Date(c).toISOString();
      } catch (c) {
        console.error("Error parsing created_time:", t.created_time, c),
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
        const h = t.created_time.replace(/\//g, "-");
        (s = new Date(h)),
          isNaN(s.getTime()) &&
            (console.warn("Invalid date format:", t.created_time),
            (s = new Date()));
      } catch (h) {
        console.error("Error parsing created_time:", t.created_time, h),
          (s = new Date());
      }
      const l = new Date(),
        a = new Date(s.getFullYear(), s.getMonth(), s.getDate()),
        i = new Date(l.getFullYear(), l.getMonth(), l.getDate()),
        o = i.getTime() - a.getTime(),
        u = Math.floor(o / (1e3 * 60 * 60 * 24));
      console.log("Out of stock calculation:", {
        originalTime: t.created_time,
        parsedDate: s,
        createdDateOnly: a,
        nowDateOnly: i,
        diffDays: u,
      });
      let c = "procurement_in_progress";
      return (
        t.priority === "Critical"
          ? (c = "urgent_order")
          : t.priority === "Important"
          ? (c = "procurement_in_progress")
          : (c = "supplier_contacted"),
        {
          id: t.GUID || `out-of-stock-${r}`,
          drugName: t.content || "未知藥品",
          departmentAffected: [],
          status: c,
          lastStockDate: s.toISOString(),
          estimatedRestockDate: void 0,
        }
      );
    }),
  S0 = async () => {
    await new Promise((c) => setTimeout(c, 500));
    let e = [];
    try {
      const c = await Wm();
      c.Code === 200 && c.Data
        ? (e = Gm(c.Data))
        : console.warn("Failed to fetch bulletin data, using mock data");
    } catch (c) {
      console.error("Error fetching bulletin data:", c);
    }
    let t = [];
    try {
      const c = await s0();
      console.log("Drug replacement API response:", c),
        c.Code === 200 && c.Data
          ? ((t = N0(c.Data)),
            console.log("Transformed drug replacement items:", t))
          : (console.warn(
              "Failed to fetch drug replacement data, using mock data. Response:",
              c
            ),
            (t = Do()));
    } catch (c) {
      console.error(
        "Error fetching drug replacement data, using mock data:",
        c
      ),
        (t = Do());
    }
    let r = [];
    try {
      const c = await c0();
      console.log("Out of stock API response:", c),
        c.Code === 200 && c.Data
          ? ((r = b0(c.Data)),
            console.log("Transformed out of stock items:", r))
          : (console.warn(
              "Failed to fetch out of stock data, using mock data. Response:",
              c
            ),
            (r = Co()));
    } catch (c) {
      console.error("Error fetching out of stock data, using mock data:", c),
        (r = Co());
    }
    let s = [];
    try {
      const c = await t0();
      console.log("Restock tasks API response:", c),
        c.Code === 200 && c.Data
          ? ((s = p0(c.Data)), console.log("Transformed restock tasks:", s))
          : console.warn("Failed to fetch restock tasks data. Response:", c);
    } catch (c) {
      console.error("Error fetching restock tasks data:", c);
    }
    let l = [],
      a = [];
    try {
      const c = await n0();
      console.log("Receiving and PutAway API response:", c),
        c.Code === 200 && c.Data
          ? ((l = h0(c.Data)),
            (a = g0(c.Data)),
            console.log("Transformed receiving tasks:", l),
            console.log("Transformed putaway tasks:", a))
          : console.warn(
              "Failed to fetch receiving and putaway tasks data. Response:",
              c
            );
    } catch (c) {
      console.error("Error fetching receiving and putaway tasks data:", c);
    }
    let i = [];
    try {
      const c = await w0();
      console.log("Internal requests API response:", c),
        c.Code === 200 && c.Data
          ? ((i = j0(c.Data)), console.log("Transformed internal requests:", i))
          : console.warn(
              "Failed to fetch internal requests data. Response:",
              c
            );
    } catch (c) {
      console.error("Error fetching internal requests data:", c);
    }
    let o = [];
    try {
      const c = await r0();
      console.log("Incoming drugs API response:", c),
        c.Code === 200 && c.Data
          ? ((o = x0(c.Data)), console.log("Transformed incoming drugs:", o))
          : console.warn("Failed to fetch incoming drugs data. Response:", c);
    } catch (c) {
      console.error("Error fetching incoming drugs data:", c);
    }
    let u = [];
    try {
      const c = await y0();
      console.log("Stock all server API response:", c),
        c.Code === 200 && c.Data
          ? ((u = v0(c.Data)),
            console.log("Transformed inventory highlights:", u))
          : console.warn("Failed to fetch stock all server data. Response:", c);
    } catch (c) {
      console.error("Error fetching stock all server data:", c);
    }
    return {
      bulletins: e,
      restockTasks: s,
      receivingTasks: l,
      putAwayTasks: a,
      incomingDrugs: o,
      outOfStockItems: r,
      drugReplacements: t,
      inventoryHighlights: u,
      internalRequests: i,
      lastUpdated: new Date().toISOString(),
    };
  },
  Co = () => [
    {
      id: "o1",
      drugName: "Losartan 50mg",
      departmentAffected: [],
      status: "procurement_in_progress",
      lastStockDate: "2025-01-25T00:00:00",
      estimatedRestockDate: void 0,
    },
    {
      id: "o2",
      drugName: "Morphine 10mg/ml",
      departmentAffected: [],
      status: "urgent_order",
      lastStockDate: "2025-01-26T00:00:00",
      estimatedRestockDate: void 0,
    },
    {
      id: "o3",
      drugName: "Digoxin 0.25mg",
      departmentAffected: [],
      status: "alternative_available",
      lastStockDate: "2025-01-24T00:00:00",
      estimatedRestockDate: void 0,
    },
  ],
  Do = () => [
    {
      id: "d1",
      originalDrug: "Brand A Metformin 500mg",
      replacementDrug: "Brand B Metformin 500mg",
      reason: "原廠停產",
      effectiveDate: "2025-02-01T00:00:00",
      affectedDepartments: [],
      instructions: "",
      priority: "medium",
    },
    {
      id: "d2",
      originalDrug: "Clopidogrel 75mg (原廠)",
      replacementDrug: "Clopidogrel 75mg (學名藥)",
      reason: "成本考量",
      effectiveDate: "2025-01-30T00:00:00",
      affectedDepartments: [],
      instructions: "",
      priority: "low",
    },
  ],
  yt = {
    title: "text-[32px] fhd:text-[32px] qhd:text-[48px] uhd:text-[64px]",
    subTitle: "text-[20px] fhd:text-[20px] qhd:text-[32px] uhd:text-[48px]",
    content: "text-[16px] fhd:text-[16px] qhd:text-[24px] uhd:text-[32px]",
    smallLabel: "text-[14px] fhd:text-[14px] qhd:text-[20px] uhd:text-[24px]",
  },
  Eo = {
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
  D0 = () => {
    try {
      const e = localStorage.getItem("section_grid_position");
      if (e) {
        const t = JSON.parse(e);
        if (T0(t)) return t;
      }
    } catch (e) {
      console.error("Error loading grid config:", e);
    }
    return k0();
  },
  E0 = () => {
    try {
      const e = localStorage.getItem("section_visibility");
      if (e) {
        const t = JSON.parse(e);
        if (I0(t)) return t;
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
  z0 = (e) => {
    try {
      localStorage.setItem("section_visibility", JSON.stringify(e));
    } catch (t) {
      console.error("Error saving section visibility:", t);
    }
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
  I0 = (e) => {
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
  At = (e, t) => {
    const r = e.master_row + 1,
      s = e.master_col + 1,
      l = r + t.row,
      a = s + t.col;
    return `${r} / ${s} / ${l} / ${a}`;
  },
  $t = ({
    children: e,
    sectionKey: t,
    gridData: r,
    onPositionChange: s,
    onSizeChange: l,
    gridArea: a,
  }) => {
    const [i, o] = b.useState(!1),
      [u, c] = b.useState(!1),
      [h, m] = b.useState(null),
      [f, x] = b.useState(null),
      v = b.useRef(null),
      y = b.useCallback(
        (d) => {
          d.preventDefault(),
            d.stopPropagation(),
            o(!0),
            m({
              x: d.clientX,
              y: d.clientY,
              startRow: r.position.master_row,
              startCol: r.position.master_col,
            });
        },
        [r.position]
      ),
      I = b.useCallback(
        (d) => {
          d.preventDefault(),
            d.stopPropagation(),
            c(!0),
            x({ x: d.clientX, y: d.clientY, startRow: r.row, startCol: r.col });
        },
        [r.row, r.col]
      ),
      g = b.useCallback(
        (d) => {
          if (i && h && v.current) {
            const j = d.clientX - h.x,
              D = d.clientY - h.y,
              _ = v.current.parentElement;
            if (_) {
              const z = _.getBoundingClientRect(),
                C = (z.width - 7 * 16) / 8,
                w = (z.height - 5 * 16) / 6,
                N = Math.round(j / (C + 16)),
                T = Math.round(D / (w + 16)),
                R = Math.max(0, Math.min(8 - r.col, h.startCol + N)),
                A = Math.max(0, Math.min(6 - r.row, h.startRow + T));
              (A !== r.position.master_row || R !== r.position.master_col) &&
                s(t, { master_row: A, master_col: R });
            }
          }
          if (u && f && v.current) {
            const j = d.clientX - f.x,
              D = d.clientY - f.y,
              _ = v.current.parentElement;
            if (_) {
              const z = _.getBoundingClientRect(),
                C = (z.width - 7 * 16) / 8,
                w = (z.height - 5 * 16) / 6,
                N = Math.round(j / (C + 16)),
                T = Math.round(D / (w + 16)),
                R = Math.max(
                  1,
                  Math.min(8 - r.position.master_col, f.startCol + N)
                ),
                A = Math.max(
                  1,
                  Math.min(6 - r.position.master_row, f.startRow + T)
                );
              (A !== r.row || R !== r.col) && l(t, { row: A, col: R });
            }
          }
        },
        [i, u, h, f, r, s, l, t]
      ),
      p = b.useCallback(() => {
        o(!1), c(!1), m(null), x(null);
      }, []);
    return (
      Ee.useEffect(() => {
        if (i || u)
          return (
            document.addEventListener("mousemove", g),
            document.addEventListener("mouseup", p),
            (document.body.style.cursor = i ? "grabbing" : "nw-resize"),
            (document.body.style.userSelect = "none"),
            (document.body.style.pointerEvents = "none"),
            v.current && (v.current.style.pointerEvents = "auto"),
            () => {
              document.removeEventListener("mousemove", g),
                document.removeEventListener("mouseup", p),
                (document.body.style.cursor = "auto"),
                (document.body.style.userSelect = "auto"),
                (document.body.style.pointerEvents = "auto");
            }
          );
      }, [i, u, g, p]),
      n.jsxs("div", {
        ref: v,
        className: `relative bg-white rounded-xl shadow-lg border border-gray-200 h-full flex flex-col min-h-0 max-h-full overflow-hidden transition-all duration-200 ${
          i || u ? "z-50 shadow-2xl scale-105" : "z-10"
        }`,
        style: { gridArea: a },
        children: [
          n.jsxs("div", {
            className: `absolute top-0 left-0 right-0 h-12 cursor-move z-20 flex items-center justify-center transition-opacity bg-blue-500 bg-opacity-20 rounded-t-xl ${
              i ? "opacity-100" : "opacity-0 hover:opacity-100"
            }`,
            onMouseDown: y,
            children: [
              n.jsx(Lm, { size: 20, className: "text-blue-600" }),
              n.jsx("span", {
                className: `ml-2 text-blue-600 font-medium ${yt.smallLabel}`,
                children: "拖拽移動",
              }),
            ],
          }),
          n.jsx("div", {
            className: `absolute bottom-2 right-2 w-6 h-6 cursor-nw-resize z-20 flex items-center justify-center transition-opacity bg-gray-500 bg-opacity-20 rounded ${
              u ? "opacity-100" : "opacity-0 hover:opacity-100"
            }`,
            onMouseDown: I,
            children: n.jsx(Wu, { size: 16, className: "text-gray-600" }),
          }),
          n.jsx("div", { className: "flex-1 min-h-0 relative", children: e }),
          (i || u) &&
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
  Y = ({ size: e = "medium", className: t = "" }) => {
    const r = {
      small: "w-4 h-4 border-[2px]",
      medium: "w-8 h-8 border-[3px]",
      large: "w-12 h-12 border-[4px]",
    };
    return n.jsx("div", {
      className: `${r[e]} ${t} rounded-full border-blue-300 border-t-blue-600 animate-spin`,
    });
  },
  M0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
    Or();
    const [s, l] = b.useState({
        title: "",
        content: "",
        priority: "Normal",
        start_time: "",
        end_time: "",
      }),
      [a, i] = b.useState(!1),
      [o, u] = b.useState(null);
    Ee.useEffect(() => {
      if (e) {
        const x = new Date(),
          v = x.toISOString().slice(0, 16),
          y = new Date(x);
        y.setMonth(y.getMonth() + 1);
        const I = y.toISOString().slice(0, 16);
        l({
          title: "",
          content: "",
          priority: "Normal",
          start_time: v,
          end_time: I,
        }),
          u(null);
      }
    }, [e]);
    const c = (x, v) => {
        l((y) => ({ ...y, [x]: v }));
      },
      h = () => {
        if (!s.title.trim()) return "請輸入主旨";
        if (!s.content.trim()) return "請輸入內容";
        if (!s.start_time) return "請選擇開始時間";
        if (!s.end_time) return "請選擇結束時間";
        const x = new Date(s.start_time);
        return new Date(s.end_time) <= x ? "結束時間必須晚於開始時間" : null;
      },
      m = async () => {
        u(null);
        const x = h();
        if (x) {
          u(x);
          return;
        }
        const v = Tn();
        if (!v) {
          u("無法獲取使用者資訊，請重新登入");
          return;
        }
        i(!0);
        try {
          const y = (g) => g.replace("T", " ") + ":00",
            I = {
              title: s.title.trim(),
              content: s.content.trim(),
              priority: s.priority,
              creator_dept: v.Employer || "",
              creator_name: v.Name || "",
              start_time: y(s.start_time),
              end_time: y(s.end_time),
            };
          await Ym(I), r(), t();
        } catch (y) {
          u(y instanceof Error ? y.message : "新增公告失敗，請稍後再試");
        } finally {
          i(!1);
        }
      },
      f = () => {
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
                      n.jsx(pt, { size: 24, className: "text-blue-600 mr-3" }),
                      n.jsx("h2", {
                        className: "text-xl font-semibold text-gray-800",
                        children: "新增公告",
                      }),
                    ],
                  }),
                  n.jsx("button", {
                    onClick: f,
                    disabled: a,
                    className:
                      "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                    children: n.jsx(Ue, { size: 20 }),
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
                        n.jsx(Ve, {
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
                        onChange: (x) => c("title", x.target.value),
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
                        onChange: (x) => c("content", x.target.value),
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
                        onChange: (x) => c("priority", x.target.value),
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
                            onChange: (x) => c("start_time", x.target.value),
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
                            onChange: (x) => c("end_time", x.target.value),
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
                    onClick: f,
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
                            n.jsx(Y, { size: "small", className: "mr-2" }),
                            "新增中...",
                          ],
                        })
                      : n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(pt, { size: 16, className: "mr-2" }),
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
  P0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
    Or();
    const [s, l] = b.useState([]),
      [a, i] = b.useState(!1),
      [o, u] = b.useState(null),
      [c, h] = b.useState(null),
      [m, f] = b.useState(!1),
      [x, v] = b.useState(!1),
      [y, I] = b.useState(!1);
    b.useEffect(() => {
      e && g();
    }, [e]);
    const g = async () => {
        i(!0), u(null);
        try {
          const w = await Km();
          if (w.Code === 200) l(w.Data || []);
          else throw new Error(w.Result || "載入歷史公告失敗");
        } catch (w) {
          u(w instanceof Error ? w.message : "載入歷史公告時發生錯誤");
        } finally {
          i(!1);
        }
      },
      p = (w) => {
        const N = (T) => {
          if (!T) return "";
          try {
            const R = T.replace(/\//g, "-");
            return new Date(R).toISOString().slice(0, 16);
          } catch (R) {
            return console.error("Error formatting date for input:", T, R), "";
          }
        };
        h({
          GUID: w.GUID,
          title: w.title || "",
          content: w.content || "",
          priority: w.priority || "Normal",
          creator_dept: w.creator_dept || "",
          creator_name: w.creator_name || "",
          start_time: N(w.start_time),
          end_time: N(w.end_time),
          created_time: w.created_time || "",
        });
      },
      d = async () => {
        if (c) {
          f(!0), u(null);
          try {
            const w = (T) =>
                T ? T.replace("T", " ").replace(/-/g, "/") + ":00" : "",
              N = {
                GUID: c.GUID,
                title: c.title.trim(),
                content: c.content.trim(),
                priority: c.priority,
                creator_dept: c.creator_dept,
                creator_name: c.creator_name,
                start_time: w(c.start_time),
                end_time: w(c.end_time),
              };
            await Xm(N), await g(), h(null), r && r();
          } catch (w) {
            u(w instanceof Error ? w.message : "更新公告失敗，請稍後再試");
          } finally {
            f(!1);
          }
        }
      },
      j = async () => {
        if (c) {
          I(!0), u(null), v(!1);
          try {
            await Jm(c.GUID), await g(), h(null), r && r();
          } catch (w) {
            u(w instanceof Error ? w.message : "刪除公告失敗，請稍後再試");
          } finally {
            I(!1);
          }
        }
      },
      D = (w) => {
        if (!w) return "-";
        try {
          const N = w.replace(/\//g, "-");
          return new Date(N).toLocaleString("zh-TW", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: !1,
          });
        } catch {
          return w;
        }
      },
      _ = (w) => {
        switch (w) {
          case "Critical":
            return "緊急";
          case "Important":
            return "重要";
          case "Normal":
            return "一般";
          default:
            return w || "一般";
        }
      },
      z = (w) => {
        switch (w) {
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
      C = () => {
        !a && !m && !y && (h(null), v(!1), t());
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
                        n.jsx(mt, {
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
                      onClick: C,
                      disabled: a || m,
                      className:
                        "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                      children: n.jsx(Ue, { size: 20 }),
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
                          n.jsx(Ve, {
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
                            n.jsx(Y, { size: "large" }),
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
                            n.jsx(mt, {
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
                                  children: s.map((w) =>
                                    n.jsxs(
                                      "tr",
                                      {
                                        className:
                                          "hover:bg-blue-50 cursor-pointer transition-colors",
                                        onClick: () => p(w),
                                        title: "點擊編輯此公告",
                                        children: [
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: D(w.created_time),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 text-sm text-gray-900 max-w-xs",
                                            children: n.jsx("div", {
                                              className: "truncate",
                                              title: w.title,
                                              children: w.title || "-",
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 text-sm text-gray-900 max-w-md",
                                            children: n.jsx("div", {
                                              className: "truncate",
                                              title: w.content,
                                              children: w.content || "-",
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap",
                                            children: n.jsx("span", {
                                              className: `px-2 py-1 rounded-full text-xs font-medium ${z(
                                                w.priority
                                              )}`,
                                              children: _(w.priority),
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children:
                                              `${w.creator_dept || ""} ${
                                                w.creator_name || ""
                                              }`.trim() || "-",
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: D(w.start_time),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: D(w.end_time),
                                          }),
                                        ],
                                      },
                                      w.GUID
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
            c &&
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
                            n.jsx(Ir, {
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
                              onClick: () => v(!0),
                              disabled: m || y,
                              className:
                                "flex items-center px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                              title: "刪除公告",
                              children: [
                                n.jsx(ot, { size: 16, className: "mr-2" }),
                                "刪除",
                              ],
                            }),
                            n.jsx("button", {
                              onClick: () => h(null),
                              disabled: m || y,
                              className:
                                "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                              children: n.jsx(Ue, { size: 20 }),
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
                              value: c.title,
                              onChange: (w) =>
                                h({ ...c, title: w.target.value }),
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
                              value: c.content,
                              onChange: (w) =>
                                h({ ...c, content: w.target.value }),
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
                              value: c.priority,
                              onChange: (w) =>
                                h({ ...c, priority: w.target.value }),
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
                                  value: c.start_time,
                                  onChange: (w) =>
                                    h({ ...c, start_time: w.target.value }),
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
                                  value: c.end_time,
                                  onChange: (w) =>
                                    h({ ...c, end_time: w.target.value }),
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
                          onClick: () => h(null),
                          disabled: m || y,
                          className:
                            "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        n.jsx("button", {
                          onClick: d,
                          disabled:
                            m || y || !c.title.trim() || !c.content.trim(),
                          className:
                            "flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                          children:
                            m || y
                              ? n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Y, {
                                      size: "small",
                                      className: "mr-2",
                                    }),
                                    m ? "更新中..." : "處理中...",
                                  ],
                                })
                              : n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Ir, { size: 16, className: "mr-2" }),
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
              c &&
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
                          n.jsx(ot, {
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
                        children: ["您確定要刪除公告「", c.title, "」嗎？"],
                      }),
                      n.jsx("p", {
                        className: "text-sm text-red-600 mb-6",
                        children: "此操作無法復原，請謹慎操作。",
                      }),
                      n.jsxs("div", {
                        className: "flex items-center justify-end space-x-4",
                        children: [
                          n.jsx("button", {
                            onClick: () => v(!1),
                            disabled: y,
                            className:
                              "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                            children: "取消",
                          }),
                          n.jsx("button", {
                            onClick: j,
                            disabled: y,
                            className:
                              "flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                            children: y
                              ? n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Y, {
                                      size: "small",
                                      className: "mr-2",
                                    }),
                                    "刪除中...",
                                  ],
                                })
                              : n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(ot, { size: 16, className: "mr-2" }),
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
  R0 = ({
    bulletins: e,
    onBulletinAdded: t,
    showInFocus: r = !0,
    onFocusToggle: s,
  }) => {
    const [l, a] = Ee.useState(!1),
      [i, o] = Ee.useState(!1),
      u = (x) => {
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
      c = (x) => {
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
      h = (x) =>
        new Date(x).toLocaleString("zh-TW", {
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }),
      m = () => {
        t && t();
      },
      f = () => {
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
                      n.jsx(sn, { size: 20, className: "text-blue-600 mr-2" }),
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
                          n.jsx(mt, { size: 16, className: "mr-2" }),
                          "查看歷史",
                        ],
                      }),
                      n.jsxs("button", {
                        onClick: () => a(!0),
                        className:
                          "flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors text-sm",
                        children: [
                          n.jsx(pt, { size: 16, className: "mr-2" }),
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
                        n.jsx(sn, {
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
                          className: `p-3 rounded-lg ${u(x.priority)}`,
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
                                  className: `px-2 py-1 rounded-full text-xs font-medium ${c(
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
                                    n.jsx(Ks, { size: 12, className: "mr-1" }),
                                    n.jsx("span", { children: x.author }),
                                  ],
                                }),
                                n.jsxs("div", {
                                  className: "flex items-center",
                                  children: [
                                    n.jsx(zn, { size: 12, className: "mr-1" }),
                                    n.jsx("span", {
                                      children: h(x.publishDate),
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
        n.jsx(M0, { isOpen: l, onClose: () => a(!1), onSuccess: m }),
        n.jsx(P0, { isOpen: i, onClose: () => o(!1), onSuccess: f }),
      ],
    });
  },
  O0 = ({ bulletins: e }) => {
    const [t, r] = b.useState(0);
    b.useEffect(() => {
      if (e.length <= 1) return;
      const u = setInterval(() => {
        r((c) => (c + 1) % e.length);
      }, 8e3);
      return () => clearInterval(u);
    }, [e.length]);
    const s = (u) => {
        switch (u) {
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
      l = (u) => {
        switch (u) {
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
      a = (u) => {
        switch (u) {
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
      i = (u) => {
        try {
          const c = u.replace(/\//g, "-"),
            h = new Date(c);
          return isNaN(h.getTime())
            ? u
            : h.toLocaleString("zh-TW", {
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              });
        } catch {
          return u;
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
                n.jsx(sn, { size: 20, className: "text-blue-600 mr-2" }),
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
                n.jsx(sn, {
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
                  n.jsx(sn, { size: 20, className: "text-blue-600 mr-2" }),
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
                      n.jsx(Ks, { size: 16, className: "mr-2" }),
                      n.jsx("span", { children: o.author }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      n.jsx(zn, { size: 16, className: "mr-2" }),
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
  Ku = ({
    bulletins: e,
    isFullscreen: t = !1,
    onBulletinAdded: r,
    showInFocus: s,
    onFocusToggle: l,
  }) =>
    t
      ? n.jsx(O0, { bulletins: e })
      : n.jsx(R0, {
          bulletins: e,
          onBulletinAdded: r,
          showInFocus: s,
          onFocusToggle: l,
        }),
  hi = ({ isOpen: e, onClose: t, sectionKey: r, sectionTitle: s }) => {
    const [l, a] = b.useState(5);
    b.useEffect(() => {
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
                      n.jsx(Tr, { size: 24, className: "text-blue-600 mr-3" }),
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
                    children: n.jsx(Ue, { size: 24 }),
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
                            children: n.jsx(Tr, {
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
    const [a, i] = b.useState("restock"),
      [o, u] = b.useState(!1),
      c = (v) => {
        switch (v) {
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
      h = ({ task: v, taskType: y }) =>
        y === "restock" && "code" in v
          ? n.jsx("div", {
              className: `p-3 border rounded-lg transition-all duration-200 ${c(
                v.state
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
                            children: v.code,
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
                            children: v.name,
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
                            children: v.issuedQuantity,
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
                            children: v.destinationStoreType,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            })
          : (y === "receiving" || y === "putaway") && "code" in v
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
                            children: v.code,
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
                            children: v.quantity,
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
                            children: v.name,
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
                            children: v.supplier,
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
        { key: "restock", label: "撥補", icon: ke, tasks: e },
        { key: "receiving", label: "驗收", icon: Kt, tasks: t },
        { key: "putaway", label: "歸貨", icon: Vu, tasks: r },
      ],
      f = ((x = m.find((v) => v.key === a)) == null ? void 0 : x.tasks) || [];
    return (
      f.filter((v) =>
        "state" in v ? v.state === "等待過帳" : v.quantity && v.quantity > 0
      ).length,
      f.filter((v) => ("state" in v ? v.state === "已簽收" : !1)).length,
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
                            children: ["總計: ", f.length],
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
                                  onChange: (v) => l(v.target.checked),
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
                    onClick: () => u(!0),
                    className:
                      "p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors",
                    title: "專注模式設定",
                    children: n.jsx(Tr, { size: 18 }),
                  }),
                ],
              }),
              n.jsx("div", {
                className: "flex space-x-1 bg-gray-100 rounded-lg p-1",
                children: m.map((v) => {
                  const y = v.icon,
                    I = a === v.key,
                    g = v.tasks.filter((p) =>
                      "state" in p
                        ? p.state === "等待過帳"
                        : p.quantity && p.quantity > 0
                    ).length;
                  return n.jsxs(
                    "button",
                    {
                      onClick: () => i(v.key),
                      className: `flex-1 flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        I
                          ? "bg-white text-blue-600 shadow-sm"
                          : "text-gray-600 hover:text-gray-800"
                      }`,
                      children: [
                        n.jsx(y, { size: 16, className: "mr-2" }),
                        v.label,
                        g > 0 &&
                          n.jsx("span", {
                            className: `ml-2 px-2 py-0.5 rounded-full text-xs ${
                              I
                                ? "bg-blue-100 text-blue-600"
                                : "bg-gray-200 text-gray-600"
                            }`,
                            children: g,
                          }),
                      ],
                    },
                    v.key
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
                f.length === 0
                  ? n.jsxs("div", {
                      className: "text-center text-gray-500 py-8",
                      children: [
                        n.jsx(ke, {
                          size: 48,
                          className: "mx-auto text-gray-300 mb-2",
                        }),
                        n.jsx("p", { children: "暫無任務" }),
                      ],
                    })
                  : f.map((v) => n.jsx(h, { task: v, taskType: a }, v.id)),
            }),
          }),
          n.jsx(hi, {
            isOpen: o,
            onClose: () => u(!1),
            sectionKey: "tasks",
            sectionTitle: "任務清單",
          }),
        ],
      })
    );
  },
  F0 = ({ restockTasks: e, receivingTasks: t, putAwayTasks: r }) => {
    var v;
    const [s, l] = b.useState("restock"),
      [a, i] = b.useState(0),
      u = (() => {
        const y = localStorage.getItem("focusTable_tasks_itemsPerPage");
        return y ? parseInt(y, 10) : 5;
      })(),
      c = [
        { key: "restock", label: "撥補", icon: ke, tasks: e },
        { key: "receiving", label: "驗收", icon: Kt, tasks: t },
        { key: "putaway", label: "歸貨", icon: Vu, tasks: r },
      ],
      h = ((v = c.find((y) => y.key === s)) == null ? void 0 : v.tasks) || [];
    b.useEffect(() => {
      const y = setInterval(() => {
        l((I) => {
          const p = (c.findIndex((d) => d.key === I) + 1) % c.length;
          return c[p].key;
        }),
          i(0);
      }, 12e3);
      return () => clearInterval(y);
    }, []),
      b.useEffect(() => {
        if (h.length <= u) return;
        const y = setInterval(() => {
          i((I) => {
            const g = I + u;
            return g >= h.length ? 0 : g;
          });
        }, 8e3);
        return () => clearInterval(y);
      }, [h.length, s]),
      h.filter((y) =>
        "state" in y
          ? y.state === "等待過帳"
          : "quantity" in y && y.quantity > 0
      ).length,
      h.filter((y) => ("state" in y ? y.state === "已簽收" : !1)).length;
    const m = h.slice(a, a + u),
      f = Math.ceil(h.length / u),
      x = Math.floor(a / u) + 1;
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
                      children: ["總計: ", h.length],
                    }),
                  ],
                }),
                n.jsx("div", {
                  className: "flex space-x-1 bg-gray-100 rounded-lg p-1",
                  children: c.map((y) => {
                    const I = y.icon,
                      g = s === y.key,
                      p = y.tasks.filter((d) =>
                        "state" in d
                          ? d.state === "等待過帳"
                          : "quantity" in d && d.quantity > 0
                      ).length;
                    return n.jsxs(
                      "div",
                      {
                        className: `flex items-center justify-center px-2 py-1 rounded-md text-xs font-medium transition-colors ${
                          g
                            ? "bg-white text-blue-600 shadow-sm"
                            : "text-gray-600"
                        }`,
                        children: [
                          n.jsx(I, { size: 14, className: "mr-1" }),
                          y.label,
                          p > 0 &&
                            n.jsx("span", {
                              className: `ml-1 px-1 py-0.5 rounded-full text-xs ${
                                g
                                  ? "bg-blue-100 text-blue-600"
                                  : "bg-gray-200 text-gray-600"
                              }`,
                              children: p,
                            }),
                        ],
                      },
                      y.key
                    );
                  }),
                }),
              ],
            }),
            h.length > u &&
              n.jsxs("div", {
                className:
                  "flex items-center justify-between text-base text-gray-600 mt-2",
                children: [
                  n.jsxs("span", { children: ["第 ", x, " / ", f, " 頁"] }),
                  n.jsx("div", {
                    className: "flex space-x-1",
                    children: Array.from({ length: f }, (y, I) =>
                      n.jsx(
                        "div",
                        {
                          className: `w-2 h-2 rounded-full ${
                            I === x - 1 ? "bg-green-500" : "bg-gray-300"
                          }`,
                        },
                        I
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
            h.length === 0
              ? n.jsx("div", {
                  className:
                    "flex items-center justify-center h-full text-gray-500",
                  children: n.jsxs("div", {
                    className: "text-center",
                    children: [
                      n.jsx(ke, {
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
                        children: m.map((y, I) => {
                          if (s === "restock" && "code" in y && "state" in y) {
                            const g = (d) => {
                                switch (d) {
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
                              p =
                                (y.state === "已過帳" ||
                                  y.state === "已簽收") &&
                                y.actualIssuedQuantity
                                  ? y.actualIssuedQuantity
                                  : y.issuedQuantity;
                            return n.jsxs(
                              "tr",
                              {
                                className: `border-b border-gray-200 transition-colors ${g(
                                  y.state
                                )}`,
                                children: [
                                  n.jsx("td", {
                                    className:
                                      "text-base p-2 text-gray-800 font-medium",
                                    children: y.code,
                                  }),
                                  n.jsx("td", {
                                    className:
                                      "text-base p-2 text-gray-800 font-medium",
                                    children: y.name,
                                  }),
                                  n.jsx("td", {
                                    className:
                                      "text-base p-2 text-center text-gray-700",
                                    children: p,
                                  }),
                                  n.jsx("td", {
                                    className:
                                      "text-base p-2 text-center text-gray-700",
                                    children: y.destinationStoreType,
                                  }),
                                ],
                              },
                              `${a}-${I}`
                            );
                          }
                          return (s === "receiving" || s === "putaway") &&
                            "code" in y
                            ? n.jsxs(
                                "tr",
                                {
                                  className:
                                    "border-b border-gray-200 transition-colors bg-white hover:bg-gray-50",
                                  children: [
                                    n.jsx("td", {
                                      className:
                                        "text-base p-2 text-gray-800 font-medium",
                                      children: y.code,
                                    }),
                                    n.jsx("td", {
                                      className:
                                        "text-base p-2 text-gray-800 font-medium",
                                      children: y.name,
                                    }),
                                    n.jsx("td", {
                                      className:
                                        "text-base p-2 text-center text-gray-700",
                                      children: y.quantity,
                                    }),
                                    n.jsx("td", {
                                      className:
                                        "text-base p-2 text-center text-gray-700",
                                      children: y.supplier,
                                    }),
                                  ],
                                },
                                `${a}-${I}`
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
  }) =>
    s
      ? n.jsx(F0, { restockTasks: e, receivingTasks: t, putAwayTasks: r })
      : n.jsx(L0, {
          restockTasks: e,
          receivingTasks: t,
          putAwayTasks: r,
          showInFocus: l,
          onFocusToggle: a,
        }),
  A0 = ({ incomingDrugs: e, showInFocus: t = !0, onFocusToggle: r }) => {
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
          const u = new Date(o.replace(/\//g, "-")),
            c = new Date(),
            h = u.getTime() - c.getTime(),
            m = Math.ceil(h / (1e3 * 60 * 60 * 24)),
            f = u.toLocaleDateString("zh-TW", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            });
          return m < 0
            ? `${f} (逾期 ${Math.abs(m)} 天)`
            : m === 0
            ? `${f} (今天)`
            : m === 1
            ? `${f} (明天)`
            : `${f} (${m} 天後)`;
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
                  n.jsx(Kt, { size: 20, className: "text-green-600 mr-2" }),
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
                      n.jsx(Kt, {
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
                                    n.jsx(Ve, {
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
                                  n.jsx(Ys, {
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
                                  n.jsx(ke, {
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
    const [t, r] = b.useState(0);
    b.useEffect(() => {
      if (e.length <= 1) return;
      const u = setInterval(() => {
        r((c) => (c + 1) % e.length);
      }, 6e3);
      return () => clearInterval(u);
    }, [e.length]);
    const s = (u) => {
        switch (u) {
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
      l = (u) => {
        switch (u) {
          case "shipped":
            return "已出貨";
          case "ordered":
            return "已訂購";
          case "delayed":
            return "延遲";
          default:
            return u;
        }
      },
      a = (u) => {
        if (!u) return "未設定";
        try {
          const c = new Date(u.replace(/\//g, "-")),
            h = new Date(),
            m = c.getTime() - h.getTime(),
            f = Math.ceil(m / (1e3 * 60 * 60 * 24)),
            x = c.toLocaleDateString("zh-TW", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            });
          return f < 0
            ? `${x} (逾期 ${Math.abs(f)} 天)`
            : f === 0
            ? `${x} (今天)`
            : f === 1
            ? `${x} (明天)`
            : `${x} (${f} 天後)`;
        } catch {
          return u;
        }
      },
      i = (u) => {
        if (!u) return !1;
        try {
          return new Date(u.replace(/\//g, "-")) < new Date();
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
                n.jsx(Kt, { size: 20, className: "text-green-600 mr-2" }),
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
                n.jsx(Kt, {
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
                  n.jsx(Kt, { size: 20, className: "text-green-600 mr-2" }),
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
                        n.jsx(Ve, { size: 18, className: "text-red-500" }),
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
                      n.jsx(Ys, {
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
                          n.jsx(ke, {
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
  }) =>
    t
      ? n.jsx($0, { incomingDrugs: e })
      : n.jsx(A0, { incomingDrugs: e, showInFocus: r, onFocusToggle: s }),
  U0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
    const [s, l] = b.useState({ drugName: "", start_time: "", end_time: "" }),
      [a, i] = b.useState([]),
      [o, u] = b.useState([]),
      [c, h] = b.useState(!1),
      [m, f] = b.useState(!1),
      [x, v] = b.useState(!1),
      [y, I] = b.useState(null);
    Ee.useEffect(() => {
      if (e) {
        const C = new Date(),
          w = C.toISOString().slice(0, 16),
          N = new Date(C);
        N.setMonth(N.getMonth() + 1);
        const T = N.toISOString().slice(0, 16);
        l({ drugName: "", start_time: w, end_time: T }),
          u([]),
          h(!1),
          I(null),
          g();
      }
    }, [e]);
    const g = async () => {
        f(!0);
        try {
          const C = await Xs();
          C.Code === 200 && C.Data
            ? i(C.Data)
            : console.warn("Failed to load medicine data:", C);
        } catch (C) {
          console.error("Error loading medicine data:", C);
        } finally {
          f(!1);
        }
      },
      p = (C, w) => {
        l((N) => ({ ...N, [C]: w })), C === "drugName" && d(w);
      },
      d = (C) => {
        if (!C.trim()) {
          u([]), h(!1);
          return;
        }
        const w = a.filter((N) =>
          N.NAME.toLowerCase().includes(C.toLowerCase())
        );
        u(w.slice(0, 10)), h(w.length > 0);
      },
      j = (C) => {
        l((w) => ({ ...w, drugName: C })), h(!1), u([]);
      },
      D = () => {
        if (!s.drugName.trim()) return "請輸入藥品名稱";
        if (!s.start_time) return "請選擇開始時間";
        if (!s.end_time) return "請選擇結束時間";
        const C = new Date(s.start_time);
        return new Date(s.end_time) <= C ? "結束時間必須晚於開始時間" : null;
      },
      _ = async () => {
        I(null);
        const C = D();
        if (C) {
          I(C);
          return;
        }
        const w = Tn();
        if (!w) {
          I("無法獲取使用者資訊，請重新登入");
          return;
        }
        v(!0);
        try {
          const N = (R) => R.replace("T", " ") + ":00",
            T = {
              title: "缺貨通知",
              content: s.drugName.trim(),
              priority: "Critical",
              creator_dept: w.Employer || "",
              creator_name: w.Name || "",
              start_time: N(s.start_time),
              end_time: N(s.end_time),
            };
          await d0(T), r(), t();
        } catch (N) {
          I(N instanceof Error ? N.message : "新增缺貨項目失敗，請稍後再試");
        } finally {
          v(!1);
        }
      },
      z = () => {
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
                      n.jsx(pt, { size: 24, className: "text-blue-600 mr-3" }),
                      n.jsx("h2", {
                        className: "text-xl font-semibold text-gray-800",
                        children: "新增缺貨項目",
                      }),
                    ],
                  }),
                  n.jsx("button", {
                    onClick: z,
                    disabled: x,
                    className:
                      "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                    children: n.jsx(Ue, { size: 20 }),
                  }),
                ],
              }),
              n.jsxs("div", {
                className: "p-6 space-y-6",
                children: [
                  y &&
                    n.jsxs("div", {
                      className:
                        "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center",
                      children: [
                        n.jsx(Ve, {
                          size: 20,
                          className: "mr-2 flex-shrink-0",
                        }),
                        y,
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
                            children: n.jsx(Sn, {
                              size: 16,
                              className: "text-gray-400",
                            }),
                          }),
                          n.jsx("input", {
                            type: "text",
                            value: s.drugName,
                            onChange: (C) => p("drugName", C.target.value),
                            onFocus: () => {
                              o.length > 0 && h(!0);
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
                              children: n.jsx(Y, { size: "small" }),
                            }),
                          c &&
                            n.jsx("div", {
                              className:
                                "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",
                              children: n.jsx(bn, {
                                size: 16,
                                className: "text-gray-400",
                              }),
                            }),
                        ],
                      }),
                      c &&
                        o.length > 0 &&
                        n.jsx("div", {
                          className:
                            "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                          children: o.map((C, w) =>
                            n.jsx(
                              "button",
                              {
                                type: "button",
                                onClick: () => j(C.NAME),
                                className:
                                  "w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0",
                                children: n.jsx("div", {
                                  className: "font-medium text-gray-900",
                                  children: C.NAME,
                                }),
                              },
                              w
                            )
                          ),
                        }),
                      m &&
                        n.jsxs("div", {
                          className:
                            "mt-2 text-sm text-gray-500 flex items-center",
                          children: [
                            n.jsx(Y, { size: "small", className: "mr-2" }),
                            "載入藥品資料中...",
                          ],
                        }),
                    ],
                  }),
                  c &&
                    n.jsx("div", {
                      className: "fixed inset-0 z-40",
                      onClick: () => h(!1),
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
                            onChange: (C) => p("start_time", C.target.value),
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
                            onChange: (C) => p("end_time", C.target.value),
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
                    onClick: z,
                    disabled: x,
                    className:
                      "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                    children: "取消",
                  }),
                  n.jsx("button", {
                    onClick: _,
                    disabled: x || !s.drugName.trim(),
                    className:
                      "flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                    children: x
                      ? n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(Y, { size: "small", className: "mr-2" }),
                            "新增中...",
                          ],
                        })
                      : n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(pt, { size: 16, className: "mr-2" }),
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
  V0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
    const [s, l] = b.useState([]),
      [a, i] = b.useState(!1),
      [o, u] = b.useState(null),
      [c, h] = b.useState(null),
      [m, f] = b.useState(!1),
      [x, v] = b.useState(!1),
      [y, I] = b.useState(!1),
      [g, p] = b.useState([]),
      [d, j] = b.useState([]),
      [D, _] = b.useState(!1),
      [z, C] = b.useState(!1);
    b.useEffect(() => {
      e && w();
    }, [e]);
    const w = async () => {
        i(!0), u(null);
        try {
          const k = await u0();
          if (k.Code === 200) l(k.Data || []);
          else throw new Error(k.Result || "載入歷史缺貨項目失敗");
        } catch (k) {
          u(k instanceof Error ? k.message : "載入歷史缺貨項目時發生錯誤");
        } finally {
          i(!1);
        }
      },
      N = async () => {
        C(!0);
        try {
          const k = await Xs();
          k.Code === 200 && k.Data
            ? p(k.Data)
            : console.warn("Failed to load medicine data:", k);
        } catch (k) {
          console.error("Error loading medicine data:", k);
        } finally {
          C(!1);
        }
      },
      T = (k) => {
        const F = (S) => {
          if (!S) return "";
          try {
            const $ = S.replace(/\//g, "-");
            return new Date($).toISOString().slice(0, 16);
          } catch ($) {
            return console.error("Error formatting date for input:", S, $), "";
          }
        };
        h({
          GUID: k.GUID,
          title: k.title || "",
          content: k.content || "",
          priority: k.priority || "Normal",
          creator_dept: k.creator_dept || "",
          creator_name: k.creator_name || "",
          start_time: F(k.start_time),
          end_time: F(k.end_time),
          created_time: k.created_time || "",
        }),
          g.length === 0 && N();
      },
      R = (k) => {
        if (!k.trim()) {
          j([]), _(!1);
          return;
        }
        const F = g.filter((S) =>
          S.NAME.toLowerCase().includes(k.toLowerCase())
        );
        j(F.slice(0, 10)), _(F.length > 0);
      },
      A = (k) => {
        c && h({ ...c, content: k }), _(!1), j([]);
      },
      ue = async () => {
        if (c) {
          f(!0), u(null);
          try {
            const k = (S) =>
                S ? S.replace("T", " ").replace(/-/g, "/") + ":00" : "",
              F = {
                GUID: c.GUID,
                title: c.title.trim(),
                content: c.content.trim(),
                priority: c.priority,
                creator_dept: c.creator_dept,
                creator_name: c.creator_name,
                start_time: k(c.start_time),
                end_time: k(c.end_time),
              };
            await f0(F), await w(), h(null), r && r();
          } catch (k) {
            u(k instanceof Error ? k.message : "更新缺貨項目失敗，請稍後再試");
          } finally {
            f(!1);
          }
        }
      },
      Pe = async () => {
        if (c) {
          I(!0), u(null), v(!1);
          try {
            await m0(c.GUID), await w(), h(null), r && r();
          } catch (k) {
            u(k instanceof Error ? k.message : "刪除缺貨項目失敗，請稍後再試");
          } finally {
            I(!1);
          }
        }
      },
      Be = (k) => {
        if (!k) return "-";
        try {
          const F = k.replace(/\//g, "-");
          return new Date(F).toLocaleString("zh-TW", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: !1,
          });
        } catch {
          return k;
        }
      },
      rt = (k) => {
        switch (k) {
          case "Critical":
            return "緊急";
          case "Important":
            return "重要";
          case "Normal":
            return "一般";
          default:
            return k || "一般";
        }
      },
      M = (k) => {
        switch (k) {
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
      O = () => {
        !a && !m && !y && (h(null), v(!1), t());
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
                        n.jsx(mt, {
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
                      onClick: O,
                      disabled: a || m,
                      className:
                        "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                      children: n.jsx(Ue, { size: 20 }),
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
                          n.jsx(Ve, {
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
                            n.jsx(Y, { size: "large" }),
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
                            n.jsx(mt, {
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
                                  children: s.map((k) =>
                                    n.jsxs(
                                      "tr",
                                      {
                                        className:
                                          "hover:bg-blue-50 cursor-pointer transition-colors",
                                        onClick: () => T(k),
                                        title: "點擊編輯此缺貨項目",
                                        children: [
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: Be(k.created_time),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 text-sm text-gray-900 max-w-xs",
                                            children: n.jsx("div", {
                                              className: "truncate",
                                              title: k.content,
                                              children: k.content || "-",
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap",
                                            children: n.jsx("span", {
                                              className: `px-2 py-1 rounded-full text-xs font-medium ${M(
                                                k.priority
                                              )}`,
                                              children: rt(k.priority),
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children:
                                              `${k.creator_dept || ""} ${
                                                k.creator_name || ""
                                              }`.trim() || "-",
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: Be(k.start_time),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: Be(k.end_time),
                                          }),
                                        ],
                                      },
                                      k.GUID
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
            c &&
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
                            n.jsx(Ir, {
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
                              onClick: () => v(!0),
                              disabled: m || y,
                              className:
                                "flex items-center px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                              title: "刪除缺貨項目",
                              children: [
                                n.jsx(ot, { size: 16, className: "mr-2" }),
                                "刪除",
                              ],
                            }),
                            n.jsx("button", {
                              onClick: () => h(null),
                              disabled: m || y,
                              className:
                                "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                              children: n.jsx(Ue, { size: 20 }),
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
                                  children: n.jsx(Sn, {
                                    size: 16,
                                    className: "text-gray-400",
                                  }),
                                }),
                                n.jsx("input", {
                                  type: "text",
                                  value: c.content,
                                  onChange: (k) => {
                                    h({ ...c, content: k.target.value }),
                                      R(k.target.value);
                                  },
                                  onFocus: () => {
                                    d.length > 0 && _(!0);
                                  },
                                  disabled: m || z,
                                  className:
                                    "w-full pl-10 pr-10 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                  placeholder: "請輸入藥品名稱進行搜尋",
                                  autoComplete: "off",
                                }),
                                z &&
                                  n.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center pr-3",
                                    children: n.jsx(Y, { size: "small" }),
                                  }),
                                D &&
                                  n.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",
                                    children: n.jsx(bn, {
                                      size: 16,
                                      className: "text-gray-400",
                                    }),
                                  }),
                              ],
                            }),
                            D &&
                              d.length > 0 &&
                              n.jsx("div", {
                                className:
                                  "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                                children: d.map((k, F) =>
                                  n.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      onClick: () => A(k.NAME),
                                      className:
                                        "w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0",
                                      children: n.jsx("div", {
                                        className: "font-medium text-gray-900",
                                        children: k.NAME,
                                      }),
                                    },
                                    F
                                  )
                                ),
                              }),
                            z &&
                              n.jsxs("div", {
                                className:
                                  "mt-2 text-sm text-gray-500 flex items-center",
                                children: [
                                  n.jsx(Y, {
                                    size: "small",
                                    className: "mr-2",
                                  }),
                                  "載入藥品資料中...",
                                ],
                              }),
                          ],
                        }),
                        D &&
                          n.jsx("div", {
                            className: "fixed inset-0 z-40",
                            onClick: () => _(!1),
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
                              value: c.priority,
                              onChange: (k) =>
                                h({ ...c, priority: k.target.value }),
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
                                  value: c.start_time,
                                  onChange: (k) =>
                                    h({ ...c, start_time: k.target.value }),
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
                                  value: c.end_time,
                                  onChange: (k) =>
                                    h({ ...c, end_time: k.target.value }),
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
                          onClick: () => h(null),
                          disabled: m || y,
                          className:
                            "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        n.jsx("button", {
                          onClick: ue,
                          disabled: m || y || !c.content.trim(),
                          className:
                            "flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                          children:
                            m || y
                              ? n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Y, {
                                      size: "small",
                                      className: "mr-2",
                                    }),
                                    m ? "更新中..." : "處理中...",
                                  ],
                                })
                              : n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Ir, { size: 16, className: "mr-2" }),
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
              c &&
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
                          n.jsx(ot, {
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
                          c.content,
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
                            onClick: () => v(!1),
                            disabled: y,
                            className:
                              "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                            children: "取消",
                          }),
                          n.jsx("button", {
                            onClick: Pe,
                            disabled: y,
                            className:
                              "flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                            children: y
                              ? n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Y, {
                                      size: "small",
                                      className: "mr-2",
                                    }),
                                    "刪除中...",
                                  ],
                                })
                              : n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(ot, { size: 16, className: "mr-2" }),
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
  B0 = ({
    outOfStockItems: e,
    onItemAdded: t,
    showInFocus: r = !0,
    onFocusToggle: s,
  }) => {
    const [l, a] = Ee.useState(!1),
      [i, o] = Ee.useState(!1),
      [u, c] = Ee.useState(!1),
      [h, m] = Ee.useState(!1),
      f = (g) =>
        new Date(g).toLocaleDateString("zh-TW", {
          month: "2-digit",
          day: "2-digit",
        }),
      x = (g) => {
        const p = new Date(g);
        if (isNaN(p.getTime()))
          return console.warn("Invalid lastStockDate:", g), 0;
        const d = new Date(),
          j = new Date(p.getFullYear(), p.getMonth(), p.getDate()),
          D = new Date(d.getFullYear(), d.getMonth(), d.getDate()),
          _ = D.getTime() - j.getTime(),
          z = Math.floor(_ / (1e3 * 60 * 60 * 24));
        return (
          console.log("Days calculation in OutOfStockList:", {
            lastStockDate: g,
            lastStock: p,
            lastStockDateOnly: j,
            nowDateOnly: D,
            diffDays: z,
          }),
          z
        );
      },
      v = () => {
        t && t();
      },
      y = async () => {
        c(!0);
        try {
          await new Promise((g) => setTimeout(g, 100)), a(!0);
        } catch (g) {
          console.error("Failed to prepare add modal:", g), a(!0);
        } finally {
          c(!1);
        }
      },
      I = () => {
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
                        n.jsx(wa, { size: 20, className: "text-red-600 mr-2" }),
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
                          children: n.jsx(Tr, { size: 18 }),
                        }),
                        n.jsxs("button", {
                          onClick: () => o(!0),
                          className:
                            "flex items-center px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors text-sm",
                          children: [
                            n.jsx(mt, { size: 16, className: "mr-2" }),
                            "查看歷史",
                          ],
                        }),
                        n.jsx("button", {
                          onClick: y,
                          disabled: u,
                          className:
                            "flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed",
                          children: u
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
                                  n.jsx(pt, { size: 16, className: "mr-2" }),
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
                          n.jsx(wa, {
                            size: 48,
                            className: "mx-auto text-gray-300 mb-2",
                          }),
                          n.jsx("p", { children: "目前無缺貨品項" }),
                        ],
                      })
                    : e.map((g) => {
                        const p = x(g.lastStockDate),
                          d = p > 3 || g.status === "urgent_order";
                        return n.jsxs(
                          "div",
                          {
                            className: `p-3 border rounded-lg transition-colors ${
                              d
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
                                    n.jsx(zn, {
                                      size: 14,
                                      className: "mr-2 text-gray-400",
                                    }),
                                    n.jsxs("span", {
                                      className:
                                        p > 3 ? "text-red-600 font-medium" : "",
                                      children: [
                                        "缺貨 ",
                                        p,
                                        " 天 (自 ",
                                        f(g.lastStockDate),
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
        n.jsx(U0, { isOpen: l, onClose: () => a(!1), onSuccess: v }),
        n.jsx(V0, { isOpen: i, onClose: () => o(!1), onSuccess: I }),
        n.jsx(hi, {
          isOpen: h,
          onClose: () => m(!1),
          sectionKey: "outOfStock",
          sectionTitle: "缺貨通知",
        }),
      ],
    });
  },
  H0 = ({ outOfStockItems: e }) => {
    const [t, r] = b.useState(0),
      l = (() => {
        const c = localStorage.getItem("focusTable_outOfStock_itemsPerPage");
        return c ? parseInt(c, 10) : 5;
      })();
    b.useEffect(() => {
      if (e.length <= l) return;
      const c = setInterval(() => {
        r((h) => {
          const m = h + l;
          return m >= e.length ? 0 : m;
        });
      }, 8e3);
      return () => clearInterval(c);
    }, [e.length, l]);
    const a = (c) => {
        if (!c) return 0;
        try {
          const h = new Date(c),
            m = new Date(),
            f = new Date(h.getFullYear(), h.getMonth(), h.getDate()),
            v =
              new Date(m.getFullYear(), m.getMonth(), m.getDate()).getTime() -
              f.getTime(),
            y = Math.floor(v / (1e3 * 60 * 60 * 24));
          return Math.max(0, y);
        } catch (h) {
          return console.error("日期解析錯誤:", h, "原始日期:", c), 0;
        }
      },
      i = e.slice(t, t + l),
      o = Math.ceil(e.length / l),
      u = Math.floor(t / l) + 1;
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
                    n.jsx(wa, { size: 20, className: "mr-2 text-red-500" }),
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
                  n.jsxs("span", { children: ["第 ", u, " / ", o, " 頁"] }),
                  n.jsx("div", {
                    className: "flex space-x-1",
                    children: Array.from({ length: o }, (c, h) =>
                      n.jsx(
                        "div",
                        {
                          className: `w-2 h-2 rounded-full ${
                            h === u - 1 ? "bg-red-500" : "bg-gray-300"
                          }`,
                        },
                        h
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
                      n.jsx(ke, {
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
                        children: i.map((c, h) => {
                          const m = a(c.lastStockDate),
                            f = m > 3 || c.status === "urgent_order";
                          return n.jsxs(
                            "tr",
                            {
                              className: `border-b border-gray-200 transition-colors ${
                                f ? "bg-red-50" : "bg-white hover:bg-gray-50"
                              }`,
                              children: [
                                n.jsx("td", {
                                  className: "text-base p-2 text-gray-800",
                                  children: n.jsx("div", {
                                    className: "font-semibold",
                                    children: c.drugName,
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
                                    c.currentStock !== void 0 &&
                                    c.minimumStock !== void 0
                                      ? `${c.currentStock} / ${c.minimumStock}`
                                      : "-",
                                }),
                              ],
                            },
                            `${t}-${h}`
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
  }) =>
    t
      ? n.jsx(H0, { outOfStockItems: e })
      : n.jsx(B0, {
          outOfStockItems: e,
          onItemAdded: r,
          showInFocus: s,
          onFocusToggle: l,
        }),
  q0 = ({ isOpen: e, onClose: t, onSuccess: r }) => {
    const [s, l] = b.useState({
        originalDrug: null,
        reason: "",
        start_time: "",
        end_time: "",
      }),
      [a, i] = b.useState([]),
      [o, u] = b.useState([]),
      [c, h] = b.useState(""),
      [m, f] = b.useState(!1),
      [x, v] = b.useState(!1),
      [y, I] = b.useState(!1),
      [g, p] = b.useState(null);
    Ee.useEffect(() => {
      if (e) {
        const N = new Date(),
          T = N.toISOString().slice(0, 16),
          R = new Date(N);
        R.setMonth(R.getMonth() + 1);
        const A = R.toISOString().slice(0, 16);
        l({ originalDrug: null, reason: "", start_time: T, end_time: A }),
          h(""),
          u([]),
          f(!1),
          p(null),
          d();
      }
    }, [e]);
    const d = async () => {
        v(!0);
        try {
          const N = await Xs();
          N.Code === 200 && N.Data
            ? i(N.Data)
            : console.warn("Failed to load medicine data:", N);
        } catch (N) {
          console.error("Error loading medicine data:", N);
        } finally {
          v(!1);
        }
      },
      j = (N, T) => {
        l((R) => ({ ...R, [N]: T }));
      },
      D = (N) => {
        if ((h(N), !N.trim())) {
          u([]), f(!1);
          return;
        }
        const T = N.toLowerCase(),
          R = a.filter((A) => {
            const ue = (A.NAME || "").toLowerCase(),
              Pe = (A.CODE || "").toLowerCase(),
              Be = (A.SKDIACODE || "").toLowerCase(),
              rt = (A.CHT_NAME || "").toLowerCase();
            return (
              ue.includes(T) ||
              Pe.includes(T) ||
              Be.includes(T) ||
              rt.includes(T)
            );
          });
        u(R.slice(0, 10)), f(R.length > 0);
      },
      _ = (N) => {
        l((T) => ({ ...T, originalDrug: N })), h(N.NAME), f(!1), u([]);
      },
      z = () => {
        if (!s.originalDrug) return "請選擇藥品";
        if (!s.reason.trim()) return "請輸入替換原因";
        if (!s.start_time) return "請選擇開始時間";
        if (!s.end_time) return "請選擇結束時間";
        const N = new Date(s.start_time);
        return new Date(s.end_time) <= N ? "結束時間必須晚於開始時間" : null;
      },
      C = async () => {
        p(null);
        const N = z();
        if (N) {
          p(N);
          return;
        }
        const T = Tn();
        if (!T) {
          p("無法獲取使用者資訊，請重新登入");
          return;
        }
        I(!0);
        try {
          const R = (ue) => ue.replace("T", " ") + ":00",
            A = {
              title: "藥品通知",
              content: `${s.originalDrug.NAME.trim()};${s.originalDrug.CODE.trim()}`,
              note: s.reason.trim(),
              priority: "Important",
              creator_dept: T.Employer || "",
              creator_name: T.Name || "",
              start_time: R(s.start_time),
              end_time: R(s.end_time),
            };
          await a0(A), t(), r();
        } catch (R) {
          p(
            R instanceof Error ? R.message : "新增藥品通知項目失敗，請稍後再試"
          );
        } finally {
          I(!1);
        }
      },
      w = () => {
        y || t();
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
                      n.jsx(pt, { size: 24, className: "text-blue-600 mr-3" }),
                      n.jsx("h2", {
                        className: "text-xl font-semibold text-gray-800",
                        children: "新增藥品通知",
                      }),
                    ],
                  }),
                  n.jsx("button", {
                    onClick: w,
                    disabled: y,
                    className:
                      "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                    children: n.jsx(Ue, { size: 20 }),
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
                        n.jsx(Ve, {
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
                            children: n.jsx(Sn, {
                              size: 16,
                              className: "text-gray-400",
                            }),
                          }),
                          n.jsx("input", {
                            type: "text",
                            value: c,
                            onChange: (N) => D(N.target.value),
                            onFocus: () => {
                              o.length > 0 && f(!0);
                            },
                            disabled: y || x,
                            className:
                              "w-full pl-10 pr-10 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                            placeholder: "請輸入藥品名稱進行搜尋",
                            autoComplete: "off",
                          }),
                          x &&
                            n.jsx("div", {
                              className:
                                "absolute inset-y-0 right-0 flex items-center pr-3",
                              children: n.jsx(Y, { size: "small" }),
                            }),
                          m &&
                            n.jsx("div", {
                              className:
                                "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",
                              children: n.jsx(bn, {
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
                          children: o.map((N, T) =>
                            n.jsxs(
                              "button",
                              {
                                type: "button",
                                onClick: () => _(N),
                                className:
                                  "w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0",
                                children: [
                                  n.jsx("div", {
                                    className: "font-medium text-gray-900",
                                    children: N.NAME,
                                  }),
                                  n.jsxs("div", {
                                    className:
                                      "text-sm text-gray-500 space-y-0.5",
                                    children: [
                                      n.jsxs("div", {
                                        children: ["藥碼: ", N.CODE],
                                      }),
                                      N.SKDIACODE &&
                                        n.jsxs("div", {
                                          children: ["料號: ", N.SKDIACODE],
                                        }),
                                      N.CHT_NAME &&
                                        n.jsxs("div", {
                                          children: ["中文名: ", N.CHT_NAME],
                                        }),
                                    ],
                                  }),
                                ],
                              },
                              T
                            )
                          ),
                        }),
                    ],
                  }),
                  m &&
                    n.jsx("div", {
                      className: "fixed inset-0 z-40",
                      onClick: () => f(!1),
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
                        onChange: (N) => j("reason", N.target.value),
                        disabled: y,
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
                            onChange: (N) => j("start_time", N.target.value),
                            disabled: y,
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
                            onChange: (N) => j("end_time", N.target.value),
                            disabled: y,
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
                        n.jsx(Y, { size: "small", className: "mr-2" }),
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
                    onClick: w,
                    disabled: y,
                    className:
                      "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                    children: "取消",
                  }),
                  n.jsx("button", {
                    onClick: C,
                    disabled: y || !s.originalDrug || !s.reason.trim(),
                    className:
                      "flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                    children: y
                      ? n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(Y, { size: "small", className: "mr-2" }),
                            "新增中...",
                          ],
                        })
                      : n.jsxs(n.Fragment, {
                          children: [
                            n.jsx(pt, { size: 16, className: "mr-2" }),
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
    const [s, l] = b.useState([]),
      [a, i] = b.useState(!1),
      [o, u] = b.useState(null),
      [c, h] = b.useState(null),
      [m, f] = b.useState(!1),
      [x, v] = b.useState(!1),
      [y, I] = b.useState(!1),
      [g, p] = b.useState([]),
      [d, j] = b.useState([]),
      [D, _] = b.useState(null),
      [z, C] = b.useState(!1);
    b.useEffect(() => {
      e && w();
    }, [e]);
    const w = async () => {
        i(!0), u(null);
        try {
          const S = await l0();
          if (S.Code === 200) l(S.Data || []);
          else throw new Error(S.Result || "載入歷史藥品通知項目失敗");
        } catch (S) {
          u(S instanceof Error ? S.message : "載入歷史藥品通知項目時發生錯誤");
        } finally {
          i(!1);
        }
      },
      N = async () => {
        C(!0);
        try {
          const S = await Xs();
          S.Code === 200 && S.Data
            ? p(S.Data)
            : console.warn("Failed to load medicine data:", S);
        } catch (S) {
          console.error("Error loading medicine data:", S);
        } finally {
          C(!1);
        }
      },
      T = (S) => {
        const $ = (J) => {
          if (!J) return "";
          try {
            const Ce = J.replace(/\//g, "-");
            return new Date(Ce).toISOString().slice(0, 16);
          } catch (Ce) {
            return console.error("Error formatting date for input:", J, Ce), "";
          }
        };
        h({
          GUID: S.GUID,
          title: S.title || "",
          content: S.content || "",
          note: S.note || "",
          priority: S.priority || "Normal",
          creator_dept: S.creator_dept || "",
          creator_name: S.creator_name || "",
          start_time: $(S.start_time),
          end_time: $(S.end_time),
          created_time: S.created_time || "",
        }),
          g.length === 0 && N();
      },
      R = (S, $) => {
        if (!S.trim()) {
          j([]), _(null);
          return;
        }
        const J = g.filter((Ce) =>
          Ce.NAME.toLowerCase().includes(S.toLowerCase())
        );
        j(J.slice(0, 10)), _(J.length > 0 ? $ : null);
      },
      A = (S, $) => {
        if (c) {
          const J = c.content.split(";");
          let Ce = "";
          $ === "original"
            ? (Ce = `${S};${J[1] || ""}`)
            : (Ce = `${J[0] || ""};${S}`),
            h({ ...c, content: Ce });
        }
        _(null), j([]);
      },
      ue = (S) => {
        var $;
        return (($ = S.split(";")[0]) == null ? void 0 : $.trim()) || "";
      },
      Pe = (S) => {
        var $;
        return (($ = S.split(";")[1]) == null ? void 0 : $.trim()) || "";
      },
      Be = async () => {
        if (c) {
          f(!0), u(null);
          try {
            const S = (J) =>
                J ? J.replace("T", " ").replace(/-/g, "/") + ":00" : "",
              $ = {
                GUID: c.GUID,
                title: c.title.trim(),
                content: c.content.trim(),
                note: c.note.trim(),
                priority: c.priority,
                creator_dept: c.creator_dept,
                creator_name: c.creator_name,
                start_time: S(c.start_time),
                end_time: S(c.end_time),
              };
            await i0($), await w(), h(null), r && r();
          } catch (S) {
            u(
              S instanceof Error
                ? S.message
                : "更新藥品通知項目失敗，請稍後再試"
            );
          } finally {
            f(!1);
          }
        }
      },
      rt = async () => {
        if (c) {
          I(!0), u(null), v(!1);
          try {
            await o0(c.GUID), await w(), h(null), r && r();
          } catch (S) {
            u(
              S instanceof Error
                ? S.message
                : "刪除藥品通知項目失敗，請稍後再試"
            );
          } finally {
            I(!1);
          }
        }
      },
      M = (S) => {
        if (!S) return "-";
        try {
          const $ = S.replace(/\//g, "-");
          return new Date($).toLocaleString("zh-TW", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: !1,
          });
        } catch {
          return S;
        }
      },
      O = (S) => {
        switch (S) {
          case "Critical":
            return "緊急";
          case "Important":
            return "重要";
          case "Normal":
            return "一般";
          default:
            return S || "一般";
        }
      },
      k = (S) => {
        switch (S) {
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
        !a && !m && !y && (h(null), v(!1), t());
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
                        n.jsx(mt, {
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
                      onClick: F,
                      disabled: a || m,
                      className:
                        "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                      children: n.jsx(Ue, { size: 20 }),
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
                          n.jsx(Ve, {
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
                            n.jsx(Y, { size: "large" }),
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
                            n.jsx(mt, {
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
                                  children: s.map((S) =>
                                    n.jsxs(
                                      "tr",
                                      {
                                        className:
                                          "hover:bg-blue-50 cursor-pointer transition-colors",
                                        onClick: () => T(S),
                                        title: "點擊編輯此藥品通知項目",
                                        children: [
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: M(S.created_time),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 text-sm text-gray-900 max-w-xs",
                                            children: n.jsx("div", {
                                              className: "truncate",
                                              title: ue(S.content),
                                              children: ue(S.content) || "-",
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 text-sm text-gray-900 max-w-xs",
                                            children: n.jsx("div", {
                                              className: "truncate",
                                              title: Pe(S.content),
                                              children: Pe(S.content) || "-",
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 text-sm text-gray-900 max-w-md",
                                            children: n.jsx("div", {
                                              className: "truncate",
                                              title: S.note,
                                              children: S.note || "-",
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap",
                                            children: n.jsx("span", {
                                              className: `px-2 py-1 rounded-full text-xs font-medium ${k(
                                                S.priority
                                              )}`,
                                              children: O(S.priority),
                                            }),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children:
                                              `${S.creator_dept || ""} ${
                                                S.creator_name || ""
                                              }`.trim() || "-",
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: M(S.start_time),
                                          }),
                                          n.jsx("td", {
                                            className:
                                              "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                            children: M(S.end_time),
                                          }),
                                        ],
                                      },
                                      S.GUID
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
            c &&
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
                            n.jsx(Ir, {
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
                              onClick: () => v(!0),
                              disabled: m || y,
                              className:
                                "flex items-center px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                              title: "刪除藥品通知項目",
                              children: [
                                n.jsx(ot, { size: 16, className: "mr-2" }),
                                "刪除",
                              ],
                            }),
                            n.jsx("button", {
                              onClick: () => h(null),
                              disabled: m || y,
                              className:
                                "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                              children: n.jsx(Ue, { size: 20 }),
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
                                  children: n.jsx(Sn, {
                                    size: 16,
                                    className: "text-gray-400",
                                  }),
                                }),
                                n.jsx("input", {
                                  type: "text",
                                  value: ue(c.content),
                                  onChange: (S) => {
                                    const $ = `${S.target.value};${Pe(
                                      c.content
                                    )}`;
                                    h({ ...c, content: $ }),
                                      R(S.target.value, "original");
                                  },
                                  onFocus: () => {
                                    d.length > 0 && _("original");
                                  },
                                  disabled: m || z,
                                  className:
                                    "w-full pl-10 pr-10 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                  placeholder: "請輸入原藥品名稱進行搜尋",
                                  autoComplete: "off",
                                }),
                                z &&
                                  n.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center pr-3",
                                    children: n.jsx(Y, { size: "small" }),
                                  }),
                                D === "original" &&
                                  n.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",
                                    children: n.jsx(bn, {
                                      size: 16,
                                      className: "text-gray-400",
                                    }),
                                  }),
                              ],
                            }),
                            D === "original" &&
                              d.length > 0 &&
                              n.jsx("div", {
                                className:
                                  "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                                children: d.map((S, $) =>
                                  n.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      onClick: () => A(S.NAME, "original"),
                                      className:
                                        "w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0",
                                      children: n.jsx("div", {
                                        className: "font-medium text-gray-900",
                                        children: S.NAME,
                                      }),
                                    },
                                    $
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
                                  children: n.jsx(Sn, {
                                    size: 16,
                                    className: "text-gray-400",
                                  }),
                                }),
                                n.jsx("input", {
                                  type: "text",
                                  value: Pe(c.content),
                                  onChange: (S) => {
                                    const $ = `${ue(c.content)};${
                                      S.target.value
                                    }`;
                                    h({ ...c, content: $ }),
                                      R(S.target.value, "replacement");
                                  },
                                  onFocus: () => {
                                    d.length > 0 && _("replacement");
                                  },
                                  disabled: m || z,
                                  className:
                                    "w-full pl-10 pr-10 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                  placeholder: "請輸入替換藥品名稱進行搜尋",
                                  autoComplete: "off",
                                }),
                                z &&
                                  n.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center pr-3",
                                    children: n.jsx(Y, { size: "small" }),
                                  }),
                                D === "replacement" &&
                                  n.jsx("div", {
                                    className:
                                      "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",
                                    children: n.jsx(bn, {
                                      size: 16,
                                      className: "text-gray-400",
                                    }),
                                  }),
                              ],
                            }),
                            D === "replacement" &&
                              d.length > 0 &&
                              n.jsx("div", {
                                className:
                                  "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",
                                children: d.map((S, $) =>
                                  n.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      onClick: () => A(S.NAME, "replacement"),
                                      className:
                                        "w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0",
                                      children: n.jsx("div", {
                                        className: "font-medium text-gray-900",
                                        children: S.NAME,
                                      }),
                                    },
                                    $
                                  )
                                ),
                              }),
                          ],
                        }),
                        D &&
                          n.jsx("div", {
                            className: "fixed inset-0 z-40",
                            onClick: () => _(null),
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
                              value: c.note,
                              onChange: (S) =>
                                h({ ...c, note: S.target.value }),
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
                              value: c.priority,
                              onChange: (S) =>
                                h({ ...c, priority: S.target.value }),
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
                                  value: c.start_time,
                                  onChange: (S) =>
                                    h({ ...c, start_time: S.target.value }),
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
                                  value: c.end_time,
                                  onChange: (S) =>
                                    h({ ...c, end_time: S.target.value }),
                                  disabled: m,
                                  className:
                                    "w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:opacity-50 disabled:bg-gray-100",
                                }),
                              ],
                            }),
                          ],
                        }),
                        z &&
                          n.jsxs("div", {
                            className:
                              "text-sm text-gray-500 flex items-center",
                            children: [
                              n.jsx(Y, { size: "small", className: "mr-2" }),
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
                          onClick: () => h(null),
                          disabled: m || y,
                          className:
                            "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                          children: "取消",
                        }),
                        n.jsx("button", {
                          onClick: Be,
                          disabled:
                            m || y || !c.content.trim() || !c.note.trim(),
                          className:
                            "flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                          children:
                            m || y
                              ? n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Y, {
                                      size: "small",
                                      className: "mr-2",
                                    }),
                                    m ? "更新中..." : "處理中...",
                                  ],
                                })
                              : n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Ir, { size: 16, className: "mr-2" }),
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
              c &&
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
                          n.jsx(ot, {
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
                          ue(c.content),
                          " → ",
                          Pe(c.content),
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
                            onClick: () => v(!1),
                            disabled: y,
                            className:
                              "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors disabled:opacity-50",
                            children: "取消",
                          }),
                          n.jsx("button", {
                            onClick: rt,
                            disabled: y,
                            className:
                              "flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                            children: y
                              ? n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(Y, {
                                      size: "small",
                                      className: "mr-2",
                                    }),
                                    "刪除中...",
                                  ],
                                })
                              : n.jsxs(n.Fragment, {
                                  children: [
                                    n.jsx(ot, { size: 16, className: "mr-2" }),
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
    const [l, a] = Ee.useState(!1),
      [i, o] = Ee.useState(!1),
      u = (f) => {
        switch (f) {
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
      c = (f) => {
        const x = new Date(f),
          v = new Date();
        return (
          x.getTime() - v.getTime(),
          x.toLocaleDateString("zh-TW", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })
        );
      },
      h = () => {
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
                        n.jsx(br, {
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
                                    onChange: (f) => s(f.target.checked),
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
                            n.jsx(mt, { size: 16, className: "mr-2" }),
                            "查看歷史",
                          ],
                        }),
                        n.jsxs("button", {
                          onClick: () => a(!0),
                          className:
                            "flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors text-sm",
                          children: [
                            n.jsx(pt, { size: 16, className: "mr-2" }),
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
                          n.jsx(br, {
                            size: 48,
                            className: "mx-auto text-gray-300 mb-2",
                          }),
                          n.jsx("p", { children: "暫無藥品通知" }),
                        ],
                      })
                    : e.map((f) => {
                        const [x, v] = [f.originalDrug, f.replacementDrug];
                        return n.jsxs(
                          "div",
                          {
                            className: `p-3 rounded-lg border ${u(f.priority)}`,
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
                                        children: v,
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
                                        children: ["原因: ", f.reason],
                                      }),
                                    ],
                                  }),
                                  n.jsxs("div", {
                                    className: "flex items-center",
                                    children: [
                                      n.jsx(Ys, {
                                        size: 14,
                                        className: "mr-2 text-gray-400",
                                      }),
                                      n.jsxs("span", {
                                        children: [
                                          "生效日期: ",
                                          c(f.effectiveDate),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          f.id || `${f.originalDrug}`
                        );
                      }),
              }),
            }),
          ],
        }),
        n.jsx(q0, { isOpen: l, onClose: () => a(!1), onSuccess: h }),
        n.jsx(Q0, { isOpen: i, onClose: () => o(!1), onSuccess: m }),
      ],
    });
  },
  G0 = ({ drugReplacements: e }) => {
    const [t, r] = b.useState(0),
      s = (u) => {
        switch (u) {
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
    b.useEffect(() => {
      if (e.length <= 1) return;
      const u = setInterval(() => {
        r((c) => (c + 1) % e.length);
      }, 8e3);
      return () => clearInterval(u);
    }, [e.length]);
    const l = (u) => {
      const c = new Date(u),
        h = new Date();
      return (
        c.getTime() - h.getTime(),
        c.toLocaleDateString("zh-TW", {
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
                n.jsx(br, { size: 20, className: "text-purple-600 mr-2" }),
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
                n.jsx(br, {
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
                  n.jsx(br, { size: 20, className: "text-purple-600 mr-2" }),
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
                      n.jsx(Ys, { size: 16, className: "mr-2 text-gray-400" }),
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
  }) =>
    t
      ? n.jsx(G0, { drugReplacements: e })
      : n.jsx(W0, {
          drugReplacements: e,
          onItemAdded: r,
          showInFocus: s,
          onFocusToggle: l,
        }),
  Y0 = ({ inventoryHighlights: e, showInFocus: t = !0, onFocusToggle: r }) => {
    const [s, l] = Ee.useState(!1);
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
                  n.jsx(ke, { size: 20, className: "text-blue-600 mr-2" }),
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
                    children: n.jsx(Tr, { size: 18 }),
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
                      n.jsx(ke, {
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
        n.jsx(hi, {
          isOpen: s,
          onClose: () => l(!1),
          sectionKey: "inventory",
          sectionTitle: "即時庫存重點",
        }),
      ],
    });
  },
  K0 = ({ inventoryHighlights: e }) => {
    const [t, r] = b.useState(0),
      l = (() => {
        const m = localStorage.getItem("focusTable_inventory_itemsPerPage");
        return m ? parseInt(m, 10) : 5;
      })();
    b.useEffect(() => {
      if (e.length <= l) return;
      const m = setInterval(() => {
        r((f) => {
          const x = f + l;
          return x >= e.length ? 0 : x;
        });
      }, 8e3);
      return () => clearInterval(m);
    }, [e.length, l]);
    const a = e.slice(t, t + l),
      i = Math.ceil(e.length / l),
      o = Math.floor(t / l) + 1,
      u = Array.from(
        new Set(e.flatMap((m) => (m.serverData || []).map((f) => f.serverName)))
      ).sort(),
      c = 40,
      h = u.length > 0 ? 60 / u.length : 20;
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
                    n.jsx(ke, { size: 20, className: "mr-2 text-blue-600" }),
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
                      n.jsx(ke, {
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
                          n.jsx("col", { style: { width: `${c}%` } }),
                          u.map((m) =>
                            n.jsx("col", { style: { width: `${h}%` } }, m)
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
                            u.map((m) =>
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
                        children: a.map((m, f) =>
                          n.jsxs(
                            "tr",
                            {
                              className: `border-b border-gray-200 transition-colors ${
                                f % 2 === 0
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
                                u.map((x) => {
                                  const v = (m.serverData || []).find(
                                      (I) => I.serverName === x
                                    ),
                                    y = v ? v.qty : 0;
                                  return n.jsx(
                                    "td",
                                    {
                                      className:
                                        "text-base py-1 px-3 whitespace-nowrap truncate text-center",
                                      children: n.jsx("div", {
                                        className:
                                          "font-semibold text-gray-700",
                                        children: y,
                                      }),
                                    },
                                    x
                                  );
                                }),
                              ],
                            },
                            `${t}-${f}`
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
  }) =>
    t
      ? n.jsx(K0, { inventoryHighlights: e })
      : n.jsx(Y0, { inventoryHighlights: e, showInFocus: r, onFocusToggle: s });
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
      this.loadSettings();
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
const ge = new X0(),
  J0 = ({ isOpen: e, onClose: t }) => {
    const [r, s] = b.useState(ge.getSelectedSound()),
      [l, a] = b.useState(ge.getRepeatCount()),
      [i, o] = b.useState(ge.getRepeatInterval()),
      [u, c] = b.useState(ge.getVolume()),
      [h, m] = b.useState(() => {
        const d = localStorage.getItem("internalRequests_displayMode");
        return d || "all";
      }),
      f = [
        { type: "ding", name: "叮咚聲", description: "單音清脆提示音" },
        { type: "chime", name: "鐘鈴聲", description: "雙音和諧提示音" },
        { type: "bell", name: "鈴聲", description: "三音漸進提示音" },
      ],
      x = (d) => {
        ge.playPreview(d);
      },
      v = (d) => {
        s(d), ge.setSelectedSound(d);
      },
      y = (d) => {
        a(d), ge.setRepeatCount(d);
      },
      I = (d) => {
        o(d), ge.setRepeatInterval(d);
      },
      g = (d) => {
        c(d), ge.setVolume(d);
      },
      p = (d) => {
        m(d),
          localStorage.setItem("internalRequests_displayMode", d),
          window.dispatchEvent(
            new CustomEvent("internalRequestsSettingChanged", {
              detail: { displayMode: d },
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
                    children: n.jsx(Ue, { size: 24 }),
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
                        children: f.map((d) =>
                          n.jsx(
                            "div",
                            {
                              className: `border-2 rounded-lg p-4 transition-all cursor-pointer ${
                                r === d.type
                                  ? "border-teal-500 bg-teal-50"
                                  : "border-gray-200 hover:border-gray-300"
                              }`,
                              onClick: () => v(d.type),
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
                                            children: d.name,
                                          }),
                                          r === d.type &&
                                            n.jsx(Kn, {
                                              size: 20,
                                              className: "text-teal-600",
                                            }),
                                        ],
                                      }),
                                      n.jsx("p", {
                                        className: "text-sm text-gray-600",
                                        children: d.description,
                                      }),
                                    ],
                                  }),
                                  n.jsx("button", {
                                    onClick: (j) => {
                                      j.stopPropagation(), x(d.type);
                                    },
                                    className:
                                      "ml-4 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors",
                                    title: "試聽音效",
                                    children: n.jsx(Am, {
                                      size: 20,
                                      className: "text-gray-700",
                                    }),
                                  }),
                                ],
                              }),
                            },
                            d.type
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
                                    children: [Math.round(u * 100), "%"],
                                  }),
                                ],
                              }),
                              n.jsx("input", {
                                type: "range",
                                min: "0",
                                max: "1",
                                step: "0.01",
                                value: u,
                                onChange: (d) => g(parseFloat(d.target.value)),
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
                                onChange: (d) => y(parseInt(d.target.value)),
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
                                  onChange: (d) =>
                                    I(parseFloat(d.target.value)),
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
                        children: "顯示設定",
                      }),
                      n.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          n.jsx("div", {
                            className: `border-2 rounded-lg p-4 transition-all cursor-pointer ${
                              h === "all"
                                ? "border-teal-500 bg-teal-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`,
                            onClick: () => p("all"),
                            children: n.jsx("div", {
                              className: "flex items-center justify-between",
                              children: n.jsxs("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                  n.jsx(Pm, {
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
                                          h === "all" &&
                                            n.jsx(Kn, {
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
                              h === "separate"
                                ? "border-teal-500 bg-teal-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`,
                            onClick: () => p("separate"),
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
                                          h === "separate" &&
                                            n.jsx(Kn, {
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
                              h === "urgentOnly"
                                ? "border-teal-500 bg-teal-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`,
                            onClick: () => p("urgentOnly"),
                            children: n.jsx("div", {
                              className: "flex items-center justify-between",
                              children: n.jsxs("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                  n.jsx(Ve, {
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
                                          h === "urgentOnly" &&
                                            n.jsx(Kn, {
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
    const [s, l] = b.useState(ge.getStatus()),
      [a, i] = b.useState(!1),
      o = b.useRef(new Set());
    b.useEffect(() => {
      const f = new Set();
      if (
        (e.forEach((v) => {
          v.state === "等待過帳" && v.actionType === "緊急申領" && f.add(v.id);
        }),
        Array.from(f).some((v) => !o.current.has(v)) && o.current.size > 0)
      ) {
        console.log("======= 通知音效發出 =======");
        try {
          ge.playNotification();
        } catch (v) {
          console.error(v), console.log(v);
        }
      }
      o.current = f;
    }, [e]);
    const u = () => {
        const f = ge.toggle();
        l(f);
      },
      c = (f, x) => {
        if (f === "等待過帳" && x === "緊急申領")
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
      h = (f) => {
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
      m = [...e].sort((f, x) => {
        if (f.state === "等待過帳" && f.actionType === "緊急申領") return -1;
        if (x.state === "等待過帳" && x.actionType === "緊急申領") return 1;
        const v = { 等待過帳: 0, 已過帳: 1, 已簽收: 2 },
          y = v[f.state],
          I = v[x.state];
        if (y !== I) return y - I;
        try {
          const g = new Date(f.requestTime.replace(/\//g, "-")).getTime();
          return new Date(x.requestTime.replace(/\//g, "-")).getTime() - g;
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
                    children: n.jsx(Tr, { size: 18 }),
                  }),
                  n.jsx("button", {
                    onClick: u,
                    className: `ml-2 p-2 rounded-lg transition-colors ${
                      s
                        ? "bg-green-100 text-green-600 hover:bg-green-200"
                        : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                    }`,
                    title: s ? "通知已啟用" : "通知已關閉",
                    children: s
                      ? n.jsx(Hu, { size: 18, className: "fill-current" })
                      : n.jsx(Bu, { size: 18 }),
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
              m.length === 0
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
                : m.map(
                    (f) => (
                      f.state === "等待過帳" && f.actionType,
                      n.jsxs(
                        "div",
                        {
                          className: `p-3 border-2 rounded-lg transition-colors ${c(
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
                                              n.jsx(Ve, {
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
                                        n.jsx(qu, {
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
                                        n.jsx(ke, {
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
                                    n.jsx(Ks, {
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
                                    n.jsx(zn, {
                                      size: 14,
                                      className: "mr-2 text-gray-400",
                                    }),
                                    n.jsxs("span", {
                                      children: [
                                        "申請時間: ",
                                        h(f.requestTime),
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
  ep = ({ internalRequests: e, gridHeight: t = 2 }) => {
    const [r, s] = b.useState(0),
      [l, a] = b.useState(0),
      [i, o] = b.useState(0),
      u = Math.min(5, Math.max(1, t - 1)),
      [c, h] = b.useState(ge.getStatus()),
      [m, f] = b.useState(() => {
        const w = localStorage.getItem("internalRequests_displayMode");
        return w || "all";
      }),
      x = b.useRef(new Set());
    b.useEffect(() => {
      console.log(
        "[InternalRequestsCarousel] Checking for new urgent requests, total requests:",
        e.length
      );
      const w = new Set();
      e.forEach((R) => {
        R.state === "等待過帳" &&
          R.actionType === "緊急申領" &&
          (w.add(R.id),
          console.log("[InternalRequestsCarousel] Found urgent request:", {
            id: R.id,
            name: R.name,
          }));
      }),
        console.log(
          "[InternalRequestsCarousel] Current urgent requests:",
          w.size
        ),
        console.log(
          "[InternalRequestsCarousel] Previous urgent requests:",
          x.current.size
        );
      const N = Array.from(w).filter((R) => !x.current.has(R)),
        T = N.length > 0;
      console.log(
        "[InternalRequestsCarousel] New urgent requests:",
        N.length,
        N
      ),
        console.log("[InternalRequestsCarousel] Has new urgent request:", T),
        console.log(
          "[InternalRequestsCarousel] Is first load:",
          x.current.size === 0
        ),
        T && x.current.size > 0
          ? (console.log(
              "======= [InternalRequestsCarousel] 觸發通知音效 ======="
            ),
            console.log(
              "[InternalRequestsCarousel] New urgent request IDs:",
              N
            ),
            (async () => {
              try {
                await ge.playNotification(),
                  console.log(
                    "[InternalRequestsCarousel] Notification sound played successfully"
                  );
              } catch (R) {
                console.error(
                  "[InternalRequestsCarousel] Failed to play notification:",
                  R
                );
              }
            })())
          : x.current.size === 0
          ? console.log(
              "[InternalRequestsCarousel] First load, skipping notification"
            )
          : T ||
            console.log(
              "[InternalRequestsCarousel] No new urgent requests, skipping notification"
            ),
        (x.current = w);
    }, [e]),
      b.useEffect(() => {
        const w = (N) => {
          var R;
          const T = N;
          ((R = T.detail) == null ? void 0 : R.displayMode) !== void 0 &&
            f(T.detail.displayMode);
        };
        return (
          window.addEventListener("internalRequestsSettingChanged", w),
          () => window.removeEventListener("internalRequestsSettingChanged", w)
        );
      }, []),
      b.useEffect(() => {
        if (m === "separate") {
          const w = e.filter((T) => T.actionType === "緊急申領"),
            N = e.filter((T) => T.actionType !== "緊急申領");
          if (w.length > u) {
            const T = setInterval(() => {
              a((R) => {
                const A = R + u;
                return A >= w.length ? 0 : A;
              });
            }, 6e3);
            return () => clearInterval(T);
          }
          if (N.length > u) {
            const T = setInterval(() => {
              o((R) => {
                const A = R + u;
                return A >= N.length ? 0 : A;
              });
            }, 6e3);
            return () => clearInterval(T);
          }
        } else {
          const w =
            m === "urgentOnly"
              ? e.filter((N) => N.actionType === "緊急申領")
              : e;
          if (w.length > u) {
            const N = setInterval(() => {
              s((T) => {
                const R = T + u;
                return R >= w.length ? 0 : R;
              });
            }, 6e3);
            return () => clearInterval(N);
          }
        }
      }, [e.length, m, e, u]);
    const v = () => {
        const w = ge.toggle();
        h(w);
      },
      y = (w, N) => {
        if (w === "等待過帳" && N === "緊急申領")
          return "bg-red-100 border-red-300";
        switch (w) {
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
      I = (w, N) => {
        if (w === "等待過帳" && N === "緊急申領") return "text-gray-800";
        switch (w) {
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
      g = (w) => {
        try {
          return new Date(w.replace(/\//g, "-")).toLocaleString("zh-TW", {
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          });
        } catch {
          return w;
        }
      },
      p = (w, N) => {
        const T = w.state === "等待過帳" && w.actionType === "緊急申領";
        return n.jsx("div", {
          className: "h-full flex flex-col",
          children: n.jsxs("div", {
            className: `flex-1 p-3 border-2 rounded-lg transition-all flex flex-col ${y(
              w.state,
              w.actionType
            )}`,
            children: [
              n.jsxs("div", {
                className: "flex items-start justify-between mb-1 gap-1",
                children: [
                  n.jsxs("div", {
                    className: "flex-1 min-w-0",
                    children: [
                      n.jsx("h4", {
                        className: `font-semibold text-lg ${I(
                          w.state,
                          w.actionType
                        )} leading-tight truncate mb-1`,
                        title: w.name,
                        children: w.name,
                      }),
                      n.jsx("div", {
                        className: `text-sm ${I(w.state, w.actionType)}`,
                        children: w.code,
                      }),
                    ],
                  }),
                  w.actionType === "緊急申領" &&
                    n.jsxs("div", {
                      className:
                        "inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-red-600 text-white flex-shrink-0",
                      children: [
                        n.jsx(Ve, { size: 12, className: "mr-1" }),
                        "緊急申領",
                      ],
                    }),
                ],
              }),
              n.jsxs("div", {
                className: `grid grid-cols-2 gap-1 text-base ${I(
                  w.state,
                  w.actionType
                )} flex-1 min-h-0`,
                children: [
                  n.jsxs("div", {
                    className: "space-y-1",
                    children: [
                      n.jsxs("div", {
                        className: "flex items-center min-w-0",
                        children: [
                          n.jsx(qu, {
                            size: 20,
                            className: `mr-2 flex-shrink-0 ${
                              T ? "text-gray-800" : "text-gray-400"
                            }`,
                          }),
                          n.jsx("span", {
                            className: "truncate",
                            children: n.jsx("strong", {
                              children: w.requestingUnit,
                            }),
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "flex items-center min-w-0",
                        children: [
                          n.jsx(Ks, {
                            size: 20,
                            className: `mr-2 flex-shrink-0 ${
                              T ? "text-gray-800" : "text-gray-400"
                            }`,
                          }),
                          n.jsx("span", {
                            className: "truncate",
                            children: n.jsx("strong", {
                              children: w.requestingPerson,
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
                          n.jsx(ke, {
                            size: 20,
                            className: `mr-2 ${
                              T ? "text-gray-800" : "text-gray-400"
                            }`,
                          }),
                          n.jsx("span", {
                            children: n.jsx("strong", {
                              children: w.requestedQuantity,
                            }),
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "flex items-center",
                        children: [
                          n.jsx(zn, {
                            size: 20,
                            className: `mr-2 ${
                              T ? "text-gray-800" : "text-gray-400"
                            }`,
                          }),
                          n.jsx("span", {
                            children: n.jsx("strong", {
                              children: g(w.requestTime),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              w.remarks &&
                n.jsxs("div", {
                  className: `mt-3 p-2 border rounded-lg text-base flex-shrink-0 ${
                    T
                      ? "bg-red-600 border-red-700 text-white"
                      : "bg-gray-50 border-gray-200 text-gray-700"
                  }`,
                  children: [
                    n.jsx("span", {
                      className: "font-medium",
                      children: "備註: ",
                    }),
                    n.jsx("span", { children: w.remarks }),
                  ],
                }),
            ],
          }),
        });
      },
      d = e.filter((w) => w.actionType === "緊急申領"),
      j = e.filter((w) => w.actionType !== "緊急申領");
    if (m === "urgentOnly" ? d.length === 0 : e.length === 0)
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
                  onClick: v,
                  className: `p-2 rounded-lg transition-colors ${
                    c
                      ? "bg-green-100 text-green-600 hover:bg-green-200"
                      : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                  }`,
                  title: c ? "通知已啟用" : "通知已關閉",
                  children: c
                    ? n.jsx(Hu, { size: 18, className: "fill-current" })
                    : n.jsx(Bu, { size: 18 }),
                }),
              ],
            }),
          }),
          n.jsx("div", {
            className: "flex-1 flex items-center justify-center",
            children: n.jsxs("div", {
              className: "text-center text-gray-500",
              children: [
                n.jsx(ke, {
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
    const _ = [...e].sort((w, N) => {
      if (w.state === "等待過帳" && w.actionType === "緊急申領") return -1;
      if (N.state === "等待過帳" && N.actionType === "緊急申領") return 1;
      const T = { 等待過帳: 0, 已過帳: 1, 已簽收: 2 },
        R = T[w.state],
        A = T[N.state];
      if (R !== A) return R - A;
      try {
        const ue = new Date(w.requestTime.replace(/\//g, "-")).getTime();
        return new Date(N.requestTime.replace(/\//g, "-")).getTime() - ue;
      } catch {
        return 0;
      }
    });
    if (m === "separate") {
      const w = d.slice(l, l + u),
        N = j.slice(i, i + u);
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
                      e.filter((T) => T.state === "等待過帳").length,
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
                        children: ["緊急申領 (", d.length, ")"],
                      }),
                      n.jsxs("div", {
                        children: [
                          "第 ",
                          Math.floor(l / u) + 1,
                          " / ",
                          Math.ceil(d.length / u),
                          " 頁",
                        ],
                      }),
                    ],
                  }),
                  n.jsx("div", {
                    className:
                      "flex-1 min-h-0 overflow-hidden flex flex-col gap-2",
                    children:
                      d.length === 0
                        ? n.jsx("div", {
                            className:
                              "h-full flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg",
                            children: n.jsx("p", {
                              className: "text-sm text-gray-400",
                              children: "暫無緊急申領",
                            }),
                          })
                        : w.map((T, R) =>
                            n.jsx(
                              "div",
                              { className: "flex-1 min-h-0", children: p(T) },
                              T.id
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
                        children: ["一般申領 (", j.length, ")"],
                      }),
                      n.jsxs("div", {
                        children: [
                          "第 ",
                          Math.floor(i / u) + 1,
                          " / ",
                          Math.ceil(j.length / u),
                          " 頁",
                        ],
                      }),
                    ],
                  }),
                  n.jsx("div", {
                    className:
                      "flex-1 min-h-0 overflow-hidden flex flex-col gap-2",
                    children:
                      j.length === 0
                        ? n.jsx("div", {
                            className:
                              "h-full flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg",
                            children: n.jsx("p", {
                              className: "text-sm text-gray-400",
                              children: "暫無一般申領",
                            }),
                          })
                        : N.map((T, R) =>
                            n.jsx(
                              "div",
                              { className: "flex-1 min-h-0", children: p(T) },
                              T.id
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
    const z =
        m === "urgentOnly" ? _.filter((w) => w.actionType === "緊急申領") : _,
      C = z.slice(r, r + u);
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
                            (w) =>
                              w.state === "等待過帳" &&
                              w.actionType === "緊急申領"
                          ).length
                        : e.filter((w) => w.state === "等待過帳").length,
                      " 項待處理",
                    ],
                  }),
                  n.jsxs("span", {
                    className: "text-sm text-gray-500 font-medium",
                    children: [
                      "第 ",
                      Math.floor(r / u) + 1,
                      " / ",
                      Math.ceil(z.length / u),
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
          children: C.map((w) =>
            n.jsx("div", { className: "flex-1 min-h-0", children: p(w) }, w.id)
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
  }) =>
    t
      ? n.jsx(ep, { internalRequests: e, gridHeight: l })
      : n.jsx(Z0, { internalRequests: e, showInFocus: r, onFocusToggle: s }),
  tp = ({
    isOpen: e,
    onClose: t,
    dashboardData: r,
    lastRefresh: s,
    sectionVisibility: l,
  }) => {
    const [a, i] = b.useState(new Date()),
      [o, u] = b.useState(D0());
    b.useEffect(() => {
      if (!e) return;
      const m = setInterval(() => {
        i(new Date());
      }, 1e3);
      return () => clearInterval(m);
    }, [e]),
      b.useEffect(() => {
        _0(o);
      }, [o]),
      b.useEffect(() => {
        const m = (f) => {
          f.key === "Escape" && t();
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
    const c = (m, f) => {
        u((x) => ({ ...x, [m]: { ...x[m], position: f } }));
      },
      h = (m, f) => {
        u((x) => ({ ...x, [m]: { ...x[m], ...f } }));
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
                          className: `text-blue-400 ${Eo.xlarge}`,
                        }),
                        n.jsx("h1", {
                          className: `${yt.subTitle} font-bold`,
                          children: "戰情白板 - 專注顯示模式",
                        }),
                      ],
                    }),
                    n.jsx("div", {
                      className: `${yt.subTitle} font-mono`,
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
                        className: `text-gray-300 ${yt.content}`,
                        children: ["最後更新: ", s.toLocaleTimeString("zh-TW")],
                      }),
                    n.jsx("button", {
                      onClick: t,
                      className:
                        "p-2 hover:bg-gray-700 rounded-lg transition-colors",
                      title: "退出專注模式 (ESC)",
                      children: n.jsx(Ue, { size: 24, className: Eo.xlarge }),
                    }),
                  ],
                }),
              ],
            }),
            n.jsx("div", {
              className: "flex-1 p-3 overflow-hidden",
              children: n.jsx("div", {
                className: "h-full grid grid-cols-8 grid-rows-6 gap-4",
                children: Object.entries(l).some(([m, f]) => f)
                  ? n.jsxs(n.Fragment, {
                      children: [
                        l.bulletins &&
                          n.jsx($t, {
                            sectionKey: "bulletins",
                            gridData: o.bulletins,
                            onPositionChange: c,
                            onSizeChange: h,
                            gridArea: At(o.bulletins.position, {
                              row: o.bulletins.row,
                              col: o.bulletins.col,
                            }),
                            children: n.jsx(Ku, {
                              bulletins: r.bulletins,
                              isFullscreen: !0,
                            }),
                          }),
                        l.tasks &&
                          n.jsx($t, {
                            sectionKey: "tasks",
                            gridData: o.tasks,
                            onPositionChange: c,
                            onSizeChange: h,
                            gridArea: At(o.tasks.position, {
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
                          n.jsx($t, {
                            sectionKey: "incomingDrugs",
                            gridData: o.incomingDrugs,
                            onPositionChange: c,
                            onSizeChange: h,
                            gridArea: At(o.incomingDrugs.position, {
                              row: o.incomingDrugs.row,
                              col: o.incomingDrugs.col,
                            }),
                            children: n.jsx(Ju, {
                              incomingDrugs: r.incomingDrugs,
                              isFullscreen: !0,
                            }),
                          }),
                        l.outOfStock &&
                          n.jsx($t, {
                            sectionKey: "outOfStock",
                            gridData: o.outOfStock,
                            onPositionChange: c,
                            onSizeChange: h,
                            gridArea: At(o.outOfStock.position, {
                              row: o.outOfStock.row,
                              col: o.outOfStock.col,
                            }),
                            children: n.jsx(Zu, {
                              outOfStockItems: r.outOfStockItems,
                              isFullscreen: !0,
                            }),
                          }),
                        l.drugReplacements &&
                          n.jsx($t, {
                            sectionKey: "drugReplacements",
                            gridData: o.drugReplacements,
                            onPositionChange: c,
                            onSizeChange: h,
                            gridArea: At(o.drugReplacements.position, {
                              row: o.drugReplacements.row,
                              col: o.drugReplacements.col,
                            }),
                            children: n.jsx(ed, {
                              drugReplacements: r.drugReplacements,
                              isFullscreen: !0,
                            }),
                          }),
                        l.inventory &&
                          n.jsx($t, {
                            sectionKey: "inventory",
                            gridData: o.inventory,
                            onPositionChange: c,
                            onSizeChange: h,
                            gridArea: At(o.inventory.position, {
                              row: o.inventory.row,
                              col: o.inventory.col,
                            }),
                            children: n.jsx(td, {
                              inventoryHighlights: r.inventoryHighlights,
                              isFullscreen: !0,
                            }),
                          }),
                        l.internalRequests &&
                          n.jsx($t, {
                            sectionKey: "internalRequests",
                            gridData: o.internalRequests,
                            onPositionChange: c,
                            onSizeChange: h,
                            gridArea: At(o.internalRequests.position, {
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
                            className: `${yt.title} mb-4`,
                            children: "👁️",
                          }),
                          n.jsx("p", {
                            className: yt.subTitle,
                            children: "所有區塊都已隱藏",
                          }),
                          n.jsx("p", {
                            className: `${yt.content} mt-2`,
                            children: "請在一般模式下開啟需要顯示的區塊",
                          }),
                        ],
                      }),
                    }),
              }),
            }),
            n.jsx("div", {
              className: `bg-gray-800 text-gray-300 text-center py-1 ${yt.smallLabel} border-t border-gray-700`,
              children:
                "按 ESC 鍵退出專注顯示模式 | 拖拽標題移動位置 | 拖拽右下角調整大小 | 內容每 8 秒自動輪播",
            }),
          ],
        })
      : null;
  },
  rp = () => {
    const { t: e } = Or(),
      [t, r] = b.useState(null),
      [s, l] = b.useState(!0),
      [a, i] = b.useState(null),
      [o, u] = b.useState(null),
      [c, h] = b.useState(!1),
      [m, f] = b.useState({
        bulletins: !0,
        tasks: !0,
        incomingDrugs: !0,
        outOfStock: !0,
        drugReplacements: !0,
        inventory: !0,
        internalRequests: !0,
      }),
      x = Tn(),
      v = x ? `${x.Name} - ${x.Employer}` : "鴻森智能科技 - 臨床藥事科";
    b.useEffect(() => {
      (async () => {
        try {
          const D = E0();
          f(D), await Yu(), await y();
        } catch (D) {
          console.error("Failed to initialize:", D),
            i("初始化失敗，請重新整理頁面");
        }
      })(),
        console.log(
          "[PrescriptionQueryPage] Setting up auto-refresh interval (20 seconds)"
        );
      const j = setInterval(() => {
        console.log(
          "[PrescriptionQueryPage] Auto-refresh triggered at",
          new Date().toLocaleTimeString()
        ),
          y();
      }, 1 * 20 * 1e3);
      return () => {
        console.log("[PrescriptionQueryPage] Clearing auto-refresh interval"),
          clearInterval(j);
      };
    }, []);
    const y = async () => {
        try {
          console.log("[PrescriptionQueryPage] Loading dashboard data..."),
            i(null);
          const d = await S0();
          console.log("[PrescriptionQueryPage] Dashboard data loaded:", {
            bulletins: d.bulletins.length,
            internalRequests: d.internalRequests.length,
            urgentRequests: d.internalRequests.filter(
              (j) => j.state === "等待過帳" && j.actionType === "緊急申領"
            ).length,
          }),
            r(d),
            u(new Date());
        } catch (d) {
          i("載入資料失敗，請稍後再試"),
            console.error(
              "[PrescriptionQueryPage] Failed to load dashboard data:",
              d
            );
        } finally {
          l(!1);
        }
      },
      I = () => {
        l(!0), y();
      },
      g = () => {
        y();
      },
      p = (d, j) => {
        const D = { ...m, [d]: j };
        f(D), z0(D);
      };
    return s && !t
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
                                const d = kl();
                                d != null &&
                                  d.homepage &&
                                  (window.location.href = `${d.homepage}/phar_system/frontpage/`);
                              },
                              className:
                                "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors group relative",
                              title: e("platform.title"),
                              children: [
                                n.jsx(Sl, { size: 24 }),
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
                                  children: v,
                                }),
                              ],
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-center space-x-4",
                          children: [n.jsx(Dl, {}), n.jsx(Cl, {})],
                        }),
                      ],
                    }),
                  }),
                  n.jsx("div", {
                    className: "flex items-center justify-center min-h-[400px]",
                    children: n.jsxs("div", {
                      className: "text-center",
                      children: [
                        n.jsx(Y, { size: "large" }),
                        n.jsx("p", {
                          className: "mt-4 text-gray-600",
                          children: "載入戰情白板資料中...",
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
      : a && !t
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
                                const d = kl();
                                d != null &&
                                  d.homepage &&
                                  (window.location.href = `${d.homepage}/phar_system/frontpage/`);
                              },
                              className:
                                "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors group relative",
                              title: e("platform.title"),
                              children: [
                                n.jsx(Sl, { size: 24 }),
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
                                  children: v,
                                }),
                              ],
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-center space-x-4",
                          children: [n.jsx(Dl, {}), n.jsx(Cl, {})],
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
                          children: a,
                        }),
                        n.jsx("button", {
                          onClick: I,
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
      : t
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
                                const d = kl();
                                d != null &&
                                  d.homepage &&
                                  (window.location.href = `${d.homepage}/phar_system/frontpage/`);
                              },
                              className:
                                "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors group relative",
                              title: e("platform.title"),
                              children: [
                                n.jsx(Sl, { size: 24 }),
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
                                  children: v,
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
                                o &&
                                  n.jsxs("span", {
                                    children: [
                                      "最後更新: ",
                                      o.toLocaleTimeString("zh-TW"),
                                    ],
                                  }),
                                n.jsx("button", {
                                  onClick: I,
                                  disabled: s,
                                  className:
                                    "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                                  title: "重新整理",
                                  children: n.jsx(br, {
                                    size: 16,
                                    className: s ? "animate-spin" : "",
                                  }),
                                }),
                              ],
                            }),
                            n.jsxs("button", {
                              onClick: () => h(!0),
                              className:
                                "flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors",
                              title: "專注顯示模式",
                              children: [
                                n.jsx(Om, { size: 16, className: "mr-2" }),
                                "專注顯示",
                              ],
                            }),
                            n.jsx(Dl, {}),
                            n.jsx(Cl, {}),
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
                        children: n.jsx(Ku, {
                          bulletins: t.bulletins,
                          onBulletinAdded: g,
                          showInFocus: m.bulletins,
                          onFocusToggle: (d) => p("bulletins", d),
                        }),
                      }),
                      n.jsx("div", {
                        className: "lg:col-span-2 xl:col-span-1",
                        children: n.jsx(Xu, {
                          restockTasks: t.restockTasks,
                          receivingTasks: t.receivingTasks,
                          putAwayTasks: t.putAwayTasks,
                          showInFocus: m.tasks,
                          onFocusToggle: (d) => p("tasks", d),
                        }),
                      }),
                      n.jsx("div", {
                        children: n.jsx(Ju, {
                          incomingDrugs: t.incomingDrugs,
                          showInFocus: m.incomingDrugs,
                          onFocusToggle: (d) => p("incomingDrugs", d),
                        }),
                      }),
                      n.jsx("div", {
                        children: n.jsx(Zu, {
                          outOfStockItems: t.outOfStockItems,
                          onItemAdded: g,
                          showInFocus: m.outOfStock,
                          onFocusToggle: (d) => p("outOfStock", d),
                        }),
                      }),
                      n.jsx("div", {
                        children: n.jsx(ed, {
                          drugReplacements: t.drugReplacements,
                          showInFocus: m.drugReplacements,
                          onFocusToggle: (d) => p("drugReplacements", d),
                        }),
                      }),
                      n.jsx("div", {
                        children: n.jsx(td, {
                          inventoryHighlights: t.inventoryHighlights,
                          showInFocus: m.inventory,
                          onFocusToggle: (d) => p("inventory", d),
                        }),
                      }),
                      n.jsx("div", {
                        className: "lg:col-span-2",
                        children: n.jsx(rd, {
                          internalRequests: t.internalRequests,
                          showInFocus: m.internalRequests,
                          onFocusToggle: (d) => p("internalRequests", d),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            n.jsx(tp, {
              isOpen: c,
              onClose: () => h(!1),
              dashboardData: t,
              lastRefresh: o,
              sectionVisibility: m,
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
  np = ({ onLogin: e }) => {
    const { t } = Or(),
      [r, s] = b.useState(""),
      [l, a] = b.useState(""),
      [i, o] = b.useState(null),
      [u, c] = b.useState(!1),
      h = async (m) => {
        m.preventDefault(), o(null), c(!0);
        try {
          const f = await Bm({ ID: r, Password: l });
          f.Code === 200
            ? (Hm(f.Data), e())
            : f.Code === -1 || f.Code === -2
            ? o(f.Result)
            : o(t("error.api"));
        } catch (f) {
          console.error("Login error:", f),
            o(f instanceof Error ? f.message : t("error.api"));
        } finally {
          c(!1);
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
                n.jsx(Ve, { size: 20 }),
                n.jsx("span", { children: i }),
              ],
            }),
          n.jsxs("form", {
            onSubmit: h,
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
                disabled: u,
                className: `w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center ${
                  u
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`,
                children: u
                  ? n.jsxs(n.Fragment, {
                      children: [
                        n.jsx(Y, { size: "small\\", className: "mr-2" }),
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
function sp() {
  const [e, t] = b.useState(!1),
    [r, s] = b.useState(!1),
    [l, a] = b.useState(!0);
  b.useEffect(() => {
    (async () => {
      try {
        await Yu(), t(!0);
        const u = Qm();
        s(u),
          console.log("Authentication check:", {
            authenticated: u,
            userSession: sessionStorage.getItem("user_session")
              ? "exists"
              : "missing",
          });
      } catch (u) {
        console.error("Failed to load configuration:", u);
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
    : n.jsx(Um, { children: r ? n.jsx(rp, {}) : n.jsx(np, { onLogin: i }) });
}
Uu(document.getElementById("root")).render(
  n.jsx(b.StrictMode, { children: n.jsx(sp, {}) })
);
