(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const a of l)
      if (a.type === "childList")
        for (const i of a.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
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
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const a = n(l);
    fetch(l.href, a);
  }
})();
var No = { exports: {} },
  fl = {},
  wo = { exports: {} },
  M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sr = Symbol.for("react.element"),
  Oc = Symbol.for("react.portal"),
  Vc = Symbol.for("react.fragment"),
  Fc = Symbol.for("react.strict_mode"),
  Qc = Symbol.for("react.profiler"),
  Wc = Symbol.for("react.provider"),
  $c = Symbol.for("react.context"),
  qc = Symbol.for("react.forward_ref"),
  Zc = Symbol.for("react.suspense"),
  Gc = Symbol.for("react.memo"),
  Kc = Symbol.for("react.lazy"),
  ti = Symbol.iterator;
function Yc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ti && e[ti]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ko = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  jo = Object.assign,
  bo = {};
function pn(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = bo),
    (this.updater = n || ko));
}
pn.prototype.isReactComponent = {};
pn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
pn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Co() {}
Co.prototype = pn.prototype;
function na(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = bo),
    (this.updater = n || ko));
}
var ra = (na.prototype = new Co());
ra.constructor = na;
jo(ra, pn.prototype);
ra.isPureReactComponent = !0;
var ni = Array.isArray,
  So = Object.prototype.hasOwnProperty,
  la = { current: null },
  Do = { key: !0, ref: !0, __self: !0, __source: !0 };
function Lo(e, t, n) {
  var r,
    l = {},
    a = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (a = "" + t.key),
    t))
      So.call(t, r) && !Do.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var u = Array(o), c = 0; c < o; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((o = e.defaultProps), o)) l[r] === void 0 && (l[r] = o[r]);
  return {
    $$typeof: sr,
    type: e,
    key: a,
    ref: i,
    props: l,
    _owner: la.current,
  };
}
function Xc(e, t) {
  return {
    $$typeof: sr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function sa(e) {
  return typeof e == "object" && e !== null && e.$$typeof === sr;
}
function Jc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ri = /\/+/g;
function _l(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Jc("" + e.key)
    : t.toString(36);
}
function Lr(e, t, n, r, l) {
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
          case sr:
          case Oc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + _l(i, 0) : r),
      ni(l)
        ? ((n = ""),
          e != null && (n = e.replace(ri, "$&/") + "/"),
          Lr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (sa(l) &&
            (l = Xc(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(ri, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), ni(e)))
    for (var o = 0; o < e.length; o++) {
      a = e[o];
      var u = r + _l(a, o);
      i += Lr(a, t, n, u, l);
    }
  else if (((u = Yc(e)), typeof u == "function"))
    for (e = u.call(e), o = 0; !(a = e.next()).done; )
      ((a = a.value), (u = r + _l(a, o++)), (i += Lr(a, t, n, u, l)));
  else if (a === "object")
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
function dr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Lr(e, r, "", "", function (a) {
      return t.call(n, a, l++);
    }),
    r
  );
}
function ed(e) {
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
var ue = { current: null },
  Er = { transition: null },
  td = {
    ReactCurrentDispatcher: ue,
    ReactCurrentBatchConfig: Er,
    ReactCurrentOwner: la,
  };
function Eo() {
  throw Error("act(...) is not supported in production builds of React.");
}
M.Children = {
  map: dr,
  forEach: function (e, t, n) {
    dr(
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
      dr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      dr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!sa(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
M.Component = pn;
M.Fragment = Vc;
M.Profiler = Qc;
M.PureComponent = na;
M.StrictMode = Fc;
M.Suspense = Zc;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = td;
M.act = Eo;
M.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = jo({}, e.props),
    l = e.key,
    a = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (i = la.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (u in t)
      So.call(t, u) &&
        !Do.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    o = Array(u);
    for (var c = 0; c < u; c++) o[c] = arguments[c + 2];
    r.children = o;
  }
  return { $$typeof: sr, type: e.type, key: l, ref: a, props: r, _owner: i };
};
M.createContext = function (e) {
  return (
    (e = {
      $$typeof: $c,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Wc, _context: e }),
    (e.Consumer = e)
  );
};
M.createElement = Lo;
M.createFactory = function (e) {
  var t = Lo.bind(null, e);
  return ((t.type = e), t);
};
M.createRef = function () {
  return { current: null };
};
M.forwardRef = function (e) {
  return { $$typeof: qc, render: e };
};
M.isValidElement = sa;
M.lazy = function (e) {
  return { $$typeof: Kc, _payload: { _status: -1, _result: e }, _init: ed };
};
M.memo = function (e, t) {
  return { $$typeof: Gc, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function (e) {
  var t = Er.transition;
  Er.transition = {};
  try {
    e();
  } finally {
    Er.transition = t;
  }
};
M.unstable_act = Eo;
M.useCallback = function (e, t) {
  return ue.current.useCallback(e, t);
};
M.useContext = function (e) {
  return ue.current.useContext(e);
};
M.useDebugValue = function () {};
M.useDeferredValue = function (e) {
  return ue.current.useDeferredValue(e);
};
M.useEffect = function (e, t) {
  return ue.current.useEffect(e, t);
};
M.useId = function () {
  return ue.current.useId();
};
M.useImperativeHandle = function (e, t, n) {
  return ue.current.useImperativeHandle(e, t, n);
};
M.useInsertionEffect = function (e, t) {
  return ue.current.useInsertionEffect(e, t);
};
M.useLayoutEffect = function (e, t) {
  return ue.current.useLayoutEffect(e, t);
};
M.useMemo = function (e, t) {
  return ue.current.useMemo(e, t);
};
M.useReducer = function (e, t, n) {
  return ue.current.useReducer(e, t, n);
};
M.useRef = function (e) {
  return ue.current.useRef(e);
};
M.useState = function (e) {
  return ue.current.useState(e);
};
M.useSyncExternalStore = function (e, t, n) {
  return ue.current.useSyncExternalStore(e, t, n);
};
M.useTransition = function () {
  return ue.current.useTransition();
};
M.version = "18.3.1";
wo.exports = M;
var T = wo.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nd = T,
  rd = Symbol.for("react.element"),
  ld = Symbol.for("react.fragment"),
  sd = Object.prototype.hasOwnProperty,
  ad = nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  id = { key: !0, ref: !0, __self: !0, __source: !0 };
function Po(e, t, n) {
  var r,
    l = {},
    a = null,
    i = null;
  (n !== void 0 && (a = "" + n),
    t.key !== void 0 && (a = "" + t.key),
    t.ref !== void 0 && (i = t.ref));
  for (r in t) sd.call(t, r) && !id.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: rd,
    type: e,
    key: a,
    ref: i,
    props: l,
    _owner: ad.current,
  };
}
fl.Fragment = ld;
fl.jsx = Po;
fl.jsxs = Po;
No.exports = fl;
var s = No.exports,
  To = { exports: {} },
  we = {},
  _o = { exports: {} },
  Ao = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(b, E) {
    var P = b.length;
    b.push(E);
    e: for (; 0 < P; ) {
      var B = (P - 1) >>> 1,
        $ = b[B];
      if (0 < l($, E)) ((b[B] = E), (b[P] = $), (P = B));
      else break e;
    }
  }
  function n(b) {
    return b.length === 0 ? null : b[0];
  }
  function r(b) {
    if (b.length === 0) return null;
    var E = b[0],
      P = b.pop();
    if (P !== E) {
      b[0] = P;
      e: for (var B = 0, $ = b.length, Pe = $ >>> 1; B < Pe; ) {
        var wt = 2 * (B + 1) - 1,
          Tl = b[wt],
          kt = wt + 1,
          cr = b[kt];
        if (0 > l(Tl, P))
          kt < $ && 0 > l(cr, Tl)
            ? ((b[B] = cr), (b[kt] = P), (B = kt))
            : ((b[B] = Tl), (b[wt] = P), (B = wt));
        else if (kt < $ && 0 > l(cr, P)) ((b[B] = cr), (b[kt] = P), (B = kt));
        else break e;
      }
    }
    return E;
  }
  function l(b, E) {
    var P = b.sortIndex - E.sortIndex;
    return P !== 0 ? P : b.id - E.id;
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
    p = 1,
    g = null,
    h = 3,
    N = !1,
    v = !1,
    w = !1,
    A = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(b) {
    for (var E = n(c); E !== null; ) {
      if (E.callback === null) r(c);
      else if (E.startTime <= b)
        (r(c), (E.sortIndex = E.expirationTime), t(u, E));
      else break;
      E = n(c);
    }
  }
  function x(b) {
    if (((w = !1), f(b), !v))
      if (n(u) !== null) ((v = !0), vn(k));
      else {
        var E = n(c);
        E !== null && yn(x, E.startTime - b);
      }
  }
  function k(b, E) {
    ((v = !1), w && ((w = !1), m(D), (D = -1)), (N = !0));
    var P = h;
    try {
      for (
        f(E), g = n(u);
        g !== null && (!(g.expirationTime > E) || (b && !ge()));
      ) {
        var B = g.callback;
        if (typeof B == "function") {
          ((g.callback = null), (h = g.priorityLevel));
          var $ = B(g.expirationTime <= E);
          ((E = e.unstable_now()),
            typeof $ == "function" ? (g.callback = $) : g === n(u) && r(u),
            f(E));
        } else r(u);
        g = n(u);
      }
      if (g !== null) var Pe = !0;
      else {
        var wt = n(c);
        (wt !== null && yn(x, wt.startTime - E), (Pe = !1));
      }
      return Pe;
    } finally {
      ((g = null), (h = P), (N = !1));
    }
  }
  var S = !1,
    j = null,
    D = -1,
    V = 5,
    _ = -1;
  function ge() {
    return !(e.unstable_now() - _ < V);
  }
  function Nt() {
    if (j !== null) {
      var b = e.unstable_now();
      _ = b;
      var E = !0;
      try {
        E = j(!0, b);
      } finally {
        E ? Ee() : ((S = !1), (j = null));
      }
    } else S = !1;
  }
  var Ee;
  if (typeof d == "function")
    Ee = function () {
      d(Nt);
    };
  else if (typeof MessageChannel < "u") {
    var xn = new MessageChannel(),
      Rt = xn.port2;
    ((xn.port1.onmessage = Nt),
      (Ee = function () {
        Rt.postMessage(null);
      }));
  } else
    Ee = function () {
      A(Nt, 0);
    };
  function vn(b) {
    ((j = b), S || ((S = !0), Ee()));
  }
  function yn(b, E) {
    D = A(function () {
      b(e.unstable_now());
    }, E);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (b) {
      b.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || N || ((v = !0), vn(k));
    }),
    (e.unstable_forceFrameRate = function (b) {
      0 > b || 125 < b
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (V = 0 < b ? Math.floor(1e3 / b) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (b) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var E = 3;
          break;
        default:
          E = h;
      }
      var P = h;
      h = E;
      try {
        return b();
      } finally {
        h = P;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (b, E) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var P = h;
      h = b;
      try {
        return E();
      } finally {
        h = P;
      }
    }),
    (e.unstable_scheduleCallback = function (b, E, P) {
      var B = e.unstable_now();
      switch (
        (typeof P == "object" && P !== null
          ? ((P = P.delay), (P = typeof P == "number" && 0 < P ? B + P : B))
          : (P = B),
        b)
      ) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return (
        ($ = P + $),
        (b = {
          id: p++,
          callback: E,
          priorityLevel: b,
          startTime: P,
          expirationTime: $,
          sortIndex: -1,
        }),
        P > B
          ? ((b.sortIndex = P),
            t(c, b),
            n(u) === null &&
              b === n(c) &&
              (w ? (m(D), (D = -1)) : (w = !0), yn(x, P - B)))
          : ((b.sortIndex = $), t(u, b), v || N || ((v = !0), vn(k))),
        b
      );
    }),
    (e.unstable_shouldYield = ge),
    (e.unstable_wrapCallback = function (b) {
      var E = h;
      return function () {
        var P = h;
        h = E;
        try {
          return b.apply(this, arguments);
        } finally {
          h = P;
        }
      };
    }));
})(Ao);
_o.exports = Ao;
var od = _o.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ud = T,
  Ne = od;
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
var Bo = new Set(),
  On = {};
function zt(e, t) {
  (an(e, t), an(e + "Capture", t));
}
function an(e, t) {
  for (On[e] = t, e = 0; e < t.length; e++) Bo.add(t[e]);
}
var Ze = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  us = Object.prototype.hasOwnProperty,
  cd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  li = {},
  si = {};
function dd(e) {
  return us.call(si, e)
    ? !0
    : us.call(li, e)
      ? !1
      : cd.test(e)
        ? (si[e] = !0)
        : ((li[e] = !0), !1);
}
function md(e, t, n, r) {
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
function fd(e, t, n, r) {
  if (t === null || typeof t > "u" || md(e, t, n, r)) return !0;
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
function ce(e, t, n, r, l, a, i) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = i));
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var aa = /[\-:]([a-z])/g;
function ia(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(aa, ia);
    ne[t] = new ce(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(aa, ia);
    ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(aa, ia);
  ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function oa(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (fd(t, n, l, r) && (n = null),
    r || l === null
      ? dd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Xe = ud.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  mr = Symbol.for("react.element"),
  Ot = Symbol.for("react.portal"),
  Vt = Symbol.for("react.fragment"),
  ua = Symbol.for("react.strict_mode"),
  cs = Symbol.for("react.profiler"),
  Mo = Symbol.for("react.provider"),
  zo = Symbol.for("react.context"),
  ca = Symbol.for("react.forward_ref"),
  ds = Symbol.for("react.suspense"),
  ms = Symbol.for("react.suspense_list"),
  da = Symbol.for("react.memo"),
  et = Symbol.for("react.lazy"),
  Io = Symbol.for("react.offscreen"),
  ai = Symbol.iterator;
function Nn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ai && e[ai]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var W = Object.assign,
  Al;
function Ln(e) {
  if (Al === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Al = (t && t[1]) || "";
    }
  return (
    `
` +
    Al +
    e
  );
}
var Bl = !1;
function Ml(e, t) {
  if (!e || Bl) return "";
  Bl = !0;
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
          a = r.stack.split(`
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
    ((Bl = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Ln(e) : "";
}
function pd(e) {
  switch (e.tag) {
    case 5:
      return Ln(e.type);
    case 16:
      return Ln("Lazy");
    case 13:
      return Ln("Suspense");
    case 19:
      return Ln("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Ml(e.type, !1)), e);
    case 11:
      return ((e = Ml(e.type.render, !1)), e);
    case 1:
      return ((e = Ml(e.type, !0)), e);
    default:
      return "";
  }
}
function fs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Vt:
      return "Fragment";
    case Ot:
      return "Portal";
    case cs:
      return "Profiler";
    case ua:
      return "StrictMode";
    case ds:
      return "Suspense";
    case ms:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case zo:
        return (e.displayName || "Context") + ".Consumer";
      case Mo:
        return (e._context.displayName || "Context") + ".Provider";
      case ca:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case da:
        return (
          (t = e.displayName || null),
          t !== null ? t : fs(e.type) || "Memo"
        );
      case et:
        ((t = e._payload), (e = e._init));
        try {
          return fs(e(t));
        } catch {}
    }
  return null;
}
function hd(e) {
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
      return fs(t);
    case 8:
      return t === ua ? "StrictMode" : "Mode";
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
function ht(e) {
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
function Ro(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function gd(e) {
  var t = Ro(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      a = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          ((r = "" + i), a.call(this, i));
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
function fr(e) {
  e._valueTracker || (e._valueTracker = gd(e));
}
function Ho(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ro(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ur(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ps(e, t) {
  var n = t.checked;
  return W({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ii(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = ht(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Uo(e, t) {
  ((t = t.checked), t != null && oa(e, "checked", t, !1));
}
function hs(e, t) {
  Uo(e, t);
  var n = ht(t.value),
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
    ? gs(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && gs(e, t.type, ht(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function oi(e, t, n) {
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
function gs(e, t, n) {
  (t !== "number" || Ur(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var En = Array.isArray;
function en(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      ((l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + ht(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function xs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return W({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ui(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (En(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: ht(n) };
}
function Oo(e, t) {
  var n = ht(t.value),
    r = ht(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function ci(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Vo(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function vs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Vo(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var pr,
  Fo = (function (e) {
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
        pr = pr || document.createElement("div"),
          pr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = pr.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Vn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var _n = {
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
  xd = ["Webkit", "ms", "Moz", "O"];
Object.keys(_n).forEach(function (e) {
  xd.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (_n[t] = _n[e]));
  });
});
function Qo(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (_n.hasOwnProperty(e) && _n[e])
      ? ("" + t).trim()
      : t + "px";
}
function Wo(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Qo(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
    }
}
var vd = W(
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
function ys(e, t) {
  if (t) {
    if (vd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function Ns(e, t) {
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
var ws = null;
function ma(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ks = null,
  tn = null,
  nn = null;
function di(e) {
  if ((e = or(e))) {
    if (typeof ks != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = vl(t)), ks(e.stateNode, e.type, t));
  }
}
function $o(e) {
  tn ? (nn ? nn.push(e) : (nn = [e])) : (tn = e);
}
function qo() {
  if (tn) {
    var e = tn,
      t = nn;
    if (((nn = tn = null), di(e), t)) for (e = 0; e < t.length; e++) di(t[e]);
  }
}
function Zo(e, t) {
  return e(t);
}
function Go() {}
var zl = !1;
function Ko(e, t, n) {
  if (zl) return e(t, n);
  zl = !0;
  try {
    return Zo(e, t, n);
  } finally {
    ((zl = !1), (tn !== null || nn !== null) && (Go(), qo()));
  }
}
function Fn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = vl(n);
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
var js = !1;
if (Ze)
  try {
    var wn = {};
    (Object.defineProperty(wn, "passive", {
      get: function () {
        js = !0;
      },
    }),
      window.addEventListener("test", wn, wn),
      window.removeEventListener("test", wn, wn));
  } catch {
    js = !1;
  }
function yd(e, t, n, r, l, a, i, o, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (p) {
    this.onError(p);
  }
}
var An = !1,
  Or = null,
  Vr = !1,
  bs = null,
  Nd = {
    onError: function (e) {
      ((An = !0), (Or = e));
    },
  };
function wd(e, t, n, r, l, a, i, o, u) {
  ((An = !1), (Or = null), yd.apply(Nd, arguments));
}
function kd(e, t, n, r, l, a, i, o, u) {
  if ((wd.apply(this, arguments), An)) {
    if (An) {
      var c = Or;
      ((An = !1), (Or = null));
    } else throw Error(y(198));
    Vr || ((Vr = !0), (bs = c));
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
function Yo(e) {
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
function mi(e) {
  if (It(e) !== e) throw Error(y(188));
}
function jd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = It(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var a = l.alternate;
    if (a === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === a.child) {
      for (a = l.child; a; ) {
        if (a === n) return (mi(l), e);
        if (a === r) return (mi(l), t);
        a = a.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) ((n = l), (r = a));
    else {
      for (var i = !1, o = l.child; o; ) {
        if (o === n) {
          ((i = !0), (n = l), (r = a));
          break;
        }
        if (o === r) {
          ((i = !0), (r = l), (n = a));
          break;
        }
        o = o.sibling;
      }
      if (!i) {
        for (o = a.child; o; ) {
          if (o === n) {
            ((i = !0), (n = a), (r = l));
            break;
          }
          if (o === r) {
            ((i = !0), (r = a), (n = l));
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
function Xo(e) {
  return ((e = jd(e)), e !== null ? Jo(e) : null);
}
function Jo(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Jo(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var eu = Ne.unstable_scheduleCallback,
  fi = Ne.unstable_cancelCallback,
  bd = Ne.unstable_shouldYield,
  Cd = Ne.unstable_requestPaint,
  Z = Ne.unstable_now,
  Sd = Ne.unstable_getCurrentPriorityLevel,
  fa = Ne.unstable_ImmediatePriority,
  tu = Ne.unstable_UserBlockingPriority,
  Fr = Ne.unstable_NormalPriority,
  Dd = Ne.unstable_LowPriority,
  nu = Ne.unstable_IdlePriority,
  pl = null,
  Oe = null;
function Ld(e) {
  if (Oe && typeof Oe.onCommitFiberRoot == "function")
    try {
      Oe.onCommitFiberRoot(pl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Me = Math.clz32 ? Math.clz32 : Td,
  Ed = Math.log,
  Pd = Math.LN2;
function Td(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ed(e) / Pd) | 0)) | 0);
}
var hr = 64,
  gr = 4194304;
function Pn(e) {
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
function Qr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    a = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var o = i & ~l;
    o !== 0 ? (r = Pn(o)) : ((a &= i), a !== 0 && (r = Pn(a)));
  } else ((i = n & ~l), i !== 0 ? (r = Pn(i)) : a !== 0 && (r = Pn(a)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (a = t & -t), l >= a || (l === 16 && (a & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Me(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
  return r;
}
function _d(e, t) {
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
function Ad(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;
  ) {
    var i = 31 - Me(a),
      o = 1 << i,
      u = l[i];
    (u === -1
      ? (!(o & n) || o & r) && (l[i] = _d(o, t))
      : u <= t && (e.expiredLanes |= o),
      (a &= ~o));
  }
}
function Cs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ru() {
  var e = hr;
  return ((hr <<= 1), !(hr & 4194240) && (hr = 64), e);
}
function Il(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ar(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Me(t)),
    (e[t] = n));
}
function Bd(e, t) {
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
    var l = 31 - Me(n),
      a = 1 << l;
    ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~a));
  }
}
function pa(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Me(n),
      l = 1 << r;
    ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
  }
}
var I = 0;
function lu(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var su,
  ha,
  au,
  iu,
  ou,
  Ss = !1,
  xr = [],
  it = null,
  ot = null,
  ut = null,
  Qn = new Map(),
  Wn = new Map(),
  nt = [],
  Md =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function pi(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      it = null;
      break;
    case "dragenter":
    case "dragleave":
      ot = null;
      break;
    case "mouseover":
    case "mouseout":
      ut = null;
      break;
    case "pointerover":
    case "pointerout":
      Qn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Wn.delete(t.pointerId);
  }
}
function kn(e, t, n, r, l, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [l],
      }),
      t !== null && ((t = or(t)), t !== null && ha(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function zd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ((it = kn(it, e, t, n, r, l)), !0);
    case "dragenter":
      return ((ot = kn(ot, e, t, n, r, l)), !0);
    case "mouseover":
      return ((ut = kn(ut, e, t, n, r, l)), !0);
    case "pointerover":
      var a = l.pointerId;
      return (Qn.set(a, kn(Qn.get(a) || null, e, t, n, r, l)), !0);
    case "gotpointercapture":
      return (
        (a = l.pointerId),
        Wn.set(a, kn(Wn.get(a) || null, e, t, n, r, l)),
        !0
      );
  }
  return !1;
}
function uu(e) {
  var t = St(e.target);
  if (t !== null) {
    var n = It(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Yo(n)), t !== null)) {
          ((e.blockedOn = t),
            ou(e.priority, function () {
              au(n);
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
function Pr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ds(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((ws = r), n.target.dispatchEvent(r), (ws = null));
    } else return ((t = or(n)), t !== null && ha(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function hi(e, t, n) {
  Pr(e) && n.delete(t);
}
function Id() {
  ((Ss = !1),
    it !== null && Pr(it) && (it = null),
    ot !== null && Pr(ot) && (ot = null),
    ut !== null && Pr(ut) && (ut = null),
    Qn.forEach(hi),
    Wn.forEach(hi));
}
function jn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ss ||
      ((Ss = !0),
      Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, Id)));
}
function $n(e) {
  function t(l) {
    return jn(l, e);
  }
  if (0 < xr.length) {
    jn(xr[0], e);
    for (var n = 1; n < xr.length; n++) {
      var r = xr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    it !== null && jn(it, e),
      ot !== null && jn(ot, e),
      ut !== null && jn(ut, e),
      Qn.forEach(t),
      Wn.forEach(t),
      n = 0;
    n < nt.length;
    n++
  )
    ((r = nt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < nt.length && ((n = nt[0]), n.blockedOn === null); )
    (uu(n), n.blockedOn === null && nt.shift());
}
var rn = Xe.ReactCurrentBatchConfig,
  Wr = !0;
function Rd(e, t, n, r) {
  var l = I,
    a = rn.transition;
  rn.transition = null;
  try {
    ((I = 1), ga(e, t, n, r));
  } finally {
    ((I = l), (rn.transition = a));
  }
}
function Hd(e, t, n, r) {
  var l = I,
    a = rn.transition;
  rn.transition = null;
  try {
    ((I = 4), ga(e, t, n, r));
  } finally {
    ((I = l), (rn.transition = a));
  }
}
function ga(e, t, n, r) {
  if (Wr) {
    var l = Ds(e, t, n, r);
    if (l === null) (ql(e, t, r, $r, n), pi(e, r));
    else if (zd(l, e, t, n, r)) r.stopPropagation();
    else if ((pi(e, r), t & 4 && -1 < Md.indexOf(e))) {
      for (; l !== null; ) {
        var a = or(l);
        if (
          (a !== null && su(a),
          (a = Ds(e, t, n, r)),
          a === null && ql(e, t, r, $r, n),
          a === l)
        )
          break;
        l = a;
      }
      l !== null && r.stopPropagation();
    } else ql(e, t, r, null, n);
  }
}
var $r = null;
function Ds(e, t, n, r) {
  if ((($r = null), (e = ma(r)), (e = St(e)), e !== null))
    if (((t = It(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Yo(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (($r = e), null);
}
function cu(e) {
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
      switch (Sd()) {
        case fa:
          return 1;
        case tu:
          return 4;
        case Fr:
        case Dd:
          return 16;
        case nu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var st = null,
  xa = null,
  Tr = null;
function du() {
  if (Tr) return Tr;
  var e,
    t = xa,
    n = t.length,
    r,
    l = "value" in st ? st.value : st.textContent,
    a = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[a - r]; r++);
  return (Tr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function _r(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function vr() {
  return !0;
}
function gi() {
  return !1;
}
function ke(e) {
  function t(n, r, l, a, i) {
    ((this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = a),
      (this.target = i),
      (this.currentTarget = null));
    for (var o in e)
      e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(a) : a[o]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? vr
        : gi),
      (this.isPropagationStopped = gi),
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
          (this.isDefaultPrevented = vr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = vr));
      },
      persist: function () {},
      isPersistent: vr,
    }),
    t
  );
}
var hn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  va = ke(hn),
  ir = W({}, hn, { view: 0, detail: 0 }),
  Ud = ke(ir),
  Rl,
  Hl,
  bn,
  hl = W({}, ir, {
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
    getModifierState: ya,
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
        : (e !== bn &&
            (bn && e.type === "mousemove"
              ? ((Rl = e.screenX - bn.screenX), (Hl = e.screenY - bn.screenY))
              : (Hl = Rl = 0),
            (bn = e)),
          Rl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Hl;
    },
  }),
  xi = ke(hl),
  Od = W({}, hl, { dataTransfer: 0 }),
  Vd = ke(Od),
  Fd = W({}, ir, { relatedTarget: 0 }),
  Ul = ke(Fd),
  Qd = W({}, hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Wd = ke(Qd),
  $d = W({}, hn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  qd = ke($d),
  Zd = W({}, hn, { data: 0 }),
  vi = ke(Zd),
  Gd = {
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
  Kd = {
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
  Yd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Xd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Yd[e]) ? !!t[e] : !1;
}
function ya() {
  return Xd;
}
var Jd = W({}, ir, {
    key: function (e) {
      if (e.key) {
        var t = Gd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = _r(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Kd[e.keyCode] || "Unidentified"
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
    getModifierState: ya,
    charCode: function (e) {
      return e.type === "keypress" ? _r(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? _r(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  e0 = ke(Jd),
  t0 = W({}, hl, {
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
  yi = ke(t0),
  n0 = W({}, ir, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ya,
  }),
  r0 = ke(n0),
  l0 = W({}, hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  s0 = ke(l0),
  a0 = W({}, hl, {
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
  i0 = ke(a0),
  o0 = [9, 13, 27, 32],
  Na = Ze && "CompositionEvent" in window,
  Bn = null;
Ze && "documentMode" in document && (Bn = document.documentMode);
var u0 = Ze && "TextEvent" in window && !Bn,
  mu = Ze && (!Na || (Bn && 8 < Bn && 11 >= Bn)),
  Ni = " ",
  wi = !1;
function fu(e, t) {
  switch (e) {
    case "keyup":
      return o0.indexOf(t.keyCode) !== -1;
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
function pu(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Ft = !1;
function c0(e, t) {
  switch (e) {
    case "compositionend":
      return pu(t);
    case "keypress":
      return t.which !== 32 ? null : ((wi = !0), Ni);
    case "textInput":
      return ((e = t.data), e === Ni && wi ? null : e);
    default:
      return null;
  }
}
function d0(e, t) {
  if (Ft)
    return e === "compositionend" || (!Na && fu(e, t))
      ? ((e = du()), (Tr = xa = st = null), (Ft = !1), e)
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
      return mu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var m0 = {
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
function ki(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!m0[e.type] : t === "textarea";
}
function hu(e, t, n, r) {
  ($o(r),
    (t = qr(t, "onChange")),
    0 < t.length &&
      ((n = new va("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Mn = null,
  qn = null;
function f0(e) {
  Su(e, 0);
}
function gl(e) {
  var t = $t(e);
  if (Ho(t)) return e;
}
function p0(e, t) {
  if (e === "change") return t;
}
var gu = !1;
if (Ze) {
  var Ol;
  if (Ze) {
    var Vl = "oninput" in document;
    if (!Vl) {
      var ji = document.createElement("div");
      (ji.setAttribute("oninput", "return;"),
        (Vl = typeof ji.oninput == "function"));
    }
    Ol = Vl;
  } else Ol = !1;
  gu = Ol && (!document.documentMode || 9 < document.documentMode);
}
function bi() {
  Mn && (Mn.detachEvent("onpropertychange", xu), (qn = Mn = null));
}
function xu(e) {
  if (e.propertyName === "value" && gl(qn)) {
    var t = [];
    (hu(t, qn, e, ma(e)), Ko(f0, t));
  }
}
function h0(e, t, n) {
  e === "focusin"
    ? (bi(), (Mn = t), (qn = n), Mn.attachEvent("onpropertychange", xu))
    : e === "focusout" && bi();
}
function g0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return gl(qn);
}
function x0(e, t) {
  if (e === "click") return gl(t);
}
function v0(e, t) {
  if (e === "input" || e === "change") return gl(t);
}
function y0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ie = typeof Object.is == "function" ? Object.is : y0;
function Zn(e, t) {
  if (Ie(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!us.call(t, l) || !Ie(e[l], t[l])) return !1;
  }
  return !0;
}
function Ci(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Si(e, t) {
  var n = Ci(e);
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
    n = Ci(n);
  }
}
function vu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? vu(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function yu() {
  for (var e = window, t = Ur(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ur(e.document);
  }
  return t;
}
function wa(e) {
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
function N0(e) {
  var t = yu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    vu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && wa(n)) {
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
          a = Math.min(r.start, l);
        ((r = r.end === void 0 ? a : Math.min(r.end, l)),
          !e.extend && a > r && ((l = r), (r = a), (a = l)),
          (l = Si(n, a)));
        var i = Si(n, r);
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
          a > r
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
var w0 = Ze && "documentMode" in document && 11 >= document.documentMode,
  Qt = null,
  Ls = null,
  zn = null,
  Es = !1;
function Di(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Es ||
    Qt == null ||
    Qt !== Ur(r) ||
    ((r = Qt),
    "selectionStart" in r && wa(r)
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
    (zn && Zn(zn, r)) ||
      ((zn = r),
      (r = qr(Ls, "onSelect")),
      0 < r.length &&
        ((t = new va("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Qt))));
}
function yr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Wt = {
    animationend: yr("Animation", "AnimationEnd"),
    animationiteration: yr("Animation", "AnimationIteration"),
    animationstart: yr("Animation", "AnimationStart"),
    transitionend: yr("Transition", "TransitionEnd"),
  },
  Fl = {},
  Nu = {};
Ze &&
  ((Nu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Wt.animationend.animation,
    delete Wt.animationiteration.animation,
    delete Wt.animationstart.animation),
  "TransitionEvent" in window || delete Wt.transitionend.transition);
function xl(e) {
  if (Fl[e]) return Fl[e];
  if (!Wt[e]) return e;
  var t = Wt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Nu) return (Fl[e] = t[n]);
  return e;
}
var wu = xl("animationend"),
  ku = xl("animationiteration"),
  ju = xl("animationstart"),
  bu = xl("transitionend"),
  Cu = new Map(),
  Li =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function xt(e, t) {
  (Cu.set(e, t), zt(t, [e]));
}
for (var Ql = 0; Ql < Li.length; Ql++) {
  var Wl = Li[Ql],
    k0 = Wl.toLowerCase(),
    j0 = Wl[0].toUpperCase() + Wl.slice(1);
  xt(k0, "on" + j0);
}
xt(wu, "onAnimationEnd");
xt(ku, "onAnimationIteration");
xt(ju, "onAnimationStart");
xt("dblclick", "onDoubleClick");
xt("focusin", "onFocus");
xt("focusout", "onBlur");
xt(bu, "onTransitionEnd");
an("onMouseEnter", ["mouseout", "mouseover"]);
an("onMouseLeave", ["mouseout", "mouseover"]);
an("onPointerEnter", ["pointerout", "pointerover"]);
an("onPointerLeave", ["pointerout", "pointerover"]);
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
var Tn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  b0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));
function Ei(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), kd(r, t, void 0, e), (e.currentTarget = null));
}
function Su(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var o = r[i],
            u = o.instance,
            c = o.currentTarget;
          if (((o = o.listener), u !== a && l.isPropagationStopped())) break e;
          (Ei(l, o, c), (a = u));
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((o = r[i]),
            (u = o.instance),
            (c = o.currentTarget),
            (o = o.listener),
            u !== a && l.isPropagationStopped())
          )
            break e;
          (Ei(l, o, c), (a = u));
        }
    }
  }
  if (Vr) throw ((e = bs), (Vr = !1), (bs = null), e);
}
function H(e, t) {
  var n = t[Bs];
  n === void 0 && (n = t[Bs] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Du(t, e, 2, !1), n.add(r));
}
function $l(e, t, n) {
  var r = 0;
  (t && (r |= 4), Du(n, e, r, t));
}
var Nr = "_reactListening" + Math.random().toString(36).slice(2);
function Gn(e) {
  if (!e[Nr]) {
    ((e[Nr] = !0),
      Bo.forEach(function (n) {
        n !== "selectionchange" && (b0.has(n) || $l(n, !1, e), $l(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Nr] || ((t[Nr] = !0), $l("selectionchange", !1, t));
  }
}
function Du(e, t, n, r) {
  switch (cu(t)) {
    case 1:
      var l = Rd;
      break;
    case 4:
      l = Hd;
      break;
    default:
      l = ga;
  }
  ((n = l.bind(null, t, n, e)),
    (l = void 0),
    !js ||
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
function ql(e, t, n, r, l) {
  var a = r;
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
            r = a = i;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
  Ko(function () {
    var c = a,
      p = ma(n),
      g = [];
    e: {
      var h = Cu.get(e);
      if (h !== void 0) {
        var N = va,
          v = e;
        switch (e) {
          case "keypress":
            if (_r(n) === 0) break e;
          case "keydown":
          case "keyup":
            N = e0;
            break;
          case "focusin":
            ((v = "focus"), (N = Ul));
            break;
          case "focusout":
            ((v = "blur"), (N = Ul));
            break;
          case "beforeblur":
          case "afterblur":
            N = Ul;
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
            N = xi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            N = Vd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            N = r0;
            break;
          case wu:
          case ku:
          case ju:
            N = Wd;
            break;
          case bu:
            N = s0;
            break;
          case "scroll":
            N = Ud;
            break;
          case "wheel":
            N = i0;
            break;
          case "copy":
          case "cut":
          case "paste":
            N = qd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            N = yi;
        }
        var w = (t & 4) !== 0,
          A = !w && e === "scroll",
          m = w ? (h !== null ? h + "Capture" : null) : h;
        w = [];
        for (var d = c, f; d !== null; ) {
          f = d;
          var x = f.stateNode;
          if (
            (f.tag === 5 &&
              x !== null &&
              ((f = x),
              m !== null && ((x = Fn(d, m)), x != null && w.push(Kn(d, x, f)))),
            A)
          )
            break;
          d = d.return;
        }
        0 < w.length &&
          ((h = new N(h, v, null, n, p)), g.push({ event: h, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (N = e === "mouseout" || e === "pointerout"),
          h &&
            n !== ws &&
            (v = n.relatedTarget || n.fromElement) &&
            (St(v) || v[Ge]))
        )
          break e;
        if (
          (N || h) &&
          ((h =
            p.window === p
              ? p
              : (h = p.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
          N
            ? ((v = n.relatedTarget || n.toElement),
              (N = c),
              (v = v ? St(v) : null),
              v !== null &&
                ((A = It(v)), v !== A || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((N = null), (v = c)),
          N !== v)
        ) {
          if (
            ((w = xi),
            (x = "onMouseLeave"),
            (m = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = yi),
              (x = "onPointerLeave"),
              (m = "onPointerEnter"),
              (d = "pointer")),
            (A = N == null ? h : $t(N)),
            (f = v == null ? h : $t(v)),
            (h = new w(x, d + "leave", N, n, p)),
            (h.target = A),
            (h.relatedTarget = f),
            (x = null),
            St(p) === c &&
              ((w = new w(m, d + "enter", v, n, p)),
              (w.target = f),
              (w.relatedTarget = A),
              (x = w)),
            (A = x),
            N && v)
          )
            t: {
              for (w = N, m = v, d = 0, f = w; f; f = Ht(f)) d++;
              for (f = 0, x = m; x; x = Ht(x)) f++;
              for (; 0 < d - f; ) ((w = Ht(w)), d--);
              for (; 0 < f - d; ) ((m = Ht(m)), f--);
              for (; d--; ) {
                if (w === m || (m !== null && w === m.alternate)) break t;
                ((w = Ht(w)), (m = Ht(m)));
              }
              w = null;
            }
          else w = null;
          (N !== null && Pi(g, h, N, w, !1),
            v !== null && A !== null && Pi(g, A, v, w, !0));
        }
      }
      e: {
        if (
          ((h = c ? $t(c) : window),
          (N = h.nodeName && h.nodeName.toLowerCase()),
          N === "select" || (N === "input" && h.type === "file"))
        )
          var k = p0;
        else if (ki(h))
          if (gu) k = v0;
          else {
            k = g0;
            var S = h0;
          }
        else
          (N = h.nodeName) &&
            N.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (k = x0);
        if (k && (k = k(e, c))) {
          hu(g, k, n, p);
          break e;
        }
        (S && S(e, h, c),
          e === "focusout" &&
            (S = h._wrapperState) &&
            S.controlled &&
            h.type === "number" &&
            gs(h, "number", h.value));
      }
      switch (((S = c ? $t(c) : window), e)) {
        case "focusin":
          (ki(S) || S.contentEditable === "true") &&
            ((Qt = S), (Ls = c), (zn = null));
          break;
        case "focusout":
          zn = Ls = Qt = null;
          break;
        case "mousedown":
          Es = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Es = !1), Di(g, n, p));
          break;
        case "selectionchange":
          if (w0) break;
        case "keydown":
        case "keyup":
          Di(g, n, p);
      }
      var j;
      if (Na)
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
        Ft
          ? fu(e, n) && (D = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (D = "onCompositionStart");
      (D &&
        (mu &&
          n.locale !== "ko" &&
          (Ft || D !== "onCompositionStart"
            ? D === "onCompositionEnd" && Ft && (j = du())
            : ((st = p),
              (xa = "value" in st ? st.value : st.textContent),
              (Ft = !0))),
        (S = qr(c, D)),
        0 < S.length &&
          ((D = new vi(D, e, null, n, p)),
          g.push({ event: D, listeners: S }),
          j ? (D.data = j) : ((j = pu(n)), j !== null && (D.data = j)))),
        (j = u0 ? c0(e, n) : d0(e, n)) &&
          ((c = qr(c, "onBeforeInput")),
          0 < c.length &&
            ((p = new vi("onBeforeInput", "beforeinput", null, n, p)),
            g.push({ event: p, listeners: c }),
            (p.data = j))));
    }
    Su(g, t);
  });
}
function Kn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function qr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      a = l.stateNode;
    (l.tag === 5 &&
      a !== null &&
      ((l = a),
      (a = Fn(e, n)),
      a != null && r.unshift(Kn(e, a, l)),
      (a = Fn(e, t)),
      a != null && r.push(Kn(e, a, l))),
      (e = e.return));
  }
  return r;
}
function Ht(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Pi(e, t, n, r, l) {
  for (var a = t._reactName, i = []; n !== null && n !== r; ) {
    var o = n,
      u = o.alternate,
      c = o.stateNode;
    if (u !== null && u === r) break;
    (o.tag === 5 &&
      c !== null &&
      ((o = c),
      l
        ? ((u = Fn(n, a)), u != null && i.unshift(Kn(n, u, o)))
        : l || ((u = Fn(n, a)), u != null && i.push(Kn(n, u, o)))),
      (n = n.return));
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var C0 = /\r\n?/g,
  S0 = /\u0000|\uFFFD/g;
function Ti(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      C0,
      `
`,
    )
    .replace(S0, "");
}
function wr(e, t, n) {
  if (((t = Ti(t)), Ti(e) !== t && n)) throw Error(y(425));
}
function Zr() {}
var Ps = null,
  Ts = null;
function _s(e, t) {
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
var As = typeof setTimeout == "function" ? setTimeout : void 0,
  D0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  _i = typeof Promise == "function" ? Promise : void 0,
  L0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof _i < "u"
        ? function (e) {
            return _i.resolve(null).then(e).catch(E0);
          }
        : As;
function E0(e) {
  setTimeout(function () {
    throw e;
  });
}
function Zl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(l), $n(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  $n(t);
}
function ct(e) {
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
function Ai(e) {
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
var gn = Math.random().toString(36).slice(2),
  Ue = "__reactFiber$" + gn,
  Yn = "__reactProps$" + gn,
  Ge = "__reactContainer$" + gn,
  Bs = "__reactEvents$" + gn,
  P0 = "__reactListeners$" + gn,
  T0 = "__reactHandles$" + gn;
function St(e) {
  var t = e[Ue];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ge] || n[Ue])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ai(e); e !== null; ) {
          if ((n = e[Ue])) return n;
          e = Ai(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function or(e) {
  return (
    (e = e[Ue] || e[Ge]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function $t(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function vl(e) {
  return e[Yn] || null;
}
var Ms = [],
  qt = -1;
function vt(e) {
  return { current: e };
}
function U(e) {
  0 > qt || ((e.current = Ms[qt]), (Ms[qt] = null), qt--);
}
function R(e, t) {
  (qt++, (Ms[qt] = e.current), (e.current = t));
}
var gt = {},
  ae = vt(gt),
  fe = vt(!1),
  Tt = gt;
function on(e, t) {
  var n = e.type.contextTypes;
  if (!n) return gt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    a;
  for (a in n) l[a] = t[a];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function pe(e) {
  return ((e = e.childContextTypes), e != null);
}
function Gr() {
  (U(fe), U(ae));
}
function Bi(e, t, n) {
  if (ae.current !== gt) throw Error(y(168));
  (R(ae, t), R(fe, n));
}
function Lu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, hd(e) || "Unknown", l));
  return W({}, n, r);
}
function Kr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || gt),
    (Tt = ae.current),
    R(ae, e),
    R(fe, fe.current),
    !0
  );
}
function Mi(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  (n
    ? ((e = Lu(e, t, Tt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(fe),
      U(ae),
      R(ae, e))
    : U(fe),
    R(fe, n));
}
var Qe = null,
  yl = !1,
  Gl = !1;
function Eu(e) {
  Qe === null ? (Qe = [e]) : Qe.push(e);
}
function _0(e) {
  ((yl = !0), Eu(e));
}
function yt() {
  if (!Gl && Qe !== null) {
    Gl = !0;
    var e = 0,
      t = I;
    try {
      var n = Qe;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Qe = null), (yl = !1));
    } catch (l) {
      throw (Qe !== null && (Qe = Qe.slice(e + 1)), eu(fa, yt), l);
    } finally {
      ((I = t), (Gl = !1));
    }
  }
  return null;
}
var Zt = [],
  Gt = 0,
  Yr = null,
  Xr = 0,
  je = [],
  be = 0,
  _t = null,
  We = 1,
  $e = "";
function bt(e, t) {
  ((Zt[Gt++] = Xr), (Zt[Gt++] = Yr), (Yr = e), (Xr = t));
}
function Pu(e, t, n) {
  ((je[be++] = We), (je[be++] = $e), (je[be++] = _t), (_t = e));
  var r = We;
  e = $e;
  var l = 32 - Me(r) - 1;
  ((r &= ~(1 << l)), (n += 1));
  var a = 32 - Me(t) + l;
  if (30 < a) {
    var i = l - (l % 5);
    ((a = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (We = (1 << (32 - Me(t) + l)) | (n << l) | r),
      ($e = a + e));
  } else ((We = (1 << a) | (n << l) | r), ($e = e));
}
function ka(e) {
  e.return !== null && (bt(e, 1), Pu(e, 1, 0));
}
function ja(e) {
  for (; e === Yr; )
    ((Yr = Zt[--Gt]), (Zt[Gt] = null), (Xr = Zt[--Gt]), (Zt[Gt] = null));
  for (; e === _t; )
    ((_t = je[--be]),
      (je[be] = null),
      ($e = je[--be]),
      (je[be] = null),
      (We = je[--be]),
      (je[be] = null));
}
var ye = null,
  ve = null,
  O = !1,
  Be = null;
function Tu(e, t) {
  var n = Ce(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function zi(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ye = e), (ve = ct(t.firstChild)), !0)
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
          ? ((n = _t !== null ? { id: We, overflow: $e } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ce(18, null, null, 0)),
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
function zs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Is(e) {
  if (O) {
    var t = ve;
    if (t) {
      var n = t;
      if (!zi(e, t)) {
        if (zs(e)) throw Error(y(418));
        t = ct(n.nextSibling);
        var r = ye;
        t && zi(e, t)
          ? Tu(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (O = !1), (ye = e));
      }
    } else {
      if (zs(e)) throw Error(y(418));
      ((e.flags = (e.flags & -4097) | 2), (O = !1), (ye = e));
    }
  }
}
function Ii(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ye = e;
}
function kr(e) {
  if (e !== ye) return !1;
  if (!O) return (Ii(e), (O = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !_s(e.type, e.memoizedProps))),
    t && (t = ve))
  ) {
    if (zs(e)) throw (_u(), Error(y(418)));
    for (; t; ) (Tu(e, t), (t = ct(t.nextSibling)));
  }
  if ((Ii(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ve = ct(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else ve = ye ? ct(e.stateNode.nextSibling) : null;
  return !0;
}
function _u() {
  for (var e = ve; e; ) e = ct(e.nextSibling);
}
function un() {
  ((ve = ye = null), (O = !1));
}
function ba(e) {
  Be === null ? (Be = [e]) : Be.push(e);
}
var A0 = Xe.ReactCurrentBatchConfig;
function Cn(e, t, n) {
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
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function jr(e, t) {
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
function Ri(e) {
  var t = e._init;
  return t(e._payload);
}
function Au(e) {
  function t(m, d) {
    if (e) {
      var f = m.deletions;
      f === null ? ((m.deletions = [d]), (m.flags |= 16)) : f.push(d);
    }
  }
  function n(m, d) {
    if (!e) return null;
    for (; d !== null; ) (t(m, d), (d = d.sibling));
    return null;
  }
  function r(m, d) {
    for (m = new Map(); d !== null; )
      (d.key !== null ? m.set(d.key, d) : m.set(d.index, d), (d = d.sibling));
    return m;
  }
  function l(m, d) {
    return ((m = pt(m, d)), (m.index = 0), (m.sibling = null), m);
  }
  function a(m, d, f) {
    return (
      (m.index = f),
      e
        ? ((f = m.alternate),
          f !== null
            ? ((f = f.index), f < d ? ((m.flags |= 2), d) : f)
            : ((m.flags |= 2), d))
        : ((m.flags |= 1048576), d)
    );
  }
  function i(m) {
    return (e && m.alternate === null && (m.flags |= 2), m);
  }
  function o(m, d, f, x) {
    return d === null || d.tag !== 6
      ? ((d = ns(f, m.mode, x)), (d.return = m), d)
      : ((d = l(d, f)), (d.return = m), d);
  }
  function u(m, d, f, x) {
    var k = f.type;
    return k === Vt
      ? p(m, d, f.props.children, x, f.key)
      : d !== null &&
          (d.elementType === k ||
            (typeof k == "object" &&
              k !== null &&
              k.$$typeof === et &&
              Ri(k) === d.type))
        ? ((x = l(d, f.props)), (x.ref = Cn(m, d, f)), (x.return = m), x)
        : ((x = Hr(f.type, f.key, f.props, null, m.mode, x)),
          (x.ref = Cn(m, d, f)),
          (x.return = m),
          x);
  }
  function c(m, d, f, x) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== f.containerInfo ||
      d.stateNode.implementation !== f.implementation
      ? ((d = rs(f, m.mode, x)), (d.return = m), d)
      : ((d = l(d, f.children || [])), (d.return = m), d);
  }
  function p(m, d, f, x, k) {
    return d === null || d.tag !== 7
      ? ((d = Pt(f, m.mode, x, k)), (d.return = m), d)
      : ((d = l(d, f)), (d.return = m), d);
  }
  function g(m, d, f) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return ((d = ns("" + d, m.mode, f)), (d.return = m), d);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case mr:
          return (
            (f = Hr(d.type, d.key, d.props, null, m.mode, f)),
            (f.ref = Cn(m, null, d)),
            (f.return = m),
            f
          );
        case Ot:
          return ((d = rs(d, m.mode, f)), (d.return = m), d);
        case et:
          var x = d._init;
          return g(m, x(d._payload), f);
      }
      if (En(d) || Nn(d))
        return ((d = Pt(d, m.mode, f, null)), (d.return = m), d);
      jr(m, d);
    }
    return null;
  }
  function h(m, d, f, x) {
    var k = d !== null ? d.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return k !== null ? null : o(m, d, "" + f, x);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case mr:
          return f.key === k ? u(m, d, f, x) : null;
        case Ot:
          return f.key === k ? c(m, d, f, x) : null;
        case et:
          return ((k = f._init), h(m, d, k(f._payload), x));
      }
      if (En(f) || Nn(f)) return k !== null ? null : p(m, d, f, x, null);
      jr(m, f);
    }
    return null;
  }
  function N(m, d, f, x, k) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return ((m = m.get(f) || null), o(d, m, "" + x, k));
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case mr:
          return (
            (m = m.get(x.key === null ? f : x.key) || null),
            u(d, m, x, k)
          );
        case Ot:
          return (
            (m = m.get(x.key === null ? f : x.key) || null),
            c(d, m, x, k)
          );
        case et:
          var S = x._init;
          return N(m, d, f, S(x._payload), k);
      }
      if (En(x) || Nn(x)) return ((m = m.get(f) || null), p(d, m, x, k, null));
      jr(d, x);
    }
    return null;
  }
  function v(m, d, f, x) {
    for (
      var k = null, S = null, j = d, D = (d = 0), V = null;
      j !== null && D < f.length;
      D++
    ) {
      j.index > D ? ((V = j), (j = null)) : (V = j.sibling);
      var _ = h(m, j, f[D], x);
      if (_ === null) {
        j === null && (j = V);
        break;
      }
      (e && j && _.alternate === null && t(m, j),
        (d = a(_, d, D)),
        S === null ? (k = _) : (S.sibling = _),
        (S = _),
        (j = V));
    }
    if (D === f.length) return (n(m, j), O && bt(m, D), k);
    if (j === null) {
      for (; D < f.length; D++)
        ((j = g(m, f[D], x)),
          j !== null &&
            ((d = a(j, d, D)),
            S === null ? (k = j) : (S.sibling = j),
            (S = j)));
      return (O && bt(m, D), k);
    }
    for (j = r(m, j); D < f.length; D++)
      ((V = N(j, m, D, f[D], x)),
        V !== null &&
          (e && V.alternate !== null && j.delete(V.key === null ? D : V.key),
          (d = a(V, d, D)),
          S === null ? (k = V) : (S.sibling = V),
          (S = V)));
    return (
      e &&
        j.forEach(function (ge) {
          return t(m, ge);
        }),
      O && bt(m, D),
      k
    );
  }
  function w(m, d, f, x) {
    var k = Nn(f);
    if (typeof k != "function") throw Error(y(150));
    if (((f = k.call(f)), f == null)) throw Error(y(151));
    for (
      var S = (k = null), j = d, D = (d = 0), V = null, _ = f.next();
      j !== null && !_.done;
      D++, _ = f.next()
    ) {
      j.index > D ? ((V = j), (j = null)) : (V = j.sibling);
      var ge = h(m, j, _.value, x);
      if (ge === null) {
        j === null && (j = V);
        break;
      }
      (e && j && ge.alternate === null && t(m, j),
        (d = a(ge, d, D)),
        S === null ? (k = ge) : (S.sibling = ge),
        (S = ge),
        (j = V));
    }
    if (_.done) return (n(m, j), O && bt(m, D), k);
    if (j === null) {
      for (; !_.done; D++, _ = f.next())
        ((_ = g(m, _.value, x)),
          _ !== null &&
            ((d = a(_, d, D)),
            S === null ? (k = _) : (S.sibling = _),
            (S = _)));
      return (O && bt(m, D), k);
    }
    for (j = r(m, j); !_.done; D++, _ = f.next())
      ((_ = N(j, m, D, _.value, x)),
        _ !== null &&
          (e && _.alternate !== null && j.delete(_.key === null ? D : _.key),
          (d = a(_, d, D)),
          S === null ? (k = _) : (S.sibling = _),
          (S = _)));
    return (
      e &&
        j.forEach(function (Nt) {
          return t(m, Nt);
        }),
      O && bt(m, D),
      k
    );
  }
  function A(m, d, f, x) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === Vt &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case mr:
          e: {
            for (var k = f.key, S = d; S !== null; ) {
              if (S.key === k) {
                if (((k = f.type), k === Vt)) {
                  if (S.tag === 7) {
                    (n(m, S.sibling),
                      (d = l(S, f.props.children)),
                      (d.return = m),
                      (m = d));
                    break e;
                  }
                } else if (
                  S.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === et &&
                    Ri(k) === S.type)
                ) {
                  (n(m, S.sibling),
                    (d = l(S, f.props)),
                    (d.ref = Cn(m, S, f)),
                    (d.return = m),
                    (m = d));
                  break e;
                }
                n(m, S);
                break;
              } else t(m, S);
              S = S.sibling;
            }
            f.type === Vt
              ? ((d = Pt(f.props.children, m.mode, x, f.key)),
                (d.return = m),
                (m = d))
              : ((x = Hr(f.type, f.key, f.props, null, m.mode, x)),
                (x.ref = Cn(m, d, f)),
                (x.return = m),
                (m = x));
          }
          return i(m);
        case Ot:
          e: {
            for (S = f.key; d !== null; ) {
              if (d.key === S)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === f.containerInfo &&
                  d.stateNode.implementation === f.implementation
                ) {
                  (n(m, d.sibling),
                    (d = l(d, f.children || [])),
                    (d.return = m),
                    (m = d));
                  break e;
                } else {
                  n(m, d);
                  break;
                }
              else t(m, d);
              d = d.sibling;
            }
            ((d = rs(f, m.mode, x)), (d.return = m), (m = d));
          }
          return i(m);
        case et:
          return ((S = f._init), A(m, d, S(f._payload), x));
      }
      if (En(f)) return v(m, d, f, x);
      if (Nn(f)) return w(m, d, f, x);
      jr(m, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        d !== null && d.tag === 6
          ? (n(m, d.sibling), (d = l(d, f)), (d.return = m), (m = d))
          : (n(m, d), (d = ns(f, m.mode, x)), (d.return = m), (m = d)),
        i(m))
      : n(m, d);
  }
  return A;
}
var cn = Au(!0),
  Bu = Au(!1),
  Jr = vt(null),
  el = null,
  Kt = null,
  Ca = null;
function Sa() {
  Ca = Kt = el = null;
}
function Da(e) {
  var t = Jr.current;
  (U(Jr), (e._currentValue = t));
}
function Rs(e, t, n) {
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
function ln(e, t) {
  ((el = e),
    (Ca = Kt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (me = !0), (e.firstContext = null)));
}
function De(e) {
  var t = e._currentValue;
  if (Ca !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Kt === null)) {
      if (el === null) throw Error(y(308));
      ((Kt = e), (el.dependencies = { lanes: 0, firstContext: e }));
    } else Kt = Kt.next = e;
  return t;
}
var Dt = null;
function La(e) {
  Dt === null ? (Dt = [e]) : Dt.push(e);
}
function Mu(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), La(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ke(e, r)
  );
}
function Ke(e, t) {
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
function Ea(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function zu(e, t) {
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
function qe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function dt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), z & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ke(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), La(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ke(e, n)
  );
}
function Ar(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), pa(e, n));
  }
}
function Hi(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      a = null;
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
        (a === null ? (l = a = i) : (a = a.next = i), (n = n.next));
      } while (n !== null);
      a === null ? (l = a = t) : (a = a.next = t);
    } else l = a = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: a,
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
function tl(e, t, n, r) {
  var l = e.updateQueue;
  tt = !1;
  var a = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var u = o,
      c = u.next;
    ((u.next = null), i === null ? (a = c) : (i.next = c), (i = u));
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (o = p.lastBaseUpdate),
      o !== i &&
        (o === null ? (p.firstBaseUpdate = c) : (o.next = c),
        (p.lastBaseUpdate = u)));
  }
  if (a !== null) {
    var g = l.baseState;
    ((i = 0), (p = c = u = null), (o = a));
    do {
      var h = o.lane,
        N = o.eventTime;
      if ((r & h) === h) {
        p !== null &&
          (p = p.next =
            {
              eventTime: N,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var v = e,
            w = o;
          switch (((h = t), (N = n), w.tag)) {
            case 1:
              if (((v = w.payload), typeof v == "function")) {
                g = v.call(N, g, h);
                break e;
              }
              g = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = w.payload),
                (h = typeof v == "function" ? v.call(N, g, h) : v),
                h == null)
              )
                break e;
              g = W({}, g, h);
              break e;
            case 2:
              tt = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [o]) : h.push(o));
      } else
        ((N = {
          eventTime: N,
          lane: h,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          p === null ? ((c = p = N), (u = g)) : (p = p.next = N),
          (i |= h));
      if (((o = o.next), o === null)) {
        if (((o = l.shared.pending), o === null)) break;
        ((h = o),
          (o = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null));
      }
    } while (!0);
    if (
      (p === null && (u = g),
      (l.baseState = u),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = p),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do ((i |= l.lane), (l = l.next));
      while (l !== t);
    } else a === null && (l.shared.lanes = 0);
    ((Bt |= i), (e.lanes = i), (e.memoizedState = g));
  }
}
function Ui(e, t, n) {
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
var ur = {},
  Ve = vt(ur),
  Xn = vt(ur),
  Jn = vt(ur);
function Lt(e) {
  if (e === ur) throw Error(y(174));
  return e;
}
function Pa(e, t) {
  switch ((R(Jn, t), R(Xn, e), R(Ve, ur), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : vs(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = vs(t, e)));
  }
  (U(Ve), R(Ve, t));
}
function dn() {
  (U(Ve), U(Xn), U(Jn));
}
function Iu(e) {
  Lt(Jn.current);
  var t = Lt(Ve.current),
    n = vs(t, e.type);
  t !== n && (R(Xn, e), R(Ve, n));
}
function Ta(e) {
  Xn.current === e && (U(Ve), U(Xn));
}
var F = vt(0);
function nl(e) {
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
var Kl = [];
function _a() {
  for (var e = 0; e < Kl.length; e++)
    Kl[e]._workInProgressVersionPrimary = null;
  Kl.length = 0;
}
var Br = Xe.ReactCurrentDispatcher,
  Yl = Xe.ReactCurrentBatchConfig,
  At = 0,
  Q = null,
  K = null,
  X = null,
  rl = !1,
  In = !1,
  er = 0,
  B0 = 0;
function re() {
  throw Error(y(321));
}
function Aa(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ie(e[n], t[n])) return !1;
  return !0;
}
function Ba(e, t, n, r, l, a) {
  if (
    ((At = a),
    (Q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Br.current = e === null || e.memoizedState === null ? R0 : H0),
    (e = n(r, l)),
    In)
  ) {
    a = 0;
    do {
      if (((In = !1), (er = 0), 25 <= a)) throw Error(y(301));
      ((a += 1),
        (X = K = null),
        (t.updateQueue = null),
        (Br.current = U0),
        (e = n(r, l)));
    } while (In);
  }
  if (
    ((Br.current = ll),
    (t = K !== null && K.next !== null),
    (At = 0),
    (X = K = Q = null),
    (rl = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function Ma() {
  var e = er !== 0;
  return ((er = 0), e);
}
function He() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (X === null ? (Q.memoizedState = X = e) : (X = X.next = e), X);
}
function Le() {
  if (K === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = K.next;
  var t = X === null ? Q.memoizedState : X.next;
  if (t !== null) ((X = t), (K = e));
  else {
    if (e === null) throw Error(y(310));
    ((K = e),
      (e = {
        memoizedState: K.memoizedState,
        baseState: K.baseState,
        baseQueue: K.baseQueue,
        queue: K.queue,
        next: null,
      }),
      X === null ? (Q.memoizedState = X = e) : (X = X.next = e));
  }
  return X;
}
function tr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Xl(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = K,
    l = r.baseQueue,
    a = n.pending;
  if (a !== null) {
    if (l !== null) {
      var i = l.next;
      ((l.next = a.next), (a.next = i));
    }
    ((r.baseQueue = l = a), (n.pending = null));
  }
  if (l !== null) {
    ((a = l.next), (r = r.baseState));
    var o = (i = null),
      u = null,
      c = a;
    do {
      var p = c.lane;
      if ((At & p) === p)
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
        var g = {
          lane: p,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        (u === null ? ((o = u = g), (i = r)) : (u = u.next = g),
          (Q.lanes |= p),
          (Bt |= p));
      }
      c = c.next;
    } while (c !== null && c !== a);
    (u === null ? (i = r) : (u.next = o),
      Ie(r, t.memoizedState) || (me = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do ((a = l.lane), (Q.lanes |= a), (Bt |= a), (l = l.next));
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Jl(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    a = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do ((a = e(a, i.action)), (i = i.next));
    while (i !== l);
    (Ie(a, t.memoizedState) || (me = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (n.lastRenderedState = a));
  }
  return [a, r];
}
function Ru() {}
function Hu(e, t) {
  var n = Q,
    r = Le(),
    l = t(),
    a = !Ie(r.memoizedState, l);
  if (
    (a && ((r.memoizedState = l), (me = !0)),
    (r = r.queue),
    za(Vu.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || a || (X !== null && X.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      nr(9, Ou.bind(null, n, r, l, t), void 0, null),
      J === null)
    )
      throw Error(y(349));
    At & 30 || Uu(n, t, l);
  }
  return l;
}
function Uu(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function Ou(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Fu(t) && Qu(e));
}
function Vu(e, t, n) {
  return n(function () {
    Fu(t) && Qu(e);
  });
}
function Fu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ie(e, n);
  } catch {
    return !0;
  }
}
function Qu(e) {
  var t = Ke(e, 1);
  t !== null && ze(t, e, 1, -1);
}
function Oi(e) {
  var t = He();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: tr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = I0.bind(null, Q, e)),
    [t.memoizedState, e]
  );
}
function nr(e, t, n, r) {
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
function Wu() {
  return Le().memoizedState;
}
function Mr(e, t, n, r) {
  var l = He();
  ((Q.flags |= e),
    (l.memoizedState = nr(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Nl(e, t, n, r) {
  var l = Le();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (K !== null) {
    var i = K.memoizedState;
    if (((a = i.destroy), r !== null && Aa(r, i.deps))) {
      l.memoizedState = nr(t, n, a, r);
      return;
    }
  }
  ((Q.flags |= e), (l.memoizedState = nr(1 | t, n, a, r)));
}
function Vi(e, t) {
  return Mr(8390656, 8, e, t);
}
function za(e, t) {
  return Nl(2048, 8, e, t);
}
function $u(e, t) {
  return Nl(4, 2, e, t);
}
function qu(e, t) {
  return Nl(4, 4, e, t);
}
function Zu(e, t) {
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
function Gu(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Nl(4, 4, Zu.bind(null, t, e), n)
  );
}
function Ia() {}
function Ku(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Aa(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Yu(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Aa(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Xu(e, t, n) {
  return At & 21
    ? (Ie(n, t) || ((n = ru()), (Q.lanes |= n), (Bt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (me = !0)), (e.memoizedState = n));
}
function M0(e, t) {
  var n = I;
  ((I = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Yl.transition;
  Yl.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((I = n), (Yl.transition = r));
  }
}
function Ju() {
  return Le().memoizedState;
}
function z0(e, t, n) {
  var r = ft(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ec(e))
  )
    tc(t, n);
  else if (((n = Mu(e, t, n, r)), n !== null)) {
    var l = oe();
    (ze(n, e, r, l), nc(n, t, r));
  }
}
function I0(e, t, n) {
  var r = ft(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ec(e)) tc(t, l);
  else {
    var a = e.alternate;
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var i = t.lastRenderedState,
          o = a(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = o), Ie(o, i))) {
          var u = t.interleaved;
          (u === null
            ? ((l.next = l), La(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l));
          return;
        }
      } catch {
      } finally {
      }
    ((n = Mu(e, t, l, r)),
      n !== null && ((l = oe()), ze(n, e, r, l), nc(n, t, r)));
  }
}
function ec(e) {
  var t = e.alternate;
  return e === Q || (t !== null && t === Q);
}
function tc(e, t) {
  In = rl = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function nc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), pa(e, n));
  }
}
var ll = {
    readContext: De,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  R0 = {
    readContext: De,
    useCallback: function (e, t) {
      return ((He().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: De,
    useEffect: Vi,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Mr(4194308, 4, Zu.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Mr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Mr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = He();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = He();
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
        (e = e.dispatch = z0.bind(null, Q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = He();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Oi,
    useDebugValue: Ia,
    useDeferredValue: function (e) {
      return (He().memoizedState = e);
    },
    useTransition: function () {
      var e = Oi(!1),
        t = e[0];
      return ((e = M0.bind(null, e[1])), (He().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Q,
        l = He();
      if (O) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), J === null)) throw Error(y(349));
        At & 30 || Uu(r, t, n);
      }
      l.memoizedState = n;
      var a = { value: n, getSnapshot: t };
      return (
        (l.queue = a),
        Vi(Vu.bind(null, r, a, e), [e]),
        (r.flags |= 2048),
        nr(9, Ou.bind(null, r, a, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = He(),
        t = J.identifierPrefix;
      if (O) {
        var n = $e,
          r = We;
        ((n = (r & ~(1 << (32 - Me(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = er++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = B0++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  H0 = {
    readContext: De,
    useCallback: Ku,
    useContext: De,
    useEffect: za,
    useImperativeHandle: Gu,
    useInsertionEffect: $u,
    useLayoutEffect: qu,
    useMemo: Yu,
    useReducer: Xl,
    useRef: Wu,
    useState: function () {
      return Xl(tr);
    },
    useDebugValue: Ia,
    useDeferredValue: function (e) {
      var t = Le();
      return Xu(t, K.memoizedState, e);
    },
    useTransition: function () {
      var e = Xl(tr)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: Ru,
    useSyncExternalStore: Hu,
    useId: Ju,
    unstable_isNewReconciler: !1,
  },
  U0 = {
    readContext: De,
    useCallback: Ku,
    useContext: De,
    useEffect: za,
    useImperativeHandle: Gu,
    useInsertionEffect: $u,
    useLayoutEffect: qu,
    useMemo: Yu,
    useReducer: Jl,
    useRef: Wu,
    useState: function () {
      return Jl(tr);
    },
    useDebugValue: Ia,
    useDeferredValue: function (e) {
      var t = Le();
      return K === null ? (t.memoizedState = e) : Xu(t, K.memoizedState, e);
    },
    useTransition: function () {
      var e = Jl(tr)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: Ru,
    useSyncExternalStore: Hu,
    useId: Ju,
    unstable_isNewReconciler: !1,
  };
function _e(e, t) {
  if (e && e.defaultProps) {
    ((t = W({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Hs(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : W({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var wl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? It(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = oe(),
      l = ft(e),
      a = qe(r, l);
    ((a.payload = t),
      n != null && (a.callback = n),
      (t = dt(e, a, l)),
      t !== null && (ze(t, e, l, r), Ar(t, e, l)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = oe(),
      l = ft(e),
      a = qe(r, l);
    ((a.tag = 1),
      (a.payload = t),
      n != null && (a.callback = n),
      (t = dt(e, a, l)),
      t !== null && (ze(t, e, l, r), Ar(t, e, l)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = oe(),
      r = ft(e),
      l = qe(n, r);
    ((l.tag = 2),
      t != null && (l.callback = t),
      (t = dt(e, l, r)),
      t !== null && (ze(t, e, r, n), Ar(t, e, r)));
  },
};
function Fi(e, t, n, r, l, a, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, a, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Zn(n, r) || !Zn(l, a)
        : !0
  );
}
function rc(e, t, n) {
  var r = !1,
    l = gt,
    a = t.contextType;
  return (
    typeof a == "object" && a !== null
      ? (a = De(a))
      : ((l = pe(t) ? Tt : ae.current),
        (r = t.contextTypes),
        (a = (r = r != null) ? on(e, l) : gt)),
    (t = new t(n, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = wl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function Qi(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && wl.enqueueReplaceState(t, t.state, null));
}
function Us(e, t, n, r) {
  var l = e.stateNode;
  ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ea(e));
  var a = t.contextType;
  (typeof a == "object" && a !== null
    ? (l.context = De(a))
    : ((a = pe(t) ? Tt : ae.current), (l.context = on(e, a))),
    (l.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == "function" && (Hs(e, t, a, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && wl.enqueueReplaceState(l, l.state, null),
      tl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308));
}
function mn(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += pd(r)), (r = r.return));
    while (r);
    var l = n;
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
function es(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Os(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var O0 = typeof WeakMap == "function" ? WeakMap : Map;
function lc(e, t, n) {
  ((n = qe(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (al || ((al = !0), (Ys = r)), Os(e, t));
    }),
    n
  );
}
function sc(e, t, n) {
  ((n = qe(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    ((n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Os(e, t);
      }));
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == "function" &&
      (n.callback = function () {
        (Os(e, t),
          typeof r != "function" &&
            (mt === null ? (mt = new Set([this])) : mt.add(this)));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Wi(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new O0();
    var l = new Set();
    r.set(t, l);
  } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
  l.has(n) || (l.add(n), (e = tm.bind(null, e, t, n)), t.then(e, e));
}
function $i(e) {
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
function qi(e, t, n, r, l) {
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
              : ((t = qe(-1, 1)), (t.tag = 2), dt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var V0 = Xe.ReactCurrentOwner,
  me = !1;
function ie(e, t, n, r) {
  t.child = e === null ? Bu(t, null, n, r) : cn(t, e.child, n, r);
}
function Zi(e, t, n, r, l) {
  n = n.render;
  var a = t.ref;
  return (
    ln(t, l),
    (r = Ba(e, t, n, r, a, l)),
    (n = Ma()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ye(e, t, l))
      : (O && n && ka(t), (t.flags |= 1), ie(e, t, r, l), t.child)
  );
}
function Gi(e, t, n, r, l) {
  if (e === null) {
    var a = n.type;
    return typeof a == "function" &&
      !Wa(a) &&
      a.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), ac(e, t, a, r, l))
      : ((e = Hr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((a = e.child), !(e.lanes & l))) {
    var i = a.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Zn), n(i, r) && e.ref === t.ref)
    )
      return Ye(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = pt(a, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ac(e, t, n, r, l) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (Zn(a, r) && e.ref === t.ref)
      if (((me = !1), (t.pendingProps = r = a), (e.lanes & l) !== 0))
        e.flags & 131072 && (me = !0);
      else return ((t.lanes = e.lanes), Ye(e, t, l));
  }
  return Vs(e, t, n, r, l);
}
function ic(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    a = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        R(Xt, xe),
        (xe |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          R(Xt, xe),
          (xe |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = a !== null ? a.baseLanes : n),
        R(Xt, xe),
        (xe |= r));
    }
  else
    (a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
      R(Xt, xe),
      (xe |= r));
  return (ie(e, t, l, n), t.child);
}
function oc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Vs(e, t, n, r, l) {
  var a = pe(n) ? Tt : ae.current;
  return (
    (a = on(t, a)),
    ln(t, l),
    (n = Ba(e, t, n, r, a, l)),
    (r = Ma()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ye(e, t, l))
      : (O && r && ka(t), (t.flags |= 1), ie(e, t, n, l), t.child)
  );
}
function Ki(e, t, n, r, l) {
  if (pe(n)) {
    var a = !0;
    Kr(t);
  } else a = !1;
  if ((ln(t, l), t.stateNode === null))
    (zr(e, t), rc(t, n, r), Us(t, n, r, l), (r = !0));
  else if (e === null) {
    var i = t.stateNode,
      o = t.memoizedProps;
    i.props = o;
    var u = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = De(c))
      : ((c = pe(n) ? Tt : ae.current), (c = on(t, c)));
    var p = n.getDerivedStateFromProps,
      g =
        typeof p == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    (g ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((o !== r || u !== c) && Qi(t, i, r, c)),
      (tt = !1));
    var h = t.memoizedState;
    ((i.state = h),
      tl(t, r, i, l),
      (u = t.memoizedState),
      o !== r || h !== u || fe.current || tt
        ? (typeof p == "function" && (Hs(t, n, p, r), (u = t.memoizedState)),
          (o = tt || Fi(t, n, o, r, h, u, c))
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
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = c),
          (r = o))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((i = t.stateNode),
      zu(e, t),
      (o = t.memoizedProps),
      (c = t.type === t.elementType ? o : _e(t.type, o)),
      (i.props = c),
      (g = t.pendingProps),
      (h = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = De(u))
        : ((u = pe(n) ? Tt : ae.current), (u = on(t, u))));
    var N = n.getDerivedStateFromProps;
    ((p =
      typeof N == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((o !== g || h !== u) && Qi(t, i, r, u)),
      (tt = !1),
      (h = t.memoizedState),
      (i.state = h),
      tl(t, r, i, l));
    var v = t.memoizedState;
    o !== g || h !== v || fe.current || tt
      ? (typeof N == "function" && (Hs(t, n, N, r), (v = t.memoizedState)),
        (c = tt || Fi(t, n, c, r, h, v, u) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, v, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, v, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (o === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (i.props = r),
        (i.state = v),
        (i.context = u),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (o === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Fs(e, t, n, r, a, l);
}
function Fs(e, t, n, r, l, a) {
  oc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return (l && Mi(t, n, !1), Ye(e, t, a));
  ((r = t.stateNode), (V0.current = t));
  var o =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = cn(t, e.child, null, a)), (t.child = cn(t, null, o, a)))
      : ie(e, t, o, a),
    (t.memoizedState = r.state),
    l && Mi(t, n, !0),
    t.child
  );
}
function uc(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Bi(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Bi(e, t.context, !1),
    Pa(e, t.containerInfo));
}
function Yi(e, t, n, r, l) {
  return (un(), ba(l), (t.flags |= 256), ie(e, t, n, r), t.child);
}
var Qs = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ws(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function cc(e, t, n) {
  var r = t.pendingProps,
    l = F.current,
    a = !1,
    i = (t.flags & 128) !== 0,
    o;
  if (
    ((o = i) ||
      (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    o
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    R(F, l & 1),
    e === null)
  )
    return (
      Is(t),
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
          a
            ? ((r = t.mode),
              (a = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = i))
                : (a = bl(i, r, 0, null)),
              (e = Pt(e, r, n, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = Ws(n)),
              (t.memoizedState = Qs),
              e)
            : Ra(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
    return F0(e, t, i, r, o, l, n);
  if (a) {
    ((a = r.fallback), (i = t.mode), (l = e.child), (o = l.sibling));
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = pt(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      o !== null ? (a = pt(o, a)) : ((a = Pt(a, i, n, null)), (a.flags |= 2)),
      (a.return = t),
      (r.return = t),
      (r.sibling = a),
      (t.child = r),
      (r = a),
      (a = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Ws(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (a.memoizedState = i),
      (a.childLanes = e.childLanes & ~n),
      (t.memoizedState = Qs),
      r
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (r = pt(a, { mode: "visible", children: r.children })),
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
function Ra(e, t) {
  return (
    (t = bl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function br(e, t, n, r) {
  return (
    r !== null && ba(r),
    cn(t, e.child, null, n),
    (e = Ra(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function F0(e, t, n, r, l, a, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = es(Error(y(422)))), br(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((a = r.fallback),
          (l = t.mode),
          (r = bl({ mode: "visible", children: r.children }, l, 0, null)),
          (a = Pt(a, l, i, null)),
          (a.flags |= 2),
          (r.return = t),
          (a.return = t),
          (r.sibling = a),
          (t.child = r),
          t.mode & 1 && cn(t, e.child, null, i),
          (t.child.memoizedState = Ws(i)),
          (t.memoizedState = Qs),
          a);
  if (!(t.mode & 1)) return br(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
    return (
      (r = o),
      (a = Error(y(419))),
      (r = es(a, r, void 0)),
      br(e, t, i, r)
    );
  }
  if (((o = (i & e.childLanes) !== 0), me || o)) {
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
          l !== a.retryLane &&
          ((a.retryLane = l), Ke(e, l), ze(r, e, l, -1)));
    }
    return (Qa(), (r = es(Error(y(421)))), br(e, t, i, r));
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = nm.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = a.treeContext),
      (ve = ct(l.nextSibling)),
      (ye = t),
      (O = !0),
      (Be = null),
      e !== null &&
        ((je[be++] = We),
        (je[be++] = $e),
        (je[be++] = _t),
        (We = e.id),
        ($e = e.overflow),
        (_t = t)),
      (t = Ra(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Xi(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Rs(e.return, t, n));
}
function ts(e, t, n, r, l) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = r),
      (a.tail = n),
      (a.tailMode = l));
}
function dc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    a = r.tail;
  if ((ie(e, t, r.children, n), (r = F.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Xi(e, n, t);
        else if (e.tag === 19) Xi(e, n, t);
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
  if ((R(F, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          ((e = n.alternate),
            e !== null && nl(e) === null && (l = n),
            (n = n.sibling));
        ((n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ts(t, !1, l, n, a));
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && nl(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
        }
        ts(t, !0, n, null, a);
        break;
      case "together":
        ts(t, !1, null, null, void 0);
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
function Ye(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Bt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = pt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = pt(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function Q0(e, t, n) {
  switch (t.tag) {
    case 3:
      (uc(t), un());
      break;
    case 5:
      Iu(t);
      break;
    case 1:
      pe(t.type) && Kr(t);
      break;
    case 4:
      Pa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      (R(Jr, r._currentValue), (r._currentValue = l));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (R(F, F.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? cc(e, t, n)
            : (R(F, F.current & 1),
              (e = Ye(e, t, n)),
              e !== null ? e.sibling : null);
      R(F, F.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return dc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        R(F, F.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), ic(e, t, n));
  }
  return Ye(e, t, n);
}
var mc, $s, fc, pc;
mc = function (e, t) {
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
$s = function () {};
fc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    ((e = t.stateNode), Lt(Ve.current));
    var a = null;
    switch (n) {
      case "input":
        ((l = ps(e, l)), (r = ps(e, r)), (a = []));
        break;
      case "select":
        ((l = W({}, l, { value: void 0 })),
          (r = W({}, r, { value: void 0 })),
          (a = []));
        break;
      case "textarea":
        ((l = xs(e, l)), (r = xs(e, r)), (a = []));
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Zr);
    }
    ys(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var o = l[c];
          for (i in o) o.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (On.hasOwnProperty(c)
              ? a || (a = [])
              : (a = a || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((o = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && u !== o && (u != null || o != null))
      )
        if (c === "style")
          if (o) {
            for (i in o)
              !o.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                o[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else (n || (a || (a = []), a.push(c, n)), (n = u));
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
                (On.hasOwnProperty(c)
                  ? (u != null && c === "onScroll" && H("scroll", e),
                    a || o === u || (a = []))
                  : (a = a || []).push(c, u));
    }
    n && (a = a || []).push("style", n);
    var c = a;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
pc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Sn(e, t) {
  if (!O)
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
function le(e) {
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
function W0(e, t, n) {
  var r = t.pendingProps;
  switch ((ja(t), t.tag)) {
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
      return (le(t), null);
    case 1:
      return (pe(t.type) && Gr(), le(t), null);
    case 3:
      return (
        (r = t.stateNode),
        dn(),
        U(fe),
        U(ae),
        _a(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (kr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Be !== null && (ea(Be), (Be = null)))),
        $s(e, t),
        le(t),
        null
      );
    case 5:
      Ta(t);
      var l = Lt(Jn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (fc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return (le(t), null);
        }
        if (((e = Lt(Ve.current)), kr(t))) {
          ((r = t.stateNode), (n = t.type));
          var a = t.memoizedProps;
          switch (((r[Ue] = t), (r[Yn] = a), (e = (t.mode & 1) !== 0), n)) {
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
              for (l = 0; l < Tn.length; l++) H(Tn[l], r);
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
              (ii(r, a), H("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!a.multiple }),
                H("invalid", r));
              break;
            case "textarea":
              (ui(r, a), H("invalid", r));
          }
          (ys(n, a), (l = null));
          for (var i in a)
            if (a.hasOwnProperty(i)) {
              var o = a[i];
              i === "children"
                ? typeof o == "string"
                  ? r.textContent !== o &&
                    (a.suppressHydrationWarning !== !0 &&
                      wr(r.textContent, o, e),
                    (l = ["children", o]))
                  : typeof o == "number" &&
                    r.textContent !== "" + o &&
                    (a.suppressHydrationWarning !== !0 &&
                      wr(r.textContent, o, e),
                    (l = ["children", "" + o]))
                : On.hasOwnProperty(i) &&
                  o != null &&
                  i === "onScroll" &&
                  H("scroll", r);
            }
          switch (n) {
            case "input":
              (fr(r), oi(r, a, !0));
              break;
            case "textarea":
              (fr(r), ci(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof a.onClick == "function" && (r.onclick = Zr);
          }
          ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Vo(n)),
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
            (e[Ue] = t),
            (e[Yn] = r),
            mc(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((i = Ns(n, r)), n)) {
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
                for (l = 0; l < Tn.length; l++) H(Tn[l], e);
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
                (ii(e, r), (l = ps(e, r)), H("invalid", e));
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
                (ui(e, r), (l = xs(e, r)), H("invalid", e));
                break;
              default:
                l = r;
            }
            (ys(n, l), (o = l));
            for (a in o)
              if (o.hasOwnProperty(a)) {
                var u = o[a];
                a === "style"
                  ? Wo(e, u)
                  : a === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && Fo(e, u))
                    : a === "children"
                      ? typeof u == "string"
                        ? (n !== "textarea" || u !== "") && Vn(e, u)
                        : typeof u == "number" && Vn(e, "" + u)
                      : a !== "suppressContentEditableWarning" &&
                        a !== "suppressHydrationWarning" &&
                        a !== "autoFocus" &&
                        (On.hasOwnProperty(a)
                          ? u != null && a === "onScroll" && H("scroll", e)
                          : u != null && oa(e, a, u, i));
              }
            switch (n) {
              case "input":
                (fr(e), oi(e, r, !1));
                break;
              case "textarea":
                (fr(e), ci(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ht(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (a = r.value),
                  a != null
                    ? en(e, !!r.multiple, a, !1)
                    : r.defaultValue != null &&
                      en(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Zr);
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
      return (le(t), null);
    case 6:
      if (e && t.stateNode != null) pc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = Lt(Jn.current)), Lt(Ve.current), kr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ue] = t),
            (a = r.nodeValue !== n) && ((e = ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                wr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  wr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ue] = t),
            (t.stateNode = r));
      }
      return (le(t), null);
    case 13:
      if (
        (U(F),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (O && ve !== null && t.mode & 1 && !(t.flags & 128))
          (_u(), un(), (t.flags |= 98560), (a = !1));
        else if (((a = kr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(y(318));
            if (
              ((a = t.memoizedState),
              (a = a !== null ? a.dehydrated : null),
              !a)
            )
              throw Error(y(317));
            a[Ue] = t;
          } else
            (un(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (le(t), (a = !1));
        } else (Be !== null && (ea(Be), (Be = null)), (a = !0));
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || F.current & 1 ? Y === 0 && (Y = 3) : Qa())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        dn(),
        $s(e, t),
        e === null && Gn(t.stateNode.containerInfo),
        le(t),
        null
      );
    case 10:
      return (Da(t.type._context), le(t), null);
    case 17:
      return (pe(t.type) && Gr(), le(t), null);
    case 19:
      if ((U(F), (a = t.memoizedState), a === null)) return (le(t), null);
      if (((r = (t.flags & 128) !== 0), (i = a.rendering), i === null))
        if (r) Sn(a, !1);
        else {
          if (Y !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = nl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Sn(a, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((a = n),
                    (e = r),
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
                    (n = n.sibling));
                return (R(F, (F.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          a.tail !== null &&
            Z() > fn &&
            ((t.flags |= 128), (r = !0), Sn(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = nl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Sn(a, !0),
              a.tail === null && a.tailMode === "hidden" && !i.alternate && !O)
            )
              return (le(t), null);
          } else
            2 * Z() - a.renderingStartTime > fn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Sn(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = a.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (a.last = i));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = Z()),
          (t.sibling = null),
          (n = F.current),
          R(F, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        Fa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? xe & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function $0(e, t) {
  switch ((ja(t), t.tag)) {
    case 1:
      return (
        pe(t.type) && Gr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        dn(),
        U(fe),
        U(ae),
        _a(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Ta(t), null);
    case 13:
      if ((U(F), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        un();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (U(F), null);
    case 4:
      return (dn(), null);
    case 10:
      return (Da(t.type._context), null);
    case 22:
    case 23:
      return (Fa(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Cr = !1,
  se = !1,
  q0 = typeof WeakSet == "function" ? WeakSet : Set,
  C = null;
function Yt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        q(e, t, r);
      }
    else n.current = null;
}
function qs(e, t, n) {
  try {
    n();
  } catch (r) {
    q(e, t, r);
  }
}
var Ji = !1;
function Z0(e, t) {
  if (((Ps = Wr), (e = yu()), wa(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            a = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, a.nodeType);
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            o = -1,
            u = -1,
            c = 0,
            p = 0,
            g = e,
            h = null;
          t: for (;;) {
            for (
              var N;
              g !== n || (l !== 0 && g.nodeType !== 3) || (o = i + l),
                g !== a || (r !== 0 && g.nodeType !== 3) || (u = i + r),
                g.nodeType === 3 && (i += g.nodeValue.length),
                (N = g.firstChild) !== null;
            )
              ((h = g), (g = N));
            for (;;) {
              if (g === e) break t;
              if (
                (h === n && ++c === l && (o = i),
                h === a && ++p === r && (u = i),
                (N = g.nextSibling) !== null)
              )
                break;
              ((g = h), (h = g.parentNode));
            }
            g = N;
          }
          n = o === -1 || u === -1 ? null : { start: o, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ts = { focusedElem: e, selectionRange: n }, Wr = !1, C = t; C !== null; )
    if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (C = e));
    else
      for (; C !== null; ) {
        t = C;
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
                  var w = v.memoizedProps,
                    A = v.memoizedState,
                    m = t.stateNode,
                    d = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : _e(t.type, w),
                      A,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = d;
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
        } catch (x) {
          q(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (C = e));
          break;
        }
        C = t.return;
      }
  return ((v = Ji), (Ji = !1), v);
}
function Rn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var a = l.destroy;
        ((l.destroy = void 0), a !== void 0 && qs(t, n, a));
      }
      l = l.next;
    } while (l !== r);
  }
}
function kl(e, t) {
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
function Zs(e) {
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
function hc(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), hc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ue], delete t[Yn], delete t[Bs], delete t[P0], delete t[T0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function gc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function eo(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || gc(e.return)) return null;
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
function Gs(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Zr)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Gs(e, t, n), e = e.sibling; e !== null; )
      (Gs(e, t, n), (e = e.sibling));
}
function Ks(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ks(e, t, n), e = e.sibling; e !== null; )
      (Ks(e, t, n), (e = e.sibling));
}
var ee = null,
  Ae = !1;
function Je(e, t, n) {
  for (n = n.child; n !== null; ) (xc(e, t, n), (n = n.sibling));
}
function xc(e, t, n) {
  if (Oe && typeof Oe.onCommitFiberUnmount == "function")
    try {
      Oe.onCommitFiberUnmount(pl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      se || Yt(n, t);
    case 6:
      var r = ee,
        l = Ae;
      ((ee = null),
        Je(e, t, n),
        (ee = r),
        (Ae = l),
        ee !== null &&
          (Ae
            ? ((e = ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ee.removeChild(n.stateNode)));
      break;
    case 18:
      ee !== null &&
        (Ae
          ? ((e = ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? Zl(e.parentNode, n)
              : e.nodeType === 1 && Zl(e, n),
            $n(e))
          : Zl(ee, n.stateNode));
      break;
    case 4:
      ((r = ee),
        (l = Ae),
        (ee = n.stateNode.containerInfo),
        (Ae = !0),
        Je(e, t, n),
        (ee = r),
        (Ae = l));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !se &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var a = l,
            i = a.destroy;
          ((a = a.tag),
            i !== void 0 && (a & 2 || a & 4) && qs(n, t, i),
            (l = l.next));
        } while (l !== r);
      }
      Je(e, t, n);
      break;
    case 1:
      if (
        !se &&
        (Yt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (o) {
          q(n, t, o);
        }
      Je(e, t, n);
      break;
    case 21:
      Je(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((se = (r = se) || n.memoizedState !== null), Je(e, t, n), (se = r))
        : Je(e, t, n);
      break;
    default:
      Je(e, t, n);
  }
}
function to(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new q0()),
      t.forEach(function (r) {
        var l = rm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      }));
  }
}
function Te(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var a = e,
          i = t,
          o = i;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              ((ee = o.stateNode), (Ae = !1));
              break e;
            case 3:
              ((ee = o.stateNode.containerInfo), (Ae = !0));
              break e;
            case 4:
              ((ee = o.stateNode.containerInfo), (Ae = !0));
              break e;
          }
          o = o.return;
        }
        if (ee === null) throw Error(y(160));
        (xc(a, i, l), (ee = null), (Ae = !1));
        var u = l.alternate;
        (u !== null && (u.return = null), (l.return = null));
      } catch (c) {
        q(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (vc(t, e), (t = t.sibling));
}
function vc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Te(t, e), Re(e), r & 4)) {
        try {
          (Rn(3, e, e.return), kl(3, e));
        } catch (w) {
          q(e, e.return, w);
        }
        try {
          Rn(5, e, e.return);
        } catch (w) {
          q(e, e.return, w);
        }
      }
      break;
    case 1:
      (Te(t, e), Re(e), r & 512 && n !== null && Yt(n, n.return));
      break;
    case 5:
      if (
        (Te(t, e),
        Re(e),
        r & 512 && n !== null && Yt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Vn(l, "");
        } catch (w) {
          q(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var a = e.memoizedProps,
          i = n !== null ? n.memoizedProps : a,
          o = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            (o === "input" && a.type === "radio" && a.name != null && Uo(l, a),
              Ns(o, i));
            var c = Ns(o, a);
            for (i = 0; i < u.length; i += 2) {
              var p = u[i],
                g = u[i + 1];
              p === "style"
                ? Wo(l, g)
                : p === "dangerouslySetInnerHTML"
                  ? Fo(l, g)
                  : p === "children"
                    ? Vn(l, g)
                    : oa(l, p, g, c);
            }
            switch (o) {
              case "input":
                hs(l, a);
                break;
              case "textarea":
                Oo(l, a);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!a.multiple;
                var N = a.value;
                N != null
                  ? en(l, !!a.multiple, N, !1)
                  : h !== !!a.multiple &&
                    (a.defaultValue != null
                      ? en(l, !!a.multiple, a.defaultValue, !0)
                      : en(l, !!a.multiple, a.multiple ? [] : "", !1));
            }
            l[Yn] = a;
          } catch (w) {
            q(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Te(t, e), Re(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        ((l = e.stateNode), (a = e.memoizedProps));
        try {
          l.nodeValue = a;
        } catch (w) {
          q(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Te(t, e), Re(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          $n(t.containerInfo);
        } catch (w) {
          q(e, e.return, w);
        }
      break;
    case 4:
      (Te(t, e), Re(e));
      break;
    case 13:
      (Te(t, e),
        Re(e),
        (l = e.child),
        l.flags & 8192 &&
          ((a = l.memoizedState !== null),
          (l.stateNode.isHidden = a),
          !a ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Oa = Z())),
        r & 4 && to(e));
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((se = (c = se) || p), Te(t, e), (se = c)) : Te(t, e),
        Re(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !p && e.mode & 1)
        )
          for (C = e, p = e.child; p !== null; ) {
            for (g = C = p; C !== null; ) {
              switch (((h = C), (N = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Rn(4, h, h.return);
                  break;
                case 1:
                  Yt(h, h.return);
                  var v = h.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    ((r = h), (n = h.return));
                    try {
                      ((t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount());
                    } catch (w) {
                      q(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Yt(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    ro(g);
                    continue;
                  }
              }
              N !== null ? ((N.return = h), (C = N)) : ro(g);
            }
            p = p.sibling;
          }
        e: for (p = null, g = e; ; ) {
          if (g.tag === 5) {
            if (p === null) {
              p = g;
              try {
                ((l = g.stateNode),
                  c
                    ? ((a = l.style),
                      typeof a.setProperty == "function"
                        ? a.setProperty("display", "none", "important")
                        : (a.display = "none"))
                    : ((o = g.stateNode),
                      (u = g.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (o.style.display = Qo("display", i))));
              } catch (w) {
                q(e, e.return, w);
              }
            }
          } else if (g.tag === 6) {
            if (p === null)
              try {
                g.stateNode.nodeValue = c ? "" : g.memoizedProps;
              } catch (w) {
                q(e, e.return, w);
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
      (Te(t, e), Re(e), r & 4 && to(e));
      break;
    case 21:
      break;
    default:
      (Te(t, e), Re(e));
  }
}
function Re(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (gc(n)) {
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
          r.flags & 32 && (Vn(l, ""), (r.flags &= -33));
          var a = eo(e);
          Ks(e, a, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            o = eo(e);
          Gs(e, o, i);
          break;
        default:
          throw Error(y(161));
      }
    } catch (u) {
      q(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function G0(e, t, n) {
  ((C = e), yc(e));
}
function yc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C,
      a = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Cr;
      if (!i) {
        var o = l.alternate,
          u = (o !== null && o.memoizedState !== null) || se;
        o = Cr;
        var c = se;
        if (((Cr = i), (se = u) && !c))
          for (C = l; C !== null; )
            ((i = C),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? lo(l)
                : u !== null
                  ? ((u.return = i), (C = u))
                  : lo(l));
        for (; a !== null; ) ((C = a), yc(a), (a = a.sibling));
        ((C = l), (Cr = o), (se = c));
      }
      no(e);
    } else
      l.subtreeFlags & 8772 && a !== null ? ((a.return = l), (C = a)) : no(e);
  }
}
function no(e) {
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
              se || kl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !se)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : _e(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var a = t.updateQueue;
              a !== null && Ui(t, a, r);
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
                Ui(t, i, n);
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
                var c = t.alternate;
                if (c !== null) {
                  var p = c.memoizedState;
                  if (p !== null) {
                    var g = p.dehydrated;
                    g !== null && $n(g);
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
        se || (t.flags & 512 && Zs(t));
      } catch (h) {
        q(t, t.return, h);
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
function ro(e) {
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
function lo(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            kl(4, t);
          } catch (u) {
            q(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              q(t, l, u);
            }
          }
          var a = t.return;
          try {
            Zs(t);
          } catch (u) {
            q(t, a, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Zs(t);
          } catch (u) {
            q(t, i, u);
          }
      }
    } catch (u) {
      q(t, t.return, u);
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
var K0 = Math.ceil,
  sl = Xe.ReactCurrentDispatcher,
  Ha = Xe.ReactCurrentOwner,
  Se = Xe.ReactCurrentBatchConfig,
  z = 0,
  J = null,
  G = null,
  te = 0,
  xe = 0,
  Xt = vt(0),
  Y = 0,
  rr = null,
  Bt = 0,
  jl = 0,
  Ua = 0,
  Hn = null,
  de = null,
  Oa = 0,
  fn = 1 / 0,
  Fe = null,
  al = !1,
  Ys = null,
  mt = null,
  Sr = !1,
  at = null,
  il = 0,
  Un = 0,
  Xs = null,
  Ir = -1,
  Rr = 0;
function oe() {
  return z & 6 ? Z() : Ir !== -1 ? Ir : (Ir = Z());
}
function ft(e) {
  return e.mode & 1
    ? z & 2 && te !== 0
      ? te & -te
      : A0.transition !== null
        ? (Rr === 0 && (Rr = ru()), Rr)
        : ((e = I),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : cu(e.type))),
          e)
    : 1;
}
function ze(e, t, n, r) {
  if (50 < Un) throw ((Un = 0), (Xs = null), Error(y(185)));
  (ar(e, n, r),
    (!(z & 2) || e !== J) &&
      (e === J && (!(z & 2) && (jl |= n), Y === 4 && rt(e, te)),
      he(e, r),
      n === 1 && z === 0 && !(t.mode & 1) && ((fn = Z() + 500), yl && yt())));
}
function he(e, t) {
  var n = e.callbackNode;
  Ad(e, t);
  var r = Qr(e, e === J ? te : 0);
  if (r === 0)
    (n !== null && fi(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && fi(n), t === 1))
      (e.tag === 0 ? _0(so.bind(null, e)) : Eu(so.bind(null, e)),
        L0(function () {
          !(z & 6) && yt();
        }),
        (n = null));
    else {
      switch (lu(r)) {
        case 1:
          n = fa;
          break;
        case 4:
          n = tu;
          break;
        case 16:
          n = Fr;
          break;
        case 536870912:
          n = nu;
          break;
        default:
          n = Fr;
      }
      n = Dc(n, Nc.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function Nc(e, t) {
  if (((Ir = -1), (Rr = 0), z & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (sn() && e.callbackNode !== n) return null;
  var r = Qr(e, e === J ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ol(e, r);
  else {
    t = r;
    var l = z;
    z |= 2;
    var a = kc();
    (J !== e || te !== t) && ((Fe = null), (fn = Z() + 500), Et(e, t));
    do
      try {
        J0();
        break;
      } catch (o) {
        wc(e, o);
      }
    while (!0);
    (Sa(),
      (sl.current = a),
      (z = l),
      G !== null ? (t = 0) : ((J = null), (te = 0), (t = Y)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Cs(e)), l !== 0 && ((r = l), (t = Js(e, l)))), t === 1)
    )
      throw ((n = rr), Et(e, 0), rt(e, r), he(e, Z()), n);
    if (t === 6) rt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Y0(l) &&
          ((t = ol(e, r)),
          t === 2 && ((a = Cs(e)), a !== 0 && ((r = a), (t = Js(e, a)))),
          t === 1))
      )
        throw ((n = rr), Et(e, 0), rt(e, r), he(e, Z()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          Ct(e, de, Fe);
          break;
        case 3:
          if (
            (rt(e, r), (r & 130023424) === r && ((t = Oa + 500 - Z()), 10 < t))
          ) {
            if (Qr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              (oe(), (e.pingedLanes |= e.suspendedLanes & l));
              break;
            }
            e.timeoutHandle = As(Ct.bind(null, e, de, Fe), t);
            break;
          }
          Ct(e, de, Fe);
          break;
        case 4:
          if ((rt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Me(r);
            ((a = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~a));
          }
          if (
            ((r = l),
            (r = Z() - r),
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
                          : 1960 * K0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = As(Ct.bind(null, e, de, Fe), r);
            break;
          }
          Ct(e, de, Fe);
          break;
        case 5:
          Ct(e, de, Fe);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return (he(e, Z()), e.callbackNode === n ? Nc.bind(null, e) : null);
}
function Js(e, t) {
  var n = Hn;
  return (
    e.current.memoizedState.isDehydrated && (Et(e, t).flags |= 256),
    (e = ol(e, t)),
    e !== 2 && ((t = de), (de = n), t !== null && ea(t)),
    e
  );
}
function ea(e) {
  de === null ? (de = e) : de.push.apply(de, e);
}
function Y0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            a = l.getSnapshot;
          l = l.value;
          try {
            if (!Ie(a(), l)) return !1;
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
    t &= ~Ua,
      t &= ~jl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - Me(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function so(e) {
  if (z & 6) throw Error(y(327));
  sn();
  var t = Qr(e, 0);
  if (!(t & 1)) return (he(e, Z()), null);
  var n = ol(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Cs(e);
    r !== 0 && ((t = r), (n = Js(e, r)));
  }
  if (n === 1) throw ((n = rr), Et(e, 0), rt(e, t), he(e, Z()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ct(e, de, Fe),
    he(e, Z()),
    null
  );
}
function Va(e, t) {
  var n = z;
  z |= 1;
  try {
    return e(t);
  } finally {
    ((z = n), z === 0 && ((fn = Z() + 500), yl && yt()));
  }
}
function Mt(e) {
  at !== null && at.tag === 0 && !(z & 6) && sn();
  var t = z;
  z |= 1;
  var n = Se.transition,
    r = I;
  try {
    if (((Se.transition = null), (I = 1), e)) return e();
  } finally {
    ((I = r), (Se.transition = n), (z = t), !(z & 6) && yt());
  }
}
function Fa() {
  ((xe = Xt.current), U(Xt));
}
function Et(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), D0(n)), G !== null))
    for (n = G.return; n !== null; ) {
      var r = n;
      switch ((ja(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && Gr());
          break;
        case 3:
          (dn(), U(fe), U(ae), _a());
          break;
        case 5:
          Ta(r);
          break;
        case 4:
          dn();
          break;
        case 13:
          U(F);
          break;
        case 19:
          U(F);
          break;
        case 10:
          Da(r.type._context);
          break;
        case 22:
        case 23:
          Fa();
      }
      n = n.return;
    }
  if (
    ((J = e),
    (G = e = pt(e.current, null)),
    (te = xe = t),
    (Y = 0),
    (rr = null),
    (Ua = jl = Bt = 0),
    (de = Hn = null),
    Dt !== null)
  ) {
    for (t = 0; t < Dt.length; t++)
      if (((n = Dt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          a = n.pending;
        if (a !== null) {
          var i = a.next;
          ((a.next = l), (r.next = i));
        }
        n.pending = r;
      }
    Dt = null;
  }
  return e;
}
function wc(e, t) {
  do {
    var n = G;
    try {
      if ((Sa(), (Br.current = ll), rl)) {
        for (var r = Q.memoizedState; r !== null; ) {
          var l = r.queue;
          (l !== null && (l.pending = null), (r = r.next));
        }
        rl = !1;
      }
      if (
        ((At = 0),
        (X = K = Q = null),
        (In = !1),
        (er = 0),
        (Ha.current = null),
        n === null || n.return === null)
      ) {
        ((Y = 1), (rr = t), (G = null));
        break;
      }
      e: {
        var a = e,
          i = n.return,
          o = n,
          u = t;
        if (
          ((t = te),
          (o.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            p = o,
            g = p.tag;
          if (!(p.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var h = p.alternate;
            h
              ? ((p.updateQueue = h.updateQueue),
                (p.memoizedState = h.memoizedState),
                (p.lanes = h.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var N = $i(i);
          if (N !== null) {
            ((N.flags &= -257),
              qi(N, i, o, a, t),
              N.mode & 1 && Wi(a, c, t),
              (t = N),
              (u = c));
            var v = t.updateQueue;
            if (v === null) {
              var w = new Set();
              (w.add(u), (t.updateQueue = w));
            } else v.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              (Wi(a, c, t), Qa());
              break e;
            }
            u = Error(y(426));
          }
        } else if (O && o.mode & 1) {
          var A = $i(i);
          if (A !== null) {
            (!(A.flags & 65536) && (A.flags |= 256),
              qi(A, i, o, a, t),
              ba(mn(u, o)));
            break e;
          }
        }
        ((a = u = mn(u, o)),
          Y !== 4 && (Y = 2),
          Hn === null ? (Hn = [a]) : Hn.push(a),
          (a = i));
        do {
          switch (a.tag) {
            case 3:
              ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
              var m = lc(a, u, t);
              Hi(a, m);
              break e;
            case 1:
              o = u;
              var d = a.type,
                f = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (mt === null || !mt.has(f))))
              ) {
                ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
                var x = sc(a, o, t);
                Hi(a, x);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      bc(n);
    } catch (k) {
      ((t = k), G === n && n !== null && (G = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function kc() {
  var e = sl.current;
  return ((sl.current = ll), e === null ? ll : e);
}
function Qa() {
  ((Y === 0 || Y === 3 || Y === 2) && (Y = 4),
    J === null || (!(Bt & 268435455) && !(jl & 268435455)) || rt(J, te));
}
function ol(e, t) {
  var n = z;
  z |= 2;
  var r = kc();
  (J !== e || te !== t) && ((Fe = null), Et(e, t));
  do
    try {
      X0();
      break;
    } catch (l) {
      wc(e, l);
    }
  while (!0);
  if ((Sa(), (z = n), (sl.current = r), G !== null)) throw Error(y(261));
  return ((J = null), (te = 0), Y);
}
function X0() {
  for (; G !== null; ) jc(G);
}
function J0() {
  for (; G !== null && !bd(); ) jc(G);
}
function jc(e) {
  var t = Sc(e.alternate, e, xe);
  ((e.memoizedProps = e.pendingProps),
    t === null ? bc(e) : (G = t),
    (Ha.current = null));
}
function bc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = $0(n, t)), n !== null)) {
        ((n.flags &= 32767), (G = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((Y = 6), (G = null));
        return;
      }
    } else if (((n = W0(n, t, xe)), n !== null)) {
      G = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      G = t;
      return;
    }
    G = t = e;
  } while (t !== null);
  Y === 0 && (Y = 5);
}
function Ct(e, t, n) {
  var r = I,
    l = Se.transition;
  try {
    ((Se.transition = null), (I = 1), em(e, t, n, r));
  } finally {
    ((Se.transition = l), (I = r));
  }
  return null;
}
function em(e, t, n, r) {
  do sn();
  while (at !== null);
  if (z & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var a = n.lanes | n.childLanes;
  if (
    (Bd(e, a),
    e === J && ((G = J = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Sr ||
      ((Sr = !0),
      Dc(Fr, function () {
        return (sn(), null);
      })),
    (a = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || a)
  ) {
    ((a = Se.transition), (Se.transition = null));
    var i = I;
    I = 1;
    var o = z;
    ((z |= 4),
      (Ha.current = null),
      Z0(e, n),
      vc(n, e),
      N0(Ts),
      (Wr = !!Ps),
      (Ts = Ps = null),
      (e.current = n),
      G0(n),
      Cd(),
      (z = o),
      (I = i),
      (Se.transition = a));
  } else e.current = n;
  if (
    (Sr && ((Sr = !1), (at = e), (il = l)),
    (a = e.pendingLanes),
    a === 0 && (mt = null),
    Ld(n.stateNode),
    he(e, Z()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
  if (al) throw ((al = !1), (e = Ys), (Ys = null), e);
  return (
    il & 1 && e.tag !== 0 && sn(),
    (a = e.pendingLanes),
    a & 1 ? (e === Xs ? Un++ : ((Un = 0), (Xs = e))) : (Un = 0),
    yt(),
    null
  );
}
function sn() {
  if (at !== null) {
    var e = lu(il),
      t = Se.transition,
      n = I;
    try {
      if (((Se.transition = null), (I = 16 > e ? 16 : e), at === null))
        var r = !1;
      else {
        if (((e = at), (at = null), (il = 0), z & 6)) throw Error(y(331));
        var l = z;
        for (z |= 4, C = e.current; C !== null; ) {
          var a = C,
            i = a.child;
          if (C.flags & 16) {
            var o = a.deletions;
            if (o !== null) {
              for (var u = 0; u < o.length; u++) {
                var c = o[u];
                for (C = c; C !== null; ) {
                  var p = C;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rn(8, p, a);
                  }
                  var g = p.child;
                  if (g !== null) ((g.return = p), (C = g));
                  else
                    for (; C !== null; ) {
                      p = C;
                      var h = p.sibling,
                        N = p.return;
                      if ((hc(p), p === c)) {
                        C = null;
                        break;
                      }
                      if (h !== null) {
                        ((h.return = N), (C = h));
                        break;
                      }
                      C = N;
                    }
                }
              }
              var v = a.alternate;
              if (v !== null) {
                var w = v.child;
                if (w !== null) {
                  v.child = null;
                  do {
                    var A = w.sibling;
                    ((w.sibling = null), (w = A));
                  } while (w !== null);
                }
              }
              C = a;
            }
          }
          if (a.subtreeFlags & 2064 && i !== null) ((i.return = a), (C = i));
          else
            e: for (; C !== null; ) {
              if (((a = C), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Rn(9, a, a.return);
                }
              var m = a.sibling;
              if (m !== null) {
                ((m.return = a.return), (C = m));
                break e;
              }
              C = a.return;
            }
        }
        var d = e.current;
        for (C = d; C !== null; ) {
          i = C;
          var f = i.child;
          if (i.subtreeFlags & 2064 && f !== null) ((f.return = i), (C = f));
          else
            e: for (i = d; C !== null; ) {
              if (((o = C), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      kl(9, o);
                  }
                } catch (k) {
                  q(o, o.return, k);
                }
              if (o === i) {
                C = null;
                break e;
              }
              var x = o.sibling;
              if (x !== null) {
                ((x.return = o.return), (C = x));
                break e;
              }
              C = o.return;
            }
        }
        if (
          ((z = l), yt(), Oe && typeof Oe.onPostCommitFiberRoot == "function")
        )
          try {
            Oe.onPostCommitFiberRoot(pl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((I = n), (Se.transition = t));
    }
  }
  return !1;
}
function ao(e, t, n) {
  ((t = mn(n, t)),
    (t = lc(e, t, 1)),
    (e = dt(e, t, 1)),
    (t = oe()),
    e !== null && (ar(e, 1, t), he(e, t)));
}
function q(e, t, n) {
  if (e.tag === 3) ao(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ao(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (mt === null || !mt.has(r)))
        ) {
          ((e = mn(n, e)),
            (e = sc(t, e, 1)),
            (t = dt(t, e, 1)),
            (e = oe()),
            t !== null && (ar(t, 1, e), he(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function tm(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = oe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    J === e &&
      (te & n) === n &&
      (Y === 4 || (Y === 3 && (te & 130023424) === te && 500 > Z() - Oa)
        ? Et(e, 0)
        : (Ua |= n)),
    he(e, t));
}
function Cc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = gr), (gr <<= 1), !(gr & 130023424) && (gr = 4194304))
      : (t = 1));
  var n = oe();
  ((e = Ke(e, t)), e !== null && (ar(e, t, n), he(e, n)));
}
function nm(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Cc(e, n));
}
function rm(e, t) {
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
  (r !== null && r.delete(t), Cc(e, n));
}
var Sc;
Sc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || fe.current) me = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((me = !1), Q0(e, t, n));
      me = !!(e.flags & 131072);
    }
  else ((me = !1), O && t.flags & 1048576 && Pu(t, Xr, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (zr(e, t), (e = t.pendingProps));
      var l = on(t, ae.current);
      (ln(t, n), (l = Ba(null, t, r, e, l, n)));
      var a = Ma();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            pe(r) ? ((a = !0), Kr(t)) : (a = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ea(t),
            (l.updater = wl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Us(t, r, e, n),
            (t = Fs(null, t, r, !0, a, n)))
          : ((t.tag = 0), O && a && ka(t), ie(null, t, l, n), (t = t.child)),
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
          (l = t.tag = sm(r)),
          (e = _e(r, e)),
          l)
        ) {
          case 0:
            t = Vs(null, t, r, e, n);
            break e;
          case 1:
            t = Ki(null, t, r, e, n);
            break e;
          case 11:
            t = Zi(null, t, r, e, n);
            break e;
          case 14:
            t = Gi(null, t, r, _e(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : _e(r, l)),
        Vs(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : _e(r, l)),
        Ki(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((uc(t), e === null)) throw Error(y(387));
        ((r = t.pendingProps),
          (a = t.memoizedState),
          (l = a.element),
          zu(e, t),
          tl(t, r, null, n));
        var i = t.memoizedState;
        if (((r = i.element), a.isDehydrated))
          if (
            ((a = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            ((l = mn(Error(y(423)), t)), (t = Yi(e, t, r, n, l)));
            break e;
          } else if (r !== l) {
            ((l = mn(Error(y(424)), t)), (t = Yi(e, t, r, n, l)));
            break e;
          } else
            for (
              ve = ct(t.stateNode.containerInfo.firstChild),
                ye = t,
                O = !0,
                Be = null,
                n = Bu(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((un(), r === l)) {
            t = Ye(e, t, n);
            break e;
          }
          ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Iu(t),
        e === null && Is(t),
        (r = t.type),
        (l = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (i = l.children),
        _s(r, l) ? (i = null) : a !== null && _s(r, a) && (t.flags |= 32),
        oc(e, t),
        ie(e, t, i, n),
        t.child
      );
    case 6:
      return (e === null && Is(t), null);
    case 13:
      return cc(e, t, n);
    case 4:
      return (
        Pa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = cn(t, null, r, n)) : ie(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : _e(r, l)),
        Zi(e, t, r, l, n)
      );
    case 7:
      return (ie(e, t, t.pendingProps, n), t.child);
    case 8:
      return (ie(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (ie(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (a = t.memoizedProps),
          (i = l.value),
          R(Jr, r._currentValue),
          (r._currentValue = i),
          a !== null)
        )
          if (Ie(a.value, i)) {
            if (a.children === l.children && !fe.current) {
              t = Ye(e, t, n);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var o = a.dependencies;
              if (o !== null) {
                i = a.child;
                for (var u = o.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (a.tag === 1) {
                      ((u = qe(-1, n & -n)), (u.tag = 2));
                      var c = a.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var p = c.pending;
                        (p === null
                          ? (u.next = u)
                          : ((u.next = p.next), (p.next = u)),
                          (c.pending = u));
                      }
                    }
                    ((a.lanes |= n),
                      (u = a.alternate),
                      u !== null && (u.lanes |= n),
                      Rs(a.return, n, t),
                      (o.lanes |= n));
                    break;
                  }
                  u = u.next;
                }
              } else if (a.tag === 10) i = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((i = a.return), i === null)) throw Error(y(341));
                ((i.lanes |= n),
                  (o = i.alternate),
                  o !== null && (o.lanes |= n),
                  Rs(i, n, t),
                  (i = a.sibling));
              } else i = a.child;
              if (i !== null) i.return = a;
              else
                for (i = a; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((a = i.sibling), a !== null)) {
                    ((a.return = i.return), (i = a));
                    break;
                  }
                  i = i.return;
                }
              a = i;
            }
        (ie(e, t, l.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        ln(t, n),
        (l = De(l)),
        (r = r(l)),
        (t.flags |= 1),
        ie(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = _e(r, t.pendingProps)),
        (l = _e(r.type, l)),
        Gi(e, t, r, l, n)
      );
    case 15:
      return ac(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : _e(r, l)),
        zr(e, t),
        (t.tag = 1),
        pe(r) ? ((e = !0), Kr(t)) : (e = !1),
        ln(t, n),
        rc(t, r, l),
        Us(t, r, l, n),
        Fs(null, t, r, !0, e, n)
      );
    case 19:
      return dc(e, t, n);
    case 22:
      return ic(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function Dc(e, t) {
  return eu(e, t);
}
function lm(e, t, n, r) {
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
function Ce(e, t, n, r) {
  return new lm(e, t, n, r);
}
function Wa(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function sm(e) {
  if (typeof e == "function") return Wa(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ca)) return 11;
    if (e === da) return 14;
  }
  return 2;
}
function pt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ce(e.tag, t, e.key, e.mode)),
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
function Hr(e, t, n, r, l, a) {
  var i = 2;
  if (((r = e), typeof e == "function")) Wa(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Vt:
        return Pt(n.children, l, a, t);
      case ua:
        ((i = 8), (l |= 8));
        break;
      case cs:
        return (
          (e = Ce(12, n, t, l | 2)),
          (e.elementType = cs),
          (e.lanes = a),
          e
        );
      case ds:
        return ((e = Ce(13, n, t, l)), (e.elementType = ds), (e.lanes = a), e);
      case ms:
        return ((e = Ce(19, n, t, l)), (e.elementType = ms), (e.lanes = a), e);
      case Io:
        return bl(n, l, a, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Mo:
              i = 10;
              break e;
            case zo:
              i = 9;
              break e;
            case ca:
              i = 11;
              break e;
            case da:
              i = 14;
              break e;
            case et:
              ((i = 16), (r = null));
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ce(i, n, t, l)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = a),
    t
  );
}
function Pt(e, t, n, r) {
  return ((e = Ce(7, e, r, t)), (e.lanes = n), e);
}
function bl(e, t, n, r) {
  return (
    (e = Ce(22, e, r, t)),
    (e.elementType = Io),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ns(e, t, n) {
  return ((e = Ce(6, e, null, t)), (e.lanes = n), e);
}
function rs(e, t, n) {
  return (
    (t = Ce(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function am(e, t, n, r, l) {
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
    (this.eventTimes = Il(0)),
    (this.expirationTimes = Il(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Il(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null));
}
function $a(e, t, n, r, l, a, i, o, u) {
  return (
    (e = new am(e, t, n, o, u)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = Ce(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ea(a),
    e
  );
}
function im(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ot,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Lc(e) {
  if (!e) return gt;
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
    if (pe(n)) return Lu(e, n, t);
  }
  return t;
}
function Ec(e, t, n, r, l, a, i, o, u) {
  return (
    (e = $a(n, r, !0, e, l, a, i, o, u)),
    (e.context = Lc(null)),
    (n = e.current),
    (r = oe()),
    (l = ft(n)),
    (a = qe(r, l)),
    (a.callback = t ?? null),
    dt(n, a, l),
    (e.current.lanes = l),
    ar(e, l, r),
    he(e, r),
    e
  );
}
function Cl(e, t, n, r) {
  var l = t.current,
    a = oe(),
    i = ft(l);
  return (
    (n = Lc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = qe(a, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = dt(l, t, i)),
    e !== null && (ze(e, l, i, a), Ar(e, l, i)),
    i
  );
}
function ul(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function io(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function qa(e, t) {
  (io(e, t), (e = e.alternate) && io(e, t));
}
function om() {
  return null;
}
var Pc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Za(e) {
  this._internalRoot = e;
}
Sl.prototype.render = Za.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  Cl(e, t, null, null);
};
Sl.prototype.unmount = Za.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Mt(function () {
      Cl(null, e, null, null);
    }),
      (t[Ge] = null));
  }
};
function Sl(e) {
  this._internalRoot = e;
}
Sl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = iu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < nt.length && t !== 0 && t < nt[n].priority; n++);
    (nt.splice(n, 0, e), n === 0 && uu(e));
  }
};
function Ga(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Dl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function oo() {}
function um(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var c = ul(i);
        a.call(c);
      };
    }
    var i = Ec(t, r, e, 0, null, !1, !1, "", oo);
    return (
      (e._reactRootContainer = i),
      (e[Ge] = i.current),
      Gn(e.nodeType === 8 ? e.parentNode : e),
      Mt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function () {
      var c = ul(u);
      o.call(c);
    };
  }
  var u = $a(e, 0, !1, null, null, !1, !1, "", oo);
  return (
    (e._reactRootContainer = u),
    (e[Ge] = u.current),
    Gn(e.nodeType === 8 ? e.parentNode : e),
    Mt(function () {
      Cl(t, u, n, r);
    }),
    u
  );
}
function Ll(e, t, n, r, l) {
  var a = n._reactRootContainer;
  if (a) {
    var i = a;
    if (typeof l == "function") {
      var o = l;
      l = function () {
        var u = ul(i);
        o.call(u);
      };
    }
    Cl(t, i, e, l);
  } else i = um(n, t, e, l, r);
  return ul(i);
}
su = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Pn(t.pendingLanes);
        n !== 0 &&
          (pa(t, n | 1), he(t, Z()), !(z & 6) && ((fn = Z() + 500), yt()));
      }
      break;
    case 13:
      (Mt(function () {
        var r = Ke(e, 1);
        if (r !== null) {
          var l = oe();
          ze(r, e, 1, l);
        }
      }),
        qa(e, 1));
  }
};
ha = function (e) {
  if (e.tag === 13) {
    var t = Ke(e, 134217728);
    if (t !== null) {
      var n = oe();
      ze(t, e, 134217728, n);
    }
    qa(e, 134217728);
  }
};
au = function (e) {
  if (e.tag === 13) {
    var t = ft(e),
      n = Ke(e, t);
    if (n !== null) {
      var r = oe();
      ze(n, e, t, r);
    }
    qa(e, t);
  }
};
iu = function () {
  return I;
};
ou = function (e, t) {
  var n = I;
  try {
    return ((I = e), t());
  } finally {
    I = n;
  }
};
ks = function (e, t, n) {
  switch (t) {
    case "input":
      if ((hs(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = vl(r);
            if (!l) throw Error(y(90));
            (Ho(r), hs(r, l));
          }
        }
      }
      break;
    case "textarea":
      Oo(e, n);
      break;
    case "select":
      ((t = n.value), t != null && en(e, !!n.multiple, t, !1));
  }
};
Zo = Va;
Go = Mt;
var cm = { usingClientEntryPoint: !1, Events: [or, $t, vl, $o, qo, Va] },
  Dn = {
    findFiberByHostInstance: St,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  dm = {
    bundleType: Dn.bundleType,
    version: Dn.version,
    rendererPackageName: Dn.rendererPackageName,
    rendererConfig: Dn.rendererConfig,
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
      return ((e = Xo(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Dn.findFiberByHostInstance || om,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Dr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Dr.isDisabled && Dr.supportsFiber)
    try {
      ((pl = Dr.inject(dm)), (Oe = Dr));
    } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cm;
we.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ga(t)) throw Error(y(200));
  return im(e, t, null, n);
};
we.createRoot = function (e, t) {
  if (!Ga(e)) throw Error(y(299));
  var n = !1,
    r = "",
    l = Pc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = $a(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ge] = t.current),
    Gn(e.nodeType === 8 ? e.parentNode : e),
    new Za(t)
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
  return ((e = Xo(t)), (e = e === null ? null : e.stateNode), e);
};
we.flushSync = function (e) {
  return Mt(e);
};
we.hydrate = function (e, t, n) {
  if (!Dl(t)) throw Error(y(200));
  return Ll(null, e, t, !0, n);
};
we.hydrateRoot = function (e, t, n) {
  if (!Ga(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    a = "",
    i = Pc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Ec(t, null, e, 1, n ?? null, l, !1, a, i)),
    (e[Ge] = t.current),
    Gn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l));
  return new Sl(t);
};
we.render = function (e, t, n) {
  if (!Dl(t)) throw Error(y(200));
  return Ll(null, e, t, !1, n);
};
we.unmountComponentAtNode = function (e) {
  if (!Dl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Mt(function () {
        Ll(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Ge] = null));
        });
      }),
      !0)
    : !1;
};
we.unstable_batchedUpdates = Va;
we.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Dl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return Ll(e, t, n, !1, r);
};
we.version = "18.3.1-next-f1338f8080-20240426";
function Tc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tc);
    } catch (e) {
      console.error(e);
    }
}
(Tc(), (To.exports = we));
var mm = To.exports,
  _c,
  uo = mm;
((_c = uo.createRoot), uo.hydrateRoot);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var fm = {
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
 */ const pm = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  L = (e, t) => {
    const n = T.forwardRef(
      (
        {
          color: r = "currentColor",
          size: l = 24,
          strokeWidth: a = 2,
          absoluteStrokeWidth: i,
          className: o = "",
          children: u,
          ...c
        },
        p,
      ) =>
        T.createElement(
          "svg",
          {
            ref: p,
            ...fm,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: i ? (Number(a) * 24) / Number(l) : a,
            className: ["lucide", `lucide-${pm(e)}`, o].join(" "),
            ...c,
          },
          [
            ...t.map(([g, h]) => T.createElement(g, h)),
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
 */ const co = L("Activity", [
  ["path", { d: "M22 12h-4l-3 9L9 3l-3 9H2", key: "d5dnw9" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hm = L("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lr = L("AlertTriangle", [
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
 */ const gm = L("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xm = L("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vm = L("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ym = L("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nm = L("BarChart2", [
  ["line", { x1: "18", x2: "18", y1: "20", y2: "10", key: "1xfpm4" }],
  ["line", { x1: "12", x2: "12", y1: "20", y2: "4", key: "be30l9" }],
  ["line", { x1: "6", x2: "6", y1: "20", y2: "14", key: "1r4le6" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ac = L("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wm = L("BookOpen", [
  ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" }],
  ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cl = L("Bot", [
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
 */ const El = L("Building2", [
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
 */ const mo = L("Calendar", [
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
 */ const lt = L("CheckCircle2", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const km = L("CheckSquare", [
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
 */ const jm = L("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bm = L("CircleUser", [
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
 */ const ls = L("ClipboardCheck", [
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
 */ const Ka = L("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cm = L("EyeOff", [
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
 */ const Sm = L("Eye", [
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
 */ const Dm = L("FileSearch", [
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
 */ const Ya = L("FileText", [
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
 */ const dl = L("FlaskConical", [
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
 */ const Lm = L("GitCompareArrows", [
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
 */ const Bc = L("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Em = L("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pm = L("Package", [
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
 */ const fo = L("Pill", [
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
 */ const Tm = L("Printer", [
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
 */ const Mc = L("RefreshCw", [
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
 */ const _m = L("Ruler", [
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
 */ const Am = L("Scale", [
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
 */ const ml = L("ScanLine", [
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
 */ const Bm = L("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mm = L("Settings", [
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
 */ const zm = L("ShieldCheck", [
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
 */ const Jt = L("ShoppingBag", [
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
 */ const Im = L("Sparkles", [
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
 */ const Rm = L("Square", [
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
 */ const Xa = L("Stethoscope", [
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
 */ const Hm = L("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zc = L("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Um = L("Users", [
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
 */ const Om = L("Warehouse", [
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
 */ const Vm = L("Weight", [
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
 */ const Pl = L("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Fm = [
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
  jt = {
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
  ss = {
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
  as = {
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
  Ut = {
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
  Qm = {
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
  is = {
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
  Wm = {
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
  $m = {
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
  po = {
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
  Ja = [
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
      labData: jt,
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
      labData: ss,
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
      labData: as,
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
      labData: Ut,
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
      labData: Qm,
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
      labData: is,
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
      labData: jt,
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
      labData: ss,
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
      labData: Ut,
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
      labData: is,
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
      labData: as,
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
      labData: Wm,
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
      labData: $m,
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
      labData: po,
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
      labData: jt,
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
      labData: is,
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
      labData: as,
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
      labData: Ut,
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
      labData: jt,
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
      labData: ss,
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
      labData: jt,
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
      labData: Ut,
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
      labData: jt,
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
      labData: po,
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
      labData: Ut,
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
      labData: jt,
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
      labData: Ut,
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
function qm({ onLoginSuccess: e }) {
  const [t, n] = T.useState(""),
    [r, l] = T.useState(""),
    [a, i] = T.useState(!1),
    [o, u] = T.useState(""),
    [c, p] = T.useState(!1),
    g = async (h) => {
      (h.preventDefault(),
        u(""),
        p(!0),
        await new Promise((v) => setTimeout(v, 600)));
      const N = Fm.find((v) => v.username === t && v.password === r);
      (N ? e(N) : u("帳號或密碼錯誤，請重新輸入"), p(!1));
    };
  return s.jsxs("div", {
    className: "min-h-screen w-full flex flex-col relative overflow-hidden",
    style: {
      backgroundImage: `url(${Ic})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    children: [
      s.jsx("div", {
        className: "absolute inset-0 bg-white/30 backdrop-blur-[2px]",
      }),
      s.jsxs("header", {
        className: "relative z-10 flex items-center justify-between px-10 py-6",
        children: [
          s.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              s.jsx("div", {
                className:
                  "w-12 h-12 rounded-xl bg-white/70 border border-blue-200/60 flex items-center justify-center shadow-sm backdrop-blur-sm",
                children: s.jsx(dl, { className: "w-6 h-6 text-blue-500" }),
              }),
              s.jsx("span", {
                className:
                  "text-blue-700/70 text-sm font-semibold tracking-widest uppercase",
                children: "Chemo Pharm",
              }),
            ],
          }),
          s.jsxs("div", {
            className: "text-right",
            children: [
              s.jsx("p", {
                className: "text-slate-700 font-semibold text-lg leading-tight",
                children: "台灣醫療中心",
              }),
              s.jsx("p", {
                className: "text-slate-500 text-sm tracking-wider",
                children: "Taiwan Medical Center",
              }),
            ],
          }),
        ],
      }),
      s.jsx("main", {
        className: "relative z-10 flex-1 flex items-center justify-center px-8",
        children: s.jsx("div", {
          className: "w-full max-w-md",
          children: s.jsxs("div", {
            className:
              "bg-white/55 backdrop-blur-xl border border-white/80 rounded-3xl shadow-2xl shadow-blue-200/40 p-10",
            children: [
              s.jsxs("div", {
                className: "mb-8 text-center",
                children: [
                  s.jsx("div", {
                    className:
                      "inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100/80 border border-blue-200/60 mb-5 shadow-sm",
                    children: s.jsx(dl, { className: "w-8 h-8 text-blue-500" }),
                  }),
                  s.jsx("h1", {
                    className: "text-slate-800 text-2xl font-bold mb-1",
                    children: "化療藥局系統",
                  }),
                  s.jsx("p", {
                    className: "text-slate-500 text-sm tracking-wider",
                    children: "Chemotherapy Pharmacy System",
                  }),
                ],
              }),
              s.jsxs("form", {
                onSubmit: g,
                className: "space-y-5",
                children: [
                  s.jsxs("div", {
                    children: [
                      s.jsx("label", {
                        className:
                          "block text-slate-600 text-sm font-medium mb-2 ml-1",
                        children: "帳號 Account",
                      }),
                      s.jsx("input", {
                        type: "text",
                        value: t,
                        onChange: (h) => n(h.target.value),
                        placeholder: "請輸入帳號",
                        className:
                          "w-full bg-white/60 backdrop-blur-sm border border-slate-200/80 rounded-xl text-slate-800 placeholder-slate-400 px-4 py-3 focus:outline-none focus:border-blue-400/70 focus:bg-white/80 transition-all duration-200 text-base",
                        autoComplete: "username",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("label", {
                        className:
                          "block text-slate-600 text-sm font-medium mb-2 ml-1",
                        children: "密碼 Password",
                      }),
                      s.jsxs("div", {
                        className: "relative",
                        children: [
                          s.jsx("input", {
                            type: a ? "text" : "password",
                            value: r,
                            onChange: (h) => l(h.target.value),
                            placeholder: "請輸入密碼",
                            className:
                              "w-full bg-white/60 backdrop-blur-sm border border-slate-200/80 rounded-xl text-slate-800 placeholder-slate-400 px-4 py-3 pr-12 focus:outline-none focus:border-blue-400/70 focus:bg-white/80 transition-all duration-200 text-base",
                            autoComplete: "current-password",
                          }),
                          s.jsx("button", {
                            type: "button",
                            onClick: () => i(!a),
                            className:
                              "absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors",
                            children: a
                              ? s.jsx(Cm, { className: "w-5 h-5" })
                              : s.jsx(Sm, { className: "w-5 h-5" }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  o &&
                    s.jsxs("div", {
                      className:
                        "flex items-center gap-2 bg-red-50/80 border border-red-200 rounded-xl px-4 py-3",
                      children: [
                        s.jsx(hm, {
                          className: "w-4 h-4 text-red-500 flex-shrink-0",
                        }),
                        s.jsx("span", {
                          className: "text-red-600 text-sm",
                          children: o,
                        }),
                      ],
                    }),
                  s.jsx("button", {
                    type: "submit",
                    disabled: c || !t || !r,
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
                    children: c
                      ? s.jsxs("span", {
                          className: "flex items-center justify-center gap-2",
                          children: [
                            s.jsxs("svg", {
                              className: "animate-spin w-4 h-4",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              children: [
                                s.jsx("circle", {
                                  className: "opacity-25",
                                  cx: "12",
                                  cy: "12",
                                  r: "10",
                                  stroke: "currentColor",
                                  strokeWidth: "4",
                                }),
                                s.jsx("path", {
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
              s.jsx("div", {
                className: "mt-6 pt-6 border-t border-slate-200/60 text-center",
                children: s.jsx("p", {
                  className: "text-slate-400 text-xs",
                  children: "測試帳號：admin / 123456",
                }),
              }),
            ],
          }),
        }),
      }),
      s.jsx("footer", {
        className: "relative z-10 py-5 text-center",
        children: s.jsx("p", {
          className: "text-slate-400/70 text-xs tracking-wider",
          children:
            "化療藥局資訊管理系統  ·  Chemotherapy Pharmacy Information System  ·  v1.0.0",
        }),
      }),
    ],
  });
}
const Zm = [
  { key: "dispense", labelZh: "調劑排程", labelEn: "DISPENSE" },
  { key: "information", labelZh: "審核資訊", labelEn: "INFORMATION" },
  { key: "inventory", labelZh: "庫存管理", labelEn: "INVENTORY" },
  { key: "setting", labelZh: "系統設定", labelEn: "SETTING" },
];
function Gm({ activeTab: e, onTabChange: t, currentUser: n, onLogout: r }) {
  return s.jsx("header", {
    className:
      "w-full bg-white/65 backdrop-blur-xl py-2 border-b border-white/80 shadow-sm shadow-blue-100/40",
    children: s.jsxs("div", {
      className: "flex items-center h-16 px-6 gap-4",
      children: [
        s.jsx("nav", {
          className: "flex-1 flex items-center justify-center gap-2",
          children: Zm.map((l) =>
            s.jsxs(
              "button",
              {
                onClick: () => t(l.key),
                className: `
                relative px-5 py-2.5 rounded-xl text-sm font-semibold tracking-wide
                transition-all duration-200 cursor-pointer select-none
                ${e === l.key ? "text-black" : "text-gray-500"}
              `,
                children: [
                  s.jsx("span", {
                    className: "block text-lg font-extrabold leading-tight",
                    children: l.labelZh,
                  }),
                  s.jsx("span", {
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
        s.jsxs("div", {
          className: "flex items-center gap-3 flex-shrink-0 justify-end",
          children: [
            s.jsxs("div", {
              className:
                "flex items-center gap-2.5 bg-white/60 border border-slate-200/70 rounded-xl px-3 py-2 shadow-sm",
              children: [
                s.jsx(bm, { className: "w-6 h-6 text-blue-400 flex-shrink-0" }),
                s.jsx("div", {
                  className: "w-px h-5 bg-slate-200/80 flex-shrink-0",
                }),
                s.jsxs("div", {
                  children: [
                    s.jsx("p", {
                      className:
                        "text-slate-800 text-sm font-semibold leading-tight",
                      children: n.name,
                    }),
                    s.jsx("p", {
                      className: "text-slate-400 text-[11px] leading-tight",
                      children: n.role,
                    }),
                  ],
                }),
              ],
            }),
            s.jsx("button", {
              onClick: r,
              title: "登出",
              className: `w-9 h-9 flex items-center justify-center rounded-xl
                       bg-white/60 border border-slate-200/70 shadow-sm
                       text-slate-400 hover:text-slate-600 hover:bg-white/80
                       transition-all duration-200 active:scale-95`,
              children: s.jsx(Bc, { className: "w-4 h-4" }),
            }),
          ],
        }),
      ],
    }),
  });
}
const Km = {
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
function Ym({ stats: e, activeStatus: t, onSelect: n }) {
  return s.jsx("div", {
    className: "grid grid-cols-4 gap-5 p-3",
    children: e.map((r) => {
      const l = Km[r.status],
        a = t === r.status;
      return s.jsxs(
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
              ${a ? `ring-2 ${l.ringColor} shadow-xl scale-[1.02]` : ""}
            `,
          children: [
            s.jsx("div", {
              className: "absolute top-0 left-0 right-0 h-0.5",
              children: s.jsx("div", {
                className: `h-full w-full ${l.accentBar} opacity-50`,
              }),
            }),
            s.jsx("div", {
              className: "absolute top-0 left-0 right-0 h-px bg-white/80",
            }),
            s.jsx("span", {
              className: `text-6xl font-extrabold tabular-nums ${l.numColor}`,
              children: r.count,
            }),
            s.jsx("div", {
              className: `w-[60%] h-[2px] background-black my-8 ${l.accentBar} opacity-40`,
            }),
            s.jsxs("div", {
              className: "text-center",
              children: [
                s.jsx("p", {
                  className: `text-2xl font-semibold leading-tight ${l.labelColor}`,
                  children: r.labelZh,
                }),
                s.jsx("p", {
                  className: `text-sm tracking-widest mt-0.5 ${l.subColor}`,
                  children: r.labelEn,
                }),
              ],
            }),
            a &&
              s.jsxs("div", {
                className:
                  "absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1",
                children: [
                  s.jsx("div", {
                    className: `w-1 h-1 rounded-full ${l.accentBar} opacity-50`,
                  }),
                  s.jsx("div", {
                    className: `w-5 h-1 rounded-full ${l.accentBar} opacity-80`,
                  }),
                  s.jsx("div", {
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
function Xm({ drugs: e, checkable: t = !1, onToggle: n, plainView: r = !1 }) {
  return e.length === 0
    ? s.jsx("div", {
        className: "flex items-center justify-center py-12",
        children: s.jsx("p", {
          className: "text-slate-400 text-sm",
          children: "無藥品資料",
        }),
      })
    : s.jsx("div", {
        className: "flex-1 overflow-y-auto scrollbar-thin",
        children: e.map((l) =>
          s.jsxs(
            "div",
            {
              className: `flex items-start gap-3 px-4 py-3 border-b border-slate-100 last:border-0 transition-colors duration-150 ${!r && l.checked ? "bg-emerald-50/50" : "hover:bg-slate-50/60"}`,
              children: [
                t &&
                  n &&
                  s.jsx("button", {
                    onClick: () => n(l.id),
                    className:
                      "flex-shrink-0 text-slate-300 hover:text-emerald-500 transition-colors mt-0.5",
                    children: l.checked
                      ? s.jsx(km, { className: "w-5 h-5 text-emerald-500" })
                      : s.jsx(Rm, { className: "w-5 h-5" }),
                  }),
                s.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-start justify-between gap-3",
                      children: [
                        s.jsxs("div", {
                          className: "min-w-0",
                          children: [
                            s.jsx("span", {
                              className: `text-base font-semibold leading-snug ${!r && l.checked ? "text-slate-400 line-through" : "text-slate-800"}`,
                              children: l.drugName,
                            }),
                            s.jsx("span", {
                              className: "text-base text-slate-500 ml-1.5",
                              children: l.drugNameZh,
                            }),
                            s.jsxs("span", {
                              className:
                                "text-base font-mono text-slate-400 ml-1.5",
                              children: ["(", l.drugCode, ")"],
                            }),
                          ],
                        }),
                        s.jsx("div", {
                          className: "flex-shrink-0 flex flex-col items-end",
                          children: s.jsxs("span", {
                            className: `text-2xl flex items-end gap-1 font-bold leading-none px-3 py-2 rounded-lg ${l.checked ? "text-slate-400 bg-slate-100" : "text-slate-700 bg-slate-100"}`,
                            children: [
                              s.jsx("span", {
                                className:
                                  "text-sm text-slate-400 leading-none mb-0.5",
                                children: "發藥數量",
                              }),
                              s.jsx("span", { children: l.dispenseQty }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className:
                        "flex items-center justify-between gap-3 mt-1.5",
                      children: [
                        s.jsxs("div", {
                          className: "flex items-center gap-2 flex-wrap",
                          children: [
                            s.jsxs("span", {
                              className: "flex items-center gap-1",
                              children: [
                                s.jsx("span", {
                                  className: "text-base text-slate-400",
                                  children: "劑量",
                                }),
                                s.jsx("span", {
                                  className:
                                    "text-base font-semibold text-slate-700",
                                  children: l.dose,
                                }),
                              ],
                            }),
                            s.jsx("span", {
                              className: "text-slate-200 text-base",
                              children: "·",
                            }),
                            s.jsxs("span", {
                              className: "flex items-center gap-1",
                              children: [
                                s.jsx("span", {
                                  className: "text-base text-slate-400",
                                  children: "途徑",
                                }),
                                s.jsx("span", {
                                  className:
                                    "text-base font-medium text-sky-700",
                                  children: l.route,
                                }),
                              ],
                            }),
                            s.jsx("span", {
                              className: "text-slate-200 text-base",
                              children: "·",
                            }),
                            s.jsxs("span", {
                              className: "flex items-center gap-1",
                              children: [
                                s.jsx("span", {
                                  className: "text-base text-slate-400",
                                  children: "頻次",
                                }),
                                s.jsx("span", {
                                  className:
                                    "text-base font-medium text-slate-700",
                                  children: l.frequency,
                                }),
                              ],
                            }),
                            s.jsx("span", {
                              className: "text-slate-200 text-base",
                              children: "·",
                            }),
                            s.jsxs("span", {
                              className: "flex items-center gap-1",
                              children: [
                                s.jsx("span", {
                                  className: "text-base text-slate-400",
                                  children: "數量",
                                }),
                                s.jsx("span", {
                                  className:
                                    "text-base font-medium text-slate-700",
                                  children: l.qty,
                                }),
                              ],
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className: "flex gap-1 text-sm items-center",
                          children: [
                            s.jsx("span", {
                              className: "text-slate-400 leading-none mb-0.5",
                              children: "儲位",
                            }),
                            s.jsx("span", {
                              className: "font-mono text-amber-700",
                              children: l.storageLocation,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (l.weightBefore !== void 0 || l.weightAfter !== void 0) &&
                      (() => {
                        const a =
                            l.weightBefore !== void 0 &&
                            l.weightAfter !== void 0,
                          i = a ? l.weightAfter - l.weightBefore : null,
                          o =
                            a && l.weightBefore > 0
                              ? (i / l.weightBefore) * 100
                              : null,
                          u = o !== null && Math.abs(o) <= 5;
                        return s.jsxs("div", {
                          className:
                            "mt-2 flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200/70",
                          children: [
                            s.jsx(Am, {
                              className: "w-4 h-4 text-slate-400 flex-shrink-0",
                            }),
                            s.jsx("span", {
                              className: "text-slate-400 text-base",
                              children: "秤重",
                            }),
                            s.jsxs("div", {
                              className: "flex items-center gap-1.5",
                              children: [
                                s.jsx("span", {
                                  className: "text-slate-500 text-base",
                                  children: "前",
                                }),
                                s.jsx("span", {
                                  className:
                                    "text-base font-semibold font-mono text-slate-800",
                                  children:
                                    l.weightBefore !== void 0
                                      ? `${l.weightBefore.toFixed(2)} g`
                                      : "—",
                                }),
                              ],
                            }),
                            s.jsx("span", {
                              className: "text-slate-300 text-base",
                              children: "→",
                            }),
                            s.jsxs("div", {
                              className: "flex items-center gap-1.5",
                              children: [
                                s.jsx("span", {
                                  className: "text-slate-500 text-base",
                                  children: "後",
                                }),
                                s.jsx("span", {
                                  className:
                                    "text-base font-semibold font-mono text-slate-800",
                                  children:
                                    l.weightAfter !== void 0
                                      ? `${l.weightAfter.toFixed(2)} g`
                                      : "—",
                                }),
                              ],
                            }),
                            o !== null &&
                              s.jsxs(s.Fragment, {
                                children: [
                                  s.jsx("span", {
                                    className: "text-slate-300 text-base",
                                    children: "·",
                                  }),
                                  s.jsxs("div", {
                                    className: `flex items-center gap-1 px-2 py-0.5 rounded-md border text-sm font-semibold font-mono ${u ? "bg-emerald-50 border-emerald-200/70 text-emerald-700" : "bg-rose-50 border-rose-200/70 text-rose-600"}`,
                                    children: [
                                      s.jsx("span", {
                                        className:
                                          "font-normal text-xs opacity-70",
                                        children: "誤差",
                                      }),
                                      s.jsxs("span", {
                                        children: [
                                          o >= 0 ? "+" : "",
                                          o.toFixed(1),
                                          "%",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        });
                      })(),
                    l.dispenseNote &&
                      s.jsxs("div", {
                        className:
                          "mt-2 p-2.5 rounded-lg bg-sky-50/70 border border-sky-200/50",
                        children: [
                          s.jsx("p", {
                            className:
                              "text-slate-400 text-xs font-semibold mb-1",
                            children: "調劑事項",
                          }),
                          s.jsx("p", {
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
function Jm({ onClose: e, videoSrc: t, errorTextAry: n }) {
  return s.jsxs("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center",
    children: [
      s.jsx("div", {
        className: "absolute inset-0 bg-slate-900/60 backdrop-blur-sm",
        onClick: e,
      }),
      s.jsxs("div", {
        className:
          "relative z-10 w-full max-w-2xl mx-4 bg-white rounded-3xl shadow-2xl shadow-rose-900/20 overflow-hidden",
        children: [
          s.jsxs("div", {
            className:
              "bg-gradient-to-r from-rose-500 to-red-600 px-6 py-5 flex items-center justify-between",
            children: [
              s.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  s.jsx("div", {
                    className:
                      "w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center",
                    children: s.jsx(lr, { className: "w-5 h-5 text-white" }),
                  }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("h2", {
                        className: "text-white font-bold text-lg leading-tight",
                        children: "行為錯誤警示",
                      }),
                      s.jsx("p", {
                        className: "text-rose-100 text-sm",
                        children: "Behavior Error Alert",
                      }),
                    ],
                  }),
                ],
              }),
              s.jsx("button", {
                onClick: e,
                className:
                  "w-8 h-8 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors duration-150",
                children: s.jsx(Pl, { className: "w-4 h-4 text-white" }),
              }),
            ],
          }),
          s.jsx("div", {
            className: "px-6 py-5 border-b border-slate-100",
            children: s.jsxs("div", {
              className: "flex items-center gap-3 py-2 rounded-2xl",
              children: [
                s.jsx(lr, {
                  className: "w-8 h-8 text-rose-500 flex-shrink-0 mt-0.5",
                }),
                n && n.length > 0
                  ? s.jsx("div", {
                      className: "flex flex-wrap gap-2",
                      children: n.map((r, l) =>
                        s.jsx(
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
                  : s.jsx("p", {
                      className:
                        "text-rose-800 text-base font-medium leading-relaxed",
                      children:
                        "偵測到調劑行為異常，請確認操作流程是否符合標準程序。",
                    }),
              ],
            }),
          }),
          s.jsxs("div", {
            className: "px-6 py-5 border-b border-slate-100",
            children: [
              s.jsx("p", {
                className:
                  "text-slate-500 text-sm font-semibold mb-3 uppercase tracking-wider",
                children: "行為錯誤影片",
              }),
              t
                ? s.jsx("video", {
                    src: t,
                    controls: !0,
                    autoPlay: !0,
                    muted: !0,
                    className:
                      "w-full rounded-2xl bg-slate-900 aspect-video object-contain",
                  })
                : s.jsx("div", {
                    className:
                      "aspect-video w-full rounded-2xl bg-slate-100 border-2 border-dashed border-slate-200 flex items-center justify-center",
                    children: s.jsx("p", {
                      className: "text-slate-400 text-sm",
                      children: "影片尚未提供",
                    }),
                  }),
            ],
          }),
          s.jsx("div", {
            className: "px-6 py-4 flex justify-end",
            children: s.jsxs("button", {
              onClick: e,
              className:
                "flex items-center gap-2 px-8 py-2.5 rounded-xl text-base font-semibold bg-rose-500 text-white shadow-[0_2px_16px_rgba(239,68,68,0.35)] hover:bg-rose-600 hover:shadow-[0_4px_22px_rgba(239,68,68,0.45)] active:scale-[0.97] transition-all duration-200 cursor-pointer",
              children: [s.jsx(lt, { className: "w-4 h-4" }), "確認知悉"],
            }),
          }),
        ],
      }),
    ],
  });
}
function ef({ text: e }) {
  const [t, n] = T.useState(""),
    r = T.useRef(0);
  T.useEffect(() => {
    ((r.current = 0), n(""));
    const a = setInterval(() => {
      if (r.current >= e.length) {
        clearInterval(a);
        return;
      }
      (n(e.slice(0, r.current + 1)), r.current++);
    }, 18);
    return () => clearInterval(a);
  }, [e]);
  const l = t.length >= e.length;
  return s.jsxs("p", {
    className:
      "bg-slate-50 rounded-2xl p-5 whitespace-pre-wrap text-base text-slate-700 leading-relaxed",
    children: [
      t,
      !l &&
        s.jsx("span", {
          className:
            "inline-block w-0.5 h-4 ml-0.5 bg-sky-400 align-middle animate-pulse",
        }),
    ],
  });
}
function tf({ regimen: e, onClose: t }) {
  return s.jsxs("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center",
    children: [
      s.jsx("div", {
        className: "absolute inset-0 bg-slate-900/40 backdrop-blur-sm",
        onClick: t,
      }),
      s.jsxs("div", {
        className:
          "relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col",
        style: { maxHeight: "85vh" },
        children: [
          s.jsxs("div", {
            className:
              "px-5 py-4 flex items-center gap-3 border-b border-slate-100",
            children: [
              s.jsx("div", {
                className:
                  "w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center",
                children: s.jsx(cl, { className: "w-5 h-5 text-white" }),
              }),
              s.jsxs("div", {
                className: "flex items-center gap-2 flex-1 min-w-0",
                children: [
                  s.jsx("span", {
                    className: "text-slate-800 font-bold text-base",
                    children: "化療助手",
                  }),
                  s.jsxs("div", {
                    className:
                      "flex items-center gap-1 px-2 py-0.5 rounded-full bg-sky-50 border border-sky-200/60",
                    children: [
                      s.jsx(Im, { className: "w-3 h-3 text-sky-500" }),
                      s.jsx("span", {
                        className: "text-sky-600 text-xs font-semibold",
                        children: "AI 生成",
                      }),
                    ],
                  }),
                  s.jsx("span", {
                    className: "text-slate-300 text-sm",
                    children: "·",
                  }),
                  s.jsx("span", {
                    className: "text-slate-500 text-sm font-medium truncate",
                    children: e.patientName,
                  }),
                  s.jsx("span", {
                    className: "text-slate-400 text-sm font-mono",
                    children: e.chartNumber,
                  }),
                ],
              }),
              s.jsx("button", {
                onClick: t,
                className:
                  "w-7 h-7 rounded-lg hover:bg-slate-100 flex items-center justify-center transition-colors duration-150 flex-shrink-0",
                children: s.jsx(Pl, { className: "w-4 h-4 text-slate-400" }),
              }),
            ],
          }),
          s.jsx("div", {
            className: "px-5 py-5",
            children: e.chemoAssistantText
              ? s.jsx(ef, { text: e.chemoAssistantText })
              : s.jsx("p", {
                  className: "text-slate-400 text-sm text-center py-8",
                  children: "此處方尚無 AI 摘要內容",
                }),
          }),
          s.jsx("div", {
            className: "border-t border-slate-100 px-5 py-3",
            children: s.jsx("p", {
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
const nf = {
  Critical: {
    headerBg: "linear-gradient(135deg, #450a0a 0%, #7f1d1d 50%, #991b1b 100%)",
    bodyBg: "#fff5f5",
    divider: "#fecaca",
    labelText: "#b91c1c",
    valueText: "#1c0606",
    metaText: "#ef4444",
    badgeBg: "#fee2e2",
    badgeBorder: "#fca5a5",
    badgeText: "#b91c1c",
    infoBg: "linear-gradient(135deg, #450a0a 0%, #7f1d1d 100%)",
    infoBorder: "#991b1b",
    infoText: "#fef2f2",
    footerBg: "#fff1f1",
    footerBorder: "#fecaca",
    btnBg: "linear-gradient(135deg, #450a0a 0%, #7f1d1d 100%)",
    separatorBg: "#fca5a5",
  },
  Important: {
    headerBg: "linear-gradient(135deg, #431407 0%, #78350f 50%, #92400e 100%)",
    bodyBg: "#fffbf0",
    divider: "#fde68a",
    labelText: "#b45309",
    valueText: "#1c0a00",
    metaText: "#d97706",
    badgeBg: "#fef3c7",
    badgeBorder: "#fcd34d",
    badgeText: "#92400e",
    infoBg: "linear-gradient(135deg, #431407 0%, #78350f 100%)",
    infoBorder: "#92400e",
    infoText: "#fffbeb",
    footerBg: "#fffbf0",
    footerBorder: "#fde68a",
    btnBg: "linear-gradient(135deg, #431407 0%, #78350f 100%)",
    separatorBg: "#fcd34d",
  },
};
function rf(e) {
  var t, n, r, l, a, i, o, u, c, p;
  return {
    pharmacistName: "陳曉明",
    eventTime: "2026/05/07 17:28:33",
    errorTypes: ["F數量錯誤", "G多種藥物組合問題(藥物交互作用)"],
    errorLevel: "Important",
    bagType: e.admissionNumber ? "住院" : "門診",
    chartNumber: e.chartNumber,
    patientName: e.patientName,
    department: e.department,
    doctorName: e.prescribingDoctor,
    orderTime: e.effectiveDateTime.replace("-", "/").replace("-", "/"),
    aiText: `${e.patientName} 之處方中，${((t = e.drugs[0]) == null ? void 0 : t.drugNameZh) ?? ((n = e.drugs[0]) == null ? void 0 : n.drugName) ?? "標靶藥品"}（${((r = e.drugs[0]) == null ? void 0 : r.drugCode) ?? "A010"}）開立頻次為 ${((l = e.drugs[0]) == null ? void 0 : l.frequency) ?? "BIDPC"}，每次劑量 ${((a = e.drugs[0]) == null ? void 0 : a.dose) ?? "1.0"} ${((i = e.drugs[0]) == null ? void 0 : i.route) ?? "CAP"}，處方總量 ${((o = e.drugs[0]) == null ? void 0 : o.qty) ?? 100} 顆，然依頻次計算應為 ${Math.round((((u = e.drugs[0]) == null ? void 0 : u.qty) ?? 100) / 2)} 天份，與醫囑天數不符。此外，合併使用之 ${((c = e.drugs[1]) == null ? void 0 : c.drugNameZh) ?? ((p = e.drugs[1]) == null ? void 0 : p.drugName) ?? "輔助用藥"} 與前述藥品存在潛在交互作用，可能影響代謝酵素活性，建議電聯 ${e.prescribingDoctor} 醫師確認處方天數、藥品數量及合併用藥之必要性，並依實際治療計畫修正後方可繼續審核。`,
  };
}
function lf({ regimen: e, onClose: t }) {
  const n = rf(e),
    r = nf[n.errorLevel];
  return (
    T.useEffect(() => {
      const l = (a) => {
        a.key === "Escape" && t();
      };
      return (
        window.addEventListener("keydown", l),
        () => window.removeEventListener("keydown", l)
      );
    }, [t]),
    s.jsxs("div", {
      className: "fixed inset-0 z-50 flex items-center justify-center p-4",
      style: { background: "rgba(15,23,42,0.55)", backdropFilter: "blur(6px)" },
      onClick: t,
      children: [
        s.jsxs("div", {
          className:
            "rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col",
          style: {
            background: r.bodyBg,
            animation: "medgpt-in 0.2s ease-out",
            maxHeight: "90vh",
          },
          onClick: (l) => l.stopPropagation(),
          children: [
            s.jsxs("div", {
              className:
                "flex items-center justify-between px-5 py-4 flex-shrink-0",
              style: { background: r.headerBg },
              children: [
                s.jsxs("div", {
                  className: "flex items-center gap-2.5",
                  children: [
                    s.jsx("div", {
                      className:
                        "w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center",
                      children: s.jsx(cl, { className: "w-4 h-4 text-white" }),
                    }),
                    s.jsxs("div", {
                      children: [
                        s.jsx("h2", {
                          className: "text-white font-bold text-base",
                          children: "醫師處方疑義通知",
                        }),
                        s.jsx("p", {
                          className: "text-white/40 text-xs",
                          children: "medGPT · Prescription Dispute Notice",
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsx("button", {
                  onClick: t,
                  className:
                    "w-8 h-8 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors",
                  children: s.jsx(Pl, { className: "w-4 h-4" }),
                }),
              ],
            }),
            s.jsxs("div", {
              className: "flex-1 overflow-y-auto scrollbar-thin",
              style: { borderColor: r.divider },
              children: [
                s.jsxs("div", {
                  className: "px-5 py-4",
                  style: { borderBottom: `1px solid ${r.divider}` },
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center gap-x-4 gap-y-2 flex-wrap",
                      children: [
                        s.jsxs("div", {
                          className: "flex items-center gap-1.5",
                          children: [
                            s.jsx("span", {
                              className: "text-sm font-medium",
                              style: { color: r.labelText },
                              children: "藥師",
                            }),
                            s.jsx("span", {
                              className: "text-sm font-bold",
                              style: { color: r.valueText },
                              children: n.pharmacistName,
                            }),
                          ],
                        }),
                        s.jsx("div", {
                          className: "w-px h-3.5 flex-shrink-0",
                          style: { background: r.separatorBg },
                        }),
                        s.jsxs("div", {
                          className: "flex items-center gap-1.5",
                          children: [
                            s.jsx("span", {
                              className: "text-sm font-medium",
                              style: { color: r.labelText },
                              children: "發生時間",
                            }),
                            s.jsx("span", {
                              className: "text-sm font-bold font-mono",
                              style: { color: r.valueText },
                              children: n.eventTime,
                            }),
                          ],
                        }),
                      ],
                    }),
                    s.jsx("div", {
                      className: "flex flex-wrap gap-1.5 mt-3",
                      children: n.errorTypes.map((l) =>
                        s.jsx(
                          "span",
                          {
                            className:
                              "text-xs font-semibold px-2 py-0.5 rounded-md border",
                            style: {
                              background: r.badgeBg,
                              borderColor: r.badgeBorder,
                              color: r.badgeText,
                            },
                            children: l,
                          },
                          l,
                        ),
                      ),
                    }),
                  ],
                }),
                s.jsx("div", {
                  className: "px-5 py-4",
                  style: { borderBottom: `1px solid ${r.divider}` },
                  children: s.jsx("div", {
                    className: "grid grid-cols-2 gap-x-6 gap-y-2",
                    children: [
                      ["藥袋類型", n.bagType, !1],
                      ["病歷號", n.chartNumber, !0],
                      ["病人姓名", n.patientName, !1],
                      ["科別", n.department, !1],
                      ["醫師姓名", n.doctorName, !1],
                      ["開方時間", n.orderTime, !0],
                    ].map(([l, a, i]) =>
                      s.jsxs(
                        "div",
                        {
                          className: "flex items-center gap-2 min-w-0",
                          children: [
                            s.jsx("span", {
                              className:
                                "text-sm font-medium flex-shrink-0 w-16 text-right",
                              style: { color: r.labelText },
                              children: l,
                            }),
                            s.jsx("span", {
                              className: `text-sm font-semibold truncate ${i ? "font-mono" : ""}`,
                              style: { color: r.valueText },
                              children: a,
                            }),
                          ],
                        },
                        l,
                      ),
                    ),
                  }),
                }),
                s.jsx("div", {
                  className: "px-5 py-4",
                  children: s.jsx("div", {
                    className: "rounded-xl p-4 border",
                    style: { background: r.infoBg, borderColor: r.infoBorder },
                    children: s.jsx("p", {
                      className: "text-base leading-relaxed",
                      style: { color: r.infoText },
                      children: n.aiText,
                    }),
                  }),
                }),
              ],
            }),
            s.jsx("div", {
              className:
                "flex items-center justify-end px-5 py-3.5 flex-shrink-0",
              style: {
                borderTop: `1px solid ${r.footerBorder}`,
                background: r.footerBg,
              },
              children: s.jsx("button", {
                onClick: t,
                className:
                  "px-5 py-2 rounded-xl text-sm font-semibold text-white active:scale-[0.97] transition-all duration-200",
                style: { background: r.btnBg },
                children: "關閉",
              }),
            }),
          ],
        }),
        s.jsx("style", {
          children: `
        @keyframes medgpt-in {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `,
        }),
      ],
    })
  );
}
const ho = {
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
  sf = {
    high: {
      label: "偏高",
      icon: s.jsx(ym, { className: "w-3 h-3" }),
      rowClass: "border-l-2 border-l-rose-400 bg-rose-50/40",
      valueClass: "text-rose-600 font-bold",
      badgeClass: "bg-rose-100 text-rose-700 border border-rose-300/60",
    },
    low: {
      label: "偏低",
      icon: s.jsx(gm, { className: "w-3 h-3" }),
      rowClass: "border-l-2 border-l-amber-400 bg-amber-50/40",
      valueClass: "text-amber-600 font-bold",
      badgeClass: "bg-amber-100 text-amber-700 border border-amber-300/60",
    },
    normal: {
      label: "",
      icon: s.jsx(Em, { className: "w-3 h-3" }),
      rowClass: "",
      valueClass: "text-slate-700",
      badgeClass: "",
    },
  };
function af(e) {
  return e.groups.reduce(
    (t, n) => t + n.items.filter((r) => r.flag !== "normal").length,
    0,
  );
}
function of({ item: e }) {
  const t = sf[e.flag],
    n = e.flag !== "normal";
  return s.jsxs("div", {
    className: `flex items-center gap-0 px-5 py-3.5 border-b border-slate-100 last:border-0 transition-colors duration-150 hover:bg-slate-50/60 ${t.rowClass}`,
    children: [
      s.jsx("div", {
        className: "w-32 flex-shrink-0",
        children: s.jsx("span", {
          className: "text-slate-800 text-base font-semibold",
          children: e.name,
        }),
      }),
      s.jsxs("div", {
        className: "w-44 flex-shrink-0 flex items-baseline gap-1.5",
        children: [
          s.jsx("span", {
            className: `text-base ${t.valueClass}`,
            children: e.value,
          }),
          s.jsx("span", {
            className: "text-slate-400 text-sm",
            children: e.unit,
          }),
        ],
      }),
      s.jsx("div", {
        className: "w-40 flex-shrink-0",
        children: s.jsxs("span", {
          className: "text-slate-500 text-base",
          children: [e.refLow, " — ", e.refHigh],
        }),
      }),
      s.jsx("div", {
        className: "w-28 flex-shrink-0",
        children: n
          ? s.jsxs("span", {
              className: `inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${t.badgeClass}`,
              children: [t.icon, t.label],
            })
          : s.jsx("span", {
              className: "text-slate-300 text-base",
              children: "—",
            }),
      }),
      s.jsx("div", { className: "flex-1" }),
      s.jsx("div", {
        className: "flex-shrink-0",
        children: s.jsx("span", {
          className: "text-slate-400 text-sm font-mono",
          children: e.collectedDate,
        }),
      }),
    ],
  });
}
function uf({ labData: e }) {
  const t = af(e),
    n = ho[e.portStatus] ?? ho.fair;
  return s.jsxs("div", {
    className: "flex flex-col flex-1 min-h-0 gap-3",
    children: [
      s.jsxs("div", {
        className:
          "glass-card-solid px-5 py-3.5 flex-shrink-0 flex items-center justify-between flex-wrap gap-3",
        children: [
          s.jsxs("div", {
            className: "flex items-center gap-4",
            children: [
              s.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  s.jsx(co, { className: "w-4 h-4 text-teal-500" }),
                  s.jsx("span", {
                    className: "text-slate-800 font-bold text-base",
                    children: "檢驗數值",
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "flex items-center gap-1.5 text-slate-500 text-base",
                children: [
                  s.jsx("span", { children: "採檢日期：" }),
                  s.jsx("span", {
                    className: "font-mono font-semibold text-slate-700",
                    children: e.collectedDate,
                  }),
                ],
              }),
              t > 0
                ? s.jsxs("div", {
                    className:
                      "flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/60",
                    children: [
                      s.jsx(lr, { className: "w-3.5 h-3.5 text-rose-500" }),
                      s.jsxs("span", {
                        className: "text-rose-700 text-sm font-bold",
                        children: [t, " 項異常"],
                      }),
                    ],
                  })
                : s.jsxs("div", {
                    className:
                      "flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60",
                    children: [
                      s.jsx(lt, { className: "w-3.5 h-3.5 text-emerald-500" }),
                      s.jsx("span", {
                        className: "text-emerald-700 text-sm font-semibold",
                        children: "全部正常",
                      }),
                    ],
                  }),
            ],
          }),
          s.jsxs("div", {
            className: "flex items-center gap-5 text-sm text-slate-500",
            children: [
              s.jsxs("span", {
                children: [
                  "BSA ",
                  s.jsx("span", {
                    className: "text-slate-800 font-bold text-base",
                    children: e.bsa,
                  }),
                  s.jsx("span", {
                    className: "text-slate-400 ml-0.5",
                    children: "m²",
                  }),
                ],
              }),
              s.jsx("span", { className: "w-px h-4 bg-slate-200" }),
              s.jsxs("span", {
                children: [
                  "Cycle ",
                  s.jsx("span", {
                    className: "text-slate-800 font-bold text-base",
                    children: e.cycle,
                  }),
                ],
              }),
              s.jsx("span", { className: "w-px h-4 bg-slate-200" }),
              s.jsxs("span", {
                className: "flex items-center gap-1.5",
                children: [
                  s.jsx(co, { className: "w-3.5 h-3.5 text-slate-400" }),
                  s.jsx("span", { children: "Port-A" }),
                  s.jsx("span", {
                    className: `px-2 py-0.5 rounded-full text-xs font-bold border ${n.className}`,
                    children: n.label,
                  }),
                ],
              }),
              s.jsx("span", { className: "w-px h-4 bg-slate-200" }),
              s.jsxs("span", {
                children: [
                  "Nadir WBC",
                  s.jsx("span", {
                    className: `ml-1.5 font-bold text-base ${e.nadirWbc < 1.8 ? "text-rose-600" : e.nadirWbc < 3 ? "text-amber-600" : "text-slate-800"}`,
                    children: e.nadirWbc,
                  }),
                  s.jsx("span", {
                    className: "text-slate-400 ml-0.5",
                    children: "K/uL",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      s.jsxs("div", {
        className:
          "glass-card-solid flex-1 flex flex-col min-h-0 overflow-hidden",
        children: [
          s.jsxs("div", {
            className:
              "flex items-center gap-0 px-5 py-2.5 border-b border-slate-200/70 flex-shrink-0 bg-slate-50/60",
            children: [
              s.jsx("div", {
                className: "w-32 flex-shrink-0",
                children: s.jsx("span", {
                  className: "text-slate-400 text-sm font-semibold",
                  children: "項目",
                }),
              }),
              s.jsx("div", {
                className: "w-44 flex-shrink-0",
                children: s.jsx("span", {
                  className: "text-slate-400 text-sm font-semibold",
                  children: "數值",
                }),
              }),
              s.jsx("div", {
                className: "w-40 flex-shrink-0",
                children: s.jsx("span", {
                  className: "text-slate-400 text-sm font-semibold",
                  children: "參考範圍",
                }),
              }),
              s.jsx("div", {
                className: "w-28 flex-shrink-0",
                children: s.jsx("span", {
                  className: "text-slate-400 text-sm font-semibold",
                  children: "旗標",
                }),
              }),
              s.jsx("div", { className: "flex-1" }),
              s.jsx("div", {
                className: "flex-shrink-0",
                children: s.jsx("span", {
                  className: "text-slate-400 text-sm font-semibold",
                  children: "採檢日",
                }),
              }),
            ],
          }),
          s.jsx("div", {
            className: "flex-1 overflow-y-auto scrollbar-thin",
            children: e.groups.map((r) => {
              const l = r.items.filter((a) => a.flag !== "normal").length;
              return s.jsxs(
                "div",
                {
                  children: [
                    s.jsxs("div", {
                      className:
                        "flex items-center gap-3 px-5 py-2.5 bg-slate-50/80 border-b border-slate-100 sticky top-0 z-10",
                      children: [
                        s.jsx("span", {
                          className: "text-slate-700 text-sm font-bold",
                          children: r.groupName,
                        }),
                        l > 0 &&
                          s.jsxs("span", {
                            className:
                              "px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 border border-rose-200/60 text-xs font-semibold",
                            children: [l, " 異常"],
                          }),
                      ],
                    }),
                    r.items.map((a) => s.jsx(of, { item: a }, a.name)),
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
function cf({ changAry: e }) {
  return !e || e.length === 0
    ? s.jsx("div", {
        className: "flex-1 flex items-center justify-center",
        children: s.jsxs("div", {
          className: "glass-card px-10 py-8 text-center",
          children: [
            s.jsx(Lm, { className: "w-8 h-8 text-slate-300 mx-auto mb-3" }),
            s.jsx("p", {
              className: "text-slate-500 text-base font-medium",
              children: "無變異紀錄",
            }),
            s.jsx("p", {
              className: "text-slate-400 text-sm mt-1",
              children: "No variation records",
            }),
          ],
        }),
      })
    : s.jsx("div", {
        className: "flex-1 flex flex-col min-h-0 overflow-hidden",
        children: s.jsxs("div", {
          className: "overflow-y-auto flex-1 px-1",
          children: [
            s.jsxs("div", {
              className:
                "rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-sm",
              children: [
                s.jsxs("div", {
                  className:
                    "grid grid-cols-[140px_1fr_2fr] bg-slate-50 border-b border-slate-200/80 px-5 py-3",
                  children: [
                    s.jsxs("div", {
                      className:
                        "flex items-center gap-1.5 text-slate-500 text-sm font-semibold",
                      children: [
                        s.jsx(Ka, { className: "w-3.5 h-3.5" }),
                        "異動時間",
                      ],
                    }),
                    s.jsxs("div", {
                      className:
                        "flex items-center gap-1.5 text-slate-500 text-sm font-semibold",
                      children: [
                        s.jsx(fo, { className: "w-3.5 h-3.5" }),
                        "藥品名稱",
                      ],
                    }),
                    s.jsxs("div", {
                      className:
                        "flex items-center gap-1.5 text-slate-500 text-sm font-semibold",
                      children: [
                        s.jsx(Ya, { className: "w-3.5 h-3.5" }),
                        "異變內容",
                      ],
                    }),
                  ],
                }),
                e.map((t, n) => {
                  const r = t.udmdpnam.trim() !== "";
                  return s.jsxs(
                    "div",
                    {
                      className: `grid grid-cols-[140px_1fr_2fr] px-5 py-3.5 border-b border-slate-100 last:border-0 transition-colors duration-100 hover:bg-slate-50/70 ${n % 2 === 0 ? "bg-white" : "bg-slate-50/30"}`,
                      children: [
                        s.jsxs("div", {
                          className: "flex items-start gap-2",
                          children: [
                            s.jsx("span", {
                              className:
                                "font-mono text-sm text-slate-600 tabular-nums",
                              children: t.usdate,
                            }),
                            s.jsx("span", {
                              className:
                                "font-mono text-sm text-slate-400 tabular-nums flex-shrink-0",
                              children: t.ustime,
                            }),
                          ],
                        }),
                        s.jsx("div", {
                          className: "pr-4",
                          children: r
                            ? s.jsxs("span", {
                                className:
                                  "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-sky-50 border border-sky-200/60 text-sky-700 text-sm font-medium",
                                children: [
                                  s.jsx(fo, { className: "w-3 h-3" }),
                                  t.udmdpnam,
                                ],
                              })
                            : s.jsx("span", {
                                className: "text-slate-400 text-sm italic",
                                children: "系統異動",
                              }),
                        }),
                        s.jsx("div", {
                          className: "text-slate-700 text-sm leading-relaxed",
                          children: t.vardata
                            .split("<br>")
                            .map((l, a) =>
                              s.jsxs(
                                "span",
                                {
                                  children: [
                                    a > 0 && s.jsx("br", {}),
                                    l.replace(/^,\s*/, ""),
                                  ],
                                },
                                a,
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
            s.jsxs("p", {
              className: "text-slate-400 text-xs mt-2 pb-2 text-right",
              children: ["共 ", e.length, " 筆紀錄"],
            }),
          ],
        }),
      });
}
const go = [
  {
    key: "regimen",
    label: "Regimen",
    icon: s.jsx(wm, { className: "w-3.5 h-3.5" }),
  },
  {
    key: "treatment",
    label: "計劃治療書",
    icon: s.jsx(Ya, { className: "w-3.5 h-3.5" }),
  },
  {
    key: "project",
    label: "專案用藥",
    icon: s.jsx(dl, { className: "w-3.5 h-3.5" }),
  },
  {
    key: "variation",
    label: "變異紀錄",
    icon: s.jsx(Nm, { className: "w-3.5 h-3.5" }),
  },
  {
    key: "labvalue",
    label: "檢驗數值",
    icon: s.jsx(Xa, { className: "w-3.5 h-3.5" }),
  },
  {
    key: "alert",
    label: "異常提醒",
    icon: s.jsx(lr, { className: "w-3.5 h-3.5" }),
  },
];
function df(e) {
  const t = new Date(e),
    n = new Date();
  let r = n.getFullYear() - t.getFullYear();
  const l = n.getMonth() - t.getMonth();
  return ((l < 0 || (l === 0 && n.getDate() < t.getDate())) && r--, r);
}
function Rc({ regimen: e, status: t, onBack: n, onConfirm: r }) {
  var P;
  const [l, a] = T.useState("main"),
    [i, o] = T.useState(e.drugs),
    [u, c] = T.useState(!1);
  T.useEffect(() => {
    (o(e.drugs), c(!1), t === "unexamined" && w(!0));
  }, [e.id]);
  const [p, g] = T.useState(!1),
    [h, N] = T.useState(!1),
    [v, w] = T.useState(!1),
    A = t === "dispense",
    m = e.status === "readyForPickup";
  T.useEffect(() => {
    if (!A) return;
    const B = setTimeout(() => c(!0), 5e3);
    return () => clearTimeout(B);
  }, [A]);
  const d = e.admissionNumber ? "inpatient" : "outpatient",
    f = (B) => {
      o(($) =>
        $.map((Pe) => (Pe.id === B ? { ...Pe, checked: !Pe.checked } : Pe)),
      );
    },
    x = t === "unexamined",
    k = i.filter((B) => B.checked).length,
    S = i.length > 0 && k === i.length,
    j = t === "preparing",
    D = (j || A) && l === "main",
    V = j ? "備藥完成" : "調劑完成",
    _ = t === "completed",
    ge = _ && l === "main" && !m,
    Nt = A ? "調劑" : j ? "備藥" : x ? "審核" : "已完成",
    [Ee, xn] = T.useState(null),
    Rt = (B, $, Pe) => {
      (xn({ message: B, color: $, icon: Pe }), setTimeout(() => xn(null), 2e3));
    },
    vn = () => {
      (Rt(
        "審核通過，進入下一筆",
        "from-sky-500 to-sky-600",
        s.jsx(ls, { className: "w-5 h-5" }),
      ),
        r ? r() : n());
    },
    yn = () => {
      (Rt(
        "備藥完成，進入下一筆",
        "from-amber-500 to-amber-600",
        s.jsx(lt, { className: "w-5 h-5" }),
      ),
        r ? r() : n());
    },
    b = () => {
      (Rt(
        "調劑完成，進入下一筆",
        "from-emerald-500 to-emerald-600",
        s.jsx(lt, { className: "w-5 h-5" }),
      ),
        r ? r() : n());
    },
    E = () => {
      (Rt(
        "已標記為待領取，進入下一筆",
        "from-teal-500 to-teal-600",
        s.jsx(Jt, { className: "w-5 h-5" }),
      ),
        r ? r() : n());
    };
  return s.jsxs(s.Fragment, {
    children: [
      s.jsxs("div", {
        className: "flex flex-col flex-1 gap-4 px-4 pb-2 min-h-0",
        children: [
          s.jsxs("div", {
            className: "flex items-center gap-4 flex-shrink-0",
            children: [
              s.jsxs("button", {
                onClick: n,
                className:
                  "flex items-center gap-2 px-3 py-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-white/70 border border-transparent hover:border-slate-200/60 transition-all duration-150 text-base font-medium",
                children: [s.jsx(xm, { className: "w-4 h-4" }), "返回清單"],
              }),
              s.jsxs("div", {
                className: "flex items-center gap-2 flex-1 flex-wrap",
                children: [
                  s.jsxs("div", {
                    children: [
                      s.jsx("span", {
                        className: "text-slate-800 font-bold text-lg",
                        children: e.patientName,
                      }),
                      s.jsx("span", {
                        className: "text-slate-400 mx-2",
                        children: "—",
                      }),
                      s.jsx("span", {
                        className: "text-slate-500 font-mono text-base",
                        children: e.chartNumber,
                      }),
                    ],
                  }),
                  s.jsx("span", {
                    className:
                      d === "outpatient" ? "tag-outpatient" : "tag-inpatient",
                    children: d === "outpatient" ? "門診" : "住院",
                  }),
                  d === "inpatient" &&
                    e.admissionNumber &&
                    s.jsxs("div", {
                      className:
                        "flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200/60",
                      children: [
                        s.jsx(El, { className: "w-3.5 h-3.5 text-amber-500" }),
                        s.jsx("span", {
                          className:
                            "text-amber-700 text-sm font-mono font-semibold",
                          children: e.admissionNumber,
                        }),
                      ],
                    }),
                  x &&
                    s.jsx("span", {
                      className:
                        "px-2.5 py-0.5 rounded-full text-sm font-semibold bg-rose-100 text-rose-600 border border-rose-200/60",
                      children: "待審核",
                    }),
                  m &&
                    s.jsxs("span", {
                      className:
                        "flex items-center gap-1 px-2.5 py-0.5 rounded-full text-sm font-semibold bg-teal-50 text-teal-700 border border-teal-200/60",
                      children: [
                        s.jsx(Jt, { className: "w-3.5 h-3.5" }),
                        "待領取",
                      ],
                    }),
                ],
              }),
              A &&
                s.jsxs("button", {
                  disabled: !u,
                  onClick: () => u && g(!0),
                  style: u
                    ? {
                        animation:
                          "behavior-error-pulse 1.6s ease-in-out infinite",
                      }
                    : void 0,
                  className: `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold flex-shrink-0 transition-all duration-300 ${u ? "text-white cursor-pointer" : "bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed"}`,
                  children: [s.jsx(lr, { className: "w-4 h-4" }), "行為錯誤"],
                }),
              x &&
                s.jsxs("button", {
                  onClick: () => w(!0),
                  className:
                    "flex items-center gap-2 px-4 py-2 rounded-xl text-base font-semibold text-white flex-shrink-0 active:scale-[0.97] transition-all duration-200",
                  style: {
                    background:
                      "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
                    boxShadow: "0 2px 12px rgba(15,23,42,0.35)",
                  },
                  children: [s.jsx(cl, { className: "w-4 h-4" }), "medGPT"],
                }),
              s.jsxs("button", {
                onClick: () => N(!0),
                className:
                  "flex items-center gap-2 px-4 py-2 rounded-xl text-base font-semibold bg-gradient-to-r from-sky-500 to-teal-500 text-white shadow-[0_2px_12px_rgba(14,165,233,0.35)] hover:shadow-[0_4px_18px_rgba(14,165,233,0.45)] hover:brightness-105 active:scale-[0.97] transition-all duration-200 flex-shrink-0",
                children: [s.jsx(cl, { className: "w-4 h-4" }), "化療助手"],
              }),
              s.jsxs("select", {
                value: l,
                onChange: (B) => a(B.target.value),
                className:
                  "bg-white/70 border border-slate-200/70 rounded-xl px-3 py-1 text-base font-medium text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300/50 focus:border-sky-300 transition-all cursor-pointer",
                children: [
                  s.jsx("option", { value: "main", children: Nt }),
                  go.map((B) =>
                    s.jsx("option", { value: B.key, children: B.label }, B.key),
                  ),
                ],
              }),
            ],
          }),
          l === "labvalue" && s.jsx(uf, { labData: e.labData }),
          l === "variation" && s.jsx(cf, { changAry: e.changAry }),
          l !== "main" &&
            l !== "labvalue" &&
            l !== "variation" &&
            s.jsx("div", {
              className: "flex-1 flex items-center justify-center",
              children: s.jsxs("div", {
                className: "glass-card px-10 py-8 text-center",
                children: [
                  s.jsxs("p", {
                    className: "text-slate-600 text-base font-medium",
                    children: [
                      (P = go.find((B) => B.key === l)) == null
                        ? void 0
                        : P.label,
                      " 功能建置中",
                    ],
                  }),
                  s.jsx("p", {
                    className: "text-slate-400 text-base mt-1.5",
                    children: "Under Development",
                  }),
                ],
              }),
            }),
          l === "main" &&
            s.jsxs("div", {
              className: "flex flex-col gap-3 flex-1 min-h-0",
              children: [
                s.jsx("div", {
                  className: "glass-card-solid px-5 py-4 flex-shrink-0",
                  children: s.jsxs("div", {
                    className: "space-y-2.5",
                    children: [
                      s.jsxs("div", {
                        className: "flex items-center gap-5",
                        children: [
                          s.jsxs("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                              s.jsx(mo, {
                                className: "w-4 h-4 text-slate-400",
                              }),
                              s.jsxs("span", {
                                className:
                                  "text-slate-700 text-base font-semibold",
                                children: [df(e.birthDate), "歲"],
                              }),
                              s.jsxs("span", {
                                className: "text-slate-400 text-sm font-mono",
                                children: ["(", e.birthDate, ")"],
                              }),
                            ],
                          }),
                          s.jsx("div", { className: "w-px h-4 bg-slate-200" }),
                          s.jsxs("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                              s.jsx(_m, {
                                className: "w-4 h-4 text-slate-400",
                              }),
                              s.jsxs("span", {
                                className:
                                  "text-slate-700 text-base font-semibold",
                                children: [e.height, " cm"],
                              }),
                            ],
                          }),
                          s.jsx("div", { className: "w-px h-4 bg-slate-200" }),
                          s.jsxs("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                              s.jsx(Vm, {
                                className: "w-4 h-4 text-slate-400",
                              }),
                              s.jsxs("span", {
                                className:
                                  "text-slate-700 text-base font-semibold",
                                children: [e.weight, " kg"],
                              }),
                            ],
                          }),
                          s.jsx("div", { className: "flex-1" }),
                          s.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              s.jsx(mo, {
                                className: "w-4 h-4 text-slate-400",
                              }),
                              s.jsx("span", {
                                className:
                                  "text-slate-700 text-base font-semibold font-mono",
                                children: e.effectiveDateTime,
                              }),
                            ],
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "flex items-baseline gap-3",
                        children: [
                          s.jsx("span", {
                            className:
                              "text-slate-400 text-base w-16 flex-shrink-0",
                            children: "診斷",
                          }),
                          s.jsx("span", {
                            className: "text-slate-800 text-base font-semibold",
                            children: e.diagnosis,
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "flex items-baseline gap-3",
                        children: [
                          s.jsx("span", {
                            className:
                              "text-slate-400 text-base w-16 flex-shrink-0",
                            children: "科別",
                          }),
                          s.jsx("span", {
                            className: "text-slate-800 text-base font-semibold",
                            children: e.department,
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "flex items-center gap-6",
                        children: [
                          s.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              s.jsx("span", {
                                className: "text-slate-400 text-base",
                                children: "開立醫師",
                              }),
                              s.jsx("span", {
                                className:
                                  "text-slate-700 text-base font-semibold",
                                children: e.prescribingDoctor,
                              }),
                            ],
                          }),
                          s.jsx("div", { className: "w-px h-4 bg-slate-200" }),
                          s.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              s.jsx("span", {
                                className: "text-slate-400 text-base",
                                children: "審核醫師",
                              }),
                              s.jsx("span", {
                                className:
                                  "text-slate-700 text-base font-semibold",
                                children: e.reviewingDoctor,
                              }),
                            ],
                          }),
                          s.jsx("div", { className: "w-px h-4 bg-slate-200" }),
                          s.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              s.jsx("span", {
                                className: "text-slate-400 text-base",
                                children: "審核藥師",
                              }),
                              s.jsx("span", {
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
                s.jsx("div", {
                  className:
                    "glass-card-solid flex-1 flex flex-col min-h-0 overflow-hidden",
                  children: s.jsx(Xm, {
                    drugs: x || A || _ ? e.drugs : i,
                    checkable: j,
                    onToggle: j ? f : void 0,
                    plainView: A || _,
                  }),
                }),
                x &&
                  s.jsxs("div", {
                    className:
                      "flex items-center justify-between glass-card px-5 py-3 flex-shrink-0",
                    children: [
                      s.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          s.jsx(ls, { className: "w-4 h-4 text-slate-400" }),
                          s.jsx("span", {
                            className: "text-slate-500 text-base",
                            children: "請確認處方內容後進行審核",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          s.jsx("button", {
                            className:
                              "flex items-center gap-2 px-5 py-2.5 rounded-xl text-base font-semibold border border-rose-200 text-rose-600 bg-rose-50 hover:bg-rose-100 transition-all duration-200 cursor-pointer",
                            children: "退回",
                          }),
                          s.jsxs("button", {
                            onClick: vn,
                            className:
                              "flex items-center gap-2 px-6 py-2.5 rounded-xl text-base font-semibold bg-sky-500 text-white shadow-[0_2px_16px_rgba(14,165,233,0.35)] hover:bg-sky-600 hover:shadow-[0_4px_22px_rgba(14,165,233,0.45)] active:scale-[0.97] transition-all duration-200 cursor-pointer",
                            children: [
                              s.jsx(ls, { className: "w-4 h-4" }),
                              "審核通過",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                D &&
                  s.jsxs("div", {
                    className:
                      "flex items-center justify-between glass-card px-5 py-3 flex-shrink-0",
                    children: [
                      j
                        ? s.jsxs("div", {
                            className: `flex items-center gap-3 text-base font-medium ${S ? "text-emerald-600" : "text-slate-400"}`,
                            children: [
                              s.jsx(lt, {
                                className: `w-4 h-4 ${S ? "text-emerald-500" : "text-slate-300"}`,
                              }),
                              S
                                ? "所有藥品已勾選，可確認送出"
                                : `尚有 ${i.length - k} 項藥品未勾選`,
                              s.jsxs("span", {
                                className: `text-sm font-semibold px-2.5 py-1 rounded-lg border ${S ? "bg-emerald-50 border-emerald-200/60 text-emerald-600" : "bg-slate-50 border-slate-200/60 text-slate-400"}`,
                                children: ["已備 ", k, " / ", i.length],
                              }),
                            ],
                          })
                        : s.jsxs("div", {
                            className:
                              "flex items-center gap-1.5 text-base font-medium text-slate-400",
                            children: [
                              s.jsx(lt, {
                                className: "w-4 h-4 text-slate-300",
                              }),
                              "請確認調劑內容後完成",
                            ],
                          }),
                      s.jsxs("button", {
                        disabled: j && !S,
                        onClick: j ? yn : b,
                        className: `flex items-center gap-2 px-6 py-2.5 rounded-xl text-base font-semibold transition-all duration-200 ${!j || S ? "bg-emerald-500 text-white shadow-[0_2px_16px_rgba(16,185,129,0.35)] hover:bg-emerald-600 hover:shadow-[0_4px_22px_rgba(16,185,129,0.45)] active:scale-[0.97] cursor-pointer" : "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"}`,
                        children: [s.jsx(lt, { className: "w-4 h-4" }), V],
                      }),
                    ],
                  }),
                ge &&
                  s.jsxs("div", {
                    className:
                      "flex items-center justify-between glass-card px-5 py-3 flex-shrink-0",
                    children: [
                      s.jsxs("div", {
                        className:
                          "flex items-center gap-1.5 text-base font-medium text-slate-400",
                        children: [
                          s.jsx(Jt, { className: "w-4 h-4 text-slate-300" }),
                          "確認後將標記為待領取狀態",
                        ],
                      }),
                      s.jsxs("button", {
                        onClick: E,
                        className:
                          "flex items-center gap-2 px-6 py-2.5 rounded-xl text-base font-semibold bg-teal-500 text-white shadow-[0_2px_16px_rgba(20,184,166,0.35)] hover:bg-teal-600 hover:shadow-[0_4px_22px_rgba(20,184,166,0.45)] active:scale-[0.97] transition-all duration-200 cursor-pointer",
                        children: [s.jsx(Jt, { className: "w-4 h-4" }), "上架"],
                      }),
                    ],
                  }),
              ],
            }),
        ],
      }),
      p &&
        s.jsx(Jm, {
          onClose: () => g(!1),
          videoSrc: e.behaviorErrorVideo,
          errorTextAry: e.behaviorErrorTextAry,
        }),
      h && s.jsx(tf, { regimen: e, onClose: () => N(!1) }),
      v && s.jsx(lf, { regimen: e, onClose: () => w(!1) }),
      s.jsx("div", {
        className: `fixed top-6 left-0 z-50 transition-all duration-500 ease-out ${Ee ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 -translate-x-full pointer-events-none"}`,
        children:
          Ee &&
          s.jsxs("div", {
            className: `flex items-center gap-3 pl-5 pr-6 py-3.5 rounded-r-2xl text-white font-semibold text-base shadow-2xl bg-gradient-to-r ${Ee.color}`,
            children: [
              s.jsx("div", { className: "flex-shrink-0", children: Ee.icon }),
              s.jsx("span", { children: Ee.message }),
            ],
          }),
      }),
    ],
  });
}
const xo = {
    unexamined: "審核",
    preparing: "備藥",
    dispense: "調劑",
    completed: "上架",
    readyForPickup: "調閱",
    shipping: "查看",
    received: "查看",
    administered: "查看",
  },
  mf = {
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
  vo = {
    unexamined: "bg-rose-500 hover:bg-rose-600 shadow-rose-200",
    preparing: "bg-amber-500 hover:bg-amber-600 shadow-amber-200",
    dispense: "bg-blue-500 hover:bg-blue-600 shadow-blue-200",
    completed: "bg-teal-500 hover:bg-teal-600 shadow-teal-200",
    readyForPickup: "bg-slate-400 hover:bg-slate-500 shadow-slate-200",
    shipping: "bg-slate-500 hover:bg-slate-600 shadow-slate-200",
    received: "bg-slate-500 hover:bg-slate-600 shadow-slate-200",
    administered: "bg-slate-500 hover:bg-slate-600 shadow-slate-200",
  };
function Hc(e) {
  return e.admissionNumber ? "inpatient" : "outpatient";
}
function ff({ rx: e, listStatus: t, onSelect: n }) {
  const r = Hc(e),
    l = mf[r],
    a = e.status === "readyForPickup",
    i = a ? xo.readyForPickup : xo[t],
    o = a ? vo.readyForPickup : vo[t],
    [u, c] = e.effectiveDateTime.split(" ");
  return s.jsxs("div", {
    className: `flex items-center gap-4 px-4 py-3 rounded-2xl border transition-all duration-200 cursor-pointer group ${l.card}`,
    onClick: () => n(e),
    children: [
      s.jsx("div", {
        className: `w-1 h-12 rounded-full flex-shrink-0 ${l.dot}`,
      }),
      s.jsxs("div", {
        className: "flex flex-col gap-0.5 w-32 flex-shrink-0",
        children: [
          s.jsx("span", {
            className: "text-slate-800 text-base font-semibold font-mono",
            children: u,
          }),
          s.jsxs("div", {
            className: "flex items-center gap-1",
            children: [
              s.jsx(Ka, { className: "w-3.5 h-3.5 text-slate-400" }),
              s.jsx("span", {
                className: "text-slate-600 text-base font-mono",
                children: c,
              }),
            ],
          }),
        ],
      }),
      s.jsxs("div", {
        className:
          "flex items-center gap-1.5 w-28 flex-shrink-0 flex-wrap gap-y-1",
        children: [
          s.jsx("span", {
            className: `text-sm font-semibold px-2.5 py-0.5 rounded-full border ${l.badge}`,
            children: r === "outpatient" ? "門診" : "住院",
          }),
          a &&
            s.jsxs("span", {
              className:
                "flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-teal-50 border border-teal-200/60 text-teal-700",
              children: [s.jsx(Jt, { className: "w-3 h-3" }), "待領取"],
            }),
        ],
      }),
      s.jsxs("div", {
        className: "flex-1 min-w-0 flex flex-col gap-0.5",
        children: [
          s.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              s.jsx(zc, { className: "w-4 h-4 text-slate-400 flex-shrink-0" }),
              s.jsx("span", {
                className: "text-slate-800 text-base font-bold truncate",
                children: e.patientName,
              }),
              s.jsx("span", {
                className: "text-slate-400 text-base font-mono flex-shrink-0",
                children: e.chartNumber,
              }),
              r === "inpatient" &&
                e.admissionNumber &&
                s.jsxs(s.Fragment, {
                  children: [
                    s.jsx("span", {
                      className: "text-slate-300 text-base",
                      children: "·",
                    }),
                    s.jsx(El, {
                      className: "w-3.5 h-3.5 text-amber-400 flex-shrink-0",
                    }),
                    s.jsx("span", {
                      className:
                        "text-amber-700 text-base font-mono flex-shrink-0",
                      children: e.admissionNumber,
                    }),
                  ],
                }),
            ],
          }),
          s.jsxs("div", {
            className: "flex items-center gap-1.5",
            children: [
              s.jsx(Xa, {
                className: "w-3.5 h-3.5 text-slate-400 flex-shrink-0",
              }),
              s.jsx("span", {
                className: "text-slate-500 text-base",
                children: e.department,
              }),
              e.diagnosis &&
                s.jsxs(s.Fragment, {
                  children: [
                    s.jsx("span", {
                      className: "text-slate-300 text-base",
                      children: "·",
                    }),
                    s.jsx("span", {
                      className: "text-slate-400 text-base truncate",
                      children: e.diagnosis,
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
      s.jsxs("button", {
        onClick: (p) => {
          (p.stopPropagation(), n(e));
        },
        className: `flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white flex-shrink-0 shadow-md transition-all duration-200 active:scale-95 ${o}`,
        children: [i, s.jsx(jm, { className: "w-4 h-4" })],
      }),
    ],
  });
}
function pf({ stat: e, regimens: t }) {
  const [n, r] = T.useState(""),
    [l, a] = T.useState(null),
    [i, o] = T.useState("all"),
    u = e.status === "preparing" || e.status === "dispense",
    c =
      e.status === "completed"
        ? [...t].sort((v, w) => {
            const A = v.status === "readyForPickup" ? 1 : 0,
              m = w.status === "readyForPickup" ? 1 : 0;
            return A - m;
          })
        : t,
    p = i === "all" ? c : c.filter((v) => Hc(v) === i),
    g = t.filter((v) => !v.admissionNumber).length,
    h = t.filter((v) => !!v.admissionNumber).length,
    N = (v) => {
      const w = c.filter((A) => A.id !== v.id && A.status !== "readyForPickup");
      w.length > 0 ? a(w[0]) : a(null);
    };
  return l
    ? s.jsx(Rc, {
        regimen: l,
        status: e.status,
        onBack: () => a(null),
        onConfirm: () => N(l),
      })
    : s.jsxs("div", {
        className: "flex flex-1 flex-col gap-4 px-6 pb-6 min-h-0",
        children: [
          u &&
            s.jsx("div", {
              className: "glass-card p-4 flex-shrink-0",
              children: s.jsxs("div", {
                className: "flex items-center gap-4",
                children: [
                  s.jsxs("div", {
                    className: "flex items-center gap-3 flex-shrink-0",
                    children: [
                      s.jsx("div", {
                        className:
                          "w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center",
                        children: s.jsx(ml, {
                          className: "w-4.5 h-4.5 text-amber-500",
                        }),
                      }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("p", {
                            className: "text-slate-800 font-semibold text-sm",
                            children:
                              e.status === "preparing"
                                ? "備藥通知"
                                : "調劑通知",
                          }),
                          s.jsx("p", {
                            className: "text-slate-500 text-xs",
                            children: "掃描調劑條碼 Scan Dispense Barcode",
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "flex-1 relative",
                    children: [
                      s.jsx(ml, {
                        className:
                          "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40",
                      }),
                      s.jsx("input", {
                        type: "text",
                        value: n,
                        onChange: (v) => r(v.target.value),
                        placeholder:
                          "掃描或輸入條碼 / Scan or enter barcode...",
                        className: "glass-input w-full pl-10 text-sm",
                      }),
                    ],
                  }),
                  s.jsx("button", {
                    className:
                      "glass-btn-primary px-5 py-2.5 text-sm font-semibold flex-shrink-0",
                    children: "確認",
                  }),
                ],
              }),
            }),
          s.jsxs("div", {
            className: "glass-card-solid flex-1 flex flex-col min-h-0",
            children: [
              s.jsxs("div", {
                className:
                  "flex items-center justify-between px-5 py-3.5 border-b border-slate-200/60 flex-shrink-0",
                children: [
                  s.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      s.jsx("h3", {
                        className: "text-slate-800 font-bold text-base",
                        children: "處方清單",
                      }),
                      s.jsxs("span", {
                        className: "text-slate-400 text-sm font-mono",
                        children: [p.length, " / ", t.length, " 筆"],
                      }),
                    ],
                  }),
                  s.jsxs("select", {
                    value: i,
                    onChange: (v) => o(v.target.value),
                    className:
                      "bg-white/80 border border-slate-200/70 rounded-xl px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300/50 focus:border-sky-300 transition-all cursor-pointer",
                    children: [
                      s.jsxs("option", {
                        value: "all",
                        children: ["全部（", t.length, "）"],
                      }),
                      s.jsxs("option", {
                        value: "outpatient",
                        children: ["門診（", g, "）"],
                      }),
                      s.jsxs("option", {
                        value: "inpatient",
                        children: ["住院（", h, "）"],
                      }),
                    ],
                  }),
                ],
              }),
              s.jsx("div", {
                className:
                  "flex-1 overflow-y-auto scrollbar-thin p-3 flex flex-col gap-2",
                children:
                  p.length === 0
                    ? s.jsx("div", {
                        className:
                          "flex-1 flex items-center justify-center py-12",
                        children: s.jsx("p", {
                          className: "text-slate-400 text-sm",
                          children: "目前無符合條件的處方",
                        }),
                      })
                    : p.map((v) =>
                        s.jsx(
                          ff,
                          { rx: v, listStatus: e.status, onSelect: a },
                          v.id,
                        ),
                      ),
              }),
            ],
          }),
        ],
      });
}
const hf = [
  { status: "unexamined", labelZh: "未審核", labelEn: "Unexamined" },
  { status: "preparing", labelZh: "可備藥", labelEn: "Preparing" },
  { status: "dispense", labelZh: "可調劑", labelEn: "Dispense" },
  { status: "completed", labelZh: "已完成", labelEn: "Completed" },
];
function gf() {
  const e = {};
  for (const t of Ja) {
    const n = t.status === "readyForPickup" ? "completed" : t.status;
    e[n] = (e[n] ?? 0) + 1;
  }
  return hf.map((t) => ({ ...t, count: e[t.status] ?? 0 }));
}
const os = gf();
function xf() {
  const [e, t] = T.useState(null),
    n = (i) => {
      t((o) => (o === i ? null : i));
    },
    r = () => t(null),
    l = os.find((i) => i.status === e),
    a = e
      ? Ja.filter((i) =>
          e === "completed"
            ? i.status === "completed" || i.status === "readyForPickup"
            : i.status === e,
        )
      : [];
  return s.jsxs("div", {
    className: "flex-1 flex flex-col min-h-0",
    children: [
      e
        ? l &&
          s.jsxs(s.Fragment, {
            children: [
              s.jsx("div", {
                className: "px-6 pt-3 mb-3 flex-shrink-0",
                children: s.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    s.jsx("div", {
                      className: "flex gap-2",
                      children: os.map((i) =>
                        s.jsxs(
                          "button",
                          {
                            onClick: () => t(i.status),
                            className: `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${e === i.status ? "bg-blue-500/12 text-blue-700 border border-blue-300/50 shadow-sm" : "text-slate-500 hover:text-slate-700 hover:bg-white/60 border border-transparent"}`,
                            children: [
                              i.labelZh,
                              s.jsxs("span", {
                                className: "ml-2 text-xs opacity-60",
                                children: ["(", i.count, ")"],
                              }),
                            ],
                          },
                          i.status,
                        ),
                      ),
                    }),
                    s.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        s.jsx("button", {
                          onClick: r,
                          className:
                            "text-slate-700 text-sm font-semibold hover:text-slate-500 transition-colors duration-200 cursor-pointer select-none",
                          children: "功能選單",
                        }),
                        s.jsxs("button", {
                          className:
                            "glass-btn flex items-center gap-2 px-3 py-1.5 text-sm",
                          children: [
                            s.jsx(Mc, { className: "w-3.5 h-3.5" }),
                            s.jsx("span", { children: "重新整理" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              s.jsx(pf, { stat: l, regimens: a }, e),
            ],
          })
        : s.jsx(Ym, { stats: os, activeStatus: e, onSelect: n }),
      !e &&
        s.jsx("div", {
          className: "flex-1 flex items-center justify-center px-6 pb-6",
          children: s.jsxs("div", {
            className: "glass-card px-10 py-8 text-center max-w-md",
            children: [
              s.jsx("p", {
                className: "text-slate-600 text-base font-medium",
                children: "請選擇狀態卡片以查看詳細清單",
              }),
              s.jsx("p", {
                className: "text-slate-400 text-sm mt-1.5",
                children: "Select a status card to view details",
              }),
            ],
          }),
        }),
    ],
  });
}
const vf = {
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
function yf({ rx: e, onSelect: t }) {
  const n = vf[e.status],
    r = !!e.admissionNumber;
  return s.jsxs("div", {
    onClick: () => t(e),
    className: "prescription-row group cursor-pointer items-stretch py-2.5",
    children: [
      s.jsx("div", {
        className: `w-1.5 self-stretch rounded-full flex-shrink-0 ${r ? "bg-amber-400/70" : "bg-sky-400/70"} group-hover:opacity-100 opacity-80`,
      }),
      s.jsxs("div", {
        className: "flex-1 flex flex-col gap-1 min-w-0",
        children: [
          s.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              s.jsxs("div", {
                className: "flex items-center gap-1.5 flex-shrink-0",
                children: [
                  s.jsx(Ka, { className: "w-3.5 h-3.5 text-slate-400" }),
                  s.jsx("span", {
                    className:
                      "text-slate-600 text-base font-mono leading-none",
                    children: e.effectiveDateTime.split(" ")[1],
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "flex items-center gap-1.5 w-20 flex-shrink-0",
                children: [
                  s.jsx(zc, {
                    className: "w-3.5 h-3.5 text-slate-400 flex-shrink-0",
                  }),
                  s.jsx("span", {
                    className: "text-slate-900 text-base font-bold truncate",
                    children: e.patientName,
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "flex items-center gap-1.5 flex-shrink-0",
                children: [
                  s.jsx(Ya, { className: "w-3.5 h-3.5 text-slate-400" }),
                  s.jsx("span", {
                    className: "text-slate-500 text-base font-mono",
                    children: e.chartNumber,
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "flex items-center gap-1.5 flex-1 min-w-0",
                children: [
                  s.jsx(dl, {
                    className: "w-3.5 h-3.5 text-slate-400 flex-shrink-0",
                  }),
                  s.jsx("span", {
                    className: "text-slate-600 text-sm truncate",
                    children: e.diagnosis,
                  }),
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              r
                ? s.jsxs("div", {
                    className: "flex items-center gap-1.5 flex-shrink-0",
                    children: [
                      s.jsx(El, { className: "w-3.5 h-3.5 text-amber-400" }),
                      s.jsx("span", {
                        className: "text-amber-700 text-base font-mono",
                        children: e.admissionNumber,
                      }),
                    ],
                  })
                : s.jsxs("div", {
                    className: "flex items-center gap-1.5 flex-shrink-0",
                    children: [
                      s.jsx(Xa, { className: "w-3.5 h-3.5 text-slate-400" }),
                      s.jsx("span", {
                        className: "text-slate-600 text-base",
                        children: e.department,
                      }),
                    ],
                  }),
              s.jsx("span", {
                className: "text-slate-400 text-sm flex-shrink-0",
                children: e.prescribingDoctor,
              }),
              e.reviewingPharmacist &&
                e.reviewingPharmacist !== "-" &&
                s.jsxs("span", {
                  className: "text-slate-400 text-sm flex-shrink-0",
                  children: ["/ ", e.reviewingPharmacist],
                }),
              e.status === "administered" &&
                e.departureTime &&
                s.jsxs("div", {
                  className: "flex items-center gap-1.5 ml-auto flex-shrink-0",
                  children: [
                    s.jsx(Bc, { className: "w-3.5 h-3.5 text-green-500" }),
                    s.jsx("span", {
                      className: "text-green-700 text-base font-mono",
                      children: e.departureTime.split(" ")[1],
                    }),
                    s.jsx("span", {
                      className: "text-green-600 text-base",
                      children: "離開",
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
      s.jsx("span", {
        className: `inline-flex items-center self-center px-2.5 py-1 rounded-full text-base font-semibold flex-shrink-0 ${n.className}`,
        children: n.label,
      }),
      s.jsx(vm, {
        className:
          "w-4 h-4 text-slate-400 group-hover:text-slate-600 self-center flex-shrink-0 transition-colors",
      }),
    ],
  });
}
const Nf = [
  { value: "all", label: "全部" },
  { value: "unexamined", label: "已審核" },
  { value: "preparing", label: "備藥中" },
  { value: "dispense", label: "調配中" },
  { value: "completed", label: "已完成" },
  { value: "shipping", label: "運送中" },
  { value: "received", label: "已簽收" },
  { value: "administered", label: "給藥完成" },
];
function wf({ regimens: e, onSelect: t }) {
  const [n, r] = T.useState("all"),
    [l, a] = T.useState(""),
    i = e.filter((c) => (n === "all" ? !0 : c.status === n)),
    o = i.filter((c) => !c.admissionNumber),
    u = i.filter((c) => !!c.admissionNumber);
  return s.jsxs("div", {
    className: "flex flex-col flex-1 gap-4 min-h-0",
    children: [
      s.jsxs("div", {
        className: "glass-card p-4 flex items-center gap-4 flex-shrink-0",
        children: [
          s.jsxs("div", {
            className: "flex items-center gap-3 flex-shrink-0",
            children: [
              s.jsx("div", {
                className:
                  "w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center",
                children: s.jsx(ml, { className: "w-4.5 h-4.5 text-teal-500" }),
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("p", {
                    className: "text-slate-800 font-semibold text-sm",
                    children: "條碼掃描",
                  }),
                  s.jsx("p", {
                    className: "text-slate-500 text-xs",
                    children: "Scan Barcode",
                  }),
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            className: "flex-1 relative",
            children: [
              s.jsx(ml, {
                className:
                  "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400",
              }),
              s.jsx("input", {
                type: "text",
                value: l,
                onChange: (c) => a(c.target.value),
                placeholder: "掃描或輸入條碼 / Scan or enter barcode...",
                className: "glass-input w-full pl-10 text-sm",
              }),
            ],
          }),
          s.jsx("div", {
            className: "flex-shrink-0",
            children: s.jsx("select", {
              value: n,
              onChange: (c) => r(c.target.value),
              className: "glass-input text-sm pr-9 cursor-pointer",
              children: Nf.map((c) =>
                s.jsx("option", { value: c.value, children: c.label }, c.value),
              ),
            }),
          }),
          s.jsx("button", {
            className:
              "glass-btn-primary px-5 py-3 text-sm font-semibold flex-shrink-0",
            children: "確認",
          }),
        ],
      }),
      s.jsxs("div", {
        className: "flex gap-4 flex-1 min-h-0",
        children: [
          s.jsx(yo, {
            title: "門診",
            dotColor: "bg-sky-400",
            countColor: "text-sky-600",
            emptyText: "目前無符合條件的門診處方",
            regimens: o,
            onSelect: t,
          }),
          s.jsx(yo, {
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
function yo({
  title: e,
  dotColor: t,
  countColor: n,
  emptyText: r,
  regimens: l,
  onSelect: a,
}) {
  return s.jsxs("div", {
    className: "glass-card-solid flex-1 flex flex-col min-h-0",
    children: [
      s.jsxs("div", {
        className:
          "flex items-center gap-3 px-5 py-4 border-b border-slate-200/60 flex-shrink-0",
        children: [
          s.jsx("div", { className: `w-2 h-2 rounded-full ${t}` }),
          s.jsx("h3", {
            className: "text-slate-800 font-bold text-base",
            children: e,
          }),
          s.jsxs("span", {
            className: `text-sm font-semibold ml-auto ${n}`,
            children: [l.length, " 筆"],
          }),
        ],
      }),
      s.jsx("div", {
        className:
          "flex-1 overflow-y-auto scrollbar-thin p-3 flex flex-col gap-2",
        children:
          l.length === 0
            ? s.jsx("div", {
                className: "flex-1 flex items-center justify-center py-8",
                children: s.jsx("p", {
                  className: "text-slate-400 text-sm",
                  children: r,
                }),
              })
            : l.map((i) => s.jsx(yf, { rx: i, onSelect: a }, i.id)),
      }),
    ],
  });
}
function kf() {
  const [e, t] = T.useState(null),
    n = () => t(null);
  return s.jsxs("div", {
    className: "flex-1 flex flex-col min-h-0",
    children: [
      s.jsxs("div", {
        className:
          "flex items-center justify-between px-6 pt-5 pb-3 flex-shrink-0",
        children: [
          s.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              s.jsx("div", {
                className:
                  "w-10 h-10 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center",
                children: s.jsx(Dm, { className: "w-5 h-5 text-teal-500" }),
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("h1", {
                    className: "text-slate-800 text-lg font-bold leading-tight",
                    children: "審核資訊",
                  }),
                  s.jsx("p", {
                    className: "text-slate-500 text-xs tracking-wider",
                    children: "Information Review",
                  }),
                ],
              }),
            ],
          }),
          s.jsxs("button", {
            className: "glass-btn flex items-center gap-2 px-4 py-2.5 text-sm",
            children: [
              s.jsx(Mc, { className: "w-4 h-4" }),
              s.jsx("span", { children: "重新整理" }),
            ],
          }),
        ],
      }),
      s.jsx("div", {
        className: "flex-1 flex flex-col min-h-0 px-6 pb-6",
        children: e
          ? s.jsx(Rc, { regimen: e, status: e.status, onBack: n })
          : s.jsx(wf, { regimens: Ja, onSelect: t }),
      }),
    ],
  });
}
const jf = [
  {
    drugCode: "CAR300",
    drugName: "Carboplatin",
    drugNameZh: "卡鉑注射劑",
    warehouse: 48,
    outpatient: 22,
    inpatient: 0,
    sevenDayUsage: 14,
  },
  {
    drugCode: "PEM500",
    drugName: "Pemetrexed",
    drugNameZh: "培美曲塞注射劑",
    warehouse: 35,
    outpatient: 18,
    inpatient: 0,
    sevenDayUsage: 10,
  },
  {
    drugCode: "PAC175",
    drugName: "Paclitaxel",
    drugNameZh: "紫杉醇注射劑",
    warehouse: 18,
    outpatient: 42,
    inpatient: 0,
    sevenDayUsage: 22,
  },
  {
    drugCode: "DOC075",
    drugName: "Docetaxel",
    drugNameZh: "多西他賽注射劑",
    warehouse: 12,
    outpatient: 5,
    inpatient: 0,
    sevenDayUsage: 18,
  },
  {
    drugCode: "CYC600",
    drugName: "Cyclophosphamide",
    drugNameZh: "環磷醯胺注射劑",
    warehouse: 62,
    outpatient: 28,
    inpatient: 0,
    sevenDayUsage: 18,
  },
  {
    drugCode: "DOX050",
    drugName: "Doxorubicin",
    drugNameZh: "多柔比星注射劑",
    warehouse: 54,
    outpatient: 19,
    inpatient: 0,
    sevenDayUsage: 15,
  },
  {
    drugCode: "EPI100",
    drugName: "Epirubicin",
    drugNameZh: "表柔比星注射劑",
    warehouse: 41,
    outpatient: 13,
    inpatient: 0,
    sevenDayUsage: 12,
  },
  {
    drugCode: "VIN140",
    drugName: "Vincristine",
    drugNameZh: "長春新鹼注射劑",
    warehouse: 47,
    outpatient: 16,
    inpatient: 0,
    sevenDayUsage: 13,
  },
  {
    drugCode: "VNR025",
    drugName: "Vinorelbine",
    drugNameZh: "長春瑞濱注射劑",
    warehouse: 14,
    outpatient: 35,
    inpatient: 0,
    sevenDayUsage: 20,
  },
  {
    drugCode: "OXA130",
    drugName: "Oxaliplatin",
    drugNameZh: "奧沙利鉑注射劑",
    warehouse: 58,
    outpatient: 21,
    inpatient: 0,
    sevenDayUsage: 16,
  },
  {
    drugCode: "CIS075",
    drugName: "Cisplatin",
    drugNameZh: "順鉑注射劑",
    warehouse: 67,
    outpatient: 24,
    inpatient: 0,
    sevenDayUsage: 19,
  },
  {
    drugCode: "GEM1000",
    drugName: "Gemcitabine",
    drugNameZh: "吉西他濱注射劑",
    warehouse: 72,
    outpatient: 31,
    inpatient: 0,
    sevenDayUsage: 20,
  },
  {
    drugCode: "FU2400",
    drugName: "Fluorouracil",
    drugNameZh: "氟尿嘧啶注射劑",
    warehouse: 85,
    outpatient: 42,
    inpatient: 0,
    sevenDayUsage: 24,
  },
  {
    drugCode: "BEV400",
    drugName: "Bevacizumab",
    drugNameZh: "貝伐珠單抗注射劑",
    warehouse: 8,
    outpatient: 4,
    inpatient: 0,
    sevenDayUsage: 12,
  },
  {
    drugCode: "RIT375",
    drugName: "Rituximab",
    drugNameZh: "利妥昔單抗注射劑",
    warehouse: 33,
    outpatient: 11,
    inpatient: 0,
    sevenDayUsage: 8,
  },
  {
    drugCode: "TRA440",
    drugName: "Trastuzumab",
    drugNameZh: "曲妥珠單抗注射劑",
    warehouse: 10,
    outpatient: 28,
    inpatient: 0,
    sevenDayUsage: 14,
  },
  {
    drugCode: "BOR001",
    drugName: "Bortezomib",
    drugNameZh: "硼替佐米注射劑",
    warehouse: 29,
    outpatient: 8,
    inpatient: 0,
    sevenDayUsage: 7,
  },
  {
    drugCode: "LEN025",
    drugName: "Lenalidomide",
    drugNameZh: "來那度胺膠囊",
    warehouse: 44,
    outpatient: 22,
    inpatient: 0,
    sevenDayUsage: 12,
  },
  {
    drugCode: "DEX020",
    drugName: "Dexamethasone",
    drugNameZh: "地塞米松錠",
    warehouse: 96,
    outpatient: 55,
    inpatient: 0,
    sevenDayUsage: 27,
  },
  {
    drugCode: "PRE100",
    drugName: "Prednisolone",
    drugNameZh: "普賴松龍錠",
    warehouse: 88,
    outpatient: 47,
    inpatient: 0,
    sevenDayUsage: 24,
  },
  {
    drugCode: "OND008",
    drugName: "Ondansetron",
    drugNameZh: "昂丹司瓊注射劑",
    warehouse: 75,
    outpatient: 36,
    inpatient: 0,
    sevenDayUsage: 21,
  },
  {
    drugCode: "GRA003",
    drugName: "Granisetron",
    drugNameZh: "格拉司瓊注射劑",
    warehouse: 63,
    outpatient: 27,
    inpatient: 0,
    sevenDayUsage: 18,
  },
  {
    drugCode: "MTX015",
    drugName: "Methotrexate",
    drugNameZh: "甲氨蝶呤注射劑",
    warehouse: 38,
    outpatient: 12,
    inpatient: 0,
    sevenDayUsage: 11,
  },
  {
    drugCode: "ARA200",
    drugName: "Cytarabine",
    drugNameZh: "阿糖胞苷注射劑",
    warehouse: 31,
    outpatient: 9,
    inpatient: 0,
    sevenDayUsage: 9,
  },
  {
    drugCode: "IDA012",
    drugName: "Idarubicin",
    drugNameZh: "伊達比星注射劑",
    warehouse: 26,
    outpatient: 7,
    inpatient: 0,
    sevenDayUsage: 7,
  },
  {
    drugCode: "ETO100",
    drugName: "Etoposide",
    drugNameZh: "依託泊苷注射劑",
    warehouse: 43,
    outpatient: 14,
    inpatient: 0,
    sevenDayUsage: 12,
  },
  {
    drugCode: "BLE015",
    drugName: "Bleomycin",
    drugNameZh: "博萊黴素注射劑",
    warehouse: 34,
    outpatient: 8,
    inpatient: 0,
    sevenDayUsage: 9,
  },
  {
    drugCode: "SOR200",
    drugName: "Sorafenib",
    drugNameZh: "索拉非尼錠",
    warehouse: 52,
    outpatient: 33,
    inpatient: 0,
    sevenDayUsage: 14,
  },
  {
    drugCode: "CAP150",
    drugName: "Capecitabine",
    drugNameZh: "卡培他濱錠",
    warehouse: 61,
    outpatient: 45,
    inpatient: 0,
    sevenDayUsage: 17,
  },
  {
    drugCode: "LEU400",
    drugName: "Leucovorin",
    drugNameZh: "甲醯四氫葉酸注射劑",
    warehouse: 79,
    outpatient: 32,
    inpatient: 0,
    sevenDayUsage: 22,
  },
];
function ei(e, t) {
  const n = t > 0 ? (e / t) * 7 : 999;
  return n >= 21 ? "high" : n >= 10 ? "mid" : "low";
}
function bf(e) {
  return ei(e.warehouse, e.sevenDayUsage) !== "low"
    ? !1
    : e.outpatient + e.inpatient >= e.sevenDayUsage * 0.3;
}
const Uc = {
    high: "bg-emerald-50 text-emerald-700 border border-emerald-200/60",
    mid: "bg-amber-50  text-amber-700  border border-amber-200/60",
    low: "bg-rose-50   text-rose-700   border border-rose-200/60",
  },
  Cf = ["週一", "週二", "週三", "週四", "週五", "週六", "週日"];
function Sf(e) {
  const t = e / 7,
    n = Array.from({ length: 7 }, (i, o) => {
      const u = t * 0.3,
        p = (((e * 13 + o * 97) % 100) / 100 - 0.5) * 2 * u;
      return Math.max(0.1, t + p);
    }),
    r = n.reduce((i, o) => i + o, 0),
    l = n.map((i) => Math.round((i / r) * e)),
    a = e - l.reduce((i, o) => i + o, 0);
  return ((l[l.length - 1] += a), l);
}
function Df() {
  return (new Date().getDay() + 6) % 7;
}
function Lf({ item: e, onClose: t }) {
  const n = Sf(e.sevenDayUsage),
    r = Df(),
    l = Array.from({ length: 7 }, (c, p) => (r + 1 + p) % 7),
    a = l.map((c) => n[c]),
    i = l.map((c) => Cf[c]),
    o = Math.max(...a);
  T.useEffect(() => {
    const c = (p) => {
      p.key === "Escape" && t();
    };
    return (
      window.addEventListener("keydown", c),
      () => window.removeEventListener("keydown", c)
    );
  }, [t]);
  const u = ei(e.warehouse, e.sevenDayUsage);
  return s.jsxs("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-4",
    style: { background: "rgba(15,23,42,0.45)", backdropFilter: "blur(4px)" },
    onClick: t,
    children: [
      s.jsxs("div", {
        className:
          "bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden",
        style: { animation: "modal-in 0.18s ease-out" },
        onClick: (c) => c.stopPropagation(),
        children: [
          s.jsxs("div", {
            className:
              "flex items-start justify-between px-6 pt-5 pb-4 border-b border-slate-100",
            children: [
              s.jsxs("div", {
                children: [
                  s.jsxs("div", {
                    className: "flex items-center gap-2 mb-0.5",
                    children: [
                      s.jsx("span", {
                        className:
                          "text-xs font-mono font-semibold text-orange-500 bg-orange-50 border border-orange-200/60 px-2 py-0.5 rounded-md",
                        children: e.drugCode,
                      }),
                      s.jsx("span", {
                        className: `text-xs font-medium px-2 py-0.5 rounded-md ${Uc[u]}`,
                        children:
                          u === "high"
                            ? "庫存充足"
                            : u === "mid"
                              ? "庫存尚可"
                              : "庫存不足",
                      }),
                    ],
                  }),
                  s.jsx("h2", {
                    className: "text-slate-800 font-bold text-lg leading-tight",
                    children: e.drugNameZh,
                  }),
                  s.jsx("p", {
                    className: "text-slate-400 text-sm",
                    children: e.drugName,
                  }),
                ],
              }),
              s.jsx("button", {
                onClick: t,
                className:
                  "w-8 h-8 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors ml-4 flex-shrink-0",
                children: s.jsx(Pl, { className: "w-4 h-4" }),
              }),
            ],
          }),
          s.jsxs("div", {
            className: "px-6 pt-5 pb-4",
            children: [
              s.jsx("p", {
                className:
                  "text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3",
                children: "庫存量",
              }),
              s.jsxs("div", {
                className: "grid grid-cols-3 gap-3",
                children: [
                  s.jsxs("div", {
                    className:
                      "bg-slate-50 rounded-xl p-4 border border-slate-100",
                    children: [
                      s.jsxs("div", {
                        className: "flex items-center gap-1.5 mb-2",
                        children: [
                          s.jsx(Om, {
                            className: "w-3.5 h-3.5 text-slate-500",
                          }),
                          s.jsx("span", {
                            className: "text-xs text-slate-500 font-medium",
                            children: "藥庫",
                          }),
                        ],
                      }),
                      s.jsx("p", {
                        className: `text-2xl font-bold tabular-nums ${u === "low" ? "text-rose-600" : u === "mid" ? "text-amber-600" : "text-emerald-600"}`,
                        children: e.warehouse.toLocaleString(),
                      }),
                      s.jsx("p", {
                        className: "text-xs text-slate-400 mt-0.5",
                        children: "單位",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className:
                      "bg-slate-50 rounded-xl p-4 border border-slate-100",
                    children: [
                      s.jsxs("div", {
                        className: "flex items-center gap-1.5 mb-2",
                        children: [
                          s.jsx(Jt, {
                            className: "w-3.5 h-3.5 text-slate-500",
                          }),
                          s.jsx("span", {
                            className: "text-xs text-slate-500 font-medium",
                            children: "門診藥局",
                          }),
                        ],
                      }),
                      s.jsx("p", {
                        className:
                          "text-2xl font-bold tabular-nums text-slate-700",
                        children: e.outpatient.toLocaleString(),
                      }),
                      s.jsx("p", {
                        className: "text-xs text-slate-400 mt-0.5",
                        children: "單位",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className:
                      "bg-slate-50 rounded-xl p-4 border border-slate-100",
                    children: [
                      s.jsxs("div", {
                        className: "flex items-center gap-1.5 mb-2",
                        children: [
                          s.jsx(El, {
                            className: "w-3.5 h-3.5 text-slate-500",
                          }),
                          s.jsx("span", {
                            className: "text-xs text-slate-500 font-medium",
                            children: "住院藥局",
                          }),
                        ],
                      }),
                      s.jsx("p", {
                        className:
                          "text-2xl font-bold tabular-nums text-slate-700",
                        children: e.inpatient.toLocaleString(),
                      }),
                      s.jsx("p", {
                        className: "text-xs text-slate-400 mt-0.5",
                        children: "單位",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            className: "px-6 pb-6",
            children: [
              s.jsxs("div", {
                className: "flex items-center gap-2 mb-3",
                children: [
                  s.jsx(Hm, { className: "w-3.5 h-3.5 text-orange-500" }),
                  s.jsx("p", {
                    className:
                      "text-xs font-semibold text-slate-400 uppercase tracking-wider",
                    children: "預估用量（未來 7 日）",
                  }),
                  s.jsxs("span", {
                    className: "text-xs text-slate-400 ml-auto",
                    children: ["總計 ", e.sevenDayUsage, " 單位"],
                  }),
                ],
              }),
              s.jsx("div", {
                className: "bg-slate-50 rounded-xl border border-slate-100 p-4",
                children: s.jsx("div", {
                  className: "flex items-end gap-2 h-24",
                  children: a.map((c, p) => {
                    const g = p === 6,
                      h = o > 0 ? (c / o) * 100 : 0;
                    return s.jsxs(
                      "div",
                      {
                        className: "flex-1 flex flex-col items-center gap-1.5",
                        children: [
                          s.jsx("span", {
                            className:
                              "text-xs tabular-nums font-semibold text-slate-600",
                            children: c,
                          }),
                          s.jsx("div", {
                            className: "w-full flex items-end",
                            style: { height: "56px" },
                            children: s.jsx("div", {
                              className: `w-full rounded-t-md transition-all ${g ? "bg-orange-400" : "bg-slate-300"}`,
                              style: { height: `${Math.max(h, 8)}%` },
                            }),
                          }),
                          s.jsx("span", {
                            className: `text-xs font-medium ${g ? "text-orange-500" : "text-slate-400"}`,
                            children: i[p],
                          }),
                        ],
                      },
                      p,
                    );
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
      s.jsx("style", {
        children: `
        @keyframes modal-in {
          from { opacity: 0; transform: scale(0.96) translateY(8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `,
      }),
    ],
  });
}
function Ef() {
  const [e, t] = T.useState(""),
    [n, r] = T.useState(null),
    [l, a] = T.useState(new Set()),
    [i, o] = T.useState(null),
    u = jf.filter(
      (p) =>
        p.drugCode.toLowerCase().includes(e.toLowerCase()) ||
        p.drugName.toLowerCase().includes(e.toLowerCase()) ||
        p.drugNameZh.includes(e),
    ),
    c = (p, g) => {
      (p.stopPropagation(),
        !l.has(g.drugCode) &&
          (a((h) => new Set(h).add(g.drugCode)),
          o(`已通知補充 ${g.drugNameZh}`),
          setTimeout(() => o(null), 2500)));
    };
  return s.jsxs("div", {
    className: "flex-1 flex flex-col p-5 gap-4 min-h-0",
    children: [
      s.jsxs("div", {
        className: "glass-card flex flex-col flex-1 min-h-0 overflow-hidden",
        children: [
          s.jsxs("div", {
            className:
              "flex items-center justify-between px-5 py-4 border-b border-slate-100 flex-shrink-0",
            children: [
              s.jsxs("div", {
                className: "flex items-center gap-2.5",
                children: [
                  s.jsx(Pm, { className: "w-4 h-4 text-orange-500" }),
                  s.jsx("span", {
                    className: "text-slate-800 font-semibold text-base",
                    children: "庫存檢視",
                  }),
                  s.jsxs("span", {
                    className:
                      "text-xs font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md",
                    children: ["共 ", u.length, " 項"],
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "relative",
                children: [
                  s.jsx(Bm, {
                    className:
                      "absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none",
                  }),
                  s.jsx("input", {
                    type: "text",
                    value: e,
                    onChange: (p) => t(p.target.value),
                    placeholder: "搜尋藥碼、藥名…",
                    className:
                      "pl-8 pr-4 py-2 text-sm rounded-xl border border-slate-200 bg-white/70 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-300/60 focus:border-orange-300 w-56 transition-all duration-200",
                  }),
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            className:
              "grid grid-cols-[80px_110px_1fr_1fr_110px_110px_110px_130px] gap-0 px-5 py-2.5 border-b border-slate-100 bg-slate-50/60 flex-shrink-0",
            children: [
              s.jsx("span", {}),
              s.jsx("span", {
                className:
                  "text-xs font-semibold text-slate-500 uppercase tracking-wider",
                children: "藥碼",
              }),
              s.jsx("span", {
                className:
                  "text-xs font-semibold text-slate-500 uppercase tracking-wider",
                children: "藥名",
              }),
              s.jsx("span", {
                className:
                  "text-xs font-semibold text-slate-500 uppercase tracking-wider",
                children: "中文名稱",
              }),
              s.jsx("span", {
                className:
                  "text-xs font-semibold text-slate-500 uppercase tracking-wider text-right",
                children: "藥庫",
              }),
              s.jsx("span", {
                className:
                  "text-xs font-semibold text-slate-500 uppercase tracking-wider text-right",
                children: "門診藥局",
              }),
              s.jsx("span", {
                className:
                  "text-xs font-semibold text-slate-500 uppercase tracking-wider text-right",
                children: "住院藥局",
              }),
              s.jsx("span", {
                className:
                  "text-xs font-semibold text-slate-500 uppercase tracking-wider text-right",
                children: "預估用量(7日)",
              }),
            ],
          }),
          s.jsx("div", {
            className: "flex-1 overflow-y-auto scrollbar-thin",
            children:
              u.length === 0
                ? s.jsx("div", {
                    className:
                      "flex items-center justify-center h-40 text-slate-400 text-sm",
                    children: "查無符合的藥品",
                  })
                : u.map((p, g) => {
                    const h = ei(p.warehouse, p.sevenDayUsage),
                      N = bf(p),
                      v = l.has(p.drugCode);
                    return s.jsxs(
                      "div",
                      {
                        onClick: () => r(p),
                        className:
                          "grid grid-cols-[80px_110px_1fr_1fr_110px_110px_110px_130px] gap-0 px-5 py-3 border-b border-slate-50 hover:bg-orange-50/40 cursor-pointer transition-colors duration-150 items-center",
                        children: [
                          s.jsx("div", {
                            className: "flex items-center",
                            onClick: (w) => w.stopPropagation(),
                            children: v
                              ? s.jsx("span", {
                                  className:
                                    "px-2.5 py-1 rounded-lg text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200/60",
                                  children: "已通知",
                                })
                              : N
                                ? s.jsx("button", {
                                    onClick: (w) => c(w, p),
                                    className:
                                      "px-2.5 py-1 rounded-lg text-xs font-semibold text-white bg-rose-500 hover:bg-rose-600 active:scale-95 transition-all duration-150 shadow-sm",
                                    children: "通知",
                                  })
                                : s.jsx("button", {
                                    disabled: !0,
                                    className:
                                      "px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-300 bg-slate-100 border border-slate-200/60 cursor-not-allowed",
                                    children: "通知",
                                  }),
                          }),
                          s.jsx("span", {
                            className:
                              "text-sm font-mono font-semibold text-slate-700",
                            children: p.drugCode,
                          }),
                          s.jsx("span", {
                            className: "text-sm text-slate-700 truncate pr-4",
                            children: p.drugName,
                          }),
                          s.jsx("span", {
                            className: "text-sm text-slate-500 truncate pr-4",
                            children: p.drugNameZh,
                          }),
                          s.jsx("div", {
                            className: "flex justify-end",
                            children: s.jsx("span", {
                              className: `text-sm font-semibold tabular-nums px-2.5 py-0.5 rounded-lg ${Uc[h]}`,
                              children: p.warehouse.toLocaleString(),
                            }),
                          }),
                          s.jsx("span", {
                            className:
                              "text-sm text-slate-600 tabular-nums text-right",
                            children: p.outpatient.toLocaleString(),
                          }),
                          s.jsx("span", {
                            className:
                              "text-sm text-slate-600 tabular-nums text-right",
                            children: p.inpatient.toLocaleString(),
                          }),
                          s.jsx("span", {
                            className:
                              "text-sm text-slate-500 tabular-nums text-right",
                            children: p.sevenDayUsage.toLocaleString(),
                          }),
                        ],
                      },
                      p.drugCode + g,
                    );
                  }),
          }),
          s.jsxs("div", {
            className:
              "flex items-center gap-4 px-5 py-3 border-t border-slate-100 bg-slate-50/40 flex-shrink-0",
            children: [
              s.jsx("span", {
                className: "text-xs text-slate-400",
                children: "庫存狀態",
              }),
              s.jsxs("div", {
                className: "flex items-center gap-1.5",
                children: [
                  s.jsx("span", {
                    className:
                      "w-2 h-2 rounded-full bg-emerald-400 inline-block",
                  }),
                  s.jsx("span", {
                    className: "text-xs text-slate-500",
                    children: "充足 (>21天)",
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "flex items-center gap-1.5",
                children: [
                  s.jsx("span", {
                    className: "w-2 h-2 rounded-full bg-amber-400 inline-block",
                  }),
                  s.jsx("span", {
                    className: "text-xs text-slate-500",
                    children: "尚可 (10–21天)",
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "flex items-center gap-1.5",
                children: [
                  s.jsx("span", {
                    className: "w-2 h-2 rounded-full bg-rose-400 inline-block",
                  }),
                  s.jsx("span", {
                    className: "text-xs text-slate-500",
                    children: "不足 (<10天)",
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "ml-4 flex items-center gap-1.5",
                children: [
                  s.jsx(Ac, { className: "w-3 h-3 text-slate-400" }),
                  s.jsx("span", {
                    className: "text-xs text-slate-400",
                    children: "通知：庫存不足且其他藥局有餘量時可點擊",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      n && s.jsx(Lf, { item: n, onClose: () => r(null) }),
      s.jsx("div", {
        className: `fixed top-6 left-0 z-50 transition-all duration-500 ease-out ${i ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 -translate-x-full pointer-events-none"}`,
        children:
          i &&
          s.jsxs("div", {
            className:
              "flex items-center gap-3 pl-5 pr-6 py-3.5 rounded-r-2xl text-white font-semibold text-base shadow-2xl bg-gradient-to-r from-emerald-500 to-teal-500",
            children: [
              s.jsx(lt, { className: "w-5 h-5 flex-shrink-0" }),
              s.jsx("span", { children: i }),
            ],
          }),
      }),
    ],
  });
}
const Pf = [
  {
    icon: Um,
    label: "人員管理",
    desc: "帳號新增、權限設定",
    color: "text-blue-500",
    bg: "bg-blue-50/60 border-blue-200/50",
  },
  {
    icon: Ac,
    label: "通知設定",
    desc: "警示閾值、通知對象",
    color: "text-amber-500",
    bg: "bg-amber-50/60 border-amber-200/50",
  },
  {
    icon: Tm,
    label: "列印設定",
    desc: "藥袋格式、印表機設定",
    color: "text-cyan-500",
    bg: "bg-cyan-50/60 border-cyan-200/50",
  },
  {
    icon: zm,
    label: "安全設定",
    desc: "密碼原則、存取記錄",
    color: "text-emerald-500",
    bg: "bg-emerald-50/60 border-emerald-200/50",
  },
];
function Tf() {
  return s.jsxs("div", {
    className: "flex-1 flex flex-col p-6 gap-5",
    children: [
      s.jsxs("div", {
        className: "flex items-center gap-4",
        children: [
          s.jsx("div", {
            className:
              "w-12 h-12 rounded-2xl bg-slate-500/20 border border-slate-400/30 flex items-center justify-center",
            children: s.jsx(Mm, { className: "w-6 h-6 text-slate-500" }),
          }),
          s.jsxs("div", {
            children: [
              s.jsx("h1", {
                className: "text-slate-800 text-xl font-bold",
                children: "系統設定",
              }),
              s.jsx("p", {
                className: "text-slate-500 text-sm tracking-wider",
                children: "System Settings",
              }),
            ],
          }),
        ],
      }),
      s.jsx("div", {
        className: "grid grid-cols-2 gap-5",
        children: Pf.map((e) => {
          const t = e.icon;
          return s.jsxs(
            "div",
            {
              className: `glass-card p-7 flex items-start gap-5 border ${e.bg} opacity-70 cursor-not-allowed`,
              children: [
                s.jsx("div", {
                  className:
                    "w-12 h-12 rounded-xl bg-white/60 border border-white/80 flex items-center justify-center flex-shrink-0 shadow-sm",
                  children: s.jsx(t, { className: `w-6 h-6 ${e.color}` }),
                }),
                s.jsxs("div", {
                  children: [
                    s.jsx("h3", {
                      className: "text-slate-800 font-semibold text-base",
                      children: e.label,
                    }),
                    s.jsx("p", {
                      className: "text-slate-500 text-sm mt-0.5",
                      children: e.desc,
                    }),
                    s.jsx("p", {
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
      s.jsx("div", {
        className: "glass-card p-5",
        children: s.jsx("p", {
          className: "text-slate-400 text-sm text-center",
          children:
            "系統設定頁面  ·  功能開發中  ·  System Settings Module — Under Development",
        }),
      }),
    ],
  });
}
function _f({ activeTab: e }) {
  return s.jsxs("main", {
    className: "flex-1 flex flex-col min-h-0 overflow-hidden",
    children: [
      e === "dispense" && s.jsx(xf, {}),
      e === "information" && s.jsx(kf, {}),
      e === "inventory" && s.jsx(Ef, {}),
      e === "setting" && s.jsx(Tf, {}),
    ],
  });
}
function Af({ currentTime: e }) {
  return s.jsxs("footer", {
    className:
      "w-full h-9 bg-white/55 backdrop-blur-xl border-t border-white/70 flex items-center px-6 gap-4 shadow-sm",
    children: [
      s.jsxs("div", {
        className: "flex-1 flex items-center gap-6",
        children: [
          s.jsx("span", {
            className: "text-slate-400 text-xs tracking-wider",
            children:
              "化療藥局資訊管理系統  ·  Chemotherapy Pharmacy Information System",
          }),
          s.jsx("span", {
            className: "text-slate-300 text-xs",
            children: "v1.0.0",
          }),
        ],
      }),
      s.jsxs("div", {
        className: "flex items-center gap-4",
        children: [
          s.jsxs("div", {
            className: "flex items-center gap-1.5",
            children: [
              s.jsx("div", {
                className:
                  "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse",
              }),
              s.jsx("span", {
                className: "text-slate-500 text-xs",
                children: "系統正常",
              }),
            ],
          }),
          s.jsx("span", {
            className: "text-slate-400 text-xs font-mono",
            children: e,
          }),
        ],
      }),
    ],
  });
}
function Bf({ currentUser: e, onLogout: t }) {
  const [n, r] = T.useState("dispense"),
    [l, a] = T.useState("");
  return (
    T.useEffect(() => {
      const i = () => {
        a(new Date().toLocaleTimeString("zh-TW", { hour12: !1 }));
      };
      i();
      const o = setInterval(i, 1e3);
      return () => clearInterval(o);
    }, []),
    s.jsxs("div", {
      className: "min-h-screen w-full flex flex-col overflow-hidden relative",
      style: {
        backgroundImage: `url(${Ic})`,
        backgroundSize: "auto 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
      children: [
        s.jsx("div", {
          className: "absolute inset-0 bg-white/20 backdrop-blur-[1px]",
        }),
        s.jsxs("div", {
          className: "relative z-10 flex flex-col h-screen",
          children: [
            s.jsx(Gm, {
              activeTab: n,
              onTabChange: r,
              currentUser: e,
              onLogout: t,
            }),
            s.jsx(_f, { activeTab: n }),
            s.jsx(Af, { currentTime: l }),
          ],
        }),
      ],
    })
  );
}
const ta = "chemo_session_user";
function Mf() {
  try {
    const e = localStorage.getItem(ta);
    return e ? JSON.parse(e) : null;
  } catch {
    return null;
  }
}
function zf() {
  const [e, t] = T.useState(Mf),
    n = (l) => {
      (localStorage.setItem(ta, JSON.stringify(l)), t(l));
    },
    r = () => {
      (localStorage.removeItem(ta), t(null));
    };
  return e
    ? s.jsx(Bf, { currentUser: e, onLogout: r })
    : s.jsx(qm, { onLoginSuccess: n });
}
_c(document.getElementById("root")).render(
  s.jsx(T.StrictMode, { children: s.jsx(zf, {}) }),
);
