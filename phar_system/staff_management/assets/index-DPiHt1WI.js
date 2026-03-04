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
var lu = { exports: {} },
  gl = {},
  ou = { exports: {} },
  M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cr = Symbol.for("react.element"),
  Nc = Symbol.for("react.portal"),
  Ec = Symbol.for("react.fragment"),
  Cc = Symbol.for("react.strict_mode"),
  jc = Symbol.for("react.profiler"),
  _c = Symbol.for("react.provider"),
  Pc = Symbol.for("react.context"),
  Lc = Symbol.for("react.forward_ref"),
  zc = Symbol.for("react.suspense"),
  Tc = Symbol.for("react.memo"),
  Dc = Symbol.for("react.lazy"),
  Ki = Symbol.iterator;
function Ic(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ki && e[Ki]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var iu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  su = Object.assign,
  uu = {};
function vn(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = uu),
    (this.updater = n || iu));
}
vn.prototype.isReactComponent = {};
vn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
vn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function au() {}
au.prototype = vn.prototype;
function Jo(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = uu),
    (this.updater = n || iu));
}
var qo = (Jo.prototype = new au());
qo.constructor = Jo;
su(qo, vn.prototype);
qo.isPureReactComponent = !0;
var Gi = Array.isArray,
  cu = Object.prototype.hasOwnProperty,
  bo = { current: null },
  du = { key: !0, ref: !0, __self: !0, __source: !0 };
function fu(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      cu.call(t, r) && !du.hasOwnProperty(r) && (l[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) l.children = n;
  else if (1 < s) {
    for (var u = Array(s), f = 0; f < s; f++) u[f] = arguments[f + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) l[r] === void 0 && (l[r] = s[r]);
  return {
    $$typeof: cr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: bo.current,
  };
}
function Mc(e, t) {
  return {
    $$typeof: cr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ei(e) {
  return typeof e == "object" && e !== null && e.$$typeof === cr;
}
function Rc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Yi = /\/+/g;
function Dl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Rc("" + e.key)
    : t.toString(36);
}
function Ir(e, t, n, r, l) {
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
          case cr:
          case Nc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Dl(i, 0) : r),
      Gi(l)
        ? ((n = ""),
          e != null && (n = e.replace(Yi, "$&/") + "/"),
          Ir(l, t, n, "", function (f) {
            return f;
          }))
        : l != null &&
          (ei(l) &&
            (l = Mc(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Yi, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Gi(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var u = r + Dl(o, s);
      i += Ir(o, t, n, u, l);
    }
  else if (((u = Ic(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(o = e.next()).done; )
      ((o = o.value), (u = r + Dl(o, s++)), (i += Ir(o, t, n, u, l)));
  else if (o === "object")
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
function hr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Ir(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Oc(e) {
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
var me = { current: null },
  Mr = { transition: null },
  Fc = {
    ReactCurrentDispatcher: me,
    ReactCurrentBatchConfig: Mr,
    ReactCurrentOwner: bo,
  };
function pu() {
  throw Error("act(...) is not supported in production builds of React.");
}
M.Children = {
  map: hr,
  forEach: function (e, t, n) {
    hr(
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
      hr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      hr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ei(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
M.Component = vn;
M.Fragment = Ec;
M.Profiler = jc;
M.PureComponent = Jo;
M.StrictMode = Cc;
M.Suspense = zc;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fc;
M.act = pu;
M.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = su({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = bo.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      cu.call(t, u) &&
        !du.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var f = 0; f < u; f++) s[f] = arguments[f + 2];
    r.children = s;
  }
  return { $$typeof: cr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
M.createContext = function (e) {
  return (
    (e = {
      $$typeof: Pc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: _c, _context: e }),
    (e.Consumer = e)
  );
};
M.createElement = fu;
M.createFactory = function (e) {
  var t = fu.bind(null, e);
  return ((t.type = e), t);
};
M.createRef = function () {
  return { current: null };
};
M.forwardRef = function (e) {
  return { $$typeof: Lc, render: e };
};
M.isValidElement = ei;
M.lazy = function (e) {
  return { $$typeof: Dc, _payload: { _status: -1, _result: e }, _init: Oc };
};
M.memo = function (e, t) {
  return { $$typeof: Tc, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function (e) {
  var t = Mr.transition;
  Mr.transition = {};
  try {
    e();
  } finally {
    Mr.transition = t;
  }
};
M.unstable_act = pu;
M.useCallback = function (e, t) {
  return me.current.useCallback(e, t);
};
M.useContext = function (e) {
  return me.current.useContext(e);
};
M.useDebugValue = function () {};
M.useDeferredValue = function (e) {
  return me.current.useDeferredValue(e);
};
M.useEffect = function (e, t) {
  return me.current.useEffect(e, t);
};
M.useId = function () {
  return me.current.useId();
};
M.useImperativeHandle = function (e, t, n) {
  return me.current.useImperativeHandle(e, t, n);
};
M.useInsertionEffect = function (e, t) {
  return me.current.useInsertionEffect(e, t);
};
M.useLayoutEffect = function (e, t) {
  return me.current.useLayoutEffect(e, t);
};
M.useMemo = function (e, t) {
  return me.current.useMemo(e, t);
};
M.useReducer = function (e, t, n) {
  return me.current.useReducer(e, t, n);
};
M.useRef = function (e) {
  return me.current.useRef(e);
};
M.useState = function (e) {
  return me.current.useState(e);
};
M.useSyncExternalStore = function (e, t, n) {
  return me.current.useSyncExternalStore(e, t, n);
};
M.useTransition = function () {
  return me.current.useTransition();
};
M.version = "18.3.1";
ou.exports = M;
var z = ou.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uc = z,
  $c = Symbol.for("react.element"),
  Ac = Symbol.for("react.fragment"),
  Vc = Object.prototype.hasOwnProperty,
  Bc = Uc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Hc = { key: !0, ref: !0, __self: !0, __source: !0 };
function mu(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  (n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref));
  for (r in t) Vc.call(t, r) && !Hc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: $c,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Bc.current,
  };
}
gl.Fragment = Ac;
gl.jsx = mu;
gl.jsxs = mu;
lu.exports = gl;
var a = lu.exports,
  hu = { exports: {} },
  _e = {},
  gu = { exports: {} },
  yu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, T) {
    var I = E.length;
    E.push(T);
    e: for (; 0 < I; ) {
      var B = (I - 1) >>> 1,
        J = E[B];
      if (0 < l(J, T)) ((E[B] = T), (E[I] = J), (I = B));
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var T = E[0],
      I = E.pop();
    if (I !== T) {
      E[0] = I;
      e: for (var B = 0, J = E.length, Ht = J >>> 1; B < Ht; ) {
        var Ye = 2 * (B + 1) - 1,
          Nn = E[Ye],
          Xe = Ye + 1,
          Wt = E[Xe];
        if (0 > l(Nn, I))
          Xe < J && 0 > l(Wt, Nn)
            ? ((E[B] = Wt), (E[Xe] = I), (B = Xe))
            : ((E[B] = Nn), (E[Ye] = I), (B = Ye));
        else if (Xe < J && 0 > l(Wt, I)) ((E[B] = Wt), (E[Xe] = I), (B = Xe));
        else break e;
      }
    }
    return T;
  }
  function l(E, T) {
    var I = E.sortIndex - T.sortIndex;
    return I !== 0 ? I : E.id - T.id;
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
  var u = [],
    f = [],
    h = 1,
    g = null,
    m = 3,
    v = !1,
    w = !1,
    S = !1,
    O = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(E) {
    for (var T = n(f); T !== null; ) {
      if (T.callback === null) r(f);
      else if (T.startTime <= E)
        (r(f), (T.sortIndex = T.expirationTime), t(u, T));
      else break;
      T = n(f);
    }
  }
  function y(E) {
    if (((S = !1), p(E), !w))
      if (n(u) !== null) ((w = !0), Bt(N));
      else {
        var T = n(f);
        T !== null && kn(y, T.startTime - E);
      }
  }
  function N(E, T) {
    ((w = !1), S && ((S = !1), d(j), (j = -1)), (v = !0));
    var I = m;
    try {
      for (
        p(T), g = n(u);
        g !== null && (!(g.expirationTime > T) || (E && !b()));
      ) {
        var B = g.callback;
        if (typeof B == "function") {
          ((g.callback = null), (m = g.priorityLevel));
          var J = B(g.expirationTime <= T);
          ((T = e.unstable_now()),
            typeof J == "function" ? (g.callback = J) : g === n(u) && r(u),
            p(T));
        } else r(u);
        g = n(u);
      }
      if (g !== null) var Ht = !0;
      else {
        var Ye = n(f);
        (Ye !== null && kn(y, Ye.startTime - T), (Ht = !1));
      }
      return Ht;
    } finally {
      ((g = null), (m = I), (v = !1));
    }
  }
  var k = !1,
    _ = null,
    j = -1,
    F = 5,
    D = -1;
  function b() {
    return !(e.unstable_now() - D < F);
  }
  function P() {
    if (_ !== null) {
      var E = e.unstable_now();
      D = E;
      var T = !0;
      try {
        T = _(!0, E);
      } finally {
        T ? ee() : ((k = !1), (_ = null));
      }
    } else k = !1;
  }
  var ee;
  if (typeof c == "function")
    ee = function () {
      c(P);
    };
  else if (typeof MessageChannel < "u") {
    var Le = new MessageChannel(),
      Sn = Le.port2;
    ((Le.port1.onmessage = P),
      (ee = function () {
        Sn.postMessage(null);
      }));
  } else
    ee = function () {
      O(P, 0);
    };
  function Bt(E) {
    ((_ = E), k || ((k = !0), ee()));
  }
  function kn(E, T) {
    j = O(function () {
      E(e.unstable_now());
    }, T);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || v || ((w = !0), Bt(N));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (F = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (E) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = m;
      }
      var I = m;
      m = T;
      try {
        return E();
      } finally {
        m = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, T) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var I = m;
      m = E;
      try {
        return T();
      } finally {
        m = I;
      }
    }),
    (e.unstable_scheduleCallback = function (E, T, I) {
      var B = e.unstable_now();
      switch (
        (typeof I == "object" && I !== null
          ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? B + I : B))
          : (I = B),
        E)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = I + J),
        (E = {
          id: h++,
          callback: T,
          priorityLevel: E,
          startTime: I,
          expirationTime: J,
          sortIndex: -1,
        }),
        I > B
          ? ((E.sortIndex = I),
            t(f, E),
            n(u) === null &&
              E === n(f) &&
              (S ? (d(j), (j = -1)) : (S = !0), kn(y, I - B)))
          : ((E.sortIndex = J), t(u, E), w || v || ((w = !0), Bt(N))),
        E
      );
    }),
    (e.unstable_shouldYield = b),
    (e.unstable_wrapCallback = function (E) {
      var T = m;
      return function () {
        var I = m;
        m = T;
        try {
          return E.apply(this, arguments);
        } finally {
          m = I;
        }
      };
    }));
})(yu);
gu.exports = yu;
var Wc = gu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qc = z,
  je = Wc;
function x(e) {
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
var vu = new Set(),
  Kn = {};
function At(e, t) {
  (dn(e, t), dn(e + "Capture", t));
}
function dn(e, t) {
  for (Kn[e] = t, e = 0; e < t.length; e++) vu.add(t[e]);
}
var tt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  lo = Object.prototype.hasOwnProperty,
  Kc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Xi = {},
  Zi = {};
function Gc(e) {
  return lo.call(Zi, e)
    ? !0
    : lo.call(Xi, e)
      ? !1
      : Kc.test(e)
        ? (Zi[e] = !0)
        : ((Xi[e] = !0), !1);
}
function Yc(e, t, n, r) {
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
function Xc(e, t, n, r) {
  if (t === null || typeof t > "u" || Yc(e, t, n, r)) return !0;
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
function he(e, t, n, r, l, o, i) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i));
}
var se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    se[e] = new he(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  se[t] = new he(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  se[e] = new he(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  se[e] = new he(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    se[e] = new he(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  se[e] = new he(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  se[e] = new he(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  se[e] = new he(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  se[e] = new he(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ti = /[\-:]([a-z])/g;
function ni(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ti, ni);
    se[t] = new he(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ti, ni);
    se[t] = new he(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ti, ni);
  se[t] = new he(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  se[e] = new he(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
se.xlinkHref = new he(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  se[e] = new he(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ri(e, t, n, r) {
  var l = se.hasOwnProperty(t) ? se[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Xc(t, n, l, r) && (n = null),
    r || l === null
      ? Gc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var ot = Qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  gr = Symbol.for("react.element"),
  Kt = Symbol.for("react.portal"),
  Gt = Symbol.for("react.fragment"),
  li = Symbol.for("react.strict_mode"),
  oo = Symbol.for("react.profiler"),
  xu = Symbol.for("react.provider"),
  wu = Symbol.for("react.context"),
  oi = Symbol.for("react.forward_ref"),
  io = Symbol.for("react.suspense"),
  so = Symbol.for("react.suspense_list"),
  ii = Symbol.for("react.memo"),
  st = Symbol.for("react.lazy"),
  Su = Symbol.for("react.offscreen"),
  Ji = Symbol.iterator;
function Cn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ji && e[Ji]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Y = Object.assign,
  Il;
function In(e) {
  if (Il === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Il = (t && t[1]) || "";
    }
  return (
    `
` +
    Il +
    e
  );
}
var Ml = !1;
function Rl(e, t) {
  if (!e || Ml) return "";
  Ml = !0;
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
            while (1 <= i && 0 <= s);
          break;
        }
    }
  } finally {
    ((Ml = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? In(e) : "";
}
function Zc(e) {
  switch (e.tag) {
    case 5:
      return In(e.type);
    case 16:
      return In("Lazy");
    case 13:
      return In("Suspense");
    case 19:
      return In("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Rl(e.type, !1)), e);
    case 11:
      return ((e = Rl(e.type.render, !1)), e);
    case 1:
      return ((e = Rl(e.type, !0)), e);
    default:
      return "";
  }
}
function uo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Gt:
      return "Fragment";
    case Kt:
      return "Portal";
    case oo:
      return "Profiler";
    case li:
      return "StrictMode";
    case io:
      return "Suspense";
    case so:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case wu:
        return (e.displayName || "Context") + ".Consumer";
      case xu:
        return (e._context.displayName || "Context") + ".Provider";
      case oi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ii:
        return (
          (t = e.displayName || null),
          t !== null ? t : uo(e.type) || "Memo"
        );
      case st:
        ((t = e._payload), (e = e._init));
        try {
          return uo(e(t));
        } catch {}
    }
  return null;
}
function Jc(e) {
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
      return uo(t);
    case 8:
      return t === li ? "StrictMode" : "Mode";
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
function St(e) {
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
function ku(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function qc(e) {
  var t = ku(e) ? "checked" : "value",
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
          ((r = "" + i), o.call(this, i));
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
function yr(e) {
  e._valueTracker || (e._valueTracker = qc(e));
}
function Nu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ku(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Qr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ao(e, t) {
  var n = t.checked;
  return Y({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function qi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = St(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Eu(e, t) {
  ((t = t.checked), t != null && ri(e, "checked", t, !1));
}
function co(e, t) {
  Eu(e, t);
  var n = St(t.value),
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
    ? fo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && fo(e, t.type, St(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function bi(e, t, n) {
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
function fo(e, t, n) {
  (t !== "number" || Qr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Mn = Array.isArray;
function ln(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      ((l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + St(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function po(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return Y({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function es(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(x(92));
      if (Mn(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: St(n) };
}
function Cu(e, t) {
  var n = St(t.value),
    r = St(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function ts(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ju(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ju(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var vr,
  _u = (function (e) {
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
        vr = vr || document.createElement("div"),
          vr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = vr.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Gn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Fn = {
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
  bc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fn).forEach(function (e) {
  bc.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Fn[t] = Fn[e]));
  });
});
function Pu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Fn.hasOwnProperty(e) && Fn[e])
      ? ("" + t).trim()
      : t + "px";
}
function Lu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Pu(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
    }
}
var ed = Y(
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
function ho(e, t) {
  if (t) {
    if (ed[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
  }
}
function go(e, t) {
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
var yo = null;
function si(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var vo = null,
  on = null,
  sn = null;
function ns(e) {
  if ((e = pr(e))) {
    if (typeof vo != "function") throw Error(x(280));
    var t = e.stateNode;
    t && ((t = Sl(t)), vo(e.stateNode, e.type, t));
  }
}
function zu(e) {
  on ? (sn ? sn.push(e) : (sn = [e])) : (on = e);
}
function Tu() {
  if (on) {
    var e = on,
      t = sn;
    if (((sn = on = null), ns(e), t)) for (e = 0; e < t.length; e++) ns(t[e]);
  }
}
function Du(e, t) {
  return e(t);
}
function Iu() {}
var Ol = !1;
function Mu(e, t, n) {
  if (Ol) return e(t, n);
  Ol = !0;
  try {
    return Du(e, t, n);
  } finally {
    ((Ol = !1), (on !== null || sn !== null) && (Iu(), Tu()));
  }
}
function Yn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Sl(n);
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
  if (n && typeof n != "function") throw Error(x(231, t, typeof n));
  return n;
}
var xo = !1;
if (tt)
  try {
    var jn = {};
    (Object.defineProperty(jn, "passive", {
      get: function () {
        xo = !0;
      },
    }),
      window.addEventListener("test", jn, jn),
      window.removeEventListener("test", jn, jn));
  } catch {
    xo = !1;
  }
function td(e, t, n, r, l, o, i, s, u) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (h) {
    this.onError(h);
  }
}
var Un = !1,
  Kr = null,
  Gr = !1,
  wo = null,
  nd = {
    onError: function (e) {
      ((Un = !0), (Kr = e));
    },
  };
function rd(e, t, n, r, l, o, i, s, u) {
  ((Un = !1), (Kr = null), td.apply(nd, arguments));
}
function ld(e, t, n, r, l, o, i, s, u) {
  if ((rd.apply(this, arguments), Un)) {
    if (Un) {
      var f = Kr;
      ((Un = !1), (Kr = null));
    } else throw Error(x(198));
    Gr || ((Gr = !0), (wo = f));
  }
}
function Vt(e) {
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
function Ru(e) {
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
function rs(e) {
  if (Vt(e) !== e) throw Error(x(188));
}
function od(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Vt(e)), t === null)) throw Error(x(188));
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
        if (o === n) return (rs(l), e);
        if (o === r) return (rs(l), t);
        o = o.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return) ((n = l), (r = o));
    else {
      for (var i = !1, s = l.child; s; ) {
        if (s === n) {
          ((i = !0), (n = l), (r = o));
          break;
        }
        if (s === r) {
          ((i = !0), (r = l), (n = o));
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = o.child; s; ) {
          if (s === n) {
            ((i = !0), (n = o), (r = l));
            break;
          }
          if (s === r) {
            ((i = !0), (r = o), (n = l));
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function Ou(e) {
  return ((e = od(e)), e !== null ? Fu(e) : null);
}
function Fu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Fu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Uu = je.unstable_scheduleCallback,
  ls = je.unstable_cancelCallback,
  id = je.unstable_shouldYield,
  sd = je.unstable_requestPaint,
  Z = je.unstable_now,
  ud = je.unstable_getCurrentPriorityLevel,
  ui = je.unstable_ImmediatePriority,
  $u = je.unstable_UserBlockingPriority,
  Yr = je.unstable_NormalPriority,
  ad = je.unstable_LowPriority,
  Au = je.unstable_IdlePriority,
  yl = null,
  Ke = null;
function cd(e) {
  if (Ke && typeof Ke.onCommitFiberRoot == "function")
    try {
      Ke.onCommitFiberRoot(yl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ae = Math.clz32 ? Math.clz32 : pd,
  dd = Math.log,
  fd = Math.LN2;
function pd(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((dd(e) / fd) | 0)) | 0);
}
var xr = 64,
  wr = 4194304;
function Rn(e) {
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
function Xr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~l;
    s !== 0 ? (r = Rn(s)) : ((o &= i), o !== 0 && (r = Rn(o)));
  } else ((i = n & ~l), i !== 0 ? (r = Rn(i)) : o !== 0 && (r = Rn(o)));
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
      ((n = 31 - Ae(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
  return r;
}
function md(e, t) {
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
function hd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;
  ) {
    var i = 31 - Ae(o),
      s = 1 << i,
      u = l[i];
    (u === -1
      ? (!(s & n) || s & r) && (l[i] = md(s, t))
      : u <= t && (e.expiredLanes |= s),
      (o &= ~s));
  }
}
function So(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Vu() {
  var e = xr;
  return ((xr <<= 1), !(xr & 4194240) && (xr = 64), e);
}
function Fl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function dr(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ae(t)),
    (e[t] = n));
}
function gd(e, t) {
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
      o = 1 << l;
    ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o));
  }
}
function ai(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ae(n),
      l = 1 << r;
    ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
  }
}
var U = 0;
function Bu(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Hu,
  ci,
  Wu,
  Qu,
  Ku,
  ko = !1,
  Sr = [],
  pt = null,
  mt = null,
  ht = null,
  Xn = new Map(),
  Zn = new Map(),
  at = [],
  yd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function os(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      pt = null;
      break;
    case "dragenter":
    case "dragleave":
      mt = null;
      break;
    case "mouseover":
    case "mouseout":
      ht = null;
      break;
    case "pointerover":
    case "pointerout":
      Xn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Zn.delete(t.pointerId);
  }
}
function _n(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = pr(t)), t !== null && ci(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function vd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ((pt = _n(pt, e, t, n, r, l)), !0);
    case "dragenter":
      return ((mt = _n(mt, e, t, n, r, l)), !0);
    case "mouseover":
      return ((ht = _n(ht, e, t, n, r, l)), !0);
    case "pointerover":
      var o = l.pointerId;
      return (Xn.set(o, _n(Xn.get(o) || null, e, t, n, r, l)), !0);
    case "gotpointercapture":
      return (
        (o = l.pointerId),
        Zn.set(o, _n(Zn.get(o) || null, e, t, n, r, l)),
        !0
      );
  }
  return !1;
}
function Gu(e) {
  var t = Lt(e.target);
  if (t !== null) {
    var n = Vt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ru(n)), t !== null)) {
          ((e.blockedOn = t),
            Ku(e.priority, function () {
              Wu(n);
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
function Rr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = No(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((yo = r), n.target.dispatchEvent(r), (yo = null));
    } else return ((t = pr(n)), t !== null && ci(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function is(e, t, n) {
  Rr(e) && n.delete(t);
}
function xd() {
  ((ko = !1),
    pt !== null && Rr(pt) && (pt = null),
    mt !== null && Rr(mt) && (mt = null),
    ht !== null && Rr(ht) && (ht = null),
    Xn.forEach(is),
    Zn.forEach(is));
}
function Pn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ko ||
      ((ko = !0),
      je.unstable_scheduleCallback(je.unstable_NormalPriority, xd)));
}
function Jn(e) {
  function t(l) {
    return Pn(l, e);
  }
  if (0 < Sr.length) {
    Pn(Sr[0], e);
    for (var n = 1; n < Sr.length; n++) {
      var r = Sr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    pt !== null && Pn(pt, e),
      mt !== null && Pn(mt, e),
      ht !== null && Pn(ht, e),
      Xn.forEach(t),
      Zn.forEach(t),
      n = 0;
    n < at.length;
    n++
  )
    ((r = at[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < at.length && ((n = at[0]), n.blockedOn === null); )
    (Gu(n), n.blockedOn === null && at.shift());
}
var un = ot.ReactCurrentBatchConfig,
  Zr = !0;
function wd(e, t, n, r) {
  var l = U,
    o = un.transition;
  un.transition = null;
  try {
    ((U = 1), di(e, t, n, r));
  } finally {
    ((U = l), (un.transition = o));
  }
}
function Sd(e, t, n, r) {
  var l = U,
    o = un.transition;
  un.transition = null;
  try {
    ((U = 4), di(e, t, n, r));
  } finally {
    ((U = l), (un.transition = o));
  }
}
function di(e, t, n, r) {
  if (Zr) {
    var l = No(e, t, n, r);
    if (l === null) (Gl(e, t, r, Jr, n), os(e, r));
    else if (vd(l, e, t, n, r)) r.stopPropagation();
    else if ((os(e, r), t & 4 && -1 < yd.indexOf(e))) {
      for (; l !== null; ) {
        var o = pr(l);
        if (
          (o !== null && Hu(o),
          (o = No(e, t, n, r)),
          o === null && Gl(e, t, r, Jr, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Gl(e, t, r, null, n);
  }
}
var Jr = null;
function No(e, t, n, r) {
  if (((Jr = null), (e = si(r)), (e = Lt(e)), e !== null))
    if (((t = Vt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ru(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((Jr = e), null);
}
function Yu(e) {
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
      switch (ud()) {
        case ui:
          return 1;
        case $u:
          return 4;
        case Yr:
        case ad:
          return 16;
        case Au:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var dt = null,
  fi = null,
  Or = null;
function Xu() {
  if (Or) return Or;
  var e,
    t = fi,
    n = t.length,
    r,
    l = "value" in dt ? dt.value : dt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Or = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Fr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function kr() {
  return !0;
}
function ss() {
  return !1;
}
function Pe(e) {
  function t(n, r, l, o, i) {
    ((this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null));
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? kr
        : ss),
      (this.isPropagationStopped = ss),
      this
    );
  }
  return (
    Y(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = kr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = kr));
      },
      persist: function () {},
      isPersistent: kr,
    }),
    t
  );
}
var xn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  pi = Pe(xn),
  fr = Y({}, xn, { view: 0, detail: 0 }),
  kd = Pe(fr),
  Ul,
  $l,
  Ln,
  vl = Y({}, fr, {
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
    getModifierState: mi,
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
        : (e !== Ln &&
            (Ln && e.type === "mousemove"
              ? ((Ul = e.screenX - Ln.screenX), ($l = e.screenY - Ln.screenY))
              : ($l = Ul = 0),
            (Ln = e)),
          Ul);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : $l;
    },
  }),
  us = Pe(vl),
  Nd = Y({}, vl, { dataTransfer: 0 }),
  Ed = Pe(Nd),
  Cd = Y({}, fr, { relatedTarget: 0 }),
  Al = Pe(Cd),
  jd = Y({}, xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _d = Pe(jd),
  Pd = Y({}, xn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ld = Pe(Pd),
  zd = Y({}, xn, { data: 0 }),
  as = Pe(zd),
  Td = {
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
  Dd = {
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
  Id = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Md(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Id[e]) ? !!t[e] : !1;
}
function mi() {
  return Md;
}
var Rd = Y({}, fr, {
    key: function (e) {
      if (e.key) {
        var t = Td[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Fr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? Dd[e.keyCode] || "Unidentified"
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
    getModifierState: mi,
    charCode: function (e) {
      return e.type === "keypress" ? Fr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Fr(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Od = Pe(Rd),
  Fd = Y({}, vl, {
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
  cs = Pe(Fd),
  Ud = Y({}, fr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: mi,
  }),
  $d = Pe(Ud),
  Ad = Y({}, xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Vd = Pe(Ad),
  Bd = Y({}, vl, {
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
  Hd = Pe(Bd),
  Wd = [9, 13, 27, 32],
  hi = tt && "CompositionEvent" in window,
  $n = null;
tt && "documentMode" in document && ($n = document.documentMode);
var Qd = tt && "TextEvent" in window && !$n,
  Zu = tt && (!hi || ($n && 8 < $n && 11 >= $n)),
  ds = " ",
  fs = !1;
function Ju(e, t) {
  switch (e) {
    case "keyup":
      return Wd.indexOf(t.keyCode) !== -1;
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
function qu(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Yt = !1;
function Kd(e, t) {
  switch (e) {
    case "compositionend":
      return qu(t);
    case "keypress":
      return t.which !== 32 ? null : ((fs = !0), ds);
    case "textInput":
      return ((e = t.data), e === ds && fs ? null : e);
    default:
      return null;
  }
}
function Gd(e, t) {
  if (Yt)
    return e === "compositionend" || (!hi && Ju(e, t))
      ? ((e = Xu()), (Or = fi = dt = null), (Yt = !1), e)
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
      return Zu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Yd = {
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
function ps(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Yd[e.type] : t === "textarea";
}
function bu(e, t, n, r) {
  (zu(r),
    (t = qr(t, "onChange")),
    0 < t.length &&
      ((n = new pi("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var An = null,
  qn = null;
function Xd(e) {
  ca(e, 0);
}
function xl(e) {
  var t = Jt(e);
  if (Nu(t)) return e;
}
function Zd(e, t) {
  if (e === "change") return t;
}
var ea = !1;
if (tt) {
  var Vl;
  if (tt) {
    var Bl = "oninput" in document;
    if (!Bl) {
      var ms = document.createElement("div");
      (ms.setAttribute("oninput", "return;"),
        (Bl = typeof ms.oninput == "function"));
    }
    Vl = Bl;
  } else Vl = !1;
  ea = Vl && (!document.documentMode || 9 < document.documentMode);
}
function hs() {
  An && (An.detachEvent("onpropertychange", ta), (qn = An = null));
}
function ta(e) {
  if (e.propertyName === "value" && xl(qn)) {
    var t = [];
    (bu(t, qn, e, si(e)), Mu(Xd, t));
  }
}
function Jd(e, t, n) {
  e === "focusin"
    ? (hs(), (An = t), (qn = n), An.attachEvent("onpropertychange", ta))
    : e === "focusout" && hs();
}
function qd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return xl(qn);
}
function bd(e, t) {
  if (e === "click") return xl(t);
}
function ef(e, t) {
  if (e === "input" || e === "change") return xl(t);
}
function tf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Be = typeof Object.is == "function" ? Object.is : tf;
function bn(e, t) {
  if (Be(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!lo.call(t, l) || !Be(e[l], t[l])) return !1;
  }
  return !0;
}
function gs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ys(e, t) {
  var n = gs(e);
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
    n = gs(n);
  }
}
function na(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? na(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function ra() {
  for (var e = window, t = Qr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Qr(e.document);
  }
  return t;
}
function gi(e) {
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
function nf(e) {
  var t = ra(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    na(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && gi(n)) {
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
          o = Math.min(r.start, l);
        ((r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = ys(n, o)));
        var i = ys(n, r);
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
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var rf = tt && "documentMode" in document && 11 >= document.documentMode,
  Xt = null,
  Eo = null,
  Vn = null,
  Co = !1;
function vs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Co ||
    Xt == null ||
    Xt !== Qr(r) ||
    ((r = Xt),
    "selectionStart" in r && gi(r)
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
    (Vn && bn(Vn, r)) ||
      ((Vn = r),
      (r = qr(Eo, "onSelect")),
      0 < r.length &&
        ((t = new pi("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Xt))));
}
function Nr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Zt = {
    animationend: Nr("Animation", "AnimationEnd"),
    animationiteration: Nr("Animation", "AnimationIteration"),
    animationstart: Nr("Animation", "AnimationStart"),
    transitionend: Nr("Transition", "TransitionEnd"),
  },
  Hl = {},
  la = {};
tt &&
  ((la = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Zt.animationend.animation,
    delete Zt.animationiteration.animation,
    delete Zt.animationstart.animation),
  "TransitionEvent" in window || delete Zt.transitionend.transition);
function wl(e) {
  if (Hl[e]) return Hl[e];
  if (!Zt[e]) return e;
  var t = Zt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in la) return (Hl[e] = t[n]);
  return e;
}
var oa = wl("animationend"),
  ia = wl("animationiteration"),
  sa = wl("animationstart"),
  ua = wl("transitionend"),
  aa = new Map(),
  xs =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Nt(e, t) {
  (aa.set(e, t), At(t, [e]));
}
for (var Wl = 0; Wl < xs.length; Wl++) {
  var Ql = xs[Wl],
    lf = Ql.toLowerCase(),
    of = Ql[0].toUpperCase() + Ql.slice(1);
  Nt(lf, "on" + of);
}
Nt(oa, "onAnimationEnd");
Nt(ia, "onAnimationIteration");
Nt(sa, "onAnimationStart");
Nt("dblclick", "onDoubleClick");
Nt("focusin", "onFocus");
Nt("focusout", "onBlur");
Nt(ua, "onTransitionEnd");
dn("onMouseEnter", ["mouseout", "mouseover"]);
dn("onMouseLeave", ["mouseout", "mouseover"]);
dn("onPointerEnter", ["pointerout", "pointerover"]);
dn("onPointerLeave", ["pointerout", "pointerover"]);
At(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
At(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
At("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
At(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
At(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
At(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var On =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  sf = new Set("cancel close invalid load scroll toggle".split(" ").concat(On));
function ws(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), ld(r, t, void 0, e), (e.currentTarget = null));
}
function ca(e, t) {
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
            u = s.instance,
            f = s.currentTarget;
          if (((s = s.listener), u !== o && l.isPropagationStopped())) break e;
          (ws(l, s, f), (o = u));
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (u = s.instance),
            (f = s.currentTarget),
            (s = s.listener),
            u !== o && l.isPropagationStopped())
          )
            break e;
          (ws(l, s, f), (o = u));
        }
    }
  }
  if (Gr) throw ((e = wo), (Gr = !1), (wo = null), e);
}
function H(e, t) {
  var n = t[zo];
  n === void 0 && (n = t[zo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (da(t, e, 2, !1), n.add(r));
}
function Kl(e, t, n) {
  var r = 0;
  (t && (r |= 4), da(n, e, r, t));
}
var Er = "_reactListening" + Math.random().toString(36).slice(2);
function er(e) {
  if (!e[Er]) {
    ((e[Er] = !0),
      vu.forEach(function (n) {
        n !== "selectionchange" && (sf.has(n) || Kl(n, !1, e), Kl(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Er] || ((t[Er] = !0), Kl("selectionchange", !1, t));
  }
}
function da(e, t, n, r) {
  switch (Yu(t)) {
    case 1:
      var l = wd;
      break;
    case 4:
      l = Sd;
      break;
    default:
      l = di;
  }
  ((n = l.bind(null, t, n, e)),
    (l = void 0),
    !xo ||
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
function Gl(e, t, n, r, l) {
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
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; s !== null; ) {
          if (((i = Lt(s)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Mu(function () {
    var f = o,
      h = si(n),
      g = [];
    e: {
      var m = aa.get(e);
      if (m !== void 0) {
        var v = pi,
          w = e;
        switch (e) {
          case "keypress":
            if (Fr(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Od;
            break;
          case "focusin":
            ((w = "focus"), (v = Al));
            break;
          case "focusout":
            ((w = "blur"), (v = Al));
            break;
          case "beforeblur":
          case "afterblur":
            v = Al;
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
            v = us;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Ed;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = $d;
            break;
          case oa:
          case ia:
          case sa:
            v = _d;
            break;
          case ua:
            v = Vd;
            break;
          case "scroll":
            v = kd;
            break;
          case "wheel":
            v = Hd;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Ld;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = cs;
        }
        var S = (t & 4) !== 0,
          O = !S && e === "scroll",
          d = S ? (m !== null ? m + "Capture" : null) : m;
        S = [];
        for (var c = f, p; c !== null; ) {
          p = c;
          var y = p.stateNode;
          if (
            (p.tag === 5 &&
              y !== null &&
              ((p = y),
              d !== null && ((y = Yn(c, d)), y != null && S.push(tr(c, y, p)))),
            O)
          )
            break;
          c = c.return;
        }
        0 < S.length &&
          ((m = new v(m, w, null, n, h)), g.push({ event: m, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          m &&
            n !== yo &&
            (w = n.relatedTarget || n.fromElement) &&
            (Lt(w) || w[nt]))
        )
          break e;
        if (
          (v || m) &&
          ((m =
            h.window === h
              ? h
              : (m = h.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
          v
            ? ((w = n.relatedTarget || n.toElement),
              (v = f),
              (w = w ? Lt(w) : null),
              w !== null &&
                ((O = Vt(w)), w !== O || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((v = null), (w = f)),
          v !== w)
        ) {
          if (
            ((S = us),
            (y = "onMouseLeave"),
            (d = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = cs),
              (y = "onPointerLeave"),
              (d = "onPointerEnter"),
              (c = "pointer")),
            (O = v == null ? m : Jt(v)),
            (p = w == null ? m : Jt(w)),
            (m = new S(y, c + "leave", v, n, h)),
            (m.target = O),
            (m.relatedTarget = p),
            (y = null),
            Lt(h) === f &&
              ((S = new S(d, c + "enter", w, n, h)),
              (S.target = p),
              (S.relatedTarget = O),
              (y = S)),
            (O = y),
            v && w)
          )
            t: {
              for (S = v, d = w, c = 0, p = S; p; p = Qt(p)) c++;
              for (p = 0, y = d; y; y = Qt(y)) p++;
              for (; 0 < c - p; ) ((S = Qt(S)), c--);
              for (; 0 < p - c; ) ((d = Qt(d)), p--);
              for (; c--; ) {
                if (S === d || (d !== null && S === d.alternate)) break t;
                ((S = Qt(S)), (d = Qt(d)));
              }
              S = null;
            }
          else S = null;
          (v !== null && Ss(g, m, v, S, !1),
            w !== null && O !== null && Ss(g, O, w, S, !0));
        }
      }
      e: {
        if (
          ((m = f ? Jt(f) : window),
          (v = m.nodeName && m.nodeName.toLowerCase()),
          v === "select" || (v === "input" && m.type === "file"))
        )
          var N = Zd;
        else if (ps(m))
          if (ea) N = ef;
          else {
            N = qd;
            var k = Jd;
          }
        else
          (v = m.nodeName) &&
            v.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (N = bd);
        if (N && (N = N(e, f))) {
          bu(g, N, n, h);
          break e;
        }
        (k && k(e, m, f),
          e === "focusout" &&
            (k = m._wrapperState) &&
            k.controlled &&
            m.type === "number" &&
            fo(m, "number", m.value));
      }
      switch (((k = f ? Jt(f) : window), e)) {
        case "focusin":
          (ps(k) || k.contentEditable === "true") &&
            ((Xt = k), (Eo = f), (Vn = null));
          break;
        case "focusout":
          Vn = Eo = Xt = null;
          break;
        case "mousedown":
          Co = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Co = !1), vs(g, n, h));
          break;
        case "selectionchange":
          if (rf) break;
        case "keydown":
        case "keyup":
          vs(g, n, h);
      }
      var _;
      if (hi)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        Yt
          ? Ju(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      (j &&
        (Zu &&
          n.locale !== "ko" &&
          (Yt || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && Yt && (_ = Xu())
            : ((dt = h),
              (fi = "value" in dt ? dt.value : dt.textContent),
              (Yt = !0))),
        (k = qr(f, j)),
        0 < k.length &&
          ((j = new as(j, e, null, n, h)),
          g.push({ event: j, listeners: k }),
          _ ? (j.data = _) : ((_ = qu(n)), _ !== null && (j.data = _)))),
        (_ = Qd ? Kd(e, n) : Gd(e, n)) &&
          ((f = qr(f, "onBeforeInput")),
          0 < f.length &&
            ((h = new as("onBeforeInput", "beforeinput", null, n, h)),
            g.push({ event: h, listeners: f }),
            (h.data = _))));
    }
    ca(g, t);
  });
}
function tr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function qr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    (l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Yn(e, n)),
      o != null && r.unshift(tr(e, o, l)),
      (o = Yn(e, t)),
      o != null && r.push(tr(e, o, l))),
      (e = e.return));
  }
  return r;
}
function Qt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ss(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      f = s.stateNode;
    if (u !== null && u === r) break;
    (s.tag === 5 &&
      f !== null &&
      ((s = f),
      l
        ? ((u = Yn(n, o)), u != null && i.unshift(tr(n, u, s)))
        : l || ((u = Yn(n, o)), u != null && i.push(tr(n, u, s)))),
      (n = n.return));
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var uf = /\r\n?/g,
  af = /\u0000|\uFFFD/g;
function ks(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      uf,
      `
`,
    )
    .replace(af, "");
}
function Cr(e, t, n) {
  if (((t = ks(t)), ks(e) !== t && n)) throw Error(x(425));
}
function br() {}
var jo = null,
  _o = null;
function Po(e, t) {
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
var Lo = typeof setTimeout == "function" ? setTimeout : void 0,
  cf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ns = typeof Promise == "function" ? Promise : void 0,
  df =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ns < "u"
        ? function (e) {
            return Ns.resolve(null).then(e).catch(ff);
          }
        : Lo;
function ff(e) {
  setTimeout(function () {
    throw e;
  });
}
function Yl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(l), Jn(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Jn(t);
}
function gt(e) {
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
function Es(e) {
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
var wn = Math.random().toString(36).slice(2),
  Qe = "__reactFiber$" + wn,
  nr = "__reactProps$" + wn,
  nt = "__reactContainer$" + wn,
  zo = "__reactEvents$" + wn,
  pf = "__reactListeners$" + wn,
  mf = "__reactHandles$" + wn;
function Lt(e) {
  var t = e[Qe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[nt] || n[Qe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Es(e); e !== null; ) {
          if ((n = e[Qe])) return n;
          e = Es(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function pr(e) {
  return (
    (e = e[Qe] || e[nt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Jt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function Sl(e) {
  return e[nr] || null;
}
var To = [],
  qt = -1;
function Et(e) {
  return { current: e };
}
function W(e) {
  0 > qt || ((e.current = To[qt]), (To[qt] = null), qt--);
}
function V(e, t) {
  (qt++, (To[qt] = e.current), (e.current = t));
}
var kt = {},
  de = Et(kt),
  xe = Et(!1),
  Rt = kt;
function fn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return kt;
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
function we(e) {
  return ((e = e.childContextTypes), e != null);
}
function el() {
  (W(xe), W(de));
}
function Cs(e, t, n) {
  if (de.current !== kt) throw Error(x(168));
  (V(de, t), V(xe, n));
}
function fa(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(x(108, Jc(e) || "Unknown", l));
  return Y({}, n, r);
}
function tl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || kt),
    (Rt = de.current),
    V(de, e),
    V(xe, xe.current),
    !0
  );
}
function js(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  (n
    ? ((e = fa(e, t, Rt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      W(xe),
      W(de),
      V(de, e))
    : W(xe),
    V(xe, n));
}
var Je = null,
  kl = !1,
  Xl = !1;
function pa(e) {
  Je === null ? (Je = [e]) : Je.push(e);
}
function hf(e) {
  ((kl = !0), pa(e));
}
function Ct() {
  if (!Xl && Je !== null) {
    Xl = !0;
    var e = 0,
      t = U;
    try {
      var n = Je;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Je = null), (kl = !1));
    } catch (l) {
      throw (Je !== null && (Je = Je.slice(e + 1)), Uu(ui, Ct), l);
    } finally {
      ((U = t), (Xl = !1));
    }
  }
  return null;
}
var bt = [],
  en = 0,
  nl = null,
  rl = 0,
  ze = [],
  Te = 0,
  Ot = null,
  qe = 1,
  be = "";
function _t(e, t) {
  ((bt[en++] = rl), (bt[en++] = nl), (nl = e), (rl = t));
}
function ma(e, t, n) {
  ((ze[Te++] = qe), (ze[Te++] = be), (ze[Te++] = Ot), (Ot = e));
  var r = qe;
  e = be;
  var l = 32 - Ae(r) - 1;
  ((r &= ~(1 << l)), (n += 1));
  var o = 32 - Ae(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    ((o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (qe = (1 << (32 - Ae(t) + l)) | (n << l) | r),
      (be = o + e));
  } else ((qe = (1 << o) | (n << l) | r), (be = e));
}
function yi(e) {
  e.return !== null && (_t(e, 1), ma(e, 1, 0));
}
function vi(e) {
  for (; e === nl; )
    ((nl = bt[--en]), (bt[en] = null), (rl = bt[--en]), (bt[en] = null));
  for (; e === Ot; )
    ((Ot = ze[--Te]),
      (ze[Te] = null),
      (be = ze[--Te]),
      (ze[Te] = null),
      (qe = ze[--Te]),
      (ze[Te] = null));
}
var Ce = null,
  Ee = null,
  Q = !1,
  $e = null;
function ha(e, t) {
  var n = De(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function _s(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ce = e), (Ee = gt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ce = e), (Ee = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ot !== null ? { id: qe, overflow: be } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = De(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ce = e),
            (Ee = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Do(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Io(e) {
  if (Q) {
    var t = Ee;
    if (t) {
      var n = t;
      if (!_s(e, t)) {
        if (Do(e)) throw Error(x(418));
        t = gt(n.nextSibling);
        var r = Ce;
        t && _s(e, t)
          ? ha(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Q = !1), (Ce = e));
      }
    } else {
      if (Do(e)) throw Error(x(418));
      ((e.flags = (e.flags & -4097) | 2), (Q = !1), (Ce = e));
    }
  }
}
function Ps(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ce = e;
}
function jr(e) {
  if (e !== Ce) return !1;
  if (!Q) return (Ps(e), (Q = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Po(e.type, e.memoizedProps))),
    t && (t = Ee))
  ) {
    if (Do(e)) throw (ga(), Error(x(418)));
    for (; t; ) (ha(e, t), (t = gt(t.nextSibling)));
  }
  if ((Ps(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ee = gt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ee = null;
    }
  } else Ee = Ce ? gt(e.stateNode.nextSibling) : null;
  return !0;
}
function ga() {
  for (var e = Ee; e; ) e = gt(e.nextSibling);
}
function pn() {
  ((Ee = Ce = null), (Q = !1));
}
function xi(e) {
  $e === null ? ($e = [e]) : $e.push(e);
}
var gf = ot.ReactCurrentBatchConfig;
function zn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
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
    if (typeof e != "string") throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function _r(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      x(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function Ls(e) {
  var t = e._init;
  return t(e._payload);
}
function ya(e) {
  function t(d, c) {
    if (e) {
      var p = d.deletions;
      p === null ? ((d.deletions = [c]), (d.flags |= 16)) : p.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) (t(d, c), (c = c.sibling));
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      (c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling));
    return d;
  }
  function l(d, c) {
    return ((d = wt(d, c)), (d.index = 0), (d.sibling = null), d);
  }
  function o(d, c, p) {
    return (
      (d.index = p),
      e
        ? ((p = d.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((d.flags |= 2), c) : p)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }
  function i(d) {
    return (e && d.alternate === null && (d.flags |= 2), d);
  }
  function s(d, c, p, y) {
    return c === null || c.tag !== 6
      ? ((c = no(p, d.mode, y)), (c.return = d), c)
      : ((c = l(c, p)), (c.return = d), c);
  }
  function u(d, c, p, y) {
    var N = p.type;
    return N === Gt
      ? h(d, c, p.props.children, y, p.key)
      : c !== null &&
          (c.elementType === N ||
            (typeof N == "object" &&
              N !== null &&
              N.$$typeof === st &&
              Ls(N) === c.type))
        ? ((y = l(c, p.props)), (y.ref = zn(d, c, p)), (y.return = d), y)
        : ((y = Wr(p.type, p.key, p.props, null, d.mode, y)),
          (y.ref = zn(d, c, p)),
          (y.return = d),
          y);
  }
  function f(d, c, p, y) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = ro(p, d.mode, y)), (c.return = d), c)
      : ((c = l(c, p.children || [])), (c.return = d), c);
  }
  function h(d, c, p, y, N) {
    return c === null || c.tag !== 7
      ? ((c = Mt(p, d.mode, y, N)), (c.return = d), c)
      : ((c = l(c, p)), (c.return = d), c);
  }
  function g(d, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return ((c = no("" + c, d.mode, p)), (c.return = d), c);
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case gr:
          return (
            (p = Wr(c.type, c.key, c.props, null, d.mode, p)),
            (p.ref = zn(d, null, c)),
            (p.return = d),
            p
          );
        case Kt:
          return ((c = ro(c, d.mode, p)), (c.return = d), c);
        case st:
          var y = c._init;
          return g(d, y(c._payload), p);
      }
      if (Mn(c) || Cn(c))
        return ((c = Mt(c, d.mode, p, null)), (c.return = d), c);
      _r(d, c);
    }
    return null;
  }
  function m(d, c, p, y) {
    var N = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return N !== null ? null : s(d, c, "" + p, y);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case gr:
          return p.key === N ? u(d, c, p, y) : null;
        case Kt:
          return p.key === N ? f(d, c, p, y) : null;
        case st:
          return ((N = p._init), m(d, c, N(p._payload), y));
      }
      if (Mn(p) || Cn(p)) return N !== null ? null : h(d, c, p, y, null);
      _r(d, p);
    }
    return null;
  }
  function v(d, c, p, y, N) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return ((d = d.get(p) || null), s(c, d, "" + y, N));
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case gr:
          return (
            (d = d.get(y.key === null ? p : y.key) || null),
            u(c, d, y, N)
          );
        case Kt:
          return (
            (d = d.get(y.key === null ? p : y.key) || null),
            f(c, d, y, N)
          );
        case st:
          var k = y._init;
          return v(d, c, p, k(y._payload), N);
      }
      if (Mn(y) || Cn(y)) return ((d = d.get(p) || null), h(c, d, y, N, null));
      _r(c, y);
    }
    return null;
  }
  function w(d, c, p, y) {
    for (
      var N = null, k = null, _ = c, j = (c = 0), F = null;
      _ !== null && j < p.length;
      j++
    ) {
      _.index > j ? ((F = _), (_ = null)) : (F = _.sibling);
      var D = m(d, _, p[j], y);
      if (D === null) {
        _ === null && (_ = F);
        break;
      }
      (e && _ && D.alternate === null && t(d, _),
        (c = o(D, c, j)),
        k === null ? (N = D) : (k.sibling = D),
        (k = D),
        (_ = F));
    }
    if (j === p.length) return (n(d, _), Q && _t(d, j), N);
    if (_ === null) {
      for (; j < p.length; j++)
        ((_ = g(d, p[j], y)),
          _ !== null &&
            ((c = o(_, c, j)),
            k === null ? (N = _) : (k.sibling = _),
            (k = _)));
      return (Q && _t(d, j), N);
    }
    for (_ = r(d, _); j < p.length; j++)
      ((F = v(_, d, j, p[j], y)),
        F !== null &&
          (e && F.alternate !== null && _.delete(F.key === null ? j : F.key),
          (c = o(F, c, j)),
          k === null ? (N = F) : (k.sibling = F),
          (k = F)));
    return (
      e &&
        _.forEach(function (b) {
          return t(d, b);
        }),
      Q && _t(d, j),
      N
    );
  }
  function S(d, c, p, y) {
    var N = Cn(p);
    if (typeof N != "function") throw Error(x(150));
    if (((p = N.call(p)), p == null)) throw Error(x(151));
    for (
      var k = (N = null), _ = c, j = (c = 0), F = null, D = p.next();
      _ !== null && !D.done;
      j++, D = p.next()
    ) {
      _.index > j ? ((F = _), (_ = null)) : (F = _.sibling);
      var b = m(d, _, D.value, y);
      if (b === null) {
        _ === null && (_ = F);
        break;
      }
      (e && _ && b.alternate === null && t(d, _),
        (c = o(b, c, j)),
        k === null ? (N = b) : (k.sibling = b),
        (k = b),
        (_ = F));
    }
    if (D.done) return (n(d, _), Q && _t(d, j), N);
    if (_ === null) {
      for (; !D.done; j++, D = p.next())
        ((D = g(d, D.value, y)),
          D !== null &&
            ((c = o(D, c, j)),
            k === null ? (N = D) : (k.sibling = D),
            (k = D)));
      return (Q && _t(d, j), N);
    }
    for (_ = r(d, _); !D.done; j++, D = p.next())
      ((D = v(_, d, j, D.value, y)),
        D !== null &&
          (e && D.alternate !== null && _.delete(D.key === null ? j : D.key),
          (c = o(D, c, j)),
          k === null ? (N = D) : (k.sibling = D),
          (k = D)));
    return (
      e &&
        _.forEach(function (P) {
          return t(d, P);
        }),
      Q && _t(d, j),
      N
    );
  }
  function O(d, c, p, y) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Gt &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case gr:
          e: {
            for (var N = p.key, k = c; k !== null; ) {
              if (k.key === N) {
                if (((N = p.type), N === Gt)) {
                  if (k.tag === 7) {
                    (n(d, k.sibling),
                      (c = l(k, p.props.children)),
                      (c.return = d),
                      (d = c));
                    break e;
                  }
                } else if (
                  k.elementType === N ||
                  (typeof N == "object" &&
                    N !== null &&
                    N.$$typeof === st &&
                    Ls(N) === k.type)
                ) {
                  (n(d, k.sibling),
                    (c = l(k, p.props)),
                    (c.ref = zn(d, k, p)),
                    (c.return = d),
                    (d = c));
                  break e;
                }
                n(d, k);
                break;
              } else t(d, k);
              k = k.sibling;
            }
            p.type === Gt
              ? ((c = Mt(p.props.children, d.mode, y, p.key)),
                (c.return = d),
                (d = c))
              : ((y = Wr(p.type, p.key, p.props, null, d.mode, y)),
                (y.ref = zn(d, c, p)),
                (y.return = d),
                (d = y));
          }
          return i(d);
        case Kt:
          e: {
            for (k = p.key; c !== null; ) {
              if (c.key === k)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  (n(d, c.sibling),
                    (c = l(c, p.children || [])),
                    (c.return = d),
                    (d = c));
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            ((c = ro(p, d.mode, y)), (c.return = d), (d = c));
          }
          return i(d);
        case st:
          return ((k = p._init), O(d, c, k(p._payload), y));
      }
      if (Mn(p)) return w(d, c, p, y);
      if (Cn(p)) return S(d, c, p, y);
      _r(d, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = l(c, p)), (c.return = d), (d = c))
          : (n(d, c), (c = no(p, d.mode, y)), (c.return = d), (d = c)),
        i(d))
      : n(d, c);
  }
  return O;
}
var mn = ya(!0),
  va = ya(!1),
  ll = Et(null),
  ol = null,
  tn = null,
  wi = null;
function Si() {
  wi = tn = ol = null;
}
function ki(e) {
  var t = ll.current;
  (W(ll), (e._currentValue = t));
}
function Mo(e, t, n) {
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
function an(e, t) {
  ((ol = e),
    (wi = tn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ve = !0), (e.firstContext = null)));
}
function Me(e) {
  var t = e._currentValue;
  if (wi !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), tn === null)) {
      if (ol === null) throw Error(x(308));
      ((tn = e), (ol.dependencies = { lanes: 0, firstContext: e }));
    } else tn = tn.next = e;
  return t;
}
var zt = null;
function Ni(e) {
  zt === null ? (zt = [e]) : zt.push(e);
}
function xa(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ni(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    rt(e, r)
  );
}
function rt(e, t) {
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
var ut = !1;
function Ei(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function wa(e, t) {
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
function et(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function yt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), R & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      rt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ni(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    rt(e, n)
  );
}
function Ur(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ai(e, n));
  }
}
function zs(e, t) {
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
        (o === null ? (l = o = i) : (o = o.next = i), (n = n.next));
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
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
function il(e, t, n, r) {
  var l = e.updateQueue;
  ut = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var u = s,
      f = u.next;
    ((u.next = null), i === null ? (o = f) : (i.next = f), (i = u));
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (s = h.lastBaseUpdate),
      s !== i &&
        (s === null ? (h.firstBaseUpdate = f) : (s.next = f),
        (h.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var g = l.baseState;
    ((i = 0), (h = f = u = null), (s = o));
    do {
      var m = s.lane,
        v = s.eventTime;
      if ((r & m) === m) {
        h !== null &&
          (h = h.next =
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
            S = s;
          switch (((m = t), (v = n), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w == "function")) {
                g = w.call(v, g, m);
                break e;
              }
              g = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = S.payload),
                (m = typeof w == "function" ? w.call(v, g, m) : w),
                m == null)
              )
                break e;
              g = Y({}, g, m);
              break e;
            case 2:
              ut = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [s]) : m.push(s));
      } else
        ((v = {
          eventTime: v,
          lane: m,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          h === null ? ((f = h = v), (u = g)) : (h = h.next = v),
          (i |= m));
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break;
        ((m = s),
          (s = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null));
      }
    } while (!0);
    if (
      (h === null && (u = g),
      (l.baseState = u),
      (l.firstBaseUpdate = f),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do ((i |= l.lane), (l = l.next));
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    ((Ut |= i), (e.lanes = i), (e.memoizedState = g));
  }
}
function Ts(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(x(191, l));
        l.call(r);
      }
    }
}
var mr = {},
  Ge = Et(mr),
  rr = Et(mr),
  lr = Et(mr);
function Tt(e) {
  if (e === mr) throw Error(x(174));
  return e;
}
function Ci(e, t) {
  switch ((V(lr, t), V(rr, e), V(Ge, mr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : mo(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = mo(t, e)));
  }
  (W(Ge), V(Ge, t));
}
function hn() {
  (W(Ge), W(rr), W(lr));
}
function Sa(e) {
  Tt(lr.current);
  var t = Tt(Ge.current),
    n = mo(t, e.type);
  t !== n && (V(rr, e), V(Ge, n));
}
function ji(e) {
  rr.current === e && (W(Ge), W(rr));
}
var K = Et(0);
function sl(e) {
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
var Zl = [];
function _i() {
  for (var e = 0; e < Zl.length; e++)
    Zl[e]._workInProgressVersionPrimary = null;
  Zl.length = 0;
}
var $r = ot.ReactCurrentDispatcher,
  Jl = ot.ReactCurrentBatchConfig,
  Ft = 0,
  G = null,
  te = null,
  re = null,
  ul = !1,
  Bn = !1,
  or = 0,
  yf = 0;
function ue() {
  throw Error(x(321));
}
function Pi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Be(e[n], t[n])) return !1;
  return !0;
}
function Li(e, t, n, r, l, o) {
  if (
    ((Ft = o),
    (G = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    ($r.current = e === null || e.memoizedState === null ? Sf : kf),
    (e = n(r, l)),
    Bn)
  ) {
    o = 0;
    do {
      if (((Bn = !1), (or = 0), 25 <= o)) throw Error(x(301));
      ((o += 1),
        (re = te = null),
        (t.updateQueue = null),
        ($r.current = Nf),
        (e = n(r, l)));
    } while (Bn);
  }
  if (
    (($r.current = al),
    (t = te !== null && te.next !== null),
    (Ft = 0),
    (re = te = G = null),
    (ul = !1),
    t)
  )
    throw Error(x(300));
  return e;
}
function zi() {
  var e = or !== 0;
  return ((or = 0), e);
}
function We() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (re === null ? (G.memoizedState = re = e) : (re = re.next = e), re);
}
function Re() {
  if (te === null) {
    var e = G.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = te.next;
  var t = re === null ? G.memoizedState : re.next;
  if (t !== null) ((re = t), (te = e));
  else {
    if (e === null) throw Error(x(310));
    ((te = e),
      (e = {
        memoizedState: te.memoizedState,
        baseState: te.baseState,
        baseQueue: te.baseQueue,
        queue: te.queue,
        next: null,
      }),
      re === null ? (G.memoizedState = re = e) : (re = re.next = e));
  }
  return re;
}
function ir(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ql(e) {
  var t = Re(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = te,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      ((l.next = o.next), (o.next = i));
    }
    ((r.baseQueue = l = o), (n.pending = null));
  }
  if (l !== null) {
    ((o = l.next), (r = r.baseState));
    var s = (i = null),
      u = null,
      f = o;
    do {
      var h = f.lane;
      if ((Ft & h) === h)
        (u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null,
            }),
          (r = f.hasEagerState ? f.eagerState : e(r, f.action)));
      else {
        var g = {
          lane: h,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null,
        };
        (u === null ? ((s = u = g), (i = r)) : (u = u.next = g),
          (G.lanes |= h),
          (Ut |= h));
      }
      f = f.next;
    } while (f !== null && f !== o);
    (u === null ? (i = r) : (u.next = s),
      Be(r, t.memoizedState) || (ve = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do ((o = l.lane), (G.lanes |= o), (Ut |= o), (l = l.next));
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function bl(e) {
  var t = Re(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do ((o = e(o, i.action)), (i = i.next));
    while (i !== l);
    (Be(o, t.memoizedState) || (ve = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o));
  }
  return [o, r];
}
function ka() {}
function Na(e, t) {
  var n = G,
    r = Re(),
    l = t(),
    o = !Be(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (ve = !0)),
    (r = r.queue),
    Ti(ja.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (re !== null && re.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      sr(9, Ca.bind(null, n, r, l, t), void 0, null),
      le === null)
    )
      throw Error(x(349));
    Ft & 30 || Ea(n, t, l);
  }
  return l;
}
function Ea(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function Ca(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), _a(t) && Pa(e));
}
function ja(e, t, n) {
  return n(function () {
    _a(t) && Pa(e);
  });
}
function _a(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Be(e, n);
  } catch {
    return !0;
  }
}
function Pa(e) {
  var t = rt(e, 1);
  t !== null && Ve(t, e, 1, -1);
}
function Ds(e) {
  var t = We();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ir,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = wf.bind(null, G, e)),
    [t.memoizedState, e]
  );
}
function sr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function La() {
  return Re().memoizedState;
}
function Ar(e, t, n, r) {
  var l = We();
  ((G.flags |= e),
    (l.memoizedState = sr(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Nl(e, t, n, r) {
  var l = Re();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (te !== null) {
    var i = te.memoizedState;
    if (((o = i.destroy), r !== null && Pi(r, i.deps))) {
      l.memoizedState = sr(t, n, o, r);
      return;
    }
  }
  ((G.flags |= e), (l.memoizedState = sr(1 | t, n, o, r)));
}
function Is(e, t) {
  return Ar(8390656, 8, e, t);
}
function Ti(e, t) {
  return Nl(2048, 8, e, t);
}
function za(e, t) {
  return Nl(4, 2, e, t);
}
function Ta(e, t) {
  return Nl(4, 4, e, t);
}
function Da(e, t) {
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
function Ia(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Nl(4, 4, Da.bind(null, t, e), n)
  );
}
function Di() {}
function Ma(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ra(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Oa(e, t, n) {
  return Ft & 21
    ? (Be(n, t) || ((n = Vu()), (G.lanes |= n), (Ut |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ve = !0)), (e.memoizedState = n));
}
function vf(e, t) {
  var n = U;
  ((U = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Jl.transition;
  Jl.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((U = n), (Jl.transition = r));
  }
}
function Fa() {
  return Re().memoizedState;
}
function xf(e, t, n) {
  var r = xt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ua(e))
  )
    $a(t, n);
  else if (((n = xa(e, t, n, r)), n !== null)) {
    var l = pe();
    (Ve(n, e, r, l), Aa(n, t, r));
  }
}
function wf(e, t, n) {
  var r = xt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ua(e)) $a(t, l);
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
        if (((l.hasEagerState = !0), (l.eagerState = s), Be(s, i))) {
          var u = t.interleaved;
          (u === null
            ? ((l.next = l), Ni(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l));
          return;
        }
      } catch {
      } finally {
      }
    ((n = xa(e, t, l, r)),
      n !== null && ((l = pe()), Ve(n, e, r, l), Aa(n, t, r)));
  }
}
function Ua(e) {
  var t = e.alternate;
  return e === G || (t !== null && t === G);
}
function $a(e, t) {
  Bn = ul = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Aa(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ai(e, n));
  }
}
var al = {
    readContext: Me,
    useCallback: ue,
    useContext: ue,
    useEffect: ue,
    useImperativeHandle: ue,
    useInsertionEffect: ue,
    useLayoutEffect: ue,
    useMemo: ue,
    useReducer: ue,
    useRef: ue,
    useState: ue,
    useDebugValue: ue,
    useDeferredValue: ue,
    useTransition: ue,
    useMutableSource: ue,
    useSyncExternalStore: ue,
    useId: ue,
    unstable_isNewReconciler: !1,
  },
  Sf = {
    readContext: Me,
    useCallback: function (e, t) {
      return ((We().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Me,
    useEffect: Is,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ar(4194308, 4, Da.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ar(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ar(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = We();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = We();
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
        (e = e.dispatch = xf.bind(null, G, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = We();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Ds,
    useDebugValue: Di,
    useDeferredValue: function (e) {
      return (We().memoizedState = e);
    },
    useTransition: function () {
      var e = Ds(!1),
        t = e[0];
      return ((e = vf.bind(null, e[1])), (We().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = G,
        l = We();
      if (Q) {
        if (n === void 0) throw Error(x(407));
        n = n();
      } else {
        if (((n = t()), le === null)) throw Error(x(349));
        Ft & 30 || Ea(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Is(ja.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        sr(9, Ca.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = We(),
        t = le.identifierPrefix;
      if (Q) {
        var n = be,
          r = qe;
        ((n = (r & ~(1 << (32 - Ae(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = or++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = yf++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  kf = {
    readContext: Me,
    useCallback: Ma,
    useContext: Me,
    useEffect: Ti,
    useImperativeHandle: Ia,
    useInsertionEffect: za,
    useLayoutEffect: Ta,
    useMemo: Ra,
    useReducer: ql,
    useRef: La,
    useState: function () {
      return ql(ir);
    },
    useDebugValue: Di,
    useDeferredValue: function (e) {
      var t = Re();
      return Oa(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = ql(ir)[0],
        t = Re().memoizedState;
      return [e, t];
    },
    useMutableSource: ka,
    useSyncExternalStore: Na,
    useId: Fa,
    unstable_isNewReconciler: !1,
  },
  Nf = {
    readContext: Me,
    useCallback: Ma,
    useContext: Me,
    useEffect: Ti,
    useImperativeHandle: Ia,
    useInsertionEffect: za,
    useLayoutEffect: Ta,
    useMemo: Ra,
    useReducer: bl,
    useRef: La,
    useState: function () {
      return bl(ir);
    },
    useDebugValue: Di,
    useDeferredValue: function (e) {
      var t = Re();
      return te === null ? (t.memoizedState = e) : Oa(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = bl(ir)[0],
        t = Re().memoizedState;
      return [e, t];
    },
    useMutableSource: ka,
    useSyncExternalStore: Na,
    useId: Fa,
    unstable_isNewReconciler: !1,
  };
function Fe(e, t) {
  if (e && e.defaultProps) {
    ((t = Y({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ro(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Y({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var El = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Vt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = pe(),
      l = xt(e),
      o = et(r, l);
    ((o.payload = t),
      n != null && (o.callback = n),
      (t = yt(e, o, l)),
      t !== null && (Ve(t, e, l, r), Ur(t, e, l)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = pe(),
      l = xt(e),
      o = et(r, l);
    ((o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = yt(e, o, l)),
      t !== null && (Ve(t, e, l, r), Ur(t, e, l)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = pe(),
      r = xt(e),
      l = et(n, r);
    ((l.tag = 2),
      t != null && (l.callback = t),
      (t = yt(e, l, r)),
      t !== null && (Ve(t, e, r, n), Ur(t, e, r)));
  },
};
function Ms(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !bn(n, r) || !bn(l, o)
        : !0
  );
}
function Va(e, t, n) {
  var r = !1,
    l = kt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Me(o))
      : ((l = we(t) ? Rt : de.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? fn(e, l) : kt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = El),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Rs(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && El.enqueueReplaceState(t, t.state, null));
}
function Oo(e, t, n, r) {
  var l = e.stateNode;
  ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ei(e));
  var o = t.contextType;
  (typeof o == "object" && o !== null
    ? (l.context = Me(o))
    : ((o = we(t) ? Rt : de.current), (l.context = fn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Ro(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && El.enqueueReplaceState(l, l.state, null),
      il(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308));
}
function gn(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += Zc(r)), (r = r.return));
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
function eo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Fo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Ef = typeof WeakMap == "function" ? WeakMap : Map;
function Ba(e, t, n) {
  ((n = et(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (dl || ((dl = !0), (Go = r)), Fo(e, t));
    }),
    n
  );
}
function Ha(e, t, n) {
  ((n = et(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    ((n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Fo(e, t);
      }));
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        (Fo(e, t),
          typeof r != "function" &&
            (vt === null ? (vt = new Set([this])) : vt.add(this)));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Os(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ef();
    var l = new Set();
    r.set(t, l);
  } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
  l.has(n) || (l.add(n), (e = Uf.bind(null, e, t, n)), t.then(e, e));
}
function Fs(e) {
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
function Us(e, t, n, r, l) {
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
              : ((t = et(-1, 1)), (t.tag = 2), yt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Cf = ot.ReactCurrentOwner,
  ve = !1;
function fe(e, t, n, r) {
  t.child = e === null ? va(t, null, n, r) : mn(t, e.child, n, r);
}
function $s(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    an(t, l),
    (r = Li(e, t, n, r, o, l)),
    (n = zi()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        lt(e, t, l))
      : (Q && n && yi(t), (t.flags |= 1), fe(e, t, r, l), t.child)
  );
}
function As(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ai(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Wa(e, t, o, r, l))
      : ((e = Wr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : bn), n(i, r) && e.ref === t.ref)
    )
      return lt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = wt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Wa(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (bn(o, r) && e.ref === t.ref)
      if (((ve = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (ve = !0);
      else return ((t.lanes = e.lanes), lt(e, t, l));
  }
  return Uo(e, t, n, r, l);
}
function Qa(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        V(rn, Ne),
        (Ne |= n));
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
          V(rn, Ne),
          (Ne |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        V(rn, Ne),
        (Ne |= r));
    }
  else
    (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      V(rn, Ne),
      (Ne |= r));
  return (fe(e, t, l, n), t.child);
}
function Ka(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Uo(e, t, n, r, l) {
  var o = we(n) ? Rt : de.current;
  return (
    (o = fn(t, o)),
    an(t, l),
    (n = Li(e, t, n, r, o, l)),
    (r = zi()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        lt(e, t, l))
      : (Q && r && yi(t), (t.flags |= 1), fe(e, t, n, l), t.child)
  );
}
function Vs(e, t, n, r, l) {
  if (we(n)) {
    var o = !0;
    tl(t);
  } else o = !1;
  if ((an(t, l), t.stateNode === null))
    (Vr(e, t), Va(t, n, r), Oo(t, n, r, l), (r = !0));
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var u = i.context,
      f = n.contextType;
    typeof f == "object" && f !== null
      ? (f = Me(f))
      : ((f = we(n) ? Rt : de.current), (f = fn(t, f)));
    var h = n.getDerivedStateFromProps,
      g =
        typeof h == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    (g ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || u !== f) && Rs(t, i, r, f)),
      (ut = !1));
    var m = t.memoizedState;
    ((i.state = m),
      il(t, r, i, l),
      (u = t.memoizedState),
      s !== r || m !== u || xe.current || ut
        ? (typeof h == "function" && (Ro(t, n, h, r), (u = t.memoizedState)),
          (s = ut || Ms(t, n, s, r, m, u, f))
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
          (i.context = f),
          (r = s))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((i = t.stateNode),
      wa(e, t),
      (s = t.memoizedProps),
      (f = t.type === t.elementType ? s : Fe(t.type, s)),
      (i.props = f),
      (g = t.pendingProps),
      (m = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Me(u))
        : ((u = we(n) ? Rt : de.current), (u = fn(t, u))));
    var v = n.getDerivedStateFromProps;
    ((h =
      typeof v == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== g || m !== u) && Rs(t, i, r, u)),
      (ut = !1),
      (m = t.memoizedState),
      (i.state = m),
      il(t, r, i, l));
    var w = t.memoizedState;
    s !== g || m !== w || xe.current || ut
      ? (typeof v == "function" && (Ro(t, n, v, r), (w = t.memoizedState)),
        (f = ut || Ms(t, n, f, r, m, w, u) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = u),
        (r = f))
      : (typeof i.componentDidUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return $o(e, t, n, r, o, l);
}
function $o(e, t, n, r, l, o) {
  Ka(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return (l && js(t, n, !1), lt(e, t, o));
  ((r = t.stateNode), (Cf.current = t));
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = mn(t, e.child, null, o)), (t.child = mn(t, null, s, o)))
      : fe(e, t, s, o),
    (t.memoizedState = r.state),
    l && js(t, n, !0),
    t.child
  );
}
function Ga(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Cs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Cs(e, t.context, !1),
    Ci(e, t.containerInfo));
}
function Bs(e, t, n, r, l) {
  return (pn(), xi(l), (t.flags |= 256), fe(e, t, n, r), t.child);
}
var Ao = { dehydrated: null, treeContext: null, retryLane: 0 };
function Vo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ya(e, t, n) {
  var r = t.pendingProps,
    l = K.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    V(K, l & 1),
    e === null)
  )
    return (
      Io(t),
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
                : (o = _l(i, r, 0, null)),
              (e = Mt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Vo(n)),
              (t.memoizedState = Ao),
              e)
            : Ii(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null)))
    return jf(e, t, i, r, s, l, n);
  if (o) {
    ((o = r.fallback), (i = t.mode), (l = e.child), (s = l.sibling));
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = wt(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      s !== null ? (o = wt(s, o)) : ((o = Mt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Vo(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ao),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = wt(o, { mode: "visible", children: r.children })),
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
function Ii(e, t) {
  return (
    (t = _l({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Pr(e, t, n, r) {
  return (
    r !== null && xi(r),
    mn(t, e.child, null, n),
    (e = Ii(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function jf(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = eo(Error(x(422)))), Pr(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = _l({ mode: "visible", children: r.children }, l, 0, null)),
          (o = Mt(o, l, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && mn(t, e.child, null, i),
          (t.child.memoizedState = Vo(i)),
          (t.memoizedState = Ao),
          o);
  if (!(t.mode & 1)) return Pr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var s = r.dgst;
    return (
      (r = s),
      (o = Error(x(419))),
      (r = eo(o, r, void 0)),
      Pr(e, t, i, r)
    );
  }
  if (((s = (i & e.childLanes) !== 0), ve || s)) {
    if (((r = le), r !== null)) {
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
          l !== o.retryLane &&
          ((o.retryLane = l), rt(e, l), Ve(r, e, l, -1)));
    }
    return ($i(), (r = eo(Error(x(421)))), Pr(e, t, i, r));
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = $f.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ee = gt(l.nextSibling)),
      (Ce = t),
      (Q = !0),
      ($e = null),
      e !== null &&
        ((ze[Te++] = qe),
        (ze[Te++] = be),
        (ze[Te++] = Ot),
        (qe = e.id),
        (be = e.overflow),
        (Ot = t)),
      (t = Ii(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Hs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Mo(e.return, t, n));
}
function to(e, t, n, r, l) {
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
function Xa(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((fe(e, t, r.children, n), (r = K.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Hs(e, n, t);
        else if (e.tag === 19) Hs(e, n, t);
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
  if ((V(K, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          ((e = n.alternate),
            e !== null && sl(e) === null && (l = n),
            (n = n.sibling));
        ((n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          to(t, !1, l, n, o));
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && sl(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
        }
        to(t, !0, n, null, o);
        break;
      case "together":
        to(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Vr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function lt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ut |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (
      e = t.child, n = wt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = wt(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function _f(e, t, n) {
  switch (t.tag) {
    case 3:
      (Ga(t), pn());
      break;
    case 5:
      Sa(t);
      break;
    case 1:
      we(t.type) && tl(t);
      break;
    case 4:
      Ci(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      (V(ll, r._currentValue), (r._currentValue = l));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (V(K, K.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Ya(e, t, n)
            : (V(K, K.current & 1),
              (e = lt(e, t, n)),
              e !== null ? e.sibling : null);
      V(K, K.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Xa(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        V(K, K.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Qa(e, t, n));
  }
  return lt(e, t, n);
}
var Za, Bo, Ja, qa;
Za = function (e, t) {
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
Bo = function () {};
Ja = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    ((e = t.stateNode), Tt(Ge.current));
    var o = null;
    switch (n) {
      case "input":
        ((l = ao(e, l)), (r = ao(e, r)), (o = []));
        break;
      case "select":
        ((l = Y({}, l, { value: void 0 })),
          (r = Y({}, r, { value: void 0 })),
          (o = []));
        break;
      case "textarea":
        ((l = po(e, l)), (r = po(e, r)), (o = []));
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = br);
    }
    ho(n, r);
    var i;
    n = null;
    for (f in l)
      if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null)
        if (f === "style") {
          var s = l[f];
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          f !== "dangerouslySetInnerHTML" &&
            f !== "children" &&
            f !== "suppressContentEditableWarning" &&
            f !== "suppressHydrationWarning" &&
            f !== "autoFocus" &&
            (Kn.hasOwnProperty(f)
              ? o || (o = [])
              : (o = o || []).push(f, null));
    for (f in r) {
      var u = r[f];
      if (
        ((s = l != null ? l[f] : void 0),
        r.hasOwnProperty(f) && u !== s && (u != null || s != null))
      )
        if (f === "style")
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                s[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else (n || (o || (o = []), o.push(f, n)), (n = u));
        else
          f === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (o = o || []).push(f, u))
            : f === "children"
              ? (typeof u != "string" && typeof u != "number") ||
                (o = o || []).push(f, "" + u)
              : f !== "suppressContentEditableWarning" &&
                f !== "suppressHydrationWarning" &&
                (Kn.hasOwnProperty(f)
                  ? (u != null && f === "onScroll" && H("scroll", e),
                    o || s === u || (o = []))
                  : (o = o || []).push(f, u));
    }
    n && (o = o || []).push("style", n);
    var f = o;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
qa = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Tn(e, t) {
  if (!Q)
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
function ae(e) {
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
function Pf(e, t, n) {
  var r = t.pendingProps;
  switch ((vi(t), t.tag)) {
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
      return (ae(t), null);
    case 1:
      return (we(t.type) && el(), ae(t), null);
    case 3:
      return (
        (r = t.stateNode),
        hn(),
        W(xe),
        W(de),
        _i(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (jr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), $e !== null && (Zo($e), ($e = null)))),
        Bo(e, t),
        ae(t),
        null
      );
    case 5:
      ji(t);
      var l = Tt(lr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Ja(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return (ae(t), null);
        }
        if (((e = Tt(Ge.current)), jr(t))) {
          ((r = t.stateNode), (n = t.type));
          var o = t.memoizedProps;
          switch (((r[Qe] = t), (r[nr] = o), (e = (t.mode & 1) !== 0), n)) {
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
              for (l = 0; l < On.length; l++) H(On[l], r);
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
              (qi(r, o), H("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!o.multiple }),
                H("invalid", r));
              break;
            case "textarea":
              (es(r, o), H("invalid", r));
          }
          (ho(n, o), (l = null));
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var s = o[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Cr(r.textContent, s, e),
                    (l = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Cr(r.textContent, s, e),
                    (l = ["children", "" + s]))
                : Kn.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  H("scroll", r);
            }
          switch (n) {
            case "input":
              (yr(r), bi(r, o, !0));
              break;
            case "textarea":
              (yr(r), ts(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = br);
          }
          ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ju(n)),
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
            (e[Qe] = t),
            (e[nr] = r),
            Za(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((i = go(n, r)), n)) {
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
                for (l = 0; l < On.length; l++) H(On[l], e);
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
                (qi(e, r), (l = ao(e, r)), H("invalid", e));
                break;
              case "option":
                l = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = Y({}, r, { value: void 0 })),
                  H("invalid", e));
                break;
              case "textarea":
                (es(e, r), (l = po(e, r)), H("invalid", e));
                break;
              default:
                l = r;
            }
            (ho(n, l), (s = l));
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var u = s[o];
                o === "style"
                  ? Lu(e, u)
                  : o === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && _u(e, u))
                    : o === "children"
                      ? typeof u == "string"
                        ? (n !== "textarea" || u !== "") && Gn(e, u)
                        : typeof u == "number" && Gn(e, "" + u)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (Kn.hasOwnProperty(o)
                          ? u != null && o === "onScroll" && H("scroll", e)
                          : u != null && ri(e, o, u, i));
              }
            switch (n) {
              case "input":
                (yr(e), bi(e, r, !1));
                break;
              case "textarea":
                (yr(e), ts(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + St(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? ln(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      ln(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = br);
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
      return (ae(t), null);
    case 6:
      if (e && t.stateNode != null) qa(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
        if (((n = Tt(lr.current)), Tt(Ge.current), jr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Qe] = t),
            (o = r.nodeValue !== n) && ((e = Ce), e !== null))
          )
            switch (e.tag) {
              case 3:
                Cr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Cr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Qe] = t),
            (t.stateNode = r));
      }
      return (ae(t), null);
    case 13:
      if (
        (W(K),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Q && Ee !== null && t.mode & 1 && !(t.flags & 128))
          (ga(), pn(), (t.flags |= 98560), (o = !1));
        else if (((o = jr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(x(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(x(317));
            o[Qe] = t;
          } else
            (pn(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (ae(t), (o = !1));
        } else ($e !== null && (Zo($e), ($e = null)), (o = !0));
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || K.current & 1 ? ne === 0 && (ne = 3) : $i())),
          t.updateQueue !== null && (t.flags |= 4),
          ae(t),
          null);
    case 4:
      return (
        hn(),
        Bo(e, t),
        e === null && er(t.stateNode.containerInfo),
        ae(t),
        null
      );
    case 10:
      return (ki(t.type._context), ae(t), null);
    case 17:
      return (we(t.type) && el(), ae(t), null);
    case 19:
      if ((W(K), (o = t.memoizedState), o === null)) return (ae(t), null);
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Tn(o, !1);
        else {
          if (ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = sl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Tn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((o = n),
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
                    (n = n.sibling));
                return (V(K, (K.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Z() > yn &&
            ((t.flags |= 128), (r = !0), Tn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = sl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Tn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !Q)
            )
              return (ae(t), null);
          } else
            2 * Z() - o.renderingStartTime > yn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Tn(o, !1), (t.lanes = 4194304));
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
          (o.renderingStartTime = Z()),
          (t.sibling = null),
          (n = K.current),
          V(K, r ? (n & 1) | 2 : n & 1),
          t)
        : (ae(t), null);
    case 22:
    case 23:
      return (
        Ui(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ne & 1073741824 && (ae(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ae(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function Lf(e, t) {
  switch ((vi(t), t.tag)) {
    case 1:
      return (
        we(t.type) && el(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        hn(),
        W(xe),
        W(de),
        _i(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (ji(t), null);
    case 13:
      if ((W(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        pn();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (W(K), null);
    case 4:
      return (hn(), null);
    case 10:
      return (ki(t.type._context), null);
    case 22:
    case 23:
      return (Ui(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Lr = !1,
  ce = !1,
  zf = typeof WeakSet == "function" ? WeakSet : Set,
  C = null;
function nn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        X(e, t, r);
      }
    else n.current = null;
}
function Ho(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var Ws = !1;
function Tf(e, t) {
  if (((jo = Zr), (e = ra()), gi(e))) {
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
            (n.nodeType, o.nodeType);
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            s = -1,
            u = -1,
            f = 0,
            h = 0,
            g = e,
            m = null;
          t: for (;;) {
            for (
              var v;
              g !== n || (l !== 0 && g.nodeType !== 3) || (s = i + l),
                g !== o || (r !== 0 && g.nodeType !== 3) || (u = i + r),
                g.nodeType === 3 && (i += g.nodeValue.length),
                (v = g.firstChild) !== null;
            )
              ((m = g), (g = v));
            for (;;) {
              if (g === e) break t;
              if (
                (m === n && ++f === l && (s = i),
                m === o && ++h === r && (u = i),
                (v = g.nextSibling) !== null)
              )
                break;
              ((g = m), (m = g.parentNode));
            }
            g = v;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (_o = { focusedElem: e, selectionRange: n }, Zr = !1, C = t; C !== null; )
    if (((t = C), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (C = e));
    else
      for (; C !== null; ) {
        t = C;
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
                    O = w.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : Fe(t.type, S),
                      O,
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (y) {
          X(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (C = e));
          break;
        }
        C = t.return;
      }
  return ((w = Ws), (Ws = !1), w);
}
function Hn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        ((l.destroy = void 0), o !== void 0 && Ho(t, n, o));
      }
      l = l.next;
    } while (l !== r);
  }
}
function Cl(e, t) {
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
function Wo(e) {
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
function ba(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), ba(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Qe], delete t[nr], delete t[zo], delete t[pf], delete t[mf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function ec(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Qs(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || ec(e.return)) return null;
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
function Qo(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = br)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Qo(e, t, n), e = e.sibling; e !== null; )
      (Qo(e, t, n), (e = e.sibling));
}
function Ko(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ko(e, t, n), e = e.sibling; e !== null; )
      (Ko(e, t, n), (e = e.sibling));
}
var oe = null,
  Ue = !1;
function it(e, t, n) {
  for (n = n.child; n !== null; ) (tc(e, t, n), (n = n.sibling));
}
function tc(e, t, n) {
  if (Ke && typeof Ke.onCommitFiberUnmount == "function")
    try {
      Ke.onCommitFiberUnmount(yl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ce || nn(n, t);
    case 6:
      var r = oe,
        l = Ue;
      ((oe = null),
        it(e, t, n),
        (oe = r),
        (Ue = l),
        oe !== null &&
          (Ue
            ? ((e = oe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : oe.removeChild(n.stateNode)));
      break;
    case 18:
      oe !== null &&
        (Ue
          ? ((e = oe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Yl(e.parentNode, n)
              : e.nodeType === 1 && Yl(e, n),
            Jn(e))
          : Yl(oe, n.stateNode));
      break;
    case 4:
      ((r = oe),
        (l = Ue),
        (oe = n.stateNode.containerInfo),
        (Ue = !0),
        it(e, t, n),
        (oe = r),
        (Ue = l));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ce &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          ((o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Ho(n, t, i),
            (l = l.next));
        } while (l !== r);
      }
      it(e, t, n);
      break;
    case 1:
      if (
        !ce &&
        (nn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (s) {
          X(n, t, s);
        }
      it(e, t, n);
      break;
    case 21:
      it(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ce = (r = ce) || n.memoizedState !== null), it(e, t, n), (ce = r))
        : it(e, t, n);
      break;
    default:
      it(e, t, n);
  }
}
function Ks(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new zf()),
      t.forEach(function (r) {
        var l = Af.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      }));
  }
}
function Oe(e, t) {
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
              ((oe = s.stateNode), (Ue = !1));
              break e;
            case 3:
              ((oe = s.stateNode.containerInfo), (Ue = !0));
              break e;
            case 4:
              ((oe = s.stateNode.containerInfo), (Ue = !0));
              break e;
          }
          s = s.return;
        }
        if (oe === null) throw Error(x(160));
        (tc(o, i, l), (oe = null), (Ue = !1));
        var u = l.alternate;
        (u !== null && (u.return = null), (l.return = null));
      } catch (f) {
        X(l, t, f);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (nc(t, e), (t = t.sibling));
}
function nc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Oe(t, e), He(e), r & 4)) {
        try {
          (Hn(3, e, e.return), Cl(3, e));
        } catch (S) {
          X(e, e.return, S);
        }
        try {
          Hn(5, e, e.return);
        } catch (S) {
          X(e, e.return, S);
        }
      }
      break;
    case 1:
      (Oe(t, e), He(e), r & 512 && n !== null && nn(n, n.return));
      break;
    case 5:
      if (
        (Oe(t, e),
        He(e),
        r & 512 && n !== null && nn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Gn(l, "");
        } catch (S) {
          X(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            (s === "input" && o.type === "radio" && o.name != null && Eu(l, o),
              go(s, i));
            var f = go(s, o);
            for (i = 0; i < u.length; i += 2) {
              var h = u[i],
                g = u[i + 1];
              h === "style"
                ? Lu(l, g)
                : h === "dangerouslySetInnerHTML"
                  ? _u(l, g)
                  : h === "children"
                    ? Gn(l, g)
                    : ri(l, h, g, f);
            }
            switch (s) {
              case "input":
                co(l, o);
                break;
              case "textarea":
                Cu(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? ln(l, !!o.multiple, v, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? ln(l, !!o.multiple, o.defaultValue, !0)
                      : ln(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[nr] = o;
          } catch (S) {
            X(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((Oe(t, e), He(e), r & 4)) {
        if (e.stateNode === null) throw Error(x(162));
        ((l = e.stateNode), (o = e.memoizedProps));
        try {
          l.nodeValue = o;
        } catch (S) {
          X(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (Oe(t, e), He(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Jn(t.containerInfo);
        } catch (S) {
          X(e, e.return, S);
        }
      break;
    case 4:
      (Oe(t, e), He(e));
      break;
    case 13:
      (Oe(t, e),
        He(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Oi = Z())),
        r & 4 && Ks(e));
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ce = (f = ce) || h), Oe(t, e), (ce = f)) : Oe(t, e),
        He(e),
        r & 8192)
      ) {
        if (
          ((f = e.memoizedState !== null),
          (e.stateNode.isHidden = f) && !h && e.mode & 1)
        )
          for (C = e, h = e.child; h !== null; ) {
            for (g = C = h; C !== null; ) {
              switch (((m = C), (v = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Hn(4, m, m.return);
                  break;
                case 1:
                  nn(m, m.return);
                  var w = m.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    ((r = m), (n = m.return));
                    try {
                      ((t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount());
                    } catch (S) {
                      X(r, n, S);
                    }
                  }
                  break;
                case 5:
                  nn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Ys(g);
                    continue;
                  }
              }
              v !== null ? ((v.return = m), (C = v)) : Ys(g);
            }
            h = h.sibling;
          }
        e: for (h = null, g = e; ; ) {
          if (g.tag === 5) {
            if (h === null) {
              h = g;
              try {
                ((l = g.stateNode),
                  f
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = g.stateNode),
                      (u = g.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = Pu("display", i))));
              } catch (S) {
                X(e, e.return, S);
              }
            }
          } else if (g.tag === 6) {
            if (h === null)
              try {
                g.stateNode.nodeValue = f ? "" : g.memoizedProps;
              } catch (S) {
                X(e, e.return, S);
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
            (h === g && (h = null), (g = g.return));
          }
          (h === g && (h = null),
            (g.sibling.return = g.return),
            (g = g.sibling));
        }
      }
      break;
    case 19:
      (Oe(t, e), He(e), r & 4 && Ks(e));
      break;
    case 21:
      break;
    default:
      (Oe(t, e), He(e));
  }
}
function He(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ec(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Gn(l, ""), (r.flags &= -33));
          var o = Qs(e);
          Ko(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = Qs(e);
          Qo(e, s, i);
          break;
        default:
          throw Error(x(161));
      }
    } catch (u) {
      X(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Df(e, t, n) {
  ((C = e), rc(e));
}
function rc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Lr;
      if (!i) {
        var s = l.alternate,
          u = (s !== null && s.memoizedState !== null) || ce;
        s = Lr;
        var f = ce;
        if (((Lr = i), (ce = u) && !f))
          for (C = l; C !== null; )
            ((i = C),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Xs(l)
                : u !== null
                  ? ((u.return = i), (C = u))
                  : Xs(l));
        for (; o !== null; ) ((C = o), rc(o), (o = o.sibling));
        ((C = l), (Lr = s), (ce = f));
      }
      Gs(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (C = o)) : Gs(e);
  }
}
function Gs(e) {
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
              ce || Cl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ce)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Fe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && Ts(t, o, r);
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
                Ts(t, i, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
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
                var f = t.alternate;
                if (f !== null) {
                  var h = f.memoizedState;
                  if (h !== null) {
                    var g = h.dehydrated;
                    g !== null && Jn(g);
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
              throw Error(x(163));
          }
        ce || (t.flags & 512 && Wo(t));
      } catch (m) {
        X(t, t.return, m);
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
function Ys(e) {
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
function Xs(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Cl(4, t);
          } catch (u) {
            X(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              X(t, l, u);
            }
          }
          var o = t.return;
          try {
            Wo(t);
          } catch (u) {
            X(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Wo(t);
          } catch (u) {
            X(t, i, u);
          }
      }
    } catch (u) {
      X(t, t.return, u);
    }
    if (t === e) {
      C = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      ((s.return = t.return), (C = s));
      break;
    }
    C = t.return;
  }
}
var If = Math.ceil,
  cl = ot.ReactCurrentDispatcher,
  Mi = ot.ReactCurrentOwner,
  Ie = ot.ReactCurrentBatchConfig,
  R = 0,
  le = null,
  q = null,
  ie = 0,
  Ne = 0,
  rn = Et(0),
  ne = 0,
  ur = null,
  Ut = 0,
  jl = 0,
  Ri = 0,
  Wn = null,
  ye = null,
  Oi = 0,
  yn = 1 / 0,
  Ze = null,
  dl = !1,
  Go = null,
  vt = null,
  zr = !1,
  ft = null,
  fl = 0,
  Qn = 0,
  Yo = null,
  Br = -1,
  Hr = 0;
function pe() {
  return R & 6 ? Z() : Br !== -1 ? Br : (Br = Z());
}
function xt(e) {
  return e.mode & 1
    ? R & 2 && ie !== 0
      ? ie & -ie
      : gf.transition !== null
        ? (Hr === 0 && (Hr = Vu()), Hr)
        : ((e = U),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Yu(e.type))),
          e)
    : 1;
}
function Ve(e, t, n, r) {
  if (50 < Qn) throw ((Qn = 0), (Yo = null), Error(x(185)));
  (dr(e, n, r),
    (!(R & 2) || e !== le) &&
      (e === le && (!(R & 2) && (jl |= n), ne === 4 && ct(e, ie)),
      Se(e, r),
      n === 1 && R === 0 && !(t.mode & 1) && ((yn = Z() + 500), kl && Ct())));
}
function Se(e, t) {
  var n = e.callbackNode;
  hd(e, t);
  var r = Xr(e, e === le ? ie : 0);
  if (r === 0)
    (n !== null && ls(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ls(n), t === 1))
      (e.tag === 0 ? hf(Zs.bind(null, e)) : pa(Zs.bind(null, e)),
        df(function () {
          !(R & 6) && Ct();
        }),
        (n = null));
    else {
      switch (Bu(r)) {
        case 1:
          n = ui;
          break;
        case 4:
          n = $u;
          break;
        case 16:
          n = Yr;
          break;
        case 536870912:
          n = Au;
          break;
        default:
          n = Yr;
      }
      n = dc(n, lc.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function lc(e, t) {
  if (((Br = -1), (Hr = 0), R & 6)) throw Error(x(327));
  var n = e.callbackNode;
  if (cn() && e.callbackNode !== n) return null;
  var r = Xr(e, e === le ? ie : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = pl(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var o = ic();
    (le !== e || ie !== t) && ((Ze = null), (yn = Z() + 500), It(e, t));
    do
      try {
        Of();
        break;
      } catch (s) {
        oc(e, s);
      }
    while (!0);
    (Si(),
      (cl.current = o),
      (R = l),
      q !== null ? (t = 0) : ((le = null), (ie = 0), (t = ne)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = So(e)), l !== 0 && ((r = l), (t = Xo(e, l)))), t === 1)
    )
      throw ((n = ur), It(e, 0), ct(e, r), Se(e, Z()), n);
    if (t === 6) ct(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Mf(l) &&
          ((t = pl(e, r)),
          t === 2 && ((o = So(e)), o !== 0 && ((r = o), (t = Xo(e, o)))),
          t === 1))
      )
        throw ((n = ur), It(e, 0), ct(e, r), Se(e, Z()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          Pt(e, ye, Ze);
          break;
        case 3:
          if (
            (ct(e, r), (r & 130023424) === r && ((t = Oi + 500 - Z()), 10 < t))
          ) {
            if (Xr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              (pe(), (e.pingedLanes |= e.suspendedLanes & l));
              break;
            }
            e.timeoutHandle = Lo(Pt.bind(null, e, ye, Ze), t);
            break;
          }
          Pt(e, ye, Ze);
          break;
        case 4:
          if ((ct(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ae(r);
            ((o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o));
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
                          : 1960 * If(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Lo(Pt.bind(null, e, ye, Ze), r);
            break;
          }
          Pt(e, ye, Ze);
          break;
        case 5:
          Pt(e, ye, Ze);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return (Se(e, Z()), e.callbackNode === n ? lc.bind(null, e) : null);
}
function Xo(e, t) {
  var n = Wn;
  return (
    e.current.memoizedState.isDehydrated && (It(e, t).flags |= 256),
    (e = pl(e, t)),
    e !== 2 && ((t = ye), (ye = n), t !== null && Zo(t)),
    e
  );
}
function Zo(e) {
  ye === null ? (ye = e) : ye.push.apply(ye, e);
}
function Mf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Be(o(), l)) return !1;
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
function ct(e, t) {
  for (
    t &= ~Ri,
      t &= ~jl,
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
function Zs(e) {
  if (R & 6) throw Error(x(327));
  cn();
  var t = Xr(e, 0);
  if (!(t & 1)) return (Se(e, Z()), null);
  var n = pl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = So(e);
    r !== 0 && ((t = r), (n = Xo(e, r)));
  }
  if (n === 1) throw ((n = ur), It(e, 0), ct(e, t), Se(e, Z()), n);
  if (n === 6) throw Error(x(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Pt(e, ye, Ze),
    Se(e, Z()),
    null
  );
}
function Fi(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    ((R = n), R === 0 && ((yn = Z() + 500), kl && Ct()));
  }
}
function $t(e) {
  ft !== null && ft.tag === 0 && !(R & 6) && cn();
  var t = R;
  R |= 1;
  var n = Ie.transition,
    r = U;
  try {
    if (((Ie.transition = null), (U = 1), e)) return e();
  } finally {
    ((U = r), (Ie.transition = n), (R = t), !(R & 6) && Ct());
  }
}
function Ui() {
  ((Ne = rn.current), W(rn));
}
function It(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), cf(n)), q !== null))
    for (n = q.return; n !== null; ) {
      var r = n;
      switch ((vi(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && el());
          break;
        case 3:
          (hn(), W(xe), W(de), _i());
          break;
        case 5:
          ji(r);
          break;
        case 4:
          hn();
          break;
        case 13:
          W(K);
          break;
        case 19:
          W(K);
          break;
        case 10:
          ki(r.type._context);
          break;
        case 22:
        case 23:
          Ui();
      }
      n = n.return;
    }
  if (
    ((le = e),
    (q = e = wt(e.current, null)),
    (ie = Ne = t),
    (ne = 0),
    (ur = null),
    (Ri = jl = Ut = 0),
    (ye = Wn = null),
    zt !== null)
  ) {
    for (t = 0; t < zt.length; t++)
      if (((n = zt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          ((o.next = l), (r.next = i));
        }
        n.pending = r;
      }
    zt = null;
  }
  return e;
}
function oc(e, t) {
  do {
    var n = q;
    try {
      if ((Si(), ($r.current = al), ul)) {
        for (var r = G.memoizedState; r !== null; ) {
          var l = r.queue;
          (l !== null && (l.pending = null), (r = r.next));
        }
        ul = !1;
      }
      if (
        ((Ft = 0),
        (re = te = G = null),
        (Bn = !1),
        (or = 0),
        (Mi.current = null),
        n === null || n.return === null)
      ) {
        ((ne = 1), (ur = t), (q = null));
        break;
      }
      e: {
        var o = e,
          i = n.return,
          s = n,
          u = t;
        if (
          ((t = ie),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var f = u,
            h = s,
            g = h.tag;
          if (!(h.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var m = h.alternate;
            m
              ? ((h.updateQueue = m.updateQueue),
                (h.memoizedState = m.memoizedState),
                (h.lanes = m.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var v = Fs(i);
          if (v !== null) {
            ((v.flags &= -257),
              Us(v, i, s, o, t),
              v.mode & 1 && Os(o, f, t),
              (t = v),
              (u = f));
            var w = t.updateQueue;
            if (w === null) {
              var S = new Set();
              (S.add(u), (t.updateQueue = S));
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              (Os(o, f, t), $i());
              break e;
            }
            u = Error(x(426));
          }
        } else if (Q && s.mode & 1) {
          var O = Fs(i);
          if (O !== null) {
            (!(O.flags & 65536) && (O.flags |= 256),
              Us(O, i, s, o, t),
              xi(gn(u, s)));
            break e;
          }
        }
        ((o = u = gn(u, s)),
          ne !== 4 && (ne = 2),
          Wn === null ? (Wn = [o]) : Wn.push(o),
          (o = i));
        do {
          switch (o.tag) {
            case 3:
              ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
              var d = Ba(o, u, t);
              zs(o, d);
              break e;
            case 1:
              s = u;
              var c = o.type,
                p = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (vt === null || !vt.has(p))))
              ) {
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var y = Ha(o, s, t);
                zs(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      uc(n);
    } catch (N) {
      ((t = N), q === n && n !== null && (q = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function ic() {
  var e = cl.current;
  return ((cl.current = al), e === null ? al : e);
}
function $i() {
  ((ne === 0 || ne === 3 || ne === 2) && (ne = 4),
    le === null || (!(Ut & 268435455) && !(jl & 268435455)) || ct(le, ie));
}
function pl(e, t) {
  var n = R;
  R |= 2;
  var r = ic();
  (le !== e || ie !== t) && ((Ze = null), It(e, t));
  do
    try {
      Rf();
      break;
    } catch (l) {
      oc(e, l);
    }
  while (!0);
  if ((Si(), (R = n), (cl.current = r), q !== null)) throw Error(x(261));
  return ((le = null), (ie = 0), ne);
}
function Rf() {
  for (; q !== null; ) sc(q);
}
function Of() {
  for (; q !== null && !id(); ) sc(q);
}
function sc(e) {
  var t = cc(e.alternate, e, Ne);
  ((e.memoizedProps = e.pendingProps),
    t === null ? uc(e) : (q = t),
    (Mi.current = null));
}
function uc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Lf(n, t)), n !== null)) {
        ((n.flags &= 32767), (q = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((ne = 6), (q = null));
        return;
      }
    } else if (((n = Pf(n, t, Ne)), n !== null)) {
      q = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      q = t;
      return;
    }
    q = t = e;
  } while (t !== null);
  ne === 0 && (ne = 5);
}
function Pt(e, t, n) {
  var r = U,
    l = Ie.transition;
  try {
    ((Ie.transition = null), (U = 1), Ff(e, t, n, r));
  } finally {
    ((Ie.transition = l), (U = r));
  }
  return null;
}
function Ff(e, t, n, r) {
  do cn();
  while (ft !== null);
  if (R & 6) throw Error(x(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(x(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var o = n.lanes | n.childLanes;
  if (
    (gd(e, o),
    e === le && ((q = le = null), (ie = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      zr ||
      ((zr = !0),
      dc(Yr, function () {
        return (cn(), null);
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ((o = Ie.transition), (Ie.transition = null));
    var i = U;
    U = 1;
    var s = R;
    ((R |= 4),
      (Mi.current = null),
      Tf(e, n),
      nc(n, e),
      nf(_o),
      (Zr = !!jo),
      (_o = jo = null),
      (e.current = n),
      Df(n),
      sd(),
      (R = s),
      (U = i),
      (Ie.transition = o));
  } else e.current = n;
  if (
    (zr && ((zr = !1), (ft = e), (fl = l)),
    (o = e.pendingLanes),
    o === 0 && (vt = null),
    cd(n.stateNode),
    Se(e, Z()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
  if (dl) throw ((dl = !1), (e = Go), (Go = null), e);
  return (
    fl & 1 && e.tag !== 0 && cn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Yo ? Qn++ : ((Qn = 0), (Yo = e))) : (Qn = 0),
    Ct(),
    null
  );
}
function cn() {
  if (ft !== null) {
    var e = Bu(fl),
      t = Ie.transition,
      n = U;
    try {
      if (((Ie.transition = null), (U = 16 > e ? 16 : e), ft === null))
        var r = !1;
      else {
        if (((e = ft), (ft = null), (fl = 0), R & 6)) throw Error(x(331));
        var l = R;
        for (R |= 4, C = e.current; C !== null; ) {
          var o = C,
            i = o.child;
          if (C.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var f = s[u];
                for (C = f; C !== null; ) {
                  var h = C;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hn(8, h, o);
                  }
                  var g = h.child;
                  if (g !== null) ((g.return = h), (C = g));
                  else
                    for (; C !== null; ) {
                      h = C;
                      var m = h.sibling,
                        v = h.return;
                      if ((ba(h), h === f)) {
                        C = null;
                        break;
                      }
                      if (m !== null) {
                        ((m.return = v), (C = m));
                        break;
                      }
                      C = v;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var O = S.sibling;
                    ((S.sibling = null), (S = O));
                  } while (S !== null);
                }
              }
              C = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) ((i.return = o), (C = i));
          else
            e: for (; C !== null; ) {
              if (((o = C), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Hn(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                ((d.return = o.return), (C = d));
                break e;
              }
              C = o.return;
            }
        }
        var c = e.current;
        for (C = c; C !== null; ) {
          i = C;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) ((p.return = i), (C = p));
          else
            e: for (i = c; C !== null; ) {
              if (((s = C), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cl(9, s);
                  }
                } catch (N) {
                  X(s, s.return, N);
                }
              if (s === i) {
                C = null;
                break e;
              }
              var y = s.sibling;
              if (y !== null) {
                ((y.return = s.return), (C = y));
                break e;
              }
              C = s.return;
            }
        }
        if (
          ((R = l), Ct(), Ke && typeof Ke.onPostCommitFiberRoot == "function")
        )
          try {
            Ke.onPostCommitFiberRoot(yl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((U = n), (Ie.transition = t));
    }
  }
  return !1;
}
function Js(e, t, n) {
  ((t = gn(n, t)),
    (t = Ba(e, t, 1)),
    (e = yt(e, t, 1)),
    (t = pe()),
    e !== null && (dr(e, 1, t), Se(e, t)));
}
function X(e, t, n) {
  if (e.tag === 3) Js(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Js(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (vt === null || !vt.has(r)))
        ) {
          ((e = gn(n, e)),
            (e = Ha(t, e, 1)),
            (t = yt(t, e, 1)),
            (e = pe()),
            t !== null && (dr(t, 1, e), Se(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function Uf(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = pe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    le === e &&
      (ie & n) === n &&
      (ne === 4 || (ne === 3 && (ie & 130023424) === ie && 500 > Z() - Oi)
        ? It(e, 0)
        : (Ri |= n)),
    Se(e, t));
}
function ac(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = wr), (wr <<= 1), !(wr & 130023424) && (wr = 4194304))
      : (t = 1));
  var n = pe();
  ((e = rt(e, t)), e !== null && (dr(e, t, n), Se(e, n)));
}
function $f(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), ac(e, n));
}
function Af(e, t) {
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
      throw Error(x(314));
  }
  (r !== null && r.delete(t), ac(e, n));
}
var cc;
cc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || xe.current) ve = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((ve = !1), _f(e, t, n));
      ve = !!(e.flags & 131072);
    }
  else ((ve = !1), Q && t.flags & 1048576 && ma(t, rl, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Vr(e, t), (e = t.pendingProps));
      var l = fn(t, de.current);
      (an(t, n), (l = Li(null, t, r, e, l, n)));
      var o = zi();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            we(r) ? ((o = !0), tl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ei(t),
            (l.updater = El),
            (t.stateNode = l),
            (l._reactInternals = t),
            Oo(t, r, e, n),
            (t = $o(null, t, r, !0, o, n)))
          : ((t.tag = 0), Q && o && yi(t), fe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Vr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Bf(r)),
          (e = Fe(r, e)),
          l)
        ) {
          case 0:
            t = Uo(null, t, r, e, n);
            break e;
          case 1:
            t = Vs(null, t, r, e, n);
            break e;
          case 11:
            t = $s(null, t, r, e, n);
            break e;
          case 14:
            t = As(null, t, r, Fe(r.type, e), n);
            break e;
        }
        throw Error(x(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Fe(r, l)),
        Uo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Fe(r, l)),
        Vs(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ga(t), e === null)) throw Error(x(387));
        ((r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          wa(e, t),
          il(t, r, null, n));
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
            ((l = gn(Error(x(423)), t)), (t = Bs(e, t, r, n, l)));
            break e;
          } else if (r !== l) {
            ((l = gn(Error(x(424)), t)), (t = Bs(e, t, r, n, l)));
            break e;
          } else
            for (
              Ee = gt(t.stateNode.containerInfo.firstChild),
                Ce = t,
                Q = !0,
                $e = null,
                n = va(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((pn(), r === l)) {
            t = lt(e, t, n);
            break e;
          }
          fe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Sa(t),
        e === null && Io(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Po(r, l) ? (i = null) : o !== null && Po(r, o) && (t.flags |= 32),
        Ka(e, t),
        fe(e, t, i, n),
        t.child
      );
    case 6:
      return (e === null && Io(t), null);
    case 13:
      return Ya(e, t, n);
    case 4:
      return (
        Ci(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = mn(t, null, r, n)) : fe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Fe(r, l)),
        $s(e, t, r, l, n)
      );
    case 7:
      return (fe(e, t, t.pendingProps, n), t.child);
    case 8:
      return (fe(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (fe(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          V(ll, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Be(o.value, i)) {
            if (o.children === l.children && !xe.current) {
              t = lt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                i = o.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      ((u = et(-1, n & -n)), (u.tag = 2));
                      var f = o.updateQueue;
                      if (f !== null) {
                        f = f.shared;
                        var h = f.pending;
                        (h === null
                          ? (u.next = u)
                          : ((u.next = h.next), (h.next = u)),
                          (f.pending = u));
                      }
                    }
                    ((o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      Mo(o.return, n, t),
                      (s.lanes |= n));
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(x(341));
                ((i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  Mo(i, n, t),
                  (i = o.sibling));
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    ((o.return = i.return), (i = o));
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        (fe(e, t, l.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        an(t, n),
        (l = Me(l)),
        (r = r(l)),
        (t.flags |= 1),
        fe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Fe(r, t.pendingProps)),
        (l = Fe(r.type, l)),
        As(e, t, r, l, n)
      );
    case 15:
      return Wa(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Fe(r, l)),
        Vr(e, t),
        (t.tag = 1),
        we(r) ? ((e = !0), tl(t)) : (e = !1),
        an(t, n),
        Va(t, r, l),
        Oo(t, r, l, n),
        $o(null, t, r, !0, e, n)
      );
    case 19:
      return Xa(e, t, n);
    case 22:
      return Qa(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function dc(e, t) {
  return Uu(e, t);
}
function Vf(e, t, n, r) {
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
function De(e, t, n, r) {
  return new Vf(e, t, n, r);
}
function Ai(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Bf(e) {
  if (typeof e == "function") return Ai(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === oi)) return 11;
    if (e === ii) return 14;
  }
  return 2;
}
function wt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = De(e.tag, t, e.key, e.mode)),
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
function Wr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Ai(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Gt:
        return Mt(n.children, l, o, t);
      case li:
        ((i = 8), (l |= 8));
        break;
      case oo:
        return (
          (e = De(12, n, t, l | 2)),
          (e.elementType = oo),
          (e.lanes = o),
          e
        );
      case io:
        return ((e = De(13, n, t, l)), (e.elementType = io), (e.lanes = o), e);
      case so:
        return ((e = De(19, n, t, l)), (e.elementType = so), (e.lanes = o), e);
      case Su:
        return _l(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case xu:
              i = 10;
              break e;
            case wu:
              i = 9;
              break e;
            case oi:
              i = 11;
              break e;
            case ii:
              i = 14;
              break e;
            case st:
              ((i = 16), (r = null));
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = De(i, n, t, l)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = o),
    t
  );
}
function Mt(e, t, n, r) {
  return ((e = De(7, e, r, t)), (e.lanes = n), e);
}
function _l(e, t, n, r) {
  return (
    (e = De(22, e, r, t)),
    (e.elementType = Su),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function no(e, t, n) {
  return ((e = De(6, e, null, t)), (e.lanes = n), e);
}
function ro(e, t, n) {
  return (
    (t = De(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Hf(e, t, n, r, l) {
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
    (this.eventTimes = Fl(0)),
    (this.expirationTimes = Fl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Fl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null));
}
function Vi(e, t, n, r, l, o, i, s, u) {
  return (
    (e = new Hf(e, t, n, s, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = De(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ei(o),
    e
  );
}
function Wf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Kt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function fc(e) {
  if (!e) return kt;
  e = e._reactInternals;
  e: {
    if (Vt(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (we(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (we(n)) return fa(e, n, t);
  }
  return t;
}
function pc(e, t, n, r, l, o, i, s, u) {
  return (
    (e = Vi(n, r, !0, e, l, o, i, s, u)),
    (e.context = fc(null)),
    (n = e.current),
    (r = pe()),
    (l = xt(n)),
    (o = et(r, l)),
    (o.callback = t ?? null),
    yt(n, o, l),
    (e.current.lanes = l),
    dr(e, l, r),
    Se(e, r),
    e
  );
}
function Pl(e, t, n, r) {
  var l = t.current,
    o = pe(),
    i = xt(l);
  return (
    (n = fc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = et(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = yt(l, t, i)),
    e !== null && (Ve(e, l, i, o), Ur(e, l, i)),
    i
  );
}
function ml(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function qs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Bi(e, t) {
  (qs(e, t), (e = e.alternate) && qs(e, t));
}
function Qf() {
  return null;
}
var mc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Hi(e) {
  this._internalRoot = e;
}
Ll.prototype.render = Hi.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  Pl(e, t, null, null);
};
Ll.prototype.unmount = Hi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ($t(function () {
      Pl(null, e, null, null);
    }),
      (t[nt] = null));
  }
};
function Ll(e) {
  this._internalRoot = e;
}
Ll.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Qu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < at.length && t !== 0 && t < at[n].priority; n++);
    (at.splice(n, 0, e), n === 0 && Gu(e));
  }
};
function Wi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function zl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function bs() {}
function Kf(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var f = ml(i);
        o.call(f);
      };
    }
    var i = pc(t, r, e, 0, null, !1, !1, "", bs);
    return (
      (e._reactRootContainer = i),
      (e[nt] = i.current),
      er(e.nodeType === 8 ? e.parentNode : e),
      $t(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var f = ml(u);
      s.call(f);
    };
  }
  var u = Vi(e, 0, !1, null, null, !1, !1, "", bs);
  return (
    (e._reactRootContainer = u),
    (e[nt] = u.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    $t(function () {
      Pl(t, u, n, r);
    }),
    u
  );
}
function Tl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var s = l;
      l = function () {
        var u = ml(i);
        s.call(u);
      };
    }
    Pl(t, i, e, l);
  } else i = Kf(n, t, e, l, r);
  return ml(i);
}
Hu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Rn(t.pendingLanes);
        n !== 0 &&
          (ai(t, n | 1), Se(t, Z()), !(R & 6) && ((yn = Z() + 500), Ct()));
      }
      break;
    case 13:
      ($t(function () {
        var r = rt(e, 1);
        if (r !== null) {
          var l = pe();
          Ve(r, e, 1, l);
        }
      }),
        Bi(e, 1));
  }
};
ci = function (e) {
  if (e.tag === 13) {
    var t = rt(e, 134217728);
    if (t !== null) {
      var n = pe();
      Ve(t, e, 134217728, n);
    }
    Bi(e, 134217728);
  }
};
Wu = function (e) {
  if (e.tag === 13) {
    var t = xt(e),
      n = rt(e, t);
    if (n !== null) {
      var r = pe();
      Ve(n, e, t, r);
    }
    Bi(e, t);
  }
};
Qu = function () {
  return U;
};
Ku = function (e, t) {
  var n = U;
  try {
    return ((U = e), t());
  } finally {
    U = n;
  }
};
vo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((co(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = Sl(r);
            if (!l) throw Error(x(90));
            (Nu(r), co(r, l));
          }
        }
      }
      break;
    case "textarea":
      Cu(e, n);
      break;
    case "select":
      ((t = n.value), t != null && ln(e, !!n.multiple, t, !1));
  }
};
Du = Fi;
Iu = $t;
var Gf = { usingClientEntryPoint: !1, Events: [pr, Jt, Sl, zu, Tu, Fi] },
  Dn = {
    findFiberByHostInstance: Lt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Yf = {
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
    currentDispatcherRef: ot.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Ou(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Dn.findFiberByHostInstance || Qf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Tr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Tr.isDisabled && Tr.supportsFiber)
    try {
      ((yl = Tr.inject(Yf)), (Ke = Tr));
    } catch {}
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gf;
_e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Wi(t)) throw Error(x(200));
  return Wf(e, t, null, n);
};
_e.createRoot = function (e, t) {
  if (!Wi(e)) throw Error(x(299));
  var n = !1,
    r = "",
    l = mc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Vi(e, 1, !1, null, null, n, !1, r, l)),
    (e[nt] = t.current),
    er(e.nodeType === 8 ? e.parentNode : e),
    new Hi(t)
  );
};
_e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(x(188))
      : ((e = Object.keys(e).join(",")), Error(x(268, e)));
  return ((e = Ou(t)), (e = e === null ? null : e.stateNode), e);
};
_e.flushSync = function (e) {
  return $t(e);
};
_e.hydrate = function (e, t, n) {
  if (!zl(t)) throw Error(x(200));
  return Tl(null, e, t, !0, n);
};
_e.hydrateRoot = function (e, t, n) {
  if (!Wi(e)) throw Error(x(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = mc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = pc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[nt] = t.current),
    er(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l));
  return new Ll(t);
};
_e.render = function (e, t, n) {
  if (!zl(t)) throw Error(x(200));
  return Tl(null, e, t, !1, n);
};
_e.unmountComponentAtNode = function (e) {
  if (!zl(e)) throw Error(x(40));
  return e._reactRootContainer
    ? ($t(function () {
        Tl(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[nt] = null));
        });
      }),
      !0)
    : !1;
};
_e.unstable_batchedUpdates = Fi;
_e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!zl(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return Tl(e, t, n, !1, r);
};
_e.version = "18.3.1-next-f1338f8080-20240426";
function hc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hc);
    } catch (e) {
      console.error(e);
    }
}
(hc(), (hu.exports = _e));
var gc = hu.exports,
  yc,
  eu = gc;
((yc = eu.createRoot), eu.hydrateRoot);
const Xf = {
    zh: {
      "app.title": "人員管理",
      "login.title": "系統登入",
      "login.username": "帳號",
      "login.password": "密碼",
      "login.button": "登入",
      "login.processing": "登入中...",
      "button.logout": "登出",
      "button.home": "回到首頁",
      "footer.copyright": "Copyright ©2025 鴻森智能科技",
      "platform.title": "智慧系統平台",
      "personnel.staffId": "人員編號",
      "personnel.name": "姓名",
      "personnel.department": "單位",
      "personnel.licenseNumber": "藥師證字號",
      "personnel.permissionLevel": "權限等級",
      "personnel.cardNumber": "卡號",
      "personnel.color": "顏色",
      "personnel.tableTitle": "人員資料表",
      "personnel.addStaff": "新增人員",
      "personnel.searchPlaceholder": "請輸入搜尋關鍵字",
      "personnel.totalCount": "共 {count} 人",
      "personnel.editTitle": "編輯人員資料",
      "personnel.addTitle": "新增人員資料",
      "personnel.deleteStaff": "刪除人員",
      "personnel.deleteSelected": "刪除({count})",
      "personnel.cancel": "取消",
      "personnel.deleteSuccess": "成功刪除 {count} 位人員",
      "personnel.deleteError": "刪除人員失敗",
    },
    en: {
      "app.title": "Staff Management",
      "login.title": "System Login",
      "login.username": "Username",
      "login.password": "Password",
      "login.button": "Login",
      "login.processing": "Logging in...",
      "button.logout": "Logout",
      "button.home": "Home",
      "footer.copyright": "Copyright ©2025 鴻森智能科技",
      "platform.title": "Smart System Platform",
      "personnel.staffId": "Staff ID",
      "personnel.name": "Name",
      "personnel.department": "Department",
      "personnel.licenseNumber": "License Number",
      "personnel.permissionLevel": "Permission Level",
      "personnel.cardNumber": "Card Number",
      "personnel.color": "Color",
      "personnel.tableTitle": "Staff Information Table",
      "personnel.addStaff": "Add Staff",
      "personnel.searchPlaceholder": "Please enter a keyword",
      "personnel.totalCount": "Total: {count} people",
      "personnel.editTitle": "Edit Staff Information",
      "personnel.addTitle": "Add Staff Information",
      "personnel.deleteStaff": "Delete Staff",
      "personnel.deleteSelected": "Delete({count})",
      "personnel.cancel": "Cancel",
      "personnel.deleteSuccess": "Successfully deleted {count} staff",
      "personnel.deleteError": "Failed to delete staff",
    },
  },
  vc = z.createContext(void 0),
  Zf = ({ children: e }) => {
    const [t, n] = z.useState("zh"),
      r = () => {
        n((o) => (o === "zh" ? "en" : "zh"));
      },
      l = (o, i) => {
        let s = Xf[t][o] || o;
        return (
          i &&
            Object.entries(i).forEach(([u, f]) => {
              s = s.replace(`{${u}}`, String(f));
            }),
          s
        );
      };
    return a.jsx(vc.Provider, {
      value: { language: t, toggleLanguage: r, t: l },
      children: e,
    });
  },
  jt = () => {
    const e = z.useContext(vc);
    if (e === void 0)
      throw new Error("useLanguage must be used within a LanguageProvider");
    return e;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Jf = {
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
 */ const qf = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  ge = (e, t) => {
    const n = z.forwardRef(
      (
        {
          color: r = "currentColor",
          size: l = 24,
          strokeWidth: o = 2,
          absoluteStrokeWidth: i,
          className: s = "",
          children: u,
          ...f
        },
        h,
      ) =>
        z.createElement(
          "svg",
          {
            ref: h,
            ...Jf,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: i ? (Number(o) * 24) / Number(l) : o,
            className: ["lucide", `lucide-${qf(e)}`, s].join(" "),
            ...f,
          },
          [
            ...t.map(([g, m]) => z.createElement(g, m)),
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
 */ const Qi = ge("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bf = ge("CheckCircle2", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ep = ge("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tp = ge("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const np = ge("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rp = ge("EyeOff", [
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
 */ const lp = ge("Eye", [
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
 */ const op = ge("Globe", [
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
 */ const ip = ge("Layers", [
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
 */ const sp = ge("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const up = ge("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ap = ge("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tu = ge("Trash2", [
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
 */ const cp = ge("Users", [
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
 */ const xc = ge("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  dp = () => {
    const { language: e, toggleLanguage: t } = jt();
    return a.jsxs("button", {
      onClick: t,
      className:
        "inline-flex items-center px-2 sm:px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      title: e === "zh" ? "繁體中文" : "English",
      children: [
        a.jsx(op, { className: "h-4 w-4" }),
        a.jsx("span", {
          className: "ml-2 hidden sm:inline",
          children: e === "zh" ? "繁體中文" : "English",
        }),
      ],
    });
  },
  fp = ({ title: e }) =>
    a.jsx("h1", {
      className: "text-2xl md:text-3xl font-semibold text-gray-800",
      children: e,
    }),
  wc = (e) => {
    const t = e.find((n) => n.name === "人員管理");
    return (t == null ? void 0 : t.state) === !0;
  },
  pp = (e) =>
    wc(e.Permissions)
      ? (sessionStorage.setItem("user_session", JSON.stringify(e)), !0)
      : !1,
  Sc = () => {
    const e = sessionStorage.getItem("user_session");
    if (!e) return null;
    try {
      const t = JSON.parse(e);
      return !t.GUID || !t.ID || !t.Name || !wc(t.Permissions)
        ? (hl(), null)
        : t;
    } catch {
      return (hl(), null);
    }
  },
  hl = () => {
    sessionStorage.removeItem("user_session");
  },
  mp = () => {
    const e = Sc();
    if (!e) return !1;
    const t = new Date(e.loginTime).getTime();
    return (new Date().getTime() - t) / (1e3 * 60 * 60) > 24 ? (hl(), !1) : !0;
  },
  hp = () => {
    const e = Sc();
    return e
      ? a.jsxs("p", {
          className: "text-sm text-gray-600",
          children: [e.Name, " - ", e.Employer],
        })
      : null;
  },
  gp = ({ onLogout: e }) => {
    const { t } = jt();
    return a.jsxs("button", {
      onClick: e,
      className:
        "inline-flex items-center px-2 sm:px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
      title: t("button.logout"),
      children: [
        a.jsx(sp, { className: "h-4 w-4" }),
        a.jsx("span", {
          className: "ml-2 hidden sm:inline",
          children: t("button.logout"),
        }),
      ],
    });
  };
let Dt = null;
const yp = async () => {
    if (Dt) return Dt;
    try {
      const e = await fetch("../config.txt");
      if (!e.ok) throw new Error("Failed to load configuration");
      return ((Dt = await e.json()), Dt);
    } catch (e) {
      throw (console.error("Error loading config:", e), e);
    }
  },
  vp = (e) => {
    if (!Dt) throw new Error("Configuration not loaded");
    return `${Dt.domain}${e}`;
  },
  xp = () => Dt,
  wp = () => {
    const { t: e } = jt(),
      t = () => {
        const n = xp();
        n != null &&
          n.homepage &&
          (window.location.href = `${n.homepage}/phar_system/frontpage/`);
      };
    return a.jsxs("button", {
      onClick: t,
      className:
        "p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors group relative",
      title: e("platform.title"),
      children: [
        a.jsx(ip, { size: 24 }),
        a.jsx("span", {
          className:
            "absolute left-1/2 -translate-x-1/2 -bottom-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
          children: e("platform.title"),
        }),
      ],
    });
  },
  Sp = ({ onLogout: e }) => {
    const { t } = jt();
    return a.jsx("header", {
      className: "bg-white",
      children: a.jsx("div", {
        className: "max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8",
        children: a.jsxs("div", {
          className: "flex justify-between items-center py-6",
          children: [
            a.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                a.jsx(wp, {}),
                a.jsxs("div", {
                  className: "flex flex-col",
                  children: [
                    a.jsx(fp, { title: t("app.title") }),
                    a.jsx(hp, {}),
                  ],
                }),
              ],
            }),
            a.jsxs("div", {
              className: "flex items-center gap-4",
              children: [a.jsx(dp, {}), a.jsx(gp, { onLogout: e })],
            }),
          ],
        }),
      }),
    });
  },
  kp = ({ className: e = "" }) => {
    const { t } = jt();
    return a.jsx("footer", {
      className: `fixed bottom-0 left-0 w-full bg-white py-2 shadow-inner border-t border-gray-200 z-50 ${e}`,
      children: a.jsx("div", {
        className: "max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8",
        children: a.jsx("p", {
          className: "text-center text-sm text-gray-600",
          children: t("footer.copyright"),
        }),
      }),
    });
  },
  ar = async (e, t = {}) => {
    const n = vp(e),
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
        o = await l.text();
      let i;
      try {
        i = JSON.parse(o);
      } catch (s) {
        throw (
          console.error("Failed to parse response as JSON:", s),
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
  Np = ({
    onLogin: e,
    className: t = "",
    title: n = "人員管理系統",
    logo: r,
  }) => {
    const [l, o] = z.useState(""),
      [i, s] = z.useState(""),
      [u, f] = z.useState(null),
      [h, g] = z.useState(!1),
      m = async (v) => {
        (v.preventDefault(), f(null), g(!0));
        try {
          const w = await ar("/api/session/login", {
            method: "POST",
            body: { Data: { ID: l, Password: i } },
          });
          if (w.Code === 200) {
            if (!pp(w.Data)) {
              f("無撥補建單權限，無法登入");
              return;
            }
            e();
          } else f(w.Result || "登入失敗，請檢查帳號密碼是否正確");
        } catch (w) {
          (console.error("Login error:", w),
            f(w instanceof Error ? w.message : "系統錯誤，請稍後再試"));
        } finally {
          g(!1);
        }
      };
    return a.jsx("div", {
      className: `min-h-screen bg-gray-100 flex items-center justify-center p-4 ${t}`,
      children: a.jsxs("div", {
        className: "bg-white rounded-lg shadow-md p-8 w-full max-w-md",
        children: [
          r &&
            a.jsx("div", {
              className: "mb-6 flex justify-center",
              children: r,
            }),
          a.jsx("h1", {
            className: "text-2xl font-bold text-center mb-8",
            children: n,
          }),
          u &&
            a.jsxs("div", {
              className:
                "mb-6 p-4 bg-red-100 text-red-700 rounded-md flex items-center gap-2",
              children: [
                a.jsx(Qi, { size: 20 }),
                a.jsx("span", { children: u }),
              ],
            }),
          a.jsxs("form", {
            onSubmit: m,
            className: "space-y-6",
            children: [
              a.jsxs("div", {
                children: [
                  a.jsx("label", {
                    htmlFor: "id",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "帳號",
                  }),
                  a.jsx("input", {
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
              a.jsxs("div", {
                children: [
                  a.jsx("label", {
                    htmlFor: "password",
                    className: "block text-sm font-medium text-gray-700 mb-1",
                    children: "密碼",
                  }),
                  a.jsx("input", {
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
              a.jsx("button", {
                type: "submit",
                disabled: h,
                className: `w-full py-2 px-4 rounded font-medium transition-colors duration-200 ${h ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"}`,
                children: h ? "登入中..." : "登入",
              }),
            ],
          }),
        ],
      }),
    });
  },
  nu = [
    { name: "綠色", nameEn: "Green", value: "0, 255, 0", color: "#00FF00" },
    { name: "紅色", nameEn: "Red", value: "255, 0, 0", color: "#FF0000" },
    { name: "藍色", nameEn: "Blue", value: "0, 0, 255", color: "#0000FF" },
    { name: "黃色", nameEn: "Yellow", value: "255, 255, 0", color: "#FFFF00" },
    { name: "橙色", nameEn: "Orange", value: "255, 165, 0", color: "#FFA500" },
  ],
  ru = ({
    isOpen: e,
    onClose: t,
    personnel: n,
    onSave: r,
    title: l = "編輯人員資料",
  }) => {
    var b;
    const { t: o, language: i } = jt(),
      [s, u] = z.useState(null),
      [f, h] = z.useState(!1),
      [g, m] = z.useState(""),
      [v, w] = z.useState([]),
      [S, O] = z.useState(!1),
      [d, c] = z.useState(!1),
      [p, y] = z.useState(null),
      N = async () => {
        O(!0);
        try {
          const P = await ar("/api/session/get_permission_index", {
            method: "POST",
            body: {},
          });
          if (P.Code === 200) {
            const ee = [...new Set(P.Data.map((Le) => Le.level))].sort();
            w(ee);
          } else
            (console.error("Failed to fetch permission levels:", P.Result),
              w(["01", "02", "03"]));
        } catch (P) {
          (console.error("Error fetching permission levels:", P),
            w(["01", "02", "03"]));
        } finally {
          O(!1);
        }
      };
    if (
      (z.useEffect(() => {
        e && (N(), y(null));
      }, [e]),
      z.useEffect(() => {
        n && (u({ ...n }), m(n.color));
      }, [n]),
      !e || !s)
    )
      return null;
    const k = (P, ee) => {
        u((Le) => (Le ? { ...Le, [P]: ee } : null));
      },
      _ = (P) => {
        (m(P), k("color", P));
      },
      j = async () => {
        if (s) {
          (c(!0), y(null));
          try {
            const P = {
                Data: [
                  {
                    GUID: s.GUID,
                    ID: s.ID,
                    name: s.name,
                    gender: s.gender,
                    password: s.password,
                    employer: s.employer,
                    license: s.license,
                    level: s.level,
                    color: s.color,
                    UID: s.UID,
                    barcode: s.barcode,
                    face_image: s.face_image,
                    finger_feature: s.finger_feature,
                    finger_ID: s.finger_ID,
                    open_access: s.open_access,
                  },
                ],
              },
              ee = await ar("/api/person_page/add", {
                method: "POST",
                body: P,
              });
            ee.Code === 200
              ? (r(s), t())
              : y(ee.Result || "儲存失敗，請稍後再試");
          } catch (P) {
            (console.error("Error saving personnel data:", P),
              y(P instanceof Error ? P.message : "系統錯誤，請稍後再試"));
          } finally {
            c(!1);
          }
        }
      },
      F = l === o("personnel.addTitle"),
      D = () =>
        i === "en"
          ? [
              { value: "男", label: "Male" },
              { value: "女", label: "Female" },
            ]
          : [
              { value: "男", label: "男" },
              { value: "女", label: "女" },
            ];
    return a.jsx("div", {
      className:
        "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
      children: a.jsxs("div", {
        className:
          "bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto",
        children: [
          a.jsxs("div", {
            className:
              "flex items-center justify-between p-6 border-b border-gray-200",
            children: [
              a.jsx("h2", {
                className: "text-xl font-semibold text-gray-900",
                children: l,
              }),
              a.jsx("button", {
                onClick: t,
                className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                disabled: d,
                children: a.jsx(xc, { size: 20, className: "text-gray-500" }),
              }),
            ],
          }),
          a.jsxs("div", {
            className: "p-6 space-y-6",
            children: [
              p &&
                a.jsx("div", {
                  className: "p-4 bg-red-50 border border-red-200 rounded-lg",
                  children: a.jsx("div", {
                    className: "flex items-center gap-3 text-red-700",
                    children: a.jsx("span", { children: p }),
                  }),
                }),
              a.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                  a.jsxs("div", {
                    children: [
                      a.jsxs("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: [
                          o("personnel.staffId"),
                          " ",
                          a.jsx("span", {
                            className: "text-red-500",
                            children: "*",
                          }),
                        ],
                      }),
                      a.jsx("input", {
                        type: "text",
                        value: s.ID,
                        onChange: (P) => k("ID", P.target.value),
                        className: `w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${F ? "" : "bg-gray-50"}`,
                        disabled: !F || d,
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsxs("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: [
                          o("personnel.name"),
                          " ",
                          a.jsx("span", {
                            className: "text-red-500",
                            children: "*",
                          }),
                        ],
                      }),
                      a.jsx("input", {
                        type: "text",
                        value: s.name,
                        onChange: (P) => k("name", P.target.value),
                        className:
                          "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                        disabled: d,
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                  a.jsxs("div", {
                    children: [
                      a.jsxs("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: [
                          i === "en" ? "Gender" : "性別",
                          " ",
                          a.jsx("span", {
                            className: "text-red-500",
                            children: "*",
                          }),
                        ],
                      }),
                      a.jsx("select", {
                        value: s.gender,
                        onChange: (P) => k("gender", P.target.value),
                        className:
                          "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                        disabled: d,
                        children: D().map((P) =>
                          a.jsx(
                            "option",
                            { value: P.value, children: P.label },
                            P.value,
                          ),
                        ),
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsxs("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: [
                          o("personnel.department"),
                          " ",
                          a.jsx("span", {
                            className: "text-red-500",
                            children: "*",
                          }),
                        ],
                      }),
                      a.jsx("input", {
                        type: "text",
                        value: s.employer,
                        onChange: (P) => k("employer", P.target.value),
                        className:
                          "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                        disabled: d,
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                  a.jsxs("div", {
                    children: [
                      a.jsx("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: o("personnel.licenseNumber"),
                      }),
                      a.jsx("input", {
                        type: "text",
                        value: s.license,
                        onChange: (P) => k("license", P.target.value),
                        className:
                          "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                        disabled: d,
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsxs("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: [
                          o("personnel.permissionLevel"),
                          " ",
                          a.jsx("span", {
                            className: "text-red-500",
                            children: "*",
                          }),
                        ],
                      }),
                      a.jsx("select", {
                        value: s.level,
                        onChange: (P) => k("level", P.target.value),
                        className:
                          "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                        disabled: S || d,
                        children: S
                          ? a.jsx("option", {
                              value: "",
                              children: i === "en" ? "Loading..." : "載入中...",
                            })
                          : v.map((P) =>
                              a.jsx("option", { value: P, children: P }, P),
                            ),
                      }),
                      S &&
                        a.jsx("p", {
                          className: "text-sm text-gray-500 mt-1",
                          children:
                            i === "en"
                              ? "Loading permission levels..."
                              : "正在載入權限等級...",
                        }),
                    ],
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                  a.jsxs("div", {
                    children: [
                      a.jsx("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: o("personnel.cardNumber"),
                      }),
                      a.jsx("input", {
                        type: "text",
                        value: s.UID,
                        onChange: (P) => k("UID", P.target.value),
                        className:
                          "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                        disabled: d,
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: i === "en" ? "Barcode" : "一維條碼",
                      }),
                      a.jsx("input", {
                        type: "text",
                        value: s.barcode,
                        onChange: (P) => k("barcode", P.target.value),
                        className:
                          "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                        disabled: d,
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                  a.jsxs("div", {
                    children: [
                      a.jsxs("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: [
                          o("personnel.color"),
                          " ",
                          a.jsx("span", {
                            className: "text-red-500",
                            children: "*",
                          }),
                        ],
                      }),
                      a.jsx("div", {
                        className: "flex gap-2 mb-2",
                        children: nu.map((P) =>
                          a.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => _(P.value),
                              className: `w-12 h-12 rounded-lg border-2 flex items-center justify-center transition-all ${g === P.value ? "border-gray-400 ring-2 ring-blue-500" : "border-gray-300 hover:border-gray-400"}`,
                              style: { backgroundColor: P.color },
                              title: i === "en" ? P.nameEn : P.name,
                              disabled: d,
                              children:
                                g === P.value &&
                                a.jsx(ep, {
                                  size: 20,
                                  className: "text-white drop-shadow-lg",
                                }),
                            },
                            P.value,
                          ),
                        ),
                      }),
                      a.jsxs("p", {
                        className: "text-sm text-gray-500",
                        children: [
                          i === "en" ? "Selected: " : "已選擇：",
                          ((b = nu.find((P) => P.value === g)) == null
                            ? void 0
                            : b[i === "en" ? "nameEn" : "name"]) ||
                            (i === "en" ? "Custom" : "自訂"),
                        ],
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsxs("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                        children: [
                          i === "en" ? "Password" : "密碼",
                          " ",
                          a.jsx("span", {
                            className: "text-red-500",
                            children: "*",
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        className: "relative",
                        children: [
                          a.jsx("input", {
                            type: f ? "text" : "password",
                            value: s.password,
                            onChange: (P) => k("password", P.target.value),
                            className:
                              "w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                            disabled: d,
                          }),
                          a.jsx("button", {
                            type: "button",
                            onClick: () => h(!f),
                            className:
                              "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",
                            disabled: d,
                            children: f
                              ? a.jsx(rp, { size: 20 })
                              : a.jsx(lp, { size: 20 }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          a.jsxs("div", {
            className: "flex justify-end gap-3 p-6 border-t border-gray-200",
            children: [
              a.jsx("button", {
                onClick: t,
                className:
                  "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",
                disabled: d,
                children: i === "en" ? "Cancel" : "取消",
              }),
              a.jsx("button", {
                onClick: j,
                disabled: d,
                className: `px-4 py-2 text-white rounded-lg transition-colors ${d ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`,
                children: d
                  ? a.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        a.jsx("div", {
                          className:
                            "animate-spin rounded-full h-4 w-4 border-b-2 border-white",
                        }),
                        i === "en" ? "Saving..." : "儲存中...",
                      ],
                    })
                  : i === "en"
                    ? "Save"
                    : "儲存",
              }),
            ],
          }),
        ],
      }),
    });
  },
  kc = ({ message: e, type: t = "success", onClose: n, duration: r = 3e3 }) => {
    z.useEffect(() => {
      const s = setTimeout(() => {
        n();
      }, r);
      return () => clearTimeout(s);
    }, [r, n]);
    const l =
        t === "success"
          ? {
              bg: "bg-green-50",
              text: "text-green-800",
              border: "border-green-200",
              icon: "text-green-500",
              hover: "text-green-600 hover:text-green-800",
            }
          : {
              bg: "bg-red-50",
              text: "text-red-800",
              border: "border-red-200",
              icon: "text-red-500",
              hover: "text-red-600 hover:text-red-800",
            },
      o = t === "success" ? bf : Qi,
      i = a.jsxs("div", {
        className: `fixed top-4 right-4 min-w-[200px] max-w-[400px] flex items-center gap-2 ${l.bg} ${l.text} px-4 py-3 rounded-lg shadow-xl border ${l.border} animate-slide-in`,
        style: { zIndex: 1e6 },
        children: [
          a.jsx(o, { size: 20, className: l.icon }),
          a.jsx("span", { className: "text-sm font-medium", children: e }),
          a.jsx("button", {
            onClick: n,
            className: `ml-2 ${l.hover} transition-colors duration-150`,
            children: a.jsx(xc, { size: 16 }),
          }),
        ],
      });
    return gc.createPortal(i, document.body);
  },
  Dr = 50,
  Ep = () => {
    const { t: e, language: t } = jt(),
      [n, r] = z.useState([]),
      [l, o] = z.useState([]),
      [i, s] = z.useState(!0),
      [u, f] = z.useState(null),
      [h, g] = z.useState(""),
      [m, v] = z.useState(t === "en" ? "Name" : "姓名"),
      [w, S] = z.useState(null),
      [O, d] = z.useState(!1),
      [c, p] = z.useState(!1),
      [y, N] = z.useState(1),
      [k, _] = z.useState(!1),
      [j, F] = z.useState(new Set()),
      [D, b] = z.useState(null);
    z.useEffect(() => {
      t === "en"
        ? m === "人員編號"
          ? v("Staff ID")
          : m === "姓名"
            ? v("Name")
            : m === "單位" && v("Department")
        : m === "Staff ID"
          ? v("人員編號")
          : m === "Name"
            ? v("姓名")
            : m === "Department" && v("單位");
    }, [t]);
    const P = async () => {
      (s(!0), f(null));
      try {
        const L = await ar("/api/person_page/get_all", {
          method: "POST",
          body: {},
        });
        L.Code === 200
          ? (r(L.Data), o(L.Data))
          : f(L.Result || "獲取人員資料失敗");
      } catch (L) {
        (console.error("Error fetching personnel data:", L),
          f("系統錯誤，請稍後再試"));
      } finally {
        s(!1);
      }
    };
    (z.useEffect(() => {
      P();
    }, []),
      z.useEffect(() => {
        if (!h) o(n);
        else {
          const L = n.filter((A) => {
            const $ = h.toLowerCase();
            switch (m) {
              case "人員編號":
              case "Staff ID":
                return A.ID.toLowerCase().includes($);
              case "姓名":
              case "Name":
                return A.name.toLowerCase().includes($);
              case "單位":
              case "Department":
                return A.employer.toLowerCase().includes($);
              default:
                return A.name.toLowerCase().includes($);
            }
          });
          o(L);
        }
        N(1);
      }, [h, m, n]));
    const ee = Math.ceil(l.length / Dr),
      Le = (y - 1) * Dr,
      Sn = Le + Dr,
      Bt = l.slice(Le, Sn),
      kn = (L) => {
        if (!L) return "#000000";
        const [A, $, ke] = L.split(",").map((En) => parseInt(En.trim()));
        return `rgb(${A}, ${$}, ${ke})`;
      },
      E = (L) => {
        (S(L), d(!0));
      },
      T = () => {
        (S({
          GUID: "",
          ID: "",
          name: "",
          gender: "男",
          password: "",
          employer: "",
          license: "",
          level: "01",
          color: "0, 255, 0",
          UID: "",
          barcode: "",
          face_image: "",
          finger_feature: "",
          finger_ID: "",
          open_access: "",
        }),
          p(!0));
      },
      I = (L) => {
        if (c) {
          const A = [...n, L];
          (r(A),
            o(
              A.filter(($) => {
                if (!h) return !0;
                const ke = h.toLowerCase();
                switch (m) {
                  case "人員編號":
                  case "Staff ID":
                    return $.ID.toLowerCase().includes(ke);
                  case "姓名":
                  case "Name":
                    return $.name.toLowerCase().includes(ke);
                  case "單位":
                  case "Department":
                    return $.employer.toLowerCase().includes(ke);
                  default:
                    return $.name.toLowerCase().includes(ke);
                }
              }),
            ));
        } else {
          const A = n.map(($) => ($.GUID === L.GUID ? L : $));
          (r(A),
            o(
              A.filter(($) => {
                if (!h) return !0;
                const ke = h.toLowerCase();
                switch (m) {
                  case "人員編號":
                  case "Staff ID":
                    return $.ID.toLowerCase().includes(ke);
                  case "姓名":
                  case "Name":
                    return $.name.toLowerCase().includes(ke);
                  case "單位":
                  case "Department":
                    return $.employer.toLowerCase().includes(ke);
                  default:
                    return $.name.toLowerCase().includes(ke);
                }
              }),
            ));
        }
      },
      B = (L) => {
        N(L);
        const A = document.getElementById("personnel-table");
        A && A.scrollIntoView({ behavior: "smooth", block: "start" });
      },
      J = () => {
        (_(!k), F(new Set()));
      },
      Ht = (L) => {
        const A = new Set(j);
        (A.has(L) ? A.delete(L) : A.add(L), F(A));
      },
      Ye = async () => {
        if (j.size !== 0)
          try {
            let L = Array.from(j).join(",");
            const A = await ar("/api/person_page/delete", {
              method: "POST",
              body: { ValueAry: [L] },
            });
            A.Code === 200
              ? (b({
                  message: e("personnel.deleteSuccess", { count: j.size }),
                  type: "success",
                }),
                await P(),
                _(!1),
                F(new Set()))
              : b({
                  message: A.Result || e("personnel.deleteError"),
                  type: "error",
                });
          } catch (L) {
            (console.error("Error deleting personnel:", L),
              b({ message: e("personnel.deleteError"), type: "error" }));
          }
      },
      Nn = () => {
        (_(!1), F(new Set()));
      },
      Xe = () => {
        const L = [];
        if (ee <= 5) for (let $ = 1; $ <= ee; $++) L.push($);
        else {
          const $ = Math.max(1, y - 2),
            ke = Math.min(ee, $ + 5 - 1);
          for (let En = $; En <= ke; En++) L.push(En);
        }
        return L;
      },
      Wt = () =>
        t === "en"
          ? [
              { value: "Staff ID", label: e("personnel.staffId") },
              { value: "Name", label: e("personnel.name") },
              { value: "Department", label: e("personnel.department") },
            ]
          : [
              { value: "人員編號", label: e("personnel.staffId") },
              { value: "姓名", label: e("personnel.name") },
              { value: "單位", label: e("personnel.department") },
            ];
    return i
      ? a.jsx("div", {
          className: "min-h-screen bg-white flex items-center justify-center",
          children: a.jsxs("div", {
            className: "text-center",
            children: [
              a.jsx("div", {
                className:
                  "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto",
              }),
              a.jsx("p", {
                className: "mt-4 text-lg text-gray-600",
                children: "載入人員資料中...",
              }),
            ],
          }),
        })
      : a.jsx("div", {
          className: "min-h-screen bg-white pb-24",
          children: a.jsxs("div", {
            className: "max-w-screen-xl mx-auto p-4 md:p-6 lg:p-8",
            children: [
              a.jsx("div", {
                className: "mb-8",
                children: a.jsxs("div", {
                  className:
                    "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
                  children: [
                    a.jsxs("div", {
                      className:
                        "flex flex-col sm:flex-row items-start sm:items-center gap-2",
                      children: [
                        a.jsx("div", {
                          className: "flex-shrink-0",
                          children: a.jsx("select", {
                            value: m,
                            onChange: (L) => v(L.target.value),
                            className:
                              "h-10 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white text-gray-700 transition-colors w-full sm:w-32",
                            children: Wt().map((L) =>
                              a.jsx(
                                "option",
                                { value: L.value, children: L.label },
                                L.value,
                              ),
                            ),
                          }),
                        }),
                        a.jsxs("div", {
                          className: "relative flex-shrink-0",
                          children: [
                            a.jsx("div", {
                              className:
                                "absolute left-3 top-2.5 text-gray-400 pointer-events-none",
                              children: a.jsx(ap, { size: 20 }),
                            }),
                            a.jsx("input", {
                              type: "text",
                              placeholder: e("personnel.searchPlaceholder"),
                              value: h,
                              onChange: (L) => g(L.target.value),
                              className:
                                "h-10 pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-500 transition-colors w-full sm:w-64",
                            }),
                          ],
                        }),
                      ],
                    }),
                    a.jsx("div", {
                      className: "flex-shrink-0 flex gap-3",
                      children: k
                        ? a.jsxs(a.Fragment, {
                            children: [
                              a.jsxs("button", {
                                onClick: Ye,
                                disabled: j.size === 0,
                                className: `inline-flex items-center px-4 py-2 h-10 text-white text-sm font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200 ${j.size === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700 focus:ring-red-500"}`,
                                children: [
                                  a.jsx(tu, { size: 20, className: "mr-2" }),
                                  e("personnel.deleteSelected", {
                                    count: j.size,
                                  }),
                                ],
                              }),
                              a.jsx("button", {
                                onClick: Nn,
                                className:
                                  "inline-flex items-center px-4 py-2 h-10 bg-gray-600 text-white text-sm font-medium rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200",
                                children: e("personnel.cancel"),
                              }),
                            ],
                          })
                        : a.jsxs(a.Fragment, {
                            children: [
                              a.jsxs("button", {
                                onClick: J,
                                className:
                                  "inline-flex items-center px-4 py-2 h-10 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200",
                                children: [
                                  a.jsx(tu, { size: 20, className: "mr-2" }),
                                  e("personnel.deleteStaff"),
                                ],
                              }),
                              a.jsxs("button", {
                                onClick: T,
                                className:
                                  "inline-flex items-center px-4 py-2 h-10 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",
                                children: [
                                  a.jsx(up, { size: 20, className: "mr-2" }),
                                  e("personnel.addStaff"),
                                ],
                              }),
                            ],
                          }),
                    }),
                  ],
                }),
              }),
              u &&
                a.jsx("div", {
                  className:
                    "mb-8 p-4 bg-red-50 border border-red-200 rounded-lg",
                  children: a.jsxs("div", {
                    className: "flex items-center gap-3 text-red-700",
                    children: [
                      a.jsx(Qi, { size: 20 }),
                      a.jsx("span", { children: u }),
                    ],
                  }),
                }),
              a.jsxs("div", {
                id: "personnel-table",
                className:
                  "bg-white shadow-sm border border-gray-200 rounded-xl overflow-hidden",
                children: [
                  a.jsx("div", {
                    className:
                      "px-8 py-6 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200",
                    children: a.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        a.jsx("h2", {
                          className: "text-xl font-semibold text-gray-900",
                          children: e("personnel.tableTitle"),
                        }),
                        a.jsxs("div", {
                          className: "text-sm text-gray-600",
                          children: [
                            e("personnel.totalCount", { count: l.length }),
                            l.length > Dr &&
                              a.jsxs("span", {
                                className: "ml-2",
                                children: [
                                  "(第 ",
                                  Le + 1,
                                  "-",
                                  Math.min(Sn, l.length),
                                  " 筆)",
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  a.jsx("div", {
                    className: "relative max-h-[70vh] overflow-auto",
                    children: a.jsxs("table", {
                      className: "min-w-full",
                      children: [
                        a.jsx("thead", {
                          className: "sticky top-0 z-10",
                          children: a.jsxs("tr", {
                            className:
                              "bg-gray-50 border-b border-gray-200 shadow-sm",
                            children: [
                              k &&
                                a.jsx("th", {
                                  className:
                                    "px-4 py-4 text-left text-base font-medium text-gray-700 uppercase tracking-wider bg-gray-50 w-16",
                                }),
                              a.jsx("th", {
                                className:
                                  "px-8 py-4 text-left text-base font-medium text-gray-700 uppercase tracking-wider bg-gray-50",
                                children: e("personnel.staffId"),
                              }),
                              a.jsx("th", {
                                className:
                                  "px-8 py-4 text-left text-base font-medium text-gray-700 uppercase tracking-wider bg-gray-50",
                                children: e("personnel.name"),
                              }),
                              a.jsx("th", {
                                className:
                                  "px-8 py-4 text-left text-base font-medium text-gray-700 uppercase tracking-wider bg-gray-50",
                                children: e("personnel.department"),
                              }),
                              a.jsx("th", {
                                className:
                                  "px-8 py-4 text-left text-base font-medium text-gray-700 uppercase tracking-wider bg-gray-50",
                                children: e("personnel.licenseNumber"),
                              }),
                              a.jsx("th", {
                                className:
                                  "px-8 py-4 text-left text-base font-medium text-gray-700 uppercase tracking-wider bg-gray-50",
                                children: e("personnel.permissionLevel"),
                              }),
                              a.jsx("th", {
                                className:
                                  "px-8 py-4 text-left text-base font-medium text-gray-700 uppercase tracking-wider bg-gray-50",
                                children: e("personnel.cardNumber"),
                              }),
                              a.jsx("th", {
                                className:
                                  "px-8 py-4 text-left text-base font-medium text-gray-700 uppercase tracking-wider bg-gray-50",
                                children: e("personnel.color"),
                              }),
                            ],
                          }),
                        }),
                        a.jsx("tbody", {
                          className: "bg-white",
                          children:
                            Bt.length === 0
                              ? a.jsx("tr", {
                                  children: a.jsx("td", {
                                    colSpan: k ? 8 : 7,
                                    className: "px-8 py-16 text-center",
                                    children: a.jsxs("div", {
                                      className:
                                        "flex flex-col items-center justify-center",
                                      children: [
                                        a.jsx(cp, {
                                          size: 64,
                                          className: "text-gray-300 mb-4",
                                        }),
                                        a.jsx("p", {
                                          className:
                                            "text-xl text-gray-500 mb-2",
                                          children:
                                            "沒有找到符合條件的人員資料",
                                        }),
                                        a.jsx("p", {
                                          className: "text-gray-400",
                                          children: "請嘗試調整搜尋條件",
                                        }),
                                      ],
                                    }),
                                  }),
                                })
                              : Bt.map((L, A) =>
                                  a.jsxs(
                                    "tr",
                                    {
                                      onClick: () => !k && E(L),
                                      className: `border-b border-gray-100 transition-all duration-200 ${k ? "" : "hover:bg-blue-50 cursor-pointer"} ${A % 2 === 0 ? "bg-white" : "bg-gray-50/30"}`,
                                      children: [
                                        k &&
                                          a.jsx("td", {
                                            className: "px-4 py-6",
                                            onClick: ($) => $.stopPropagation(),
                                            children: a.jsx("input", {
                                              type: "checkbox",
                                              checked: j.has(L.GUID),
                                              onChange: () => Ht(L.GUID),
                                              className:
                                                "w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500 cursor-pointer",
                                            }),
                                          }),
                                        a.jsx("td", {
                                          className: "px-8 py-6",
                                          children: a.jsx("div", {
                                            className:
                                              "text-base font-semibold text-gray-900",
                                            children: L.ID,
                                          }),
                                        }),
                                        a.jsx("td", {
                                          className: "px-8 py-6",
                                          children: a.jsxs("div", {
                                            className: "flex flex-col",
                                            children: [
                                              a.jsx("div", {
                                                className:
                                                  "text-base font-semibold text-gray-900",
                                                children: L.name,
                                              }),
                                              a.jsx("div", {
                                                className:
                                                  "text-sm text-gray-500 mt-1",
                                                children: L.gender,
                                              }),
                                            ],
                                          }),
                                        }),
                                        a.jsx("td", {
                                          className: "px-8 py-6",
                                          children: a.jsx("div", {
                                            className:
                                              "text-base text-gray-900",
                                            children: L.employer,
                                          }),
                                        }),
                                        a.jsx("td", {
                                          className: "px-8 py-6",
                                          children: a.jsx("div", {
                                            className:
                                              "text-base text-gray-900",
                                            children:
                                              L.license ||
                                              a.jsx("span", {
                                                className:
                                                  "text-gray-400 italic",
                                                children: "未設定",
                                              }),
                                          }),
                                        }),
                                        a.jsx("td", {
                                          className: "px-8 py-6",
                                          children: a.jsx("span", {
                                            className:
                                              "inline-flex px-3 py-1 text-base font-semibold text-gray-900 bg-gray-100 rounded-full border border-gray-200",
                                            children: L.level,
                                          }),
                                        }),
                                        a.jsx("td", {
                                          className: "px-8 py-6",
                                          children: a.jsx("div", {
                                            className:
                                              "text-base text-gray-900 font-mono bg-gray-100 px-2 py-1 rounded",
                                            children:
                                              L.UID ||
                                              a.jsx("span", {
                                                className:
                                                  "text-gray-400 italic font-sans",
                                                children: "未設定",
                                              }),
                                          }),
                                        }),
                                        a.jsx("td", {
                                          className: "px-8 py-6",
                                          children: a.jsx("div", {
                                            className:
                                              "w-12 h-12 rounded-lg border-2 border-gray-300 shadow-sm",
                                            style: {
                                              backgroundColor: kn(L.color),
                                            },
                                            title: `RGB: ${L.color}`,
                                          }),
                                        }),
                                      ],
                                    },
                                    L.GUID,
                                  ),
                                ),
                        }),
                      ],
                    }),
                  }),
                  ee > 1 &&
                    a.jsx("div", {
                      className:
                        "px-8 py-6 bg-gray-50 border-t border-gray-200",
                      children: a.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          a.jsxs("div", {
                            className: "text-sm text-gray-700",
                            children: [
                              "顯示第 ",
                              a.jsx("span", {
                                className: "font-medium",
                                children: Le + 1,
                              }),
                              " 到",
                              " ",
                              a.jsx("span", {
                                className: "font-medium",
                                children: Math.min(Sn, l.length),
                              }),
                              " 筆， 共 ",
                              a.jsx("span", {
                                className: "font-medium",
                                children: l.length,
                              }),
                              " 筆資料",
                            ],
                          }),
                          a.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              a.jsx("button", {
                                onClick: () => B(y - 1),
                                disabled: y === 1,
                                className: `p-2 rounded-lg border transition-colors ${y === 1 ? "border-gray-200 text-gray-400 cursor-not-allowed" : "border-gray-300 text-gray-700 hover:bg-gray-100"}`,
                                children: a.jsx(tp, { size: 20 }),
                              }),
                              a.jsx("div", {
                                className: "flex items-center gap-1",
                                children: Xe().map((L) =>
                                  a.jsx(
                                    "button",
                                    {
                                      onClick: () => B(L),
                                      className: `px-3 py-2 rounded-lg border text-sm font-medium transition-colors ${L === y ? "border-blue-500 bg-blue-500 text-white" : "border-gray-300 text-gray-700 hover:bg-gray-100"}`,
                                      children: L,
                                    },
                                    L,
                                  ),
                                ),
                              }),
                              a.jsx("button", {
                                onClick: () => B(y + 1),
                                disabled: y === ee,
                                className: `p-2 rounded-lg border transition-colors ${y === ee ? "border-gray-200 text-gray-400 cursor-not-allowed" : "border-gray-300 text-gray-700 hover:bg-gray-100"}`,
                                children: a.jsx(np, { size: 20 }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                ],
              }),
              a.jsx(ru, {
                isOpen: O,
                onClose: () => d(!1),
                personnel: w,
                onSave: I,
                title: e("personnel.editTitle"),
              }),
              a.jsx(ru, {
                isOpen: c,
                onClose: () => p(!1),
                personnel: w,
                onSave: I,
                title: e("personnel.addTitle"),
              }),
              D &&
                a.jsx(kc, {
                  message: D.message,
                  type: D.type,
                  onClose: () => b(null),
                }),
            ],
          }),
        });
  };
function Cp() {
  jt();
  const [e, t] = z.useState(!1),
    [n, r] = z.useState(!0),
    [l, o] = z.useState(!1),
    [i, s] = z.useState(!1),
    [u, f] = z.useState("");
  z.useEffect(() => {
    (async () => {
      try {
        (await yp(), o(!0));
        const v = mp();
        t(v);
      } catch (v) {
        (console.error("Error during initialization:", v),
          g("系統初始化失敗，請重新整理頁面"));
      } finally {
        r(!1);
      }
    })();
  }, []);
  const h = () => {
      (hl(), t(!1));
    },
    g = (m) => {
      (f(m), s(!0));
    };
  return n
    ? a.jsx("div", {
        className: "min-h-screen bg-white flex items-center justify-center",
        children: a.jsxs("div", {
          className: "text-center",
          children: [
            a.jsx("div", {
              className:
                "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto",
            }),
            a.jsx("p", {
              className: "mt-2 text-base text-gray-600",
              children: "載入中...",
            }),
          ],
        }),
      })
    : e
      ? a.jsxs("div", {
          className: "min-h-screen flex flex-col",
          children: [
            a.jsx(Sp, { onLogout: h }),
            i && a.jsx(kc, { message: u, onClose: () => s(!1), duration: 3e3 }),
            a.jsx("main", { className: "flex-grow", children: a.jsx(Ep, {}) }),
            a.jsx(kp, {}),
          ],
        })
      : a.jsx(Np, { onLogin: () => t(!0) });
}
yc(document.getElementById("root")).render(
  a.jsx(z.StrictMode, { children: a.jsx(Zf, { children: a.jsx(Cp, {}) }) }),
);
