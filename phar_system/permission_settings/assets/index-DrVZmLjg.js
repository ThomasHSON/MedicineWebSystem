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
var Xu = { exports: {} },
  nl = {},
  Gu = { exports: {} },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xn = Symbol.for("react.element"),
  fc = Symbol.for("react.portal"),
  dc = Symbol.for("react.fragment"),
  pc = Symbol.for("react.strict_mode"),
  mc = Symbol.for("react.profiler"),
  hc = Symbol.for("react.provider"),
  vc = Symbol.for("react.context"),
  gc = Symbol.for("react.forward_ref"),
  yc = Symbol.for("react.suspense"),
  wc = Symbol.for("react.memo"),
  Sc = Symbol.for("react.lazy"),
  $i = Symbol.iterator;
function kc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = ($i && e[$i]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Zu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ju = Object.assign,
  qu = {};
function ln(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = qu),
    (this.updater = n || Zu);
}
ln.prototype.isReactComponent = {};
ln.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ln.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function bu() {}
bu.prototype = ln.prototype;
function Ho(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = qu),
    (this.updater = n || Zu);
}
var Wo = (Ho.prototype = new bu());
Wo.constructor = Ho;
Ju(Wo, ln.prototype);
Wo.isPureReactComponent = !0;
var Ai = Array.isArray,
  es = Object.prototype.hasOwnProperty,
  Qo = { current: null },
  ts = { key: !0, ref: !0, __self: !0, __source: !0 };
function ns(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      es.call(t, r) && !ts.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Xn,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Qo.current,
  };
}
function xc(e, t) {
  return {
    $$typeof: Xn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ko(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xn;
}
function Ec(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Bi = /\/+/g;
function El(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Ec("" + e.key)
    : t.toString(36);
}
function wr(e, t, n, r, l) {
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
          case Xn:
          case fc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + El(i, 0) : r),
      Ai(l)
        ? ((n = ""),
          e != null && (n = e.replace(Bi, "$&/") + "/"),
          wr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Ko(l) &&
            (l = xc(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Bi, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Ai(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + El(o, u);
      i += wr(o, t, n, s, l);
    }
  else if (((s = kc(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + El(o, u++)), (i += wr(o, t, n, s, l));
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
function nr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    wr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Cc(e) {
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
var se = { current: null },
  Sr = { transition: null },
  Nc = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: Sr,
    ReactCurrentOwner: Qo,
  };
function rs() {
  throw Error("act(...) is not supported in production builds of React.");
}
T.Children = {
  map: nr,
  forEach: function (e, t, n) {
    nr(
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
      nr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      nr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ko(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
T.Component = ln;
T.Fragment = dc;
T.Profiler = mc;
T.PureComponent = Ho;
T.StrictMode = pc;
T.Suspense = yc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nc;
T.act = rs;
T.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ju({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Qo.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      es.call(t, s) &&
        !ts.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: Xn, type: e.type, key: l, ref: o, props: r, _owner: i };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: vc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: hc, _context: e }),
    (e.Consumer = e)
  );
};
T.createElement = ns;
T.createFactory = function (e) {
  var t = ns.bind(null, e);
  return (t.type = e), t;
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: gc, render: e };
};
T.isValidElement = Ko;
T.lazy = function (e) {
  return { $$typeof: Sc, _payload: { _status: -1, _result: e }, _init: Cc };
};
T.memo = function (e, t) {
  return { $$typeof: wc, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function (e) {
  var t = Sr.transition;
  Sr.transition = {};
  try {
    e();
  } finally {
    Sr.transition = t;
  }
};
T.unstable_act = rs;
T.useCallback = function (e, t) {
  return se.current.useCallback(e, t);
};
T.useContext = function (e) {
  return se.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return se.current.useDeferredValue(e);
};
T.useEffect = function (e, t) {
  return se.current.useEffect(e, t);
};
T.useId = function () {
  return se.current.useId();
};
T.useImperativeHandle = function (e, t, n) {
  return se.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function (e, t) {
  return se.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function (e, t) {
  return se.current.useLayoutEffect(e, t);
};
T.useMemo = function (e, t) {
  return se.current.useMemo(e, t);
};
T.useReducer = function (e, t, n) {
  return se.current.useReducer(e, t, n);
};
T.useRef = function (e) {
  return se.current.useRef(e);
};
T.useState = function (e) {
  return se.current.useState(e);
};
T.useSyncExternalStore = function (e, t, n) {
  return se.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function () {
  return se.current.useTransition();
};
T.version = "18.3.1";
Gu.exports = T;
var H = Gu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _c = H,
  Pc = Symbol.for("react.element"),
  Lc = Symbol.for("react.fragment"),
  zc = Object.prototype.hasOwnProperty,
  Tc = _c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  jc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ls(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) zc.call(t, r) && !jc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Pc,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Tc.current,
  };
}
nl.Fragment = Lc;
nl.jsx = ls;
nl.jsxs = ls;
Xu.exports = nl;
var k = Xu.exports,
  os = { exports: {} },
  we = {},
  is = { exports: {} },
  us = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, L) {
    var z = C.length;
    C.push(L);
    e: for (; 0 < z; ) {
      var Q = (z - 1) >>> 1,
        Z = C[Q];
      if (0 < l(Z, L)) (C[Q] = L), (C[z] = Z), (z = Q);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var L = C[0],
      z = C.pop();
    if (z !== L) {
      C[0] = z;
      e: for (var Q = 0, Z = C.length, er = Z >>> 1; Q < er; ) {
        var vt = 2 * (Q + 1) - 1,
          xl = C[vt],
          gt = vt + 1,
          tr = C[gt];
        if (0 > l(xl, z))
          gt < Z && 0 > l(tr, xl)
            ? ((C[Q] = tr), (C[gt] = z), (Q = gt))
            : ((C[Q] = xl), (C[vt] = z), (Q = vt));
        else if (gt < Z && 0 > l(tr, z)) (C[Q] = tr), (C[gt] = z), (Q = gt);
        else break e;
      }
    }
    return L;
  }
  function l(C, L) {
    var z = C.sortIndex - L.sortIndex;
    return z !== 0 ? z : C.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    c = [],
    h = 1,
    m = null,
    p = 3,
    v = !1,
    w = !1,
    S = !1,
    D = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(C) {
    for (var L = n(c); L !== null; ) {
      if (L.callback === null) r(c);
      else if (L.startTime <= C)
        r(c), (L.sortIndex = L.expirationTime), t(s, L);
      else break;
      L = n(c);
    }
  }
  function g(C) {
    if (((S = !1), d(C), !w))
      if (n(s) !== null) (w = !0), Sl(E);
      else {
        var L = n(c);
        L !== null && kl(g, L.startTime - C);
      }
  }
  function E(C, L) {
    (w = !1), S && ((S = !1), f(P), (P = -1)), (v = !0);
    var z = p;
    try {
      for (
        d(L), m = n(s);
        m !== null && (!(m.expirationTime > L) || (C && !Pe()));

      ) {
        var Q = m.callback;
        if (typeof Q == "function") {
          (m.callback = null), (p = m.priorityLevel);
          var Z = Q(m.expirationTime <= L);
          (L = e.unstable_now()),
            typeof Z == "function" ? (m.callback = Z) : m === n(s) && r(s),
            d(L);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var er = !0;
      else {
        var vt = n(c);
        vt !== null && kl(g, vt.startTime - L), (er = !1);
      }
      return er;
    } finally {
      (m = null), (p = z), (v = !1);
    }
  }
  var N = !1,
    _ = null,
    P = -1,
    W = 5,
    j = -1;
  function Pe() {
    return !(e.unstable_now() - j < W);
  }
  function sn() {
    if (_ !== null) {
      var C = e.unstable_now();
      j = C;
      var L = !0;
      try {
        L = _(!0, C);
      } finally {
        L ? an() : ((N = !1), (_ = null));
      }
    } else N = !1;
  }
  var an;
  if (typeof a == "function")
    an = function () {
      a(sn);
    };
  else if (typeof MessageChannel < "u") {
    var Ui = new MessageChannel(),
      cc = Ui.port2;
    (Ui.port1.onmessage = sn),
      (an = function () {
        cc.postMessage(null);
      });
  } else
    an = function () {
      D(sn, 0);
    };
  function Sl(C) {
    (_ = C), N || ((N = !0), an());
  }
  function kl(C, L) {
    P = D(function () {
      C(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || v || ((w = !0), Sl(E));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (W = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (C) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = p;
      }
      var z = p;
      p = L;
      try {
        return C();
      } finally {
        p = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, L) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var z = p;
      p = C;
      try {
        return L();
      } finally {
        p = z;
      }
    }),
    (e.unstable_scheduleCallback = function (C, L, z) {
      var Q = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? Q + z : Q))
          : (z = Q),
        C)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = z + Z),
        (C = {
          id: h++,
          callback: L,
          priorityLevel: C,
          startTime: z,
          expirationTime: Z,
          sortIndex: -1,
        }),
        z > Q
          ? ((C.sortIndex = z),
            t(c, C),
            n(s) === null &&
              C === n(c) &&
              (S ? (f(P), (P = -1)) : (S = !0), kl(g, z - Q)))
          : ((C.sortIndex = Z), t(s, C), w || v || ((w = !0), Sl(E))),
        C
      );
    }),
    (e.unstable_shouldYield = Pe),
    (e.unstable_wrapCallback = function (C) {
      var L = p;
      return function () {
        var z = p;
        p = L;
        try {
          return C.apply(this, arguments);
        } finally {
          p = z;
        }
      };
    });
})(us);
is.exports = us;
var Rc = is.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oc = H,
  ye = Rc;
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
var ss = new Set(),
  jn = {};
function Tt(e, t) {
  Jt(e, t), Jt(e + "Capture", t);
}
function Jt(e, t) {
  for (jn[e] = t, e = 0; e < t.length; e++) ss.add(t[e]);
}
var Qe = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Zl = Object.prototype.hasOwnProperty,
  Dc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Vi = {},
  Hi = {};
function Ic(e) {
  return Zl.call(Hi, e)
    ? !0
    : Zl.call(Vi, e)
    ? !1
    : Dc.test(e)
    ? (Hi[e] = !0)
    : ((Vi[e] = !0), !1);
}
function Mc(e, t, n, r) {
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
function Fc(e, t, n, r) {
  if (t === null || typeof t > "u" || Mc(e, t, n, r)) return !0;
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
function ae(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  te[t] = new ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  te[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    te[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  te[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  te[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  te[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  te[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Yo = /[\-:]([a-z])/g;
function Xo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yo, Xo);
    te[t] = new ae(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yo, Xo);
    te[t] = new ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Yo, Xo);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Go(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Fc(t, n, l, r) && (n = null),
    r || l === null
      ? Ic(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Ge = Oc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  rr = Symbol.for("react.element"),
  Ot = Symbol.for("react.portal"),
  Dt = Symbol.for("react.fragment"),
  Zo = Symbol.for("react.strict_mode"),
  Jl = Symbol.for("react.profiler"),
  as = Symbol.for("react.provider"),
  cs = Symbol.for("react.context"),
  Jo = Symbol.for("react.forward_ref"),
  ql = Symbol.for("react.suspense"),
  bl = Symbol.for("react.suspense_list"),
  qo = Symbol.for("react.memo"),
  Je = Symbol.for("react.lazy"),
  fs = Symbol.for("react.offscreen"),
  Wi = Symbol.iterator;
function cn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Wi && e[Wi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var B = Object.assign,
  Cl;
function yn(e) {
  if (Cl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Cl = (t && t[1]) || "";
    }
  return (
    `
` +
    Cl +
    e
  );
}
var Nl = !1;
function _l(e, t) {
  if (!e || Nl) return "";
  Nl = !0;
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
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Nl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? yn(e) : "";
}
function Uc(e) {
  switch (e.tag) {
    case 5:
      return yn(e.type);
    case 16:
      return yn("Lazy");
    case 13:
      return yn("Suspense");
    case 19:
      return yn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = _l(e.type, !1)), e;
    case 11:
      return (e = _l(e.type.render, !1)), e;
    case 1:
      return (e = _l(e.type, !0)), e;
    default:
      return "";
  }
}
function eo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Dt:
      return "Fragment";
    case Ot:
      return "Portal";
    case Jl:
      return "Profiler";
    case Zo:
      return "StrictMode";
    case ql:
      return "Suspense";
    case bl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case cs:
        return (e.displayName || "Context") + ".Consumer";
      case as:
        return (e._context.displayName || "Context") + ".Provider";
      case Jo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case qo:
        return (
          (t = e.displayName || null), t !== null ? t : eo(e.type) || "Memo"
        );
      case Je:
        (t = e._payload), (e = e._init);
        try {
          return eo(e(t));
        } catch {}
    }
  return null;
}
function $c(e) {
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
      return eo(t);
    case 8:
      return t === Zo ? "StrictMode" : "Mode";
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
function ft(e) {
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
function ds(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ac(e) {
  var t = ds(e) ? "checked" : "value",
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
function lr(e) {
  e._valueTracker || (e._valueTracker = Ac(e));
}
function ps(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ds(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function jr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function to(e, t) {
  var n = t.checked;
  return B({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Qi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ft(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ms(e, t) {
  (t = t.checked), t != null && Go(e, "checked", t, !1);
}
function no(e, t) {
  ms(e, t);
  var n = ft(t.value),
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
    ? ro(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ro(e, t.type, ft(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ki(e, t, n) {
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
function ro(e, t, n) {
  (t !== "number" || jr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var wn = Array.isArray;
function Qt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ft(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function lo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return B({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Yi(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (wn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ft(n) };
}
function hs(e, t) {
  var n = ft(t.value),
    r = ft(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Xi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function vs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function oo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? vs(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var or,
  gs = (function (e) {
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
        or = or || document.createElement("div"),
          or.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = or.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Rn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var xn = {
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
  Bc = ["Webkit", "ms", "Moz", "O"];
Object.keys(xn).forEach(function (e) {
  Bc.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (xn[t] = xn[e]);
  });
});
function ys(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (xn.hasOwnProperty(e) && xn[e])
    ? ("" + t).trim()
    : t + "px";
}
function ws(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = ys(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Vc = B(
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
function io(e, t) {
  if (t) {
    if (Vc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function uo(e, t) {
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
var so = null;
function bo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ao = null,
  Kt = null,
  Yt = null;
function Gi(e) {
  if ((e = Jn(e))) {
    if (typeof ao != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = ul(t)), ao(e.stateNode, e.type, t));
  }
}
function Ss(e) {
  Kt ? (Yt ? Yt.push(e) : (Yt = [e])) : (Kt = e);
}
function ks() {
  if (Kt) {
    var e = Kt,
      t = Yt;
    if (((Yt = Kt = null), Gi(e), t)) for (e = 0; e < t.length; e++) Gi(t[e]);
  }
}
function xs(e, t) {
  return e(t);
}
function Es() {}
var Pl = !1;
function Cs(e, t, n) {
  if (Pl) return e(t, n);
  Pl = !0;
  try {
    return xs(e, t, n);
  } finally {
    (Pl = !1), (Kt !== null || Yt !== null) && (Es(), ks());
  }
}
function On(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ul(n);
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
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var co = !1;
if (Qe)
  try {
    var fn = {};
    Object.defineProperty(fn, "passive", {
      get: function () {
        co = !0;
      },
    }),
      window.addEventListener("test", fn, fn),
      window.removeEventListener("test", fn, fn);
  } catch {
    co = !1;
  }
function Hc(e, t, n, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var En = !1,
  Rr = null,
  Or = !1,
  fo = null,
  Wc = {
    onError: function (e) {
      (En = !0), (Rr = e);
    },
  };
function Qc(e, t, n, r, l, o, i, u, s) {
  (En = !1), (Rr = null), Hc.apply(Wc, arguments);
}
function Kc(e, t, n, r, l, o, i, u, s) {
  if ((Qc.apply(this, arguments), En)) {
    if (En) {
      var c = Rr;
      (En = !1), (Rr = null);
    } else throw Error(y(198));
    Or || ((Or = !0), (fo = c));
  }
}
function jt(e) {
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
function Ns(e) {
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
function Zi(e) {
  if (jt(e) !== e) throw Error(y(188));
}
function Yc(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = jt(e)), t === null)) throw Error(y(188));
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
        if (o === n) return Zi(l), e;
        if (o === r) return Zi(l), t;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function _s(e) {
  return (e = Yc(e)), e !== null ? Ps(e) : null;
}
function Ps(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ps(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ls = ye.unstable_scheduleCallback,
  Ji = ye.unstable_cancelCallback,
  Xc = ye.unstable_shouldYield,
  Gc = ye.unstable_requestPaint,
  K = ye.unstable_now,
  Zc = ye.unstable_getCurrentPriorityLevel,
  ei = ye.unstable_ImmediatePriority,
  zs = ye.unstable_UserBlockingPriority,
  Dr = ye.unstable_NormalPriority,
  Jc = ye.unstable_LowPriority,
  Ts = ye.unstable_IdlePriority,
  rl = null,
  Ue = null;
function qc(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == "function")
    try {
      Ue.onCommitFiberRoot(rl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Re = Math.clz32 ? Math.clz32 : tf,
  bc = Math.log,
  ef = Math.LN2;
function tf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((bc(e) / ef) | 0)) | 0;
}
var ir = 64,
  ur = 4194304;
function Sn(e) {
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
function Ir(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = Sn(u)) : ((o &= i), o !== 0 && (r = Sn(o)));
  } else (i = n & ~l), i !== 0 ? (r = Sn(i)) : o !== 0 && (r = Sn(o));
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
      (n = 31 - Re(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function nf(e, t) {
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
function rf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Re(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = nf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function po(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function js() {
  var e = ir;
  return (ir <<= 1), !(ir & 4194240) && (ir = 64), e;
}
function Ll(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Gn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Re(t)),
    (e[t] = n);
}
function lf(e, t) {
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
    var l = 31 - Re(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function ti(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Re(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var O = 0;
function Rs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Os,
  ni,
  Ds,
  Is,
  Ms,
  mo = !1,
  sr = [],
  rt = null,
  lt = null,
  ot = null,
  Dn = new Map(),
  In = new Map(),
  be = [],
  of =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function qi(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      rt = null;
      break;
    case "dragenter":
    case "dragleave":
      lt = null;
      break;
    case "mouseover":
    case "mouseout":
      ot = null;
      break;
    case "pointerover":
    case "pointerout":
      Dn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      In.delete(t.pointerId);
  }
}
function dn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = Jn(t)), t !== null && ni(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function uf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (rt = dn(rt, e, t, n, r, l)), !0;
    case "dragenter":
      return (lt = dn(lt, e, t, n, r, l)), !0;
    case "mouseover":
      return (ot = dn(ot, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Dn.set(o, dn(Dn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), In.set(o, dn(In.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Fs(e) {
  var t = St(e.target);
  if (t !== null) {
    var n = jt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ns(n)), t !== null)) {
          (e.blockedOn = t),
            Ms(e.priority, function () {
              Ds(n);
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
function kr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ho(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (so = r), n.target.dispatchEvent(r), (so = null);
    } else return (t = Jn(n)), t !== null && ni(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function bi(e, t, n) {
  kr(e) && n.delete(t);
}
function sf() {
  (mo = !1),
    rt !== null && kr(rt) && (rt = null),
    lt !== null && kr(lt) && (lt = null),
    ot !== null && kr(ot) && (ot = null),
    Dn.forEach(bi),
    In.forEach(bi);
}
function pn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    mo ||
      ((mo = !0),
      ye.unstable_scheduleCallback(ye.unstable_NormalPriority, sf)));
}
function Mn(e) {
  function t(l) {
    return pn(l, e);
  }
  if (0 < sr.length) {
    pn(sr[0], e);
    for (var n = 1; n < sr.length; n++) {
      var r = sr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    rt !== null && pn(rt, e),
      lt !== null && pn(lt, e),
      ot !== null && pn(ot, e),
      Dn.forEach(t),
      In.forEach(t),
      n = 0;
    n < be.length;
    n++
  )
    (r = be[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < be.length && ((n = be[0]), n.blockedOn === null); )
    Fs(n), n.blockedOn === null && be.shift();
}
var Xt = Ge.ReactCurrentBatchConfig,
  Mr = !0;
function af(e, t, n, r) {
  var l = O,
    o = Xt.transition;
  Xt.transition = null;
  try {
    (O = 1), ri(e, t, n, r);
  } finally {
    (O = l), (Xt.transition = o);
  }
}
function cf(e, t, n, r) {
  var l = O,
    o = Xt.transition;
  Xt.transition = null;
  try {
    (O = 4), ri(e, t, n, r);
  } finally {
    (O = l), (Xt.transition = o);
  }
}
function ri(e, t, n, r) {
  if (Mr) {
    var l = ho(e, t, n, r);
    if (l === null) Ul(e, t, r, Fr, n), qi(e, r);
    else if (uf(l, e, t, n, r)) r.stopPropagation();
    else if ((qi(e, r), t & 4 && -1 < of.indexOf(e))) {
      for (; l !== null; ) {
        var o = Jn(l);
        if (
          (o !== null && Os(o),
          (o = ho(e, t, n, r)),
          o === null && Ul(e, t, r, Fr, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Ul(e, t, r, null, n);
  }
}
var Fr = null;
function ho(e, t, n, r) {
  if (((Fr = null), (e = bo(r)), (e = St(e)), e !== null))
    if (((t = jt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ns(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Fr = e), null;
}
function Us(e) {
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
      switch (Zc()) {
        case ei:
          return 1;
        case zs:
          return 4;
        case Dr:
        case Jc:
          return 16;
        case Ts:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tt = null,
  li = null,
  xr = null;
function $s() {
  if (xr) return xr;
  var e,
    t = li,
    n = t.length,
    r,
    l = "value" in tt ? tt.value : tt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (xr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Er(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ar() {
  return !0;
}
function eu() {
  return !1;
}
function Se(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? ar
        : eu),
      (this.isPropagationStopped = eu),
      this
    );
  }
  return (
    B(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ar));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ar));
      },
      persist: function () {},
      isPersistent: ar,
    }),
    t
  );
}
var on = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  oi = Se(on),
  Zn = B({}, on, { view: 0, detail: 0 }),
  ff = Se(Zn),
  zl,
  Tl,
  mn,
  ll = B({}, Zn, {
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
    getModifierState: ii,
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
        : (e !== mn &&
            (mn && e.type === "mousemove"
              ? ((zl = e.screenX - mn.screenX), (Tl = e.screenY - mn.screenY))
              : (Tl = zl = 0),
            (mn = e)),
          zl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Tl;
    },
  }),
  tu = Se(ll),
  df = B({}, ll, { dataTransfer: 0 }),
  pf = Se(df),
  mf = B({}, Zn, { relatedTarget: 0 }),
  jl = Se(mf),
  hf = B({}, on, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vf = Se(hf),
  gf = B({}, on, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  yf = Se(gf),
  wf = B({}, on, { data: 0 }),
  nu = Se(wf),
  Sf = {
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
  kf = {
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
  xf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Ef(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = xf[e]) ? !!t[e] : !1;
}
function ii() {
  return Ef;
}
var Cf = B({}, Zn, {
    key: function (e) {
      if (e.key) {
        var t = Sf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Er(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? kf[e.keyCode] || "Unidentified"
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
    getModifierState: ii,
    charCode: function (e) {
      return e.type === "keypress" ? Er(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Er(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Nf = Se(Cf),
  _f = B({}, ll, {
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
  ru = Se(_f),
  Pf = B({}, Zn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ii,
  }),
  Lf = Se(Pf),
  zf = B({}, on, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Tf = Se(zf),
  jf = B({}, ll, {
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
  Rf = Se(jf),
  Of = [9, 13, 27, 32],
  ui = Qe && "CompositionEvent" in window,
  Cn = null;
Qe && "documentMode" in document && (Cn = document.documentMode);
var Df = Qe && "TextEvent" in window && !Cn,
  As = Qe && (!ui || (Cn && 8 < Cn && 11 >= Cn)),
  lu = " ",
  ou = !1;
function Bs(e, t) {
  switch (e) {
    case "keyup":
      return Of.indexOf(t.keyCode) !== -1;
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
function Vs(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var It = !1;
function If(e, t) {
  switch (e) {
    case "compositionend":
      return Vs(t);
    case "keypress":
      return t.which !== 32 ? null : ((ou = !0), lu);
    case "textInput":
      return (e = t.data), e === lu && ou ? null : e;
    default:
      return null;
  }
}
function Mf(e, t) {
  if (It)
    return e === "compositionend" || (!ui && Bs(e, t))
      ? ((e = $s()), (xr = li = tt = null), (It = !1), e)
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
      return As && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ff = {
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
  return t === "input" ? !!Ff[e.type] : t === "textarea";
}
function Hs(e, t, n, r) {
  Ss(r),
    (t = Ur(t, "onChange")),
    0 < t.length &&
      ((n = new oi("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Nn = null,
  Fn = null;
function Uf(e) {
  ea(e, 0);
}
function ol(e) {
  var t = Ut(e);
  if (ps(t)) return e;
}
function $f(e, t) {
  if (e === "change") return t;
}
var Ws = !1;
if (Qe) {
  var Rl;
  if (Qe) {
    var Ol = "oninput" in document;
    if (!Ol) {
      var uu = document.createElement("div");
      uu.setAttribute("oninput", "return;"),
        (Ol = typeof uu.oninput == "function");
    }
    Rl = Ol;
  } else Rl = !1;
  Ws = Rl && (!document.documentMode || 9 < document.documentMode);
}
function su() {
  Nn && (Nn.detachEvent("onpropertychange", Qs), (Fn = Nn = null));
}
function Qs(e) {
  if (e.propertyName === "value" && ol(Fn)) {
    var t = [];
    Hs(t, Fn, e, bo(e)), Cs(Uf, t);
  }
}
function Af(e, t, n) {
  e === "focusin"
    ? (su(), (Nn = t), (Fn = n), Nn.attachEvent("onpropertychange", Qs))
    : e === "focusout" && su();
}
function Bf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ol(Fn);
}
function Vf(e, t) {
  if (e === "click") return ol(t);
}
function Hf(e, t) {
  if (e === "input" || e === "change") return ol(t);
}
function Wf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var De = typeof Object.is == "function" ? Object.is : Wf;
function Un(e, t) {
  if (De(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Zl.call(t, l) || !De(e[l], t[l])) return !1;
  }
  return !0;
}
function au(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function cu(e, t) {
  var n = au(e);
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
    n = au(n);
  }
}
function Ks(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ks(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ys() {
  for (var e = window, t = jr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = jr(e.document);
  }
  return t;
}
function si(e) {
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
function Qf(e) {
  var t = Ys(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ks(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && si(n)) {
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
          (l = cu(n, o));
        var i = cu(n, r);
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
var Kf = Qe && "documentMode" in document && 11 >= document.documentMode,
  Mt = null,
  vo = null,
  _n = null,
  go = !1;
function fu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  go ||
    Mt == null ||
    Mt !== jr(r) ||
    ((r = Mt),
    "selectionStart" in r && si(r)
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
    (_n && Un(_n, r)) ||
      ((_n = r),
      (r = Ur(vo, "onSelect")),
      0 < r.length &&
        ((t = new oi("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Mt))));
}
function cr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ft = {
    animationend: cr("Animation", "AnimationEnd"),
    animationiteration: cr("Animation", "AnimationIteration"),
    animationstart: cr("Animation", "AnimationStart"),
    transitionend: cr("Transition", "TransitionEnd"),
  },
  Dl = {},
  Xs = {};
Qe &&
  ((Xs = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ft.animationend.animation,
    delete Ft.animationiteration.animation,
    delete Ft.animationstart.animation),
  "TransitionEvent" in window || delete Ft.transitionend.transition);
function il(e) {
  if (Dl[e]) return Dl[e];
  if (!Ft[e]) return e;
  var t = Ft[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Xs) return (Dl[e] = t[n]);
  return e;
}
var Gs = il("animationend"),
  Zs = il("animationiteration"),
  Js = il("animationstart"),
  qs = il("transitionend"),
  bs = new Map(),
  du =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function pt(e, t) {
  bs.set(e, t), Tt(t, [e]);
}
for (var Il = 0; Il < du.length; Il++) {
  var Ml = du[Il],
    Yf = Ml.toLowerCase(),
    Xf = Ml[0].toUpperCase() + Ml.slice(1);
  pt(Yf, "on" + Xf);
}
pt(Gs, "onAnimationEnd");
pt(Zs, "onAnimationIteration");
pt(Js, "onAnimationStart");
pt("dblclick", "onDoubleClick");
pt("focusin", "onFocus");
pt("focusout", "onBlur");
pt(qs, "onTransitionEnd");
Jt("onMouseEnter", ["mouseout", "mouseover"]);
Jt("onMouseLeave", ["mouseout", "mouseover"]);
Jt("onPointerEnter", ["pointerout", "pointerover"]);
Jt("onPointerLeave", ["pointerout", "pointerover"]);
Tt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Tt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Tt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Tt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Tt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var kn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Gf = new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));
function pu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Kc(r, t, void 0, e), (e.currentTarget = null);
}
function ea(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          pu(l, u, c), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          pu(l, u, c), (o = s);
        }
    }
  }
  if (Or) throw ((e = fo), (Or = !1), (fo = null), e);
}
function M(e, t) {
  var n = t[xo];
  n === void 0 && (n = t[xo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ta(t, e, 2, !1), n.add(r));
}
function Fl(e, t, n) {
  var r = 0;
  t && (r |= 4), ta(n, e, r, t);
}
var fr = "_reactListening" + Math.random().toString(36).slice(2);
function $n(e) {
  if (!e[fr]) {
    (e[fr] = !0),
      ss.forEach(function (n) {
        n !== "selectionchange" && (Gf.has(n) || Fl(n, !1, e), Fl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[fr] || ((t[fr] = !0), Fl("selectionchange", !1, t));
  }
}
function ta(e, t, n, r) {
  switch (Us(t)) {
    case 1:
      var l = af;
      break;
    case 4:
      l = cf;
      break;
    default:
      l = ri;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !co ||
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
function Ul(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = St(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Cs(function () {
    var c = o,
      h = bo(n),
      m = [];
    e: {
      var p = bs.get(e);
      if (p !== void 0) {
        var v = oi,
          w = e;
        switch (e) {
          case "keypress":
            if (Er(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Nf;
            break;
          case "focusin":
            (w = "focus"), (v = jl);
            break;
          case "focusout":
            (w = "blur"), (v = jl);
            break;
          case "beforeblur":
          case "afterblur":
            v = jl;
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
            v = pf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Lf;
            break;
          case Gs:
          case Zs:
          case Js:
            v = vf;
            break;
          case qs:
            v = Tf;
            break;
          case "scroll":
            v = ff;
            break;
          case "wheel":
            v = Rf;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = yf;
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
        var S = (t & 4) !== 0,
          D = !S && e === "scroll",
          f = S ? (p !== null ? p + "Capture" : null) : p;
        S = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var g = d.stateNode;
          if (
            (d.tag === 5 &&
              g !== null &&
              ((d = g),
              f !== null && ((g = On(a, f)), g != null && S.push(An(a, g, d)))),
            D)
          )
            break;
          a = a.return;
        }
        0 < S.length &&
          ((p = new v(p, w, null, n, h)), m.push({ event: p, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          p &&
            n !== so &&
            (w = n.relatedTarget || n.fromElement) &&
            (St(w) || w[Ke]))
        )
          break e;
        if (
          (v || p) &&
          ((p =
            h.window === h
              ? h
              : (p = h.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          v
            ? ((w = n.relatedTarget || n.toElement),
              (v = c),
              (w = w ? St(w) : null),
              w !== null &&
                ((D = jt(w)), w !== D || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((v = null), (w = c)),
          v !== w)
        ) {
          if (
            ((S = tu),
            (g = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = ru),
              (g = "onPointerLeave"),
              (f = "onPointerEnter"),
              (a = "pointer")),
            (D = v == null ? p : Ut(v)),
            (d = w == null ? p : Ut(w)),
            (p = new S(g, a + "leave", v, n, h)),
            (p.target = D),
            (p.relatedTarget = d),
            (g = null),
            St(h) === c &&
              ((S = new S(f, a + "enter", w, n, h)),
              (S.target = d),
              (S.relatedTarget = D),
              (g = S)),
            (D = g),
            v && w)
          )
            t: {
              for (S = v, f = w, a = 0, d = S; d; d = Rt(d)) a++;
              for (d = 0, g = f; g; g = Rt(g)) d++;
              for (; 0 < a - d; ) (S = Rt(S)), a--;
              for (; 0 < d - a; ) (f = Rt(f)), d--;
              for (; a--; ) {
                if (S === f || (f !== null && S === f.alternate)) break t;
                (S = Rt(S)), (f = Rt(f));
              }
              S = null;
            }
          else S = null;
          v !== null && mu(m, p, v, S, !1),
            w !== null && D !== null && mu(m, D, w, S, !0);
        }
      }
      e: {
        if (
          ((p = c ? Ut(c) : window),
          (v = p.nodeName && p.nodeName.toLowerCase()),
          v === "select" || (v === "input" && p.type === "file"))
        )
          var E = $f;
        else if (iu(p))
          if (Ws) E = Hf;
          else {
            E = Bf;
            var N = Af;
          }
        else
          (v = p.nodeName) &&
            v.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (E = Vf);
        if (E && (E = E(e, c))) {
          Hs(m, E, n, h);
          break e;
        }
        N && N(e, p, c),
          e === "focusout" &&
            (N = p._wrapperState) &&
            N.controlled &&
            p.type === "number" &&
            ro(p, "number", p.value);
      }
      switch (((N = c ? Ut(c) : window), e)) {
        case "focusin":
          (iu(N) || N.contentEditable === "true") &&
            ((Mt = N), (vo = c), (_n = null));
          break;
        case "focusout":
          _n = vo = Mt = null;
          break;
        case "mousedown":
          go = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (go = !1), fu(m, n, h);
          break;
        case "selectionchange":
          if (Kf) break;
        case "keydown":
        case "keyup":
          fu(m, n, h);
      }
      var _;
      if (ui)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        It
          ? Bs(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (As &&
          n.locale !== "ko" &&
          (It || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && It && (_ = $s())
            : ((tt = h),
              (li = "value" in tt ? tt.value : tt.textContent),
              (It = !0))),
        (N = Ur(c, P)),
        0 < N.length &&
          ((P = new nu(P, e, null, n, h)),
          m.push({ event: P, listeners: N }),
          _ ? (P.data = _) : ((_ = Vs(n)), _ !== null && (P.data = _)))),
        (_ = Df ? If(e, n) : Mf(e, n)) &&
          ((c = Ur(c, "onBeforeInput")),
          0 < c.length &&
            ((h = new nu("onBeforeInput", "beforeinput", null, n, h)),
            m.push({ event: h, listeners: c }),
            (h.data = _)));
    }
    ea(m, t);
  });
}
function An(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ur(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = On(e, n)),
      o != null && r.unshift(An(e, o, l)),
      (o = On(e, t)),
      o != null && r.push(An(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Rt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function mu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = On(n, o)), s != null && i.unshift(An(n, s, u)))
        : l || ((s = On(n, o)), s != null && i.push(An(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Zf = /\r\n?/g,
  Jf = /\u0000|\uFFFD/g;
function hu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Zf,
      `
`
    )
    .replace(Jf, "");
}
function dr(e, t, n) {
  if (((t = hu(t)), hu(e) !== t && n)) throw Error(y(425));
}
function $r() {}
var yo = null,
  wo = null;
function So(e, t) {
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
var ko = typeof setTimeout == "function" ? setTimeout : void 0,
  qf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  vu = typeof Promise == "function" ? Promise : void 0,
  bf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof vu < "u"
      ? function (e) {
          return vu.resolve(null).then(e).catch(ed);
        }
      : ko;
function ed(e) {
  setTimeout(function () {
    throw e;
  });
}
function $l(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Mn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Mn(t);
}
function it(e) {
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
function gu(e) {
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
var un = Math.random().toString(36).slice(2),
  Fe = "__reactFiber$" + un,
  Bn = "__reactProps$" + un,
  Ke = "__reactContainer$" + un,
  xo = "__reactEvents$" + un,
  td = "__reactListeners$" + un,
  nd = "__reactHandles$" + un;
function St(e) {
  var t = e[Fe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ke] || n[Fe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = gu(e); e !== null; ) {
          if ((n = e[Fe])) return n;
          e = gu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Jn(e) {
  return (
    (e = e[Fe] || e[Ke]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ut(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function ul(e) {
  return e[Bn] || null;
}
var Eo = [],
  $t = -1;
function mt(e) {
  return { current: e };
}
function F(e) {
  0 > $t || ((e.current = Eo[$t]), (Eo[$t] = null), $t--);
}
function I(e, t) {
  $t++, (Eo[$t] = e.current), (e.current = t);
}
var dt = {},
  oe = mt(dt),
  de = mt(!1),
  Nt = dt;
function qt(e, t) {
  var n = e.type.contextTypes;
  if (!n) return dt;
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
function pe(e) {
  return (e = e.childContextTypes), e != null;
}
function Ar() {
  F(de), F(oe);
}
function yu(e, t, n) {
  if (oe.current !== dt) throw Error(y(168));
  I(oe, t), I(de, n);
}
function na(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, $c(e) || "Unknown", l));
  return B({}, n, r);
}
function Br(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || dt),
    (Nt = oe.current),
    I(oe, e),
    I(de, de.current),
    !0
  );
}
function wu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = na(e, t, Nt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      F(de),
      F(oe),
      I(oe, e))
    : F(de),
    I(de, n);
}
var Be = null,
  sl = !1,
  Al = !1;
function ra(e) {
  Be === null ? (Be = [e]) : Be.push(e);
}
function rd(e) {
  (sl = !0), ra(e);
}
function ht() {
  if (!Al && Be !== null) {
    Al = !0;
    var e = 0,
      t = O;
    try {
      var n = Be;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Be = null), (sl = !1);
    } catch (l) {
      throw (Be !== null && (Be = Be.slice(e + 1)), Ls(ei, ht), l);
    } finally {
      (O = t), (Al = !1);
    }
  }
  return null;
}
var At = [],
  Bt = 0,
  Vr = null,
  Hr = 0,
  ke = [],
  xe = 0,
  _t = null,
  Ve = 1,
  He = "";
function yt(e, t) {
  (At[Bt++] = Hr), (At[Bt++] = Vr), (Vr = e), (Hr = t);
}
function la(e, t, n) {
  (ke[xe++] = Ve), (ke[xe++] = He), (ke[xe++] = _t), (_t = e);
  var r = Ve;
  e = He;
  var l = 32 - Re(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Re(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Ve = (1 << (32 - Re(t) + l)) | (n << l) | r),
      (He = o + e);
  } else (Ve = (1 << o) | (n << l) | r), (He = e);
}
function ai(e) {
  e.return !== null && (yt(e, 1), la(e, 1, 0));
}
function ci(e) {
  for (; e === Vr; )
    (Vr = At[--Bt]), (At[Bt] = null), (Hr = At[--Bt]), (At[Bt] = null);
  for (; e === _t; )
    (_t = ke[--xe]),
      (ke[xe] = null),
      (He = ke[--xe]),
      (ke[xe] = null),
      (Ve = ke[--xe]),
      (ke[xe] = null);
}
var ge = null,
  ve = null,
  U = !1,
  je = null;
function oa(e, t) {
  var n = Ee(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Su(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ge = e), (ve = it(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ge = e), (ve = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = _t !== null ? { id: Ve, overflow: He } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ee(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ge = e),
            (ve = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Co(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function No(e) {
  if (U) {
    var t = ve;
    if (t) {
      var n = t;
      if (!Su(e, t)) {
        if (Co(e)) throw Error(y(418));
        t = it(n.nextSibling);
        var r = ge;
        t && Su(e, t)
          ? oa(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ge = e));
      }
    } else {
      if (Co(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (ge = e);
    }
  }
}
function ku(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ge = e;
}
function pr(e) {
  if (e !== ge) return !1;
  if (!U) return ku(e), (U = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !So(e.type, e.memoizedProps))),
    t && (t = ve))
  ) {
    if (Co(e)) throw (ia(), Error(y(418)));
    for (; t; ) oa(e, t), (t = it(t.nextSibling));
  }
  if ((ku(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ve = it(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else ve = ge ? it(e.stateNode.nextSibling) : null;
  return !0;
}
function ia() {
  for (var e = ve; e; ) e = it(e.nextSibling);
}
function bt() {
  (ve = ge = null), (U = !1);
}
function fi(e) {
  je === null ? (je = [e]) : je.push(e);
}
var ld = Ge.ReactCurrentBatchConfig;
function hn(e, t, n) {
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
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function mr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function xu(e) {
  var t = e._init;
  return t(e._payload);
}
function ua(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = ct(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, g) {
    return a === null || a.tag !== 6
      ? ((a = Yl(d, f.mode, g)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, g) {
    var E = d.type;
    return E === Dt
      ? h(f, a, d.props.children, g, d.key)
      : a !== null &&
        (a.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Je &&
            xu(E) === a.type))
      ? ((g = l(a, d.props)), (g.ref = hn(f, a, d)), (g.return = f), g)
      : ((g = Tr(d.type, d.key, d.props, null, f.mode, g)),
        (g.ref = hn(f, a, d)),
        (g.return = f),
        g);
  }
  function c(f, a, d, g) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Xl(d, f.mode, g)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function h(f, a, d, g, E) {
    return a === null || a.tag !== 7
      ? ((a = Ct(d, f.mode, g, E)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function m(f, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Yl("" + a, f.mode, d)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case rr:
          return (
            (d = Tr(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = hn(f, null, a)),
            (d.return = f),
            d
          );
        case Ot:
          return (a = Xl(a, f.mode, d)), (a.return = f), a;
        case Je:
          var g = a._init;
          return m(f, g(a._payload), d);
      }
      if (wn(a) || cn(a))
        return (a = Ct(a, f.mode, d, null)), (a.return = f), a;
      mr(f, a);
    }
    return null;
  }
  function p(f, a, d, g) {
    var E = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return E !== null ? null : u(f, a, "" + d, g);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case rr:
          return d.key === E ? s(f, a, d, g) : null;
        case Ot:
          return d.key === E ? c(f, a, d, g) : null;
        case Je:
          return (E = d._init), p(f, a, E(d._payload), g);
      }
      if (wn(d) || cn(d)) return E !== null ? null : h(f, a, d, g, null);
      mr(f, d);
    }
    return null;
  }
  function v(f, a, d, g, E) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (f = f.get(d) || null), u(a, f, "" + g, E);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case rr:
          return (f = f.get(g.key === null ? d : g.key) || null), s(a, f, g, E);
        case Ot:
          return (f = f.get(g.key === null ? d : g.key) || null), c(a, f, g, E);
        case Je:
          var N = g._init;
          return v(f, a, d, N(g._payload), E);
      }
      if (wn(g) || cn(g)) return (f = f.get(d) || null), h(a, f, g, E, null);
      mr(a, g);
    }
    return null;
  }
  function w(f, a, d, g) {
    for (
      var E = null, N = null, _ = a, P = (a = 0), W = null;
      _ !== null && P < d.length;
      P++
    ) {
      _.index > P ? ((W = _), (_ = null)) : (W = _.sibling);
      var j = p(f, _, d[P], g);
      if (j === null) {
        _ === null && (_ = W);
        break;
      }
      e && _ && j.alternate === null && t(f, _),
        (a = o(j, a, P)),
        N === null ? (E = j) : (N.sibling = j),
        (N = j),
        (_ = W);
    }
    if (P === d.length) return n(f, _), U && yt(f, P), E;
    if (_ === null) {
      for (; P < d.length; P++)
        (_ = m(f, d[P], g)),
          _ !== null &&
            ((a = o(_, a, P)), N === null ? (E = _) : (N.sibling = _), (N = _));
      return U && yt(f, P), E;
    }
    for (_ = r(f, _); P < d.length; P++)
      (W = v(_, f, P, d[P], g)),
        W !== null &&
          (e && W.alternate !== null && _.delete(W.key === null ? P : W.key),
          (a = o(W, a, P)),
          N === null ? (E = W) : (N.sibling = W),
          (N = W));
    return (
      e &&
        _.forEach(function (Pe) {
          return t(f, Pe);
        }),
      U && yt(f, P),
      E
    );
  }
  function S(f, a, d, g) {
    var E = cn(d);
    if (typeof E != "function") throw Error(y(150));
    if (((d = E.call(d)), d == null)) throw Error(y(151));
    for (
      var N = (E = null), _ = a, P = (a = 0), W = null, j = d.next();
      _ !== null && !j.done;
      P++, j = d.next()
    ) {
      _.index > P ? ((W = _), (_ = null)) : (W = _.sibling);
      var Pe = p(f, _, j.value, g);
      if (Pe === null) {
        _ === null && (_ = W);
        break;
      }
      e && _ && Pe.alternate === null && t(f, _),
        (a = o(Pe, a, P)),
        N === null ? (E = Pe) : (N.sibling = Pe),
        (N = Pe),
        (_ = W);
    }
    if (j.done) return n(f, _), U && yt(f, P), E;
    if (_ === null) {
      for (; !j.done; P++, j = d.next())
        (j = m(f, j.value, g)),
          j !== null &&
            ((a = o(j, a, P)), N === null ? (E = j) : (N.sibling = j), (N = j));
      return U && yt(f, P), E;
    }
    for (_ = r(f, _); !j.done; P++, j = d.next())
      (j = v(_, f, P, j.value, g)),
        j !== null &&
          (e && j.alternate !== null && _.delete(j.key === null ? P : j.key),
          (a = o(j, a, P)),
          N === null ? (E = j) : (N.sibling = j),
          (N = j));
    return (
      e &&
        _.forEach(function (sn) {
          return t(f, sn);
        }),
      U && yt(f, P),
      E
    );
  }
  function D(f, a, d, g) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Dt &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case rr:
          e: {
            for (var E = d.key, N = a; N !== null; ) {
              if (N.key === E) {
                if (((E = d.type), E === Dt)) {
                  if (N.tag === 7) {
                    n(f, N.sibling),
                      (a = l(N, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  N.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Je &&
                    xu(E) === N.type)
                ) {
                  n(f, N.sibling),
                    (a = l(N, d.props)),
                    (a.ref = hn(f, N, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                n(f, N);
                break;
              } else t(f, N);
              N = N.sibling;
            }
            d.type === Dt
              ? ((a = Ct(d.props.children, f.mode, g, d.key)),
                (a.return = f),
                (f = a))
              : ((g = Tr(d.type, d.key, d.props, null, f.mode, g)),
                (g.ref = hn(f, a, d)),
                (g.return = f),
                (f = g));
          }
          return i(f);
        case Ot:
          e: {
            for (N = d.key; a !== null; ) {
              if (a.key === N)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = Xl(d, f.mode, g)), (a.return = f), (f = a);
          }
          return i(f);
        case Je:
          return (N = d._init), D(f, a, N(d._payload), g);
      }
      if (wn(d)) return w(f, a, d, g);
      if (cn(d)) return S(f, a, d, g);
      mr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (n(f, a), (a = Yl(d, f.mode, g)), (a.return = f), (f = a)),
        i(f))
      : n(f, a);
  }
  return D;
}
var en = ua(!0),
  sa = ua(!1),
  Wr = mt(null),
  Qr = null,
  Vt = null,
  di = null;
function pi() {
  di = Vt = Qr = null;
}
function mi(e) {
  var t = Wr.current;
  F(Wr), (e._currentValue = t);
}
function _o(e, t, n) {
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
function Gt(e, t) {
  (Qr = e),
    (di = Vt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (fe = !0), (e.firstContext = null));
}
function Ne(e) {
  var t = e._currentValue;
  if (di !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Vt === null)) {
      if (Qr === null) throw Error(y(308));
      (Vt = e), (Qr.dependencies = { lanes: 0, firstContext: e });
    } else Vt = Vt.next = e;
  return t;
}
var kt = null;
function hi(e) {
  kt === null ? (kt = [e]) : kt.push(e);
}
function aa(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), hi(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ye(e, r)
  );
}
function Ye(e, t) {
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
var qe = !1;
function vi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ca(e, t) {
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
function We(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ut(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), R & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ye(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), hi(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ye(e, n)
  );
}
function Cr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ti(e, n);
  }
}
function Eu(e, t) {
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
function Kr(e, t, n, r) {
  var l = e.updateQueue;
  qe = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), i === null ? (o = c) : (i.next = c), (i = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== i &&
        (u === null ? (h.firstBaseUpdate = c) : (u.next = c),
        (h.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var m = l.baseState;
    (i = 0), (h = c = s = null), (u = o);
    do {
      var p = u.lane,
        v = u.eventTime;
      if ((r & p) === p) {
        h !== null &&
          (h = h.next =
            {
              eventTime: v,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            S = u;
          switch (((p = t), (v = n), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w == "function")) {
                m = w.call(v, m, p);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = S.payload),
                (p = typeof w == "function" ? w.call(v, m, p) : w),
                p == null)
              )
                break e;
              m = B({}, m, p);
              break e;
            case 2:
              qe = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (v = {
          eventTime: v,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((c = h = v), (s = m)) : (h = h.next = v),
          (i |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Lt |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function Cu(e, t, n) {
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
var qn = {},
  $e = mt(qn),
  Vn = mt(qn),
  Hn = mt(qn);
function xt(e) {
  if (e === qn) throw Error(y(174));
  return e;
}
function gi(e, t) {
  switch ((I(Hn, t), I(Vn, e), I($e, qn), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : oo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = oo(t, e));
  }
  F($e), I($e, t);
}
function tn() {
  F($e), F(Vn), F(Hn);
}
function fa(e) {
  xt(Hn.current);
  var t = xt($e.current),
    n = oo(t, e.type);
  t !== n && (I(Vn, e), I($e, n));
}
function yi(e) {
  Vn.current === e && (F($e), F(Vn));
}
var $ = mt(0);
function Yr(e) {
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
var Bl = [];
function wi() {
  for (var e = 0; e < Bl.length; e++)
    Bl[e]._workInProgressVersionPrimary = null;
  Bl.length = 0;
}
var Nr = Ge.ReactCurrentDispatcher,
  Vl = Ge.ReactCurrentBatchConfig,
  Pt = 0,
  A = null,
  X = null,
  J = null,
  Xr = !1,
  Pn = !1,
  Wn = 0,
  od = 0;
function ne() {
  throw Error(y(321));
}
function Si(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!De(e[n], t[n])) return !1;
  return !0;
}
function ki(e, t, n, r, l, o) {
  if (
    ((Pt = o),
    (A = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Nr.current = e === null || e.memoizedState === null ? ad : cd),
    (e = n(r, l)),
    Pn)
  ) {
    o = 0;
    do {
      if (((Pn = !1), (Wn = 0), 25 <= o)) throw Error(y(301));
      (o += 1),
        (J = X = null),
        (t.updateQueue = null),
        (Nr.current = fd),
        (e = n(r, l));
    } while (Pn);
  }
  if (
    ((Nr.current = Gr),
    (t = X !== null && X.next !== null),
    (Pt = 0),
    (J = X = A = null),
    (Xr = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function xi() {
  var e = Wn !== 0;
  return (Wn = 0), e;
}
function Me() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return J === null ? (A.memoizedState = J = e) : (J = J.next = e), J;
}
function _e() {
  if (X === null) {
    var e = A.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = J === null ? A.memoizedState : J.next;
  if (t !== null) (J = t), (X = e);
  else {
    if (e === null) throw Error(y(310));
    (X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      J === null ? (A.memoizedState = J = e) : (J = J.next = e);
  }
  return J;
}
function Qn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Hl(e) {
  var t = _e(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = X,
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
    var u = (i = null),
      s = null,
      c = o;
    do {
      var h = c.lane;
      if ((Pt & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = m), (i = r)) : (s = s.next = m),
          (A.lanes |= h),
          (Lt |= h);
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? (i = r) : (s.next = u),
      De(r, t.memoizedState) || (fe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (A.lanes |= o), (Lt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Wl(e) {
  var t = _e(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    De(o, t.memoizedState) || (fe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function da() {}
function pa(e, t) {
  var n = A,
    r = _e(),
    l = t(),
    o = !De(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (fe = !0)),
    (r = r.queue),
    Ei(va.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (J !== null && J.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Kn(9, ha.bind(null, n, r, l, t), void 0, null),
      q === null)
    )
      throw Error(y(349));
    Pt & 30 || ma(n, t, l);
  }
  return l;
}
function ma(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ha(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ga(t) && ya(e);
}
function va(e, t, n) {
  return n(function () {
    ga(t) && ya(e);
  });
}
function ga(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !De(e, n);
  } catch {
    return !0;
  }
}
function ya(e) {
  var t = Ye(e, 1);
  t !== null && Oe(t, e, 1, -1);
}
function Nu(e) {
  var t = Me();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = sd.bind(null, A, e)),
    [t.memoizedState, e]
  );
}
function Kn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function wa() {
  return _e().memoizedState;
}
function _r(e, t, n, r) {
  var l = Me();
  (A.flags |= e),
    (l.memoizedState = Kn(1 | t, n, void 0, r === void 0 ? null : r));
}
function al(e, t, n, r) {
  var l = _e();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (X !== null) {
    var i = X.memoizedState;
    if (((o = i.destroy), r !== null && Si(r, i.deps))) {
      l.memoizedState = Kn(t, n, o, r);
      return;
    }
  }
  (A.flags |= e), (l.memoizedState = Kn(1 | t, n, o, r));
}
function _u(e, t) {
  return _r(8390656, 8, e, t);
}
function Ei(e, t) {
  return al(2048, 8, e, t);
}
function Sa(e, t) {
  return al(4, 2, e, t);
}
function ka(e, t) {
  return al(4, 4, e, t);
}
function xa(e, t) {
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
function Ea(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), al(4, 4, xa.bind(null, t, e), n)
  );
}
function Ci() {}
function Ca(e, t) {
  var n = _e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Si(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Na(e, t) {
  var n = _e();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Si(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function _a(e, t, n) {
  return Pt & 21
    ? (De(n, t) || ((n = js()), (A.lanes |= n), (Lt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (fe = !0)), (e.memoizedState = n));
}
function id(e, t) {
  var n = O;
  (O = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Vl.transition;
  Vl.transition = {};
  try {
    e(!1), t();
  } finally {
    (O = n), (Vl.transition = r);
  }
}
function Pa() {
  return _e().memoizedState;
}
function ud(e, t, n) {
  var r = at(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    La(e))
  )
    za(t, n);
  else if (((n = aa(e, t, n, r)), n !== null)) {
    var l = ue();
    Oe(n, e, r, l), Ta(n, t, r);
  }
}
function sd(e, t, n) {
  var r = at(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (La(e)) za(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), De(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), hi(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = aa(e, t, l, r)),
      n !== null && ((l = ue()), Oe(n, e, r, l), Ta(n, t, r));
  }
}
function La(e) {
  var t = e.alternate;
  return e === A || (t !== null && t === A);
}
function za(e, t) {
  Pn = Xr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ta(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ti(e, n);
  }
}
var Gr = {
    readContext: Ne,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1,
  },
  ad = {
    readContext: Ne,
    useCallback: function (e, t) {
      return (Me().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ne,
    useEffect: _u,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        _r(4194308, 4, xa.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return _r(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return _r(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Me();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Me();
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
        (e = e.dispatch = ud.bind(null, A, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Me();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Nu,
    useDebugValue: Ci,
    useDeferredValue: function (e) {
      return (Me().memoizedState = e);
    },
    useTransition: function () {
      var e = Nu(!1),
        t = e[0];
      return (e = id.bind(null, e[1])), (Me().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = A,
        l = Me();
      if (U) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), q === null)) throw Error(y(349));
        Pt & 30 || ma(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        _u(va.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Kn(9, ha.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Me(),
        t = q.identifierPrefix;
      if (U) {
        var n = He,
          r = Ve;
        (n = (r & ~(1 << (32 - Re(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Wn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = od++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  cd = {
    readContext: Ne,
    useCallback: Ca,
    useContext: Ne,
    useEffect: Ei,
    useImperativeHandle: Ea,
    useInsertionEffect: Sa,
    useLayoutEffect: ka,
    useMemo: Na,
    useReducer: Hl,
    useRef: wa,
    useState: function () {
      return Hl(Qn);
    },
    useDebugValue: Ci,
    useDeferredValue: function (e) {
      var t = _e();
      return _a(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = Hl(Qn)[0],
        t = _e().memoizedState;
      return [e, t];
    },
    useMutableSource: da,
    useSyncExternalStore: pa,
    useId: Pa,
    unstable_isNewReconciler: !1,
  },
  fd = {
    readContext: Ne,
    useCallback: Ca,
    useContext: Ne,
    useEffect: Ei,
    useImperativeHandle: Ea,
    useInsertionEffect: Sa,
    useLayoutEffect: ka,
    useMemo: Na,
    useReducer: Wl,
    useRef: wa,
    useState: function () {
      return Wl(Qn);
    },
    useDebugValue: Ci,
    useDeferredValue: function (e) {
      var t = _e();
      return X === null ? (t.memoizedState = e) : _a(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = Wl(Qn)[0],
        t = _e().memoizedState;
      return [e, t];
    },
    useMutableSource: da,
    useSyncExternalStore: pa,
    useId: Pa,
    unstable_isNewReconciler: !1,
  };
function ze(e, t) {
  if (e && e.defaultProps) {
    (t = B({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Po(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : B({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var cl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? jt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = at(e),
      o = We(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = ut(e, o, l)),
      t !== null && (Oe(t, e, l, r), Cr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = at(e),
      o = We(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = ut(e, o, l)),
      t !== null && (Oe(t, e, l, r), Cr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ue(),
      r = at(e),
      l = We(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ut(e, l, r)),
      t !== null && (Oe(t, e, r, n), Cr(t, e, r));
  },
};
function Pu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Un(n, r) || !Un(l, o)
      : !0
  );
}
function ja(e, t, n) {
  var r = !1,
    l = dt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ne(o))
      : ((l = pe(t) ? Nt : oe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? qt(e, l) : dt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = cl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Lu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && cl.enqueueReplaceState(t, t.state, null);
}
function Lo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), vi(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Ne(o))
    : ((o = pe(t) ? Nt : oe.current), (l.context = qt(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Po(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && cl.enqueueReplaceState(l, l.state, null),
      Kr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function nn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Uc(r)), (r = r.return);
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
function Ql(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function zo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var dd = typeof WeakMap == "function" ? WeakMap : Map;
function Ra(e, t, n) {
  (n = We(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Jr || ((Jr = !0), ($o = r)), zo(e, t);
    }),
    n
  );
}
function Oa(e, t, n) {
  (n = We(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        zo(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        zo(e, t),
          typeof r != "function" &&
            (st === null ? (st = new Set([this])) : st.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function zu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new dd();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = _d.bind(null, e, t, n)), t.then(e, e));
}
function Tu(e) {
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
function ju(e, t, n, r, l) {
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
              : ((t = We(-1, 1)), (t.tag = 2), ut(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var pd = Ge.ReactCurrentOwner,
  fe = !1;
function ie(e, t, n, r) {
  t.child = e === null ? sa(t, null, n, r) : en(t, e.child, n, r);
}
function Ru(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Gt(t, l),
    (r = ki(e, t, n, r, o, l)),
    (n = xi()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : (U && n && ai(t), (t.flags |= 1), ie(e, t, r, l), t.child)
  );
}
function Ou(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ri(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Da(e, t, o, r, l))
      : ((e = Tr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Un), n(i, r) && e.ref === t.ref)
    )
      return Xe(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = ct(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Da(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Un(o, r) && e.ref === t.ref)
      if (((fe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (fe = !0);
      else return (t.lanes = e.lanes), Xe(e, t, l);
  }
  return To(e, t, n, r, l);
}
function Ia(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        I(Wt, he),
        (he |= n);
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
          I(Wt, he),
          (he |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        I(Wt, he),
        (he |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      I(Wt, he),
      (he |= r);
  return ie(e, t, l, n), t.child;
}
function Ma(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function To(e, t, n, r, l) {
  var o = pe(n) ? Nt : oe.current;
  return (
    (o = qt(t, o)),
    Gt(t, l),
    (n = ki(e, t, n, r, o, l)),
    (r = xi()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : (U && r && ai(t), (t.flags |= 1), ie(e, t, n, l), t.child)
  );
}
function Du(e, t, n, r, l) {
  if (pe(n)) {
    var o = !0;
    Br(t);
  } else o = !1;
  if ((Gt(t, l), t.stateNode === null))
    Pr(e, t), ja(t, n, r), Lo(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ne(c))
      : ((c = pe(n) ? Nt : oe.current), (c = qt(t, c)));
    var h = n.getDerivedStateFromProps,
      m =
        typeof h == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== c) && Lu(t, i, r, c)),
      (qe = !1);
    var p = t.memoizedState;
    (i.state = p),
      Kr(t, r, i, l),
      (s = t.memoizedState),
      u !== r || p !== s || de.current || qe
        ? (typeof h == "function" && (Po(t, n, h, r), (s = t.memoizedState)),
          (u = qe || Pu(t, n, u, r, p, s, c))
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
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = c),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      ca(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : ze(t.type, u)),
      (i.props = c),
      (m = t.pendingProps),
      (p = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Ne(s))
        : ((s = pe(n) ? Nt : oe.current), (s = qt(t, s)));
    var v = n.getDerivedStateFromProps;
    (h =
      typeof v == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== m || p !== s) && Lu(t, i, r, s)),
      (qe = !1),
      (p = t.memoizedState),
      (i.state = p),
      Kr(t, r, i, l);
    var w = t.memoizedState;
    u !== m || p !== w || de.current || qe
      ? (typeof v == "function" && (Po(t, n, v, r), (w = t.memoizedState)),
        (c = qe || Pu(t, n, c, r, p, w, s) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = s),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return jo(e, t, n, r, o, l);
}
function jo(e, t, n, r, l, o) {
  Ma(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && wu(t, n, !1), Xe(e, t, o);
  (r = t.stateNode), (pd.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = en(t, e.child, null, o)), (t.child = en(t, null, u, o)))
      : ie(e, t, u, o),
    (t.memoizedState = r.state),
    l && wu(t, n, !0),
    t.child
  );
}
function Fa(e) {
  var t = e.stateNode;
  t.pendingContext
    ? yu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && yu(e, t.context, !1),
    gi(e, t.containerInfo);
}
function Iu(e, t, n, r, l) {
  return bt(), fi(l), (t.flags |= 256), ie(e, t, n, r), t.child;
}
var Ro = { dehydrated: null, treeContext: null, retryLane: 0 };
function Oo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ua(e, t, n) {
  var r = t.pendingProps,
    l = $.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    I($, l & 1),
    e === null)
  )
    return (
      No(t),
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
                : (o = pl(i, r, 0, null)),
              (e = Ct(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Oo(n)),
              (t.memoizedState = Ro),
              e)
            : Ni(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return md(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = ct(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = ct(u, o)) : ((o = Ct(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Oo(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ro),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = ct(o, { mode: "visible", children: r.children })),
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
function Ni(e, t) {
  return (
    (t = pl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function hr(e, t, n, r) {
  return (
    r !== null && fi(r),
    en(t, e.child, null, n),
    (e = Ni(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function md(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ql(Error(y(422)))), hr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = pl({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Ct(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && en(t, e.child, null, i),
        (t.child.memoizedState = Oo(i)),
        (t.memoizedState = Ro),
        o);
  if (!(t.mode & 1)) return hr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(y(419))), (r = Ql(o, r, void 0)), hr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), fe || u)) {
    if (((r = q), r !== null)) {
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
          ((o.retryLane = l), Ye(e, l), Oe(r, e, l, -1));
    }
    return ji(), (r = Ql(Error(y(421)))), hr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Pd.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ve = it(l.nextSibling)),
      (ge = t),
      (U = !0),
      (je = null),
      e !== null &&
        ((ke[xe++] = Ve),
        (ke[xe++] = He),
        (ke[xe++] = _t),
        (Ve = e.id),
        (He = e.overflow),
        (_t = t)),
      (t = Ni(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Mu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), _o(e.return, t, n);
}
function Kl(e, t, n, r, l) {
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
function $a(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ie(e, t, r.children, n), (r = $.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Mu(e, n, t);
        else if (e.tag === 19) Mu(e, n, t);
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
  if ((I($, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Yr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Kl(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Yr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Kl(t, !0, n, null, o);
        break;
      case "together":
        Kl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Pr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Xe(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Lt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ct(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ct(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function hd(e, t, n) {
  switch (t.tag) {
    case 3:
      Fa(t), bt();
      break;
    case 5:
      fa(t);
      break;
    case 1:
      pe(t.type) && Br(t);
      break;
    case 4:
      gi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      I(Wr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (I($, $.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ua(e, t, n)
          : (I($, $.current & 1),
            (e = Xe(e, t, n)),
            e !== null ? e.sibling : null);
      I($, $.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return $a(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        I($, $.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ia(e, t, n);
  }
  return Xe(e, t, n);
}
var Aa, Do, Ba, Va;
Aa = function (e, t) {
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
Do = function () {};
Ba = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), xt($e.current);
    var o = null;
    switch (n) {
      case "input":
        (l = to(e, l)), (r = to(e, r)), (o = []);
        break;
      case "select":
        (l = B({}, l, { value: void 0 })),
          (r = B({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = lo(e, l)), (r = lo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = $r);
    }
    io(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (jn.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (jn.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && M("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(c, s));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Va = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function vn(e, t) {
  if (!U)
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
function re(e) {
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
function vd(e, t, n) {
  var r = t.pendingProps;
  switch ((ci(t), t.tag)) {
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
      return re(t), null;
    case 1:
      return pe(t.type) && Ar(), re(t), null;
    case 3:
      return (
        (r = t.stateNode),
        tn(),
        F(de),
        F(oe),
        wi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (pr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), je !== null && (Vo(je), (je = null)))),
        Do(e, t),
        re(t),
        null
      );
    case 5:
      yi(t);
      var l = xt(Hn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ba(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return re(t), null;
        }
        if (((e = xt($e.current)), pr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Fe] = t), (r[Bn] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              M("cancel", r), M("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              M("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < kn.length; l++) M(kn[l], r);
              break;
            case "source":
              M("error", r);
              break;
            case "img":
            case "image":
            case "link":
              M("error", r), M("load", r);
              break;
            case "details":
              M("toggle", r);
              break;
            case "input":
              Qi(r, o), M("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                M("invalid", r);
              break;
            case "textarea":
              Yi(r, o), M("invalid", r);
          }
          io(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      dr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      dr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : jn.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  M("scroll", r);
            }
          switch (n) {
            case "input":
              lr(r), Ki(r, o, !0);
              break;
            case "textarea":
              lr(r), Xi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = $r);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = vs(n)),
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
            (e[Fe] = t),
            (e[Bn] = r),
            Aa(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = uo(n, r)), n)) {
              case "dialog":
                M("cancel", e), M("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                M("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < kn.length; l++) M(kn[l], e);
                l = r;
                break;
              case "source":
                M("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                M("error", e), M("load", e), (l = r);
                break;
              case "details":
                M("toggle", e), (l = r);
                break;
              case "input":
                Qi(e, r), (l = to(e, r)), M("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = B({}, r, { value: void 0 })),
                  M("invalid", e);
                break;
              case "textarea":
                Yi(e, r), (l = lo(e, r)), M("invalid", e);
                break;
              default:
                l = r;
            }
            io(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? ws(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && gs(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Rn(e, s)
                    : typeof s == "number" && Rn(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (jn.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && M("scroll", e)
                      : s != null && Go(e, o, s, i));
              }
            switch (n) {
              case "input":
                lr(e), Ki(e, r, !1);
                break;
              case "textarea":
                lr(e), Xi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ft(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Qt(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Qt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = $r);
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
      return re(t), null;
    case 6:
      if (e && t.stateNode != null) Va(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = xt(Hn.current)), xt($e.current), pr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Fe] = t),
            (o = r.nodeValue !== n) && ((e = ge), e !== null))
          )
            switch (e.tag) {
              case 3:
                dr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  dr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Fe] = t),
            (t.stateNode = r);
      }
      return re(t), null;
    case 13:
      if (
        (F($),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && ve !== null && t.mode & 1 && !(t.flags & 128))
          ia(), bt(), (t.flags |= 98560), (o = !1);
        else if (((o = pr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(y(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(y(317));
            o[Fe] = t;
          } else
            bt(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          re(t), (o = !1);
        } else je !== null && (Vo(je), (je = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || $.current & 1 ? G === 0 && (G = 3) : ji())),
          t.updateQueue !== null && (t.flags |= 4),
          re(t),
          null);
    case 4:
      return (
        tn(), Do(e, t), e === null && $n(t.stateNode.containerInfo), re(t), null
      );
    case 10:
      return mi(t.type._context), re(t), null;
    case 17:
      return pe(t.type) && Ar(), re(t), null;
    case 19:
      if ((F($), (o = t.memoizedState), o === null)) return re(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) vn(o, !1);
        else {
          if (G !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Yr(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    vn(o, !1),
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
                return I($, ($.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            K() > rn &&
            ((t.flags |= 128), (r = !0), vn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Yr(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              vn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !U)
            )
              return re(t), null;
          } else
            2 * K() - o.renderingStartTime > rn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), vn(o, !1), (t.lanes = 4194304));
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
          (o.renderingStartTime = K()),
          (t.sibling = null),
          (n = $.current),
          I($, r ? (n & 1) | 2 : n & 1),
          t)
        : (re(t), null);
    case 22:
    case 23:
      return (
        Ti(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? he & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : re(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function gd(e, t) {
  switch ((ci(t), t.tag)) {
    case 1:
      return (
        pe(t.type) && Ar(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        tn(),
        F(de),
        F(oe),
        wi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return yi(t), null;
    case 13:
      if ((F($), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        bt();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return F($), null;
    case 4:
      return tn(), null;
    case 10:
      return mi(t.type._context), null;
    case 22:
    case 23:
      return Ti(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var vr = !1,
  le = !1,
  yd = typeof WeakSet == "function" ? WeakSet : Set,
  x = null;
function Ht(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        V(e, t, r);
      }
    else n.current = null;
}
function Io(e, t, n) {
  try {
    n();
  } catch (r) {
    V(e, t, r);
  }
}
var Fu = !1;
function wd(e, t) {
  if (((yo = Mr), (e = Ys()), si(e))) {
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
            u = -1,
            s = -1,
            c = 0,
            h = 0,
            m = e,
            p = null;
          t: for (;;) {
            for (
              var v;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = i + l),
                m !== o || (r !== 0 && m.nodeType !== 3) || (s = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (v = m.firstChild) !== null;

            )
              (p = m), (m = v);
            for (;;) {
              if (m === e) break t;
              if (
                (p === n && ++c === l && (u = i),
                p === o && ++h === r && (s = i),
                (v = m.nextSibling) !== null)
              )
                break;
              (m = p), (p = m.parentNode);
            }
            m = v;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (wo = { focusedElem: e, selectionRange: n }, Mr = !1, x = t; x !== null; )
    if (((t = x), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (x = e);
    else
      for (; x !== null; ) {
        t = x;
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
                  var S = w.memoizedProps,
                    D = w.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : ze(t.type, S),
                      D
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
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
                throw Error(y(163));
            }
        } catch (g) {
          V(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (x = e);
          break;
        }
        x = t.return;
      }
  return (w = Fu), (Fu = !1), w;
}
function Ln(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Io(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function fl(e, t) {
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
function Mo(e) {
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
function Ha(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ha(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Fe], delete t[Bn], delete t[xo], delete t[td], delete t[nd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Wa(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Uu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Wa(e.return)) return null;
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
function Fo(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = $r));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Fo(e, t, n), e = e.sibling; e !== null; ) Fo(e, t, n), (e = e.sibling);
}
function Uo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Uo(e, t, n), e = e.sibling; e !== null; ) Uo(e, t, n), (e = e.sibling);
}
var b = null,
  Te = !1;
function Ze(e, t, n) {
  for (n = n.child; n !== null; ) Qa(e, t, n), (n = n.sibling);
}
function Qa(e, t, n) {
  if (Ue && typeof Ue.onCommitFiberUnmount == "function")
    try {
      Ue.onCommitFiberUnmount(rl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      le || Ht(n, t);
    case 6:
      var r = b,
        l = Te;
      (b = null),
        Ze(e, t, n),
        (b = r),
        (Te = l),
        b !== null &&
          (Te
            ? ((e = b),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : b.removeChild(n.stateNode));
      break;
    case 18:
      b !== null &&
        (Te
          ? ((e = b),
            (n = n.stateNode),
            e.nodeType === 8
              ? $l(e.parentNode, n)
              : e.nodeType === 1 && $l(e, n),
            Mn(e))
          : $l(b, n.stateNode));
      break;
    case 4:
      (r = b),
        (l = Te),
        (b = n.stateNode.containerInfo),
        (Te = !0),
        Ze(e, t, n),
        (b = r),
        (Te = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Io(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Ze(e, t, n);
      break;
    case 1:
      if (
        !le &&
        (Ht(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          V(n, t, u);
        }
      Ze(e, t, n);
      break;
    case 21:
      Ze(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((le = (r = le) || n.memoizedState !== null), Ze(e, t, n), (le = r))
        : Ze(e, t, n);
      break;
    default:
      Ze(e, t, n);
  }
}
function $u(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new yd()),
      t.forEach(function (r) {
        var l = Ld.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Le(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (b = u.stateNode), (Te = !1);
              break e;
            case 3:
              (b = u.stateNode.containerInfo), (Te = !0);
              break e;
            case 4:
              (b = u.stateNode.containerInfo), (Te = !0);
              break e;
          }
          u = u.return;
        }
        if (b === null) throw Error(y(160));
        Qa(o, i, l), (b = null), (Te = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        V(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ka(t, e), (t = t.sibling);
}
function Ka(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Le(t, e), Ie(e), r & 4)) {
        try {
          Ln(3, e, e.return), fl(3, e);
        } catch (S) {
          V(e, e.return, S);
        }
        try {
          Ln(5, e, e.return);
        } catch (S) {
          V(e, e.return, S);
        }
      }
      break;
    case 1:
      Le(t, e), Ie(e), r & 512 && n !== null && Ht(n, n.return);
      break;
    case 5:
      if (
        (Le(t, e),
        Ie(e),
        r & 512 && n !== null && Ht(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Rn(l, "");
        } catch (S) {
          V(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && ms(l, o),
              uo(u, i);
            var c = uo(u, o);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i],
                m = s[i + 1];
              h === "style"
                ? ws(l, m)
                : h === "dangerouslySetInnerHTML"
                ? gs(l, m)
                : h === "children"
                ? Rn(l, m)
                : Go(l, h, m, c);
            }
            switch (u) {
              case "input":
                no(l, o);
                break;
              case "textarea":
                hs(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? Qt(l, !!o.multiple, v, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Qt(l, !!o.multiple, o.defaultValue, !0)
                      : Qt(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Bn] = o;
          } catch (S) {
            V(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((Le(t, e), Ie(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (S) {
          V(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (Le(t, e), Ie(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Mn(t.containerInfo);
        } catch (S) {
          V(e, e.return, S);
        }
      break;
    case 4:
      Le(t, e), Ie(e);
      break;
    case 13:
      Le(t, e),
        Ie(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Li = K())),
        r & 4 && $u(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((le = (c = le) || h), Le(t, e), (le = c)) : Le(t, e),
        Ie(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !h && e.mode & 1)
        )
          for (x = e, h = e.child; h !== null; ) {
            for (m = x = h; x !== null; ) {
              switch (((p = x), (v = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ln(4, p, p.return);
                  break;
                case 1:
                  Ht(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (S) {
                      V(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Ht(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Bu(m);
                    continue;
                  }
              }
              v !== null ? ((v.return = p), (x = v)) : Bu(m);
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
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = m.stateNode),
                      (s = m.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = ys("display", i)));
              } catch (S) {
                V(e, e.return, S);
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (S) {
                V(e, e.return, S);
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
      Le(t, e), Ie(e), r & 4 && $u(e);
      break;
    case 21:
      break;
    default:
      Le(t, e), Ie(e);
  }
}
function Ie(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Wa(n)) {
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
          r.flags & 32 && (Rn(l, ""), (r.flags &= -33));
          var o = Uu(e);
          Uo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Uu(e);
          Fo(e, u, i);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      V(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Sd(e, t, n) {
  (x = e), Ya(e);
}
function Ya(e, t, n) {
  for (var r = (e.mode & 1) !== 0; x !== null; ) {
    var l = x,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || vr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || le;
        u = vr;
        var c = le;
        if (((vr = i), (le = s) && !c))
          for (x = l; x !== null; )
            (i = x),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Vu(l)
                : s !== null
                ? ((s.return = i), (x = s))
                : Vu(l);
        for (; o !== null; ) (x = o), Ya(o), (o = o.sibling);
        (x = l), (vr = u), (le = c);
      }
      Au(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (x = o)) : Au(e);
  }
}
function Au(e) {
  for (; x !== null; ) {
    var t = x;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              le || fl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !le)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ze(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Cu(t, o, r);
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
                Cu(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
                    m !== null && Mn(m);
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
        le || (t.flags & 512 && Mo(t));
      } catch (p) {
        V(t, t.return, p);
      }
    }
    if (t === e) {
      x = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (x = n);
      break;
    }
    x = t.return;
  }
}
function Bu(e) {
  for (; x !== null; ) {
    var t = x;
    if (t === e) {
      x = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (x = n);
      break;
    }
    x = t.return;
  }
}
function Vu(e) {
  for (; x !== null; ) {
    var t = x;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            fl(4, t);
          } catch (s) {
            V(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              V(t, l, s);
            }
          }
          var o = t.return;
          try {
            Mo(t);
          } catch (s) {
            V(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Mo(t);
          } catch (s) {
            V(t, i, s);
          }
      }
    } catch (s) {
      V(t, t.return, s);
    }
    if (t === e) {
      x = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (x = u);
      break;
    }
    x = t.return;
  }
}
var kd = Math.ceil,
  Zr = Ge.ReactCurrentDispatcher,
  _i = Ge.ReactCurrentOwner,
  Ce = Ge.ReactCurrentBatchConfig,
  R = 0,
  q = null,
  Y = null,
  ee = 0,
  he = 0,
  Wt = mt(0),
  G = 0,
  Yn = null,
  Lt = 0,
  dl = 0,
  Pi = 0,
  zn = null,
  ce = null,
  Li = 0,
  rn = 1 / 0,
  Ae = null,
  Jr = !1,
  $o = null,
  st = null,
  gr = !1,
  nt = null,
  qr = 0,
  Tn = 0,
  Ao = null,
  Lr = -1,
  zr = 0;
function ue() {
  return R & 6 ? K() : Lr !== -1 ? Lr : (Lr = K());
}
function at(e) {
  return e.mode & 1
    ? R & 2 && ee !== 0
      ? ee & -ee
      : ld.transition !== null
      ? (zr === 0 && (zr = js()), zr)
      : ((e = O),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Us(e.type))),
        e)
    : 1;
}
function Oe(e, t, n, r) {
  if (50 < Tn) throw ((Tn = 0), (Ao = null), Error(y(185)));
  Gn(e, n, r),
    (!(R & 2) || e !== q) &&
      (e === q && (!(R & 2) && (dl |= n), G === 4 && et(e, ee)),
      me(e, r),
      n === 1 && R === 0 && !(t.mode & 1) && ((rn = K() + 500), sl && ht()));
}
function me(e, t) {
  var n = e.callbackNode;
  rf(e, t);
  var r = Ir(e, e === q ? ee : 0);
  if (r === 0)
    n !== null && Ji(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ji(n), t === 1))
      e.tag === 0 ? rd(Hu.bind(null, e)) : ra(Hu.bind(null, e)),
        bf(function () {
          !(R & 6) && ht();
        }),
        (n = null);
    else {
      switch (Rs(r)) {
        case 1:
          n = ei;
          break;
        case 4:
          n = zs;
          break;
        case 16:
          n = Dr;
          break;
        case 536870912:
          n = Ts;
          break;
        default:
          n = Dr;
      }
      n = tc(n, Xa.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Xa(e, t) {
  if (((Lr = -1), (zr = 0), R & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (Zt() && e.callbackNode !== n) return null;
  var r = Ir(e, e === q ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = br(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var o = Za();
    (q !== e || ee !== t) && ((Ae = null), (rn = K() + 500), Et(e, t));
    do
      try {
        Cd();
        break;
      } catch (u) {
        Ga(e, u);
      }
    while (!0);
    pi(),
      (Zr.current = o),
      (R = l),
      Y !== null ? (t = 0) : ((q = null), (ee = 0), (t = G));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = po(e)), l !== 0 && ((r = l), (t = Bo(e, l)))), t === 1)
    )
      throw ((n = Yn), Et(e, 0), et(e, r), me(e, K()), n);
    if (t === 6) et(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !xd(l) &&
          ((t = br(e, r)),
          t === 2 && ((o = po(e)), o !== 0 && ((r = o), (t = Bo(e, o)))),
          t === 1))
      )
        throw ((n = Yn), Et(e, 0), et(e, r), me(e, K()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          wt(e, ce, Ae);
          break;
        case 3:
          if (
            (et(e, r), (r & 130023424) === r && ((t = Li + 500 - K()), 10 < t))
          ) {
            if (Ir(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ue(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = ko(wt.bind(null, e, ce, Ae), t);
            break;
          }
          wt(e, ce, Ae);
          break;
        case 4:
          if ((et(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Re(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = K() - r),
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
                : 1960 * kd(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ko(wt.bind(null, e, ce, Ae), r);
            break;
          }
          wt(e, ce, Ae);
          break;
        case 5:
          wt(e, ce, Ae);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return me(e, K()), e.callbackNode === n ? Xa.bind(null, e) : null;
}
function Bo(e, t) {
  var n = zn;
  return (
    e.current.memoizedState.isDehydrated && (Et(e, t).flags |= 256),
    (e = br(e, t)),
    e !== 2 && ((t = ce), (ce = n), t !== null && Vo(t)),
    e
  );
}
function Vo(e) {
  ce === null ? (ce = e) : ce.push.apply(ce, e);
}
function xd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!De(o(), l)) return !1;
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
function et(e, t) {
  for (
    t &= ~Pi,
      t &= ~dl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Re(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Hu(e) {
  if (R & 6) throw Error(y(327));
  Zt();
  var t = Ir(e, 0);
  if (!(t & 1)) return me(e, K()), null;
  var n = br(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = po(e);
    r !== 0 && ((t = r), (n = Bo(e, r)));
  }
  if (n === 1) throw ((n = Yn), Et(e, 0), et(e, t), me(e, K()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    wt(e, ce, Ae),
    me(e, K()),
    null
  );
}
function zi(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    (R = n), R === 0 && ((rn = K() + 500), sl && ht());
  }
}
function zt(e) {
  nt !== null && nt.tag === 0 && !(R & 6) && Zt();
  var t = R;
  R |= 1;
  var n = Ce.transition,
    r = O;
  try {
    if (((Ce.transition = null), (O = 1), e)) return e();
  } finally {
    (O = r), (Ce.transition = n), (R = t), !(R & 6) && ht();
  }
}
function Ti() {
  (he = Wt.current), F(Wt);
}
function Et(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), qf(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((ci(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ar();
          break;
        case 3:
          tn(), F(de), F(oe), wi();
          break;
        case 5:
          yi(r);
          break;
        case 4:
          tn();
          break;
        case 13:
          F($);
          break;
        case 19:
          F($);
          break;
        case 10:
          mi(r.type._context);
          break;
        case 22:
        case 23:
          Ti();
      }
      n = n.return;
    }
  if (
    ((q = e),
    (Y = e = ct(e.current, null)),
    (ee = he = t),
    (G = 0),
    (Yn = null),
    (Pi = dl = Lt = 0),
    (ce = zn = null),
    kt !== null)
  ) {
    for (t = 0; t < kt.length; t++)
      if (((n = kt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    kt = null;
  }
  return e;
}
function Ga(e, t) {
  do {
    var n = Y;
    try {
      if ((pi(), (Nr.current = Gr), Xr)) {
        for (var r = A.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Xr = !1;
      }
      if (
        ((Pt = 0),
        (J = X = A = null),
        (Pn = !1),
        (Wn = 0),
        (_i.current = null),
        n === null || n.return === null)
      ) {
        (G = 1), (Yn = t), (Y = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = ee),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            h = u,
            m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p
              ? ((h.updateQueue = p.updateQueue),
                (h.memoizedState = p.memoizedState),
                (h.lanes = p.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var v = Tu(i);
          if (v !== null) {
            (v.flags &= -257),
              ju(v, i, u, o, t),
              v.mode & 1 && zu(o, c, t),
              (t = v),
              (s = c);
            var w = t.updateQueue;
            if (w === null) {
              var S = new Set();
              S.add(s), (t.updateQueue = S);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              zu(o, c, t), ji();
              break e;
            }
            s = Error(y(426));
          }
        } else if (U && u.mode & 1) {
          var D = Tu(i);
          if (D !== null) {
            !(D.flags & 65536) && (D.flags |= 256),
              ju(D, i, u, o, t),
              fi(nn(s, u));
            break e;
          }
        }
        (o = s = nn(s, u)),
          G !== 4 && (G = 2),
          zn === null ? (zn = [o]) : zn.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = Ra(o, s, t);
              Eu(o, f);
              break e;
            case 1:
              u = s;
              var a = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (st === null || !st.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var g = Oa(o, u, t);
                Eu(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      qa(n);
    } catch (E) {
      (t = E), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Za() {
  var e = Zr.current;
  return (Zr.current = Gr), e === null ? Gr : e;
}
function ji() {
  (G === 0 || G === 3 || G === 2) && (G = 4),
    q === null || (!(Lt & 268435455) && !(dl & 268435455)) || et(q, ee);
}
function br(e, t) {
  var n = R;
  R |= 2;
  var r = Za();
  (q !== e || ee !== t) && ((Ae = null), Et(e, t));
  do
    try {
      Ed();
      break;
    } catch (l) {
      Ga(e, l);
    }
  while (!0);
  if ((pi(), (R = n), (Zr.current = r), Y !== null)) throw Error(y(261));
  return (q = null), (ee = 0), G;
}
function Ed() {
  for (; Y !== null; ) Ja(Y);
}
function Cd() {
  for (; Y !== null && !Xc(); ) Ja(Y);
}
function Ja(e) {
  var t = ec(e.alternate, e, he);
  (e.memoizedProps = e.pendingProps),
    t === null ? qa(e) : (Y = t),
    (_i.current = null);
}
function qa(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = gd(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (G = 6), (Y = null);
        return;
      }
    } else if (((n = vd(n, t, he)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  G === 0 && (G = 5);
}
function wt(e, t, n) {
  var r = O,
    l = Ce.transition;
  try {
    (Ce.transition = null), (O = 1), Nd(e, t, n, r);
  } finally {
    (Ce.transition = l), (O = r);
  }
  return null;
}
function Nd(e, t, n, r) {
  do Zt();
  while (nt !== null);
  if (R & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (lf(e, o),
    e === q && ((Y = q = null), (ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      gr ||
      ((gr = !0),
      tc(Dr, function () {
        return Zt(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ce.transition), (Ce.transition = null);
    var i = O;
    O = 1;
    var u = R;
    (R |= 4),
      (_i.current = null),
      wd(e, n),
      Ka(n, e),
      Qf(wo),
      (Mr = !!yo),
      (wo = yo = null),
      (e.current = n),
      Sd(n),
      Gc(),
      (R = u),
      (O = i),
      (Ce.transition = o);
  } else e.current = n;
  if (
    (gr && ((gr = !1), (nt = e), (qr = l)),
    (o = e.pendingLanes),
    o === 0 && (st = null),
    qc(n.stateNode),
    me(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Jr) throw ((Jr = !1), (e = $o), ($o = null), e);
  return (
    qr & 1 && e.tag !== 0 && Zt(),
    (o = e.pendingLanes),
    o & 1 ? (e === Ao ? Tn++ : ((Tn = 0), (Ao = e))) : (Tn = 0),
    ht(),
    null
  );
}
function Zt() {
  if (nt !== null) {
    var e = Rs(qr),
      t = Ce.transition,
      n = O;
    try {
      if (((Ce.transition = null), (O = 16 > e ? 16 : e), nt === null))
        var r = !1;
      else {
        if (((e = nt), (nt = null), (qr = 0), R & 6)) throw Error(y(331));
        var l = R;
        for (R |= 4, x = e.current; x !== null; ) {
          var o = x,
            i = o.child;
          if (x.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (x = c; x !== null; ) {
                  var h = x;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ln(8, h, o);
                  }
                  var m = h.child;
                  if (m !== null) (m.return = h), (x = m);
                  else
                    for (; x !== null; ) {
                      h = x;
                      var p = h.sibling,
                        v = h.return;
                      if ((Ha(h), h === c)) {
                        x = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = v), (x = p);
                        break;
                      }
                      x = v;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var D = S.sibling;
                    (S.sibling = null), (S = D);
                  } while (S !== null);
                }
              }
              x = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (x = i);
          else
            e: for (; x !== null; ) {
              if (((o = x), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ln(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (x = f);
                break e;
              }
              x = o.return;
            }
        }
        var a = e.current;
        for (x = a; x !== null; ) {
          i = x;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (x = d);
          else
            e: for (i = a; x !== null; ) {
              if (((u = x), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fl(9, u);
                  }
                } catch (E) {
                  V(u, u.return, E);
                }
              if (u === i) {
                x = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (x = g);
                break e;
              }
              x = u.return;
            }
        }
        if (
          ((R = l), ht(), Ue && typeof Ue.onPostCommitFiberRoot == "function")
        )
          try {
            Ue.onPostCommitFiberRoot(rl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (O = n), (Ce.transition = t);
    }
  }
  return !1;
}
function Wu(e, t, n) {
  (t = nn(n, t)),
    (t = Ra(e, t, 1)),
    (e = ut(e, t, 1)),
    (t = ue()),
    e !== null && (Gn(e, 1, t), me(e, t));
}
function V(e, t, n) {
  if (e.tag === 3) Wu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Wu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (st === null || !st.has(r)))
        ) {
          (e = nn(n, e)),
            (e = Oa(t, e, 1)),
            (t = ut(t, e, 1)),
            (e = ue()),
            t !== null && (Gn(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function _d(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    q === e &&
      (ee & n) === n &&
      (G === 4 || (G === 3 && (ee & 130023424) === ee && 500 > K() - Li)
        ? Et(e, 0)
        : (Pi |= n)),
    me(e, t);
}
function ba(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ur), (ur <<= 1), !(ur & 130023424) && (ur = 4194304))
      : (t = 1));
  var n = ue();
  (e = Ye(e, t)), e !== null && (Gn(e, t, n), me(e, n));
}
function Pd(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), ba(e, n);
}
function Ld(e, t) {
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
  r !== null && r.delete(t), ba(e, n);
}
var ec;
ec = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || de.current) fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (fe = !1), hd(e, t, n);
      fe = !!(e.flags & 131072);
    }
  else (fe = !1), U && t.flags & 1048576 && la(t, Hr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Pr(e, t), (e = t.pendingProps);
      var l = qt(t, oe.current);
      Gt(t, n), (l = ki(null, t, r, e, l, n));
      var o = xi();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            pe(r) ? ((o = !0), Br(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            vi(t),
            (l.updater = cl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Lo(t, r, e, n),
            (t = jo(null, t, r, !0, o, n)))
          : ((t.tag = 0), U && o && ai(t), ie(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Pr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Td(r)),
          (e = ze(r, e)),
          l)
        ) {
          case 0:
            t = To(null, t, r, e, n);
            break e;
          case 1:
            t = Du(null, t, r, e, n);
            break e;
          case 11:
            t = Ru(null, t, r, e, n);
            break e;
          case 14:
            t = Ou(null, t, r, ze(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        To(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Du(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Fa(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          ca(e, t),
          Kr(t, r, null, n);
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
            (l = nn(Error(y(423)), t)), (t = Iu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = nn(Error(y(424)), t)), (t = Iu(e, t, r, n, l));
            break e;
          } else
            for (
              ve = it(t.stateNode.containerInfo.firstChild),
                ge = t,
                U = !0,
                je = null,
                n = sa(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((bt(), r === l)) {
            t = Xe(e, t, n);
            break e;
          }
          ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        fa(t),
        e === null && No(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        So(r, l) ? (i = null) : o !== null && So(r, o) && (t.flags |= 32),
        Ma(e, t),
        ie(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && No(t), null;
    case 13:
      return Ua(e, t, n);
    case 4:
      return (
        gi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = en(t, null, r, n)) : ie(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Ru(e, t, r, l, n)
      );
    case 7:
      return ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          I(Wr, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (De(o.value, i)) {
            if (o.children === l.children && !de.current) {
              t = Xe(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = We(-1, n & -n)), (s.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (c.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      _o(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(y(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  _o(i, n, t),
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
        ie(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Gt(t, n),
        (l = Ne(l)),
        (r = r(l)),
        (t.flags |= 1),
        ie(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ze(r, t.pendingProps)),
        (l = ze(r.type, l)),
        Ou(e, t, r, l, n)
      );
    case 15:
      return Da(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Pr(e, t),
        (t.tag = 1),
        pe(r) ? ((e = !0), Br(t)) : (e = !1),
        Gt(t, n),
        ja(t, r, l),
        Lo(t, r, l, n),
        jo(null, t, r, !0, e, n)
      );
    case 19:
      return $a(e, t, n);
    case 22:
      return Ia(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function tc(e, t) {
  return Ls(e, t);
}
function zd(e, t, n, r) {
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
function Ee(e, t, n, r) {
  return new zd(e, t, n, r);
}
function Ri(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Td(e) {
  if (typeof e == "function") return Ri(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Jo)) return 11;
    if (e === qo) return 14;
  }
  return 2;
}
function ct(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ee(e.tag, t, e.key, e.mode)),
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
function Tr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Ri(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Dt:
        return Ct(n.children, l, o, t);
      case Zo:
        (i = 8), (l |= 8);
        break;
      case Jl:
        return (
          (e = Ee(12, n, t, l | 2)), (e.elementType = Jl), (e.lanes = o), e
        );
      case ql:
        return (e = Ee(13, n, t, l)), (e.elementType = ql), (e.lanes = o), e;
      case bl:
        return (e = Ee(19, n, t, l)), (e.elementType = bl), (e.lanes = o), e;
      case fs:
        return pl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case as:
              i = 10;
              break e;
            case cs:
              i = 9;
              break e;
            case Jo:
              i = 11;
              break e;
            case qo:
              i = 14;
              break e;
            case Je:
              (i = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ee(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Ct(e, t, n, r) {
  return (e = Ee(7, e, r, t)), (e.lanes = n), e;
}
function pl(e, t, n, r) {
  return (
    (e = Ee(22, e, r, t)),
    (e.elementType = fs),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Yl(e, t, n) {
  return (e = Ee(6, e, null, t)), (e.lanes = n), e;
}
function Xl(e, t, n) {
  return (
    (t = Ee(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function jd(e, t, n, r, l) {
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
    (this.eventTimes = Ll(0)),
    (this.expirationTimes = Ll(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ll(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Oi(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new jd(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ee(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    vi(o),
    e
  );
}
function Rd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ot,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function nc(e) {
  if (!e) return dt;
  e = e._reactInternals;
  e: {
    if (jt(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (pe(t.type)) {
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
    if (pe(n)) return na(e, n, t);
  }
  return t;
}
function rc(e, t, n, r, l, o, i, u, s) {
  return (
    (e = Oi(n, r, !0, e, l, o, i, u, s)),
    (e.context = nc(null)),
    (n = e.current),
    (r = ue()),
    (l = at(n)),
    (o = We(r, l)),
    (o.callback = t ?? null),
    ut(n, o, l),
    (e.current.lanes = l),
    Gn(e, l, r),
    me(e, r),
    e
  );
}
function ml(e, t, n, r) {
  var l = t.current,
    o = ue(),
    i = at(l);
  return (
    (n = nc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = We(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ut(l, t, i)),
    e !== null && (Oe(e, l, i, o), Cr(e, l, i)),
    i
  );
}
function el(e) {
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
function Di(e, t) {
  Qu(e, t), (e = e.alternate) && Qu(e, t);
}
function Od() {
  return null;
}
var lc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ii(e) {
  this._internalRoot = e;
}
hl.prototype.render = Ii.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  ml(e, t, null, null);
};
hl.prototype.unmount = Ii.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    zt(function () {
      ml(null, e, null, null);
    }),
      (t[Ke] = null);
  }
};
function hl(e) {
  this._internalRoot = e;
}
hl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Is();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < be.length && t !== 0 && t < be[n].priority; n++);
    be.splice(n, 0, e), n === 0 && Fs(e);
  }
};
function Mi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function vl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ku() {}
function Dd(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = el(i);
        o.call(c);
      };
    }
    var i = rc(t, r, e, 0, null, !1, !1, "", Ku);
    return (
      (e._reactRootContainer = i),
      (e[Ke] = i.current),
      $n(e.nodeType === 8 ? e.parentNode : e),
      zt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = el(s);
      u.call(c);
    };
  }
  var s = Oi(e, 0, !1, null, null, !1, !1, "", Ku);
  return (
    (e._reactRootContainer = s),
    (e[Ke] = s.current),
    $n(e.nodeType === 8 ? e.parentNode : e),
    zt(function () {
      ml(t, s, n, r);
    }),
    s
  );
}
function gl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = el(i);
        u.call(s);
      };
    }
    ml(t, i, e, l);
  } else i = Dd(n, t, e, l, r);
  return el(i);
}
Os = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Sn(t.pendingLanes);
        n !== 0 &&
          (ti(t, n | 1), me(t, K()), !(R & 6) && ((rn = K() + 500), ht()));
      }
      break;
    case 13:
      zt(function () {
        var r = Ye(e, 1);
        if (r !== null) {
          var l = ue();
          Oe(r, e, 1, l);
        }
      }),
        Di(e, 1);
  }
};
ni = function (e) {
  if (e.tag === 13) {
    var t = Ye(e, 134217728);
    if (t !== null) {
      var n = ue();
      Oe(t, e, 134217728, n);
    }
    Di(e, 134217728);
  }
};
Ds = function (e) {
  if (e.tag === 13) {
    var t = at(e),
      n = Ye(e, t);
    if (n !== null) {
      var r = ue();
      Oe(n, e, t, r);
    }
    Di(e, t);
  }
};
Is = function () {
  return O;
};
Ms = function (e, t) {
  var n = O;
  try {
    return (O = e), t();
  } finally {
    O = n;
  }
};
ao = function (e, t, n) {
  switch (t) {
    case "input":
      if ((no(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = ul(r);
            if (!l) throw Error(y(90));
            ps(r), no(r, l);
          }
        }
      }
      break;
    case "textarea":
      hs(e, n);
      break;
    case "select":
      (t = n.value), t != null && Qt(e, !!n.multiple, t, !1);
  }
};
xs = zi;
Es = zt;
var Id = { usingClientEntryPoint: !1, Events: [Jn, Ut, ul, Ss, ks, zi] },
  gn = {
    findFiberByHostInstance: St,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Md = {
    bundleType: gn.bundleType,
    version: gn.version,
    rendererPackageName: gn.rendererPackageName,
    rendererConfig: gn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ge.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = _s(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: gn.findFiberByHostInstance || Od,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var yr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yr.isDisabled && yr.supportsFiber)
    try {
      (rl = yr.inject(Md)), (Ue = yr);
    } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Id;
we.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Mi(t)) throw Error(y(200));
  return Rd(e, t, null, n);
};
we.createRoot = function (e, t) {
  if (!Mi(e)) throw Error(y(299));
  var n = !1,
    r = "",
    l = lc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Oi(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ke] = t.current),
    $n(e.nodeType === 8 ? e.parentNode : e),
    new Ii(t)
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
  return (e = _s(t)), (e = e === null ? null : e.stateNode), e;
};
we.flushSync = function (e) {
  return zt(e);
};
we.hydrate = function (e, t, n) {
  if (!vl(t)) throw Error(y(200));
  return gl(null, e, t, !0, n);
};
we.hydrateRoot = function (e, t, n) {
  if (!Mi(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = lc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = rc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Ke] = t.current),
    $n(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new hl(t);
};
we.render = function (e, t, n) {
  if (!vl(t)) throw Error(y(200));
  return gl(null, e, t, !1, n);
};
we.unmountComponentAtNode = function (e) {
  if (!vl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (zt(function () {
        gl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ke] = null);
        });
      }),
      !0)
    : !1;
};
we.unstable_batchedUpdates = zi;
we.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!vl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return gl(e, t, n, !1, r);
};
we.version = "18.3.1-next-f1338f8080-20240426";
function oc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oc);
    } catch (e) {
      console.error(e);
    }
}
oc(), (os.exports = we);
var Fd = os.exports,
  ic,
  Yu = Fd;
(ic = Yu.createRoot), Yu.hydrateRoot;
const Ud = {
    "zh-TW": {
      permissionSettings: "權限設定",
      permissionLevel: "權限等級",
      permissionCategory: "權限類別",
      dispensingStation: "調劑台",
      pharmacy: "藥庫",
      webPage: "網頁",
      save: "儲存",
      loading: "載入中...",
      home: "首頁",
      selectAll: "全選",
      deselectAll: "取消全選",
      items: "項目",
      selected: "已選",
      updatingPermissions: "更新權限中...",
      account: "帳號",
      login: "登入",
      password: "密碼",
      loginButton: "登入",
      invalidCredentials: "密碼錯誤",
      userNotFound: "找無此帳號",
      logout: "登出",
      insufficientPermission: "權限不足，無法存取此頁面",
    },
    en: {
      permissionSettings: "Permission Settings",
      permissionLevel: "Permission Level",
      permissionCategory: "Permission Category",
      dispensingStation: "Dispensing Station",
      pharmacy: "Pharmacy",
      webPage: "Web Page",
      save: "Save",
      loading: "Loading...",
      home: "Home",
      selectAll: "Select All",
      deselectAll: "Deselect All",
      items: "items",
      selected: "selected",
      updatingPermissions: "Updating permissions...",
      login: "Login",
      account: "ID",
      password: "Password",
      loginButton: "Login to System",
      invalidCredentials: "Invalid password",
      userNotFound: "User not found",
      logout: "Logout",
      insufficientPermission: "Insufficient permission to access this page",
    },
  },
  uc = H.createContext(void 0),
  $d = ({ children: e }) => {
    const [t, n] = H.useState("zh-TW"),
      r = (l) => Ud[t][l];
    return k.jsx(uc.Provider, {
      value: { language: t, setLanguage: n, t: r },
      children: e,
    });
  },
  bn = () => {
    const e = H.useContext(uc);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Ad = {
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
 */ const Bd = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  yl = (e, t) => {
    const n = H.forwardRef(
      (
        {
          color: r = "currentColor",
          size: l = 24,
          strokeWidth: o = 2,
          absoluteStrokeWidth: i,
          className: u = "",
          children: s,
          ...c
        },
        h
      ) =>
        H.createElement(
          "svg",
          {
            ref: h,
            ...Ad,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: i ? (Number(o) * 24) / Number(l) : o,
            className: ["lucide", `lucide-${Bd(e)}`, u].join(" "),
            ...c,
          },
          [
            ...t.map(([m, p]) => H.createElement(m, p)),
            ...(Array.isArray(s) ? s : [s]),
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
 */ const Vd = yl("Globe", [
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
 */ const Hd = yl("Layers", [
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
 */ const Wd = yl("Loader", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "6", key: "gza1u7" }],
  ["line", { x1: "12", x2: "12", y1: "18", y2: "22", key: "1qhbu9" }],
  ["line", { x1: "4.93", x2: "7.76", y1: "4.93", y2: "7.76", key: "xae44r" }],
  [
    "line",
    { x1: "16.24", x2: "19.07", y1: "16.24", y2: "19.07", key: "bxnmvf" },
  ],
  ["line", { x1: "2", x2: "6", y1: "12", y2: "12", key: "89khin" }],
  ["line", { x1: "18", x2: "22", y1: "12", y2: "12", key: "pb8tfm" }],
  ["line", { x1: "4.93", x2: "7.76", y1: "19.07", y2: "16.24", key: "1uxjnu" }],
  ["line", { x1: "16.24", x2: "19.07", y1: "7.76", y2: "4.93", key: "6duxfx" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qd = yl("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
async function Fi() {
  try {
    const t = await (await fetch("../config.txt")).text();
    return JSON.parse(t);
  } catch (e) {
    throw (
      (console.error("Error loading config:", e),
      new Error("Failed to load configuration"))
    );
  }
}
const Kd = async (e, t) => {
    const n = await Fi(),
      l = await (
        await fetch(`${n.domain}/api/session/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ Data: { ID: e, Password: t } }),
        })
      ).json();
    return (
      l.Code === 200 &&
        sessionStorage.setItem("user_session", JSON.stringify(l.Data)),
      l
    );
  },
  Yd = () => {
    sessionStorage.removeItem("user_session"), (window.location.href = "./");
  },
  tl = () => {
    const e = sessionStorage.getItem("user_session");
    return e ? JSON.parse(e) : null;
  },
  sc = (e) => {
    var n;
    if (!e) return !1;
    const t =
      (n = e.Permissions) == null
        ? void 0
        : n.find((r) => r.name === "權限設定");
    return (t == null ? void 0 : t.state) == !0;
  },
  Xd = ({ title: e }) => {
    const { language: t, setLanguage: n, t: r } = bn(),
      l = tl(),
      o = () => {
        n(t === "zh-TW" ? "en" : "zh-TW");
      };
    return k.jsx("nav", {
      className: "bg-transparent py-4 md:py-6 lg:py-8",
      children: k.jsx("div", {
        className: "mx-auto px-4 sm:px-6 lg:px-8",
        children: k.jsxs("div", {
          className: "flex justify-between items-center h-16",
          children: [
            k.jsxs("div", {
              className: "flex items-center",
              children: [
                k.jsxs("a", {
                  href: "../frontpage",
                  className:
                    "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors",
                  children: [
                    k.jsx(Hd, { className: "w-7 h-7" }),
                    k.jsx("span", { className: "sr-only", children: "Home" }),
                  ],
                }),
                k.jsxs("div", {
                  className: "ml-4",
                  children: [
                    k.jsx("h1", {
                      className:
                        "text-2xl md:text-3xl font-semibold text-gray-800 mb-2",
                      children: e,
                    }),
                    l &&
                      k.jsxs("p", {
                        className: "text-base text-gray-600",
                        children: [l.Name, " - ", l.Employer],
                      }),
                  ],
                }),
              ],
            }),
            k.jsxs("div", {
              className: "flex items-center space-x-4",
              children: [
                k.jsxs("button", {
                  onClick: o,
                  className:
                    "px-3 py-2 bg-white border border-gray-300 rounded-lg text-base text-gray-700 hover:bg-gray-50 transition-colors flex items-center",
                  children: [
                    k.jsx(Vd, { className: "w-5 h-5 mr-2" }),
                    k.jsx("span", {
                      className: "hidden sm:inline",
                      children: t === "zh-TW" ? "繁體中文" : "English",
                    }),
                  ],
                }),
                k.jsxs("button", {
                  onClick: Yd,
                  className:
                    "px-3 py-2 bg-white border border-gray-300 rounded-lg text-base text-gray-700 hover:bg-gray-50 transition-colors flex items-center",
                  children: [
                    k.jsx(Qd, { className: "w-5 h-5 mr-2" }),
                    k.jsx("span", {
                      className: "hidden sm:inline",
                      children: r("logout"),
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
  Gd = ({
    permissionLevel: e,
    setPermissionLevel: t,
    permissionCategory: n,
    setPermissionCategory: r,
    onSubmit: l,
  }) => {
    const { t: o } = bn(),
      i = Array.from({ length: 20 }, (s, c) => {
        const h = c + 1;
        return h < 10 ? `0${h}` : `${h}`;
      }),
      u = [
        { value: "調劑台", label: o("dispensingStation") },
        { value: "藥庫", label: o("pharmacy") },
        { value: "網頁", label: o("webPage") },
      ];
    return k.jsx("div", {
      className: "bg-white rounded-lg shadow-lg p-8 mb-6",
      children: k.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-8",
        children: [
          k.jsxs("div", {
            children: [
              k.jsx("label", {
                htmlFor: "permission-level",
                className: "block text-base font-semibold text-gray-700 mb-3",
                children: o("permissionLevel"),
              }),
              k.jsx("select", {
                id: "permission-level",
                value: e,
                onChange: (s) => t(s.target.value),
                className:
                  "block w-full px-4 py-3 rounded-lg border-2 border-gray-200 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out",
                children: i.map((s) =>
                  k.jsx("option", { value: s, children: s }, s)
                ),
              }),
            ],
          }),
          k.jsxs("div", {
            children: [
              k.jsx("label", {
                htmlFor: "permission-category",
                className: "block text-base font-semibold text-gray-700 mb-3",
                children: o("permissionCategory"),
              }),
              k.jsx("select", {
                id: "permission-category",
                value: n,
                onChange: (s) => r(s.target.value),
                className:
                  "block w-full px-4 py-3 rounded-lg border-2 border-gray-200 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out",
                children: u.map((s) =>
                  k.jsx(
                    "option",
                    { value: s.value, children: s.label },
                    s.value
                  )
                ),
              }),
            ],
          }),
        ],
      }),
    });
  };
let Gl = null;
async function wl() {
  return Gl || (Gl = (await Fi()).domain), Gl;
}
const Zd = async (e, t) => {
    try {
      const r = `${await wl()}/api/session/get_setting_by_type`,
        l = { Data: {}, ValueAry: [e, t] };
      console.group("API Request: Get Settings By Type"),
        console.log("URL:", r),
        console.log("Method: POST"),
        console.log("Request Payload:", l);
      const o = await fetch(r, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(l),
      });
      if (!o.ok) throw new Error(`Error: ${o.status}`);
      const i = await o.json();
      return console.log("Response:", i), console.groupEnd(), i.Data;
    } catch (n) {
      return (
        console.error("Error fetching settings:", n), console.groupEnd(), []
      );
    }
  },
  ac = async (e, t) => {
    try {
      const n = tl();
      if (!n) return !1;
      const l = `${await wl()}/api/Logger/add`,
        i = new Date().toISOString().split(".")[0],
        u = {
          Data: [
            {
              event: `level:${e},權限種類:${t}`,
              op_type: "click",
              op_id: n.ID,
              op_name: n.Name,
              op_time: i,
            },
          ],
        };
      console.group("API Request: Set Log"),
        console.log("URL:", l),
        console.log("Method: POST"),
        console.log("Request Payload:", u);
      const s = await fetch(l, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(u),
      });
      if (!s.ok) throw new Error(`Error: ${s.status}`);
      const c = await s.json();
      return console.log("Response:", c), console.groupEnd(), c.Code === 200;
    } catch (n) {
      return console.error("Error setting log:", n), console.groupEnd(), !1;
    }
  },
  Jd = async (e, t, n) => {
    try {
      const l = `${await wl()}/api/session/update_setting`,
        o = { Data: [e], ValueAry: [t] };
      console.group("API Request: Update Setting"),
        console.log("URL:", l),
        console.log("Method: POST"),
        console.log("Request Payload:", o);
      const i = await fetch(l, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(o),
      });
      if (!i.ok) throw new Error(`Error: ${i.status}`);
      const u = await i.json();
      return (
        console.log("Response:", u),
        console.groupEnd(),
        u.Code === 200 ? (await ac(t, n), !0) : !1
      );
    } catch (r) {
      return (
        console.error("Error updating setting:", r), console.groupEnd(), !1
      );
    }
  },
  qd = async (e, t, n) => {
    try {
      const l = `${await wl()}/api/session/update_setting`,
        o = { Data: e, ValueAry: [t] };
      console.group("API Request: Update Settings Batch"),
        console.log("URL:", l),
        console.log("Method: POST"),
        console.log("Request Payload:", o);
      const i = await fetch(l, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(o),
      });
      if (!i.ok) throw new Error(`Error: ${i.status}`);
      const u = await i.json();
      return (
        console.log("Response:", u),
        console.groupEnd(),
        u.Code === 200 ? (await ac(t, n), !0) : !1
      );
    } catch (r) {
      return (
        console.error("Error updating settings batch:", r),
        console.groupEnd(),
        !1
      );
    }
  },
  bd = ({
    permissionItems: e,
    setPermissionItems: t,
    permissionLevel: n,
    permissionCategory: r,
    loading: l,
  }) => {
    const { t: o } = bn(),
      [i, u] = H.useState(!1),
      s = async (p) => {
        if (i) return;
        const v = [...e],
          w = v.findIndex((S) => S.index === p);
        w !== -1 &&
          ((v[w] = { ...v[w], state: !v[w].state }),
          t(v),
          (await Jd(v[w], n, r)) ||
            ((v[w] = { ...v[w], state: !v[w].state }), t(v)));
      },
      c = async () => {
        u(!0);
        const v = !e.every((w) => w.state);
        try {
          const w = e
            .filter((S) => S.state !== v)
            .map((S) => ({ ...S, state: v }));
          w.length > 0 &&
            (await qd(w, n, r)) &&
            t(e.map((D) => ({ ...D, state: v })));
        } finally {
          u(!1);
        }
      };
    if (l)
      return k.jsx("div", {
        className:
          "bg-white rounded-lg shadow-lg p-6 min-h-[300px] flex items-center justify-center",
        children: k.jsxs("div", {
          className: "animate-pulse flex flex-col items-center",
          children: [
            k.jsx("div", {
              className:
                "h-8 w-8 border-4 border-t-blue-500 border-b-blue-500 border-l-transparent border-r-transparent rounded-full animate-spin mb-4",
            }),
            k.jsx("p", {
              className: "text-base text-gray-700",
              children: o("loading"),
            }),
          ],
        }),
      });
    const h = e.every((p) => p.state),
      m = e.filter((p) => p.state).length;
    return k.jsxs("div", {
      className: "relative bg-white rounded-lg shadow-lg p-6",
      children: [
        i &&
          k.jsx("div", {
            className:
              "absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex items-center justify-center rounded-lg",
            children: k.jsxs("div", {
              className: "flex flex-col items-center",
              children: [
                k.jsx(Wd, {
                  className: "h-8 w-8 text-blue-600 animate-spin mb-2",
                }),
                k.jsx("p", {
                  className: "text-base font-medium text-gray-700",
                  children: o("updatingPermissions"),
                }),
              ],
            }),
          }),
        k.jsxs("div", {
          className: "flex justify-between items-center mb-6",
          children: [
            k.jsxs("div", {
              className: "text-l text-gray-700",
              children: [
                o("permissionLevel"),
                ": ",
                n,
                " | ",
                o("permissionCategory"),
                ": ",
                r,
                " | ",
                o("selected"),
                ": ",
                m,
                " ",
                o("items"),
              ],
            }),
            e.length > 0 &&
              k.jsx("button", {
                onClick: c,
                disabled: i,
                className: `flex items-center justify-center px-4 py-2 rounded-lg text-l font-medium transition-colors duration-200 ${
                  h
                    ? "bg-red-100 text-red-700 hover:bg-red-200"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                } ${i ? "opacity-50 cursor-not-allowed" : ""}`,
                children: o(h ? "deselectAll" : "selectAll"),
              }),
          ],
        }),
        k.jsxs("div", {
          className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10",
          children: [
            e.map((p) =>
              k.jsxs(
                "button",
                {
                  onClick: () => s(p.index),
                  disabled: i,
                  className: `relative flex items-center justify-center px-4 py-2 rounded-lg text-base font-medium transition-colors duration-200 w-full ${
                    p.state
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  } ${i ? "opacity-50 cursor-not-allowed" : ""}`,
                  children: [
                    p.name,
                    k.jsx("div", {
                      className: `absolute rounded-xl top-1/2 left-1/2 w-[calc(100%+10px)] h-[calc(100%+10px)] transform -translate-x-1/2 -translate-y-1/2 ${
                        p.state ? "border-2 border-blue-600" : ""
                      }`,
                    }),
                  ],
                },
                p.index
              )
            ),
            e.length === 0 &&
              k.jsx("div", {
                className:
                  "col-span-full text-center py-8 text-base text-gray-700",
                children:
                  "No permission items found for the selected criteria.",
              }),
          ],
        }),
      ],
    });
  },
  ep = () => {
    const { t: e } = bn(),
      [t, n] = H.useState("01"),
      [r, l] = H.useState("調劑台"),
      [o, i] = H.useState([]),
      [u, s] = H.useState(!1),
      c = async () => {
        s(!0);
        try {
          const m = await Zd(t, r);
          i(m);
        } catch (m) {
          console.error("Error fetching permission items:", m);
        } finally {
          s(!1);
        }
      };
    H.useEffect(() => {
      c();
    }, [t, r]);
    const h = () => {
      c();
    };
    return k.jsxs("div", {
      className: "min-h-screen bg-white flex flex-col",
      children: [
        k.jsx(Xd, { title: e("permissionSettings") }),
        k.jsx("main", {
          className: "pb-16 flex-grow",
          children: k.jsxs("div", {
            className: "mx-auto px-4 sm:px-6 lg:px-8",
            children: [
              k.jsx(Gd, {
                permissionLevel: t,
                setPermissionLevel: n,
                permissionCategory: r,
                setPermissionCategory: l,
                onSubmit: h,
              }),
              k.jsx(bd, {
                permissionItems: o,
                setPermissionItems: i,
                permissionLevel: t,
                permissionCategory: r,
                loading: u,
              }),
            ],
          }),
        }),
        k.jsx("footer", {
          className:
            "bg-white shadow-sm border-t fixed bottom-0 left-0 right-0",
          children: k.jsx("div", {
            className: "max-w-7xl mx-auto py-1 px-4 sm:px-6 lg:px-8",
            children: k.jsx("p", {
              className: "text-center text-gray-700 text-sm",
              children: "Copyright ©2025 鴻森智能科技",
            }),
          }),
        }),
      ],
    });
  },
  tp = ({ onLoginSuccess: e }) => {
    const { t } = bn(),
      [n, r] = H.useState(""),
      [l, o] = H.useState(""),
      [i, u] = H.useState(""),
      [s, c] = H.useState(!1),
      h = async (m) => {
        m.preventDefault(), u(""), c(!0);
        try {
          const p = await Fi();
          if (n === p.account && l === p.password) {
            const w = {
              GUID: "super-admin",
              ID: p.account,
              Name: "Super Admin",
              Employer: "",
              loginTime: new Date().toISOString(),
              verifyTime: new Date().toISOString(),
              color: "",
              level: "super",
              license: "",
              Permissions: [
                { name: "權限設定", index: 0, type: "", state: !0 },
              ],
            };
            sessionStorage.setItem("user_session", JSON.stringify(w)), e();
            return;
          }
          const v = await Kd(n, l);
          v.Code === 200
            ? sc(v.Data)
              ? e()
              : (u(t("insufficientPermission")),
                sessionStorage.removeItem("user_session"))
            : v.Code === -1
            ? u(t("userNotFound"))
            : v.Code === -2 && u(t("invalidCredentials"));
        } catch (p) {
          u(String(p));
        } finally {
          c(!1);
        }
      };
    return k.jsxs("div", {
      className:
        "fixed inset-0 bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 z-50",
      children: [
        k.jsx("div", {
          className: "sm:mx-auto sm:w-full sm:max-w-md",
          children: k.jsx("h2", {
            className: "mt-6 text-center text-3xl font-extrabold text-gray-900",
            children: t("permissionSettings"),
          }),
        }),
        k.jsx("div", {
          className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md",
          children: k.jsx("div", {
            className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",
            children: k.jsxs("form", {
              className: "space-y-6",
              onSubmit: h,
              children: [
                k.jsxs("div", {
                  children: [
                    k.jsx("label", {
                      htmlFor: "id",
                      className: "block text-sm font-medium text-gray-700",
                      children: t("account"),
                    }),
                    k.jsx("div", {
                      className: "mt-1",
                      children: k.jsx("input", {
                        id: "id",
                        name: "id",
                        type: "text",
                        required: !0,
                        value: n,
                        onChange: (m) => r(m.target.value),
                        className:
                          "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",
                      }),
                    }),
                  ],
                }),
                k.jsxs("div", {
                  children: [
                    k.jsx("label", {
                      htmlFor: "password",
                      className: "block text-sm font-medium text-gray-700",
                      children: t("password"),
                    }),
                    k.jsx("div", {
                      className: "mt-1",
                      children: k.jsx("input", {
                        id: "password",
                        name: "password",
                        type: "password",
                        required: !0,
                        value: l,
                        onChange: (m) => o(m.target.value),
                        className:
                          "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",
                      }),
                    }),
                  ],
                }),
                i &&
                  k.jsx("div", {
                    className: "text-red-600 text-sm text-center",
                    children: i,
                  }),
                k.jsx("div", {
                  children: k.jsx("button", {
                    type: "submit",
                    disabled: s,
                    className: `w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                      s ? "opacity-50 cursor-not-allowed" : ""
                    }`,
                    children: t(s ? "loading" : "loginButton"),
                  }),
                }),
              ],
            }),
          }),
        }),
      ],
    });
  };
function np() {
  const [e, t] = H.useState(!1),
    [n, r] = H.useState(tl()),
    l = sc(n);
  H.useEffect(() => {
    (!n || !l) && t(!0);
  }, [n, l]);
  const o = () => {
    r(tl()), t(!1);
  };
  return k.jsxs($d, {
    children: [k.jsx(ep, {}), e && k.jsx(tp, { onLoginSuccess: o })],
  });
}
ic(document.getElementById("root")).render(
  k.jsx(H.StrictMode, { children: k.jsx(np, {}) })
);
